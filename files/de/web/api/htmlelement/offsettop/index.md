---
title: "HTMLElement: offsetTop-Eigenschaft"
short-title: offsetTop
slug: Web/API/HTMLElement/offsetTop
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{ APIRef("HTML DOM") }}

Die **`offsetTop`** schreibgeschützte Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt die Entfernung vom äußeren Rand des aktuellen Elements (einschließlich seines Randes) bis zum oberen Innenabstand des [`offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent), des _nächstgelegenen positionierten_ Vorfahren-Elements, zurück.

## Wert

Eine Zahl.

## Beispiele

```js
const d = document.getElementById("div1");
const topPos = d.offsetTop;

if (topPos > 10) {
  // object offset is more
  // than 10 pixels from its parent
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bestimmen der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop)
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
