---
title: "SyntaxError: Verwendung von //@ zur Angabe von sourceURL-Pragmas ist veraltet. Verwenden Sie //# stattdessen"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Warnung "Verwendung von `//@` zur Angabe von sourceURL-Pragmas ist veraltet. Verwenden Sie `//#` stattdessen." tritt auf, wenn in einer JavaScript-Quelle eine veraltete Source-Map-Syntax vorhanden ist.

## Meldung

```plain
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## Fehlertyp

Eine Warnung, dass ein {{jsxref("SyntaxError")}} aufgetreten ist. Die Ausführung von JavaScript wird nicht gestoppt.

## Was ist schiefgelaufen?

Es gibt eine veraltete Source-Map-Syntax in einer JavaScript-Quelle.

JavaScript-Quellen werden häufig kombiniert und minifiziert, um ihre Übertragung vom Server effizienter zu gestalten. Mit [Source Maps](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) kann der Debugger den ausgeführten Code auf die ursprünglichen Quelldateien abbilden.

Die Source-Map-Spezifikation änderte die Syntax aufgrund eines Konflikts mit IE, wann immer sie auf der Seite gefunden wurde, nachdem `//@cc_on` interpretiert wurde, um die bedingte Kompilierung in der IE JScript-Engine zu aktivieren. Der [bedingte Kompilierungs-Kommentar](https://stackoverflow.com/questions/24473882/what-does-this-comment-cc-on-0-do-inside-an-if-statement-in-javascript) in IE ist eine wenig bekannte Funktion, aber er zerstörte die Source Maps mit [jQuery](https://bugs.jquery.com/ticket/13274/) und anderen Bibliotheken.

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

- [Verwenden Sie eine Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) in den Firefox-Quellendokumenten
- [Einführung in JavaScript Source Maps](https://developer.chrome.com/blog/sourcemaps/) auf developer.chrome.com (2012)
- {{HTTPHeader("SourceMap")}}
