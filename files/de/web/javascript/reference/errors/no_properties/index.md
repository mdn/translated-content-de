---
title: "TypeError: null/undefined hat keine Eigenschaften"
slug: Web/JavaScript/Reference/Errors/No_properties
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "null (oder undefined) hat keine Eigenschaften" tritt auf, wenn Sie versuchen, auf Eigenschaften von [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} zuzugreifen. Diese haben keine.

## Nachricht

```plain
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: Cannot destructure 'x' as it is undefined. (V8-based)
TypeError: Cannot destructure property 'x' of 'y' as it is undefined. (V8-based)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
TypeError: undefined is not an object (evaluating 'undefined.x') (Safari)
TypeError: Right side of assignment cannot be destructured (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Sowohl [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) als auch {{jsxref("undefined")}} haben keine Eigenschaften, auf die Sie zugreifen könnten. Daher können Sie keine [Eigenschaftenzugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) auf sie anwenden oder sie [destrukturieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Beispiele

### null und undefined haben keine Eigenschaften

```js example-bad
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## Siehe auch

- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
- {{jsxref("undefined")}}
