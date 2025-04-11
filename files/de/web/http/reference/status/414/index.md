---
title: 414 URI Too Long
slug: Web/HTTP/Reference/Status/414
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`414 URI Too Long`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass eine vom Client angeforderte URI länger war, als der Server bereit ist zu interpretieren.

Es gibt einige seltene Bedingungen, unter denen dieser Fehler auftreten kann:

- ein Client hat eine {{HTTPMethod("POST")}}-Anfrage unsachgemäß in eine {{HTTPMethod("GET")}}-Anfrage mit langen Abfrageinformationen umgewandelt,
- ein Client ist in eine Umleitungsschleife geraten (zum Beispiel, ein umgeleiteter URI-Präfix, der auf einen Suffix von sich selbst zeigt), oder
- der Server wird von einem Client angegriffen, der versucht, potenzielle Sicherheitslücken auszunutzen.

Einige Systeme implementieren `414 URI Too Long` als `414 Request-URI Too Large`.

## Status

```http
414 URI Too Long
```

## Beispiele

### Formularübermittlung mit GET

Im folgenden Beispiel verwendet ein HTML-[`<form>`-Method](/de/docs/Web/HTML/Reference/Elements/form#method) versehentlich `get` anstelle von `post`.
Eine große Menge an Formulardaten wird an die im `action`-Attribut des Formulars angegebene URL angehängt und als GET-Anfrage gesendet:

```http
GET /search?feedback=it+was+the+best+of+times+it+was+the+worst+of+times… HTTP/1.1
Host: example.com
```

Das URI-Längenlimit dieses bestimmten Servers wird mit dieser Anfrage erreicht und es wird eine 414 als Antwort gesendet:

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
