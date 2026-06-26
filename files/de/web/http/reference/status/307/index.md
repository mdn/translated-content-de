---
title: 307 Temporary Redirect
slug: Web/HTTP/Reference/Status/307
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`307 Temporary Redirect`** [Umleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) weist darauf hin, dass die angeforderte Ressource vorübergehend zur URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status empfängt, wird automatisch die Ressource an der im `Location`-Header angegebenen URL anfordern und den Benutzer zur neuen Seite umleiten. Suchmaschinen, die diese Antwort erhalten, werden keine Links zur ursprünglichen URL auf die neue Ressource übertragen, was bedeutet, dass kein {{Glossary("SEO", "SEO")}}-Wert zur neuen URL übertragen wird.

Die Methode und der Inhalt der ursprünglichen Anfrage werden für die umgeleitete Anfrage wiederverwendet. In Fällen, in denen Sie die Anfragemethode in {{HTTPMethod("GET")}} ändern möchten, verwenden Sie stattdessen {{HTTPStatus("303", "303 See Other")}}. Dies ist nützlich, wenn Sie eine Antwort auf eine erfolgreiche {{HTTPMethod("PUT")}}-Anfrage geben möchten, die nicht die hochgeladene Ressource ist, sondern ein Statusmonitor oder eine Bestätigungsnachricht wie "Sie haben XYZ erfolgreich hochgeladen".

Der Unterschied zwischen `307` und {{HTTPStatus("302")}} besteht darin, dass `307` garantiert, dass der Client die Anfragemethode und den Inhalt **nicht ändert**, wenn die umgeleitete Anfrage durchgeführt wird. Bei `302` änderten ältere Clients die Methode falsch in {{HTTPMethod("GET")}}. `307`- und `302`-Antworten sind identisch, wenn die Anfragemethode {{HTTPMethod("GET")}} ist.

## Status

```http
307 Temporary Redirect
```

## Beispiele

### 307-Antwort auf eine verschobene Ressource

Die folgende {{HTTPMethod("GET")}}-Anfrage wird an eine Ressource gestellt, die eine `307`-Umleitung hat. Der {{HTTPHeader("Location")}}-Header gibt die URL der umgeleiteten Ressource an.

```http
GET /en-US/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/2 307
location: /en-US/docs/Learn_web_development/Core/Scripting/Network_requests
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("302", "302 Found")}}, das Äquivalent zu `307`, kann jedoch nicht-{{HTTPMethod("GET")}}-Methoden modifizieren
- {{HTTPStatus("303", "303 See Other")}}, temporäre Umleitung, die die Anfragemethode zu {{HTTPMethod("GET")}} ändert
- {{HTTPStatus("301", "301 Moved Permanently")}}, eine permanente Umleitung
