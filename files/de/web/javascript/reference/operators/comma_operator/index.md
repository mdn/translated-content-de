---
title: Kommaoperator (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Kommaoperator (`,`)** wertet jeden seiner Operanden von links nach rechts aus und gibt den Wert des letzten Operanden zurück. Er wird häufig verwendet, um im Aktualisierungsteil einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife mehrere Ausdrücke anzugeben.

{{InteractiveExample("JavaScript Demo: Comma (,) operator")}}

```js interactive-example
let x = 1;

x = (x++, x);

console.log(x);
// Expected output: 2

x = (2, 3);

console.log(x);
// Expected output: 3
```

## Syntax

```js-nolint
expr1, expr2, expr3/* , … */
```

### Parameter

- `expr1`
  - : Ein Ausdruck beliebiger [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich eines weiteren Kommaausdrucks.
- `expr2`, `expr3`, …
  - : Ein oder mehrere Ausdrücke mit [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 2 (Zuweisung) oder höher, die von links nach rechts ausgewertet werden.

### Rückgabewert

Der Wert des letzten Ausdrucks.

## Beschreibung

Sie können den Kommaoperator verwenden, wenn Sie mehrere Ausdrücke an einer Stelle unterbringen möchten, an der ein einzelner Ausdruck erforderlich ist. Am häufigsten wird er verwendet, um mehrere Aktualisierungsausdrücke in einer `for`-Schleife anzugeben. Wenn Sie mehrere _Anweisungen_ an einer Stelle ausführen möchten, an der ein einzelner Ausdruck erforderlich ist, können Sie eine {{Glossary("IIFE", "IIFE")}} verwenden.

Da alle Ausdrücke außer dem letzten ausgewertet und anschließend verworfen werden, müssen sie Seiteneffekte haben, um nützlich zu sein. Häufige Ausdrücke mit Seiteneffekten sind Zuweisungen, Funktionsaufrufe sowie die Operatoren [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) und [`--`](/de/docs/Web/JavaScript/Reference/Operators/Decrement). Andere Ausdrücke können ebenfalls Seiteneffekte haben, wenn sie [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typumwandlungen](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) auslösen.

Der Kommaoperator hat von allen Operatoren die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence). Wenn Sie einen durch Kommas verbundenen Ausdruck in einen größeren Ausdruck einbinden möchten, müssen Sie ihn in Klammern setzen.

Der Kommaoperator unterscheidet sich grundlegend von Kommas, die an anderen Stellen als syntaktische Trennzeichen verwendet werden, darunter:

- Elemente in Array-Initialisierern (`[1, 2, 3]`)
- Eigenschaften in [Objekt-Initialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) (`{ a: 1, b: 2 }`)
- Parameter in [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) und Funktionsausdrücken (`function f(a, b) { … }`)
- Argumente in Funktionsaufrufen (`f(1, 2)`)
- {{Glossary("Binding", "Bindungslisten")}} in Deklarationen mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) (`const a = 1, b = 2;`)
- Importlisten in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (`import { a, b } from "c";`)
- Exportlisten in [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklarationen (`export { a, b };`)

Obwohl an einigen dieser Stellen fast alle Ausdrücke zulässig sind, sind durch Kommas verbundene Ausdrücke dort nicht erlaubt, da sie mit den syntaktischen Kommatrennzeichen verwechselt werden könnten. In solchen Fällen müssen Sie den Kommaausdruck in Klammern setzen. Das folgende Beispiel ist eine `const`-Deklaration, die zwei Variablen deklariert; das Komma ist hier kein Kommaoperator:

```js-nolint
const a = 1, b = 2;
```

Das unterscheidet sich vom folgenden Beispiel: Hier ist `b = 2` ein [Zuweisungsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Assignment) und keine Deklaration. Der Wert von `a` ist `2`, der Rückgabewert der Zuweisung, während der Wert `1` verworfen wird:

```js-nolint
const a = (1, b = 2);
```

Kommaoperatoren können nicht als [nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) auftreten.

## Beispiele

### Den Kommaoperator in einer for-Schleife verwenden

Wenn `a` ein zweidimensionales Array mit jeweils 10 Elementen pro Dimension ist, verwendet der folgende Code den Kommaoperator, um `i` zu erhöhen und gleichzeitig `j` zu verringern. So werden die Werte der Diagonalelemente des Arrays ausgegeben:

```js
const a = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, Math.random),
); // A 10×10 array of random numbers

for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

### Zuweisungen mit dem Kommaoperator verbinden

Da Kommas die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) haben – sogar eine niedrigere als Zuweisungen –, können sie mehrere Zuweisungsausdrücke verbinden. Im folgenden Beispiel wird `a` auf den Wert von `b = 3` gesetzt (also 3). Anschließend wird der Ausdruck `c = 4` ausgewertet; sein Ergebnis ist der Rückgabewert des gesamten Kommaausdrucks.

```js-nolint
let a, b, c;

a = b = 3, c = 4; // Returns 4
console.log(a); // 3 (left-most)

let x, y, z;

x = (y = 5, z = 6); // Returns 6
console.log(x); // 6 (right-most)
```

### Verarbeiten und anschließend zurückgeben

Mit dem Kommaoperator können Sie auch erst eine Verarbeitung durchführen und anschließend einen Wert zurückgeben. Wie beschrieben wird nur der letzte Ausdruck zurückgegeben, aber alle anderen werden ebenfalls ausgewertet. Beispielsweise können Sie Folgendes tun:

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // the same as return ++x;
}
```

Das ist besonders nützlich für einzeilige [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Im folgenden Beispiel wird mit einem einzigen Aufruf von [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) sowohl die Summe eines Arrays als auch das Quadrat jedes seiner Elemente ermittelt. Andernfalls wären zwei Durchläufe erforderlich: einer mit [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und einer mit `map()`:

```js
let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15
```

### Referenzbindung verwerfen

Der Kommaoperator gibt den letzten Ausdruck immer als _Wert_ statt als _Referenz_ zurück. Dadurch gehen bestimmte Kontextinformationen verloren, etwa die [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung. Ein Eigenschaftszugriff gibt beispielsweise eine Referenz auf die Funktion zurück, die auch das Objekt enthält, auf dem der Zugriff erfolgt. So funktioniert der Aufruf der Eigenschaft wie erwartet. Wird die Methode dagegen von einem Kommaausdruck zurückgegeben, wird die Funktion wie ein eigenständiger Funktionswert aufgerufen. `this` ist dann im Strict Mode `undefined` und außerhalb des Strict Mode das globale Objekt.

Das folgende Beispiel wird außerhalb des Strict Mode ausgeführt:

```js-nolint
const obj = {
  value: "obj",
  method() {
    console.log(this.value);
  },
};

obj.method(); // "obj"
(obj.method)(); // "obj" (the grouping operator still returns the reference)
(0, obj.method)(); // undefined (the comma operator returns a new value)
```

Mit dieser Technik können Sie [`eval()` indirekt aufrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval), da für einen direkten Aufruf von `eval()` der Funktionsaufruf über die Referenz auf die Funktion `eval()` erfolgen muss.

```js-nolint
globalThis.isDirectEval = false;

{
  const isDirectEval = true;
  console.log(eval("isDirectEval")); // true
  console.log((eval)("isDirectEval")); // true (the grouping operator still returns a reference to `eval`)
  console.log((0, eval)("isDirectEval")); // false (the comma operator returns a new value)
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)
- {{Glossary("IIFE", "IIFE")}}
