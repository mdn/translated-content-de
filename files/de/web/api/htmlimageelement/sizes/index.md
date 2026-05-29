---
title: "HTMLImageElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: fde38492f4490cb442affcf2a31e66defa9d76f6
---

{{APIRef("HTML DOM")}}

Die **`sizes`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle ermöglicht es Ihnen, die Layoutbreite des [Bildes](/de/docs/Web/HTML/Reference/Elements/img) für jede der Liste von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) oder `auto` für nach Bedarf geladene Bilder anzugeben. Dadurch kann der Browser ein Bild basierend auf der Layoutgröße des Elements automatisch auswählen und anzeigen. Dies ermöglicht es dem Browser, zwischen verschiedenen Bildern, die im [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset) des Elements angegeben sind, zu wählen, um unterschiedlichen Medienbedingungen gerecht zu werden — sogar Bilder mit unterschiedlichen Ausrichtungen oder Seitenverhältnissen.

Die `sizes`-Eigenschaft spiegelt das `sizes`-Inhaltsattribut des `<img>`-Elements wider.
Es kann nur vorhanden sein, wenn `srcset` Breitenangaben verwendet.

## Wert

Ein String, der das `auto`-Schlüsselwort (wahlweise gefolgt von einer beliebigen Anzahl von _Quellgrößen_) oder eine oder mehrere _Quellgrößen_ sein kann.

Weitere Informationen finden Sie im [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut in der HTML-Referenz für `<img>`.

## Beispiele

### Auswahl eines Bildes passend zur Fensterbreite

Dieses Beispiel demonstriert, wie der Browser das `sizes`-Attribut verwendet, um basierend auf der gerenderten Breite des Bildes in der aktuellen Sichtfensterbreite ein Bild aus `srcset` auszuwählen.
Es erlaubt Ihnen auch, den Effekt des Änderns der Größe des Browserfensters zu sehen, welches Bild geladen wird.

#### HTML

Um den Effekt des Lazy Loadings zu demonstrieren, müssen die Bilder zunächst vor dem {{Glossary("visual_viewport", "visuellen Sichtfenster")}} verborgen sein und dann in den sichtbaren Bereich gescrollt werden.
Dies wird erreicht, indem ein äußerer `scroll-container`-{{htmlelement("div")}} verwendet wird, der `spacer`- und `demo-wrap`-Container einbettet.
Das Bild befindet sich im `demo-wrap`-Container, der durch die auf dem `spacer`-Container festgelegte Höhe aus dem visuellen Sichtfenster herausgeschoben wird.

Das {{htmlelement("img")}}-Element hat die folgenden Attribute:

- `srcset` definiert vier Bilder und gibt an, dass sie `600px`, `900px`, `1200px` und `1500px` breit sind.
- `src` gibt das Bild an, das verwendet wird, wenn `srcset` nicht unterstützt wird oder nicht geparst werden kann.
  Wir verwenden das größte Bild im `srcset`, da dies fast immer besser herunterskaliert als das kleinste Bild hochskaliert.
- `loading` ist `lazy`.
- `sizes` gibt die erwartete gerenderte Breite des Bildes an einer Reihe von Sichtfenster-Brechenpunkten an, was dem Browser ermöglicht, das passendste Bild aus `srcset` auszuwählen.

```html
<div id="scroll-container">
  Scroll down to display images
  <div id="spacer"></div>
  <div id="demo-wrap">
    <div class="img-container" id="resizable">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, (max-width: 1200px) 1200px, 1500px"
          src="1500.png"
          srcset="600.png 600w, 900.png 900w, 1200.png 1200w, 1500.png 1500w"
          alt="Example image" />
      </div>
      <div class="label">
        <strong>Container width: <span id="width-label"></span></strong>
      </div>
    </div>
  </div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```css hidden
#scroll-container {
  height: 600px;
  overflow-y: scroll;
  border: 2px solid #cccccc;
}
#spacer {
  height: 620px;
}
#demo-wrap {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
}
.img-container {
  border: 2px solid #cccccc;
  overflow: hidden;
}
.img-square {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.img-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.label {
  font-size: 13px;
  padding: 6px 10px;
  background: whitesmoke;
}
#resizable {
  width: 100%;
}
```

```js hidden
// Logging
const images = document.querySelectorAll(".img-square img");
const widthLabel = document.getElementById("width-label");

