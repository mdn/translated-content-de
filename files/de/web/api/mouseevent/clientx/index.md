---
title: "MouseEvent: clientX Eigenschaft"
short-title: clientX
slug: Web/API/MouseEvent/clientX
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`clientX`**-Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces liefert die horizontale Koordinate innerhalb des Anwendungs-{{Glossary("viewport", "Viewports")}}, an der das Ereignis auftrat (im Gegensatz zur Koordinate innerhalb der Seite).

Beispielsweise wird ein Klick auf den linken Rand des Viewports immer ein Mausereignis mit einem `clientX`-Wert von `0` ergeben, unabhängig davon, ob die Seite horizontal gescrollt wurde oder nicht.

## Wert

Ein `double`-Gleitkommawert in Pixeln.

## Beispiele

Dieses Beispiel zeigt die Koordinaten Ihrer Maus an, wann immer Sie das [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis auslösen.

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
- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
