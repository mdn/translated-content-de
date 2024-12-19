---
title: 307 Temporary Redirect
slug: Web/HTTP/Status/307
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`307 Temporary Redirect`** [Redirect-Antwort](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die angeforderte Ressource vorübergehend an die URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource an der URL im `Location`-Header anfordern und den Nutzer zur neuen Seite weiterleiten.
Suchmaschinen, die diese Antwort erhalten, werden die Links nicht der ursprünglichen URL zuordnen, was bedeutet, dass kein {{Glossary("SEO", "SEO")}}-Wert auf die neue URL übertragen wird.

Die Methode und der Body der ursprünglichen Anfrage werden verwendet, um die umgeleitete Anfrage auszuführen.
In den Fällen, in denen Sie möchten, dass die Anfragemethode in {{HTTPMethod("GET")}} geändert wird, verwenden Sie stattdessen {{HTTPStatus("303", "303 See Other")}}.
Dies ist nützlich, wenn Sie auf eine erfolgreiche {{HTTPMethod("PUT")}}-Anfrage antworten möchten, die nicht die hochgeladene Ressource ist, sondern ein Statusmonitor oder eine Bestätigungsnachricht wie "Sie haben erfolgreich XYZ hochgeladen".

Der Unterschied zwischen `307` und {{HTTPStatus("302")}} besteht darin, dass `307` garantiert, dass der Client **nicht** die Anfragemethode und den Body ändert, wenn die umgeleitete Anfrage gestellt wird.
Bei `302` änderten ältere Clients fälschlicherweise die Methode in {{HTTPMethod("GET")}}.
`307`- und `302`-Antworten sind identisch, wenn die Anfragemethode {{HTTPMethod("GET")}} ist.

## Status

```http
307 Temporary Redirect
```

## Beispiele

### 307-Antwort auf eine verschobene Ressource

Die folgende {{HTTPMethod("GET")}}-Anfrage wird an eine Ressource gestellt, für die eine `307`-Weiterleitung besteht.
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

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("302", "302 Found")}}, das Äquivalent zu `307`, kann aber nicht-{{HTTPMethod("GET")}}-Methoden modifizieren
- {{HTTPStatus("303", "303 See Other")}}, temporäre Weiterleitung, die die Anfragemethode zu {{HTTPMethod("GET")}} ändert
- {{HTTPStatus("301", "301 Moved Permanently")}}, eine permanente Weiterleitung
