---
title: "SyntaxError: missing ) after argument list"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "missing ) after argument list" tritt auf, wenn ein Fehler bei der Funktionsaufrufsyntax vorliegt. Dies könnte ein Tippfehler, ein fehlender Operator oder ein nicht entkommener String sein.

## Nachricht

```plain
SyntaxError: missing ) after argument list (V8-based & Firefox)
SyntaxError: Unexpected identifier 'x'. Expected ')' to end an argument list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Es gibt einen Fehler bei der Art, wie eine Funktion aufgerufen wird. Dies könnte zum Beispiel ein Tippfehler, ein fehlender Operator oder ein nicht entkommener String sein.

## Beispiele

Weil kein "+" Operator zum Verketten des Strings vorhanden ist, erwartet JavaScript, dass das Argument für die `log`-Funktion nur `"PI: "` ist. In diesem Fall sollte es mit einer schließenden Klammer abgeschlossen werden.

```js-nolint example-bad
console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
```

Sie können den `log`-Aufruf korrigieren, indem Sie den `+` Operator hinzufügen:

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

Alternativ können Sie in Betracht ziehen, einen [Template-String](/de/docs/Web/JavaScript/Reference/Template_literals) zu verwenden oder die Tatsache ausnutzen, dass [`console.log`](/de/docs/Web/API/console/log_static) mehrere Parameter akzeptiert:

```js example-good
console.log(`PI: ${Math.PI}`);
console.log("PI:", Math.PI);
```

### Nicht terminierte Strings

```js-nolint example-bad
console.log('"Java" + "Script" = \"' + "Java" + 'Script\");
// SyntaxError: missing ) after argument list
```

Hier denkt JavaScript, dass Sie `);` innerhalb des Strings meinen und ignoriert es, und es endet damit, dass es nicht weiß, dass Sie `);` zum Beenden der Funktion `console.log` meinten. Um dies zu beheben, könnten Sie ein `'` nach dem "Script"-String setzen:

```js example-good
console.log('"Java" + "Script" = "' + "Java" + 'Script"');
// '"Java" + "Script" = "JavaScript"'
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
