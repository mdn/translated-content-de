---
title: 'TypeError: "x" ist (nicht) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "_x_ ist (nicht) _y_" tritt auf, wenn ein unerwarteter Typ vorhanden ist. Oftmals handelt es sich um unerwartete {{jsxref("undefined")}}- oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Werte.

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

Es gab einen unerwarteten Typ. Dies tritt häufig bei {{jsxref("undefined")}}- oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Werten auf.

Auch erfordern bestimmte Methoden, wie {{jsxref("Object.create()")}} oder {{jsxref("Symbol.keyFor()")}}, einen bestimmten Typ, der bereitgestellt werden muss.

## Beispiele

### Ungültige Fälle

Sie können keine Methode auf einer `undefined`- oder `null`-Variable aufrufen.

```js example-bad
const foo = undefined;
foo.substring(1); // TypeError: foo is undefined

const foo2 = null;
foo2.substring(1); // TypeError: foo2 is null
```

Bestimmte Methoden könnten einen bestimmten Typ erfordern.

```js example-bad
const foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

const foo2 = "bar";
Object.create(foo2); // TypeError: "foo2" is not an object or null
```

### Beheben des Problems

Um einen Nullzeiger auf `undefined`- oder `null`-Werte zu beheben, können Sie zuerst testen, ob der Wert `undefined` oder `null` ist.

```js example-good
if (foo !== undefined && foo !== null) {
  // Now we know that foo is defined, we are good to go.
}
```

Oder, wenn Sie sicher sind, dass `foo` kein anderer {{Glossary("Falsy", "falsy")}}-Wert wie `""` oder `0` sein wird, oder wenn das Filtern dieser Fälle kein Problem darstellt, können Sie einfach auf seine Wahrhaftigkeit testen.

```js example-good
if (foo) {
  // Now we know that foo is truthy, it will necessarily not be null/undefined.
}
```

## Siehe auch

- {{jsxref("undefined")}}
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
