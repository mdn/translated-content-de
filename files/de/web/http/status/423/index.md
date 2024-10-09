---
title: 423 Locked
slug: Web/HTTP/Status/423
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`423 Locked`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass eine Ressource _gesperrt_ ist, was bedeutet, dass sie nicht zugänglich ist.
Der Antwortkörper sollte Informationen im XML-Format von {{Glossary("WebDAV", "WebDAV")}} enthalten.

> [!NOTE]
> Die Möglichkeit, eine Ressource zu _sperren_, um Konflikte zu vermeiden, ist spezifisch für einige {{Glossary("WebDAV", "WebDAV")}}-Server.
> Browser, die auf Webseiten zugreifen, werden diesen Statuscode niemals antreffen; in den fehlerhaften Fällen, in denen es passiert, behandeln sie ihn als generischen {{HTTPStatus(400)}}-Statuscode.

## Status

```http
423 Locked
```

## Beispiele

### WebDAV 423 Locked-Antwort

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
