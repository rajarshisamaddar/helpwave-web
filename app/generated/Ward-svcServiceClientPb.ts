/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: ward-svc.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ward$svc_pb from './ward-svc_pb';


export class WardServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateWard = new grpcWeb.MethodDescriptor(
    '/WardService/CreateWard',
    grpcWeb.MethodType.UNARY,
    ward$svc_pb.CreateWardRequest,
    ward$svc_pb.CreateWardResponse,
    (request: ward$svc_pb.CreateWardRequest) => {
      return request.serializeBinary();
    },
    ward$svc_pb.CreateWardResponse.deserializeBinary
  );

  createWard(
    request: ward$svc_pb.CreateWardRequest,
    metadata: grpcWeb.Metadata | null): Promise<ward$svc_pb.CreateWardResponse>;

  createWard(
    request: ward$svc_pb.CreateWardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ward$svc_pb.CreateWardResponse) => void): grpcWeb.ClientReadableStream<ward$svc_pb.CreateWardResponse>;

  createWard(
    request: ward$svc_pb.CreateWardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ward$svc_pb.CreateWardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/WardService/CreateWard',
        request,
        metadata || {},
        this.methodDescriptorCreateWard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WardService/CreateWard',
    request,
    metadata || {},
    this.methodDescriptorCreateWard);
  }

  methodDescriptorGetWard = new grpcWeb.MethodDescriptor(
    '/WardService/GetWard',
    grpcWeb.MethodType.UNARY,
    ward$svc_pb.GetWardRequest,
    ward$svc_pb.GetWardResponse,
    (request: ward$svc_pb.GetWardRequest) => {
      return request.serializeBinary();
    },
    ward$svc_pb.GetWardResponse.deserializeBinary
  );

  getWard(
    request: ward$svc_pb.GetWardRequest,
    metadata: grpcWeb.Metadata | null): Promise<ward$svc_pb.GetWardResponse>;

  getWard(
    request: ward$svc_pb.GetWardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ward$svc_pb.GetWardResponse) => void): grpcWeb.ClientReadableStream<ward$svc_pb.GetWardResponse>;

  getWard(
    request: ward$svc_pb.GetWardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ward$svc_pb.GetWardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/WardService/GetWard',
        request,
        metadata || {},
        this.methodDescriptorGetWard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WardService/GetWard',
    request,
    metadata || {},
    this.methodDescriptorGetWard);
  }

  methodDescriptorUpdateWard = new grpcWeb.MethodDescriptor(
    '/WardService/UpdateWard',
    grpcWeb.MethodType.UNARY,
    ward$svc_pb.UpdateWardRequest,
    ward$svc_pb.UpdateWardResponse,
    (request: ward$svc_pb.UpdateWardRequest) => {
      return request.serializeBinary();
    },
    ward$svc_pb.UpdateWardResponse.deserializeBinary
  );

  updateWard(
    request: ward$svc_pb.UpdateWardRequest,
    metadata: grpcWeb.Metadata | null): Promise<ward$svc_pb.UpdateWardResponse>;

  updateWard(
    request: ward$svc_pb.UpdateWardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ward$svc_pb.UpdateWardResponse) => void): grpcWeb.ClientReadableStream<ward$svc_pb.UpdateWardResponse>;

  updateWard(
    request: ward$svc_pb.UpdateWardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ward$svc_pb.UpdateWardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/WardService/UpdateWard',
        request,
        metadata || {},
        this.methodDescriptorUpdateWard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WardService/UpdateWard',
    request,
    metadata || {},
    this.methodDescriptorUpdateWard);
  }

}

