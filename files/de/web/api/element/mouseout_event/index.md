---
title: "Element: mouseout Event"
short-title: mouseout
slug: Web/API/Element/mouseout_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`mouseout`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Zeigegerät (in der Regel eine Maus) verwendet wird, um den Cursor so zu bewegen, dass er sich nicht mehr innerhalb des Elements oder eines seiner Kindelemente befindet.

`mouseout` wird auch an ein Element übermittelt, wenn der Cursor ein Kindelement betritt, da das Kindelement den sichtbaren Bereich des Elements verdeckt.

Wenn das Ziel-Element Kindelemente hat, werden `mouseout`- und `mouseover`-Ereignisse ausgelöst, wenn sich die Maus über die Grenzen dieser Elemente bewegt, nicht nur über das Ziel-Element selbst. In der Regel ist das Verhalten von [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) sinnvoller, da sie nicht durch das Bewegen in Kindelemente beeinflusst werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("mouseout", (event) => { })

onmouseout = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) {{ReadOnlyInline}}
  - : Die Zahl der Taste, die (falls zutreffend) gedrückt wurde, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons) {{ReadOnlyInline}}
  - : Die Tasten, die gedrückt werden (falls vorhanden), als das Mausereignis ausgelöst wurde.
- [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>control</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.layerX`](/de/docs/Web/API/MouseEvent/layerX) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.layerY`](/de/docs/Web/API/MouseEvent/layerY) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>meta</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisses.
- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisses.
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position der Innenkante des Zielknotens.
- [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position der Innenkante des Zielknotens.
- [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.relatedTarget`](/de/docs/Web/API/MouseEvent/relatedTarget) {{ReadOnlyInline}}
  - : Das sekundäre Ziel des Ereignisses, falls vorhanden.
- [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>shift</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Typ des Gerätes, das das Ereignis erzeugt hat (einer der `MOZ_SOURCE_*` Konstanten).
    Dies ermöglicht es Ihnen beispielsweise, festzustellen, ob ein Mausereignis tatsächlich von einer Maus oder von einem Touch-Ereignis generiert wurde (was die Genauigkeit beeinflussen könnte, mit der Sie die dem Ereignis zugeordneten Koordinaten interpretieren).
- [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Die Menge an Druck, die beim Klicken angewendet wird.
- [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).

## Beispiele

Die folgenden Beispiele zeigen die Verwendung des `mouseout`-Ereignisses.

### mouseout und mouseleave

Das folgende Beispiel veranschaulicht den Unterschied zwischen `mouseout`- und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)-Ereignissen. Das `mouseleave`-Ereignis wird dem {{HTMLElement("ul")}} hinzugefügt, um die Liste lila zu färben, wann immer die Maus die `<ul>` verlässt. `mouseout` wird der Liste hinzugefügt, um das gezielte Element orange zu färben, wenn die Maus es verlässt.

Wenn Sie dies ausprobieren, werden Sie feststellen, dass `mouseout` an die einzelnen Listenelemente übermittelt wird, während `mouseleave` an die gesamte Liste geht, dank der Hierarchie der Elemente und der Tatsache, dass Listenelemente das zugrunde liegende `<ul>` verdecken.

#### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

#### JavaScript

```js
const test = document.getElementById("test");

// Briefly make the list purple when the mouse moves off the
// <ul> element
test.addEventListener(
  "mouseleave",
  (event) => {
    // highlight the mouseleave target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 1000);
  },
  false,
);

// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener(
  "mouseout",
  (event) => {
    // highlight the mouseout target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);
```

#### Ergebnis

{{EmbedLiveSample("mouseout_and_mouseleave", 640, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
