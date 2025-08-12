---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Überschneidung eines Ziel-Elements mit einem Vorfahren-Element oder mit dem {{Glossary("viewport", "Viewport")}} eines übergeordneten Dokuments asynchron zu beobachten.

## Übersicht

Historisch gesehen war die Erkennung der Sichtbarkeit eines Elements oder die relative Sichtbarkeit von zwei Elementen zueinander eine schwierige Aufgabe, für die Lösungen unzuverlässig waren und dazu neigten, den Browser und die vom Benutzer aufgerufenen Websites zu verlangsamen. Da sich das Web weiterentwickelt hat, ist der Bedarf an dieser Art von Informationen gestiegen. Überschneidungsinformationen werden aus vielen Gründen benötigt, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderen Inhalten beim Scrollen einer Seite.
- Implementierung von "Infinite Scrolling"-Websites, bei denen mehr und mehr Inhalte geladen und dargestellt werden, während Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um Werbeeinnahmen zu kalkulieren.
- Entscheidungen darüber treffen, ob Aufgaben oder Animationsprozesse durchgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird oder nicht.

In der Vergangenheit beinhaltete die Implementierung der Überschneidungserkennung Ereignishandler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufrufen, um die benötigten Informationen für jedes betroffene Element aufzubauen. Da all dieser Code im Hauptthread läuft, kann selbst einer dieser Fälle Leistungsprobleme verursachen. Wenn eine Seite mit diesen Tests geladen ist, können die Dinge richtig unschön werden.

Denken Sie an eine Webseite, die Infinity-Scrolling verwendet. Sie verwendet eine vom Anbieter bereitgestellte Bibliothek, um die Anzeigen zu verwalten, die regelmäßig über die Seite verteilt sind, verfügt über animierte Grafiken hier und dort und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und dergleichen erstellt. Jedes dieser Elemente hat seine eigenen Überschneidungserkennungsroutinen, die alle im Haupt-Thread laufen. Der Autor der Website bemerkt möglicherweise nicht einmal, dass dies geschieht, da er möglicherweise sehr wenig über die Funktionsweise der beiden Bibliotheken, die er verwendet, weiß. Wenn der Benutzer die Seite scrollt, werden diese Routinen zur Überschneidungserkennung ständig während des Scroll-Handlungscodes ausgeführt, was zu einer Erfahrung führt, die den Benutzer frustriert über den Browser, die Website und seinen Computer zurücklässt.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die immer dann ausgeführt wird, wenn ein bestimmtes Element in eine Überschneidung mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) eintritt oder aus dieser austritt, oder wenn die Überschneidung zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites nichts mehr im Haupt-Thread tun, um auf diese Art von Elementüberschneidungen zu achten, und der Browser ist frei, die Verwaltung der Überschneidungen nach eigenem Ermessen zu optimieren.

Eine Sache, die die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl an überlappenden Pixeln auslösen oder genau, welche sie sind. Sie löst nur den häufigen Anwendungsfall des "Wenn sie sich irgendwo um _N_% überschneiden, muss ich etwas tun" aus.

## Konzepte und Verwendung

Die Intersection Observer API ermöglicht Ihnen das Konfigurieren eines Callbacks, das aufgerufen wird, wenn eine dieser Bedingungen eintritt:

- Ein **Ziel**-Element überschneidet entweder den Viewport des Geräts oder ein spezifiziertes Element. Dieses spezifizierte Element wird für die Zwecke der Intersection Observer API als **Wurzelelement** oder **Wurzel** bezeichnet.
- Das erste Mal, wenn der Beobachter anfangs gebeten wird, ein Zielelement zu überwachen.

Typischerweise möchten Sie Überschneidungsänderungen in Bezug auf den nächsten scrollbareren Vorfahren des Ziel-Elements beobachten, oder, wenn das Ziel-Element kein Nachfahre eines scrollbaren Elements ist, den Viewport des Geräts. Um Überschneidungen relativ zum Viewport des Geräts zu beobachten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung der Intersection Observer-Optionen.

