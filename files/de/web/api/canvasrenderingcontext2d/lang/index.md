---
title: "CanvasRenderingContext2D: lang-Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Canvas API")}}{{SeeCompatTable}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft der Canvas 2D API ruft die Sprache des Canvas-Zeichenkontexts ab oder setzt sie.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden String-Werte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}, das die Sprache des Canvas-Kontexts repräsentiert.
- Der String `inherit`, in diesem Fall wird die Sprache vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des ausgehenden {{HTMLElement("canvas")}}-Elements oder dem nächstgelegenen Vorfahr mit explizit gesetztem `lang`-Attribut übernommen.
- Ein leerer String (`""`), der gesetzt werden kann, um anzugeben, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal müssen Sie eine Sprache für einen Canvas-Zeichenkontext festlegen, damit er weiß, wie sprachabhängige Merkmale gerendert werden sollen: Zum Beispiel werden bei einigen Schriftarten bestimmte Zeichen in verschiedenen Sprachen unterschiedlich dargestellt. Ein Bildschirm-Canvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verbunden, sodass es die Sprache vom Wert des `lang`-Attributs des `<canvas>`-Elements ableiten kann, wann immer Sie Inhalte damit rendern.

Ein Offscreen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) rendert jedoch seine Inhalte, bevor es mit einem `<canvas>`-Element verbunden ist, sodass es keine Rendering-Sprache vom `lang`-Attribut des `<canvas>`-Elements ableiten kann. Die `lang`-Eigenschaft behebt dieses Problem, indem Sie eine Sprache direkt auf einem Canvas-Zeichenkontext festlegen können, unabhängig davon, ob Sie einen Bildschirm- oder Offscreen-Canvas verwenden.

### Der `inherit`-Wert

Wenn der `inherit`-Wert verwendet wird, wird die Sprache des Canvas-Kontexts vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut der nächstverfügbaren HTML-Quelle geerbt:

- Im Fall eines Bildschirmkontexts oder eines Offscreen-Kontexts, der von einem Bildschirmkontext übertragen wurde, ist dies das ausgehende {{HTMLElement("canvas")}}-Element, vorausgesetzt, es hat ein gültiges `lang`-Attribut.
- Wenn ein `lang`-Attribut nicht auf einem zugeordneten `<canvas>`-Element verfügbar ist, was für einen Bildschirm- oder Offscreen-Kontext der Fall sein könnte, ist dies der nächstgelegene verfügbare Vorfahr mit explizit gesetztem `lang`, was üblicherweise die Dokumentwurzel ist.

Aufgrund technischer Einschränkungen verhält sich der `inherit`-Wert unterschiedlich für Bildschirm- und Offscreen-Canvases:

- Für Bildschirm-Canvases wird der `lang`-Wert geerbt, wenn das zugehörige `CanvasRenderingContext2D`-Objekt zuerst erstellt wird; der geerbte `lang`-Wert ändert sich dann dynamisch, wenn der Wert des `lang`-Attributs aktualisiert wird.
- Für Offscreen-Canvases wird der `lang`-Wert geerbt, wenn das zugehörige `OffscreenCanvasRenderingContext2D`-Objekt zuerst erstellt wird, und dann für die Lebensdauer des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) fixiert. Er ändert sich **nicht**, wenn der Wert des `lang`-Attributs aktualisiert wird. Aufgrund dessen kann die Sprache eines Offscreen-Canvases nur geändert werden, indem der `lang`-Wert explizit gesetzt wird.

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

In diesem Beispiel rendern wir einen Textstring auf einen 2D-Canvas-Kontext in einer bestimmten Schriftart, die sprachabhängige Ligaturen hat. Wir ermöglichen es, die Sprache des Canvas-Kontexts anzupassen, damit Sie den Unterschied im Rendering sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, das es ermöglicht, eine Sprache zu wählen — `en` (Englisch) oder `tr` (Türkisch) — und ein {{htmlelement("canvas")}}-Element, das gerendert werden soll.

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

Im JavaScript holen wir zunächst Referenzen auf das `<canvas>`-Element, seinen `CanvasRenderingContext2D` und das `<select>`-Element ein, laden die sprachabhängige Schriftart mithilfe der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald die Schriftart geladen ist, führen wir die `init()`-Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, die etwas Text auf den Canvas-Kontext zeichnet, der die geladene Schriftart verwendet, einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-[Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) zum `<select>`-Element hinzufügt und dann `drawText()` aufruft, sodass der Text sofort auf den Canvas gezeichnet wird, wenn die Seite zuerst geladen wird.

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

Wenn der `<select>`-Wert geändert wird, wird die `change`-Ereignis-Handler-Funktion ausgelöst, die:

- Setzt den Wert des `lang`-Attributs des `<html>`-Elements auf den Wert des `<select>`-Elements, wodurch die Sprache des Dokuments effektiv geändert wird.
- Führt die `drawText()`-Funktion aus. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, daher erbt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Versuchen Sie, die Sprache des Dokuments mithilfe des `<select>`-Elements zu ändern. Wenn die Sprache auf Englisch eingestellt ist, wird die Schrift mit der "fi"-Ligatur dargestellt. Wenn sie jedoch auf Türkisch eingestellt ist, wird die Schrift ohne die "fi"-Ligatur dargestellt, da dieses Gebietsschema sie nicht enthält.

### Sprachunterstützung für Offscreen-Canvases

Dieses Beispiel ist dem vorherigen Beispiel ähnlich, außer dass die Schrift auf einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert und das resultierende Bitmap dann auf den Bildschirm `<canvas>` übertragen wird, um es anzuzeigen.

Zudem ist, da eine geerbte Offscreen-Canvas-Sprache nur einmal gesetzt wird und nicht dynamisch aktualisiert wird, wenn der geerbte `lang`-Attributswert geändert wird, die `lang`-Eigenschaft explizit auf dem `OffscreenCanvasRenderingContext2D` festgelegt.

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

Das JavaScript funktioniert ähnlich wie im vorherigen Beispiel, mit dem Unterschied, dass:

- Der Bildschirm-Canvas-Kontext als ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert ist.
- Wir definieren einen neuen `OffscreenCanvasRenderingContext2D`, um den Text darauf zu zeichnen, übertragen das Ergebnis auf ein Bitmap mit [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) und rendern es dann auf dem `<canvas>` mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap).
- Wenn der `<select>`-Wert geändert wird, aktualisieren wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D` anstatt den `lang`-Attributswert des `<html>` zu ändern.

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
- [Canvas Localization Support](https://blogs.igalia.com/schenney/canvas-localization-support/) von Igalia (2025)
