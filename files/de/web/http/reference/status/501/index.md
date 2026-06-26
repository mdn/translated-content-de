---
title: 501 Not Implemented
slug: Web/HTTP/Reference/Status/501
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`501 Not Implemented`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) bedeutet, dass der Server die für die Erfüllung der Anfrage erforderliche Funktionalität nicht unterstützt.

Eine Antwort mit diesem Status kann auch einen {{HTTPHeader("Retry-After")}}-Header enthalten, der dem Client mitteilt, dass er die Anfrage nach Ablauf der angegebenen Zeit erneut versuchen kann.
Eine `501`-Antwort ist standardmäßig cachingfähig, es sei denn, Cache-Header geben etwas anderes an.

`501` ist die passende Antwort, wenn der Server die Anfragemethode nicht erkennt und nicht in der Lage ist, sie für irgendwelche Ressourcen zu unterstützen.
Server müssen {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} unterstützen und dürfen daher nicht `501` als Antwort auf Anfragen mit diesen Methoden zurückgeben.
Wenn der Server die Methode erkennt, sie aber absichtlich nicht zulässt, ist die passende Antwort {{HTTPStatus("405", "405 Method Not Allowed")}}.

Wenn Sie eine Webseite besucht haben und `501`-Fehler sehen, erfordern diese Probleme eine Untersuchung und Behebung durch die Serverbetreiber oder -administratoren.
Sie können den Cache Ihres Browsers für die Domain leeren, Proxys deaktivieren, falls Sie einen verwenden, oder es später erneut versuchen, um zu sehen, ob es wie erwartet funktioniert.

Eine `501`-Antwort kann auftreten, wenn Proxys nicht in der Lage sind, Anfragemethoden im Kontext von HTTP Extension Framework ({{RFC("2774")}}) Anwendungen zu verarbeiten.
Dieser Status kann auch in Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) auftreten, wenn eine Anfragemethode (`SEARCH`, `PROPFIND`) keinen URL-Handler konfiguriert hat, um sie zu verarbeiten.

## Status

```http
501 Not Implemented
```

## Beispiele

### Erweiterungsmethode nicht unterstützt

Im folgenden Beispiel des HTTP Extension Framework sendet ein Client eine Anfrage mit einer in der `C-MAN`-Header spezifizierten zwingend erforderlichen Erweiterung.
Der {{HTTPHeader("Connection")}}-Header gibt an, dass diese Erweiterungen auf [Hop-by-Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers)-Basis behandelt werden sollen.
Ein Proxy lehnt es ab, die `M-GET`-Methode weiterzuleiten, und sendet eine `501`-Fehlerantwort:

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
- [HTTP-501-Fehler](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications) in der Microsoft ASP.NET-Dokumentation
