---
title: String() Konstruktor
short-title: String()
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`String()`** Konstruktor erstellt {{jsxref("String")}} Objekte. Wenn er als Funktion aufgerufen wird, gibt er primitive Werte vom Typ String zurück.

## Syntax

```js-nolint
new String(thing)
String(thing)
```

> **Hinweis:** `String()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `thing`
  - : Alles, was in einen String konvertiert werden soll.

### Rückgabewert

Wenn `String()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt es `value` [zum String-Primitive gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zurück. Besonders werden [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Werte in `"Symbol(description)"` konvertiert, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist, anstatt einen Fehler zu werfen.

Wenn `String()` als Konstruktor (mit `new`) aufgerufen wird, zwingt es `value` zu einem String-Primitive (ohne spezielle Symbolbehandlung) und gibt ein umhüllendes {{jsxref("String")}} Objekt zurück, das **kein** Primitiv ist.

> [!WARNING]
> Sie sollten selten den `String` Konstruktor verwenden.

## Beispiele

### String Konstruktor und String Funktion

String Funktion und String Konstruktor erzeugen unterschiedliche Ergebnisse:

```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"
```

Hier erzeugt die Funktion wie versprochen einen String (den {{Glossary("primitive", "primitiven")}} Typ).
Der Konstruktor hingegen erzeugt eine Instanz des Typs String (einen Objekt-Wrapper) und
deshalb sollten Sie den String-Konstruktor selten überhaupt verwenden.

### Verwendung von String() zum Stringifizieren eines Symbols

`String()` ist der einzige Fall, in dem ein Symbol in einen String konvertiert werden kann, ohne einen Fehler zu werfen, weil es sehr explizit ist.

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

- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
