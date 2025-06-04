---
title: "CanvasRenderingContext2D: lang-Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: da2997666dd2ac0186ebaaaf55bb7abbaa328f79
---

{{APIRef}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft der Canvas 2D API ruft die Sprache des Zeichenkontexts der Leinwand ab oder setzt diese.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden String-Werte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}}, der die Sprache des Canvas-Kontexts darstellt.
- Der String `inherit`, in diesem Fall wird die Sprache aus dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des Ursprungs-{{HTMLElement("canvas")}}-Elements oder dem nächstliegenden verfügbaren Vorfahren mit einem explizit gesetzten `lang`-Attribut geerbt.
- Ein leerer String (`""`), was gesetzt werden kann, um anzugeben, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal ist es notwendig, eine Sprache für einen Canvas-Darstellungskontext festzulegen, damit dieser weiß, wie sprachabhängige Funktionen gerendert werden sollen: Zum Beispiel haben einige Schriftarten bestimmte Zeichen, die in verschiedenen Sprachen unterschiedlich gerendert werden. Ein Bildschirmcanvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verbunden, sodass immer, wenn Sie Inhalte damit rendern, die Sprache aus dem Wert des `lang`-Attributs des `<canvas>`-Elements abgeleitet werden kann.

Eine Sprache für einen Canvas-Darstellungskontext festzulegen, ist manchmal notwendig, um sprachabhängige Funktionen wie bestimmte Schriftarten steuerbar zu machen. Ein Bildschirmcanvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verbunden, sodass immer, wenn Sie Inhalte rendern, die Sprache aus dem Wert des `lang`-Attributs des `<canvas>`-Elements abgeleitet werden kann.

Ein Offscreen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) rendert jedoch seine Inhalte, bevor er mit einem `<canvas>`-Element verbunden wird, sodass die Sprache nicht aus dem `lang`-Attribut des `<canvas>`-Elements abgeleitet werden kann. Die `lang`-Eigenschaft löst dieses Problem, indem sie ermöglicht, eine Sprache direkt auf einem Canvas-Darstellungskontext zu setzen, unabhängig davon, ob Sie einen Bildschirm- oder Offscreen-Canvas verwenden.

### Der Wert `inherit`

Wenn der Wert `inherit` verwendet wird, wird die Sprache des Canvas-Kontexts aus dem `lang`-Attribut der nächstverfügbaren HTML-Quelle geerbt:

- Im Fall eines Bildschirmkontexts oder eines Offscreen-Kontexts, der von einem Bildschirmkontext übertragen wurde, wird dies das Ursprungs-{{HTMLElement("canvas")}}-Element sein, vorausgesetzt, es hat ein gültiges `lang`-Attribut.
- Wenn ein `lang`-Attribut auf einem verbundenen `<canvas>`-Element nicht verfügbar ist, was der Fall für einen Bildschirm- oder Offscreen-Kontext sein könnte, wird dies der nächstgelegene verfügbare Vorfahre mit einem explizit gesetzten `lang` sein, was häufig die Dokumentwurzel ist.

Aufgrund technischer Einschränkungen verhält sich der Wert `inherit` bei Bildschirm- und Offscreen-Canvases unterschiedlich:

- Bei Bildschirm-Canvasen wird der `lang`-Wert vererbt, wenn das zugehörige `CanvasRenderingContext2D`-Objekt erstmals erstellt wird; der vererbte `lang`-Wert ändert sich dann dynamisch, wenn der Wert des `lang`-Attributs aktualisiert wird.
- Bei Offscreen-Canvasen wird der `lang`-Wert vererbt, wenn das zugehörige `OffscreenCanvasRenderingContext2D`-Objekt erstmals erstellt wird, und dann für die Lebensdauer des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) festgelegt. Er ändert sich **nicht**, wenn der Wert des `lang`-Attributs aktualisiert wird. Dadurch kann die Sprache eines Offscreen-Canvas nur durch explizites Setzen des `lang`-Werts geändert werden.

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

### Demonstration der Lokalisierungsunterstützung des Canvas-Kontexts

In diesem Beispiel rendern wir einen Textstring in einem 2D-Canvas-Kontext in einer bestimmten Schriftart, die sprachabhängige Ligaturen aufweist. Wir erlauben, die Sprache des Canvas-Kontexts anzupassen, sodass Sie den Unterschied im Rendering sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, das Ihnen die Auswahl einer Sprache ermöglicht — `en` (Englisch) oder `tr` (Türkisch) — sowie ein {{htmlelement("canvas")}}-Element, auf das gerendert wird.

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

Im JavaScript greifen wir zuerst auf das `<canvas>`-Element, seinen `CanvasRenderingContext2D` und das `<select>`-Element zu, laden dann die sprachabhängige Schriftart mithilfe der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald die Schriftart geladen ist, führen wir eine `init()`-Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, die etwas Text zum Canvas-Kontext zeichnet, die geladene Schriftart verwendet, einen [`change`](/de/docs/Web/API/HTMLElement/change_event) [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) zum `<select>`-Element hinzufügt und dann `drawText()` aufruft, sodass der Text sofort auf das Canvas gezeichnet wird, wenn die Seite zuerst geladen wird.

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

Wenn der `<select>`-Wert geändert wird, wird die `change`-Ereignis-Handler-Funktion ausgelöst, die:

- Den Wert des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs des `<html>`-Elements auf den Wert des `<select>`-Elements setzt und somit die Sprache des Dokuments effektiv ändert.
- Die `drawText()`-Funktion ausführt. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, daher erbt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Versuchen Sie, die Dokumentsprache mithilfe des `<select>`-Elements zu ändern. Wenn die Sprache auf Englisch gesetzt ist, wird die Schriftart mit der "fi"-Ligatur gerendert. Wenn sie jedoch auf Türkisch gesetzt ist, wird die Schriftart ohne die "fi"-Ligatur gerendert, da diese Ortseinstellung diese nicht enthält.

### Sprachunterstützung für Offscreen-Canvases

Dieses Beispiel ist dem vorherigen ähnlich, mit der Ausnahme, dass die Schriftart zu einem [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert und dann das resultierende Bitmap an das Bildschirm-`<canvas>` übertragen wird, um angezeigt zu werden.

Zusätzlich, weil eine geerbte Offscreen-Canvas-Sprache nur einmal gesetzt und nicht dynamisch aktualisiert wird, wenn sich der geerbte `lang`-Attributwert ändert, setzen wir die `lang`-Eigenschaft explizit auf dem `OffscreenCanvasRenderingContext2D`.

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

Das JavaScript funktioniert auf die gleiche Weise wie im vorherigen Beispiel, mit der Ausnahme, dass:

- Der Bildschirm-Canvas-Kontext als ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert ist.
- Wir definieren einen neuen `OffscreenCanvasRenderingContext2D`, um den Text darauf zu zeichnen, das Ergebnis dann zu einem Bitmap unter Verwendung von [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) übertragen, und es dann auf dem `<canvas>` mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) rendern.
- Wenn der `<select>`-Wert geändert wird, aktualisieren wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D`, anstatt den `lang`-Attributwert des `<html>` zu ändern.

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

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample('offscreen-l10n', "100%", 220) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [Canvas Localization Support](https://blogs.igalia.com/schenney/canvas-localization-support/) von Igalia (2025)
