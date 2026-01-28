---
title: MouseEvent
slug: Web/API/MouseEvent
l10n:
  sourceCommit: 14d2fab5e6e2c9ddb412a347d54e554477082947
---

{{APIRef("UI Events")}}

Die **`MouseEvent`**-Schnittstelle repräsentiert Ereignisse, die durch Benutzerinteraktion mit einem Zeigegerät (wie einer Maus) auftreten. Häufige Ereignisse, die diese Schnittstelle verwenden, schließen [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event) ein.

`MouseEvent` leitet sich von [`UIEvent`](/de/docs/Web/API/UIEvent) ab, welches wiederum von [`Event`](/de/docs/Web/API/Event) abgeleitet ist. Obwohl die Methode [`MouseEvent.initMouseEvent()`](/de/docs/Web/API/MouseEvent/initMouseEvent) aus Gründen der Abwärtskompatibilität erhalten bleibt, sollte die Erstellung eines `MouseEvent`-Objekts mit dem [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent)-Konstruktor erfolgen.

Mehrere spezifischere Ereignisse basieren auf `MouseEvent`, darunter [`WheelEvent`](/de/docs/Web/API/WheelEvent), [`DragEvent`](/de/docs/Web/API/DragEvent) und [`PointerEvent`](/de/docs/Web/API/PointerEvent).

{{InheritanceDiagram}}

## Konstruktor

- [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent)
  - : Erstellt ein `MouseEvent`-Objekt.

## Statische Eigenschaften

- [`MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN`](/de/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN_static) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimal erforderliche Kraft für einen normalen Klick.
- [`MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN`](/de/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN_static) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimal erforderliche Kraft für einen Force-Klick.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) {{ReadOnlyInline}}
  - : Die Nummer der Taste, die gedrückt oder losgelassen wurde (falls zutreffend), als das Mausereignis ausgelöst wurde.
- [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons) {{ReadOnlyInline}}
  - : Die Tasten, die gedrückt wurden (falls vorhanden), als das Mausereignis ausgelöst wurde.
- [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#viewport).
- [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#viewport).
- [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>control</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.layerX`](/de/docs/Web/API/MouseEvent/layerX) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.layerY`](/de/docs/Web/API/MouseEvent/layerY) {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>meta</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten Bewegungseignisses desselben Typs (ein [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) oder [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)).
- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten Bewegungseignisses desselben Typs (ein [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) oder [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)).
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des Innenrandes des Zielknotens.
- [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des Innenrandes des Zielknotens.
- [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.relatedTarget`](/de/docs/Web/API/MouseEvent/relatedTarget) {{ReadOnlyInline}}
  - : Das sekundäre Ziel für das Ereignis, falls vorhanden.
- [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#screen).
- [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#screen).
- [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>shift</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Typ des Geräts, das das Ereignis erzeugt hat (einer der `MOZ_SOURCE_*`-Konstanten). Dies ermöglicht es Ihnen zum Beispiel zu bestimmen, ob ein Mausereignis durch eine tatsächliche Maus oder durch ein Berührungsereignis erzeugt wurde (was die Genauigkeit beeinflussen könnte, mit der Sie die dem Ereignis zugeordneten Koordinaten interpretieren).
- [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der beim Klicken ausgeübte Druck.
- [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState)
  - : Gibt den aktuellen Zustand der angegebenen Modifikatortaste zurück. Weitere Details finden Sie bei [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState).
- [`MouseEvent.initMouseEvent()`](/de/docs/Web/API/MouseEvent/initMouseEvent) {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten `MouseEvent`. Wenn das Ereignis bereits versendet wurde, bewirkt diese Methode nichts.

## Beispiel

Dieses Beispiel zeigt die Simulation eines Klicks (programmatisches Generieren eines Klickeignisses) auf eine Checkbox mit DOM-Methoden. Der Zustand des Ereignisses (abgebrochen oder nicht) wird dann mit dem Rückgabewert der Methode [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) bestimmt.

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

- Der direkte Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent)
- [`PointerEvent`](/de/docs/Web/API/PointerEvent): Für fortgeschrittene Zeigegeräte-Ereignisse, einschließlich Multitouch
