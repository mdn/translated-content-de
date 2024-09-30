---
title: "SyntaxError: continue muss innerhalb einer Schleife sein"
slug: Web/JavaScript/Reference/Errors/Bad_continue
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "continue muss innerhalb einer Schleife sein" tritt auf, wenn eine {{jsxref("Statements/continue", "continue")}}-Anweisung nicht innerhalb einer Schleifenanweisung steht.

## Nachricht

```plain
SyntaxError: Illegal continue statement: no surrounding iteration statement (V8-based)
SyntaxError: Illegal continue statement: 'label' does not denote an iteration statement (V8-based)
SyntaxError: continue must be inside loop (Firefox)
SyntaxError: 'continue' is only valid inside a loop statement. (Safari)
SyntaxError: Cannot continue to the label 'label' as it is not targeting a loop. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

{{jsxref("Statements/continue", "continue")}}-Anweisungen können verwendet werden, um eine Schleife fortzusetzen. Die Verwendung an anderer Stelle führt zu einem Syntaxfehler. Alternativ können Sie einem `continue`-Statement ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) geben, um eine mit diesem Label versehenen Schleife fortzusetzen – allerdings wird, wenn das Label keine enthaltene Anweisung referenziert, ein anderer Fehler [SyntaxError: label not found](/de/docs/Web/JavaScript/Reference/Errors/Label_not_found) ausgelöst. Wenn das Label eine Anweisung referenziert, die keine Schleife ist, wird weiterhin ein Syntaxfehler geworfen.

## Beispiele

### Verwendung von continue in Callbacks

Wenn Sie in einer {{jsxref("Array/forEach", "forEach()")}}-Schleife mit der nächsten Iteration fortfahren möchten, verwenden Sie stattdessen {{jsxref("Statements/return", "return")}} oder konvertieren Sie zu einer {{jsxref("Statements/for...of", "for...of")}}-Schleife.

```js-nolint example-bad
array.forEach((value) => {
  if (value === 5) {
    continue; // SyntaxError: continue must be inside loop
  }
  // do something with value
});
```

```js example-good
array.forEach((value) => {
  if (value === 5) {
    return;
  }
  // do something with value
});
```

```js example-good
for (const value of array) {
  if (value === 5) {
    continue;
  }
  // do something with value
}
```

## Siehe auch

- {{jsxref("Statements/continue", "continue")}}
