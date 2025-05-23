---
title: SourceMap header
short-title: SourceMap
slug: Web/HTTP/Reference/Headers/SourceMap
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`SourceMap`**-{{Glossary("response_header", "Antwort-Header")}} gibt den Ort einer {{Glossary("source_map", "Source Map")}} für die Ressource an.

Der HTTP-`SourceMap`-Header hat Vorrang vor einer Quellannotierung (`sourceMappingURL=path-to-map.js.map`), und wenn beide vorhanden sind, wird die Header-URL verwendet, um die Source Map-Datei aufzulösen.

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
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Direktiven

- `<url>`
  - : Eine relative (zur Anfrage-URL) oder absolute URL, die auf eine Source Map-Datei verweist.

## Beispiele

### Verlinken zu einer Source Map über den `SourceMap`-Header

Die folgende Antwort enthält einen absoluten Pfad im `SourceMap`-Header.

```http
HTTP/1.1 200 OK
Content-Type: text/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

Entwicklerwerkzeuge verwenden die Source Map, um den ursprünglichen Quellcode aus dem optimierten JavaScript, das in der Antwort zurückgegeben wird, zu rekonstruieren, sodass Entwickler den ursprünglichen Code debuggen können, anstatt des Formats, das für das Senden optimiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Source_map", "Source Map")}}
- [Firefox Developer Tools: Verwenden einer Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Was sind Source Maps?](https://web.dev/articles/source-maps) auf web.dev (2023)
