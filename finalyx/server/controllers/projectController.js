const Project = require("../models/Project");

const getProjects = async (req, res) => {
    const projects = await Project.find();

    res.status(200).json(projects);
};

const createProject = async (req, res) => {
    const project = await Project.create(req.body); //it is use to communicate with mongodb controllers handle the request and this project.create is use specifcally for database operation

    res.status(201).json(project);
};
const getProject = async(req,res) =>{
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
}
const updateProject = async(req,res) =>{
    const project = await Project.findByIdAndUpdate(req.params.id,req.body,{new:true});   //req.params.id is use tell about wchich project should MongiDb update , req.body what should be updated and {new:true} is use to tell that mongodb updates the document but return the older version
    res.status(200).json(project);
}
const deleteProject = async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message: "Project deleted successfully",
    });
};
module.exports = {
    getProjects,
    createProject,
    getProject,
    updateProject,
    deleteProject,  //api function code export to another file 
};