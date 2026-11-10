---
title: "CanvasRenderingContext2D: Eigenschaft lang"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Canvas API")}}

Die Eigenschaft **`CanvasRenderingContext2D.lang`** der Canvas 2D API gibt die Sprache des Canvas-Zeichenkontexts zurück oder legt sie fest.

## Wert

Die Eigenschaft `lang` kann einen der folgenden Zeichenfolgenwerte annehmen:

- Ein {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}, der die Sprache des Canvas-Kontexts angibt.
- Die Zeichenfolge `inherit`. In diesem Fall wird die Sprache vom Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) des zugehörigen {{HTMLElement("canvas")}}-Elements oder vom nächstgelegenen verfügbaren Vorfahren mit explizit gesetztem `lang` geerbt.
- Eine leere Zeichenfolge (`""`), mit der angegeben werden kann, dass der Canvas-Kontext keine Sprache hat.

Der Standardwert ist `inherit`.

## Beschreibung

Manchmal müssen Sie für einen Canvas-Rendering-Kontext eine Sprache festlegen, damit sprachabhängige Merkmale korrekt dargestellt werden. Beispielsweise werden bestimmte Zeichen in manchen Schriftarten je nach Sprache unterschiedlich dargestellt. Ein Canvas-Kontext auf dem Bildschirm (`CanvasRenderingContext2D`) ist immer einem bestimmten `<canvas>`-Element zugeordnet. Daher kann er beim Rendern von Inhalten die Sprache aus dem Attribut `lang` des `<canvas>`-Elements ableiten.

