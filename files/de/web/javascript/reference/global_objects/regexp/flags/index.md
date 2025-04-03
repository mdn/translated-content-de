---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`flags`** Accessor-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt die [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) dieses regulären Ausdrucks zurück.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.flags")}}

```js interactive-example
// Outputs RegExp flags in alphabetical order

console.log(/foo/gi.flags);
// Expected output: "gi"

console.log(/bar/muy.flags);
// Expected output: "muy"
```

## Beschreibung

`RegExp.prototype.flags` hat einen String als Wert. Flags in der `flags` Eigenschaft sind alphabetisch sortiert (von links nach rechts, z.B. `"dgimsuvy"`). Sie ruft tatsächlich die anderen Flag-Accessoren ([`hasIndices`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices), [`global`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global), etc.) nacheinander auf und verknüpft die Ergebnisse.

Alle eingebauten Funktionen lesen die `flags` Eigenschaft, anstatt einzelne Flag-Accessoren zu lesen.

Der Set-Accessor von `flags` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von Flags

```js-nolint
/foo/ig.flags; // "gi"
/bar/myu.flags; // "muy"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.prototype.flags` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `RegExp.prototype.flags`](https://www.npmjs.com/package/regexp.prototype.flags)
- [Erweitertes Suchen mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) im Regulären Ausdrücke Leitfaden
- {{jsxref("RegExp.prototype.source")}}
