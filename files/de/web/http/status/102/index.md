---
title: 102 Verarbeitung
slug: Web/HTTP/Status/102
l10n:
  sourceCommit: 718c0595a624add5e009ca4ec5266b77f8d14243
---

{{HTTPSidebar}}{{deprecated_header}}

Der HTTP-Statuscode **`102 Processing`** [informational response](/de/docs/Web/HTTP/Status#information_responses) teilt dem Client mit, dass eine vollständige Anfrage empfangen wurde und der Server daran arbeitet.
Dieser Statuscode wird nur gesendet, wenn der Server erwartet, dass die Anfrage erhebliche Zeit in Anspruch nimmt.

> [!NOTE]
> Normale Web-Server geben diese Antwort nicht zurück.
> Dieser Statuscode wurde erstmals in Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) {{RFC("2518")}} eingeführt, aber in WebDAV durch {{RFC("4918")}} entfernt.

## Status

```plain
102 Processing
```

## Specifications

{{Specifications}}

## Browser compatibility

Dieses Feature ist veraltet und Browser werden diesen Antwort-Header ignorieren.

## Siehe auch

- [HTTP-Statuscodes für Antworten](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("100")}}
- [Notizen zur Entfernung von '102 Processing' in rfc4918](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
