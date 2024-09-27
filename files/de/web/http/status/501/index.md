---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`501 Not Implemented`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) bedeutet, dass der Server die für die Erfüllung der Anfrage erforderliche Funktionalität nicht unterstützt.

Eine Antwort mit diesem Status kann auch einen {{HTTPHeader("Retry-After")}} Header enthalten, der dem Client mitteilt, dass er die Anfrage nach Ablauf der angegebenen Zeit erneut versuchen kann. Eine `501`-Antwort ist standardmäßig cachefähig, es sei denn, Cache-Header geben etwas anderes an.

`501` ist die passende Antwort, wenn der Server die Anfrage-Methode nicht erkennt und sie für keine Ressource unterstützt. Server müssen {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} unterstützen und dürfen daher keine `501`-Antwort auf Anfragen mit diesen Methoden zurückgeben. Wenn der Server die Methode erkennt, sie aber absichtlich nicht erlaubt, ist die passende Antwort {{HTTPStatus("405", "405 Method Not Allowed")}}.

Wenn Sie eine Webseite besucht haben und `501`-Fehler sehen, erfordern diese Probleme Untersuchungen und Behebungen durch Serverbesitzer oder Administratoren. Sie können den Browser-Cache für die Domäne leeren, Proxys deaktivieren, wenn Sie einen verwenden, oder es später erneut versuchen, um festzustellen, ob es wie erwartet funktioniert.

Eine `501`-Antwort kann auftreten, wenn Proxys die in HTTP Extension Framework ({{RFC("2774")}}) Anwendungen verwendeten Anfragemethoden nicht verarbeiten können. Dieser Status kann auch bei Web Distributed Authoring and Versioning ([WebDAV](/de/docs/Glossary/WebDAV)) auftreten, wenn eine Anfragemethode (`SEARCH`, `PROPFIND`) keinen konfigurierten URL-Handler hat, um sie zu verarbeiten.

## Status

```http
501 Not Implemented
```

## Beispiele

### Erweiterungsmethode nicht unterstützt

Im folgenden Beispiel des HTTP Extension Frameworks sendet ein Client eine Anfrage mit einer verpflichtenden Erweiterung, die im `C-MAN` Header angegeben ist. Der {{HTTPHeader("Connection")}} Header gibt an, dass diese Erweiterungen auf Basis von [Hop-by-Hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) behandelt werden. Ein Proxy verweigert es, die `M-GET` Methode weiterzuleiten, und sendet eine `501`-Fehlerantwort:

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
- [HTTP 501 Fehler](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications) in der Microsoft ASP.NET Dokumentation
