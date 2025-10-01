---
title: "CanvasRenderingContext2D: lang-Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: 4f90de43c8c0fa4253d11e33813b0f99cd1290e6
---

{{APIRef("Canvas API")}}{{SeeCompatTable}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft der Canvas 2D API ruft die Sprache des Canvas-Zeichnungskontexts ab oder setzt diese.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden Zeichenkettenwerte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}}, der die Sprache des Canvas-Kontexts darstellt.
- Der String `inherit`, in welchem Fall die Sprache vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des ursprünglichen {{HTMLElement("canvas")}}-Elements oder des nächstgelegenen verfügbaren Vorfahren mit einem explizit gesetzten `lang`-Attribut geerbt wird.
- Eine leere Zeichenkette (`""`), welche gesetzt werden kann, um anzugeben, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal muss eine Sprache für einen Canvas-Rendering-Kontext gesetzt werden, damit dieser weiß, wie er sprachabhängige Funktionen rendern soll: zum Beispiel haben einige Schriftarten bestimmte Zeichen, die in verschiedenen Sprachen unterschiedlich dargestellt werden. Ein auf dem Bildschirm angezeigter Canvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verbunden, sodass er, wann immer Sie Inhalt mit ihm rendern, die Sprache aus dem Wert des `lang`-Attributs des `<canvas>`-Elements ableiten kann.

Ein Offscreen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) rendert seinen Inhalt jedoch, bevor er mit einem `<canvas>`-Element verbunden ist, sodass er die Rendering-Sprache nicht aus dem `lang`-Attribut des `<canvas>`-Elements ableiten kann. Die `lang`-Eigenschaft löst dieses Problem, indem sie es ermöglicht, eine Sprache direkt auf einem Canvas-Rendering-Kontext einzustellen, unabhängig davon, ob Sie einen Bildschirm- oder Offscreen-Canvas verwenden.

### Der `inherit`-Wert

Wenn der `inherit`-Wert verwendet wird, wird die Sprache des Canvas-Kontexts vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut der nächst verfügbaren HTML-Quelle geerbt:

- Im Fall eines Bildschirmkontexts oder eines Offscreen-Kontexts, der von einem Bildschirmkontext übertragen wurde, ist dies das ursprüngliche {{HTMLElement("canvas")}}-Element, vorausgesetzt, es hat ein gültiges `lang`-Attribut gesetzt.
- Wenn kein `lang`-Attribut auf einem zugehörigen `<canvas>`-Element verfügbar ist, was bei einem Bildschirm- oder Offscreen-Kontext der Fall sein könnte, ist dies der nächst verfügbare Vorfahre mit einem explizit gesetzten `lang`, was häufig die Dokumentwurzel ist.

Aufgrund technischer Einschränkungen verhält sich der `inherit`-Wert unterschiedlich für Bildschirm- und Offscreen-Canvases:

- Für Bildschirm-Canvases wird der `lang`-Wert geerbt, wenn das assoziierte `CanvasRenderingContext2D`-Objekt erstmals erstellt wird; der geerbte `lang`-Wert ändert sich dann dynamisch, wenn der Wert des `lang`-Attributs aktualisiert wird.
- Für Offscreen-Canvases wird der `lang`-Wert geerbt, wenn das assoziierte `OffscreenCanvasRenderingContext2D`-Objekt erstmals erstellt wird, und bleibt dann für die Lebensdauer des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) fest. Er **ändert sich nicht**, wenn der Wert des `lang`-Attributs aktualisiert wird. Aufgrund dessen kann die Sprache eines Offscreen-Canvas nur geändert werden, indem der `lang`-Wert explizit gesetzt wird.

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

### Unterstützung der Lokalisierung von Canvas-Kontexten demonstrieren

In diesem Beispiel rendern wir eine Textzeichenfolge in einem 2D-Canvas-Kontext in einer bestimmten Schriftart, die sprachabhängige Ligaturen hat. Wir ermöglichen es, die Sprache des Canvas-Kontexts anzupassen, damit Sie den Unterschied im Rendering sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, das es Ihnen ermöglicht, eine Sprache auszuwählen — `en` (Englisch) oder `tr` (Türkisch) — und ein {{htmlelement("canvas")}}-Element, auf dem gerendert wird.

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

Im JavaScript holen wir zuerst Referenzen zum `<canvas>`-Element, seinem `CanvasRenderingContext2D` und dem `<select>`-Element, dann laden wir die sprachabhängige Schriftart mit der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald die Schriftart geladen ist, führen wir eine `init()`-Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, die etwas Text auf den Canvas-Kontext zeichnet, der die geladene Schriftart verwendet, fügt dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu und ruft dann `drawText()` auf, damit der Text sofort auf den Canvas gezeichnet wird, wenn die Seite geladen wird.

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

- Den Wert des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs des `<html>`-Elements auf den `<select>`-Elementwert setzt und somit effektiv die Sprache des Dokuments ändert.
- Die `drawText()`-Funktion ausführt. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, daher übernimmt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Probieren Sie aus, die Sprache des Dokuments mit dem `<select>`-Element zu ändern. Wenn die Sprache auf Englisch eingestellt ist, wird die Schriftart mit der "fi"-Ligatur gerendert. Wird sie jedoch auf Türkisch eingestellt, wird die Schriftart ohne die "fi"-Ligatur gerendert, da diese Lokale sie nicht enthält.

### Sprachunterstützung für Offscreen-Canvases

Dieses Beispiel ist ähnlich wie das vorherige Beispiel, außer dass die Schriftart auf einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert wird und dann das resultierende Bitmap für die Anzeige auf den Bildschirm `<canvas>` übertragen wird.

Zusätzlich wird, da eine geerbte Offscreen-Canvas-Sprache nur einmal gesetzt wird und nicht dynamisch aktualisiert wird, wenn der geerbte `lang`-Attributwert geändert wird, die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D` explizit gesetzt.

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

- Der Bildschirm-Canvas-Kontext als ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert ist.
- Wir einen neuen `OffscreenCanvasRenderingContext2D` definieren, um den Text darauf zu zeichnen, das Ergebnis in ein Bitmap mit [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) übertragen und dann auf dem `<canvas>` mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) rendern.
- Wenn der `<select>`-Wert geändert wird, aktualisieren wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D` anstatt den `<html>` `lang`-Attributwert zu ändern.

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

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample('offscreen-l10n', "100%", 220) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [Canvas Localization Support](https://blogs.igalia.com/schenney/canvas-localization-support/) von Igalia (2025)
