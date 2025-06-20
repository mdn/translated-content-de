---
title: Reflect.defineProperty()
short-title: defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Reflect.defineProperty()`** ist ähnlich wie {{jsxref("Object.defineProperty()")}}, gibt aber einen {{jsxref("Boolean")}} zurück.

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
  - : Der Name der zu definierenden oder zu modifizierenden Eigenschaft.
- `attributes`
  - : Die Attribute für die zu definierende oder zu modifizierende Eigenschaft.

### Rückgabewert

Ein booleanes Wert, der angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` oder `attributes` kein Objekt ist.

## Beschreibung

`Reflect.defineProperty()` bietet die reflektive Semantik für das Definieren einer eigenen Eigenschaft auf einem Objekt. Auf sehr niedrigem Niveau gibt das Definieren einer Eigenschaft einen booleschen Wert zurück (wie es auch bei [dem Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) der Fall ist). {{jsxref("Object.defineProperty()")}} bietet nahezu dieselbe Semantik, wirft jedoch einen {{jsxref("TypeError")}}, wenn der Status `false` ist (die Operation war nicht erfolgreich), während `Reflect.defineProperty()` den Status direkt zurückgibt.

Viele eingebaute Operationen würden ebenfalls eigene Eigenschaften auf Objekten definieren. Der bedeutendste Unterschied zwischen dem Definieren von Eigenschaften und dem [Setzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) von ihnen ist, dass [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) nicht aufgerufen werden. Beispielsweise definieren [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) direkt Eigenschaften auf der Instanz, ohne Setter aufzurufen.

```js
class B extends class A {
  set a(v) {
    console.log("Setter called");
  }
} {
  a = 1; // Nothing logged
}
```

`Reflect.defineProperty()` ruft die `[[DefineOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `target` auf.

## Beispiele

### Verwendung von Reflect.defineProperty()

```js
const obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
console.log(obj.x); // 7
```

### Überprüfen, ob die Eigenschaftsdefinition erfolgreich war

Mit {{jsxref("Object.defineProperty()")}}, das ein Objekt zurückgibt, wenn es erfolgreich ist, oder einen {{jsxref("TypeError")}} wirft, falls nicht, würden Sie einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block verwenden, um einen eventuell aufgetretenen Fehler abzufangen, während Sie eine Eigenschaft definieren.

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

- [Polyfill von `Reflect.defineProperty` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
- [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)
