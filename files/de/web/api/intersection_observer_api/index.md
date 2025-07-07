---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Schnittfläche eines Ziel-Elements mit einem Vorfahr-Element oder mit dem Viewport eines Top-Level-Dokuments asynchron zu beobachten.

## Überblick

Historisch gesehen war die Erkennung der Sichtbarkeit eines Elements oder der relativen Sichtbarkeit zweier Elemente zueinander eine schwierige Aufgabe, für die Lösungen unzuverlässig waren und dazu neigten, den Browser und die vom Benutzer aufgerufenen Websites zu verlangsamen. Da das Web gereift ist, ist der Bedarf an dieser Art von Informationen gewachsen. Schnittstelleninformationen werden aus vielen Gründen benötigt, wie z.B.:

- Lazy-Loading von Bildern oder anderem Inhalt, während die Seite gescrollt wird.
- Implementierung von Websites mit "unendlichem Scrollen", bei denen immer mehr Inhalt geladen und gerendert wird, während Sie scrollen, damit der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen zur Berechnung der Werbeeinnahmen.
- Entscheidung, ob Aufgaben oder Animationsprozesse ausgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird oder nicht.

Die Implementierung von Schnittstellenerkennung in der Vergangenheit erforderte Event-Handler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufrufen, um die benötigten Informationen für jedes betroffene Element aufzubauen. Da all dieser Code im Hauptthread ausgeführt wird, kann selbst einer von ihnen Leistungsprobleme verursachen. Wenn eine Website mit diesen Tests geladen wird, kann es richtig hässlich werden.

Betrachten Sie eine Webseite, die unendliches Scrollen verwendet. Sie verwendet eine vom Anbieter bereitgestellte Bibliothek zur Verwaltung der Anzeigen, die periodisch auf der ganzen Seite platziert sind, hat animierte Grafiken hier und da und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und dergleichen zeichnet. Jede davon hat ihre eigenen Routinen zur Schnittstellenerkennung, die alle im Hauptthread laufen. Der Autor der Website merkt möglicherweise nicht einmal, dass das passiert, da er möglicherweise sehr wenig über die Funktionsweise der beiden verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Routinen zur Schnittstellenerkennung ständig im Scroll-Handling-Code ausgelöst, was zu einem Erlebnis führt, das den Benutzer mit dem Browser, der Website und seinem Computer frustriert.

Die Intersection Observer API lässt den Code eine Callback-Funktion registrieren, die ausgeführt wird, wenn ein bestimmtes Element eine Schnittfläche mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) betritt oder verlässt oder wenn sich die Schnittfläche zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise brauchen Websites nichts im Hauptthread tun, um nach dieser Art von Element-Schnittfläche zu suchen, und der Browser kann die Verwaltung der Schnittflächen optimieren, wie er es für geeignet hält.

Eine Sache, die die Intersection Observer API nicht kann: eine Logik basierend auf der genauen Anzahl von Pixeln auslösen, die überlappen, oder spezifisch darauf, welche Pixel das sind. Sie löst nur den allgemeinen Anwendungsfall "Wenn sie sich irgendwo um _N_% überschneiden, muss ich etwas tun" ein.

## Konzepte und Verwendung

Die Intersection Observer API ermöglicht es Ihnen, einen Callback zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Bedingungen eintritt:

- Ein **Ziel**-Element überschneidet entweder den Viewport des Geräts oder ein spezifiziertes Element. Dieses spezifizierte Element wird im Kontext der Intersection Observer API als **Wurzelelement** oder **Root** bezeichnet.
- Das erste Mal, wenn der Observer ursprünglich aufgefordert wird, ein Ziel-Element zu beobachten.

Typischerweise möchten Sie nach Schnittstellenänderungen in Bezug auf den nächstgelegenen scrollbaren Vorfahr des Ziel-Elements suchen oder, wenn das Ziel-Element kein Nachfahre eines scrollbaren Elements ist, auf den Viewport des Geräts achten. Um relative zur Gerätesicht zu beobachten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung der Intersection Observer-Optionen.

Egal, ob Sie den Viewport oder ein anderes Element als root verwenden, die API funktioniert auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Callback-Funktion ausführt, wann immer die Sichtbarkeit des Ziel-Elements sich ändert, sodass es gewünschte Mengen an Schnittfläche mit der root überschreitet.

