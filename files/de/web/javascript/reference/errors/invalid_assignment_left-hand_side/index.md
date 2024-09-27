---
title: "SyntaxError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „invalid assignment left-hand side“ tritt auf, wenn irgendwo eine unerwartete Zuweisung erfolgt ist. Dies kann ausgelöst werden, wenn ein einzelnes `=`-Zeichen anstelle von `==` oder `===` verwendet wurde.

## Meldung

```plain
SyntaxError: Invalid left-hand side in assignment (V8-based)
SyntaxError: invalid assignment left-hand side (Firefox)
SyntaxError: Left side of assignment is not a reference. (Safari)

ReferenceError: Invalid left-hand side in assignment (V8-based)
ReferenceError: cannot assign to function call (Firefox)
ReferenceError: Left side of assignment is not a reference. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}} oder {{jsxref("ReferenceError")}}, abhängig von der Syntax.

## Was ist schief gelaufen?

Es gab irgendwo eine unerwartete Zuweisung. Dies könnte auf eine Verwechslung eines [Zuweisungsoperators](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) mit einem [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) zurückzuführen sein. Während ein einzelnes `=` ein Wert einer Variablen zuweist, vergleichen die `==`- oder `===`-Operatoren einen Wert.

## Beispiele

### Typische ungültige Zuweisungen

```js-nolint example-bad
if (Math.PI + 1 = 3 || Math.PI + 1 = 4) {
  console.log("no way!");
}
// SyntaxError: invalid assignment left-hand side

const str = "Hello, "
+= "is it me "
+= "you're looking for?";
// SyntaxError: invalid assignment left-hand side
```

In der `if`-Anweisung möchten Sie einen Gleichheitsoperator (`===`) verwenden, und für die Zeichenfolgenverkettung wird der Plus-Operator (`+`) benötigt.

```js-nolint example-good
if (Math.PI + 1 === 3 || Math.PI + 1 === 4) {
  console.log("no way!");
}

const str = "Hello, "
  + "from the "
  + "other side!";
```

### Zuweisungen, die ReferenceErrors erzeugen

Ungültige Zuweisungen erzeugen nicht immer Syntaxfehler. Manchmal ist die Syntax fast korrekt, aber zur Laufzeit wertet der Ausdruck auf der linken Seite zu einem _Wert_ anstatt zu einer _Referenz_ aus, sodass die Zuweisung dennoch ungültig ist. Solche Fehler treten später bei der Ausführung auf, wenn die Anweisung tatsächlich ausgeführt wird.

```js-nolint example-bad
function foo() {
  return { a: 1 };
}
foo() = 1; // ReferenceError: invalid assignment left-hand side
```

Funktionsaufrufe, [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Aufrufe, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) und [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) sind alle Werte anstelle von Referenzen. Wenn Sie sie auf der linken Seite verwenden möchten, muss das Zuweisungsziel eine Eigenschaft ihrer erzeugten Werte sein.

```js example-good
function foo() {
  return { a: 1 };
}
foo().a = 1;
```

> [!NOTE]
> In Firefox und Safari erzeugt das erste Beispiel einen `ReferenceError` im nicht-strikten Modus und einen `SyntaxError` im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode). Chrome wirft einen Laufzeit-`ReferenceError` sowohl für strikte als auch nicht-strikte Modi.

### Optionale Verkettung als Zuweisungsziel verwenden

[Optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist kein gültiges Ziel einer Zuweisung.

```js-nolint example-bad
obj?.foo = 1; // SyntaxError: invalid assignment left-hand side
```

Stattdessen müssen Sie zuerst den nullish Fall absichern.

```js example-good
if (obj) {
  obj.foo = 1;
}
```

## Siehe auch

- [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators)
