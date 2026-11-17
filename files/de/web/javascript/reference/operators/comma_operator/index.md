---
title: Kommaoperator (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der **Kommaoperator (`,`)** wertet jeden seiner Operanden von links nach rechts aus und gibt den Wert des letzten Operanden zurück. Er wird häufig verwendet, um im Aktualisierungsausdruck einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife mehrere Aktualisierungen vorzunehmen.

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

- `expr1`, `expr2`, `expr3`, …
  - : Ein oder mehrere Ausdrücke. Der Wert des letzten Ausdrucks wird als Wert des zusammengesetzten Ausdrucks zurückgegeben.

## Beschreibung

Sie können den Kommaoperator verwenden, wenn Sie an einer Stelle, die einen einzelnen Ausdruck erfordert, mehrere Ausdrücke unterbringen möchten. Am häufigsten wird er verwendet, um in einer `for`-Schleife mehrere Aktualisierungen vorzunehmen. Wenn Sie an einer Stelle, die einen einzelnen Ausdruck erfordert, mehrere _Anweisungen_ ausführen möchten, können Sie eine {{Glossary("IIFE", "IIFE")}} verwenden.

Da alle Ausdrücke außer dem letzten ausgewertet und anschließend verworfen werden, müssen diese Ausdrücke Seiteneffekte haben, um nützlich zu sein. Typische Ausdrücke mit Seiteneffekten sind Zuweisungen, Funktionsaufrufe sowie die Operatoren [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) und [`--`](/de/docs/Web/JavaScript/Reference/Operators/Decrement). Auch andere Ausdrücke können Seiteneffekte haben, wenn sie [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typumwandlungen](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) auslösen.

Der Kommaoperator hat die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) aller Operatoren. Wenn Sie einen durch Kommas verbundenen Ausdruck in einen größeren Ausdruck einbinden möchten, müssen Sie ihn in Klammern setzen.

Der Kommaoperator unterscheidet sich grundlegend von Kommas, die an anderen Stellen als syntaktische Trennzeichen verwendet werden. Dazu gehören:

- Elemente in Array-Initialisierungen (`[1, 2, 3]`)
- Eigenschaften in [Objekt-Initialisierungen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) (`{ a: 1, b: 2 }`)
- Parameter in [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) und Funktionsausdrücken (`function f(a, b) { … }`)
- Argumente in Funktionsaufrufen (`f(1, 2)`)
- {{Glossary("Binding", "Binding")}}-Listen in Deklarationen mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) (`const a = 1, b = 2;`)
- Importlisten in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (`import { a, b } from "c";`)
- Exportlisten in [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklarationen (`export { a, b };`)

Obwohl einige dieser Stellen fast alle Arten von Ausdrücken zulassen, akzeptieren sie keine durch Kommas verbundenen Ausdrücke, da diese nicht eindeutig von den syntaktischen Kommatrennzeichen zu unterscheiden wären. In solchen Fällen müssen Sie den durch Kommas verbundenen Ausdruck in Klammern setzen. Das folgende Beispiel ist eine `const`-Deklaration, die zwei Variablen deklariert. Das Komma ist hier kein Kommaoperator:

```js-nolint
const a = 1, b = 2;
```

Das unterscheidet sich vom folgenden Beispiel: Hier ist `b = 2` ein [Zuweisungsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Assignment) und keine Deklaration. `a` erhält den Wert `2`, den Rückgabewert der Zuweisung. Der Wert `1` wird dagegen verworfen:

```js-nolint
const a = (1, b = 2);
```

Kommaoperatoren können nicht als [nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) auftreten.

## Beispiele

### Den Kommaoperator in einer for-Schleife verwenden

Wenn `a` ein zweidimensionales Array mit jeweils 10 Elementen pro Dimension ist, verwendet der folgende Code den Kommaoperator, um `i` zu erhöhen und zugleich `j` zu verringern. So werden die Werte der Diagonalelemente des Arrays ausgegeben:

```js
const a = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, Math.random),
); // A 10×10 array of random numbers

for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

### Zuweisungen mit dem Kommaoperator verbinden

Da Kommas die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) haben – sogar eine niedrigere als Zuweisungen –, können sie mehrere Zuweisungsausdrücke verbinden. Im folgenden Beispiel wird `a` auf den Wert von `b = 3` gesetzt (also auf 3). Anschließend wird der Ausdruck `c = 4` ausgewertet; sein Ergebnis ist der Rückgabewert des gesamten Kommaausdrucks.

```js-nolint
let a, b, c;

a = b = 3, c = 4; // Returns 4
console.log(a); // 3 (left-most)

let x, y, z;

x = (y = 5, z = 6); // Returns 6
console.log(x); // 6 (right-most)
```

### Verarbeiten und anschließend zurückgeben

Mit dem Kommaoperator können Sie auch einen Wert verarbeiten, bevor Sie ein Ergebnis zurückgeben. Wie beschrieben wird nur der Wert des letzten Ausdrucks zurückgegeben, aber alle anderen Ausdrücke werden ebenfalls ausgewertet. Sie können also Folgendes tun:

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // the same as return ++x;
}
```

Das ist besonders für einzeilige [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) nützlich. Im folgenden Beispiel wird ein einziger [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Aufruf verwendet, um sowohl die Summe eines Arrays als auch die Quadrate seiner Elemente zu ermitteln. Andernfalls wären dafür zwei Durchläufe erforderlich: einer mit [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und einer mit `map()`:

```js
let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15
```

### Referenzbindung verwerfen

Der Kommaoperator gibt den letzten Ausdruck immer als _Wert_ und nicht als _Referenz_ zurück. Dadurch gehen bestimmte Kontextinformationen verloren, etwa die [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung. Ein Eigenschaftszugriff liefert beispielsweise eine Referenz auf die Funktion, die auch das Objekt enthält, über das auf die Eigenschaft zugegriffen wurde. So funktioniert ein Aufruf der Eigenschaft korrekt. Wird die Methode dagegen von einem Kommaausdruck zurückgegeben, wird die Funktion wie ein eigenständiger Funktionswert aufgerufen. Im strikten Modus ist `this` dann `undefined`, außerhalb des strikten Modus ist es das globale Objekt.

Das folgende Beispiel wird außerhalb des strikten Modus ausgeführt:

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

Mit dieser Technik können Sie [indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) verwenden, denn direktes eval setzt voraus, dass der Funktionsaufruf über die Referenz auf die Funktion `eval()` erfolgt.

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
