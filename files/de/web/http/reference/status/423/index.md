---
title: 423 Locked
slug: Web/HTTP/Reference/Status/423
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`423 Locked`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass eine Ressource _gesperrt_ ist, was bedeutet, dass sie nicht zugänglich ist. Ihr Antworttext sollte Informationen im XML-Format von {{Glossary("WebDAV", "WebDAV")}} enthalten.

> [!NOTE]
> Die Fähigkeit, eine Ressource zu _sperren_, um Konflikte zu verhindern, ist spezifisch für einige {{Glossary("WebDAV", "WebDAV")}}-Server.
> Browser, die auf Webseiten zugreifen, werden diesen Statuscode nie antreffen; in fehlerhaften Fällen, in denen es passiert, werden sie es als generischen {{HTTPStatus(400)}}-Statuscode behandeln.

## Status

```http
423 Locked
```

## Beispiele

### WebDAV 423 Gesperrt Antwort

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"
Content-Length: xxxx

<?xml version="1.0" encoding="utf-8" ?>
<D:error xmlns:D="DAV:">
  <D:lock-token-submitted>
    <D:href>/workspace/web-dav/</D:href>
  </D:lock-token-submitted>
</D:error>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
