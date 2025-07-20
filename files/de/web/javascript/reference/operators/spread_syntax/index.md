---
title: Spread-Syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **Spread-Syntax (`...`)** ermöglicht es, ein iterierbares Objekt wie ein Array oder eine Zeichenkette an Stellen zu erweitern, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objekt-Literal enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paare zum erstellten Objekt hinzu.

Die Spread-Syntax sieht genauso aus wie die Rest-Syntax. In gewisser Weise ist die Spread-Syntax das Gegenteil der Rest-Syntax. Die Spread-Syntax "erweitert" ein Array in seine Elemente, während die Rest-Syntax mehrere Elemente sammelt und in ein einziges Element "verdichtet". Siehe [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#rest_properties_and_rest_elements).

{{InteractiveExample("JavaScript Demo: Spread syntax (...)")}}

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

Die Spread-Syntax kann verwendet werden, wenn alle Elemente aus einem Objekt oder Array in ein neues Array oder Objekt aufgenommen werden sollen oder wenn sie nacheinander in der Argumentliste eines Funktionsaufrufs angewendet werden sollen. Es gibt drei verschiedene Stellen, die die Spread-Syntax akzeptieren:

- [Funktionsargumente](#spread_in_funktionsaufrufen) Liste (`myFunction(a, ...iterableObj, b)`)
- [Array-Literale](#spread_in_array-literalen) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Objekt-Literale](#spread_in_objekt-literalen) (`{ ...obj, key: 'value' }`)

Obwohl die Syntax gleich aussieht, haben sie leicht unterschiedliche Semantiken.

Nur [iterierbare](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Werte wie {{jsxref("Array")}} und {{jsxref("String")}} können in [Array-Literalen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und Argumentlisten verwendet werden. Viele Objekte sind nicht iterierbar, einschließlich aller [normalen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), denen eine [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode fehlt:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

Andererseits enumeriert die Verwendung der Spread-Syntax in [Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) die eigenen Eigenschaften des Werts. Für typische Arrays sind alle Indizes zählbare eigene Eigenschaften, sodass Arrays in Objekte umgewandelt werden können.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Alle [Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) können in Objekten verwendet werden. Nur Strings haben eigene zählbare Eigenschaften, und das Verwenden anderer Werte erzeugt keine Eigenschaften im neuen Objekt.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

Bei der Verwendung der Spread-Syntax für Funktionsaufrufe sollte beachtet werden, dass die Möglichkeit besteht, das Argumentlängenlimit der JavaScript-Engine zu überschreiten. Siehe {{jsxref("Function.prototype.apply()")}} für weitere Details.

## Beispiele

### Spread in Funktionsaufrufen

#### Apply() ersetzen

Es ist üblich, {{jsxref("Function.prototype.apply()")}} in Fällen zu verwenden, in denen die Elemente eines Arrays als Argumente einer Funktion verwendet werden sollen.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit der Spread-Syntax kann das Obige wie folgt geschrieben werden:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Jedes Argument in der Argumentliste kann die Spread-Syntax verwenden, und die Spread-Syntax kann mehrfach verwendet werden.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Verwendung mit dem `new`-Operator

Beim Aufrufen eines Konstruktors mit {{jsxref("Operators/new", "new")}} ist es nicht möglich, direkt ein Array und `apply()` zu verwenden, da `apply()` die Zielfunktion _aufruft_ anstatt sie zu _konstruieren_, was unter anderem bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` sein wird. Ein Array kann jedoch dank der Spread-Syntax leicht mit `new` verwendet werden:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread in Array-Literalen

#### Ein mächtigeres Array-Literal

Ohne Spread-Syntax reicht die Array-Literal-Syntax nicht mehr aus, um ein neues Array mit einem bestehenden Array als Teil davon zu erstellen. Stattdessen muss imperativer Code mit einer Kombination von Methoden wie {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}} usw. verwendet werden. Mit der Spread-Syntax wird dies viel prägnanter:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Genau wie bei Argumentlisten kann `...` überall im Array-Literal verwendet werden und auch mehrmals vorkommen.

#### Ein Array kopieren

Sie können die Spread-Syntax verwenden, um eine {{Glossary("shallow_copy", "flache Kopie")}} eines Arrays zu erstellen. Jedes Array-Element behält seine Identität bei, ohne kopiert zu werden.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

Die Spread-Syntax geht beim Kopieren eines Arrays effektiv eine Ebene tief. Daher kann sie ungeeignet sein, um mehrdimensionale Arrays zu kopieren. Das Gleiche gilt für {{jsxref("Object.assign()")}} — keine native Operation in JavaScript führt eine tiefe Kopie durch. Die Web-API-Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) erlaubt das tiefe Kopieren von Werten bestimmter [unterstützter Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). Siehe {{Glossary("Shallow_copy", "flache Kopie")}} für weitere Details.

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
```

#### Eine bessere Möglichkeit, Arrays zu verketten

{{jsxref("Array.prototype.concat()")}} wird oft verwendet, um ein Array an das Ende eines bestehenden Arrays anzuhängen. Ohne Spread-Syntax geschieht dies wie folgt:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Mit Spread-Syntax wird daraus:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} wird oft verwendet, um ein Array von Werten am Anfang eines bestehenden Arrays einzufügen. Ohne Spread-Syntax geschieht dies wie folgt:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

Mit Spread-Syntax wird daraus:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> [!NOTE]
> Im Gegensatz zu `unshift()` wird ein neues `arr1` erstellt, anstatt das ursprüngliche `arr1`-Array direkt zu ändern.

#### Bedingtes Hinzufügen von Werten zu einem Array

Sie können ein Element in einem Array-Literal je nach einer Bedingung vorhanden oder nicht vorhanden machen, indem Sie einen [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

Wenn die Bedingung `false` ist, verwenden wir ein leeres Array, sodass nichts dem endgültigen Array hinzugefügt wird. Beachten Sie, dass dies anders ist als das Folgende:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In diesem Fall wird ein zusätzliches `undefined`-Element hinzugefügt, wenn `isSummer` `false` ist, und dieses Element wird von Methoden wie {{jsxref("Array.prototype.map()")}} besucht.

### Spread in Objekt-Literalen

#### Kopieren und Zusammenführen von Objekten

Sie können die Spread-Syntax verwenden, um mehrere Objekte in ein neues Objekt zusammenzuführen.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Ein einzelnes Spread erstellt eine flache Kopie des ursprünglichen Objekts (jedoch ohne nicht-zählbare Eigenschaften und ohne das Prototyp zu kopieren), ähnlich wie [Kopieren eines Arrays](#ein_array_kopieren).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Überschreiben von Eigenschaften

Wenn ein Objekt in ein anderes Objekt eingefügt wird oder wenn mehrere Objekte in ein Objekt eingefügt werden und Eigenschaften mit identischen Namen auftreten, nimmt die Eigenschaft den zuletzt zugewiesenen Wert an, bleibt jedoch in der ursprünglich festgelegten Position.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Bedingtes Hinzufügen von Eigenschaften zu einem Objekt

Sie können ein Element in einem Objekt-Literal je nach einer Bedingung vorhanden oder nicht vorhanden machen, indem Sie einen [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Der Fall, wenn die Bedingung `false` ist, ergibt ein leeres Objekt, sodass nichts in das endgültige Objekt eingefügt wird. Beachten Sie, dass dies anders ist als das Folgende:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In diesem Fall ist die `watermelon`-Eigenschaft immer vorhanden und wird von Methoden wie {{jsxref("Object.keys()")}} besucht.

Da auch Primitive in Objekte eingefügt werden können, und aus der Beobachtung, dass alle {{Glossary("falsy", "falschen")}} Werte keine zählbaren Eigenschaften haben, können Sie einfach einen [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND)-Operator verwenden:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In diesem Fall wird keine Eigenschaft auf dem `fruits`-Objekt erstellt, wenn `isSummer` ein falscher Wert ist.

#### Vergleich mit Object.assign()

Beachten Sie, dass {{jsxref("Object.assign()")}} verwendet werden kann, um ein Objekt zu mutieren, während die Spread-Syntax dies nicht kann.

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

Sie können die {{jsxref("Object.assign()")}}-Funktion nicht naiv durch ein einfaches Spreizen nachbilden:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

Im obigen Beispiel funktioniert die Spread-Syntax nicht wie erwartet: Sie zerlegt ein _Array_ von Argumenten in das Objekt-Literal aufgrund des Rest-Parameters. Hier ist eine Implementierung von `merge` unter Verwendung der Spread-Syntax, deren Verhalten ähnlich wie bei {{jsxref("Object.assign()")}} ist, mit der Ausnahme, dass sie keine Setter auslöst und kein Objekt mutiert:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj = merge(obj1, obj2);
// { foo: 'baz', x: 42, y: 13 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#rest_properties_and_rest_elements)
- {{jsxref("Function.prototype.apply()")}}
