---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`SourceMap`** {{Glossary("response_header", "Response-Header")}} gibt den Speicherort einer {{Glossary("source_map", "Source Map")}} für die Ressource an.

Der HTTP `SourceMap`-Header hat Vorrang vor einer Quellennotation (`sourceMappingURL=path-to-map.js.map`), und wenn beide vorhanden sind, wird die URL im Header verwendet, um die Quelle der Map-Datei aufzulösen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Eine relative (zur Anforderungs-URL) oder absolute URL, die auf eine Source-Map-Datei zeigt.

## Beispiele

### Verlinkung zu einer Source Map mit dem `SourceMap`-Header

Die folgende Antwort enthält einen absoluten Pfad im `SourceMap`-Header.

```http
HTTP/1.1 200 OK
Content-Type: application/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

Entwicklertools verwenden die Source Map, um die ursprüngliche Quelle aus dem optimierten JavaScript, das in der Antwort zurückgegeben wird, zu rekonstruieren. Dadurch können Entwickler den Originalcode debuggen und nicht das Format, das für den Versand optimiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Source_map", "Source Map")}}
- [Firefox Developer Tools: Verwendung einer Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Was sind Source Maps?](https://web.dev/articles/source-maps) auf web.dev (2023)
