---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`SourceMap`** [HTTP](/de/docs/Web/HTTP)-Antwortheader verlinkt generierten Code mit einer [Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html), wodurch der Browser den ursprünglichen Quellcode rekonstruieren und im Debugger anzeigen kann.

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
  - : Eine relative (zur Anfrage-URL) oder absolute URL, die auf eine Source Map-Datei zeigt.

## Beispiele

```http
SourceMap: /path/to/file.js.map
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Firefox-Entwicklerwerkzeuge: Verwendung einer Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
