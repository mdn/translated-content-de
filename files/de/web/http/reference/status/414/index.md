---
title: 414 URI Too Long
slug: Web/HTTP/Reference/Status/414
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`414 URI Too Long`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass ein vom Client angefordertes URI länger ist, als der Server bereit ist zu interpretieren.

Es gibt einige seltene Bedingungen, unter denen dieser Fehler auftreten kann:

- Ein Client hat eine {{HTTPMethod("POST")}}-Anfrage unsachgemäß in eine {{HTTPMethod("GET")}}-Anfrage mit langen Abfrageinformationen umgewandelt,
- Ein Client befindet sich in einer Schleife von Weiterleitungen (zum Beispiel ein umgeleitetes URI-Präfix, das auf ein Suffix von sich selbst verweist), oder
- Der Server wird von einem Client angegriffen, der versucht, potenzielle Sicherheitslücken auszunutzen.

Einige Systeme implementieren `414 URI Too Long` als `414 Request-URI Too Large`.

## Status

```http
414 URI Too Long
```

## Beispiele

### Formularübermittlung mit GET

Im folgenden Beispiel verwendet ein HTML-<form>-Element versehentlich die Methode `get` anstelle von `post`.
Eine große Menge an Formulardaten wird der im `action`-Attribut des Formulars angegebenen URL angefügt und als GET-Anfrage gesendet:

```http
GET /search?feedback=it+was+the+best+of+times+it+was+the+worst+of+times… HTTP/1.1
Host: example.com
```

Bei dieser Anfrage wird das URI-Längenlimit des speziellen Servers erreicht, und eine 414-Antwort wird gesendet:

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
