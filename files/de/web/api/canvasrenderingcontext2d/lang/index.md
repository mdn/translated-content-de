---
title: "CanvasRenderingContext2D: lang-Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft der Canvas 2D API ruft die Sprache des Canvas-Zeichenkontextes ab oder setzt sie.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden String-Werte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47 language tag")}}, das die Sprache des Canvas-Kontextes darstellt.
- Der String `inherit`, in diesem Fall wird die Sprache vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des ursprünglichen {{HTMLElement("canvas")}}-Elements oder dem nächsten verfügbaren Vorfahren mit explizit gesetztem `lang` geerbt.
- Ein leerer String (`""`), der gesetzt werden kann, um anzugeben, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal ist es notwendig, eine Sprache für einen Canvas-Rendering-Kontext festzulegen, sodass er weiß, wie sprachabhängige Merkmale dargestellt werden sollen: Beispielsweise werden einige Schriftarten in verschiedenen Sprachen unterschiedlich gerendert. Ein Bildschirm-Canvas-Kontext (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verbunden, sodass er, wann immer Sie Inhalte damit rendern, die Sprache aus dem Wert des `lang`-Attributs des `<canvas>`-Elements ableiten kann.

Ein Offscreen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) rendert jedoch seine Inhalte, bevor er einem `<canvas>`-Element zugeordnet wird, sodass er keine Render-Sprache aus dem `lang`-Attribut des `<canvas>`-Elements ableiten kann. Die `lang`-Eigenschaft löst dieses Problem, indem Sie eine Sprache direkt auf einem Canvas-Rendering-Kontext festlegen können, egal ob Sie einen Onscreen- oder Offscreen-Canvas verwenden.

### Der `inherit`-Wert

Wenn der Wert `inherit` verwendet wird, wird die Sprache des Canvas-Kontextes vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut der nächstverfügbaren HTML-Quelle geerbt:

- Im Fall eines Onscreen-Kontextes oder eines Offscreen-Kontextes, der von einem Onscreen-Kontext transferiert wurde, wird dies das ursprüngliche {{HTMLElement("canvas")}}-Element sein, vorausgesetzt, es hat ein gültiges `lang`-Attribut.
- Wenn ein `lang`-Attribut auf einem zugeordneten `<canvas>`-Element nicht verfügbar ist, was für einen Onscreen- oder Offscreen-Kontext der Fall sein könnte, wird dies der nächste verfügbare Vorfahre mit einem explizit gesetzten `lang` sein, was üblicherweise die Dokumentenwurzel ist.

Aufgrund technischer Einschränkungen verhält sich der `inherit`-Wert für Onscreen- und Offscreen-Canvases unterschiedlich:

- Für Onscreen-Canvases wird der `lang`-Wert des Kontextes beim ersten Erstellen des zugehörigen `CanvasRenderingContext2D`-Objekts geerbt und dynamisch aktualisiert, wenn das `lang`-Attribut des zugehörigen Canvas (entweder direkt oder durch Vererbung) aktualisiert wird.
- Für Offscreen-Canvases wird der `lang`-Wert geerbt, wenn das zugehörige `OffscreenCanvasRenderingContext2D`-Objekt erstmals erstellt wird, als eine "Momentaufnahme"; nachfolgende Aktualisierungen des `lang`-Attributs, von dem der Offscreen-Kontext seinen Wert geerbt hat, ändern dessen `lang`-Attribut nicht mehr.
  Aus diesem Grund kann die Sprache eines Offscreen-Canvas nur geändert werden, indem sein `lang`-Wert explizit gesetzt wird.

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

### Demonstration der Canvas-Kontext-Lokalisierungsunterstützung

In diesem Beispiel rendern wir einen Textstring zu einem 2D-Canvas-Kontext in einer besonderen Schriftart, die sprachabhängige Ligaturen hat. Wir ermöglichen es, die Sprache des Canvas-Kontextes anzupassen, damit Sie den Unterschied im Rendering sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, das es Ihnen ermöglicht, eine Sprache auszuwählen — `en` (Englisch) oder `tr` (Türkisch) — und ein {{htmlelement("canvas")}}-Element zum Rendern.

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

Im JavaScript holen wir zunächst Referenzen zum `<canvas>`-Element, dessen `CanvasRenderingContext2D` und zum `<select>`-Element, laden dann die sprachabhängige Schriftart mithilfe der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald die Schriftart geladen ist, führen wir eine `init()`-Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, welche den Text auf den Canvas-Kontext zeichnet, der die geladene Schrift nutzt, fügt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) für das `<select>`-Element hinzu und ruft `drawText()` auf, damit der Text sofort auf den Canvas gezeichnet wird, wenn die Seite zum ersten Mal geladen wird.

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

Wenn der `<select>`-Wert geändert wird, wird die `change`-Event-Handler-Funktion ausgelöst, die:

- Den Wert des `<html>`-Elements `lang`-Attributs auf den `<select>`-Element-Wert setzt, was effektiv die Sprache des Dokuments ändert.
- Die `drawText()`-Funktion ausführt. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, daher erbt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Versuchen Sie, die Dokumentensprache mithilfe des `<select>`-Elements zu ändern. Wenn die Sprache auf Englisch gesetzt ist, wird die Schrift mit der "fi"-Ligatur gerendert. Ist sie jedoch auf Türkisch gesetzt, wird die Schrift ohne die "fi"-Ligatur gerendert, da diese im türkischen Gebietsschema nicht enthalten ist.

### Sprachunterstützung für Offscreen-Canvases

Dieses Beispiel ist ähnlich wie das vorherige, außer dass die Schrift in einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert wird und dann das resultierende Bitmap an das Onscreen-`<canvas>` zur Anzeige übertragen wird.

Da eine vererbte Offscreen-Canvas-Sprache nur einmal gesetzt wird und nicht dynamisch aktualisiert wird, wenn der vererbte `lang`-Attributwert geändert wird, setzen wir die `lang`-Eigenschaft explizit auf dem `OffscreenCanvasRenderingContext2D`.

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

Das JavaScript funktioniert auf die gleiche Weise wie das vorherige Beispiel, außer dass:

- Der Onscreen-Canvas-Kontext wird als [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert.
- Wir definieren einen neuen `OffscreenCanvasRenderingContext2D`, um den Text darauf zu zeichnen, übertragen das Ergebnis in ein Bitmap mittels [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) und rendern es dann auf dem `<canvas>` mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap).
- Wenn der `<select>`-Wert geändert wird, aktualisieren wir die `lang`-Eigenschaft direkt auf dem `OffscreenCanvasRenderingContext2D` anstatt den `<html>`-`lang`-Attributwert zu ändern.

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