Das Maß der Schnittfläche zwischen dem Ziel-Element und seiner root ist das **intersection ratio** (Schnittflächenverhältnis). Dies ist eine Darstellung des Prozentsatzes des Zielobjekts, das als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer durch Aufruf seines Konstruktors und übergeben Sie ihm eine Callback-Funktion, die jedes Mal ausgeführt wird, wenn ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1,0 bedeutet, dass der Callback aufgerufen wird, wenn 100 % des Ziels im durch die `root`-Option spezifizierten Element sichtbar sind.

#### Intersection Observer-Optionen

Das an den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergebene `options`-Objekt lässt Sie die Umstände kontrollieren, unter denen der Observer-Callback aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport zur Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahr des Ziels sein. Standardmäßig der Browser-Viewport, wenn nicht angegeben oder wenn `null`.
- `rootMargin`
  - : Rand um die root. Ein String mit einem bis vier Werten, ähnlich der CSS-Eigenschaft {{cssxref("margin")}}, z. B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur [absolute Längen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#absolute_length_units) oder Prozentsätze sein. Dieses Set von Werten dient dazu, jede Seite des Begrenzungsrahmens des Wurzelelements zu vergrößern oder zu verkleinern, bevor Schnittflächen berechnet werden. Negative Werte verkleinern den Begrenzungsrahmen des Wurzelelements und positive Werte vergrößern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "scroll containers")}} mit den gleichen Werten und Standardwert wie `rootMargin`. Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Schnittflächen berechnet werden. Positive Werte vergrößern das Clipping-Rechteck des Containers, sodass Ziele sich überschneiden können, bevor sie sichtbar werden, während negative Werte das Clipping-Rechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Observers ausgeführt werden soll. Wenn Sie nur feststellen möchten, wann die Sichtbarkeit die 50 %-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie den Callback jedes Mal ausführen möchten, wenn die Sichtbarkeit um weitere 25 % überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standardwert ist 0 (was bedeutet, dass der Callback ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1,0 bedeutet, dass der Schwellenwert erst dann als passiert gilt, wenn alle Pixel sichtbar sind.
- `delay`
  - : Beim Verfolgen der Ziel-Sichtbarkeit ([trackVisibility](#trackvisibility) ist `true`) kann dies verwendet werden, um die Mindestverzögerung in Millisekunden zwischen Benachrichtigungen von diesem Observer festzulegen. Die Begrenzung der Benachrichtigungsrate ist wünschenswert, da die Sichtbarkeitsberechnung rechnerisch aufwändig ist. Wenn die Sichtbarkeit verfolgt wird, wird der Wert auf 100 gesetzt, wenn er weniger als 100 beträgt, und Sie sollten den höchstverträglichen Wert verwenden. Der Wert ist standardmäßig 0.
- `trackVisibility`
  - : Ein Boolean, der angibt, ob dieser `IntersectionObserver` Änderungen der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Schnittflächen, wenn das Ziel-Element in den Viewport des Wurzelelements scrollt. Bei `true` überprüft der Browser zusätzlich, ob das Ziel tatsächlich sichtbar ist und nicht durch andere Elemente verdeckt oder möglicherweise durch einen Filter, reduzierte Deckkraft oder eine Transformation verzerrt oder versteckt wurde. Der Wert ist standardmäßig `false`, da die Verfolgung der Sichtbarkeit rechnerisch aufwändig ist. Wenn dies festgelegt ist, sollte auch eine [`delay`](#delay) festgelegt werden.

#### Intersection-Change-Callbacks

Der Callback, der an den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Observer:

```js
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

Die Liste der Einträge, die vom Callback empfangen werden, enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Schwellenwert-Ereignis – mehrere Einträge können gleichzeitig empfangen werden. Ob von mehreren Zielen oder von einem einzelnen Ziel, das mehrere Schwellenwerte in kurzer Zeit überschreitet. Die Einträge werden über eine Warteschlange versendet, daher sollten sie nach der Zeit geordnet sein, zu der sie generiert wurden, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie richtig anzuordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Wurzelelement geschnitten wird, ob das Element als schnittüberdeckend betrachtet wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen speziellen Zeitpunkt – wenn Sie Informationen benötigen, die eine Nachverfolgung über die Zeit erfordern, wie z.B. die Scroll-Richtung und Geschwindigkeit, müssen Sie diese möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge speichern.

Beachten Sie, dass Ihr Callback im Hauptthread ausgeführt wird. Es sollte so schnell wie möglich arbeiten; Wenn irgendetwas Zeitaufwändiges erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Code-Schnipsel zeigt einen Callback, der zählt, wie oft Elemente von nicht schnittüberdeckend zum schnittüberdeckend mit mindestens 75 % übergehen. Für einen Schwellenwert von 0,0 (Standardwert) wird der Callback ungefähr beim Übergang des booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Daher überprüft der Schnipsel zunächst, ob der Übergang ein positiver ist, und bestimmt dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75 % liegt, in welchem Fall der Zähler erhöht wird.

```js
const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
  });
};
```

#### Ziel-Element, das beobachtet werden soll

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Ziel-Element geben, das er beobachten soll:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Callback aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachfahre des Wurzelelements sein muss.

### Wie Schnittflächen berechnet werden

Alle von der Intersection Observer API berücksichtigten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck angesehen, das alle Teile des Elements einschließt. Ebenso gilt, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Schnittflächen-Rechteck des Elements als das kleinste Rechteck angesehen, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Schnittfläche beschreiben.

#### Die Schnittwurzel und der Wurzelrand

Bevor wir die Schnittfläche eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittwurzel** oder das **Wurzelelement**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorfahr des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_root intersection rectangle_** ist das Rechteck, das zur Überprüfung des Ziels oder der Ziele verwendet wird. Dieses Rechteck wird folgendermaßen bestimmt:

- Wenn die Schnittwurzel die implizite Wurzel ist (also das oberste [`Document`](/de/docs/Web/API/Document)), ist das Wurzel-Schnitt-Rectangle das Rechteck des Viewports.
- Wenn die Schnittwurzel einen Überlaufclip hat, ist das Wurzel-Schnitt-Rectangle der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Wurzel-Schnitt-Rectangle das Begrenzungsrechteck (bounding client rectangle) der Schnittwurzel (wie es durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben wird).

Das Wurzel-Schnitt-Rectangle kann weiter angepasst werden, indem der **Wurzelrand**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) gesetzt wird. Die Werte in `rootMargin` definieren Offsets, die auf jede Seite des Begrenzungsrahmens der Schnittwurzel hinzugefügt werden, um die endgültigen Begrenzungen der Wurzel-Schnittfläche zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) angegeben werden, wenn der Callback ausgeführt wird). Positive Werte vergrößern das Rechteck, während negative Werte es verkleinern.

Der Effekt, das Rechteck mit Hilfe des Wurzelrandes zu vergrößern, besteht darin, dass überlaufende Ziele sich mit der Wurzel überschneiden können, bevor sie sichtbar werden. Das kann zum Beispiel verwendet werden, um Bilder zu laden, kurz bevor sie in den sichtbaren Bereich kommen, anstatt erst dann, wenn sie tatsächlich sichtbar werden.

Im folgenden Beispiel haben wir eine scrollbare Box und ein Element, das zunächst nicht sichtbar ist. Sie können den rechten Rand der Wurzel anpassen und sehen, dass:

- Wenn der Rand positiv ist, wird das rote Element als schnittüberdeckend mit der Wurzel betrachtet, auch wenn es nicht sichtbar ist, da es mit dem Randbereich der Wurzel überlappt.
- Wenn der Rand negativ ist, dann wird das rote Element, selbst wenn es sichtbar wird, immer noch nicht als schnittüberdeckend mit der Wurzel betrachtet, weil der Begrenzungsrahmen der Wurzel verkleinert wird.

```html hidden
<div class="demo">
  <div id="container">
    <div id="elem"></div>
    <div id="gutter"></div>
  </div>
  <div id="marginIndicator"></div>
</div>
<div class="controls">
  <label>
    Set the right margin of the root:
    <input id="margin" type="number" value="0" step="5" />px
  </label>
  <label>
    You can also use this slider to scroll the container:
    <input id="scrollAmount" type="range" min="0" max="300" value="0" />
  </label>
  <p>Current intersection ratio: <span id="output"></span></p>
</div>
```

```css hidden
.demo {
  display: flex;
}

.controls {
  display: flex;
  flex-direction: column;
}

#container {
  position: relative;
  width: 200px;
  height: 100px;
  overflow-x: scroll;
  border: 1px solid black;
}

