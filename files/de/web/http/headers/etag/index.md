---
title: ETag
slug: Web/HTTP/Headers/ETag
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP-**`ETag`** (entity tag) {{Glossary("response_header", "Antwort-Header")}} ist ein Identifikator für eine spezifische Version einer Ressource.
Es ermöglicht [Caches](/de/docs/Web/HTTP/Caching) effizienter zu sein und Bandbreite zu sparen, da ein Webserver keine vollständige Antwort erneut senden muss, wenn sich der Inhalt nicht geändert hat.
Zusätzlich helfen ETags dabei, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die sich gegenseitig überschreiben (["mid-air collisions"](#vermeidung_von_mid-air_kollisionen)).

Wenn sich die Ressource unter einer bestimmten URL ändert, _muss_ ein neuer `Etag`-Wert generiert werden.
Ein Vergleich der Werte kann bestimmen, ob zwei Darstellungen einer Ressource identisch sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : `W/` (groß-/kleinschreibungssensitiv) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Conditional_requests#weak_validation) verwendet wird.
    Schwache ETags sind einfach zu erzeugen, aber weit weniger nützlich für Vergleiche.
    Starke Validatoren sind ideal für Vergleiche, können jedoch sehr schwer effizient zu erzeugen sein.
    Schwache `ETag`-Werte von zwei Darstellungen derselben Ressourcen könnten semantisch gleichwertig, aber nicht byte-genau identisch sein.
    Dies bedeutet, dass schwache ETags das Caching verhindern, wenn [Byte-Bereichs-Anfragen](/de/docs/Web/HTTP/Headers/Accept-Ranges) verwendet werden, während starke ETags bedeuten, dass Bereichs-Anfragen weiterhin zwischengespeichert werden können.
- `<etag_value>`
  - : Entity-Tag, das die angeforderte Ressource eindeutig repräsentiert. Es ist eine Zeichenfolge von {{Glossary("ASCII", "ASCII")}}-Zeichen, die in Anführungszeichen gesetzt ist, wie z. B. `"675af34563dc-tr34"`.
    Die Methode, mit der `ETag`-Werte generiert werden, ist nicht festgelegt.
    Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des letzten Änderungszeitpunkts oder einfach eine Revisionsnummer.
    Zum Beispiel kann ein Wiki-Engine einen hexadezimalen Hash des Inhalts des Dokumentationsartikels verwenden.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von mid-air Kollisionen

Mit Hilfe der `ETag`- und der {{HTTPHeader("If-Match")}}-Header können Sie mid-air Bearbeitungskonflikte (Kollisionen) erkennen.

Beim Bearbeiten eines Wikis kann beispielsweise der aktuelle Inhalt des Wikis gehasht und in einem `Etag`-Header in der Antwort eingefügt werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Daten posten) enthält die {{HTTPMethod("POST")}}-Anfrage
den {{HTTPHeader("If-Match")}}-Header, der die `ETag`
Werte enthält, um die Aktualität zu überprüfen.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, bedeutet dies, dass das Dokument in der Zwischenzeit bearbeitet wurde und ein
{{HTTPStatus("412", "412 Precondition Failed")}}-Fehler geworfen wird.

### Zwischenspeichern unveränderter Ressourcen

Eine weitere typische Verwendung des `ETag`-Headers ist das Zwischenspeichern von Ressourcen, die unverändert sind.
Wenn ein Nutzer eine bestimmte URL erneut besucht (die einen `ETag`-Wert hat), und dieser _abgelaufen_ ist (zu alt, um als verwendbar zu gelten), sendet der Client den Wert seines `ETag`-Headers im {{HTTPHeader("If-None-Match")}}-Header-Feld mit:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht das `ETag` des Clients (gesendet mit `If-None-Match`) mit dem `ETag` seiner aktuellen Version der Ressource, und wenn beide Werte übereinstimmen (d. h. die Ressource hat sich nicht geändert), sendet der Server einen {{HTTPStatus("304", "304 Not Modified")}}-Status zurück, ohne einen Inhalt, was dem Client mitteilt, dass die zwischengespeicherte Version der Antwort weiterhin gut zu verwenden ist (_frisch_).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}} -Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwort-Statuscodes
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
