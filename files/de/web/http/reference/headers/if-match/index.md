---
title: If-Match
slug: Web/HTTP/Reference/Headers/If-Match
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`If-Match`** {{Glossary("request_header", "Request-Header")}} macht eine Anfrage [kontextabhängig](/de/docs/Web/HTTP/Guides/Conditional_requests).
Ein Server wird Ressourcen für {{HTTPMethod("GET")}}- und {{HTTPMethod("HEAD")}}-Methoden zurückgeben oder die Ressource für {{HTTPMethod("PUT")}}- und andere nicht-sichere Methoden hochladen, nur wenn die Ressource mit einem der {{HTTPHeader("ETag")}}-Werte im `If-Match`-Request-Header übereinstimmt.
Wenn die Bedingung nicht erfüllt ist, wird stattdessen die Antwort {{HTTPStatus("412", "412 Precondition Failed")}} zurückgegeben.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} nutzt den _strong comparison algorithm_, was bedeutet, dass zwei Dateien byteweise identisch sein müssen.
Wenn ein aufgelisteter `ETag` das Präfix `W/` hat, was einen schwachen Entitätstag anzeigt, wird dieser Vergleichsalgorithmus niemals einen Treffer erzielen.

Es gibt zwei gängige Anwendungsfälle:

- Für {{HTTPMethod("GET")}}- und {{HTTPMethod("HEAD")}}-Methoden kann in Kombination mit einem {{HTTPHeader("Range")}}-Header garantiert werden, dass die neu angeforderten Bereiche von derselben Ressource stammen wie der vorherige.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-Match` verwendet werden, um das [Lost-Update-Problem](https://www.w3.org/1999/04/Editing/#3.1) zu verhindern.
  Es kann überprüft werden, ob die Änderung einer Ressource, die der Benutzer hochladen möchte, nicht eine andere Änderung überschreibt, die seit dem Abrufen der ursprünglichen Ressource stattgefunden hat.

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
  - : Entitätstags, die die angeforderten Ressourcen eindeutig repräsentieren.
    Sie sind eine Zeichenkette von {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt sind (wie `"675af34563dc-tr34"`).
    Sie können mit `W/` vorangestellt werden, um anzuzeigen, dass sie "schwach" sind, d.h., dass sie die Ressource semantisch, aber nicht byteweise repräsentieren.
    In einem `If-Match`-Header werden schwache Entitätstags jedoch niemals übereinstimmen.
- `*`
  - : Der Asterisk ist ein spezieller Wert, der jede Ressource repräsentiert.
    Beachten Sie, dass dies als `false` übereinstimmen muss, wenn der Ursprungsserver keine aktuelle Darstellung für die Zielressource hat.

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
- {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} kontextabhängige Request-Header
- {{HTTPStatus("412", "412 Precondition Failed")}}
