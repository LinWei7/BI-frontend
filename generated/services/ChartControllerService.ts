/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_BiResponse_ } from '../models/BaseResponse_BiResponse_';
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_Chart_ } from '../models/BaseResponse_Chart_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_Chart_ } from '../models/BaseResponse_Page_Chart_';
import type { ChartAddRequest } from '../models/ChartAddRequest';
import type { ChartEditRequest } from '../models/ChartEditRequest';
import type { ChartQueryRequest } from '../models/ChartQueryRequest';
import type { ChartUpdateRequest } from '../models/ChartUpdateRequest';
import type { DeleteRequest } from '../models/DeleteRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChartControllerService {
  /**
   * addChart
   * @param chartAddRequest chartAddRequest
   * @returns BaseResponse_long_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static addChartUsingPost(
    chartAddRequest: ChartAddRequest
  ): CancelablePromise<BaseResponse_long_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/chart/add',
      body: chartAddRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteChart
   * @param deleteRequest deleteRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static deleteChartUsingPost(
    deleteRequest: DeleteRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/chart/delete',
      body: deleteRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * editChart
   * @param chartEditRequest chartEditRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static editChartUsingPost(
    chartEditRequest: ChartEditRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/chart/edit',
      body: chartEditRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * genChartByAi
   * @param file
   * @param chartType
   * @param goal
   * @param name
   * @returns BaseResponse_BiResponse_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static genChartByAiUsingPost(
    file?: Blob,
    chartType?: string,
    goal?: string,
    name?: string
  ): CancelablePromise<BaseResponse_BiResponse_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/chart/gen',
      query: {
        chartType: chartType,
        goal: goal,
        name: name,
      },
      formData: {
        file: file,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * genChartByAiAsync
   * @param file
   * @param chartType
   * @param goal
   * @param name
   * @returns BaseResponse_BiResponse_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static genChartByAiAsyncUsingPost(
    file?: Blob,
    chartType?: string,
    goal?: string,
    name?: string
  ): CancelablePromise<BaseResponse_BiResponse_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/chart/gen/async',
      query: {
        chartType: chartType,
        goal: goal,
        name: name,
      },
      formData: {
        file: file,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * genChartByAiAsyncMq
   * @param file
   * @param chartType
   * @param goal
   * @param name
   * @returns BaseResponse_BiResponse_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static genChartByAiAsyncMqUsingPost(
    file?: Blob,
    chartType?: string,
    goal?: string,
    name?: string
  ): CancelablePromise<BaseResponse_BiResponse_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/chart/gen/async/mq',
      query: {
        chartType: chartType,
        goal: goal,
        name: name,
      },
      formData: {
        file: file,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getChartById
   * @param id id
   * @returns BaseResponse_Chart_ OK
   * @throws ApiError
   */
  public static getChartByIdUsingGet(
    id?: number
  ): CancelablePromise<BaseResponse_Chart_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/chart/get',
      query: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listChartByPage
   * @param chartQueryRequest chartQueryRequest
   * @returns BaseResponse_Page_Chart_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listChartByPageUsingPost(
    chartQueryRequest: ChartQueryRequest
  ): CancelablePromise<BaseResponse_Page_Chart_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/chart/list/page',
      body: chartQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listMyChartByPage
   * @param chartQueryRequest chartQueryRequest
   * @returns BaseResponse_Page_Chart_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listMyChartByPageUsingPost(
    chartQueryRequest: ChartQueryRequest
  ): CancelablePromise<BaseResponse_Page_Chart_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/chart/my/list/page',
      body: chartQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateChart
   * @param chartUpdateRequest chartUpdateRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateChartUsingPost(
    chartUpdateRequest: ChartUpdateRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/chart/update',
      body: chartUpdateRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
