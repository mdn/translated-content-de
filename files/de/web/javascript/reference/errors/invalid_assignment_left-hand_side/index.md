---
title: "SyntaxError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

Die JavaScript-Ausnahme "ungültige Zuweisung auf der linken Seite" tritt auf, wenn irgendwo eine unerwartete Zuweisung erfolgt ist. Sie kann ausgelöst werden, wenn ein einzelnes `=`-Zeichen anstelle von `==` oder `===` verwendet wurde.

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

## Was ist schiefgelaufen?

Es gab irgendwo eine unerwartete Zuweisung. Dies könnte beispielsweise auf eine Verwechslung zwischen einem [Zuordnungsoperator](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) und einem [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) zurückzuführen sein. Während ein einzelnes `=`-Zeichen einen Wert einer Variablen zuweist, vergleichen die `==`- oder `===`-Operatoren einen Wert.

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

In der `if`-Anweisung möchten Sie einen Gleichheitsoperator (`===`) verwenden, und für die Zeichenfolgenverkettung wird der Plus (`+`)-Operator benötigt.

```js-nolint example-good
if (Math.PI + 1 === 3 || Math.PI + 1 === 4) {
  console.log("no way!");
}

const str = "Hello, "
  + "from the "
  + "other side!";
```

### Zuordnungen, die ReferenceErrors erzeugen

Ungültige Zuweisungen führen nicht immer zu Syntaxfehlern. Manchmal ist die Syntax fast korrekt, aber zur Laufzeit wird der Ausdruck auf der linken Seite zu einem _Wert_ statt einer _Referenz_ ausgewertet, sodass die Zuweisung dennoch ungültig ist. Solche Fehler treten später bei der Ausführung auf, wenn die Anweisung tatsächlich ausgeführt wird.

```js-nolint example-bad
function foo() {
  return { a: 1 };
}
foo() = 1; // ReferenceError: invalid assignment left-hand side
```

Funktionsaufrufe, [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Aufrufe, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) und [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) sind alle Werte statt Referenzen. Wenn Sie sie auf der linken Seite verwenden möchten, muss das Zuweisungsziel eine Eigenschaft der von ihnen produzierten Werte sein.

```js example-good
function foo() {
  return { a: 1 };
}
foo().a = 1;
```

> [!NOTE]
> In Firefox und Safari erzeugt das erste Beispiel einen `ReferenceError` im Nicht-strikt-Modus und einen `SyntaxError` im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode). Chrome wirft einen Laufzeit-`ReferenceError` für sowohl strikte als auch nicht-strikte Modi.

### Verwendung der Optionalen Verkettung als Zuweisungsziel

[Optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist kein gültiges Zuweisungsziel.

```js-nolint example-bad
obj?.foo = 1; // SyntaxError: invalid assignment left-hand side
```

Stattdessen müssen Sie zunächst den null-ISH-Fall absichern.

```js example-good
if (obj) {
  obj.foo = 1;
}
```

## Siehe auch

- [Zuordnungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators)
