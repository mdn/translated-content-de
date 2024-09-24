---
title: "Warnung: -file- wird ein //# sourceMappingURL zugewiesen, hat aber bereits eines"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Warnung "-file- wird ein //# sourceMappingURL zugewiesen, hat aber bereits eines." tritt auf, wenn eine Quellkarte mehr als einmal für eine bestimmte JavaScript-Quelle angegeben wurde.

## Meldung

```plain
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## Fehlertyp

Eine Warnung. Die JavaScript-Ausführung wird nicht gestoppt.

## Was ist schiefgelaufen?

Eine Quellkarte wurde mehr als einmal für eine bestimmte JavaScript-Quelle angegeben.

JavaScript-Quellen werden oft kombiniert und komprimiert, um ihre Bereitstellung vom Server effizienter zu gestalten. Mit [Source Maps](https://developer.chrome.com/blog/sourcemaps/) kann der Debugger den ausgeführten Code den ursprünglichen Quelldateien zuordnen. Es gibt zwei Möglichkeiten, eine Quellkarte zuzuweisen: entweder durch einen Kommentar oder durch Setzen eines Headers in der JavaScript-Datei.

## Beispiele

### Festlegen von Quellkarten

Festlegen einer Quellkarte durch Verwendung eines Kommentars in der Datei:

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Alternativ können Sie einen Header für Ihre JavaScript-Datei setzen:

```http example-good
X-SourceMap: /path/to/file.js.map
```

## Siehe auch

- [Verwendung einer Quellkarte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) in den Firefox-Quellendokumenten
- [Einführung in JavaScript-Quellkarten](https://developer.chrome.com/blog/sourcemaps/) auf developer.chrome.com (2012)
