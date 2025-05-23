---
title: ETag header
short-title: ETag
slug: Web/HTTP/Reference/Headers/ETag
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`ETag`** (Entity-Tag) {{Glossary("response_header", "Antwort-Header")}} ist ein Bezeichner für eine spezifische Version einer Ressource.
Er ermöglicht es [Caches](/de/docs/Web/HTTP/Guides/Caching), effizienter zu arbeiten und Bandbreite zu sparen, da ein Webserver nicht die gesamte Antwort erneut senden muss, wenn sich der Inhalt nicht geändert hat.
Zusätzlich helfen ETags dabei, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die einander überschreiben könnten (["mid-air collisions"](#vermeidung_von_mid-air_collisions)).

Wenn sich die Ressource an einer bestimmten URL ändert, _muss_ ein neuer `Etag`-Wert generiert werden.
Ein Vergleich dieser Werte kann bestimmen, ob zwei Darstellungen einer Ressource identisch sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Darstellungs-Header")}}</td>
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
  - : `W/` (groß-/kleinschreibungssensitiv) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Guides/Conditional_requests#weak_validation) verwendet wird.
    Schwache ETags sind einfach zu erzeugen, aber weit weniger nützlich für Vergleiche.
    Starke Validatoren sind ideal für Vergleiche, können aber sehr schwer effizient generiert werden.
    Schwache `ETag`-Werte von zwei Darstellungen derselben Ressourcen könnten semantisch äquivalent, aber nicht byte-genau identisch sein.
    Das bedeutet, dass schwache ETags das Caching verhindern, wenn [Bytebereichs-Anfragen](/de/docs/Web/HTTP/Reference/Headers/Accept-Ranges) genutzt werden, während starke ETags bedeuten, dass Bereichsanfragen dennoch gecacht werden können.
- `<etag_value>`
  - : Entity-Tag, das die angeforderte Ressource eindeutig repräsentiert. Es handelt sich um eine Zeichenfolge aus {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt ist, wie `"675af34563dc-tr34"`.
    Die Methode, mit der `ETag`-Werte generiert werden, ist nicht spezifiziert.
    Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des letzten Änderungszeitstempels oder einfach eine Revisionsnummer.
    Beispielsweise kann eine Wiki-Engine einen hexadezimalen Hash des Dokumentationsartikelinhalts verwenden.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von mid-air collisions

Mit Hilfe der `ETag`- und der {{HTTPHeader("If-Match")}}-Header können Sie mid-air Edit-Kollisionen (Konflikte) erkennen.

Zum Beispiel kann beim Bearbeiten eines Wikis der aktuelle Wiki-Inhalt gehasht und in einen `Etag`-Header in der Antwort eingefügt werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wikiseite (Posten von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, um die Aktualität zu überprüfen.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, bedeutet dies, dass das Dokument in der Zwischenzeit bearbeitet wurde und ein {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler ausgelöst wird.

### Caching unveränderter Ressourcen

Eine andere typische Verwendung des `ETag`-Headers ist das Caching von unveränderten Ressourcen.
Wenn ein Benutzer eine bestimmte URL erneut besucht (die ein `ETag` gesetzt hat) und diese _veraltet_ (zu alt, um noch als verwendbar zu gelten) ist, sendet der Client den Wert seines `ETag` zusammen mit einem {{HTTPHeader("If-None-Match")}} Headerfeld:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht den `ETag` des Clients (gesendet mit `If-None-Match`) mit dem `ETag` für seine aktuelle Version der Ressource, und wenn beide Werte übereinstimmen (das heißt, die Ressource hat sich nicht geändert), sendet der Server einen {{HTTPStatus("304", "304 Not Modified")}}-Status zurück, ohne einen Body, was dem Client mitteilt, dass die zwischengespeicherte Version der Antwort noch gut zu verwenden ist (_frisch_).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}}-Antwortstatuscodes
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
