---
title: ETag
slug: Web/HTTP/Headers/ETag
l10n:
  sourceCommit: f341bd4728d3448faf6b9fc3b45980c35c067f25
---

{{HTTPSidebar}}

Der HTTP **`ETag`** (Entity-Tag) {{Glossary("response_header", "Antwort-Header")}} ist ein Bezeichner für eine bestimmte Version einer Ressource. Er ermöglicht es [Caches](/de/docs/Web/HTTP/Caching) effizienter zu arbeiten und Bandbreite zu sparen, da ein Webserver nicht die gesamte Antwort erneut senden muss, wenn sich der Inhalt nicht geändert hat. Darüber hinaus helfen ETags, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die sich gegenseitig überschreiben könnten (["mid-air collisions"](#vermeidung_von_"mid-air_collisions")).

Wenn sich die Ressource an einer bestimmten URL ändert, _muss_ ein neuer `Etag`-Wert generiert werden. Ein Vergleich dieser Werte kann bestimmen, ob zwei Darstellungen einer Ressource identisch sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : `W/` (Groß-/Kleinschreibung beachten) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Conditional_requests#weak_validation) verwendet wird. Schwache ETags sind einfach zu generieren, aber weit weniger nützlich für Vergleiche. Starke Validatoren sind ideal für Vergleiche, können jedoch sehr schwer effizient zu generieren sein. Schwache `ETag`-Werte von zwei Darstellungen derselben Ressourcen können semantisch gleichwertig sein, aber nicht byte-genau identisch. Das bedeutet, schwache ETags verhindern das Caching bei [Byte-Range-Anfragen](/de/docs/Web/HTTP/Headers/Accept-Ranges), aber starke ETags ermöglichen, dass Range-Anfragen dennoch zwischengespeichert werden können.
- `<etag_value>`
  - : Entity-Tag, das die angeforderte Ressource eindeutig repräsentiert. Es ist eine Zeichenkette von {{Glossary("ASCII", "ASCII")}}-Zeichen zwischen Anführungszeichen, wie `"675af34563dc-tr34"`. Die Methode, mit der `ETag`-Werte generiert werden, ist nicht spezifiziert. Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des letzten Änderungszeitstempels oder einfach eine Revisionsnummer. Beispielsweise kann eine Wiki-Engine einen hexadezimalen Hash des Inhalts eines Dokumentationsartikels verwenden.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von "mid-air collisions"

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}}-Header können Sie "mid-air edit collisions" (Konflikte) erkennen.

Wenn beispielsweise ein Wiki bearbeitet wird, kann der aktuelle Wiki-Inhalt gehasht und in einem `Etag`-Header in der Antwort platziert werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Posten von Daten) enthält der {{HTTPMethod("POST")}}-Antrag den {{HTTPHeader("If-Match")}}-Header, der die `ETag`-Werte zur Frischeüberprüfung enthält.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, bedeutet dies, dass das Dokument zwischenzeitlich bearbeitet wurde und ein
{{HTTPStatus("412", "412 Precondition Failed")}}-Fehler ausgelöst wird.

### Caching unveränderter Ressourcen

Ein weiteres typisches Anwendungsbeispiel des `ETag`-Headers ist das Caching von Ressourcen, die unverändert sind. Wenn ein Benutzer eine gegebene URL erneut besucht (die ein `ETag` gesetzt hat) und diese _veraltet_ ist (zu alt, um verwendbar zu sein), sendet der Client den Wert seines `ETag` im {{HTTPHeader("If-None-Match")}}-Headerfeld mit:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht den `ETag` des Clients (gesendet mit `If-None-Match`) mit dem `ETag` seiner aktuellen Version der Ressource, und wenn beide Werte übereinstimmen (das bedeutet, die Ressource hat sich nicht geändert), sendet der Server einen {{HTTPStatus("304", "304 Not Modified")}}-Status zurück, ohne einen Body, was dem Client mitteilt, dass die zwischengespeicherte Version der Antwort nach wie vor verwendbar (_frisch_) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}} Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
