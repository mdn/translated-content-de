---
title: Speculation-Rules
slug: Web/HTTP/Headers/Speculation-Rules
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Speculation-Rules`** Antwort-Header enthält eine oder mehrere URLs, die auf Textressourcen verweisen, die Spekulationsregel-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregel-Satz des Dokuments hinzugefügt. Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcendatei mit den Spekulationsregel-JSONs kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem MIME-Typ von `application/speculationrules+json` bereitgestellt werden.

> [!NOTE]
> Dieser Mechanismus bietet eine Alternative zur Angabe der JSON-Definition in einem Inline-`<script type="speculationrules">` Element. Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler nicht in der Lage sind, das Dokument selbst direkt zu ändern.

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
Speculation-Rules: <url-list>
```

## Direktiven

- \<url-list>
  - : Eine kommagetrennte Liste von URLs, die auf Textressourcen verweisen, welche Spekulationsregel-JSON-Definitionen enthalten. Die JSON-Daten in den Textdateien müssen den gleichen Regeln folgen wie die in Inline-Elementen `<script type="speculationrules">`. Siehe [Spekulationsregeln JSON-Darstellung](/de/docs/Web/HTML/Element/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

## Beispiele

Einzelne Spekulationsregeldatei-Referenz:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Mehrere Spekulationsregeldatei-Referenzen:

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
