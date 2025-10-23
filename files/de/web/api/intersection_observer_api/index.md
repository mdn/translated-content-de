---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 648bee8b8933660f908cf9748b4153619ef16cc6
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen im Schnittpunkt eines Ziel-Elements mit einem übergeordneten Element oder mit dem {{Glossary("viewport", "Viewport")}} eines Dokumentes der obersten Ebene asynchron zu beobachten.

## Überblick

Historisch war es eine schwierige Aufgabe, die Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente zueinander zu ermitteln. Die Lösungen hierfür waren oft unzuverlässig und führten dazu, dass der Browser und die von Nutzern aufgerufenen Websites langsam wurden. Mit der Reifung des Internets ist das Bedürfnis nach dieser Art von Informationen gewachsen. Die Schnittstelleninformation ist aus vielen Gründen notwendig, wie z.B.:

- Verzögertes Laden von Bildern oder anderen Inhalten, wenn die Seite gescrollt wird.
- Implementierung von "unendlich scrollenden" Websites, auf denen mehr und mehr Inhalt beim Scrollen geladen und dargestellt wird, sodass der Nutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Werbeanzeigen, um Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationsprozesse durchgeführt werden sollen, basierend darauf, ob der Nutzer das Ergebnis sehen wird oder nicht.

Die Implementierung von Schnittstellendetektion in der Vergangenheit beinhaltete Ereignis-Handler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, um die benötigten Informationen für jedes betroffene Element zu ermitteln. Da dieser ganze Code im Hauptthread läuft, kann sogar eine einzige Auslösung dieses Codes Performance-Probleme verursachen. Wenn eine Seite viele dieser Tests enthält, kann die Situation völlig unübersichtlich werden.

Betrachten Sie eine Webseite, die unendliches Scrollen verwendet. Sie verwendet eine von einem Anbieter bereitgestellte Bibliothek, um die auf der Seite platzierten Anzeigen zu verwalten, hat hier und da animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsfelder und dergleichen zeichnet. Jede dieser Bibliotheken hat ihre eigenen Routinen zur Schnittstellendetektion, die alle im Hauptthread laufen. Der Seitenautor ist sich möglicherweise nicht einmal bewusst, dass all dies passiert, da er möglicherweise nur wenig über die Funktionsweise der verwendeten Bibliotheken weiß. Während der Nutzer die Seite scrollt, werden diese Schnittstellendetektionsroutinen ständig im Scroll-Handling-Code ausgelöst, was zu einem Erlebnis führt, das den Nutzer frustriert zurücklässt, sowohl mit dem Browser als auch mit der Webseite und dem Computer.

Die Intersection Observer API ermöglicht es, eine Rückruffunktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element einen Schnittpunkt mit einem anderen Element betritt oder verlässt (oder dem {{Glossary("viewport", "Viewport")}}), oder wenn sich der Schnittpunkt zwischen zwei Elementen um einen spezifizierten Betrag ändert. Auf diese Weise müssen Websites nichts mehr im Hauptthread tun, um auf diese Art von Schnittstellen zu achten, und der Browser kann die Verwaltung der Schnittstellen nach eigenem Ermessen optimieren.

Eine Sache, die die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl überlappender Pixel oder spezifisch darauf, welche Pixel überlappen, auslösen. Sie löst nur den allgemeinen Anwendungsfall "Wenn sie sich um ungefähr _N_% überschneiden, muss ich etwas tun" aus.

## Konzepte und Nutzung

Die Intersection Observer API ermöglicht es Ihnen, eine Rückruffunktion zu konfigurieren, die in einem der folgenden Fälle aufgerufen wird:

- Ein **Ziel**-Element schneidet entweder den Viewport des Geräts oder ein spezifiziertes Element. Dieses spezifizierte Element wird als **ursprüngliches Element** oder kurz **Wurzel** für die Zwecke der Intersection Observer API bezeichnet.
- Das erste Mal, dass der Observer aufgefordert wird, ein Ziel-Element zu beobachten.

