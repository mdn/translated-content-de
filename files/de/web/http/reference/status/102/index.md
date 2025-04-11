---
title: 102 Processing
slug: Web/HTTP/Reference/Status/102
l10n:
  sourceCommit: 67a409e7944352612272e095a26bf325ecfae822
---

{{HTTPSidebar}}{{deprecated_header}}

Der HTTP-Statuscode **`102 Processing`** [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) zeigt dem Client an, dass eine vollständige Anfrage empfangen wurde und der Server daran arbeitet.
Dieser Statuscode wird nur gesendet, wenn der Server erwartet, dass die Anfrage erheblich Zeit in Anspruch nimmt.

> [!NOTE]
> Normale Webserver geben diese Antwort nicht zurück.
> Dieser Statuscode wurde erstmals in Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) {{RFC("2518")}} eingeführt, wurde jedoch in WebDAV in {{RFC("4918")}} entfernt.

## Status

```http
102 Processing
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieses Feature ist veraltet und Browser ignorieren diesen Antwortstatuscode.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100")}}
- [rfc4918 '102 Processing' Entfernungsnotizen](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