#marginIndicator {
  position: relative;
  height: 100px;
  background-color: blue;
  opacity: 0.5;
}

#elem {
  background-color: red;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 200px;
}

#gutter {
  width: 500px;
  height: 100px;
}
```

```js hidden
let observer;
function createObserver() {
  if (observer) {
    observer.disconnect();
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        output.textContent = entry.intersectionRatio.toFixed(2);
      });
    },
    {
      threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
      root: container,
      rootMargin: `0px ${margin.value}px 0px 0px`,
    },
  );
  if (margin.valueAsNumber < 0) {
    marginIndicator.style.width = `${-margin.valueAsNumber}px`;
    marginIndicator.style.left = `${margin.valueAsNumber}px`;

    marginIndicator.style.backgroundColor = "blue";
  } else {
    marginIndicator.style.width = `${margin.valueAsNumber}px`;
    marginIndicator.style.left = "0px";
    marginIndicator.style.backgroundColor = "green";
  }
  observer.observe(elem);
}
createObserver();
margin.addEventListener("input", () => {
  createObserver();
});
scrollAmount.addEventListener("input", () => {
  container.scrollLeft = scrollAmount.value;
});
```

{{EmbedLiveSample("die Schnittwurzel und der Wurzelrand", "", 200)}}

#### Die Schnittwurzel und Scroll-Margin

Betrachten Sie den Fall, in dem Sie ein Wurzelelement haben, das verschachtelte {{Glossary("scroll_container", "scroll containers")}} enthält, und Sie Schnittflächen mit einem Ziel innerhalb eines dieser scrollbaren Container beobachten möchten. Die Beobachtungen von Schnittflächen mit dem Ziel-Element beginnen standardmäßig, wenn das Ziel im Bereich sichtbar ist, der durch die Wurzel definiert ist; mit anderen Worten, wenn der Container im Wurzelbereich gescrollt wird und das Ziel im Clipping-Rechteck seines Containers sichtbar wird.

Sie können einen Scroll-Margin verwenden, um auf Schnittflächen zu achten, bevor oder nachdem das Ziel im Sichtbereich seines Scroll-Containers gescrollt wird. Der Rand wird auf alle verschachtelten Scroll-Container in der Wurzel angewendet, einschließlich des Wurzelelements, wenn auch dieses ein Scroll-Container ist, und hat den Effekt, die Clip-Region zu vergrößern (positive Ränder) oder zu verkleinern (negative Ränder), die zur Berechnung von Schnittflächen verwendet wird.

> [!NOTE]
> Sie könnten einen Intersection Observer für jeden Scroll-Container erstellen, für den Sie einen Scroll-Margin wünschen, und die `rootMargin`-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen.
> Die Verwendung eines Scroll-Margin ist ergonomischer, da Sie in den meisten Fällen nur einen Intersection Observer für alle verschachtelten Ziele haben können.

Im folgenden Beispiel haben wir eine scrollbare Box und ein Bildkarussell, das zunächst aus dem Sichtbereich ist. Ein Observer auf das Wurzelelement beobachtet die Bild-Element-Ziele im Karussell. Wenn ein Bild-Element beginnt, mit dem Wurzelelement zu schneiden, wird das Bild geladen, die Schnittfläche wird protokolliert und der Observer entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen. Die sichtbaren Bilder sollten sofort geladen werden. Wenn Sie durch das Karussell scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nach dem Zurücksetzen des Beispiels können Sie die bereitgestellte Steuerung verwenden, um den Prozentsatz der Scroll-Margin zu ändern. Wenn Sie einen positiven Wert wie 20 % einstellen, wird das Clip-Rechteck des Scroll-Containers um 20 % vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in den Sichtbereich kommen. Ähnlich bedeutet ein negativer Wert, dass die Schnittfläche erkannt wird, sobald die Bilder bereits im Sichtbereich sind.

```html hidden
<button id="reset" type="button">Reset</button>
```

```html hidden
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

