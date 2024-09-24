---
title: Funktion
slug: Web/JavaScript/Reference/Global_Objects/Function
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Das **`Function`**-Objekt bietet Methoden für [Funktionen](/de/docs/Web/JavaScript/Reference/Functions). In JavaScript ist jede Funktion tatsächlich ein `Function`-Objekt.

## Konstruktor

- {{jsxref("Function/Function", "Function()")}}
  - : Erstellt ein neues `Function`-Objekt. Durch direkten Aufruf des Konstruktors können Funktionen dynamisch erstellt werden, aber es treten Sicherheits- und ähnliche (wenn auch deutlich geringere) Leistungsprobleme wie bei {{jsxref("Global_Objects/eval", "eval()")}} auf. Jedoch im Gegensatz zu `eval()`, erstellt der `Function`-Konstruktor Funktionen, die nur im globalen Umfang ausgeführt werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Function.prototype` definiert und werden von allen `Function` Instanzen geteilt.

- {{jsxref("Function.prototype.arguments")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Repräsentiert die Argumente, die an diese Funktion übergeben wurden. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode)-, Pfeil-, asynchrone und Generatorfunktionen führt der Zugriff auf die `arguments` Eigenschaft zu einem {{jsxref("TypeError")}}. Verwenden Sie stattdessen das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionsschließungen.
- {{jsxref("Function.prototype.caller")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Repräsentiert die Funktion, die diese Funktion aufgerufen hat. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode)-, Pfeil-, asynchrone und Generatorfunktionen führt der Zugriff auf die `caller` Eigenschaft zu einem {{jsxref("TypeError")}}.
- {{jsxref("Object/constructor", "Function.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Function`-Instanzen ist der Anfangswert der {{jsxref("Function/Function", "Function")}} Konstruktor.

Diese Eigenschaften sind eigengesetzte Eigenschaften jeder `Function` Instanz.

- {{jsxref("Function/displayName", "displayName")}} {{non-standard_inline}} {{optional_inline}}
  - : Der Anzeigename der Funktion.
- {{jsxref("Function/length", "length")}}
  - : Gibt die Anzahl der Argumente an, die von der Funktion erwartet werden.
- {{jsxref("Function/name", "name")}}
  - : Der Name der Funktion.
- {{jsxref("Function/prototype", "prototype")}}
  - : Wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator verwendet wird. Es wird das Prototyp-Objekt des neuen Objekts.

## Instanz-Methoden

- {{jsxref("Function.prototype.apply()")}}
  - : Ruft eine Funktion mit einem gegebenen `this`-Wert und optionalen Argumenten auf, die als Array (oder ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) bereitgestellt werden.
- {{jsxref("Function.prototype.bind()")}}
  - : Erstellt eine neue Funktion, die, wenn sie aufgerufen wird, ihr `this` Schlüsselwort auf einen bereitgestellten Wert setzt, optional mit einer gegebenen Sequenz von Argumenten, die jedem bei Aufruf der neuen Funktion bereitgestellten Argumenten vorausgehen.
- {{jsxref("Function.prototype.call()")}}
  - : Ruft eine Funktion mit einem gegebenen `this`-Wert und optionalen Argumenten auf.
- {{jsxref("Function.prototype.toString()")}}
  - : Gibt einen String zurück, der den Quellcode der Funktion darstellt. Überschreibt die {{jsxref("Object.prototype.toString")}} Methode.
- [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
  - : Gibt das Standardverfahren zum Bestimmen an, ob eine Konstruktorfunktion ein Objekt als eines der Instanzen des Konstruktors erkennt. Wird vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)-Operator aufgerufen.

## Beispiele

### Unterschied zwischen Function-Konstruktor und Funktionsdeklaration

Mit dem `Function`-Konstruktor erstellte Funktionen erstellen keine Closures zu ihren Erstellungs-Kontexten; sie werden immer im globalen Umfang erstellt. Beim Ausführen können sie nur auf ihre eigenen lokalen Variablen und globale Variablen zugreifen, nicht auf die Variablen aus dem Umfang, in dem der `Function`-Konstruktor erstellt wurde. Dies ist anders als die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} mit Code für einen Funktionsausdruck.

```js
// Erstellen einer globalen Eigenschaft mit `var`
var x = 10;

function createFunction1() {
  const x = 20;
  return new Function("return x;"); // dieses `x` bezieht sich auf das globale `x`
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // dieses `x` bezieht sich auf das lokale `x` oben
  }
  return f;
}

const f1 = createFunction1();
console.log(f1()); // 10
const f2 = createFunction2();
console.log(f2()); // 20
```

Obwohl dieser Code in Webbrowsern funktioniert, erzeugt `f1()` einen `ReferenceError` in Node.js, da `x` nicht gefunden wird. Dies liegt daran, dass der oberste Bereich in Node nicht der globale Bereich ist und `x` lokal zum Modul sein wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Funktionen", "", 1)}}
