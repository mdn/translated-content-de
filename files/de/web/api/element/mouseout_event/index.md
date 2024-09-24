---
title: "Element: mouseout Ereignis"
short-title: mouseout
slug: Web/API/Element/mouseout_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

Das **`mouseout`** Ereignis wird bei einem {{domxref("Element")}} ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) verwendet wird, um den Cursor zu bewegen, sodass er nicht mehr innerhalb des Elements oder eines seiner Kinder enthalten ist.

`mouseout` wird auch an ein Element geliefert, wenn der Cursor ein Kindelement betritt, da das Kindelement den sichtbaren Bereich des Elements verdeckt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("mouseout", (event) => {});

onmouseout = (event) => {};
```

## Event-Typ

Ein {{domxref("MouseEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Event-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : Die Nummer der gedrückten Taste (falls zutreffend), als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : Die zum Zeitpunkt des auslösenden Mausereignisses gedrückten Tasten (falls vorhanden).
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>control</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>meta</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}}-Ereignisses.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}}-Ereignisses.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des Randelements des Zielknotens.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des Randelements des Zielknotens.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : Das sekundäre Ziel für das Ereignis, falls vorhanden.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>shift</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Gerätetyp, der das Ereignis erzeugt hat (einer der `MOZ_SOURCE_*` Konstanten). Dies ermöglicht es Ihnen beispielsweise festzustellen, ob ein Mausereignis tatsächlich von einer Maus oder durch ein Touch-Ereignis erzeugt wurde (was die Genauigkeit der Interpretation der mit dem Ereignis verbundenen Koordinaten beeinflussen kann).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der angewandte Druck beim Klicken.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientY")}}.

## Beispiele

Die folgenden Beispiele zeigen die Verwendung des `mouseout`-Ereignisses.

### mouseout und mouseleave

Das folgende Beispiel verdeutlicht den Unterschied zwischen den `mouseout`- und {{domxref("Element/mouseleave_event", "mouseleave")}}-Ereignissen. Das `mouseleave`-Ereignis wird dem {{HTMLElement("ul")}} hinzugefügt, um die Liste lila zu färben, wenn die Maus die `<ul>` verlässt. `mouseout` wird der Liste hinzugefügt, um das Ziel-Element orange zu färben, wenn die Maus es verlässt.

Wenn Sie dies ausprobieren, werden Sie feststellen, dass `mouseout` an die einzelnen Listenelemente geliefert wird, während `mouseleave` an die gesamte Liste geht, was der Hierarchie der Elemente und der Tatsache geschuldet ist, dass Listenelemente die darunterliegende `<ul>` verdecken.

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

// Kurzzeitig die Liste lila färben, wenn die Maus das 
// <ul>-Element verlässt
test.addEventListener(
  "mouseleave",
  (event) => {
    // Das mouseleave-Ziel hervorheben
    event.target.style.color = "purple";

    // Die Farbe nach einer kurzen Verzögerung zurücksetzen
    setTimeout(() => {
      event.target.style.color = "";
    }, 1000);
  },
  false,
);

// Kurzzeitig ein <li> orange färben, wenn die Maus es verlässt
test.addEventListener(
  "mouseout",
  (event) => {
    // Das mouseout-Ziel hervorheben
    event.target.style.color = "orange";

    // Die Farbe nach einer kurzen Verzögerung zurücksetzen
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
