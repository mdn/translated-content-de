---
title: "SyntaxError: Die Verwendung von //@ zur Angabe von sourceURL-Pragmas ist veraltet. Verwenden Sie stattdessen //#"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Errors")}}

Die JavaScript-Warnung "Die Verwendung von `//@` zur Angabe von sourceURL-Pragmas ist veraltet. Verwenden Sie stattdessen `//#`" tritt auf, wenn es eine veraltete Source-Map-Syntax in einer JavaScript-Quelle gibt.

## Meldung

```plain
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## Fehlertyp

Eine Warnung, dass ein {{jsxref("SyntaxError")}} aufgetreten ist. Die Ausführung von JavaScript wird nicht unterbrochen.

## Was ist schiefgelaufen?

Es gibt eine veraltete Source-Map-Syntax in einer JavaScript-Quelle.

JavaScript-Quellen werden oft kombiniert und minimiert, um die Bereitstellung vom Server effizienter zu gestalten. Mit [Source-Maps](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) kann das Debugging-Tool den ausgeführten Code den ursprünglichen Quelldateien zuordnen.

Die Source-Map-Spezifikation änderte die Syntax aufgrund eines Konflikts mit dem IE, der auftrat, wenn `//@cc_on` interpretiert wurde, um die bedingte Kompilierung im IE JScript-Engine zu aktivieren. Der [bedingte Kompilierungskommentar](https://stackoverflow.com/questions/24473882/what-does-this-comment-cc-on-0-do-inside-an-if-statement-in-javascript) im IE ist ein wenig bekanntes Feature, hat jedoch Source-Maps mit [jQuery](https://bugs.jquery.com/ticket/13274/) und anderen Bibliotheken beeinträchtigt.

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

Alternativ können Sie auch einen {{HTTPHeader("SourceMap")}}-Header in Ihrer JavaScript-Datei setzen, um zu vermeiden, dass ein Kommentar vorhanden ist:

```http example-good
SourceMap: /path/to/file.js.map
```

## Siehe auch

- [Verwendung einer Source-Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) in den Firefox-Quellendokumentationen
- [Einführung in JavaScript-Source-Maps](https://developer.chrome.com/blog/sourcemaps/) auf developer.chrome.com (2012)
- {{HTTPHeader("SourceMap")}}
