---
title: "Element: className-Eigenschaft"
short-title: className
slug: Web/API/Element/className
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`className`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces ruft den Wert des [`class`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/class) des angegebenen Elements ab oder setzt diesen.

## Wert

Eine Zeichenkette, die die Klasse oder die durch Leerzeichen getrennten Klassen des aktuellen Elements darstellt.

## Beispiele

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## Hinweise

Der Name `className` wird für diese Eigenschaft anstelle von `class` verwendet, da es Konflikte mit dem "class"-Schlüsselwort in vielen Sprachen gibt, die zur Manipulation des DOM verwendet werden.

`className` kann auch eine Instanz von [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) sein, wenn das `element` ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist. Es ist einfacher, das `class`-Attribut eines Elements mit [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) zu lesen und zu schreiben, wenn Sie mit SVG-Elementen arbeiten. Beachten Sie jedoch, dass [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgibt anstatt `""`, wenn das `element` ein leeres [`class`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hat.

```js
elm.setAttribute("class", "my-class");
const myClass = elm.getAttribute("class");
```

> [!NOTE] > `class` ist der Name eines **HTML-Attributs**, während `className` der Name einer **DOM-Eigenschaft** ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.classList`](/de/docs/Web/API/Element/classList)
