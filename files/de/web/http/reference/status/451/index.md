---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Reference/Status/451
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`451 Unavailable For Legal Reasons`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Benutzer eine Ressource angefordert hat, die aus rechtlichen Gründen nicht verfügbar ist, wie z.B. eine Webseite, für die eine rechtliche Maßnahme ergriffen wurde.

## Status

```http
451 Unavailable For Legal Reasons
```

## Beispiele

### Antwort mit Link-Header

Dieses Beispiel einer Antwort stammt aus dem IETF RFC (siehe unten) und enthält einen Verweis auf [Das Leben des Brian von Monty Python](https://en.wikipedia.org/wiki/Monty_Python's_Life_of_Brian).

> [!NOTE]
> Der {{HTTPHeader("Link")}}-Header könnte auch eine `rel="blocked-by"`-Beziehung enthalten, die die Entität identifiziert, die die Blockierung implementiert, nicht eine andere Entität, die sie anordnet.

Jeder Versuch, die letztendlich für die Nichtverfügbarkeit der Ressource verantwortliche Entität zu identifizieren, gehört in den Antwortkörper, nicht in den `rel="blocked-by"`-Link. Dazu gehört der Name der Person oder der Organisation, die eine rechtliche Forderung gestellt hat, die zur Entfernung des Inhalts geführt hat.

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

- [HTTP-Antwort-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Wikipedia: HTTP 451](https://en.wikipedia.org/wiki/HTTP_451)
- [Wikipedia: Fahrenheit 451](https://en.wikipedia.org/wiki/Fahrenheit_451) (von dem dieser Statuscode seine Nummer erhalten hat)
