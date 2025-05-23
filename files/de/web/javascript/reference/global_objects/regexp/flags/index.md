---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: bccce51ad7f3fd5e5ff7e4231b6391a000c8faf6
---

{{JSRef}}

Die **`flags`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt die [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) dieses regulären Ausdrucks zurück.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.flags")}}

```js interactive-example
// Outputs RegExp flags in alphabetical order

console.log(/foo/gi.flags);
// Expected output: "gi"

console.log(/^bar/muy.flags);
// Expected output: "muy"
```

## Beschreibung

`RegExp.prototype.flags` hat einen String als seinen Wert. Flags in der `flags`-Eigenschaft sind alphabetisch sortiert (von links nach rechts, z.B. `"dgimsuvy"`). Es ruft tatsächlich die anderen Flag-Zugriffsmethoden ([`hasIndices`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices), [`global`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global), etc.) nacheinander auf und fügt die Ergebnisse zusammen.

Alle eingebauten Funktionen lesen die `flags`-Eigenschaft anstatt die einzelnen Flag-Zugriffsmethoden zu lesen.

Der Set-Accessor von `flags` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von Flags

```js-nolint
/foo/ig.flags; // "gi"
/^bar/myu.flags; // "muy"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.prototype.flags` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `RegExp.prototype.flags`](https://www.npmjs.com/package/regexp.prototype.flags)
- [Erweitertes Suchen mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) im Leitfaden für reguläre Ausdrücke
- {{jsxref("RegExp.prototype.source")}}
