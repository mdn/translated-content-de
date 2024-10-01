---
title: String() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`String()`** Konstruktor erstellt {{jsxref("String")}} Objekte. Wenn er als Funktion aufgerufen wird, liefert er primitive Werte des Typs String zurück.

## Syntax

```js-nolint
new String(thing)
String(thing)
```

> **Note:** `String()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `thing`
  - : Beliebiges Objekt, das in einen String umgewandelt werden soll.

### Rückgabewert

Wenn `String()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, wird `value` in einen [zum String-Primitiv gezwungenen Wert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zurückgegeben. Insbesondere werden [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Werte in `"Symbol(description)"` umgewandelt, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist, anstatt einen Fehler auszulösen.

Wenn `String()` als Konstruktor (mit `new`) aufgerufen wird, wird `value` in einen String-Primitiv gezwungen (ohne spezielle Symbolbehandlung) und ein umschließendes {{jsxref("String")}} Objekt zurückgegeben, das **kein** Primitiv ist.

> [!WARNING]
> Sie sollten selten den `String` Konstruktor verwenden.

## Beispiele

### String Konstruktor und String Funktion

Die String-Funktion und der String-Konstruktor erzeugen unterschiedliche Ergebnisse:

```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"
```

Hier erzeugt die Funktion wie versprochen einen String (den {{Glossary("primitive", "primitiven")}} Typ).
Der Konstruktor hingegen erzeugt eine Instanz des Typs String (ein Objekt-Wrapper) und
daher sollten Sie den String-Konstruktor selten verwenden.

### Verwendung von String() zur Stringifizierung eines Symbols

`String()` ist der einzige Fall, bei dem ein Symbol in einen String umgewandelt werden kann, ohne einen Fehler auszulösen, da es sehr explizit ist.

```js example-bad
const sym = Symbol("example");
`${sym}`; // TypeError: Cannot convert a Symbol value to a string
"" + sym; // TypeError: Cannot convert a Symbol value to a string
"".concat(sym); // TypeError: Cannot convert a Symbol value to a string
```

```js example-good
const sym = Symbol("example");
String(sym); // "Symbol(example)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textformatierung](/de/docs/Web/JavaScript/Guide/Text_formatting) Leitfaden
