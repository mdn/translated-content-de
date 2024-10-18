---
title: 102 Processing
slug: Web/HTTP/Status/102
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{HTTPSidebar}}{{deprecated_header}}

Der HTTP-Statuscode **`102 Processing`** [informational response](/de/docs/Web/HTTP/Status#informational_responses) zeigt dem Client an, dass eine vollständige Anfrage empfangen wurde und der Server daran arbeitet. Dieser Statuscode wird nur gesendet, wenn der Server erwartet, dass die Anfrage erhebliche Zeit in Anspruch nehmen wird.

> [!NOTE]
> Reguläre Webserver geben diese Antwort nicht zurück.
> Dieser Statuscode wurde zuerst in Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) {{RFC("2518")}} eingeführt, wurde jedoch in WebDAV in {{RFC("4918")}} entfernt.

## Status

```plain
102 Processing
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Diese Funktion ist veraltet und Browser ignorieren diesen Antwort-Header.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("100")}}
- [Notizen zur Entfernung von '102 Processing' in rfc4918](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
