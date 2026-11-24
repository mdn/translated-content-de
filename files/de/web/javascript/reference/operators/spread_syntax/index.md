---
title: Spread-Syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: 52efe757952fde32b197b8ae9395f8f2a3bc7a9f
---

Die **Spread-Syntax (`...`)** ermöglicht es, ein iterierbares Objekt wie ein Array oder einen String dort zu entfalten, wo null oder mehr Argumente (bei Funktionsaufrufen) oder Elemente (in Array-Literalen) erwartet werden. In einem Objekt-Literal zählt die Spread-Syntax die Eigenschaften eines Objekts auf und fügt die Schlüssel-Wert-Paare dem neu erstellten Objekt hinzu.

Die Spread-Syntax sieht genauso aus wie die Rest-Syntax. In gewisser Weise ist die Spread-Syntax das Gegenteil der Rest-Syntax: Die Spread-Syntax „entfaltet“ ein Array in seine Elemente, während die Rest-Syntax mehrere Elemente sammelt und zu einem einzigen Element zusammenfasst. Siehe [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#rest_properties_and_rest_elements).

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

### Parameter

- `iterableObj`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung), der zu einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) ausgewertet wird.
- `obj`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung), dessen eigene aufzählbare Eigenschaften in das Objekt-Literal kopiert werden.

### Rückgabewert

Die Spread-Syntax hat keinen eigenen Rückgabewert. In einem Aufruf oder Array-Literal wird jeder Wert aus `iterableObj` zu einem separaten Argument oder Array-Element. In einem Objekt-Literal werden durch die Spread-Syntax die Eigenschaftsschlüssel und ihre Werte aus `obj` kopiert.

## Beschreibung

Die Spread-Syntax kann verwendet werden, wenn alle Elemente eines Objekts oder Arrays in ein neues Array oder Objekt aufgenommen oder einzeln als Argumente in einem Funktionsaufruf übergeben werden sollen. Die Spread-Syntax kann an drei verschiedenen Stellen verwendet werden:

