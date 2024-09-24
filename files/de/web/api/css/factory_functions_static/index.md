---
title: CSS numerische Fabrikfunktionen
slug: Web/API/CSS/factory_functions_static
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{APIRef("CSSOM")}}

Die **CSS numerischen Fabrikfunktionen**, wie zum Beispiel `CSS.em()` und `CSS.turn()`, sind Methoden, die [CSSUnitValues](/de/docs/Web/API/CSSUnitValue) zurückgeben, wobei der Wert das numerische Argument ist und die Einheit der Name der verwendeten Methode ist. Diese Funktionen ermöglichen es, neue numerische Werte mit weniger Aufwand zu erstellen als durch die Verwendung des {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}} Konstruktors.

## Syntax

```js-nolint
CSS.number(number)
CSS.percent(number)

// <length>
CSS.em(number)
CSS.ex(number)
CSS.ch(number)
CSS.ic(number)
CSS.rem(number)
CSS.lh(number)
CSS.rlh(number)
CSS.vw(number)
CSS.vh(number)
CSS.vi(number)
CSS.vb(number)
CSS.vmin(number)
CSS.vmax(number)
CSS.cm(number)
CSS.mm(number)
CSS.Q(number)
CSS.in(number)
CSS.pt(number)
CSS.pc(number)
CSS.px(number)

// <angle>
CSS.deg(number)
CSS.grad(number)
CSS.rad(number)
CSS.turn(number)

// <time>
CSS.s(number)
CSS.ms(number)

// <frequency>
CSS.Hz(number)
CSS.kHz(number)

// <resolution>
CSS.dpi(number)
CSS.dpcm(number)
CSS.dppx(number)

// <flex>
CSS.fr(number)
```

## Beispiele

Wir verwenden die `CSS.vmax()` numerische Fabrikfunktion, um einen {{domxref('CSSUnitValue')}} zu erstellen:

```js
const height = CSS.vmax(50);

console.log(height); // CSSUnitValue {value: 50, unit: "vmax"}
console.log(height.value); // 50
console.log(height.unit); // vmax
```

In diesem Beispiel legen wir den Rand unseres Elements mit der `CSS.px()` Fabrikfunktion fest:

```js
myElement.attributeStyleMap.set("margin", CSS.px(40));
const currentMargin = myElement.attributeStyleMap.get("margin");
console.log(currentMargin.value, currentMargin.unit); // 40, 'px'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}}
