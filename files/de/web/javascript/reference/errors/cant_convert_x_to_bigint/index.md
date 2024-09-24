---
title: "TypeError: kann x nicht in BigInt umwandeln"
slug: Web/JavaScript/Reference/Errors/Cant_convert_x_to_BigInt
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "x kann nicht in BigInt umgewandelt werden" tritt auf, wenn versucht wird, einen {{jsxref("Symbol")}}, [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} Wert in ein {{jsxref("BigInt")}} zu konvertieren, oder wenn eine Operation, die einen BigInt-Parameter erwartet, eine Zahl erhält.

## Nachricht

```plain
TypeError: Cannot convert null to a BigInt (V8-basiert)
TypeError: kann null nicht in BigInt umwandeln (Firefox)
TypeError: Ungültiger Argumenttyp in ToBigInt-Operation (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Bei der Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion zur Umwandlung eines Wertes in ein BigInt wird der Wert zuerst in ein primitives Element umgewandelt. Wenn es sich dann nicht um BigInt, String, Number oder Boolean handelt, wird der Fehler ausgelöst.

Einige Operationen, wie [`BigInt.asIntN`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN), erfordern, dass der Parameter ein BigInt ist. In diesem Fall führt das Übergeben einer Zahl ebenfalls zu diesem Fehler.

## Beispiele

### Verwendung von BigInt() mit ungültigen Werten

```js example-bad
const a = BigInt(null);
// TypeError: kann null nicht in BigInt umwandeln
const b = BigInt(undefined);
// TypeError: kann undefined nicht in BigInt umwandeln
const c = BigInt(Symbol("1"));
// TypeError: kann Symbol("1") nicht in BigInt umwandeln
```

```js example-good
const a = BigInt(1);
const b = BigInt(true);
const c = BigInt("1");
const d = BigInt(Symbol("1").description);
```

> [!NOTE]
> Einfaches Erzwingen des Wertes in einen String oder eine Zahl mithilfe von [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) oder [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number), bevor er an `BigInt()` übergeben wird, reicht normalerweise nicht aus, um alle Fehler zu vermeiden. Wenn der String keine gültige Ganzzahl-Zeichenkette ist, wird ein [SyntaxError](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst; wenn die Zahl keine Ganzzahl ist (insbesondere {{jsxref("NaN")}}), wird ein [RangeError](/de/docs/Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer) ausgelöst. Wenn der Bereich der Eingabe unbekannt ist, validieren Sie ihn ordnungsgemäß, bevor Sie `BigInt()` verwenden.

### Übergeben einer Zahl an eine Funktion, die ein BigInt erwartet

```js example-bad
const a = BigInt.asIntN(4, 8);
// TypeError: kann 8 nicht in BigInt umwandeln
const b = new BigInt64Array(3).fill(3);
// TypeError: kann 3 nicht in BigInt umwandeln
```

```js example-good
const a = BigInt.asIntN(4, 8n);
const b = new BigInt64Array(3).fill(3n);
```

## Siehe auch

- [`BigInt()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
