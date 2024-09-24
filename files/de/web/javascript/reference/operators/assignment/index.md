---
title: Zuweisung (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: ee1599cba00284fd6af713e61e96dae61bb10287
---

{{jsSidebar("Operators")}}

Der **Zuweisungsoperator (`=`)** wird verwendet, um einer Variablen oder Eigenschaft einen Wert zuzuweisen. Der Zuweisungsausdruck selbst hat einen Wert, der dem zugewiesenen Wert entspricht. Dies ermöglicht verkettete Mehrfachzuweisungen, um einem einzigen Wert mehrere Variablen zuzuweisen.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## Syntax

```js-nolint
x = y
```

### Parameter

- `x`
  - : Ein gültiges Ziel für die Zuweisung, einschließlich eines [Identifiers](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder eines [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es kann auch ein [Destructuring-Assignment-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `y`
  - : Ein Ausdruck, der den Wert spezifiziert, der `x` zugewiesen werden soll.

### Rückgabewert

Der Wert von `y`.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird im Strict-Modus ausgelöst, wenn einem Identifier zugewiesen wird, der im Scope nicht deklariert ist.
- {{jsxref("TypeError")}}
  - : Wird im Strict-Modus ausgelöst, wenn einer [Eigenschaft zugewiesen wird, die nicht modifizierbar ist](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties).

## Beschreibung

Der Zuweisungsoperator ist völlig anders als das Gleichheitszeichen (`=`), das als syntaktische Trennung an anderen Stellen verwendet wird, darunter:

- Initialisierungen von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Deklarationen
- Standardwerte bei [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value)
- [Default-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierer von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

Alle diese Stellen akzeptieren einen Zuweisungsausdruck auf der rechten Seite des `=`, sodass wenn Sie mehrere Gleichheitszeichen miteinander verketten:

```js-nolint
const x = y = 5;
```

Dies entspricht:

```js
const x = (y = 5);
```

Das bedeutet, `y` muss eine bereits existierende Variable sein, und `x` ist eine neu deklarierte `const`-Variable. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des Ausdrucks `y = 5` initialisiert, der ebenfalls `5` ist. Wenn `y` keine bereits existierende Variable ist, wird im [Non-Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) eine globale Variable `y` implizit erstellt, oder ein {{jsxref("ReferenceError")}} wird im Strict-Modus ausgelöst. Um zwei Variablen innerhalb derselben Deklaration zu deklarieren, verwenden Sie:

```js
const x = 5,
  y = 5;
```

## Beispiele

### Einfache Zuweisung und Verkettung

```js
let x = 5;
let y = 10;
let z = 25;

x = y; // x ist 10
x = y = z; // x, y und z sind alle 25
```

### Wert von Zuweisungsausdrücken

Der Zuweisungsausdruck selbst wird zu dem Wert der rechten Seite ausgewertet, sodass Sie den Wert protokollieren und gleichzeitig einer Variablen zuweisen können.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Zuweisung eines nicht qualifizierten Identifiers

Das globale Objekt befindet sich an der Spitze der Scope-Kette. Wenn versucht wird, einen Namen einem Wert zuzuordnen, wird die Scope-Kette durchsucht. Dies bedeutet, dass Eigenschaften des globalen Objekts bequem von jedem Scope aus sichtbar sind, ohne dass die Namen mit `globalThis.`, `window.` oder `global.` qualifiziert werden müssen.

Da das globale Objekt eine `String`-Eigenschaft hat (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // Die Funktion `String` ist global verfügbar
}
```

Daher wird letztendlich das globale Objekt nach nicht qualifizierten Identifiers durchsucht. Sie müssen nicht `globalThis.String` eingeben; Sie können einfach den nicht qualifizierten `String` eingeben. Um diese Funktion konzeptionell konsistenter zu machen, wird die Zuweisung an nicht qualifizierte Identifiers davon ausgehen, dass Sie eine Eigenschaft mit diesem Namen auf dem globalen Objekt erstellen möchten (ohne `globalThis.`), wenn im Scope keine Variable mit demselben Namen deklariert ist.

```js
foo = "f"; // Im Non-Strict-Modus wird angenommen, dass Sie eine Eigenschaft namens `foo` auf dem globalen Objekt erstellen möchten
Object.hasOwn(globalThis, "foo"); // true
```

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung an einen nicht qualifizierten Identifier im Strict-Modus zu einem `ReferenceError`, um die unbeabsichtigte Erstellung von Eigenschaften auf dem globalen Objekt zu vermeiden.

Beachten Sie, dass die Implikation des Obigen ist, dass JavaScript, entgegen populärer Fehlinformationen, keine impliziten oder nicht deklarierten Variablen hat. Es behandelt jedoch das globale Objekt als globalen Scope und erlaubt das Auslassen des globalen Objektqualifikators bei der Erstellung von Eigenschaften.

### Zuweisung mit Destructuring

Die linke Seite kann auch ein Zuweisungsmuster sein. Dies ermöglicht die Zuweisung an mehrere Variablen gleichzeitig.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
