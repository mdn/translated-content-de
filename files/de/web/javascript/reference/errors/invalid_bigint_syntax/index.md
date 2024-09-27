---
title: "SyntaxError: ungültige BigInt-Syntax"
slug: Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax
l10n:
  sourceCommit: 9c4fb236cd9ced12b1eb8e7696d8e6fcb8d8bad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültige BigInt-Syntax" tritt auf, wenn ein Zeichenfolgenwert in einen {{jsxref("BigInt")}} umgewandelt werden soll, aber das Parsen als ganze Zahl fehlgeschlagen ist.

## Meldung

```plain
SyntaxError: Cannot convert x to a BigInt (V8-based)
SyntaxError: invalid BigInt syntax (Firefox)
SyntaxError: Failed to parse String to BigInt (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Beim Verwenden der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion, um eine Zeichenfolge in einen BigInt zu konvertieren, wird die Zeichenfolge auf die gleiche Weise wie Quellcode geparst, und der resultierende Wert muss eine ganze Zahl sein.

## Beispiele

### Ungültige Fälle

```js example-bad
const a = BigInt("1.5");
const b = BigInt("1n");
const c = BigInt.asIntN(4, "8n");
// SyntaxError: invalid BigInt syntax
```

### Gültige Fälle

```js example-good
const a = BigInt("1");
const b = BigInt("  1   ");
const c = BigInt.asIntN(4, "8");
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
