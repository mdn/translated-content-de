---
title: Spread-Syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{jsSidebar("Operators")}}

Die **Spread-Syntax (`...`)** ermöglicht es, ein iterierbares Objekt, wie ein Array oder einen String, an Stellen zu erweitern, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Werte-Paare dem erstellten Objekt hinzu.

Spread-Syntax sieht der Rest-Syntax genau gleich aus. In gewisser Weise ist die Spread-Syntax das Gegenteil der Rest-Syntax. Die Spread-Syntax "erweitert" ein Array in seine Elemente, während die Rest-Syntax mehrere Elemente sammelt und sie in ein einzelnes Element "kondensiert". Siehe [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property).

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Syntax

```js-nolint
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

## Beschreibung

Spread-Syntax kann verwendet werden, wenn alle Elemente aus einem Objekt oder Array in ein neues Array oder Objekt einbezogen werden müssen, oder wenn sie einzeln in einer Argumentenliste eines Funktionsaufrufs angewendet werden sollen. Es gibt drei unterschiedliche Stellen, die die Spread-Syntax akzeptieren:

- [Funktionsargumente](#spread_in_funktionsaufrufen) Liste (`myFunction(a, ...iterableObj, b)`)
- [Array-Literale](#spread_in_array-literalen) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Objektliterale](#spread_in_objektliteralen) (`{ ...obj, key: 'value' }`)

Obwohl die Syntax gleich aussieht, gibt es leicht unterschiedliche Semantiken.

Nur [iterierbare Werte](/de/docs/Web/JavaScript/Reference/Iteration_protocols), wie {{jsxref("Array")}} und {{jsxref("String")}}, können in [Array-Literalen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und Argumentenlisten verteilt werden. Viele Objekte sind nicht iterierbar, einschließlich aller [einfachen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), die keine [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode haben:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

Andererseits wird beim Verteilen in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) die eigenen Eigenschaften des Werts [enumeriert](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#traversing_object_properties). Für typische Arrays sind alle Indizes aufzählbare eigene Eigenschaften, sodass Arrays in Objekte verteilt werden können.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Alle [Primitiven](/de/docs/Web/JavaScript/Data_structures#primitive_values) können in Objekte verteilt werden. Nur Strings haben aufzählbare eigene Eigenschaften, und das Verteilen von allem anderen erstellt keine Eigenschaften im neuen Objekt.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

Wenn Sie Spread-Syntax für Funktionsaufrufe verwenden, seien Sie sich der Möglichkeit bewusst, das Argumentlängenlimit der JavaScript-Engine zu überschreiten. Weitere Details finden Sie unter {{jsxref("Function.prototype.apply()")}}.

## Beispiele

### Spread in Funktionsaufrufen

#### Ersetzen von apply()

Es ist üblich, {{jsxref("Function.prototype.apply()")}} in Fällen zu verwenden, in denen Sie
die Elemente eines Arrays als Argumente an eine Funktion übergeben möchten.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit Spread-Syntax kann das obige so ausgedrückt werden:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Jedes Argument in der Argumentenliste kann die Spread-Syntax verwenden, und die Spread-Syntax kann
mehrfach verwendet werden.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Anwenden auf den new-Operator

Beim Aufruf eines Konstruktors mit {{jsxref("Operators/new", "new")}} ist es nicht möglich, ein Array und `apply()` direkt zu verwenden, da `apply()` die Ziel-Funktion _aufruft_ anstatt sie zu _konstruieren_. Das bedeutet unter anderem, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` sein wird. Ein Array kann jedoch dank der Spread-Syntax problemlos mit `new` verwendet werden:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread in Array-Literalen

#### Ein mächtigeres Array-Literal

Ohne Spread-Syntax reicht die Array-Literal-Syntax nicht mehr aus, um ein neues Array zu erstellen, das ein vorhandenes Array als Teil enthält. Stattdessen muss imperativer Code verwendet werden, indem Methoden wie {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}} usw. kombiniert werden. Mit Spread-Syntax wird dies viel prägnanter:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Genau wie Spread für Argumentenlisten kann `...` überall im Array-Literal verwendet werden und kann mehr als einmal verwendet werden.

#### Kopieren eines Arrays

Sie können die Spread-Syntax verwenden, um eine [flache Kopie](/de/docs/Glossary/shallow_copy) eines Arrays zu erstellen. Jedes Array-Element behält seine Identität, ohne kopiert zu werden.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

