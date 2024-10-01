---
title: Speculation-Rules
slug: Web/HTTP/Headers/Speculation-Rules
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Speculation-Rules`** Antwort-Header liefert eine oder mehrere URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregel-Set des Dokuments hinzugefügt. Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcendatei, die die Spekulationsregel-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ bereitgestellt werden.

> [!NOTE]
> Dieser Mechanismus bietet eine Alternative zum Spezifizieren der JSON-Definition innerhalb eines inline [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) Elements. Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt modifizieren können.

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
Speculation-Rules: <url-list>
```

## Direktiven

- \<url-list>
  - : Eine durch Kommas getrennte Liste von URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Das JSON in den Textdateien muss den gleichen Regeln entsprechen wie das innerhalb von inline `<script type="speculationrules">` Elementen. Siehe [Spekulationsregeln JSON-Repräsentation](/de/docs/Web/HTML/Element/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

## Beispiele

Einzelne Spekulationsregel-Dateireferenz:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Mehrere Spekulationsregel-Dateireferenzen:

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
- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)
