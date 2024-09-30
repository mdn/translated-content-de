---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Methode **`Math.log()`** gibt den natürlichen Logarithmus (zur Basis [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) einer Zahl zurück. Das bedeutet

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>das eindeutige&nbsp;</mtext><mi>y</mi><mtext>&nbsp;so dass&nbsp;</mtext><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log}(x)}} = \ln(x) = \text{das eindeutige } y \text{ so dass } e^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-log.html")}}

## Syntax

```js-nolint
Math.log(x)
```

### Parameter

- `x`
  - : Eine Zahl größer oder gleich 0.

### Rückgabewert

Der natürliche Logarithmus (zur Basis [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) von `x`. Ist `x` ±0, wird [`-Infinity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY) zurückgegeben. Ist `x < 0`, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `log()` eine statische Methode von `Math` ist, wird sie immer als `Math.log()` verwendet, anstatt als Methode eines selbst erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Wenn Sie den natürlichen Logarithmus von 2 oder 10 benötigen, verwenden Sie die Konstanten {{jsxref("Math.LN2")}} oder {{jsxref("Math.LN10")}}. Wenn Sie einen Logarithmus zur Basis 2 oder 10 benötigen, verwenden Sie {{jsxref("Math.log2()")}} oder {{jsxref("Math.log10()")}}. Bei Bedarf eines Logarithmus zu anderen Basen, verwenden Sie `Math.log(x) / Math.log(otherBase)` wie im untenstehenden Beispiel; Sie könnten `1 / Math.log(otherBase)` vorab berechnen, da die Multiplikation in `Math.log(x) * constant` erheblich schneller ist.

Beachten Sie, dass positive Zahlen, die sehr nahe bei 1 liegen, unter Präzisionsverlust leiden können, was ihren natürlichen Logarithmus weniger genau macht. In diesem Fall sollten Sie stattdessen {{jsxref("Math.log1p")}} verwenden.

## Beispiele

### Verwendung von Math.log()

```js
Math.log(-1); // NaN
Math.log(-0); // -Infinity
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
Math.log(Infinity); // Infinity
```

### Verwendung von Math.log() mit einer anderen Basis

Die folgende Funktion gibt den Logarithmus von `y` zur Basis `x` zurück (d.h. <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

Wenn Sie `getBaseLog(10, 1000)` ausführen, wird `2.9999999999999996` aufgrund von Rundungsfehlern bei Gleitkommazahlen zurückgegeben, allerdings dennoch sehr nah am tatsächlichen Wert 3.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
