---
title: "MouseEvent: clientY-Eigenschaft"
short-title: clientY
slug: Web/API/MouseEvent/clientY
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{APIRef("UI Events")}}

Die **`clientY`**-Eigenschaft (nur lesbar) des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces liefert die vertikale Koordinate innerhalb des {{Glossary("viewport", "Viewports")}} der Anwendung, an der das Ereignis auftrat (im Gegensatz zur Koordinate innerhalb der Seite).

Wenn Sie zum Beispiel auf den oberen Rand des Viewports klicken, ergibt dies immer ein Mausereignis mit einem `clientY`-Wert von `0`, unabhängig davon, ob die Seite vertikal gescrollt wurde.

## Wert

Ein `double`-Gleitkommawert in Pixeln.

## Beispiele

Dieses Beispiel zeigt die Koordinaten Ihrer Maus an, wenn Sie das [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis auslösen.

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
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
