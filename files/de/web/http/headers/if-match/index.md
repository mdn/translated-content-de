---
title: If-Match
slug: Web/HTTP/Headers/If-Match
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{HTTPSidebar}}

Der HTTP-Anforderungsheader **`If-Match`** macht eine Anfrage bedingt.

Ein Server wird die angeforderten Ressourcen nur für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} zurückgeben oder Ressourcen für {{HTTPMethod("PUT")}} und andere nicht sichere Methoden hochladen, wenn die Ressource mit einem der aufgelisteten {{HTTPHeader("ETag")}}-Werte übereinstimmt. Wenn die Bedingung nicht erfüllt ist, wird die Antwort {{HTTPStatus("412")}} (Precondition Failed) zurückgegeben.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _starken Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien nur dann als identisch betrachtet werden, wenn sie byteweise identisch sind. Wenn ein aufgelisteter `ETag` das `W/`-Präfix hat, das einen schwachen Entitätstag anzeigt, wird dieser Vergleichsalgorithmus niemals übereinstimmen.

Es gibt zwei gängige Anwendungsfälle:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, in Kombination mit einem {{HTTPHeader("Range")}}-Header, kann es garantieren, dass die neuen angeforderten Bereiche von der gleichen Ressource stammen wie der vorherige.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-Match` verwendet werden, um das [verlorene Update-Problem](https://www.w3.org/1999/04/Editing/#3.1) zu vermeiden. Es kann überprüfen, ob die Änderung einer Ressource, die der Benutzer hochladen möchte, keine andere Änderung überschreibt, die seit dem Abrufen der ursprünglichen Ressource durchgeführt wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>nein</td>
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
  - : Entitätstags, die die angeforderten Ressourcen eindeutig repräsentieren. Sie sind eine Zeichenkette aus {{Glossary("ASCII", "ASCII")}}-Zeichen, die in doppelte Anführungszeichen gesetzt sind (wie `"675af34563dc-tr34"`). Sie können durch `W/` vorangestellt werden, um anzuzeigen, dass sie "schwach" sind, d. h., dass sie die Ressource semantisch, aber nicht byteweise repräsentieren. In einem **`If-Match`**-Header werden schwache Entitätstags jedoch niemals übereinstimmen.
- `*`
  - : Der Asterisk ist ein spezieller Wert, der jede Ressource repräsentiert. Beachten Sie, dass dies übereinstimmen muss, wenn der Ursprungsserver keine aktuelle Darstellung für die Zielressource hat, und zwar als `false` interpretiert wird.

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
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
