---
title: 307 Temporary Redirect
slug: Web/HTTP/Status/307
l10n:
  sourceCommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`307 Temporary Redirect`** [Weiterleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die angeforderte Ressource vorübergehend zur URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status empfängt, wird automatisch die Ressource unter der URL im `Location`-Header anfordern und den Benutzer zur neuen Seite weiterleiten. Suchmaschinen, die diese Antwort erhalten, werden keine Links zur ursprünglichen URL der neuen Ressource zuordnen, was bedeutet, dass kein [SEO](/de/docs/Glossary/SEO)-Wert auf die neue URL übertragen wird.

Die Methode und der Inhalt der ursprünglichen Anfrage werden erneut genutzt, um die weitergeleitete Anfrage durchzuführen. In Fällen, in denen Sie möchten, dass die Anfragemethode zu {{HTTPMethod("GET")}} geändert wird, verwenden Sie stattdessen {{HTTPStatus("303", "303 See Other")}}. Dies ist nützlich, wenn Sie eine Antwort auf eine erfolgreiche {{HTTPMethod("PUT")}}-Anfrage geben möchten, die nicht die hochgeladene Ressource ist, sondern ein Statusmonitor oder eine Bestätigungsnachricht wie "Sie haben erfolgreich XYZ hochgeladen".

Der Unterschied zwischen `307` und {{HTTPStatus("302")}} besteht darin, dass `307` garantiert, dass der Client die Anfragemethode und den Inhalt bei der weitergeleiteten Anfrage **nicht ändern** wird. Bei `302` änderten ältere Clients die Methode fälschlicherweise zu {{HTTPMethod("GET")}}. `307` und `302`-Antworten sind identisch, wenn die Anfragemethode {{HTTPMethod("GET")}} ist.

## Status

```http
307 Temporary Redirect
```

## Beispiele

### 307 Antwort auf eine verschobene Ressource

Die folgende {{HTTPMethod("GET")}}-Anfrage wird an eine Ressource gestellt, die eine `307`-Weiterleitung eingerichtet hat. Der {{HTTPHeader("Location")}}-Header liefert die URL der weitergeleiteten Ressource.

```http
GET /en-US/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/2 307
location: /en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("302", "302 Found")}}, das Äquivalent zu `307`, kann jedoch nicht-{{HTTPMethod("GET")}}-Methoden ändern
- {{HTTPStatus("303", "303 See Other")}}, temporäre Weiterleitung, die die Anfragemethode zu {{HTTPMethod("GET")}} ändert
- {{HTTPStatus("301", "301 Moved Permanently")}}, eine permanente Weiterleitung
