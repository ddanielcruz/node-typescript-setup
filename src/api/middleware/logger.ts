import { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'

export const logger = () => {
  const { NODE_ENV, MORGAN_MODE } = process.env

  if (NODE_ENV === 'test' || MORGAN_MODE === 'none') {
    return (_req: Request, _res: Response, next: NextFunction) => next()
  }

  return morgan(MORGAN_MODE || 'dev')
}
