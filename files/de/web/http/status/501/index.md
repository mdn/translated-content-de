---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`501 Not Implemented`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) bedeutet, dass der Server die Funktionalität, die zur Erfüllung der Anfrage erforderlich ist, nicht unterstützt.

Eine Antwort mit diesem Status kann auch einen {{HTTPHeader("Retry-After")}}-Header enthalten, der dem Client mitteilt, dass er die Anfrage nach Ablauf der angegebenen Zeit erneut versuchen kann.
Eine `501`-Antwort ist standardmäßig cachefähig, es sei denn, Caching-Header weisen etwas anderes an.

`501` ist die geeignete Antwort, wenn der Server die Anfragemethode nicht erkennt und nicht in der Lage ist, sie für eine Ressource zu unterstützen.
Server sind verpflichtet, {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} zu unterstützen und dürfen daher auf Anfragen mit diesen Methoden keine `501`-Antwort zurückgeben.
Wenn der Server die Methode erkennt, aber absichtlich nicht zulässt, ist die geeignete Antwort {{HTTPStatus("405", "405 Method Not Allowed")}}.

Wenn Sie eine Webseite besucht haben und `501`-Fehler sehen, erfordern diese Probleme eine Untersuchung und Behebung durch Serverbesitzer oder Administratoren.
Sie können Ihren Browser-Cache für die Domäne leeren, Proxys deaktivieren, wenn Sie einen verwenden, oder später erneut versuchen, um zu sehen, ob es wie erwartet funktioniert.

Eine `501`-Antwort kann auftreten, wenn Proxys die im Kontext von HTTP Extension Framework ({{RFC("2774")}}) verwendeten Anfragemethoden nicht verarbeiten können.
Dieser Status kann auch bei Web Distributed Authoring and Versioning ([WebDAV](/de/docs/Glossary/WebDAV)) auftreten, wenn für eine Anfragemethode (`SEARCH`, `PROPFIND`) kein URL-Handler konfiguriert ist, um sie zu verarbeiten.

## Status

```http
501 Not Implemented
```

## Beispiele

### Erweiterungsmethode nicht unterstützt

Im folgenden Beispiel des HTTP Extension Framework sendet ein Client eine Anfrage mit einer im `C-MAN`-Header angegebenen obligatorischen Erweiterung.
Der {{HTTPHeader("Connection")}}-Header gibt an, dass diese Erweiterungen auf einer [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers)-Basis behandelt werden sollen.
Ein Proxy verweigert die Weiterleitung der `M-GET`-Methode und sendet als Antwort einen `501`-Fehler:

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
