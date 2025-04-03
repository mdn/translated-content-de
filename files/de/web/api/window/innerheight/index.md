---
title: "Window: innerHeight-Eigenschaft"
short-title: innerHeight
slug: Web/API/Window/innerHeight
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Die schreibgeschützte **`innerHeight`**-Eigenschaft des
[`Window`](/de/docs/Web/API/Window)-Interfaces gibt die innere Höhe des Fensters in Pixeln zurück,
einschließlich der Höhe der horizontalen Scrollleiste, falls vorhanden.

Der Wert von `innerHeight` wird aus der Höhe des
{{Glossary("layout_viewport", "Layout-Viewports")}} des Fensters entnommen. Die Breite kann mit der
[`innerWidth`](/de/docs/Web/API/Window/innerWidth)-Eigenschaft abgerufen werden.

## Wert

Ein Ganzzahl-Wert, der die Höhe des Layout-Viewports des Fensters in Pixeln angibt. Die Eigenschaft
ist schreibgeschützt und hat keinen Standardwert.

Um die Höhe des Fensters zu ändern, rufen Sie eine der Resize-Methoden auf, wie z.B.
[`resizeTo()`](/de/docs/Web/API/Window/resizeTo) oder [`resizeBy()`](/de/docs/Web/API/Window/resizeBy).

## Nutzungshinweise

Um die Höhe des Fensters ohne die horizontale Scrollleiste und jegliche Rahmen zu erhalten, verwenden Sie
stattdessen die [`clientHeight`](/de/docs/Web/API/Element/clientHeight)-Eigenschaft des Wurzelelements {{HTMLElement("html")}}.

Sowohl `innerHeight` als auch `innerWidth` sind in jedem Fenster verfügbar
oder in jedem Objekt, das sich wie ein Fenster verhält, wie z.B. ein Tab oder Frame.

## Beispiele

### Angenommen, ein Frameset

```js
console.log(window.innerHeight); // or

console.log(self.innerHeight);
// will log the height of the frame viewport within the frameset

console.log(parent.innerHeight);
// will log the height of the viewport of the closest frameset

console.log(top.innerHeight);
// will log the height of the viewport of the outermost frameset
```

Um die Größe eines Fensters zu ändern, siehe [`window.resizeBy()`](/de/docs/Web/API/Window/resizeBy) und
[`window.resizeTo()`](/de/docs/Web/API/Window/resizeTo).

Um die äußere Höhe eines Fensters zu erhalten, d.h. die Höhe des gesamten Browserfensters, siehe
[`window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Grafisches Beispiel

Die folgende Abbildung zeigt den Unterschied zwischen `outerHeight` und
`innerHeight`.

![innerHeight versus outerHeight Abbildung](firefoxinnervsouterheight2.png)

## Demo

### HTML

```html
<p>Resize the browser window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
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

- [`window.innerWidth`](/de/docs/Web/API/Window/innerWidth)
- [`window.outerHeight`](/de/docs/Web/API/Window/outerHeight)
- [`window.outerWidth`](/de/docs/Web/API/Window/outerWidth)
