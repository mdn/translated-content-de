---
title: "Warnung: -file- wird ein //# sourceMappingURL zugewiesen, aber es hat bereits eines"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Warnung "-file- wird ein //# sourceMappingURL zugewiesen, aber es hat bereits eines." tritt auf, wenn eine Quellkarte für eine bestimmte JavaScript-Quelle mehrmals angegeben wurde.

## Nachricht

```plain
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## Fehlerart

Eine Warnung. Die JavaScript-Ausführung wird nicht angehalten.

## Was ist schiefgelaufen?

Eine Quellkarte wurde mehrmals für eine bestimmte JavaScript-Quelle angegeben.

JavaScript-Quellen werden oft kombiniert und minimiert, um die Bereitstellung vom Server effizienter zu gestalten. Mit [Quellkarten](https://developer.chrome.com/blog/sourcemaps/) kann der Debugger den ausgeführten Code auf die Original-Quelldateien abbilden. Es gibt zwei Möglichkeiten, eine Quellkarte zuzuweisen: entweder durch einen Kommentar oder durch das Setzen eines Headers in der JavaScript-Datei.

## Beispiele

### Quellkarten festlegen

Festlegen einer Quellkarte durch Verwenden eines Kommentars in der Datei:

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Alternativ können Sie einen Header in Ihrer JavaScript-Datei setzen:

```http example-good
X-SourceMap: /path/to/file.js.map
```

## Siehe auch

- [Verwenden einer Quellkarte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) in den Firefox-Quellendokumenten
- [Einführung in JavaScript-Quellkarten](https://developer.chrome.com/blog/sourcemaps/) auf developer.chrome.com (2012)