Egal, ob Sie den Viewport oder ein anderes Element als Wurzel verwenden, die API funktioniert auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Callback-Funktion ausführt, wann immer sich die Sichtbarkeit des Ziel-Elements so ändert, dass es gewünschte Mengen an Überschneidung mit der Wurzel überschreitet.

Der Grad der Überschneidung zwischen dem Ziel-Element und seiner Wurzel ist das **Überschneidungsverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Ziel-Elements, das als Wert zwischen 0.0 und 1.0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die ausgeführt wird, wann immer eine Schwelle in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Eine Schwelle von 1,0 bedeutet, dass die Callback-Funktion ausgeführt wird, wenn 100 % des Ziels innerhalb des durch die `root`-Option angegebenen Elements sichtbar sind.

#### Optionen des Intersection Observers

Das `options`-Objekt, das in den Konstruktor von [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht Ihnen die Kontrolle über die Bedingungen, unter denen der Callback des Beobachters aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport zur Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss ein Vorfahre des Ziels sein. Standardmäßig der Browser-Viewport, wenn nicht angegeben oder `null` ist.
- `rootMargin`
  - : Rand um die Wurzel. Ein String von einem bis vier Werten ähnlich der CSS-Eigenschaft {{cssxref("margin")}}, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur in Pixeln (`px`) oder Prozentsätzen (`%`) angegeben werden. Diese Wertemenge dient dazu, jede Seite der Begrenzungsbox des Wurzelelements vor der Berechnung von Überschneidungen zu vergrößern oder zu verkleinern. Negative Werte verkleinern die Begrenzungsbox des Wurzelelements und positive Werte vergrößern sie. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "Scroll-Container")}}, der die gleichen Werte verwendet/die gleichen Standardwerte wie `rootMargin` hat.
    Die Abstände werden auf verschachtelte scrollbare Container angewendet, bevor die Überschneidungen berechnet werden.
    Positive Werte vergrößern das Clipping-Rechteck des Containers, sodass Ziele im Bereich des Interesses sichtbar erscheinen, während negative Werte das Clipping-Rechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Beobachters ausgeführt werden soll. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie möchten, dass der Callback bei jedem Überschreiten von 25% ausgeführt wird, geben Sie das Array \[0, 0,25, 0,5, 0,75, 1] an. Der Standardwert ist 0 (bedeutet, dass der Callback ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1,0 bedeutet, dass die Schwelle erst als überschritten gilt, wenn jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Wenn die Zielsichtbarkeit überwacht wird ([trackVisibility](#trackvisibility) ist `true`), kann damit die Mindestverzögerung in Millisekunden zwischen Benachrichtigungen dieses Beobachters festgelegt werden.
    Die Begrenzung der Benachrichtigungsrate ist wünschenswert, da die Sichtbarkeitsberechnung rechnerisch aufwendig ist.
    Wenn Sie die Sichtbarkeit verfolgen, wird der Wert auf 100 für jeden Wert unter 100 gesetzt, und Sie sollten den höchst tolerierbaren Wert verwenden.
    Der Standardwert ist 0.
- `trackVisibility` {{experimental_inline}}
  - : Ein Boolean, das angibt, ob dieser `IntersectionObserver` Änderungen an der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, wird der Browser Schnittstellen melden, wenn das Ziel-Element in die Ansicht des Wurzelelements scrollt.
    Wenn `true`, wird der Browser zusätzlich überprüfen, ob das Ziel tatsächlich sichtbar ist und nicht von anderen Elementen überdeckt wurde oder möglicherweise durch einen Filter, reduzierte Opazität oder eine Transformation verzerrt oder ausgeblendet wurde.
    Der Standardwert ist `false`, da das Verfolgen der Sichtbarkeit rechnerisch aufwendig ist.
    Wenn dies eingestellt ist, sollte auch eine [`delay`](#delay) eingestellt werden.

#### Schnittstellenänderungs-Callbacks

Der Callback, der an den Konstruktor `IntersectionObserver()` übergeben wird, erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Beobachter:

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

Die Liste der vom Callback empfangenen Einträge enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Ereignis des Schwellenwertüberschreitens — mehrere Einträge können auf einmal empfangen werden, entweder von mehreren Zielen oder von einem einzigen Ziel, das innerhalb kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden über eine Warteschlange bereitgestellt, sodass sie nach dem Zeitpunkt ihrer Erstellung sortiert sein sollten, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Wurzelelement überschneidet, ob das Element als überschneidend betrachtet wird oder nicht, usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment — wenn Sie Informationen benötigen, die über die Zeit verfolgt werden müssen, wie z.B. die Scrollrichtung und -geschwindigkeit, müssen Sie diese möglicherweise selbst berechnen, indem Sie zuvor erhaltene Einträge speichern.

Beachten Sie, dass Ihr Callback im Haupt-Thread ausgeführt wird. Es sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwendiges getan werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeausschnitt zeigt einen Callback, der einen Zähler führt, wie oft Elemente von einem nicht überschneidenden Zustand zu einem Zustand wechseln, in dem sie zu mindestens 75 % überschneiden. Bei einem Schwellenwert von 0,0 (Standard) wird der Callback ungefähr beim Übergang des booleschen Wertes von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Ausschnitt überprüft daher zunächst, ob der Übergang ein positiver ist, und bestimmt dann, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75 % liegt, in welchem Fall der Zähler erhöht wird.

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

#### Anvisieren eines zu beobachtenden Elements

Sobald Sie den Beobachter erstellt haben, müssen Sie ihm ein Ziel-Element geben, das überwacht werden soll:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wenn das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Callback aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachfahre des Wurzelelements sein muss.

### Wie Überschneidung berechnet wird

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck betrachtet, das alle Teile des Elements einschließt. Ebenso wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Überschneidungsrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Überschneidung beschreiben.

#### Die Überschneidungswurzel und der Wurzelrand

Bevor wir die Überschneidung eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Überschneidungswurzel** oder **Wurzelelement**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **Wurzelüberschneidungsrechteck** ist das Rechteck, das zur Prüfung gegen das oder die Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn die Überschneidungswurzel die implizite Wurzel (das heißt das oberste [`Document`](/de/docs/Web/API/Document)) ist, ist das Wurzelüberschneidungsrechteck das Rechteck des Viewports.
- Wenn die Überschneidungswurzel einen Überlaufclip aufweist, ist das Wurzelüberschneidungsrechteck der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Wurzelüberschneidungsrechteck das Begrenzungsclientrechteck der Überschneidungswurzel (wie durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben).

Das Wurzelüberschneidungsrechteck kann weiter angepasst werden, indem der **Wurzelrand** (`rootMargin`) beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) eingestellt wird. Die Werte in `rootMargin` definieren die Offsets, die zu jeder Seite der Begrenzungsbox der Überschneidungswurzel hinzugefügt werden, um die endgültigen Wurzelgrenzen zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) offengelegt werden, wenn der Callback ausgeführt wird). Positive Werte vergrößern die Box, während negative Werte diese verkleinern. Jeder Offset-Wert kann nur in Pixeln (px) oder einem Prozentsatz (%) ausgedrückt werden.

Der Effekt des Vergrößerns der Box unter Verwendung des Wurzelrandes besteht darin, Überlaufziele zu ermöglichen, mit der Wurzel zu überschneiden, bevor sie sichtbar werden.
Dies kann beispielsweise genutzt werden, um das Laden von Bildern kurz bevor sie in den Sichtbereich gelangen zu starten, anstatt zu dem Zeitpunkt, an dem sie sichtbar werden.

Im Beispiel unten haben wir einen scrollbaren Kasten und ein Element, das zunächst außer Sicht ist.
Sie können den rechten Wurzelrand anpassen und sehen, dass:

- Wenn der Rand positiv ist, wird das rote Element als mit der Wurzel überschneidend betrachtet, auch wenn es nicht sichtbar ist, da es sich mit dem Randbereich der Wurzel überschneidet.
- Wenn der Rand negativ ist, dann, selbst wenn das rote Element sichtbar zu werden beginnt, wird es immer noch nicht als mit der Wurzel überschneidend betrachtet, da die Begrenzungsbox der Wurzel verkleinert wird.

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

{{EmbedLiveSample("die Überschneidungswurzel und der Wurzelrand", "", 200)}}

#### Die Überschneidungswurzel und der Scrollrand

Betrachten Sie den Fall, in dem Sie ein Wurzelelement haben, das verschachtelte {{Glossary("scroll_container", "Scroll-Container")}} enthält und Sie Überschneidungen mit einem Ziel innerhalb eines dieser scrollbaren Container überwachen möchten.
Überschneidungen mit dem Zielelement sind standardmäßig beobachtbar, wenn das Ziel im Bereich des Wurzels sichtbar ist;
mit anderen Worten, wenn der Container in der Wurzel sichtbar gescrollt wird und das Ziel innerhalb des Clip-Rechtecks seines Containers sichtbar gescrollt wird.

Sie können einen Scrollrand verwenden, um Überschneidungen zu beobachten, bevor oder nachdem das Ziel innerhalb seines Scroll-Containers in den Sichtbereich gescrollt wird.
Der Rand wird auf alle verschachtelten Scroll-Container in der Wurzel angewendet, einschließlich des Wurzelelements, wenn es auch ein Scroll-Container ist und hat den Effekt, entweder (positive Vorsprünge) zu vergrößern oder (negative Vorsprünge) das Clip-Rechteck, das für die Berechnung von Überschneidungen verwendet wird, zu verkleinern.

> [!NOTE]
> Sie könnten einen Intersection Observer auf jedem Scroll-Container erstellen, für den Sie einen Scrollrand möchten und die Wurzelrand-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen.
> Die Verwendung eines Scrollrands ist ergonomischer, da Sie in den meisten Fällen nur einen Intersection Observer für alle verschachtelten Ziele haben können.

Im Beispiel unten haben wir einen scrollbaren Kasten und ein Bild-Karussell, das zunächst außer Sicht ist.
Ein Beobachter auf dem Wurzelelement beobachtet die Bildzielelemente im Karussell.
Wenn ein Bildelement beginnt, sich mit dem Wurzelelement zu überschneiden, wird das Bild geladen, die Überschneidung wird protokolliert und der Beobachter wird entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen.
Die sichtbaren Bilder sollten sofort geladen werden.
Wenn Sie das Karussell scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nach dem Zurücksetzen des Beispiels können Sie die bereitgestellte Steuerung verwenden, um den Prozentsatz des Scrollrands zu ändern.
Wenn Sie einen positiven Wert wie 20 % festlegen, wird das Clip-Rechteck des Scroll-Containers um 20 % vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in den Sichtbereich kommen.
Ähnlich bedeutet ein negativer Wert, dass die Überschneidung erkannt wird, sobald die Bilder bereits sichtbar sind.

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

{{EmbedLiveSample("Die Überschneidungswurzel und der Scrollrand","100%","500px")}}

#### Schwellenwerte

Anstatt jede infinitesimale Änderung in der Sichtbarkeit eines Zielobjekts zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Beobachter erstellen, können Sie eine oder mehrere numerische Werte angeben, die die Sichtbarkeitsanteile des Zielobjekts darstellen. Die API meldet dann nur Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Zum Beispiel, wenn Sie jedes Mal informiert werden möchten, wenn die Sichtbarkeit eines Ziels entweder rückwärts oder vorwärts über jede 25%-Marke geht, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte beim Erstellen des Beobachters angeben.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, bei dem sich der Grad der Überschneidung mit der Wurzel so verändert hat, dass die Menge der freigelegten Fläche über einen der Schwellenwerte in beide Richtungen hinweggeht.

Sie können feststellen, ob das Ziel _derzeit_ mit der Wurzel überschneidet, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags überprüfen; wenn der Wert `true` ist, überschneidet das Ziel mindestens teilweise mit dem Wurzelelement oder Dokument. Dies ermöglicht es Ihnen festzustellen, ob der Eintrag einen Übergang von der Überschneidung der Elemente zu einem nicht mehr Überschneidungszustand oder einen Übergang von einem nicht überschneidenden zu einem überschneidenden Zustand darstellt.

Beachten Sie, dass es möglich ist, ein nulles Überschneidungsrechteck zu haben, was passieren kann, wenn die Überschneidung genau entlang der Grenze zwischen den beiden oder die Fläche von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, bei dem das Ziel und die Wurzel eine Grenzlinie teilen, wird nicht als ausreichend betrachtet, um als Übergang in einen überschneidenden Zustand angesehen zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, den Kasten unten herum zu scrollen. Jedes farbige Kästchen darin zeigt den Prozentsatz seiner selbst an, der in allen vier seiner Ecken sichtbar ist, damit Sie diese Verhältnisse im Laufe der Zeit sehen können, während Sie den Container scrollen. Jedes Kästchen hat eine andere Anzahl an Schwellenwerten:

- Das erste Kästchen hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt, das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds)-Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Kästchen hat einen einzigen Schwellenwert bei der 50%-Marke.
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

