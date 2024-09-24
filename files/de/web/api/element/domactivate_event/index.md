---
title: "Element: DOMActivate-Ereignis"
short-title: DOMActivate
slug: Web/API/Element/DOMActivate_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}{{Deprecated_Header}}

Das **`DOMActivate`**-Ereignis wird bei einem Element ausgelöst, wenn es aktiv wird, z. B. wenn es mit der Maus angeklickt wird oder eine Tastatureingabe verwendet wird, um zu ihm zu navigieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("DOMActivate", (event) => {});

onDOMActivate = (event) => {};
```

## Ereignistyp

Ein {{domxref("MouseEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

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
  <desc>Beispiel: Eine ECMAScript-Funktion mit einem DOMActivate-Ereignis aufrufen</desc>

  <!-- ECMAScript zur Änderung des Radius -->
  <script type="application/ecmascript">
    <![CDATA[ function change(evt) { const circle = evt.target; const
    currentRadius = circle.getFloatTrait("r"); if (currentRadius === 100) {
    circle.setFloatTrait("r", currentRadius * 2); } else {
    circle.setFloatTrait("r", currentRadius * 0.5); } } ]]>
  </script>

  <!-- Reagieren auf jedes DOMActivate-Ereignis -->
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
    Aktivieren Sie den Kreis, um seine Größe zu ändern
  </text>
</svg>
```

{{EmbedLiveSample("Examples", 640, 200)}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("MouseEvent")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
