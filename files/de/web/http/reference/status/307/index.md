---
title: 307 Temporary Redirect
slug: Web/HTTP/Reference/Status/307
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`307 Temporary Redirect`** [Redirektionsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) Statuscode zeigt an, dass die angeforderte Ressource vorübergehend zur URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource an der URL im `Location`-Header anfordern und den Benutzer zur neuen Seite umleiten.
Suchmaschinen, die diese Antwort erhalten, werden keine Links zur ursprünglichen URL der neuen Ressource zuschreiben, das heißt, es wird kein {{Glossary("SEO", "SEO")}}-Wert an die neue URL übertragen.

Die Methode und der Body der ursprünglichen Anfrage werden wiederverwendet, um die umgeleitete Anfrage auszuführen.
In den Fällen, in denen Sie möchten, dass die Anfragemethode in {{HTTPMethod("GET")}} geändert wird, verwenden Sie stattdessen {{HTTPStatus("303", "303 See Other")}}.
Dies ist nützlich, wenn Sie auf eine erfolgreiche {{HTTPMethod("PUT")}}-Anfrage antworten möchten, die nicht die hochgeladene Ressource ist, sondern ein Statusmonitor oder eine Bestätigungsnachricht wie "Sie haben XYZ erfolgreich hochgeladen".

Der Unterschied zwischen `307` und {{HTTPStatus("302")}} besteht darin, dass `307` garantiert, dass der Client die Anfragemethode und den Body **nicht ändert**, wenn die umgeleitete Anfrage ausgeführt wird.
Bei `302` änderten ältere Clients die Methode fälschlicherweise in {{HTTPMethod("GET")}}.
`307` und `302` Antworten sind identisch, wenn die Anfragemethode {{HTTPMethod("GET")}} ist.

## Status

```http
307 Temporary Redirect
```

## Beispiele

### 307 Antwort auf eine verschobene Ressource

Die folgende {{HTTPMethod("GET")}}-Anfrage wird an eine Ressource gestellt, die eine `307`-Weiterleitung eingerichtet hat.
Der {{HTTPHeader("Location")}}-Header enthält die URL der umgeleiteten Ressource.

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
- {{HTTPStatus("302", "302 Found")}}, das Äquivalent zu `307`, kann jedoch nicht-{{HTTPMethod("GET")}}-Methoden ändern
- {{HTTPStatus("303", "303 See Other")}}, temporäre Umleitung, die die Anfragemethode in {{HTTPMethod("GET")}} ändert
- {{HTTPStatus("301", "301 Moved Permanently")}}, eine permanente Umleitung
