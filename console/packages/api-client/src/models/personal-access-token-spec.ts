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

/**
 *
 * @export
 * @interface PersonalAccessTokenSpec
 */
export interface PersonalAccessTokenSpec {
  /**
   *
   * @type {string}
   * @memberof PersonalAccessTokenSpec
   */
  displayName?: string;
  /**
   *
   * @type {string}
   * @memberof PersonalAccessTokenSpec
   */
  expiresAt?: string;
  /**
   *
   * @type {boolean}
   * @memberof PersonalAccessTokenSpec
   */
  revoked?: boolean;
  /**
   *
   * @type {string}
   * @memberof PersonalAccessTokenSpec
   */
  scopes?: string;
  /**
   *
   * @type {string}
   * @memberof PersonalAccessTokenSpec
   */
  tokenDigest?: string;
  /**
   *
   * @type {string}
   * @memberof PersonalAccessTokenSpec
   */
  userName?: string;
}
