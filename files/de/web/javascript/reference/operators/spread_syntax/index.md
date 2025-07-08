---
title: Spread-Syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Spread-Syntax (`...`)** ermöglicht es, Iterables wie Arrays oder Strings dort zu erweitern, wo null oder mehr Argumente (bei Funktionsaufrufen) oder Elemente (bei Array-Literalen) erwartet werden. In einem Objektliteral enumeriert der Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paare dem erstellten Objekt hinzu.

Der Spread-Syntax sieht genauso aus wie der Rest-Syntax. In gewisser Weise ist der Spread-Syntax das Gegenteil der Rest-Syntax. Der Spread-Syntax "erweitert" ein Array in seine Elemente, während der Rest-Syntax mehrere Elemente sammelt und in ein einziges Element "komprimiert". Siehe [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#rest_properties_and_rest_elements).

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

Der Spread-Syntax kann verwendet werden, wenn alle Elemente aus einem Objekt oder Array in ein neues Array oder Objekt aufgenommen werden sollen oder eins nach dem anderen in einer Argumentliste eines Funktionsaufrufs angewendet werden sollen. Es gibt drei verschiedene Orte, die den Spread-Syntax akzeptieren:

- [Funktionsargumente](#spread_in_funktionsaufrufen) Liste (`myFunction(a, ...iterableObj, b)`)
- [Array-Literale](#spread_in_array-literalen) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Objekt-Literale](#spread_in_objekt-literalen) (`{ ...obj, key: 'value' }`)

Obwohl der Syntax gleich aussieht, haben sie leicht unterschiedliche Semantiken.

Nur [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Werte, wie {{jsxref("Array")}} und {{jsxref("String")}}, können in [Array-Literalen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und Argumentlisten erweitert werden. Viele Objekte sind nicht iterable, einschließlich aller [plain objects](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), denen eine [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) Methode fehlt:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

Andererseits enumeriert der Spread-Syntax in [Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) die eigenen Eigenschaften des Wertes. Bei typischen Arrays sind alle Indizes aufzählbare eigene Eigenschaften, sodass Arrays in Objekte überführt werden können.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Alle [Primitiven](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) können in Objekten erweitert werden. Nur Strings haben aufzählbare eigene Eigenschaften, und das Erweitern von allem anderen erzeugt keine Eigenschaften im neuen Objekt.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

Bei der Verwendung der Spread-Syntax für Funktionsaufrufe sollten Sie darauf achten, dass die Argumentlänge der JavaScript-Engine möglicherweise überschritten wird. Siehe {{jsxref("Function.prototype.apply()")}} für weitere Details.

## Beispiele

### Spread in Funktionsaufrufen

#### Ersetzen von apply()

Es ist üblich, {{jsxref("Function.prototype.apply()")}} in Fällen zu verwenden, in denen Sie die Elemente eines Arrays als Argumente für eine Funktion verwenden möchten.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit dem Spread-Syntax kann das obige Beispiel so geschrieben werden:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Jedes Argument in der Argumentliste kann den Spread-Syntax verwenden, und der Spread-Syntax kann mehrfach verwendet werden.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Anwenden auf den neuen Operator

Beim Aufruf eines Konstruktors mit {{jsxref("Operators/new", "new")}} ist es nicht möglich, direkt ein Array und `apply()` zu verwenden, da `apply()` die Ziel-Funktion _aufruft_ anstatt sie zu _konstruiert_, was unter anderem bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist. Dank der Spread-Syntax kann jedoch einfach ein Array mit `new` verwendet werden:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread in Array-Literalen

#### Ein mächtigeres Array-Literal

Ohne Spread-Syntax reicht die Syntax für Array-Literale nicht mehr aus, um ein neues Array mit einem bestehenden Array als Teil davon zu erstellen. Stattdessen muss ein imperativer Code verwendet werden, der eine Kombination von Methoden wie {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}}, usw. umfasst. Mit dem Spread-Syntax wird dies viel knapper:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Genau wie der Spread für Argumentlisten kann `...` überall im Array-Literal verwendet werden und kann mehrmals verwendet werden.

#### Kopieren eines Arrays

Sie können den Spread-Syntax verwenden, um eine {{Glossary("shallow_copy", "flache Kopie")}} eines Arrays zu erstellen. Jedes Array-Element behält seine Identität, ohne kopiert zu werden.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

Der Spread-Syntax geht beim Kopieren eines Arrays effektiv eine Ebene tief. Daher kann es ungeeignet sein, mehrdimensionale Arrays zu kopieren. Dasselbe gilt für {{jsxref("Object.assign()")}} — keine native Operation in JavaScript führt ein tiefes Klonen durch. Die Web-API-Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) ermöglicht das tiefe Kopieren von Werten bestimmter [unterstützter Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). Weitere Einzelheiten finden Sie unter {{Glossary("Shallow_copy", "flache Kopie")}}.

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
```

#### Eine bessere Methode zum Zusammenfügen von Arrays

{{jsxref("Array.prototype.concat()")}} wird häufig verwendet, um ein Array an das Ende eines vorhandenen Arrays anzufügen. Ohne Spread-Syntax wird dies folgendermaßen durchgeführt:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Mit dem Spread-Syntax wird dies zu:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} wird häufig verwendet, um ein Array von Werten am Anfang eines vorhandenen Arrays einzufügen. Ohne Spread-Syntax wird dies folgendermaßen durchgeführt:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

Mit dem Spread-Syntax wird dies zu:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> [!NOTE]
> Anders als `unshift()` erstellt dies ein neues `arr1`, anstatt das ursprüngliche `arr1` Array in-place zu modifizieren.

#### Bedingtes Hinzufügen von Werten zu einem Array

Sie können ein Element in einem Array-Literal abhängig von einer Bedingung präsent oder abwesend machen, indem Sie einen [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

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

In diesem Fall wird, wenn `isSummer` `false` ist, ein zusätzliches `undefined` Element hinzugefügt, das von Methoden wie {{jsxref("Array.prototype.map()")}} besucht wird.

### Spread in Objekt-Literalen

#### Kopieren und Zusammenführen von Objekten

Sie können den Spread-Syntax verwenden, um mehrere Objekte zu einem neuen Objekt zusammenzuführen.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Ein einziger Spread erstellt eine flache Kopie des ursprünglichen Objekts (jedoch ohne nicht-aufzählbare Eigenschaften und ohne das Prototypen zu kopieren), ähnlich wie beim [Kopieren eines Arrays](#kopieren_eines_arrays).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Überschreiben von Eigenschaften

Wenn ein Objekt in ein anderes Objekt erweitert wird oder wenn mehrere Objekte in ein Objekt erweitert werden und dabei Eigenschaften mit identischen Namen auftreten, erhält die Eigenschaft den zuletzt zugewiesenen Wert, bleibt aber in der Position, in der sie ursprünglich gesetzt wurde.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Bedingtes Hinzufügen von Eigenschaften zu einem Objekt

Sie können ein Element in einem Objektliteral abhängig von einer Bedingung präsent oder abwesend machen, indem Sie einen [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Der Fall, in dem die Bedingung `false` ist, ist ein leeres Objekt, sodass nichts in das endgültige Objekt erweitert wird. Beachten Sie, dass dies anders ist als das Folgende:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In diesem Fall ist die `watermelon` Eigenschaft immer vorhanden und wird von Methoden wie {{jsxref("Object.keys()")}} besucht.

Da Primitiven ebenfalls in Objekte erweitert werden können und aus der Beobachtung, dass alle {{Glossary("falsy", "falsy")}} Werte keine aufzählbaren Eigenschaften haben, können Sie einfach einen [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) Operator verwenden:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In diesem Fall wird, wenn `isSummer` ein falsy Wert ist, keine Eigenschaft im `fruits` Objekt erstellt.

#### Vergleich mit Object.assign()

Beachten Sie, dass {{jsxref("Object.assign()")}} verwendet werden kann, um ein Objekt zu verändern, während der Spread-Syntax das nicht kann.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

Darüber hinaus löst {{jsxref("Object.assign()")}} Setter im Zielobjekt aus, während der Spread-Syntax dies nicht tut.

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

Sie können die Funktion {{jsxref("Object.assign()")}} nicht naiv durch ein einzelnes Verbreiten neu implementieren:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

Im obigen Beispiel funktioniert der Spread-Syntax nicht wie möglicherweise erwartet: Er verteilt ein _Array_ von Argumenten im Objektliteral aufgrund des Rest-Parameters. Hier ist eine Implementierung von `merge` unter Verwendung der Spread-Syntax, deren Verhalten {{jsxref("Object.assign()")}} ähnelt, außer dass es keine Setter auslöst noch irgendein Objekt verändert:

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
- [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#rest_properties_and_rest_elements)
- {{jsxref("Function.prototype.apply()")}}
