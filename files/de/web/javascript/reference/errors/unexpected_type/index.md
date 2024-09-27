---
title: "TypeError: „x“ ist (nicht) „y“"
slug: Web/JavaScript/Reference/Errors/Unexpected_type
l10n:
  sourceCommit: 269244244653b3df2690adb14083a20ab0139f34
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "_x_ ist (nicht) _y_" tritt auf, wenn ein unerwarteter Typ vorliegt. Oftmals treten unerwartete {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Werte auf.

## Nachricht

```plain
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: "x" is undefined (Firefox)
TypeError: "undefined" is not an object (Firefox)
TypeError: undefined is not an object (evaluating 'obj.x') (Safari)

TypeError: "x" is not a symbol (V8-based & Firefox)
TypeError: Symbol.keyFor requires that the first argument be a symbol (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Ein unerwarteter Typ lag vor. Dies tritt oftmals bei {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Werten auf.

Außerdem erfordern bestimmte Methoden, wie {{jsxref("Object.create()")}} oder {{jsxref("Symbol.keyFor()")}}, einen spezifischen Typ, der bereitgestellt werden muss.

## Beispiele

### Ungültige Fälle

Sie können keine Methode auf einer `undefined`- oder `null`-Variable aufrufen.

```js example-bad
const foo = undefined;
foo.substring(1); // TypeError: foo is undefined

const foo2 = null;
foo2.substring(1); // TypeError: foo2 is null
```

Bestimmte Methoden könnten einen spezifischen Typ erfordern.

```js example-bad
const foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

const foo2 = "bar";
Object.create(foo2); // TypeError: "foo2" is not an object or null
```

### Behebung des Problems

Um Nullzeiger auf `undefined` oder `null` Werte zu beheben, können Sie testen, ob der Wert `undefined` oder `null` ist.

```js example-good
if (foo !== undefined && foo !== null) {
  // Now we know that foo is defined, we are good to go.
}
```

Oder, wenn Sie sicher sind, dass `foo` kein anderer [falsy](/de/docs/Glossary/Falsy) Wert wie `""` oder `0` sein wird, oder wenn es kein Problem darstellt, diese Fälle herauszufiltern, können Sie einfach seine Wahrhaftigkeit testen.

```js example-good
if (foo) {
  // Now we know that foo is truthy, it will necessarily not be null/undefined.
}
```

## Siehe auch

- {{jsxref("undefined")}}
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