Standardmäßig stellt der Beobachter Benachrichtigungen bereit, wenn das Zielelement in den Viewport des Wurzelelements gescrollt wird.
Während dies in vielen Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Überschneidungen nicht gemeldet werden, wenn das Ziel "visuell kompromittiert" ist.
Zum Beispiel, wenn Analysen oder Anzeigenimpressionen gemessen werden, ist es wichtig, dass Zielobjekte nicht ganz oder teilweise versteckt oder verzerrt sind.

Die `trackVisibility`-Einstellung teilt dem Beobachter mit, dass er nur Überschneidungen für Ziele berichten soll, die der Browser nicht als visuell beeinträchtigt betrachtet, etwa durch Änderungen der Opazität oder Anwendung eines Filters oder einer Transformation.
Der Algorithmus ist konservativ und kann Elemente weglassen, die technisch sichtbar sind, wie solche mit nur einer geringen Opazitätsreduktion.

Die Sichtbarkeitsberechnung ist rechenintensiv und sollte nur verwendet werden, wenn sie notwendig ist.
Beim Verfolgen der Sichtbarkeit sollte ebenfalls eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um die minimale Meldefrequenz zu begrenzen.
Empfohlen wird, die Verzögerung auf den höchst akzeptablen Wert einzustellen (die minimale Verzögerung beim Verfolgen der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Überschneidungsrechteck

Der Browser berechnet das endgültige Überschneidungsrechteck wie folgt; das alles wird für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu erfassen, wann genau Überschneidungen auftreten werden.

1. Das Begrenzungsrechteck des Zielelements (das heißt, das kleinste Rechteck, das die Begrenzungsboxen aller Komponenten, aus denen das Element besteht, vollständig umschließt) wird durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) am Zielobjekt ermittelt.
   Dies ist das größtmögliche Überschneidungsrechteck. Die verbleibenden Schritte entfernen alle Teile, die sich nicht überschneiden.
