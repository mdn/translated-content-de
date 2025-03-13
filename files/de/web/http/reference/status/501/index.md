---
title: 501 Not Implemented
slug: Web/HTTP/Reference/Status/501
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`501 Not Implemented`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) bedeutet, dass der Server die Funktionalität, die zur Erfüllung der Anfrage erforderlich ist, nicht unterstützt.

Eine Antwort mit diesem Status kann auch einen {{HTTPHeader("Retry-After")}} Header enthalten, der dem Client mitteilt, dass er die Anfrage nach Ablauf der angegebenen Zeit erneut versuchen kann. Eine `501`-Antwort ist standardmäßig zwischenspeicherbar, es sei denn, Cache-Header geben etwas anderes an.

`501` ist die angemessene Antwort, wenn der Server die Anfragemethode nicht erkennt und nicht in der Lage ist, sie für eine Ressource zu unterstützen. Server sind verpflichtet, die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} zu unterstützen und dürfen daher nicht mit `501` auf Anfragen mit diesen Methoden antworten. Wenn der Server die Methode erkennt, sie aber absichtlich nicht zulässt, ist die angemessene Antwort {{HTTPStatus("405", "405 Method Not Allowed")}}.

Wenn Sie eine Webseite besucht haben und `501`-Fehler sehen, erfordern diese Probleme eine Untersuchung und Behebung durch die Serverbesitzer oder -administratoren. Sie können den Browser-Cache für die Domain leeren, Proxys deaktivieren, falls Sie einen verwenden, oder später erneut versuchen, um zu sehen, ob es wie erwartet funktioniert.

Eine `501`-Antwort kann auftreten, wenn Proxys nicht in der Lage sind, Anfragemethoden im Kontext von Anwendungen des HTTP Extension Framework ({{RFC("2774")}}) zu handhaben. Dieser Status kann auch in Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) auftreten, wenn für eine Anfragemethode (`SEARCH`, `PROPFIND`) kein URL-Handler konfiguriert ist, um sie zu verarbeiten.

## Status

```http
501 Not Implemented
```

## Beispiele

### Erweiterungsmethode wird nicht unterstützt

Im folgenden Beispiel des HTTP Extension Framework sendet ein Client eine Anfrage mit einer zwingend erforderlichen Erweiterung, die im `C-MAN` Header angegeben ist. Der {{HTTPHeader("Connection")}} Header gibt an, dass diese Erweiterungen auf einer [hop-by-hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) Basis behandelt werden sollen. Ein Proxy lehnt es ab, die `M-GET` Methode weiterzuleiten, und sendet als Antwort einen `501` Fehler:

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 501 Not Implemented
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP 501 Fehler](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications) in der Microsoft ASP.NET Dokumentation
