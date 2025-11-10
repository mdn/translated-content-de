---
title: "SyntaxError: ungültige Zuweisung auf der linken Seite"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "ungültige Zuweisung auf der linken Seite" tritt auf, wenn irgendwo eine unerwartete Zuweisung stattgefunden hat. Dies kann ausgelöst werden, wenn ein einzelnes `=`-Zeichen anstelle von `==` oder `===` verwendet wurde.

## Nachricht

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

Es gab irgendwo eine unerwartete Zuweisung. Dies könnte zum Beispiel auf ein Missverhältnis zwischen einem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) und einem [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) zurückzuführen sein. Während ein einzelnes `=`-Zeichen einen Wert einer Variable zuweist, vergleichen die `==` oder `===` Operatoren einen Wert.

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

Im `if`-Statement möchten Sie einen Gleichheitsoperator (`===`) verwenden, und für die Zeichenkettenverkettung wird der Plus-Operator (`+`) benötigt.

```js-nolint example-good
if (Math.PI + 1 === 3 || Math.PI + 1 === 4) {
  console.log("no way!");
}

const str = "Hello, "
  + "from the "
  + "other side!";
```

### Zuweisungen, die ReferenceErrors verursachen

Ungültige Zuweisungen erzeugen nicht immer Syntaxfehler. Manchmal ist die Syntax fast korrekt, aber zur Laufzeit wird der Ausdruck auf der linken Seite als _Wert_ statt als _Referenz_ ausgewertet, sodass die Zuweisung trotzdem ungültig ist. Solche Fehler treten später bei der Ausführung auf, wenn die Anweisung tatsächlich ausgeführt wird.

```js-nolint example-bad
function foo() {
  return { a: 1 };
}
foo() = 1; // ReferenceError: invalid assignment left-hand side
```

Funktionsaufrufe, [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Aufrufe, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) und [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) sind alle Werte statt Referenzen. Wenn Sie sie auf der linken Seite verwenden möchten, muss das Ziel der Zuweisung eine Eigenschaft ihrer erzeugten Werte sein.

```js example-good
function foo() {
  return { a: 1 };
}
foo().a = 1;
```

> [!NOTE]
> In Firefox und Safari erzeugt das erste Beispiel einen `ReferenceError` im nicht-strengen Modus und einen `SyntaxError` im [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode). Chrome wirft einen Laufzeit-`ReferenceError` sowohl im strengen als auch im nicht-strengen Modus.

### Verwendung von optionalem Chaining als Zuweisungsziel

[Optionales Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist kein gültiges Zuweisungsziel.

```js-nolint example-bad
obj?.foo = 1; // SyntaxError: invalid assignment left-hand side
```

Stattdessen müssen Sie zunächst den Nullfall absichern.

```js example-good
if (obj) {
  obj.foo = 1;
}
```

## Siehe auch

- [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators)
