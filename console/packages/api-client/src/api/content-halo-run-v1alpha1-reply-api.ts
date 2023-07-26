/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { Reply } from "../models";
// @ts-ignore
import { ReplyList } from "../models";
/**
 * ContentHaloRunV1alpha1ReplyApi - axios parameter creator
 * @export
 */
export const ContentHaloRunV1alpha1ReplyApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create content.halo.run/v1alpha1/Reply
     * @param {Reply} [reply] Fresh reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createcontentHaloRunV1alpha1Reply: async (
      reply?: Reply,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/content.halo.run/v1alpha1/replies`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        reply,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete content.halo.run/v1alpha1/Reply
     * @param {string} name Name of reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletecontentHaloRunV1alpha1Reply: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("deletecontentHaloRunV1alpha1Reply", "name", name);
      const localVarPath =
        `/apis/content.halo.run/v1alpha1/replies/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get content.halo.run/v1alpha1/Reply
     * @param {string} name Name of reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getcontentHaloRunV1alpha1Reply: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getcontentHaloRunV1alpha1Reply", "name", name);
      const localVarPath =
        `/apis/content.halo.run/v1alpha1/replies/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List content.halo.run/v1alpha1/Reply
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [sort] Sort property and direction of the list result. Support sorting based on attribute name path.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listcontentHaloRunV1alpha1Reply: async (
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      sort?: Array<string>,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/content.halo.run/v1alpha1/replies`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (fieldSelector) {
        localVarQueryParameter["fieldSelector"] = fieldSelector;
      }

      if (labelSelector) {
        localVarQueryParameter["labelSelector"] = labelSelector;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (size !== undefined) {
        localVarQueryParameter["size"] = size;
      }

      if (sort) {
        localVarQueryParameter["sort"] = Array.from(sort);
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update content.halo.run/v1alpha1/Reply
     * @param {string} name Name of reply
     * @param {Reply} [reply] Updated reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatecontentHaloRunV1alpha1Reply: async (
      name: string,
      reply?: Reply,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("updatecontentHaloRunV1alpha1Reply", "name", name);
      const localVarPath =
        `/apis/content.halo.run/v1alpha1/replies/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        reply,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ContentHaloRunV1alpha1ReplyApi - functional programming interface
 * @export
 */
export const ContentHaloRunV1alpha1ReplyApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    ContentHaloRunV1alpha1ReplyApiAxiosParamCreator(configuration);
  return {
    /**
     * Create content.halo.run/v1alpha1/Reply
     * @param {Reply} [reply] Fresh reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createcontentHaloRunV1alpha1Reply(
      reply?: Reply,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reply>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createcontentHaloRunV1alpha1Reply(
          reply,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete content.halo.run/v1alpha1/Reply
     * @param {string} name Name of reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletecontentHaloRunV1alpha1Reply(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletecontentHaloRunV1alpha1Reply(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get content.halo.run/v1alpha1/Reply
     * @param {string} name Name of reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getcontentHaloRunV1alpha1Reply(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reply>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getcontentHaloRunV1alpha1Reply(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List content.halo.run/v1alpha1/Reply
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [sort] Sort property and direction of the list result. Support sorting based on attribute name path.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listcontentHaloRunV1alpha1Reply(
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      sort?: Array<string>,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReplyList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listcontentHaloRunV1alpha1Reply(
          fieldSelector,
          labelSelector,
          page,
          size,
          sort,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update content.halo.run/v1alpha1/Reply
     * @param {string} name Name of reply
     * @param {Reply} [reply] Updated reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatecontentHaloRunV1alpha1Reply(
      name: string,
      reply?: Reply,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reply>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatecontentHaloRunV1alpha1Reply(
          name,
          reply,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * ContentHaloRunV1alpha1ReplyApi - factory interface
 * @export
 */
export const ContentHaloRunV1alpha1ReplyApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ContentHaloRunV1alpha1ReplyApiFp(configuration);
  return {
    /**
     * Create content.halo.run/v1alpha1/Reply
     * @param {ContentHaloRunV1alpha1ReplyApiCreatecontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createcontentHaloRunV1alpha1Reply(
      requestParameters: ContentHaloRunV1alpha1ReplyApiCreatecontentHaloRunV1alpha1ReplyRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<Reply> {
      return localVarFp
        .createcontentHaloRunV1alpha1Reply(requestParameters.reply, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete content.halo.run/v1alpha1/Reply
     * @param {ContentHaloRunV1alpha1ReplyApiDeletecontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletecontentHaloRunV1alpha1Reply(
      requestParameters: ContentHaloRunV1alpha1ReplyApiDeletecontentHaloRunV1alpha1ReplyRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deletecontentHaloRunV1alpha1Reply(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get content.halo.run/v1alpha1/Reply
     * @param {ContentHaloRunV1alpha1ReplyApiGetcontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getcontentHaloRunV1alpha1Reply(
      requestParameters: ContentHaloRunV1alpha1ReplyApiGetcontentHaloRunV1alpha1ReplyRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Reply> {
      return localVarFp
        .getcontentHaloRunV1alpha1Reply(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List content.halo.run/v1alpha1/Reply
     * @param {ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listcontentHaloRunV1alpha1Reply(
      requestParameters: ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1ReplyRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<ReplyList> {
      return localVarFp
        .listcontentHaloRunV1alpha1Reply(
          requestParameters.fieldSelector,
          requestParameters.labelSelector,
          requestParameters.page,
          requestParameters.size,
          requestParameters.sort,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update content.halo.run/v1alpha1/Reply
     * @param {ContentHaloRunV1alpha1ReplyApiUpdatecontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatecontentHaloRunV1alpha1Reply(
      requestParameters: ContentHaloRunV1alpha1ReplyApiUpdatecontentHaloRunV1alpha1ReplyRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Reply> {
      return localVarFp
        .updatecontentHaloRunV1alpha1Reply(
          requestParameters.name,
          requestParameters.reply,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createcontentHaloRunV1alpha1Reply operation in ContentHaloRunV1alpha1ReplyApi.
 * @export
 * @interface ContentHaloRunV1alpha1ReplyApiCreatecontentHaloRunV1alpha1ReplyRequest
 */
export interface ContentHaloRunV1alpha1ReplyApiCreatecontentHaloRunV1alpha1ReplyRequest {
  /**
   * Fresh reply
   * @type {Reply}
   * @memberof ContentHaloRunV1alpha1ReplyApiCreatecontentHaloRunV1alpha1Reply
   */
  readonly reply?: Reply;
}

/**
 * Request parameters for deletecontentHaloRunV1alpha1Reply operation in ContentHaloRunV1alpha1ReplyApi.
 * @export
 * @interface ContentHaloRunV1alpha1ReplyApiDeletecontentHaloRunV1alpha1ReplyRequest
 */
export interface ContentHaloRunV1alpha1ReplyApiDeletecontentHaloRunV1alpha1ReplyRequest {
  /**
   * Name of reply
   * @type {string}
   * @memberof ContentHaloRunV1alpha1ReplyApiDeletecontentHaloRunV1alpha1Reply
   */
  readonly name: string;
}

/**
 * Request parameters for getcontentHaloRunV1alpha1Reply operation in ContentHaloRunV1alpha1ReplyApi.
 * @export
 * @interface ContentHaloRunV1alpha1ReplyApiGetcontentHaloRunV1alpha1ReplyRequest
 */
export interface ContentHaloRunV1alpha1ReplyApiGetcontentHaloRunV1alpha1ReplyRequest {
  /**
   * Name of reply
   * @type {string}
   * @memberof ContentHaloRunV1alpha1ReplyApiGetcontentHaloRunV1alpha1Reply
   */
  readonly name: string;
}

/**
 * Request parameters for listcontentHaloRunV1alpha1Reply operation in ContentHaloRunV1alpha1ReplyApi.
 * @export
 * @interface ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1ReplyRequest
 */
export interface ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1ReplyRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1Reply
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1Reply
   */
  readonly labelSelector?: Array<string>;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1Reply
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1Reply
   */
  readonly size?: number;

  /**
   * Sort property and direction of the list result. Support sorting based on attribute name path.
   * @type {Array<string>}
   * @memberof ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1Reply
   */
  readonly sort?: Array<string>;
}

/**
 * Request parameters for updatecontentHaloRunV1alpha1Reply operation in ContentHaloRunV1alpha1ReplyApi.
 * @export
 * @interface ContentHaloRunV1alpha1ReplyApiUpdatecontentHaloRunV1alpha1ReplyRequest
 */
export interface ContentHaloRunV1alpha1ReplyApiUpdatecontentHaloRunV1alpha1ReplyRequest {
  /**
   * Name of reply
   * @type {string}
   * @memberof ContentHaloRunV1alpha1ReplyApiUpdatecontentHaloRunV1alpha1Reply
   */
  readonly name: string;

  /**
   * Updated reply
   * @type {Reply}
   * @memberof ContentHaloRunV1alpha1ReplyApiUpdatecontentHaloRunV1alpha1Reply
   */
  readonly reply?: Reply;
}

/**
 * ContentHaloRunV1alpha1ReplyApi - object-oriented interface
 * @export
 * @class ContentHaloRunV1alpha1ReplyApi
 * @extends {BaseAPI}
 */
export class ContentHaloRunV1alpha1ReplyApi extends BaseAPI {
  /**
   * Create content.halo.run/v1alpha1/Reply
   * @param {ContentHaloRunV1alpha1ReplyApiCreatecontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ContentHaloRunV1alpha1ReplyApi
   */
  public createcontentHaloRunV1alpha1Reply(
    requestParameters: ContentHaloRunV1alpha1ReplyApiCreatecontentHaloRunV1alpha1ReplyRequest = {},
    options?: AxiosRequestConfig
  ) {
    return ContentHaloRunV1alpha1ReplyApiFp(this.configuration)
      .createcontentHaloRunV1alpha1Reply(requestParameters.reply, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete content.halo.run/v1alpha1/Reply
   * @param {ContentHaloRunV1alpha1ReplyApiDeletecontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ContentHaloRunV1alpha1ReplyApi
   */
  public deletecontentHaloRunV1alpha1Reply(
    requestParameters: ContentHaloRunV1alpha1ReplyApiDeletecontentHaloRunV1alpha1ReplyRequest,
    options?: AxiosRequestConfig
  ) {
    return ContentHaloRunV1alpha1ReplyApiFp(this.configuration)
      .deletecontentHaloRunV1alpha1Reply(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get content.halo.run/v1alpha1/Reply
   * @param {ContentHaloRunV1alpha1ReplyApiGetcontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ContentHaloRunV1alpha1ReplyApi
   */
  public getcontentHaloRunV1alpha1Reply(
    requestParameters: ContentHaloRunV1alpha1ReplyApiGetcontentHaloRunV1alpha1ReplyRequest,
    options?: AxiosRequestConfig
  ) {
    return ContentHaloRunV1alpha1ReplyApiFp(this.configuration)
      .getcontentHaloRunV1alpha1Reply(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List content.halo.run/v1alpha1/Reply
   * @param {ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ContentHaloRunV1alpha1ReplyApi
   */
  public listcontentHaloRunV1alpha1Reply(
    requestParameters: ContentHaloRunV1alpha1ReplyApiListcontentHaloRunV1alpha1ReplyRequest = {},
    options?: AxiosRequestConfig
  ) {
    return ContentHaloRunV1alpha1ReplyApiFp(this.configuration)
      .listcontentHaloRunV1alpha1Reply(
        requestParameters.fieldSelector,
        requestParameters.labelSelector,
        requestParameters.page,
        requestParameters.size,
        requestParameters.sort,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update content.halo.run/v1alpha1/Reply
   * @param {ContentHaloRunV1alpha1ReplyApiUpdatecontentHaloRunV1alpha1ReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ContentHaloRunV1alpha1ReplyApi
   */
  public updatecontentHaloRunV1alpha1Reply(
    requestParameters: ContentHaloRunV1alpha1ReplyApiUpdatecontentHaloRunV1alpha1ReplyRequest,
    options?: AxiosRequestConfig
  ) {
    return ContentHaloRunV1alpha1ReplyApiFp(this.configuration)
      .updatecontentHaloRunV1alpha1Reply(
        requestParameters.name,
        requestParameters.reply,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
