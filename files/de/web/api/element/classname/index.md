---
title: "Element: className-Eigenschaft"
short-title: className
slug: Web/API/Element/className
l10n:
  sourceCommit: 88c33ab5f4ccd88d13a0a5272de45d4d33f9f636
---

{{APIRef("DOM")}}

Die **`className`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt das Inhaltsattribut [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) des Elements wider.

## Wert

Ein String, der die Klasse oder die durch Leerzeichen getrennten Klassen des aktuellen Elements darstellt.

## Beispiele

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## Hinweise

Der Name `className` wird für diese Eigenschaft anstelle von `class` verwendet,
da es in vielen Sprachen, die zur Manipulation des DOM verwendet werden, Konflikte mit dem Schlüsselwort „class“ gibt.

`className` kann auch eine Instanz von [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) sein, wenn
das `element` ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist. Bei SVG-Elementen ist es einfacher, das
`class`-Attribut eines Elements mit [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) und
[`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) abzurufen bzw. festzulegen. Beachten Sie jedoch,
dass [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute)
[`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
anstelle von `""` zurückgibt, wenn das `element` ein leeres [`class`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hat.

```js
elm.setAttribute("class", "my-class");
const myClass = elm.getAttribute("class");
```

> [!NOTE]
> `class` ist der Name eines **HTML-Attributs**, während
> `className` der Name einer **DOM-Eigenschaft** ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.classList`](/de/docs/Web/API/Element/classList)
