---
title: If-Match
slug: Web/HTTP/Headers/If-Match
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{HTTPSidebar}}

Der **`If-Match`** HTTP-Anforderungsheader macht eine Anfrage bedingt.

Ein Server wird nur angeforderte Ressourcen für {{HTTPMethod("GET")}}- und {{HTTPMethod("HEAD")}}-Methoden zurückgeben, oder Ressourcen für {{HTTPMethod("PUT")}} und andere unsichere Methoden hochladen, wenn die Ressource mit einem der aufgelisteten {{HTTPHeader("ETag")}}-Werte übereinstimmt. Wenn die Bedingung nicht übereinstimmt, wird die Antwort {{HTTPStatus("412")}} (Precondition Failed) zurückgegeben.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _starken Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien nur dann als identisch angesehen werden, wenn sie Byte für Byte identisch sind. Wenn ein aufgelistetes `ETag` das Präfix `W/` hat, das auf ein schwaches Entitätstag hinweist, wird dieser Vergleichsalgorithmus nie übereinstimmen.

Es gibt zwei häufige Anwendungsfälle:

- Für {{HTTPMethod("GET")}}- und {{HTTPMethod("HEAD")}}-Methoden, die in Kombination mit einem {{HTTPHeader("Range")}}-Header verwendet werden, kann dies garantieren, dass die neu angeforderten Bereiche von derselben Ressource wie der vorherige stammen.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-Match` verwendet werden, um das [Problem des verlorenen Updates](https://www.w3.org/1999/04/Editing/#3.1) zu verhindern. Es kann überprüft werden, ob die Änderung einer Ressource, die der Benutzer hochladen möchte, keine andere Änderung überschreibt, die seit dem Abruf der ursprünglichen Ressource erfolgt ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Entitätstags, die die angeforderten Ressourcen eindeutig repräsentieren. Sie sind eine Zeichenreihe von {{Glossary("ASCII")}}-Zeichen, die in Anführungszeichen gesetzt sind (wie `"675af34563dc-tr34"`). Sie können mit `W/` vorangestellt werden, um anzuzeigen, dass sie "schwach" sind, d.h. dass sie die Ressource semantisch, aber nicht Byte für Byte repräsentieren. In einem **`If-Match`**-Header werden schwache Entitätstags jedoch nie übereinstimmen.
- `*`
  - : Der Stern ist ein spezieller Wert, der jede Ressource repräsentiert. Beachten Sie, dass dies als `false` bewertet werden muss, wenn der Ursprungsserver keine aktuelle Darstellung für die Zielressource hat.

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
