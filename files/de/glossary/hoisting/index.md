---
title: Hoisting
slug: Glossary/Hoisting
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

JavaScript **Hoisting** bezieht sich auf den Prozess, bei dem der Interpreter den Anschein erweckt, als würde er die _Deklaration_ von Funktionen, Variablen, Klassen oder Importen an den Anfang ihres {{Glossary("scope", "Scopes")}} verschieben, bevor der Code ausgeführt wird.

_Hoisting_ ist kein normativ definierter Begriff in der ECMAScript-Spezifikation. Die Spezifikation definiert eine Gruppe von Deklarationen als [_HoistableDeclaration_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration), aber diese umfasst nur die Deklarationen von [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*). Hoisting wird oft auch als Eigenschaft von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Deklarationen betrachtet, jedoch auf andere Weise. Im umgangssprachlichen Gebrauch können alle der folgenden Verhaltensweisen als Hoisting angesehen werden:

1. Die Möglichkeit, den Wert einer Variable in ihrem Scope zu verwenden, bevor die Zeile deklariert ist. ("Wert-Hoisting")
2. Die Möglichkeit, eine Variable in ihrem Scope zu referenzieren, bevor die Zeile deklariert ist, ohne einen {{jsxref("ReferenceError")}} auszulösen, aber der Wert ist immer [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). ("Deklarations-Hoisting")
3. Die Deklaration der Variable verursacht Verhaltensänderungen in ihrem Scope, bevor die Zeile deklariert ist.
4. Die Nebeneffekte einer Deklaration werden erzeugt, bevor der Rest des Codes, der sie enthält, ausgewertet wird.

Die vier obigen Funktionsdeklarationen werden mit Verhaltenstyp 1 gehoben; `var`-Deklaration wird mit Verhaltenstyp 2 gehoben; [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)-Deklarationen (auch zusammenfassend als _lexikalische Deklarationen_ bekannt) werden mit Verhaltenstyp 3 gehoben; [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen werden mit Verhaltenstyp 1 und Typ 4 gehoben.

Einige ziehen es vor, `let`, `const` und `class` als nicht-hoisting zu betrachten, da die [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) jede Verwendung der Variable vor ihrer Deklaration strikt verbietet. Diese Dissenz ist in Ordnung, da Hoisting kein allgemein anerkannter Begriff ist. Dennoch kann die temporal dead zone andere beobachtbare Änderungen in ihrem Scope verursachen, was darauf hindeutet, dass es eine Form von Hoisting gibt:

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

Wenn die `const x = 2`-Deklaration überhaupt nicht gehoben wird (wie in, sie tritt nur in Kraft, wenn sie ausgeführt wird), dann sollte die `console.log(x)`-Anweisung in der Lage sein, den `x`-Wert vom oberen Scope zu lesen. Da jedoch die `const`-Deklaration immer noch den gesamten Scope, in dem sie definiert ist, "verunreinigt", liest die `console.log(x)`-Anweisung das `x` aus der `const x = 2`-Deklaration, die noch nicht initialisiert ist, und löst einen {{jsxref("ReferenceError")}} aus. Trotzdem könnte es nützlicher sein, lexikalische Deklarationen als nicht-hoisting zu charakterisieren, da aus einer utilitaristischen Perspektive das Hoisting dieser Deklarationen keine bedeutenden Merkmale bringt.

Beachten Sie, dass das Folgende keine Form von Hoisting ist:

```js
{
  var x = 1;
}
console.log(x); // 1
```

Hier gibt es kein "Zugriff vor Deklaration"; es liegt einfach daran, dass `var`-Deklarationen nicht auf Blöcke beschränkt sind.

Für weitere Informationen über Hoisting, siehe:

- `var`/`let`/`const` Hoisting — [Grammatik- und Typenleitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting)
- `function` Hoisting — [Funktionenleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting)
- `class` Hoisting — [Klassenleitfaden](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting)
- `import` Hoisting — [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#import_declarations_are_hoisted)

## Siehe auch

- [`var` statement](/de/docs/Web/JavaScript/Reference/Statements/var)
- [`let` statement](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`const` statement](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`function` statement](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`class` statement](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`import` statement](/de/docs/Web/JavaScript/Reference/Statements/import)
