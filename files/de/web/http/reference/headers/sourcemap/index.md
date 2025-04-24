---
title: SourceMap
slug: Web/HTTP/Reference/Headers/SourceMap
l10n:
  sourceCommit: e4e57ab3ccb5f93319f8fe13848d4895d3e1e771
---

{{HTTPSidebar}}

Der HTTP-**`SourceMap`**-{{Glossary("response_header", "Antwort-Header")}} gibt den Speicherort einer {{Glossary("source_map", "Source Map")}} für die Ressource an.

Der HTTP-`SourceMap`-Header hat Vorrang vor einer Quellannotierung (`sourceMappingURL=path-to-map.js.map`), und wenn beide vorhanden sind, wird die URL im Header verwendet, um die Source Map-Datei aufzulösen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Eine relative (zur Anforderungs-URL) oder absolute URL, die auf eine Source Map-Datei verweist.

## Beispiele

### Verknüpfung zu einer Source Map mit dem `SourceMap`-Header

Die folgende Antwort enthält einen absoluten Pfad im `SourceMap`-Header.

```http
HTTP/1.1 200 OK
Content-Type: text/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

Entwicklertools nutzen die Source Map, um den ursprünglichen Quellcode aus dem optimierten JavaScript in der Antwort zu rekonstruieren, sodass Entwickler den ursprünglichen Code debuggen können, anstatt dem für die Übertragung optimierten Format.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Source_map", "Source Map")}}
- [Firefox Developer Tools: Verwendung einer Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Was sind Source Maps?](https://web.dev/articles/source-maps) auf web.dev (2023)
