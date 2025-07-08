---
title: "SyntaxError: continue muss innerhalb einer Schleife sein"
slug: Web/JavaScript/Reference/Errors/Bad_continue
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "continue must be inside loop" tritt auf, wenn eine {{jsxref("Statements/continue", "continue")}}-Anweisung außerhalb einer Schleifenanweisung verwendet wird.

## Meldung

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

{{jsxref("Statements/continue", "continue")}}-Anweisungen können verwendet werden, um eine Schleife fortzusetzen, und ihre Verwendung außerhalb davon führt zu einem Syntaxfehler. Alternativ können Sie ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) für die `continue`-Anweisung angeben, um eine beliebige Schleife mit diesem Label fortzusetzen — jedoch, wenn das Label sich nicht auf eine enthaltende Anweisung bezieht, wird ein anderer Fehler [SyntaxError: label not found](/de/docs/Web/JavaScript/Reference/Errors/Label_not_found) ausgelöst, und wenn das Label sich auf eine Anweisung bezieht, die keine Schleife ist, wird dennoch ein Syntaxfehler ausgelöst.

## Beispiele

### Verwendung von continue in Rückruffunktionen

Wenn Sie in einer {{jsxref("Array/forEach", "forEach()")}}-Schleife zur nächsten Iteration übergehen möchten, verwenden Sie stattdessen {{jsxref("Statements/return", "return")}} oder konvertieren Sie sie in eine {{jsxref("Statements/for...of", "for...of")}}-Schleife.

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
