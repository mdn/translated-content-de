---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`SourceMap`**-Header [HTTP](/de/docs/Web/HTTP) verknüpft generierten Code mit einer [Source-Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html), sodass der Browser den ursprünglichen Quellcode rekonstruieren und den rekonstruierten Originalcode im Debugger präsentieren kann.

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
SourceMap: <url>
X-SourceMap: <url> (veraltet)
```

### Direktiven

- \<url>
  - : Eine relative (zur Anforderungs-URL) oder absolute URL, die auf eine Source-Map-Datei verweist.

## Beispiele

```http
SourceMap: /path/to/file.js.map
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Developer Tools: Verwenden einer Source-Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