2. Beginnend mit dem unmittelbaren Elternelement des Ziels und sich nach außen bewegend, wird das Clipping (falls vorhanden) jedes enthaltenden Blocks auf das Überschneidungsrechteck angewendet.
   Das Clipping eines Blocks wird basierend auf der Überschneidung der beiden Blöcke und dem gegebenen Clipping-Modus (falls vorhanden), der durch die {{cssxref("overflow")}}-Eigenschaft spezifiziert wird, bestimmt. Die Einstellung von `overflow` auf einen anderen Wert als `visible` verursacht Clipping.
3. Wenn eines der enthaltenden Elemente die Wurzel eines verschachtelten Browsing-Kontexts ist (wie das Dokument, das in einem {{HTMLElement("iframe")}} enthalten ist), wird das Überschneidungsrechteck auf den Viewport des enthaltenden Kontexts zugeschnitten, und die Rekursion aufwärts durch die Container setzt sich mit dem nächsten enthaltenden Block des Containers fort. Also wenn das oberste Level eines `<iframe>` erreicht ist, wird das Überschneidungsrechteck auf den Viewport des Rahmens zugeschnitten und dann ist das Elternelement des Rahmens der nächste Block, durch den auf die Wurzel der Überschneidung rekursiert wird.
4. Wenn die Rekursion nach oben die Überschneidungswurzel erreicht, wird das resultierende Rechteck in den Koordinatenraum der Überschneidungswurzel übertragen.
5. Das resultierende Rechteck wird dann aktualisiert, indem es mit dem [Wurzelüberschneidungsrechteck](#die_überschneidungswurzel_und_der_wurzelrand) vereinigt wird.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des Zieldokuments ([`document`](/de/docs/Web/API/Document)) übertragen.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Beobachters, der jede Anzahl von Zielelementen für dieselbe Überschneidungskonfiguration überwachen kann. Jeder Beobachter kann die Änderungen der Überschneidung zwischen einem oder mehreren Zielelementen und einem gemeinsamen Vorfahrenelement oder mit dem {{Glossary("viewport", "Viewport")}} ihres obersten [`Documents`](/de/docs/Web/API/Document) asynchron beobachten. Der Vorfahre oder der Viewport wird als **Wurzel** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Überschneidung zwischen dem Zielelement und seinem Wurzelcontainer zu einem bestimmten Übergangsmoment. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Callback oder durch Aufruf von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass sich ein Zielelement in Farbe und Transparenz ändert, wenn es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie Sie messen, wie lange eine Reihe von Elementen (wie Anzeigen) für den Benutzer sichtbar sind, und auf diese Informationen reagieren, indem Sie Statistiken aufzeichnen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz und enthält ein Hauptelement, das das Zielobjekt ist (mit der phantasievollen ID `"box"`) und einigen Inhalten innerhalb des Kastens.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element an und legt fest, dass die Eigenschaften {{cssxref("background-color")}} und {{cssxref("border")}} an den [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) beteiligt sein können, die wir verwenden werden, um die Änderungen am Element zu beeinflussen, wenn es mehr oder weniger verdeckt wird.

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

Schließlich schauen wir uns den JavaScript-Code an, der die Intersection Observer API verwendet, um Dinge zum Laufen zu bringen.

#### Vorbereitung

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
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Sichtbarkeitsverhältnis von 0,0 und 1,0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um aufzuzeichnen, was das Sichtbarkeitsverhältnis beim letzten Überschreiten eines Schwellenwertes war; dies ermöglicht es uns herauszufinden, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Eine Zeichenkette, die eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "Verhältnis" in dieser Kette wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich das Element nicht nur in der Farbe ändert, sondern auch zunehmend undurchsichtig wird, während es weniger verdeckt wird.
- `decreasingColor`
  - : Auf ähnliche Weise ist dies eine Zeichenkette, die eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis sinkt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um mit dem Lauschen auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu beginnen; sobald die Seite vollständig geladen ist, erhalten wir eine Referenz zu dem Element mit der ID `"box"` unter Verwendung von [`querySelector()`](/de/docs/Web/API/Document/querySelector), und rufen dann die Methode `createObserver()` auf, die wir gleich erstellen werden, um das Erstellen und Installieren des Intersection Observers zu behandeln.

#### Erstellen des Intersection Observers

Die Methode `createObserver()` wird aufgerufen, sobald das Laden der Seite abgeschlossen ist, um den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) tatsächlich zu erstellen und den Prozess des Beobachtens des Zielobjekts zu starten.

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

