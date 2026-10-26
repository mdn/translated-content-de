---
title: Math.cbrt()
short-title: cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.cbrt()`** gibt die Kubikwurzel einer Zahl zurück. Das heißt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚌𝚋𝚛𝚝</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>das eindeutige&nbsp;</mtext><mi>y</mi><mtext>&nbsp;für das gilt:&nbsp;</mtext><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cbrt}(x)}} = \sqrt[3]{x} = \text{das eindeutige } y \text{ für das gilt: } y^3 = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.cbrt()")}}

```js interactive-example
console.log(Math.cbrt(-1));
// Expected output: -1

console.log(Math.cbrt(1));
// Expected output: 1

console.log(Math.cbrt(Infinity));
// Expected output: Infinity

console.log(Math.cbrt(64));
// Expected output: 4
```

## Syntax

```js-nolint
Math.cbrt(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Die Kubikwurzel von `x`.

## Beschreibung

Da `cbrt()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.cbrt()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Math.cbrt() verwenden

```js
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(2); // 1.2599210498948732
Math.cbrt(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Math.cbrt` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.cbrt` von es-shims](https://www.npmjs.com/package/math.cbrt)
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
