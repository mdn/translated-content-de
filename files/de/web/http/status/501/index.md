---
title: 501 Nicht Implementiert
slug: Web/HTTP/Status/501
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`501 Not Implemented`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Status#server_error_responses) bedeutet, dass der Server die Funktionalität, die zur Erfüllung der Anfrage erforderlich ist, nicht unterstützt.

Eine Antwort mit diesem Status kann auch einen {{HTTPHeader("Retry-After")}}-Header enthalten, der dem Client mitteilt, dass er die Anfrage nach Ablauf der angegebenen Zeit erneut versuchen kann. Eine `501`-Antwort ist standardmäßig zwischenspeicherbar, es sei denn, Caching-Header geben etwas anderes an.

`501` ist die geeignete Antwort, wenn der Server die Anfragemethode nicht erkennt und nicht in der Lage ist, sie für irgendeine Ressource zu unterstützen. Server müssen {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} unterstützen und dürfen daher nicht `501` als Antwort auf Anfragen mit diesen Methoden zurückgeben. Wenn der Server die Methode erkennt, sie aber absichtlich nicht zulässt, ist die passende Antwort {{HTTPStatus("405", "405 Method Not Allowed")}}.

Wenn Sie eine Webseite besucht haben und `501`-Fehler sehen, erfordern diese Probleme Untersuchungen und Korrekturen durch die Serverbesitzer oder Administratoren. Sie können Ihren Browser-Cache für die Domain löschen, Proxies deaktivieren, falls Sie einen verwenden, oder es später erneut versuchen, um zu sehen, ob es wie erwartet funktioniert.

Eine `501`-Antwort kann auftreten, wenn Proxies die im Kontext des HTTP Extension Framework ({{RFC("2774")}}) verwendeten Anfragemethoden nicht verarbeiten können. Dieser Status kann auch im Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) auftreten, wenn eine Anfragemethode (`SEARCH`, `PROPFIND`) keinen konfigurierten URL-Handler zur Verarbeitung hat.

## Status

```http
501 Not Implemented
```

## Beispiele

### Erweiterungsmethode nicht unterstützt

Im folgenden Beispiel des HTTP Extension Framework sendet ein Client eine Anfrage mit einer obligatorischen Erweiterung, die im `C-MAN`-Header angegeben ist. Der {{HTTPHeader("Connection")}}-Header gibt an, dass diese Erweiterungen auf [Hop-by-Hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers)-Basis behandelt werden sollen. Ein Proxy lehnt es ab, die `M-GET`-Methode weiterzuleiten, und sendet als Antwort einen `501`-Fehler:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP 501-Fehler](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications) in der Microsoft ASP.NET Dokumentation
