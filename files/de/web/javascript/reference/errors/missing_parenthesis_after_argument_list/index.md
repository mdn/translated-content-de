---
title: "SyntaxError: missing ) after argument list"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "missing ) after argument list" tritt auf, wenn es einen Fehler bei der Art gibt, wie eine Funktion aufgerufen wird. Dies könnte ein Tippfehler, ein fehlender Operator oder ein nicht maskierter String sein.

## Nachricht

```plain
SyntaxError: missing ) after argument list (V8-based & Firefox)
SyntaxError: Unexpected identifier 'x'. Expected ')' to end an argument list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Es gibt einen Fehler bei der Art, wie eine Funktion aufgerufen wird. Dies könnte beispielsweise ein Tippfehler, ein fehlender Operator oder ein nicht maskierter String sein.

## Beispiele

Da es keinen "+" Operator gibt, um den String zu verketten, erwartet JavaScript, dass das Argument für die `log`-Funktion nur `"PI: "` ist. In diesem Fall sollte es durch eine schließende Klammer beendet werden.

```js-nolint example-bad
console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
```

Sie können den `log`-Aufruf korrigieren, indem Sie den `+` Operator hinzufügen:

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

Alternativ können Sie in Betracht ziehen, einen [Template-String](/de/docs/Web/JavaScript/Reference/Template_literals) zu verwenden oder die Tatsache nutzen, dass [`console.log`](/de/docs/Web/API/console/log_static) mehrere Parameter akzeptiert:

```js example-good
console.log(`PI: ${Math.PI}`);
console.log("PI:", Math.PI);
```

### Nicht beendete Strings

```js-nolint example-bad
console.log('"Java" + "Script" = \"' + "Java" + 'Script\");
// SyntaxError: missing ) after argument list
```

Hier denkt JavaScript, dass Sie `);` innerhalb des Strings haben wollten und ignoriert es, und weiß am Ende nicht, dass Sie `);` meinten, um die Funktion `console.log` zu beenden. Um dies zu beheben, könnten wir ein `'` nach dem "Script"-String setzen:

```js example-good
console.log('"Java" + "Script" = "' + "Java" + 'Script"');
// '"Java" + "Script" = "JavaScript"'
```

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
