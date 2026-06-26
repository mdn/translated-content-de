---
title: Hoisting
slug: Glossary/Hoisting
l10n:
  sourceCommit: 6af30294be537972bdac2c46fa98d63e136d589e
---

JavaScript **Hoisting** bezieht sich auf den Prozess, bei dem der Interpreter scheinbar die _Deklaration_ von Funktionen, Variablen, Klassen oder Importen an den Anfang ihres {{Glossary("scope", "Scopes")}} verschiebt, bevor der Code ausgeführt wird.

_Hoisting_ ist kein Begriff, der normativ in der ECMAScript-Spezifikation definiert ist. Die Spezifikation definiert eine Gruppe von Deklarationen als [_HoistableDeclaration_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration), aber dies umfasst nur die Deklarationen [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*). Hoisting wird oft auch als eine Eigenschaft von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Deklarationen angesehen, allerdings auf eine andere Weise. Im allgemeinen Sprachgebrauch können die folgenden Verhaltensweisen als Hoisting betrachtet werden:

1. Die Möglichkeit, den Wert einer Variablen in ihrem Scope vor der Zeile zu verwenden, in der sie deklariert ist. ("Value hoisting")
2. Die Möglichkeit, auf eine Variable in ihrem Scope vor der Zeile zu verweisen, in der sie deklariert ist, ohne einen {{jsxref("ReferenceError")}} auszulösen, aber der Wert ist immer [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). ("Declaration hoisting")
3. Die Deklaration der Variablen verursacht Verhaltensänderungen in ihrem Scope vor der Zeile, in der sie deklariert ist.
4. Die Nebenwirkungen einer Deklaration treten vor der Auswertung des restlichen Codes auf, der sie enthält.

Die vier obigen Funktionsdeklarationen werden mit Verhaltenstyp 1 gehoben; `var`-Deklarationen werden mit Verhaltenstyp 2 gehoben; [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)-Deklarationen (auch als _lexikalische Deklarationen_ bezeichnet) werden mit Verhaltenstyp 3 gehoben; [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen werden mit Verhaltenstyp 1 und Typ 4 gehoben.

Einige ziehen es vor, `let`, `const` und `class` als nicht-hoisting zu betrachten, da die [zeitliche Sperrzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) jegliche Verwendung der Variablen vor ihrer Deklaration strikt verbietet. Diese Auffassung ist akzeptabel, da Hoisting kein allgemein anerkannter Begriff ist. Die zeitliche Sperrzone kann jedoch andere beobachtbare Änderungen in ihrem Scope verursachen, was darauf hindeutet, dass es eine Form des Hoistings gibt:

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

Wenn die `const x = 2`-Deklaration überhaupt nicht gehoben wird (also erst in Kraft tritt, wenn sie ausgeführt wird), sollte die Anweisung `console.log(x)` den `x`-Wert aus dem äußeren Scope lesen können. Da die `const`-Deklaration jedoch immer noch den gesamten Scope "verunreinigt", in dem sie definiert ist, liest die `console.log(x)`-Anweisung den `x`-Wert aus der `const x = 2`-Deklaration, die noch nicht initialisiert ist, und löst einen {{jsxref("ReferenceError")}} aus. Es kann jedoch nützlicher sein, lexikalische Deklarationen als nicht-hoisting zu charakterisieren, da aus einer utilitaristischen Perspektive das Hoisting dieser Deklarationen keine nennenswerten Funktionen bietet.

Beachten Sie, dass Folgendes keine Form des Hoistings ist:

```js
{
  var x = 1;
}
console.log(x); // 1
```

Hier gibt es kein "Zugriff vor Deklaration"; es liegt einfach daran, dass `var`-Deklarationen nicht auf Blöcke beschränkt sind.

Weitere Informationen zum Hoisting finden Sie unter:

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
