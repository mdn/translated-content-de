---
title: "HTMLImageElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: 6055a12bd787f1677b182c0c1ed3c233b2c99eb6
---

{{APIRef("HTML DOM")}}

Die **`sizes`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ermöglicht es Ihnen, die Layout-Breite des [Bildes](/de/docs/Web/HTML/Reference/Elements/img) für jede Liste von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) oder `auto` für verzögert geladene Bilder anzugeben, um dem Browser zu ermöglichen, automatisch ein Bild basierend auf der Layout-Größe des Elements auszuwählen.
Dies erlaubt dem Browser, zwischen verschiedenen Bildern, die in der [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset)-Eigenschaft des Elements angegeben sind, auszuwählen, um unterschiedliche Medienbedingungen zu erfüllen — auch Bilder mit unterschiedlichen Orientierungen oder Seitenverhältnissen.

Die `sizes`-Eigenschaft spiegelt das `sizes`-Inhaltsattribut des `<img>`-Elements wider.
Es kann nur vorhanden sein, wenn `srcset` Breitenbeschreibungen verwendet.

## Wert

Ein String, der das `auto`-Schlüsselwort (optional gefolgt von einer beliebigen Anzahl von _Quellgrößen_) oder eine oder mehrere _Quellgrößen_ sein kann.

Weitere Informationen finden Sie im [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut im HTML-`<img>`-Referenzdokument.

## Beispiele

### Auswahl eines Bildes zur Anpassung an die Fensterbreite

Dieses Beispiel zeigt, wie der Browser das `sizes`-Attribut verwendet, um ein Bild aus `srcset` basierend auf der gerenderten Breite des Bildes bei der aktuellen Ansichtsfensterbreite auszuwählen.
Es erlaubt Ihnen auch, den Effekt der Größenänderung des Browserfensters auf das geladene Bild zu sehen.

#### HTML

Um den Effekt des verzögerten Ladens zu demonstrieren, müssen die Bilder anfänglich aus dem {{Glossary("visual_viewport", "visuellen Ansichtsfenster")}} verborgen sein und dann in das Sichtfeld gescrollt werden.
Dies wird erreicht, indem ein äußeres `scroll-container`-{{htmlelement("div")}}-Element erstellt wird, das `spacer`- und `demo-wrap`-Container verschachtelt.
Das Bild befindet sich innerhalb des `demo-wrap`-Containers, der durch die Höhe des `spacer`-Containers aus dem visuellen Ansichtsfenster verschoben wird.

Das {{htmlelement("img")}}-Element hat die folgenden Attribute:

- `srcset` definiert vier Bilder und gibt an, dass sie `600px`, `900px`, `1200px` und `1500px` breit sind.
- `src` spezifiziert das Bild, das verwendet wird, wenn `srcset` nicht unterstützt wird oder nicht analysiert werden kann.
  Wir verwenden das größte Bild im `srcset`, da es fast immer besser herunterskaliert als das kleinste Bild heraufskaliert.
- `loading` ist `lazy`.
- `sizes` spezifiziert die erwartete gerenderte Breite des Bildes an einem Satz von Ansichtsfenster-Breite-Schwellwerten, wodurch der Browser das am besten geeignete Bild aus `srcset` auswählen kann.

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

Das CSS und JavaScript werden nicht angezeigt (wenn Sie diese prüfen möchten, wählen Sie "Play", um das gesamte Beispiel im interaktiven Playground zu sehen).

#### Ergebnis

Das Beispiel ist am besten {{LiveSampleLink('Selecting an image to fit window width', 'in einem eigenen Fenster angezeigt')}}, sodass Sie die Größen vollständig anpassen können, und das Beispiel nicht durch seinen enthaltenen Rahmen eingeschränkt ist.

1. Scrollen Sie den Rahmen, um das Bild anzuzeigen.
   Das Label am unteren Rand des Bildes zeigt die aktuelle Behälterbreite an.
2. Ändern Sie die Fenstergröße — Sie sollten sehen, dass sich das Bild an den `sizes`-Attribut-Media-Query-Pfeilen ändert.

   Beachten Sie, dass das ausgewählte Bild möglicherweise größer ist, als es die Behälterbreite allein vermuten lässt.
   Viele Displays, wenn nicht die meisten, haben ein [Geräte-Pixelverhältnis (DPR)](/de/docs/Web/API/Window/devicePixelRatio), das größer als eins ist.
   Um ein scharfes Bild bei der physischen Pixeldichte des Displays zu rendern, multipliziert ein Browser den übereinstimmenden `sizes`-Hinweis mit dem DPR, bevor er aus `srcset` auswählt.
   Zum Beispiel sucht der Browser auf einem 2× Display mit einem Ansichtsfenster von ~500px, wo der übereinstimmende Hinweis `600px` ist, nach einem Bild von ~1200px und wählt `1200.png` als die nächstgelegene verfügbare Größe und skaliert es dann, um in den verfügbaren Raum zu passen.

   > [!NOTE]
   > Daher sind möglicherweise einige der Bilder im `srcset` auf einem bestimmten Display an einigen Schwellwerten nicht erreichbar, und dies kann vom Browser abhängig sein.

{{EmbedLiveSample("Selecting an image to fit window width", "", 600)}}

Das Protokoll liefert Informationen, wenn ein `load`-Ereignis für das Bild ausgelöst wird und wenn es das sichtbare Ansichtsfenster schneidet.
Beachten Sie, dass das Bild verzögert geladen wird, weshalb das `load`-Ereignis kurz bevor das Bild in das Ansichtsfenster eintritt, ausgelöst werden sollte.

### Automatische Bildauswahl für verzögert geladene Bilder

Dieses Beispiel zeigt, wie das Setzen des `sizes`-Werts auf `auto` die Auswahl des zu ladenden Bildes aus dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) beeinflusst, wenn {{htmlelement("img")}}-Elemente verzögert geladen werden.
Es ermöglicht Ihnen auch, den Effekt der Änderung der Größe eines Containers auf das geladene Bild zu sehen.

