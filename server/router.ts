interface ApiRouters {
  prefix: string;
  route: any;
}

import SwaggerTest, { BASE_URL } from "./mock/swagger-test";

/**
 * add router here
 */
const apiRouter: ApiRouters[] = [
  {
    prefix: BASE_URL,
    route: SwaggerTest,
  },
];

export default apiRouter;
