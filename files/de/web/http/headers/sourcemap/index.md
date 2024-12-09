---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`SourceMap`** {{Glossary("response_header", "Antwortheader")}} gibt den Ort einer {{Glossary("source_map", "Source-Map")}} für die Ressource an.

Der HTTP `SourceMap`-Header hat Vorrang vor einer Quellcode-Anmerkung (`sourceMappingURL=path-to-map.js.map`). Wenn beide vorhanden sind, wird die URL des Headers verwendet, um die Source-Map-Datei aufzulösen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
  - : Eine relative (zur Anfrage-URL) oder absolute URL, die auf eine Source-Map-Datei zeigt.

## Beispiele

### Verknüpfung zu einer Source-Map mit dem `SourceMap`-Header

Die folgende Antwort enthält einen absoluten Pfad im `SourceMap`-Header.

```http
HTTP/1.1 200 OK
Content-Type: application/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

Entwicklungstools verwenden die Source-Map, um den ursprünglichen Quellcode aus dem optimierten JavaScript, das in der Antwort zurückgegeben wird, zu rekonstruieren, sodass Entwickler den ursprünglichen Code debuggen können, anstatt das Format, das für die Übertragung optimiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Source_map", "Source-Map")}}
- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Was sind Source Maps?](https://web.dev/articles/source-maps) auf web.dev (2023)
