---
title: "Warnung: unerreichbarer Code nach return-Anweisung"
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Warnung "unreachable code after return statement" tritt auf, wenn Sie einen Ausdruck nach einer {{jsxref("Statements/return", "return")}}-Anweisung oder eine return-Anweisung ohne Semikolon verwenden, aber direkt danach einen Ausdruck einschließen.

## Nachricht

```plain
Warning: unreachable code after return statement (Firefox)
```

## Fehlerart

Warnung

## Was ist schiefgelaufen?

Unerreichbarer Code nach einer return-Anweisung kann in folgenden Situationen auftreten:

- Wenn ein Ausdruck nach einer {{jsxref("Statements/return", "return")}}-Anweisung verwendet wird, oder
- wenn eine return-Anweisung ohne Semikolon verwendet wird, aber direkt danach ein Ausdruck eingeschlossen wird.

Wenn ein Ausdruck nach einer gültigen `return`-Anweisung existiert, wird eine Warnung ausgegeben, um anzuzeigen, dass der Code nach der `return`-Anweisung unerreichbar ist, was bedeutet, dass er niemals ausgeführt werden kann.

Warum sollte ich Semikolons nach `return`-Anweisungen verwenden? Bei return-Anweisungen ohne Semikolon kann es unklar sein, ob der Entwickler beabsichtigte, die Anweisung in der folgenden Zeile zurückzugeben oder die Ausführung zu stoppen und zurückzukehren. Die Warnung weist darauf hin, dass es eine Zweideutigkeit in der Art und Weise gibt, wie die `return`-Anweisung geschrieben ist.

Warnungen werden nicht für return-Anweisungen ohne Semikolon angezeigt, wenn diesen Anweisungen folgende Anweisungen folgen:

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

- [Automatische Semikoloneinfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
