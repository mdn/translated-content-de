---
title: "CanvasRenderingContext2D: lang-Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}{{SeeCompatTable}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft der Canvas 2D API ruft die Sprache des Canvas-Zeichnungskontexts ab oder setzt sie.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden Zeichenkettenwerte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}}, das die Sprache des Canvas-Kontexts darstellt.
- Die Zeichenkette `inherit`, in diesem Fall wird die Sprache von dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des ursprünglichen {{HTMLElement("canvas")}}-Elements oder dem nächstgelegenen verfügbaren Vorfahren mit einem explizit gesetzten `lang`-Attribut geerbt.
- Eine leere Zeichenkette (`""`), die gesetzt werden kann, um anzugeben, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal muss für einen Canvas-Zeichnungskontext eine Sprache festgelegt werden, damit er weiß, wie sprachabhängige Merkmale gerendert werden: Zum Beispiel haben einige Schriftarten bestimmte Zeichen, die in verschiedenen Sprachen unterschiedlich gerendert werden. Ein auf dem Bildschirm sichtbarer Canvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verbunden. Daher kann er, wann immer Sie Inhalte damit rendern, die Sprache aus dem Wert des `lang`-Attributs des `<canvas>`-Elements ableiten.

Ein Off-Screen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) hingegen rendert seinen Inhalt, bevor er mit einem `<canvas>`-Element verbunden wird, sodass er keine Render-Sprache aus dem `lang`-Attribut des `<canvas>`-Elements ableiten kann. Die `lang`-Eigenschaft löst dieses Problem, indem sie es ermöglicht, eine Sprache direkt auf einem Canvas-Zeichnungskontext festzulegen, unabhängig davon, ob Sie einen On-Screen- oder Off-Screen-Canvas verwenden.

### Der `inherit`-Wert

Wenn der `inherit`-Wert verwendet wird, wird die Sprache des Canvas-Kontexts vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut der nächstgelegenen verfügbaren HTML-Quelle geerbt:

- Im Fall eines On-Screen-Kontexts oder eines Off-Screen-Kontexts, der von einem On-Screen-Kontext übertragen wurde, ist dies das ursprüngliche {{HTMLElement("canvas")}}-Element, sofern es ein gültiges `lang`-Attribut gesetzt hat.
- Wenn ein `lang`-Attribut auf einem verbundenen `<canvas>`-Element nicht verfügbar ist, was bei einem On- oder Off-Screen-Kontext der Fall sein könnte, ist dies der nächstgelegene verfügbare Vorfahre mit einem explizit gesetzten `lang`, was üblicherweise die Dokumentwurzel ist.

Aufgrund technischer Beschränkungen verhält sich der `inherit`-Wert für On-Screen- und Off-Screen-Canvases unterschiedlich:

- Bei On-Screen-Canvases wird der `lang`-Wert geerbt, wenn das zugehörige `CanvasRenderingContext2D`-Objekt erstmals erstellt wird; der geerbte `lang`-Wert ändert sich dann dynamisch, wenn der Wert des `lang`-Attributs aktualisiert wird.
- Bei Off-Screen-Canvases wird der `lang`-Wert geerbt, wenn das zugehörige `OffscreenCanvasRenderingContext2D`-Objekt erstmals erstellt wird, und bleibt dann für die Lebensdauer des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) fest. Er ändert sich **nicht**, wenn der Wert des `lang`-Attributs aktualisiert wird. Aus diesem Grund kann die Sprache eines Off-Screen-Canvas nur durch explizite Festlegung des `lang`-Werts geändert werden.

## Beispiele

### Grundlegende Verwendung

```js
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("2d");

// Get context language; returns "inherit" by default
console.log(ctx.lang);

// Set context language
ctx.lang = "en";
// Logs "en"
console.log(ctx.lang);
```

### Demonstrieren der Unterstützung von Canvas-Kontext-Lokalisierung

In diesem Beispiel rendern wir eine Textzeichenkette in einem bestimmten Font auf einem 2D-Canvas-Kontext, der sprachabhängige Ligaturen hat. Wir erlauben es, die Sprache des Canvas-Kontexts anzupassen, damit Sie den Unterschied im Rendering sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, das es Ihnen ermöglicht, eine Sprache — `en` (Englisch) oder `tr` (Türkisch) — auszuwählen, und ein {{htmlelement("canvas")}}-Element zum Rendern.

```html live-example___canvas-l10n
<p>
  <label for="lang">Choose language:</label>
  <select id="lang" name="lang">
    <option>en</option>
    <option>tr</option>
  </select>
</p>
<canvas></canvas>
```

#### JavaScript

