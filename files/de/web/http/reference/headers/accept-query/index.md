---
title: Accept-Query header
short-title: Accept-Query
slug: Web/HTTP/Reference/Headers/Accept-Query
l10n:
  sourceCommit: 346e46c6e10334bf60df2a0a4ef58ebea4c80a4e
---

Der HTTP-{{Glossary("response_header", "Response-Header")}} **`Accept-Query`** gibt an, dass eine Ressource die Methode {{HTTPMethod("QUERY")}} unterstützt, und nennt die [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Abfrageformate, die sie akzeptiert.
Entgegen seinem Namen wird `Accept-Query` vom Server in einer Antwort gesendet und nicht vom Client in einer Anfrage: Der Header teilt Clients mit, welche Inhalte sie in einer späteren `QUERY`-Anfrage senden können.

`Accept-Query` ist ein strukturiertes Feld, dessen Wert eine Liste von Medienbereichen ist (Medientypen, die Wildcards enthalten können). Jeder Medienbereich wird als Zeichenfolge oder Token eines strukturierten Felds dargestellt und kann optional Parameter eines strukturierten Felds enthalten.
Die Reihenfolge der Medientypen in der Liste ist nicht von Bedeutung.
Der Wert gilt für jede URI auf dem Server mit demselben Pfad, unabhängig von der Query-Komponente der URI.
Wenn Anfragen an dieselbe Ressource unterschiedliche `Accept-Query`-Werte zurückgeben, gilt der zuletzt empfangene Wert, der noch gültig ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
// Token or equivalent quoted string
Accept-Query: <media-type>/<subtype>
Accept-Query: "<media-type>/<subtype>"

// Tokens including wildcards
Accept-Query: <media-type>/*
Accept-Query: */*

// Comma-separated list of media ranges in any order, mixing tokens and strings
Accept-Query: <media-type>/<subtype>, "<media-type-2>/<subtype-2>", <media-type-3>/*

// Media type parameters expressed as structured field parameters
Accept-Query: <media-type>/<subtype>;<parameter>=<value>
Accept-Query: <media-type>/<subtype>;<parameter>="<value>"
```

> [!NOTE]
> Obwohl sein Wert dem von {{HTTPHeader("Accept")}} ähnelt, ist `Accept-Query` ein strukturiertes Feld ({{rfc("9651", "Structured Field Values for HTTP")}}) und muss als solches geparst werden.
> Insbesondere gibt es keine Gewichtung durch `q`-Argumente ({{Glossary("quality_values", "Qualitätswerte")}}): Jeder Medienbereich in der Liste ist gleichermaßen akzeptabel, und die Reihenfolge der Liste ist nicht von Bedeutung.
> Das liegt daran, dass `Accept-Query` ein Response-Header ist, während `Accept` ein Request-Header ist.

## Direktiven

- `<media-type>/<subtype>`
  - : Ein [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) mit einem Subtyp, den die Ressource als Inhalt einer `QUERY`-Anfrage akzeptiert, beispielsweise `application/json`.
    Wird als Token eines strukturierten Felds angegeben.
- `"<media-type>/<subtype>"`
  - : Derselbe Wert, angegeben als Zeichenfolge eines strukturierten Felds.
    Die Wahl zwischen Token und Zeichenfolge hat keine Bedeutung. Empfänger dürfen die beiden Formen daher nicht unterschiedlich behandeln.
    Eine Zeichenfolge ist erforderlich, wenn der Medienbereich kein gültiges Token ist, etwa wenn der Typ mit einer Ziffer beginnt.
- `<media-type>/*`
  - : Ein Medientyp, bei dem jeder Subtyp akzeptiert wird.
    Beispielsweise umfasst `image/*` die Typen `image/png`, `image/svg`, `image/gif` und weitere Bildtypen.
- `*/*`
  - : Jeder Medientyp.
- `;<parameter>=<value>`
  - : Ein Medientyp-Parameter wie `;charset="UTF-8"`, der als Parameter eines strukturierten Felds dem vorangehenden Medienbereich zugeordnet wird.
    Parameterwerte sind selbst Token oder Zeichenfolgen.
    Der Medienbereich selbst wird stets ohne seine Parameter angegeben.

## Beispiele

### Unterstützte Abfrageformate angeben

Die folgende Antwort gibt an, dass die Ressource `QUERY`-Anfragen mit Inhalten vom Typ `application/x-www-form-urlencoded` oder `application/sql` unterstützt:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: application/x-www-form-urlencoded, application/sql
```

### Zeichenfolgen und Medientyp-Parameter verwenden

Medienbereiche können ebenso als Zeichenfolgen in Anführungszeichen angegeben werden. Beide Formen lassen sich innerhalb einer Liste mischen.
Hier akzeptiert die Ressource JSONPath-Abfragen sowie SQL-Abfragen, die als UTF-8 kodiert sind:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: "application/jsonpath", application/sql;charset="UTF-8"
```

Da die Antwort vom Inhalt der `QUERY`-Anfrage abhängt, kann ein Server außerdem einen {{HTTPHeader("Vary")}}-Header senden, der die betreffenden Felder nennt:

```http
HTTP/1.1 200 OK
Content-Type: text/csv
Accept-Query: "application/sql", "application/xslt+xml"
Vary: Accept-Query, Content-Encoding, Content-Type
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die Browser-Kompatibilität ist für diesen Header nicht relevant.
Browser verfügen über keine integrierte Verarbeitung von `Accept-Query`. Der Client, der `QUERY`-Anfragen sendet, muss den Header selbst lesen und anhand dessen einen unterstützten Medientyp für den Anfrageinhalt auswählen.

## Siehe auch

- Anfragemethode {{HTTPMethod("QUERY")}}
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Location")}}
- {{HTTPHeader("Vary")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
