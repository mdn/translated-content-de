---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
l10n:
  sourceCommit: e626fb706bfef0d496f0a209554f80a2d9313c0c
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`508 Loop Detected`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass der gesamte Vorgang fehlgeschlagen ist, da während der Verarbeitung einer Anfrage mit `Depth: infinity` eine Endlosschleife entdeckt wurde.

Der Status kann im Kontext des Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) angegeben werden. Er wurde als Lösung für Fälle eingeführt, in denen WebDAV-Clients {{HTTPStatus("208", "208 Already Reported")}}-Antworten nicht unterstützen (wenn Anfragen nicht explizit einen `DAV`-Header enthalten).

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("208", "208 Already Reported")}}
