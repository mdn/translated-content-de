---
title: "IntersectionObserver: scrollMargin-Eigenschaft"
short-title: scrollMargin
slug: Web/API/IntersectionObserver/scrollMargin
l10n:
  sourceCommit: 809a1f18b067a6f768ccde5b9672733014179ede
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte Eigenschaft **`scrollMargin`** des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements eine Margin hinzu, einschließlich des Wurzelelements, wenn es sich um einen Scroll-Container handelt.

Dies vergrößert oder verkleinert das Clipping-Rechteck der scrollbaren Container, bevor die Schnittpunkte berechnet werden. Damit können Sie beispielsweise die Begrenzungen des Scroll-Containers anpassen, sodass das Zielelement als sichtbar gilt, auch wenn seine Pixel im Viewport des Containers noch nicht angezeigt werden, oder das Ziel als teilweise verdeckt behandelt wird, wenn eine Kante zu nah an der Kante des Begrenzungsrahmens des Containers ist.

Beachten Sie, dass, wenn das Wurzelelement auch ein scrollbarer Container ist, die `scrollMargin` und die [`rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) zusammen verwendet werden, um das effektive Begrenzungsrechteck zu bestimmen, das zur Berechnung der Schnittpunkte mit dem Ziel verwendet wird.

Weitere Informationen finden Sie unter [The intersection root and root margin](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_scroll_margin) in der API-Übersicht.

## Wert

Ein String, formatiert ähnlich dem Wert der CSS-Eigenschaft {{cssxref("margin")}}.

Die angegebene Margin definiert Offsets für eine oder mehrere Seiten des Clipping-Rechtecks eines Scroll-Containers. Falls `scrollMargin` nicht spezifiziert wird, wenn das Objekt instanziiert wird, ist der Standardwert der String `"0px 0px 0px 0px"`.

## Beispiel

### Karussell mit Scroll-Margin

Dieses Beispiel definiert ein scrollbares Feld (das Wurzelelement), das ein Bildkarussell enthält, das zunächst nicht sichtbar ist. Ein Beobachter auf dem Wurzelelement überwacht die Bildelementziele im Karussell. Wenn ein Bildelement beginnt, mit dem Wurzelelement zu schneiden, wird das Bild geladen, die Schnittstelle wird protokolliert und der Beobachter wird entfernt.

Das Beispiel erlaubt Ihnen, die `scrollMargin` zu ändern, um zu sehen, wie sich das verändert, wenn Ziele innerhalb des Karussells scrollbarer Container zu schneiden beginnen.

#### HTML

```html hidden
<button id="reset" type="button">Reset</button>
```

Der untenstehende Code definiert das `root_container`-{{htmlelement("div")}}-Element, das wir als Wurzelelement des Intersection-Observers verwenden werden. Dieses enthält wiederum ein {{htmlelement("p")}}-Element, das standardmäßig dazu verwendet wird, die anderen Elemente aus dem Sichtfeld zu schieben, ein `carousel`-`<div>`, und einen `marginIndicator` (zur Anzeige der Größe der auf scrollbare Elemente im Wurzelelement angewendeten Margin).

Die {{htmlelement("img")}}-Elemente innerhalb des Karussells haben ein `data-src`-Attribut, das einen Dateinamen enthält. In unserem Beobachtercode werden wir dieses Attribut verwenden, um das `img.src` festzulegen, wenn jedes Bild beginnt, mit dem Wurzelelement zu schneiden, wodurch das Bild geladen wird.

```html
<div id="root_container">
  <p>content before (scroll down to carousel)</p>

  <div class="flexcontainer">
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
    <div id="marginIndicator"></div>
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
#root_container {
  height: 250px;
  overflow-y: auto;
  border: solid blue;
}

p {
  height: 50vh;
}

.flexcontainer {
  display: flex;
}

#marginIndicator {
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

Der erste Teil des Codes definiert die Funktion `createImageObserver()`, die wir verwenden, um `IntersectionObserver`-Objekte zu erstellen und der Variablen `imageObserver` zuzuweisen. Wir verwenden eine Funktion, weil Beobachteroptionen nach der Konstruktion nicht geändert werden können und wir die Auswirkungen verschiedener `scrollMargin`-Werte demonstrieren möchten.

Der `IntersectionObserver` wird ohne `rootMargin`, mit einem fast nullen `threshold` und einer `scrollMargin` erstellt, die ihren Wert aus der `margin`-Eingabe erhält und die auf alle Seiten des Scroll-Containers angewendet wird.

Der Callback wird für alle beobachteten Ziele aufgerufen. Für schneidende Ziele setzt er das `img.src` auf den Namen des zu ladenden Bildes (aus dem `img.dataset.src`), protokolliert die Schnittstelle und hört dann auf, das Bild zu beobachten.

Der Code am Ende der Funktion ruft [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe) für jedes Bild auf, um den Beobachter zu starten.

```js
let imageObserver;

function createImageObserver() {
  const carousel = document.querySelector(".carousel");
  const lazyImages = carousel.querySelectorAll(".lazy-carousel-img");

  if (imageObserver) {
    imageObserver.disconnect();
  }

  let observerOptions = {
    root: root_container,
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

Der folgende Code wartet, bis die Seite bereit ist, und erstellt den Beobachter mithilfe von `createImageObserver()` zu Beginn und immer dann, wenn der `margin`-Eingabewert geändert wird. Wenn die `IntersectionObserver`-Schnittstelle nicht unterstützt wird, werden alle Bilder sofort geladen.

```js
document.addEventListener("DOMContentLoaded", () => {
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
});
```

#### Ergebnisse

Scrollen Sie nach unten, um das Karussell anzuzeigen. Die sichtbaren Bilder sollten sofort geladen werden. Wenn Sie das Karussell nach rechts scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Sie können die bereitgestellte Steuerung verwenden, um den Scroll-Margin-Prozentsatz zu ändern (nachdem Sie das Beispiel zurückgesetzt haben). Wenn Sie einen positiven Wert wie 20px setzen, wird das Clipping-Rechteck des Scroll-Containers um 20px vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in Sicht kommen. Ebenso bedeutet ein negativer Wert, dass die Schnittstelle erkannt wird, sobald Bilder bereits sichtbar sind.

{{EmbedLiveSample("Carousel with scroll margin","100%","500px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
