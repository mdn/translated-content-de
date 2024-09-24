---
title: Spreizsyntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die **Spreizsyntax (`...`)** ermöglicht es, ein iterierbares Objekt, wie ein Array oder einen String, an Stellen zu erweitern, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral enumeriert die Spreizsyntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paare zu dem erstellten Objekt hinzu.

Spreizsyntax sieht genau aus wie Restsyntax. In gewisser Weise ist Spreizsyntax das Gegenteil von Restsyntax. Spreizsyntax "erweitert" ein Array in seine Elemente, während Restsyntax mehrere Elemente sammelt und sie in ein einzelnes Element "verdichtet". Siehe [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property).

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Syntax

```js-nolint
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

## Beschreibung

Die Spreizsyntax kann verwendet werden, wenn alle Elemente aus einem Objekt oder Array in ein neues Array oder Objekt aufgenommen oder einzeln in einer Argumentliste eines Funktionsaufrufs angewendet werden sollen. Es gibt drei verschiedene Stellen, die die Spreizsyntax akzeptieren:

- [Funktionsargumente](#spreizen_in_funktionsaufrufen) Liste (`myFunction(a, ...iterableObj, b)`)
- [Array-Literale](#spreizen_in_array-literalen) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Objekt-Literale](#spreizen_in_objekt-literalen) (`{ ...obj, key: 'value' }`)

Obwohl die Syntax gleich aussieht, haben sie leicht unterschiedliche Semantiken.

Nur [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Werte, wie {{jsxref("Array")}} und {{jsxref("String")}}, können in [Array-Literalen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) und Argumentlisten gespreizt werden. Viele Objekte sind nicht iterierbar, einschließlich aller [normalen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), denen eine [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode fehlt:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

Andererseits enumeriert das Spreizen in [Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) die eigenen Eigenschaften des Wertes. Bei typischen Arrays sind alle Indizes aufzählbare eigene Eigenschaften, sodass Arrays in Objekte gespreizt werden können.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Alle [Primitiven](/de/docs/Web/JavaScript/Data_structures#primitive_values) können in Objekten gespreizt werden. Nur Strings haben aufzählbare eigene Eigenschaften, und das Spreizen von etwas anderem erzeugt keine Eigenschaften im neuen Objekt.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

Beim Verwenden der Spreizsyntax für Funktionsaufrufe sollten Sie die Möglichkeit beachten, das Argumentlängenlimit der JavaScript-Engine zu überschreiten. Weitere Details finden Sie unter {{jsxref("Function.prototype.apply()")}}.

## Beispiele

### Spreizen in Funktionsaufrufen

#### Ersetzen von apply()

Es ist häufig, {{jsxref("Function.prototype.apply()")}} in Fällen zu verwenden, in denen Sie die Elemente eines Arrays als Argumente für eine Funktion verwenden möchten.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit der Spreizsyntax kann das Obige wie folgt geschrieben werden:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Jedes Argument in der Argumentliste kann die Spreizsyntax verwenden, und die Spreizsyntax kann mehrfach verwendet werden.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Anwendung für den new-Operator

Beim Aufrufen eines Konstruktors mit {{jsxref("Operators/new", "new")}} ist es nicht möglich, ein Array und `apply()` **direkt** zu verwenden, da `apply()` die Zielfunktion _aufruft_, anstatt sie zu _konstruieren_. Dies bedeutet unter anderem, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` sein wird. Dank der Spreizsyntax kann jedoch ein Array problemlos mit `new` verwendet werden:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spreizen in Array-Literalen

#### Ein mächtigeres Array-Literal

Ohne Spreizsyntax reicht die Array-Literal-Syntax nicht mehr aus, um ein neues Array mit einem vorhandenen Array als Teil davon zu erstellen. Stattdessen muss imperativer Code verwendet werden, der eine Kombination von Methoden wie {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}} usw. verwendet. Mit der Spreizsyntax wird dies wesentlich kürzer:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Genau wie bei der Spreizung für Argumentlisten kann `...` überall im Array-Literal verwendet werden und auch mehrmals.

#### Kopieren eines Arrays

Sie können die Spreizsyntax verwenden, um eine {{Glossary("shallow copy", "flache Kopie")}} eines Arrays zu erstellen. Jedes Array-Element behält seine Identität ohne Kopierung.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // wie arr.slice()

arr2.push(4);
// arr2 wird [1, 2, 3, 4]
// arr bleibt unverändert
```

Die Spreizsyntax geht effektiv eine Ebene tief beim Kopieren eines Arrays. Daher kann sie für das Kopieren von mehrdimensionalen Arrays ungeeignet sein. Dasselbe gilt für {{jsxref("Object.assign()")}} — keine native Operation in JavaScript führt ein tiefes Klonen durch. Die Web-API-Methode {{domxref("structuredClone()")}} erlaubt das tiefe Kopieren von Werten bestimmter [unterstützter Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). Siehe [flache Kopie](/de/docs/Glossary/Shallow_copy) für weitere Details.

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh nein! Jetzt ist auch Array 'a' betroffen:
console.log(a);
// [[], [2], [3]]
```

