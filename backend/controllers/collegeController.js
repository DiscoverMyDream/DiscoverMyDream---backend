import asyncHandler from "express-async-handler";
import College from "../models/collegeModel.js";

// @desc    Fetch all colleges
// @route   GET /api/colleges
// @access  Public

const getColleges = asyncHandler(async (req, res) => {
  const pageSize = 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword 
  ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    },
    /*authors: {
      $regex: req.query.keyword,
      $options: 'i'

    }*/

  } : {}

  const count = await College.countDocuments({ ...keyword })
  const colleges = await College.find({ ...keyword }).limit(pageSize)
  .skip(pageSize * (page - 1))
  res.json({ colleges, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single College
// @route   GET /api/colleges/:id
// @access  Public

const getCollegeById = asyncHandler(async (req, res) => {
  const college = await Product.findById(req.params.id);

  if (college) {
    res.json(college);
  } else {
    res.status(404);
    throw new Error("College Not Found");
  }
});

// @desc    Delete a college
// @route   DELETE /api/colleges/:id
// @access  Private/Admin
const deleteCollege = asyncHandler(async (req, res) => {
  const college = await College.findById(req.params.id);

  if (college) {
    await college.remove();
    res.json({ message: "College removed" });
  } else {
    res.status(404);
    throw new Error("College not found");
  }
});

// @desc    Create a college
// @route   POST /api/colleges
// @access  Private/Admin
const createCollege = asyncHandler(async (req, res) => {
  const college = new College({
    name: "Sample name",
    user: req.user._id,
    image: "/images/sample.jpg",
    description: "Sample description",
  });

  const createdCollege = await college.save();
  res.status(201).json(createdCollege);
});

// @desc    Update a college
// @route   PUT /api/colleges/:id
// @access  Private/Admin
const updateCollege = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    image,
  } = req.body;

  const college = await College.findById(req.params.id);

  if (college) {
    college.name = name;
    college.description = description;
    college.image = image;

    const updatedCollege = await college.save();
    res.json(updatedCollege);
  } else {
    res.status(404);
    throw new Error("College not found");
  }
});

export {
  getColleges,
  getCollegeById,
  deleteCollege,
  createCollege,
  updateCollege,
};
