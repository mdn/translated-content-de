---
title: "IntersectionObserver: scrollMargin-Eigenschaft"
short-title: scrollMargin
slug: Web/API/IntersectionObserver/scrollMargin
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("Intersection Observer API")}}

Die **`scrollMargin`**-Schreibeigenschaft des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Root-Elements einen Rand hinzu, einschließlich des Root-Elements, wenn es ein Scroll-Container ist.

Dies vergrößert oder verkleinert das Clipping-Rechteck der scrollbaren Container, bevor Schnittpunkte berechnet werden. Dadurch können Sie beispielsweise die Grenzen des Scroll-Containers so anpassen, dass das Ziel-Element als sichtbar betrachtet wird, auch wenn seine Pixel noch nicht im Viewport des Containers angezeigt werden. Oder Sie können das Ziel teilweise als verborgen behandeln, wenn eine Kante zu nah an der Kante des Begrenzungsrahmens des Containers liegt.

Beachten Sie, dass, wenn das Root-Element auch ein scrollbarer Container ist, dann die `scrollMargin` und [`rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) kombiniert werden, um das effektive Begrenzungsrechteck zu bestimmen, das verwendet wird, um Schnittpunkte mit dem Ziel zu berechnen.

Weitere Informationen finden Sie unter [Der Schnittwurzel und Scroll-Margin](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_scroll_margin) im API-Überblick.

## Wert

Ein String, ähnlich formatiert wie der Wert der CSS-{{cssxref("margin")}}-Eigenschaft.

Der angegebene Rand definiert Abstände für eine oder mehrere Seiten eines Clipping-Rechtecks des Scroll-Containers. Falls `scrollMargin` nicht angegeben ist, als das Objekt instanziiert wurde, wird der Wert standardmäßig auf den String `"0px 0px 0px 0px"` gesetzt.

## Beispiel

### Karussell mit Scroll-Margin

Dieses Beispiel definiert ein scrollbares Feld (das Root-Element), das ein Bildkarussell enthält, das zunächst nicht sichtbar ist. Ein Beobachter auf dem Root-Element beobachtet die Bildzielt-Elemente innerhalb des Karussells. Wenn ein Bild-Element beginnt, mit dem Root-Element zu schneiden, wird das Bild geladen, der Schnittpunkt protokolliert und der Beobachter entfernt.

Das Beispiel ermöglicht es Ihnen, die `scrollMargin` zu ändern, um zu sehen, wie diese Änderungen eintreten, wenn Ziele innerhalb des scrollbaren Containers des Karussells beginnen, sich zu schneiden.

#### HTML

```html hidden
<button id="reset" type="button">Reset</button>
```

Der folgende Code definiert das `root-container`-{{htmlelement("div")}}-Element, das wir als Root-Element des Intersection Observer verwenden werden. Dieses enthält ein {{htmlelement("p")}}-Element, das dazu verwendet wird, die anderen Elemente "standardmäßig" aus dem Sichtfeld zu schieben, ein `carousel`-`<div>`, und einen `margin-indicator` (wird verwendet, um die Größe des auf scrollbare Elemente innerhalb des Root-Elements angewendeten Randes anzuzeigen).

Die {{htmlelement("img")}}-Elemente innerhalb des Karussells haben ein `data-src`-Attribut, das einen Dateinamen enthält. In unserem Beobachtercode werden wir dieses Attribut verwenden, um das `img.src` festzulegen, wenn jedes Bild beginnt, sich mit dem Root-Element zu schneiden, wodurch das Bild geladen wird.

```html
<div id="root-container">
  <p>content before (scroll down to carousel)</p>

  <div class="flex-container">
    <div class="carousel">
      <img
        src=""
        data-src="ballon-portrait.jpg"
        class="lazy-carousel-img"
        alt="Balloon portrait" />
      <img
        src=""
        data-src="balloon-small.jpg"
        class="lazy-carousel-img"
        alt="balloon-small" />
      <img
        src=""
        data-src="surfer.jpg"
        class="lazy-carousel-img"
        alt="surfer" />
      <img
        src=""
        data-src="border-diamonds.png"
        class="lazy-carousel-img"
        alt="border-diamonds" />
      <img src="" data-src="fire.png" class="lazy-carousel-img" alt="fire" />
      <img
        src=""
        data-src="puppy-header.jpg"
        class="lazy-carousel-img"
        alt="puppy" />
      <img src="" data-src="moon.jpg" class="lazy-carousel-img" alt="moon" />
      <img src="" data-src="rhino.jpg" class="lazy-carousel-img" alt="rhino" />
    </div>
    <div id="margin-indicator"></div>
  </div>
  <p>content after</p>
</div>
```

```html
<div class="controls">
  <label>
    Set the right margin of the scroll root:
    <input id="margin" type="number" value="0" step="5" />px
  </label>
</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

```css
#root-container {
  height: 250px;
  overflow-y: auto;
  border: solid blue;
}

p {
  height: 50vh;
}

.flex-container {
  display: flex;
}

#margin-indicator {
  position: relative;
  height: 100px;
  width: 1px;
  background-color: red;
  opacity: 0.5;
  display: flex;
}

.carousel {
  width: 300px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  border: solid;
  /* outline: 200px solid rgba(0, 0, 0, 0.1); */
}
.carousel img {
  scroll-snap-stop: always;
  scroll-snap-align: start;
  display: block;
  width: 195px;
  height: 99px;
  min-width: 195px;
  min-height: 99px;
  margin-right: 10px;
  background-color: #eeeeee; /* Placeholder background */
}

.controls {
  margin-top: 10px;
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

#### JavaScript

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});

const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Der erste Teil des Codes definiert die Funktion `createImageObserver()`, die wir verwenden, um `IntersectionObserver`-Objekte zu erstellen und der `imageObserver`-Variable zuzuweisen. Wir verwenden eine Funktion, weil die Beobachteroptionen nach Erstellung nicht geändert werden können, und wir die Auswirkungen verschiedener `scrollMargin`-Werte demonstrieren möchten.

Der `IntersectionObserver` wird ohne `rootMargin`, mit einem nahezu null `threshold` und einer `scrollMargin` erstellt, die ihren Wert aus der `margin`-Eingabe erhält und der auf alle Seiten des Scroll-Containers angewendet wird.

Der Rückruf wird für alle beobachteten Ziele aufgerufen. Für die sich schneidenden Ziele setzt er das `img.src` auf den Namen des zu ladenden Bildes (aus dem `img.dataset.src`), protokolliert den Schnittpunkt und hört dann auf, das Bild zu beobachten.

Der Code am Ende der Funktion ruft [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe) für jedes Bild auf, um den Beobachter zu starten.

```js
const rootContainer = document.getElementById("root-container");
const marginIndicator = document.getElementById("margin-indicator");
const carousel = document.querySelector(".carousel");
const lazyImages = carousel.querySelectorAll(".lazy-carousel-img");
let imageObserver;

function createImageObserver() {
  if (imageObserver) {
    imageObserver.disconnect();
  }

  let observerOptions = {
    root: rootContainer,
    rootMargin: "0px", // No extra margin
    scrollMargin: `${margin.valueAsNumber}px`, // No extra margin / Can be set
    threshold: 0.01, // Trigger when 1% of the image is visible
  };

  imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`intersect: ${img.dataset.src}`); // Only on first intersection
        img.src = `https://mdn.github.io/shared-assets/images/examples/${img.dataset.src}`; // Load image by setting src
        img.classList.remove("lazy-carousel-img"); // Remove the class
        observer.unobserve(img); // Stop observing once loaded
      }
    });
  }, observerOptions);

  if (margin.valueAsNumber < 0) {
    marginIndicator.style.width = `${-margin.valueAsNumber}px`;
    marginIndicator.style.left = `${margin.valueAsNumber}px`;
    marginIndicator.style.backgroundColor = "blue";
  } else {
    marginIndicator.style.width = `${margin.valueAsNumber}px`;
    marginIndicator.style.left = "0px";
    marginIndicator.style.backgroundColor = "green";
  }

  lazyImages.forEach((image) => {
    imageObserver.observe(image); // Start observing each image
  });
}
```

Der folgende Code erstellt den Beobachter unter Verwendung von `createImageObserver()` beim Start und wann immer sich der `margin`-Eingabewert ändert. Wenn die `IntersectionObserver`-Schnittstelle nicht unterstützt wird, werden alle Bilder sofort geladen.

```js
if ("IntersectionObserver" in window) {
  createImageObserver();
  margin.addEventListener("input", () => {
    createImageObserver();
  });
} else {
  // Fallback for browsers that don't support Intersection Observer
  // Loads all images immediately if Intersection Observer is not supported.
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
    img.classList.remove("lazy-carousel-img");
  });
  console.warn(
    "Intersection Observer not supported. All carousel images loaded.",
  );
}
```

#### Ergebnisse

Scrollen Sie nach unten, um das Karussell anzuzeigen. Die sichtbaren Bilder sollten sofort geladen werden. Wenn Sie das Karussell nach rechts scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Sie können die bereitgestellte Steuerung verwenden, um den Prozentsatz des Scroll-Margins zu ändern (nachdem das Beispiel zurückgesetzt wurde). Wenn Sie einen positiven Wert wie 20px einstellen, wird das Clipping-Rechteck des Scroll-Containers um 20px vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in Sicht kommen. Ebenso bedeutet ein negativer Wert, dass der Schnittpunkt erkannt wird, sobald die Bilder bereits im Sichtbereich sind.

{{EmbedLiveSample("Carousel with scroll margin","100%","500px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
