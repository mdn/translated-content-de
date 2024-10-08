---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Das **`Function`** Objekt bietet Methoden für [Funktionen](/de/docs/Web/JavaScript/Reference/Functions). In JavaScript ist jede Funktion eigentlich ein `Function` Objekt.

## Konstruktor

- {{jsxref("Function/Function", "Function()")}}
  - : Erstellt ein neues `Function` Objekt. Der direkte Aufruf des Konstruktors kann Funktionen dynamisch erstellen, leidet jedoch unter Sicherheitsproblemen und ähnlichen (aber weit weniger signifikanten) Leistungsproblemen wie {{jsxref("Global_Objects/eval", "eval()")}}. Im Gegensatz zu `eval()` erstellt der `Function` Konstruktor jedoch Funktionen, die nur im globalen Gültigkeitsbereich ausgeführt werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Function.prototype` definiert und werden von allen `Function` Instanzen geteilt.

- {{jsxref("Function.prototype.arguments")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Repräsentiert die an diese Funktion übergebenen Argumente. Für [strikte](/de/docs/Web/JavaScript/Reference/Strict_mode), Pfeil-, asynchrone und Generatorfunktionen löst der Zugriff auf die `arguments` Eigenschaft einen {{jsxref("TypeError")}} aus. Verwenden Sie stattdessen das {{jsxref("Functions/arguments", "arguments")}} Objekt innerhalb von Funktionsbindungen.
- {{jsxref("Function.prototype.caller")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Repräsentiert die Funktion, die diese Funktion aufgerufen hat. Für [strikte](/de/docs/Web/JavaScript/Reference/Strict_mode), Pfeil-, asynchrone und Generatorfunktionen löst der Zugriff auf die `caller` Eigenschaft einen {{jsxref("TypeError")}} aus.
- {{jsxref("Object/constructor", "Function.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Function` Instanzen ist der anfängliche Wert der {{jsxref("Function/Function", "Function")}} Konstruktor.

Diese Eigenschaften sind eigene Eigenschaften jeder `Function` Instanz.

- {{jsxref("Function/displayName", "displayName")}} {{non-standard_inline}} {{optional_inline}}
  - : Der Anzeigename der Funktion.
- {{jsxref("Function/length", "length")}}
  - : Gibt die Anzahl der Argumente an, die die Funktion erwartet.
- {{jsxref("Function/name", "name")}}
  - : Der Name der Funktion.
- {{jsxref("Function/prototype", "prototype")}}
  - : Wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator verwendet wird. Es wird das neue Prototypobjekt.

## Instanz-Methoden

- {{jsxref("Function.prototype.apply()")}}
  - : Ruft eine Funktion mit einem angegebenen `this` Wert und optionalen Argumenten auf, die als Array (oder ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) bereitgestellt werden.
- {{jsxref("Function.prototype.bind()")}}
  - : Erstellt eine neue Funktion, die, wenn sie aufgerufen wird, das `this` Schlüsselwort auf einen bereitgestellten Wert setzt, optional mit einer gegebenen Sequenz von Argumenten, die jedem bereitgestellten bei Aufruf der neuen Funktion vorangehen.
- {{jsxref("Function.prototype.call()")}}
  - : Ruft eine Funktion mit einem angegebenen `this` Wert und optionalen Argumenten auf.
- {{jsxref("Function.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die den Quellcode der Funktion darstellt.
    Überschreibt die {{jsxref("Object.prototype.toString")}} Methode.
- [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
  - : Gibt das Standardverfahren an, um festzustellen, ob eine Konstruktionsfunktion ein Objekt als eine der Instanzen des Konstruktors erkennt. Wird vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator aufgerufen.

## Beispiele

### Unterschied zwischen Function-Konstruktor und Funktionsdeklaration

Funktionen, die mit dem `Function` Konstruktor erstellt werden, erstellen keine Closures zu ihren Erzeugungskontexten; sie werden immer im globalen Gültigkeitsbereich erstellt. Beim Ausführen können sie nur auf ihre eigenen lokalen und globalen Variablen zugreifen, nicht auf die aus dem Bereich, in dem der `Function` Konstruktor erstellt wurde. Dies unterscheidet sich von der Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} mit Code für einen Funktionsausdruck.

```js
// Create a global property with `var`
var x = 10;

function createFunction1() {
  const x = 20;
  return new Function("return x;"); // this `x` refers to global `x`
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // this `x` refers to the local `x` above
  }
  return f;
}

const f1 = createFunction1();
console.log(f1()); // 10
const f2 = createFunction2();
console.log(f2()); // 20
```

Während dieser Code in Webbrowsern funktioniert, wird `f1()` in Node.js einen `ReferenceError` erzeugen, da `x` nicht gefunden wird. Dies liegt daran, dass der oberste Gültigkeitsbereich in Node nicht der globale Gültigkeitsbereich ist und `x` lokal zum Modul sein wird.

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
- {{jsxref("Functions", "Functions", "", 1)}}
