---
title: "SyntaxError: continue muss sich innerhalb einer Schleife befinden"
slug: Web/JavaScript/Reference/Errors/Bad_continue
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "continue muss sich innerhalb einer Schleife befinden" tritt auf, wenn eine {{jsxref("Statements/continue", "continue")}}-Anweisung nicht innerhalb einer Schleifenanweisung steht.

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

{{jsxref("Statements/continue", "continue")}}-Anweisungen können verwendet werden, um eine Schleife fortzusetzen, und ihre Verwendung an anderer Stelle ist ein Syntaxfehler. Alternativ können Sie ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) für die `continue`-Anweisung angeben, um eine beliebige Schleife mit diesem Label fortzusetzen – jedoch wird ein weiterer Fehler [SyntaxError: label not found](/de/docs/Web/JavaScript/Reference/Errors/Label_not_found) ausgelöst, wenn das Label keine umschließende Anweisung referenziert, und wenn das Label eine Anweisung referenziert, die keine Schleife ist, wird weiterhin ein Syntaxfehler ausgelöst.

## Beispiele

### Verwendung von continue in Rückruffunktionen

Wenn Sie die nächste Iteration in einer {{jsxref("Array/forEach", "forEach()")}}-Schleife fortsetzen möchten, verwenden Sie stattdessen {{jsxref("Statements/return", "return")}} oder konvertieren Sie sie in eine {{jsxref("Statements/for...of", "for...of")}}-Schleife.

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
