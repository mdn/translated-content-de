---
title: Spread-Syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{jsSidebar("Operators")}}

Die **Spread-Syntax (`...`)** ermöglicht es einem Iterable, wie einem Array oder String, an Stellen expandiert zu werden, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Arrayliterale) erwartet werden. In einem Objektliteral enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paare dem zu erstellenden Objekt hinzu.

Die Spread-Syntax sieht genauso aus wie die Rest-Syntax. In gewisser Weise ist die Spread-Syntax das Gegenteil der Rest-Syntax. Die Spread-Syntax „erweitert“ ein Array in seine Elemente, während die Rest-Syntax mehrere Elemente sammelt und in ein einzelnes Element „verdichtet“. Siehe [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property).

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Syntax

```js-nolint
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

## Beschreibung

Die Spread-Syntax kann verwendet werden, wenn alle Elemente eines Objekts oder Arrays in ein neues Array oder Objekt einbezogen werden oder einzeln auf die Argumentliste eines Funktionsaufrufs angewendet werden müssen. Es gibt drei verschiedene Stellen, die die Spread-Syntax akzeptieren:

- [Funktionsargumente](#spread_in_funktionsaufrufen) Liste (`myFunction(a, ...iterableObj, b)`)
- [Array-Literale](#spread_in_array-literalen) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Objektliterale](#spread_in_objekt-literalen) (`{ ...obj, key: 'value' }`)

Obwohl die Syntax gleich aussieht, gibt es leicht unterschiedliche Semantiken.

Nur [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Werte wie {{jsxref("Array")}} und {{jsxref("String")}} können in [Array-Literalen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und Argumentlisten gespreadet werden. Viele Objekte sind nicht iterierbar, einschließlich aller [einfachen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), die keine [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode haben:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

Andererseits enumeriert das Spreaden in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) die eigenen Eigenschaften des Wertes. Für typische Arrays sind alle Indizes aufzählbare eigene Eigenschaften, sodass Arrays in Objekte gespreadet werden können.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Alle [Primitiven](/de/docs/Web/JavaScript/Data_structures#primitive_values) können in Objekte gespreadet werden. Nur Strings haben aufzählbare eigene Eigenschaften und das Spreaden von allem anderen erstellt keine Eigenschaften am neuen Objekt.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

Beim Verwenden der Spread-Syntax für Funktionsaufrufe sollten Sie sich der Möglichkeit bewusst sein, das Argumentlängenlimit der JavaScript-Engine zu überschreiten. Siehe {{jsxref("Function.prototype.apply()")}} für weitere Details.

## Beispiele

### Spread in Funktionsaufrufen

#### Ersetzen von apply()

Es ist üblich, {{jsxref("Function.prototype.apply()")}} in Fällen zu verwenden, in denen Sie die Elemente eines Arrays als Argumente einer Funktion verwenden möchten.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit der Spread-Syntax kann dies wie folgt geschrieben werden:

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

#### Apply für den new-Operator

Beim Aufrufen eines Konstruktors mit {{jsxref("Operators/new", "new")}} ist es nicht möglich, direkt ein Array und `apply()` zu verwenden, da `apply()` die Ziel-Funktion _aufruft_ anstatt sie _zu konstruieren_, was unter anderem bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` sein wird. Jedoch kann ein Array dank der Spread-Syntax leicht mit `new` verwendet werden:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread in Array-Literalen

#### Ein mächtigeres Array-Literal

Ohne Spread-Syntax reicht die Array-Literal-Syntax nicht mehr aus, um ein neues Array mit einem vorhandenen Array als Teil davon zu erstellen. Stattdessen muss imperativer Code unter Verwendung mehrerer Methoden wie {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}} usw. verwendet werden. Mit der Spread-Syntax wird dies viel prägnanter:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Genau wie das Spreaden für Argumentlisten kann `...` überall im Array-Literal verwendet werden und kann mehrmals verwendet werden.

#### Kopieren eines Arrays

Sie können die Spread-Syntax verwenden, um eine {{Glossary("shallow_copy", "flache Kopie")}} eines Arrays zu erstellen. Jedes Array-Element behält seine Identität ohne Kopie.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

