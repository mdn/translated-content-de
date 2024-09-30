---
title: "MouseEvent: screenY-Eigenschaft"
short-title: screenY
slug: Web/API/MouseEvent/screenY
l10n:
  sourceCommit: f452e53438ee1fc54baa7bf4eac147c354615702
---

{{APIRef("UI Events")}}

Die **`screenY`** schreibgeschützte Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces gibt die vertikale Koordinate (Offset) des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen) an.

## Wert

Ein `double`-Gleitkommawert in Pixeln.

Frühere Versionen der Spezifikation definierten dies als ganze Zahl, die sich auf die Anzahl der Pixel bezieht.

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
- [`screenX`](/de/docs/Web/API/MouseEvent/screenX)
- [`clientX`](/de/docs/Web/API/MouseEvent/clientX) / [`clientY`](/de/docs/Web/API/MouseEvent/clientY)
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
