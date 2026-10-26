---
title: Reflect.defineProperty()
short-title: defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.defineProperty()`** ähnelt {{jsxref("Object.defineProperty()")}}, gibt aber einen {{jsxref("Boolean")}} zurück.

{{InteractiveExample("JavaScript Demo: Reflect.defineProperty()")}}

```js interactive-example
const object = {};

if (Reflect.defineProperty(object, "foo", { value: 42 })) {
  console.log("foo created!");
  // Expected output: "foo created!"
} else {
  console.log("problem creating foo");
}

console.log(object.foo);
// Expected output: 42
```

## Syntax

```js-nolint
Reflect.defineProperty(target, propertyKey, attributes)
```

### Parameter

- `target`
  - : Das Zielobjekt, auf dem die Eigenschaft definiert werden soll.
- `propertyKey`
  - : Der Name der Eigenschaft, die definiert oder geändert werden soll.
- `attributes`
  - : Die Attribute der Eigenschaft, die definiert oder geändert werden soll.

### Rückgabewert

Ein boolescher Wert, der angibt, ob die Eigenschaft erfolgreich definiert wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` oder `attributes` kein Objekt ist.

## Beschreibung

`Reflect.defineProperty()` bietet die reflektierende Semantik für das Definieren einer eigenen Eigenschaft eines Objekts. Auf der untersten Ebene gibt das Definieren einer Eigenschaft einen booleschen Wert zurück (wie auch beim [Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)). {{jsxref("Object.defineProperty()")}} bietet nahezu dieselbe Semantik, löst aber einen {{jsxref("TypeError")}} aus, wenn der Status `false` ist (die Operation also nicht erfolgreich war). `Reflect.defineProperty()` gibt den Status dagegen direkt zurück.

Auch viele integrierte Operationen definieren eigene Eigenschaften von Objekten. Der wichtigste Unterschied zwischen dem Definieren und dem [Setzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) von Eigenschaften besteht darin, dass beim Definieren keine [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) aufgerufen werden. Beispielsweise definieren [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) Eigenschaften direkt auf der Instanz, ohne Setter aufzurufen.

```js
class B extends class A {
  set a(v) {
    console.log("Setter called");
  }
} {
  a = 1; // Nothing logged
}
```

`Reflect.defineProperty()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[DefineOwnProperty]]` von `target` auf.

## Beispiele

### Reflect.defineProperty() verwenden

```js
const obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
console.log(obj.x); // 7
```

### Prüfen, ob das Definieren einer Eigenschaft erfolgreich war

Bei {{jsxref("Object.defineProperty()")}}, das bei Erfolg ein Objekt zurückgibt und andernfalls einen {{jsxref("TypeError")}} auslöst, würden Sie einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block verwenden, um Fehler abzufangen, die beim Definieren einer Eigenschaft auftreten.

Da `Reflect.defineProperty()` einen booleschen Erfolgsstatus zurückgibt, können Sie hier einfach einen [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block verwenden:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Reflect.defineProperty` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
- [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)
