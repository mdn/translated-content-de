---
title: "Window: innerHeight-Eigenschaft"
short-title: innerHeight
slug: Web/API/Window/innerHeight
l10n:
  sourceCommit: 1e4403fbf4441e35ca96e8b8c9e258057b74d06e
---

{{APIRef}}

Die schreibgeschützte **`innerHeight`**-Eigenschaft der
{{domxref("Window")}}-Schnittstelle gibt die Innenhöhe des Fensters in Pixel zurück,
einschließlich der Höhe der horizontalen Scroll-Leiste, falls vorhanden.

Der Wert von `innerHeight` stammt aus der Höhe des
{{Glossary("layout viewport")}} des Fensters. Die Breite kann mit der
{{domxref("Window.innerWidth", "innerWidth")}}-Eigenschaft ermittelt werden.

## Wert

Ein ganzzahliger Wert, der die Höhe des Layout-Viewports des Fensters in Pixel angibt. Die Eigenschaft
ist schreibgeschützt und hat keinen Standardwert.

Um die Höhe des Fensters zu ändern, rufen Sie eine der Resize-Methoden wie
{{domxref("Window.resizeTo", "resizeTo()")}} oder {{domxref("Window.resizeBy", "resizeBy()")}} auf.

## Verwendungshinweise

Um die Höhe des Fensters abzüglich seiner horizontalen Scroll-Leiste und eventueller Ränder zu erhalten, verwenden Sie stattdessen die
{{domxref("Element.clientHeight", "clientHeight")}}-Eigenschaft des Wurzel-{{HTMLElement("html")}}-Elements.

Sowohl `innerHeight` als auch `innerWidth` sind bei jedem Fenster verfügbar
oder bei jedem Objekt, das sich wie ein Fenster verhält, wie z.B. ein Tab oder Frame.

## Beispiele

### Bei Annahme eines Framesets

```js
console.log(window.innerHeight); // oder

console.log(self.innerHeight);
// gibt die Höhe des Frame-Viewports innerhalb des Framesets aus

console.log(parent.innerHeight);
// gibt die Höhe des Viewports des nächstgelegenen Framesets aus

console.log(top.innerHeight);
// gibt die Höhe des Viewports des äußersten Framesets aus
```

Um die Größe eines Fensters zu ändern, siehe {{domxref("window.resizeBy()")}} und
{{domxref("window.resizeTo()")}}.

Um die Außenhöhe eines Fensters zu erhalten, d.h. die Höhe des gesamten Browserfensters, siehe
{{domxref("window.outerHeight")}}.

### Grafisches Beispiel

Die folgende Abbildung zeigt den Unterschied zwischen `outerHeight` und
`innerHeight`.

![Abbildung von innerHeight vs. outerHeight](firefoxinnervsouterheight2.png)

## Demo

### HTML

```html
<p>Größen Sie das Browserfenster, um das <code>resize</code>-Ereignis auszulösen.</p>
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

Sie können auch {{LiveSampleLink('Demo', 'die Ergebnisse des Demo-Codes auf einer separaten Seite anzeigen')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
