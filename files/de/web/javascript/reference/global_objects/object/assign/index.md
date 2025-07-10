---
title: Object.assign()
short-title: assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **statische Methode `Object.assign()`**
kopiert alle {{jsxref("Object/propertyIsEnumerable", "aufzählbaren", "", 1)}}
{{jsxref("Object/hasOwn", "eigenen Eigenschaften", "", 1)}} von einem oder mehreren
_Quellobjekten_ zu einem _Zielobjekt_. Sie gibt das modifizierte Zielobjekt zurück.

{{InteractiveExample("JavaScript Demo: Object.assign()")}}

```js interactive-example
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
```

## Syntax

```js-nolint
Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, /* …, */ sourceN)
```

### Parameter

- `target`
  - : Das Zielobjekt — auf das die Eigenschaften der Quellen angewendet werden sollen und das nach der Modifikation zurückgegeben wird. Wenn ein primitiver Wert als Ziel übergeben wird, wird dieser in ein Objekt umgewandelt.
- `source1`, …, `sourceN`
  - : Die Quellobjekt(e) — Objekte, die die Eigenschaften enthalten, die angewendet werden sollen.

### Rückgabewert

Das Zielobjekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : In einem der folgenden Fälle ausgelöst:
    - Der `target`-Parameter ist [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}.
    - Die Zuweisung einer Eigenschaft an das Zielobjekt schlägt fehl; beispielsweise weil die Eigenschaft im Zielobjekt nicht beschreibbar ist oder weil der Setter einen Fehler wirft.

## Beschreibung

Eigenschaften im Zielobjekt werden durch Eigenschaften in den Quellen überschrieben, wenn sie
den gleichen {{jsxref("Object/keys", "Schlüssel", "", 1)}} haben. Eigenschaften späterer Quellen
überschreiben frühere.

Die Methode `Object.assign()` kopiert nur _aufzählbare_ und
_eigene_ Eigenschaften von einem Quellobjekt auf ein Zielobjekt. Sie verwendet
`[[Get]]` auf der Quelle und `[[Set]]` auf dem Ziel, wodurch
[getters](/de/docs/Web/JavaScript/Reference/Functions/get) und [setters](/de/docs/Web/JavaScript/Reference/Functions/set) aufgerufen werden. Dadurch werden
Eigenschaften _zugewiesen_, anstatt sie zu kopieren oder neu zu definieren. Dies kann es
ungeeignet machen, neue Eigenschaften in ein Prototyp-Muster zu integrieren, wenn die Quellobjekte
Getters enthalten.

Um Eigenschaftsdefinitionen (einschließlich ihrer Aufzählbarkeit) in Prototypen zu kopieren, verwenden Sie
stattdessen {{jsxref("Object.getOwnPropertyDescriptor()")}} und
{{jsxref("Object.defineProperty()")}}.

Sowohl {{jsxref("String")}}- als auch {{jsxref("Symbol")}}-Eigenschaften werden kopiert.

Im Fehlerfall, zum Beispiel wenn eine Eigenschaft nicht beschreibbar ist, wird ein
{{jsxref("TypeError")}} ausgelöst, und das `target`-Objekt wird
geändert, wenn Eigenschaften hinzugefügt wurden, bevor der Fehler aufgetreten ist.

> [!NOTE]
> `Object.assign()` wird bei Quellen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} nicht ausgelöst.

## Beispiele

### Klonen eines Objekts

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Warnung bei tiefem Klonen

Für {{Glossary("Deep_copy", "tiefes Klonen")}} müssen wir Alternativen wie [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, da `Object.assign()`
Eigenschaftswerte kopiert.

Wenn der Quellwert ein Verweis auf ein Objekt ist, wird nur der Verweiswert kopiert.

```js
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }
```

### Zusammenführen von Objekten

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

### Zusammenführen von Objekten mit gleichen Eigenschaften

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

Die Eigenschaften werden von anderen Objekten überschrieben, die später in der Parameterreihenfolge die gleichen Eigenschaften haben.

### Kopieren von symbolgetypten Eigenschaften

```js
const o1 = { a: 1 };
const o2 = { [Symbol("foo")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

### Eigenschaften in der Prototypkette und nicht aufzählbare Eigenschaften können nicht kopiert werden

```js
const obj = Object.create(
  // foo is on obj's prototype chain.
  { foo: 1 },
  {
    bar: {
      value: 2, // bar is a non-enumerable property.
    },
    baz: {
      value: 3,
      enumerable: true, // baz is an own enumerable property.
    },
  },
);

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### Primitive Werte werden in Objekte gekapselt

```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// Primitives as the target are also wrapped to objects
const number = Object.assign(3, { a: 1 });
console.log(number); // Number {3, a: 1}
console.log(typeof number); // object
console.log(number.a); // 1

// null and undefined as targets throw TypeError
try {
  Object.assign(null, { a: 1 });
} catch (e) {
  console.log(e.message); // "Cannot convert undefined or null to object"
}
```

### Ausnahmen unterbrechen die laufende Kopieraufgabe

```js
const target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false,
}); // target.foo is a read-only property

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// The Exception is thrown when assigning target.foo

console.log(target.bar); // 2, the first source was copied successfully.
console.log(target.foo2); // 3, the first property of the second source was copied successfully.
console.log(target.foo); // 1, exception is thrown here.
console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
console.log(target.baz); // undefined, the third source will not be copied either.
```

### Kopieren von Zugriffsfunktionen

```js
const obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

let copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }
// The value of copy.bar is obj.bar's getter's return value.

// This is an assign function that copies full descriptors
function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    const descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // By default, Object.assign copies enumerable Symbols, too
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.assign` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Polyfill von `Object.assign` in es-shims](https://www.npmjs.com/package/object.assign)
- {{jsxref("Object.defineProperties()")}}
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- [Spread in Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals)
