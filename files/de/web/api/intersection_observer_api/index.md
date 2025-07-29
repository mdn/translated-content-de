---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 1b61fe3aa68b972468514d5ab13ed93497b13a96
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Überlappung eines Zielelements mit einem Vorfahrenelement oder mit dem Viewport eines übergeordneten Dokuments asynchron zu beobachten.

## Übersicht

Historisch gesehen war das Erkennen der Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente zueinander eine schwierige Aufgabe, für die Lösungen unzuverlässig waren und dazu führten, dass der Browser und die vom Nutzer besuchten Seiten träge wurden. Da das Web gereift ist, hat der Bedarf an dieser Art von Informationen zugenommen. Informationen über die Überlappung werden aus vielen Gründen benötigt, beispielsweise:

- Lazy-Loading von Bildern oder anderen Inhalten, wenn eine Seite gescrollt wird.
- Implementierung von Websites mit "unendlichem Scrollen", bei denen mehr und mehr Inhalte geladen und gerendert werden, während Sie scrollen, sodass der Nutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um die Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationsprozesse ausgeführt werden sollen, basierend darauf, ob der Nutzer das Ergebnis sehen wird oder nicht.

In der Vergangenheit beinhaltete die Implementierung der Überlappungserkennung Ereignis-Handler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, um die erforderlichen Informationen für jedes betroffene Element zusammenzustellen. Da all dieser Code im Haupt-Thread läuft, kann selbst einer dieser Schritte zu Leistungsproblemen führen. Wenn eine Website mit diesen Tests überladen ist, kann das Ganze ziemlich hässlich werden.

Denken Sie an eine Webseite, die unendliches Scrollen verwendet. Sie verwendet eine Anbieterbibliothek, um die Anzeigen zu verwalten, die periodisch auf der Seite platziert werden, verfügt hier und da über animierte Grafiken und nutzt eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und dergleichen zeichnet. Jede dieser Routinen zur Überlappungserkennung läuft im Haupt-Thread. Der Autor der Website merkt möglicherweise nicht einmal, dass dies geschieht, da er möglicherweise wenig über die inneren Abläufe der beiden von ihm verwendeten Bibliotheken weiß. Während der Nutzer die Seite scrollt, werden diese Routinen zur Überlappungserkennung ständig während des Scroll-Handling-Codes aufgerufen, was zu einer Erfahrung führt, die den Nutzer frustriert mit dem Browser, der Website und seinem Computer zurücklässt.

Die Intersection Observer API ermöglicht es dem Code, eine Rückruffunktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element eine Überlappung mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) beginnt oder beendet, oder wenn sich die Überlappung zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites nichts mehr im Haupt-Thread tun, um diese Art von Elementüberlappung zu beobachten, und der Browser kann die Verwaltung von Überlappungen nach Belieben optimieren.

Was die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl von überlappenden Pixeln auslösen oder speziell darauf, welche sie sind. Sie löst nur den Standardanwendungsfall "Wenn sie sich etwa um _N_% überlappen, muss ich etwas tun" aus.

## Konzepte und Nutzung

Die Intersection Observer API erlaubt Ihnen, einen Rückruf zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Bedingungen auftritt:

- Ein **Ziel**-Element überlappt entweder den Viewport des Geräts oder ein angegebenes Element. Dieses angegebene Element wird für die Zwecke der Intersection Observer API als **Root-Element** oder **Root** bezeichnet.
- Das erste Mal, wenn der Beobachter initial angewiesen wird, ein Ziel-Element zu beobachten.

Typischerweise möchten Sie auf Überlappungsänderungen im Hinblick auf den nächsten scrollbaren Vorfahren des Zielelements achten oder, falls das Zielelement kein Nachfahre eines scrollbaren Elements ist, auf den Viewport des Geräts. Um Überlappungen relativ zum Viewport des Geräts zu beobachten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung über die Optionen des Intersection Observer.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Rückruffunktion ausführt, wann immer die Sichtbarkeit des Zielelements sich so ändert, dass es gewünschte Überlappungsmengen mit dem Root kreuzt.

