---
title: "SyntaxError: Funktionen können nicht gekennzeichnet werden"
slug: Web/JavaScript/Reference/Errors/Function_label
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "functions cannot be labelled" tritt auf, wenn eine {{jsxref("Statements/function", "function")}}-Deklaration ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) davor hat.

## Meldung

```plain
SyntaxError: In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement. (V8-based)
SyntaxError: In strict mode code, functions can only be declared at top level or inside a block. (V8-based)
SyntaxError: Generators can only be declared at the top level or inside a block. (V8-based)
SyntaxError: Async functions can only be declared at the top level or inside a block. (V8-based)

SyntaxError: functions can only be labelled inside blocks (Firefox)
SyntaxError: functions cannot be labelled (Firefox)
SyntaxError: generator functions cannot be labelled (Firefox)
SyntaxError: async function declarations can't appear in single-statement context (Firefox)

SyntaxError: Unexpected keyword 'function'. Function declarations are only allowed inside block statements or at the top level of a program. (Safari)
SyntaxError: Function declarations are only allowed inside blocks or switch statements in strict mode. (Safari)
SyntaxError: Unexpected token '*'. Cannot use generator function declaration in single-statement context. (Safari)
SyntaxError: Unexpected keyword 'function'. Cannot use async function declaration in single-statement context. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was schiefgelaufen ist

Funktionsdeklarationen sollten niemals gekennzeichnet werden, da Labels nur auf Anweisungen, nicht auf Deklarationen angewendet werden sollten. Es gibt keine Möglichkeit, tatsächlich auf dieses Label zu springen. Aufgrund einiger veralteter JavaScript-Syntaxregeln ist die Fehlerbedingung jedoch etwas komplizierter als notwendig:

- Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) dürfen Funktionsdeklarationen niemals gekennzeichnet werden.
- Im Nicht-Strict-Modus dürfen Funktionsdeklarationen gekennzeichnet werden, jedoch nicht, wenn die Funktion die einzige Anweisung einer `if`-Anweisung ist (was an sich schon ein veraltetes Feature ist).
- Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen dürfen niemals gekennzeichnet werden.

Die Fehlermeldung könnte etwas in der Art von "ungültiger Ort, um eine Funktionsdeklaration erscheinen zu lassen" besagen, da der Parser, wenn er ein Label sieht, erwartet, dass eine Anweisung folgt, und eine Funktionsdeklaration ist keine Anweisung. Es hängt davon ab, ob die Perspektive des Fehlers so ist, dass ein Label nicht von einer Funktion gefolgt werden kann, oder dass eine Funktion nicht von einem Label vorangestellt werden kann.

## Beispiele

### Falsch interpretierte Objektliterale

Während es möglich ist, dass Sie tatsächlich erwarten, dass das Label _etwas_ in der Art eines Sprungziels tut, hatten Sie normalerweise nicht vor, dass es ein Label ist. Der häufigste Fall ist, dass Sie tatsächlich möchten, dass es ein Eigenschaftsschlüssel in einem Objektliteral ist:

```js-nolint example-bad
const createObj = () => {
  greet: function greet() { // SyntaxError: functions cannot be labelled
    console.log("Hello");
  }
};
```

Hier ist `{...}` tatsächlich kein Objektliteral, sondern der Blockkörper der [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), so dass `greet:` zu einem Label wird. Um dies zu beheben, müssen Sie das Objektliteral in Klammern setzen:

```js-nolint example-good
const createObj = () => ({
  greet: function greet() {
    console.log("Hello");
  },
});
```

Sie möchten auch möglicherweise die [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für Objektliterale verwenden, die diese Falle vermeidet:

```js example-good
const createObj = () => ({
  greet() {
    console.log("Hello");
  },
});
```

## Siehe auch

- [Gekennzeichnete Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label)
- {{jsxref("Statements/function", "function")}}
- [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- [Veraltete und obsolet Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
