---
title: "Window: innerHeight-Eigenschaft"
short-title: innerHeight
slug: Web/API/Window/innerHeight
l10n:
  sourceCommit: 1e4403fbf4441e35ca96e8b8c9e258057b74d06e
---

{{APIRef}}

Die schreibgeschützte **`innerHeight`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt die Innenhöhe des Fensters in Pixeln zurück, einschließlich der Höhe der horizontalen Scrollleiste, falls vorhanden.

Der Wert von `innerHeight` wird von der Höhe des {{Glossary("layout_viewport", "Layout-Viewports")}} des Fensters übernommen. Die Breite kann mit der [`innerWidth`](/de/docs/Web/API/Window/innerWidth)-Eigenschaft ermittelt werden.

## Wert

Ein ganzzahliger Wert, der die Höhe des Layout-Viewports des Fensters in Pixeln angibt. Die Eigenschaft ist schreibgeschützt und hat keinen Standardwert.

Um die Höhe des Fensters zu ändern, rufen Sie eine der Vergrößerungsmethoden auf, wie beispielsweise [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) oder [`resizeBy()`](/de/docs/Web/API/Window/resizeBy).

## Anwendungshinweise

Um die Höhe des Fensters abzüglich der horizontalen Scrollleiste und eventueller Rahmen zu erhalten, verwenden Sie stattdessen die [`clientHeight`](/de/docs/Web/API/Element/clientHeight)-Eigenschaft des Wurzelelements {{HTMLElement("html")}}.

Sowohl `innerHeight` als auch `innerWidth` sind in jedem Fenster oder jedem Objekt, das sich wie ein Fenster verhält, wie z. B. einem Tab oder Frame, verfügbar.

## Beispiele

### Annahme eines Framesets

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

Um die äußere Höhe eines Fensters, d.h. die Höhe des gesamten Browserfensters, zu ermitteln, siehe
[`window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Grafisches Beispiel

Die folgende Abbildung zeigt den Unterschied zwischen `outerHeight` und `innerHeight`.

![innerHeight vs. outerHeight Illustration](firefoxinnervsouterheight2.png)

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

Sie können auch {{LiveSampleLink('Demo', 'die Ergebnisse des Demo-Codes auf einer separaten Seite ansehen')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.innerWidth`](/de/docs/Web/API/Window/innerWidth)
- [`window.outerHeight`](/de/docs/Web/API/Window/outerHeight)
- [`window.outerWidth`](/de/docs/Web/API/Window/outerWidth)
