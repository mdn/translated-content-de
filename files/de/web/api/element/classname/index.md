---
title: "Element: className-Eigenschaft"
short-title: className
slug: Web/API/Element/className
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`className`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle erhält und setzt den Wert des [`class`-Attributs](/de/docs/Web/HTML/Global_attributes/class) des angegebenen Elements.

## Wert

Eine Zeichenfolgenvariable, die die Klasse oder die durch Leerzeichen getrennten Klassen des aktuellen Elements darstellt.

## Beispiele

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## Hinweise

Der Name `className` wird für diese Eigenschaft anstelle von `class` verwendet, da es Konflikte mit dem "class"-Schlüsselwort in vielen Sprachen gibt, die zur Manipulation des DOM eingesetzt werden.

`className` kann auch eine Instanz von [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) sein, wenn das `element` ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist. Es ist besser, `className` eines Elements mit [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) zu erhalten/setzen, wenn Sie mit SVG-Elementen arbeiten. Beachten Sie jedoch, dass [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) anstelle von `""` zurückgibt, wenn das `element` ein leeres [`class`-Attribut](/de/docs/Web/HTML/Global_attributes/class) hat.

```js
elm.setAttribute("class", elm.getAttribute("class"));
```

> [!NOTE] > `class` ist ein **HTML-Attribut**, während `className` eine **DOM-Eigenschaft** ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.classList`](/de/docs/Web/API/Element/classList)
