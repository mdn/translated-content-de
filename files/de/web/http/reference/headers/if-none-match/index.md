---
title: If-None-Match header
short-title: If-None-Match
slug: Web/HTTP/Reference/Headers/If-None-Match
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`If-None-Match`** {{Glossary("request_header", "Request-Header")}} macht eine [Bedingungsanfrage](/de/docs/Web/HTTP/Guides/Conditional_requests). Der Server liefert die angeforderte Ressource bei den Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} mit dem Status {{HTTPStatus("200")}} nur, wenn er keinen {{HTTPHeader("ETag")}} hat, der zu denen im `If-None-Match`-Header passt. Bei anderen Methoden wird die Anfrage nur bearbeitet, wenn der schließlich vorhandene Ressourcen-{{HTTPHeader("ETag")}} mit keinem der aufgeführten Werte übereinstimmt.

Wenn die Bedingung bei den Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} fehlschlägt, muss der Server einen {{HTTPStatus("304", "304 Not Modified")}} zurückgeben und alle der folgenden Header-Felder, die in einer 200-Antwort auf dieselbe Anfrage gesendet worden wären: `Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires` und `Vary`. Für Methoden, die serverseitige Änderungen vornehmen, wird bei Fehlschlagen der Bedingung der {{HTTPStatus("412", "412 Precondition Failed")}} verwendet.

Der Vergleich mit dem gespeicherten ETag verwendet den _weak comparison algorithm_, was bedeutet, dass zwei Dateien als identisch betrachtet werden, wenn der Inhalt äquivalent ist — sie müssen nicht byteweise identisch sein. Zwei Seiten, die sich beispielsweise nur durch ihr Erstellungsdatum im Footer unterscheiden, würden dennoch als identisch betrachtet.

Wird `If-None-Match` in Kombination mit {{HTTPHeader("If-Modified-Since")}} verwendet, hat `If-None-Match` Vorrang, wenn der Server es unterstützt.

Es gibt zwei häufige Anwendungsfälle für die Verwendung von `If-None-Match` in Anfragen:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, um eine zwischengespeicherte Entität zu aktualisieren, die einen zugehörigen ETag hat.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-None-Match` mit dem Wert `*` verwendet werden, um eine Datei nur zu speichern, wenn sie noch nicht existiert, was garantiert, dass der Upload nicht versehentlich einen anderen Upload überschreibt und die Daten des vorherigen `PUT` verliert; dieses Problem ist eine Variante des [Lost Update Problems](https://www.w3.org/1999/04/Editing/#3.1).

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
  - : Entitätstags, die die angeforderten Ressourcen eindeutig repräsentieren. Sie sind eine Zeichenfolge aus {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt sind (z. B. `"675af34563dc-tr34") und können mit `W/`versehen sein, um anzuzeigen, dass der weak comparison algorithm verwendet werden soll (dies ist jedoch bei`If-None-Match` nutzlos, da es nur diesen Algorithmus verwendet).
- `*`
  - : Der Stern ist ein spezieller Wert, der jede Ressource repräsentiert. Sie sind nur nützlich beim Hochladen einer Ressource, normalerweise mit {{HTTPMethod("PUT")}}, um zu prüfen, ob eine andere Ressource mit derselben Identität bereits hochgeladen wurde.

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
- Bedingungs-Request-Header: {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}
- Antwortstatus-Codes: {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}}
