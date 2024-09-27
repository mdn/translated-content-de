---
title: "SyntaxError: Funktionen können nicht beschriftet werden"
slug: Web/JavaScript/Reference/Errors/Function_label
l10n:
  sourceCommit: ed675459f2cc0af0a7b8904175f3da436d1abcea
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "functions cannot be labelled" tritt auf, wenn eine {{jsxref("Statements/function", "function")}}-Deklaration ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) davor hat.

## Nachricht

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

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Funktionsdeklarationen sollten niemals beschriftet werden, da Labels nur auf Anweisungen angewendet werden sollten, nicht auf Deklarationen. Es gibt keine Möglichkeit, tatsächlich zu diesem Label zu springen. Aufgrund einiger älterer JavaScript-Syntaxregeln ist die Fehlerbedingung etwas komplizierter als nötig:

- Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) dürfen Funktionsdeklarationen niemals beschriftet werden.
- Im nicht-strikten Modus dürfen Funktionsdeklarationen beschriftet werden, aber nicht, wenn die Funktion die einzige Anweisung einer `if`-Anweisung ist (was selbst eine veraltete Funktion ist).
- Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen dürfen niemals beschriftet werden.

Die Fehlermeldung könnte etwa "ungültiger Ort für eine Funktionsdeklaration" lauten, da der Parser, wenn er ein Label sieht, erwartet, dass eine Anweisung folgt, und eine Funktionsdeklaration ist keine Anweisung. Es hängt davon ab, ob die Perspektive des Fehlers ist, dass ein Label nicht von einer Funktion gefolgt werden kann oder dass eine Funktion nicht von einem Label vorangestellt werden kann.

## Beispiele

### Fehlinterpretierte Objektliteral

Während es möglich ist, dass Sie tatsächlich erwarten, dass das Label _etwas_ in der Art eines Sprungziels tut, beabsichtigen Sie normalerweise nicht, dass es ein Label ist. Der häufigste Fall ist, dass Sie möchten, dass es ein Eigenschaftsschlüssel in einem Objektliteral ist:

```js-nolint example-bad
const createObj = () => {
  greet: function greet() { // SyntaxError: functions cannot be labelled
    console.log("Hello");
  }
};
```

Hier ist `{...}` tatsächlich kein Objektliteral, sondern der Blockkörper der [arrow function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), sodass `greet:` zu einem Label wird. Um dies zu beheben, müssen Sie das Objektliteral in Klammern setzen:

```js-nolint example-good
const createObj = () => ({
  greet: function greet() {
    console.log("Hello");
  },
});
```

Sie möchten möglicherweise auch die [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für Objektliterale verwenden, um diese Falle zu vermeiden:

```js example-good
const createObj = () => ({
  greet() {
    console.log("Hello");
  },
});
```

## Siehe auch

- [Beschriftete Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label)
- {{jsxref("Statements/function", "function")}}
- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- [Veraltete und obsolet Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
