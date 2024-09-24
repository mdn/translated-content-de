---
title: "TypeError: \"x\" ist (nicht) \"y\""
slug: Web/JavaScript/Reference/Errors/Unexpected_type
l10n:
  sourceCommit: 269244244653b3df2690adb14083a20ab0139f34
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "_x_ ist (nicht) _y_" tritt auf, wenn ein unerwarteter Typ vorliegt. Oftmals sind dies unerwartete {{jsxref("undefined")}}- oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Werte.

## Meldung

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

Es gab einen unerwarteten Typ. Dies tritt häufig bei {{jsxref("undefined")}}- oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Werten auf.

Außerdem erfordern bestimmte Methoden, wie {{jsxref("Object.create()")}} oder {{jsxref("Symbol.keyFor()")}}, einen bestimmten Typ, der bereitgestellt werden muss.

## Beispiele

### Ungültige Fälle

Sie können eine Methode nicht auf einer `undefined`- oder `null`-Variable aufrufen.

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

Um einen Nullzeiger auf `undefined` oder `null`-Werte zu beheben, können Sie zuerst testen, ob der Wert `undefined` oder `null` ist.

```js example-good
if (foo !== undefined && foo !== null) {
  // Jetzt wissen wir, dass foo definiert ist, also können wir fortfahren.
}
```

Oder, wenn Sie sicher sind, dass `foo` kein anderes [falsy](/de/docs/Glossary/Falsy) Wert wie `""` oder `0` sein wird, oder wenn das Herausfiltern dieser Fälle kein Problem darstellt, können Sie einfach auf seine Wahrheit testen.

```js example-good
if (foo) {
  // Jetzt wissen wir, dass foo wahrheitsgemäß ist, es wird notwendigerweise nicht null/undefined sein.
}
```

## Siehe auch

- {{jsxref("undefined")}}
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
