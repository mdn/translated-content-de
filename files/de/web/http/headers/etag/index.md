---
title: ETag
slug: Web/HTTP/Headers/ETag
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{HTTPSidebar}}

Der **`ETag`** (oder **entity tag**) HTTP-Antwortheader ist ein Bezeichner für eine spezifische Version einer Ressource. Er ermöglicht es Caches, effizienter zu arbeiten und Bandbreite zu sparen, da ein Webserver keine vollständige Antwort erneut senden muss, wenn sich der Inhalt nicht geändert hat. Zusätzlich helfen Etags dabei, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die sich gegenseitig überschreiben könnten (["mid-air collisions"](#vermeidung_von_simultanen_kollisionen)).

Wenn sich die Ressource an einer gegebenen URL ändert, _muss_ ein neuer `Etag`-Wert generiert werden. Ein Vergleich dieser Werte kann bestimmen, ob zwei Darstellungen einer Ressource identisch sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
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
  - : `'W/'` (Groß- und Kleinschreibung beachten) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Conditional_requests#weak_validation) verwendet wird. Schwache Etags sind einfach zu erzeugen, jedoch viel weniger nützlich für Vergleiche. Starke Validatoren eignen sich ideal für Vergleiche, können aber sehr schwierig effizient zu erzeugen sein. Schwache `ETag`-Werte für zwei Darstellungen derselben Ressource könnten semantisch gleichwertig, aber nicht byte-genau identisch sein. Dies bedeutet, dass schwache Etags das Caching verhindern, wenn [Bytebereichsanfragen](/de/docs/Web/HTTP/Headers/Accept-Ranges) verwendet werden, während starke Etags es ermöglichen, dass Bereichsanfragen weiterhin gecacht werden können.
- "\<etag_value>"
  - : Entity-Tag, das die angeforderte Ressource eindeutig repräsentiert. Es ist eine Zeichenkette aus {{Glossary("ASCII")}}-Zeichen, die in Anführungszeichen gesetzt wird, wie `"675af34563dc-tr34"`. Die Methode, mit der `ETag`-Werte erzeugt werden, ist nicht festgelegt. Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des letzten Änderungszeitstempels oder einfach eine Revisionsnummer. Ein Wiki-System könnte zum Beispiel einen hexadezimalen Hash des Inhalts eines Dokumentationsartikels verwenden.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von simultanen Kollisionen

Mit Hilfe der `ETag` und der {{HTTPHeader("If-Match")}}-Header können Sie gleichzeitige Bearbeitungskollisionen erkennen.

Zum Beispiel kann beim Bearbeiten eines Wikis der aktuelle Wiki-Inhalt gehasht und in einem `Etag`-Header in der Antwort verwendet werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wikiseite (Veröffentlichen von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, um die Aktualität zu überprüfen:

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, bedeutet dies, dass das Dokument zwischenzeitlich bearbeitet wurde und es wird ein {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler ausgegeben.

### Caching von unveränderten Ressourcen

Ein weiterer typischer Einsatz des `ETag`-Headers ist das Caching von unveränderten Ressourcen. Wenn ein Benutzer eine gegebene URL erneut besucht (die ein `ETag`-Set hat) und diese _veraltet_ ist (zu alt, um als brauchbar betrachtet zu werden), sendet der Client den Wert seines `ETag` im {{HTTPHeader("If-None-Match")}}-Headerfeld:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht den `ETag` des Clients (gesendet mit `If-None-Match`) mit dem `ETag` seiner aktuellen Version der Ressource, und wenn beide Werte übereinstimmen (das heißt, die Ressource hat sich nicht geändert), sendet der Server einen {{HTTPStatus("304")}} `Not Modified`-Status ohne Body zurück, der dem Client mitteilt, dass die zwischengespeicherte Version der Antwort weiterhin gut zu verwenden ist (_frisch_).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
