---
title: Spread-Syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **Spread-Syntax (`...`)** ermöglicht es, ein Iterable, wie ein Array oder einen String, an Stellen zu erweitern, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral zählt die Spread-Syntax die Eigenschaften eines Objekts auf und fügt die Schlüssel-Wert-Paare dem zu erstellenden Objekt hinzu.

Spread-Syntax sieht genau aus wie die Rest-Syntax. In gewisser Weise ist die Spread-Syntax das Gegenteil der Rest-Syntax. Die Spread-Syntax "erweitert" ein Array in seine Elemente, während die Rest-Syntax mehrere Elemente erfasst und in ein einzelnes Element "verdichtet". Siehe [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property).

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

Spread-Syntax kann verwendet werden, wenn alle Elemente eines Objekts oder Arrays in ein neues Array oder Objekt aufgenommen oder einzeln in der Argumentliste eines Funktionsaufrufs angewendet werden sollen. Es gibt drei verschiedene Stellen, an denen die Spread-Syntax akzeptiert wird:

- [Funktionsargumente](#spread_in_funktionsaufrufen) Liste (`myFunction(a, ...iterableObj, b)`)
- [Array-Literale](#spread_in_array-literalen) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Objekt-Literale](#spread_in_objekt-literalen) (`{ ...obj, key: 'value' }`)

Obwohl die Syntax gleich aussieht, haben sie leicht unterschiedliche Semantiken.

Nur [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Werte wie {{jsxref("Array")}} und {{jsxref("String")}} können in [Array-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und Argumentlisten expandiert werden. Viele Objekte sind nicht iterierbar, einschließlich aller [einfachen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), die eine [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode nicht haben:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

Auf der anderen Seite zählt das Ausbreiten in [Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) die eigenen Eigenschaften des Wertes auf. Bei typischen Arrays sind alle Indizes aufzählbare eigene Eigenschaften, sodass Arrays in Objekte expandiert werden können.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Alle [Primitiven](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) können in Objekte expandiert werden. Nur Strings haben aufzählbare eigene Eigenschaften und das Ausbreiten von etwas anderem erstellt keine Eigenschaften im neuen Objekt.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

Wenn Sie die Spread-Syntax für Funktionsaufrufe verwenden, achten Sie auf die Möglichkeit, das Argumentlängenlimit der JavaScript-Engine zu überschreiten. Weitere Details finden Sie unter {{jsxref("Function.prototype.apply()")}}.

## Beispiele

### Spread in Funktionsaufrufen

#### Ersetzen von apply()

Es ist üblich, {{jsxref("Function.prototype.apply()")}} in Fällen zu verwenden, in denen Sie die Elemente eines Arrays als Argumente für eine Funktion verwenden möchten.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit der Spread-Syntax kann das obenstehende folgendermaßen geschrieben werden:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Jedes Argument in der Argumentliste kann die Spread-Syntax verwenden, und die Spread-Syntax kann mehrmals verwendet werden.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Aufruf für den neuen Operator

Beim Aufrufen eines Konstruktors mit {{jsxref("Operators/new", "new")}} ist es nicht möglich, ein Array und `apply()` **direkt** zu verwenden, da `apply()` die Ziel-Funktion _aufruft_, anstatt sie _zu konstruieren_, was unter anderem bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` sein wird. Ein Array kann jedoch dank der Spread-Syntax leicht mit `new` verwendet werden:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread in Array-Literalen

#### Ein leistungsfähigeres Array-Literal

Ohne Spread-Syntax reicht die Syntax des Array-Literals nicht mehr aus, um ein neues Array unter Verwendung eines bestehenden Arrays als Teil davon zu erstellen. Stattdessen muss ein imperativer Code unter Verwendung einer Kombination von Methoden verwendet werden, einschließlich {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}} usw. Mit der Spread-Syntax wird dies viel prägnanter:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Genau wie Spread für Argumentlisten kann `...` überall im Array-Literal verwendet werden und kann mehr als einmal verwendet werden.

#### Kopieren eines Arrays

Sie können die Spread-Syntax verwenden, um eine {{Glossary("shallow_copy", "flache Kopie")}} eines Arrays zu erstellen. Jedes Array-Element behält seine Identität bei, ohne kopiert zu werden.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

Die Spread-Syntax geht effektiv eine Ebene tief beim Kopieren eines Arrays. Daher kann es ungeeignet sein, für das Kopieren mehrdimensionaler Arrays verwendet zu werden. Das gleiche gilt für {{jsxref("Object.assign()")}} — keine native Operation in JavaScript führt eine tiefe Kopie durch. Die Web-API-Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) ermöglicht das tiefe Kopieren von Werten bestimmter [unterstützter Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). Siehe {{Glossary("Shallow_copy", "flache Kopie")}} für mehr Details.

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
```

#### Eine bessere Methode, Arrays zu verketten

{{jsxref("Array.prototype.concat()")}} wird oft verwendet, um ein Array an das Ende eines bestehenden Arrays zu verketten. Ohne Spread-Syntax wird dies so gemacht:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Mit der Spread-Syntax wird dies so:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} wird oft verwendet, um ein Array von Werten am Anfang eines bestehenden Arrays einzufügen. Ohne Spread-Syntax erfolgt dies so:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

Mit der Spread-Syntax wird dies so:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> [!NOTE]
> Anders als `unshift()` erstellt dies ein neues `arr1`, anstatt das ursprüngliche `arr1`-Array an Ort und Stelle zu ändern.

#### Bedingtes Hinzufügen von Werten zu einem Array

Sie können ein Element in einem Array-Literal abhängig von einer Bedingung vorsehen oder nicht, indem Sie einen [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

Wenn die Bedingung `false` ist, erweitern wir ein leeres Array, sodass nichts zum endgültigen Array hinzugefügt wird. Beachten Sie, dass dies anders ist als das Folgende:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In diesem Fall wird ein zusätzliches `undefined`-Element hinzugefügt, wenn `isSummer` `false` ist, und dieses Element wird von Methoden wie {{jsxref("Array.prototype.map()")}} besucht.

### Spread in Objekt-Literalen

#### Kopieren und Zusammenführen von Objekten

Sie können die Spread-Syntax verwenden, um mehrere Objekte zu einem neuen Objekt zusammenzuführen.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Ein einziges Spread erstellt eine flache Kopie des ursprünglichen Objekts (jedoch ohne nicht aufzählbare Eigenschaften und ohne das Kopieren des Prototyps), ähnlich wie beim [Kopieren eines Arrays](#kopieren_eines_arrays).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Überschreiben von Eigenschaften

Wenn ein Objekt in ein anderes Objekt erweitert wird oder wenn mehrere Objekte in ein Objekt erweitert werden und Eigenschaften mit identischen Namen getroffen werden, nimmt die Eigenschaft den letzten zugewiesenen Wert an, während sie in der Position bleibt, in der sie ursprünglich festgelegt wurde.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Bedingtes Hinzufügen von Eigenschaften zu einem Objekt

Sie können ein Element in einem Objekt-Literal abhängig von einer Bedingung vorsehen oder nicht, indem Sie einen [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Der Fall, in dem die Bedingung `false` ist, ist ein leeres Objekt, sodass nichts in das endgültige Objekt übertragen wird. Beachten Sie, dass dies anders ist als das Folgende:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In diesem Fall ist die `watermelon`-Eigenschaft immer vorhanden und wird von Methoden wie {{jsxref("Object.keys()")}} besucht.

Da auch Primitive in Objekte expandiert werden können, und aus der Beobachtung, dass alle {{Glossary("falsy", "falsy")}} Werte keine aufzählbaren Eigenschaften haben, können Sie einfach einen [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) Operator verwenden:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In diesem Fall wird keine Eigenschaft am `fruits`-Objekt erstellt, wenn `isSummer` ein beliebiger falsy-Wert ist.

#### Vergleich mit Object.assign()

Beachten Sie, dass {{jsxref("Object.assign()")}} verwendet werden kann, um ein Objekt zu verändern, während die Spread-Syntax dies nicht kann.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

Darüber hinaus löst {{jsxref("Object.assign()")}} Setter auf dem Zielobjekt aus, während die Spread-Syntax dies nicht tut.

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

Sie können die {{jsxref("Object.assign()")}}-Funktion nicht naiv durch eine einzelne Verbreitung neu implementieren:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

Im obigen Beispiel funktioniert die Spread-Syntax nicht wie erwartet: sie erweitert ein _Array_ von Argumenten in das Objektliteral durch den Restparameter. Hier ist eine Implementierung von `merge` unter Verwendung der Spread-Syntax, deren Verhalten dem von {{jsxref("Object.assign()")}} ähnlich ist, mit der Ausnahme, dass sie keine Setter auslöst noch ein Objekt verändert:

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