Dies beginnt mit der Einrichtung eines `options`-Objekts, das die Einstellung für den Beobachter enthält. Wir möchten die Änderungen in der Sichtbarkeit des Zielelements im Verhältnis zum Viewport des Dokuments beobachten, daher ist `root` `null`. Wir benötigen keinen Rand, daher ist das Rand-Offset, `rootMargin`, als "0px" angegeben. Dies bewirkt, dass der Beobachter nach Änderungen in der Überschneidung zwischen den Begrenzungen des Zielelements und denen des Viewports ohne zusätzlichen (oder abgezogenen) Platz schaut.

Die Liste der Sichtbarkeitsverhältinisschwellenwerte, `threshold`, wird durch die Funktion `buildThresholdList()` konstruiert. Die Schwellenwertliste wird in diesem Beispiel programmatisch erstellt, da es mehrere davon gibt und die Anzahl dieser einstellbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Beobachter, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen und eine Funktion angeben, die aufgerufen werden soll, wenn die Überschneidung einen unserer Schwellenwerte überschreitet, `handleIntersect()`, sowie unsere Menge an Optionen. Dann rufen wir [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) für den zurückgegebenen Beobachter auf und übergeben ihm das gewünschte Zielelement.

Wir könnten uns entscheiden, mehrere Elemente für Veränderungen ihres Sichtbarkeitsverhältnisses im Verhältnis zum Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun wollten.

