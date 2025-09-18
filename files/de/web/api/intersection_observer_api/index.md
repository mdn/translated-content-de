---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, um asynchron Änderungen in der Schnittfläche eines Zielelements mit einem übergeordneten Element oder mit dem Viewport eines Dokumentes auf oberster Ebene zu beobachten.

## Überblick

Historisch gesehen war es eine schwierige Aufgabe, die Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente zueinander zu erkennen. Die Lösungen dafür waren oft unzuverlässig und neigten dazu, den Browser und die von der Nutzer zugreifenden Seiten träge zu machen. Mit dem Fortschritt des Internets ist das Bedürfnis nach solcher Information gewachsen. Schnittflächeninformationen werden aus vielen Gründen benötigt, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderen Inhalten, wenn eine Seite gescrollt wird.
- Implementierung von Websites mit "unendlichem Scrollen", bei denen mehr und mehr Inhalte geladen und gerendert werden, wenn Sie scrollen, damit der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen zur Berechnung von Werbeeinnahmen.
- Entscheidung, ob Aufgaben oder Animationsprozesse ausgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird.

Früher beinhaltete die Implementierung der Schnittflächenerkennung Ereignishandler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, um die benötigte Information für jedes betroffene Element aufzubauen. Da all dieser Code im Hauptthread läuft, kann selbst einer von ihnen Leistungsprobleme verursachen. Wenn eine Site mit diesen Tests geladen ist, kann es hässlich werden.

Stellen Sie sich eine Webseite vor, die unendliches Scrollen verwendet. Sie verwendet eine von einem Anbieter bereitgestellte Bibliothek, um die Anzeigen zu verwalten, die periodisch auf der Seite eingefügt werden, enthält animierte Grafiken hier und da und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und dergleichen zeichnet. Jedes dieser Elemente verfügt über eigene Routinen zur Erkennung von Schnittflächen, die alle im Hauptthread laufen. Der Autor der Webseite wird diese möglicherweise nicht einmal bemerken, da er möglicherweise sehr wenig über die inneren Vorgänge der beiden verwendeten Bibliotheken weiß. Während der Nutzer die Seite scrollt, feuern diese Routinen zur Erkennung der Schnittfläche ständig während des Code für die Scrollverarbeitung, was zu einer Erfahrung führt, die den Nutzer mit dem Browser, der Website und ihrem Computer frustriert.

Die Intersection Observer API lässt den Code eine Rückruffunktion registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element eine Schnittfläche mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) betritt oder verlässt oder wenn sich die Schnittfläche zwischen zwei Elementen um einen angegebenen Betrag ändert. Auf diese Weise müssen Websites nichts im Hauptthread tun, um diese Art von Schnittflächen-Erkennung zu überwachen, und der Browser ist frei, die Verwaltung von Schnittflächen nach eigenem Ermessen zu optimieren.

Eins, was die Intersection Observer API nicht tun kann: Logik basierend darauf auslösen, wie viele Pixel genau überlappen oder welche es sind. Sie löst nur den allgemeinen Anwendungsfall "Wenn sie sich irgendwo um _N_% schneiden, muss ich etwas tun."

## Konzepte und Nutzung

Die Intersection Observer API ermöglicht es Ihnen, einen Rückruf zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Umstände eintritt:

- Ein **Zielelement** schneidet entweder den Viewport des Geräts oder ein angegebenes Element. Dieses angegebene Element wird für die Zwecke der Intersection Observer API als **Wurzelelement** oder **Wurzel** bezeichnet.
- Das erste Mal, wenn der Beobachter ursprünglich gebeten wurde, ein Zielelement zu überwachen.

Typischerweise möchten Sie Überwachungen von Schnittflächenänderungen in Bezug auf den nächsten scrollbaren Vorgänger des Zielelements durchführen, oder, wenn das Zielelement kein Nachkomme eines scrollbaren Elements ist, des Viewports des Geräts. Um relative zur Viewport des Geräts Schnittflächen zu überwachen, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung zu den Optionen des Intersection Observers.