function updateWidthLabel() {
  widthLabel.textContent = `${document.getElementById("resizable").offsetWidth}px`;
}

updateWidthLabel();
new ResizeObserver(updateWidthLabel).observe(
  document.getElementById("resizable"),
);

images.forEach((img) => {
  if (img.complete) {
    log(`Already cached: ${img.currentSrc} (${img.offsetWidth}px)`);
  }
  img.addEventListener("load", () => {
    log(`Loaded: ${img.currentSrc} (${img.offsetWidth}px container)`);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`Entered viewport: ${img.alt}`);
        observer.unobserve(img);
      }
    });
  },
  {
    root: document.getElementById("scroll-container"),
    rootMargin: "0px",
    threshold: 0.1,
  },
);

images.forEach((img) => observer.observe(img));
```

Das CSS und JavaScript wird nicht angezeigt (wenn Sie diese untersuchen möchten, wählen Sie "Play", um das gesamte Beispiel im interaktiven Playground anzusehen).

#### Ergebnis

Das Beispiel wird am besten {{LiveSampleLink('Auswahl eines Bildes passend zur Fensterbreite', 'in einem eigenen Fenster betrachtet')}}, damit Sie die Größen voll anpassen können und das Beispiel nicht durch den umgebenden Rahmen eingeschränkt wird.

1. Scrollen Sie den Rahmen, um das Bild anzuzeigen.
   Das Etikett am unteren Rand des Bildes zeigt die aktuelle Containerbreite an.
2. Passen Sie die Größe des Fensters an — Sie sollten das Bild an den Medienabfrage-Brechenpunkten des `sizes`-Attributs wechseln sehen.

   Beachten Sie, dass das ausgewählte Bild größer sein kann, als die alleinige Containerbreite vermuten lässt.
   Viele Displays, wenn nicht die meisten, haben ein [Device Pixel Ratio (DPR)](/de/docs/Web/API/Window/devicePixelRatio) größer als eins.
   Um ein scharfes Bild bei der physischen Pixeldichte des Displays zu rendern, multipliziert ein Browser den passenden `sizes`-Hinweis mit dem DPR, bevor es aus `srcset` auswählt.
   Beispielsweise schaut ein Browser bei einer 2×-Anzeige mit einem Sichtfenster von ~500px auf ein ~1200px-Bild und wählt `1200.png` als die am besten verfügbare Größe und skaliert es dann, um in den verfügbaren Raum zu passen.

   > [!NOTE]
   > Infolgedessen könnten einige der Bilder im `srcset` auf einem bestimmten Display bei einigen Brechenpunkten nicht erreichbar sein, und dies könnte browserabhängig sein.

{{EmbedLiveSample("Auswahl eines Bildes passend zur Fensterbreite", "", 600)}}

Das Protokoll liefert Informationen, wenn ein `load`-Ereignis für das Bild ausgelöst wird und wann es den sichtbaren Sichtbereich schneidet.
Beachten Sie, dass das Bild lazy-loaded ist, daher sollte das `load`-Ereignis gerade ausgelöst werden, bevor das Bild in das Sichtfenster eintritt.

### Automatische Bildauswahl für lazy-geladene Bilder

Dieses Beispiel zeigt, wie die Einstellung des `sizes`-Wertes auf `auto` die Auswahl des Bildes aus dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) beeinflusst, wenn {{htmlelement("img")}}-Elemente lazy-geladen werden.
Es ermöglicht Ihnen auch, den Effekt der Änderung der Größe eines Containers auf das geladene Bild zu sehen.

#### HTML

Das HTML ist ähnlich dem im vorherigen Beispiel, mit der Ausnahme, dass es drei nahezu identische {{htmlelement("img")}}-Elemente definiert, jedes mit einem `srcset`, das 3 Bilder anzeigt, die `600px`, `400px` und `200px` breit sind, und mit einem `sizes`-Wert von `auto`.
Diese sind innerhalb von Containern eingeschränkt, die so dimensioniert sind, dass die verschiedenen Bilder ausgewählt werden.

```html
<div id="scroll-container">
  Scroll down to display images
  <div id="spacer"></div>
  <div id="demo-wrap">
    <div class="img-container img-container--sm" id="resizable">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="auto"
          src="600.png"
          srcset="600.png 600w, 400.png 400w, 200.png 200w"
          alt="Image in small container" />
      </div>
      <div class="label"><strong>Container width: 100px</strong></div>
    </div>

    <div class="img-container img-container--md">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="auto"
          src="600.png"
          srcset="600.png 600w, 400.png 400w, 200.png 200w"
          alt="Image in medium container" />
      </div>
      <div class="label"><strong>Container width: 200px</strong></div>
    </div>

    <div class="img-container img-container--lg">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="auto"
          src="600.png"
          srcset="600.png 600w, 400.png 400w, 200.png 200w"
          alt="Image in large container" />
      </div>
      <div class="label"><strong>Container width: 400px</strong></div>
    </div>
  </div>