#### Erstellen des Arrays von Schwellenverhältnissen

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

Dies erstellt das Array von Schwellenwerten – jeweils ein Verhältnis zwischen 0,0 und 1,0, indem der Wert `i/numSteps` für jedes ganzzahlige `i` zwischen 1 und `numSteps` auf das `thresholds`-Array verschoben wird. Es wird auch 0 inbegriffen, um diesen Wert zu beinhalten. Das Ergebnis, gegeben dem Standardwert von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Wir könnten natürlich das Array von Schwellenwerten in unserem Code fest codieren und oft ist das, was man machen wird. Aber dieses Beispiel lässt Raum, um Konfigurationssteuerungen hinzuzufügen, um die Granularität anzupassen, zum Beispiel.

#### Behandlung von Schnittstellenänderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall dasjenige mit der ID `"box"`) enthüllt oder verdeckt wurde, sodass sich das Sichtbarkeitsverhältnis über einen unserer Schwellenwerte bewegt, ruft es unsere Handler-Funktion `handleIntersect()` auf:

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

Für jeden [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` schauen wir, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn es das tut, setzen wir die {{cssxref("background-color")}} der Zielobjekts auf die Zeichenkette in `increasingColor` (denken Sie daran, dass es `"rgb(40 40 190 / ratio)"` ist), ersetzt das Wort "Verhältnis" mit dem `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur ändert sich die Farbe, auch die Transparenz des Zielelements ändert sich; wenn das Überschneidungsverhältnis sinkt, sinkt der Alpha-Wert der Hintergrundfarbe mit ihm, was zu einem Element führt, das transparenter ist.

Ähnlich, wenn das `intersectionRatio` sinkt, verwenden wir die Zeichenkette `decreasingColor` und ersetzen das Wort "Verhältnis" darin mit dem `intersectionRatio`, bevor wir die `background-color` des Zielelements setzen.

Schließlich, um zu verfolgen, ob das Überschneidungsverhältnis steigt oder sinkt, merken wir uns das aktuelle Verhältnis in der Variablen `prevRatio`.

### Ergebnis

Nachfolgend der resultierende Inhalt. Scrollen Sie diese Seite nach oben und unten und bemerken Sie, wie sich das Erscheinungsbild der Box ändert, während Sie dies tun.

{{EmbedLiveSample('Ein_einfaches_Beispiel', 400, 400)}}

Es gibt ein noch ausführlicheres Beispiel unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
