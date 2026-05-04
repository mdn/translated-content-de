---
title: "HTMLImageElement: sizes Eigenschaft"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{APIRef("HTML DOM")}}

Die **`sizes`** Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interfaces ermöglicht es Ihnen, die Layoutbreite des [Bildes](/de/docs/Web/HTML/Reference/Elements/img) für eine Liste von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) zu spezifizieren oder `auto` für lazy-geladene Bilder zu verwenden, um dem Browser zu erlauben, automatisch ein Bild auszuwählen, basierend auf der Layoutgröße des Elements.
Dies ermöglicht es dem Browser, zwischen verschiedenen Bildern, die im Element [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset) angegeben sind, auszuwählen, um unterschiedlichen Medienbedingungen zu entsprechen — sogar Bilder mit unterschiedlichen Ausrichtungen oder Seitenverhältnissen.

Die `sizes` Eigenschaft spiegelt das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Inhaltsattribut des `<img>` Elements wider.
Es kann nur vorhanden sein, wenn `srcset` Breitenbeschreibungen verwendet.

## Wert

Ein String, der das `auto` Schlüsselwort sein kann (optional gefolgt von beliebig vielen _Quellengrößen_), oder eine oder mehrere _Quellengrößen_.

Sehen Sie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut in der HTML `<img>` Referenz für weitere Informationen.

## Beispiele

### Auswahl eines Bildes, das zur Fensterbreite passt

Dieses Beispiel zeigt, wie der Browser das `sizes` Attribut verwendet, um ein Bild aus `srcset` basierend auf der gerenderten Breite des Bildes bei der aktuellen Ansichtsfensterbreite auszuwählen.
Es ermöglicht Ihnen auch, den Effekt des Änderns der Fenstergröße darauf zu beobachten, welches Bild geladen wird.

#### HTML

Um den Effekt des Lazy Loading zu demonstrieren, müssen die Bilder zuerst vom {{Glossary("visual_viewport", "visuellen Ansichtsfenster")}} verborgen und dann in Sicht gescrollt werden.
Dies wird erreicht, indem ein äußerer `scroll-container` {{htmlelement("div")}} verwendet wird, der `spacer` und `demo-wrap` Container verschachtelt.
Das Bild ist innerhalb des `demo-wrap` Containers enthalten, der durch die Höhe, die auf den `spacer` Container gesetzt wird, aus dem visuellen Ansichtsfenster geschoben wird.

Das {{htmlelement("img")}} Element hat die folgenden Attribute:

- `srcset` definiert vier Bilder und gibt an, dass sie `600px`, `900px`, `1200px` und `1500px` breit sind.
- `src` spezifiziert das Bild, das verwendet wird, wenn `srcset` nicht unterstützt wird oder es nicht analysiert werden kann.
  Wir verwenden das größte Bild im `srcset`, da dies fast immer besser herunterskaliert als das kleinste Bild hochskaliert.
- `loading` ist `lazy`.
- `sizes` spezifiziert die erwartete gerenderte Breite des Bildes bei einer Reihe von Ansichtsfenster-Breite-Breakpoints, wodurch der Browser das geeignetste Bild aus `srcset` auswählen kann.

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

Der CSS und JavaScript werden nicht angezeigt (wenn Sie diese untersuchen möchten, wählen Sie "Play", um das gesamte Beispiel im interaktiven Playground anzuzeigen).

#### Ergebnis

Das Beispiel wird am besten {{LiveSampleLink('Selecting an image to fit window width', 'in einem eigenen Fenster betrachtet')}}, damit Sie die Größen vollständig anpassen können und das Beispiel nicht durch seinen umgebenden Rahmen eingeschränkt ist.

1. Scrollen Sie den Rahmen, um das Bild anzuzeigen.
   Das Etikett am unteren Rand des Bildes zeigt die aktuelle Containerbreite an.
2. Ändern Sie die Fenstergröße — Sie sollten sehen, dass das Bild sich an den `sizes` Attributs-Medienquery-Breakpoints ändert.

   Beachten Sie, dass das ausgewählte Bild größer sein kann, als es die Containerbreite allein vermuten lässt.
   Viele Anzeigen, wenn nicht die meisten, haben ein [device pixel ratio (DPR)](/de/docs/Web/API/Window/devicePixelRatio) größer als eins.
   Um ein scharfes Bild bei der physikalischen Pixeldichte des Displays zu rendern, multipliziert ein Browser den übereinstimmenden `sizes` Hinweis mit dem DPR, bevor er aus `srcset` auswählt.
   Zum Beispiel sucht der Browser auf einem 2× Display mit einem Ansichtsfenster von ~500px nach einem ~1200px Bild und wählt `1200.png` als die am nächsten verfügbare Größe aus und skaliert es, um es in den verfügbaren Raum zu passen.

   > [!NOTE]
   > Infolgedessen sind einige der Bilder im `srcset` möglicherweise auf einem bestimmten Display bei einigen Breakpoints nicht erreichbar, und dies kann browserabhängig sein.

{{EmbedLiveSample("Selecting an image to fit window width", "", 600)}}

