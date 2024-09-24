---
title: "Warnung: unerreichbarer Code nach return-Anweisung"
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Warnung „unerreichbarer Code nach return-Anweisung“ tritt auf, wenn ein Ausdruck nach einer {{jsxref("Statements/return", "return")}}-Anweisung verwendet wird oder wenn eine return-Anweisung ohne Semikolon verwendet wird, gefolgt von einem Ausdruck.

## Nachricht

```plain
Warning: unreachable code after return statement (Firefox)
```

## Fehlertyp

Warnung

## Was ist schiefgelaufen?

Unerreichbarer Code nach einer return-Anweisung kann in diesen Situationen vorkommen:

- Wenn ein Ausdruck nach einer {{jsxref("Statements/return", "return")}}-Anweisung verwendet wird, oder
- wenn eine return-Anweisung ohne Semikolon verwendet wird, gefolgt von einem Ausdruck.

Wenn ein Ausdruck nach einer gültigen `return`-Anweisung existiert, wird eine Warnung ausgegeben, um anzuzeigen, dass der Code nach der `return`-Anweisung unerreichbar ist, was bedeutet, dass er niemals ausgeführt werden kann.

Warum sollte ich Semikolons nach `return`-Anweisungen haben? Im Fall von `return`-Anweisungen ohne Semikolon kann es unklar sein, ob der Entwickler beabsichtigt hat, die Anweisung in der folgenden Zeile zurückzugeben oder die Ausführung zu stoppen und zurückzukehren. Die Warnung zeigt an, dass es eine Mehrdeutigkeit in der Art und Weise gibt, wie die `return`-Anweisung geschrieben ist.

Warnungen werden nicht für Rückgaben ohne Semikolon angezeigt, wenn diese Anweisungen darauf folgen:

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
  return x;   // return verlässt die Funktion sofort
  x -= 3;     // daher wird diese Zeile niemals ausgeführt; sie ist unerreichbar
}

function g() {
  return     // dies wird wie `return;` behandelt
    3 + 4;   // daher kehrt die Funktion zurück und diese Zeile wird nie erreicht
}
```

### Gültige Fälle

```js-nolint example-good
function f() {
  let x = 3;
  x += 4;
  x -= 3;
  return x; // OK: return nach allen anderen Anweisungen
}

function g() {
  return 3 + 4 // OK: return ohne Semikolon mit Ausdruck in derselben Zeile
}
```

## Siehe auch

- [Automatische Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
