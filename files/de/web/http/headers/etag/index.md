---
title: ETag
slug: Web/HTTP/Headers/ETag
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{HTTPSidebar}}

Der **`ETag`** (oder **Entity-Tag**) HTTP-Antwortheader ist ein Identifikator für eine
spezifische Version einer Ressource. Er ermöglicht effizientere Caches und spart Bandbreite, da
ein Webserver keine vollständige Antwort erneut senden muss, wenn sich der Inhalt nicht geändert hat.
Zusätzlich helfen Etags, gleichzeitige Aktualisierungen einer Ressource zu verhindern, die sich gegenseitig überschreiben (["mid-air collisions"](#vermeidung_von_"mid-air_collisions")).

Wenn sich die Ressource unter einer bestimmten URL ändert, _muss_ ein neuer `ETag`-Wert
generiert werden. Ein Vergleich dieser Werte kann feststellen, ob zwei Darstellungen einer Ressource
identisch sind.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
  - : `'W/'` (groß-/kleinschreibungssensitiv) zeigt an, dass ein [schwacher Validator](/de/docs/Web/HTTP/Conditional_requests#weak_validation)
    verwendet wird. Schwache Etags sind einfach zu generieren, aber weitaus weniger nützlich für Vergleiche.
    Starke Validatoren sind für Vergleiche ideal, können jedoch sehr schwer effizient zu generieren sein.
    Schwache `ETag`-Werte von zwei Darstellungen derselben Ressourcen könnten semantisch gleichwertig sein, aber nicht byte-genau identisch. Dies bedeutet, dass schwache Etags das Caching verhindern, wenn [Byte-Range-Anfragen](/de/docs/Web/HTTP/Headers/Accept-Ranges) verwendet werden,
    während starke Etags bedeuten, dass Range-Anfragen weiterhin zwischengespeichert werden können.
- "\<etag_value>"
  - : Entity-Tag, das die angeforderte Ressource eindeutig darstellt. Es ist eine Zeichenkette aus {{Glossary("ASCII")}}
    Zeichen, die in Anführungszeichen gesetzt ist, wie `"675af34563dc-tr34"`. Die Methode zur Generierung von `ETag`-Werten ist nicht festgelegt. Typischerweise ist der ETag-Wert ein Hash des Inhalts, ein Hash des letzten Änderungszeitpunkts oder einfach eine Revisionsnummer.
    Zum Beispiel kann eine Wiki-Engine einen hexadezimalen Hash des Dokumentationsartikelinhalts verwenden.

## Beispiele

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von "mid-air collisions"

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}}-Header können Sie
bearbeitungsbedingte Kollisionen vermeiden.

Zum Beispiel kann beim Bearbeiten eines Wikis der aktuelle Wiki-Inhalt
gehasht und in einen `ETag`-Header in der Antwort eingefügt werden:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Senden von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage
den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, um die Frische zu überprüfen.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, bedeutet dies, dass das Dokument inzwischen bearbeitet wurde und ein
{{HTTPStatus("412", "412 Precondition Failed")}}-Fehler ausgelöst wird.

### Caching von unveränderten Ressourcen

Ein weiterer typischer Anwendungsfall des `ETag`-Headers ist das Caching von
unveränderten Ressourcen. Wenn ein Benutzer eine bestimmte URL erneut besucht (die einen `ETag` gesetzt hat), und
sie veraltet ist (zu alt, um als verwendbar zu gelten), sendet der Client den Wert
seines `ETag` zusammen mit einem {{HTTPHeader("If-None-Match")}}-Headerfeld:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Der Server vergleicht den `ETag` des Clients (gesendet mit
`If-None-Match`) mit dem `ETag` für seine aktuelle Version der
Ressource, und wenn beide Werte übereinstimmen (d. h. die Ressource hat sich nicht geändert), sendet der Server
einen {{HTTPStatus("304")}}-`Not Modified`-Status ohne Körper zurück,
was dem Client mitteilt, dass die zwischengespeicherte Version der Antwort immer noch gut zu benutzen ist
(frisch).

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