```html hidden
<div class="controls">
  <label>
    Set the right margin of the scroll root:
    <input id="margin" type="number" value="0" step="5" />%
  </label>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#root-container {
  height: 250px;
  overflow-y: auto;
  border: solid blue;
}

.controls {
  margin-top: 10px;
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

#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

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

```js hidden
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
    scrollMargin: `${margin.valueAsNumber}%`, // No extra margin / Can be set
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

{{EmbedLiveSample("Die Schnittwurzel und Scroll-Margin","100%","500px")}}

#### Schwellenwerte

Anstatt jede winzige Änderung der Sichtbarkeit eines Ziel-Elements zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie einen oder mehrere numerische Werte bereitstellen, die Prozentsätze des sichtbaren Ziel-Elements darstellen. Dann meldet die API nur Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Wenn Sie beispielsweise jedes Mal informiert werden möchten, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts durch die 25 %-Marke überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte angeben, wenn Sie den Observer erstellen.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, bei dem sich das Maß der Schnittfläche mit der Wurzel so geändert hat, dass die Menge, die die Schwelle überschreitet, in die eine oder andere Richtung überquert wurde.

Sie können überprüfen, ob das Ziel _derzeit_ mit der Wurzel überschnitten ist, indem Sie die Eigenschaft [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) des Eintrags betrachten; wenn der Wert `true` ist, überschneidet das Ziel das Wurzelelement oder das Dokument zumindest teilweise. Dadurch können Sie feststellen, ob der Eintrag einen Übergang von einer Überschneidung zu einer Nicht-Überschneidung oder von einer Nicht-Überschneidung zu einer Überschneidung darstellt.

