---
title: Komma-Operator (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Operators")}}

Der **Komma (`,`)**-Operator wertet jeden seiner Operanden (von links nach rechts) aus und gibt den Wert des letzten Operanden zurück. Dies wird häufig verwendet, um mehrere Aktualisierer für die Nachbedingung einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife bereitzustellen.

{{EmbedInteractiveExample("pages/js/expressions-commaoperators.html")}}

## Syntax

```js-nolint
expr1, expr2, expr3/* , … */
```

### Parameter

- `expr1`, `expr2`, `expr3`, …
  - : Eine oder mehrere Ausdrücke, von denen der letzte als Wert des zusammengesetzten Ausdrucks zurückgegeben wird.

## Beschreibung

Sie können den Komma-Operator verwenden, wenn Sie mehrere Ausdrücke an einer Stelle einfügen möchten, die einen einzelnen Ausdruck erfordert. Die häufigste Verwendung dieses Operators besteht darin, mehrere Aktualisierer in einer `for`-Schleife bereitzustellen.

Da alle Ausdrücke außer dem letzten ausgewertet und dann verworfen werden, müssen diese Ausdrücke Nebeneffekte haben, um nützlich zu sein. Häufige Ausdrücke, die Nebeneffekte haben, sind Zuweisungen, Funktionsaufrufe und die [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment)- und [`--`](/de/docs/Web/JavaScript/Reference/Operators/Decrement)-Operatoren. Andere können ebenfalls Nebeneffekte haben, wenn sie [Getters](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typzwang](/de/docs/Web/JavaScript/Data_structures#type_coercion) auslösen.

Der Komma-Operator hat die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) aller Operatoren. Wenn Sie einen kommagetrennten Ausdruck in einen größeren Ausdruck einbauen möchten, müssen Sie ihn in Klammern setzen.

Der Komma-Operator ist völlig anders als Kommas, die an anderen Stellen als syntaktische Trennzeichen verwendet werden, darunter:

- Elemente in Array-Initialisierungen (`[1, 2, 3]`)
- Eigenschaften in [Objektinitialisierungen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) (`{ a: 1, b: 2 }`)
- Parameter in [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)/-ausdrücken (`function f(a, b) { … }`)
- Argumente in Funktionsaufrufen (`f(1, 2)`)
- {{Glossary("Binding")}}-Listen in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Deklarationen (`const a = 1, b = 2;`)
- Importlisten in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (`import { a, b } from "c";`)
- Exportlisten in [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklarationen (`export { a, b };`)

Tatsächlich, obwohl einige dieser Stellen fast alle Ausdrücke akzeptieren, akzeptieren sie keine kommagetrennten Ausdrücke, da dies mit den syntaktischen Kommatrennzeichen mehrdeutig wäre. In diesem Fall müssen Sie den kommagetrennten Ausdruck in Klammern setzen. Zum Beispiel ist die folgende eine `const`-Deklaration, die zwei Variablen deklariert, wobei das Komma nicht der Komma-Operator ist:

```js-nolint
const a = 1, b = 2;
```

Es ist anders als das Folgende, bei dem `b = 2` ein [Zuweisungsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Assignment) ist, keine Deklaration. Der Wert von `a` ist `2`, der Rückgabewert der Zuweisung, während der Wert von `1` verworfen wird:

```js-nolint
const a = (1, b = 2);
```

Komma-Operatoren können nicht als [abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) erscheinen.

## Beispiele

### Verwendung des Komma-Operators in einer for-Schleife

Wenn `a` ein zweidimensionales Array mit 10 Elementen auf jeder Seite ist, verwendet der folgende Code den Komma-Operator, um `i` zu inkrementieren und `j` zu dekrementieren, und druckt so die Werte der Diagonalelemente im Array:

```js
const a = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, Math.random),
); // Ein 10×10-Array mit Zufallszahlen

for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

### Verwendung des Komma-Operators, um Zuweisungen zu verbinden

Da Kommas die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) haben - sogar niedriger als Zuweisungen - können Kommas verwendet werden, um mehrere Zuweisungsausdrücke zu verbinden. Im folgenden Beispiel wird `a` auf den Wert von `b = 3` gesetzt (der 3 ist). Dann wird der Ausdruck `c = 4` ausgewertet und sein Ergebnis wird der Rückgabewert des gesamten Kommaausdrucks.

```js-nolint
let a, b, c;

a = b = 3, c = 4; // Gibt 4 zurück
console.log(a); // 3 (das linkeste)

let x, y, z;

x = (y = 5, z = 6); // Gibt 6 zurück
console.log(x); // 6 (das rechteste)
```

### Verarbeitung und dann Rückgabe

Ein weiteres Beispiel, das man mit dem Komma-Operator machen könnte, ist das Verarbeiten vor der Rückgabe. Wie gesagt, nur das letzte Element wird zurückgegeben, aber alle anderen werden ebenfalls ausgewertet. Man könnte also tun:

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // das Gleiche wie return ++x;
}
```

Dies ist besonders nützlich für einzeilige [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Das folgende Beispiel verwendet eine einzelne [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), um sowohl die Summe eines Arrays als auch die Quadrate seiner Elemente zu erhalten, was sonst zwei Iterationen erfordern würde, eine mit [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und eine mit `map()`:

```js
let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15
```

### Verwerfen der Referenzbindung

Der Komma-Operator gibt immer den letzten Ausdruck als _Wert_ statt als _Referenz_ zurück. Dies führt dazu, dass einige kontextuelle Informationen wie die [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung verloren gehen. Beispielsweise gibt ein Property-Zugriff eine Referenz auf die Funktion zurück, die sich auch an das Objekt erinnert, auf dem es aufgerufen wird, so dass der Aufruf der Property ordnungsgemäß funktioniert. Wenn die Methode aus einem Kommaausdruck zurückgegeben wird, wird die Funktion aufgerufen, als wäre sie ein neuer Funktionswert, und `this` ist `undefined`.

```js-nolint
const obj = {
  value: "obj",
  method() {
    console.log(this.value);
  },
};

obj.method(); // "obj"
(obj.method)(); // "obj" (der Gruppierungsoperator gibt immer noch die Referenz zurück)
(0, obj.method)(); // undefined (der Komma-Operator gibt einen neuen Wert zurück)
```

Sie können mit dieser Technik [indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) aufrufen, da direktes eval erfordert, dass der Funktionsaufruf auf der Referenz zur `eval()`-Funktion erfolgt.

```js-nolint
globalThis.isDirectEval = false;

{
  const isDirectEval = true;
  console.log(eval("isDirectEval")); // true
  console.log((eval)("isDirectEval")); // true (der Gruppierungsoperator gibt immer noch eine Referenz zu `eval` zurück)
  console.log((0, eval)("isDirectEval")); // false (der Komma-Operator gibt einen neuen Wert zurück)
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)
