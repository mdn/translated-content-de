---
title: "CanvasRenderingContext2D: lang-Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft der 2D-Canvas-API liest oder setzt die Sprache des Canvas-Zeichnungskontexts.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden Zeichenkettenwerte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}}, der die Sprache des Canvas-Kontexts repräsentiert.
- Die Zeichenkette `inherit`, in diesem Fall wird die Sprache vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des ursprünglichen {{HTMLElement("canvas")}}-Elements oder vom nächstgelegenen verfügbaren Vorfahren mit einem explizit gesetzten `lang` vererbt.
- Eine leere Zeichenkette (`""`), die gesetzt werden kann, um anzugeben, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal müssen Sie eine Sprache für einen Canvas-Zeichnungskontext festlegen, damit dieser weiß, wie sprachabhängige Funktionen gerendert werden: beispielsweise werden einige Schriftarten in verschiedenen Sprachen unterschiedlich dargestellt. Ein Bildschirm-Canvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verknüpft, sodass, wann immer Sie Inhalte damit rendern, die Sprache aus dem Wert des `lang`-Attributs des `<canvas>`-Elements abgeleitet werden kann.

Ein Off-Screen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) rendert jedoch seinen Inhalt, bevor er mit einem `<canvas>`-Element verknüpft wird, sodass die Sprache nicht aus dem `lang`-Attribut des `<canvas>`-Elements abgeleitet werden kann. Die `lang`-Eigenschaft löst dieses Problem, indem Sie eine Sprache direkt auf einem Canvas-Zeichnungskontext festlegen können, unabhängig davon, ob Sie einen Bildschirm- oder Off-Screen-Canvas verwenden.

### Der Wert `inherit`

Wenn der `inherit`-Wert verwendet wird, wird die Sprache des Canvas-Kontexts vom `lang`-Attribut der nächstverfügbaren HTML-Quelle geerbt:

- Im Fall eines Bildschirmkontextes oder eines Off-Screen-Kontextes, der von einem Bildschirmkontext übertragen wurde, ist dies das Ursprungs-{{HTMLElement("canvas")}}-Element, sofern es ein gültiges `lang`-Attribut hat.
- Wenn ein `lang`-Attribut auf einem zugehörigen `<canvas>`-Element nicht verfügbar ist, was für einen Bildschirm- oder Off-Screen-Kontext der Fall sein könnte, ist dies der nächstgelegene verfügbare Vorfahre mit einem explizit gesetzten `lang`, was üblicherweise die Dokumentwurzel ist.

Aufgrund technischer Einschränkungen verhält sich der `inherit`-Wert für Bildschirm- und Off-Screen-Canvases unterschiedlich:

- Für Bildschirm-Canvases wird der `lang`-Wert geerbt, wenn das zugehörige `CanvasRenderingContext2D`-Objekt erstmals erstellt wird; der geerbte `lang`-Wert ändert sich dann dynamisch, falls der `lang`-Attributwert aktualisiert wird.
- Für Off-Screen-Canvases wird der `lang`-Wert geerbt, wenn das zugehörige `OffscreenCanvasRenderingContext2D`-Objekt erstmals erstellt wird, und bleibt dann für die Lebensdauer des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) fest. Er ändert sich **nicht**, wenn der `lang`-Attributwert aktualisiert wird. Aufgrund dessen kann die Sprache eines Off-Screen-Canvases nur durch explizites Setzen des `lang`-Werts geändert werden.

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

### Demonstration der Lokalisierungsunterstützung von Canvas-Kontexten

In diesem Beispiel rendern wir eine Textzeichenfolge in einem bestimmten Font, der sprachabhängige Ligaturen aufweist, zu einem 2D-Canvas-Kontext. Wir ermöglichen es, die Sprache des Canvas-Kontexts anzupassen, sodass Sie den Unterschied in der Darstellung sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, das die Auswahl einer Sprache — `en` (Englisch) oder `tr` (Türkisch) — ermöglicht, und ein {{htmlelement("canvas")}}-Element zum Rendern.

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

Im JavaScript greifen wir zunächst auf das `<canvas>`-Element, seinen `CanvasRenderingContext2D` und das `<select>`-Element zu und laden die sprachabhängige Schriftart unter Verwendung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald die Schriftart geladen ist, führen wir eine `init()`-Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, die etwas Text auf den Canvas-Kontext zeichnet, der die geladene Schriftart verwendet, fügt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) zum `<select>`-Element hinzu und ruft dann `drawText()` auf, damit der Text sofort beim ersten Laden der Seite auf den Canvas gezeichnet wird.

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

Wenn der `<select>`-Wert geändert wird, löst die `change`-Event-Handler-Funktion aus, die:

- Setzt den Wert des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs des `<html>`-Elements auf den Wert des `<select>`-Elements, wodurch die Sprache des Dokuments effektiv geändert wird.
- Führt die `drawText()`-Funktion aus. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, wodurch der Canvas-Kontext die Sprache des Dokuments erbt.

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Versuchen Sie, die Dokumentensprache mit dem `<select>`-Element zu ändern. Wenn die Sprache auf Englisch eingestellt ist, wird die Schriftart mit der "fi"-Ligatur gerendert. Wenn auf Türkisch eingestellt, wird die Schriftart ohne die "fi"-Ligatur gerendert, da dieses Locale diese nicht enthält.

### Sprachunterstützung für Off-Screen-Canvases

Dieses Beispiel ist dem vorherigen Beispiel ähnlich, außer dass die Schriftart zu einem [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert wird, dann wird das resultierende Bitmap auf das Bildschirm-`<canvas>` übertragen, um es anzuzeigen.

Zusätzlich, weil eine geerbte Off-Screen-Canvas-Sprache nur einmal festgelegt wird und nicht dynamisch aktualisiert wird, wenn sich der geerbte `lang`-Attributwert ändert, setzen wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D`.

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

Das JavaScript arbeitet auf die gleiche Weise wie das vorherige Beispiel, außer dass:

- Der Bildschirm-Canvas-Kontext als [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert ist.
- Wir definieren einen neuen `OffscreenCanvasRenderingContext2D`, um den Text darauf zu zeichnen, übertragen das Ergebnis zu einem Bitmap mit [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) und rendern es dann auf dem `<canvas>` mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap).
- Wenn der `<select>`-Wert geändert wird, aktualisieren wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D`, anstatt den `<html>` `lang`-Attributwert zu ändern.

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

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample('offscreen-l10n', "100%", 220) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [Canvas Localization Support](https://blogs.igalia.com/schenney/canvas-localization-support/) von Igalia (2025)
