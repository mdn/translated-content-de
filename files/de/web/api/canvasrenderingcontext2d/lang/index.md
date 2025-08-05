---
title: "CanvasRenderingContext2D: lang Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef}}{{SeeCompatTable}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft der Canvas 2D API ruft die Sprache des Canvas-Zeichnungskontexts ab oder setzt sie.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden Zeichenfolgenwerte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}}, der die Sprache des Canvas-Kontexts darstellt.
- Die Zeichenfolge `inherit`, wobei die Sprache vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des ursprünglich {{HTMLElement("canvas")}} Elements oder dem nächstgelegenen verfügbaren Vorfahren mit explizit gesetztem `lang`-Attribut geerbt wird.
- Eine leere Zeichenfolge (`""`), die eingestellt werden kann, um anzugeben, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal ist es notwendig, eine Sprache für einen Canvas-Zeichnungskontext festzulegen, damit er weiß, wie sprachabhängige Features gerendert werden sollen: Zum Beispiel werden einige Schriftarten in verschiedenen Sprachen unterschiedlich dargestellt. Ein Bildschirn-Canvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>` Element verbunden. Wann immer Sie damit Inhalte rendern, kann er die Sprache aus dem `lang`-Attribut des `<canvas>` Elements ableiten.

Jedoch rendert ein Offscreen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) seinen Inhalt, bevor er einem `<canvas>` Element zugeordnet wird, sodass er keine Renderingsprache aus dem `lang`-Attribut des `<canvas>` Elements ableiten kann. Die `lang`-Eigenschaft löst dieses Problem, indem Sie es ermöglichen, eine Sprache direkt auf einem Canvas-Zeichnungskontext festzulegen, egal ob Sie ein Bildschirm- oder Offscreen-Canvas verwenden.

### Der `inherit` Wert

Wenn der `inherit`-Wert verwendet wird, wird die Sprache des Canvas-Kontexts vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut der nächstverfügbaren HTML-Quelle geerbt:

- Im Fall eines Bildschirmkontexts oder eines Offscreen-Kontexts, der von einem Bildschirmkontext übertragen wurde, ist dies das ursprünglich {{HTMLElement("canvas")}} Element, sofern es ein gültiges `lang`-Attribut gesetzt hat.
- Wenn ein `lang`-Attribut bei einem verbundenen `<canvas>` Element nicht verfügbar ist, was für einen Bildschirm- oder Offscreen-Kontext der Fall sein könnte, ist dies der nächstgelegene verfügbare Vorfahre mit einem explizit gesetzten `lang`, was häufig die Dokumentwurzel ist.

Aufgrund technischer Einschränkungen verhält sich der `inherit` Wert für Bildschirm- und Offscreen-Canvases unterschiedlich:

- Für Bildschirm-Canvases wird der `lang`-Wert geerbt, wenn das assoziierte `CanvasRenderingContext2D`-Objekt zuerst erstellt wird; der geerbte `lang`-Wert ändert sich dann dynamisch, wenn der `lang`-Attributwert aktualisiert wird.
- Für Offscreen-Canvases wird der `lang`-Wert geerbt, wenn das assoziierte `OffscreenCanvasRenderingContext2D`-Objekt zuerst erstellt wird, und bleibt dann während der Lebensdauer des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) fest. Er ändert sich **nicht**, wenn der `lang`-Attributwert aktualisiert wird. Aus diesem Grund kann die Sprache eines Offscreen-Canvas nur durch explizites Setzen des `lang`-Werts geändert werden.

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

### Demonstration der Unterstützung für die Lokalisierung von Canvas-Kontexten

In diesem Beispiel rendern wir eine Textzeichenfolge auf einem 2D-Canvas-Kontext in einer bestimmten Schriftart, die sprachabhängige Ligaturen hat. Wir ermöglichen es, die Sprache des Canvas-Kontexts anzupassen, damit Sie den Unterschied im Rendern sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}} Element, das die Auswahl einer Sprache erlaubt — `en` (Englisch) oder `tr` (Türkisch) — und ein {{htmlelement("canvas")}} Element, auf das gerendert wird.

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

Im JavaScript holen wir zunächst Referenzen zum `<canvas>` Element, dessen `CanvasRenderingContext2D` und das `<select>` Element, laden dann die sprachabhängige Schriftart über die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald die Schrift geladen ist, führen wir eine `init()` Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, die etwas Text auf den Canvas-Kontext zeichnet, der die geladene Schriftart verwendet, fügt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) zu dem `<select>` Element hinzu, und ruft `drawText()` auf, sodass der Text sofort beim ersten Laden der Seite auf den Canvas gezeichnet wird.

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

Wenn der `<select>`-Wert geändert wird, wird die `change`-Ereignis-Handlerfunktion ausgelöst, die:

- Den Wert des `<html>` Elements [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut auf den `<select>` Elementwert setzt und effektiv die Sprache des Dokuments ändert.
- Die `drawText()` Funktion ausführt. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, daher übernimmt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird folgendermaßen gerendert:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Versuchen Sie, die Dokumentensprache mithilfe des `<select>` Elements zu ändern. Wenn die Sprache auf Englisch eingestellt ist, wird die Schriftart mit der "fi"-Ligatur gerendert. Ist sie auf Türkisch eingestellt, wird die Schriftart ohne die "fi"-Ligatur gerendert, da diese in dieser Sprachregion nicht enthalten ist.

### Sprachunterstützung für Offscreen-Canvases

Dieses Beispiel ähnelt dem vorherigen, außer dass die Schriftart auf einem [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert und das resultierende Bitmap auf das Bildschirm-`<canvas>` übertragen wird, um es anzuzeigen.

Zusätzlich, da eine geerbte Offscreen-Canvas-Sprache nur einmal festgelegt wird und nicht dynamisch aktualisiert wird, wenn der geerbte `lang`-Attributwert geändert wird, setzen wir die `lang`-Eigenschaft explizit auf dem `OffscreenCanvasRenderingContext2D`.

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

Das JavaScript funktioniert auf die gleiche Weise wie das vorherige Beispiel, mit dem Unterschied, dass:

- Der Bildschirm-Canvas-Kontext als [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert ist.
- Wir einen neuen `OffscreenCanvasRenderingContext2D` definieren, um den Text darauf zu zeichnen, das Ergebnis in ein Bitmap mit [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) übertragen und es dann auf dem `<canvas>` mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) rendern.
- Wenn der `<select>`-Wert geändert wird, aktualisieren wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D` anstelle des Änderns des `<html>` `lang`-Attributwerts.

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

Das Beispiel wird folgendermaßen gerendert:

{{ EmbedLiveSample('offscreen-l10n', "100%", 220) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [Canvas Localization Support](https://blogs.igalia.com/schenney/canvas-localization-support/) von Igalia (2025)
