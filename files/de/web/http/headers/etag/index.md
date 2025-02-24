---
title: ETag
slug: Web/HTTP/Headers/ETag
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`ETag`** (Entity-Tag) {{Glossary("response_header", "Antwort-Header")}} ist ein Bezeichner für eine bestimmte Version einer Ressource. Er ermöglicht es [Caches](/de/docs/Web/HTTP/Caching), effizienter zu arbeiten und Bandbreite zu sparen, da ein Webserver keine vollständige Antwort erneut senden muss, wenn sich der Inhalt nicht geändert hat. Zusätzlich helfen ETags dabei, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die sich gegenseitig überschreiben (["mid-air collisions"](#vermeidung_von_mid-air-kollisionen)).

Wenn sich die Ressource an einer bestimmten URL ändert, _muss_ ein neuer `Etag`-Wert generiert werden. Ein Vergleich dieser Werte kann bestimmen, ob zwei Darstellungen einer Ressource identisch sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Repräsentationsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```

## Direktiven

- `W/` {{optional_inline}}
  - : `W/` (groß-/kleinschreibungssensitiv) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Conditional_requests#weak_validation) verwendet wird. Schwache ETags sind leicht zu generieren, aber bei Vergleichen weit weniger nützlich. Starke Validatoren sind ideal für Vergleiche, können jedoch sehr schwer effizient zu generieren sein. Schwache `ETag`-Werte von zwei Darstellungen derselben Ressource könnten semantisch äquivalent, aber nicht byte-genau identisch sein. Das bedeutet, dass schwache ETags das Caching verhindern, wenn [Byte-Bereichsanforderungen](/de/docs/Web/HTTP/Headers/Accept-Ranges) verwendet werden, während starke ETags es erlauben, dass Bereichsanfragen weiterhin zwischengespeichert werden.
- `<etag_value>`
  - : Entity-Tag, das die angeforderte Ressource eindeutig darstellt. Es ist eine Zeichenfolge aus {{Glossary("ASCII", "ASCII")}}-Zeichen, die in doppelte Anführungszeichen gesetzt wird, wie beispielsweise `"675af34563dc-tr34"`. Die Methode, mit der `ETag`-Werte generiert werden, ist nicht spezifiziert. Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des letzten Änderungszeitstempels oder einfach eine Revisionsnummer. Zum Beispiel könnte eine Wiki-Engine einen hexadezimalen Hash des Inhalts eines Dokumentationsartikels verwenden.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von Mid-Air-Kollisionen

Mit Hilfe der `ETag`- und der {{HTTPHeader("If-Match")}}-Header können Sie Mid-Air-Kollisionskonflikte (Konflikte) erkennen.

Zum Beispiel kann beim Bearbeiten eines Wikis der aktuelle Wiki-Inhalt gehasht und in einen `Etag`-Header in der Antwort gesetzt werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wikiseite (Veröffentlichen von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, um die Aktualität zu überprüfen.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, bedeutet dies, dass das Dokument zwischenzeitlich bearbeitet wurde und ein
{{HTTPStatus("412", "412 Precondition Failed")}}-Fehler ausgelöst wird.

### Caching von unveränderten Ressourcen

Eine weitere typische Verwendung des `ETag`-Headers besteht darin, unveränderte Ressourcen zwischenzuspeichern. Wenn ein Benutzer eine bestimmte URL erneut besucht (die einen `ETag` gesetzt hat) und sie _veraltet_ ist (zu alt, um als brauchbar zu gelten), sendet der Client den Wert seines `ETag` in einem {{HTTPHeader("If-None-Match")}}-Headerfeld mit:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht den `ETag` des Clients (gesendet mit `If-None-Match`) mit dem `ETag` für seine aktuelle Version der Ressource und wenn beide Werte übereinstimmen (d. h. die Ressource hat sich nicht geändert), sendet der Server einen {{HTTPStatus("304", "304 Not Modified")}}-Status zurück, ohne einen Body, der dem Client mitteilt, dass die zwischengespeicherte Version der Antwort weiterhin verwendet werden kann (_frisch_).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}} Headers
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
