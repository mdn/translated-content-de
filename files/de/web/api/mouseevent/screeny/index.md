---
title: "MouseEvent: screenY-Eigenschaft"
short-title: screenY
slug: Web/API/MouseEvent/screenY
l10n:
  sourceCommit: f452e53438ee1fc54baa7bf4eac147c354615702
---

{{APIRef("UI Events")}}

Die **`screenY`** ist eine schreibgeschützte Eigenschaft des {{domxref("MouseEvent")}}-Interfaces, die die vertikale Koordinate (Offset) des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen) angibt.

## Wert

Ein `double`-Gleitkommawert in Pixeln.

Frühere Versionen der Spezifikation definierten dies als eine Ganzzahl, die sich auf die Anzahl der Pixel bezieht.

## Beispiele

Dieses Beispiel zeigt die Koordinaten Ihrer Maus an, wann immer Sie das {{domxref("Element/mousemove_event", "mousemove")}}-Ereignis auslösen.

### HTML

```html
<p>Bewegen Sie die Maus, um ihre Position zu sehen.</p>
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
- {{ domxref("MouseEvent.screenX","screenX") }}
- {{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
