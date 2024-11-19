---
title: If-Match
slug: Web/HTTP/Headers/If-Match
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP **`If-Match`** {{Glossary("request_header", "Request-Header")}} macht eine Anfrage [bedingt](/de/docs/Web/HTTP/Conditional_requests).
Ein Server liefert Ressourcen für {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} Methoden oder lädt Ressourcen für {{HTTPMethod("PUT")}} und andere unsichere Methoden hoch, nur wenn die Ressource mit einem der {{HTTPHeader("ETag")}}-Werte im `If-Match` Request-Header übereinstimmt.
Falls die Bedingung nicht erfüllt ist, wird stattdessen die Antwort {{HTTPStatus("412", "412 Precondition Failed")}} zurückgegeben.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _starken Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien byteweise identisch sein müssen.
Wenn ein aufgeführter `ETag` das `W/`-Präfix hat, das einen schwachen Entitätstag andeutet, wird dieser Vergleichsalgorithmus ihn niemals als Übereinstimmung erkennen.

Es gibt zwei häufige Anwendungsfälle:

- Für {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} Methoden, in Kombination mit einem {{HTTPHeader("Range")}}-Header, kann es garantieren, dass die neuen angeforderten Bereiche
  aus derselben Ressource stammen wie der vorher angeforderte Bereich.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-Match` verwendet werden, um das [Problem des verloren gegangenen Updates](https://www.w3.org/1999/04/Editing/#3.1) zu verhindern.
  Es kann überprüfen, ob die Modifikation einer Ressource, die der Benutzer hochladen möchte, keine andere seit dem Abruf der ursprünglichen Ressource durchgeführte Änderung überschreibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
  - : Entitätstags, die die angeforderten Ressourcen eindeutig darstellen.
    Sie sind eine Zeichenfolge von {{Glossary("ASCII", "ASCII")}} Zeichen, die in Anführungszeichen gesetzt werden (wie `"675af34563dc-tr34"`).
    Sie können mit `W/` vorangestellt werden, um anzuzeigen, dass sie „schwach“ sind, d.h. dass sie die Ressource semantisch, aber nicht byteweise darstellen.
    In einem `If-Match`-Header werden schwache Entitätstags jedoch nie übereinstimmen.
- `*`
  - : Der Stern ist ein spezieller Wert, der eine beliebige Ressource darstellt.
    Beachten Sie, dass dies als `false` gewertet werden muss, wenn der Ursprungsserver keine aktuelle Darstellung für die Zielressource hat.

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
