---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Überschneidung eines Zielelements mit einem übergeordneten Element oder mit dem Viewport eines obersten Dokuments asynchron zu beobachten.

## Übersicht

Historisch gesehen war das Erkennen der Sichtbarkeit eines Elements oder der relativen Sichtbarkeit zweier Elemente zueinander eine schwierige Aufgabe, für die Lösungen unzuverlässig waren und dazu neigten, den Browser und die von den Benutzern aufgerufenen Websites träge zu machen. Da sich das Web weiterentwickelt hat, ist der Bedarf an dieser Art von Information gewachsen. Überlappungsinformationen werden aus vielen Gründen benötigt, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderen Inhalten, wenn eine Seite gescrollt wird.
- Implementierung von "unendlichen" Scroll-Websites, bei denen immer mehr Inhalte geladen und gerendert werden, während Sie scrollen, sodass der Benutzer keine Seiten umblättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um die Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationsprozesse ausgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird oder nicht.

In der Vergangenheit beinhaltete die Implementierung der Überschneidungserkennung Ereignishandler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufrufen, um die benötigten Informationen für jedes betroffene Element zu sammeln. Da all dieser Code im Hauptthread läuft, kann selbst einer dieser Vorgänge Leistungsprobleme verursachen. Wenn eine Website mit diesen Tests geladen ist, kann es ziemlich hässlich werden.

Stellen Sie sich eine Webseite vor, die unendliches Scrollen verwendet. Sie verwendet eine vom Anbieter bereitgestellte Bibliothek, um die Anzeigen zu verwalten, die periodisch auf der Seite platziert werden, hat hier und da animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsfenster und dergleichen zeichnet. Jeder von ihnen hat seine eigenen Routinen zur Erkennung von Überschneidungen, die alle im Hauptthread ausgeführt werden. Der Autor der Website bemerkt möglicherweise nicht einmal, dass dies passiert, da er möglicherweise sehr wenig über die inneren Abläufe der beiden von ihm verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Routinen zur Erkennung von Überschneidungen ständig während des Scroll-Handlings ausgeführt, was zu einer Erfahrung führt, die den Benutzer mit dem Browser, der Website und seinem Computer frustriert zurücklässt.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element eine Überschneidung mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) eingeht oder verlässt, oder wenn sich die Überschneidung zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Seiten nichts im Hauptthread tun, um auf diese Art von Elementüberschneidung zu achten, und der Browser ist frei, die Verwaltung von Überschneidungen zu optimieren, wie es ihm beliebt.

Eine Sache, die die Intersection Observer API nicht tun kann: Logik basierend auf der genauen Anzahl der überlappenden Pixel auslösen oder explizit auf welche sie sind. Sie löst nur den allgemeinen Anwendungsfall "Wenn sie sich um etwa _N_% überschneiden, muss ich etwas tun."

## Konzepte und Nutzung

Die Intersection Observer API ermöglicht es Ihnen, einen Callback zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Bedingungen eintritt:

- Ein **Zielelement** schneidet entweder den Viewport des Geräts oder ein angegebenes Element. Für die Zwecke der Intersection Observer API wird dieses angegebene Element als **Wurzelelement** oder **Root** bezeichnet.
- Das erste Mal, wenn der Observer ursprünglich aufgefordert wird, ein Zielelement zu beobachten.

Typischerweise möchten Sie Überschneidungsänderungen in Bezug auf den nächsten scrollbaren Vorfahren des Zielelements beobachten, oder, wenn das Zielelement kein Nachkomme eines scrollbaren Elements ist, den Viewport des Geräts. Um die Überschneidung relativ zum Viewport des Geräts zu beobachten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung der Optionen für den Intersection Observer.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Callback-Funktion ausführt, wann immer sich die Sichtbarkeit des Zielelements so ändert, dass es gewünschte Mengen der Überschneidung mit dem Root überschreitet.

Der Grad der Überschneidung zwischen dem Zielelement und seinem Root ist das **Überschneidungsverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, der als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie dessen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die jedes Mal ausgeführt wird, wenn ein Schwellenwert in eine oder die andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1,0 bedeutet, dass, wenn 100 % des Ziels im innerhalb des durch die `root`-Option angegebenen Elements sichtbar ist, der Callback aufgerufen wird.

#### Optionen für den Intersection Observer

