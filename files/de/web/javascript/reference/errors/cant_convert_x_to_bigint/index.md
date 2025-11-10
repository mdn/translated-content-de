---
title: "TypeError: kann x nicht in BigInt umwandeln"
slug: Web/JavaScript/Reference/Errors/Cant_convert_x_to_BigInt
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "x kann nicht in BigInt umgewandelt werden" tritt auf, wenn versucht wird, einen {{jsxref("Symbol")}}, [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder einen {{jsxref("undefined")}} Wert in einen {{jsxref("BigInt")}} zu konvertieren, oder wenn eine Operation, die einen BigInt-Parameter erwartet, stattdessen eine Zahl erhält.

## Meldung

```plain
TypeError: Cannot convert null to a BigInt (V8-based)
TypeError: can't convert null to BigInt (Firefox)
TypeError: Invalid argument type in ToBigInt operation (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Bei der Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion zur Umwandlung eines Wertes in einen BigInt wird der Wert zunächst in einen primitiven Wert umgewandelt. Wenn er dann keiner der Typen BigInt, String, Number oder Boolean ist, wird der Fehler ausgelöst.

Einige Operationen, wie zum Beispiel [`BigInt.asIntN`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN), erfordern, dass der Parameter ein BigInt ist. In diesem Fall wird auch ein Fehler ausgelöst, wenn eine Zahl übergeben wird.

## Beispiele

### Verwendung von BigInt() auf ungültigen Werten

```js example-bad
const a = BigInt(null);
// TypeError: can't convert null to BigInt
const b = BigInt(undefined);
// TypeError: can't convert undefined to BigInt
const c = BigInt(Symbol("1"));
// TypeError: can't convert Symbol("1") to BigInt
```

```js example-good
const a = BigInt(1);
const b = BigInt(true);
const c = BigInt("1");
const d = BigInt(Symbol("1").description);
```

> [!NOTE]
> Allein das Umwandeln des Wertes in einen String oder eine Zahl mit [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) oder [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) vor der Übergabe an `BigInt()` reicht normalerweise nicht aus, um alle Fehler zu vermeiden. Wenn der String keine gültige Ganzzahl-Zeichenkette ist, wird ein [SyntaxError](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst; wenn die Zahl keine Ganzzahl ist (insbesondere {{jsxref("NaN")}}), wird ein [RangeError](/de/docs/Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer) ausgelöst. Wenn der Bereich der Eingabe unbekannt ist, validieren Sie ihn ordnungsgemäß, bevor Sie `BigInt()` verwenden.

### Übergabe einer Zahl an eine Funktion, die einen BigInt erwartet

```js example-bad
const a = BigInt.asIntN(4, 8);
// TypeError: can't convert 8 to BigInt
const b = new BigInt64Array(3).fill(3);
// TypeError: can't convert 3 to BigInt
```

```js example-good
const a = BigInt.asIntN(4, 8n);
const b = new BigInt64Array(3).fill(3n);
```

## Siehe auch

- [`BigInt()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