Beachten Sie, dass es möglich ist, ein null-Schnittflächen-Rechteck zu haben, das auftreten kann, wenn sich die Schnittfläche genau entlang der Grenze zwischen den beiden befindet oder die Fläche von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, dass das Ziel und die Wurzel eine Grenzlinie teilen, wird nicht als ausreichend betrachtet, um als Übergang in einen schnittüberdeckenden Zustand betrachtet zu werden.

Um ein Gefühl für die Funktionsweise von Schwellenwerten zu bekommen, versuchen Sie den Container unten herumzuscrollen. Jedes farbige Kästchen darin zeigt die Prozentzahl seiner selbst, die in allen vier Ecken sichtbar ist, sodass Sie diese Verhältnisse im Laufe der Zeit sehen können, während Sie den Container scrollen. Jedes Kästchen hat einen anderen Satz von Schwellenwerten:

- Das erste Kästchen hat für jeden Prozentpunkt der Sichtbarkeit eine Schwelle; das heißt, das `IntersectionObserver.thresholds`-Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Kästchen hat eine einzige Schwelle bei der 50 %-Marke.
- Das dritte Kästchen hat Schwellen bei jedem 10 % der Sichtbarkeit (0 %, 10 %, 20 % usw.).
- Das letzte Kästchen hat Schwellen bei jedem 25 %.

```html hidden
<template id="boxTemplate">
  <div class="sampleBox">
    <div class="label topLeft"></div>
    <div class="label topRight"></div>
    <div class="label bottomLeft"></div>
    <div class="label bottomRight"></div>
  </div>
</template>

<main>
  <div class="contents">
    <div class="wrapper"></div>
  </div>
</main>
```

```css hidden
.contents {
  position: absolute;
  width: 700px;
  height: 1725px;
}

.wrapper {
  position: relative;
  top: 600px;
}

.sampleBox {
  position: relative;
  left: 175px;
  width: 150px;
  background-color: rgb(245 170 140);
  border: 2px solid rgb(201 126 17);
  padding: 4px;
  margin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.label {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
  position: absolute;
  margin: 0;
  background-color: rgb(255 255 255 / 70%);
  border: 1px solid rgb(0 0 0 / 70%);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-align: center;
}

.topLeft {
  left: 2px;
  top: 2px;
}

.topRight {
  right: 2px;
  top: 2px;
}

.bottomLeft {
  bottom: 2px;
  left: 2px;
}

.bottomRight {
  bottom: 2px;
  right: 2px;
}
```

```js hidden
let observers = [];

startup = () => {
  let wrapper = document.querySelector(".wrapper");

  // Options for the observers

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };

  // An array of threshold sets for each of the boxes. The
  // first box's thresholds are set programmatically
  // since there will be so many of them (for each percentage
  // point).

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0],
  ];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSets[0].push(i);
  }

  // Add each box, creating a new observer for each

  for (let i = 0; i < 4; i++) {
    let template = document
      .querySelector("#boxTemplate")
      .content.cloneNode(true);
    let boxID = `box${i + 1}`;
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // Set up the observer for this box

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(
      intersectionCallback,
      observerOptions,
    );
    observers[i].observe(document.querySelector(`#${boxID}`));
  }

  // Scroll to the starting position

  document.scrollingElement.scrollTop =
    wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
};

intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    const box = entry.target;
    const visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;

    box.querySelector(".topLeft").textContent = visiblePct;
    box.querySelector(".topRight").textContent = visiblePct;
    box.querySelector(".bottomLeft").textContent = visiblePct;
    box.querySelector(".bottomRight").textContent = visiblePct;
  });
};

startup();
```

{{EmbedLiveSample("Schwellenwerte", 500, 500)}}

#### Sichtbarkeit verfolgen und Verzögerung

Standardmäßig bietet der Observer Benachrichtigungen, wenn das Ziel-Element in den Viewport des Wurzelelements gescrollt wird. Während dies in vielen Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Schnittflächen nicht gemeldet werden, wenn das Ziel "visuell beeinträchtigt" wurde. Beispielsweise ist es bei der Messung von Analysen oder Werbeeindrücken wichtig, dass Ziel-Elemente nicht ganz oder teilweise verdeckt oder verzerrt sind.

Die Einstellung `trackVisibility` gibt dem Observer vor, nur Schnittflächen für Ziele zu melden, die der Browser nicht als visuell beeinträchtigt ansieht, wie z.B. durch die Änderung der Deckkraft oder das Anwenden eines Filters oder einer Transformation. Der Algorithmus ist konservativ und kann Elemente auslassen, die technisch sichtbar sind, wie solche mit einer nur geringen Deckkraftreduktion.

Die Sichtbarkeitsberechnung ist rechnerisch teuer und sollte nur verwendet werden, wenn sie notwendig ist. Beim Verfolgen der Sichtbarkeit sollte auch eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um die minimale Meldeperiode zu begrenzen. Die Empfehlung ist, dass Sie die Verzögerung auf den höchsten erträglichen Wert einstellen (die Mindestverzögerung beim Verfolgen der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Schnittflächen-Rechteck

Der Browser berechnet das endgültige Schnittflächen-Rechteck wie folgt; dies alles wird für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu verstehen, wann Schnittflächen auftreten können.

1. Das Begrenzungsrechteck des Ziel-Elements (das ist das kleinste Rechteck, das die Begrenzungsrahmen aller Komponenten umschließt, aus denen das Element besteht) wird durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abgerufen. Dies ist das größte, was das Schnittflächen-Rechteck sein kann. Die verbleibenden Schritte entfernen alle Teile, die nicht schneiden.
2. Beginnend beim unmittelbar umgebenden Block des Ziels und nach außen arbeitend, wird das Clipping jedes umgebenden Blocks (falls vorhanden) auf das Schnittflächen-Rechteck angewendet. Ein Block-Clip wird basierend auf der Schnittfläche der beiden Blöcke und dem (falls vorhanden) durch die {{cssxref("overflow")}}-Eigenschaft spezifizierten Clipping-Modus bestimmt. Das Setzen von `overflow` auf etwas anderes als `visible` führt zum Clipping.
3. Wenn eines der umgebenden Elemente die Wurzel eines verschachtelten Browsing-Kontexts ist (wie das Dokument in einem {{HTMLElement("iframe")}}), wird das Schnittflächen-Rechteck auf den Viewport des umgebenden Kontexts abgeschnitten, und die Rekursion nach oben durch die Container wird mit dem umgebenden Block des Containers fortgesetzt. Wenn also das oberste Level eines `<iframe>` erreicht wird, wird das Schnittflächen-Rechteck auf den Viewport des Rahmens abgeschnitten, dann ist das Elternelement des Rahmens der nächste zu durchlaufende Block hinauf zur Schnittwurzel.
4. Wenn die Rekursion nach oben die Schnittwurzel erreicht, wird das resultierende Rechteck auf den Koordinatenraum der Schnittwurzel abgebildet.
5. Das resultierende Rechteck wird dann durch Überschneiden mit der [root intersection rectangle](#die_schnittwurzel_und_der_wurzelrand) aktualisiert.
6. Dieses Rechteck wird schließlich auf den Koordinatenraum des `document`-Elements des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Beobachters, der eine beliebige Anzahl von Ziel-Elementen für dieselbe Schnittstellenkonfiguration beobachten kann. Jeder Beobachter kann Änderungen in der Schnittfläche zwischen einem oder mehreren Ziel-Elementen und einem gemeinsamen Vorfahr-Element oder mit ihrem Top-Level-[`Document`](/de/docs/Web/API/Document)-{{Glossary("viewport", "Viewport")}} asynchron beobachten. Der Vorfahr oder der Viewport wird als **Root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittfläche zwischen dem Ziel-Element und seinem Wurzelcontainer zu einem bestimmten Übergangszeitpunkt. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Callback oder durch den Aufruf von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass ein Ziel-Element seine Farbe und Transparenz ändert, während es mehr oder weniger sichtbar wird. Sie finden ein umfassenderes Beispiel unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), das zeigt, wie lange eine Reihe von Elementen (wie Anzeigen) für den Benutzer sichtbar sind und darauf reagiert, indem Statistiken aufgezeichnet oder Elemente aktualisiert werden.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem Hauptelement, das die Box ist, die wir anvisieren werden (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht sehr wichtig; es legt das Element aus und stellt sicher, dass die Attribute {{cssxref("background-color")}} und {{cssxref("border")}} an [CSS transitions](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu bewirken, während es mehr oder weniger verdeckt wird.

```css
#box {
  background-color: rgb(40 40 190 / 100%);
  border: 4px solid rgb(20 20 120);
  transition:
    background-color 1s,
    border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20 20 120);
  text-align: center;
  padding: 20px;
}
```

### JavaScript

Schließlich wollen wir uns den JavaScript-Code ansehen, der die Intersection Observer API verwendet, um Dinge geschehen zu lassen.

#### Einrichtung

Zuerst müssen wir einige Variablen vorbereiten und den Observer installieren.

```js
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgb(40 40 190 / ratio)";
let decreasingColor = "rgb(190 40 40 / ratio)";

