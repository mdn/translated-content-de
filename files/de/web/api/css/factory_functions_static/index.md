---
title: CSS numerische Fabrikfunktionen
slug: Web/API/CSS/factory_functions_static
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{APIRef("CSSOM")}}

Die **CSS numerischen Fabrikfunktionen**, wie `CSS.em()` und `CSS.turn()`, sind Methoden, die [CSSUnitValues](/de/docs/Web/API/CSSUnitValue) zurückgeben, wobei der Wert das numerische Argument ist und die Einheit der Name der verwendeten Methode. Diese Funktionen erstellen neue numerische Werte weniger umständlich als der Gebrauch des [`CSSUnitValue()`](/de/docs/Web/API/CSSUnitValue/CSSUnitValue) Konstruktors.

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

Wir verwenden die `CSS.vmax()` numerische Fabrikfunktion, um einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zu erstellen:

```js
const height = CSS.vmax(50);

console.log(height); // CSSUnitValue {value: 50, unit: "vmax"}
console.log(height.value); // 50
console.log(height.unit); // vmax
```

In diesem Beispiel setzen wir den Rand unseres Elements mit der `CSS.px()` Fabrikfunktion:

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

- [`CSSUnitValue()`](/de/docs/Web/API/CSSUnitValue/CSSUnitValue)
