---
title: Kommaoperator (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **Kommaoperator (`,`)** wertet jeden seiner Operanden (von links nach rechts) aus und gibt den Wert des letzten Operanden zurück. Dies wird häufig verwendet, um einem [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleifen-Nachbereitung mehrere Aktualisierungen bereitzustellen.

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
  - : Eine oder mehrere Ausdrücke, von denen der letzte als Wert des zusammengesetzten Ausdrucks zurückgegeben wird.

## Beschreibung

Sie können den Kommaoperator verwenden, wenn Sie mehrere Ausdrücke in einem Bereich einfügen möchten, der einen einzelnen Ausdruck erfordert. Der häufigste Einsatz dieses Operators ist das Bereitstellen mehrerer Aktualisierungen in einer `for`-Schleife. Für ein Idiom, das mehrere _Anweisungen_ in einem Bereich erlaubt, der einen einzelnen Ausdruck erfordert, können Sie eine {{Glossary("IIFE", "IIFE")}} verwenden.

Da alle Ausdrücke außer dem letzten ausgewertet und dann verworfen werden, müssen diese Ausdrücke Seiteneffekte haben, um nützlich zu sein. Häufige Ausdrücke mit Seiteneffekten sind Zuweisungen, Funktionsaufrufe und die Operatoren [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) und [`--`](/de/docs/Web/JavaScript/Reference/Operators/Decrement). Andere können ebenfalls Seiteneffekte haben, wenn sie [Getters](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typkonvertierungen](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) auslösen.

Der Kommaoperator hat die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) aller Operatoren. Wenn Sie einen durch Kommas verbundenen Ausdruck in einen größeren Ausdruck integrieren möchten, müssen Sie ihn klammern.

Der Kommaoperator unterscheidet sich vollständig von Kommas, die als syntaktische Trennzeichen an anderen Stellen verwendet werden, dazu gehören:

- Elemente in Array-Initiatoren (`[1, 2, 3]`)
- Eigenschaften in [Objekt-Initiatoren](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) (`{ a: 1, b: 2 }`)
- Parameter in [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)/-ausdrücken (`function f(a, b) { … }`)
- Argumente in Funktionsaufrufen (`f(1, 2)`)
- {{Glossary("Binding", "Bindungs")}}-listen in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Deklarationen (`const a = 1, b = 2;`)
- Importlisten in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (`import { a, b } from "c";`)
- Exportlisten in [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklarationen (`export { a, b };`)

Tatsächlich akzeptieren einige dieser Orte fast alle Ausdrücke, jedoch keine durch Kommas verbundenen Ausdrücke, da dies mit den syntaktischen Kommata als Trenner verwechslungsanfällig wäre. In diesem Fall müssen Sie den durch Kommas verbundenen Ausdruck klammern. Das folgende Beispiel zeigt eine `const`-Deklaration, die zwei Variablen deklariert, wobei das Komma nicht der Kommaoperator ist:

```js-nolint
const a = 1, b = 2;
```

Es unterscheidet sich von folgendem, bei dem `b = 2` ein [Zuweisungsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Assignment) und keine Deklaration ist. Der Wert von `a` ist `2`, der Rückgabewert der Zuweisung, während der Wert von `1` verworfen wird:

```js-nolint
const a = (1, b = 2);
```

Kommaoperatoren können nicht als [Schlusskommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) erscheinen.

## Beispiele

### Verwendung des Kommaoperators in einer for-Schleife

Wenn `a` ein 2-dimensionales Array mit 10 Elementen auf jeder Seite ist, verwendet der folgende Code den Kommaoperator, um `i` zu inkrementieren und `j` zu dekrementieren, wodurch die Werte der diagonalen Elemente im Array gedruckt werden:

```js
const a = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, Math.random),
); // A 10×10 array of random numbers

for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

### Verwenden des Kommaoperators zum Verbinden von Zuweisungen

Da Kommas die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) haben — sogar niedriger als Zuweisungen — können sie verwendet werden, um mehrere Zuweisungsausdrücke zu verbinden. Im folgenden Beispiel wird `a` auf den Wert von `b = 3` gesetzt (was 3 ist). Dann wird der `c = 4`-Ausdruck ausgewertet und sein Ergebnis wird der Rückgabewert des gesamten Kommaausdrucks.

```js-nolint
let a, b, c;

a = b = 3, c = 4; // Returns 4
console.log(a); // 3 (left-most)

let x, y, z;

x = (y = 5, z = 6); // Returns 6
console.log(x); // 6 (right-most)
```

### Verarbeitung und dann Rückgabe

Ein weiteres Beispiel für die Verwendung des Kommaoperators ist die Verarbeitung vor der Rückgabe. Wie bereits erwähnt, wird nur das letzte Element zurückgegeben, aber alle anderen werden ebenfalls ausgewertet. So könnte man folgendes tun:

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // the same as return ++x;
}
```

Dies ist besonders nützlich für einzeilige [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Das folgende Beispiel verwendet einen einzigen [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), um sowohl die Summe eines Arrays als auch die Quadrate seiner Elemente zu erhalten, was sonst zwei Durchläufe erfordern würde, einen mit [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und einen mit `map()`:

```js
let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15
```

### Verwerfen der Referenzbindung

Der Kommaoperator gibt immer den letzten Ausdruck als _Wert_ statt als _Referenz_ zurück. Dies führt dazu, dass einige kontextbezogene Informationen, wie die [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung, verloren gehen. Ein Beispiel ist der Zugriff auf eine Eigenschaft, die eine Referenz zur Funktion zurückgibt, die sich auch das Objekt merkt, auf dem sie zugegriffen wird, damit der Aufruf der Eigenschaft korrekt funktioniert. Wenn die Methode aus einem Kommaausdruck zurückgegeben wird, wird die Funktion aufgerufen, als ob sie ein neuer Funktionswert wäre, und `this` ist `undefined`.

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

Sie können mit dieser Technik [indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) ausführen, da direktes eval erfordert, dass der Funktionsaufruf auf die Referenz der `eval()`-Funktion erfolgt.

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
