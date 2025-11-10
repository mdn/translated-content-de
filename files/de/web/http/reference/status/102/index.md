---
title: 102 Processing
slug: Web/HTTP/Reference/Status/102
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{deprecated_header}}

Der HTTP-Statuscode **`102 Processing`** [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) zeigt dem Client an, dass eine vollständige Anfrage empfangen wurde und der Server daran arbeitet.
Dieser Statuscode wird nur gesendet, wenn der Server erwartet, dass die Anfrage beträchtliche Zeit in Anspruch nehmen wird.

> [!NOTE]
> Reguläre Webserver geben diese Antwort nicht zurück.
> Dieser Statuscode wurde zuerst in Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) {{RFC("2518")}} eingeführt, aber in {{RFC("4918")}} aus WebDAV entfernt.

## Status

```http
102 Processing
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Diese Funktion ist veraltet, und Browser werden diesen Antwortstatuscode ignorieren.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100")}}
- [rfc4918 '102 Processing' Entfernungsnotizen](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
