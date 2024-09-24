---
title: Hoisting
slug: Glossary/Hoisting
l10n:
  sourceCommit: 9fd171abed5944476123db22360b1e086f0900d5
---

{{GlossarySidebar}}

JavaScript **Hoisting** bezieht sich auf den Prozess, bei dem es so aussieht, als ob der Interpreter die _Deklaration_ von Funktionen, Variablen, Klassen oder Imports an den Anfang ihres {{glossary("scope")}} verschiebt, bevor der Code ausgeführt wird.

_Hoisting_ ist kein normativ in der ECMAScript-Spezifikation definierter Begriff. Die Spezifikation definiert eine Gruppe von Deklarationen als [_HoistableDeclaration_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration), aber dies umfasst nur die Deklarationen von [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*). Hoisting wird oft auch als eine Eigenschaft der [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Deklarationen angesehen, wenn auch auf andere Weise. Im umgangssprachlichen Sinne können die folgenden Verhaltensweisen als Hoisting angesehen werden:

1. Eine Variable kann in ihrem Gültigkeitsbereich verwendet werden, bevor die Zeile, in der sie deklariert ist. ("Value hoisting")
2. Eine Variable kann in ihrem Gültigkeitsbereich referenziert werden, bevor die Zeile, in der sie deklariert ist, ohne einen {{jsxref("ReferenceError")}} zu werfen, aber der Wert ist immer [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). ("Declaration hoisting")
3. Die Deklaration der Variable verursacht Verhaltensänderungen in ihrem Gültigkeitsbereich, bevor die Zeile, in der sie deklariert ist.
4. Die Nebenwirkungen einer Deklaration werden erzeugt, bevor der Rest des Codes ausgewertet wird, der sie enthält.

Die vier oben genannten Funktionsdeklarationen werden mit Verhaltensweise 1 gehoben; `var`-Deklarationen werden mit Verhaltensweise 2 gehoben; [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)-Deklarationen (ebenfalls zusammen _lexikalische Deklarationen_ genannt) werden mit Verhaltensweise 3 gehoben; [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen werden mit Verhaltensweise 1 und 4 gehoben.

Einige ziehen es vor, `let`, `const` und `class` als nicht hoisted zu betrachten, weil die [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) jegliche Verwendung der Variable vor ihrer Deklaration strikt verbietet. Diese Abweichung ist in Ordnung, da Hoisting kein allgemein anerkannter Begriff ist. Allerdings kann die temporal dead zone andere beobachtbare Änderungen in ihrem Gültigkeitsbereich verursachen, was darauf hindeutet, dass irgendeine Form von Hoisting stattfindet:

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

Wenn die `const x = 2`-Deklaration überhaupt nicht gehoben wird (d.h. sie tritt erst in Kraft, wenn sie ausgeführt wird), sollte die `console.log(x)`-Anweisung den `x`-Wert aus dem oberen Gültigkeitsbereich lesen können. Da jedoch die `const`-Deklaration immer noch den gesamten Gültigkeitsbereich "verunreinigt", in dem sie definiert ist, liest die `console.log(x)`-Anweisung den `x`-Wert aus der `const x = 2`-Deklaration, die noch nicht initialisiert ist, und wirft einen {{jsxref("ReferenceError")}}. Trotzdem kann es nützlicher sein, lexikalische Deklarationen als nicht gehoben zu charakterisieren, weil aus utilitaristischer Perspektive das Hoisting dieser Deklarationen keine sinnvollen Funktionen bietet.

Beachten Sie, dass das Folgende keine Form des Hoisting ist:

```js
{
  var x = 1;
}
console.log(x); // 1
```

Hier gibt es kein "Zugriff vor der Deklaration"; es liegt einfach daran, dass `var`-Deklarationen nicht blockweise gegliedert sind.

Weitere Informationen über Hoisting finden Sie unter:

- `var`/`let`/`const` Hoisting — [Grammatik- und Typen-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting)
- `function` Hoisting — [Funktionen-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting)
- `class` Hoisting — [Klassen-Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting)
- `import` Hoisting — [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#import_declarations_are_hoisted)

## Siehe auch

- [`var`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/var)
- [`let`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`const`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`function`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`class`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
