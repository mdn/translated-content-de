---
title: "Warnung: -file- wird ein //# sourceMappingURL zugewiesen, aber es ist bereits eines vorhanden"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Warnung "-file- wird ein //# sourceMappingURL zugewiesen, aber es ist bereits eines vorhanden." tritt auf, wenn für eine gegebene JavaScript-Quelle mehr als einmal eine Quellkarte (source map) angegeben wurde.

## Nachricht

```plain
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## Fehlertyp

Eine Warnung. Die Ausführung von JavaScript wird nicht gestoppt.

## Was ist schiefgelaufen?

Für eine gegebene JavaScript-Quelle wurde mehr als einmal eine Quellkarte angegeben.

JavaScript-Quellen werden oft kombiniert und minimiert, um ihre Auslieferung vom Server effizienter zu gestalten. Mit [Quellkarten](https://developer.chrome.com/blog/sourcemaps/) kann der Debugger den ausgeführten Code den ursprünglichen Quelldateien zuordnen. Es gibt zwei Möglichkeiten, eine Quellkarte zuzuweisen: entweder durch einen Kommentar im Code oder durch das Setzen eines Headers in der JavaScript-Datei.

## Beispiele

### Quellkarten zuweisen

Eine Quellkarte durch einen Kommentar in der Datei zuweisen:

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Alternativ können Sie einen Header in Ihrer JavaScript-Datei setzen:

```http example-good
X-SourceMap: /path/to/file.js.map
```

## Siehe auch

- [Verwenden Sie eine Quellkarte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) in den Firefox-Quellunterlagen
- [Einführung in JavaScript-Quellkarten](https://developer.chrome.com/blog/sourcemaps/) auf developer.chrome.com (2012)
