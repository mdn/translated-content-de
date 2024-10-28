---
title: "Element: className-Eigenschaft"
short-title: className
slug: Web/API/Element/className
l10n:
  sourceCommit: 0b48352fbdd1f0d9a474f23c60f86bfe5902c2de
---

{{APIRef("DOM")}}

Die **`className`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces liest und setzt den Wert des [`class`-Attributs](/de/docs/Web/HTML/Global_attributes/class) des angegebenen Elements.

## Wert

Eine Zeichenfolge, die die Klasse oder die durch Leerzeichen getrennten Klassen des aktuellen Elements darstellt.

## Beispiele

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## Anmerkungen

Der Name `className` wird für diese Eigenschaft verwendet anstelle von `class`, aufgrund von Konflikten mit dem "class"-Schlüsselwort in vielen Sprachen, die zur Manipulation des DOM verwendet werden.

`className` kann auch eine Instanz von [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) sein, wenn das `element` ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist. Es ist einfacher, das `class`-Attribut eines Elements mit [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) abzurufen bzw. zu setzen, wenn Sie es mit SVG-Elementen zu tun haben. Beachten Sie jedoch, dass [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) anstelle von `""` zurückgibt, wenn das `element` ein leeres [`class`-Attribut](/de/docs/Web/HTML/Global_attributes/class) hat.

```js
elm.setAttribute("class", "my-class");
const myClass = elm.getAttribute("class");
```

> **Note:** `class` ist der Name eines **HTML-Attributs**, während `className` der Name einer **DOM-Eigenschaft** ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.classList`](/de/docs/Web/API/Element/classList)
