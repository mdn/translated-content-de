---
title: 302 Found
slug: Web/HTTP/Status/302
l10n:
  sourceCommit: 6d81ba6606ce5473cadd085c37eaf4960e99a238
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`302 Found`** [Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die angeforderte Ressource vorübergehend zur URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource an der URL im `Location`-Header anfordern und den Benutzer zur neuen Seite umleiten. Suchmaschinen, die diese Antwort erhalten, werden Links nicht der ursprünglichen URL zuordnen, was bedeutet, dass kein [SEO](/de/docs/Glossary/SEO)-Wert auf die neue URL übertragen wird.

> [!NOTE]
> Im [Fetch-Standard](https://fetch.spec.whatwg.org/#http-redirect-fetch), wenn ein User-Agent eine `302`-Antwort auf eine {{HTTPMethod("POST")}}-Anfrage erhält, wird die {{HTTPMethod("GET")}}-Methode in der nachfolgenden Umleitungsanfrage verwendet, wie es von der HTTP-[Spezifikation](#spezifikationen) erlaubt ist.
> Um zu verhindern, dass User-Agents die Anfrage ändern, verwenden Sie stattdessen {{HTTPStatus("307", "307 Temporary Redirect")}}, da die Änderung der Methode nach einer `307`-Antwort untersagt ist.
>
> In Fällen, in denen Sie möchten, dass eine beliebige Anfragemethode in {{HTTPMethod("GET")}} geändert wird, verwenden Sie {{HTTPStatus("303", "303 See Other")}}.
> Dies ist nützlich, wenn Sie auf eine {{HTTPMethod("PUT")}}-Methode antworten möchten, die nicht die hochgeladene Ressource ist, sondern eine Bestätigungsnachricht wie: "Sie haben XYZ erfolgreich hochgeladen".

## Status

```http
302 Found
```

## Beispiele

### 302 Antwort mit neuer URL

```http
GET /profile HTTP/1.1
Host: www.example.com
```

```http
HTTP/1.1 302 Found
Location: https://www.example.com/new-profile-url
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("307", "307 Temporary Redirect")}}, entspricht `302`, aber die Anfragemethode wird nicht geändert
- {{HTTPStatus("303", "303 See Other")}}, eine temporäre Umleitung, die die Methode in {{HTTPMethod("GET")}} ändert
- {{HTTPStatus("301", "301 Moved Permanently")}}, eine permanente Umleitung.
