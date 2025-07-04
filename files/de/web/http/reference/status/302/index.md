---
title: 302 Found
slug: Web/HTTP/Reference/Status/302
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`302 Found`** [Redirection Response](/de/docs/Web/HTTP/Reference/Status#redirection_messages) signalisiert, dass die angeforderte Ressource vorübergehend zur URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource unter der URL im `Location`-Header anfordern und den Benutzer zur neuen Seite weiterleiten. Suchmaschinen, die diese Antwort erhalten, werden keine Links zur ursprünglichen URL der neuen Ressource zuordnen, was bedeutet, dass kein {{Glossary("SEO", "SEO")}}-Wert auf die neue URL übertragen wird.

> [!NOTE]
> Im [Fetch Standard](https://fetch.spec.whatwg.org/#http-redirect-fetch), wenn ein User-Agent ein `302` als Antwort auf eine {{HTTPMethod("POST")}}-Anfrage erhält, verwendet er die {{HTTPMethod("GET")}}-Methode in der nachfolgenden Weiterleitungsanfrage, wie es die HTTP-[Spezifikation](#spezifikationen) erlaubt.
> Um zu vermeiden, dass User-Agents die Anfrage modifizieren, verwenden Sie stattdessen {{HTTPStatus("307", "307 Temporary Redirect")}}, da das Ändern der Methode nach einer `307`-Antwort nicht erlaubt ist.
>
> Wenn Sie möchten, dass jede Anfragemethode in {{HTTPMethod("GET")}} geändert wird, verwenden Sie {{HTTPStatus("303", "303 See Other")}}.
> Dies ist nützlich, wenn Sie eine Antwort auf eine {{HTTPMethod("PUT")}}-Methode geben möchten, die nicht die hochgeladene Ressource ist, sondern eine Bestätigungsnachricht wie: "Sie haben XYZ erfolgreich hochgeladen".

## Status

```http
302 Found
```

## Beispiele

### 302-Antwort mit neuer URL

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
- {{HTTPStatus("303", "303 See Other")}}, eine temporäre Weiterleitung, die die Methode zu {{HTTPMethod("GET")}} ändert
- {{HTTPStatus("301", "301 Moved Permanently")}}, eine permanente Weiterleitung.
