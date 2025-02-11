---
title: Spread-Syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Die **Spread-Syntax (`...`)** ermöglicht es, ein iterierbares Objekt, wie ein Array oder einen String, in Stellen zu expandieren, wo null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paare dem erstellten Objekt hinzu.

Die Spread-Syntax sieht genauso aus wie die Rest-Syntax. In gewisser Weise ist die Spread-Syntax das Gegenteil der Rest-Syntax. Spread-Syntax "entpackt" ein Array in dessen Elemente, während Rest-Syntax mehrere Elemente "sammelt" und in ein einzelnes Element "verdichtet". Siehe [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property).

{{InteractiveExample("JavaScript Demo: Expressions - Spread syntax")}}

```js interactive-example
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
```

## Syntax

```js-nolint
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

## Beschreibung

Die Spread-Syntax kann verwendet werden, wenn alle Elemente aus einem Objekt oder Array in ein neues Array oder Objekt einbezogen werden sollen oder wenn sie einem Funktionsaufruf als Argumente einzeln angewendet werden sollen. Es gibt drei verschiedene Einsatzmöglichkeiten für die Spread-Syntax:

- [Funktionsargumente](#spread_in_funktionsaufrufen) (`myFunction(a, ...iterableObj, b)`)
- [Array-Literale](#spread_in_array-literalen) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Objektliterale](#spread_in_objektliteralen) (`{ ...obj, key: 'value' }`)

Obwohl die Syntax gleich aussieht, unterscheiden sich die Semantiken leicht.

Nur [iterierbare](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Werte, wie {{jsxref("Array")}} und {{jsxref("String")}}, können in [Array-Literalen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und Argumentlisten expandiert werden. Viele Objekte sind nicht iterierbar, einschließlich aller [einfachen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), die keine [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode besitzen:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

Andererseits enumeriert das Expanding in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) die eigenen Eigenschaften des Werts. Bei typischen Arrays sind alle Indizes eigene Eigenschaften, die enumerable sind, sodass Arrays in Objekte expandiert werden können.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Alle [primitiven Werte](/de/docs/Web/JavaScript/Data_structures#primitive_values) können in Objekte expandiert werden. Nur Strings haben enumerable eigene Eigenschaften. Das Expandieren aller anderen Typen erzeugt keine Eigenschaften im neuen Objekt.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

Beim Einsatz der Spread-Syntax für Funktionsaufrufe ist Vorsicht geboten, da die Gefahr besteht, das Argumentlängenlimit des JavaScript-Engines zu überschreiten. Weitere Details finden Sie unter {{jsxref("Function.prototype.apply()")}}.

## Beispiele

### Spread in Funktionsaufrufen

#### Apply() ersetzen

Es ist üblich, {{jsxref("Function.prototype.apply()")}} in Fällen zu verwenden, in denen die Elemente eines Arrays als Argumente an eine Funktion übergeben werden sollen.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit der Spread-Syntax kann obiges wie folgt geschrieben werden:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Jedes Argument in der Argumentliste kann die Spread-Syntax verwenden, und diese kann auch mehrfach angewendet werden.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Apply für den new-Operator

Beim Aufrufen eines Konstruktors mit {{jsxref("Operators/new", "new")}} ist es nicht möglich, direkt ein Array und `apply()` zu verwenden, da `apply()` die Ziel-Funktion ausführt, anstatt sie zu konstruieren. Dies bedeutet unter anderem, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist. Mit der Spread-Syntax kann jedoch ein Array leicht mit `new` verwendet werden:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread in Array-Literalen

#### Ein mächtigeres Array-Literal

Ohne Spread-Syntax reicht die Array-Literal-Syntax nicht aus, um ein neues Array zu erstellen, das ein bestehendes Array als einen Teil davon nutzt. Stattdessen muss imperativer Code verwendet werden, einschließlich {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}} usw. Mit der Spread-Syntax wird dies deutlich kürzer:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Genauso wie Spread in Argumentlisten kann `...` überall im Array-Literal verwendet werden und auch mehrfach vorkommen.

#### Ein Array kopieren

Mit der Spread-Syntax können Sie eine {{Glossary("shallow_copy", "flache Kopie")}} eines Arrays erstellen. Jedes Array-Element behält dabei seine Identität und wird nicht kopiert.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

Die Spread-Syntax kopiert effektiv nur eine Ebene tief beim Kopieren eines Arrays. Daher ist sie möglicherweise ungeeignet zum Kopieren von mehrdimensionalen Arrays. Das Gleiche gilt für {{jsxref("Object.assign()")}} — keine native JavaScript-Operation unterstützt ein tiefes Klonen. Die Web-API-Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) ermöglicht das tiefe Kopieren von Werten bestimmter [unterstützter Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). Weitere Details finden Sie unter {{Glossary("Shallow_copy", "flache Kopie")}}.

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
```

