---
title: 102 Processing
slug: Web/HTTP/Status/102
l10n:
  sourceCommit: 718c0595a624add5e009ca4ec5266b77f8d14243
---

{{HTTPSidebar}}{{deprecated_header}}

Der HTTP-Statuscode **`102 Processing`** [informational response](/de/docs/Web/HTTP/Status#information_responses) zeigt dem Client an, dass eine vollständige Anfrage empfangen wurde und der Server daran arbeitet. Dieser Statuscode wird nur gesendet, wenn der Server erwartet, dass die Anfrage beträchtliche Zeit in Anspruch nimmt.

> [!NOTE]
> Reguläre Webserver geben diese Antwort nicht zurück.
> Dieser Statuscode wurde zuerst in der Web Distributed Authoring and Versioning ([WebDAV](/de/docs/Glossary/WebDAV)) {{RFC("2518")}} eingeführt, aber in {{RFC("4918")}} aus WebDAV entfernt.

## Status

```plain
102 Processing
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieses Feature ist veraltet und Browser werden diesen Antwortheader ignorieren.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("100")}}
- [Anmerkungen zur Entfernung von '102 Processing' in RFC4918](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