Der Grad der Überlappung zwischen dem Zielelement und seinem Root ist das **Überlappungsverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, der als Wert zwischen 0.0 und 1.0 sichtbar ist.

### Erstellen eines Intersection Observer

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Rückruffunktion übergeben, die ausgeführt wird, wann immer ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1.0 bedeutet, dass, wenn 100% des Ziels innerhalb des durch die `root`-Option angegebenen Elements sichtbar sind, der Rückruf aufgerufen wird.

#### Optionen des Intersection Observer

Das `options`-Objekt, das an den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, erlaubt Ihnen, die Umstände zu steuern, unter denen der Rückruf des Beobachters aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport für das Überprüfen der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahre des Ziels sein. Standardmäßig ist dies der Browser-Viewport, wenn nicht angegeben oder wenn `null`.
- `rootMargin`
  - : Rand um den Root. Ein String mit ein bis vier Werten, ähnlich wie die CSS-Eigenschaft {{cssxref("margin")}}, z. B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur in Pixeln (`px`) oder Prozent (`%`) angegeben werden. Dieses Set von Werten dient dazu, jede Seite des Begrenzungsrahmens des Root-Elements vor der Berechnung von Überlappungen zu vergrößern oder zu verkleinern. Negative Werte verkleinern den Begrenzungsrahmen des Root-Elements und positive Werte vergrößern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "Scrollcontainer")}}, der dieselben Werte annimmt/den gleichen Standard wie `rootMargin` hat.
    Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Überlappungen berechnet werden.
    Positive Werte vergrößern das Clipping-Rechteck des Containers, sodass Ziele überlappen können, bevor sie sichtbar werden, während negative Werte das Clipping-Rechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Rückruf des Beobachters ausgeführt werden soll. Wenn Sie nur erkennen möchten, wenn die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie möchten, dass der Rückruf jedes Mal ausgeführt wird, wenn die Sichtbarkeit weitere 25% überschreitet, würden Sie das Array \[0, 0,25, 0,5, 0,75, 1] angeben. Der Standard ist 0 (was bedeutet, dass der Rückruf ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1.0 bedeutet, dass der Schwellenwert nicht als überschritten betrachtet wird, bis jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Beim Verfolgen der Zielsichtbarkeit ([trackVisibility](#trackvisibility) ist `true`), kann dies verwendet werden, um die minimale Verzögerung in Millisekunden zwischen Benachrichtigungen von diesem Beobachter festzulegen.
    Die Begrenzung der Benachrichtigungsrate ist wünschenswert, da die Sichtbarkeitsberechnung rechnerisch intensiv ist.
    Wenn die Sichtbarkeit verfolgt wird, wird der Wert für jeden Wert unter 100 auf 100 gesetzt, und Sie sollten den größten erträglichen Wert verwenden.
    Der Wert ist standardmäßig 0.
- `trackVisibility` {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob dieser `IntersectionObserver` Änderungen in der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Überlappungen, wenn das Zielelement in den Viewport des Root-Elements gescrollt wird.
    Wenn `true`, überprüft der Browser zusätzlich, dass das Ziel tatsächlich sichtbar ist und nicht von anderen Elementen verdeckt oder möglicherweise durch einen Filter, reduzierte Opazität oder eine Transformation versteckt oder verzerrt wurde.
    Der Wert ist standardmäßig `false`, da das Verfolgen der Sichtbarkeit rechnerisch intensiv ist.
    Wenn dies gesetzt ist, sollte auch ein [`delay`](#delay) gesetzt werden.

#### Rückrufe bei Überlappungsänderungen

Der an den Konstruktor `IntersectionObserver()` übergebene Rückruf erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Beobachter:

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

Die vom Rückruf empfangene Liste von Einträgen enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Ereignis des Schwellenwertüberschreitens — mehrere Einträge können gleichzeitig empfangen werden, sei es von mehreren Zielen oder von einem einzelnen Ziel, das mehrere Schwellenwerte in kurzer Zeit überschreitet. Die Einträge werden mit einer Warteschlange versendet, sodass sie nach der Zeit geordnet sein sollten, zu der sie generiert wurden, aber vorzugsweise sollten Sie [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel eines bestimmten Elements mit dem Root-Element überlappt, ob das Element als überlappend angesehen wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen speziellen Augenblick — wenn Sie Informationen benötigen, die eine Verfolgung über die Zeit erfordern, wie z.B. die Scrollrichtung und -geschwindigkeit, müssen Sie diese möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge merken.

Beachten Sie, dass Ihr Rückruf im Haupt-Thread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwändiges erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der untenstehende Code-Schnipsel zeigt einen Rückruf, der zählt, wie oft Elemente vom Nicht-Überlappen- in den Überlappen-Zustand übergehen, indem sie mindestens 75% erreichen. Bei einem Schwellenwert von 0.0 (Standard) wird der Rückruf ungefähr bei der Übergabe des booleschen Wertes [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Schnipsel prüft daher zunächst, dass der Übergang ein positiver ist, und bestimmt dann, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75% liegt, in welchem Fall es den Zähler erhöht.

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

#### Zielen auf ein Element, das beobachtet werden soll

Sobald Sie den Beobachter erstellt haben, müssen Sie ihm ein Ziel-Element geben, das beobachtet werden soll:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Rückruf aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachfahre des Root-Elements sein muss.

### Wie Überlappung berechnet wird

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck angesehen, das alle Teile des Elements umschließt. Auf ähnliche Weise, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Überlappungsrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements umschließt.

Es ist nützlich zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Überlappung beschreiben.

#### Der Überlappungsroot und der Root-Rand

Bevor wir die Überlappung eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist der **Überlappungsroot** oder das **Root-Element**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Root-Überlappungsrechteck_** ist das Rechteck, das für die Überprüfung gegen das oder die Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn der Überlappungsroot der implizite Root ist (das heißt, der oberste [`Document`](/de/docs/Web/API/Document)), ist das Root-Überlappungsrechteck das Rechteck des Viewports.
- Wenn der Überlappungsroot einen Überlauf-Clip hat, ist das Root-Überlappungsrechteck der Inhaltsbereich des Root-Elements.
- Andernfalls ist das Root-Überlappungsrechteck das Begrenzungsklientenrechteck des Überlappungsroots (wie es durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben wird).

Das Root-Überlappungsrechteck kann weiter durch das Festlegen des **Root-Randes**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angepasst werden. Die Werte in `rootMargin` definieren Offsets, die zu jeder Seite des Begrenzungsrahmens des Überlappungsroots hinzugefügt werden, um die endgültigen Überlappungsroot-Grenzen zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) offengelegt werden, wenn der Rückruf ausgeführt wird). Positive Werte vergrößern den Rahmen, während negative Werte ihn verkleinern. Jeder Offsetwert kann nur in Pixeln (px) oder in Prozent (%) ausgedrückt werden.

Die Wirkung des Vergrößerns des Rahmens mit dem Root-Rand besteht darin, dass Überlaufziele mit dem Root überlappen können, bevor sie sichtbar werden.
Dies kann verwendet werden, um beispielsweise das Laden von Bildern kurz bevor sie in Sicht kommen zu starten, anstatt zu dem Zeitpunkt, an dem sie sichtbar werden.

Im untenstehenden Beispiel haben wir ein scrollbares Feld und ein Element, das zunächst nicht sichtbar ist.
Sie können den rechten Rand des Roots anpassen und sehen, dass:

- Wenn der Rand positiv ist, wird das rote Element als mit dem Root überlappend betrachtet, selbst wenn es nicht sichtbar ist, da es mit dem Randbereich des Roots überlappt.
- Wenn der Rand negativ ist, wird das rote Element, selbst wenn es zu sehen beginnt, noch nicht als mit dem Root überlappend betrachtet, weil der Begrenzungsrahmen des Roots verkleinert wird.

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

{{EmbedLiveSample("the intersection root and root margin", "", 200)}}

#### Der Überlappungsroot und Scroll-Rand

Betrachten Sie den Fall, in dem Sie ein Root-Element haben, das geschachtelte {{Glossary("scroll_container", "Scrollcontainer")}} enthält, und Sie möchten Überlappungen mit einem Ziel innerhalb eines dieser scrollbaren Container beobachten.
Überlappungen mit dem Zielelement beginnen standardmäßig beobachtbar zu werden, wenn das Ziel innerhalb des Bereichs sichtbar wird, der durch den Root definiert ist;
mit anderen Worten, wenn der Container in den Root gescrollt und das Ziel in das Clipping-Rechteck seines Containers gescrollt wird.

Sie können einen Scroll-Rand verwenden, um die Beobachtung von Überlappungen zu starten, bevor oder nachdem das Ziel innerhalb seines Scrollcontainers sichtbar wird.
Der Rand wird zu allen geschachtelten Scrollcontainern im Root hinzugefügt, einschließlich des Root-Elements, wenn es sich ebenfalls um einen Scrollcontainer handelt, und hat den Effekt, die für die Berechnung von Überlappungen verwendete Clipping-Region entweder zu vergrößern (positive Ränder) oder zu verkleinern (negative Ränder).

> [!NOTE]
> Sie könnten einen Intersection Observer auf jedem Scrollcontainer erstellen, für den Sie einen Scroll-Rand wünschen, und die Root-Rand-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen.
> Die Verwendung eines Scroll-Randes ist ergonomischer, da Sie in den meisten Fällen nur einen Intersection Observer für alle verschachtelten Ziele benötigen.

Im untenstehenden Beispiel haben wir ein scrollbares Feld und ein Bildkarussell, das zunächst nicht sichtbar ist.
Ein Beobachter auf dem Root-Element beobachtet die Ziele der Bildelemente im Karussell.
Wenn ein Bildelement beginnt, mit dem Root-Element zu überlappen, wird das Bild geladen, die Überlappung wird protokolliert und der Beobachter wird entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen.
Die sichtbaren Bilder sollten sofort geladen werden.
Wenn Sie das Karussell scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nach dem Zurücksetzen des Beispiels können Sie die bereitgestellte Steuerung verwenden, um den Prozentsatz des Scroll-Randes zu ändern.
Wenn Sie einen positiven Wert wie 20% festlegen, wird das Clip-Rechteck des Scrollcontainers um 20% vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in den Viewport kommen.
Ebenso bedeutet ein negativer Wert, dass die Überlappung erkannt wird, sobald die Bilder bereits sichtbar sind.

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

{{EmbedLiveSample("The intersection root and scroll margin","100%","500px")}}

#### Schwellenwerte

Anstatt jede winzige Änderung darin zu melden, wie sichtbar ein Zielelement ist, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Beobachter erstellen, können Sie eine oder mehrere numerische Werte angeben, die die Sichtbarkeitsprozentsätze des Zielelements darstellen. Die API meldet dann nur Sichtbarkeitsänderungen, die diese Schwellenwerte überschreiten.

Zum Beispiel, wenn Sie jedes Mal informiert werden möchten, wenn die Sichtbarkeit eines Ziels den 25%-Punkt in der einen oder anderen Richtung überschreitet oder unterschreitet, würden Sie das Array \[0, 0,25, 0,5, 0,75, 1] für die Liste der Schwellenwerte bei der Erstellung des Beobachters angeben.

Wenn der Rückruf aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Grad der Überlappung mit dem Root sich so verändert hat, dass die freiliegende Menge einen der Schwellenwerte in der einen oder anderen Richtung überschreitet.

Sie können sehen, ob das Ziel _derzeit_ den Root überlappt, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags betrachten; wenn ihr Wert `true` ist, überlappt das Ziel mindestens teilweise das Root-Element oder Dokument. Dies ermöglicht Ihnen zu bestimmen, ob der Eintrag einen Übergang von überlappenden zu nicht überlappenden Zustand darstellt oder einen Übergang von nicht überlappenden zu überlappenden Zuständen.

Beachten Sie, dass es möglich ist, ein Überlappungsrechteck mit null Fläche zu haben, was passieren kann, wenn die Überlappung genau entlang der Grenze zwischen den beiden stattfindet oder der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, in dem das Ziel und der Root eine gemeinsame Grenzlinie haben, wird nicht als ausreichend betrachtet, um in einen überlappenden Zustand überzugehen.

Um ein Gefühl für die Arbeitsweise von Schwellenwerten zu bekommen, versuchen Sie, das untenstehende Feld herum zu scrollen. Jedes farbige Feld darin zeigt den Prozentsatz seiner Sichtbarkeit in allen vier Ecken an, damit Sie diese Anteile über die Zeit hinweg sehen können, während Sie den Container scrollen. Jedes Feld hat eine andere Reihe von Schwellenwerten:

- Das erste Feld hat einen Schwellenwert für jeden Sichtbarkeitsprozentpunkt; das heißt, das Array von [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Feld hat einen einzigen Schwellenwert, bei 50%.
- Das dritte Feld hat Schwellenwerte bei jeweils 10% Sichtbarkeit (0%, 10%, 20%, usw.).
- Das letzte Feld hat Schwellenwerte alle 25%.

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

{{EmbedLiveSample("Thresholds", 500, 500)}}

#### Verfolgen von Sichtbarkeit und Verzögerung

Standardmäßig bietet der Beobachter Benachrichtigungen, wenn das Zielelement in den Viewport des Root-Elements gescrollt wird.
Während dies in vielen Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Überlappungen nicht gemeldet werden, wenn das Ziel "visuell beeinträchtigt" wurde.
Zum Beispiel, wenn Analysen oder Anzeigenimpressionen gemessen werden, ist es wichtig, dass Zielelemente nicht versteckt oder verzerrt sind, ganz oder teilweise.

Die Einstellung `trackVisibility` weist den Beobachter an, nur Überlappungen für Ziele zu melden, die der Browser nicht als visuell beeinträchtigt betrachtet, beispielsweise durch Änderung der Opazität oder Anwendung eines Filters oder einer Transformation.
Der Algorithmus ist konservativ und kann Elemente weglassen, die technisch sichtbar sind, wie solche mit nur einer leichten Opazitätsreduktion.

Die Sichtbarkeitsberechnung ist rechnerisch teuer und sollte nur bei Bedarf verwendet werden.
Beim Verfolgen der Sichtbarkeit sollte auch eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um die minimale Meldeperiode zu begrenzen.
Die Empfehlung ist, die Verzögerung auf den größten erträglichen Wert zu setzen (die Mindestverzögerung beim Verfolgen der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Überlappungsrechteck

Der Browser berechnet das endgültige Überlappungsrechteck folgendermaßen; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu erfassen, wann genau Überlappungen auftreten werden.

1. Das Begrenzungsrechteck des Zielelements (das heißt, das kleinste Rechteck, das die Begrenzungsrahmen aller Komponenten, die das Element ausmachen, vollständig umschließt) wird durch Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) beim Ziel erhalten.
   Dies ist das größte, das das Überlappungsrechteck sein darf. Die verbleibenden Schritte werden alle nicht überlappenden Teile entfernen.
2. Beginnend am unmittelbaren Elternelement des Ziels und nach außen fortschreitend wird das Clipping (falls vorhanden) jedes beinhaltenden Blocks auf das Überlappungsrechteck angewandt.
   Das Clipping eines Blocks wird basierend auf der Überlappung der beiden Blocks und dem Clippingmodus (falls vorhanden) bestimmt, der durch die `overflow`-Eigenschaft {{cssxref("overflow")}} spezifiziert ist. Das Setzen von `overflow` auf einen anderen Wert als `visible` führt zu Clipping.
3. Wenn eines der beinhaltenden Elemente der Root eines geschachtelten Browsing-Kontexts ist (wie das Dokument, das in einem `<iframe>` enthalten ist), wird das Überlappungsrechteck auf den Viewport des beinhaltenden Kontexts gec

lipped, und die Rekursion nach oben durch die Container geht mit dem Container fort. Wenn also der obere Bereich eines `<iframe>` erreicht wird, wird das Überlappungsrechteck auf den Viewport des Rahmens gecropped, dann ist das übergeordnete Element des Rahmens der nächste Block, der rekursiv zum Überlappungsroot geführt wird.

4. Wenn die Rekursion nach oben den Überlappungsroot erreicht, wird das resultierende Rechteck in den Koordinatenraum des Überlappungsroots abgebildet.
5. Das resultierende Rechteck wird dann durch das Überschneiden mit dem [Überlappungsroot-Rechteck](#der_überlappungsroot_und_der_root-rand) aktualisiert.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des `document` des Ziels gemappt.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Beobachters, der eine beliebige Anzahl von Zielelementen für dieselbe Überlappungskonfiguration beobachten kann. Jeder Beobachter kann asynchron Änderungen in der Überlappung zwischen einem oder mehreren Zielelementen und einem gemeinsamen Vorfahren-Element oder mit ihrem obersten [`Document`](/de/docs/Web/API/Document)'s {{Glossary("viewport", "Viewport")}} beobachten. Das Vorfahren-Element oder der Viewport wird als **Root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Überlappung zwischen dem Zielelement und seinem Root-Container zu einem bestimmten Übergangszeitpunkt. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Rückruf oder durch Aufruf von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel lässt ein Zielelement seine Farbe und Transparenz ändern, während es mehr oder weniger sichtbar wird. Unter [Timing von Elementen zur Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie lange eine Gruppe von Elementen (wie Anzeigen) für den Nutzer sichtbar ist und wie Sie auf diese Informationen reagieren, indem Sie Statistiken aufzeichnen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem Hauptelement, das die Box ist, die wir gezielt anvisieren (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht von großer Bedeutung; es legt das Element fest und bestimmt, dass die Eigenschaften {{cssxref("background-color")}} und {{cssxref("border")}} an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu beeinflussen, wenn es mehr oder weniger verdeckt wird.

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

Schließlich werfen wir einen Blick auf den JavaScript-Code, der die Intersection Observer API verwendet, um Dinge geschehen zu lassen.

#### Einrichtung

Zuerst müssen wir einige Variablen vorbereiten und den Beobachter installieren.

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
  - : Eine Konstante, die angibt, wie viele Schwellen wir zwischen einem Sichtbarkeitsverhältnis von 0.0 und 1.0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um das Sichtbarkeitsverhältnis zu speichern, das beim letzten Überschreiten eines Schwellenwerts vorlag; dadurch können wir herausfinden, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich das Element nicht nur in der Farbe ändert, sondern auch zunehmend opak wird, je weniger verdeckt es wird.
- `decreasingColor`
  - : Ähnlich definiert dieser String eine Farbe, die wir anwenden werden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um das Lauschen auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu beginnen; sobald die Seite vollständig geladen ist, holen wir uns eine Referenz zum Element mit der ID `"box"` mittels [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die `createObserver()`-Methode auf, die wir in einem Moment erstellen werden, um den Bau und die Installation des Intersection Observers zu behandeln.

#### Erstellen des Intersection Observer

Die `createObserver()`-Methode wird nach Abschluss des Seitenladevorgangs aufgerufen, um tatsächlich den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und den Prozess der Beobachtung des Zielelements zu starten.

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

Dies beginnt mit dem Einrichten eines `options`-Objekts, das die Einstellungen für den Beobachter enthält. Wir möchten Änderungen der Sichtbarkeit des Zielelements relativ zum Viewport des Dokuments beobachten, also ist `root` `null`. Wir benötigen keinen Rand, also wird der Rand-Offset, `rootMargin`, als "0px" angegeben. Dies führt dazu, dass der Beobachter Änderungen in der Überlappung zwischen den Begrenzungen des Zielelements und denen des Viewports beobachtet, ohne zusätzliche (oder abgezogene) Fläche.

Die Liste der Schwellenwerte des Sichtbarkeitsverhältnisses, `threshold`, wird von der Funktion `buildThresholdList()` konstruktioniert. Die Schwellenwertliste wird programmatisch in diesem Beispiel aufgebaut, da es viele davon gibt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Beobachter, rufen den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor auf und spezifizieren eine Funktion, die aufgerufen wird, wenn die Überlappung einen unserer Schwellenwerte überschreitet, `handleIntersect()`, und unseren Satz von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf den zurückgegebenen Beobachter auf und übergeben ihm das gewünschte Zielelement.

Wir könnten uns entscheiden, mehrere Elemente auf Sichtbarkeitsüberlappungsänderungen im Hinblick auf den Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir das tun wollten.

#### Erstellen des Arrays der Schwellenwertverhältnisse

Die Funktion `buildThresholdList()`, die die Liste der Schwellenwerte aufbaut, sieht so aus:

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

Dies baut das Array von Schwellenwerten auf—jede davon ist ein Verhältnis zwischen 0.0 und 1.0, indem der Wert `i/numSteps` dem Array `thresholds` für jede ganze Zahl `i` zwischen 1 und `numSteps` hinzugefügt wird. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis, unter Berücksichtigung des Standardwerts von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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
        <td>0.05</td>
        <th>11</th>
        <td>0.6</td>
      </tr>
      <tr>
        <th>1</th>
        <td>0.1</td>
        <th>12</th>
        <td>0.65</td>
      </tr>
      <tr>
        <th>2</th>
        <td>0.15</td>
        <th>13</th>
        <td>0.7</td>
      </tr>
      <tr>
        <th>3</th>
        <td>0.2</td>
        <th>14</th>
        <td>0.75</td>
      </tr>
      <tr>
        <th>4</th>
        <td>0.25</td>
        <th>15</th>
        <td>0.8</td>
      </tr>
      <tr>
        <th>5</th>
        <td>0.3</td>
        <th>16</th>
        <td>0.85</td>
      </tr>
      <tr>
        <th>6</th>
        <td>0.35</td>
        <th>17</th>
        <td>0.9</td>
      </tr>
      <tr>
        <th>7</th>
        <td>0.4</td>
        <th>18</th>
        <td>0.95</td>
      </tr>
      <tr>
        <th>8</th>
        <td>0.45</td>
        <th>19</th>
        <td>1</td>
      </tr>
      <tr>
        <th>9</th>
        <td>0.5</td>
        <th>20</th>
        <td>0</td>
      </tr>
      <tr>
        <th>10</th>
        <td>0.55</td>
      </tr>
    </tbody>
</table>

Wir könnten natürlich das Array von Schwellenwerten fest in unseren Code eincodieren und oft ist das, was Sie letztendlich tun. Aber dieses Beispiel lässt Spielraum für die Hinzufügung von Konfigurationssteuerelementen, um die Granularität anzupassen, beispielsweise.

#### Umgang mit Überlappungsänderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall das mit der ID `"box"`) sichtbar oder verdeckt geworden ist, sodass sein Sichtbarkeitsverhältnis einen unserer Schwellenwerte überschreitet, ruft er unsere Handler-Funktion, `handleIntersect()`, auf:

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

Für jede [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` prüfen wir, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags nach oben geht; wenn es das ist, setzen wir die `background-color` des Ziels auf den String in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzt das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur wird die Farbe geändert, sondern auch die Transparenz des Zielelements ändert sich; wenn das Überlappungsverhältnis sinkt, sinkt auch der Alpha-Wert der Hintergrundfarbe, was zu einem Element führt, das transparenter wird.

Ähnlich verwenden wir, wenn das `intersectionRatio` sinkt, den String `decreasingColor` und ersetzen das Wort "ratio" darin durch das `intersectionRatio`, bevor wir die `background-color` des Zielelements setzen.

Schließlich, um zu verfolgen, ob das Überlappungsverhältnis steigt oder sinkt, merken wir uns das aktuelle Verhältnis in der Variablen `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt. Scrollen Sie diese Seite nach oben und unten und beachten Sie, wie sich das Erscheinungsbild der Box ändert, während Sie dies tun.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Es gibt ein noch umfangreicheres Beispiel auf [Timing von Elementen zur Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing von Elementen zur Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
