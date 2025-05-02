---
title: "Element: DOMActivate Ereignis"
short-title: DOMActivate
slug: Web/API/Element/DOMActivate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Deprecated_Header}}

Das **`DOMActivate`** Ereignis wird bei einem Element ausgelöst, wenn es aktiv wird, beispielsweise wenn darauf geklickt wird oder eine Taste verwendet wird, um es zu navigieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("DOMActivate", (event) => { })

onDOMActivate = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Ereigniseigenschaften

[...]

## Beispiele

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.2"
  baseProfile="tiny"
  xmlns:ev="http://www.w3.org/2001/xml-events"
  width="6cm"
  height="5cm"
  viewBox="0 0 600 500">
  <desc>Example: invoke an JavaScript function from a DOMActivate event</desc>

  <!-- JavaScript to change the radius -->
  <script>
    <![CDATA[ function change(evt) { const circle = evt.target; const
    currentRadius = circle.getFloatTrait("r"); if (currentRadius === 100) {
    circle.setFloatTrait("r", currentRadius * 2); } else {
    circle.setFloatTrait("r", currentRadius * 0.5); } } ]]>
  </script>

  <!-- Act on each DOMActivate event -->
  <circle cx="300" cy="225" r="100" fill="red">
    <handler type="text/javascript" ev:event="DOMActivate">
      change(evt);
    </handler>
  </circle>

  <text
    x="300"
    y="480"
    font-family="Verdana"
    font-size="35"
    text-anchor="middle">
    Activate the circle to change its size
  </text>
</svg>
```

{{EmbedLiveSample("Examples", 640, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