Typischerweise möchten Sie Schnittstellenänderungen im Hinblick auf den nächsten scrollbaren Vorfahren des Ziel-Elements beobachten oder, wenn das Ziel-Element kein Nachkomme eines scrollfähigen Elements ist, den Viewport des Geräts. Um die Schnittstelle relativ zum Viewport des Geräts zu beobachten, geben Sie `null` für die Option `root` an. Lesen Sie weiter für eine detailliertere Erklärung der Optionen des Schnittstellen-Observers.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Wurzel verwenden, funktioniert die API auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Rückruffunktion ausführt, wenn die Sichtbarkeit des Ziel-Elements so ändert, dass es die gewünschten Schnittstellenanteile mit der Wurzel überschreitet.

Der Grad der Schnittstelle zwischen dem Ziel-Element und seiner Wurzel ist das **Schnittstellenverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Ziel-Elements, das sichtbar ist, als Wert zwischen 0.0 und 1.0.

### Erstellen eines Schnittstellen-Observers

Erstellen Sie den Schnittstellen-Observer, indem Sie dessen Konstruktor aufrufen und ihm eine Rückruffunktion übergeben, die immer dann ausgeführt wird, wenn eine Schwelle in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Eine Schwelle von 1.0 bedeutet, dass die Rückruffunktion aufgerufen wird, wenn 100 % des Ziels innerhalb des Elements sichtbar wird, das durch die Option `root` angegeben ist.

#### Optionen des Schnittstellen-Observers

