---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`414 URI Too Long`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass ein vom Client angeforderter URI länger war, als der Server interpretieren möchte.

Es gibt einige seltene Bedingungen, unter denen dieser Fehler auftreten kann:

- ein Client hat eine {{HTTPMethod("POST")}}-Anfrage unsachgemäß in eine {{HTTPMethod("GET")}}-Anfrage mit langen Abfrageinformationen umgewandelt,
- ein Client ist in eine Umleitungsschleife geraten (zum Beispiel ein umgeleitetes URI-Präfix, das auf ein Suffix von sich selbst verweist), oder
- der Server wird von einem Client angegriffen, der versucht, mögliche Sicherheitslücken auszunutzen.

Einige Systeme implementieren `414 URI Too Long` als `414 Request-URI Too Large`.

## Status

```http
414 URI Too Long
```

## Beispiele

### Formularübermittlung mit GET

Im folgenden Beispiel verwendet ein HTML-[`<form>`-Method](/de/docs/Web/HTML/Element/form#method) versehentlich `get` anstelle von `post`.
Eine große Menge an Formulardaten wird an die im `action`-Attribut des Formulars angegebene URL angehängt und als GET-Anfrage gesendet:

```http
GET /search?feedback=it+was+the+best+of+times+it+was+the+worst+of+times… HTTP/1.1
Host: example.com
```

Das URI-Längenlimit dieses speziellen Servers ist mit dieser Anfrage erreicht und ein 414 wird als Antwort gesendet:

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

- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Status)
- [URI](/de/docs/Glossary/URI)
