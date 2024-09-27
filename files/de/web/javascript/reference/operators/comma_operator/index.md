---
title: Kommaoperator (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Operators")}}

Der **Kommaoperator (`,`)** wertet jedes seiner Operanden (von links nach rechts) aus und gibt den Wert des letzten Operanden zurück. Dies wird häufig verwendet, um mehreren Aktualisierungen in einem [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleifen-Ausdruck zu ermöglichen.

{{EmbedInteractiveExample("pages/js/expressions-commaoperators.html")}}

## Syntax

```js-nolint
expr1, expr2, expr3/* , … */
```

### Parameter

- `expr1`, `expr2`, `expr3`, …
  - : Eine oder mehrere Ausdrücke, der letzte davon wird als Wert des zusammengesetzten Ausdrucks zurückgegeben.

## Beschreibung

Sie können den Kommaoperator verwenden, wenn Sie mehrere Ausdrücke an einer Stelle einfügen möchten, die einen einzelnen Ausdruck erfordert. Die häufigste Verwendung dieses Operators ist die Bereitstellung mehrerer Aktualisierungen in einer `for`-Schleife.

Da alle Ausdrücke mit Ausnahme des letzten ausgewertet und dann verworfen werden, müssen diese Ausdrücke Seiteneffekte haben, um nützlich zu sein. Häufige Ausdrücke mit Seiteneffekten sind Zuweisungen, Funktionsaufrufe und die [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment)- und [`--`](/de/docs/Web/JavaScript/Reference/Operators/Decrement)-Operatoren. Andere können ebenfalls Seiteneffekte haben, wenn sie [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typumwandlungen](/de/docs/Web/JavaScript/Data_structures#type_coercion) auslösen.

Der Kommaoperator hat die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) aller Operatoren. Wenn Sie einen Komma-verbundenen Ausdruck in einen größeren Ausdruck einfügen möchten, müssen Sie ihn einklammern.

Der Kommaoperator unterscheidet sich vollständig von Kommas, die an anderen Stellen als syntaktische Trennzeichen verwendet werden, darunter:

- Elemente in Array-Initialisierungen (`[1, 2, 3]`)
- Eigenschaften in [Objektinitialisierungen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) (`{ a: 1, b: 2 }`)
- Parameter in [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)/Ausdrücken (`function f(a, b) { … }`)
- Argumente in Funktionsaufrufen (`f(1, 2)`)
- [Bindungs-](/de/docs/Glossary/Binding) Listen in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Deklarationen (`const a = 1, b = 2;`)
- Importlisten in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklarationen (`import { a, b } from "c";`)
- Exportlisten in [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Deklarationen (`export { a, b };`)

In der Tat, obwohl einige dieser Orte fast alle Ausdrücke akzeptieren, akzeptieren sie keine Komma-verbundenen Ausdrücke, da dies mit den syntaktischen Kommatrennzeichen mehrdeutig wäre. In diesem Fall müssen Sie den Komma-verbundenen Ausdruck einklammern. Zum Beispiel ist das folgende eine `const`-Deklaration, die zwei Variablen deklariert, wobei das Komma nicht der Kommaoperator ist:

```js-nolint
const a = 1, b = 2;
```

Es unterscheidet sich von dem folgenden, wo `b = 2` ein [Zuweisungsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Assignment) ist, keine Deklaration. Der Wert von `a` ist `2`, der Rückgabewert der Zuweisung, während der Wert von `1` verworfen wird:

```js-nolint
const a = (1, b = 2);
```

Kommaoperatoren können nicht als [nachgestellte Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) erscheinen.

## Beispiele

### Verwendung des Kommaoperators in einer for-Schleife

Wenn `a` ein zweidimensionales Array mit 10 Elementen auf jeder Seite ist, verwendet der folgende Code den Kommaoperator, um `i` zu inkrementieren und `j` gleichzeitig zu dekrementieren, und druckt so die Werte der Diagonalelelemente im Array:

```js
const a = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, Math.random),
); // A 10×10 array of random numbers

for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

### Verwenden des Kommaoperators zur Verbindung von Zuweisungen

Da Kommata die niedrigste [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) haben — sogar niedriger als Zuweisungen — können Kommata verwendet werden, um mehrere Zuweisungsausdrücke zu verbinden. Im folgenden Beispiel wird `a` auf den Wert von `b = 3` gesetzt (der 3 ist). Dann wird der Ausdruck `c = 4` ausgewertet und sein Ergebnis wird der Rückgabewert des gesamten Kommaaussdrucks.

```js-nolint
let a, b, c;

a = b = 3, c = 4; // Returns 4
console.log(a); // 3 (left-most)

let x, y, z;

x = (y = 5, z = 6); // Returns 6
console.log(x); // 6 (right-most)
```

### Verarbeiten und dann zurückgeben

Ein weiteres Beispiel, das man mit dem Kommaoperator machen könnte, ist das Verarbeiten vor dem Zurückgeben. Wie gesagt, wird nur das letzte Element zurückgegeben, aber alle anderen werden ebenfalls ausgewertet. Also könnte man folgendes tun:

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // the same as return ++x;
}
```

Dies ist besonders nützlich für einzeilige [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Im folgenden Beispiel wird ein einzelnes [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwendet, um sowohl die Summe eines Arrays als auch die Quadrate seiner Elemente zu erhalten, was ansonsten zwei Iterationen erfordern würde, eine mit [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und eine mit `map()`:

```js
let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15
```

### Verwerfen der Referenzbindung

Der Kommaoperator gibt immer den letzten Ausdruck als _Wert_ statt als _Referenz_ zurück. Dies führt dazu, dass einige kontextbezogene Informationen wie die [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung verloren gehen. Zum Beispiel gibt ein Eigenschaftsaufruf eine Referenz auf die Funktion zurück, die sich auch das Objekt merkt, auf dem sie aufgerufen wird, sodass der Aufruf der Eigenschaft ordnungsgemäß funktioniert. Wenn die Methode aus einem Kommaausdruck zurückgegeben wird, wird die Funktion so aufgerufen, als wäre es ein neuer Funktionswert, und `this` ist `undefined`.

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

Sie können mit dieser Technik einen [indirekten eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) aufrufen, da ein direkter eval erfordert, dass der Funktionsaufruf auf der Referenz zur `eval()`-Funktion stattfindet.

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
