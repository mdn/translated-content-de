---
title: String()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`String()`**-Konstruktor erstellt {{jsxref("String")}}-Objekte. Wenn er als Funktion aufgerufen wird, gibt er primitive Werte vom Typ String zurück.

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

Wenn `String()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt es `value` [in einen primitiven String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zurück. Insbesondere werden [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Werte in `"Symbol(description)"` konvertiert, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist, anstatt einen Fehler zu werfen.

Wenn `String()` als Konstruktor (mit `new`) aufgerufen wird, wandelt es `value` in einen primitiven String um (ohne spezielle Symbolbehandlung) und gibt ein umschließendes {{jsxref("String")}}-Objekt zurück, das **kein** primitiver Typ ist.

> [!WARNING]
> Sie sollten selten den `String`-Konstruktor verwenden.

## Beispiele

### String-Konstruktor und String-Funktion

String-Funktion und String-Konstruktor liefern unterschiedliche Ergebnisse:

```js
const a = new String("Hello world"); // a === "Hello world" ist false
const b = String("Hello world"); // b === "Hello world" ist true
a instanceof String; // ist true
b instanceof String; // ist false
typeof a; // "object"
typeof b; // "string"
```

Hier erzeugt die Funktion einen String (den {{Glossary("primtiven")}} Typ) wie versprochen.
Der Konstruktor jedoch erzeugt eine Instanz des Typs String (einen Objekt-Wrapper), und
deshalb sollten Sie den String-Konstruktor nur selten verwenden.

### Verwendung von String(), um ein Symbol in einen String umzuwandeln

`String()` ist der einzige Fall, in dem ein Symbol ohne Fehler in einen String umgewandelt werden kann, da es sehr explizit ist.

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

- Leitfaden zum [Textformatieren](/de/docs/Web/JavaScript/Guide/Text_formatting)
