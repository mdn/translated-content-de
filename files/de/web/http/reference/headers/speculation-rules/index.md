---
title: Speculation-Rules header
short-title: Speculation-Rules
slug: Web/HTTP/Reference/Headers/Speculation-Rules
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Der HTTP-{{Glossary("response_header", "Response-Header")}} **`Speculation-Rules`** enthält eine oder mehrere URLs, die auf Textressourcen mit JSON-Definitionen für Speculation Rules verweisen. Wenn die Response ein HTML-Dokument ist, werden diese Regeln dem Speculation-Rule-Set des Dokuments hinzugefügt. Weitere Informationen finden Sie in der Dokumentation zur [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcendatei mit dem Speculation-Rules-JSON kann einen beliebigen gültigen Namen und eine beliebige gültige Dateiendung haben. Sie wird jedoch mit dem [`destination`](/de/docs/Web/API/Request/destination)-Typ [`speculationrules`](/de/docs/Web/API/Request/destination#speculationrules) angefordert und muss mit dem MIME-Typ `application/speculationrules+json` bereitgestellt werden.

> [!NOTE]
> Dieser Mechanismus ist eine Alternative zur Angabe der JSON-Definition in einem Inline-Element vom Typ [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules). Ein HTTP-Header ist nützlich, wenn Entwickler das Dokument selbst nicht direkt ändern können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Speculation-Rules: <url-list>
```

## Direktiven

- `<url-list>`
  - : Eine durch Kommas getrennte Liste von URLs, die auf Textressourcen mit JSON-Definitionen für Speculation Rules verweisen. Das JSON in den Textdateien muss denselben Regeln entsprechen wie das JSON in Inline-Elementen vom Typ `<script type="speculationrules">`. Eine Beschreibung der Syntax finden Sie unter [JSON-Darstellung von Speculation Rules](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation).

## Beispiele

### Speculation-Rules-Feld mit einer einzelnen Datei

Die folgende Response enthält einen Dateiverweis:

```http
Speculation-Rules: "/rules/prefetch.json"
```

### Speculation-Rules-Feld mit mehreren Dateien

Die folgende Response enthält mehrere Dateiverweise als durch Kommas getrennte Liste:

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
