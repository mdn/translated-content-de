---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Schnittmenge eines Zielelements mit einem übergeordneten Element oder mit dem {{Glossary("viewport", "Viewport")}} des top-level Dokuments asynchron zu beobachten.

## Übersicht

Historisch gesehen war das Erkennen der Sichtbarkeit eines Elements oder der relativen Sichtbarkeit zweier Elemente zueinander eine schwierige Aufgabe, für die Lösungen unzuverlässig waren und die dazu neigten, den Browser und die vom Benutzer aufgerufenen Webseiten zu verlangsamen. Mit der Reifung des Webs ist der Bedarf an dieser Art von Informationen gewachsen. Schnittstelleninformationen sind aus vielen Gründen erforderlich, wie z.B.:

- Lazy-Loading von Bildern oder anderen Inhalten beim Scrollen der Seite.
- Implementierung von "unendlichen Scrollen" auf Websites, bei denen immer mehr Inhalte geladen und gerendert werden, während man scrollt, damit der Benutzer keine Seiten umblättern muss.
- Bericht über die Sichtbarkeit von Werbeanzeigen zur Berechnung von Werbeeinnahmen.
- Entscheidung, ob Aufgaben oder Animationsprozesse ausgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird.

Die Implementierung von Schnittstellenerkennung in der Vergangenheit umfasste Ereignishandler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufrufen, um die erforderlichen Informationen für jedes betroffene Element zu sammeln. Da all dieser Code im Hauptthread ausgeführt wird, kann selbst einer von ihnen Leistungsprobleme verursachen. Wenn eine Seite mit diesen Tests geladen wird, kann es richtig unschön werden.

Stellen Sie sich eine Webseite vor, die unendliches Scrollen verwendet. Sie verwendet eine von einem Anbieter bereitgestellte Bibliothek, um die periodisch auf der Seite platzierten Anzeigen zu verwalten, hat hier und da animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsfelder und dergleichen zeichnet. Jede dieser Routinen zur Erkennung von Schnittstellen läuft im Hauptthread. Der Autor der Webseite merkt möglicherweise nicht einmal, dass dies passiert, da er möglicherweise nur sehr wenig über die Funktionsweise der beiden verwendeten Bibliotheken weiß. Beim Scrollen auf der Seite werden diese Routinen zur Erkennung von Schnittstellen ständig während des Gestenskriptcodes aufgerufen, was zu einer Erfahrung führt, die dazu führt, dass der Benutzer frustriert ist mit dem Browser, der Webseite und seinem Computer.

Die Intersection Observer API ermöglicht es dem Code, eine Rückruffunktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element eine Schnittmenge mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}} betritt oder verlässt oder wenn die Schnittmenge zwischen zwei Elementen um einen angegebenen Betrag ändert. Auf diese Weise müssen Websites nichts mehr im Hauptthread tun, um auf solche Schnittstellenelemente zu achten, und der Browser ist frei, die Verwaltung von Schnittstellen nach eigenem Ermessen zu optimieren.

Eine Sache, die die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl der Pixel auslösen, die sich überlappen, oder speziell darauf, welche es sind. Sie löst nur den allgemeinen Anwendungsfall "Wenn sie sich irgendwo um _N_% überschneiden, muss ich etwas tun."

## Konzepte und Nutzung

Die Intersection Observer API ermöglicht Ihnen, einen Rückruf zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Umstände eintritt:

- Ein **Ziel**-Element überschneidet sich entweder mit dem Viewport des Geräts oder einem bestimmten Element. Dieses bestimmte Element wird für die Zwecke der Intersection Observer API als **Root-Element** oder **Root** bezeichnet.
- Das erste Mal, wenn der Beobachter ursprünglich gebeten wird, ein Ziellement zu überwachen.

