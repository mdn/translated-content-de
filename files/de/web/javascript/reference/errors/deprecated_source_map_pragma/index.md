---
title: "SyntaxError: Die Verwendung von //@ zur Angabe von sourceURL-Pragmas ist veraltet. Verwenden Sie stattdessen //#"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Errors")}}

Die JavaScript-Warnung "Die Verwendung von `//@` zur Angabe von sourceURL-Pragmas ist veraltet. Verwenden Sie stattdessen `//#`" tritt auf, wenn in einem JavaScript-Quelltext eine veraltete Source-Map-Syntax verwendet wird.

## Nachricht

```plain
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## Fehlertyp

Eine Warnung, dass ein {{jsxref("SyntaxError")}} aufgetreten ist. Die JavaScript-Ausführung wird nicht gestoppt.

## Was ist schiefgelaufen?

In einem JavaScript-Quelltext gibt es eine veraltete Source-Map-Syntax.

JavaScript-Quellen werden oft kombiniert und komprimiert, um die Auslieferung vom Server effizienter zu gestalten. Mit [Source Maps](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) kann der Debugger den ausgeführten Code auf die ursprünglichen Quelldateien abbilden.

Die Source-Map-Spezifikation hat die Syntax aufgrund eines Konflikts mit dem IE geändert, der auftrat, nachdem `//@cc_on` interpretiert wurde, um die bedingte Kompilierung in der IE-JScript-Engine zu aktivieren. Der [bedingte Kompilierungskommentar](https://stackoverflow.com/questions/24473882/what-does-this-comment-cc-on-0-do-inside-an-if-statement-in-javascript) in IE ist eine wenig bekannte Funktion, die jedoch Source Maps mit [jQuery](https://bugs.jquery.com/ticket/13274/) und anderen Bibliotheken zum Absturz brachte.

## Beispiele

### Veraltete Syntax

Syntax mit dem "@"-Zeichen ist veraltet.

```js example-bad
//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

### Standard-Syntax

Verwenden Sie stattdessen das "#" Zeichen.

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Alternativ können Sie auch einen {{HTTPHeader("SourceMap")}}-Header für Ihre JavaScript-Datei setzen, um ganz auf einen Kommentar zu verzichten:

```http example-good
SourceMap: /path/to/file.js.map
```

## Siehe auch

- [Verwendung einer Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) in den Firefox-Quelle-Dokumentationen.
- [Einführung in JavaScript-Source Maps](https://developer.chrome.com/blog/sourcemaps/) auf developer.chrome.com (2012)
- {{HTTPHeader("SourceMap")}}
