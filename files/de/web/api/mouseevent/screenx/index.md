---
title: "MouseEvent: screenX Eigenschaft"
short-title: screenX
slug: Web/API/MouseEvent/screenX
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die **`screenX`** schreibgeschützte Eigenschaft des {{domxref("MouseEvent")}}-Interfaces gibt die horizontale Koordinate (Versatz) des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen) an.

> [!NOTE]
> In einer Multi-Screen-Umgebung werden horizontal ausgerichtete Bildschirme als ein einziges Gerät behandelt, und daher erhöht sich der Bereich des `screenX`-Werts auf die kombinierte Breite der Bildschirme.

## Wert

Ein `double`-Gleitkommawert in Pixeln.

Frühere Versionen der Spezifikation definierten dies als eine ganze Zahl, die sich auf die Anzahl der Pixel bezieht.

## Beispiele

Dieses Beispiel zeigt die Koordinaten Ihrer Maus, wenn Sie das {{domxref("Element/mousemove_event", "mousemove")}}-Ereignis auslösen.

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

### Ereignis routing

Wenn Sie Ereignisse am Fenster, Dokument oder anderen geräumigen Elementen abfangen, können Sie die Koordinaten dieses Ereignisses (z. B. ein Klick) erhalten und korrekt weiterleiten, wie das folgende Beispiel zeigt:

```js
function checkClickMap(e) {
  if (e.screenX < 50) doRedButton();
  if (50 <= e.screenX && e.screenX < 100) doYellowButton();
  if (e.screenX >= 100) doRedButton();
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("MouseEvent") }}
- {{ domxref("MouseEvent.screenY","screenY") }}
- {{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