// Set things up
window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector("#box");

    createObserver();
  },
  false,
);
```

Die Konstanten und Variablen, die wir hier einrichten, sind:

- `numSteps`
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Schnittflächenverhältnis von 0,0 und 1,0 haben wollen.
- `prevRatio`
  - : Diese Variable wird verwendet, um aufzuzeichnen, wie das Schnittflächenverhältnis beim letzten Überschreiten eines Schwellenwerts war; dies ermöglicht uns zu ermitteln, ob das Zielobjekt mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Ziel-Element anwenden werden, wenn das Schnittflächenverhältnis zunimmt. Das Wort "ratio" in diesem String wird durch das aktuelle Schnittflächenverhältnis des Ziels ersetzt, sodass das Element nicht nur die Farbe ändert, sondern auch zunehmend opak wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ähnlich ist dies ein String, der eine Farbe definiert, die wir anwenden werden, wenn das Schnittflächenverhältnis abnimmt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um mit dem Lauschen auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu beginnen; sobald die Seite geladen ist, erhalten wir eine Referenz zum Element mit der ID `"box"` durch den Aufruf von [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die Methode `createObserver()` auf, die wir gleich erstellen werden, um die Erstellung und Installation des Intersection Observers zu regeln.

#### Erstellung des Intersection Observers

Die Methode `createObserver()` wird aufgerufen, wenn die Seite vollständig geladen ist, um den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und den Prozess der Beobachtung des Ziel-Elements zu starten.

```js
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

Dies beginnt mit der Einrichtung eines `options`-Objekts, das die Einstellungen für den Observer enthält. Wir möchten Änderungen in der Sichtbarkeit des Ziel-Elements relativ zum Viewport des Dokuments beobachten, sodass `root` `null` ist. Wir benötigen keinen Rand, also wird der Randoffset, `rootMargin`, als "0px" angegeben. Dies bewirkt, dass der Observer Änderungen in der Schnittfläche zwischen dem Begrenzungsrahmen des Ziel-Elements und dem des Viewports beobachtet, ohne zusätzlichen (oder subtrahierten) Raum.

Die Liste der Schwellenwerte für das Schnittflächenverhältnis, `threshold`, wird durch die Funktion `buildThresholdList()` konstruiert. Die Schwellenwertliste wird in diesem Beispiel programmgesteuert erstellt, da es eine Anzahl von ihnen gibt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Observer, indem wir den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) aufrufen und eine Funktion mit dem Namen `handleIntersect()` angeben, die aufgerufen werden soll, wenn die Schnittfläche eine unserer Schwellenwerte überschreitet, sowie unser Optionsset. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Observer auf und übergeben ihm das gewünschte Ziel-Element.

