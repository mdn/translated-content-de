---
title: "MouseEvent: screenX Eigenschaft"
short-title: screenX
slug: Web/API/MouseEvent/screenX
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die **`screenX`** schreibgeschützte Eigenschaft des [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interfaces liefert die horizontale Koordinate (Offset) des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).

> [!NOTE]
> In einer Multi-Screen-Umgebung werden Bildschirme, die horizontal ausgerichtet sind, als ein einzelnes Gerät behandelt, und somit wird der Bereich des `screenX`-Werts auf die kombinierte Breite der Bildschirme erweitert.

## Wert

Ein `double` Fließkommawert in Pixeln.

Frühere Versionen der Spezifikation definierten dies als eine ganze Zahl, die sich auf die Anzahl der Pixel bezieht.

## Beispiele

Dieses Beispiel zeigt die Koordinaten Ihrer Maus an, wann immer Sie das [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignis auslösen.

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

### Ein Ereignis routen

Wenn Sie Ereignisse im Fenster, Dokument oder anderen großen Elementen abfangen, können Sie die Koordinaten dieses Ereignisses (z.B. ein Klick) erfassen und es korrekt routen, wie das folgende Beispiel zeigt:

```js
function checkClickMap(e) {
  if (e.screenX < 50) doRedButton();
  if (50 <= e.screenX && e.screenX < 100) doYellowButton();
  if (e.screenX >= 100) doRedButton();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`screenY`](/de/docs/Web/API/MouseEvent/screenY)
- [`clientX`](/de/docs/Web/API/MouseEvent/clientX) / [`clientY`](/de/docs/Web/API/MouseEvent/clientY)
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