Spread-Syntax geht beim Kopieren eines Arrays effektiv eine Ebene tief. Daher kann sie zum Kopieren von mehrdimensionalen Arrays ungeeignet sein. Dasselbe gilt für {{jsxref("Object.assign()")}} — keine native Operation in JavaScript führt einen tiefen Klon durch. Die Web-API-Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) ermöglicht das tiefe Kopieren von Werten bestimmter [unterstützter Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). Weitere Details finden Sie unter [flache Kopie](/de/docs/Glossary/Shallow_copy).

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

{{jsxref("Array.prototype.concat()")}} wird häufig verwendet, um ein Array an das Ende eines vorhandenen Arrays zu verketten. Ohne Spread-Syntax wird dies so durchgeführt:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Mit Spread-Syntax wird das:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} wird häufig verwendet, um ein Array von Werten am Anfang eines vorhandenen Arrays einzufügen. Ohne Spread-Syntax wird dies so durchgeführt:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

Mit Spread-Syntax wird das:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> [!NOTE]
> Anders als bei `unshift()` wird ein neues `arr1` erstellt, anstatt das ursprüngliche `arr1`-Array vor Ort zu modifizieren.

#### Bedingtes Hinzufügen von Werten zu einem Array

Sie können ein Element in einem Array-Literal je nach Bedingung ein- oder ausschließen, indem Sie einen [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

Wenn die Bedingung `false` ist, verteilen wir ein leeres Array, sodass nichts zum endgültigen Array hinzugefügt wird. Beachten Sie, dass dies anders ist als das Folgende:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In diesem Fall wird ein zusätzliches `undefined`-Element hinzugefügt, wenn `isSummer` `false` ist, und dieses Element wird von Methoden wie {{jsxref("Array.prototype.map()")}} besucht.

### Spread in Objektliteralen

#### Kopieren und Zusammenführen von Objekten

Sie können die Spread-Syntax verwenden, um mehrere Objekte in ein neues Objekt zusammenzuführen.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Ein einzelner Spread erstellt eine flache Kopie des ursprünglichen Objekts (jedoch ohne nicht aufzählbare Eigenschaften und ohne den Prototyp zu kopieren), ähnlich wie beim [Kopieren eines Arrays](#kopieren_eines_arrays).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Überschreiben von Eigenschaften

Wenn ein Objekt in ein anderes Objekt verteilt wird, oder wenn mehrere Objekte in ein Objekt verteilt werden und Eigenschaften mit identischen Namen auftreten, nimmt die Eigenschaft den zuletzt zugewiesenen Wert an, während sie an der Position bleibt, an der sie ursprünglich festgelegt wurde.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Bedingtes Hinzufügen von Eigenschaften zu einem Objekt

Sie können ein Element in einem Objektliteral je nach Bedingung ein- oder ausschließen, indem Sie einen [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Der Fall, in dem die Bedingung `false` ist, ist ein leeres Objekt, sodass nichts in das endgültige Objekt verteilt wird. Beachten Sie, dass dies anders ist als das Folgende:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In diesem Fall ist die Eigenschaft `watermelon` immer vorhanden und wird von Methoden wie {{jsxref("Object.keys()")}} besucht.

Da auch Primitive in Objekte verteilt werden können und aus der Beobachtung heraus, dass alle [falsy](/de/docs/Glossary/falsy) Werte keine aufzählbaren Eigenschaften haben, können Sie einfach einen [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) Operator verwenden:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In diesem Fall wird keine Eigenschaft auf dem `fruits`-Objekt erstellt, wenn `isSummer` irgendeinen falsy Wert hat.

#### Vergleich mit Object.assign()

Beachten Sie, dass {{jsxref("Object.assign()")}} verwendet werden kann, um ein Objekt zu mutieren, während die Spread-Syntax dies nicht kann.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

Zusätzlich löst {{jsxref("Object.assign()")}} Setter im Zielobjekt aus, während dies bei der Spread-Syntax nicht der Fall ist.

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

Sie können die Funktion {{jsxref("Object.assign()")}} nicht naiv durch ein einzelnes Verteilen neu implementieren:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

Im obigen Beispiel funktioniert die Spread-Syntax nicht wie erwartet: Sie verteilt ein _Array_ von Argumenten in das Objektliteral, aufgrund des Restparameters. Hier ist eine Implementierung von `merge` mit der Spread-Syntax, deren Verhalten dem von {{jsxref("Object.assign()")}} ähnlich ist, außer dass sie keine Setter auslöst und kein Objekt mutiert:

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
