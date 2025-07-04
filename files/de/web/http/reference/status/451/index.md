---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Reference/Status/451
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`451 Unavailable For Legal Reasons`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Benutzer eine Ressource angefordert hat, die aus rechtlichen Gründen nicht verfügbar ist, wie zum Beispiel eine Webseite, für die eine rechtliche Anordnung erlassen wurde.

## Status

```http
451 Unavailable For Legal Reasons
```

## Beispiele

### Antwort mit Link-Header

Dieses Beispiel wurde aus dem IETF RFC (siehe unten) entnommen und enthält einen Verweis auf [Das Leben des Brian von Monty Python](https://en.wikipedia.org/wiki/Monty_Python's_Life_of_Brian).

> [!NOTE]
> Der {{HTTPHeader("Link")}}-Header könnte auch eine `rel="blocked-by"`-Relation enthalten, die die Einrichtung identifiziert, die die Blockierung durchführt, aber nicht die Einrichtung, die sie anordnet.

Jeder Versuch, die Einrichtung zu identifizieren, die letztendlich dafür verantwortlich ist, dass die Ressource nicht verfügbar ist, sollte im Antworttext und nicht im `rel="blocked-by"`-Link enthalten sein. Dies schließt den Namen der Person oder Organisation ein, die eine rechtliche Forderung gestellt hat, die zur Entfernung des Inhalts führte.

```http
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html

<html>
      <head><title>Unavailable For Legal Reasons</title></head>
      <body>
            <h1>Unavailable For Legal Reasons</h1>
            <p>This request may not be serviced in the Roman Province
            of Judea due to the Lex Julia Majestatis, which disallows
            access to resources hosted on servers deemed to be
            operated by the People's Front of Judea.</p>
      </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Wikipedia: HTTP 451](https://en.wikipedia.org/wiki/HTTP_451)
- [Wikipedia: Fahrenheit 451](https://en.wikipedia.org/wiki/Fahrenheit_451) (welches dieser Statuscode seine Nummer verdankt)
