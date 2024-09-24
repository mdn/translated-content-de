---
title: "Element: className Eigenschaft"
short-title: className
slug: Web/API/Element/className
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`className`**-Eigenschaft des {{domxref("Element")}}-Interfaces ruft den Wert des [`class`-Attributs](/de/docs/Web/HTML/Global_attributes/class) des angegebenen Elements ab und setzt diesen.

## Wert

Eine Zeichenfolgenvariable, die die Klasse oder klassenweise getrennte Klassen des aktuellen Elements darstellt.

## Beispiele

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## Hinweise

Der Name `className` wird für diese Eigenschaft verwendet, anstelle von `class`, aufgrund von Konflikten mit dem "class"-Schlüsselwort in vielen Sprachen, die für die DOM-Manipulation genutzt werden.

`className` kann auch eine Instanz von {{domxref("SVGAnimatedString")}} sein, wenn das `element` ein {{domxref("SVGElement")}} ist. Es ist besser, die `className` eines Elements mit {{domxref("Element.getAttribute")}} und {{domxref("Element.setAttribute")}} zu holen/setzen, wenn Sie mit SVG-Elementen arbeiten. Beachten Sie jedoch, dass {{domxref("Element.getAttribute")}} [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgibt anstelle von `""`, wenn das `element` ein leeres [`class`-Attribut](/de/docs/Web/HTML/Global_attributes/class) hat.

```js
elm.setAttribute("class", elm.getAttribute("class"));
```

> [!NOTE]
> `class` ist ein **HTML-Attribut**, während `className` eine **DOM-Eigenschaft** ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("element.classList")}}
