---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.defineProperty()`** ähnelt {{jsxref("Object.defineProperty()")}}, gibt jedoch einen {{jsxref("Boolean")}} zurück.

{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}

## Syntax

```js-nolint
Reflect.defineProperty(target, propertyKey, attributes)
```

### Parameter

- `target`
  - : Das Zielobjekt, bei dem die Eigenschaft definiert werden soll.
- `propertyKey`
  - : Der Name der zu definierenden oder zu modifizierenden Eigenschaft.
- `attributes`
  - : Die Attribute der zu definierenden oder zu modifizierenden Eigenschaft.

### Rückgabewert

Ein Boolean, der angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` oder `attributes` kein Objekt ist.

## Beschreibung

`Reflect.defineProperty()` bietet die reflektive Semantik zum Definieren einer eigenen Eigenschaft auf einem Objekt. Auf der untersten Ebene gibt das Definieren einer Eigenschaft einen Boolean zurück (wie im Fall des [Proxy-Handlers](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)). {{jsxref("Object.defineProperty()")}} bietet nahezu die gleiche Semantik, wirft jedoch einen {{jsxref("TypeError")}}, wenn der Status `false` ist (die Operation war nicht erfolgreich), während `Reflect.defineProperty()` den Status direkt zurückgibt.

Viele eingebaute Operationen würden auch eigene Eigenschaften auf Objekten definieren. Der bedeutendste Unterschied zwischen dem Definieren von Eigenschaften und dem [Setzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) dieser ist, dass [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) nicht aufgerufen werden. Zum Beispiel definieren [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) direkt Eigenschaften auf der Instanz, ohne Setter aufzurufen.

```js
class B extends class A {
  set a(v) {
    console.log("Setter called");
  }
} {
  a = 1; // Nothing logged
}
```

`Reflect.defineProperty()` ruft die `[[DefineOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.defineProperty()

```js
const obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
console.log(obj.x); // 7
```

### Überprüfen, ob die Eigenschaftsdefinition erfolgreich war

Mit {{jsxref("Object.defineProperty()")}}, das ein Objekt zurückgibt, wenn es erfolgreich ist, oder einen {{jsxref("TypeError")}} wirft, andernfalls würden Sie einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block verwenden, um einen Fehler zu fangen, der beim Definieren einer Eigenschaft aufgetreten ist.

Da `Reflect.defineProperty()` einen Boolean-Erfolgsstatus zurückgibt, können Sie einfach einen [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block verwenden:

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