- [Argumentliste eines Funktionsaufrufs](#spread-syntax_in_funktionsaufrufen) (`myFunction(a, ...iterableObj, b)`)
- [Array-Literale](#spread-syntax_in_array-literalen) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Objekt-Literale](#spread-syntax_in_objekt-literalen) (`{ ...obj, key: 'value' }`)

Obwohl die Syntax gleich aussieht, unterscheidet sich ihre Semantik je nach Verwendung geringfügig.

Nur [iterierbare](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Werte wie {{jsxref("Array")}} und {{jsxref("String")}} können in [Array-Initialisierern](/de/docs/Web/JavaScript/Reference/Operators/Array_initializer) und Argumentlisten entfaltet werden. Viele Objekte sind nicht iterierbar, darunter alle [einfachen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) ohne eine [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

Bei der Verwendung in [Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) werden dagegen die eigenen Eigenschaften des Werts [aufgezählt](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties#traversing_object_properties). Bei gewöhnlichen Arrays sind alle Indizes eigene aufzählbare Eigenschaften. Daher können Arrays in Objekte entfaltet werden.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Alle [primitiven Werte](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) können in Objekte entfaltet werden. Nur Strings haben eigene aufzählbare Eigenschaften; das Entfalten anderer primitiver Werte erzeugt keine Eigenschaften im neuen Objekt.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

Beachten Sie bei der Verwendung der Spread-Syntax für Funktionsaufrufe, dass die Begrenzung der Argumentanzahl der JavaScript-Engine überschritten werden kann. Weitere Einzelheiten finden Sie unter {{jsxref("Function.prototype.apply()")}}.

## Beispiele

### Spread-Syntax in Funktionsaufrufen

#### apply() ersetzen

{{jsxref("Function.prototype.apply()")}} wird häufig verwendet, wenn die Elemente eines Arrays als Argumente an eine Funktion übergeben werden sollen.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit der Spread-Syntax lässt sich das obige Beispiel so schreiben:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Die Spread-Syntax kann für jedes Argument in der Argumentliste und auch mehrfach verwendet werden.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Verwendung mit dem new-Operator

Beim Aufruf eines Konstruktors mit {{jsxref("new")}} ist es nicht möglich, ein Array und `apply()` **direkt** zu verwenden. `apply()` _ruft_ die Zielfunktion auf, statt ein Objekt mit ihr zu _konstruieren_. Das bedeutet unter anderem, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) den Wert `undefined` hat. Dank der Spread-Syntax lässt sich ein Array jedoch problemlos mit `new` verwenden:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread-Syntax in Array-Literalen

#### Ein leistungsfähigeres Array-Literal

Ohne die Spread-Syntax reicht die Syntax für Array-Literale nicht aus, um ein neues Array zu erstellen, das ein vorhandenes Array als Bestandteil enthält. Stattdessen muss imperativer Code mit einer Kombination von Methoden wie {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}} und {{jsxref("Array/concat", "concat()")}} verwendet werden. Mit der Spread-Syntax geht das wesentlich kürzer:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Wie bei Argumentlisten kann `...` an jeder Stelle im Array-Literal und auch mehrfach verwendet werden.

#### Ein Array kopieren

Mit der Spread-Syntax können Sie eine {{Glossary("shallow_copy", "flache Kopie")}} eines Arrays erstellen. Jedes Array-Element behält dabei seine Identität und wird nicht selbst kopiert.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

Beim Kopieren eines Arrays wirkt die Spread-Syntax nur eine Ebene tief. Daher eignet sie sich möglicherweise nicht zum Kopieren mehrdimensionaler Arrays. Dasselbe gilt für {{jsxref("Object.assign()")}} – in JavaScript gibt es keine native Operation zum tiefen Klonen. Die Web-API-Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) ermöglicht das tiefe Kopieren von Werten bestimmter [unterstützter Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). Weitere Einzelheiten finden Sie unter {{Glossary("Shallow_copy", "Flache Kopie")}}.

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
```

#### Arrays einfacher verketten

{{jsxref("Array.prototype.concat()")}} wird häufig verwendet, um ein Array an das Ende eines bestehenden Arrays anzuhängen. Ohne die Spread-Syntax geschieht das so:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Mit der Spread-Syntax sieht das so aus:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} wird häufig verwendet, um ein Array von Werten am Anfang eines bestehenden Arrays einzufügen. Ohne die Spread-Syntax geschieht das so:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

Mit der Spread-Syntax sieht das so aus:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> [!NOTE]
> Anders als `unshift()` erstellt dies ein neues `arr1`, statt das ursprüngliche Array `arr1` direkt zu verändern.

#### Werte bedingt zu einem Array hinzufügen

Mit einem [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) können Sie abhängig von einer Bedingung ein Element in ein Array-Literal aufnehmen oder weglassen.

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

Wenn die Bedingung `false` ist, wird ein leeres Array entfaltet, sodass dem endgültigen Array nichts hinzugefügt wird. Beachten Sie den Unterschied zum folgenden Beispiel:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In diesem Fall wird ein zusätzliches Element mit dem Wert `undefined` hinzugefügt, wenn `isSummer` den Wert `false` hat. Dieses Element wird von Methoden wie {{jsxref("Array.prototype.map()")}} verarbeitet.

### Spread-Syntax in Objekt-Literalen

#### Objekte kopieren und zusammenführen

Mit der Spread-Syntax können Sie mehrere Objekte zu einem neuen Objekt zusammenführen.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Ein einzelner Spread-Ausdruck erstellt eine flache Kopie des ursprünglichen Objekts (allerdings ohne nicht aufzählbare Eigenschaften und ohne den Prototyp zu kopieren), ähnlich wie beim [Kopieren eines Arrays](#ein_array_kopieren).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Eigenschaften überschreiben

Wenn ein Objekt in ein anderes oder mehrere Objekte in ein einziges Objekt entfaltet werden und dabei Eigenschaften mit identischen Namen vorkommen, erhält die Eigenschaft den zuletzt zugewiesenen Wert. Ihre ursprüngliche Position bleibt dabei erhalten.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Eigenschaften bedingt zu einem Objekt hinzufügen

Mit einem [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) können Sie abhängig von einer Bedingung eine Eigenschaft in ein Objekt-Literal aufnehmen oder weglassen.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Wenn die Bedingung `false` ist, wird ein leeres Objekt verwendet, sodass dem endgültigen Objekt nichts hinzugefügt wird. Beachten Sie den Unterschied zum folgenden Beispiel:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In diesem Fall ist die Eigenschaft `watermelon` immer vorhanden und wird von Methoden wie {{jsxref("Object.keys()")}} erfasst.

Da auch primitive Werte in Objekte entfaltet werden können und alle {{Glossary("falsy", "falsy-Werte")}} keine aufzählbaren Eigenschaften haben, können Sie einfach den Operator für [logisches UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) verwenden:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

Wenn `isSummer` in diesem Fall einen beliebigen falsy-Wert hat, wird im Objekt `fruits` keine Eigenschaft erstellt.

#### Vergleich mit Object.assign()

Beachten Sie, dass {{jsxref("Object.assign()")}} ein Objekt verändern kann, die Spread-Syntax dagegen nicht.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

Außerdem löst {{jsxref("Object.assign()")}} Setter auf dem Zielobjekt aus, die Spread-Syntax hingegen nicht.

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

Die Funktion {{jsxref("Object.assign()")}} lässt sich nicht einfach durch einen einzigen Spread-Ausdruck nachimplementieren:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

Im obigen Beispiel funktioniert die Spread-Syntax nicht wie möglicherweise erwartet: Wegen des Rest-Parameters wird ein _Array_ von Argumenten in das Objekt-Literal entfaltet. Die folgende Implementierung von `merge` verwendet die Spread-Syntax. Ihr Verhalten ähnelt dem von {{jsxref("Object.assign()")}}, allerdings löst sie keine Setter aus und verändert kein Objekt:

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
