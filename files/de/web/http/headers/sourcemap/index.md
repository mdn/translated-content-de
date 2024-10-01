---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`SourceMap`** [HTTP](/de/docs/Web/HTTP)-Antwortheader verknüpft generierten Code mit einer [Quellkarte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html), wodurch der Browser den ursprünglichen Quellcode rekonstruieren und den rekonstruierten Originalcode im Debugger anzeigen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Direktiven

- \<url>
  - : Eine relative (zum Anfrage-URL) oder absolute URL, die auf eine Quellkartendatei verweist.

## Beispiele

```http
SourceMap: /path/to/file.js.map
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Developer Tools: Verwenden einer Quellkarte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
