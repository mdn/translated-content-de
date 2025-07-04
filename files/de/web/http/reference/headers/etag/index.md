---
title: ETag header
short-title: ETag
slug: Web/HTTP/Reference/Headers/ETag
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`ETag`** (Entity-Tag) {{Glossary("response_header", "Antwort-Header")}} ist ein Bezeichner für eine spezifische Version einer Ressource. Er ermöglicht es [Caches](/de/docs/Web/HTTP/Leitfaden/Caching), effizienter zu arbeiten und Bandbreite zu sparen, da ein Webserver keine vollständige Antwort erneut senden muss, wenn sich der Inhalt nicht geändert hat. Zusätzlich helfen ETags, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die sich gegenseitig überschreiben (["mid-air collisions"](#avoiding_mid-air-collisions)).

Wenn sich die Ressource an einer bestimmten URL ändert, _muss_ ein neuer `ETag`-Wert generiert werden. Ein Vergleich dieser Werte kann feststellen, ob zwei Darstellungen einer Ressource identisch sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Repräsentation-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : `W/` (Groß-/Kleinschreibung beachten) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Guides/Conditional_requests#weak_validation) verwendet wird. Schwache ETags sind einfach zu generieren, aber weit weniger nützlich für Vergleiche. Starke Validatoren sind ideal für Vergleiche, können jedoch sehr schwer effizient zu generieren sein. Schwache `ETag`-Werte von zwei Darstellungen derselben Ressourcen könnten semantisch äquivalent, aber nicht byte-genau identisch sein. Das bedeutet, dass schwache ETags das Caching verhindern, wenn [Byte-Range-Anfragen](/de/docs/Web/HTTP/Reference/Headers/Accept-Ranges) verwendet werden, während starke ETags bedeuten, dass Range-Anfragen weiterhin gecacht werden können.
- `<etag_value>`
  - : Entity-Tag, das die angeforderte Ressource eindeutig repräsentiert. Es ist eine Zeichenfolge aus {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt wird, wie `"675af34563dc-tr34"`. Die Methode, wie `ETag`-Werte generiert werden, wird nicht spezifiziert. Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des letzten Änderungszeitstempels oder einfach eine Revisionsnummer. Beispielsweise kann eine Wiki-Engine einen hexadezimalen Hash des Inhalts des Dokumentationsartikels verwenden.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von mid-air-collisions

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}}-Header können Sie mid-air Edit-Kollisionen (Konflikte) erkennen.

Zum Beispiel, wenn Sie ein Wiki bearbeiten, können die aktuellen Wiki-Inhalte gehasht und in einem `ETag`-Header in der Antwort platziert werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Senden von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, um die Aktualität zu überprüfen.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, bedeutet dies, dass das Dokument zwischendurch bearbeitet wurde und es wird ein {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler ausgelöst.

### Caching nicht geänderter Ressourcen

Eine weitere typische Verwendung des `ETag`-Headers ist das Caching von Ressourcen, die sich nicht geändert haben. Wenn ein Benutzer eine bestimmte URL erneut besucht (die ein `ETag` gesetzt hat) und diese _stale_ ist (zu alt, um als nutzbar betrachtet zu werden), sendet der Client den Wert seines `ETag` in einem {{HTTPHeader("If-None-Match")}}-Header-Feld mit:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht das `ETag` des Clients (gesendet mit `If-None-Match`) mit dem `ETag` seiner aktuellen Version der Ressource, und wenn beide Werte übereinstimmen (d.h. die Ressource hat sich nicht geändert), sendet der Server einen {{HTTPStatus("304", "304 Not Modified")}}-Status zurück, ohne Körper, welcher dem Client mitteilt, dass die zwischengespeicherte Version der Antwort immer noch gut zu verwenden ist (_frisch_).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}}-Antwortstatuscodes
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
