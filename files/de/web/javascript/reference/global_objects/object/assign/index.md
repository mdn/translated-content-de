---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

Die statische Methode **`Object.assign()`**
kopiert alle {{jsxref("Object/propertyIsEnumerable", "aufzählbaren", "", 1)}}
{{jsxref("Object/hasOwn", "eigenen Eigenschaften", "", 1)}} von einem oder mehreren
_Quellobjekten_ zu einem _Zielobjekt_. Sie gibt das modifizierte Zielobjekt zurück.

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
  - : Das Zielobjekt — auf das die Eigenschaften der Quellen angewendet werden und das nach der Modifikation zurückgegeben wird.
- `source1`, …, `sourceN`
  - : Das oder die Quellobjekt(e) — Objekte, die die Eigenschaften enthalten, die Sie anwenden möchten.

### Rückgabewert

Das Zielobjekt.

## Beschreibung

Eigenschaften im Zielobjekt werden durch Eigenschaften in den Quellen überschrieben, wenn sie denselben {{jsxref("Object/keys", "Schlüssel", "", 1)}} haben. Spätere Eigenschaften von Quellen überschreiben frühere.

Die Methode `Object.assign()` kopiert nur _aufzählbare_ und _eigene_ Eigenschaften von einem Quellobjekt zu einem Zielobjekt. Sie verwendet `[[Get]]` am Quellobjekt und `[[Set]]` am Zielobjekt, sie wird also [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) aufrufen. Daher _weist_ sie Eigenschaften zu, anstatt neue zu kopieren oder zu definieren. Dies kann sie ungeeignet für das Zusammenführen von neuen Eigenschaften in ein Prototyp machen, wenn die Quellobjekte Getter enthalten.

Zum Kopieren von Eigenschaftsdefinitionen (einschließlich ihrer Aufzählbarkeit) in Prototypen verwenden Sie statt dessen {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.defineProperty()")}}.

Sowohl {{jsxref("String")}}- als auch {{jsxref("Symbol")}}-Eigenschaften werden kopiert.

Bei einem Fehler, zum Beispiel wenn eine Eigenschaft nicht schreibbar ist, wird ein {{jsxref("TypeError")}} ausgelöst, und das `target`-Objekt wird geändert, wenn vor dem Fehler Eigenschaften hinzugefügt wurden.

> **Hinweis:** `Object.assign()` löst keinen Fehler bei
> [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} Quellen aus.

## Beispiele

### Ein Objekt klonen

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Warnung bei Tiefenkopien

Für [Tiefenkopien (deep cloning)](/de/docs/Glossary/Deep_copy) müssen Sie Alternativen wie [`structuredClone()`](/de/docs/Web/API/structuredClone) verwenden, da `Object.assign()` die Werte der Eigenschaften kopiert.

Wenn der Quellwert ein Verweis auf ein Objekt ist, kopiert er nur den Referenzwert.

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

// Tiefenklon
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }
```

### Objekte zusammenführen

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, das Zielobjekt selbst wird verändert.
```

### Objekte mit denselben Eigenschaften zusammenführen

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

Die Eigenschaften werden von späteren Objekten überschrieben, die in der Reihenfolge der Parameter die gleichen Eigenschaften haben.

### Kopieren von symbol-typisierten Eigenschaften

```js
const o1 = { a: 1 };
const o2 = { [Symbol("foo")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (vgl. Fehler 1207182 auf Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

### Eigenschaften in der Prototypenkette und nicht aufzählbare Eigenschaften können nicht kopiert werden

```js
const obj = Object.create(
  // foo ist in der Prototypenkette von obj.
  { foo: 1 },
  {
    bar: {
      value: 2, // bar ist eine nicht aufzählbare Eigenschaft.
    },
    baz: {
      value: 3,
      enumerable: true, // baz ist eine eigene aufzählbare Eigenschaft.
    },
  },
);

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### Primitive werden in Objekte verpackt

```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitive werden umhüllt, null und undefined werden ignoriert.
// Hinweis: Nur String-Wrapper können eigene aufzählbare Eigenschaften haben.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### Ausnahmen unterbrechen die laufende Kopieraufgabe

```js
const target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false,
}); // target.foo ist eine schreibgeschützte Eigenschaft

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" ist schreibgeschützt
// Die Ausnahme wird ausgelöst, wenn target.foo zugewiesen wird

console.log(target.bar); // 2, die erste Quelle wurde erfolgreich kopiert.
console.log(target.foo2); // 3, die erste Eigenschaft der zweiten Quelle wurde erfolgreich kopiert.
console.log(target.foo); // 1, hier wird die Ausnahme ausgelöst.
console.log(target.foo3); // undefined, die Zuweisungsmethode ist beendet, foo3 wird nicht kopiert.
console.log(target.baz); // undefined, die dritte Quelle wird ebenfalls nicht kopiert.
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
// Der Wert von copy.bar ist der Rückgabewert des Getters von obj.bar.

// Dies ist eine Zuweisungsfunktion, die vollständige Deskriptoren kopiert
function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    const descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // Standardmäßig kopiert Object.assign auch aufzählbare Symbole
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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Polyfill von `Object.assign` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperties()")}}
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- [Spread in Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals)
