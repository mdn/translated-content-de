---
title: 102 Processing
slug: Web/HTTP/Reference/Status/102
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{deprecated_header}}

Der HTTP-Statuscode **`102 Processing`** [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) zeigt dem Client an, dass eine vollständige Anfrage eingegangen ist und der Server daran arbeitet.
Dieser Statuscode wird nur gesendet, wenn der Server erwartet, dass die Bearbeitung der Anfrage erhebliche Zeit in Anspruch nimmt.

> [!NOTE]
> Reguläre Webserver geben diese Antwort nicht zurück.
> Dieser Statuscode wurde zuerst im "Web Distributed Authoring and Versioning" ({{Glossary("WebDAV", "WebDAV")}}) {{RFC("2518")}} eingeführt, aber in {{RFC("4918")}} aus WebDAV entfernt.

## Status

```http
102 Processing
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieses Feature ist veraltet und Browser werden diesen Antwort-Statuscode ignorieren.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100")}}
- [RFC4918 '102 Processing' Entfernungsnotizen](https://www.rfc-editor.org/info/rfc4918/#section-21.4)
