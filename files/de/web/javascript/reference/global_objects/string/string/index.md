---
title: String() Konstruktor
short-title: String()
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`String()`** Konstruktor erstellt {{jsxref("String")}} Objekte. Wird er als Funktion aufgerufen, gibt er primitive Werte des Typs String zurück.

## Syntax

```js-nolint
new String(thing)
String(thing)
```

> [!NOTE] > `String()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `thing`
  - : Alles, was in einen String umgewandelt werden soll.

### Rückgabewert

Wenn `String()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt er `value` [in einen String-Primärdatentyp umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zurück. Insbesondere werden [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Werte in `"Symbol(description)"` umgewandelt, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist, anstatt einen Fehler zu werfen.

Wenn `String()` als Konstruktor (mit `new`) aufgerufen wird, wird `value` in einen String-Primärdatentyp umgewandelt (ohne spezielle Symbolbehandlung) und ein umhüllendes {{jsxref("String")}} Objekt zurückgegeben, welches **kein** Primärdatentyp ist.

> [!WARNING]
> Sie sollten `String` selten als Konstruktor verwenden.

## Beispiele

### String-Konstruktor und String-Funktion

String-Funktion und String-Konstruktor erzeugen unterschiedliche Ergebnisse:

```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"
```

Hier erzeugt die Funktion einen String (den {{Glossary("primitive", "primären")}} Typ) wie versprochen. Der Konstruktor erzeugt jedoch eine Instanz des Typs String (ein Objekt-Wrapper) und deshalb wollen Sie den String-Konstruktor in der Regel gar nicht verwenden.

### Verwendung von String(), um ein Symbol zu stringifizieren

`String()` ist der einzige Fall, bei dem ein Symbol in einen String umgewandelt werden kann, ohne einen Fehler zu werfen, da es sehr explizit ist.

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
