---
title: 414 URI Too Long
slug: Web/HTTP/Reference/Status/414
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`414 URI Too Long`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass ein vom Client angefordertes URI länger ist, als der Server bereit ist zu interpretieren.

Es gibt einige seltene Bedingungen, unter denen dieser Fehler auftreten könnte:

- ein Client hat eine {{HTTPMethod("POST")}}-Anfrage unsachgemäß in eine {{HTTPMethod("GET")}}-Anfrage mit langen Abfrageinformationen umgewandelt,
- ein Client hat sich in eine Umleitungsschleife begeben (zum Beispiel ein umgeleiteter URI-Präfix, der auf ein Suffix von sich selbst zeigt), oder
- der Server wird von einem Client angegriffen, der versucht, potenzielle Sicherheitslücken auszunutzen.

Einige Systeme implementieren `414 URI Too Long` als `414 Request-URI Too Large`.

## Status

```http
414 URI Too Long
```

## Beispiele

### Formularübermittlung mit GET

Im folgenden Beispiel verwendet ein HTML-[`<form>`-Element](/de/docs/Web/HTML/Element/form#method) versehentlich `get` statt `post`.
Eine große Menge an Formulardaten wird an die im `action`-Attribut des Formulars angegebene URL angehängt und als GET-Anfrage gesendet:

```http
GET /search?feedback=it+was+the+best+of+times+it+was+the+worst+of+times… HTTP/1.1
Host: example.com
```

Das spezifische URI-Längenlimit des Servers wird mit dieser Anfrage erreicht, und es wird ein 414 als Antwort gesendet:

```http
HTTP/1.1 414 URI Too Long
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Length: 1234

<!doctype html>
<head>
  <title>414 - URI Too Long</title>
</head>
  <body>
    <h1>414 - URI Too Long</h1>
    <p>The URI provided was too long for the server to process.</p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{Glossary("URI", "URI")}}
