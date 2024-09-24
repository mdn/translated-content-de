---
title: "Fenster: innerWidth-Eigenschaft"
short-title: innerWidth
slug: Web/API/Window/innerWidth
l10n:
  sourceCommit: 277e1432bea11473d0c638cd720130c44b26b3f4
---

{{APIRef}}

Die schreibgeschützte {{domxref("Window")}}-Eigenschaft **`innerWidth`** gibt die innere Breite des Fensters in Pixel zurück (also die Breite des {{Glossary("layout viewport")}} des Fensters). Das beinhaltet die Breite der vertikalen Scrollleiste, falls vorhanden.

Ähnlich kann die innere Höhe des Fensters (also die Höhe des Layout-Viewports) über die {{domxref("Window.innerHeight", "innerHeight")}}-Eigenschaft ermittelt werden. Diese Messung berücksichtigt auch die Höhe der horizontalen Scrollleiste, falls sie sichtbar ist.

## Wert

Ein ganzzahliger Wert, der die Breite des Layout-Viewports des Fensters in Pixel angibt. Diese Eigenschaft ist schreibgeschützt und hat keinen Standardwert.

Um die Breite des Fensters zu ändern, verwenden Sie eine der {{domxref("Window")}}-Methoden zum Ändern der Fenstergröße, wie {{domxref("Window.resizeBy", "resizeBy()")}} oder {{domxref("Window.resizeTo", "resizeTo()")}}.

## Verwendungshinweise

Wenn Sie die Breite des Fensters abzüglich der Scrollleiste und der Rahmen benötigen, verwenden Sie stattdessen die {{domxref("Element.clientWidth", "clientWidth")}}-Eigenschaft des root {{HTMLElement("html")}}-Elements.

Die `innerWidth`-Eigenschaft ist in jedem Fenster oder Objekt verfügbar, das sich wie ein Fenster verhält, wie z. B. ein Frame oder Tab.

## Beispiele

```js
// Dies wird die Breite des Viewports protokollieren
console.log(window.innerWidth);

// Dies wird die Breite des Frame-Viewports innerhalb eines Framesets protokollieren
console.log(self.innerWidth);

// Dies wird die Breite des Viewports des nächsten Framesets protokollieren
console.log(parent.innerWidth);

// Dies wird die Breite des Viewports des äußersten Framesets protokollieren
console.log(top.innerWidth);
```

## Demo

### HTML

```html
<p>Ändern Sie die Größe des Browserfensters, um das <code>resize</code>-Ereignis auszulösen.</p>
<p>Fensterhöhe: <span id="height"></span></p>
<p>Fensterbreite: <span id="width"></span></p>
```

### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);
```

### Ergebnis

{{EmbedLiveSample('Demo')}}

Sie können die {{LiveSampleLink('Demo', 'Ergebnisse des Demo-Codes auf einer separaten Seite anzeigen')}}.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.outerWidth")}}
- {{domxref("window.innerHeight")}}
- {{domxref("window.outerHeight")}}
