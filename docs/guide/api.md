# chain-privacy API

### 标签

- SMC 管理 : Ocdpp Smc Controller
- 字典管理 : Ocdpp Dict Controller
- 机构管理 : Ocdpp Org Controller
- 用户管理 : Ocdpp User Controller
- 登陆管理 : Ocdpp Login Controller
- 算法管理 : Ocdpp Algo Controller
- 群环管理 : Ocdpp Group Controller
- 节点调用 : Ocdpp Invoke Controller
- 证书管理 : Ocdpp Crypto Controller
- 资源管理 : Ocdpp Resource Controller

## SMC 管理

## 查询 SMC 协议执行状态分页列表

```
GET /smc/exec/status-pages
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Query**  | **execNo** <br>_可选_   | 执行编号 | string          |
| **Query**  | **pageNum** <br>_必填_  | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数 | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                                      |
| --------- | -------- | ------------------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«SmcExecStatusPageRes»»](#9b59af9b3c8d7cc6761254a5a3239165) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/smc/exec/status-pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "execNo" : "string",
  "pageNum" : 0,
  "pageSize" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "createUser" : "string",
      "execDesc" : "string",
      "execId" : 0,
      "execNo" : "string",
      "execStatus" : 0,
      "prtoId" : "string",
      "prtoName" : "string"
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 查询待处理 SMC 协议分页列表

```
GET /smc/exec/todo-pages
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Query**  | **execNo** <br>_可选_   | 执行编号 | string          |
| **Query**  | **pageNum** <br>_必填_  | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数 | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                                    |
| --------- | -------- | ----------------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«SmcExecTodoPageRes»»](#533587acf889bf83fd89fb36a40525f4) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/smc/exec/todo-pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "execNo" : "string",
  "pageNum" : 0,
  "pageSize" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "createUser" : "string",
      "execDesc" : "string",
      "execId" : 0,
      "execNo" : "string",
      "execSrcOrg" : "string",
      "execStatus" : 0,
      "prtoId" : "string",
      "prtoName" : "string"
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 新增协议

```
POST /smc/prto/add
```

##### 参数

| 类型       | 名称                 | 说明  | 类型                                    |
| ---------- | -------------------- | ----- | --------------------------------------- |
| **Header** | **token** <br>_必填_ | token | string                                  |
| **Body**   | **param** <br>_必填_ | param | [SmcProtocolAddReq](#smcprotocoladdreq) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 新增成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/smc/prto/add
```

###### 请求 header

```
json :
"string"
```

###### 请求 body

```
json :
{
  "prtoCfgSecure" : "string",
  "prtoCfgService" : "string",
  "prtoDesc" : "string",
  "prtoId" : "string",
  "prtoInputs" : [ {
    "paramDesc" : "string",
    "paramName" : "string",
    "required" : 0,
    "type" : "string",
    "verif" : 0
  } ],
  "prtoName" : "string",
  "prtoOutputs" : [ {
    "paramDesc" : "string",
    "paramName" : "string",
    "required" : 0,
    "type" : "string",
    "verif" : 0
  } ]
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 审核 SMC 协议

```
PUT /smc/prto/approve-action
```

##### 参数

| 类型       | 名称                      | 说明                            | 类型            |
| ---------- | ------------------------- | ------------------------------- | --------------- |
| **Header** | **token** <br>_必填_      | token                           | string          |
| **Query**  | **prtoId** <br>_必填_     | 协议 ID                         | string          |
| **Query**  | **prtoStatus** <br>_必填_ | prtoStatus                      | integer (int32) |
| **Query**  | **status** <br>_必填_     | 审核状态：2-审核通过/3-审核拒绝 | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 处理成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/smc/prto/approve-action
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "prtoId" : "string",
  "prtoStatus" : 0,
  "status" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 查询待审核 SMC 协议分页列表

```
GET /smc/prto/approve-pages
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Query**  | **pageNum** <br>_必填_  | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数 | integer (int32) |
| **Query**  | **prtoName** <br>_可选_ | 协议名称 | string          |

##### 响应

| HTTP 代码 | 说明     | 类型                                                                    |
| --------- | -------- | ----------------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«SmcProtocolPageRes»»](#9377ebbe3e3a67761ba584db4ebfb4cf) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/smc/prto/approve-pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "pageNum" : 0,
  "pageSize" : 0,
  "prtoName" : "string"
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "createUser" : "string",
      "prtoDesc" : "string",
      "prtoId" : "string",
      "prtoName" : "string",
      "prtoStatus" : 0
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 查询 SMC 协议详情

```
GET /smc/prto/detail/{prtoId}
```

##### 参数

| 类型       | 名称                  | 说明   | 类型   |
| ---------- | --------------------- | ------ | ------ |
| **Header** | **token** <br>_必填_  | token  | string |
| **Path**   | **prtoId** <br>_必填_ | prtoId | string |

##### 响应

| HTTP 代码 | 说明     | 类型                                                         |
| --------- | -------- | ------------------------------------------------------------ |
| **200**   | 查询成功 | [R«SmcProtocolDetailRes»](#f510a58cad7e03916a6907a5e57eb40a) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/smc/prto/detail/string
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "createTime" : "string",
    "createUser" : "string",
    "prtoCfgGluejava" : "string",
    "prtoCfgInput" : "string",
    "prtoCfgOutput" : "string",
    "prtoCfgSecure" : "string",
    "prtoCfgService" : "string",
    "prtoDesc" : "string",
    "prtoId" : "string",
    "prtoName" : "string",
    "prtoStatus" : 0,
    "updateTime" : "string",
    "updateUser" : "string"
  },
  "msg" : "string"
}
```

## 创建 SMC 协议编号

```
GET /smc/prto/gencode
```

##### 参数

| 类型       | 名称                 | 说明  | 类型   |
| ---------- | -------------------- | ----- | ------ |
| **Header** | **token** <br>_必填_ | token | string |

##### 响应

| HTTP 代码 | 说明     | 类型                                           |
| --------- | -------- | ---------------------------------------------- |
| **200**   | 创建成功 | [R«string»](#62abab7d8441b00213a1f516a88f3b61) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/smc/prto/gencode
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : "string",
  "msg" : "string"
}
```

## 查询在线 SMC 协议分页列表

```
GET /smc/prto/online-pages
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Query**  | **pageNum** <br>_必填_  | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数 | integer (int32) |
| **Query**  | **prtoName** <br>_可选_ | 协议名称 | string          |

##### 响应

| HTTP 代码 | 说明     | 类型                                                                    |
| --------- | -------- | ----------------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«SmcProtocolPageRes»»](#9377ebbe3e3a67761ba584db4ebfb4cf) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/smc/prto/online-pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "pageNum" : 0,
  "pageSize" : 0,
  "prtoName" : "string"
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "createUser" : "string",
      "prtoDesc" : "string",
      "prtoId" : "string",
      "prtoName" : "string",
      "prtoStatus" : 0
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 字典管理

## 查询字典分页列表

```
GET /dict/pages
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Query**  | **dictType** <br>_可选_ | 字典类型 | string          |
| **Query**  | **pageNum** <br>_必填_  | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数 | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                             |
| --------- | -------- | ---------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«DictPageRes»»](#89c83aa877da07ef4ffbb8b9261bc643) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/dict/pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "dictType" : "string",
  "pageNum" : 0,
  "pageSize" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "createUser" : "string",
      "dictDesc" : "string",
      "dictId" : 0,
      "dictKey" : "string",
      "dictPid" : 0,
      "dictType" : "string",
      "dictValue" : "string"
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 查询字典

```
GET /dict/query
```

##### 参数

| 类型       | 名称                    | 说明     | 类型   |
| ---------- | ----------------------- | -------- | ------ |
| **Header** | **token** <br>_必填_    | token    | string |
| **Query**  | **dictType** <br>_必填_ | 字典类型 | string |

##### 响应

| HTTP 代码 | 说明     | 类型                                                      |
| --------- | -------- | --------------------------------------------------------- |
| **200**   | 查询成功 | [R«List«DictPageRes»»](#05ed6550ace253045cfdeae8d0e3f57e) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/dict/query
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "dictType" : "string"
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : [ {
    "createTime" : "string",
    "createUser" : "string",
    "dictDesc" : "string",
    "dictId" : 0,
    "dictKey" : "string",
    "dictPid" : 0,
    "dictType" : "string",
    "dictValue" : "string"
  } ],
  "msg" : "string"
}
```

## 删除字典

```
DELETE /dict/remove/{dictId}
```

##### 参数

| 类型       | 名称                  | 说明   | 类型            |
| ---------- | --------------------- | ------ | --------------- |
| **Header** | **token** <br>_必填_  | token  | string          |
| **Path**   | **dictId** <br>_必填_ | dictId | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 删除成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/dict/remove/0
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 机构管理

## 申请机构

```
POST /org/apply
```

##### 参数

| 类型       | 名称                 | 说明  | 类型                        |
| ---------- | -------------------- | ----- | --------------------------- |
| **Header** | **token** <br>_必填_ | token | string                      |
| **Body**   | **param** <br>_必填_ | param | [OrgApplyReq](#orgapplyreq) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                |
| --------- | -------- | --------------------------------------------------- |
| **200**   | 申请成功 | [R«OrgApplyRes»](#8f626eceaf50bdea05300537c8b60a94) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/org/apply
```

###### 请求 header

```
json :
"string"
```

###### 请求 body

```
json :
{
  "orgCode" : "string"
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "orgCode" : "string",
    "orgId" : 0
  },
  "msg" : "string"
}
```

## 查询机构分页列表

```
GET /org/pages
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Query**  | **orgName** <br>_可选_  | 机构名   | string          |
| **Query**  | **pageNum** <br>_必填_  | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数 | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                            |
| --------- | -------- | --------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«OrgPageRes»»](#0369302eb5df16e7d3cb90003c3f612f) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/org/pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "orgName" : "string",
  "pageNum" : 0,
  "pageSize" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "createUser" : "string",
      "nodeAddr" : "string",
      "nodeStatus" : 0,
      "orgCode" : "string",
      "orgId" : 0,
      "orgName" : "string",
      "orgRole" : 0,
      "orgSiteType" : 0
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 删除机构

```
DELETE /org/remove/{orgId}
```

##### 参数

| 类型       | 名称                 | 说明  | 类型            |
| ---------- | -------------------- | ----- | --------------- |
| **Header** | **token** <br>_必填_ | token | string          |
| **Path**   | **orgId** <br>_必填_ | orgId | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 删除成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/org/remove/0
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 用户管理

Ocdpp User Controller

## 新增用户

```
POST /user/add
```

##### 参数

| 类型       | 名称                 | 说明  | 类型                      |
| ---------- | -------------------- | ----- | ------------------------- |
| **Header** | **token** <br>_必填_ | token | string                    |
| **Body**   | **param** <br>_必填_ | param | [UserAddReq](#useraddreq) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 新增成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/user/add
```

###### 请求 header

```
json :
"string"
```

###### 请求 body

```
json :
{
  "account" : "string",
  "password" : "string"
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 查询用户分页列表

```
GET /user/pages
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Query**  | **pageNum** <br>_必填_  | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数 | integer (int32) |
| **Query**  | **userName** <br>_可选_ | 用户名   | string          |

##### 响应

| HTTP 代码 | 说明     | 类型                                                             |
| --------- | -------- | ---------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«UserPageRes»»](#b76e7b7afb3ed15b0cc18329529ce386) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/user/pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "pageNum" : 0,
  "pageSize" : 0,
  "userName" : "string"
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "createUser" : "string",
      "userAccount" : "string",
      "userHash" : "string",
      "userId" : 0,
      "userIdcard" : "string",
      "userName" : "string",
      "userRole" : 0,
      "userStatus" : 0
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 实名化用户

```
PUT /user/real-name
```

##### 参数

| 类型       | 名称                 | 说明  | 类型                                |
| ---------- | -------------------- | ----- | ----------------------------------- |
| **Header** | **token** <br>_必填_ | token | string                              |
| **Body**   | **param** <br>_必填_ | param | [UserRealnameReq](#userrealnamereq) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 设置成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/user/real-name
```

###### 请求 header

```
json :
"string"
```

###### 请求 body

```
json :
{
  "userId" : "string",
  "userIdcard" : "string",
  "userName" : "string"
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 删除用户

```
DELETE /user/remove/{userId}
```

##### 参数

| 类型       | 名称                  | 说明   | 类型            |
| ---------- | --------------------- | ------ | --------------- |
| **Header** | **token** <br>_必填_  | token  | string          |
| **Path**   | **userId** <br>_必填_ | userId | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 删除成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/user/remove/0
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 登陆管理

## 用户登录

```
POST /login
```

##### 参数

| 类型       | 名称                 | 说明  | 类型            |
| ---------- | -------------------- | ----- | --------------- |
| **Header** | **token** <br>_必填_ | token | string          |
| **Body**   | **param** <br>_必填_ | param | [Login](#login) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                        |
| --------- | -------- | ----------------------------------------------------------- |
| **200**   | 登陆成功 | [返回结果包装«LoginRes»](#67f71863b295af656401ee07932e5997) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/login
```

###### 请求 header

```
json :
"string"
```

###### 请求 body

```
json :
{
  "account" : "string",
  "password" : "string"
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "account" : "string",
    "isAdmin" : false,
    "orgCode" : "string",
    "orgId" : 0,
    "orgName" : "string",
    "token" : "string",
    "userId" : 0,
    "userName" : "string"
  },
  "message" : "string",
  "success" : true
}
```

## 用户注销

```
POST /logout
```

##### 参数

| 类型       | 名称                 | 说明  | 类型   |
| ---------- | -------------------- | ----- | ------ |
| **Header** | **token** <br>_必填_ | token | string |

##### 响应

| HTTP 代码 | 说明     | 类型                                                       |
| --------- | -------- | ---------------------------------------------------------- |
| **200**   | 注销成功 | [返回结果包装«boolean»](#b03bf8a0b3be4c1ceb6fba1a2f096a6b) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/logout
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : false,
  "message" : "string",
  "success" : true
}
```

## 算法管理

## 查询算法分页列表

```
GET /algo/pages
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Query**  | **algoName** <br>_可选_ | 算法名称 | string          |
| **Query**  | **pageNum** <br>_必填_  | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数 | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                             |
| --------- | -------- | ---------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«AlgoPageRes»»](#b5dedd23dfd040c120e4609768f3723f) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/algo/pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "algoName" : "string",
  "pageNum" : 0,
  "pageSize" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "algoDesc" : "string",
      "algoId" : 0,
      "algoName" : "string",
      "algoStatus" : 0,
      "algoType" : "string",
      "algoVersion" : "string",
      "createTime" : "string",
      "createUser" : "string"
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 查询算法

```
GET /algo/query/{algoId}
```

##### 参数

| 类型       | 名称                  | 说明   | 类型            |
| ---------- | --------------------- | ------ | --------------- |
| **Header** | **token** <br>_必填_  | token  | string          |
| **Path**   | **algoId** <br>_必填_ | algoId | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                  |
| --------- | -------- | ----------------------------------------------------- |
| **200**   | 查询成功 | [R«AlgoDetailRes»](#598d917a8f5f9bdb3c8325c569718737) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/algo/query/0
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "algoApi" : "string",
    "algoDesc" : "string",
    "algoId" : 0,
    "algoName" : "string",
    "algoStatus" : 0,
    "algoType" : "string",
    "algoVersion" : "string",
    "createTime" : "string",
    "createUser" : "string",
    "updateTime" : "string",
    "updateUser" : "string"
  },
  "msg" : "string"
}
```

## 群环管理

## 新增群

```
POST /group/add
```

##### 参数

| 类型       | 名称                 | 说明  | 类型                        |
| ---------- | -------------------- | ----- | --------------------------- |
| **Header** | **token** <br>_必填_ | token | string                      |
| **Body**   | **param** <br>_必填_ | param | [GroupAddReq](#groupaddreq) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 新增成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/group/add
```

###### 请求 header

```
json :
"string"
```

###### 请求 body

```
json :
{
  "groupCfgAlgoId" : 0,
  "groupCfgExpire" : "string",
  "groupCfgT" : 0,
  "groupDesc" : "string",
  "groupName" : "string",
  "groupType" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 新增群成员

```
POST /group/member/add
```

##### 参数

| 类型       | 名称                 | 说明  | 类型                                      |
| ---------- | -------------------- | ----- | ----------------------------------------- |
| **Header** | **token** <br>_必填_ | token | string                                    |
| **Body**   | **param** <br>_必填_ | param | [GroupBindMemberReq](#groupbindmemberreq) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 新增成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/group/member/add
```

###### 请求 header

```
json :
"string"
```

###### 请求 body

```
json :
{
  "groupId" : 0,
  "inGroupStatus" : 0,
  "userId" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 查询群成员分页列表

```
GET /group/member/pages
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Query**  | **groupId** <br>_必填_  | 群 ID    | integer (int32) |
| **Query**  | **pageNum** <br>_必填_  | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数 | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                                    |
| --------- | -------- | ----------------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«GroupMemberPageRes»»](#19b590b3595f827ea611b42fed19afba) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/group/member/pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "groupId" : 0,
  "pageNum" : 0,
  "pageSize" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "cryptoId" : 0,
      "groupId" : 0,
      "inGroupStatus" : 0,
      "userAccount" : "string",
      "userId" : 0
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 查询群分页列表

```
GET /group/pages
```

##### 参数

| 类型       | 名称                     | 说明     | 类型            |
| ---------- | ------------------------ | -------- | --------------- |
| **Header** | **token** <br>_必填_     | token    | string          |
| **Query**  | **groupName** <br>_可选_ | 群标识   | string          |
| **Query**  | **pageNum** <br>_必填_   | 页码     | integer (int32) |
| **Query**  | **pageSize** <br>_必填_  | 每页条数 | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                              |
| --------- | -------- | ----------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«GroupPageRes»»](#b0e15b474bfca83216037c511d872198) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/group/pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "groupName" : "string",
  "pageNum" : 0,
  "pageSize" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "createUser" : "string",
      "groupCfgAlgoId" : 0,
      "groupCfgAlgoName" : "string",
      "groupCfgExpire" : "string",
      "groupCfgT" : 0,
      "groupDesc" : "string",
      "groupId" : 0,
      "groupName" : "string",
      "groupStatus" : 0,
      "groupType" : 0,
      "memberCount" : 0
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 删除群

```
DELETE /group/remove/{groupId}
```

##### 参数

| 类型       | 名称                   | 说明    | 类型            |
| ---------- | ---------------------- | ------- | --------------- |
| **Header** | **token** <br>_必填_   | token   | string          |
| **Path**   | **groupId** <br>_必填_ | groupId | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 删除成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/group/remove/0
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 节点调用

## 同步机构信息

```
POST /invoke/sync-org
```

##### 参数

| 类型     | 名称               | 说明 | 类型                      |
| -------- | ------------------ | ---- | ------------------------- |
| **Body** | **org** <br>_必填_ | org  | [SyncOrgReq](#syncorgreq) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 请求成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/invoke/sync-org
```

###### 请求 body

```
json :
{
  "nodeAddr" : "string",
  "nodeStatus" : 0,
  "orgCode" : "string",
  "orgId" : 0,
  "orgName" : "string"
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 证书管理

## 颁发证书

```
PUT /crypto/grant/{cryptoId}
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Path**   | **cryptoId** <br>_必填_ | cryptoId | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                  |
| --------- | -------- | ----------------------------------------------------- |
| **200**   | 颁发成功 | [R«CryptoBaseRes»](#27a1f776632ae2feed44a9bdcb618356) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/crypto/grant/0
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "createTime" : "string",
    "createUser" : "string",
    "cryptoCert" : "string",
    "cryptoId" : 0,
    "cryptoPk" : "string",
    "cryptoSecret" : "string",
    "cryptoSk" : "string",
    "cryptoStatus" : 0
  },
  "msg" : "string"
}
```

## 查看证书

```
GET /crypto/query
```

##### 参数

| 类型       | 名称                   | 说明    | 类型            |
| ---------- | ---------------------- | ------- | --------------- |
| **Header** | **token** <br>_必填_   | token   | string          |
| **Query**  | **groupId** <br>_必填_ | 群 ID   | integer (int32) |
| **Query**  | **userId** <br>_必填_  | 用户 ID | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                  |
| --------- | -------- | ----------------------------------------------------- |
| **200**   | 查询成功 | [R«CryptoBaseRes»](#27a1f776632ae2feed44a9bdcb618356) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/crypto/query
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "groupId" : 0,
  "userId" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "createTime" : "string",
    "createUser" : "string",
    "cryptoCert" : "string",
    "cryptoId" : 0,
    "cryptoPk" : "string",
    "cryptoSecret" : "string",
    "cryptoSk" : "string",
    "cryptoStatus" : 0
  },
  "msg" : "string"
}
```

## 撤销证书

```
PUT /crypto/revoke/{cryptoId}
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Path**   | **cryptoId** <br>_必填_ | cryptoId | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 撤销成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/crypto/revoke/0
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 验证证书

```
PUT /crypto/verif/{cryptoId}
```

##### 参数

| 类型       | 名称                    | 说明     | 类型            |
| ---------- | ----------------------- | -------- | --------------- |
| **Header** | **token** <br>_必填_    | token    | string          |
| **Path**   | **cryptoId** <br>_必填_ | cryptoId | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 验证成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/crypto/verif/0
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 资源管理

## 修改资源

```
POST /resource/modify
```

##### 参数

| 类型       | 名称                 | 说明  | 类型                                    |
| ---------- | -------------------- | ----- | --------------------------------------- |
| **Header** | **token** <br>_必填_ | token | string                                  |
| **Body**   | **param** <br>_必填_ | param | [ResourceModifyReq](#resourcemodifyreq) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 修改成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/resource/modify
```

###### 请求 header

```
json :
"string"
```

###### 请求 body

```
json :
{
  "resAccess" : 0,
  "resId" : 0,
  "resIden" : "string",
  "resPid" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

## 查询资源分页列表

```
GET /resource/pages
```

##### 参数

| 类型       | 名称                    | 说明       | 类型            |
| ---------- | ----------------------- | ---------- | --------------- |
| **Header** | **token** <br>_必填_    | token      | string          |
| **Query**  | **keyword** <br>_可选_  | 查询关键字 | string          |
| **Query**  | **pageNum** <br>_必填_  | 页码       | integer (int32) |
| **Query**  | **pageSize** <br>_必填_ | 每页条数   | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                                                 |
| --------- | -------- | -------------------------------------------------------------------- |
| **200**   | 查询成功 | [R«PagingModel«ResourcePageRes»»](#a52edc45d7e2a98d6fa3383e87272d2f) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/resource/pages
```

###### 请求 header

```
json :
"string"
```

###### 请求 query

```
json :
{
  "keyword" : "string",
  "pageNum" : 0,
  "pageSize" : 0
}
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : {
    "data" : [ {
      "createTime" : "string",
      "createUser" : "string",
      "resAccess" : 0,
      "resDesc" : "string",
      "resId" : 0,
      "resIden" : "string",
      "resPid" : 0,
      "resType" : 0,
      "resUri" : "string"
    } ],
    "page" : 0,
    "pageSize" : 0,
    "pages" : 0,
    "size" : 0,
    "total" : 0
  },
  "msg" : "string"
}
```

## 删除资源

```
DELETE /resource/remove/{resId}
```

##### 参数

| 类型       | 名称                 | 说明  | 类型            |
| ---------- | -------------------- | ----- | --------------- |
| **Header** | **token** <br>_必填_ | token | string          |
| **Path**   | **resId** <br>_必填_ | resId | integer (int32) |

##### 响应

| HTTP 代码 | 说明     | 类型                                            |
| --------- | -------- | ----------------------------------------------- |
| **200**   | 删除成功 | [R«boolean»](#ca50889f5231467f9d5aa71716744e52) |

##### 消耗

- `application/json`

##### 生成

- `application/json`

##### HTTP 请求示例

###### 请求 path

```
/resource/remove/0
```

###### 请求 header

```
json :
"string"
```

##### HTTP 响应示例

###### 响应 200

```
json :
{
  "code" : 0,
  "data" : true,
  "msg" : "string"
}
```

<a name="definitions"></a>

### 定义

<a name="algodetailres"></a>

### AlgoDetailRes

| 名称                       | 说明                                           | 类型               |
| -------------------------- | ---------------------------------------------- | ------------------ |
| **algoApi** <br>_可选_     | 算法 API 描述 <br>**样例** : `"string"`        | string             |
| **algoDesc** <br>_可选_    | 算法描述 <br>**样例** : `"string"`             | string             |
| **algoId** <br>_可选_      | 算法 ID <br>**样例** : `0`                     | integer (int32)    |
| **algoName** <br>_可选_    | 算法名称 <br>**样例** : `"string"`             | string             |
| **algoStatus** <br>_可选_  | 算法版本状态：0-废弃/1-有效 <br>**样例** : `0` | integer (int32)    |
| **algoType** <br>_可选_    | 算法类型，关联字典表 <br>**样例** : `"string"` | string             |
| **algoVersion** <br>_可选_ | 算法发布版本 <br>**样例** : `"string"`         | string             |
| **createTime** <br>_可选_  | 创建时间 <br>**样例** : `"string"`             | string (date-time) |
| **createUser** <br>_可选_  | 创建人 <br>**样例** : `"string"`               | string             |
| **updateTime** <br>_可选_  | 更新时间 <br>**样例** : `"string"`             | string (date-time) |
| **updateUser** <br>_可选_  | 更新人 <br>**样例** : `"string"`               | string             |

<a name="algopageres"></a>

### AlgoPageRes

| 名称                       | 说明                                           | 类型               |
| -------------------------- | ---------------------------------------------- | ------------------ |
| **algoDesc** <br>_可选_    | 算法描述 <br>**样例** : `"string"`             | string             |
| **algoId** <br>_可选_      | 算法 ID <br>**样例** : `0`                     | integer (int32)    |
| **algoName** <br>_可选_    | 算法名称 <br>**样例** : `"string"`             | string             |
| **algoStatus** <br>_可选_  | 算法版本状态：0-废弃/1-有效 <br>**样例** : `0` | integer (int32)    |
| **algoType** <br>_可选_    | 算法类型，关联字典表 <br>**样例** : `"string"` | string             |
| **algoVersion** <br>_可选_ | 算法发布版本 <br>**样例** : `"string"`         | string             |
| **createTime** <br>_可选_  | 创建时间 <br>**样例** : `"string"`             | string (date-time) |
| **createUser** <br>_可选_  | 创建人 <br>**样例** : `"string"`               | string             |

<a name="cryptobaseres"></a>

### CryptoBaseRes

| 名称                        | 说明                                                              | 类型               |
| --------------------------- | ----------------------------------------------------------------- | ------------------ |
| **createTime** <br>_可选_   | 创建时间 <br>**样例** : `"string"`                                | string (date-time) |
| **createUser** <br>_可选_   | 创建人 <br>**样例** : `"string"`                                  | string             |
| **cryptoCert** <br>_可选_   | 身份证书 <br>**样例** : `"string"`                                | string             |
| **cryptoId** <br>_可选_     | 证书 ID <br>**样例** : `0`                                        | integer (int32)    |
| **cryptoPk** <br>_可选_     | 身份共钥 <br>**样例** : `"string"`                                | string             |
| **cryptoSecret** <br>_可选_ | 相关密码 <br>**样例** : `"string"`                                | string             |
| **cryptoSk** <br>_可选_     | 身份私钥 <br>**样例** : `"string"`                                | string             |
| **cryptoStatus** <br>_可选_ | 身份状态：0-管理员身份/1-有效身份/2-非有效身份 <br>**样例** : `0` | integer (int32)    |

<a name="dictpageres"></a>

### DictPageRes

| 名称                      | 说明                                     | 类型               |
| ------------------------- | ---------------------------------------- | ------------------ |
| **createTime** <br>_可选_ | 创建时间 <br>**样例** : `"string"`       | string (date-time) |
| **createUser** <br>_可选_ | 创建人 <br>**样例** : `"string"`         | string             |
| **dictDesc** <br>_可选_   | 字典编码描述 <br>**样例** : `"string"`   | string             |
| **dictId** <br>_可选_     | 字典 ID <br>**样例** : `0`               | integer (int32)    |
| **dictKey** <br>_可选_    | 字典编码 <br>**样例** : `"string"`       | string             |
| **dictPid** <br>_可选_    | 父字典 ID，顶层为“-1” <br>**样例** : `0` | integer (int32)    |
| **dictType** <br>_可选_   | 字典类型 <br>**样例** : `"string"`       | string             |
| **dictValue** <br>_可选_  | 字典值 <br>**样例** : `"string"`         | string             |

<a name="groupaddreq"></a>

### GroupAddReq

| 名称                          | 说明                                         | 类型               |
| ----------------------------- | -------------------------------------------- | ------------------ |
| **groupCfgAlgoId** <br>_可选_ | 群配置-签名方式 ID <br>**样例** : `0`        | integer (int32)    |
| **groupCfgExpire** <br>_可选_ | 群配置-到期时间 <br>**样例** : `"string"`    | string (date-time) |
| **groupCfgT** <br>_可选_      | 群配置-门陷 <br>**样例** : `0`               | integer (int32)    |
| **groupDesc** <br>_可选_      | 群描述 <br>**样例** : `"string"`             | string             |
| **groupName** <br>_可选_      | 群名称 <br>**样例** : `"string"`             | string             |
| **groupType** <br>_可选_      | 群类型：0-临时群/1-长期群 <br>**样例** : `0` | integer (int32)    |

<a name="groupbindmemberreq"></a>

### GroupBindMemberReq

| 名称                         | 说明                                                          | 类型            |
| ---------------------------- | ------------------------------------------------------------- | --------------- |
| **groupId** <br>_可选_       | 群 ID <br>**样例** : `0`                                      | integer (int32) |
| **inGroupStatus** <br>_可选_ | 在群状态：0-管理员/1-有效成员/2-非有效成员 <br>**样例** : `0` | integer (int32) |
| **userId** <br>_可选_        | 用户 ID <br>**样例** : `0`                                    | integer (int32) |

<a name="groupmemberpageres"></a>

### GroupMemberPageRes

| 名称                         | 说明                                                          | 类型               |
| ---------------------------- | ------------------------------------------------------------- | ------------------ |
| **createTime** <br>_可选_    | 创建时间 <br>**样例** : `"string"`                            | string (date-time) |
| **cryptoId** <br>_可选_      | 成员证书 ID <br>**样例** : `0`                                | integer (int32)    |
| **groupId** <br>_可选_       | 群 ID <br>**样例** : `0`                                      | integer (int32)    |
| **inGroupStatus** <br>_可选_ | 在群状态：0-管理员/1-有效成员/2-非有效成员 <br>**样例** : `0` | integer (int32)    |
| **userAccount** <br>_可选_   | 账号名 <br>**样例** : `"string"`                              | string             |
| **userId** <br>_可选_        | 用户 ID <br>**样例** : `0`                                    | integer (int32)    |

<a name="grouppageres"></a>

### GroupPageRes

| 名称                            | 说明                                          | 类型               |
| ------------------------------- | --------------------------------------------- | ------------------ |
| **createTime** <br>_可选_       | 创建时间 <br>**样例** : `"string"`            | string (date-time) |
| **createUser** <br>_可选_       | 创建人 <br>**样例** : `"string"`              | string             |
| **groupCfgAlgoId** <br>_可选_   | 群配置-签名方式 ID <br>**样例** : `0`         | integer (int32)    |
| **groupCfgAlgoName** <br>_可选_ | 群配置-签名方式名称 <br>**样例** : `"string"` | string             |
| **groupCfgExpire** <br>_可选_   | 群配置-到期时间 <br>**样例** : `"string"`     | string (date-time) |
| **groupCfgT** <br>_可选_        | 群配置-门陷 <br>**样例** : `0`                | integer (int32)    |
| **groupDesc** <br>_可选_        | 群描述 <br>**样例** : `"string"`              | string             |
| **groupId** <br>_可选_          | 群 ID <br>**样例** : `0`                      | integer (int32)    |
| **groupName** <br>_可选_        | 群名称 <br>**样例** : `"string"`              | string             |
| **groupStatus** <br>_可选_      | 群状态：0-无效/1-有效 <br>**样例** : `0`      | integer (int32)    |
| **groupType** <br>_可选_        | 群类型：0-临时群/1-长期群 <br>**样例** : `0`  | integer (int32)    |
| **memberCount** <br>_可选_      | 成员数量 <br>**样例** : `0`                   | integer (int32)    |

<a name="login"></a>

### Login

| 名称                    | 说明                               | 类型   |
| ----------------------- | ---------------------------------- | ------ |
| **account** <br>_可选_  | 账号名称 <br>**样例** : `"string"` | string |
| **password** <br>_可选_ | 账号密码 <br>**样例** : `"string"` | string |

<a name="loginres"></a>

### LoginRes

| 名称                    | 说明                                | 类型            |
| ----------------------- | ----------------------------------- | --------------- |
| **account** <br>_可选_  | 账号名称 <br>**样例** : `"string"`  | string          |
| **isAdmin** <br>_可选_  | 是否为管理员 <br>**样例** : `false` | boolean         |
| **orgCode** <br>_可选_  | 机构编号 <br>**样例** : `"string"`  | string          |
| **orgId** <br>_可选_    | 机构 ID <br>**样例** : `0`          | integer (int32) |
| **orgName** <br>_可选_  | 机构名称 <br>**样例** : `"string"`  | string          |
| **token** <br>_可选_    | token <br>**样例** : `"string"`     | string          |
| **userId** <br>_可选_   | 用户 ID <br>**样例** : `0`          | integer (int32) |
| **userName** <br>_可选_ | 用户名称 <br>**样例** : `"string"`  | string          |

<a name="orgapplyreq"></a>

### OrgApplyReq

| 名称                   | 说明                                                     | 类型   |
| ---------------------- | -------------------------------------------------------- | ------ |
| **orgCode** <br>_可选_ | 机构编号，如：org1.example.com <br>**样例** : `"string"` | string |

<a name="orgapplyres"></a>

### OrgApplyRes

| 名称                   | 说明                                                     | 类型            |
| ---------------------- | -------------------------------------------------------- | --------------- |
| **orgCode** <br>_可选_ | 机构编号，如：org1.example.com <br>**样例** : `"string"` | string          |
| **orgId** <br>_可选_   | 机构 ID（保证全网唯一） <br>**样例** : `0`               | integer (int32) |

<a name="orgpageres"></a>

### OrgPageRes

| 名称                       | 说明                                                               | 类型               |
| -------------------------- | ------------------------------------------------------------------ | ------------------ |
| **createTime** <br>_可选_  | 创建时间 <br>**样例** : `"string"`                                 | string (date-time) |
| **createUser** <br>_可选_  | 创建人 <br>**样例** : `"string"`                                   | string             |
| **nodeAddr** <br>_可选_    | 节点地址,如 ‘127.0.0.1:8080’ <br>**样例** : `"string"`             | string             |
| **nodeStatus** <br>_可选_  | 节点状态：0-不可用/1-可用 <br>**样例** : `0`                       | integer (int32)    |
| **orgCode** <br>_可选_     | 机构编号，如：org1.example.com <br>**样例** : `"string"`           | string             |
| **orgId** <br>_可选_       | 机构 ID（保证全网唯一） <br>**样例** : `0`                         | integer (int32)    |
| **orgName** <br>_可选_     | 机构名称，如：XX 大数据局第一分部 032 室 <br>**样例** : `"string"` | string             |
| **orgRole** <br>_可选_     | 机构角色：0-master/1-member <br>**样例** : `0`                     | integer (int32)    |
| **orgSiteType** <br>_可选_ | 机构站点类型：0-非本站机构/1-本站机构 <br>**样例** : `0`           | integer (int32)    |

<a name="aece79df7e123844d20b01ee4fc996d1"></a>

### PagingModel«AlgoPageRes»

| 名称                    | 说明                                                      | 类型                                  |
| ----------------------- | --------------------------------------------------------- | ------------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[algopageres](#algopageres)" ]` | < [AlgoPageRes](#algopageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                                 | integer (int32)                       |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                             | integer (int32)                       |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                                 | integer (int32)                       |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                           | integer (int32)                       |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                               | integer (int64)                       |

<a name="86db8fae50b87f665392146fecc78a32"></a>

### PagingModel«DictPageRes»

| 名称                    | 说明                                                      | 类型                                  |
| ----------------------- | --------------------------------------------------------- | ------------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[dictpageres](#dictpageres)" ]` | < [DictPageRes](#dictpageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                                 | integer (int32)                       |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                             | integer (int32)                       |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                                 | integer (int32)                       |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                           | integer (int32)                       |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                               | integer (int64)                       |

<a name="a02e349e81ca33009cb625614594a5e0"></a>

### PagingModel«GroupMemberPageRes»

| 名称                    | 说明                                                                    | 类型                                                |
| ----------------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[groupmemberpageres](#groupmemberpageres)" ]` | < [GroupMemberPageRes](#groupmemberpageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                                               | integer (int32)                                     |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                                           | integer (int32)                                     |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                                               | integer (int32)                                     |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                                         | integer (int32)                                     |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                                             | integer (int64)                                     |

<a name="67c4618fde96ec5c1e9c570ef0fb0858"></a>

### PagingModel«GroupPageRes»

| 名称                    | 说明                                                        | 类型                                    |
| ----------------------- | ----------------------------------------------------------- | --------------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[grouppageres](#grouppageres)" ]` | < [GroupPageRes](#grouppageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                                   | integer (int32)                         |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                               | integer (int32)                         |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                                   | integer (int32)                         |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                             | integer (int32)                         |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                                 | integer (int64)                         |

<a name="62051f10434311b01b8f879334515906"></a>

### PagingModel«OrgPageRes»

| 名称                    | 说明                                                    | 类型                                |
| ----------------------- | ------------------------------------------------------- | ----------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[orgpageres](#orgpageres)" ]` | < [OrgPageRes](#orgpageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                               | integer (int32)                     |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                           | integer (int32)                     |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                               | integer (int32)                     |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                         | integer (int32)                     |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                             | integer (int64)                     |

<a name="dd644c075c9f31999601fe3e529d6c2d"></a>

### PagingModel«ResourcePageRes»

| 名称                    | 说明                                                              | 类型                                          |
| ----------------------- | ----------------------------------------------------------------- | --------------------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[resourcepageres](#resourcepageres)" ]` | < [ResourcePageRes](#resourcepageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                                         | integer (int32)                               |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                                     | integer (int32)                               |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                                         | integer (int32)                               |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                                   | integer (int32)                               |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                                       | integer (int64)                               |

<a name="301d413b49dc91f674ff0bdccdce7937"></a>

### PagingModel«SmcExecStatusPageRes»

| 名称                    | 说明                                                                        | 类型                                                    |
| ----------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[smcexecstatuspageres](#smcexecstatuspageres)" ]` | < [SmcExecStatusPageRes](#smcexecstatuspageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                                                   | integer (int32)                                         |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                                               | integer (int32)                                         |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                                                   | integer (int32)                                         |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                                             | integer (int32)                                         |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                                                 | integer (int64)                                         |

<a name="aaa14599ec9e70a6e0bacb7fddd87e76"></a>

### PagingModel«SmcExecTodoPageRes»

| 名称                    | 说明                                                                    | 类型                                                |
| ----------------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[smcexectodopageres](#smcexectodopageres)" ]` | < [SmcExecTodoPageRes](#smcexectodopageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                                               | integer (int32)                                     |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                                           | integer (int32)                                     |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                                               | integer (int32)                                     |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                                         | integer (int32)                                     |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                                             | integer (int64)                                     |

<a name="423b2bdfb33b0d0538c75d9857fe6ca0"></a>

### PagingModel«SmcProtocolPageRes»

| 名称                    | 说明                                                                    | 类型                                                |
| ----------------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[smcprotocolpageres](#smcprotocolpageres)" ]` | < [SmcProtocolPageRes](#smcprotocolpageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                                               | integer (int32)                                     |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                                           | integer (int32)                                     |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                                               | integer (int32)                                     |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                                         | integer (int32)                                     |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                                             | integer (int64)                                     |

<a name="16d8edcacbaf201777a38e1abd153195"></a>

### PagingModel«UserPageRes»

| 名称                    | 说明                                                      | 类型                                  |
| ----------------------- | --------------------------------------------------------- | ------------------------------------- |
| **data** <br>_可选_     | 结果集 <br>**样例** : `[ "[userpageres](#userpageres)" ]` | < [UserPageRes](#userpageres) > array |
| **page** <br>_可选_     | 当前页 <br>**样例** : `0`                                 | integer (int32)                       |
| **pageSize** <br>_可选_ | 每页的数量 <br>**样例** : `0`                             | integer (int32)                       |
| **pages** <br>_可选_    | 总页数 <br>**样例** : `0`                                 | integer (int32)                       |
| **size** <br>_可选_     | 当前页的数量 <br>**样例** : `0`                           | integer (int32)                       |
| **total** <br>_可选_    | 总记录数 <br>**样例** : `0`                               | integer (int64)                       |

<a name="resourcemodifyreq"></a>

### ResourceModifyReq

| 名称                     | 说明                                                     | 类型            |
| ------------------------ | -------------------------------------------------------- | --------------- |
| **resAccess** <br>_可选_ | 资源访问权限：0-‘open’/1-‘only-admin’ <br>**样例** : `0` | integer (int32) |
| **resId** <br>_可选_     | 资源 ID <br>**样例** : `0`                               | integer (int32) |
| **resIden** <br>_可选_   | 资源标识 <br>**样例** : `"string"`                       | string          |
| **resPid** <br>_可选_    | 父资源 ID，顶层为“-1” <br>**样例** : `0`                 | integer (int32) |

<a name="resourcepageres"></a>

### ResourcePageRes

| 名称                      | 说明                                                     | 类型               |
| ------------------------- | -------------------------------------------------------- | ------------------ |
| **createTime** <br>_可选_ | 创建时间 <br>**样例** : `"string"`                       | string (date-time) |
| **createUser** <br>_可选_ | 创建人 <br>**样例** : `"string"`                         | string             |
| **resAccess** <br>_可选_  | 资源访问权限：0-‘open’/1-‘only-admin’ <br>**样例** : `0` | integer (int32)    |
| **resDesc** <br>_可选_    | 资源描述 <br>**样例** : `"string"`                       | string             |
| **resId** <br>_可选_      | 资源 ID <br>**样例** : `0`                               | integer (int32)    |
| **resIden** <br>_可选_    | 资源标识 <br>**样例** : `"string"`                       | string             |
| **resPid** <br>_可选_     | 父资源 ID，顶层为“-1” <br>**样例** : `0`                 | integer (int32)    |
| **resType** <br>_可选_    | 资源类型：0-api/1-菜单 <br>**样例** : `0`                | integer (int32)    |
| **resUri** <br>_可选_     | 资源 URI <br>**样例** : `"string"`                       | string             |

<a name="598d917a8f5f9bdb3c8325c569718737"></a>

### R«AlgoDetailRes»

| 名称                | 说明                                           | 类型                            |
| ------------------- | ---------------------------------------------- | ------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                 | integer (int64)                 |
| **data** <br>_可选_ | **样例** : `"[algodetailres](#algodetailres)"` | [AlgoDetailRes](#algodetailres) |
| **msg** <br>_可选_  | **样例** : `"string"`                          | string                          |

<a name="27a1f776632ae2feed44a9bdcb618356"></a>

### R«CryptoBaseRes»

| 名称                | 说明                                           | 类型                            |
| ------------------- | ---------------------------------------------- | ------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                 | integer (int64)                 |
| **data** <br>_可选_ | **样例** : `"[cryptobaseres](#cryptobaseres)"` | [CryptoBaseRes](#cryptobaseres) |
| **msg** <br>_可选_  | **样例** : `"string"`                          | string                          |

<a name="05ed6550ace253045cfdeae8d0e3f57e"></a>

### R«List«DictPageRes»»

| 名称                | 说明                                           | 类型                                  |
| ------------------- | ---------------------------------------------- | ------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                 | integer (int64)                       |
| **data** <br>_可选_ | **样例** : `[ "[dictpageres](#dictpageres)" ]` | < [DictPageRes](#dictpageres) > array |
| **msg** <br>_可选_  | **样例** : `"string"`                          | string                                |

<a name="8f626eceaf50bdea05300537c8b60a94"></a>

### R«OrgApplyRes»

| 名称                | 说明                                       | 类型                        |
| ------------------- | ------------------------------------------ | --------------------------- |
| **code** <br>_可选_ | **样例** : `0`                             | integer (int64)             |
| **data** <br>_可选_ | **样例** : `"[orgapplyres](#orgapplyres)"` | [OrgApplyRes](#orgapplyres) |
| **msg** <br>_可选_  | **样例** : `"string"`                      | string                      |

<a name="b5dedd23dfd040c120e4609768f3723f"></a>

### R«PagingModel«AlgoPageRes»»

| 名称                | 说明                                                                                 | 类型                                                          |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                               |
| **data** <br>_可选_ | **样例** : `"[aece79df7e123844d20b01ee4fc996d1](#aece79df7e123844d20b01ee4fc996d1)"` | [PagingModel«AlgoPageRes»](#aece79df7e123844d20b01ee4fc996d1) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                        |

<a name="89c83aa877da07ef4ffbb8b9261bc643"></a>

### R«PagingModel«DictPageRes»»

| 名称                | 说明                                                                                 | 类型                                                          |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                               |
| **data** <br>_可选_ | **样例** : `"[86db8fae50b87f665392146fecc78a32](#86db8fae50b87f665392146fecc78a32)"` | [PagingModel«DictPageRes»](#86db8fae50b87f665392146fecc78a32) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                        |

<a name="19b590b3595f827ea611b42fed19afba"></a>

### R«PagingModel«GroupMemberPageRes»»

| 名称                | 说明                                                                                 | 类型                                                                 |
| ------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                                      |
| **data** <br>_可选_ | **样例** : `"[a02e349e81ca33009cb625614594a5e0](#a02e349e81ca33009cb625614594a5e0)"` | [PagingModel«GroupMemberPageRes»](#a02e349e81ca33009cb625614594a5e0) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                               |

<a name="b0e15b474bfca83216037c511d872198"></a>

### R«PagingModel«GroupPageRes»»

| 名称                | 说明                                                                                 | 类型                                                           |
| ------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                                |
| **data** <br>_可选_ | **样例** : `"[67c4618fde96ec5c1e9c570ef0fb0858](#67c4618fde96ec5c1e9c570ef0fb0858)"` | [PagingModel«GroupPageRes»](#67c4618fde96ec5c1e9c570ef0fb0858) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                         |

<a name="0369302eb5df16e7d3cb90003c3f612f"></a>

### R«PagingModel«OrgPageRes»»

| 名称                | 说明                                                                                 | 类型                                                         |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                              |
| **data** <br>_可选_ | **样例** : `"[62051f10434311b01b8f879334515906](#62051f10434311b01b8f879334515906)"` | [PagingModel«OrgPageRes»](#62051f10434311b01b8f879334515906) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                       |

<a name="a52edc45d7e2a98d6fa3383e87272d2f"></a>

### R«PagingModel«ResourcePageRes»»

| 名称                | 说明                                                                                 | 类型                                                              |
| ------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                                   |
| **data** <br>_可选_ | **样例** : `"[dd644c075c9f31999601fe3e529d6c2d](#dd644c075c9f31999601fe3e529d6c2d)"` | [PagingModel«ResourcePageRes»](#dd644c075c9f31999601fe3e529d6c2d) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                            |

<a name="9b59af9b3c8d7cc6761254a5a3239165"></a>

### R«PagingModel«SmcExecStatusPageRes»»

| 名称                | 说明                                                                                 | 类型                                                                   |
| ------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                                        |
| **data** <br>_可选_ | **样例** : `"[301d413b49dc91f674ff0bdccdce7937](#301d413b49dc91f674ff0bdccdce7937)"` | [PagingModel«SmcExecStatusPageRes»](#301d413b49dc91f674ff0bdccdce7937) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                                 |

<a name="533587acf889bf83fd89fb36a40525f4"></a>

### R«PagingModel«SmcExecTodoPageRes»»

| 名称                | 说明                                                                                 | 类型                                                                 |
| ------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                                      |
| **data** <br>_可选_ | **样例** : `"[aaa14599ec9e70a6e0bacb7fddd87e76](#aaa14599ec9e70a6e0bacb7fddd87e76)"` | [PagingModel«SmcExecTodoPageRes»](#aaa14599ec9e70a6e0bacb7fddd87e76) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                               |

<a name="9377ebbe3e3a67761ba584db4ebfb4cf"></a>

### R«PagingModel«SmcProtocolPageRes»»

| 名称                | 说明                                                                                 | 类型                                                                 |
| ------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                                      |
| **data** <br>_可选_ | **样例** : `"[423b2bdfb33b0d0538c75d9857fe6ca0](#423b2bdfb33b0d0538c75d9857fe6ca0)"` | [PagingModel«SmcProtocolPageRes»](#423b2bdfb33b0d0538c75d9857fe6ca0) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                               |

<a name="b76e7b7afb3ed15b0cc18329529ce386"></a>

### R«PagingModel«UserPageRes»»

| 名称                | 说明                                                                                 | 类型                                                          |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                                                       | integer (int64)                                               |
| **data** <br>_可选_ | **样例** : `"[16d8edcacbaf201777a38e1abd153195](#16d8edcacbaf201777a38e1abd153195)"` | [PagingModel«UserPageRes»](#16d8edcacbaf201777a38e1abd153195) |
| **msg** <br>_可选_  | **样例** : `"string"`                                                                | string                                                        |

<a name="f510a58cad7e03916a6907a5e57eb40a"></a>

### R«SmcProtocolDetailRes»

| 名称                | 说明                                                         | 类型                                          |
| ------------------- | ------------------------------------------------------------ | --------------------------------------------- |
| **code** <br>_可选_ | **样例** : `0`                                               | integer (int64)                               |
| **data** <br>_可选_ | **样例** : `"[smcprotocoldetailres](#smcprotocoldetailres)"` | [SmcProtocolDetailRes](#smcprotocoldetailres) |
| **msg** <br>_可选_  | **样例** : `"string"`                                        | string                                        |

<a name="ca50889f5231467f9d5aa71716744e52"></a>

### R«boolean»

| 名称                | 说明                  | 类型            |
| ------------------- | --------------------- | --------------- |
| **code** <br>_可选_ | **样例** : `0`        | integer (int64) |
| **data** <br>_可选_ | **样例** : `true`     | boolean         |
| **msg** <br>_可选_  | **样例** : `"string"` | string          |

<a name="62abab7d8441b00213a1f516a88f3b61"></a>

### R«string»

| 名称                | 说明                  | 类型            |
| ------------------- | --------------------- | --------------- |
| **code** <br>_可选_ | **样例** : `0`        | integer (int64) |
| **data** <br>_可选_ | **样例** : `"string"` | string          |
| **msg** <br>_可选_  | **样例** : `"string"` | string          |

<a name="smcexecstatuspageres"></a>

### SmcExecStatusPageRes

| 名称                      | 说明                                                                                                                                           | 类型               |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **createTime** <br>_可选_ | 创建时间 <br>**样例** : `"string"`                                                                                                             | string (date-time) |
| **createUser** <br>_可选_ | 创建人 <br>**样例** : `"string"`                                                                                                               | string             |
| **execDesc** <br>_可选_   | SMC 执行实例描述 <br>**样例** : `"string"`                                                                                                     | string             |
| **execId** <br>_可选_     | 主键 <br>**样例** : `0`                                                                                                                        | integer (int32)    |
| **execNo** <br>_可选_     | SMC 执行实例 ID（保证全网唯一），如：XA-SMC-01000021-37861099021 模式：XA-SMC-01{6 位左 0 补齐机构 ID}-{11 位随机数} <br>**样例** : `"string"` | string             |
| **execStatus** <br>_可选_ | SMC 处理状态：0-待处理/1-处理成功/1-处理失败 <br>**样例** : `0`                                                                                | integer (int32)    |
| **prtoId** <br>_可选_     | SMC 协议 ID <br>**样例** : `"string"`                                                                                                          | string             |
| **prtoName** <br>_可选_   | SMC 协议名称 <br>**样例** : `"string"`                                                                                                         | string             |

<a name="smcexectodopageres"></a>

### SmcExecTodoPageRes

| 名称                      | 说明                                                                                                                                           | 类型               |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **createTime** <br>_可选_ | 创建时间 <br>**样例** : `"string"`                                                                                                             | string (date-time) |
| **createUser** <br>_可选_ | 创建人 <br>**样例** : `"string"`                                                                                                               | string             |
| **execDesc** <br>_可选_   | SMC 执行实例描述 <br>**样例** : `"string"`                                                                                                     | string             |
| **execId** <br>_可选_     | 主键 <br>**样例** : `0`                                                                                                                        | integer (int32)    |
| **execNo** <br>_可选_     | SMC 执行实例 ID（保证全网唯一），如：XA-SMC-01000021-37861099021 模式：XA-SMC-01{6 位左 0 补齐机构 ID}-{11 位随机数} <br>**样例** : `"string"` | string             |
| **execSrcOrg** <br>_可选_ | SMC 运行来源机构 <br>**样例** : `"string"`                                                                                                     | string             |
| **execStatus** <br>_可选_ | SMC 处理状态：0-待处理/1-处理成功/1-处理失败 <br>**样例** : `0`                                                                                | integer (int32)    |
| **prtoId** <br>_可选_     | SMC 协议 ID <br>**样例** : `"string"`                                                                                                          | string             |
| **prtoName** <br>_可选_   | SMC 协议名称 <br>**样例** : `"string"`                                                                                                         | string             |

<a name="smcprotocoladdreq"></a>

### SmcProtocolAddReq

| 名称                          | 说明                                                                                                  | 类型                                                                    |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **prtoCfgSecure** <br>_可选_  | 协议传输加密方式，模式：{算法名称}:{算法版本号} <br>**样例** : `"string"`                             | string                                                                  |
| **prtoCfgService** <br>_可选_ | 协议处理服务名称 <br>**样例** : `"string"`                                                            | string                                                                  |
| **prtoDesc** <br>_可选_       | 协议描述 <br>**样例** : `"string"`                                                                    | string                                                                  |
| **prtoId** <br>_可选_         | 协议 ID，如：XA-SMC-00223-33210 模式：XA-SMC-00{三位随机数}-{五位随机数} <br>**样例** : `"string"`    | string                                                                  |
| **prtoInputs** <br>_可选_     | 协议输入参数定义 <br>**样例** : `[ "[smcprotocoladdres-smcioparam](#smcprotocoladdres-smcioparam)" ]` | < [SmcProtocolAddRes.SmcIoParam](#smcprotocoladdres-smcioparam) > array |
| **prtoName** <br>_可选_       | 协议名称 <br>**样例** : `"string"`                                                                    | string                                                                  |
| **prtoOutputs** <br>_可选_    | 协议输出参数定义 <br>**样例** : `[ "[smcprotocoladdres-smcioparam](#smcprotocoladdres-smcioparam)" ]` | < [SmcProtocolAddRes.SmcIoParam](#smcprotocoladdres-smcioparam) > array |

<a name="smcprotocoladdres-smcioparam"></a>

### SmcProtocolAddRes.SmcIoParam

| 名称                     | 说明                                                                | 类型            |
| ------------------------ | ------------------------------------------------------------------- | --------------- |
| **paramDesc** <br>_可选_ | 参数描述 <br>**样例** : `"string"`                                  | string          |
| **paramName** <br>_可选_ | 参数名称 <br>**样例** : `"string"`                                  | string          |
| **required** <br>_可选_  | 必填选项：0-非必填/1-必填 <br>**样例** : `0`                        | integer (int32) |
| **type** <br>_可选_      | 数据类型，如：数字、字符串、布尔等 <br>**样例** : `"string"`        | string          |
| **verif** <br>_可选_     | 数据校验规则，如：正则校验、非空校验、非负校验等 <br>**样例** : `0` | integer (int32) |

<a name="smcprotocoldetailres"></a>

### SmcProtocolDetailRes

| 名称                           | 说明                                                                                               | 类型               |
| ------------------------------ | -------------------------------------------------------------------------------------------------- | ------------------ |
| **createTime** <br>_可选_      | 创建时间 <br>**样例** : `"string"`                                                                 | string (date-time) |
| **createUser** <br>_可选_      | 创建人 <br>**样例** : `"string"`                                                                   | string             |
| **prtoCfgGluejava** <br>_可选_ | 协议处理服务 java 代码 <br>**样例** : `"string"`                                                   | string             |
| **prtoCfgInput** <br>_可选_    | 协议输入项 <br>**样例** : `"string"`                                                               | string             |
| **prtoCfgOutput** <br>_可选_   | 协议输出项 <br>**样例** : `"string"`                                                               | string             |
| **prtoCfgSecure** <br>_可选_   | 协议传输加密方式，为空则明文传输，否则用 token 加密 <br>**样例** : `"string"`                      | string             |
| **prtoCfgService** <br>_可选_  | 协议处理服务名称 <br>**样例** : `"string"`                                                         | string             |
| **prtoDesc** <br>_可选_        | 协议描述 <br>**样例** : `"string"`                                                                 | string             |
| **prtoId** <br>_可选_          | 协议 ID，如：XA-SMC-00223-33210 模式：XA-SMC-00{三位随机数}-{五位随机数} <br>**样例** : `"string"` | string             |
| **prtoName** <br>_可选_        | 协议名称 <br>**样例** : `"string"`                                                                 | string             |
| **prtoStatus** <br>_可选_      | 协议状态：0-暂存/1-已发布（待审核）/2-审核通过/3-审核拒绝（详情见日志表） <br>**样例** : `0`       | integer (int32)    |
| **updateTime** <br>_可选_      | 修改时间 <br>**样例** : `"string"`                                                                 | string (date-time) |
| **updateUser** <br>_可选_      | 修改人 <br>**样例** : `"string"`                                                                   | string             |

<a name="smcprotocolpageres"></a>

### SmcProtocolPageRes

| 名称                      | 说明                                                                                               | 类型               |
| ------------------------- | -------------------------------------------------------------------------------------------------- | ------------------ |
| **createTime** <br>_可选_ | 创建时间 <br>**样例** : `"string"`                                                                 | string (date-time) |
| **createUser** <br>_可选_ | 创建人 <br>**样例** : `"string"`                                                                   | string             |
| **prtoDesc** <br>_可选_   | 协议描述 <br>**样例** : `"string"`                                                                 | string             |
| **prtoId** <br>_可选_     | 协议 ID，如：XA-SMC-00223-33210 模式：XA-SMC-00{三位随机数}-{五位随机数} <br>**样例** : `"string"` | string             |
| **prtoName** <br>_可选_   | 协议名称 <br>**样例** : `"string"`                                                                 | string             |
| **prtoStatus** <br>_可选_ | 协议状态：0-暂存/1-已发布（待审核）/2-审核通过/3-审核拒绝（详情见日志表） <br>**样例** : `0`       | integer (int32)    |

<a name="syncorgreq"></a>

### SyncOrgReq

| 名称                      | 说明                                                               | 类型            |
| ------------------------- | ------------------------------------------------------------------ | --------------- |
| **nodeAddr** <br>_可选_   | 节点地址,如 ‘127.0.0.1:8080’ <br>**样例** : `"string"`             | string          |
| **nodeStatus** <br>_可选_ | 节点状态：0-不可用/1-可用 <br>**样例** : `0`                       | integer (int32) |
| **orgCode** <br>_可选_    | 机构编号，如：org1.example.com <br>**样例** : `"string"`           | string          |
| **orgId** <br>_可选_      | 机构 ID（保证全网唯一） <br>**样例** : `0`                         | integer (int32) |
| **orgName** <br>_可选_    | 机构名称，如：XX 大数据局第一分部 032 室 <br>**样例** : `"string"` | string          |

<a name="useraddreq"></a>

### UserAddReq

| 名称                    | 说明                               | 类型   |
| ----------------------- | ---------------------------------- | ------ |
| **account** <br>_可选_  | 账号名称 <br>**样例** : `"string"` | string |
| **password** <br>_可选_ | 账号密码 <br>**样例** : `"string"` | string |

<a name="userpageres"></a>

### UserPageRes

| 名称                       | 说明                                             | 类型               |
| -------------------------- | ------------------------------------------------ | ------------------ |
| **createTime** <br>_可选_  | 创建时间 <br>**样例** : `"string"`               | string (date-time) |
| **createUser** <br>_可选_  | 创建人 <br>**样例** : `"string"`                 | string             |
| **userAccount** <br>_可选_ | 账号名称（用于登录） <br>**样例** : `"string"`   | string             |
| **userHash** <br>_可选_    | 用户链上地址 <br>**样例** : `"string"`           | string             |
| **userId** <br>_可选_      | 用户 ID <br>**样例** : `0`                       | integer (int32)    |
| **userIdcard** <br>_可选_  | 身份证号码 <br>**样例** : `"string"`             | string             |
| **userName** <br>_可选_    | 用户姓名 <br>**样例** : `"string"`               | string             |
| **userRole** <br>_可选_    | 用户角色：0-普通成员/1-管理员 <br>**样例** : `0` | integer (int32)    |
| **userStatus** <br>_可选_  | 用户状态：0-不可用/1-可用 <br>**样例** : `0`     | integer (int32)    |

<a name="userrealnamereq"></a>

### UserRealnameReq

| 名称                      | 说明                               | 类型   |
| ------------------------- | ---------------------------------- | ------ |
| **userId** <br>_可选_     | 用户 ID <br>**样例** : `"string"`  | string |
| **userIdcard** <br>_可选_ | 身份证号 <br>**样例** : `"string"` | string |
| **userName** <br>_可选_   | 用户姓名 <br>**样例** : `"string"` | string |

<a name="67f71863b295af656401ee07932e5997"></a>

### 返回结果包装«LoginRes»

| 名称                   | 说明                                            | 类型                  |
| ---------------------- | ----------------------------------------------- | --------------------- |
| **code** <br>_可选_    | 状态码：200 成功；500 失败！ <br>**样例** : `0` | integer (int32)       |
| **data** <br>_可选_    | 结果集 <br>**样例** : `"[loginres](#loginres)"` | [LoginRes](#loginres) |
| **message** <br>_可选_ | 返回结果描述信息 <br>**样例** : `"string"`      | string                |
| **success** <br>_可选_ | **样例** : `true`                               | boolean               |

<a name="b03bf8a0b3be4c1ceb6fba1a2f096a6b"></a>

### 返回结果包装«boolean»

| 名称                   | 说明                                            | 类型            |
| ---------------------- | ----------------------------------------------- | --------------- |
| **code** <br>_可选_    | 状态码：200 成功；500 失败！ <br>**样例** : `0` | integer (int32) |
| **data** <br>_可选_    | 结果集 <br>**样例** : `false`                   | boolean         |
| **message** <br>_可选_ | 返回结果描述信息 <br>**样例** : `"string"`      | string          |
| **success** <br>_可选_ | **样例** : `true`                               | boolean         |
