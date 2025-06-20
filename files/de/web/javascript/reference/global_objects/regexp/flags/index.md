---
title: RegExp.prototype.flags
short-title: flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`flags`** Zugriffs-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt die [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) dieses regulären Ausdrucks zurück.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.flags")}}

```js interactive-example
// Outputs RegExp flags in alphabetical order

console.log(/foo/gi.flags);
// Expected output: "gi"

console.log(/^bar/muy.flags);
// Expected output: "muy"
```

## Beschreibung

`RegExp.prototype.flags` hat einen String als Wert. Flags in der `flags`-Eigenschaft sind alphabetisch sortiert (von links nach rechts, z.B. `"dgimsuvy"`). Es ruft tatsächlich die anderen Flag-Zugriffsobjekte ([`hasIndices`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices), [`global`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global), etc.) nacheinander auf und verkettet die Ergebnisse.

Alle eingebauten Funktionen lesen die `flags`-Eigenschaft, anstatt einzelne Flag-Zugriffsobjekte zu lesen.

Der Set-Zugriff von `flags` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
- [Erweitertes Suchen mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) im Leitfaden zu regulären Ausdrücken
- {{jsxref("RegExp.prototype.source")}}
