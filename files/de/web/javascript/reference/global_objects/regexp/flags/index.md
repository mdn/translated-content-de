---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: a19e13221550806111730fd5cbed362516855539
---

{{JSRef}}

Die **`flags`** Zugriffs-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt die [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) dieses regulären Ausdrucks zurück.

{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}

## Beschreibung

`RegExp.prototype.flags` hat einen String als Wert. Flags in der `flags`-Eigenschaft sind alphabetisch sortiert (von links nach rechts, z. B. `"dgimsuvy"`). Tatsächlich ruft es die anderen Flag-Zugriffs-Methoden ([`hasIndices`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices), [`global`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global), etc.) nacheinander auf und verkettet die Ergebnisse.

Alle eingebauten Funktionen lesen die `flags`-Eigenschaft, anstatt die einzelnen Flag-Zugriffs-Methoden zu lesen.

Der Set-Zugriffs-Methoden von `flags` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
- [Erweitertes Suchen mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) im Leitfaden für reguläre Ausdrücke
- {{jsxref("RegExp.prototype.source")}}
