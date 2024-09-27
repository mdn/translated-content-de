---
title: "Element: className-Eigenschaft"
short-title: className
slug: Web/API/Element/className
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`className`**-Eigenschaft der
[`Element`](/de/docs/Web/API/Element)-Schnittstelle liest und setzt den Wert des [`class`-Attributs](/de/docs/Web/HTML/Global_attributes/class)
des angegebenen Elements.

## Wert

Eine String-Variable, die die Klasse oder durch Leerzeichen getrennte Klassen des aktuellen Elements darstellt.

## Beispiele

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## Anmerkungen

Der Name `className` wird für diese Eigenschaft verwendet anstelle von `class`,
aufgrund von Konflikten mit dem "class"-Schlüsselwort in vielen Sprachen, die zur
Manipulation des DOM verwendet werden.

`className` kann auch eine Instanz von [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) sein, wenn
das `element` ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist. Es ist besser, die
`className` eines Elements mit [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) und
[`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) zu lesen/setzen, wenn Sie mit SVG-Elementen arbeiten. Beachten Sie jedoch,
dass [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute)
[`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
anstatt `""` zurückgibt, wenn das `element` ein leeres [`class`-Attribut](/de/docs/Web/HTML/Global_attributes/class) hat.

```js
elm.setAttribute("class", elm.getAttribute("class"));
```

> [!NOTE]
> Das `class` ist ein **HTML-Attribut**, während das
> `className` eine **DOM-Eigenschaft** ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.classList`](/de/docs/Web/API/Element/classList)
