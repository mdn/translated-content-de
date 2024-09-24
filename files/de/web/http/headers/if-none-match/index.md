---
title: Wenn-Keine-Übereinstimmung
slug: Web/HTTP/Headers/If-None-Match
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{HTTPSidebar}}

Der **`If-None-Match`** HTTP-Anforderungsheader macht die Anfrage bedingt. Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} wird der Server die angeforderte Ressource nur dann mit einem Status von {{HTTPStatus("200")}} zurückgeben, wenn er keinen {{HTTPHeader("ETag")}} besitzt, der mit den angegebenen übereinstimmt. Bei anderen Methoden wird die Anfrage nur verarbeitet, wenn der eventuell vorhandene Ressourcenspecifier {{HTTPHeader("ETag")}} mit keinem der aufgelisteten Werte übereinstimmt.

Wenn die Bedingung für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} fehlschlägt, muss der Server den HTTP-Statuscode 304 (Nicht geändert) zurückgeben. Für Methoden, die serverseitige Änderungen ausführen, wird der Statuscode 412 (Vorbedingung fehlgeschlagen) verwendet. Beachten Sie, dass der Server, der eine 304-Antwort generiert, alle der folgenden Header-Felder generieren MUSS, die in einer 200 (OK) Antwort auf dieselbe Anfrage gesendet worden wären: Cache-Control, Content-Location, Date, ETag, Expires und Vary.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _schwachen Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien als identisch angesehen werden, wenn der Inhalt äquivalent ist — sie müssen nicht byteweise identisch sein. Zum Beispiel würden zwei Seiten, die sich nur im Erstellungsdatum im Footer unterscheiden, als identisch betrachtet werden.

Wenn sie in Kombination mit {{HTTPHeader("If-Modified-Since")}} verwendet wird, hat **`If-None-Match`** Vorrang (falls der Server sie unterstützt).

Es gibt zwei häufige Anwendungsfälle:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, um eine im Cache gespeicherte Entität zu aktualisieren, die mit einem zugeordneten {{HTTPHeader("ETag")}} versehen ist.
- Für andere Methoden, insbesondere {{HTTPMethod("PUT")}}, kann `If-None-Match` mit dem Wert `*` verwendet werden, um eine Datei zu speichern, von der nicht bekannt ist, dass sie existiert, und sicherzustellen, dass kein anderer Upload vorher stattgefunden hat, bei dem die Daten des vorherigen Uploads verloren gehen; dieses Problem ist eine Variation des [Lost Update Problems](https://www.w3.org/1999/04/Editing/#3.1).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Header-Name")}}</th>
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
  - : Entitätstags, die die angeforderten Ressourcen eindeutig repräsentieren. Sie sind eine Zeichenfolge von {{Glossary("ASCII")}}-Zeichen, die in Anführungszeichen gesetzt sind (wie `"675af34563dc-tr34"`) und können mit `W/` versehen sein, um anzugeben, dass der schwache Vergleichsalgorithmus verwendet werden soll (dies ist bei `If-None-Match` nutzlos, da er nur diesen Algorithmus verwendet).
- `*`
  - : Der Stern ist ein spezieller Wert, der jede Ressource repräsentiert. Sie sind nur nützlich beim Hochladen einer Ressource, normalerweise mit {{HTTPMethod("PUT")}}, um zu überprüfen, ob bereits eine andere Ressource mit derselben Identität hochgeladen wurde.

## Beispiele

```http
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
