---
title: Speculation-Rules header
short-title: Speculation-Rules
slug: Web/HTTP/Reference/Headers/Speculation-Rules
l10n:
  sourceCommit: 9c2dabaabc326c4a3fed27f6e9bcb3605958e516
---

{{SeeCompatTable}}{{non-standard_header}}

Der HTTP **`Speculation-Rules`** {{Glossary("response_header", "Antwort-Header")}} liefert eine oder mehrere URLs, die auf Textressourcen mit JSON-Definitionen von Spekulationsregeln verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregelset des Dokuments hinzugefügt. Weitere Informationen finden Sie in der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Die Ressourcen-Datei, die die JSON-Definitionen der Spekulationsregeln enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, aber sie wird mit einem [`destination`](/de/docs/Web/API/Request/destination)-Typ von [`speculationrules`](/de/docs/Web/API/Request/destination#speculationrules) angefordert und muss mit einem MIME-Typ von `application/speculationrules+json` ausgeliefert werden.

> [!NOTE]
> Dieser Mechanismus bietet eine Alternative zur Angabe der JSON-Definition innerhalb eines Inline-Elements [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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
  - : Eine durch Kommas getrennte Liste von URLs, die auf Textressourcen mit JSON-Definitionen von Spekulationsregeln verweisen. Die JSONs in den Textdateien müssen den gleichen Regeln folgen wie die, die in Inline-Elementen `<script type="speculationrules">` enthalten sind. Siehe [Repräsentation des Spekulationsregel-JSONs](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

## Beispiele

### Speculation-Rules-Feld mit einer einzigen Datei

Die folgende Antwort enthält einen Dateiverweis:

```http
Speculation-Rules: "/rules/prefetch.json"
```

### Speculation-Rules-Feld mit mehreren Dateien

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
