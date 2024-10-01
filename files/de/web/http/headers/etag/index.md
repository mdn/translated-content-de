---
title: ETag
slug: Web/HTTP/Headers/ETag
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{HTTPSidebar}}

Der **`ETag`** (oder **Entity-Tag**) HTTP-Antwort-Header ist ein Bezeichner für eine
spezifische Version einer Ressource. Er ermöglicht es Caches, effizienter zu arbeiten und Bandbreite zu sparen, da ein Webserver keine vollständige Antwort erneut senden muss, wenn sich der Inhalt nicht geändert hat. Zudem helfen Etags dabei, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die sich gegenseitig überschreiben (["mid-air collisions"](#vermeidung_von_"mid-air_collisions")).

Wenn sich die Ressource unter einer bestimmten URL ändert, _muss_ ein neuer `Etag`-Wert generiert werden. Ein Vergleich von ihnen kann bestimmen, ob zwei Repräsentationen einer Ressource identisch sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : `'W/'` (Groß-/Kleinschreibung beachten) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Conditional_requests#weak_validation) verwendet wird. Schwache Etags sind einfach zu erzeugen, aber für Vergleiche weit weniger nützlich. Starke Validatoren sind ideal für Vergleiche, können jedoch sehr schwer effizient zu erzeugen sein. Schwache `ETag`-Werte von zwei Repräsentationen derselben Ressourcen könnten semantisch äquivalent sein, aber nicht byteweise identisch. Das bedeutet, dass schwache Etags das Caching verhindern, wenn [Bytebereich-Anfragen](/de/docs/Web/HTTP/Headers/Accept-Ranges) verwendet werden, jedoch starke Etags ermöglichen es, dass Bereichsanfragen weiterhin zwischengespeichert werden.
- "\<etag_value>"
  - : Entity-Tag, das die angeforderte Ressource eindeutig darstellt. Es ist eine Zeichenkette von {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt ist, wie `"675af34563dc-tr34"`. Die Methode, mit der `ETag`-Werte generiert werden, ist nicht spezifiziert. Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des letzten Änderungszeitpunktes oder nur eine Revisionsnummer. Beispielsweise kann eine Wiki-Engine einen hexadezimalen Hash des Inhalts des Dokumentartikels verwenden.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von "mid-air collisions"

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}}-Header können Sie Bearbeitungskollisionen in der Luft erkennen.

Zum Beispiel kann beim Bearbeiten eines Wikis der aktuelle Wiki-Inhalt gehasht und in einen `Etag`-Header in der Antwort eingefügt werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern der Änderungen an einer Wiki-Seite (Senden von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, um die Aktualität zu überprüfen.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hash-Werte nicht übereinstimmen, bedeutet dies, dass das Dokument zwischenzeitlich bearbeitet wurde und ein {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler ausgelöst wird.

### Zwischenspeicherung unveränderter Ressourcen

Eine weitere typische Verwendung des `ETag`-Headers besteht darin, Ressourcen, die sich nicht geändert haben, zwischenzuspeichern. Wenn ein Benutzer eine bestimmte URL erneut besucht (die einen `ETag` gesetzt hat), und sie _veraltet_ ist (zu alt, um als nutzbar angesehen zu werden), sendet der Client den Wert seines `ETag` im {{HTTPHeader("If-None-Match")}}-Headerfeld mit:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht das `ETag` des Clients (gesendet mit `If-None-Match`) mit dem `ETag` für die aktuelle Version der Ressource. Wenn beide Werte übereinstimmen (das heißt, die Ressource hat sich nicht geändert), sendet der Server den Status {{HTTPStatus("304")}} `Not Modified` ohne Inhalt zurück, was dem Client mitteilt, dass die zwischengespeicherte Version der Antwort weiterhin gut nutzbar (_frisch_) ist.

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
