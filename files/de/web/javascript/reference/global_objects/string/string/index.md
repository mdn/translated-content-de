---
title: "`String()` Konstruktor"
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{JSRef}}

Der **`String()`** Konstruktor erstellt {{jsxref("String")}} Objekte. Wenn er als Funktion aufgerufen wird, gibt er primitive Werte vom Typ String zurück.

## Syntax

```js-nolint
new String(thing)
String(thing)
```

> **Note:** `String()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, hat jedoch unterschiedliche Effekte. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `thing`
  - : Alles, was in eine Zeichenkette umgewandelt werden soll.

### Rückgabewert

Wenn `String()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt es den `value` [in einen primitiven Zeichenkettentyp gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zurück. Insbesondere werden [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Werte in `"Symbol(description)"` umgewandelt, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist, anstatt eine Ausnahme zu werfen.

Wenn `String()` als Konstruktor (mit `new`) aufgerufen wird, wird `value` in einen primitiven Zeichenkettentyp gezwungen (ohne spezielle Symbolbehandlung) und ein umhüllendes {{jsxref("String")}} Objekt zurückgegeben, das **kein** primitiver Typ ist.

> [!WARNING]
> Sie sollten selten den `String` als Konstruktor verwenden.

## Beispiele

### String-Konstruktor und String-Funktion

Die String-Funktion und der String-Konstruktor liefern unterschiedliche Ergebnisse:

```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"
```

Hier produziert die Funktion eine Zeichenkette (den {{Glossary("primitive", "primitiven")}} Typ), wie versprochen. Der Konstruktor dagegen erzeugt eine Instanz vom Typ String (ein Objekt-Wrapper), und deshalb sollten Sie den String-Konstruktor selten verwenden.

### Verwendung von `String()`, um ein Symbol zu stringifizieren

`String()` ist der einzige Fall, bei dem ein Symbol ohne Fehlermeldung in eine Zeichenkette umgewandelt werden kann, da es sehr explizit ist.

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

- [Zahlen und Zeichenketten](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