Das `options`-Objekt, das in den Konstruktor von [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Umstände zu kontrollieren, unter denen die Rückruffunktion des Observers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport zur Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahre des Ziels sein. Standardmäßig ist dies der Browser-Viewport, wenn nicht angegeben oder wenn `null`.
- `rootMargin`
  - : Rand um die Wurzel. Ein String aus einem bis vier Werten, ähnlich der CSS-Eigenschaft {{cssxref("margin")}}, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur in Pixeln (`px`) oder Prozent (`%`) angegeben werden. Dieses Set von Werten dient dazu, jede Seite der Begrenzungsbox des Wurzelelements vor der Berechnung von Schnittstellen zu vergrößern oder zu verkleinern. Negative Werte verkleinern die Begrenzungsbox des Wurzelelements und positive Werte vergrößern sie. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "Scroll-Container")}}, der die gleichen Werte annimmt / denselben Standard wie `rootMargin` hat.
    Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Schnittstellen berechnet werden.
    Positive Werte vergrößern das Clip-Rechteck des Containers, sodass Ziele schon schneiden können, bevor sie sichtbar werden, während negative Werte das Clip-Rechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels die Rückruffunktion des Observers ausgeführt werden soll. Wenn Sie nur feststellen möchten, wann die Sichtbarkeit die 50%-Marke passiert, können Sie einen Wert von 0.5 verwenden. Wenn die Rückruffunktion jedes Mal ausgeführt werden soll, wenn die Sichtbarkeit ein weiteres 25% passiert, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standard ist 0 (was bedeutet, dass die Rückruffunktion ausgeführt wird, sobald das Ziel-Element die Grenze der Wurzel berührt oder überschreitet, auch wenn noch keine Pixel sichtbar sind). Ein Wert von 1.0 bedeutet, dass die Schwelle erst als überschritten betrachtet wird, wenn jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Wenn Sie die Sichtbarkeit des Ziels verfolgen ([trackVisibility](#trackvisibility) ist `true`), kann dies verwendet werden, um die minimale Verzögerung in Millisekunden zwischen Benachrichtigungen dieses Observers einzustellen.
    Es ist wünschenswert, die Benachrichtigungsrate zu begrenzen, da die Sichtbarkeitsberechnung rechnerisch intensiv ist.
    Wenn Sie die Sichtbarkeit verfolgen, wird der Wert auf 100 gesetzt, wenn er weniger als 100 beträgt, und Sie sollten den größten tolerierbaren Wert verwenden.
    Der Wert ist standardmäßig 0.
- `trackVisibility` {{experimental_inline}}
  - : Ein Boolean, der angibt, ob dieser `IntersectionObserver` Änderungen in der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Schnittstellen, wenn das Ziel-Element in den Viewport des Wurzelelements scrollt.
    Wenn `true`, überprüft der Browser zusätzlich, dass das Ziel tatsächlich sichtbar ist und nicht durch andere Elemente verdeckt oder möglicherweise durch einen Filter, reduzierte Opazität oder eine Transformation verzerrt oder verborgen wurde.
    Der Wert ist standardmäßig `false`, da die Verfolgung der Sichtbarkeit rechnerisch intensiv ist.
    Wenn dies festgelegt ist, sollte auch eine [`delay`](#delay) festgelegt werden.

#### Rückrufe bei Schnittstellenänderung

Der Rückruf, der dem Konstruktor von `IntersectionObserver()` übergeben wird, erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und dem Observer:

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

Die Liste der durch den Rückruf empfangenen Einträge umfasst ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Ereignis, das eine Schwelle überschreitet — mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem Ziel, das mehrere Schwellen in kurzer Zeit überschreitet. Die Einträge werden unter Verwendung einer Warteschlange versendet, sodass sie in der Reihenfolge geordnet sein sollten, in der sie generiert wurden, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem gegebenen Element mit dem Wurzelelement schneidet, ob das Element als schneidend angesehen wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen speziellen Moment — wenn Sie Informationen benötigen, die eine Verfolgung über die Zeit erfordern, wie z.B. die Scrollrichtung und -geschwindigkeit, müssen Sie dies möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge speichern.

Seien Sie sich bewusst, dass Ihr Rückruf im Hauptthread ausgeführt wird. Er sollte so schnell wie möglich operieren; wenn etwas Zeitaufwändiges erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeschnippsel zeigt einen Rückruf, der zählt, wie oft Elemente den Übergang von „nicht schneidend“ zu „mindestens 75 % schneidend“ überschreiten. Für einen Schwellenwert von 0.0 (Standard) wird der Rückruf ungefähr beim Übergang des Booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Snippet überprüft daher zuerst, dass der Übergang ein positiver ist, und bestimmt dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75 % liegt, in diesem Fall wird der Zähler erhöht.

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

#### Ein Ziel-Element zum Beobachten festlegen

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Ziel-Element zum Überwachen geben:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel eine spezifizierte Schwelle für den `IntersectionObserver` erreicht, wird der Rückruf aufgerufen.

Beachten Sie auch, dass, wenn Sie die Option `root` angegeben haben, das Ziel ein Nachkomme des Wurzelelements sein muss.

### Wie der Schnittpunkt berechnet wird

Alle von der Intersection Observer API berücksichtigten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck betrachtet, das alle Teile des Elements einschließt. Ebenso, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Schnittstellenrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein bisschen darüber zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften einen Schnittpunkt beschreiben.

#### Die Schnittstellenwurzel und der Wurzelrand

Bevor wir den Schnittpunkt eines Elements mit einem Container verfolgen können, müssen wir wissen, welcher Container das ist. Dieser Container ist die **Schnittstellenwurzel** oder **Wurzelelement**. Dies kann entweder ein spezifisches Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Schnittstellenwurzelrechteck_** ist das Rechteck, das zum Überprüfen der Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn die Schnittstellenwurzel die implizite Wurzel ist (d.h. das oberste [`Document`](/de/docs/Web/API/Document)), ist das Schnittstellenwurzelrechteck das Rechteck des Viewports.
- Wenn die Schnittstellenwurzel einen Überlauf-Clip hat, ist das Schnittstellenwurzelrechteck der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Schnittstellenwurzelrechteck das Begrenzungsrechteck des Wurzelelements (wie es durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben wird).

Das Schnittstellenwurzelrechteck kann weiter angepasst werden, indem der **Wurzelrand**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) festgelegt wird. Die Werte in `rootMargin` definieren Offsets, die jeder Seite der Begrenzungsbox der Schnittstellenwurzel hinzugefügt werden, um die endgültigen Schnittstellenwurzelgrenzen zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) offengelegt werden, wenn der Rückruf ausgeführt wird). Positive Werte vergrößern die Box, während negative Werte sie verkleinern. Jeder Offset-Wert kann nur in Pixeln (px) oder in Prozent (%) ausgedrückt werden.

