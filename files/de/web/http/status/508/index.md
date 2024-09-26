---
title: 508 Schleife erkannt
slug: Web/HTTP/Status/508
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode für den **`508 Schleife erkannt`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) gibt an, dass die gesamte Operation fehlgeschlagen ist, da beim Verarbeiten einer Anfrage mit `Depth: infinity` eine Endlosschleife aufgetreten ist.

Der Status kann im Kontext des Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) angegeben werden.
Er wurde als Fallback eingeführt für Fälle, in denen WebDAV-Clients {{HTTPStatus("208", "208 Already Reported")}}-Antworten nicht unterstützen (wenn Anfragen nicht explizit einen `DAV`-Header enthalten).

## Status

```http
508 Loop Detected
```

## Spezifikationen

{{Specifications}}

## Beispiele

### Endlosschleife in WebDAV-Suche

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

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("208", "208 Already Reported")}}