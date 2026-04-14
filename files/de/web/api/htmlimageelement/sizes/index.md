---
title: "HTMLImageElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: 3111c5a49047a966a63b66f8634a1713c2568011
---

{{APIRef("HTML DOM")}}

Die **`sizes`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle ermöglicht es Ihnen, die Layoutbreite des [Bildelements](/de/docs/Web/HTML/Reference/Elements/img) für jede aus einer Liste von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) anzugeben oder `auto` für Lazy-Loaded-Bilder, damit der Browser basierend auf der Layoutgröße des Elements automatisch ein Bild zur Anzeige auswählt.
Dies ermöglicht dem Browser, zwischen verschiedenen Bildern im Element [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset) zu wählen, um verschiedene Media-Bedingungen zu erfüllen — sogar Bilder mit verschiedenen Ausrichtungen oder Seitenverhältnissen.

Die `sizes`-Eigenschaft spiegelt das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Inhaltsattribut des `<img>`-Elements wider.
Sie kann nur vorhanden sein, wenn `srcset` Breitenbeschreiber verwendet.

## Wert

Ein String, der das `auto`-Schlüsselwort sein kann (optional gefolgt von beliebig vielen _Quellengrößen_) oder eine oder mehrere _Quellengrößen_.

Siehe das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut in der HTML-Referenz für `<img>` für mehr Informationen.

## Beispiele

### Auswahl eines Bildes, das zur Fensterbreite passt

Dieses Beispiel demonstriert, wie der Browser das `sizes`-Attribut verwendet, um ein Bild aus `srcset` basierend auf der gerenderten Breite des Bildes bei der aktuellen Viewport-Breite auszuwählen.
Es ermöglicht Ihnen auch, den Effekt der Größenänderung des Browserfensters zu sehen, welches Bild geladen wird.

#### HTML

Um den Effekt des Lazy-Loadings zu demonstrieren, müssen die Bilder anfänglich aus dem {{Glossary("visual_viewport", "visuellen Viewport")}} verborgen sein und dann in den Ansichtsbereich gescrollt werden.
Dies wird erreicht, indem ein äußerer `scroll-container` {{htmlelement("div")}} `spacer`- und `demo-wrap`-Container verschachtelt.
Das Bild ist innerhalb des `demo-wrap`-Containers enthalten, der aus dem visuellen Viewport durch die auf den `spacer`-Container gesetzte Höhe herausgeschoben wird.

Das {{htmlelement("img")}}-Element hat die folgenden Attribute:

- `srcset` definiert vier Bilder und gibt an, dass sie `600px`, `900px`, `1200px` und `1500px` breit sind.
- `src` spezifiziert das Bild, das verwendet wird, wenn `srcset` nicht unterstützt wird oder nicht analysiert werden kann.
  Wir verwenden das größte Bild im `srcset`, da dieses fast immer besser herunterskaliert als das kleinste Bild hochskaliert.
- `loading` ist `lazy`.
- `sizes` spezifiziert die erwartete gerenderte Breite des Bildes bei einer Reihe von Viewport-Breiten-Unterbrechungspunkten, wodurch der Browser das am besten geeignete Bild aus `srcset` auswählen kann.

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
  border: 2px solid #ccc;
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
  border: 2px solid #ccc;
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
  background: #f5f5f5;
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

Der CSS- und JavaScript-Code wird nicht angezeigt (wenn Sie diese untersuchen möchten, wählen Sie "Play", um das vollständige Beispiel im interaktiven Playground zu sehen).

#### Ergebnis

Das Beispiel ist am besten {{LiveSampleLink('Selecting an image to fit window width', 'in einem eigenen Fenster zu betrachten')}}, damit Sie die Größen vollständig anpassen können und das Beispiel nicht durch seinen umgebenden Rahmen eingeschränkt ist.

1. Scrollen Sie den Rahmen, um das Bild anzuzeigen.
   Das Label am unteren Bildrand zeigt die aktuelle Containerbreite.
2. Ändern Sie die Fenstergröße — Sie sollten sehen, wie sich das Bild an den Medienabfrage-Unterbrechungspunkten des `sizes`-Attributs ändert.

   Beachten Sie, dass das ausgewählte Bild möglicherweise größer ist als die alleinige Containerbreite vermuten lässt.
   Viele Displays, wenn nicht die meisten, haben ein [Geräte-Pixel-Verhältnis (DPR)](/de/docs/Web/API/Window/devicePixelRatio), das größer als eins ist.
   Um ein scharfes Bild bei der physischen Pixeldichte des Displays zu rendern, multipliziert ein Browser den übereinstimmenden `sizes`-Hinweis mit dem DPR, bevor aus dem `srcset` ausgewählt wird.
   Beispielsweise sucht der Browser auf einem 2×-Display mit einem Viewport von ~500px nach einem ~1200px Bild und wählt `1200.png` als die nächste verfügbare Größe aus und skaliert es dann, um in den verfügbaren Platz zu passen.

   > [!NOTE]
   > Daher sind einige der Bilder im `srcset` möglicherweise auf einem bestimmten Display bei bestimmten Unterbrechungspunkten nicht erreichbar, und dies könnte vom Browser abhängen.

{{EmbedLiveSample("Selecting an image to fit window width", "", 600)}}

Das Logbuch liefert Informationen, wenn ein `load`-Ereignis für das Bild ausgelöst wird und wenn es den sichtbaren Viewport schneidet.
Beachten Sie, dass das Bild lazy-geladen wird, sodass das `load`-Ereignis kurz bevor das Bild den Viewport betritt, ausgelöst werden sollte.

