---
title: If-Match header
short-title: If-Match
slug: Web/HTTP/Reference/Headers/If-Match
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`If-Match`** {{Glossary("request_header", "Request-Header")}} macht eine Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests).
Ein Server liefert Ressourcen für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, oder lädt Ressourcen für {{HTTPMethod("PUT")}} und andere nicht sichere Methoden hoch, nur wenn die Ressource mit einem der {{HTTPHeader("ETag")}}-Werte im `If-Match`-Request-Header übereinstimmt.
Wenn die Bedingung nicht erfüllt ist, wird stattdessen die Antwort {{HTTPStatus("412", "412 Precondition Failed")}} zurückgegeben.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _starken Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien byte-by-byte als identisch betrachtet werden.
Wenn ein aufgelistetes `ETag` das Präfix `W/` besitzt, das auf einen schwachen Entitätstag hinweist, wird dieser Vergleichsalgorithmus niemals einen Treffer erzielen.

Es gibt zwei häufige Anwendungsfälle:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, in Kombination mit einem {{HTTPHeader("Range")}}-Header, kann es garantieren, dass die neu angeforderten Bereiche
  von derselben Ressource stammen wie der vorherige.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-Match` verwendet werden, um das [Problem verlorener Aktualisierungen](https://www.w3.org/1999/04/Editing/#3.1) zu verhindern.
  Es kann überprüfen, ob die Modifikation einer Ressource, die der Nutzer hochladen möchte, keine anderen Änderungen überschreibt, die seit dem Abruf der ursprünglichen Ressource vorgenommen wurden.

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
    Sie sind eine Zeichenfolge aus {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt sind (wie `"675af34563dc-tr34"`).
    Sie können mit `W/` vorangestellt werden, um anzuzeigen, dass sie 'schwach' sind, d.h. dass sie die Ressource semantisch, aber nicht byte-by-byte repräsentieren.
    In einem `If-Match`-Header werden schwache Entitätstags jedoch niemals übereinstimmen.
- `*`
  - : Das Sternchen ist ein spezieller Wert, der jede Ressource darstellt.
    Beachten Sie, dass dies als `false` übereinstimmen muss, wenn der Ursprungsserver keine aktuelle Repräsentation für die Zielressource hat.

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
