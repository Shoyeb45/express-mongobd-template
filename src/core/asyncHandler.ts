import { Request, Response, NextFunction } from "express";

type AsyncFunction<Req extends Request = Request> = (
    req: Req,
    res: Response,
    next: NextFunction
) => Promise<any>;

export function asyncHandler<Req extends Request = Request>(
    execution: AsyncFunction<Req>
) {
    return (req: Request, res: Response, next: NextFunction) => {
        execution(req as Req, res, next).catch(next);
    };
}