Egal, ob Sie den Viewport oder ein anderes Element als Wurzel verwenden, die API funktioniert auf die gleiche Weise und führt eine von Ihnen bereitgestellte Rückruffunktion aus, wann immer sich die Sichtbarkeit des Zielelements so ändert, dass es gewünschte Mengen an Schnittflächen mit der Wurzel überschreitet.

Der Grad der Schnittfläche zwischen dem Zielelement und seiner Wurzel ist das **Schnittflächenverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, der sichtbar ist, als ein Wert zwischen 0.0 und 1.0.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Rückruffunktion übergeben, die bei Überschreiten eines Schwellenwerts in eine Richtung oder die andere ausgeführt werden soll:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1.0 bedeutet, dass die Rückruffunktion aufgerufen wird, wenn 100% des Ziels sichtbar innerhalb des durch die `root`-Option spezifizierten Elements ist.

#### Intersection Observer Optionen

Das `options`-Objekt, das in den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Umstände zu kontrollieren, unter denen der Rückruf des Beobachters aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport für die Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahre des Ziels sein. Standardwert ist der Browser-Viewport, wenn nicht angegeben oder `null`.
- `rootMargin`
  - : Rand um die Wurzel. Ein String aus ein bis vier Werten, ähnlich zur CSS-Eigenschaft {{cssxref("margin")}}, z. B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur in Pixel (`px`) oder Prozentsätzen (`%`) angegeben werden. Dieses Set von Werten dient dazu, jede Seite des Begrenzungsrahmens des Wurzelelements vor der Berechnung der Schnittflächen zu vergrößern oder zu verkleinern. Negative Werte verkleinern den Begrenzungsrahmen des Wurzelelements, positive Werte vergrößern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "scrollable Container")}}, der dieselben Werte hat beziehungsweise denselben Standardwert wie `rootMargin`. Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Schnittflächen berechnet werden. Positive Werte vergrößern das Clipping-Rechteck des Containers, sodass Ziele übergreifen können, bevor sie sichtbar werden, während negative Werte das Clipping-Rechteck verkleinern.