Die Spread-Syntax geht effektiv eine Ebene tief beim Kopieren eines Arrays. Daher ist sie möglicherweise ungeeignet zum Kopieren von mehrdimensionalen Arrays. Dasselbe gilt für {{jsxref("Object.assign()")}} — keine native Operation in JavaScript macht einen tiefen Klon. Die Web-API-Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) erlaubt das tiefe Kopieren von Werten bestimmter [unterstützter Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). Siehe {{Glossary("shallow_copy", "flache Kopie")}} für weitere Details.

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
```

#### Ein besserer Weg zum Verbinden von Arrays

{{jsxref("Array.prototype.concat()")}} wird oft verwendet, um ein Array am Ende eines vorhandenen Arrays anzufügen. Ohne Spread-Syntax wird dies so gemacht:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Mit der Spread-Syntax wird dies:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} wird oft verwendet, um ein Array von Werten am Anfang eines vorhandenen Arrays hinzuzufügen. Ohne Spread-Syntax wird dies so gemacht:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

Mit der Spread-Syntax wird dies:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> [!NOTE]
> Im Gegensatz zu `unshift()` wird hier ein neues `arr1` erstellt, anstatt das ursprüngliche `arr1`-Array direkt zu verändern.

#### Bedingtes Hinzufügen von Werten zu einem Array

Sie können ein Element je nach Bedingung in einem Array-Literal präsent oder abwesend machen, indem Sie einen [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

Wenn die Bedingung `false` ist, spreaden wir ein leeres Array, sodass nichts zum endgültigen Array hinzugefügt wird. Beachten Sie, dass dies anders ist als das Folgende:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In diesem Fall wird ein extra `undefined`-Element hinzugefügt, wenn `isSummer` `false` ist, und dieses Element wird von Methoden wie {{jsxref("Array.prototype.map()")}} besucht.

### Spread in Objekt-Literalen

#### Kopieren und Zusammenführen von Objekten

Sie können die Spread-Syntax verwenden, um mehrere Objekte zu einem neuen Objekt zusammenzuführen.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Ein einzelnes Spread erstellt eine flache Kopie des ursprünglichen Objekts (jedoch ohne nicht aufzählbare Eigenschaften und ohne das Prototypen zu kopieren), ähnlich wie beim [Kopieren eines Arrays](#kopieren_eines_arrays).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Überschreibung von Eigenschaften

Wenn ein Objekt in ein anderes Objekt gespreadet wird oder wenn mehrere Objekte in ein einziges Objekt gespreadet werden, und Eigenschaften mit identischen Namen auftreten, erhält die Eigenschaft den zuletzt zugewiesenen Wert, während sie in der Position bleibt, in der sie ursprünglich gesetzt wurde.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Bedingtes Hinzufügen von Eigenschaften zu einem Objekt

Sie können ein Element je nach Bedingung in einem Objektliteral präsent oder abwesend machen, indem Sie einen [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Der Fall, wenn die Bedingung `false` ist, ist ein leeres Objekt, sodass nichts in das endgültige Objekt gespreadet wird. Beachten Sie, dass dies anders ist als das Folgende:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In diesem Fall ist die `watermelon`-Eigenschaft immer vorhanden und wird von Methoden wie {{jsxref("Object.keys()")}} besucht.

Da Primitives auch in Objekte gespreadet werden können und aus der Beobachtung, dass alle {{Glossary("falsy", "falsy")}} Werte keine aufzählbaren Eigenschaften haben, können Sie einfach einen [logischen UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) verwenden:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In diesem Fall wird keine Eigenschaft auf dem `fruits`-Objekt erstellt, wenn `isSummer` irgendein falsyhafter Wert ist.

#### Vergleich mit Object.assign()

Beachten Sie, dass {{jsxref("Object.assign()")}} verwendet werden kann, um ein Objekt zu verändern, während die Spread-Syntax dies nicht kann.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

Außerdem löst {{jsxref("Object.assign()")}} Setter im Zielobjekt aus, wohingegen die Spread-Syntax dies nicht tut.

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

Sie können die {{jsxref("Object.assign()")}}-Funktion nicht naiv über ein einzelnes Spread neu implementieren:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

Im obigen Beispiel arbeitet die Spread-Syntax nicht wie erwartet: sie spreadet ein _Array_ von Argumenten in das Objektliterale aufgrund des Rest-Parameters. Hier ist eine Implementierung von `merge` unter Verwendung der Spread-Syntax, deren Verhalten {{jsxref("Object.assign()")}} ähnelt, außer dass sie keine Setter auslöst und kein Objekt verändert:

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