#### HTML

Das HTML ist ähnlich wie im vorherigen Beispiel, außer dass drei fast identische {{htmlelement("img")}}-Elemente definiert werden, die jeweils ein `srcset` mit 3 Bildern angeben, die `600px`, `400px` und `200px` breit sind, und einen `sizes`-Wert von `auto` haben.
Diese sind in Containern eingeschränkt, die darauf ausgelegt sind, verschiedene Bilder auszuwählen.

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

Das restliche CSS und das JavaScript, das den Schieberegler, die Protokollierung usw. steuert, wird nicht angezeigt (wenn Sie daran interessiert sind, dies zu untersuchen, wählen Sie "Play", um das gesamte Beispiel im interaktiven Playground zu sehen).

#### Ergebnis

Scrollen Sie den Rahmen, um die drei Bilder anzuzeigen.
Der Browser sollte basierend auf den unterschiedlichen Breitenbeschränkungen ein anderes Bild für jedes Bild ausgewählt haben.
Sie können den Schieberegler verwenden, um die Größe des Containers für das erste Bild zu ändern.
Beachten Sie, dass der Browser möglicherweise ein neues Bild auswählt oder auch nicht, um es anzuzeigen, wenn sich die Größe des Containers ändert, da Implementierungen nicht verpflichtet sind, auf dynamische Änderungen zu reagieren.

{{EmbedLiveSample("Automatic image selection for lazy loaded images", "", 600)}}

Das Protokoll gibt Informationen, wenn ein `load`-Ereignis für jedes Bild ausgelöst wird, und wenn ein Bild das sichtbare Ansichtsfenster schneidet.
Beachten Sie, dass die Bilder verzögert geladen werden, sodass das `load`-Ereignis kurz bevor das Bild in das Ansichtsfenster eintritt, ausgelöst werden sollte.
Beachten Sie auch, dass das `load`-Ereignis auch ausgelöst wird, wenn Sie die Containergröße für das erste Bild ändern, was anzeigt, wann der Browser das Layout neu berechnet hat (nicht unbedingt, dass ein neues Bild geladen wurde).

### Blog-Beispiel

Dieses Beispiel ist ein leicht realistischeres Szenario, das zeigt, wie man ein Bild auswählen kann, das zur Fensterbreite passt, indem man Quellgrößen verwendet.

In diesem Beispiel wird ein blogähnliches Layout erstellt, das etwas Text und ein Bild anzeigt, für das drei Größenpunkte je nach Fensterbreite angegeben sind.
Drei Versionen des Bildes sind ebenfalls verfügbar, mit angegebenen Breiten.
Der Browser nimmt all diese Informationen und wählt ein Bild und eine Breite aus, die am besten zu den angegebenen Werten passen.

Wie genau die Bilder verwendet werden, kann vom Browser und von der Pixeldichte des Displays des Benutzers abhängen.

Schaltflächen am unteren Ende des Beispiels lassen Sie die `sizes`-Eigenschaft geringfügig ändern, wobei die größte der drei Bildbreiten zwischen 40em und 50em gewechselt wird.

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

Der JavaScript-Code behandelt die zwei Schaltflächen, die es Ihnen ermöglichen, die dritte Breitenoption zwischen 40em und 50em zu wechseln; dies wird durch die Behandlung des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses gemacht, das die JavaScript-String-Methode {{jsxref("String.replace", "replace()")}} verwendet, um den entsprechenden Teil des `sizes`-Strings zu ersetzen.

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

Die Seite ist am besten {{LiveSampleLink('Blog example', 'in einem eigenen Fenster angezeigt')}}, sodass Sie die Größen vollständig anpassen können, und das Beispiel nicht durch seinen enthaltenen Rahmen eingeschränkt ist.

1. Aktivieren Sie die Entwicklertools und ändern Sie die Breite der Seite — Sie sollten sehen, wie sich das Bild an den Größe-Media-Query-Punkten ändert (und in der Größe springt): `640px` (`40em`) und `800px` (`50em`).
2. Stellen Sie die Breite zwischen `50em` `(800px)` und `60em` (`960px`) ein, sodass die letzte Media Query ausgewählt wird.
   Drücken Sie dann abwechselnd jede der Schaltflächen und beachten Sie, wie sich die Layoutgröße des Bildes ändert.

{{EmbedLiveSample("Blog example", "", 1050)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [Media Queries verwenden](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
