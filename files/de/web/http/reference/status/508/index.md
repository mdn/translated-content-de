---
title: 508 Loop Detected
slug: Web/HTTP/Reference/Status/508
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`508 Loop Detected`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass die gesamte Operation fehlgeschlagen ist, weil eine Endlosschleife bei der Verarbeitung einer Anfrage mit `Depth: infinity` erkannt wurde.

Der Status kann im Kontext des Web-basierten verteilten Authoring und Versioning ({{Glossary("WebDAV", "WebDAV")}}) angegeben werden. Er wurde als Rückfalloption eingeführt für Fälle, in denen WebDAV-Clients keine {{HTTPStatus("208", "208 Already Reported")}} Antworten unterstützen (wenn Anfragen nicht explizit einen `DAV`-Header einschließen).

## Status

```http
508 Loop Detected
```

## Beispiele

### Endlosschleife bei WebDAV-Suche

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
