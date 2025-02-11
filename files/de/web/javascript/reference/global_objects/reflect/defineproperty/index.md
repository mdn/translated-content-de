---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Reflect.defineProperty()`** ähnelt {{jsxref("Object.defineProperty()")}}, gibt jedoch einen {{jsxref("Boolean")}} zurück.

{{InteractiveExample("JavaScript Demo: Reflect.defineProperty()")}}

```js interactive-example
const object1 = {};

if (Reflect.defineProperty(object1, "property1", { value: 42 })) {
  console.log("property1 created!");
  // Expected output: "property1 created!"
} else {
  console.log("problem creating property1");
}

console.log(object1.property1);
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
  - : Der Name der zu definierenden oder zu ändernden Eigenschaft.
- `attributes`
  - : Die Attribute für die zu definierende oder zu ändernde Eigenschaft.

### Rückgabewert

Ein Boolean-Wert, der angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` oder `attributes` kein Objekt ist.

## Beschreibung

`Reflect.defineProperty()` bietet die reflektive Semantik zur Definition einer eigenen Eigenschaft auf einem Objekt. Auf sehr niedrigem Niveau gibt die Definition einer Eigenschaft einen Boolean-Wert zurück (wie es auch beim [Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) der Fall ist). {{jsxref("Object.defineProperty()")}} bietet nahezu dieselbe Semantik, wirft jedoch einen {{jsxref("TypeError")}}, wenn der Status `false` ist (die Operation war nicht erfolgreich), während `Reflect.defineProperty()` den Status direkt zurückgibt.

Viele eingebaute Operationen definieren ebenfalls Eigeneigenschaften auf Objekten. Der wichtigste Unterschied zwischen dem Definieren von Eigenschaften und dem [Setzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) von Eigenschaften ist, dass dabei keine [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) aufgerufen werden. Zum Beispiel definieren [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) direkt Eigenschaften auf der Instanz, ohne Setter aufzurufen.

```js
class B extends class A {
  set a(v) {
    console.log("Setter called");
  }
} {
  a = 1; // Nothing logged
}
```

`Reflect.defineProperty()` ruft die Methode `[[DefineOwnProperty]]` der [internen Objektmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) auf dem Zielobjekt `target` auf.

## Beispiele

### Verwendung von Reflect.defineProperty()

```js
const obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
console.log(obj.x); // 7
```

### Überprüfen, ob die Eigenschaft erfolgreich definiert wurde

Mit {{jsxref("Object.defineProperty()")}}, das ein Objekt zurückgibt, wenn erfolgreich, oder einen {{jsxref("TypeError")}} auslöst, wenn nicht, würden Sie einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block verwenden, um Fehler beim Definieren einer Eigenschaft zu behandeln.

Da `Reflect.defineProperty()` einen Boolean-Status der Ausführung zurückgibt, können Sie hier einfach einen [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block verwenden:

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

- [Polyfill von `Reflect.defineProperty` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
- [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)
