---
title: If-Match
slug: Web/HTTP/Headers/If-Match
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{HTTPSidebar}}

Der **`If-Match`** HTTP-Anforderungsheader macht eine Anfrage bedingt.

Ein Server wird angeforderte Ressourcen für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} nur dann zurückgeben, oder Ressourcen für {{HTTPMethod("PUT")}} und andere nicht-sichere Methoden hochladen, wenn die Ressource einem der aufgeführten {{HTTPHeader("ETag")}}-Werte entspricht.
Wenn die Bedingung nicht übereinstimmt, wird die Antwort {{HTTPStatus("412")}} (Precondition Failed) zurückgegeben.

Der Vergleich mit dem gespeicherten {{HTTPHeader("ETag")}} verwendet den _starken Vergleichsalgorithmus_, was bedeutet, dass zwei Dateien nur dann als identisch gelten, wenn sie byteweise identisch sind.
Wenn ein aufgeführtes `ETag` das `W/`-Präfix trägt, das auf ein schwaches Entitätsetikett hinweist, wird dieser Vergleichsalgorithmus es niemals als übereinstimmend betrachten.

Es gibt zwei häufige Anwendungsfälle:

- Für die Methoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}, in Kombination mit einem {{HTTPHeader("Range")}}-Header verwendet, kann sichergestellt werden, dass die neu angeforderten Bereiche
  von derselben Ressource stammen wie der vorherige.
- Für andere Methoden, insbesondere für {{HTTPMethod("PUT")}}, kann `If-Match` verwendet werden, um das [Problem des verlorenen Updates](https://www.w3.org/1999/04/Editing/#3.1) zu verhindern.
  Es kann prüfen, ob die Änderung einer Ressource, die der Benutzer hochladen möchte, keine andere Änderung überschreibt, die seit dem ursprünglichen Abrufen der Ressource vorgenommen wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
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
  - : Entitätsetiketten, die die angeforderten Ressourcen eindeutig repräsentieren.
    Sie sind eine Zeichenkette aus [ASCII](/de/docs/Glossary/ASCII)-Zeichen, die in doppelte Anführungszeichen gesetzt ist (wie `"675af34563dc-tr34"`).
    Sie können mit `W/` versehen sein, um anzuzeigen, dass sie "schwach" sind, d.h. sie repräsentieren die Ressource semantisch, aber nicht byteweise.
    In einem **`If-Match`**-Header werden schwache Entitätsetiketten jedoch niemals übereinstimmen.
- `*`
  - : Der Asterisk ist ein spezieller Wert, der jede Ressource repräsentiert.
    Beachten Sie, dass dies als `false` übereinstimmen muss, wenn der Ursprungsserver keine aktuelle Darstellung für die Zielressource hat.

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
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