Wir könnten uns entscheiden, die Sichtbarkeitsüberschneidung von mehreren Elementen im Verhältnis zum Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun wollten.

#### Aufbau des Arrays von Schwellenwertverhältnissen

Die Funktion `buildThresholdList()`, die die Liste der Schwellenwerte erstellt, sieht so aus:

```js
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

Dies erstellt das Array von Schwellenwerten – jeder davon ist ein Verhältnis zwischen 0,0 und 1,0 – indem der Wert `i/numSteps` für jedes ganzzahlige `i` zwischen 1 und `numSteps` zum `thresholds`-Array hinzugefügt wird. Es fügt auch 0 hinzu, um diesen Wert einzubeziehen. Das Ergebnis, gegeben den Standardwert von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

<table class="standard-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Verhältnis</th>
        <th>#</th>
        <th>Verhältnis</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>0</th>
        <td>0,05</td>
        <th>11</th>
        <td>0,6</td>
      </tr>
      <tr>
        <th>1</th>
        <td>0,1</td>
        <th>12</th>
        <td>0,65</td>
      </tr>
      <tr>
        <th>2</th>
        <td>0,15</td>
        <th>13</th>
        <td>0,7</td>
      </tr>
      <tr>
        <th>3</th>
        <td>0,2</td>
        <th>14</th>
        <td>0,75</td>
      </tr>
      <tr>
        <th>4</th>
        <td>0,25</td>
        <th>15</th>
        <td>0,8</td>
      </tr>
      <tr>
        <th>5</th>
        <td>0,3</td>
        <th>16</th>
        <td>0,85</td>
      </tr>
      <tr>
        <th>6</th>
        <td>0,35</td>
        <th>17</th>
        <td>0,9</td>
      </tr>
      <tr>
        <th>7</th>
        <td>0,4</td>
        <th>18</th>
        <td>0,95</td>
      </tr>
      <tr>
        <th>8</th>
        <td>0,45</td>
        <th>19</th>
        <td>1</td>
      </tr>
      <tr>
        <th>9</th>
        <td>0,5</td>
        <th>20</th>
        <td>0</td>
      </tr>
      <tr>
        <th>10</th>
        <td>0,55</td>
      </tr>
    </tbody>
</table>

Wir könnten natürlich das Array von Schwellenwerten fest in unserem Code einfügen, und oft werden Sie genau das tun. Aber dieses Beispiel lässt Raum für die Hinzufügung von Steuerungskontrollen zur Anpassung der Granularität, beispielsweise.

#### Umgang mit Schnittflächenänderungen

Wenn der Browser erkennt, dass das Ziel-Element (in unserem Fall das mit der ID `"box"`) so freigelegt oder verdeckt wurde, dass sein Schnittflächenverhältnis einen unserer Schwellenwerte in unserer Liste überschreitet, ruft er unsere Handler-Funktion `handleIntersect()` auf:

```js
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

Für jede [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste der `entries` schauen wir nach, ob das `intersectionRatio` des Eintrags zunimmt; wenn es das tut, setzen wir die {{cssxref("background-color")}} des Ziels auf den String in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzen das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur die Farbe wird geändert, sondern auch die Transparenz des Ziel-Elements ändert sich; wenn das Schnittflächenverhältnis sinkt, sinkt auch der Alpha-Wert der Hintergrundfarbe mit ihm, was zu einem transparenteren Element führt.

Ähnlich, wenn das `intersectionRatio` sinkt, verwenden wir den String `decreasingColor` und ersetzen das Wort "ratio" darin durch das `intersectionRatio`, bevor wir das `background-color` des Ziel-Elements setzen.

Schließlich speichern wir zur Verfolgung, ob das Schnittflächenverhältnis steigt oder sinkt, das aktuelle Verhältnis in der Variablen `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt. Scrollen Sie diese Seite hoch und runter und achten Sie darauf, wie sich das Aussehen der Box verändert, wenn Sie dies tun.

{{EmbedLiveSample('Ein_einfaches_Beispiel', 400, 400)}}

Es gibt ein noch detaillierteres Beispiel unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer Polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
