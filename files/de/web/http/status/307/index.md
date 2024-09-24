---
title: 307 Temporäre Umleitung
slug: Web/HTTP/Status/307
l10n:
  sourceCommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{HTTPSidebar}}

Der HTTP-Statuscode für **`307 Temporäre Umleitung`** [Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die angeforderte Ressource vorübergehend an die URL verschoben wurde, die im {{HTTPHeader("Location")}}-Header angegeben ist.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource an der im `Location`-Header angegebenen URL anfordern und den Benutzer zur neuen Seite weiterleiten. Suchmaschinen, die diese Antwort erhalten, werden keine Links zur ursprünglichen URL auf die neue Ressource übertragen, was bedeutet, dass kein {{Glossary("SEO")}}-Wert auf die neue URL übertragen wird.

Die Methode und der Inhalt der ursprünglichen Anfrage werden wiederverwendet, um die umgeleitete Anfrage durchzuführen. In Fällen, in denen Sie möchten, dass die Anfragemethode in {{HTTPMethod("GET")}} geändert wird, verwenden Sie stattdessen {{HTTPStatus("303", "303 See Other")}}. Dies ist nützlich, wenn Sie auf eine erfolgreiche {{HTTPMethod("PUT")}}-Anfrage antworten möchten, die nicht die hochgeladene Ressource ist, sondern eine Statusüberwachung oder Bestätigungsnachricht wie "Sie haben XYZ erfolgreich hochgeladen".

Der Unterschied zwischen `307` und {{HTTPStatus("302")}} besteht darin, dass `307` garantiert, dass der Client die Anfragemethode und den Inhalt **nicht ändert**, wenn die umgeleitete Anfrage gemacht wird. Mit `302` änderten ältere Clients die Methode fälschlicherweise zu {{HTTPMethod("GET")}}. `307`- und `302`-Antworten sind identisch, wenn die Anfragemethode {{HTTPMethod("GET")}} ist.

## Status

```http
307 Temporary Redirect
```

## Beispiele

### 307 Antwort auf eine verschobene Ressource

Die folgende {{HTTPMethod("GET")}}-Anfrage wird an eine Ressource gestellt, die eine `307`-Umleitung eingerichtet hat. Der {{HTTPHeader("Location")}}-Header gibt die URL der umgeleiteten Ressource an.

```http
GET /de/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/2 307
location: /de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("302", "302 Found")}}, das Äquivalent zu `307`, kann jedoch nicht-{{HTTPMethod("GET")}}-Methoden ändern
- {{HTTPStatus("303", "303 See Other")}}, temporäre Umleitung, die die Anfragemethode auf {{HTTPMethod("GET")}} ändert
- {{HTTPStatus("301", "301 Moved Permanently")}}, eine permanente Umleitung