#### Ein besserer Weg, Arrays zu verbinden

{{jsxref("Array.prototype.concat()")}} wird oft verwendet, um ein Array an das Ende eines existierenden Arrays anzufügen. Ohne Spread-Syntax funktioniert das so:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Mit der Spread-Syntax wird dies zu:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} wird oft verwendet, um ein Array mit Werten am Anfang eines bestehenden Arrays einzufügen. Ohne Spread-Syntax funktioniert das so:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

Mit der Spread-Syntax wird dies zu:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> [!NOTE]
> Im Gegensatz zu `unshift()` wird hierbei ein neues `arr1` erstellt, anstatt das ursprüngliche `arr1`-Array in-place zu verändern.

#### Bedingtes Hinzufügen von Werten zu einem Array

Sie können ein Element in einem Array-Literal abhängig von einer Bedingung hinzufügen oder weglassen, indem Sie einen [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

Wenn die Bedingung `false` ist, erweitern wir ein leeres Array, sodass nichts zum endgültigen Array hinzugefügt wird. Beachten Sie, dass dies sich von Folgendem unterscheidet:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In diesem Fall wird ein zusätzliches `undefined`-Element hinzugefügt, wenn `isSummer` `false` ist. Dieses Element wird dann von Methoden wie {{jsxref("Array.prototype.map()")}} besucht.

### Spread in Objektliteralen

#### Objekte kopieren und zusammenführen

Mit der Spread-Syntax können Sie mehrere Objekte in ein neues Objekt zusammenführen.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Ein einziger Spread erstellt eine flache Kopie des ursprünglichen Objekts (aber ohne nicht aufzählbare Eigenschaften und ohne das Prototyp zu kopieren), ähnlich einem [Kopieren eines Arrays](#ein_array_kopieren).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Eigenschaften überschreiben

Wenn ein Objekt in ein anderes Objekt expandiert wird oder mehrere Objekte in ein Objekt expandiert werden und dabei Eigenschaften mit gleichen Namen auftreten, wird die Eigenschaft anhand des zuletzt zugewiesenen Wertes übernommen, während die Position unverändert bleibt.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Bedingtes Hinzufügen von Eigenschaften zu einem Objekt

Man kann ein Element basierend auf einer Bedingung in einem Objektliteral hinzufügen oder weglassen, indem man einen [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwendet.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Der Fall, in dem die Bedingung `false` ist, entspricht einem leeren Objekt, sodass nichts in das endgültige Objekt expandiert wird. Beachten Sie, dass dies sich von Folgendem unterscheidet:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In diesem Fall ist die Eigenschaft `watermelon` immer vorhanden und wird von Methoden wie {{jsxref("Object.keys()")}} besucht.

Da auch primitive Werte in Objekte expandiert werden können, und weil alle {{Glossary("falsy", "falsy-Werte")}} keine aufzählbaren Eigenschaften haben, können Sie einfach einen [logischen UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) verwenden:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In diesem Fall wird, wenn `isSummer` irgendein falsy-Wert ist, keine Eigenschaft im `fruits`-Objekt erstellt.

#### Vergleich mit Object.assign()

{{jsxref("Object.assign()")}} kann verwendet werden, um ein Objekt zu verändern, während die Spread-Syntax das nicht kann.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

Außerdem löst {{jsxref("Object.assign()")}} Setter im Zielobjekt aus, während die Spread-Syntax dies nicht tut.

```js
const objectAssign = Object.assign(
  {
    set foo(val) {
      console.log(val);
    },
  },
  { foo: 1 },
);
// Logs "1"; objectAssign.foo is still the original setter

const spread = {
  set foo(val) {
    console.log(val);
  },
  ...{ foo: 1 },
};
// Nothing is logged; spread.foo is 1
```

Sie können die Funktion {{jsxref("Object.assign()")}} nicht naiv durch einen einzigen Spread nachbauen:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

Im obigen Beispiel funktioniert die Spread-Syntax nicht wie erwartet: Sie verteilt ein _Array_ von Argumenten in das Objektliteral aufgrund des Rest-Parameters. Hier ist eine Implementierung von `merge` mit der Spread-Syntax, deren Verhalten {{jsxref("Object.assign()")}} ähnelt, außer dass sie keine Setter auslöst und kein Objekt verändert:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = merge(obj1, obj2);
// { foo: 'baz', x: 42, y: 13 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property)
- {{jsxref("Function.prototype.apply()")}}
