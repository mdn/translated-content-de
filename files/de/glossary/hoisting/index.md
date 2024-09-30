---
title: Hoisting
slug: Glossary/Hoisting
l10n:
  sourceCommit: 9fd171abed5944476123db22360b1e086f0900d5
---

{{GlossarySidebar}}

JavaScript-**Hoisting** bezieht sich auf den Prozess, bei dem der Interpreter scheinbar die _Deklaration_ von Funktionen, Variablen, Klassen oder Importen an den Anfang ihres [Scopes](/de/docs/Glossary/scope) verschiebt, bevor der Code ausgeführt wird.

_Hoisting_ ist kein normativ definierter Begriff in der ECMAScript-Spezifikation. Die Spezifikation definiert eine Gruppe von Deklarationen als [_HoistableDeclaration_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration), was jedoch nur die Deklarationen von [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*) umfasst. Hoisting wird oft als eine Eigenschaft von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Deklarationen angesehen, wenn auch auf eine andere Weise. Im umgangssprachlichen Sinne können alle folgenden Verhaltensweisen als Hoisting angesehen werden:

1. Die Möglichkeit, den Wert einer Variablen in ihrem Scope zu verwenden, bevor die Zeile erreicht wird, in der sie deklariert ist. ("Value hoisting")
2. Die Möglichkeit, eine Variable in ihrem Scope zu referenzieren, bevor die Zeile erreicht wird, in der sie deklariert ist, ohne einen {{jsxref("ReferenceError")}} auszulösen, wobei der Wert immer [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist. ("Declaration hoisting")
3. Die Deklaration der Variablen verursacht Verhaltensänderungen in ihrem Scope, bevor die Zeile, in der sie deklariert ist, erreicht wird.
4. Die Nebeneffekte einer Deklaration treten auf, bevor der restliche Code ausgeführt wird, der sie enthält.

Die vier oben genannten Funktionsdeklarationen werden mit Verhalten vom Typ 1 gehoben; `var`-Deklarationen werden mit Verhalten vom Typ 2 gehoben; [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)-Deklarationen (auch zusammen als _lexikalische Deklarationen_ bezeichnet) werden mit Verhalten vom Typ 3 gehoben; [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen werden mit Verhalten vom Typ 1 und Typ 4 gehoben.

Einige bevorzugen es, `let`, `const` und `class` als nicht-hoisting zu betrachten, da die [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) jegliche Nutzung der Variablen vor ihrer Deklaration strikt verbietet. Diese Abweichung ist in Ordnung, da Hoisting kein universell akzeptierter Begriff ist. Allerdings kann die temporale Todeszone andere beobachtbare Änderungen in ihrem Scope verursachen, was darauf hindeutet, dass es irgendeine Form von Hoisting gibt:

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

Wenn die `const x = 2` Deklaration überhaupt nicht gehoben wird (also erst wirksam wird, wenn sie ausgeführt wird), dann sollte die `console.log(x)`-Anweisung in der Lage sein, den `x`-Wert aus dem oberen Scope zu lesen. Da jedoch die `const`-Deklaration den gesamten Scope, in dem sie definiert ist, "verunreinigt", liest die `console.log(x)`-Anweisung den `x`-Wert aus der `const x = 2`-Deklaration, die noch nicht initialisiert ist, und löst einen {{jsxref("ReferenceError")}} aus. Dennoch ist es möglicherweise nützlicher, lexikalische Deklarationen als nicht-hoisting zu charakterisieren, da aus praktischer Sicht das Hoisting dieser Deklarationen keine bedeutenden Eigenschaften mit sich bringt.

Beachten Sie, dass das Folgende keine Form von Hoisting ist:

```js
{
  var x = 1;
}
console.log(x); // 1
```

Hier gibt es kein "Zugriff vor Deklaration"; es liegt einfach daran, dass `var`-Deklarationen nicht auf Blöcke begrenzt sind.

Weitere Informationen zum Hoisting finden Sie unter:

- `var`/`let`/`const` Hoisting — [Grammatik und Typen-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting)
- `function` Hoisting — [Funktionen-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting)
- `class` Hoisting — [Klassen-Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting)
- `import` Hoisting — [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#import_declarations_are_hoisted)

## Siehe auch

- [`var` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/var)
- [`let` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`const` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`function` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`class` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