Das `options`-Objekt, das dem Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Umstände zu kontrollieren, unter denen der Callback des Observers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport zur Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss ein Vorfahre des Ziels sein. Standardmäßig wird der Browser-Viewport verwendet, wenn nicht angegeben oder wenn `null`.
- `rootMargin`
  - : Rand um den Root. Ein String aus einem bis vier Werten, ähnlich der CSS-Eigenschaft {{cssxref("margin")}}, z. B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur in Pixeln (`px`) oder Prozent (`%`) angegeben werden. Dieses Set von Werten dient zum Wachsen oder Schrumpfen jeder Seite des Begrenzungsrahmens des Root-Elements, bevor Überschneidungen berechnet werden. Negative Werte verkleinern den Begrenzungsrahmen des Root-Elements und positive Werte vergrößern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "scrollbare Container")}}, der die gleichen Werte hat wie `rootMargin`.
    Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Überschneidungen berechnet werden.
    Positive Werte vergrößern das Ausschnittrechteck des Containers, sodass Ziele zu schneiden beginnen, bevor sie sichtbar werden, während negative Werte das Ausschnittrechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Observers ausgeführt werden soll. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie möchten, dass der Callback jedes Mal ausgeführt wird, wenn die Sichtbarkeit um weitere 25 % überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standardwert ist 0 (was bedeutet, dass der Callback ausgeführt wird, sobald das Zielelement die Grenze des Root schneidet oder berührt, auch wenn noch keine Pixel sichtbar sind). Ein Wert von 1,0 bedeutet, dass der Schwellenwert erst dann als überschritten gilt, wenn jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Beim Verfolgen der Sichtbarkeit des Ziels ([trackVisibility](#trackvisibility) ist `true`) kann dies verwendet werden, um die Mindestverzögerung in Millisekunden zwischen Benachrichtigungen von diesem Observer festzulegen.
    Die Begrenzung der Benachrichtigungsrate ist wünschenswert, da die Sichtbarkeitsberechnung rechnerisch intensiv ist.
    Wenn die Sichtbarkeit verfolgt wird, wird der Wert für jeden Wert unter 100 auf 100 gesetzt, und Sie sollten den größten tolerierbaren Wert verwenden.
    Der Wert ist standardmäßig 0.
- `trackVisibility` {{experimental_inline}}

  - : Ein Boolescher Wert, der angibt, ob dieser `IntersectionObserver` Änderungen in der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Überschneidungen, wenn das Zielelement in den Viewport des Wurzelelements gescrollt wird.
    Wenn `true`, überprüft der Browser zusätzlich, ob das Ziel tatsächlich sichtbar ist und nicht von anderen Elementen verdeckt oder möglicherweise durch einen Filter, reduzierte Deckkraft oder eine Transformation verzerrt oder verborgen wurde.
    Der Wert ist standardmäßig `false`, da die Verfolgung der Sichtbarkeit rechnerisch intensiv ist.
    Wenn dies festgelegt ist, sollte auch ein [`delay`](#delay) festgelegt werden.

#### Callbacks für Überschneidungsänderungen

Der Callback, der dem Konstruktor `IntersectionObserver()` übergeben wird, erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Observer:

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

Die Liste der von Callback erhaltenen Einträge enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Überschneidungsereignis – mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzelnen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden über eine Warteschlange verteilt, sodass sie in der Reihenfolge generiert werden sollten, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie richtig zu ordnen. Jeder Eintrag beschreibt, wie viel von einem gegebenen Element sich mit dem Root-Element überschneidet, ob das Element als sich überschneidend betrachtet wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment – wenn Sie Informationen suchen, die über die Zeit hinweg verfolgt werden müssen, wie die Scrollrichtung und -geschwindigkeit, müssen Sie diese möglicherweise selbst berechnen, indem Sie sich zuvor erhaltene Einträge merken.

Beachten Sie, dass Ihr Callback im Haupt-Thread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas zeitaufwändiges erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeausschnitt zeigt einen Callback, der einen Zähler führt, wie oft Elemente vom Nicht-Überschneiden des Root zum Überschneiden um mindestens 75% übergehen. Bei einem Schwellenwert von 0,0 (Standardwert) wird der Callback etwa beim Übergang des Booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Schnappschuss prüft daher zuerst, dass der Übergang ein positiver ist, und bestimmt dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75 % liegt, in welchem Fall der Zähler erhöht wird.

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

#### Ein Ziel für die Beobachtung anvisieren

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Zielelement zur Beobachtung geben:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Callback aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angeben, das Ziel ein Nachkomme des Wurzelelements sein muss.

### Wie Überschneidung berechnet wird

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, gelten als das kleinste Rechteck, das alle Teile des Elements umschließt. Ebenso ist, wenn der sichtbare Teil eines Elements nicht rechteckig ist, das Überschneidungsrechteck des Elements das kleinste Rechteck, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Überschneidung beschreiben.

#### Das Überschneidungsroot und der Root-Margin

Bevor wir die Überschneidung eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist das **Überschneidungsroot** oder **Wurzelelement**. Dies kann entweder ein spezifisches Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **Wurzelüberschneidungsrechteck** ist das Rechteck, das zum Überprüfen gegen das Ziel oder die Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn das Überschneidungsroot das implizite Root ist (das heißt das top-level [`Document`](/de/docs/Web/API/Document)), ist das Wurzelüberschneidungsrechteck das Rechteck des Viewports.
- Wenn das Überschneidungsroot über einen Überlaufclip verfügt, ist das Wurzelüberschneidungsrechteck der Inhaltsbereich des Rootelements.
- Andernfalls ist das Wurzelüberschneidungsrechteck das Begrenzungsrahmen des Überschneidungsroots (wie zurückgegeben, indem [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufgerufen wird).

Das Wurzelüberschneidungsrechteck kann weiter angepasst werden, indem der **Root-Margin**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) festgelegt wird. Die Werte in `rootMargin` legen Offsets fest, die auf jede Seite des Begrenzungsrahmens des Überschneidungsroots hinzugefügt werden, um die endgültigen Grenzen des Wurzelüberschneidungsrechts zu erstellen (die bei Ausführung des Callbacks in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) angezeigt werden). Positive Werte vergrößern das Rechteck, während negative Werte es verkleinern. Jeder Offset-Wert kann nur in Pixeln (px) oder als Prozentsatz (%) ausgedrückt werden.

Der Effekt, das Rechteck mithilfe der Root-Margin zu vergrößern, besteht darin, überlaufende Ziele mit dem Root nicht schneiden zu lassen, bevor sie sichtbar werden.
Dies kann beispielsweise verwendet werden, um Bilder zu laden, kurz bevor sie angezeigt werden, anstatt in dem Moment, in dem sie sichtbar werden.

Im Beispiel unten haben wir ein scrollbares Feld und ein Element, das sich zunächst außerhalb der Sicht befindet.
Sie können den rechten Rand der Wurzel anpassen und feststellen, dass:

- Wenn der Rand positiv ist, wird das rote Element als sich mit dem Root überschneidend betrachtet, auch wenn es nicht sichtbar ist, da es sich mit dem Randbereich des Roots überschneidet.
- Wenn der Rand negativ ist, wird das rote Element, selbst wenn es beginnt sichtbar zu werden, immer noch nicht als sich mit dem Root überschneidend betrachtet, da das Begrenzungsfeld des Roots verkleinert ist.

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

{{EmbedLiveSample("das Überschneidungsroot und der Root-Margin", "", 200)}}

#### Das Überschneidungsroot und der Scroll-Margin

Betrachten Sie den Fall, dass Sie ein Wurzelelement haben, das verschachtelte {{Glossary("scroll_container", "scrollbare Container")}} enthält, und Sie möchten Überschneidungen mit einem Ziel innerhalb eines dieser scrollbaren Container beobachten.
Überschneidungen mit dem Zielelement sind standardmäßig beobachtbar, wenn das Ziel innerhalb des durch den Root definierten Bereichs sichtbar ist;
mit anderen Worten, wenn der Container im Root sichtbar gemacht wird und das Ziel im Ausschnittrechteck seines Containers sichtbar gemacht wird.

Sie können einen Scroll-Margin verwenden, um Überschneidungen zu beobachten, bevor oder nachdem das Ziel innerhalb seines Scrollcontainers sichtbar gemacht wird.
Der Margin wird allen verschachtelten scrollbaren Containern im Root hinzugefügt, einschließlich dem Wurzelelement, wenn es auch ein scrollbarer Container ist, und hat den Effekt, die zum Berechnen von Überschneidungen verwendete Ausschnittregion entweder zu vergrößern (positive Ränder) oder zu verkleinern (negative Ränder).

> [!NOTE]
> Sie könnten einen Intersection Observer für jeden Scrollcontainer erstellen, für den Sie einen Scroll-Margin wünschen, und die Root-Margin-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen.
> Die Verwendung von Scroll-Margin ist ergonomischer, da Sie in den meisten Fällen nur einen Intersection Observer für alle verschachtelten Ziele haben können.

Im folgenden Beispiel haben wir ein scrollbares Feld und ein Bilderkarussell, das sich zunächst außerhalb der Sicht befindet.
Ein Observer auf dem Wurzelelement beobachtet die Bildelementziele innerhalb des Karussells.
Wenn ein Bildelement beginnt, sich mit dem Wurzelelement zu überschneiden, wird das Bild geladen, die Überschneidung protokolliert und der Observer entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen.
Die sichtbaren Bilder sollten sofort geladen werden.
Wenn Sie das Karussell scrollen, sollten Sie beobachten können, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nachdem Sie das Beispiel zurückgesetzt haben, können Sie die bereitgestellte Steuerung verwenden, um den Scroll-Margin-Prozentsatz zu ändern.
Wenn Sie einen positiven Wert wie 20 % setzen, wird das Clipping-Rechteck des Scrollcontainers um 20 % vergrößert, und Sie sollten beobachten können, dass Bilder erkannt und geladen werden, bevor sie sichtbar werden.
Ebenso bewirkt ein negativer Wert, dass die Überschneidung erkannt wird, sobald die Bilder bereits sichtbar sind.

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

{{EmbedLiveSample("Das Überschneidungsroot und der Scroll-Margin","100%","500px")}}

#### Schwellenwerte

Anstatt jede kleinste Änderung darüber, wie viel von einem Zielelement sichtbar ist, zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie einen oder mehrere Zahlenwerte angeben, die Prozentsätze des sichtbaren Zielelements darstellen. Die API informiert dann nur über Sichtbarkeitsänderungen, die diese Schwellen überschreiten.

Wenn Sie beispielsweise jedes Mal informiert werden möchten, wenn die Sichtbarkeit eines Ziels vorwärts oder rückwärts jede 25%-Marke überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte angeben, wenn Sie den Observer erstellen.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Grad der Überschneidung mit dem Root sich so geändert hat, dass die Menge, die freigelegt wird, einen der Schwellenwerte in einer Richtung überschreitet.

Sie können sehen, ob das Ziel _aktuell_ den Root überschneidet, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags betrachten; ist deren Wert `true`, schneidet das Ziel zumindest teilweise das Root-Element oder das Dokument. Dies erlaubt Ihnen festzustellen, ob der Eintrag einen Übergang vom Überschneiden der Elemente zum Nicht-Überschneiden oder einen Übergang vom Nicht-Überschneiden zum Überschneiden repräsentiert.

Beachten Sie, dass es möglich ist, ein Null-Überschneidungsrechteck zu haben, das passieren kann, wenn die Überschneidung genau entlang der Grenze zwischen den beiden oder der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand des gemeinsamen Grenzlinien von Ziel und Root wird nicht als ausreichend angesehen, um als Übergang in einen sich überschneidenden Zustand betrachtet zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie im folgenden Beispiel, den Kasten hin und her zu scrollen. Jedes Farbfeld innerhalb zeigt den Prozentsatz seiner Sichtbarkeit in allen vier Ecken an, sodass Sie diese Verhältnisse über die Zeit hinweg sehen können, während sich der Container bewegt. Jedes Kästchen hat eine andere Reihe von Schwellenwerten:

- Das erste Kästchen hat einen Schwellenwert für jeden Prozentsatz der Sichtbarkeit; das heißt, das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds)-Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Kästchen hat nur einen Schwellenwert, bei der 50%-Marke.
- Das dritte Kästchen hat Schwellenwerte alle 10 % der Sichtbarkeit (0 %, 10 %, 20 % usw.).
- Das letzte Kästchen hat Schwellenwerte alle 25 %.

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

#### Sichtbarkeitsverfolgung und Verzögerung

Standardmäßig liefert der Observer Benachrichtigungen, wenn das Zielelement in den Viewport des Wurzelelements gescrollt wird.
Während dies in vielen Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Überschneidungen nicht gemeldet werden, wenn das Ziel "visuell beeinträchtigt" wurde.
Zum Beispiel ist es wichtig, dass bei der Messung von Analysen oder Anzeigenimpressionen die Zielelemente nicht verdeckt oder verfälscht sind, ganz oder teilweise.

Die `trackVisibility`-Einstellung teilt dem Observer mit, dass er Überschneidungen nur für Ziele melden soll, die der Browser nicht als visuell beeinträchtigt ansieht, z. B. durch Ändern der Deckkraft oder Anwenden eines Filters oder einer Transform.
Der Algorithmus ist konservativ und kann Elemente weglassen, die technisch sichtbar sind, wie z. B. solche mit nur einer geringfügigen Opazitätsreduktion.

Die Sichtbarkeitsberechnung ist rechnerisch aufwendig und sollte nur bei Bedarf verwendet worden.
Wenn die Sichtbarkeit verfolgt wird, sollte auch ein [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um die Mindestberichtsperiode zu begrenzen.
Es wird empfohlen, die Verzögerung auf den größten tolerierbaren Wert zu setzen (die Mindestverzögerung bei der Verfolgung der Sichtbarkeit beträgt 100 Millisekunden).

#### Ausschneiden und das Überschneidungsrechteck

Der Browser berechnet das endgültige Überschneidungsrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu begreifen, wann genau Überschneidungen auftreten.

1. Das Begrenzungsrechteck des Zielelements (das kleinste Rechteck, das die Begrenzungsrahmen aller Komponenten umfasst, die das Element ausmachen) wird durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf dem Ziel erhalten.
   Dies ist das größte Überschneidungsrechteck kann. Die verbleibenden Schritte entfernen alle Teile, die nicht sich überschneiden.
2. Beginnend beim unmittelbaren Elternelement des Ziels und aufwärts gehend, wird das Clipping (falls vorhanden) jedes enthaltenen Blocks auf das Überschneidungsrechteck angewendet.
   Das Clipping eines Blocks wird basierend auf der Überschneidung der beiden Blöcke und dem (falls vorhanden) durch die {{cssxref("overflow")}}-Eigenschaft spezifizierten Clipping-Modus bestimmt. Das Setzen von `overflow` auf alles außer `visible` führt zu Clipping.
3. Wenn eines der enthaltenen Elemente die Wurzel eines verschachtelten Browserkontexts ist (z. B. das im {{HTMLElement("iframe")}} enthaltene Dokument), wird das Überschneidungsrechteck auf den Viewport des enthaltenen Kontexts zugeschnitten, und Rekursion wird durch den Container mit dem Container als nächstem Block fortgesetzt. Wenn also das oberste Level einer `<iframe>` erreicht ist, wird das Überschneidungsrechteck auf den Viewport des Frames zugeschnitten, dann ist das Elternelement des Frames der nächste Block, der nach oben rekursiv durch die Container zurückgeht.
4. Wenn die Rekursion nach oben das Überschneidungsroot erreicht, wird das resultierende Rechteck in den Koordinatenraum des Überschneidungsroots abgebildet.
5. Das resultierende Rechteck wird dann weiter aktualisiert, indem es mit dem [Wurzelüberschneidungsrechteck](#das_überschneidungsroot_und_der_root-margin) geschnitten wird.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des [`documents`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Das primäre Interface für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Observers, der eine beliebige Anzahl von Zielenlementen für dieselbe Überschneidungskonfiguration beobachten kann. Jeder Observer kann asynchron Änderungen in der Überschneidung zwischen einem oder mehreren Zielelementen und einem gemeinsamen Vorfahrenelement oder mit dem Viewport ihres obersten [Dokuments](/de/docs/Web/API/Document) beobachten. Der Vorfahre oder Viewport wird als **root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Überschneidung zwischen dem Zielelement und seinem Root-Container an einem bestimmten Moment des Übergangs. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Callback oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel führt dazu, dass ein Zielelement seine Farbe und Transparenz ändert, je nachdem, wie sichtbar es wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein noch umfangreicheres Beispiel, das zeigt, wie lange eine Reihe von Elementen (z. B. Anzeigen) für den Benutzer sichtbar sind und wie Sie auf diese Informationen reagieren können, indem Sie Statistiken aufzeichnen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem Hauptelement, das die Box ist, auf die wir abzielen (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht allzu wichtig; es legt das Element aus und stellt sicher, dass die Attribute {{cssxref("background-color")}} und {{cssxref("border")}} an [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu bewirken, wenn es mehr oder weniger verdeckt wird.

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

Zuerst müssen wir einige Variablen vorbereiten und den Observer installieren.

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
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Sichtbarkeitsverhältnis von 0.0 und 1.0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um festzuhalten, wie hoch das Sichtbarkeitsverhältnis war, als das letzte Mal ein Schwellenwert überschritten wurde; dies ermöglicht es uns herauszufinden, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Eine Zeichenfolge, die eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis steigt. Das Wort "ratio" in dieser Zeichenfolge wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich das Element nicht nur farblich ändert, sondern auch zunehmend undurchsichtiger wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ebenso ist dies eine Zeichenfolge, die eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir erhalten eine Referenz auf das Element mit der ID `"box"` mithilfe von [`querySelector()`](/de/docs/Web/API/Document/querySelector), rufen dann die Methode `createObserver()` auf, die wir gleich erstellen werden, um den Aufbau und die Installation des Intersection Observers zu handhaben.

#### Erstellen des Intersection Observers

Die Methode `createObserver()` wird einmal nach dem Laden der Seite aufgerufen, um den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) tatsächlich zu erstellen und den Vorgang der Beobachtung des Zielelements zu starten.

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

Dies beginnt mit dem Einrichten eines `options`-Objekts, das die Einstellungen für den Observer enthält. Wir möchten Änderungen der Sichtbarkeit des Zielelements relativ zum Viewport des Dokuments beobachten, daher ist `root` `null`. Wir benötigen keine Ränder, daher ist der Randabstand, `rootMargin`, auf "0px" festgelegt. Dies veranlasst den Observer, Änderungen in der Überschneidung zwischen den Grenzen des Zielelements und denen des Viewports zu beobachten, ohne zusätzlichen (oder abgezogenen) Raum.

Die Liste der Sichtbarkeitsverhältnis-Schwellenwerte, `threshold`, wird durch die Funktion `buildThresholdList()` erstellt. Die Schwellenwerteliste wird in diesem Beispiel programmgesteuert erstellt, da es eine Anzahl davon gibt und die Anzahl eingestellt werden soll, um variabel zu sein.

Sobald `options` bereit ist, erstellen wir den neuen Observer, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen, eine Funktion angeben, die aufgerufen wird, wenn die Überschneidung einen unserer Schwellenwerte überschreitet, `handleIntersect()`, und unsere Einstellung von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Observer auf, indem wir ihm das gewünschte Zielelement übergeben.

Wir könnten entscheiden, den Sichtbarkeitsübergang mehrerer Elemente relativ zum Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun möchten.

#### Erstellen des Arrays der Schwellenwerte-Verhältnisse

Die Funktion `buildThresholdList()`, die die Schwellenwerteliste erstellt, sieht so aus:

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

Dies erstellt das Array von Schwellenwerten - jede davon ist ein Verhältnis zwischen 0.0 und 1.0, indem der Wert `i/numSteps` für jedes ganzzahlige `i` zwischen 1 und `numSteps` auf das `thresholds`-Array geschoben wird. Es schiebt auch 0, um diesen Wert einzuschließen. Das Ergebnis, gegeben mit dem Standardwert von `numSteps` (20), ergibt die folgende Liste von Schwellenwerten:

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

Wir könnten natürlich das Array der Schwellenwerte in unseren Code fest codieren, und oft wird es das sein, was Sie tun werden. Aber dieses Beispiel lässt Raum für das Hinzufügen von Konfigurationssteuerungen, um die Granularität zum Beispiel anzupassen.

#### Umgang mit Überschneidungsänderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall das, das die ID `"box"` hat) so freigelegt oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis einer unserer Schwellenwerte in der Liste überschreitet, ruft es unsere Handlerfunktion `handleIntersect()` auf:

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

Für jeden [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` überprüfen wir, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn dies der Fall ist, setzen wir die `background-color` des Ziels auf die Zeichenfolge in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzt das Wort "ratio" mit dem `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur die Farbe ändert sich, sondern auch die Transparenz des Zielelements ändert sich; wenn das Überschneidungsverhältnis sinkt, sinkt der Alphawert der Hintergrundfarbe, was zu einem transparenteren Element führt.

Ebenso verwenden wir im Fall, dass das `intersectionRatio` abnimmt, die Zeichenfolge `decreasingColor` und ersetzen dabei das Wort "ratio" durch das `intersectionRatio`, bevor wir die `background-color` des Zielelements setzen.

Schließlich merken wir uns, um zu ermitteln, ob das Überschneidungsverhältnis steigt oder fällt, das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten sehen Sie den resultierenden Inhalt. Scrollen Sie diese Seite hoch und runter und beachten Sie, wie sich das Erscheinungsbild der Box ändert, während Sie dies tun.

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
