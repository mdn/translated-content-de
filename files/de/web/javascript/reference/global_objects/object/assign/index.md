---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Die statische Methode **`Object.assign()`** kopiert alle {{jsxref("Object/propertyIsEnumerable", "enumerable", "", 1)}} {{jsxref("Object/hasOwn", "eigenen Eigenschaften", "", 1)}} von einem oder mehreren _Quellobjekten_ zu einem _Zielobjekt_. Es gibt das modifizierte Zielobjekt zurück.

{{EmbedInteractiveExample("pages/js/object-assign.html")}}

## Syntax

```js-nolint
Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, /* …, */ sourceN)
```

### Parameter

- `target`
  - : Das Zielobjekt – worauf die Eigenschaften der Quellen angewendet werden sollen und das nach der Modifikation zurückgegeben wird.
- `source1`, …, `sourceN`
  - : Die Quellobjekt(e) – Objekte, die die anzuwendenden Eigenschaften enthalten.

### Rückgabewert

Das Zielobjekt.

## Beschreibung

Eigenschaften im Zielobjekt werden durch Eigenschaften der Quellen überschrieben, wenn sie denselben {{jsxref("Object/keys", "Schlüssel", "", 1)}} haben. Eigenschaften späterer Quellen überschreiben frühere.

Die `Object.assign()`-Methode kopiert nur _enumerable_ und _eigene_ Eigenschaften von einem Quellobjekt zu einem Zielobjekt. Sie verwendet `[[Get]]` auf der Quelle und `[[Set]]` auf dem Ziel, daher werden [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set) aufgerufen. Daher _weiset_ sie Eigenschaften zu, anstatt neue Eigenschaften zu kopieren oder zu definieren. Dies kann es ungeeignet machen, neue Eigenschaften in ein Prototypenobjekt zu mergen, wenn die Quellobjekte Getter enthalten.

Um Eigenschaftsdefinitionen (einschließlich ihrer Enumerierbarkeit) in Prototypen zu kopieren, verwenden Sie stattdessen {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.defineProperty()")}}.

Sowohl {{jsxref("String")}}- als auch {{jsxref("Symbol")}}-Eigenschaften werden kopiert.

Bei einem Fehler, zum Beispiel wenn eine Eigenschaft nicht beschreibbar ist, wird ein {{jsxref("TypeError")}} ausgelöst, und das `target`-Objekt wird verändert, wenn vor dem Auftreten des Fehlers Eigenschaften hinzugefügt werden.

> **Hinweis:** `Object.assign()` wirft keine Ausnahme bei
> [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)- oder {{jsxref("undefined")}}-Quellen.

## Beispiele

### Klonen eines Objekts

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Warnung für Deep Clone

Für [Deep Cloning](/de/docs/Glossary/Deep_copy) müssen wir Alternativen wie [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, da `Object.assign()` nur Eigenschaftswerte kopiert.

Wenn der Quellwert eine Referenz zu einem Objekt ist, wird nur der Referenzwert kopiert.

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

### Zusammenführen von Objekten mit denselben Eigenschaften

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

Die Eigenschaften werden von anderen Objekten überschrieben, die in der Reihenfolge der Parameter später dieselben Eigenschaften haben.

### Kopieren von symbol-typisierten Eigenschaften

```js
const o1 = { a: 1 };
const o2 = { [Symbol("foo")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

### Eigenschaften in der Prototypenkette und nicht auflistbare Eigenschaften können nicht kopiert werden

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

### Primitive werden zu Objekten umgewandelt

```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### Ausnahmen unterbrechen die fortlaufende Kopieraufgabe

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

### Kopieren von Zugriffs-Methoden

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
- {{jsxref("Object.defineProperties()")}}
- [Enumerierbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- [Spread in Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals)
