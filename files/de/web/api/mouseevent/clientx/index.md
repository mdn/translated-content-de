---
title: "MouseEvent: clientX-Eigenschaft"
short-title: clientX
slug: Web/API/MouseEvent/clientX
l10n:
  sourceCommit: f452e53438ee1fc54baa7bf4eac147c354615702
---

{{APIRef("UI Events")}}

Die **`clientX`**-Eigenschaft des schreibgeschützten [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces gibt die horizontale Koordinate innerhalb des Anwendungs-[viewports](/de/docs/Glossary/viewport) an, an der das Ereignis ausgelöst wurde (im Gegensatz zur Koordinate innerhalb der Seite).

Zum Beispiel führt ein Klick auf den linken Rand des Viewports stets zu einem Mausereignis mit einem `clientX`-Wert von `0`, unabhängig davon, ob die Seite horizontal gescrollt ist.

## Wert

Ein `double` Gleitkommawert in Pixeln.

## Beispiele

Dieses Beispiel zeigt die Koordinaten Ihrer Maus, wenn Sie das [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis auslösen.

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
- [`clientY`](/de/docs/Web/API/MouseEvent/clientY)
- [`screenX`](/de/docs/Web/API/MouseEvent/screenX) / [`screenY`](/de/docs/Web/API/MouseEvent/screenY)
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
