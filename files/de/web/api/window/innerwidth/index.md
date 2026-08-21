---
title: "Window: innerWidth-Eigenschaft"
short-title: innerWidth
slug: Web/API/Window/innerWidth
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte [`Window`](/de/docs/Web/API/Window)-Eigenschaft **`innerWidth`** gibt die Innenbreite des Fensters in Pixeln zurück (d.h. die Breite des {{Glossary("layout_viewport", "Layout-Viewports")}} des Fensters). Dies schließt die Breite der vertikalen Scrollleiste ein, falls eine vorhanden ist.

Ähnlich kann die Innenhöhe des Fensters (d.h. die Höhe des Layout-Viewports) mit der [`innerHeight`](/de/docs/Web/API/Window/innerHeight)-Eigenschaft ermittelt werden. Diese Messung berücksichtigt auch die Höhe der horizontalen Scrollleiste, falls sie sichtbar ist.

## Wert

Ein ganzzahliger Wert, der die Breite des Layout-Viewports des Fensters in Pixeln angibt. Diese Eigenschaft ist schreibgeschützt und hat keinen Standardwert.

Um die Breite des Fensters zu ändern, verwenden Sie eine der [`Window`](/de/docs/Web/API/Window)-Methoden zum Anpassen von Fenstern, wie zum Beispiel [`resizeBy()`](/de/docs/Web/API/Window/resizeBy) oder [`resizeTo()`](/de/docs/Web/API/Window/resizeTo).

## Anwendungshinweise

Wenn Sie die Breite des Fensters abzüglich der Scrollleiste und Ränder benötigen, verwenden Sie stattdessen die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft des Wurzelelements {{HTMLElement("html")}}.

Die `innerWidth`-Eigenschaft ist in jedem Fenster oder Objekt verfügbar, das sich wie ein Fenster verhält, wie z.B. ein Frame oder Tab.

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

Sie können auch die {{LiveSampleLink('Demo', 'Ergebnisse des Demo-Codes auf einer separaten Seite anzeigen')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.outerWidth`](/de/docs/Web/API/Window/outerWidth)
- [`window.innerHeight`](/de/docs/Web/API/Window/innerHeight)
- [`window.outerHeight`](/de/docs/Web/API/Window/outerHeight)