### Automatische Bildauswahl für verzögert geladene Bilder

Dieses Beispiel zeigt, wie das Setzen des `sizes`-Werts auf `auto` die Auswahl des Bildes zum Laden aus dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) beeinflusst, wenn {{htmlelement("img")}}-Elemente lazy-geladen werden.
Es ermöglicht Ihnen auch, den Effekt der Änderung der Größe eines Containers auf das geladene Bild zu betrachten.

#### HTML

Das HTML ist ähnlich wie im vorherigen Beispiel, außer dass es drei nahezu identische {{htmlelement("img")}}-Elemente definiert, von denen jedes ein `scrset` angibt, das 3 Bilder enthält, die `600px`, `400px` und `200px` breit sind, und mit einem `sizes`-Wert von `auto`.
Diese sind innerhalb von Containern eingeschränkt, die so dimensioniert sind, dass sie die verschiedenen Bilder auswählen.

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
  border: 2px solid #ccc;
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
  border: 2px solid #ccc;
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
  background: #f5f5f5;
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
  resizable.style.width = px + "px";
  resizableImg.sizes = px + "px"; // update sizes so browser can pick new srcset candidate
  resizableLabel.textContent = px + "px";
  slider.value = px;
  number.value = px;
}

slider.addEventListener("input", () => setSize(parseInt(slider.value)));
number.addEventListener("input", () => setSize(parseInt(number.value)));

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

Der verbleibende CSS- und JavaScript-Code, der den Schieberegler, das Logging usw. ansteuert, wird nicht gezeigt (wenn Sie daran interessiert sind, diese zu untersuchen, wählen Sie "Play", um das vollständige Beispiel im interaktiven Playground zu sehen).

#### Ergebnis

Scrollen Sie den Rahmen, um die drei Bilder anzuzeigen.
Der Browser sollte basierend auf den unterschiedlichen Breitenbeschränkungen für jedes Bild ein anderes Bild ausgewählt haben.
Sie können den Schieberegler verwenden, um die Größe des Containers für das erste Bild zu ändern.
Beachten Sie, dass der Browser möglicherweise ein neues Bild zur Anzeige auswählt oder nicht, wenn sich die Größe des Containers ändert, da Implementierungen nicht verpflichtet sind, auf dynamische Änderungen zu reagieren.

{{EmbedLiveSample("Automatic image selection for lazy loaded images", "", 600)}}

Das Logbuch liefert Informationen, wenn für jedes Bild ein `load`-Ereignis ausgelöst wird und wenn ein Bild den sichtbaren Viewport schneidet.
Beachten Sie, dass die Bilder lazy-geladen werden, so dass das `load`-Ereignis kurz bevor das Bild den Viewport betritt, ausgelöst werden sollte.
Beachten Sie auch, dass das `load`-Ereignis auch ausgelöst wird, wenn Sie die Containergröße für das erste Bild ändern, was anzeigt, wann der Browser das Layout neu berechnet hat (nicht unbedingt, dass ein neues Bild geladen wurde).

### Blog-Beispiel

Dieses Beispiel ist ein etwas realistischeres Anwendungsbeispiel, das zeigt, wie man ein Bild auswählt, das zur Fensterbreite passt, indem Quellen-Größen verwendet werden.

In diesem Beispiel wird ein beispielloses Blog-Layout erstellt, das etwas Text und ein Bild anzeigt, für das drei Größenpunkte abhängig von der Fensterbreite angegeben sind.
Drei Versionen des Bildes sind ebenfalls verfügbar, mit ihren angegebenen Breiten. Der Browser nimmt all diese Informationen und wählt ein Bild und eine Breite aus, die am besten zu den angegebenen Werten passen.

Wie genau die Bilder verwendet werden, kann vom Browser und der Pixeldichte des Benutzerdisplays abhängen.

Buttons am unteren Rand des Beispiels ermöglichen es Ihnen, die `sizes`-Eigenschaft leicht zu ändern und die größte der drei Breiten für das Bild zwischen 40em und 50em zu wechseln.

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

Der JavaScript-Code verarbeitet die beiden Buttons, die es Ihnen ermöglichen, die dritte Breitenoption zwischen 40em und 50em umschalten; dies geschieht durch das Behandeln des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses mithilfe der JavaScript-String-Methode {{jsxref("String.replace", "replace()")}}, um den entsprechenden Teil des `sizes`-Strings zu ersetzen.

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

Die Seite ist am besten {{LiveSampleLink('Blog example', 'in einem eigenen Fenster zu betrachten')}}, damit Sie die Größen vollständig anpassen können und das Beispiel nicht durch seinen umgebenden Rahmen eingeschränkt ist.

1. Aktivieren Sie die Entwicklertools und ändern Sie die Breite der Seite — Sie sollten sehen, wie sich das Bild an den Medienabfrage-Unterbrechungspunkten ändert (und in der Größe springt): `640px` (`40em`) und `800px` (`50em`).
2. Setzen Sie die Breite zwischen `50em` `(800px)` und `60em` `(960px`), sodass die letzte Medienabfrage ausgewählt wird.
   Drücken Sie dann abwechselnd die Buttons und beachten Sie, wie sich die Layoutgröße des Bildes ändert.

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
- [Verwendung der Attribute `srcset` und `sizes`](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