Im JavaScript greifen wir zuerst auf das `<canvas>`-Element, seinen `CanvasRenderingContext2D` und das `<select>`-Element zu und laden dann den sprachabhängigen Font mithilfe der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald der Font geladen ist, führen wir eine `init()`-Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, die etwas Text auf den Canvas-Kontext zeichnet, der den geladenen Font verwendet, einen [`change`](/de/docs/Web/API/HTMLElement/change_event) [Event Listener](/de/docs/Web/API/EventTarget/addEventListener) zum `<select>`-Element hinzufügt und dann `drawText()` aufruft, sodass der Text sofort beim ersten Laden der Seite auf den Canvas gezeichnet wird.

```js live-example___canvas-l10n
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("2d");

const selectElem = document.querySelector("select");

const latoMediumFontFace = new FontFace(
  // Lato-Medium is a font with language specific ligatures
  "Lato-Medium",
  'url("https://mdn.github.io/shared-assets/fonts/Lato-Medium.ttf")',
);

latoMediumFontFace.load().then((font) => {
  document.fonts.add(font);
  init();
});

function init() {
  function drawText() {
    ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);
    ctx.font = "30px Lato-Medium";
    ctx.color = "black";
    ctx.fillText("finish crafting", 50, 100);
  }

  selectElem.addEventListener("change", () => {
    document.documentElement.lang = selectElem.value;
    drawText();
  });

  drawText();
}
```

Wenn der `<select>`-Wert geändert wird, wird die `change`-Ereignishandlerfunktion ausgelöst, die:

- Den Wert des `lang`-Attributs des `<html>`-Elements auf den Wert des `<select>`-Elements festlegt und damit effektiv die Sprache des Dokuments ändert.
- Die `drawText()`-Funktion ausführt. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, daher erbt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Versuchen Sie, die Dokumentsprache mithilfe des `<select>`-Elements zu ändern. Wenn die Sprache auf Englisch eingestellt ist, wird der Font mit der "fi"-Ligatur gerendert. Wenn sie jedoch auf Türkisch eingestellt ist, wird der Font ohne die "fi"-Ligatur gerendert, da dieses Gebietsschema sie nicht enthält.

### Sprachunterstützung für Offscreen-Canvases

Dieses Beispiel ist ähnlich wie das vorherige, außer dass der Font in einem [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert und das resultierende Bitmap dann zur Anzeige auf den On-Screen-`<canvas>` übertragen wird.

Da eine geerbte Off-Screen-Canvas-Sprache nur einmal gesetzt und nicht dynamisch aktualisiert wird, wenn der Wert des geerbten `lang`-Attributs geändert wird, setzen wir zusätzlich die `lang`-Eigenschaft explizit auf dem `OffscreenCanvasRenderingContext2D`.

#### HTML

```html live-example___offscreen-l10n
<p>
  <label for="lang">Choose language:</label>
  <select id="lang" name="lang">
    <option>en</option>
    <option>tr</option>
  </select>
</p>
<canvas></canvas>
```

#### JavaScript

Das JavaScript funktioniert auf die gleiche Weise wie im vorherigen Beispiel, außer dass:

- Der On-Screen-Canvas-Kontext als [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert ist.
- Wir einen neuen `OffscreenCanvasRenderingContext2D` definieren, um den Text darauf zu zeichnen, das Ergebnis mit [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) in ein Bitmap übertragen und es dann mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) auf den `<canvas>` rendern.
- Wenn der `<select>`-Wert geändert wird, aktualisieren wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D`, anstatt den Wert des `lang`-Attributs im `<html>` zu ändern.

```js live-example___offscreen-l10n
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(canvasElem.width, canvasElem.height);
const offscreen_ctx = offscreen.getContext("2d");

const selectElem = document.querySelector("select");

const latoMediumFontFace = new FontFace(
  // Lato-Medium is a font with language specific ligatures.
  "Lato-Medium",
  'url("https://mdn.github.io/shared-assets/fonts/Lato-Medium.ttf")',
);

latoMediumFontFace.load().then((font) => {
  document.fonts.add(font);
  init();
});

function init() {
  function drawText() {
    offscreen_ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);
    offscreen_ctx.lang = selectElem.value;
    offscreen_ctx.font = "30px Lato-Medium";
    offscreen_ctx.color = "black";
    offscreen_ctx.fillText("finish crafting", 50, 100);

    const bitmap = offscreen.transferToImageBitmap();
    ctx.transferFromImageBitmap(bitmap);
  }

  selectElem.addEventListener("change", () => {
    drawText();
  });

  drawText();
}
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample('offscreen-l10n', "100%", 220) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [Unterstützung der Canvas-Lokalisierung](https://blogs.igalia.com/schenney/canvas-localization-support/) von Igalia (2025)
