---
title: 307 Temporary Redirect
slug: Web/HTTP/Reference/Status/307
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`307 Temporary Redirect`** [Redirectionsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zeigt an, dass die angeforderte Ressource vorübergehend an die URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status erhält, fordert automatisch die Ressource an der URL im `Location`-Header an und leitet den Benutzer zur neuen Seite weiter.
Suchmaschinen, die diese Antwort erhalten, weisen keine Links von der ursprünglichen URL der neuen Ressource zu, was bedeutet, dass kein {{Glossary("SEO", "SEO")}}-Wert auf die neue URL übertragen wird.

Die Methode und der Inhalt der ursprünglichen Anfrage werden wiederverwendet, um die umgeleitete Anfrage auszuführen.
In Fällen, in denen Sie möchten, dass die Anfragemethode in {{HTTPMethod("GET")}} geändert wird, verwenden Sie stattdessen {{HTTPStatus("303", "303 See Other")}}.
Dies ist nützlich, wenn Sie auf eine erfolgreiche {{HTTPMethod("PUT")}}-Anfrage antworten möchten, die nicht die hochgeladene Ressource ist, sondern eine Statusüberwachung oder Bestätigungsnachricht wie "Sie haben XYZ erfolgreich hochgeladen".

Der Unterschied zwischen `307` und {{HTTPStatus("302")}} besteht darin, dass `307` garantiert, dass der Client die Anfragemethode und den Inhalt der Anfrage **nicht ändert**, wenn die umgeleitete Anfrage gestellt wird.
Mit `302` änderten ältere Clients die Methode fälschlicherweise in {{HTTPMethod("GET")}}.
`307`- und `302`-Antworten sind identisch, wenn die Anfragemethode {{HTTPMethod("GET")}} ist.

## Status

```http
307 Temporary Redirect
```

## Beispiele

### 307-Antwort auf eine verschobene Ressource

Die folgende {{HTTPMethod("GET")}}-Anfrage wird an eine Ressource gestellt, bei der eine `307`-Umleitung aktiv ist.
Der {{HTTPHeader("Location")}}-Header liefert die URL der umgeleiteten Ressource.

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
