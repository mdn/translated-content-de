---
title: If-None-Match
slug: Web/HTTP/Reference/Headers/If-None-Match
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`If-None-Match`**-{{Glossary("request_header", "Anforderungsheader")}} macht eine [bedingte](/de/docs/Web/HTTP/Guides/Conditional_requests) Anfrage.
Der Server gibt die angeforderte Ressource in den Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} mit einem {{HTTPStatus("200")}}-Status nur dann zurück, wenn er kein {{HTTPHeader("ETag")}} hat, das mit denjenigen im `If-None-Match`-Header übereinstimmt.
Bei anderen Methoden wird die Anfrage nur verarbeitet, wenn das eventuell vorhandene {{HTTPHeader("ETag")}} der Ressource mit keinem der aufgelisteten Werte übereinstimmt.

Wenn die Bedingung für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} fehlschlägt, muss der Server einen {{HTTPStatus("304", "304 Not Modified")}} zurückgeben und eines der folgenden Headerfelder, die bei einer 200-Antwort auf dieselbe Anfrage gesendet worden wären: `Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires` und `Vary`.
Für Methoden, die serverseitige Änderungen bewirken, wird der {{HTTPStatus("412", "412 Precondition Failed")}} verwendet, wenn die Bedingung fehlschlägt.

Der Vergleich mit dem gespeicherten ETag verwendet den _schwachen Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien als identisch betrachtet werden, wenn der Inhalt äquivalent ist — sie müssen nicht Byte für Byte identisch sein.
Zum Beispiel würden zwei Seiten, die sich nur durch ihr Erstellungsdatum im Fußzeilenbereich unterscheiden, immer noch als identisch betrachtet.

Wird in Kombination mit {{HTTPHeader("If-Modified-Since")}} verwendet, hat `If-None-Match` Vorrang, wenn der Server ihn unterstützt.

Es gibt zwei gängige Fälle für die Verwendung von `If-None-Match` in Anfragen:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, um eine zwischengespeicherte Entität zu aktualisieren, die mit einem zugehörigen ETag versehen ist.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-None-Match` mit dem Wert `*` verwendet werden, um eine Datei nur dann zu speichern, wenn sie noch nicht existiert, wobei sichergestellt wird, dass der Upload nicht versehentlich einen anderen Upload überschreibt und die Daten des vorherigen `PUT` verliert; dieses Problem ist eine Variante des [Lost-Update-Problems](https://www.w3.org/1999/04/Editing/#3.1).

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
If-None-Match: "<etag_value>"
If-None-Match: "<etag_value>", "<etag_value>", …
If-None-Match: *
```

## Direktiven

- `<etag_value>`
  - : Entity-Tags, die die angeforderten Ressourcen eindeutig darstellen. Sie sind eine Zeichenfolge von {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt sind (z.B. `"675af34563dc-tr34") und können mit `W/`vorangestellt werden, um anzugeben, dass der schwache Vergleichsalgorithmus verwendet werden soll (das ist bei`If-None-Match` sinnlos, da es nur diesen Algorithmus verwendet).
- `*`
  - : Der Asterisk ist ein spezieller Wert, der jede Ressource darstellt. Sie sind nur dann nützlich, wenn eine Ressource hochgeladen wird, in der Regel mit {{HTTPMethod("PUT")}}, um zu überprüfen, ob eine andere Ressource mit der Identität bereits zuvor hochgeladen wurde.

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
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} bedingte Anforderungsheader
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
