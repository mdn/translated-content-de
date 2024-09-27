---
title: "TypeError: kann x nicht in BigInt konvertieren"
slug: Web/JavaScript/Reference/Errors/Cant_convert_x_to_BigInt
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "x kann nicht in BigInt konvertiert werden" tritt auf, wenn versucht wird, einen {{jsxref("Symbol")}}, [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} Wert in ein {{jsxref("BigInt")}} zu konvertieren, oder wenn eine Operation, die ein BigInt-Parameter erwartet, eine Zahl erhält.

## Nachricht

```plain
TypeError: Cannot convert null to a BigInt (V8-based)
TypeError: can't convert null to BigInt (Firefox)
TypeError: Invalid argument type in ToBigInt operation (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Beim Verwenden der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion, um einen Wert in ein BigInt zu konvertieren, würde der Wert zuerst in einen primitiven Wert umgewandelt. Dann, wenn es sich nicht um eine BigInt, einen String, eine Zahl oder einen Boolean handelt, wird der Fehler ausgelöst.

Einige Operationen, wie [`BigInt.asIntN`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN), erfordern, dass der Parameter ein BigInt ist. Wenn in diesem Fall eine Zahl übergeben wird, wird ebenfalls dieser Fehler ausgelöst.

## Beispiele

### Verwenden von BigInt() mit ungültigen Werten

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
> Einfaches Umschreiben des Wertes in einen String oder eine Zahl mit Hilfe von [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) oder [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number), bevor er an `BigInt()` übergeben wird, reicht normalerweise nicht aus, um alle Fehler zu vermeiden. Wenn der String keine gültige Ganzzahl-Zeichenkette ist, wird ein [SyntaxError](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst; wenn die Zahl keine Ganzzahl ist (insbesondere {{jsxref("NaN")}}), wird ein [RangeError](/de/docs/Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer) ausgelöst. Wenn der Bereich der Eingabe unbekannt ist, validieren Sie ihn ordnungsgemäß, bevor Sie `BigInt()` verwenden.

### Übergeben einer Zahl an eine Funktion, die ein BigInt erwartet

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