- `threshold`
  - : Entweder eine Einzelzahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Rückruf des Beobachters ausgeführt werden soll. Wenn Sie nur erkennen möchten, wenn die Sichtbarkeit den 50%-Marke überschreitet, können Sie einen Wert von 0.5 verwenden. Wenn Sie möchten, dass der Rückruf jedes Mal ausgeführt wird, wenn die Sichtbarkeit einen weiteren 25%-Marke überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standard ist 0 (was bedeutet, dass der Rückruf ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1.0 bedeutet, dass der Schwellenwert erst als überschritten gilt, wenn jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Beim Verfolgen der Sichtbarkeit des Ziels ([trackVisibility](#trackvisibility) ist `true`), kann dies verwendet werden, um die minimale Verzögerung in Millisekunden zwischen Benachrichtigungen von diesem Beobachter festzulegen. Die Begrenzung der Benachrichtigungsrate ist wünschenswert, da die Sichtbarkeitsberechnung rechenintensiv ist. Wenn die Sichtbarkeit verfolgt wird, wird der Wert auf 100 gesetzt, wenn der Wert weniger als 100 beträgt, und Sie sollten den größten tolerierbaren Wert verwenden. Der Standardwert ist 0.
- `trackVisibility` {{experimental_inline}}
  - : Ein boolescher Wert, der anzeigt, ob dieser `IntersectionObserver` Veränderungen in der Sichtbarkeit eines Ziels verfolgt. Wenn `false`, meldet der Browser Schnittflächen, wenn das Zielelement in den Viewport des Wurzelelements scrollt. Wenn `true`, überprüft der Browser zusätzlich, ob das Ziel tatsächlich sichtbar ist und nicht von anderen Elementen verdeckt oder möglicherweise durch einen Filter, reduzierte Deckkraft oder eine Transformation verzerrt oder versteckt wurde. Der Standardwert ist `false`, da die Verfolgung der Sichtbarkeit rechenintensiv ist. Wenn dies gesetzt ist, sollte auch eine [`delay`](#delay) gesetzt werden.

#### Rückrufe bei Schnittflächenänderungen

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

Die Liste der vom Rückruf erhaltenen Einträge enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Ereignis des Schwellenwertüberschreitens – mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzigen Ziel, das mehrere Schwellenwerte in kurzer Zeit überschreitet. Die Einträge werden über eine Warteschlange abgearbeitet, sodass sie in der Reihenfolge der Generierung geordnet sein sollten, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Wurzelelement schnitt oder nicht, ob das Element als überschneidend gilt oder nicht, usw. Der Eintrag enthält nur Informationen über diesen speziellen Moment – wenn Sie Informationen benötigen, die eine Verfolgung im Laufe der Zeit erfordern, wie die Scrolldirection und -geschwindigkeit, müssen Sie dies möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge merken.

Beachten Sie, dass Ihr Rückruf im Hauptthread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwändiges erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeausschnitt zeigt einen Rückruf, der einen Zähler über die Anzahl der Male führt, dass Elemente von nicht schnittig mit der Wurzel zur Schnittmit mindestens 75% übergehen. Für einen Schwellenwert von 0.0 (Standard) wird der Rückruf ungefähr bei Übergang des booleschen Wertes von [`isIntersecting`]aufgerufen. Der Code überprüft also zunächst, dass der Übergang positiv ist, und ermittelt dann, ob [`intersectionRatio`] über 75% liegt, in welchem Fall der Zähler erhöht wird.

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

Sobald Sie den Beobachter erstellt haben, müssen Sie ihm ein zu beobachtendes Zielelement geben:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Immer wenn das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Rückruf aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachkomme des Wurzelelements sein muss.

### Wie die Schnittfläche berechnet wird

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck betrachtet, das alle Teile des Elements umschließt. Ähnlich verhält es sich, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Schnittflächenrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein bisschen darüber zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Schnittfläche beschreiben.

#### Die Schnittfläche der Wurzel und der Wurzelrand

Bevor wir die Schnittfläche eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittwurzel** oder das **Wurzelelement**. Dies kann entweder ein spezifisches Element im Dokument sein, das ein Vorgänger des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Schnittwurzeln-Rechteck_** ist das Rechteck, das zum Überprüfen gegen das Ziel oder die Ziele verwendet wird. Dieses Rechteck wird folgendermaßen bestimmt:

- Wenn die Schnittwurzel die implizite Wurzel ist (das heißt, das oberste [`Document`](/de/docs/Web/API/Document)), ist das Schnittwurzeln-Rechteck das Rechteck des Viewports.
- Wenn die Schnittwurzel einen Überlaufclip hat, ist das Schnittwurzeln-Rechteck der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Schnittwurzeln-Rechteck das Begrenzungsrechteck der Schnittwurzel (wie es durch Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf sie zurückgegeben wird).

Das Schnittwurzeln-Rechteck kann durch Setzen des **Wurzelrandes**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) weiter angepasst werden. Die Werte in `rootMargin` definieren Versatzwerte, die zu jeder Seite des Begrenzungsrahmens der Schnittwurzel hinzugefügt werden, um die endgültigen Schnittwurzeln-Grenzen zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) offengelegt werden, wenn der Rückruf ausgeführt wird). Positive Werte vergrößern das Rechteck, während negative Werte es verkleinern. Jeder Versatzwert kann nur in Pixel (`px`) oder einem Prozentsatz (`%`) ausgedrückt werden.

Der Effekt, das Rechteck durch die Verwendung des Wurzelrandes zu vergrößern, besteht darin, dass überlappende Ziele mit der Wurzel in Schnitt treten können, bevor sie sichtbar werden. Dies kann beispielsweise verwendet werden, um Bilder zu laden, kurz bevor sie ins Sichtfeld kommen, anstatt wenn sie sichtbar werden.

Im folgenden Beispiel haben wir eine scrollbare Box und ein Element, das anfänglich nicht sichtbar ist. Sie können den rechten Wurzelrand anpassen und sehen, dass:

- Wenn der Rand positiv ist, wird das rote Element als mit der Wurzel in Schnitt befindlich betrachtet, auch wenn es nicht sichtbar ist, da es sich mit dem Randbereich der Wurzel überschneidet.
- Wenn der Rand negativ ist, wird das rote Element selbst dann, wenn es sichtbar zu werden beginnt, immer noch nicht als in Schnitt befindlich mit der Wurzel betrachtet, da das Begrenzungsrechteck der Wurzel verkleinert wird.

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

#### Die Schnittwurzel und Scrollrand

Betrachten Sie den Fall, dass Sie ein Wurzelelement haben, das verschachtelte {{Glossary("scroll_container", "scrollbare Container")}} enthält, und Sie Schnittflächen mit einem Ziel innerhalb eines dieser scrollbaren Container beobachten möchten. Schnittflächen mit dem Zielelement beginnen standardmäßig beobachtbar zu werden, wenn das Ziel innerhalb des durch die Wurzel definierten Bereichs sichtbar ist; mit anderen Worten, wenn der Container innerhalb der Wurzel ins Sichtfeld gescrollt wird und das Ziel innerhalb des Clipping-Rechtecks seines Containers ins Sichtfeld gescrollt wird.

Sie können einen Scrollrand verwenden, um Schnittflächen zu überwachen, bevor oder nachdem das Ziel innerhalb seines scrollbaren Containers ins Sichtfeld gescrollt wird. Der Rand wird zu allen verschachtelten scrollbaren Containern in der Wurzel, einschließlich des Wurzelelements, falls es ebenfalls ein scrollbarer Container ist, hinzugefügt und hat die Wirkung, den Clip-Bereich entweder zu vergrößern (positive Ränder) oder zu verkleinern (negative Ränder), der für die Berechnung von Schnittflächen verwendet wird.

> [!NOTE]
> Sie könnten einen Intersection Observer für jeden Scrollcontainer erstellen, für den Sie einen Scrollrand wünschen, und die `rootMargin`-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen. Die Verwendung eines Scrollrandes ist ergonomischer, da Sie in den meisten Fällen nur einen Intersection Observer für alle verschachtelten Ziele haben können.

Im folgenden Beispiel haben wir eine scrollbare Box und ein Karussell mit Bildern, das anfänglich nicht sichtbar ist. Ein Beobachter auf dem Wurzelelement beobachtet die Bildelemente innerhalb des Karussells. Wenn ein Bildelement beginnt, mit dem Wurzelelement zu überlappen, wird das Bild geladen, die Schnittfläche protokolliert und der Beobachter entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen. Die sichtbaren Bilder sollten sofort geladen werden. Wenn Sie das Karussell scrollen, sollten Sie beobachten, wie die Bilder geladen werden, sobald das Element sichtbar wird.

Nach dem Zurücksetzen des Beispiels können Sie mit der bereitgestellten Kontrolle den Scrollrand-Prozentsatz ändern. Wenn Sie einen positiven Wert wie 20% einstellen, wird das Clip-Rechteck des Scrollcontainers um 20% vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie ins Sichtfeld kommen. Ähnlich bedeutet ein negativer Wert, dass die Schnittfläche erkannt wird, nachdem Bilder bereits im Sichtfeld sind.

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

{{EmbedLiveSample("The intersection root and scroll margin","100%","500px")}}

#### Schwellenwerte

Anstatt jede infinitesimale Änderung in der Sichtbarkeit eines Zielelements zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Beobachter erstellen, können Sie einen oder mehrere numerische Werte angeben, die Prozentsätze des sichtbaren Zielelements darstellen. Dann meldet die API nur Änderungen in der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Zum Beispiel, wenn Sie jedes Mal informiert werden möchten, wenn die Sichtbarkeit eines Ziels vorwärts oder rückwärts durch jede 25%-Marke geht, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte bei Erstellung des Beobachters angeben.

Wenn der Rückruf aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, das den Grad der Schnittfläche zu der Wurzel so geändert hat, dass der sichtbare Anteil einen der Schwellenwerte in irgendeine Richtung überschreitet.

Sie können sehen, ob das Ziel _derzeit_ in die Wurzel schneidet, indem Sie sich die Eigenschaft [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) des Eintrags ansehen; wenn ihr Wert `true` ist, befindet sich das Ziel mindestens teilweise im Schnitt mit dem Wurzelelement oder dem Dokument. Dies lässt Sie bestimmen, ob der Eintrag einen Übergang von Elementen beschreibt, die im Schnitt sind, zu denen, die nicht im Schnitt sind, oder einen Übergang von nicht im Schnitt zu im Schnitt.

Beachten Sie, dass es möglich ist, ein Null-Schnittflächenrechteck zu haben, was passieren kann, wenn die Schnittfläche genau entlang der Grenze zwischen den beiden oder der Fläche von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) Null ist. Dieser Zustand der gemeinsamen Grenzlinie von Ziel und Wurzel wird nicht als genügend betrachtet, um als Übergang in einen im Schnitt befindlichen Zustand zu gelten.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie es, die Box weiter unten zu scrollen. Jede farbige Box zeigt ihre Sichtbarkeitsprozentangaben in allen vier ihrer Ecken an, damit Sie diese Verhältnisse im Laufe der Zeit sehen können, während Sie den Container scrollen. Jede Box hat einen anderen Satz von Schwellenwerten:

