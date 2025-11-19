---
title: "Warnung: unerreichbarer Code nach dem return-Statement"
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Warnung "unerreichbarer Code nach dem `return`-Statement" tritt auf, wenn ein Ausdruck nach einem {{jsxref("Statements/return", "return")}}-Statement verwendet wird oder wenn ein `return`-Statement ohne Semikolon steht, aber direkt danach ein Ausdruck folgt.

## Meldung

```plain
Warning: unreachable code after return statement (Firefox)
```

## Fehlertyp

Warnung

## Was ist schiefgelaufen?

Unerreichbarer Code nach einem `return`-Statement kann in diesen Situationen auftreten:

- Wenn ein Ausdruck nach einem {{jsxref("Statements/return", "return")}}-Statement
  verwendet wird, oder
- wenn ein `return`-Statement ohne Semikolon steht, aber direkt danach ein Ausdruck folgt.

Wenn ein Ausdruck nach einem gültigen `return`-Statement vorhanden ist, wird eine Warnung ausgegeben, um darauf hinzuweisen, dass der Code nach dem `return`-Statement unerreichbar ist, was bedeutet, dass er niemals ausgeführt wird.

Warum sollte ich Semikolons nach `return`-Statements verwenden? Im Fall von `return`-Statements ohne Semikolon kann es unklar sein, ob der Entwickler beabsichtigt hat, den Ausdruck in der folgenden Zeile zurückzugeben oder die Ausführung zu beenden und zurückzukehren. Die Warnung zeigt an, dass in der Art und Weise, wie das `return`-Statement geschrieben ist, eine Mehrdeutigkeit besteht.

Warnungen werden nicht für `return`-Statements ohne Semikolon angezeigt, wenn diesen Statements folgendes folgt:

- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/function", "function")}}

## Beispiele

### Ungültige Fälle

```js-nolint example-bad
function f() {
  let x = 3;
  x += 4;
  return x;   // return exits the function immediately
  x -= 3;     // so this line will never run; it is unreachable
}

function g() {
  return     // this is treated like `return;`
    3 + 4;   // so the function returns, and this line is never reached
}
```

### Gültige Fälle

```js-nolint example-good
function f() {
  let x = 3;
  x += 4;
  x -= 3;
  return x; // OK: return after all other statements
}

function g() {
  return 3 + 4 // OK: semicolon-less return with expression on the same line
}
```

## Siehe auch

- [Automatische Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
