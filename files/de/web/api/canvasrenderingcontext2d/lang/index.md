---
title: "CanvasRenderingContext2D: lang Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: 7cd2415e24a105ad4a457bb8eba32b0146dea211
---

{{APIRef}}{{SeeCompatTable}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft der Canvas 2D API ruft die Sprache des Canvas-Zeichenkontexts ab oder legt sie fest.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden String-Werte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}}, das die Sprache des Canvas-Kontexts darstellt.
- Der String `inherit`, in diesem Fall wird die Sprache vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des ursprünglichen {{HTMLElement("canvas")}}-Elements oder des nächstgelegenen Vorfahren mit explizit gesetztem `lang`-Attribut geerbt.
- Ein leerer String (`""`), der festgelegt werden kann, um anzugeben, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal müssen Sie eine Sprache für einen Canvas-Zeichenkontext festlegen, damit dieser weiß, wie sprachabhängige Funktionen gerendert werden sollen: Zum Beispiel haben einige Schriftarten bestimmte Zeichen, die in verschiedenen Sprachen unterschiedlich gerendert werden. Ein Bildschirm-Canvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verbunden, sodass immer dann, wenn Sie Inhalt mit ihm rendern, er die Sprache aus dem Wert des `lang`-Attributs des `<canvas>`-Elements ableiten kann.

Ein Off-Screen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) rendert jedoch seinen Inhalt, bevor er mit einem `<canvas>`-Element verknüpft ist, sodass er die Sprache nicht aus dem `lang`-Attribut des `<canvas>`-Elements ableiten kann. Die `lang`-Eigenschaft löst dieses Problem, indem Sie eine Sprache direkt auf einem Canvas-Zeichenkontext festlegen können, unabhängig davon, ob Sie ein Bildschirm- oder Off-Screen-Canvas verwenden.

### Der `inherit` Wert

Wenn der Wert `inherit` verwendet wird, wird die Sprache des Canvas-Kontexts vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut der nächstverfügbaren HTML-Quelle geerbt:

- Im Fall eines Bildschirm-Kontexts oder eines Off-Screen-Kontexts, der von einem Bildschirm-Kontext übertragen wurde, ist dies das ursprüngliche {{HTMLElement("canvas")}}-Element, vorausgesetzt, es hat ein gültiges `lang`-Attribut gesetzt.
- Wenn ein `lang`-Attribut auf einem zugeordneten `<canvas>`-Element nicht verfügbar ist, was bei einem Bildschirm- oder Off-Screen-Kontext der Fall sein könnte, ist dies der nächstverfügbare Vorfahre mit explizit gesetztem `lang`, was normalerweise die Dokumentwurzel ist.

Aufgrund technischer Einschränkungen verhält sich der `inherit`-Wert für Bildschirm- und Off-Screen-Canvas unterschiedlich:

- Für Bildschirm-Canvas wird der `lang`-Wert geerbt, wenn das zugehörige `CanvasRenderingContext2D`-Objekt erstmals erstellt wird; der geerbte `lang`-Wert ändert sich dann dynamisch, wenn der Wert des `lang`-Attributs aktualisiert wird.
- Für Off-Screen-Canvas wird der `lang`-Wert geerbt, wenn das zugehörige `OffscreenCanvasRenderingContext2D`-Objekt erstmals erstellt wird, und bleibt dann für die Lebensdauer des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) fest. Er **ändert sich nicht**, wenn der `lang`-Attributwert aktualisiert wird. Daher kann die Sprache eines Off-Screen-Canvas nur geändert werden, indem der `lang`-Wert explizit festgelegt wird.

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

### Demonstration der Lokalisierungsunterstützung für Canvas-Kontexte

In diesem Beispiel rendern wir einen Textstring in einem 2D-Canvas-Kontext in einer bestimmten Schriftart, die sprachabhängige Ligaturen hat. Wir ermöglichen es, die Sprache des Canvas-Kontexts anzupassen, damit Sie den Unterschied im Rendering sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, mit dem Sie eine Sprache auswählen können — `en` (Englisch) oder `tr` (Türkisch) — und ein {{htmlelement("canvas")}}-Element, um darauf zu rendern.

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

Im JavaScript greifen wir zunächst auf das `<canvas>`-Element, seinen `CanvasRenderingContext2D` und das `<select>`-Element zu und laden die sprachabhängige Schriftart mithilfe der [CSS-Schriftlader-API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald die Schriftart geladen ist, führen wir eine `init()`-Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, die einigen Text auf den Canvas-Kontext zeichnet, der die geladene Schriftart verwendet, einen [`change`](/de/docs/Web/API/HTMLElement/change_event) [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) zum `<select>`-Element hinzufügt und dann `drawText()` aufruft, sodass der Text sofort auf das Canvas gezeichnet wird, wenn die Seite das erste Mal geladen wird.

```js live-example___canvas-l10n
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("2d");

const selectElem = document.querySelector("select");

const latoMediumFontFace = new FontFace(
  // Lato-Medium is a font with language specific ligatures
  "Lato-Medium",
  "url(https://mdn.github.io/shared-assets/fonts/Lato-Medium.ttf)",
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

Wenn der `<select>`-Wert geändert wird, wird die Funktion des `change`-Ereignis-Handlers ausgelöst, die:

- Den Wert des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs des `<html>`-Elements auf den `<select>`-Elementwert setzt und damit die Sprache des Dokuments effektiv ändert.
- Die `drawText()`-Funktion ausführt. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, daher übernimmt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Versuchen Sie, die Dokumentsprache mit dem `<select>`-Element zu ändern. Wenn die Sprache auf Englisch gesetzt ist, wird die Schriftart mit der "fi"-Ligatur gerendert. Wenn sie jedoch auf Türkisch gesetzt ist, wird die Schriftart ohne die "fi"-Ligatur gerendert, da diese Sprachregion sie nicht enthält.

### Sprachunterstützung für Off-Screen-Canvas

Dieses Beispiel ist ähnlich wie das vorherige, außer dass die Schriftart in ein [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert wird und das resultierende Bild dann auf das Bildschirm-`<canvas>` übertragen wird, um angezeigt zu werden.

Darüber hinaus, da eine geerbte Off-Screen-Canvas-Sprache nur einmal gesetzt und nicht dynamisch aktualisiert wird, wenn der geerbte `lang`-Attributwert geändert wird, setzen wir die `lang`-Eigenschaft explizit auf dem `OffscreenCanvasRenderingContext2D`.

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

Das JavaScript funktioniert auf dieselbe Weise wie das vorherige Beispiel, außer dass:

- Der Bildschirm-Canvas-Kontext als [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert wird.
- Wir einen neuen `OffscreenCanvasRenderingContext2D` definieren, auf den wir den Text zeichnen, das Ergebnis in ein Bitmap mit [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) übertragen und es dann auf dem `<canvas>` mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) rendern.
- Wenn der `<select>`-Wert geändert wird, aktualisieren wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D` anstelle des `lang`-Attributwerts des `<html>`-Elements.

```js live-example___offscreen-l10n
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(canvasElem.width, canvasElem.height);
const offscreen_ctx = offscreen.getContext("2d");

const selectElem = document.querySelector("select");

const latoMediumFontFace = new FontFace(
  // Lato-Medium is a font with language specific ligatures.
  "Lato-Medium",
  "url(https://mdn.github.io/shared-assets/fonts/Lato-Medium.ttf)",
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
