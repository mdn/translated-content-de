---
title: Spekulations-Regeln
slug: Web/HTTP/Headers/Speculation-Rules
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Speculation-Rules`** Antwort-Header gibt eine oder mehrere URLs an, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregelsatz des Dokuments hinzugefügt. Weitere Informationen finden Sie in der [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcendatei, die das Spekulationsregel-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ ausgeliefert werden.

> [!NOTE]
> Dieser Mechanismus bietet eine Alternative zur Angabe der JSON-Definition innerhalb eines Inline-[`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)-Elements. Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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
Speculation-Rules: <url-list>
```

## Direktiven

- \<url-list>
  - : Eine durch Kommas getrennte Liste von URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Das JSON in den Textdateien muss denselben Regeln folgen wie das innerhalb von Inline-`<script type="speculationrules">`-Elementen enthaltene. Siehe [Spekulationsregel-JSON-Darstellung](/de/docs/Web/HTML/Element/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

## Beispiele

Einzelverweis auf eine Spekulationsregeldatei:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Mehrere Verweise auf Spekulationsregeldateien:

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

- [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)
