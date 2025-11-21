---
title: SourceMap header
short-title: SourceMap
slug: Web/HTTP/Reference/Headers/SourceMap
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`SourceMap`**-{{Glossary("response_header", "Antwortheader")}} gibt den Speicherort einer {{Glossary("source_map", "Source-Map")}} für die Ressource an.

Der HTTP-`SourceMap`-Header hat Vorrang vor einer Quellannotierung (`sourceMappingURL=path-to-map.js.map`), und falls beide vorhanden sind, wird die Header-URL verwendet, um die Source-Map-Datei aufzulösen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Direktiven

- `<url>`
  - : Eine relative (zur Anforderungs-URL) oder absolute URL, die auf eine Source-Map-Datei verweist.

## Beispiele

### Verlinkung zu einer Source-Map über den `SourceMap`-Header

Die folgende Antwort enthält einen absoluten Pfad im `SourceMap`-Header.

```http
HTTP/1.1 200 OK
Content-Type: text/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

Entwicklertools verwenden die Source-Map, um die ursprüngliche Quelle aus dem optimierten JavaScript in der Antwort zu rekonstruieren, sodass Entwickler den Originalcode anstelle des optimierten Formats debuggen können, das zum Senden vorbereitet wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Source_map", "Source map")}}
- [Firefox Developer Tools: Verwenden einer Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Was sind Source Maps?](https://web.dev/articles/source-maps) auf web.dev (2023)
