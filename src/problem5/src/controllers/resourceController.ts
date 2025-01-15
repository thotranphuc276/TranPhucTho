import {Request, Response} from "express";
import Resource from "../models/resource";

export const createResource = async (req: Request, res: Response) => {
    try {
        const resource = await Resource.create(req.body);
        res.status(201).json(resource);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const listResources = async (req: Request, res: Response) => {
    try {
        const resources = await Resource.findAll();
        res.status(200).json(resources);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

export const getResource = async (req: Request, res: Response) => {
    try {
        const resource = await Resource.findByPk(req.params.id);
        if (resource) {
            res.status(200).json(resource);
        } else {
            res.status(404).json({error: "Resource not found"});
        }
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

export const updateResource = async (req: Request, res: Response) => {
    try {
        const [updated] = await Resource.update(req.body, {
            where: {id: req.params.id},
        });
        if (updated) {
            const updatedResource = await Resource.findByPk(req.params.id);
            res.status(200).json(updatedResource);
        } else {
            res.status(404).json({error: "Resource not found"});
        }
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const deleteResource = async (req: Request, res: Response) => {
    try {
        const deleted = await Resource.destroy({
            where: {id: req.params.id},
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({error: "Resource not found"});
        }
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};