- Die erste Box hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt, das Array [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Die zweite Box hat einen einzigen Schwellenwert, am 50%-Marke.
- Die dritte Box hat Schwellenwerte bei jedem 10% der Sichtbarkeit (0%, 10%, 20%, usw.).
- Die letzte Box hat Schwellenwerte bei jedem 25%.

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

#### Verfolgung der Sichtbarkeit und Verzögerung

Standardmäßig veröffentlicht der Beobachter Benachrichtigungen, wenn das Zielelement in den Viewport des Wurzelelements gescrollt wird. Während dies in vielen Situationen ausreichend ist, ist es manchmal wichtig, dass Schnittflächen nicht gemeldet werden, wenn das Ziel "sichtbar beeinträchtigt" wurde. Zum Beispiel, wenn Analytik- oder Anzeigenimpressionen gemessen werden, ist es wichtig, dass Zielelemente nicht in Gänze oder teilweise verdeckt oder verzerrt werden.

Die Einstellung `trackVisibility` teilt dem Beobachter mit, dass er nur Schnittflächen für Ziele melden soll, die der Browser nicht als visuell beeinträchtigt ansieht, beispielsweise durch Änderungen der Deckkraft oder durch Anwendung von Filter oder Transformationen. Der Algorithmus ist konservativ und kann Elemente auslassen, die technisch sichtbar sind, wie solche mit nur einer geringen Reduzierung der Deckkraft.

Die Sichtbarkeitsberechnung ist rechenintensiv und sollte nur bei Bedarf verwendet werden. Wenn die Sichtbarkeit verfolgt wird, sollte auch eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um den Mindestmeldezeitraum zu begrenzen. Die Empfehlung ist, dass Sie die Verzögerung auf den höchstmöglichen Wert einstellen (die Mindestverzögerung bei Verfolgung der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Schnittflächenrechteck

Der Browser berechnet das endgültige Schnittflächenrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um genau zu erfassen, wann Schnittflächen auftreten werden.

1. Das Begrenzungsrechteck des Zielelements (das heißt, das kleinste Rechteck, das die Begrenzungsrahmen jedes Teils, das das Element ausmacht, vollständig umschließt) wird durch Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf dem Ziel ermittelt. Dies ist das größte Schnittflächenrechteck, das es geben kann. Die verbleibenden Schritte entfernen alle nicht überschneidenden Teile.
2. Beginnend beim unmittelbaren Elternblock des Ziels und nach außen gehend wird das Clipping (falls vorhanden) jedes enthaltenden Blocks auf das Schnittflächenrechteck angewendet. Ein Blockclipping wird basierend auf der Schnittfläche der beiden Blöcke und dem Clipping-Modus (falls vorhanden) bestimmt, der durch die {{cssxref("overflow")}}-Eigenschaft angegeben wird. Jede Einstellung von `overflow` außer `visible` verursacht Clipping.
3. Wenn eines der enthaltenden Elemente die Wurzel eines geschachtelten Browsing-Kontextes ist (wie das Dokument in einem {{HTMLElement("iframe")}}), wird das Schnittflächenrechteck auf den Viewport des enthaltenden Kontextes zugeschnitten und die Rekursion durch die Container wird mit dem enthaltenden Block des Containers fortgesetzt. Wenn also die oberste Ebene eines `<iframe>` erreicht wird, wird das Schnittflächenrechteck auf den Viewport des Rahmens beschnitten, dann ist das nächstes zu durchlaufende Element im Container das übergeordnete Element des Rahmen.
4. Wenn die Rekursion nach oben die Schnittwurzel erreicht, wird das resultierende Rechteck in den Koordinatenraum der Schnittwurzel abgebildet.
5. Das resultierende Rechteck wird dann durch Überkreuzung mit dem [Wurzelschnittrechteck](#die_schnittfläche_der_wurzel_und_der_wurzelrand) aktualisiert.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des [`document`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Beobachters, der jede Anzahl von Zielelementen mit derselben Schnittflächenkonfiguration beobachten kann. Jeder Beobachter kann asynchron Änderungen der Schnittfläche zwischen einem oder mehreren Zielelementen und einem gemeinsamen Vorfahrenelement oder mit dem Viewport ihres übergeordneten [`Document`](/de/docs/Web/API/Document)'s {{Glossary("viewport", "viewport")}} beobachten. Der Vorfahre oder der Viewport wird als **Wurzel** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittfläche zwischen dem Zielelement und seinem Wurzelcontainer zu einem bestimmten Übergangszeitpunkt. Objekte dieser Art können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Rückruf oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass ein Zielelement seine Farbe und Transparenz ändert, wenn es mehr oder weniger sichtbar wird. Unter [Timing Element Visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein ausführlicheres Beispiel, das zeigt, wie lange ein Set von Elementen (z. B. Anzeigen) für den Benutzer sichtbar sind und wie Sie darauf reagieren können, indem Sie Statistiken aufzeichnen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz und enthält ein Hauptelement, das wir als Ziel verwenden werden (mit der kreativen ID `"box"`) und einige Inhalte innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element aus und stellt sicher, dass die {{cssxref("background-color")}}- und {{cssxref("border")}}-Attribute an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen des Elements zu bewirken, wenn es mehr oder weniger verdeckt wird.

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
window.addEventListener("load", (event) => {
  boxElement = document.querySelector("#box");

  createObserver();
});
```

Die Konstanten und Variablen, die wir hier einrichten, sind:

- `numSteps`
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Sichtbarkeitsverhältnis von 0.0 und 1.0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um zu speichern, was das Sichtbarkeitsverhältnis beim letzten Mal war, als ein Schwellenwert überschritten wurde; dies wird es uns ermöglichen herauszufinden, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in diesem String wird ersetzt durch das aktuelle Sichtbarkeitsverhältnis des Ziels, sodass sich das Element nicht nur farblich verändert, sondern auch zunehmend undurchsichtig wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ähnlich dazu ist dies ein String, der eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um damit zu beginnen, auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu hören; sobald die Seite vollständig geladen ist, erhalten wir eine Referenz auf das Element mit der ID `"box"` durch Verwendung von [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die Methode `createObserver()` auf, die wir in einem Moment erstellen werden, um die Erstellung und Installation des Intersection Observer zu handhaben.

#### Erstellen des Intersection Observers

Die `createObserver()`-Methode wird aufgerufen, sobald der Seitenladevorgang abgeschlossen ist, um die Erstellung des neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und den Beginn des Beobachtungsprozesses des Zielelements zu übernehmen.

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

Dies beginnt mit der Einrichtung eines `options`-Objekts, das die Einstellungen für den Beobachter enthält. Wir möchten Änderungen in der Sichtbarkeit des Zielelements relativ zum Viewport des Dokuments überwachen, daher ist `root` `null`. Wir benötigen keinen Rand, also ist der Randoffset, `rootMargin`, als "0px" angegeben. Dies bewirkt, dass der Beobachter die Änderungen in der Schnittfläche zwischen den Grenzen des Zielelements und denen des Viewports ohne hinzugefügten (oder subtrahierten) Raum überwacht.

Die Liste der Sichtbarkeitsverhältnisschwellenwerte, `threshold`, wird durch die Funktion `buildThresholdList()` konstruiert. Die Schwellenwertliste wird in diesem Beispiel programmatisch erstellt, da es eine Anzahl davon gibt und die Anzahl in gewissem Maße anpassbar ist.

Sobald `options` bereit ist, erstellen wir den neuen Beobachter, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen und eine Funktion angeben, die aufgerufen wird, wenn die Schnittfläche einen unserer Schwellenwerte überschreitet, `handleIntersect()`, sowie unsere Menge an Optionen. Dann rufen wir [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Beobachter auf, wobei wir ihm das gewünschte Zielelement übergeben.

Wir könnten beschließen, mehrere Elemente hinsichtlich Schnittflächenveränderungen mit dem Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies möchten.

#### Erstellen des Arrays mit Schwellenverhältnissen

Die `buildThresholdList()`-Funktion, die die Liste der Schwellenwerte erstellt, sieht so aus:

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

Dies erstellt das Array von Schwellenwerten – jedes davon ist ein Verhältnis zwischen 0.0 und 1.0 indem es den Wert `i/numSteps` in das `thresholds`-Array für jede ganze Zahl `i` zwischen 1 und `numSteps` einfügt. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis, gegeben dem Standardwert von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Natürlich könnten wir das Array mit Schwellenwerten in unserem Code fest codieren, und oft ist das, was Sie am Ende tun werden. Aber dieses Beispiel lässt Raum, um Konfigurationsteuerungen hinzuzufügen, um die Granularität anzupassen, zum Beispiel.

#### Umgang mit Schnittflächenänderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall das Element mit der ID `"box"`) enthüllt oder verdeckt wurde, sodass das Sichtbarkeitsverhältnis einen unserer Schwellenwerte in der Liste überschreitet oder unterschreitet, wird unsere Handler-Funktion `handleIntersect()` aufgerufen:

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

Für jedes `IntersectionObserverEntry` aus der Liste `entries` schauen wir nach, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags ansteigt; wenn ja, setzen wir die {{cssxref("background-color")}} des Ziels auf den string `increasingColor` und ersetzen das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur ändert sich die Farbe, sondern auch die Transparenz des Zielelements; wenn das Verhältnis der Schnittfläche sinkt, sinkt auch der Alphawert der Hintergrundfarbe, was zu einem Element führt, das durchsichtiger wird.

Ähnlich dazu, wenn das `intersectionRatio` sinkt, verwenden wir den String `decreasingColor` und ersetzen das Wort "ratio" darin durch das `intersectionRatio`, bevor wir die `background-color` des Zielelements setzen.

Schließlich, um zu verfolgen, ob das Verhältnis der Schnittfläche ansteigt oder sinkt, merken wir uns das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt. Scrollen Sie diese Seite nach oben und unten und beachten Sie, wie sich das Erscheinungsbild der Box verändert, während Sie dies tun.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Es gibt ein noch umfassenderes Beispiel unter [Timing Element Visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
