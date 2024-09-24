---
title: "MouseEvent: clientX-Eigenschaft"
short-title: clientX
slug: Web/API/MouseEvent/clientX
l10n:
  sourceCommit: f452e53438ee1fc54baa7bf4eac147c354615702
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`clientX`** des {{domxref("MouseEvent")}}-Interfaces liefert die horizontale Koordinate innerhalb des Anwendungs-{{glossary("viewport")}}, an der das Ereignis aufgetreten ist (im Gegensatz zur Koordinate innerhalb der Seite).

Zum Beispiel führt ein Klick auf den linken Rand des Viewports immer zu einem Mausereignis mit einem `clientX`-Wert von `0`, unabhängig davon, ob die Seite horizontal gescrollt ist.

## Wert

Ein `double`-Gleitkommawert in Pixeln.

## Beispiele

Dieses Beispiel zeigt die Koordinaten Ihrer Maus an, wann immer Sie das {{domxref("Element/mousemove_event", "mousemove")}}-Ereignis auslösen.

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
- {{domxref("MouseEvent.clientY","clientY")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
