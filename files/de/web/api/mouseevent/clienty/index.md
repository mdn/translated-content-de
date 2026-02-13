---
title: "MouseEvent: clientY-Eigenschaft"
short-title: clientY
slug: Web/API/MouseEvent/clientY
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die schreibgeschützte **`clientY`**-Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces liefert die vertikale Koordinate innerhalb des {{Glossary("viewport", "Viewports")}} der Anwendung, an der das Ereignis aufgetreten ist (im Gegensatz zur Koordinate innerhalb der Seite).

Ein Klick auf den oberen Rand des Viewports führt zum Beispiel immer zu einem Mausereignis mit einem `clientY`-Wert von `0`, unabhängig davon, ob die Seite vertikal gescrollt ist oder nicht.

## Wert

Ein `double`-Gleitkommawert in Pixeln.

## Beispiele

Dieses Beispiel zeigt die Koordinaten Ihrer Maus, wann immer Sie das [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis auslösen.

### HTML

```html
<p>Move your mouse to see its position.</p>
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

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`clientX`](/de/docs/Web/API/MouseEvent/clientX)
- [`screenX`](/de/docs/Web/API/MouseEvent/screenX) / [`screenY`](/de/docs/Web/API/MouseEvent/screenY)
- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
