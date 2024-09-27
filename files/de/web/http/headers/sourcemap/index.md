---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`SourceMap`** [HTTP](/de/docs/Web/HTTP)-Antwort-Header verknüpft generierten Code mit einer [Quelle](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html), wodurch der Browser den ursprünglichen Quellcode rekonstruieren kann, um diesen im Debugger anzuzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Anweisungen

- \<url>
  - : Eine relative (zur Anforderungs-URL) oder absolute URL, die auf eine Source-Map-Datei zeigt.

## Beispiele

```http
SourceMap: /path/to/file.js.map
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Developer Tools: Verwendung einer Source-Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
