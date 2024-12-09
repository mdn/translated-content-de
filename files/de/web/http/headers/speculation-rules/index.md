---
title: Speculation-Rules
slug: Web/HTTP/Headers/Speculation-Rules
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`Speculation-Rules`**-{{Glossary("response_header", "Antwort-Header")}} liefert eine oder mehrere URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregel-Set des Dokuments hinzugefügt. Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcendatei mit den Spekulationsregeln im JSON-Format kann einen beliebigen gültigen Namen und eine beliebige Endung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ bereitgestellt werden.

> [!NOTE]
> Dieser Mechanismus bietet eine Alternative zur Angabe der JSON-Definition innerhalb eines Inline-Elements [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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
Speculation-Rules: <url-list>
```

## Direktiven

- `<url-list>`
  - : Eine durch Kommas getrennte Liste von URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Das JSON in den Textdateien muss denselben Regeln folgen wie das innerhalb von Inline-Elementen `<script type="speculationrules">`. Siehe [Spekulationsregel-JSON-Repräsentation](/de/docs/Web/HTML/Element/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

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
> Die URL-Werte müssen in Anführungszeichen eingeschlossen sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)
