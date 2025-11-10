---
title: "MouseEvent: screenX-Eigenschaft"
short-title: screenX
slug: Web/API/MouseEvent/screenX
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("UI Events")}}

Die **`screenX`**-Eigenschaft der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die horizontale Koordinate (Offset) des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems#screen) bereitstellt.

> [!NOTE]
> In einer Multi-Screen-Umgebung werden horizontal ausgerichtete Bildschirme als einzelnes Gerät behandelt, und daher erhöht sich der Wertebereich der `screenX`-Eigenschaft auf die kombinierte Breite der Bildschirme.

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

### Ereignis weiterleiten

Wenn Sie Ereignisse im Fenster, im Dokument oder in anderen großen Elementen erfassen, können Sie die Koordinaten dieses Ereignisses (z. B. eines Klicks) erhalten und es ordnungsgemäß weiterleiten, wie das folgende Beispiel zeigt:

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
- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