</div>
```

```html hidden
<div id="controls">
  <label for="slider">First image width:</label>
  <input type="range" id="slider" min="100" max="700" value="100" step="1" />
  <input type="number" id="number" min="100" max="700" value="100" step="1" />
  <span>px</span>
</div>
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### CSS

Hier zeigen wir die CSS-Klassen, die die Größe der verschiedenen Bildcontainer festlegen.

```css hidden
#scroll-container {
  height: 400px;
  overflow-y: scroll;
  border: 2px solid #cccccc;
}
#spacer {
  height: 600px;
}
#demo-wrap {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
}
.img-container {
  border: 2px solid #cccccc;
  overflow: hidden;
}
.img-square {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.img-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.label {
  font-size: 13px;
  padding: 6px 10px;
  background: whitesmoke;
}
```

```css hidden
#controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
#number {
  width: 60px;
}
```

```css
.img-container--sm {
  width: 100px;
}
.img-container--md {
  width: 200px;
}
.img-container--lg {
  width: 400px;
}
```

```js hidden
const slider = document.getElementById("slider");
const number = document.getElementById("number");
const resizable = document.getElementById("resizable");
const resizableImg = resizable.querySelector("img");
const resizableLabel = resizable.querySelector(".label strong");

function setSize(px) {
  px = Math.min(700, Math.max(100, px));
  resizable.style.width = `${px}px`;
  resizableImg.sizes = `${px}px`; // update sizes so browser can pick new srcset candidate
  resizableLabel.textContent = `${px}px`;
  slider.value = px;
  number.value = px;
}

slider.addEventListener("input", () => setSize(slider.valueAsNumber));
number.addEventListener("input", () => setSize(number.valueAsNumber));

// Logging
const images = document.querySelectorAll(".img-square img");

images.forEach((img) => {
  if (img.complete) {
    log(`Already cached: ${img.currentSrc} (${img.offsetWidth}px)`);
  }
  img.addEventListener("load", () => {
    log(`Loaded: ${img.currentSrc} (${img.offsetWidth}px container)`);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`Entered viewport: ${img.alt}`);
        observer.unobserve(img);
      }
    });
  },
  {
    root: document.getElementById("scroll-container"),
    rootMargin: "0px",
    threshold: 0.1,
  },
);

images.forEach((img) => observer.observe(img));
```

Das restliche CSS und das JavaScript, das den Slider, das Logging und so weiter steuert, wird nicht angezeigt (wenn Sie daran interessiert sind, diese zu untersuchen, wählen Sie "Play", um das gesamte Beispiel im interaktiven Playground anzusehen).

#### Ergebnis

Scrollen Sie den Rahmen, um die drei Bilder anzuzeigen.
Der Browser sollte für jedes eine andere Bildauswahl vorgenommen haben, basierend auf den unterschiedlichen Breitenbeschränkungen.
Sie können den Slider verwenden, um die Größe des Containers für das erste Bild zu ändern.
Beachten Sie, dass der Browser möglicherweise ein neues Bild auswählt oder auch nicht, um es anzuzeigen, wenn sich die Größe des Containers ändert, da Implementierungen nicht erforderlich sind, auf dynamische Änderungen zu reagieren.

{{EmbedLiveSample("Automatische Bildauswahl für lazy-geladene Bilder", "", 600)}}

Das Protokoll liefert Informationen, wenn ein `load`-Ereignis für jedes Bild ausgelöst wird und wenn ein Bild den sichtbaren Sichtbereich schneidet.
Beachten Sie, dass die Bilder lazy-loaded sind, daher sollte das `load`-Ereignis gerade ausgelöst werden, bevor das Bild in das Sichtfenster eintritt.
Beachten Sie auch, dass das `load`-Ereignis ebenfalls ausgelöst wird, wenn Sie die Containergröße für das erste Bild ändern, was anzeigt, wann der Browser das Layout neu berechnet hat (nicht unbedingt, dass ein neues Bild geladen wurde).

