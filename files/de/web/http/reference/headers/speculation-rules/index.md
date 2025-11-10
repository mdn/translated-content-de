---
title: Speculation-Rules header
short-title: Speculation-Rules
slug: Web/HTTP/Reference/Headers/Speculation-Rules
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{SeeCompatTable}}

Der HTTP **`Speculation-Rules`** {{Glossary("response_header", "Response-Header")}} liefert eine oder mehrere URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt. Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcendatei, die das Spekulationsregeln-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, wird jedoch mit einem [`destination`](/de/docs/Web/API/Request/destination)-Typ von [`speculationrules`](/de/docs/Web/API/Request/destination#speculationrules) angefordert und muss mit einem MIME-Typ von `application/speculationrules+json` bereitgestellt werden.

> [!NOTE]
> Dieser Mechanismus bietet eine Alternative zum Einfügen der JSON-Definition innerhalb eines Inline-Elements [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules). Das Festlegen eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Speculation-Rules: <url-list>
```

## Direktiven

- `<url-list>`
  - : Eine kommagetrennte Liste von URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Das JSON in den Textdateien muss denselben Regeln folgen wie das innerhalb von Inline-Elementen `<script type="speculationrules">`. Siehe [Speculation rules JSON-Darstellung](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

## Beispiele

### Speculation-Rules Feld mit einer einzelnen Datei

Die folgende Antwort enthält eine einzelne Dateireferenz:

```http
Speculation-Rules: "/rules/prefetch.json"
```

### Speculation-Rules Feld mit mehreren Dateien

Die folgende Antwort enthält mehrere Dateiverweise als kommagetrennte Liste:

```http
Speculation-Rules: "/rules/prefetch.json","/rules/prerender.json"
```

> [!NOTE]
> Die URL-Werte müssen in Anführungszeichen stehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)
