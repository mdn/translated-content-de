---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{HTTPSidebar}}

Der **`If-None-Match`** HTTP-Anforderungsheader macht die Anfrage bedingt. Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} gibt der Server die angeforderte Ressource nur dann mit einem {{HTTPStatus("200")}}-Status zurück, wenn er kein zur Verfügung stehendes {{HTTPHeader("ETag")}} hat, das mit den angegebenen übereinstimmt. Für andere Methoden wird die Anfrage nur dann bearbeitet, wenn das eventuell vorhandene {{HTTPHeader("ETag")}} der Ressource nicht mit einem der aufgeführten Werte übereinstimmt.

Wenn die Bedingung für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} fehlschlägt, muss der Server den HTTP-Statuscode 304 (Not Modified) zurückgeben. Für Methoden, die serverseitige Änderungen vornehmen, wird der Statuscode 412 (Precondition Failed) verwendet. Beachten Sie, dass der Server, der eine 304-Antwort generiert, alle folgenden Header-Felder generieren MUSS, die in einer 200 (OK) Antwort auf dieselbe Anfrage gesendet worden wären: Cache-Control, Content-Location, Date, ETag, Expires und Vary.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _schwachen Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien als identisch angesehen werden, wenn der Inhalt gleichwertig ist – sie müssen nicht byteweise identisch sein. Zum Beispiel würden zwei Seiten, die sich nur durch ihr Erstellungsdatum im Footer unterscheiden, dennoch als identisch betrachtet.

Wenn in Kombination mit {{HTTPHeader("If-Modified-Since")}} verwendet, hat **`If-None-Match`** Vorrang (sofern der Server dies unterstützt).

Es gibt zwei häufige Anwendungsfälle:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, um eine zwischengespeicherte Entität zu aktualisieren, die ein zugeordnetes {{HTTPHeader("ETag")}} hat.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-None-Match` mit dem Wert `*` verwendet werden, um eine Datei zu speichern, deren Existenz nicht bekannt ist, und sicherzustellen, dass kein weiterer Upload vorher stattgefunden hat, wodurch die Daten des vorherigen Uploads verloren gehen könnten; dieses Problem ist eine Variante des [lost update problem](https://www.w3.org/1999/04/Editing/#3.1).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
If-None-Match: "<etag_value>"
If-None-Match: "<etag_value>", "<etag_value>", …
If-None-Match: *
```

## Direktiven

- \<etag_value>
  - : Entitätstags, die die angeforderten Ressourcen eindeutig darstellen. Sie sind eine Zeichenfolge von {{Glossary("ASCII")}}-Zeichen, die zwischen doppelten Anführungszeichen gesetzt wird (wie `"675af34563dc-tr34") und können mit `W/`vorangestellt werden, um anzuzeigen, dass der schwache Vergleichsalgorithmus verwendet werden soll (dies ist bei`If-None-Match` nutzlos, da nur dieser Algorithmus verwendet wird).
- `*`
  - : Der Stern ist ein spezieller Wert, der jede Ressource darstellt. Sie sind nur nützlich, wenn eine Ressource hochgeladen wird, in der Regel mit {{HTTPMethod("PUT")}}, um zu prüfen, ob eine andere Ressource mit der Identität bereits zuvor hochgeladen wurde.

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
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