Ein Offscreen-Canvas-Kontext ([`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)) rendert seine Inhalte dagegen, bevor er einem `<canvas>`-Element zugeordnet wird. Deshalb kann er die Sprache für die Darstellung nicht aus dem Attribut `lang` des `<canvas>`-Elements ableiten. Die Eigenschaft `lang` löst dieses Problem: Mit ihr können Sie die Sprache direkt für einen Canvas-Rendering-Kontext festlegen, unabhängig davon, ob Sie einen Canvas auf dem Bildschirm oder einen Offscreen-Canvas verwenden.

### Der Wert `inherit`

Bei Verwendung des Werts `inherit` erbt der Canvas-Kontext seine Sprache vom Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) der nächstgelegenen verfügbaren HTML-Quelle:

- Bei einem Kontext auf dem Bildschirm oder einem Offscreen-Kontext, der von einem Kontext auf dem Bildschirm übertragen wurde, ist dies das ursprüngliche {{HTMLElement("canvas")}}-Element, sofern für dieses ein gültiges Attribut `lang` gesetzt ist.
- Wenn für ein zugeordnetes `<canvas>`-Element kein Attribut `lang` verfügbar ist – was sowohl bei einem Kontext auf dem Bildschirm als auch bei einem Offscreen-Kontext der Fall sein kann –, wird die Sprache vom nächstgelegenen verfügbaren Vorfahren mit explizit gesetztem `lang` geerbt. Dies ist häufig das Wurzelelement des Dokuments.

Aufgrund technischer Einschränkungen verhält sich der Wert `inherit` bei Canvas-Elementen auf dem Bildschirm und bei Offscreen-Canvas-Elementen unterschiedlich:

- Bei Canvas-Elementen auf dem Bildschirm wird der Wert `lang` des Kontexts geerbt, wenn das zugehörige `CanvasRenderingContext2D`-Objekt erstmals erstellt wird. Er wird dynamisch aktualisiert, wenn sich das Attribut `lang` des zugehörigen Canvas ändert – entweder direkt oder durch Vererbung.
- Bei Offscreen-Canvas-Elementen wird der Wert `lang` bei der ersten Erstellung des zugehörigen `OffscreenCanvasRenderingContext2D`-Objekts als Momentaufnahme geerbt. Spätere Änderungen am Attribut `lang`, von dem der Offscreen-Kontext seinen Wert geerbt hat, ändern dessen Eigenschaft `lang` nicht.
  Deshalb lässt sich die Sprache eines Offscreen-Canvas nur ändern, indem sein Wert `lang` ausdrücklich festgelegt wird.

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

### Unterstützung für die Lokalisierung von Canvas-Kontexten demonstrieren

In diesem Beispiel rendern wir eine Textzeichenfolge in einem 2D-Canvas-Kontext mit einer Schriftart, deren Ligaturen von der Sprache abhängen. Sie können die Sprache des Canvas-Kontexts ändern, um den Unterschied bei der Darstellung zu sehen.

#### HTML

Das HTML enthält ein {{htmlelement("select")}}-Element, mit dem Sie eine Sprache auswählen können – `en` (Englisch) oder `tr` (Türkisch) – sowie ein {{htmlelement("canvas")}}-Element für die Darstellung.

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

Im JavaScript rufen wir zunächst Referenzen auf das `<canvas>`-Element, dessen `CanvasRenderingContext2D` und das `<select>`-Element ab. Anschließend laden wir die sprachabhängige Schriftart mithilfe der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Sobald die Schriftart geladen ist, führen wir die Funktion `init()` aus. Diese definiert eine weitere Funktion, `drawText()`, die Text mit der geladenen Schriftart in den Canvas-Kontext zeichnet. Außerdem fügt sie dem `<select>`-Element einen [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) für das Ereignis [`change`](/de/docs/Web/API/HTMLElement/change_event) hinzu und ruft dann `drawText()` auf, damit der Text beim ersten Laden der Seite sofort im Canvas erscheint.

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

Wenn sich der Wert des `<select>`-Elements ändert, wird die Ereignisbehandlungsfunktion für `change` ausgeführt. Sie:

- Setzt das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) des `<html>`-Elements auf den Wert des `<select>`-Elements und ändert damit die Sprache des Dokuments.
- Führt die Funktion `drawText()` aus. Da die Eigenschaft `CanvasRenderingContext2D.lang` standardmäßig auf `inherit` gesetzt ist, erbt der Canvas-Kontext die Sprache des Dokuments.

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample('demonstrating_canvas_context_localization_support', "100%", 220) }}

Versuchen Sie, die Dokumentsprache mit dem `<select>`-Element zu ändern. Wenn die Sprache auf Englisch eingestellt ist, wird die Schriftart mit der „fi“-Ligatur dargestellt. Bei Türkisch wird die Schriftart dagegen ohne die „fi“-Ligatur dargestellt, da diese Sprache sie nicht verwendet.

### Sprachunterstützung für Offscreen-Canvas-Elemente

Dieses Beispiel ähnelt dem vorherigen. Allerdings wird die Schriftart in einem [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) gerendert. Anschließend wird die resultierende Bitmap zur Anzeige auf das `<canvas>`-Element auf dem Bildschirm übertragen.

Da die geerbte Sprache eines Offscreen-Canvas nur einmal festgelegt und bei Änderungen am geerbten Attribut `lang` nicht dynamisch aktualisiert wird, setzen wir die Eigenschaft `lang` stattdessen ausdrücklich für das `OffscreenCanvasRenderingContext2D`.

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

Das JavaScript funktioniert wie im vorherigen Beispiel, mit folgenden Unterschieden:

- Der Canvas-Kontext auf dem Bildschirm wird als [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) definiert.
- Wir definieren ein neues `OffscreenCanvasRenderingContext2D`, in das der Text gezeichnet wird. Das Ergebnis übertragen wir mit [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) in eine Bitmap und stellen diese anschließend mit [`transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) auf dem `<canvas>`-Element dar.
- Wenn sich der Wert des `<select>`-Elements ändert, aktualisieren wir die Eigenschaft `lang` direkt am `OffscreenCanvasRenderingContext2D`, anstatt den Wert des Attributs `lang` am `<html>`-Element zu ändern.

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

{{ EmbedLiveSample('language_support_for_offscreen_canvases', "100%", 220) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [Unterstützung für die Canvas-Lokalisierung](https://blogs.igalia.com/schenney/canvas-localization-support/) von Igalia (2025)
