---
title: Komma-Operator (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Komma (`,`)**-Operator wertet jeden seiner Operanden (von links nach rechts) aus und gibt den Wert des letzten Operanden zurück. Dies wird häufig verwendet, um mehrere Aktualisierungen einem [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleifen-Nachtrag bereitzustellen.

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
  - : Eine oder mehrere Ausdrücke, von denen der letzte als Wert des zusammengesetzten Ausdrucks zurückgegeben wird.

## Beschreibung

Sie können den Komma-Operator verwenden, wenn Sie mehrere Ausdrücke an einer Stelle einfügen möchten, die einen einzelnen Ausdruck erfordert. Die häufigste Verwendung dieses Operators ist die Bereitstellung mehrerer Aktualisierungen in einer `for`-Schleife. Für ein Idiom, das mehrere _Anweisungen_ an einer Stelle erlaubt, die einen einzelnen Ausdruck erfordert, können Sie ein {{Glossary("IIFE", "IIFE")}} verwenden.

Da alle Ausdrücke außer dem letzten ausgewertet und dann verworfen werden, müssen diese Ausdrücke Nebenwirkungen haben, um nützlich zu sein. Häufige Ausdrücke, die Nebenwirkungen haben, sind Zuweisungen, Funktionsaufrufe und die [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment)- und [`--`](/de/docs/Web/JavaScript/Reference/Operators/Decrement)-Operatoren. Andere können ebenfalls Nebenwirkungen haben, wenn sie [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typumwandlungen](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) auslösen.

Der Komma-Operator hat die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) aller Operatoren. Wenn Sie einen kommagetrennten Ausdruck in einen größeren Ausdruck integrieren möchten, müssen Sie ihn in Klammern setzen.

Der Komma-Operator ist völlig anders als Kommas, die als syntaktische Trennzeichen an anderen Stellen verwendet werden, wie z.B.:

- Elemente in Array-Initialisierungen (`[1, 2, 3]`)
- Eigenschaften in [Objektinitialisierungen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) (`{ a: 1, b: 2 }`)
- Parameter in [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)/-ausdrücken (`function f(a, b) { … }`)
- Argumente in Funktionsaufrufen (`f(1, 2)`)
- {{Glossary("Binding", "Binde")}}-Listen in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Deklarationen (`const a = 1, b = 2;`)
- Importlisten in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (`import { a, b } from "c";`)
- Exportlisten in [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklarationen (`export { a, b };`)

Tatsächlich akzeptieren, obwohl einige dieser Orte fast alle Ausdrücke akzeptieren, kommagetrennte Ausdrücke nicht, da dies mit syntaktischen Komma-Trennzeichen nicht eindeutig wäre. In diesem Fall müssen Sie den kommagetrennten Ausdruck einklammern. Zum Beispiel ist folgendes eine `const`-Deklaration, die zwei Variablen deklariert, wobei das Komma nicht der Komma-Operator ist:

```js-nolint
const a = 1, b = 2;
```

Dies unterscheidet sich von folgendem, wo `b = 2` ein [Zuweisungsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Assignment) und keine Deklaration ist. Der Wert von `a` ist `2`, der Rückgabewert der Zuweisung, während der Wert von `1` verworfen wird:

```js-nolint
const a = (1, b = 2);
```

Komma-Operatoren können nicht als [nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) erscheinen.

## Beispiele

### Verwendung des Komma-Operators in einer for-Schleife

Wenn `a` ein 2-dimensionales Array mit 10 Elementen auf jeder Seite ist, verwendet der folgende Code den Komma-Operator, um `i` zu erhöhen und `j` gleichzeitig zu verringern, und druckt somit die Werte der diagonalen Elemente im Array:

```js
const a = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, Math.random),
); // A 10×10 array of random numbers

for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

### Verwendung des Komma-Operators zur Verknüpfung von Zuweisungen

Da Kommas die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) haben – sogar niedriger als Zuweisungen – können Kommas verwendet werden, um mehrere Zuweisungsausdrücke zu verknüpfen. Im folgenden Beispiel wird `a` auf den Wert von `b = 3` gesetzt (welcher 3 ist). Dann wird der Ausdruck `c = 4` ausgewertet, und sein Ergebnis wird zum Rückgabewert des gesamten Komma-Ausdrucks.

```js-nolint
let a, b, c;

a = b = 3, c = 4; // Returns 4
console.log(a); // 3 (left-most)

let x, y, z;

x = (y = 5, z = 6); // Returns 6
console.log(x); // 6 (right-most)
```

### Verarbeitung und dann Rückgabe

Ein weiteres Beispiel, das man mit dem Komma-Operator machen könnte, ist die Verarbeitung vor der Rückgabe. Wie gesagt, nur das letzte Element wird zurückgegeben, aber alle anderen werden ebenfalls ausgewertet. Man könnte also folgendes tun:

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // the same as return ++x;
}
```

Dies ist besonders nützlich für einzeilige [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Das folgende Beispiel verwendet ein einzelnes [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), um sowohl die Summe eines Arrays als auch die Quadrate seiner Elemente zu erhalten, was sonst zwei Iterationen erfordern würde, eine mit [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und eine mit `map()`:

```js
let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15
```

### Verwerfen der Referenzbindung

Der Komma-Operator gibt immer den letzten Ausdruck als _Wert_ und nicht als _Referenz_ zurück. Dies führt dazu, dass einige Kontextinformationen wie die [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung verloren gehen. Zum Beispiel gibt ein Eigenschaftszugriff eine Referenz auf die Funktion zurück, die sich auch das Objekt merkt, auf dem sie aufgerufen wird, sodass der Aufruf der Eigenschaft korrekt funktioniert. Wenn die Methode aus einem Komma-Ausdruck zurückgegeben wird, wird die Funktion so aufgerufen, als wäre sie ein neuer Funktionswert, und `this` ist `undefined`.

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

Sie können mit dieser Technik einen [indirekten eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) betreten, da direktes eval erfordert, dass der Funktionsaufruf auf der Referenz zur `eval()`-Funktion erfolgt.

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
