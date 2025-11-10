---
title: String()-Konstruktor
short-title: String()
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`String()`**-Konstruktor erstellt {{jsxref("String")}}-Objekte. Wird er als Funktion aufgerufen, gibt er primitive Werte vom Typ String zurück.

## Syntax

```js-nolint
new String(thing)
String(thing)
```

> [!NOTE]
> `String()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `thing`
  - : Alles, was in einen String umgewandelt werden soll.

### Rückgabewert

Wenn `String()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt es `value` zurück, [in einen String-Primitive zwangsweise umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Insbesondere werden [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Werte in `"Symbol(description)"` umgewandelt, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist, anstelle eines Fehlers.

Wenn `String()` als Konstruktor (mit `new`) aufgerufen wird, wird `value` in ein String-Primitive umgewandelt (ohne spezielle Symbolbehandlung) und gibt ein umhüllendes {{jsxref("String")}}-Objekt zurück, das **kein** Primitivwert ist.

> [!WARNING]
> Sie sollten selten den `String`-Konstruktor verwenden.

## Beispiele

### String-Konstruktor und String-Funktion

Die String-Funktion und der String-Konstruktor erzeugen unterschiedliche Ergebnisse:

```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"
```

Hier erzeugt die Funktion einen String (den {{Glossary("primitive", "primitiven")}} Typ), wie versprochen.
Der Konstruktor jedoch erzeugt eine Instanz des Typs String (einen Objekt-Wrapper), und deshalb möchten Sie den String-Konstruktor in der Regel überhaupt nicht verwenden.

### Verwendung von String() zum Stringifizieren eines Symbols

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

- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
