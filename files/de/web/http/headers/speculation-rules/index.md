---
title: Speculation-Rules
slug: Web/HTTP/Headers/Speculation-Rules
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Speculation-Rules`** {{Glossary("response_header", "Antwort-Header")}} enthält eine oder mehrere URLs, die auf Textressourcen mit JSON-Definitionen für Spekulationsregeln verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt. Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcendatei, die die Spekulationsregeln im JSON-Format enthält, kann beliebige gültige Namen und Erweiterungen haben. Sie muss jedoch mit einem MIME-Typ `application/speculationrules+json` bereitgestellt werden.

> [!NOTE]
> Dieser Mechanismus bietet eine Alternative zur Spezifikation der JSON-Definition innerhalb eines Inline-Elements [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules). Das Angeben eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler nicht in der Lage sind, das Dokument selbst direkt zu ändern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Eine durch Kommas getrennte Liste von URLs, die auf Textressourcen mit JSON-Definitionen für Spekulationsregeln verweisen. Das JSON in den Textdateien muss den gleichen Regeln folgen wie das innerhalb von Inline-Elementen `<script type="speculationrules">`. Siehe [JSON-Darstellung der Spekulationsregeln](/de/docs/Web/HTML/Element/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

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
> Die URL-Werte müssen in Anführungszeichen stehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)
