---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Das JavaScript-Exception "return not in function" tritt auf, wenn eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung außerhalb einer [Funktion](/de/docs/Web/JavaScript/Guide/Functions) aufgerufen wird.

## Nachricht

```plain
SyntaxError: Illegal return statement (V8-based)
SyntaxError: return not in function (Firefox)
SyntaxError: Return statements are only valid inside functions. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung wird außerhalb einer [Funktion](/de/docs/Web/JavaScript/Guide/Functions) aufgerufen. Möglicherweise fehlen irgendwo geschweifte Klammern? Die `return`-Anweisung muss in einer Funktion stehen, da sie die Funktionsausführung beendet und einen Wert an den Funktionsaufrufer zurückgibt.

## Beispiele

### Fehlende geschweifte Klammern

```js-nolint example-bad
function cheer(score) {
  if (score === 147)
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}

// SyntaxError: return not in function
```

Die geschweiften Klammern sehen auf den ersten Blick korrekt aus, aber in diesem Codeausschnitt fehlt eine `{` nach der ersten `if`-Anweisung. Korrekt wäre:

```js example-good
function cheer(score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}
```

## Siehe auch

- [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)
