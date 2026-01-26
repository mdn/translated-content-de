---
title: Speculation-Rules header
short-title: Speculation-Rules
slug: Web/HTTP/Reference/Headers/Speculation-Rules
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}

Der HTTP-**`Speculation-Rules`**-{{Glossary("response_header", "Response-Header")}} liefert eine oder mehrere URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zur Spekulationsregelmenge des Dokuments hinzugefügt. Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcen-Datei, die die Spekulationsregeln im JSON-Format enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, wird jedoch mit einem [`destination`](/de/docs/Web/API/Request/destination)-Typ von [`speculationrules`](/de/docs/Web/API/Request/destination#speculationrules) angefordert und muss mit einem MIME-Typ von `application/speculationrules+json` bereitgestellt werden.

> [!NOTE]
> Dieser Mechanismus bietet eine Alternative zur Spezifizierung der JSON-Definition innerhalb eines Inline-Elements [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler nicht in der Lage sind, das Dokument direkt zu ändern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Speculation-Rules: <url-list>
```

## Direktiven

- `<url-list>`
  - : Eine durch Kommas getrennte Liste von URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Das JSON, das in den Textdateien enthalten ist, muss denselben Regeln folgen wie das in Inline-Elementen `<script type="speculationrules">` enthaltene. Weitere Informationen zur Syntax finden Sie unter [Repräsentation von Spekulationsregeln im JSON-Format](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation).

## Beispiele

### Speculation-Rules-Feld mit einer einzelnen Datei

Die folgende Antwort enthält einen Dateiverweis:

```http
Speculation-Rules: "/rules/prefetch.json"
```

### Speculation-Rules-Feld mit mehreren Dateien

Die folgende Antwort enthält mehrere Dateiverweise als durch Kommas getrennte Liste:

```http
Speculation-Rules: "/rules/prefetch.json","/rules/prerender.json"
```

> [!NOTE]
> Die URL-Werte müssen in Anführungszeichen enthalten sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)
