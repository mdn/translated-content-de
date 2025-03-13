---
title: Speculation-Rules
slug: Web/HTTP/Reference/Headers/Speculation-Rules
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Speculation-Rules`** {{Glossary("response_header", "Antwort-Header")}} bietet eine oder mehrere URLs, die auf Textressourcen verweisen, die Spekulationsregel-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregelsatz des Dokuments hinzugefügt. Weitere Informationen finden Sie in der [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcendatei, die das Spekulationsregel-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem MIME-Typ von `application/speculationrules+json` bereitgestellt werden.

> [!NOTE]
> Dieser Mechanismus bietet eine Alternative zur Angabe der JSON-Definition in einem inline [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) Element. Die Angabe eines HTTP-Headers ist in Fällen nützlich, in denen Entwickler nicht in der Lage sind, das Dokument direkt zu ändern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Eine durch Kommata getrennte Liste von URLs, die auf Textressourcen verweisen, die Spekulationsregel-JSON-Definitionen enthalten. Das JSON, das in den Textdateien enthalten ist, muss den gleichen Regeln folgen wie das in inline `<script type="speculationrules">` Elementen enthaltene. Siehe [Spekulationsregeln JSON-Darstellung](/de/docs/Web/HTML/Element/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

## Beispiele

### Speculation-Rules-Feld mit einer einzelnen Datei

Die folgende Antwort enthält einen Dateiverweis:

```http
Speculation-Rules: "/rules/prefetch.json"
```

### Speculation-Rules-Feld mit mehreren Dateien

Die folgende Antwort enthält mehrere Dateiverweise als durch Kommata getrennte Liste:

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

- [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)
