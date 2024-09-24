---
title: MouseEvent
slug: Web/API/MouseEvent
l10n:
  sourceCommit: b965392d6e4f2c897e914a3b69dec3e2a4212782
---

{{APIRef("UI Events")}}

Die **`MouseEvent`**-Schnittstelle repräsentiert Ereignisse, die durch die Interaktion des Benutzers mit einem Zeigegerät (wie einer Maus) auftreten. Zu den häufigsten Ereignissen, die diese Schnittstelle verwenden, gehören {{domxref("Element/click_event", "click")}}, {{domxref("Element/dblclick_event", "dblclick")}}, {{domxref("Element/mouseup_event", "mouseup")}}, {{domxref("Element/mousedown_event", "mousedown")}}.

`MouseEvent` leitet sich von {{domxref("UIEvent")}} ab, das wiederum von {{domxref("Event")}} abgeleitet ist. Obwohl die Methode {{domxref("MouseEvent.initMouseEvent()")}} aus Gründen der Abwärtskompatibilität beibehalten wird, sollte ein `MouseEvent`-Objekt mit dem {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}-Konstruktor erstellt werden.

Mehrere spezifischere Ereignisse basieren auf `MouseEvent`, darunter {{domxref("WheelEvent")}}, {{domxref("DragEvent")}} und {{domxref("PointerEvent")}}.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}
  - : Erstellt ein `MouseEvent`-Objekt.

## Statische Eigenschaften

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN_static", "MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimale Kraft, die für einen normalen Klick erforderlich ist.
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN_static", "MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimale Kraft, die für einen erzwungenen Klick erforderlich ist.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihrer Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : Die Nummer der Taste, die gedrückt wurde (falls zutreffend), als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : Die Tasten, die (falls vorhanden) gedrückt wurden, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Viewport-Koordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>control</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Schicht zurück.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Schicht zurück.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>meta</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}}-Ereignisses.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}}-Ereignisses.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position der Polsterkante des Zielknotens.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position der Polsterkante des Zielknotens.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : Das sekundäre Ziel des Ereignisses, falls vorhanden.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>shift</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Gerätetyp, das das Ereignis generiert hat (eine der `MOZ_SOURCE_*` Konstanten). Dies ermöglicht es Ihnen beispielsweise zu bestimmen, ob ein Mausereignis durch eine echte Maus oder durch ein Berührungsereignis erzeugt wurde (was die Genauigkeit beeinflussen kann, mit der Sie die Koordinaten interpretieren, die mit dem Ereignis verbunden sind).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Die beim Klicken ausgeübte Druckmenge.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientY")}}.

## Instanz-Methoden

_Diese Schnittstelle erbt auch die Methoden ihrer Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("MouseEvent.getModifierState()")}}
  - : Gibt den aktuellen Status der angegebenen Modifikatortaste zurück. Siehe {{domxref("KeyboardEvent.getModifierState", "KeyboardEvent.getModifierState()")}} für weitere Details.
- {{domxref("MouseEvent.initMouseEvent()")}} {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten `MouseEvent`. Wenn das Ereignis bereits gesendet wurde, tut diese Methode nichts.

## Beispiel

Dieses Beispiel veranschaulicht das Simulieren eines Klicks (programmatisches Generieren eines Klick-Ereignisses) auf einem Kontrollkästchen mithilfe von DOM-Methoden. Der Ereignisstatus (abgebrochen oder nicht) wird dann mit dem Rückgabewert der Methode {{domxref("EventTarget.dispatchEvent", "EventTarget.dispatchEvent()")}} bestimmt.

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

- Sein direkter Elternteil, {{domxref("UIEvent")}}
- {{domxref("PointerEvent")}}: Für erweiterte Zeigereignisse, einschließlich Multi-Touch.
