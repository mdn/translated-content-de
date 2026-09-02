---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 9f46f08d20b21498293cbf6b84f508103272ec6f
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Überlappung eines Zielelements mit einem Vorfahrelement oder mit dem Viewport eines obersten Dokuments asynchron zu beobachten.

## Überblick

Historisch gesehen war das Ermitteln der Sichtbarkeit eines Elements oder der relativen Sichtbarkeit zweier Elemente zueinander eine schwierige Aufgabe, für die Lösungen unzuverlässig waren und dazu neigten, den Browser und die Webseiten, auf die der Nutzer zugreift, zu verlangsamen. Mit der Reife des Webs ist der Bedarf an dieser Art von Informationen gewachsen. Informationen über die Überlappung werden aus vielen Gründen benötigt, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderem Inhalt beim Scrollen der Seite.
- Implementierung von "unendlichem Scrollen" auf Webseiten, bei denen immer mehr Inhalt geladen und gerendert wird, während Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationsprozesse basierend darauf ausgeführt werden sollen, ob der Nutzer das Ergebnis sehen wird oder nicht.

Früher erforderte die Implementierung der Überlappungserkennung das Hinzufügen von Event-Handlern und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufrufen, um die benötigten Informationen für jedes betroffene Element zu sammeln. Da dieser gesamte Code auf dem Hauptthread ausgeführt wird, kann sogar ein einziges Ereignis Leistungsprobleme verursachen. Wenn eine Webseite mit diesen Tests beladen ist, können die Dinge richtig unschön werden.

Betrachten Sie eine Webseite, die unendliches Scrollen verwendet. Sie verwendet eine von einem Anbieter bereitgestellte Bibliothek, um die auf der Seite periodisch platzierten Anzeigen zu verwalten, hat animierte Grafiken hier und da und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und Ähnliches zeichnet. Jede dieser Komponenten hat ihre eigenen Routinen zur Erkennung der Überlappung, die alle auf dem Hauptthread laufen. Der Autor der Website bemerkt möglicherweise nicht einmal, dass dies passiert, da er möglicherweise nur sehr wenig über die inneren Abläufe der beiden verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, feuern diese Routinen zur Erkennung der Überlappung ständig während des Scroll-Codes, was zu einer Erfahrung führt, die den Benutzer frustriert zurücklässt, sowohl mit dem Browser als auch mit der Webseite und seinem Computer.

Die Intersection Observer API ermöglicht es, eine Callback-Funktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element eine Überlappung mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) betritt oder verlässt, oder wenn sich die Überlappung zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites nichts mehr auf dem Hauptthread tun, um diese Art der Elementüberlappung zu beobachten, und der Browser kann die Verwaltung der Überlappungen optimieren, wie es ihm am besten erscheint.

Eine Sache, die die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl von Pixeln auszulösen, die sich überlappen, oder spezifisch basierend darauf, welche es sind. Sie löst nur den allgemeinen Anwendungsfall "Wenn sie sich irgendwo um _N_% überlappen, muss ich etwas tun" aus.

## Konzepte und Verwendung

Die Intersection Observer API ermöglicht es Ihnen, einen Callback zu konfigurieren, der aufgerufen wird, wenn einer dieser Umstände eintritt:

- Ein **Ziel**element überlappt entweder den Viewport des Geräts oder ein angegebenes Element. Dieses angegebene Element wird im Kontext der Intersection Observer API **Wurzelelement** oder **Root** genannt.
- Das erste Mal, wenn der Observer angewiesen wird, ein Zielelement zu beobachten.

Normalerweise möchten Sie Überlappungsänderungen in Bezug auf den nächsten scrollbaren Vorfahren des Zielelements beobachten oder, wenn das Zielelement kein Nachfahre eines scrollbaren Elements ist, den Viewport des Geräts verwenden. Um Überlappungen relativ zum Viewport des Geräts zu beobachten, geben Sie `null` für die Option `root` an. Lesen Sie weiter für eine detailliertere Erklärung der Optionen des Intersection Observers.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Wurzel verwenden, funktioniert die API auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Callback-Funktion ausführt, wann immer sich die Sichtbarkeit des Zielelements so ändert, dass es gewünschte Mengen an Überlappung mit der Wurzel kreuzt.

