---
title: If-Match
slug: Web/HTTP/Headers/If-Match
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`If-Match`**-{{Glossary("request_header", "Anforderungsheader")}} macht eine Anfrage [konditional](/de/docs/Web/HTTP/Conditional_requests). Ein Server wird Ressourcen für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} bereitstellen oder Ressourcen für {{HTTPMethod("PUT")}} und andere nicht-sichere Methoden hochladen, nur wenn die Ressource mit einem der {{HTTPHeader("ETag")}}-Werte im `If-Match`-Anforderungsheader übereinstimmt. Wenn die Bedingung nicht übereinstimmt, wird stattdessen die {{HTTPStatus("412", "412 Precondition Failed")}}-Antwort zurückgegeben.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _starken Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien byteweise als identisch betrachtet werden. Wenn ein aufgelisteter `ETag` das Präfix `W/` hat, das einen schwachen Entitätstag anzeigt, wird dieser Vergleichsalgorithmus niemals übereinstimmen.

Es gibt zwei häufige Anwendungsfälle:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, in Kombination mit einem {{HTTPHeader("Range")}}-Header verwendet, kann sichergestellt werden, dass die neu angeforderten Bereiche aus derselben Ressource stammen wie der vorherige.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-Match` verwendet werden, um das [verlorene Update-Problem](https://www.w3.org/1999/04/Editing/#3.1) zu verhindern. Es kann überprüfen, ob die Änderung einer Ressource, die der Benutzer hochladen möchte, nicht eine andere Änderung überschreibt, die seit dem Abrufen der ursprünglichen Ressource vorgenommen wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Entitätstags, die die angeforderten Ressourcen eindeutig darstellen. Sie sind eine Zeichenfolge von {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt sind (wie `"675af34563dc-tr34"`). Sie können durch `W/` vorangestellt sein, um anzuzeigen, dass sie 'schwach' sind, d.h. dass sie die Ressource semantisch, aber nicht byteweise darstellen. In einem `If-Match`-Header werden schwache Entitätstags jedoch nie übereinstimmen.
- `*`
  - : Der Stern ist ein spezieller Wert, der eine beliebige Ressource darstellt. Beachten Sie, dass dies als `false` übereinstimmen muss, wenn der Ursprungsserver keine aktuelle Repräsentation der Zielressource hat.

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
- {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} konditionale Anforderungsheader
- {{HTTPStatus("412", "412 Precondition Failed")}}
