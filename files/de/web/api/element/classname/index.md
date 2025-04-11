---
title: "Element: className-Eigenschaft"
short-title: className
slug: Web/API/Element/className
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

Die **`className`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ruft den Wert des [`class`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/class) des angegebenen Elements ab und setzt ihn.

## Wert

Eine Zeichenfolgenvariable, die die Klasse oder durch Leerzeichen getrennte Klassen des aktuellen Elements darstellt.

## Beispiele

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## Anmerkungen

Der Name `className` wird für diese Eigenschaft anstelle von `class` verwendet, weil es Konflikte mit dem "class"-Schlüsselwort in vielen Sprachen gibt, die zum Manipulieren des DOMs verwendet werden.

`className` kann auch eine Instanz von [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) sein, wenn das `element` ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist. Es ist einfacher, das `class`-Attribut eines Elements mit [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) zu erhalten/setzen, wenn Sie mit SVG-Elementen arbeiten. Beachten Sie jedoch, dass [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgibt und nicht `""`, wenn das `element` ein leeres [`class`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hat.

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
