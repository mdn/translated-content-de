---
title: ETag
slug: Web/HTTP/Headers/ETag
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{HTTPSidebar}}

Der **`ETag`** (oder **Entity-Tag**) HTTP-Antwortheader ist ein Identifikator für eine spezifische Version einer Ressource. Er ermöglicht es Caches, effizienter zu arbeiten und Bandbreite zu sparen, da ein Webserver keine vollständige Antwort erneut senden muss, wenn der Inhalt nicht geändert wurde. Zusätzlich helfen Etags, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die sich gegenseitig überschreiben könnten (["mid-air collisions"](#vermeidung_von_"mid-air_collisions")).

Wenn sich die Ressource unter einer bestimmten URL ändert, _muss_ ein neuer `Etag`-Wert generiert werden. Ein Vergleich dieser Werte kann feststellen, ob zwei Darstellungen einer Ressource gleich sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : `'W/'` (Groß-/Kleinschreibung beachten) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Conditional_requests#weak_validation) verwendet wird. Schwache Etags sind leicht zu generieren, aber bei Vergleichen weit weniger nützlich. Starke Validatoren sind ideal für Vergleiche, aber können sehr schwer effizient zu generieren sein. Schwache `ETag`-Werte von zwei Darstellungen derselben Ressourcen könnten semantisch gleichwertig, aber nicht byte-genau identisch sein. Dies bedeutet, dass schwache Etags das Caching verhindern, wenn [Byte-Range-Requests](/de/docs/Web/HTTP/Headers/Accept-Ranges) verwendet werden, aber starke Etags ermöglichen, dass Range-Requests dennoch gecacht werden können.
- "\<etag_value>"
  - : Entity-Tag, das die angeforderte Ressource eindeutig repräsentiert. Es ist eine Zeichenkette von [ASCII](/de/docs/Glossary/ASCII)-Zeichen, die in doppelte Anführungszeichen gesetzt wird, wie `"675af34563dc-tr34"`. Die Methode, durch die `ETag`-Werte generiert werden, ist nicht spezifiziert. Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des Zeitstempels der letzten Änderung oder einfach eine Revisionsnummer. Beispielsweise kann eine Wiki-Engine einen hexadezimalen Hash des Inhalts eines Dokumentationsartikels verwenden.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von "mid-air collisions"

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}}-Header können Sie Kollisionen bei gleichzeitigen Bearbeitungen erkennen.

Zum Beispiel, wenn Sie ein Wiki bearbeiten, kann der aktuelle Wiki-Inhalt gehashed und in einem `Etag`-Header in der Antwort platziert werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Senden von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, um die Aktualität zu überprüfen:

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, bedeutet dies, dass das Dokument zwischenzeitlich bearbeitet wurde und ein {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler ausgelöst wird.

### Caching von unveränderten Ressourcen

Eine weitere typische Verwendung des `ETag`-Headers ist das Caching von unveränderten Ressourcen. Wenn ein Benutzer eine bestimmte URL erneut besucht (bei der ein `ETag` gesetzt ist) und diese _veraltet_ ist (zu alt, um als verwendbar zu gelten), sendet der Client den Wert seines `ETag` im {{HTTPHeader("If-None-Match")}}-Headerfeld:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht das `ETag` des Clients (gesendet mit `If-None-Match`) mit dem `ETag` seiner aktuellen Version der Ressource, und wenn beide Werte übereinstimmen (d. h. die Ressource hat sich nicht geändert), sendet der Server zurück einen {{HTTPStatus("304")}} `Not Modified`-Status, ohne einen Body, der dem Client mitteilt, dass die zwischengespeicherte Version der Antwort immer noch gut zu verwenden ist (_frisch_).

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