Der Effekt des Vergrößerns der Box mit dem Wurzelrand besteht darin, dass Überlaufelemente vor ihrer Sichtbarkeit mit der Wurzel schneiden können.
Dies kann verwendet werden, um beispielsweise Bilder kurz vor ihrer Sichtbarkeit zu laden, anstatt wenn sie sichtbar werden.

Im folgenden Beispiel haben wir eine scrollbare Box und ein Element, das anfangs nicht sichtbar ist.
Sie können den rechten Rand der Wurzel anpassen und sehen, dass:

- Wenn der Rand positiv ist, gilt das rote Element als mit der Wurzel schneidend, obwohl es nicht sichtbar ist, weil es mit dem Randbereich der Wurzel schneidet.
- Wenn der Rand negativ ist, wird das rote Element selbst dann, wenn es sichtbar wird, nicht als mit der Wurzel schneidend angesehen, weil die Begrenzungsbox der Wurzel verkleinert wird.

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

{{EmbedLiveSample("die Schnittstellenwurzel und der Wurzelrand", "", 200)}}

#### Die Schnittstellenwurzel und der Scroll-Rand

Betrachten Sie den Fall, in dem Sie ein Wurzelelement haben, das verschachtelte {{Glossary("scroll_container", "Scroll-Container")}} enthält und Sie Schnittstellen mit einem Ziel innerhalb eines dieser scrollbaren Container beobachten möchten.
Schnittstellen mit dem Ziel-Element werden standardmäßig beobachtbar, wenn das Ziel innerhalb des durch die Wurzel definierten Bereichs sichtbar ist;
mit anderen Worten, wenn der Container in der Wurzelansicht sichtbar wird und das Ziel im Clip-Rechteck seines Containers sichtbar wird.

Sie können einen Scroll-Rand verwenden, um Schnittstellen zu beobachten, bevor oder nachdem das Ziel innerhalb seines Scroll-Containers in die Sicht scrolled.
Der Rand wird auf alle verschachtelten Scroll-Container in der Wurzel angewendet, einschließlich des Wurzelelements, falls es auch ein Scroll-Container ist, und hat den Effekt, entweder die Clip-Region, die zur Berechnung von Schnittstellen verwendet wird, zu erweitern (positive Ränder) oder zu verkleinern (negative Ränder).

> [!NOTE]
> Sie könnten einen Schnittstellen-Observer auf jedem Scroll-Container erstellen, für den Sie einen Scroll-Rand wünschen, und die Wurzelrand-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen.
> Die Verwendung eines Scroll-Randes ist ergonomischer, da Sie in den meisten Fällen nur einen Schnittstellen-Observer für alle verschachtelten Ziel-Elemente benötigen.

Im Beispiel unten haben wir eine scrollbare Box und ein Karussell mit Bildern, die anfänglich nicht sichtbar sind.
Ein Observer auf dem Wurzelelement beobachtet die Bildziele im Karussell.
Wenn ein Bildziel mit dem Wurzelelement zu schneiden beginnt, wird das Bild geladen, die Schnittstelle protokolliert und der Observer entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen.
Die sichtbaren Bilder sollten sofort geladen werden.
Wenn Sie das Karussell scrollen, sollten Sie sehen, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nach dem Zurücksetzen des Beispiels können Sie mit der bereitgestellten Steuerung den Scroll-Rand-Prozentsatz ändern.
Wenn Sie einen positiven Wert wie 20% einstellen, wird das Clip-Rechteck des Scroll-Containers um 20% vergrößert und Sie sollten sehen, dass Bilder erkannt und geladen werden, bevor sie in die Ansicht kommen.
Ähnlich bedeutet ein negativer Wert, dass der Schnittpunkt erst erkannt wird, wenn Bilder bereits sichtbar sind.

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

{{EmbedLiveSample("Die Schnittstellenwurzel und der Scroll-Rand","100%","500px")}}