### Blog-Beispiel

Dieses Beispiel ist ein etwas realistischeres Szenario, das demonstriert, wie ein Bild passend zu einer Fensterbreite mithilfe von Quellgrößen ausgewählt wird.

In diesem Beispiel wird ein blogartiges Layout erstellt, das etwas Text und ein Bild anzeigt, für das drei Größenpunkte abhängig von der Fensterbreite angegeben sind.
Ebenso sind drei Versionen des Bildes verfügbar, mit ihren Breiten spezifiziert. Der Browser nimmt all diese Informationen und wählt ein Bild und eine Größe aus, die am besten zu den angegebenen Werten passen.

Wie genau die Bilder verwendet werden, kann vom Browser und der Pixeldichte des Displays des Benutzers abhängen.

Schaltflächen am unteren Rand des Beispiels erlauben es Ihnen, die `sizes`-Eigenschaft leicht zu ändern, indem die größte der drei Breiten für das Bild zwischen 40em und 50em gewechselt wird.

#### HTML

```html
<article>
  <h1>An amazing headline</h1>
  <div class="test"></div>
  <p>
    This is even more amazing content text. It's really spectacular. And
    fascinating. Oh, it's also clever and witty. Award-winning stuff, I'm sure.
  </p>
  <img
    src="new-york-skyline-wide.jpg"
    srcset="
      new-york-skyline-wide.jpg 3724w,
      new-york-skyline-4by3.jpg 1961w,
      new-york-skyline-tall.jpg 1060w
    "
    sizes="(50em <= width <= 60em) 50em,
              (40em <= width < 50em) 30em,
              (width < 40em) 20em"
    alt="The New York City skyline on a beautiful day, with the One World Trade Center building in the middle." />
  <p>
    Then there's even more amazing stuff to say down here. Can you believe it? I
    sure can't.
  </p>

  <button id="break40">Last Width: 40em</button>
  <button id="break50">Last Width: 50em</button>
</article>
```

#### CSS

```css
article {
  margin: 1em;
  max-width: 60em;
  min-width: 20em;
  border: 4em solid #880e4f;
  border-radius: 7em;
  padding: 1.5em;
  font:
    16px "Open Sans",
    "Verdana",
    "Helvetica",
    "Arial",
    sans-serif;
}

article img {
  display: block;
  max-width: 100%;
  border: 1px solid #888888;
  box-shadow: 0 0.5em 0.3em #888888;
  margin-bottom: 1.25em;
}
```

#### JavaScript

Der JavaScript-Code verarbeitet die zwei Schaltflächen, mit denen Sie die dritte Größenoption zwischen 40em und 50em umschalten können; dies geschieht durch das Handling des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses und Verwendung der JavaScript-String-{{jsxref("String.replace", "replace()")}}-Methode, um den relevanten Teil des `sizes`-Strings zu ersetzen.

```js
const image = document.querySelector("article img");
const break40 = document.getElementById("break40");
const break50 = document.getElementById("break50");

break40.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/50em,/, "40em,")),
);

break50.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/40em,/, "50em,")),
);
```

#### Ergebnis

Die Seite wird am besten {{LiveSampleLink('Blog-Beispiel', 'in einem eigenen Fenster betrachtet')}}, damit Sie die Größen voll anpassen können und das Beispiel nicht durch den umgebenden Rahmen eingeschränkt wird.

1. Aktivieren Sie die Entwicklertools und ändern Sie die Breite der Seite — Sie sollten das Bild an den Medienabfrage-Brechenpunkten des Sizes-Attributs wechseln (und in der Größe springen) sehen: `640px` (`40em`) und `800px` (`50em`).
2. Stellen Sie die Breite zwischen `50em` `(800px)` und `60em` (`960px`) ein, damit die letzte Medienabfrage ausgewählt wird.
   Drücken Sie dann abwechselnd jede der Schaltflächen und beobachten Sie, wie sich die Layoutgröße des Bildes ändert.

{{EmbedLiveSample("Blog-Beispiel", "", 1050)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
- [Benutzung der `srcset` und `sizes` Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
