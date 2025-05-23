---
title: If-Match header
short-title: If-Match
slug: Web/HTTP/Reference/Headers/If-Match
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`If-Match`**-{{Glossary("request_header", "Request-Header")}} macht eine Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests).
Ein Server wird Ressourcen für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} bereitstellen oder eine Ressource für {{HTTPMethod("PUT")}} und andere unsichere Methoden hochladen, nur wenn die Ressource mit einem der {{HTTPHeader("ETag")}}-Werte im `If-Match`-Request-Header übereinstimmt.
Falls die Bedingung nicht übereinstimmt, wird stattdessen die Antwort {{HTTPStatus("412", "412 Precondition Failed")}} zurückgegeben.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _starken Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien byteweise identisch sein müssen.
Falls ein aufgelistetes `ETag` das `W/`-Präfix trägt, das auf einen schwachen Entity-Tag hinweist, wird dieser Vergleichsalgorithmus niemals passen.

Es gibt zwei übliche Anwendungsfälle:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, in Kombination mit einem {{HTTPHeader("Range")}}-Header, kann sichergestellt werden, dass die neuen angeforderten Bereiche von derselben Ressource stammen wie der vorherige.
- Für andere Methoden, und insbesondere für {{HTTPMethod("PUT")}}, kann `If-Match` verwendet werden, um das [Problem verlorener Aktualisierungen](https://www.w3.org/1999/04/Editing/#3.1) zu verhindern.
  Es kann überprüft werden, ob die Modifikation einer Ressource, die der Benutzer hochladen möchte, nicht eine andere Änderung überschreibt, die seit dem ursprünglichen Abruf der Ressource durchgeführt wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Match: <etag_value>
If-Match: <etag_value>, <etag_value>, …
```

## Direktiven

- `<etag_value>`
  - : Entity-Tags, die die angeforderten Ressourcen eindeutig darstellen.
    Sie sind eine Zeichenfolge von {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt sind (wie `"675af34563dc-tr34"`).
    Sie können mit `W/` vorangestellt sein, um anzuzeigen, dass sie 'schwach' sind, d.h. dass sie die Ressource semantisch, aber nicht byteweise darstellen.
    Allerdings werden in einem `If-Match`-Header schwache Entity-Tags niemals matchen.
- `*`
  - : Der Asterisk ist ein spezieller Wert, der jede Ressource darstellt.
    Beachten Sie, dass dies als `false` matchen muss, wenn der Ursprungsserver keine aktuelle Darstellung für die Zielressource hat.

## Beispiele

```http
If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} bedingte Request-Header
- {{HTTPStatus("412", "412 Precondition Failed")}}
