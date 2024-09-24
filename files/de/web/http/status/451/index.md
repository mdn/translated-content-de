---
title: 451 Nicht verfügbar aus rechtlichen Gründen
slug: Web/HTTP/Status/451
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`451 Nicht verfügbar aus rechtlichen Gründen`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Benutzer eine Ressource angefordert hat, die aus rechtlichen Gründen nicht verfügbar ist, wie etwa eine Webseite, für die eine rechtliche Verfügung erlassen wurde.

## Status

```http
451 Unavailable For Legal Reasons
```

## Beispiele

### Antwort mit Link-Header

Dieses Beispiel einer Antwort stammt aus der IETF RFC (siehe unten) und enthält einen Verweis auf [Das Leben des Brian von Monty Python](https://en.wikipedia.org/wiki/Monty_Python's_Life_of_Brian).

> [!NOTE]
> Der {{HTTPHeader("Link")}} Header könnte auch eine `rel="blocked-by"` Relation enthalten, die die Entität identifiziert, die die Blockierung implementiert, und nicht irgendeine andere Entität, die diese anordnet.

Jeder Versuch, die Entität zu identifizieren, die letztendlich dafür verantwortlich ist, dass die Ressource nicht verfügbar ist, gehört in den Antwortkörper, nicht in den `rel="blocked-by"` Link. Dies schließt den Namen der Person oder Organisation ein, die eine rechtliche Forderung gestellt hat, die zur Entfernung des Inhalts führte.

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Wikipedia: HTTP 451](https://en.wikipedia.org/wiki/HTTP_451)
- [Wikipedia: Fahrenheit 451](https://en.wikipedia.org/wiki/Fahrenheit_451) (die diesem Statuscode seine Nummer gab)
