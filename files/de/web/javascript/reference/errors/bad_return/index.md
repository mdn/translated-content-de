---
title: "SyntaxError: return nicht in Funktion"
slug: Web/JavaScript/Reference/Errors/Bad_return
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "return not in function" tritt auf, wenn eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung außerhalb einer [Funktion](/de/docs/Web/JavaScript/Guide/Functions) aufgerufen wird.

## Meldung

```plain
SyntaxError: Illegal return statement (V8-based)
SyntaxError: return not in function (Firefox)
SyntaxError: Return statements are only valid inside functions. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung wird außerhalb einer [Funktion](/de/docs/Web/JavaScript/Guide/Functions) aufgerufen. Vielleicht fehlen irgendwo geschweifte Klammern? Die `return`-Anweisung muss sich in einer Funktion befinden, da sie die Ausführung der Funktion beendet und einen Wert angibt, der an den Funktionsaufrufer zurückgegeben werden soll.

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

Die geschweiften Klammern scheinen auf den ersten Blick korrekt zu sein, aber diesem Codeausschnitt fehlt eine `{` nach der ersten `if`-Anweisung. Korrekt wäre:

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