Das Log stellt Informationen bereit, wann ein `load` Ereignis für das Bild ausgelöst wird und wann es das sichtbare Ansichtsfenster schneidet.
Beachten Sie, dass das Bild lazy-geladen wird, sodass das `load` Ereignis genau bevor das Bild das Ansichtsfenster betritt ausgelöst werden sollte.

### Automatische Bildauswahl für lazy-geladene Bilder

Dieses Beispiel zeigt, wie sich das Setzen des `sizes` Wertes auf `auto` auf die Auswahl des Bildes zur Ladung aus dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) auswirkt, wenn {{htmlelement("img")}} Elemente lazy-geladen werden.
Es ermöglicht Ihnen auch, den Effekt der Größenänderung eines Containers auf das geladene Bild zu sehen.

#### HTML

Das HTML ist ähnlich wie in dem vorherigen Beispiel, abgesehen davon, dass es drei nahezu identische {{htmlelement("img")}} Elemente definiert, jedes mit einem `srcset`, das 3 Bilder angibt, die `600px`, `400px` und `200px` breit sind, und mit einem `sizes` Wert von `auto`.
Diese sind innerhalb von Containern eingeschränkt, die dazu ausgelegt sind, die verschiedenen Bilder auszuwählen.

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

Der restliche CSS und das JavaScript, das den Slider, Logging und so weiter antreibt, werden nicht angezeigt (wenn Sie daran interessiert sind, diese zu untersuchen, wählen Sie "Play", um das gesamte Beispiel im interaktiven Playground anzuzeigen).

#### Ergebnis

Scrollen Sie den Rahmen, um die drei Bilder anzuzeigen.
Der Browser sollte basierend auf den unterschiedlichen Breitenbeschränkungen ein anderes Bild für jedes ausgewählt haben.
Sie können den Schieberegler verwenden, um die Größe des Containers für das erste Bild zu ändern.
Beachten Sie, dass der Browser möglicherweise kein neues Bild zur Anzeige auswählt, während sich die Größe des Containers ändert, da Implementierungen nicht verpflichtet sind, auf dynamische Änderungen zu reagieren.

{{EmbedLiveSample("Automatische Bildauswahl für lazy-geladene Bilder", "", 600)}}

Das Log bietet Informationen, wann ein `load` Ereignis für jedes Bild auslöst, und wann ein Bild das sichtbare Ansichtsfenster schneidet.
Beachten Sie, dass die Bilder lazy-geladen werden, sodass das `load` Ereignis genau bevor das Bild das Ansichtsfenster betritt ausgelöst werden sollte.
Beachten Sie auch, dass das `load` Ereignis auch dann auslöst, wenn Sie die Containergröße für das erste Bild ändern, was anzeigt, wann der Browser das Layout neu berechnet hat (nicht notwendigerweise, dass ein neues Bild geladen wurde).

### Blog-Beispiel

Dieses Beispiel ist ein etwas realitätsnäheres Beispiel, das zeigt, wie ein Bild zur Fensterbreite mithilfe von Quellgrößen ausgewählt wird.

In diesem Beispiel wird ein blogähnliches Layout erstellt, das einige Texte und ein Bild anzeigt, für das je nach Breite des Fensters drei Größenpunkte angegeben sind.
Drei Versionen des Bildes sind ebenfalls verfügbar, wobei ihre Breiten angegeben sind. Der Browser nimmt all diese Informationen und wählt ein Bild und eine Breite aus, die am besten zu den angegebenen Werten passt.

Wie genau die Bilder verwendet werden, kann vom Browser und der Pixeldichte der Anzeige des Benutzers abhängen.

Buttons am unteren Rand des Beispiels lassen Sie tatsächlich die `sizes` Eigenschaft leicht modifizieren, indem die größte der drei Breiten für das Bild zwischen 40em und 50em umgeschaltet wird.

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

Der JavaScript-Code bearbeitet die beiden Schaltflächen, die Sie die dritte Breitenoption zwischen 40em und 50em umschalten lassen; dies wird durch das Handling des [`click`](/de/docs/Web/API/Element/click_event) Ereignisses erreicht, wobei die JavaScript-String-Methode {{jsxref("String.replace", "replace()")}} verwendet wird, um den entsprechenden Teil des `sizes` Strings zu ersetzen.

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

Die Seite wird am besten {{LiveSampleLink('Blog example', 'in einem eigenen Fenster betrachtet')}}, so dass Sie die Größen vollständig anpassen können und das Beispiel nicht durch seinen umgebenden Rahmen eingeschränkt ist.

1. Aktivieren Sie die Entwicklertools und ändern Sie die Breite der Seite — Sie sollten sehen, dass das Bild sich (und in der Größe springt), an den Größen-Medienquery-Breakpoints ändert: `640px` (`40em`) und `800px` (`50em`).
2. Setzen Sie die Breite zwischen `50em` `(800px)` und `60em` (`960px`), sodass die letzte Medienabfrage ausgewählt wird.
   Drücken Sie dann abwechselnd jede der Schaltflächen und beachten Sie, wie sich die Layoutgröße des Bildes ändert.

{{EmbedLiveSample("Blog example", "", 1050)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
- [Verwendung der `srcset` und `sizes` Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
