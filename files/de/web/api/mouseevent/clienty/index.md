---
title: "MouseEvent: clientY-Eigenschaft"
short-title: clientY
slug: Web/API/MouseEvent/clientY
l10n:
  sourceCommit: f452e53438ee1fc54baa7bf4eac147c354615702
---

{{APIRef("UI Events")}}

Die **`clientY`**-Eigenschaft der {{domxref("MouseEvent")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die vertikale Koordinate innerhalb des {{glossary("Viewports")}} der Anwendung bereitstellt, an der das Ereignis aufgetreten ist (im Gegensatz zur Koordinate innerhalb der Seite).

Ein Beispiel: Ein Klick auf den oberen Rand des Viewports führt immer zu einem Mausereignis mit einem `clientY`-Wert von `0`, unabhängig davon, ob die Seite vertikal gescrollt ist.

## Wert

Ein `double`-Fließkommawert in Pixeln.

## Beispiele

Dieses Beispiel zeigt die Koordinaten Ihrer Maus, wann immer Sie das {{domxref("Element/mousemove_event", "mousemove")}}-Ereignis auslösen.

### HTML

```html
<p>Bewegen Sie Ihre Maus, um ihre Position zu sehen.</p>
<p id="screen-log"></p>
```

### JavaScript

```js
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("MouseEvent") }}
- {{domxref("MouseEvent.clientX","clientX")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
