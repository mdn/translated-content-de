---
title: "Window: Eigenschaft innerWidth"
short-title: innerWidth
slug: Web/API/Window/innerWidth
l10n:
  sourceCommit: 277e1432bea11473d0c638cd720130c44b26b3f4
---

{{APIRef}}

Die schreibgeschützte [`Window`](/de/docs/Web/API/Window)-Eigenschaft **`innerWidth`** gibt die Innenbreite des Fensters in Pixeln zurück (d.h. die Breite des {{Glossary("layout_viewport", "Layout-Viewports")}} des Fensters). Dies schließt die Breite der vertikalen Scrollleiste ein, falls vorhanden.

Ähnlich kann die Innenhöhe des Fensters (d.h. die Höhe des Layout-Viewports) mit der [`innerHeight`](/de/docs/Web/API/Window/innerHeight)-Eigenschaft ermittelt werden. Diese Messung berücksichtigt auch die Höhe der horizontalen Scrollleiste, wenn sie sichtbar ist.

## Wert

Ein ganzzahliger Wert, der die Breite des Layout-Viewports des Fensters in Pixeln angibt. Diese Eigenschaft ist schreibgeschützt und hat keinen Standardwert.

Um die Breite des Fensters zu ändern, verwenden Sie eine der [`Window`](/de/docs/Web/API/Window)-Methoden zum Ändern der Fenstergröße, wie zum Beispiel [`resizeBy()`](/de/docs/Web/API/Window/resizeBy) oder [`resizeTo()`](/de/docs/Web/API/Window/resizeTo).

## Nutzungshinweise

Wenn Sie die Breite des Fensters abzüglich der Scrollleiste und der Ränder benötigen, verwenden Sie stattdessen die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft des Wurzelelements {{HTMLElement("html")}}.

Die `innerWidth`-Eigenschaft ist auf jedem Fenster oder Objekt verfügbar, das sich wie ein Fenster verhält, wie zum Beispiel ein Frame oder Tab.

## Beispiele

```js
// This will log the width of the viewport
console.log(window.innerWidth);

// This will log the width of the frame viewport within a frameset
console.log(self.innerWidth);

// This will log the width of the viewport of the closest frameset
console.log(parent.innerWidth);

// This will log the width of the viewport of the outermost frameset
console.log(top.innerWidth);
```

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

- [`window.outerWidth`](/de/docs/Web/API/Window/outerWidth)
- [`window.innerHeight`](/de/docs/Web/API/Window/innerHeight)
- [`window.outerHeight`](/de/docs/Web/API/Window/outerHeight)
