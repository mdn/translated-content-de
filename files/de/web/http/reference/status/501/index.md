---
title: 501 Not Implemented
slug: Web/HTTP/Reference/Status/501
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`501 Not Implemented`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) bedeutet, dass der Server die für die Erfüllung der Anfrage erforderliche Funktionalität nicht unterstützt.

Eine Antwort mit diesem Status kann auch einen {{HTTPHeader("Retry-After")}}-Header enthalten, der dem Client mitteilt, dass er die Anfrage nach Ablauf der angegebenen Zeit wiederholen kann. Eine `501`-Antwort ist standardmäßig cachefähig, es sei denn, Caching-Header weisen anders an.

`501` ist die angemessene Antwort, wenn der Server die Anfragemethode nicht erkennt und nicht in der Lage ist, sie für eine beliebige Ressource zu unterstützen. Server müssen {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} unterstützen und dürfen daher auf Anfragen mit diesen Methoden nicht mit `501` antworten. Wenn der Server die Methode erkennt, aber absichtlich nicht zulässt, ist die angemessene Antwort {{HTTPStatus("405", "405 Method Not Allowed")}}.

Wenn Sie eine Webseite besucht haben und `501`-Fehler sehen, erfordern diese Probleme eine Untersuchung und Behebung durch die Serverbesitzer oder Administratoren. Sie können den Browser-Cache für die Domäne leeren, Proxys deaktivieren, wenn Sie einen verwenden, oder es später erneut versuchen, um zu sehen, ob es wie erwartet funktioniert.

Eine `501`-Antwort kann auftreten, wenn Proxys die im Kontext von HTTP Extension Framework ({{RFC("2774")}}) Anwendungen verwendeten Anfragemethoden nicht verarbeiten können. Dieser Status kann auch bei Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) auftreten, wenn eine Anfragemethode (`SEARCH`, `PROPFIND`) keinen URL-Handler konfiguriert hat, um sie zu verarbeiten.

## Status

```http
501 Not Implemented
```

## Beispiele

### Erweiterungsmethode nicht unterstützt

Im folgenden Beispiel des HTTP Extension Frameworks sendet ein Client eine Anfrage mit einer obligatorischen Erweiterung, die im `C-MAN`-Header angegeben ist. Der {{HTTPHeader("Connection")}}-Header gibt an, dass diese Erweiterungen auf einer [Hop-by-Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers)-Basis behandelt werden sollen. Ein Proxy lehnt es ab, die `M-GET`-Methode weiterzuleiten, und sendet eine `501`-Fehlerantwort:

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
- [HTTP 501-Fehler](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications) in der Microsoft ASP.NET-Dokumentation
