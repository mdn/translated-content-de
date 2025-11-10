---
title: "SyntaxError: missing ) after argument list"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "missing ) after argument list" tritt auf, wenn ein Fehler beim Aufruf einer Funktion vorliegt. Dies könnte ein Tippfehler, ein fehlender Operator oder eine nicht maskierte Zeichenkette sein.

## Meldung

```plain
SyntaxError: missing ) after argument list (V8-based & Firefox)
SyntaxError: Unexpected identifier 'x'. Expected ')' to end an argument list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Es gibt einen Fehler bei der Art und Weise, wie eine Funktion aufgerufen wird. Dies könnte beispielsweise ein Tippfehler, ein fehlender Operator oder eine nicht maskierte Zeichenkette sein.

## Beispiele

Da der "+"-Operator fehlt, um die Zeichenkette zu verketten, erwartet JavaScript, dass das Argument für die `log`-Funktion nur `"PI: "` ist. In diesem Fall sollte es durch eine schließende Klammer abgeschlossen werden.

```js-nolint example-bad
console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
```

Sie können den `log`-Aufruf korrigieren, indem Sie den `+`-Operator hinzufügen:

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

Alternativ können Sie ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) verwenden oder die Tatsache nutzen, dass [`console.log`](/de/docs/Web/API/console/log_static) mehrere Parameter akzeptiert:

```js example-good
console.log(`PI: ${Math.PI}`);
console.log("PI:", Math.PI);
```

### Nicht abgeschlossene Zeichenketten

```js-nolint example-bad
console.log('"Java" + "Script" = \"' + "Java" + 'Script\");
// SyntaxError: missing ) after argument list
```

Hier denkt JavaScript, dass Sie `);` innerhalb der Zeichenkette meinen, und ignoriert es. Dadurch weiß es letztendlich nicht, dass Sie `);` zum Beenden der Funktion `console.log` meinten. Um dies zu beheben, könnten wir ein `'` nach dem "Script"-String setzen:

```js example-good
console.log('"Java" + "Script" = "' + "Java" + 'Script"');
// '"Java" + "Script" = "JavaScript"'
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
