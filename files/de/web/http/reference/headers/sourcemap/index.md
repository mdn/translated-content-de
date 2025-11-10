---
title: SourceMap header
short-title: SourceMap
slug: Web/HTTP/Reference/Headers/SourceMap
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`SourceMap`**-{{Glossary("response_header", "Antwort-Header")}} gibt den Ort einer {{Glossary("source_map", "Source-Map")}} für die Ressource an.

Der HTTP-`SourceMap`-Header hat Vorrang vor einer Quellkommentaranmerkung (`sourceMappingURL=path-to-map.js.map`), und wenn beide vorhanden sind, wird die URL des Headers verwendet, um die Source-Map-Datei aufzulösen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
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

### Verlinkung zu einer Source-Map mittels des `SourceMap`-Headers

Die folgende Antwort enthält einen absoluten Pfad im `SourceMap`-Header.

```http
HTTP/1.1 200 OK
Content-Type: text/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

Entwicklerwerkzeuge verwenden die Source-Map, um den originalen Quellcode aus dem optimierten JavaScript zu rekonstruieren, das in der Antwort zurückgegeben wird. Dies ermöglicht es Entwicklern, den ursprünglichen Code zu debuggen, anstatt des Formats, das für das Senden optimiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Source_map", "Source-Map")}}
- [Firefox Developer Tools: Verwendung einer Source-Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [What are source maps?](https://web.dev/articles/source-maps) auf web.dev (2023)
