---
title: "CanvasRenderingContext2D: lang-Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Canvas API")}}{{SeeCompatTable}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft des Canvas 2D API erhält oder setzt die Sprache des Canvas-Zeichenkontexts.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden String-Werte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47-Sprachentag")}}, der die Sprache des Canvas-Kontexts darstellt.
- Der String `inherit`, wobei die Sprache vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des ursprunglichen {{HTMLElement("canvas")}}-Elements oder dem nächsten verfügbaren Vorfahren mit explizit gesetztem `lang` übernommen wird.
- Ein leerer String (`""`), der gesetzt werden kann, um festzulegen, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal muss eine Sprache für einen Canvas-Zeichenkontext festgelegt werden, damit dieser weiß, wie er sprachabhängige Funktionen rendern soll: Zum Beispiel haben einige Schriftarten bestimmte Zeichen, die in verschiedenen Sprachen unterschiedlich gerendert werden. Ein Bildschirm-Canvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verbunden, sodass er die Sprache aus dem Wert des `lang`-Attributs des `<canvas>`-Elements ableiten kann, wann immer Sie Inhalte mit ihm rendern.

Ein Off-Screen-Canvas-Kontext (`OffscreenCanvasRenderingContext2D`) rendert jedoch seinen Inhalt, bevor er einem `<canvas>`-Element zugeordnet wird, sodass er keine Sprache aus dem `lang`-Attribut des `<canvas>`-Elements ableiten kann. Die `lang`-Eigenschaft löst dieses Problem, indem sie es Ihnen ermöglicht, eine Sprache direkt auf einen Canvas-Zeichenkontext festzulegen, unabhängig davon, ob Sie ein Bildschirm- oder Off-Screen-Canvas verwenden.

### Der `inherit`-Wert

Wenn der `inherit`-Wert verwendet wird, wird die Sprache des Canvas-Kontexts vom `lang`-Attribut der nächstverfügbaren HTML-Quelle übernommen:

- Im Fall eines Bildschirmkontexts oder eines von einem Bildschirmkontext übertragenen Off-Screen-Kontexts ist dies das ursprungliche {{HTMLElement("canvas")}}-Element, vorausgesetzt, es hat ein gültiges `lang`-Attribut gesetzt.
- Wenn ein `lang`-Attribut auf einem zugeordneten `<canvas>`-Element nicht verfügbar ist, was bei einem Bildschirm- oder Off-Screen-Kontext der Fall sein könnte, ist dies der nächstverfügbare Vorfahre mit einem explizit gesetzten `lang`, was häufig die Dokumentwurzel ist.

Aufgrund technischer Einschränkungen verhält sich der `inherit`-Wert unterschiedlich für Bildschirm- und Off-Screen-Canvases:

- Für Bildschirm-Canvases wird der `lang`-Wert geerbt, wenn das zugehörige `CanvasRenderingContext2D`-Objekt zum ersten Mal erstellt wird; der geerbte `lang`-Wert ändert sich dann dynamisch, wenn der `lang`-Attributwert aktualisiert wird.
- Für Off-Screen-Canvases wird der `lang`-Wert geerbt, wenn das zugehörige `OffscreenCanvasRenderingContext2D`-Objekt zum ersten Mal erstellt wird und dann für die Lebensdauer des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) festgelegt. Er ändert sich **nicht**, wenn der `lang`-Attributwert aktualisiert wird. Aufgrund dessen kann die Sprache eines Off-Screen-Canvas nur durch explizites Setzen des `lang`-Werts geändert werden.

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

### Demonstration der Unterstützung von Canvas-Kontext-Lokalisierung

In diesem Beispiel rendern wir eine Textzeichenkette zu einem 2D-Canvas-Kontext in einer bestimmten Schriftart, die sprachabhängige Ligaturen hat. Wir ermöglichen es, die Sprache des Canvas-Kontextes anzupassen, damit Sie den Unterschied im Rendern sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, das es Ihnen ermöglicht, eine Sprache zu wählen — `en` (Englisch) oder `tr` (Türkisch) — und ein {{htmlelement("canvas")}}-Element, auf dem gerendert wird.

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

Im JavaScript greifen wir zuerst auf das `<canvas>`-Element, dessen `CanvasRenderingContext2D` und das `<select>`-Element zu und laden die sprachabhängige Schriftart mit der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald die Schriftart geladen ist, führen wir eine `init()`-Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, die etwas Text auf den Canvas-Kontext zeichnet, der die geladene Schriftart verwendet, fügt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) [Event Listener](/de/docs/Web/API/EventTarget/addEventListener) zum `<select>`-Element hinzu und ruft `drawText()` auf, damit der Text sofort beim ersten Laden der Seite auf den Canvas gezeichnet wird.

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

Wenn der `<select>`-Wert geändert wird, wird die `change`-Ereignis-Handler-Funktion ausgelöst, welche:

- Den Wert des `lang`-Attributs des `<html>`-Elements auf den `<select>`-Element-Wert setzt und somit effektiv die Sprache des Dokuments ändert.
- Die `drawText()`-Funktion ausführt. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, daher übernimmt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Versuchen Sie, die Dokumentsprache mit dem `<select>`-Element zu ändern. Wenn die Sprache auf Englisch eingestellt ist, wird die Schriftart mit der "fi"-Ligatur gerendert. Wenn sie jedoch auf Türkisch eingestellt ist, wird die Schriftart ohne die "fi"-Ligatur gerendert, da dieses Lokale sie nicht enthält.

### Sprachunterstützung für Off-Screen-Canvases

Dieses Beispiel ist ähnlich wie das vorherige Beispiel, außer dass die Schriftart auf einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert wird und das resultierende Bitmap auf das Bildschirm-`<canvas>` übertragen wird, um es anzuzeigen.

Zusätzlich, da eine geerbte Off-Screen-Canvas-Sprache nur einmal festgelegt wird und nicht dynamisch aktualisiert wird, wenn sich der geerbte `lang`-Attributwert ändert, setzen wir die `lang`-Eigenschaft explizit auf dem `OffscreenCanvasRenderingContext2D`.

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

Das JavaScript funktioniert auf die gleiche Weise wie im vorherigen Beispiel, mit Ausnahme, dass:

- Der Bildschirm-Canvas-Kontext als ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert ist.
- Wir definieren einen neuen `OffscreenCanvasRenderingContext2D`, um den Text darauf zu zeichnen, übertragen das Ergebnis in ein Bitmap mit [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap), und rendern es dann auf dem `<canvas>` mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap).
- Wenn der `<select>`-Wert geändert wird, aktualisieren wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D`, anstatt den `lang`-Attributwert des `<html>`-Elements zu ändern.

```js live-example___offscreen-l10n
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(canvasElem.width, canvasElem.height);
const offscreenCtx = offscreen.getContext("2d");

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
    offscreenCtx.clearRect(0, 0, canvasElem.width, canvasElem.height);
    offscreenCtx.lang = selectElem.value;
    offscreenCtx.font = "30px Lato-Medium";
    offscreenCtx.color = "black";
    offscreenCtx.fillText("finish crafting", 50, 100);

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
