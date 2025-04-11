---
title: 102 Processing
slug: Web/HTTP/Reference/Status/102
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

{{HTTPSidebar}}{{deprecated_header}}

Der HTTP-Statuscode **`102 Processing`** [informationsbezogene Antwort](/de/docs/Web/HTTP/Reference/Status#informational_responses) zeigt dem Client an, dass eine vollständige Anfrage empfangen wurde und der Server daran arbeitet.
Dieser Statuscode wird nur gesendet, wenn der Server erwartet, dass die Bearbeitung der Anfrage beträchtliche Zeit in Anspruch nehmen wird.

> [!NOTE]
> Normale Webserver geben diese Antwort nicht zurück.
> Dieser Statuscode wurde erstmals in Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) {{RFC("2518")}} eingeführt, jedoch in {{RFC("4918")}} aus WebDAV entfernt.

## Status

```http
102 Processing
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Diese Funktion ist veraltet und Browser ignorieren dieses Antwort-Header.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100")}}
- [rfc4918 '102 Processing' Entfernungshinweise](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
