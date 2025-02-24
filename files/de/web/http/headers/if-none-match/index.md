---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`If-None-Match`** {{Glossary("request_header", "Request-Header")}} macht eine Anfrage [konditional](/de/docs/Web/HTTP/Conditional_requests).
Der Server gibt die angeforderte Ressource in {{HTTPMethod("GET")}}- und {{HTTPMethod("HEAD")}}-Methoden mit einem {{HTTPStatus("200")}}-Status zurück, nur wenn es keine {{HTTPHeader("ETag")}} gibt, die mit denen im `If-None-Match`-Header übereinstimmen.
Bei anderen Methoden wird die Anfrage nur verarbeitet, wenn das eventuell vorhandene Ressourcens `{{HTTPHeader("ETag")}}` mit keinem der aufgeführten Werte übereinstimmt.

Wenn die Bedingung für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} fehlschlägt, muss der Server einen {{HTTPStatus("304", "304 Not Modified")}} zurückgeben und eines der folgenden Header-Felder, die in einer 200-Antwort auf die gleiche Anfrage gesendet worden wären: `Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires` und `Vary`.
Für Methoden, die serverseitige Änderungen anwendenden, wird der {{HTTPStatus("412", "412 Precondition Failed")}} verwendet, wenn die Bedingung fehlschlägt.

Der Vergleich mit dem gespeicherten ETag verwendet den _schwachen Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien als identisch betrachtet werden, wenn der Inhalt äquivalent ist – sie müssen nicht Byte für Byte identisch sein.
Zum Beispiel würden zwei Seiten, die sich nur im Erstellungsdatum im Footer unterscheiden, immer noch als identisch betrachtet werden.

Wenn `If-None-Match` in Kombination mit {{HTTPHeader("If-Modified-Since")}} verwendet wird, hat `If-None-Match` Vorrang, wenn der Server es unterstützt.

Es gibt zwei häufige Fälle zur Verwendung von `If-None-Match` in Anfragen:

- Für {{HTTPMethod("GET")}}- und {{HTTPMethod("HEAD")}}-Methoden, um eine zwischengespeicherte Entität zu aktualisieren, die mit einem ETag verknüpft ist.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-None-Match` mit dem Wert `*` verwendet werden, um eine Datei nur zu speichern, wenn sie noch nicht existiert, wobei sichergestellt wird, dass der Upload nicht versehentlich einen anderen Upload überschreibt und die Daten des vorherigen `PUT` verliert; dieses Problem ist eine Variante des [Problemd der verlorenen Aktualisierung](https://www.w3.org/1999/04/Editing/#3.1).

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
If-None-Match: "<etag_value>"
If-None-Match: "<etag_value>", "<etag_value>", …
If-None-Match: *
```

## Direktiven

- `<etag_value>`
  - : Entity-Tags, die die angeforderten Ressourcen eindeutig repräsentieren. Sie sind eine Zeichenfolge von {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt sind (wie `"675af34563dc-tr34"`), und können durch `W/` vorangestellt werden, um anzuzeigen, dass der schwache Vergleichsalgorithmus verwendet werden soll (dies ist allerdings sinnlos mit `If-None-Match`, da nur dieser Algorithmus verwendet wird).
- `*`
  - : Der Asterisk ist ein spezieller Wert, der jede Ressource repräsentiert. Sie sind nur nützlich, wenn eine Ressource hochgeladen wird, üblicherweise mit {{HTTPMethod("PUT")}}, um zu überprüfen, ob eine andere Ressource mit der gleichen Identität bereits hochgeladen wurde.

## Beispiele

```http
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} konditionale Anfrage-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwort-Statuscodes
