---
title: 102 Processing
slug: Web/HTTP/Reference/Status/102
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{deprecated_header}}

Der HTTP-Statuscode **`102 Processing`** [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) zeigt dem Client an, dass eine vollständige Anfrage empfangen wurde und der Server daran arbeitet.
Dieser Statuscode wird nur gesendet, wenn der Server erwartet, dass die Bearbeitung der Anfrage beträchtliche Zeit in Anspruch nehmen wird.

> [!NOTE]
> Normale Webserver geben diese Antwort nicht zurück.
> Dieser Statuscode wurde zuerst in Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) {{RFC("2518")}} eingeführt, aber in {{RFC("4918")}} aus WebDAV entfernt.

## Status

```plain
102 Processing
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Diese Funktion ist veraltet und Browser werden diesen Antwort-Header ignorieren.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100")}}
- [Anmerkungen zur Entfernung von '102 Processing' in rfc4918](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
