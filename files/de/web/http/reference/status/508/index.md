---
title: 508 Loop Detected
slug: Web/HTTP/Reference/Status/508
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`508 Loop Detected`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) gibt an, dass der gesamte Vorgang fehlgeschlagen ist, weil bei der Verarbeitung einer Anfrage mit `Depth: infinity` eine Endlosschleife festgestellt wurde.

Der Status kann im Zusammenhang mit der Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) gegeben werden. Er wurde als Fallback für Fälle eingeführt, in denen WebDAV-Clients {{HTTPStatus("208", "208 Already Reported")}}-Antworten nicht unterstützen (wenn Anfragen nicht explizit einen `DAV`-Header enthalten).

## Status

```http
508 Loop Detected
```

## Beispiele

### Endlosschleife in der WebDAV-Suche

```http
PROPFIND /Coll/ HTTP/1.1
Host: example.com
Depth: infinity
Content-Type: application/xml; charset="utf-8"
Content-Length: 125

<?xml version="1.0" encoding="utf-8" ?>
<D:propfind xmlns:D="DAV:">
  <D:prop> <D:displayname/> </D:prop>
</D:propfind>
```

```http
HTTP/1.1 508 Loop Detected
Content-Type: application/json; charset=utf-8
Server: Microsoft-IIS/8.0
Date: Wed, 15 May 2013 02:38:57 GMT
Content-Length: 72

{
  "Message": "Please check the resources for cyclic references and try again."
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("208", "208 Already Reported")}}
