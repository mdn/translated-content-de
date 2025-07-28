---
title: ETag header
short-title: ETag
slug: Web/HTTP/Reference/Headers/ETag
l10n:
  sourceCommit: 099a15b4234071958980dcae0e122a7145fdbdfa
---

Der HTTP-**`ETag`**-({{Glossary("response_header", "Antwort-Header")}}) ist ein Identifikator für eine spezifische Version einer Ressource.
Er ermöglicht es [Caches](/de/docs/Web/HTTP/Guides/Caching), effizienter zu arbeiten und Bandbreite zu sparen, da ein Webserver keine vollständige Antwort erneut senden muss, wenn sich der Inhalt nicht geändert hat.
Zusätzlich helfen ETags, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die sich gegenseitig überschreiben (["mid-air collisions"](#vermeidung_von_kollisionen_bei_simultanen_bearbeitungen)).

Wenn sich die Ressource an einer gegebenen URL ändert, _muss_ ein neuer `ETag`-Wert generiert werden.
Ein Vergleich dieser kann bestimmen, ob zwei Darstellungen einer Ressource identisch sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Repräsentations-Header")}}</td>
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
  - : `W/` (Groß- und Kleinschreibung beachten) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Guides/Conditional_requests#weak_validation) verwendet wird.
    Schwache ETags sind einfach zu generieren, aber bei Vergleichen weit weniger nützlich.
    Starke Validatoren sind ideal für Vergleiche, können aber sehr schwer effizient zu generieren sein.
    Schwache `ETag`-Werte von zwei Darstellungen derselben Ressourcen könnten semantisch gleichwertig, aber nicht byteweise identisch sein.
    Das bedeutet, dass schwache ETags das Caching verhindern, wenn [Byte-Range-Anfragen](/de/docs/Web/HTTP/Reference/Headers/Accept-Ranges) verwendet werden, während starke ETags bedeuten, dass Bereichsanfragen immer noch gecacht werden können.
- `<etag_value>`
  - : Entität-Tag, das die angeforderte Ressource eindeutig darstellt. Es handelt sich um eine Zeichenkette aus {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen stehen, wie z.B. `"675af34563dc-tr34"`.
    Die Methode zur Generierung von `ETag`-Werten ist nicht spezifiziert.
    Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des letzten Änderungszeitpunkts oder einfach eine Versionsnummer.
    Ein Beispiel ist eine Wiki-Engine, die einen hexadezimalen Hash des Inhalts des Dokumentationsartikels verwenden kann.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von Kollisionen bei simultanen Bearbeitungen

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}}-Header können Sie Kollisionen bei simultanen Bearbeitungen (Konflikte) erkennen.

Zum Beispiel kann beim Bearbeiten eines Wikis der aktuelle Wiki-Inhalt gehasht und in einem `ETag`-Header in der Antwort gespeichert werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Daten werden gesendet) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, um die Aktualität zu überprüfen.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, bedeutet dies, dass das Dokument zwischenzeitlich bearbeitet wurde, und ein {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler wird ausgelöst.

### Caching von unveränderten Ressourcen

Ein weiterer typischer Gebrauch des `ETag`-Headers ist das Caching von unveränderten Ressourcen.
Wenn ein Benutzer eine bestimmte URL erneut besucht (die einen `ETag` gesetzt hat) und sie _veraltet_ ist (zu alt, um als verwendbar betrachtet zu werden), wird der Client den Wert seines `ETag` zusammen mit einem {{HTTPHeader("If-None-Match")}}-Headerfeld senden:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht das `ETag` des Clients (gesendet mit `If-None-Match`) mit dem `ETag` für seine aktuelle Version der Ressource, und wenn beide Werte übereinstimmen (d.h. die Ressource hat sich nicht geändert), sendet der Server einen {{HTTPStatus("304", "304 Not Modified")}}-Status ohne Body zurück, was dem Client mitteilt, dass die zwischengespeicherte Version der Antwort noch gut zu verwenden ist (_fresh_).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}} Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
