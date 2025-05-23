---
title: If-None-Match header
short-title: If-None-Match
slug: Web/HTTP/Reference/Headers/If-None-Match
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`If-None-Match`**-{{Glossary("request_header", "Anfrage-Header")}} macht eine Anfrage [konditional](/de/docs/Web/HTTP/Guides/Conditional_requests).
Der Server gibt die angeforderte Ressource in den Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} mit einem {{HTTPStatus("200")}}-Status nur dann zurück, wenn er kein {{HTTPHeader("ETag")}} hat, das mit dem im `If-None-Match`-Header angegebenen Wert übereinstimmt.
Für andere Methoden wird die Anfrage nur verarbeitet, wenn das gegebenenfalls existierende Ressource-{{HTTPHeader("ETag")}} mit keinem der aufgelisteten Werte übereinstimmt.

Wenn die Bedingung für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} fehlschlägt, muss der Server einen {{HTTPStatus("304", "304 Not Modified")}} zurückgeben und eines der folgenden Header-Felder, die in einer 200-Antwort auf dieselbe Anfrage gesendet worden wären: `Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires`, und `Vary`.
Für Methoden, die serverseitige Änderungen anwenden, wird der {{HTTPStatus("412", "412 Precondition Failed")}} verwendet, wenn die Bedingung fehlschlägt.

Der Vergleich mit dem gespeicherten ETag verwendet den _schwachen Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien als identisch betrachtet werden, wenn der Inhalt gleichwertig ist — sie müssen nicht byteweise identisch sein.
Zum Beispiel würden zwei Seiten, die sich nur durch ihr Erstellungsdatum im Footer unterscheiden, trotzdem als identisch angesehen werden.

In Kombination mit {{HTTPHeader("If-Modified-Since")}} hat `If-None-Match` Vorrang, wenn der Server es unterstützt.

Es gibt zwei häufige Fälle für die Verwendung von `If-None-Match` in Anfragen:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, um eine zwischengespeicherte Entität zu aktualisieren, die mit einem ETag verbunden ist.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-None-Match` mit dem `*`-Wert verwendet werden, um eine Datei nur dann zu speichern, wenn sie noch nicht existiert, was garantiert, dass das Hochladen nicht versehentlich ein anderes Hochladen überschreibt und die Daten des vorherigen `PUT` verliert; dieses Problem ist eine Variante des [Versionsverwaltungsproblems](https://www.w3.org/1999/04/Editing/#3.1).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Entitätstags, die die angeforderten Ressourcen eindeutig repräsentieren. Sie sind eine Zeichenkette aus {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt werden (wie `"675af34563dc-tr34"`) und können mit `W/` vorangestellt werden, um anzuzeigen, dass der schwache Vergleichsalgorithmus verwendet werden soll (dies ist mit `If-None-Match` nutzlos, da es nur diesen Algorithmus verwendet).
- `*`
  - : Der Stern ist ein besonderer Wert, der eine beliebige Ressource darstellt. Er ist nur nützlich beim Hochladen einer Ressource, üblicherweise mit {{HTTPMethod("PUT")}}, um zu überprüfen, ob eine andere Ressource mit derselben Identität bereits zuvor hochgeladen wurde.

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
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
