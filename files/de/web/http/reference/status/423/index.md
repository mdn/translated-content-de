---
title: 423 Locked
slug: Web/HTTP/Reference/Status/423
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`423 Locked`** für [Client-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass eine Ressource _gesperrt_ ist, was bedeutet, dass sie nicht zugänglich ist. Der Antwortkörper sollte Informationen im XML-Format von {{Glossary("WebDAV", "WebDAV")}} enthalten.

> [!NOTE]
> Die Möglichkeit, eine Ressource zu _sperren_, um Konflikte zu vermeiden, ist spezifisch für einige {{Glossary("WebDAV", "WebDAV")}}-Server. Browser, die auf Webseiten zugreifen, werden diesen Statuscode niemals sehen; in fehlerhaften Fällen behandeln sie ihn als generischen {{HTTPStatus(400)}}-Statuscode.

## Status

```http
423 Locked
```

## Beispiele

### WebDAV 423 Locked Antwort

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
