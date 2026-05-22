---
title: Spread-Syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **Spread-Syntax (`...`)** ermöglicht es, ein Iterables, wie ein Array oder einen String, an Stellen zu erweitern, an denen null oder mehr Argumente (bei Funktionsaufrufen) oder Elemente (bei Array-Literalen) erwartet werden. In einem Objektliteral enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paare dem erstellten Objekt hinzu.

Die Spread-Syntax sieht genau wie die Rest-Syntax aus. In gewisser Weise ist die Spread-Syntax das Gegenteil der Rest-Syntax. Die Spread-Syntax "erweitert" ein Array in seine Elemente, während die Rest-Syntax mehrere Elemente sammelt und in ein einziges Element "kondensiert". Siehe [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#rest_properties_and_rest_elements).

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

Spread-Syntax kann verwendet werden, wenn alle Elemente aus einem Objekt oder Array in einem neuen Array oder Objekt enthalten sein sollen oder einzeln in einer Argumentenliste eines Funktionsaufrufs angewendet werden sollen. Es gibt drei verschiedene Orte, die die Spread-Syntax akzeptieren:

- [Funktionsargumente](#spread_in_funktionsaufrufen) Liste (`myFunction(a, ...iterableObj, b)`)
- [Array-Literale](#spread_in_array-literalen) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Objektliterale](#spread_in_objekt-literalen) (`{ ...obj, key: 'value' }`)

Obwohl die Syntax gleich aussieht, haben sie leicht unterschiedliche Semantiken.

Nur [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Werte, wie {{jsxref("Array")}} und {{jsxref("String")}}, können in [Array-Literalen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und Argumentenlisten erweitert werden. Viele Objekte sind nicht iterierbar, einschließlich aller [einfachen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), die keine [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) Methode besitzen:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

Andererseits enumeriert das Erweitern in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) [die eigenen Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties#traversing_object_properties) des Werts. Bei typischen Arrays sind alle Indizes aufzählbare eigene Eigenschaften, sodass Arrays in Objekte übertragen werden können.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Alle [Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) können in Objekten erweitert werden. Nur Strings haben aufzählbare eigene Eigenschaften, und das Erweitern von allem anderen erstellt keine Eigenschaften im neuen Objekt.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

Wenn Sie die Spread-Syntax für Funktionsaufrufe verwenden, beachten Sie die Möglichkeit, das Argumentlängenlimit der JavaScript-Engine zu überschreiten. Siehe {{jsxref("Function.prototype.apply()")}} für weitere Details.

## Beispiele

### Spread in Funktionsaufrufen

#### Apply() ersetzen

Es ist üblich, {{jsxref("Function.prototype.apply()")}} in Fällen zu verwenden, in denen Sie die Elemente eines Arrays als Argumente an eine Funktion übergeben möchten.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit Spread-Syntax kann das oben stehende wie folgt geschrieben werden:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Jedes Argument in der Argumentenliste kann die Spread-Syntax verwenden, und die Spread-Syntax kann mehrmals verwendet werden.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Apply für den new-Operator

Beim Aufrufen eines Konstruktors mit {{jsxref("new")}} ist es nicht möglich, ein Array und `apply()` **direkt** zu verwenden, da `apply()` die Zielmethode _aufruft_, anstatt sie zu _konstruieren_, was unter anderem bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` sein wird. Dank der Spread-Syntax kann ein Array jedoch problemlos mit `new` verwendet werden:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread in Array-Literalen

#### Ein mächtigeres Array-Literal

Ohne Spread-Syntax reicht die Array-Literal-Syntax nicht mehr aus, um ein neues Array mit einem vorhandenen Array als Teil davon zu erstellen. Stattdessen muss imperativer Code verwendet werden, der eine Kombination aus Methoden wie {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}} usw. beinhaltet. Mit Spread-Syntax wird dies viel knapper:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Genau wie bei der Spread-Syntax für Argumentenlisten kann `...` überall im Array-Literal verwendet werden und kann mehrmals verwendet werden.

#### Kopieren eines Arrays

Sie können die Spread-Syntax verwenden, um eine {{Glossary("shallow_copy", "flache Kopie")}} eines Arrays zu erstellen. Jedes Array-Element behält seine Identität bei, ohne kopiert zu werden.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

Die Spread-Syntax geht effektiv eine Ebene tief beim Kopieren eines Arrays. Daher ist sie möglicherweise nicht geeignet zum Kopieren mehrdimensionaler Arrays. Dasselbe gilt für {{jsxref("Object.assign()")}} — keine native Operation in JavaScript führt ein Deep-Klonen durch. Die Web-API-Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) ermöglicht das tiefe Kopieren von Werten bestimmter [unterstützter Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). Weitere Details finden Sie unter {{Glossary("Shallow_copy", "flache Kopie")}}.

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
```

#### Ein besserer Weg, um Arrays zu verketten

{{jsxref("Array.prototype.concat()")}} wird oft verwendet, um ein Array an das Ende eines bestehenden Arrays anzufügen. Ohne Spread-Syntax wird dies so gemacht:

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

{{jsxref("Array.prototype.unshift()")}} wird oft verwendet, um ein Array von Werten am Anfang eines bestehenden Arrays einzufügen. Ohne Spread-Syntax wird dies so gemacht:

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
> Im Gegensatz zu `unshift()` wird hierbei ein neues `arr1` erstellt, anstatt das ursprüngliche Array `arr1` direkt zu verändern.

#### Bedingtes Hinzufügen von Werten zu einem Array

Sie können ein Element in einem Array-Literal abhängig von einer Bedingung vorhanden oder abwesend machen, indem Sie einen [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

Wenn die Bedingung `false` ist, erweitern wir ein leeres Array, sodass nichts zum endgültigen Array hinzugefügt wird. Beachten Sie, dass dies anders ist als Folgendes:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In diesem Fall wird ein zusätzliches `undefined`-Element hinzugefügt, wenn `isSummer` `false` ist, und dieses Element wird von Methoden wie {{jsxref("Array.prototype.map()")}} besucht.

### Spread in Objekt-Literalen

#### Kopieren und Zusammenführen von Objekten

Sie können die Spread-Syntax verwenden, um mehrere Objekte in einem neuen Objekt zusammenzuführen.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Ein einzelnes Spread erstellt eine flache Kopie des ursprünglichen Objekts (aber ohne nicht-auflistbare Eigenschaften und ohne das Prototypenobjekt zu kopieren), ähnlich wie beim [Kopieren eines Arrays](#kopieren_eines_arrays).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Überschreiben von Eigenschaften

Wenn ein Objekt in ein anderes Objekt erweitert wird, oder wenn mehrere Objekte in ein Objekt erweitert werden und dabei Eigenschaften mit identischen Namen aufeinandertreffen, nimmt die Eigenschaft den zuletzt zugewiesenen Wert an und bleibt an der Position, an der sie ursprünglich gesetzt wurde.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Bedingtes Hinzufügen von Eigenschaften zu einem Objekt

Sie können ein Element in einem Objektliteral abhängig von einer Bedingung vorhanden oder abwesend machen, indem Sie einen [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Der Fall, in dem die Bedingung `false` ist, ist ein leeres Objekt, so dass nichts in das endgültige Objekt erweitert wird. Beachten Sie, dass dies anders ist als Folgendes:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In diesem Fall ist die `watermelon`-Eigenschaft immer vorhanden und wird von Methoden wie {{jsxref("Object.keys()")}} besucht.

Da auch Primitive in Objekte erweitert werden können, und aus der Beobachtung heraus, dass alle {{Glossary("falsy", "falsy")}} Werte keine auflistbaren Eigenschaften besitzen, können Sie einfach einen [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) Operator verwenden:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In diesem Fall, wenn `isSummer` irgendein falsy Wert ist, wird keine Eigenschaft im `fruits`-Objekt erstellt.

#### Vergleich mit Object.assign()

Beachten Sie, dass {{jsxref("Object.assign()")}} verwendet werden kann, um ein Objekt zu verändern, während die Spread-Syntax dies nicht kann.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

Zusätzlich löst {{jsxref("Object.assign()")}} Setter auf dem Zielobjekt aus, während die Spread-Syntax dies nicht tut.

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

Sie können die {{jsxref("Object.assign()")}} Funktion nicht naiv durch ein einfaches Erweitern nachbilden:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

Im obigen Beispiel funktioniert die Spread-Syntax nicht wie erwartet: Sie erweitert ein _Array_ von Argumenten in das Objektliteral, aufgrund des Restparameters. Hier ist eine Implementierung von `merge` mit der Spread-Syntax, deren Verhalten ähnlich wie {{jsxref("Object.assign()")}} ist, außer dass sie keine Setter auslöst, noch irgendein Objekt verändert:

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

- [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#rest_properties_and_rest_elements)
- {{jsxref("Function.prototype.apply()")}}