#### Schwellenwerte

Anstatt jede minimale Änderung in dem, wie viel ein Ziel-Element sichtbar ist, zu berichten, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie eine oder mehrere numerische Werte angeben, die Prozentsätze des sichtbaren Ziel-Elements darstellen. Dann meldet die API nur Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Zum Beispiel, wenn Sie jedes Mal informiert werden wollen, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts durch jede 25%-Markierung überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte angeben, wenn Sie den Observer erstellen.

Wenn der Rückruf aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Grad der Schnittstelle mit der Wurzel sich so geändert hat, dass das Maß, das angezeigt wird, über einen der Schwellenwerte hinausgeht, in beiden Richtungen.

Sie können sehen, ob das Ziel _derzeit_ die Wurzel schneidet, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags betrachten; wenn ihr Wert `true` ist, schneidet das Ziel zumindest teilweise das Wurzelelement oder das Dokument. Dies ermöglicht es Ihnen zu bestimmen, ob der Eintrag einen Übergang von den Elementen darstellt, die schneiden zu denen die nicht mehr schneiden oder einen Übergang von nicht schneiden zu schneiden.

Beachten Sie, dass es möglich ist, ein null-Schnittflächenrechteck zu haben, das auftreten kann, wenn der Schnitt genau entlang der Grenze zwischen den beiden verläuft oder die Fläche von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, dass das Ziel und die Wurzel eine Grenzlinie teilen, wird nicht als ausreichend angesehen, um als Übergangs in einen schneidenden Zustand betrachtet zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, die Box unten herum zu scrollen. Jede farbige Box darin zeigt den Prozentsatz von sich, der in allen ihren vier Ecken sichtbar ist, sodass Sie sehen können, wie sich diese Verhältnisse im Laufe der Zeit ändern, während Sie den Container scrollen. Jede Box hat eine andere Menge von Schwellenwerten:

- Die erste Box hat einen Schwellenwert für jeden Prozentsatzpunkt der Sichtbarkeit; das heißt, das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds)-Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Die zweite Box hat nur einen Schwellenwert, bei der 50%-Marke.
- Die dritte Box hat Schwellenwerte alle 10% der Sichtbarkeit (0%, 10%, 20% usw.).
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

{{EmbedLiveSample("Schwellenwerte", 500, 500)}}

#### Sichtbarkeit verfolgen und Verzögerung

Standardmäßig bietet der Observer Benachrichtigungen, wenn das Ziel-Element in den Blickpunkt des Wurzelelements gescrollt wird.
Während dies für viele Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Schnittstellen nicht gemeldet werden, wenn das Ziel "visuell beeinträchtigt" wurde.
Zum Beispiel ist es bei der Messung von Analysen oder Anzeigenansichten wichtig, dass Zielelemente nicht in ihrer Gesamtheit verdeckt oder verzerrt wurden.

Die Einstellung `trackVisibility` teilt dem Observer mit, nur Schnittstellen für Ziele zu melden, die der Browser nicht als visuell beeinträchtigt ansieht, z.B. durch Änderung der Opazität, oder durch Anwendung eines Filters oder einer Transformation.
Der Algorithmus ist konservativ und könnte Elemente auslassen, die technisch sichtbar sind, z.B. solche mit nur einer leichten Reduzierung der Opazität.

