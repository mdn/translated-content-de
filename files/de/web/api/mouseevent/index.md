---
title: MouseEvent
slug: Web/API/MouseEvent
l10n:
  sourceCommit: 983647fb3984f0dae5573116f7b69ed9b4085634
---

{{APIRef("UI Events")}}

Das **`MouseEvent`**-Interface repräsentiert Ereignisse, die durch die Interaktion des Benutzers mit einem Zeigegerät (wie einer Maus) auftreten. Häufige Ereignisse, die dieses Interface verwenden, sind [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event), [`mousedown`](/de/docs/Web/API/Element/mousedown_event).

`MouseEvent` leitet sich von [`UIEvent`](/de/docs/Web/API/UIEvent) ab, welches wiederum von [`Event`](/de/docs/Web/API/Event) abgeleitet ist. Obwohl die Methode [`MouseEvent.initMouseEvent()`](/de/docs/Web/API/MouseEvent/initMouseEvent) aus Gründen der Rückwärtskompatibilität beibehalten wird, sollte die Erstellung eines `MouseEvent`-Objekts mit dem [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent)-Konstruktor erfolgen.

Mehrere spezifischere Ereignisse basieren auf `MouseEvent`, einschließlich [`WheelEvent`](/de/docs/Web/API/WheelEvent), [`DragEvent`](/de/docs/Web/API/DragEvent) und [`PointerEvent`](/de/docs/Web/API/PointerEvent).

{{InheritanceDiagram}}

## Konstruktor

- [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent)
  - : Erstellt ein `MouseEvent`-Objekt.

## Statische Eigenschaften

- [`MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN`](/de/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN_static) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimale Kraft, die für einen normalen Klick erforderlich ist.
- [`MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN`](/de/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN_static) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimale Kraft, die für einen Force Click erforderlich ist.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) {{ReadOnlyInline}}
  - : Die Nummer der Taste, die beim Auslösen des Mausereignisses gedrückt oder losgelassen (sofern zutreffend) wurde.
- [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons) {{ReadOnlyInline}}
  - : Die Tasten, die beim Auslösen des Mausereignisses gedrückt waren (falls vorhanden).
- [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>control</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- [`MouseEvent.layerX`](/de/docs/Web/API/MouseEvent/layerX) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.layerY`](/de/docs/Web/API/MouseEvent/layerY) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>meta</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisses.
- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisses.
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des Innenrandes des Zielknotens.
- [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des Innenrandes des Zielknotens.
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
  - : Gibt `true` zurück, wenn die <kbd>shift</kbd>-Taste beim Auslösen des Mausereignisses gedrückt war.
- [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Typ des Geräts, das das Ereignis erzeugt hat (einer der `MOZ_SOURCE_*`-Konstanten). Damit können Sie beispielsweise feststellen, ob ein Mausereignis durch eine tatsächliche Maus oder durch ein Touch-Ereignis erzeugt wurde (was die Genauigkeit beeinflussen könnte, mit der Sie die mit dem Ereignis verknüpften Koordinaten interpretieren).
- [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Druck, der beim Klicken ausgeübt wird.
- [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).

## Instanz-Methoden

_Dieses Interface erbt auch Methoden seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState)
  - : Gibt den aktuellen Zustand der angegebenen Modifizierertaste zurück. Siehe [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) für Details.
- [`MouseEvent.initMouseEvent()`](/de/docs/Web/API/MouseEvent/initMouseEvent) {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten `MouseEvent`. Falls das Ereignis bereits gesendet wurde, tut diese Methode nichts.

## Beispiel

Dieses Beispiel demonstriert die Simulation eines Klicks (programmgesteuertes Erzeugen eines Klickereignisses) auf ein Kontrollkästchen mit DOM-Methoden. Der Zustand des Ereignisses (abgebrochen oder nicht) wird dann mit dem Rückgabewert der Methode [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) bestimmt.

### HTML

```html
<p>
  <label><input type="checkbox" id="checkbox" /> Checked</label>
</p>
<p>
  <button id="button">Click me to send a MouseEvent to the checkbox</button>
</p>
```

### JavaScript

```js
function simulateClick() {
  // Get the element to send a click event
  const cb = document.getElementById("checkbox");

  // Create a synthetic click MouseEvent
  let evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // Send the event to the checkbox element
  cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener("click", simulateClick);
```

### Ergebnis

{{EmbedLiveSample('Example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Sein direkter Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent)
- [`PointerEvent`](/de/docs/Web/API/PointerEvent): Für fortgeschrittene Zeigerereignisse, einschließlich Multi-Touch