Der Grad der Überlappung zwischen dem Zielelement und seiner Wurzel ist das **Überlappungsverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, das als Wert zwischen 0.0 und 1.0 sichtbar ist.

### Erstellen eines Intersection Observer

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die ausgeführt wird, wenn ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1.0 bedeutet, dass der Callback ausgelöst wird, wenn 100 % des Ziels innerhalb des Elements sichtbar sind, das durch die `root` Option angegeben ist.

#### Optionen des Intersection Observers

Das übergeordnete Objekt, das an den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Umstände zu kontrollieren, unter denen der Callback des Observers ausgelöst wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport zur Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahre des Ziels sein. Standardmäßig wird der Browser-Viewport verwendet, wenn nicht angegeben oder wenn `null`.
- `rootMargin`
  - : Rand um die Wurzel. Ein String mit einem bis vier Werten ähnlich wie die CSS-Eigenschaft {{cssxref("margin")}}, z. B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur in Pixeln (`px`) oder Prozent (`%`) angegeben werden. Dieses Set von Werten dient dazu, jede Seite des Begrenzungsrahmens des Wurzelelements vor der Berechnung der Überlappungen zu vergrößern oder zu verkleinern. Negative Werte verkleinern den Begrenzungsrahmen des Wurzelelements und positive Werte erweitern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um die verschachtelten {{Glossary("scroll_container", "scrolling containers")}}, der die gleichen Werte annimmt/die gleichen Standardwerte hat wie `rootMargin`.
    Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Überlappungen berechnet werden.
    Positive Werte vergrößern das Clipping-Rechteck des Containers, sodass Ziele überlappen können, bevor sie sichtbar werden, während negative Werte das Clipping-Rechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Observers ausgeführt werden sollte. Wenn Sie nur feststellen möchten, wann die Sichtbarkeit die Grenze von 50 % überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie möchten, dass der Callback jedes Mal ausgeführt wird, wenn die Sichtbarkeit um weitere 25 % überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] spezifizieren. Der Standardwert ist 0 (was bedeutet, dass der Callback ausgeführt wird, sobald das Zielelement die Grenze der Wurzel überlappt oder berührt, auch wenn noch keine Pixel sichtbar sind). Ein Wert von 1.0 bedeutet, dass der Schwellenwert nicht als überschritten angesehen wird, bis jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Wenn Sie die Sichtbarkeit eines Ziels verfolgen ([trackVisibility](#trackvisibility) ist `true`), kann dies verwendet werden, um die Mindestverzögerung in Millisekunden zwischen Benachrichtigungen von diesem Observer festzulegen.
    Die Begrenzung der Benachrichtigungsrate ist wünschenswert, da die Berechnung der Sichtbarkeit rechenintensiv ist.
    Wenn Sie die Sichtbarkeit verfolgen, wird der Wert auf 100 festgelegt, wenn ein Wert unter 100 liegt, und Sie sollten den größten erträglichen Wert verwenden.
    Der Standardwert ist 0.
- `trackVisibility` {{experimental_inline}}
  - : Ein boolesches Wert, das angibt, ob dieser `IntersectionObserver` Änderungen in der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Überlappungen, wenn das Zielelement in den Viewport des Wurzelelements scrollt.
    Wenn `true`, überprüft der Browser zusätzlich, ob das Ziel tatsächlich sichtbar ist, und nicht durch andere Elemente verdeckt oder möglicherweise durch ein Filter, reduzierte Deckkraft oder eine Transformation verzerrt oder verborgen wurde.
    Der Standardwert ist `false`, da das Verfolgen der Sichtbarkeit rechenintensiv ist.
    Wenn dies eingestellt ist, sollte auch eine [`delay`](#delay) festgelegt werden.

#### Intersection Change Callbacks

Der Callback, der dem Konstruktor `IntersectionObserver()` übergeben wird, erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekten und den Observer:

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

Die Liste der vom Callback empfangenen Einträge umfasst ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekt für jedes Ereignis beim Überschreiten eines Schwellenwerts – es können mehrere Einträge gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzigen Ziel, das mehrere Schwellenwerte in kurzer Zeit überschreitet. Die Einträge werden mit einer Warteschlange übermittelt, sodass sie nach dem Zeitpunkt, zu dem sie generiert wurden, geordnet sein sollten. Sie sollten jedoch vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel eines gegebenen Elements mit dem Wurzelelement überlappt, ob das Element als überlappend betrachtet wird oder nicht, usw. Der Eintrag enthält nur Informationen über diesen besonderen Moment – wenn Sie Informationen benötigen, die eine Verfolgung im Laufe der Zeit erfordern, wie die Scrollrichtung und -geschwindigkeit, müssen Sie diese möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge speichern.

Seien Sie sich bewusst, dass Ihr Callback auf dem Hauptthread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas zeitaufwändiges erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeausschnitt zeigt einen Callback, der einen Zähler führt, wie oft Elemente von einer Nicht-Überlappung mit der Wurzel zu einer Überlappung von mindestens 75% wechseln. Bei einem Schwellenwert von 0.0 (Standard) wird der Callback ungefähr bei der Übergabe des booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Ausschnitt überprüft daher zunächst, ob der Übergang ein positiver ist, und ermittelt dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75% liegt, in welchem Fall der Zähler erhöht wird.

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

#### Ein Element zum Beobachten festlegen

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Zielelement zum Beobachten geben:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Immer wenn das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Callback ausgelöst.

Beachten Sie auch, dass das Ziel ein Nachfahre des Wurzelelements sein muss, wenn Sie die `root` Option angegeben haben.

### Wie die Überlappung berechnet wird

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als belegt durch das kleinste Rechteck angesehen, das alle Teile des Elements einschließt. Auch wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Überlappungsrechteck des Elements als das kleinste Rechteck angesehen, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Überlappung beschreiben.

#### Das Überlappungselement und der Rand des Wurzelelements

Bevor wir die Überlappung eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist das **Überlappungselement** oder **Wurzelelement**. Dies kann entweder ein spezifisches Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Wurzelüberlappungsrechteck_** ist das Rechteck, das verwendet wird, um gegen das Ziel oder die Ziele zu prüfen. Dieses Rechteck wird folgendermaßen bestimmt:

- Wenn das Überlappungselement die implizite Wurzel ist (das ist das oberste [`Document`](/de/docs/Web/API/Document)), ist das Wurzelüberlappungsrechteck das Rechteck des Viewports.
- Wenn das Überlappungselement einen Overflow-Clip hat, ist das Wurzelüberlappungsrechteck der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Wurzelüberlappungsrechteck das Begrenzungs-Client-Rechteck des Überlappungselements (wie es durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben wird).

Das Wurzelüberlappungsrechteck kann weiter angepasst werden, indem der **Wurzelrand**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) festgelegt wird. Die Werte in `rootMargin` definieren Offsets, die zu jeder Seite des Begrenzungsrahmens des Überlappungselements hinzugefügt werden, um die endgültigen Wurzelüberlappungsgrenzen zu erstellen (die bei der Ausführung des Callbacks in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) offengelegt werden). Positive Werte erweitern die Box, während negative Werte sie verkleinern. Jeder Offsetwert kann nur in Pixeln (px) oder als Prozentsatz (%) ausgedrückt werden.

Der Effekt der Erweiterung der Box mit dem Wurzelrand besteht darin, Ziele überlappen zu lassen, bevor sie sichtbar werden.
Dies kann z. B. verwendet werden, um das Laden von Bildern zu starten, kurz bevor sie in den Sichtbereich kommen, anstatt erst, wenn sie sichtbar werden.

Im untenstehenden Beispiel haben wir ein scrollbares Feld und ein Element, das anfangs nicht sichtbar ist.
Sie können den rechten Rand der Wurzel anpassen und sehen, dass:

- Wenn der Rand positiv ist, wird das rote Element als im Überlappungszustand mit der Wurzel angesehen, selbst wenn es nicht sichtbar ist, da es mit dem Randbereich der Wurzel überlappt.
- Wenn der Rand negativ ist, wird selbst wenn das rote Element beginnt, sichtbar zu werden, es immer noch nicht als im Überlappungszustand mit der Wurzel angesehen, da der Begrenzungsrahmen der Wurzel verkleinert wird.

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

{{EmbedLiveSample("das Überlappungselement und den Wurzelrand", "", 200)}}

#### Das Überlappungselement und der Scrollrand

Betrachten Sie den Fall, in dem Sie ein Wurzelelement haben, das verschachtelte {{Glossary("scroll_container", "Scroll-Container")}} enthält und Sie Überlappungen mit einem Ziel innerhalb eines dieser scrollbaren Container beobachten möchten.
Überlappungen mit dem Zielelement beginnen standardmäßig dann beobachtbar zu werden, wenn das Ziel innerhalb des vom Wurzel festgelegten Bereichs sichtbar ist;
mit anderen Worten, wenn der Container im Wurzelbereich in den Sichtbereich gescrollt wird und das Ziel innerhalb des Clipping-Rechtecks seines Containers gescrollt wird.

Sie können einen Scrollrand verwenden, um Überlappungen zu beobachten, bevor oder nachdem das Ziel innerhalb seines Scroll-Containers in den Sichtbereich gescrollt wird.
Der Rand wird allen verschachtelten Scroll-Containern im Wurzel hinzugefügt, einschließlich des Wurzelelements, wenn es ebenfalls ein Scroll-Container ist, und hat den Effekt, entweder den Clipping-Bereich (positive Ränder) zu vergrößern oder (negative Ränder) zu verkleinernd.

> [!NOTE]
> Sie könnten einen Intersection Observer auf jedem Scroll-Container erstellen, für den Sie einen Scroll-Rand wünschen, und die Root-Margin-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen.
> Die Verwendung eines Scrollrands ist ergonomischer, da Sie in den meisten Fällen nur einen Intersection Observer für alle verschachtelten Ziele haben können.

Im untenstehenden Beispiel haben wir ein scrollbares Feld und ein anfänglich nicht sichtbares Bild-Karussell.
Ein Observer auf dem Wurzelelement beobachtet die Bildelementziele innerhalb des Karussells.
Wenn ein Bildelement beginnt, mit dem Wurzelelement zu überlappen, wird das Bild geladen, die Überlappung protokolliert und der Observer entfernt.

Scrollen Sie herunter, um das Karussell anzuzeigen.
Die sichtbaren Bilder sollten sofort geladen werden.
Wenn Sie durch das Karussell scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nach dem Zurücksetzen des Beispiels können Sie die bereitgestellte Steuerung verwenden, um den Scrollrand-Prozentsatz zu ändern.
Wenn Sie einen positiven Wert wie 20% einstellen, wird das Clip-Rechteck des Scroll-Containers um 20% vergrößert und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie sichtbar werden.
Ähnlich bedeutet ein negativer Wert, dass die Überlappung erkannt wird, wenn Bilder bereits im Sichtbereich sind.

```html hidden
<button id="reset" type="button">Reset</button>
```

```html hidden
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
  background-color: #eeeeee; /* Placeholder background */
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

{{EmbedLiveSample("Das Überlappungselement und der Scrollrand","100%","500px")}}

#### Schwellenwerte

Anstatt jede unendlich kleine Änderung in der Sichtbarkeit eines Zielelements zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie eine oder mehrere numerische Werte angeben, die Prozentsätze des sichtbaren Zielelements darstellen. Dann berichtet die API nur Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Zum Beispiel, wenn Sie jedes Mal informiert werden möchten, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts durch jede 25% Markierung geht, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte bei der Erstellung des Observers angeben.

Wenn der Callback aufgerufen wird, empfängt er eine Liste von `IntersectionObserverEntry` Objekten, eines für jedes beobachtete Ziel, dessen Grad der Überlappung mit der Wurzel sich so verändert hat, dass die Menge, die freigelegt wird, einen der Schwellenwerte überschreitet, in beide Richtungen.

Sie können sehen, ob das Ziel _derzeit_ die Wurzel überlappt, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) Eigenschaft des Eintrags ansehen; wenn ihr Wert `true` ist, überlappt das Ziel mindestens teilweise das Wurzelelement oder das Dokument. Dies ermöglicht es Ihnen festzustellen, ob der Eintrag einen Übergang von der Überlappung der Elemente zu einer nicht mehr vorhandenen Überlappung oder einen Übergang von keiner Überlappung zur Überlappung darstellt.

Beachten Sie, dass es möglich ist, ein Rechteck ohne Überlappung zu haben, was passieren kann, wenn die Überlappung genau an der Grenze zwischen den beiden liegt oder die Fläche von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, bei dem Ziel und Wurzel eine Grenzlinie teilen, wird nicht als ausreichend betrachtet, um als Übergang in einen Überlappungszustand angesehen zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, das untenstehende Feld zu scrollen. Jede farbige Box darin zeigt den Prozentsatz ihrer selbst, die in allen vier Ecken sichtbar ist, an, sodass Sie diese Verhältnisse im Laufe der Zeit ändern können, während Sie den Container scrollen. Jede Box hat eine unterschiedliche Reihe von Schwellenwerten:

- Die erste Box hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt, das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Die zweite Box hat einen einzigen Schwellenwert bei der 50% Marke.
- Die dritte Box hat Schwellenwerte alle 10% der Sichtbarkeit (0%, 10%, 20% usw.).
- Die letzte Box hat Schwellenwerte jeweils 25%.

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
  const wrapper = document.querySelector(".wrapper");
  const template = document.querySelector("#boxTemplate");

  // Options for the observers

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };

  // An array of threshold sets for each of the boxes. The
  // first box's thresholds are set programmatically
  // since there will be so many of them (for each percentage
  // point).

  const thresholdSets = [
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
    const newBox = document.importNode(template.content, true);
    const boxID = `box${i + 1}`;
    newBox.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(newBox);

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

#### Verfolgung der Sichtbarkeit und Verzögerung

Standardmäßig bietet der Observer Benachrichtigungen, wenn das Zielelement in den Viewport des Wurzelelements gescrollt wird.
Während dies in vielen Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Überlappungen nicht gemeldet werden, wenn das Ziel "visuell beeinträchtigt" wurde.
Zum Beispiel ist es bei der Messung von Analytik oder Werbeeinblendungen wichtig, dass Zielelemente nicht verborgen oder verzerrt sind, ganz oder teilweise.

Die `trackVisibility` Einstellung weist den Observer an, nur Überlappungen für Ziele zu melden, die der Browser nicht als visuell beeinträchtigt ansieht, wie durch Ändern der Opazität oder Anwenden eines Filters oder einer Transformation.
Der Algorithmus ist konservativ und kann Elemente weglassen, die technisch sichtbar sind, wie solche mit nur einer leichten Opazitätsreduktion.

Die Berechnung der Sichtbarkeit ist rechenintensiv und sollte nur bei Bedarf verwendet werden.
Wenn Sie die Sichtbarkeit verfolgen, sollte auch eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um das minimale Berichtsintervall zu begrenzen.
Die Empfehlung ist, das Limit auf den größtmöglichen Wert einzustellen (die Mindestverzögerung bei der Sichtbarkeitsverfolgung beträgt 100 Millisekunden).

#### Clipping und das Überlappungsrechteck

Der Browser berechnet das endgültige Überlappungsrechteck wie folgt; all das wird für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu begreifen, wann Überlappungen auftreten werden.

1. Das Begrenzungsrechteck des Zielelements (das heißt, das kleinste Rechteck, das alle Begrenzungsrahmen aller Komponenten einschließt, die das Element ausmachen) wird durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf dem Ziel erhalten.
   Dies ist das größte, das das Überlappungsrechteck sein kann. Die verbleibenden Schritte entfernen alle Teile, die nicht überlappen.
2. Beginnend beim unmittelbaren Elternblock des Ziels und nach außen gehend, wird das Clipping jeder enthaltenden Block auf das Überlappungsrechteck angewendet.
   Das Clipping eines Blocks wird basierend auf der Überlappung der beiden Blocks und dem Clipping-Modus (falls vorhanden) bestimmt, der durch die {{cssxref("overflow")}} Eigenschaft angegeben wird. Das Festlegen von `overflow` auf einen Wert außer `visible` verursacht das Clipping.
3. Wenn eines der enthaltenden Elemente die Wurzel eines verschachtelten Browsing-Kontextes ist (wie das Dokument, das in einem {{HTMLElement("iframe")}} enthalten ist), wird das Überlappungsrechteck auf den Viewport des enthaltenen Kontexts beschnitten, und die Rekursion nach oben durch die Container geht mit dem enthaltenden Block des Containers weiter. Wenn also die oberste Ebene eines `<iframe>` erreicht wird, wird das Überlappungsrechteck auf den Viewport des Rahmens zurechtgeschnitten, dann ist das nächste Block in der Rekursion durch den Überlappungselement der Elternelement des Rahmens.
4. Wenn die Rekursion nach oben die Überlappungselement erreicht, wird das resultierende Rechteck auf den Koordinatenraum des Überlappungselements abgebildet.
5. Das resultierende Rechteck wird dann durch Überlappung mit dem [Wurzelüberlappungsrechteck](#das_Überlappungselement_und_der_Wurzelrand) aktualisiert.
6. Dieses Rechteck wird schließlich auf den Koordinatenraum des [`Dokuments`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zur Erstellung und Verwaltung eines Observers, der jede Anzahl von Zielelementen für dieselbe Überlappungskonfiguration beobachten kann. Jeder Observer kann asynchron Änderungen der Überlappung zwischen einem oder mehreren Zielelementen und einem gemeinsamen Vorfahrenelement oder mit ihrem obersten [`Dokument`](/de/docs/Web/API/Document) Viewport beobachten. Der Vorfahre oder der Viewport wird als **Wurzel** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Überlappung zwischen dem Zielelement und seinem Wurzelcontainer zu einem bestimmten Übergangsmoment. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver` Callback oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass sich ein Zielelement in seiner Farbe und Transparenz ändert, während es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie die Zeit gemessen wird, wie lange eine Gruppe von Elementen (wie Anzeigen) für den Nutzer sichtbar sind und wie auf diese Informationen reagiert wird, indem Statistiken aufgezeichnet oder Elemente aktualisiert werden.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem primären Element, das die Box ist, die wir anvisieren (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element so an und stellt sicher, dass die Eigenschaften {{cssxref("background-color")}} und {{cssxref("border")}} an [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) teilnehmen können, die wir verwenden, um die Änderungen am Element zu bewirken, während es mehr oder weniger verdeckt wird.

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

Zunächst müssen wir einige Variablen vorbereiten und den Observer installieren.

```js
const numSteps = 20.0;

const boxElement = document.querySelector("#box");
let prevRatio = 0.0;
let increasingColor = "rgb(40 40 190 / ratio)";
let decreasingColor = "rgb(190 40 40 / ratio)";

createObserver();
```

Die Konstanten und Variablen, die wir hier einrichten, sind:

- `numSteps`
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Sichtbarkeitsverhältnis von 0,0 und 1,0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um das Sichtbarkeitsverhältnis zu speichern, das beim letzten Überschreiten eines Schwellenwerts vorhanden war; dies ermöglicht es uns herauszufinden, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich das Element nicht nur farblich ändert, sondern auch zunehmend undurchsichtig wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ebenso ist dies ein String, der eine Farbe definiert, die wir verwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir erhalten eine Referenz zu dem Element mit der ID `"box"` durch [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die Methode `createObserver()` auf, die wir in einem Moment erstellen werden, um den Aufbau und die Installation des Intersection Observers zu handhaben.

#### Erstellen des Intersection Observers

Die Methode `createObserver()` wird einmal nach dem Laden der Seite aufgerufen, um tatsächlich den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und den Prozess der Überwachung des Zielelements zu starten.

```js
function createObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

Dies beginnt mit dem Einrichten eines `options` Objekts, das die Einstellungen für den Observer enthält. Wir möchten Änderungen in der Sichtbarkeit des Zielelements in Bezug auf den Viewport des Dokuments beobachten, daher ist `root` `null`. Wir benötigen keinen Rand, also der Margin-Offset, `rootMargin`, ist als "0px" angegeben. Dies führt dazu, dass der Observer Änderungen in der Überlappung zwischen den Grenzen des Zielelements und denen des Viewports ohne hinzugefügten (oder subtrahierten) Raum beobachtet.

Die Liste der Sichtbarkeitsverhältnis-Schwellenwerte, `threshold`, wird durch die Funktion `buildThresholdList()` erstellt. Die Schwellenwertliste wird in diesem Beispiel programmgesteuert erstellt, da es eine Reihe von ihnen gibt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Observer, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktor aufrufen, eine Funktion angeben, die aufgerufen wird, wenn eine unserer Schwellenwerte überschritten wird, `handleIntersect()`, und unser Set von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) am zurückgegebenen Observer auf und übergeben ihm das gewünschte Zielelement.

Wir könnten uns entscheiden, mehrere Elemente auf Änderungen der Sichtbarkeitsüberlappung im Hinblick auf den Viewport zu überwachen, indem wir für jedes dieser Elemente `observer.observe()` aufrufen, wenn wir dies tun wollten.

#### Erstellen des Arrays der Schwellenwertverhältnisse

Die Funktion `buildThresholdList()`, die die Liste der Schwellenwerte erstellt, sieht folgendermaßen aus:

```js
function buildThresholdList() {
  const thresholds = [];
  const numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

Dies erstellt das Array von Schwellenwerten - jedes davon ist ein Verhältnis zwischen 0.0 und 1.0, indem der Wert `i/numSteps` zum `thresholds` Array für jede ganze Zahl `i` zwischen 1 und `numSteps` hinzugefügt wird. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis, bei dem der Standardwert von `numSteps` (20) verwendet wird, ist die folgende Liste von Schwellenwerten:

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

Natürlich könnten wir das Array der Schwellenwerte in unseren Code fest einprogrammieren und oft werden Sie das tun. Aber dieses Beispiel lässt Raum für die Hinzufügung von Steuerungen, um die Granularität anzupassen, zum Beispiel.

#### Handhabung von Überlappungsänderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall das mit der ID `"box"`) so enthüllt oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis einen unserer Schwellenwerte überschreitet, ruft es unsere Handler-Funktion `handleIntersect()` auf:

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

Für jeden [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` sehen wir nach, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn es so ist, setzen wir das {{cssxref("background-color")}} des Ziels auf den String in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzt das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: Nicht nur ändert sich die Farbe, sondern die Transparenz des Zielelements ändert sich ebenfalls; wenn das Überlappungsverhältnis sinkt, sinkt der Alphawert der Hintergrundfarbe ebenfalls mit ihm, was zu einem Element führt, das durchsichtiger wird.

Ebenso, wenn das `intersectionRatio` sinkt, verwenden wir den String `decreasingColor` und ersetzen das Wort "ratio" darin durch das `intersectionRatio`, bevor wir das `background-color` des Zielelements setzen.

Schließlich, um zu verfolgen, ob das Überlappungsverhältnis steigt oder sinkt, speichern wir das aktuelle Verhältnis in der Variablen `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt. Scrollen Sie diese Seite nach oben und unten und beachten Sie, wie sich das Erscheinungsbild der Box ändert, während Sie dies tun.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Es gibt ein noch umfangreicheres Beispiel bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
