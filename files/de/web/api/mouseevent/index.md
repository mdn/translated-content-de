---
title: MouseEvent
slug: Web/API/MouseEvent
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

{{APIRef("Pointer Events")}}

Die **`MouseEvent`**-Schnittstelle repräsentiert Ereignisse, die durch die Interaktion des Benutzers mit einem Zeigegerät (z. B. einer Maus) entstehen.
Zu den häufigen Ereignissen, die diese Schnittstelle verwenden, gehören [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event).

`MouseEvent` erbt von [`UIEvent`](/de/docs/Web/API/UIEvent), das wiederum von [`Event`](/de/docs/Web/API/Event) erbt.
Obwohl die Methode [`MouseEvent.initMouseEvent()`](/de/docs/Web/API/MouseEvent/initMouseEvent) aus Gründen der Abwärtskompatibilität erhalten bleibt, sollten Sie zum Erstellen eines `MouseEvent`-Objekts den Konstruktor [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) verwenden.

Mehrere spezifischere Ereignistypen basieren auf `MouseEvent`, darunter [`WheelEvent`](/de/docs/Web/API/WheelEvent), [`DragEvent`](/de/docs/Web/API/DragEvent) und [`PointerEvent`](/de/docs/Web/API/PointerEvent).

{{InheritanceDiagram}}

## Konstruktor

- [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent)
  - : Erstellt ein `MouseEvent`-Objekt.

## Statische Eigenschaften

- [`MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN`](/de/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN_static) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Mindestdruck, der für einen normalen Klick erforderlich ist.
- [`MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN`](/de/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN_static) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Mindestdruck, der für einen Force Click erforderlich ist.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer übergeordneten Schnittstellen [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.altKey`](/de/docs/Web/API/MouseEvent/altKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Alt</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) {{ReadOnlyInline}}
  - : Die Nummer der Maustaste, die beim Auslösen des Mausereignisses gedrückt oder losgelassen wurde (falls zutreffend).
- [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons) {{ReadOnlyInline}}
  - : Die Maustasten, die beim Auslösen des Mausereignisses gedrückt waren (falls vorhanden).
- [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#viewport).
- [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#viewport).
- [`MouseEvent.ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Strg</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.layerX`](/de/docs/Web/API/MouseEvent/layerX) {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.layerY`](/de/docs/Web/API/MouseEvent/layerY) {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- [`MouseEvent.metaKey`](/de/docs/Web/API/MouseEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Meta</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.movementX`](/de/docs/Web/API/MouseEvent/movementX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten Bewegungsereignisses desselben Typs (eines [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-, [`pointermove`](/de/docs/Web/API/Element/pointermove_event)- oder [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)-Ereignisses).
- [`MouseEvent.movementY`](/de/docs/Web/API/MouseEvent/movementY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten Bewegungsereignisses desselben Typs (eines [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-, [`pointermove`](/de/docs/Web/API/Element/pointermove_event)- oder [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)-Ereignisses).
- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position der inneren Kante des Padding-Bereichs des Zielknotens.
- [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position der inneren Kante des Padding-Bereichs des Zielknotens.
- [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- [`MouseEvent.relatedTarget`](/de/docs/Web/API/MouseEvent/relatedTarget) {{ReadOnlyInline}}
  - : Das sekundäre Ziel des Ereignisses, falls vorhanden.
- [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#screen).
- [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#screen).
- [`MouseEvent.shiftKey`](/de/docs/Web/API/MouseEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Umschalt</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Typ des Geräts, das das Ereignis erzeugt hat (eine der `MOZ_SOURCE_*`-Konstanten).
    Damit können Sie beispielsweise feststellen, ob ein Mausereignis von einer tatsächlichen Maus oder durch ein Touch-Ereignis erzeugt wurde. Dies kann beeinflussen, wie genau Sie die mit dem Ereignis verbundenen Koordinaten interpretieren.
- [`MouseEvent.webkitForce`](/de/docs/Web/API/MouseEvent/webkitForce) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der beim Klicken ausgeübte Druck.
- [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX).
- [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) {{ReadOnlyInline}}
  - : Alias für [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY).

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden ihrer übergeordneten Schnittstellen [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState)
  - : Gibt den aktuellen Zustand der angegebenen Modifikatortaste zurück. Weitere Informationen finden Sie unter [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState).
- [`MouseEvent.initMouseEvent()`](/de/docs/Web/API/MouseEvent/initMouseEvent) {{deprecated_inline}}
  - : Initialisiert die Werte eines erstellten `MouseEvent`. Wenn das Ereignis bereits ausgelöst wurde, bewirkt diese Methode nichts.

## Beispiel

Dieses Beispiel zeigt, wie mithilfe von DOM-Methoden ein Klick auf ein Kontrollkästchen simuliert wird, indem programmgesteuert ein Klickereignis erzeugt wird.
Ob das Ereignis abgebrochen wurde, wird anschließend anhand des Rückgabewerts der Methode [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) bestimmt.

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

- Die direkt übergeordnete Schnittstelle [`UIEvent`](/de/docs/Web/API/UIEvent)
- [`PointerEvent`](/de/docs/Web/API/PointerEvent): Für erweiterte Zeigerereignisse, einschließlich Multi-Touch
