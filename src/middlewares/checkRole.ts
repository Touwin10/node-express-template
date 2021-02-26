import { NextFunction, Request, Response } from "express";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {

    //Get user role from the database
    try {
      //
    } catch (id) {
      res.status(401).send();
    }

    //Check if array of authorized roles includes the user's role
    //if (roles.indexOf(user.role) > -1) next();
    //else res.status(401).send();
  };
};
