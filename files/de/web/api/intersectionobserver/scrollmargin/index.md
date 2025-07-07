---
title: "IntersectionObserver: scrollMargin-Eigenschaft"
short-title: scrollMargin
slug: Web/API/IntersectionObserver/scrollMargin
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{APIRef("Intersection Observer API")}}

Die **`scrollMargin`**-Schreibgeschützte Eigenschaft der Schnittstelle [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) fügt einen Rand zu allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements hinzu, einschließlich des Wurzelelements, wenn es ein Scroll-Container ist.

Dies vergrößert oder verkleinert das Clipping-Rechteck der scrollbaren Container, bevor Schnittpunkte berechnet werden. Dies ermöglicht es Ihnen beispielsweise, die Begrenzungen des Scroll-Containers anzupassen, sodass das Zielelement als sichtbar angesehen wird, selbst wenn seine Pixel noch nicht im Anzeigebereich des Containers angezeigt werden, oder das Ziel als teilweise verborgen zu behandeln, wenn ein Rand zu nah am Rand des Begrenzungsrahmens des Containers liegt.

Beachten Sie, dass, wenn das Wurzelelement auch ein scrollbarer Container ist, dann der `scrollMargin` und [`rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) kombiniert werden, um das effektive Begrenzungsrechteck zu bestimmen, das zur Berechnung von Schnittpunkten mit dem Ziel verwendet wird.

Weitere Informationen finden Sie unter [The intersection root and root margin](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_scroll_margin) in der API-Übersicht.

## Wert

Ein String, der ähnlich formatiert ist wie der Wert der CSS-Eigenschaft {{cssxref("margin")}}.

Der festgelegte Rand definiert Offsets für eine oder mehrere Seiten eines Clipping-Rechtecks des Scroll-Containers. Wenn `scrollMargin` bei der Instanziierung des Objekts nicht angegeben wurde, ist der Standardwert der String `"0px 0px 0px 0px"`.

## Beispiel

### Karussell mit Scroll-Margin

Dieses Beispiel definiert eine scrollbar Box (das Wurzelelement), die ein Bildkarussell enthält, das anfangs außerhalb des Sichtbereichs ist. Ein Beobachter für das Wurzelelement beobachtet die Bildziel-Elemente innerhalb des Karussells. Wenn ein Bildelement beginnt, mit dem Wurzelelement zu schneiden, wird das Bild geladen, der Schnittpunkt protokolliert und der Beobachter entfernt.

Das Beispiel erlaubt es Ihnen, die `scrollMargin` zu ändern, um zu sehen, wie sich dies ändert, wenn Ziele innerhalb des scrollbaren Karussell-Containers beginnen zu schneiden.

#### HTML

```html hidden
<button id="reset" type="button">Reset</button>
```

Der folgende Code definiert das `root-container` {{htmlelement("div")}}-Element, das wir als Wurzelelement des Schnittbeobachters verwenden werden. Dies enthält wiederum ein {{htmlelement("p")}}-Element, das verwendet wird, um die anderen Elemente standardmäßig aus dem Sichtbereich zu schieben, ein `carousel` `<div>`, und einen `margin-indicator` (zum Anzeigen der Größe des auf scrollbare Elemente im Wurzelelement angewendeten Randes).

Die {{htmlelement("img")}}-Elemente im Karussell haben ein `data-src`-Attribut, das einen Dateinamen enthält. In unserem Beobachtungscode werden wir dieses Attribut verwenden, um die `img.src` festzulegen, wenn jedes Bild beginnt, mit dem Wurzelelement zu schneiden, was das Bild lädt.

```html
<div id="root-container">
  <p>content before (scroll down to carousel)</p>

  <div class="flex-container">
    <div class="carousel">
      <img
        data-src="ballon-portrait.jpg"
        class="lazy-carousel-img"
        alt="Balloon portrait" />
      <img
        data-src="balloon-small.jpg"
        class="lazy-carousel-img"
        alt="balloon-small" />
      <img data-src="surfer.jpg" class="lazy-carousel-img" alt="surfer" />
      <img
        data-src="border-diamonds.png"
        class="lazy-carousel-img"
        alt="border-diamonds" />
      <img data-src="fire.png" class="lazy-carousel-img" alt="fire" />
      <img data-src="puppy-header.jpg" class="lazy-carousel-img" alt="puppy" />
      <img data-src="moon.jpg" class="lazy-carousel-img" alt="moon" />
      <img data-src="rhino.jpg" class="lazy-carousel-img" alt="rhino" />
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
  background-color: #eee; /* Placeholder background */
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

Der erste Teil des Codes definiert die Funktion `createImageObserver()`, die wir verwenden, um `IntersectionObserver`-Objekte zu erstellen und der `imageObserver`-Variable zuzuweisen. Wir verwenden eine Funktion, weil Beobachteroptionen nach der Konstruktion nicht geändert werden können, und wir möchten die Effekte verschiedener `scrollMargin`-Werte demonstrieren können.

Der `IntersectionObserver` wird ohne `rootMargin`, einem nahezu Null-`threshold` und einem `scrollMargin` erstellt, das seinen Wert aus der `margin`-Eingabe nimmt und auf alle Seiten des Scroll-Containers angewendet wird.

Der Rückruf wird für alle beobachteten Ziele aufgerufen. Für schneidende Ziele setzt er die `img.src` auf den Namen des zu ladenden Bildes (aus dem `img.dataset.src`), protokolliert den Schnittpunkt und beendet dann die Beobachtung des Bildes.

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

Der folgende Code erstellt den Beobachter mit `createImageObserver()` beim Start und wann immer der `margin`-Eingabewert geändert wird. Wenn die `IntersectionObserver`-Schnittstelle nicht unterstützt wird, werden alle Bilder sofort geladen.

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

Sie können die bereitgestellte Steuerung verwenden, um den Scroll-Margin-Prozentsatz zu ändern (nachdem Sie das Beispiel zurückgesetzt haben). Wenn Sie einen positiven Wert wie 20px einstellen, wird das Clip-Rechteck des Scroll-Containers um 20px vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in den Sichtbereich gelangen. Ähnlich führt ein negativer Wert dazu, dass der Schnittpunkt erkannt wird, sobald Bilder bereits im Sichtbereich sind.

{{EmbedLiveSample("Carousel with scroll margin","100%","500px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
