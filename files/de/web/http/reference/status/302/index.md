---
title: 302 Found
slug: Web/HTTP/Reference/Status/302
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP **`302 Found`** [Redirektions-Statuscode](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zeigt an, dass die angeforderte Ressource vorübergehend zur URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status erhält, wird die Ressource automatisch unter der im `Location`-Header angegebenen URL anfordern und den Benutzer auf die neue Seite weiterleiten. Suchmaschinen, die diese Antwort erhalten, werden die Links zur ursprünglichen URL nicht der neuen Ressource zuordnen, was bedeutet, dass kein {{Glossary("SEO", "SEO")}}-Wert zur neuen URL übertragen wird.

> [!NOTE]
> Im [Fetch Standard](https://fetch.spec.whatwg.org/#http-redirect-fetch) verwendet ein Benutzeragent, der eine `302`-Antwort auf eine {{HTTPMethod("POST")}}-Anfrage erhält, die {{HTTPMethod("GET")}}-Methode in der anschließenden Weiterleitungsanfrage, wie es die HTTP-[Spezifikation](#spezifikationen) erlaubt.
> Um zu verhindern, dass Benutzeragenten die Anfrage ändern, verwenden Sie stattdessen {{HTTPStatus("307", "307 Temporary Redirect")}}, da die Änderung der Methode nach einer `307`-Antwort untersagt ist.
>
> In Fällen, in denen Sie möchten, dass jede Anfragemethode in {{HTTPMethod("GET")}} geändert wird, verwenden Sie {{HTTPStatus("303", "303 See Other")}}.
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

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("307", "307 Temporary Redirect")}}, entspricht `302`, aber die Anfragemethode wird nicht geändert
- {{HTTPStatus("303", "303 See Other")}}, eine temporäre Umleitung, die die Methode zu {{HTTPMethod("GET")}} ändert
- {{HTTPStatus("301", "301 Moved Permanently")}}, eine permanente Weiterleitung.
