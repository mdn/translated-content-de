---
title: RegExp.prototype.flags
short-title: flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die **`flags`**-Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt die [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) dieses regulären Ausdrucks zurück.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.flags")}}

```js interactive-example
// Outputs RegExp flags in alphabetical order

console.log(/foo/gi.flags);
// Expected output: "gi"

console.log(/^bar/muy.flags);
// Expected output: "muy"
```

## Beschreibung

`RegExp.prototype.flags` hat einen String als Wert. Die Flags in der Eigenschaft `flags` sind alphabetisch sortiert (von links nach rechts, z. B. `"dgimsuvy"`). Tatsächlich ruft die Eigenschaft die anderen Flag-Accessors ([`hasIndices`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices), [`global`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) usw.) nacheinander auf und verkettet die Ergebnisse.

Alle integrierten Funktionen lesen die Eigenschaft `flags`, statt die einzelnen Flag-Accessors auszulesen.

Der Set-Accessor von `flags` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Flags verwenden

```js-nolint
/foo/ig.flags; // "gi"
/^bar/myu.flags; // "muy"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `RegExp.prototype.flags` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `RegExp.prototype.flags` von es-shims](https://www.npmjs.com/package/regexp.prototype.flags)
- [Erweiterte Suche mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) im Leitfaden zu regulären Ausdrücken
- {{jsxref("RegExp.prototype.source")}}
