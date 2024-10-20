import 'server-only';
import dotenv from 'dotenv';
import {expand} from "dotenv-expand";

expand(dotenv.config())

export async function getProjects() {
    const projects = await fetch(process.env.API_BASE_URL + '/project', {method: 'GET'})
    return projects.ok ? await projects.json() : null;
}

export async function getProjectById(projectId) {
    const project = await fetch(process.env.API_BASE_URL + '/project/' + projectId, {method: 'GET'});
    return project.ok ? await project.json() : null;
}

export async function createProject(project) {
    const projectRes = await fetch(process.env.API_BASE_URL + '/project/' + project.id, {method: 'POST', body: JSON.stringify(project)});
    return projectRes.ok;
}

export async function deleteProject(projectId) {
    const project = await fetch(process.env.API_BASE_URL + '/project/' + projectId, {method: 'DELETE'});
    return project.ok;
}

export async function updateProject(project) {
    const projectRes = await fetch(process.env.API_BASE_URL + '/project/' , {method: 'PUT', body: JSON.stringify(project)});
    return projectRes.ok;
}

