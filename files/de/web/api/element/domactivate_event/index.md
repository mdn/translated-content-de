---
title: "Element: DOMActivate-Ereignis"
short-title: DOMActivate
slug: Web/API/Element/DOMActivate_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}{{Deprecated_Header}}

Das **`DOMActivate`**-Ereignis wird bei einem Element ausgelöst, wenn es aktiv wird, zum Beispiel, wenn es mit der Maus angeklickt oder per Tastendruck darauf zugegriffen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("DOMActivate", (event) => {});

onDOMActivate = (event) => {};
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
  <desc>Example: invoke an ECMAScript function from a DOMActivate event</desc>

  <!-- ECMAScript to change the radius -->
  <script type="application/ecmascript">
    <![CDATA[ function change(evt) { const circle = evt.target; const
    currentRadius = circle.getFloatTrait("r"); if (currentRadius === 100) {
    circle.setFloatTrait("r", currentRadius * 2); } else {
    circle.setFloatTrait("r", currentRadius * 0.5); } } ]]>
  </script>

  <!-- Act on each DOMActivate event -->
  <circle cx="300" cy="225" r="100" fill="red">
    <handler type="application/ecmascript" ev:event="DOMActivate">
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