In der Regel möchten Sie Änderungen der Schnittmenge in Bezug auf den nächstgelegenen scrollbaren Vorfahren des Zielelements oder, falls das Zielelement kein Nachkomme eines scrollbaren Elements ist, den Viewport des Geräts beobachten. Um die Schnittmenge relativ zum Viewport des Geräts zu beobachten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung über die Optionen des Intersection Observer.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, arbeitet die API auf die gleiche Weise, wobei sie eine von Ihnen bereitgestellte Rückruffunktion ausführt, wann immer sich die Sichtbarkeit des Zielelements ändert, sodass es gewünschte Mengen an Schnittmengen mit dem Root überschreitet.

Das Maß an Schnittmenge zwischen dem Zielelement und seinem Wurzel ist das **Intersection-Ratio**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, das als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Rückruffunktion übergeben, die jedes Mal ausgeführt wird, wenn ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1,0 bedeutet, dass, wenn 100% des Ziels innerhalb des durch die `root`-Option angegebenen Elements sichtbar sind, der Rückruf aufgerufen wird.

#### Optionen des Intersection Observers

Das `options`-Objekt, das in den Konstruktor von [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Umstände zu kontrollieren, unter denen der Rückruf des Beobachters aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport für die Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahre des Ziels sein. Standardmäßig ist dies der Viewport des Browsers, wenn nicht angegeben oder `null`.
- `rootMargin`
  - : Rand um den Root. Ein String aus ein bis vier Werten ähnlich der CSS-Eigenschaft {{cssxref("margin")}}, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur [absolute Längen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#absolute_length_units) oder Prozentsätze sein. Dieses Set von Werten dient dazu, jede Seite des Begrenzungsrahmens des Root-Elements vor dem Berechnen von Schnittpunkten zu vergrößern oder zu verkleinern. Negative Werte verkleinern den Begrenzungsrahmen des Root-Elements und positive Werte vergrößern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "Scroll-Container")}}, die dieselben Werte aufweisen/den gleichen Standard wie `rootMargin`. Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Schnittpunkte berechnet werden. Positive Werte vergrößern das Clipping-Rechteck des Containers, wodurch Ziele verschachtelt werden können, bevor sie sichtbar werden, während negative Werte das Clipping-Rechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Rückruf des Beobachters ausgeführt werden soll. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn der Rückruf jedes Mal ausgeführt werden soll, wenn die Sichtbarkeit weitere 25% überschreitet, würden Sie das Array \[0, 0,25, 0,5, 0,75, 1] angeben. Der Standardwert ist 0 (was bedeutet, dass der Rückruf ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1.0 bedeutet, dass der Schwellenwert nicht als überschritten gilt, bis jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Wenn Sie die Sichtbarkeit des Ziels verfolgen ([trackVisibility](#trackvisibility) ist `true`), kann dies verwendet werden, um die Mindestverzögerung in Millisekunden zwischen den Benachrichtigungen von diesem Beobachter festzulegen. Die Begrenzung der Benachrichtigungsrate ist wünschenswert, da die Sichtbarkeitsberechnung rechnerisch aufwendig ist. Wenn die Sichtbarkeit nachverfolgt wird, wird der Wert auf 100 gesetzt, wenn er unter 100 liegt, und Sie sollten den maximal tolerierbaren Wert verwenden. Der Standardwert ist 0.
- `trackVisibility` {{experimental_inline}}
  - : Ein Boolean, der angibt, ob dieser `IntersectionObserver` Änderungen an der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Schnittflächen, wenn das Zielelement in den Viewport des Root-Elements scrollt. Wenn `true`, überprüft der Browser ausserdem, ob das Ziel tatsächlich sichtbar ist und nicht von anderen Elementen verdeckt oder möglicherweise durch einen Filter, reduzierte Deckkraft oder eine Transformation verändert oder verborgen wurde. Der Standardwert ist `false`, da das Verfolgen der Sichtbarkeit rechnerisch aufwendig ist. Wenn dies eingestellt ist, sollte auch eine [`delay`](#delay) festgelegt werden.

#### Rückrufe bei Schnittstellenänderungen

Der Rückruf, der an den Konstruktor von `IntersectionObserver()` übergeben wird, erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Beobachter:

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

Die Liste der Einträge, die vom Rückruf erhalten werden, enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Ereignis, bei dem ein Schwellenwert überschritten wird – es können mehrere Einträge gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzelnen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden mit einer Warteschlange versendet, sodass sie nach der Zeit, zu der sie generiert wurden, geordnet sein sollten, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Root-Element überschneidet, ob das Element als überschneidend angesehen wird oder nicht, usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment – wenn Sie Informationen benötigen, die eine zeitliche Verfolgung erfordern, wie z.B. die Scroll-Richtung und -Geschwindigkeit, müssen Sie dies möglicherweise selbst berechnen, indem Sie vorherige Einträge speichern.

Bitte beachten Sie, dass Ihr Rückruf im Hauptthread ausgeführt wird. Es sollte so schnell wie möglich durchgeführt werden; wenn etwas Zeitaufwendiges gemacht werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der unten gezeigte Codeausschnitt zeigt einen Rückruf, der einen Zähler hält, wie oft Elemente vom nicht überschneidenden Root zum Überschneiden von mindestens 75% übergehen. Bei einem Schwellenwert von 0.0 (Standard) wird der Rückruf etwa beim Übergang des booleschen Wertes von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Ausschnitt überprüft somit zuerst, dass der Übergang positiv ist, und ermittelt dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75% liegt, in welchem Fall er den Zähler erhöht.

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

#### Zielauswahl eines zu beobachtenden Elements

Sobald Sie den Beobachter erstellt haben, müssen Sie ihm ein Ziel-Element zuweisen, das überwacht wird:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Jedes Mal, wenn das Ziel einen für den `IntersectionObserver` festgelegten Schwellenwert erreicht, wird der Rückruf ausgeführt.

Beachten Sie auch, dass das Ziel bei Angabe der `root`-Option ein Nachkomme des Root-Elements sein muss.

### Wie die Schnittstelle berechnet wird

Alle Bereiche, die von der Intersection Observer API berücksichtigt werden, sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als die kleinste Rechteckfläche betrachtet, die alle Teile des Elements umschließt. Ebenso wird, wenn der sichtbare Teil eines Elements nicht rechteckig ist, das Schnittflächenrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, etwas darüber zu verstehen, wie die verschiedenen Eigenschaften, die von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellt werden, eine Schnittstelle beschreiben.

#### Der Wurzelschnitt und der Wurzelrand

Bevor wir die Schnittstelle eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist der **Wurzelabschluss**, oder **Wurzelelement**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null` um den Viewport des Dokuments als Container zu verwenden.

Das **_Wurzelschnittflächenrechteck_** ist das Rechteck, das verwendet wird, um gegen das Ziel oder die Ziele zu überprüfen. Dieses Rechteck wird wie folgt bestimmt:

- Wenn das Wurzelabschluss der implizite Wurzel (d.h. das oberste [`Document`](/de/docs/Web/API/Document)) ist, ist das Wurzelschnittflächenrechteck das Rechteck des Viewports.
- Wenn das Wurzelabschluss ein Überlauf-Clip hat, ist das Wurzelschnittflächenrechteck der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Wurzelschnittflächenrechteck das Begrenzungsrechteck des Wurzelschnittabstands (wie durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben).

Das Wurzelschnittflächenrechteck kann zusätzlich durch Einstellung des **Wurzelrands**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angepasst werden. Die Werte in `rootMargin` definieren die Offsets, die jeder Seite des Begrenzungsrahmens der Wurzel hinzugefügt werden, um die endgültigen Grenzen des Wurzelschnitts zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) bekannt gegeben werden, wenn der Rückruf ausgeführt wird). Positive Werte vergrößern den Kasten, während negative Werte ihn verkleinern.

Die Wirkung des Vergrößerns des Kastens unter Verwendung des Wurzelrandes besteht darin, dass Ziele die Schnittfläche mit dem Wurzel überschneiden können, bevor sie sichtbar werden. Dies kann beispielsweise verwendet werden, um Bilder zu laden, kurz bevor sie in den Sichtbereich gelangen, anstatt an dem Punkt, an dem sie sichtbar werden.

Im folgenden Beispiel haben wir einen scrollbaren Kasten und ein Element, das zunächst nicht sichtbar ist. Sie können den rechten Rand des Wurzels anpassen und sehen, dass:

- Wenn der Rand positiv ist, wird das rote Element als mit dem Wurzel überschneidend angesehen, auch wenn es nicht sichtbar ist, da es sich mit dem Randbereich des Wurzels überschneidet.
- Wenn der Rand negativ ist, wird das rote Element, wenn es sichtbar wird, immer noch nicht als überschneidend mit dem Wurzel angesehen, da das Begrenzungsfeld des Wurzels geschrumpft wurde.

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

#### Der Wurzelschnitt und der Scroll-Rand

Betrachten Sie den Fall, in dem Sie ein Wurzelelement haben, das verschachtelte {{Glossary("scroll_container", "Scroll-Container")}} enthält und Sie Schnittflächen mit einem Ziel innerhalb eines dieser scrollbaren Container beobachten möchten. Schnittflächen mit dem Zielelement werden standardmäßig beobachtbar, wenn das Ziel innerhalb des durch das Wurzel definierte Bereichs sichtbar ist; mit anderen Worten, wenn der Container im Wurzel in den Sichtbereich gescrollt wird und das Ziel im Clipping-Rechteck seines Containers sichtbar ist.

Sie können einen Scroll-Rand verwenden, um Schnittflächen zu beobachten, bevor oder nachdem das Ziel in seinem Scroll-Container sichtbar wird. Der Rand wird auf alle verschachtelten Scroll-Container im Wurzel angewendet, einschließlich des Wurzelelements, wenn es auch ein Scroll-Container ist, und hat die Wirkung, entweder das Clipping-Rechteck (positive Ränder) zu vergrößern oder (negative Ränder) zu verkleinern, das verwendet wird, um Schnittflächen zu berechnen.

> [!NOTE]
> Sie könnten einen Intersectionsbeobachter auf jedem Scroll-Container erstellen, für den Sie einen Scroll-Rand wünschen, und die Eigenschaft `rootMargin` verwenden, um einen ähnliche Effekt zu erzielen. Die Verwendung eines Scroll-Randes ist ergonomischer, da Sie in den meisten Fällen nur einen Intersectionsbeobachter für alle verschachtelten Ziele benötigen.

Im folgenden Beispiel haben wir einen scrollbaren Kasten und ein Bildkarussell, das zunächst nicht sichtbar ist. Ein Beobachter über das Wurzelelement beobachtet die Bildelementziele innerhalb des Karussells. Wenn ein Bildelement beginnt, mit dem Wurzelelement zu schneiden, wird das Bild geladen, die Schnittstelle wird protokolliert und der Beobachter wird entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen. Die sichtbaren Bilder sollten sofort geladen werden. Wenn Sie das Karussell scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nach dem Zurücksetzen des Beispiels können Sie die bereitgestellte Steuerung verwenden, um den Prozentsatz des Scroll-Randes zu ändern. Wenn Sie einen positiven Wert wie 20% einstellen, wird das Clipping-Rechteck des Scroll-Containers um 20% vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in den Sichtbereich gelangen. Ebenso bedeutet ein negativer Wert, dass die Schnittstelle erkannt wird, sobald Bilder sichtbar sind.

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

Anstatt jede unendlich kleine Änderung in der Sichtbarkeit eines Zielelements zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Beobachter erstellen, können Sie einen oder mehrere numerische Werte angeben, die Prozentangaben des Zielelements darstellen, die sichtbar sind. Dann meldet die API nur Änderungen der Sichtbarkeit, die diese Schwellen überschreiten.

Zum Beispiel, wenn Sie bei jeder Rückmeldung informiert werden möchten, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts durch jede 25%-Marke geht, würden Sie das Array \[0, 0,25, 0,5, 0,75, 1] als Liste der Schwellen angeben, wenn Sie den Beobachter erstellen.

Wenn der Rückruf aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Grad der Schnittfläche mit dem Wurzel sich so ändert, dass die exponierte Menge einen der Schwellenwerte in beide Richtungen überschreitet.

Sie können sehen, ob das Ziel _derzeit_ den Wurzel schneidet, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags überprüfen; wenn ihr Wert `true` ist, schneidet das Ziel mindestens teilweise das Wurzelelement oder Dokument. Dadurch können Sie feststellen, ob der Eintrag einen Übergang vom Überschneiden der Elemente zum Nicht-Überschneiden oder einen Übergang vom Nicht-Überschneiden zum Überschneiden darstellt.

Beachten Sie, dass es möglich ist, ein Nullschnittflächenrecht zu haben, was auftreten kann, wenn die Schnittfläche genau entlang der Grenze zwischen den beiden liegt oder der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, dass das Ziel und der Wurzel eine Grenzlinie teilen, wird nicht als ausreichend angesehen, um als Übergangsstatus in einen Schnittstate betrachtet zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie den Kasten unten herum zu scrollen. Jede farbige Kiste darin zeigt den Prozentsatz von sich selbst an, der in allen vier ihrer Ecken sichtbar ist, damit Sie diese Verhältnisse im Laufe der Zeit sehen können, wenn Sie den Container scrollen. Jede Box hat einen anderen Satz von Schwellenwerten:

- Die erste Box hat einen Schwellenwert für jeden Prozentsatz Sichtbarkeit; das heißt, das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds)-Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Die zweite Box hat einen einzigen Schwellenwert, bei 50%.
- Die dritte Box hat Schwellenwerte alle 10% Sichtbarkeit (0%, 10%, 20%, usw.).
- Die letzte Box hat Schwellenwerte alle 25%.

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

#### Sichtbarkeit und Verzögerung nachverfolgen

Standardmäßig bietet der Beobachter Benachrichtigungen an, wenn das Zielelement in den Viewport des Wurzelelements gescrollt wird. Während das in vielen Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Schnittstellen nicht gemeldet werden, wenn das Ziel "visuell beeinträchtigt" wurde. Beispielsweise ist es wichtig, dass Zielelemente nicht verdeckt oder verzerrt sind, ganz oder teilweise, wenn Analyse oder Anzeigeneindrücke gemessen werden.

Die Einstellung `trackVisibility` weist den Beobachter an, nur Schnittstellen für Ziele zu melden, die der Browser nicht als visuell beeinträchtigt ansieht, z.B. durch Ändern der Deckkraft, oder durch Anwenden eines Filters oder einer Transformation. Der Algorithmus ist konservativ und kann Elemente ausschließen, die technisch sichtbar sind, z.B. solche mit nur einer leichten Deckkraftverminderung.

Die Sichtbarkeitsberechnung ist rechenintensiv und sollte nur verwendet werden, wenn notwendig. Wenn die Sichtbarkeit nachverfolgt wird, sollte auch eine `delay`(/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um die Mindestberichtszeit zu begrenzen. Es wird empfohlen, dass Sie die Verzögerung auf den maximal tolerablen Wert setzen (die Mindestverzögerung bei der Verfolgung der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Schnittflächenrechteck

Der Browser berechnet das endgültige Schnittflächenrechteck wie folgt; dies wird alles für Sie gemacht, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu verstehen, wann Schnittstellen auftreten werden.

1. Das Begrenzungsrechteck des Zielelements (d.h. das kleinste Rechteck, das die Begrenzungsrahmen aller Komponenten, die das Element bilden, vollständig umschließt) wird durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf dem Ziel erhalten. Dies ist das größte, das das Schnittflächenrechteck sein darf. Die verbleibenden Schritte entfernen alle Teile, die keine Schnittmenge haben.
2. Beginnend beim unmittelbaren Elternblock des Ziels und sich nach außen bewegend, wird jede enthaltende Block-Clipping (falls vorhanden) auf das Schnittflächenrechteck angewendet. Das Clipping eines Blocks wird basierend auf der Schnittfläche der zwei Blöcke und dem Clipping-Modus (falls vorhanden) bestimmt, der durch die CSS-Eigenschaft {{cssxref("overflow")}} angegeben wird. Das Setzen von `overflow` auf irgendetwas anderes als `visible` bewirkt Clipping.
3. Wenn eines der enthaltenden Elemente die Wurzel eines verschachtelten Browsing-Kontexts ist (z.B. das im {{HTMLElement("iframe")}} enthaltene Dokument), wird das Schnittflächenrechteck auf den Viewport des enthaltenen Kontexts abgeschnitten, und die Rekursion nach oben durch die Container wird mit dem enthaltenen Block des Containers fortgesetzt. Wenn also das oberste Level eines `<iframe>` erreicht wird, wird das Schnittflächenrechteck auf den Rahmen-Viewport beschnitten, und das Elternelement des Rahmens ist der nächste Block, durch den die Rekursion nach oben zum Wurzelelemet geht.
4. Wenn die Rekursion nach oben den Wurzel erreicht, wird das resultierende Rechteck auf das Koordinatenraum des Wurzels abgebildet.
5. Das resultierende Rechteck wird dann durch Schnittfläche mit dem [Wurzelschnittplattenrechteck](#der_wurzelschnitt_und_der_wurzelrand) aktualisiert.
6. Dieses Rechteck wird schließlich auf den Koordinatenraum des Dokuments des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Beobachters, der eine beliebige Anzahl von Zielen für dieselbe Schnittfläche beobachten kann. Jeder Beobachter kann asynchron Änderungen in der Schnittfläche zwischen einem oder mehreren Zielelementen und einem gemeinsamen Vorfahrenelement oder deren Top-Level [`Document`](/de/docs/Web/API/Document)s {{Glossary("viewport", "Viewport")}} beobachten. Der Vorfahr oder der Viewport wird als **Wurzel** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittfläche zwischen dem Zielelement und seinem Wurzelcontainer zu einem bestimmten Übergangszeitpunkt. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Rückruf oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass sich ein Zielelement verfärbt und die Transparenz ändert, wenn es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), können Sie ein umfangreicheres Beispiel sehen, das zeigt, wie Sie die Zeit messen können, in der ein Satz von Elementen (wie Anzeigen) für den Benutzer sichtbar ist, und um auf diese Informationen zu reagieren, indem Sie Statistiken erfassen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit dem Haupt-Element, das wir anpeilen werden (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element an und stellt sicher, dass die {{cssxref("background-color")}} und {{cssxref("border")}} Attribute an CSS-Übergängen [/de/docs/Web/CSS/CSS_transitions] teilnehmen, die wir verwenden werden, um die Änderungen am Element zu beeinflussen, wenn es mehr oder weniger verdeckt wird.

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

Schließlich werfen wir einen Blick auf den JavaScript-Code, der die Intersection Observer API verwendet, um die Dinge in Gang zu bringen.

#### Vorbereitung

Zuerst müssen wir einige Variablen einrichten und den Beobachter installieren.

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

Die hier eingerichteten Konstanten und Variablen sind:

- `numSteps`
  - : Eine Konstante, die angibt, wie viele Schwellen wir zwischen einem Sichtbarkeitsverhältnis von 0,0 und 1,0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um zu verzeichnen, welches das Sichtbarkeitsverhältnis das letzte Mal war, als ein Schwellenwert überschritten wurde; dies ermöglicht es uns festzustellen, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis steigt. Das Wort "Ratio" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich das Element nicht nur verfärbt, sondern auch zunehmend opak wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ganz ähnlich, dies ist ein String, der eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um zu beginnen, dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu lauschen; sobald die Seite das Laden abgeschlossen hat, holen wir uns eine Referenz zum Element mit der ID `"box"` mit [`querySelector()`](/de/docs/Web/API/Document/querySelector), um dann die Methode `createObserver()` aufzurufen, die wir in einem Moment erstellen werden, um die Erstellung und Installation des Schnittstellenbeobachters zu verwalten.

#### Erstellen des Schnittstellenbeobachters

Die Methode `createObserver()` wird aufgerufen, sobald das Laden der Seite abgeschlossen ist, um das eigentliche Erstellen des neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu übernehmen und den Vorgang zu starten, das Zielelement zu beobachten.

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

Dies beginnt mit dem Einrichten eines `options`-Objekts, das die Einstellungen für den Beobachter enthält. Wir möchten Änderungen der Sichtbarkeit des Zielelements relativ zum Viewport des Dokuments beobachten, sodass `root` auf `null` gesetzt ist. Wir benötigen keinen Rand, sodass der Margenoffset, `rootMargin`, mit "0px" angegeben wird. Dies bewirkt, dass der Beobachter Änderungen in der Schnittmenge zwischen dem Begrenzungsrahmen des Zielelements und denen des Viewports beobachtet, ohne hinzugefügten (oder subtrahierten) Raum.

Die Liste der Sichtbarkeitsverhältnisschwellen, `threshold`, wird durch die Funktion `buildThresholdList()` konstruiert. Die Schwellenliste wird in diesem Beispiel programmatisch erstellt, da es viele davon gibt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Beobachter, indem wir den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) aufrufen, eine Funktion angeben, die bei Überschreiten eines unserer Schwellenwerte aufgerufen werden soll, `handleIntersect()`, und unseren Satz von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Beobachter auf und übergeben ihm das gewünschte Zielelement.

Wir könnten uns entscheiden, mehrere Elemente für Sichtbarkeitsveränderungen in Bezug auf den Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies möchten.

#### Aufbau des Schwellenwertverhältnissen-Arrays

Die Funktion `buildThresholdList()`, die die Schwellenwertliste erstellt, sieht wie folgt aus:

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

Dies erstellt das Array von Schwellenwerten – jeder von ihnen ist ein Verhältnis zwischen 0.0 und 1.0, indem es den Wert `i/numSteps` auf das `thresholds`-Array für jede ganze Zahl `i` zwischen 1 und `numSteps` schiebt. Es drückt auch 0, um diesen Wert einzuschließen. Das Ergebnis, angesichts des Standardwerts `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Wir könnten natürlich das Array von Schwellenwerten fest in unseren Code einfügen, und oft werden Sie das auch tun. Aber dieses Beispiel lässt Raum für das Hinzufügen von Konfigurationssteuerungen, um die Granularität anzupassen, beispielsweise.

#### Handhabung von Schnittflächenveränderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall das mit der ID `"box"`) so enthüllt oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis einen der Schwellenwerte in unserer Liste überschreitet, ruft es unsere Handlerfunktion `handleIntersect()` auf:

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

Für jeden [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries`, schauen wir nach, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn es das tut, setzen wir die {{cssxref("background-color")}} des Ziels auf den String in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzen das Wort "ratio" mit dem `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur ändert sich die Farbe, sondern auch der Transparenzwert des Zielelements ändert sich; wenn das Schnittverhältnis sinkt, sinkt auch der Alpha-Wert der Hintergrundfarbe, was zu einem Element führt, das durchsichtiger wird.

Ähnlich, wenn das `intersectionRatio` sinkt, verwenden wir den String `decreasingColor` und ersetzen das Wort "Ratio" darin mit dem `intersectionRatio`, bevor wir das Zielelement `background-color` setzen.

Schließlich, um zu verfolgen, ob das Schnittverhältnis steigt oder fällt, merken wir uns das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt. Scrollen Sie diese Seite nach oben und unten und bemerken Sie, wie sich das Erscheinungsbild der Box beim Scrollen ändert.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Ein noch umfangreicheres Beispiel finden Sie unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
