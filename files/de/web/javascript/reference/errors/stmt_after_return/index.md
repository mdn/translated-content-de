---
title: "Warnung: unerreichbarer Code nach return-Anweisung"
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Warnung "unerreichbarer Code nach return-Anweisung" tritt auf, wenn ein Ausdruck nach einer {{jsxref("Statements/return", "return")}}-Anweisung verwendet wird oder wenn eine Rückgabeanweisung ohne Semikolon verwendet wird, gefolgt von einem direkt darauf folgenden Ausdruck.

## Meldung

```plain
Warning: unreachable code after return statement (Firefox)
```

## Fehlertyp

Warnung

## Was ist schiefgelaufen?

Unerreichbarer Code nach einer return-Anweisung kann in diesen Situationen auftreten:

- Wenn ein Ausdruck nach einer {{jsxref("Statements/return", "return")}}-Anweisung verwendet wird, oder
- wenn eine Rückgabeanweisung ohne Semikolon verwendet wird, gefolgt von einem direkt darauf folgenden Ausdruck.

Wenn ein Ausdruck nach einer gültigen `return`-Anweisung existiert, wird eine Warnung ausgegeben, um anzuzeigen, dass der Code nach der `return`-Anweisung nicht erreichbar ist, das heißt, er kann nie ausgeführt werden.

Warum sollte ich Semikolons nach `return`-Anweisungen setzen? Im Fall von Rückgabeanweisungen ohne Semikolon kann es unklar sein, ob der Entwickler beabsichtigt, die Anweisung in der folgenden Zeile zurückzugeben oder die Ausführung zu beenden und zurückzukehren. Die Warnung weist darauf hin, dass es eine Mehrdeutigkeit in der Art gibt, wie die `return`-Anweisung geschrieben ist.

Warnungen werden nicht angezeigt für Rückgabeanweisungen ohne Semikolon, wenn diesen Anweisungen Folgendes folgt:

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
