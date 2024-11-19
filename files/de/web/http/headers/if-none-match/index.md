---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP **`If-None-Match`** {{Glossary("request_header", "Request-Header")}} macht eine Anfrage [konditional](/de/docs/Web/HTTP/Conditional_requests).
Der Server gibt die angeforderte Ressource in {{HTTPMethod("GET")}}- und {{HTTPMethod("HEAD")}}-Methoden mit einem {{HTTPStatus("200")}}-Status zurück, nur wenn er keinen {{HTTPHeader("ETag")}} hat, der mit denen im `If-None-Match`-Header übereinstimmt.
Für andere Methoden wird die Anfrage nur verarbeitet, wenn der eventuell vorhandene Ressource-{{HTTPHeader("ETag")}} mit keinem der aufgelisteten Werte übereinstimmt.

Wenn die Bedingung für die {{HTTPMethod("GET")}}- und {{HTTPMethod("HEAD")}}-Methoden fehlschlägt, muss der Server einen {{HTTPStatus("304", "304 Not Modified")}} zurückgeben und alle der folgenden Header-Felder, die in einer 200-Antwort auf dieselbe Anfrage gesendet worden wären: `Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires`, und `Vary`.
Für Methoden, die serverseitige Änderungen betreffen, wird der {{HTTPStatus("412", "412 Precondition Failed")}} verwendet, wenn die Bedingung fehlschlägt.

Der Vergleich mit dem gespeicherten ETag verwendet den _schwachen Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien als identisch betrachtet werden, wenn der Inhalt gleichwertig ist — sie müssen nicht byteweise identisch sein.
Zum Beispiel würden zwei Seiten, die sich nur durch ihr Erstellungsdatum im Fußbereich unterscheiden, dennoch als identisch betrachtet werden.

Wenn `If-None-Match` in Kombination mit {{HTTPHeader("If-Modified-Since")}} verwendet wird, hat `If-None-Match` Vorrang, wenn der Server es unterstützt.

Es gibt zwei häufige Anwendungsfälle für die Verwendung von `If-None-Match` in Anfragen:

- Für {{HTTPMethod("GET")}}- und {{HTTPMethod("HEAD")}}-Methoden, um eine zwischengespeicherte Entität zu aktualisieren, die über einen zugeordneten ETag verfügt.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-None-Match` mit dem Wert `*` verwendet werden, um eine Datei nur dann zu speichern, wenn sie noch nicht existiert. Dies garantiert, dass das Hochladen nicht versehentlich ein anderes Hochladen überschreibt und die Daten des vorherigen `PUT` verliert; dieses Problem ist eine Variante des [Lost-Update-Problems](https://www.w3.org/1999/04/Editing/#3.1).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Entity-Tags, die die angeforderten Ressourcen eindeutig repräsentieren. Es sind Zeichenfolgen aus {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen stehen (wie `"675af34563dc-tr34"`) und können mit `W/` vorangestellt werden, um anzuzeigen, dass der schwache Vergleichsalgorithmus verwendet werden sollte (dies ist bei `If-None-Match` nutzlos, da es nur diesen Algorithmus verwendet).
- `*`
  - : Der Stern ist ein spezieller Wert, der jede Ressource darstellt. Sie sind nur nützlich beim Hochladen einer Ressource, normalerweise mit {{HTTPMethod("PUT")}}, um zu überprüfen, ob eine andere Ressource mit der Identität bereits zuvor hochgeladen wurde.

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
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} konditionale Request-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
