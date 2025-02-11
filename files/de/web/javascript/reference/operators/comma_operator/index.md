---
title: Komma-Operator (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Komma (`,`)**-Operator wertet jeden seiner Operanden aus (von links nach rechts) und gibt den Wert des letzten Operanden zurück. Dies wird häufig verwendet, um mehrere Aktualisierungen im "Nachsatz" einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife bereitzustellen.

{{InteractiveExample("JavaScript Demo: Expressions - Comma operator")}}

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
  - : Eine oder mehrere Ausdrücke, wobei der letzte als Wert des zusammengesetzten Ausdrucks zurückgegeben wird.

## Beschreibung

Der Komma-Operator kann verwendet werden, wenn mehrere Ausdrücke an einer Stelle eingefügt werden sollen, die normalerweise nur einen einzelnen Ausdruck benötigt. Die häufigste Verwendung dieses Operators ist die Angabe mehrerer Aktualisierungen in einer `for`-Schleife. Um mehrere _Anweisungen_ an einer Stelle zu erlauben, an der ein einzelner Ausdruck erforderlich ist, können Sie eine {{Glossary("IIFE", "IIFE")}} verwenden.

Da alle Ausdrücke außer dem letzten ausgewertet und dann verworfen werden, müssen diese Ausdrücke Seiteneffekte aufweisen, um nützlich zu sein. Gewöhnliche Ausdrücke mit Seiteneffekten sind Zuweisungen, Funktionsaufrufe und die Operatoren [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) sowie [`--`](/de/docs/Web/JavaScript/Reference/Operators/Decrement). Andere können Seiteneffekte haben, wenn sie [Getters](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typkonvertierungen](/de/docs/Web/JavaScript/Data_structures#type_coercion) auslösen.

Der Komma-Operator hat die niedrigste [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) aller Operatoren. Wenn Sie einen durch Kommas verbundenen Ausdruck in einen größeren Ausdruck einfügen möchten, müssen Sie ihn in Klammern setzen.

Der Komma-Operator ist völlig verschieden von Kommas, die als syntaktische Trennzeichen an anderen Stellen verwendet werden, zum Beispiel:

- Elemente in Array-Initialisierungen (`[1, 2, 3]`)
- Eigenschaften in [Objekt-Initialisierungen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) (`{ a: 1, b: 2 }`)
- Parameter in [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)/-Ausdrücken (`function f(a, b) { … }`)
- Argumente in Funktionsaufrufen (`f(1, 2)`)
- {{Glossary("Binding", "Binding")}}-Listen in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-, [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)- oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Deklarationen (`const a = 1, b = 2;`)
- Importlisten in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (`import { a, b } from "c";`)
- Exportlisten in [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklarationen (`export { a, b };`)

Tatsächlich akzeptieren einige dieser Stellen zwar nahezu alle Ausdrücke, jedoch keine durch Kommas verbundenen Ausdrücke, da dies mit den syntaktischen Kommatrennzeichen verwechselt werden könnte. In diesem Fall muss der durch Kommas verbundene Ausdruck in Klammern gesetzt werden. Zum Beispiel ist das folgende eine `const`-Deklaration, die zwei Variablen deklariert, wobei das Komma nicht der Komma-Operator ist:

```js-nolint
const a = 1, b = 2;
```

Dies unterscheidet sich von folgendem, bei dem `b = 2` ein [Zuweisungsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Assignment) ist, keine Deklaration. Der Wert von `a` ist `2`, der Rückgabewert der Zuweisung, während der Wert von `1` verworfen wird:

```js-nolint
const a = (1, b = 2);
```

Komma-Operatoren können nicht als [abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) auftreten.

## Beispiele

### Verwendung des Komma-Operators in einer for-Schleife

Wenn `a` ein zweidimensionales Array mit 10 Elementen auf jeder Seite ist, verwendet der folgende Code den Komma-Operator, um `i` zu inkrementieren und `j` zu dekrementieren, wodurch die Werte der Diagonalelemente des Arrays ausgegeben werden:

```js
const a = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, Math.random),
); // A 10×10 array of random numbers

for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

### Verwendung des Komma-Operators zur Verknüpfung von Zuweisungen

Da Kommas die niedrigste [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) haben – sogar noch niedriger als Zuweisungen –, können sie verwendet werden, um mehrere Zuweisungsausdrücke zu verknüpfen. Im folgenden Beispiel wird `a` auf den Wert von `b = 3` (also 3) gesetzt. Dann wird der Ausdruck `c = 4` ausgewertet, und das Ergebnis wird zum Rückgabewert des gesamten Komma-Ausdrucks.

```js-nolint
let a, b, c;

a = b = 3, c = 4; // Returns 4
console.log(a); // 3 (left-most)

let x, y, z;

x = (y = 5, z = 6); // Returns 6
console.log(x); // 6 (right-most)
```

### Verarbeitung und dann Rückgabe

Ein weiteres Beispiel für die Verwendung des Komma-Operators ist eine Verarbeitung vor der Rückgabe. Wie erwähnt, wird nur das letzte Element zurückgegeben, aber alle anderen werden ebenfalls ausgewertet. So könnte man z.B.:

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // the same as return ++x;
}
```

Dies ist besonders nützlich für einzeilige [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Im folgenden Beispiel wird eine einzige [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode verwendet, um sowohl die Summe eines Arrays als auch die Quadrate seiner Elemente zu erhalten, was ansonsten zwei Iterationen erfordern würde, eine mit [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und eine mit `map()`:

```js
let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15
```

### Verwerfen der Referenzbindung

Der Komma-Operator gibt immer den letzten Ausdruck als _Wert_ und nicht als _Referenz_ zurück. Dies führt dazu, dass bestimmte kontextbezogene Informationen wie die [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung verloren gehen. Zum Beispiel gibt ein Property-Zugriff eine Referenz auf die Funktion zurück, die sich auch das Objekt merkt, auf dem darauf zugegriffen wurde, sodass der Aufruf der Eigenschaft korrekt funktioniert. Wenn die Methode aus einem Komma-Ausdruck zurückgegeben wird, wird die Funktion so aufgerufen, als wäre sie ein neuer Funktionswert, und `this` ist `undefined`.

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

Mit dieser Technik kann ein [indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) erreicht werden, da direktes eval erfordert, dass der Funktionsaufruf auf die Referenz der `eval()`-Funktion erfolgt.

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
