---
title: 414 URI Zu Lang
slug: Web/HTTP/Status/414
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`414 URI Too Long`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass ein vom Client angeforderter URI länger ist, als der Server zu interpretieren bereit ist.

Es gibt einige seltene Bedingungen, unter denen dieser Fehler auftreten kann:

- ein Client hat eine {{HTTPMethod("POST")}}-Anfrage unsachgemäß in eine {{HTTPMethod("GET")}}-Anfrage mit langen Abfrageinformationen umgewandelt,
- ein Client ist in eine Umleitungsschleife geraten (zum Beispiel ein weitergeleiteter URI-Präfix, der auf einen Suffix seiner selbst verweist), oder
- der Server wird von einem Client angegriffen, der versucht, potenzielle Sicherheitslücken auszunutzen.

Einige Systeme implementieren `414 URI Too Long` als `414 Request-URI Too Large`.

## Status

```http
414 URI Too Long
```

## Beispiele

### Formularübermittlung mit GET

Im folgenden Beispiel verwendet ein HTML-[`<form>`-Element](/de/docs/Web/HTML/Element/form#method) versehentlich `get` anstatt `post`.
Eine große Menge an Formulardaten wird der URL hinzugefügt, die im `action`-Attribut des Formulars angegeben ist, und als GET-Anfrage gesendet:

```http
GET /search?feedback=it+was+the+best+of+times+it+was+the+worst+of+times… HTTP/1.1
Host: example.com
```

Die URI-Längenbeschränkung dieses speziellen Servers wird mit dieser Anfrage erreicht und eine 414-Antwort wird zurückgegeben:

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

- [HTTP Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{Glossary("URI")}}
