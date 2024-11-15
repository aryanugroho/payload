/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SharedMetaArray".
 */
export type SharedMetaArray =
  | {
      title?: string | null;
      description?: string | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    collection1: Collection1;
    collection2: Collection2;
    'no-graphql': NoGraphql;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collection1".
 */
export interface Collection1 {
  id: string;
  testing: string;
  title: string;
  meta?: SharedMetaArray;
  blocks: (SharedMetaBlock | AnotherSharedBlock)[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SharedMetaBlock".
 */
export interface SharedMetaBlock {
  b1title: string;
  b1description?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'block1';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AnotherSharedBlock".
 */
export interface AnotherSharedBlock {
  b2title: string;
  b2description?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'block2';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collection2".
 */
export interface Collection2 {
  id: string;
  metaArray?: SharedMetaArray;
  metaGroup?: SharedMeta;
  nestedGroup?: {
    meta?: SharedMeta;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SharedMeta".
 */
export interface SharedMeta {
  title?: string | null;
  description?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "no-graphql".
 */
export interface NoGraphql {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}