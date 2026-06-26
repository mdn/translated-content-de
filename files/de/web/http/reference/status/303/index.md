---
title: 303 See Other
slug: Web/HTTP/Reference/Status/303
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`303 See Other`** [Umleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zeigt an, dass der Browser zur URL im {{HTTPHeader("Location")}}-Header weitergeleitet werden sollte, anstatt die angeforderte Ressource darzustellen.

Dieser Antwortcode wird häufig als Ergebnis einer {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}-Methode zurückgesendet, damit der Client eine Bestätigung abrufen oder eine Darstellung eines realen Objekts anzeigen kann (siehe [HTTP range-14](https://en.wikipedia.org/wiki/HTTPRange-14)).
Die Methode, um die umgeleitete Ressource abzurufen, ist immer {{HTTPMethod("GET")}}.

## Status

```http
303 See Other
```

## Beispiele

### 303-Antwort bei der Formularübermittlung

Der Client in diesem Beispiel sendet eine {{HTTPMethod("POST")}}-Anfrage, um ein Formular für ein generisches Abonnement zu übermitteln.

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

Der Server kann eine Antwort mit einem `303`-Status und einer Bestätigungsseite im {{HTTPHeader("Location")}}-Header zurücksenden, sodass der Benutzer nach dem Empfang der Antwort dorthin umgeleitet wird.

```http
HTTP/1.1 303 See Other
Location: https://www.example.com/confirmation/event/123
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("302", "302 Found")}}, eine temporäre Umleitung
- {{HTTPStatus("307", "307 Temporary Redirect")}}, eine temporäre Umleitung, bei der die Anfragemethode nicht geändert wird
