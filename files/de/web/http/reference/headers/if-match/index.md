---
title: If-Match
slug: Web/HTTP/Reference/Headers/If-Match
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

Der HTTP **`If-Match`** {{Glossary("request_header", "Request-Header")}} macht eine Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests).
Ein Server gibt Ressourcen für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} zurück oder lädt Ressourcen für {{HTTPMethod("PUT")}} und andere unsichere Methoden hoch, nur wenn die Ressource mit einem der {{HTTPHeader("ETag")}}-Werte im `If-Match`-Request-Header übereinstimmt.
Wenn die Bedingung nicht erfüllt ist, wird stattdessen die {{HTTPStatus("412", "412 Precondition Failed")}}-Antwort zurückgegeben.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _starken Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien byteweise identisch sein müssen.
Wenn ein aufgelistetes `ETag` das Präfix `W/` hat, das einen schwachen Entitätstag anzeigt, wird dieser Vergleichsalgorithmus niemals übereinstimmen.

Es gibt zwei häufige Anwendungsfälle:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, die in Kombination mit einem {{HTTPHeader("Range")}}-Header verwendet werden, kann sichergestellt werden, dass die neu angeforderten Bereiche
  von derselben Ressource stammen wie der vorherige.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-Match` verwendet werden, um das [Problem des verlorenen Updates](https://www.w3.org/1999/04/Editing/#3.1) zu verhindern.
  Es kann überprüft werden, ob die Änderung einer Ressource, die der Benutzer hochladen möchte, keine andere Änderung überschreibt, die seit dem Abrufen der ursprünglichen Ressource vorgenommen wurde.

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
  - : Entitätstags, die die angeforderten Ressourcen eindeutig darstellen.
    Es handelt sich um eine Zeichenfolge von {{Glossary("ASCII", "ASCII")}}-Zeichen, die zwischen Anführungszeichen gesetzt sind (zum Beispiel `"675af34563dc-tr34"`).
    Sie können mit `W/` versehen werden, um anzuzeigen, dass sie 'schwach' sind, d.h. dass sie die Ressource semantisch, aber nicht byteweise darstellen.
    In einem `If-Match`-Header werden schwache Entitätstags jedoch niemals übereinstimmen.
- `*`
  - : Der Stern ist ein spezieller Wert, der jede Ressource darstellt.
    Beachten Sie, dass dies als `false` übereinstimmen muss, wenn der Origin-Server keine aktuelle Darstellung für die Zielressource hat.

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
