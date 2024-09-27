---
title: String() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`String()`** Konstruktor erstellt {{jsxref("String")}} Objekte. Wenn er als Funktion aufgerufen wird, gibt er primitive Werte des Typs String zurück.

## Syntax

```js-nolint
new String(thing)
String(thing)
```

> **Hinweis:** `String()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `thing`
  - : Alles, was in einen String umgewandelt werden soll.

### Rückgabewert

Wenn `String()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt es `value` [in einen String-Primitivwert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zurück. Insbesondere werden [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Werte in `"Symbol(description)"` umgewandelt, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist, anstatt einen Fehler auszulösen.

Wenn `String()` als Konstruktor (mit `new`) aufgerufen wird, wird `value` in einen String-Primitivwert umgewandelt (ohne spezielle Symbolbehandlung) und ein umschließendes {{jsxref("String")}} Objekt zurückgegeben, das **kein** Primitivwert ist.

> [!WARNING]
> Sie sollten selten in die Verlegenheit kommen, `String` als Konstruktor zu verwenden.

## Beispiele

### String Konstruktor und String Funktion

String-Funktion und String-Konstruktor erzeugen unterschiedliche Ergebnisse:

```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"
```

Hier produziert die Funktion einen String (den [primitiven](/de/docs/Glossary/primitive) Typ), wie versprochen.
Der Konstruktor hingegen erzeugt eine Instanz des Typs String (einen Objekt-Wrapper), und
deshalb sollten Sie den String-Konstruktor in der Regel gar nicht verwenden.

### Verwendung von String() zur Umwandlung eines Symbols in einen String

`String()` ist der einzige Fall, in dem ein Symbol in einen String umgewandelt werden kann, ohne dass ein Fehler ausgelöst wird, da dies sehr explizit erfolgt.

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
