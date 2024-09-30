---
title: "Warnung: -file- wird ein //# sourceMappingURL zugewiesen, hat aber bereits eines"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Warnung "-file- wird ein //# sourceMappingURL zugewiesen, hat aber bereits eines." tritt auf, wenn für eine gegebene JavaScript-Quelle mehr als einmal eine Source-Map angegeben wurde.

## Nachricht

```plain
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## Fehlertyp

Eine Warnung. Die Ausführung von JavaScript wird nicht angehalten.

## Was ist schiefgelaufen?

Für eine gegebene JavaScript-Quelle wurde mehr als einmal eine Source-Map angegeben.

JavaScript-Quellen werden oft kombiniert und minimiert, um die Bereitstellung vom Server effizienter zu gestalten. Mit [Source Maps](https://developer.chrome.com/blog/sourcemaps/) kann der Debugger den ausgeführten Code mit den ursprünglichen Quelldateien abgleichen. Es gibt zwei Möglichkeiten, eine Source-Map zuzuweisen: entweder durch die Verwendung eines Kommentars oder durch das Setzen eines Headers in der JavaScript-Datei.

## Beispiele

### Zuweisen von Source Maps

Zuweisen einer Source-Map durch einen Kommentar in der Datei:

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Oder alternativ können Sie einen Header in Ihrer JavaScript-Datei setzen:

```http example-good
X-SourceMap: /path/to/file.js.map
```

## Siehe auch

- [Verwenden einer Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) in den Firefox-Quelldokumentationen
- [Einführung in JavaScript Source Maps](https://developer.chrome.com/blog/sourcemaps/) auf developer.chrome.com (2012)
