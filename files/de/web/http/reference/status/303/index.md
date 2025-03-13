---
title: 303 See Other
slug: Web/HTTP/Reference/Status/303
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`303 See Other`** für [Umleitungsantworten](/de/docs/Web/HTTP/Reference/Status#redirection_messages) gibt an, dass der Browser zur URL im {{HTTPHeader("Location")}}-Header weiterleiten soll, anstatt die angeforderte Ressource darzustellen.

Dieser Antwortcode wird häufig als Ergebnis von {{HTTPMethod("PUT")}}- oder {{HTTPMethod("POST")}}-Methoden zurückgesendet, sodass der Client eine Bestätigung abrufen oder eine Darstellung eines realen Objekts anzeigen kann (siehe [HTTP range-14](https://en.wikipedia.org/wiki/HTTPRange-14)).
Die Methode zum Abrufen der umgeleiteten Ressource ist immer {{HTTPMethod("GET")}}.

## Status

```http
303 See Other
```

## Beispiele

### 303-Antwort bei Formularübermittlung

Der Client in diesem Beispiel sendet eine {{HTTPMethod("POST")}}-Anfrage, um ein Formular an ein generisches Abonnement zu übermitteln.

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

Der Server kann eine Antwort mit einem `303`-Status und einer Bestätigungsseite im {{HTTPHeader("Location")}}-Header zurücksenden, sodass der Benutzer nach Empfang der Antwort dorthin umgeleitet wird.

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
