---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`451 Unavailable For Legal Reasons`** ([Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses)) zeigt an, dass der Benutzer eine Ressource angefordert hat, die aus rechtlichen Gründen nicht verfügbar ist, wie zum Beispiel eine Webseite, für die ein rechtliches Vorgehen angeordnet wurde.

## Status

```http
451 Unavailable For Legal Reasons
```

## Beispiele

### Antwort mit Link-Header

Dieses Beispiel für eine Antwort stammt aus dem IETF RFC (siehe unten) und enthält eine Referenz auf [Monty Python's Life of Brian](https://en.wikipedia.org/wiki/Monty_Python's_Life_of_Brian).

> [!NOTE]
> Der {{HTTPHeader("Link")}}-Header könnte auch eine `rel="blocked-by"`-Relation enthalten, die die Entität identifiziert, die die Blockierung implementiert, jedoch nicht die Entität, die sie angeordnet hat.

Jeder Versuch, die letztlich für die Nichtverfügbarkeit der Ressource verantwortliche Entität zu identifizieren, gehört in den Antworttext und nicht in den `rel="blocked-by"` Link. Dies schließt den Namen der Person oder Organisation ein, die eine rechtliche Forderung gestellt hat, die zur Entfernung des Inhalts führte.

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

- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Status)
- [Wikipedia: HTTP 451](https://en.wikipedia.org/wiki/HTTP_451)
- [Wikipedia: Fahrenheit 451](https://en.wikipedia.org/wiki/Fahrenheit_451) (welches diesem Statuscode seine Nummer gab)