Die Sichtbarkeitsberechnung ist rechnerisch teuer und sollte nur bei Bedarf verwendet werden.
Wenn die Sichtbarkeit verfolgt wird, sollte auch eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um die minimale Berichtsperiode zu begrenzen.
Die Empfehlung ist, dass Sie die Verzögerung auf den größten tolerierbaren Wert setzen (die minimale Verzögerung beim Verfolgen der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Schnittflächenrechteck

Der Browser berechnet das endgültige Schnittflächenrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um genau zu verstehen, wann Schnittstellen auftreten.

1. Das Begrenzungsrechteck des Ziel-Elements (das heißt, das kleinste Rechteck, das die Begrenzungsboxen jeder Komponente, aus der das Element besteht, vollständig umschließt) wird durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf dem Ziel erhalten.
   Dies ist das größte, was das Schnittflächenrechteck sein kann. Die verbleibenden Schritte werden alle Teile, die nicht schneiden, entfernen.
2. Beginnend beim unmittelbaren Elternblock des Ziels und nach außen bewegt, wird das Clipping (falls vorhanden) jedes enthaltenen Blocks auf das Schnittflächenrechteck angewendet.
   Ein Block's Clipping wird basierend auf dem Schnitt der beiden Blocks und dem Clipping-Modus (falls vorhanden), der durch die {{cssxref("overflow")}}-Eigenschaft angegeben wird, bestimmt. Das Einstellen von `overflow` auf etwas anderes als `visible` verursacht das Auftreten von Clipping.
3. Wenn eines der enthaltenen Elemente die Wurzel eines geschachtelten Browsing-Kontextes ist (wie das Dokument in einem {{HTMLElement("iframe")}}), wird das Schnittflächenrechteck auf den Viewport des enthaltenen Kontexts beschränkt, und die Rekursion aufwärts durch die Container wird mit dem enthaltenen Block des Containers fortgesetzt. Wenn also die oberste Ebene eines `<iframe>` erreicht ist, wird das Schnittflächenrechteck auf den Viewport des Frames beschränkt, dann ist das Eltern-Element des Frames der nächste Block, der aufwärts durch die Schnittstellenwurzel rekursiert wird.
4. Wenn die Rekursion aufwärts die Schnittstellenwurzel erreicht, wird das resultierende Rechteck in den Koordinatenraum der Schnittstellenwurzel kartiert.
5. Das resultierende Rechteck wird dann aktualisiert, indem es mit dem [Schnittstellenwurzelrechteck](#die_schnittstellenwurzel_und_der_wurzelrand) geschnitten wird.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des [`Dokuments`](/de/docs/Web/API/Document) des Ziels kartiert.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Observers, der eine beliebige Anzahl von Ziel-Elementen für dieselbe Schnittstellenkonfiguration beobachten kann. Jeder Observer kann Änderungen des Schnittpunkts zwischen einem oder mehreren Ziel-Elementen und einem gemeinsamen Vorfahren-Element asynchron beobachten oder mit dem {{Glossary("viewport", "Viewport")}} ihres obersten [`Dokuments`](/de/docs/Web/API/Document). Der Vorfahre oder der Viewport wird als **Wurzel** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt den Schnittpunkt zwischen dem Ziel-Element und seinem Wurzelcontainer zu einem spezifischen Moment des Übergangs. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe in Ihren `IntersectionObserver`-Rückruf oder durch den Aufruf von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel führt dazu, dass ein Ziel-Element seine Farbe und Transparenz ändert, wenn es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein ausführlicheres Beispiel, das zeigt, wie man misst, wie lange eine Gruppe von Elementen (wie Anzeigen) für den Benutzer sichtbar ist, und wie auf diese Informationen reagiert werden kann, indem Statistiken aufgezeichnet oder Elemente aktualisiert werden.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem Hauptelement, das die Box ist, auf die wir abzielen werden (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element aus und stellt sicher, dass die Eigenschaften {{cssxref("background-color")}} und {{cssxref("border")}} an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu beeinflussen, wenn es mehr oder weniger verdeckt wird.

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

#### Einrichten

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
  - : Diese Variable wird verwendet, um aufzuzeichnen, wie das Sichtbarkeitsverhältnis das letzte Mal war, als eine Schwelle überschritten wurde; dies wird uns helfen herauszufinden, ob das Ziel-Element mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Ziel-Element anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "Verhältnis" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass das Element nicht nur die Farbe ändert, sondern auch zunehmend opak wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ähnlich ist dies ein String, der eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir erhalten eine Referenz zu dem Element mit der ID `"box"` über [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die Methode `createObserver()` auf, die wir in einem Moment erstellen werden, um den Aufbau und die Installation des Schnittstellen-Observers zu bearbeiten.

#### Erstellen des Schnittstellen-Observers

Die Methode `createObserver()` wird einmalig nach dem Laden der Seite aufgerufen, um den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) tatsächlich zu erstellen und den Prozess des Überwachens des Ziel-Elements zu starten.

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

Dies beginnt mit der Erstellung eines `options`-Objekts, das die Einstellungen für den Observer enthält. Wir möchten Änderungen der Sichtbarkeit des Ziel-Elements im Vergleich zum Dokumenten-Viewport beobachten, daher ist `root` `null`. Wir brauchen keinen Rand, also wird der Margenoffset, `rootMargin`, als "0px" angegeben. Dies führt dazu, dass der Beobachter Änderungen der Schnittstelle zwischen den Begrenzungen des Ziel-Elements und denen des Viewports überwacht, ohne dass zusätzlicher (oder verringerter) Raum hinzugefügt wird.

Die Liste der Sichtbarkeitsverhältnisschwellen, `threshold`, wird von der Funktion `buildThresholdList()` konstruiert. Die Liste der Schwellenwerte wird in diesem Beispiel programmgesteuert aufgebaut, da es eine Anzahl davon gibt und die Anzahl anpassbar sein soll.

Sobald `options` fertig ist, erstellen wir den neuen Observer, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen und eine Funktion angeben, die aufgerufen werden soll, wenn eine unserer Schwellenwerte überschritten wird, `handleIntersect()`, und unser Set von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) an dem zurückgegebenen Observer auf und übergeben ihm das gewünschte Ziel-Element.

Wir könnten uns entscheiden, für jeden dieser Elemente die Sichtbarkeitsschnittstellenänderungen im Hinblick auf den Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir das tun wollten.

#### Aufbau des Arrays von Schwellenwertverhältnissen

Die Funktion `buildThresholdList()`, welche die Liste der Schwellenwerte aufbaut, sieht so aus:

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

Dies erstellt das Array von Schwellenwerten—jeweils ein Verhältnis zwischen 0.0 und 1.0, indem es den Wert `i/numSteps` in das `thresholds`-Array für jede Ganzzahl `i` zwischen 1 und `numSteps` einfügt. Es fügt auch 0 hinzu, um diesen Wert einzubeziehen. Das Ergebnis, unter Verwendung des Standardwerts für `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Wir könnten natürlich das Array von Schwellenwerten in unseren Code festcodieren, und oft wird das passieren. Aber dieses Beispiel lässt Raum für die Hinzufügung von Konfigurationseinstellungen, um die Granularität anzupassen, zum Beispiel.

#### Umgang mit Schnittstellenänderungen

Wenn der Browser erkennt, dass das Ziel-Element (in unserem Fall das mit der ID `"box"`) so sichtbar oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis eine unserer Schwellenwerte in unserer Liste überschreitet, ruft es unsere Handler-Funktion `handleIntersect()` auf:

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

Für jeden [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries`, schauen wir nach, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags ansteigt; wenn dies der Fall ist, setzen wir die {{cssxref("background-color")}} des Ziels auf den String in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzt das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur die Farbe wird geändert, sondern auch die Transparenz des Ziel-Elements ändert sich; während das Schnittverhältnis sinkt, sinkt auch der Alpha-Wert der Hintergrundfarbe, was zu einem Element führt, das transparenter wird.

Ebenso, wenn das `intersectionRatio` sinkt, verwenden wir den String `decreasingColor` und ersetzen das Wort "ratio" darin durch das `intersectionRatio`, bevor wir die `background-color` des Ziel-Elements setzen.

Schließlich, um zu verfolgen, ob das Schnittverhältnis steigt oder sinkt, speichern wir das aktuelle Verhältnis in der Variablen `prevRatio`.

### Ergebnis

Nachfolgend ist der resultierende Inhalt. Scrollen Sie diese Seite hoch und runter und beachten Sie, wie sich das Aussehen der Box verändert, während Sie dies tun.

{{EmbedLiveSample('Ein_einfaches_Beispiel', 400, 400)}}

Es gibt ein noch ausführlicheres Beispiel bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
