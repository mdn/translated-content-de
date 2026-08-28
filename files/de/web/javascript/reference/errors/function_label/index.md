---
title: "SyntaxError: functions cannot be labelled"
slug: Web/JavaScript/Reference/Errors/Function_label
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

<!-- cSpell:ignore labelled -->

Die JavaScript-Ausnahme "functions cannot be labelled" tritt auf, wenn eine {{jsxref("Statements/function", "function")}}-Deklaration ein [label](/de/docs/Web/JavaScript/Reference/Statements/label) davor hat.

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

## Was ist schiefgelaufen?

Funktionsdeklarationen sollten niemals mit einem Label versehen sein, da Labels nur auf Anweisungen und nicht auf Deklarationen angewendet werden sollten. Es gibt keine Möglichkeit, tatsächlich zu diesem Label zu springen. Aufgrund einiger alter JavaScript-Syntaxregeln ist die Fehlersituation jedoch komplizierter als nötig:

- Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) dürfen Funktionsdeklarationen niemals ein Label haben.
- Im Nicht-Strict-Modus dürfen Funktionsdeklarationen ein Label haben, jedoch nicht, wenn die Funktion die einzige Anweisung einer `if`-Anweisung ist (was selbst ein veraltetes Merkmal ist).
- Asynchrone Funktionen, Generator-Funktionen und asynchrone Generator-Funktionen dürfen nie ein Label haben.

Die Fehlermeldung könnte etwas in der Art von "ungültiger Ort für das Erscheinen einer Funktionsdeklaration" sagen, denn wenn der Parser ein Label sieht, erwartet er, dass eine Anweisung folgt, und eine Funktionsdeklaration ist keine Anweisung. Es hängt davon ab, ob die Perspektive des Fehlers ist, dass ein Label nicht von einer Funktion gefolgt werden kann, oder dass eine Funktion nicht von einem Label vorangestellt werden kann.

## Beispiele

### Falsch geparstes Objektliteral

Obwohl es möglich ist, dass Sie tatsächlich erwarten, dass das Label _etwas_ als Sprungziel dient, beabsichtigen Sie normalerweise nicht, dass es ein Label ist. Der häufigste Fall ist, dass Sie tatsächlich wollen, dass es ein Property-Schlüssel in einem Objektliteral ist:

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

Sie möchten möglicherweise auch die [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für Objektliterale verwenden, um dieses Problem zu vermeiden:

```js example-good
const createObj = () => ({
  greet() {
    console.log("Hello");
  },
});
```

## Siehe auch

- [Label-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label)
- {{jsxref("Statements/function", "function")}}
- [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- [Veraltete und obsolet gewordene Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
