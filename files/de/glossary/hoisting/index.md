---
title: Hoisting
slug: Glossary/Hoisting
l10n:
  sourceCommit: 9fd171abed5944476123db22360b1e086f0900d5
---

{{GlossarySidebar}}

JavaScript **Hoisting** bezieht sich auf den Prozess, bei dem der Interpreter anscheinend die _Deklaration_ von Funktionen, Variablen, Klassen oder Imports an den Anfang ihres [Scopes](/de/docs/Glossary/scope) verschiebt, bevor der Code ausgeführt wird.

_Hoisting_ ist kein normativer Begriff, der in der ECMAScript-Spezifikation definiert ist. Die Spezifikation definiert eine Gruppe von Deklarationen als [_HoistableDeclaration_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration), aber dies schließt nur [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*) Deklarationen ein. Hoisting wird oft auch als eine Eigenschaft der [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Deklarationen angesehen, obwohl auf andere Weise. Umganssprachlich können die folgenden Verhaltensweisen als Hoisting angesehen werden:

1. Die Möglichkeit, den Wert einer Variablen in ihrem Scope vor der Zeile, in der sie deklariert wird, zu verwenden. ("Value Hoisting")
2. Die Möglichkeit, auf eine Variable in ihrem Scope vor der Zeile, in der sie deklariert wird, zuzugreifen, ohne einen {{jsxref("ReferenceError")}} auszulösen, aber der Wert ist immer [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). ("Declaration Hoisting")
3. Die Deklaration der Variablen verursacht Verhaltensänderungen in ihrem Scope vor der Zeile, in der sie deklariert wird.
4. Die Nebeneffekte einer Deklaration treten auf, bevor der restliche Code, der sie enthält, ausgewertet wird.

Die vier oben genannten Funktionsdeklarationen werden mit Verhaltenstyp 1 gehastet; die `var`-Deklaration wird mit Verhaltenstyp 2 gehastet; [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) Deklarationen (auch kollektiv _lexical declarations_ genannt) werden mit Verhaltenstyp 3 gehastet; [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen werden mit Verhaltenstyp 1 und Typ 4 gehastet.

Einige ziehen es vor, `let`, `const` und `class` als nicht-hoisting zu betrachten, weil die [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) jede Verwendung der Variablen vor ihrer Deklaration strikt verbietet. Diese Abweichung ist akzeptabel, da Hoisting kein allgemein akzeptierter Begriff ist. Dennoch kann die temporal dead zone andere beobachtbare Änderungen in ihrem Scope verursachen, was darauf hindeutet, dass es eine Form von Hoisting gibt:

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

Wenn die `const x = 2` Deklaration überhaupt nicht gehastet wird (d. h. sie wird erst wirksam, wenn sie ausgeführt wird), dann sollte die `console.log(x)` Anweisung in der Lage sein, den `x`-Wert aus dem übergeordneten Scope zu lesen. Da jedoch die `const`-Deklaration den gesamten Scope, in dem sie definiert ist, dennoch "verunreinigt", liest die `console.log(x)` Anweisung das `x` aus der `const x = 2` Deklaration, die noch nicht initialisiert ist, und löst einen {{jsxref("ReferenceError")}} aus. Dennoch kann es hilfreicher sein, lexikalische Deklarationen als nicht-hoisting zu charakterisieren, da das Hoisting dieser Deklarationen aus einer utilitaristischen Perspektive keine wesentlichen Funktionen mit sich bringt.

Beachten Sie, dass das Folgende keine Form des Hoistings ist:

```js
{
  var x = 1;
}
console.log(x); // 1
```

Hier gibt es kein "Zugriff vor Deklaration"; es liegt einfach daran, dass `var`-Deklarationen nicht auf Blöcke beschränkt sind.

Für weitere Informationen über Hoisting, siehe:

- `var`/`let`/`const` Hoisting — [Grammatik und Typen Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting)
- `function` Hoisting — [Funktionen Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting)
- `class` Hoisting — [Klassen Leitfaden](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting)
- `import` Hoisting — [JavaScript Module](/de/docs/Web/JavaScript/Guide/Modules#import_declarations_are_hoisted)

## Siehe auch

- [`var` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/var)
- [`let` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`const` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`function` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`class` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
