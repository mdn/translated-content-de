---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.defineProperty()`** ist ähnlich wie {{jsxref("Object.defineProperty()")}}, gibt jedoch ein {{jsxref("Boolean")}} zurück.

{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}

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

Ein Boolean, der angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` oder `attributes` kein Objekt ist.

## Beschreibung

`Reflect.defineProperty()` bietet die reflexive Semantik beim Definieren einer eigenen Eigenschaft an einem Objekt. Auf der niedrigsten Ebene gibt das Definieren einer Eigenschaft ein Boolean zurück (wie im Fall des [Proxy-Handlers](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)). {{jsxref("Object.defineProperty()")}} bietet nahezu die gleiche Semantik, wirft jedoch einen {{jsxref("TypeError")}}, wenn der Status `false` ist (wenn der Vorgang erfolglos war), während `Reflect.defineProperty()` den Status direkt zurückgibt.

Viele eingebettete Operationen würden auch eigene Eigenschaften auf Objekten definieren. Der wesentliche Unterschied zwischen dem Definieren von Eigenschaften und dem [Setzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) dieser besteht darin, dass [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) nicht aufgerufen werden. Zum Beispiel definieren [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) direkt Eigenschaften auf der Instanz, ohne Setter aufzurufen.

```js
class B extends class A {
  set a(v) {
    console.log("Setter aufgerufen");
  }
} {
  a = 1; // Nichts wird protokolliert
}
```

`Reflect.defineProperty()` ruft die `[[DefineOwnProperty]]` [interne Objektroutine](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.defineProperty()

```js
const obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
console.log(obj.x); // 7
```

### Überprüfen, ob die Eigenschaftsdefinition erfolgreich war

Mit {{jsxref("Object.defineProperty()")}}, das ein Objekt zurückgibt, wenn erfolgreich, oder einen {{jsxref("TypeError")}} sonst, würde man einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block verwenden, um Fehler zu erfassen, die beim Definieren einer Eigenschaft auftreten.

Da `Reflect.defineProperty()` einen Boolean-Erfolgsstatus zurückgibt, können Sie hier einfach einen [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Block verwenden:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // Erfolg
} else {
  // Fehlschlag
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
