---
title: "CanvasRenderingContext2D: lang-Eigenschaft"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: f993d9f6d574bd8b519014c6ad46bc66f28fae7e
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.lang`**-Eigenschaft der Canvas 2D API gibt die Sprache des Canvas-Zeichenkontexts zurück oder setzt diese.

## Wert

Die `lang`-Eigenschaft kann einen der folgenden String-Werte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}}, der die Sprache des Canvas-Kontexts darstellt.
- Der String `inherit`, in welchem Fall die Sprache vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des Ausgangs-{{HTMLElement("canvas")}}-Elements oder vom nächstgelegenen verfügbaren Vorfahren mit einem explizit gesetzten `lang`-Attribut geerbt wird.
- Ein leerer String (`""`), der gesetzt werden kann, um anzugeben, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal muss eine Sprache für einen Canvas-Zeichenkontext festgelegt werden, damit er weiß, wie sprachabhängige Merkmale zu rendern sind: Zum Beispiel haben einige Schriftarten bestimmte Zeichen, die in verschiedenen Sprachen unterschiedlich gerendert werden. Ein Bildschirm-Canvas-Kontxt (`CanvasRenderingContext2D`) ist immer mit einem bestimmten `<canvas>`-Element verknüpft und kann daher beim Rendern von Inhalten die Sprache aus dem Wert des `lang`-Attributs des `<canvas>`-Elements ableiten.

Ein Offscreen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) hingegen rendert seinen Inhalt, bevor er mit einem `<canvas>`-Element verknüpft wird, sodass er die Rendersprache nicht aus dem `lang`-Attribut des `<canvas>`-Elements ableiten kann. Die `lang`-Eigenschaft adressiert dieses Problem, indem Sie eine Sprache direkt auf einem Canvas-Zeichenkontext setzen können, unabhängig davon, ob Sie einen Bildschirm- oder Offscreen-Canvas verwenden.

### Der `inherit`-Wert

Wenn der `inherit`-Wert verwendet wird, wird die Sprache des Canvas-Kontexts vom [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut der nächstverfügbaren HTML-Quelle geerbt:

- Im Fall eines Bildschirmkontextes oder eines Offscreen-Kontextes, der von einem Bildschirmkontext übertragen wurde, ist dies das Ausgangs-{{HTMLElement("canvas")}}-Element, sofern es ein gültiges `lang`-Attribut gesetzt hat.
- Wenn ein `lang`-Attribut auf einem zugehörigen `<canvas>`-Element nicht verfügbar ist, was sowohl für Bildschirm- als auch Offscreen-Kontexte der Fall sein könnte, wird dies der nächstgelegene verfügbare Vorfahre mit einem explizit gesetzten `lang` sein, was üblicherweise die Dokumentwurzel ist.

Aufgrund technischer Einschränkungen verhält sich der `inherit`-Wert unterschiedlich für Bildschirm- und Offscreen-Canvas:

- Für Bildschirm-Canvas wird der `lang`-Wert des Kontexts geerbt, wenn das zugehörige `CanvasRenderingContext2D`-Objekt erstmals erstellt wird, und dynamisch aktualisiert, wenn das `lang`-Attribut des zugehörigen Canvas aktualisiert wird (entweder direkt oder durch Vererbung).
- Für Offscreen-Canvas wird der `lang`-Wert geerbt, wenn das zugehörige `OffscreenCanvasRenderingContext2D`-Objekt erstmals "als Schnappschuss" erstellt wird; nachfolgende Aktualisierungen des `lang`-Attributs, von dem der Offscreen-Kontext seinen Wert geerbt hat, ändern nicht dessen `lang`-Attribut.
  Aus diesem Grund kann die Sprache eines Offscreen-Canvas nur durch explizites Setzen seines `lang`-Wertes geändert werden.

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

In diesem Beispiel rendern wir einen Textstring in einem bestimmten Font in einen 2D-Canvas-Kontext, der sprachabhängige Ligaturen hat. Wir erlauben die Anpassung der Sprache des Canvas-Kontexts, damit Sie den Unterschied im Rendering sehen können.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, das Ihnen ermöglicht, eine Sprache auszuwählen — `en` (Englisch) oder `tr` (Türkisch) — und ein {{htmlelement("canvas")}}-Element zum Rendern.

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

Im JavaScript erfassen wir zuerst Verweise auf das `<canvas>`-Element, seinen `CanvasRenderingContext2D` und das `<select>`-Element, dann laden wir den sprachabhängigen Font mit der [CSS-Font-Lade-API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald der Font geladen ist, führen wir eine `init()`-Funktion aus. Diese Funktion definiert eine weitere Funktion — `drawText()`, die einige Texte in den Canvas-Kontext zeichnet, der den geladenen Font verwendet. Danach fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-[Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) zum `<select>`-Element hinzu und rufen `drawText()` auf, damit der Text sofort in den Canvas gezeichnet wird, wenn die Seite das erste Mal geladen wird.

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

Wenn der Wert des `<select>` geändert wird, wird die `change`-Ereignishandlerfunktion ausgelöst, die:

- Den Wert des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs des `<html>`-Elements auf den Wert des `<select>`-Elements setzt und dadurch die Sprache des Dokuments effektiv ändert.
- Die `drawText()`-Funktion ausführt. Die `CanvasRenderingContext2D.lang`-Eigenschaft ist standardmäßig auf `inherit` gesetzt, daher erbt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

Versuchen Sie, die Dokumentensprache mit dem `<select>`-Element zu ändern. Wenn die Sprache auf Englisch gesetzt ist, wird die Schriftart mit der "fi" Ligatur gerendert. Wenn sie auf Türkisch gesetzt ist, wird die Schriftart ohne die "fi" Ligatur gerendert, da diese Lokalisierung sie nicht beinhaltet.

### Sprachunterstützung für Offscreen-Canvas

Dieses Beispiel ähnelt dem vorherigen, mit der Ausnahme, dass die Schriftart in einem [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert wird, und das resultierende Bitmap auf das Bildschirm-`<canvas>` übertragen wird, um es anzuzeigen.

Außerdem, weil eine geerbte Offscreen-Canvas-Sprache nur einmal gesetzt wird und nicht dynamisch aktualisiert wird, wenn der geerbte `lang`-Attributswert geändert wird, setzen wir die `lang`-Eigenschaft explizit auf dem `OffscreenCanvasRenderingContext2D`.

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

Das JavaScript funktioniert genauso wie im vorherigen Beispiel, mit der Ausnahme, dass:

- Der Bildschirm-Canvas-Kontext als [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert ist.
- Wir einen neuen `OffscreenCanvasRenderingContext2D` definieren, um den Text darauf zu zeichnen, das Ergebnis mit [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) in ein Bitmap konvertieren und dann mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) auf den `<canvas>` rendern.
- Wenn der Wert des `<select>` geändert wird, aktualisieren wir direkt die `lang`-Eigenschaft auf dem `OffscreenCanvasRenderingContext2D` anstelle des `lang`-Attributswertes im `<html>` zu ändern.

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
