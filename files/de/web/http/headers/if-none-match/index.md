---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{HTTPSidebar}}

Der **`If-None-Match`** HTTP-Anforderungsheader macht die Anfrage bedingt. Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} gibt der Server die angeforderte Ressource mit einem Status von {{HTTPStatus("200")}} nur zurück, wenn er keinen {{HTTPHeader("ETag")}} hat, der zu den angegebenen passt. Für andere Methoden wird die Anfrage nur bearbeitet, wenn der gegebenenfalls vorhandene {{HTTPHeader("ETag")}} der Ressource mit keinem der aufgeführten Werte übereinstimmt.

Wenn die Bedingung für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} fehlschlägt, muss der Server den HTTP-Statuscode 304 (Not Modified) zurückgeben. Für Methoden, die serverseitige Änderungen bewirken, wird der Statuscode 412 (Precondition Failed) verwendet. Beachten Sie, dass der Server, der eine 304-Antwort generiert, eines der folgenden Header-Felder generieren MUSS, die in einer 200 (OK) Antwort auf dieselbe Anfrage gesendet worden wären: Cache-Control, Content-Location, Date, ETag, Expires und Vary.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _schwachen Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien als identisch betrachtet werden, wenn der Inhalt gleichwertig ist — sie müssen nicht byteweise identisch sein. Zum Beispiel würden zwei Seiten, die sich lediglich durch ihr Erstellungsdatum im Fußzeilenbereich unterscheiden, immer noch als identisch betrachtet.

In Kombination mit {{HTTPHeader("If-Modified-Since")}} verwendet, hat **`If-None-Match`** Vorrang (sofern der Server dies unterstützt).

Es gibt zwei häufige Anwendungsfälle:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} wird ein zwischengespeichertes Element aktualisiert, das mit einem {{HTTPHeader("ETag")}} verknüpft ist.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-None-Match` mit dem Wert `*` verwendet werden, um eine nicht bekannte Datei zu speichern, was garantiert, dass kein weiterer Upload zuvor stattgefunden hat und die Daten des vorherigen Uploads nicht verloren gingen; dieses Problem ist eine Variante des [Lost-Update-Problems](https://www.w3.org/1999/04/Editing/#3.1).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Entity-Tags, die die angeforderten Ressourcen eindeutig darstellen. Sie sind eine Zeichenfolge von [ASCII](/de/docs/Glossary/ASCII)-Zeichen, die zwischen Anführungszeichen gesetzt sind (wie `"675af34563dc-tr34"`) und können mit `W/` vorangestellt werden, um anzuzeigen, dass der schwache Vergleichsalgorithmus verwendet werden soll (dies ist bei `If-None-Match` nutzlos, da es nur diesen Algorithmus verwendet).
- `*`
  - : Das Sternchen ist ein spezieller Wert, der jede Ressource darstellt. Sie sind nur nützlich, wenn eine Ressource hochgeladen wird, normalerweise mit {{HTTPMethod("PUT")}}, um zu überprüfen, ob eine andere Ressource mit derselben Identität bereits zuvor hochgeladen wurde.

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
