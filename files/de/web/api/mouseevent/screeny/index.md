---
title: "MouseEvent: screenY-Eigenschaft"
short-title: screenY
slug: Web/API/MouseEvent/screenY
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("UI Events")}}

Die **`screenY`**-Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces ist eine schreibgeschützte Eigenschaft, die die vertikale Koordinate (den Offset) des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#screen) angibt.

## Wert

Ein `double`-Gleitkommawert in Pixel.

Frühere Versionen der Spezifikation definierten dies als Integer, der die Anzahl der Pixel angibt.

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
- [`screenX`](/de/docs/Web/API/MouseEvent/screenX)
- [`clientX`](/de/docs/Web/API/MouseEvent/clientX) / [`clientY`](/de/docs/Web/API/MouseEvent/clientY)
- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