#### Bessere Art der Array-Konkatenation

{{jsxref("Array.prototype.concat()")}} wird oft verwendet, um ein Array an das Ende eines bestehenden Arrays anzufügen. Ohne Spreizsyntax wird dies so gemacht:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Alle Elemente von arr2 an arr1 anhängen
arr1 = arr1.concat(arr2);
```

Mit Spreizsyntax wird dies zu:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 ist jetzt [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} wird oft verwendet, um ein Array von Werten am Anfang eines bestehenden Arrays einzufügen. Ohne Spreizsyntax wird dies so gemacht:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Alle Elemente von arr2 an den Anfang von arr1 anhängen
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

Mit Spreizsyntax wird dies zu:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> [!NOTE]
> Anders als `unshift()` erstellt dies ein neues `arr1`, anstatt das ursprüngliche `arr1`-Array in-place zu verändern.

#### Bedingtes Hinzufügen von Werten zu einem Array

Sie können ein Element abhängig von einer Bedingung in einem Array-Literal präsent oder abwesend machen, indem Sie einen [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

Wenn die Bedingung `false` ist, spreizen wir ein leeres Array, sodass nichts zum endgültigen Array hinzugefügt wird. Beachten Sie, dass dies sich von Folgendem unterscheidet:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In diesem Fall wird ein zusätzliches `undefined`-Element hinzugefügt, wenn `isSummer` `false` ist, und dieses Element wird von Methoden wie {{jsxref("Array.prototype.map()")}} besucht.

### Spreizen in Objekt-Literalen

#### Kopieren und Zusammenführen von Objekten

Sie können die Spreizsyntax verwenden, um mehrere Objekte in ein neues Objekt zu kombinieren.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Eine einzelne Spreizung erstellt eine flache Kopie des ursprünglichen Objekts (jedoch ohne nicht aufzählbare Eigenschaften und ohne das Prototypen-Kopieren), ähnlich dem [Kopieren eines Arrays](#kopieren_eines_arrays).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Überschreiben von Eigenschaften

Wenn ein Objekt in ein anderes Objekt gespreizt wird, oder wenn mehrere Objekte in ein Objekt gespreizt werden und Eigenschaften mit identischen Namen aufeinandertreffen, nimmt die Eigenschaft den zuletzt zugewiesenen Wert an, während sie sich an der Position befindet, an der sie ursprünglich festgelegt wurde.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Bedingtes Hinzufügen von Eigenschaften zu einem Objekt

Sie können ein Element in einem Objektliteral präsent oder abwesend machen, je nach Bedingung, indem Sie einen [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Der Fall, in dem die Bedingung `false` ist, ist ein leeres Objekt, sodass nichts in das endgültige Objekt gestreut wird. Beachten Sie, dass dies sich von Folgendem unterscheidet:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In diesem Fall ist die `watermelon`-Eigenschaft immer vorhanden und wird von Methoden wie {{jsxref("Object.keys()")}} besucht.

Da Primitiven auch in Objekten gespreizt werden können, und aus der Beobachtung, dass alle {{Glossary("falsy", "falsy")}}-Werte keine aufzählbaren Eigenschaften haben, können Sie einfach einen [logisches UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND)-Operator verwenden:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In diesem Fall wird keine Eigenschaft auf dem `fruits`-Objekt erstellt, wenn `isSummer` einen falsy-Wert hat.

#### Vergleich mit Object.assign()

Beachten Sie, dass {{jsxref("Object.assign()")}} verwendet werden kann, um ein Objekt zu verändern, während die Spreizsyntax dies nicht kann.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

Darüber hinaus löst {{jsxref("Object.assign()")}} Setter auf dem Zielobjekt aus, während die Spreizsyntax dies nicht tut.

```js
const objectAssign = Object.assign(
  {
    set foo(val) {
      console.log(val);
    },
  },
  { foo: 1 },
);
// Protokolliert "1"; objectAssign.foo ist immer noch der ursprüngliche Setter

const spread = {
  set foo(val) {
    console.log(val);
  },
  ...{ foo: 1 },
};
// Nichts wird protokolliert; spread.foo ist 1
```

Sie können nicht naiv die Funktion {{jsxref("Object.assign()")}} durch eine einzige Spreizung neu implementieren:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

Im obigen Beispiel funktioniert die Spreizsyntax nicht wie man erwarten könnte: sie spreizt ein _Array_ von Argumenten in das Objektliteral, aufgrund des Restparameters. Hier ist eine Implementierung von `merge` unter Verwendung der Spreizsyntax, deren Verhalten dem von {{jsxref("Object.assign()")}} ähnelt, mit der Ausnahme, dass sie keine Setter auslöst und auch kein Objekt verändert:

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Rest-Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property)
- {{jsxref("Function.prototype.apply()")}}
