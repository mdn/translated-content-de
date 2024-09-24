---
title: "SyntaxError: fehlende ) nach Argumentliste"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "fehlende ) nach Argumentliste" tritt auf, wenn ein Fehler bei der Funktionsaufruf vorliegt. Dies könnte ein Tippfehler, ein fehlender Operator oder eine nicht escape-te Zeichenkette sein.

## Meldung

```plain
SyntaxError: missing ) after argument list (V8-based & Firefox)
SyntaxError: Unexpected identifier 'x'. Expected ')' to end an argument list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Es gibt einen Fehler bei der Art und Weise, wie eine Funktion aufgerufen wird. Dies könnte beispielsweise ein Tippfehler, ein fehlender Operator oder eine nicht escape-te Zeichenkette sein.

## Beispiele

Da es keinen "+" Operator gibt, um die Zeichenkette zu verketteln, erwartet JavaScript, dass das Argument für die `log` Funktion nur `"PI: "` ist. In diesem Fall sollte es durch eine schließende Klammer beendet werden.

```js-nolint example-bad
console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
```

Sie können den `log` Aufruf korrigieren, indem Sie den `+` Operator hinzufügen:

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

Alternativ können Sie ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals) verwenden oder die Tatsache nutzen, dass [`console.log`](/de/docs/Web/API/console/log_static) mehrere Parameter akzeptiert:

```js example-good
console.log(`PI: ${Math.PI}`);
console.log("PI:", Math.PI);
```

### Nicht beendete Zeichenketten

```js-nolint example-bad
console.log('"Java" + "Script" = \"' + "Java" + 'Script\");
// SyntaxError: missing ) after argument list
```

Hier glaubt JavaScript, dass Sie `);` innerhalb der Zeichenkette haben wollten und ignoriert es, und es endet damit, dass es nicht weiß, dass Sie das `);` beabsichtigten, um die Funktion `console.log` zu beenden. Um dies zu beheben, könnten wir ein `'` nach der "Script" Zeichenkette setzen:

```js example-good
console.log('"Java" + "Script" = "' + "Java" + 'Script"');
// '"Java" + "Script" = "JavaScript"'
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
