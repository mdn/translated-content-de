---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 0ea88f719ad95045993f8a54d5bbaee857617380
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen bei der Überschneidung eines Ziel-Elements mit einem übergeordneten Element oder mit dem {{Glossary("viewport", "Viewport")}} eines Dokumente auf oberster Ebene asynchron zu beobachten.

## Übersicht

Historisch gesehen war es schwierig, die Sichtbarkeit eines Elements oder die relative Sichtbarkeit von zwei Elementen zueinander zu erkennen. Lösungen für dieses Problem waren oft unzuverlässig und führten dazu, dass der Browser und die besuchten Websites langsamer wurden. Mit der Entwicklung des Webs ist der Bedarf an dieser Art von Informationen gewachsen. Schnittstelleninformationen werden aus vielen Gründen benötigt, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderen Inhalten, wenn eine Seite gescrollt wird.
- Implementierung von "unendlichem Scrollen" auf Websites, bei denen immer mehr Inhalte geladen und angezeigt werden, wenn Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um die Einnahmen aus Anzeigen zu berechnen.
- Entscheidung darüber, ob Aufgaben oder Animationsprozesse basierend darauf ausgeführt werden sollen, ob der Benutzer das Ergebnis sehen wird.

Früher wurde die Schnittstellenerkennung durch Ereignishandler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, implementiert, um die erforderlichen Informationen für jedes betroffene Element zu sammeln. Da all dieser Code im Haupt-Thread läuft, kann schon eine solche Methode Leistungsprobleme verursachen. Wenn eine Website mit diesen Tests geladen wird, kann es richtig schlimm werden.

Betrachten Sie eine Webseite, die unendliches Scrollen verwendet. Sie verwendet eine von einem Anbieter bereitgestellte Bibliothek, um die im Laufe der Seite platzierten Anzeigen zu verwalten, enthält an einigen Stellen animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und Ähnliches zeichnet. Jede dieser Komponenten hat ihre eigenen Routinen zur Schnittstellenerkennung, die alle im Haupt-Thread laufen. Der Autor der Website merkt möglicherweise nicht einmal, dass dies passiert, da er möglicherweise sehr wenig über das Innenleben der zwei verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Routinen zur Schnittstellenerkennung ständig während des Scroll-Handling-Codes ausgelöst, was zu einer Erfahrung führt, die den Benutzer frustriert über den Browser, die Webseite und seinen Computer zurücklässt.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element eine Schnittstelle mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) betritt oder verlässt, oder wenn sich die Schnittstelle zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites nichts mehr im Haupt-Thread tun, um auf diese Art der Elementenschnittstelle zu achten, und der Browser kann die Verwaltung der Schnittstellen nach eigenem Ermessen optimieren.

Eine Sache, die die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl überlappender Pixel auslösen oder genau darauf, welche es sind. Sie löst nur den allgemeinen Anwendungsfall "Wenn sie sich irgendwo um _N_% überschneiden, muss ich etwas tun" aus.

## Konzepte und Nutzung

Die Intersection Observer API ermöglicht es Ihnen, eine Callback-Funktion zu konfigurieren, die aufgerufen wird, wenn eine der folgenden Situationen eintritt:

- Ein **Ziel**-Element schneidet entweder den Viewport des Geräts oder ein bestimmtes Element. Dieses Element wird im Rahmen der Intersection Observer API als **Wurzelelement** oder **Root** bezeichnet.
- Das erste Mal, wenn der Observer aufgefordert wird, ein Ziel-Element zu überwachen.

Typischerweise möchten Sie Änderungen bei der Schnittstelle in Bezug auf den nächsten scrollbaren Vorfahren des Ziel-Elements beachten oder, falls das Ziel-Element kein Nachfahr eines scrollbaren Elements ist, den Viewport des Geräts. Um die Schnittstelle relativ zum Viewport des Geräts zu überwachen, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine genauere Erklärung der Intersection Observer-Optionen.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise: Sie führt eine von Ihnen bereitgestellte Callback-Funktion aus, wann immer sich die Sichtbarkeit des Ziel-Elements ändert, sodass es gewünschte Schnittstellensummen mit dem Root überschreitet.

Der Grad der Schnittstelle zwischen dem Ziel-Element und seinem Root ist das **Schnittstellenverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Ziel-Elements, das als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observer

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die ausgeführt wird, wenn ein Schwellenwert in eine Richtung oder die andere überquert wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1,0 bedeutet, dass die Callback-Funktion aufgerufen wird, wenn 100 % des Ziels im Element sichtbar sind, das durch die `root`-Option angegeben wird.

#### Intersection Observer-Optionen

Das `options`-Objekt, das in den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Umstände zu steuern, unter denen der Callback des Observers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport zur Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss ein Vorfahre des Ziels sein. Standardmäßig ist es der Browser-Viewport, wenn nicht angegeben oder `null`.
- `rootMargin`
  - : Rand um das Root. Ein String von einem bis vier Werten, ähnlich der CSS-Eigenschaft {{cssxref("margin")}}, zum Beispiel `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur in Pixeln (`px`) oder Prozentsätzen (`%`) angegeben werden. Dieses Set von Werten dient dazu, jede Seite des Begrenzungsrahmens des Wurzelelements zu vergrößern oder zu verkleinern, bevor Schnittstellen berechnet werden. Negative Werte verkleinern den Begrenzungsrahmen des Wurzelelements und positive Werte vergrößern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "Scroll-Container")}}, der die gleichen Werte hat und dieselbe Standardeinstellung wie `rootMargin` hat. Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Schnittstellen berechnet werden. Positive Werte vergrößern das Clipping-Rechteck des Containers, sodass Ziele bereits geschnitten werden können, bevor sie sichtbar werden, während negative Werte das Clipping-Rechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Observer-Callback ausgeführt werden soll. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50 %-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie den Callback bei jedem Überschreiten anderer 25 % ausführen lassen möchten, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Standardmäßig ist 0 (was bedeutet, dass der Callback ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1,0 bedeutet, dass der Schwellenwert erst als überschritten gilt, wenn jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Wenn die Zielsichtbarkeit verfolgt wird ([trackVisibility](#trackvisibility) ist `true`), kann dies verwendet werden, um die minimale Verzögerung in Millisekunden zwischen Benachrichtigungen von diesem Observer festzulegen. Die Begrenzung der Benachrichtigungsrate ist wünschenswert, da die Sichtbarkeitsberechnung rechenintensiv ist. Wenn die Sichtbarkeit verfolgt wird, wird der Wert auf 100 für jeden Wert unter 100 gesetzt, und Sie sollten den größten tolerierbaren Wert verwenden. Der Wert ist standardmäßig 0.
- `trackVisibility` {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob dieser `IntersectionObserver` Änderungen in der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Schnittstellen, wenn das Ziel-Element in den Viewport des Root-Elements gescrollt wird. Wenn `true`, überprüft der Browser zusätzlich, ob das Ziel tatsächlich sichtbar ist und ob es nicht von anderen Elementen verdeckt oder möglicherweise durch einen Filter, reduzierte Deckkraft oder eine Transformation verzerrt oder verborgen wurde. Der Wert ist standardmäßig `false`, da die Verfolgung der Sichtbarkeit rechenintensiv ist. Wenn dies festgelegt ist, sollte auch eine [`delay`](#delay) festgelegt werden.

#### Callbacks für Schnittstellenänderungen

Der an den Konstruktor `IntersectionObserver()` übergebene Callback empfängt eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Observer:

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

Die vom Callback empfangene Liste der Einträge enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Schwellenwert-Überschreitungsereignis - mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzigen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden in einer Warteschlange gesendet, sodass sie nach der Zeit geordnet sein sollten, zu der sie generiert wurden. Sie sollten jedoch möglichst [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Wurzelelement überschneidet, ob das Element als überschneidend angesehen wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment - wenn Sie Informationen benötigen, die eine Verfolgung über die Zeit erfordern, wie die Scrollrichtung und -geschwindigkeit, müssen Sie dies möglicherweise selbst berechnen, indem Sie sich die zuvor empfangenen Einträge merken.

Beachten Sie, dass Ihr Callback im Haupt-Thread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwendiges durchgeführt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Das folgende Code-Snippet zeigt einen Callback, der zählt, wie oft Elemente von einem nicht überschneidenden in einen Überschneidungszustand mit mindestens 75 % übergehen. Bei einem Schwellenwert von 0,0 (Standard) wird der Callback ungefähr bei der Übergabe des booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Das Snippet überprüft daher zunächst, ob der Übergang positiv ist, und stellt dann fest, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75 % liegt, in welchem Fall der Zähler erhöht wird.

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

#### Ein Element zur Beobachtung festlegen

Nachdem Sie den Observer erstellt haben, müssen Sie ihm ein Ziel-Element geben, das er überwachen soll:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Callback aufgerufen.

Beachten Sie auch, dass wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachfahre des Wurzelelements sein muss.

### Wie eine Schnittstelle berechnet wird

Alle Bereiche, die von der Intersection Observer API in Betracht gezogen werden, sind Rechtecke; unregelmäßig geformte Elemente werden als das kleinste Rechteck betrachtet, das alle Teile des Elements einschließt. Ebenso, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Schnittstellenrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Schnittstelle beschreiben.

#### Die Schnittstellenwurzel und der Wurzelrand

Bevor wir die Schnittstellen von Elementen mit einem Container überwachen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittstellenwurzel** oder das **Wurzelelement**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorfahr des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Root-Schnittstellenrechteck_** ist das Rechteck, das für die Überprüfung gegen das Ziel oder die Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn die Schnittstellenwurzel die implizite Wurzel ist (das heißt, das oberste [`Document`](/de/docs/Web/API/Document)), ist das Root-Schnittstellenrechteck das Rechteck des Viewports.
- Wenn die Schnittstellenwurzel einen Überlaufclip hat, ist das Root-Schnittstellenrechteck der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Root-Schnittstellenrechteck das begrenzende Client-Rechteck der Schnittstellenwurzel (wie durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf diesem zurückgegeben).

Das Root-Schnittstellenrechteck kann weiter angepasst werden, indem der **Root-Margin**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) festgelegt wird. Die Werte in `rootMargin` definieren die Versätze, die zu jeder Seite des begrenzenden Rahmens der Schnittstellenwurzel hinzugefügt werden, um die endgültigen Schnittstellenwurzelgrenzen zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) bekannt gegeben werden, wenn der Callback ausgeführt wird). Positive Werte vergrößern das Rechteck, während negative Werte es verkleinern. Jeder Versatzwert kann nur in Pixeln (px) oder als Prozentsatz (%) ausgedrückt werden.

Die Wirkung des Vergrößerns des Rechtecks durch den Wurzelrand besteht darin, dass Ziele mit Überlauf bereits dann die Schnittstelle mit der Wurzel schneiden können, bevor sie sichtbar werden. Dies kann beispielsweise verwendet werden, um Bilder kurz vor deren Anschnitt zu laden, statt an dem Punkt, an dem sie sichtbar werden.

Im Beispiel unten haben wir ein scrollbares Feld und ein Element, das zunächst nicht sichtbar ist. Sie können den rechten Rand des Wurzels einstellen und sehen, dass:

- Wenn der Rand positiv ist, wird das rote Element als mit der Wurzel überschneidend angesehen, auch wenn es nicht sichtbar ist, da es mit dem Randbereich des Wurzels überschneidet.
- Wenn der Rand negativ ist, wird das rote Element, selbst wenn es sichtbar wird, immer noch nicht als überschneidend mit der Wurzel angesehen, weil der begrenzende Rahmen der Wurzel verkleinert wird.

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

#### Die Schnittstellenwurzel und der Scrollrand

Betrachten Sie den Fall, in dem Sie ein Wurzelelement haben, das verschachtelte {{Glossary("scroll_container", "Scroll-Container")}} enthält und Sie Schnittstellen mit einem Ziel innerhalb eines dieser scrollbaren Container beobachten möchten. Die Schnittstellen mit dem Ziel-Element beginnen standardmäßig zu beobachten, wenn das Ziel im von der Wurzel definierten Bereich sichtbar ist; in anderen Worten, wenn der Container in der Wurzel in die Sichtbarkeit gescrollt und das Ziel im Clipping-Rechteck seines Containers in die Sichtbarkeit gescrollt wird.

Sie können einen Scrollrand verwenden, um Schnittstellen zu beobachten, bevor oder nachdem das Ziel in seinem Scroll-Container sichtbar wird. Der Rand wird allen verschachtelten Scrollcontainern in der Wurzel hinzugefügt, einschließlich des Wurzelelements, wenn es ebenfalls ein Scroll-Container ist, und hat die Wirkung, das für die Berechnung der Schnittstellen verwendete Clip-Rechteck entweder zu vergrößern (positive Ränder) oder zu verkleinern (negativer Rand).

> [!NOTE]
> Sie könnten einen Intersection Observer für jeden Scroll-Container erstellen, für den Sie einen Scrollrand wünschen, und die rootMargin-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen. Die Verwendung eines Scrollrands ist ergonomischer, da Sie in den meisten Fällen nur einen Intersection Observer für alle verschachtelten Ziele haben können.

Im Beispiel unten haben wir ein scrollbares Feld und ein Bildkarussell, das zunächst nicht sichtbar ist. Ein Beobachter am Wurzelelement beobachtet die Bildzieltlemente innerhalb des Karussells. Wenn ein Bildelement anfängt, mit dem Wurzelelement zu überschneiden, wird das Bild geladen, die Schnittstelle registriert und der Beobachter entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen. Die sichtbaren Bilder sollten sofort geladen werden. Wenn Sie das Karussell scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nach dem Zurücksetzen des Beispiels können Sie die bereitgestellte Steuerung verwenden, um den Scrollrand-Prozentsatz zu ändern. Wenn Sie einen positiven Wert wie 20 % angeben, wird das Clip-Rechteck des Scroll-Containers um 20 % vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie sichtbar werden. Ebenso bedeutet ein negativer Wert, dass die Schnittstelle erkannt wird, sobald Bilder bereits sichtbar sind.

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

{{EmbedLiveSample("Die Schnittstellenwurzel und der Scrollrand", "100%", "500px")}}

#### Schwellenwerte

Anstatt jede winzige Änderung in der Sichtbarkeit eines Ziel-Elements zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Beobachter erstellen, können Sie ein oder mehrere numerische Werte angeben, die die Prozentsätze des sichtbaren Ziel-Elements darstellen. Dann meldet die API nur Sichtbarkeitsänderungen, die diese Schwellenwerte überschreiten.

Wenn Sie zum Beispiel informiert werden möchten, jedes Mal, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts jede 25%-Marke überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte beim Erstellen des Beobachters angeben.

Wenn der Callback aufgerufen wird, empfängt er eine Liste von `IntersectionObserverEntry`-Objekten, eins für jedes beobachtete Ziel, bei dem sich der Grad der Überschneidung mit dem Wurzeln so verändert hat, dass der aufgedeckte Betrag einen der Schwellenwerte in eine Richtung überschreitet.

Sie können sehen, ob das Ziel _derzeit_ die Wurzel überschneidet, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags betrachten; wenn der Wert `true` ist, überschneidet das Ziel zumindest teilweise das Wurzelelement oder Dokument. Dies ermöglicht Ihnen zu bestimmen, ob der Eintrag einen Übergang von der Überschneidung der Elemente zum Nicht-Überschneiden der Elemente oder einen Übergang vom Nicht-Überschneidung zum Überschneiden darstellt.

Beachten Sie, dass es möglich ist, ein Rechteck mit null Schnittpunkt zu haben, was passieren kann, wenn die Überschneidung genau entlang der Grenze zwischen den beiden liegt oder wenn der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, in dem das Ziel und die Wurzel nur eine Grenzlinie teilen, wird nicht als ausreichend angesehen, um einen Übergang in einen Schnittpunktstatus darzustellen.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, das folgende Feld zu scrollen. Jedes farbige Feld darin zeigt den Prozentsatz seiner selbst an, der in allen vier seiner Ecken sichtbar ist, sodass Sie sehen können, wie sich diese Verhältnisse im Laufe der Zeit ändern, während Sie den Container scrollen. Jedes Feld hat einen anderen Satz von Schwellenwerten:

- Das erste Feld hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt, das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds)-Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Feld hat einen einzigen Schwellenwert an der 50%-Marke.
- Das dritte Feld hat Schwellenwerte alle 10 % der Sichtbarkeit (0 %, 10 %, 20 % usw.).
- Das letzte Feld hat Schwellenwerte alle 25 %.

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

#### Verfolgung der Sichtbarkeit und Verzögerung

Standardmäßig stellt der Beobachter Benachrichtigungen bereit, wenn das Ziel-Element in den Viewport des Wurzelelements gescrollt wird. Während dies in vielen Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Schnittstellen nicht gemeldet werden, wenn das Ziel "visuell kompromittiert" wurde. Zum Beispiel ist es bei der Messung von Analysen oder Anzeigenimpressionen wichtig, dass die Zielelemente nicht vollständig oder teilweise verborgen oder verzerrt wurden.

Die Einstellung `trackVisibility` informiert den Beobachter, nur Schnitte für Ziele zu melden, die vom Browser nicht als visuell kompromittiert angesehen werden, z. B. durch eine geänderte Deckkraft oder durch das Anwenden eines Filters oder einer Transformation. Der Algorithmus ist konservativ und kann Elemente weglassen, die technisch sichtbar sind, wie solche mit nur einer leichten Reduzierung der Deckkraft.

Die Sichtbarkeitsberechnung ist rechenintensiv und sollte nur eingesetzt werden, wenn es notwendig ist. Wenn die Sichtbarkeit verfolgt wird, sollte auch eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um den minimalen Berichtszeitraum zu begrenzen. Die Empfehlung lautet, dass Sie die Verzögerung auf den größten tolerierbaren Wert einstellen (die minimale Verzögerung bei der Verfolgung der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Schnittstellenrechteck

Der Browser berechnet das endgültige Schnittrechteck wie folgt; dies wird alles für Sie getan, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu verstehen, wann Schnittstellen auftreten werden.

1. Das Begrenzungsrechteck des Ziel-Elements (das heißt, das kleinste Rechteck, das die umschließenden Rechtecke jeder Komponente umschließt, aus der das Element besteht) wird durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf dem Ziel abgerufen. Dies ist das größte, was das Schnittrechteck sein kann. Die verbleibenden Schritte entfernen alle Teile, die nicht übereinander liegen.
2. Beginnend mit dem unmittelbaren übergeordneten Block des Ziels und nach außen hin, wird das Clipping (falls vorhanden) jeder enthaltenden Blockapplies to the intersectionrectangle angewendet, basierend auf der Überschneidung der zwei Blöcke und dem Clipping-Modus (falls vorhanden), der durch die {{cssxref("overflow")}}-Eigenschaft angegeben wird. Das Setzen von `overflow` auf etwas anderes als `visible` führt dazu, dass das Clipping stattfindet.
3. Wenn eines der enthaltenen Elemente die Wurzel eines verschachtelten Browsing-Kontextes ist (wie das Dokument, das in einem {{HTMLElement("iframe")}} enthalten ist), wird das Schnittrechteck auf den Viewport des enthaltenen Kontextes zugeschnitten, und die Rekursion nach oben durch die Container wird mit dem enthaltenden Block des Containers fortgesetzt. Wenn also das oberste Level eines `<iframe>` erreicht ist, dann wird das Schnittrechteck auf den Viewport des Rahmens zugeschnitten, dann wird das übergeordnete Element des Rahmens der nächste Block, durch den nach oben rekursiert wird in Richtung der Schnittstellenwurzel.
4. Wenn das nach oben gerichtete Rekursion die Schnittstellenwurzel erreicht, wird das resultierende Rechteck in den Koordinatenraum der Wurzelschnittstellen abgebildet.
5. Das resultierende Rechteck wird dann durch Überschneidung mit dem [Root-Schnittrechteck](#die_schnittstellenwurzel_und_der_wurzelrand) aktualisiert.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des [`Dokuments`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Beobachters, der jede Anzahl von Ziel-Elementen für dieselbe Schnittstellenkonfiguration überwachen kann. Jeder Beobachter kann asynchron Änderungen der Schnittstelle zwischen einem oder mehreren Ziel-Elementen und einem gemeinsamen Vorfahrelement oder mit ihrem obersten [`Dokument`](/de/docs/Web/API/Document)'s {{Glossary("viewport", "Viewport")}} überwachen. Der Vorfahre oder der Viewport wird als **Wurzel** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittstelle zwischen dem Ziel-Element und seinem Wurzelbehälter zu einem bestimmten Übergangszeitpunkt. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für den `IntersectionObserver`-Callback oder durch Aufruf von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass ein Ziel-Element seine Farbe und Transparenz ändert, wenn es mehr oder weniger sichtbar wird. Unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie lange eine Gruppe von Elementen (wie z. B. Anzeigen) für den Benutzer sichtbar ist und wie Sie auf diese Informationen reagieren können, indem Sie Statistiken aufzeichnen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem Hauptelement, das die Box ist, auf die wir abzielen (mit der kreativen ID `"box"`), und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für dieses Beispiel nicht besonders wichtig; es legt das Element fest und stellt sicher, dass die Eigenschaften {{cssxref("background-color")}} und {{cssxref("border")}} an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu bewirken, wenn es mehr oder weniger verdeckt wird.

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

Schließlich schauen wir uns den JavaScript-Code an, der die Intersection Observer API verwendet, um Dinge in Bewegung zu setzen.

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
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Sichtbarkeitsverhältnis von 0,0 und 1,0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um aufzuzeichnen, wie das Sichtbarkeitsverhältnis war, als der Schwellenwert zuletzt überschritten wurde; dies ermöglicht es uns herauszufinden, ob das Ziel-Element mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Ziel-Element anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass das Element nicht nur seine Farbe ändert, sondern auch zunehmend undurchsichtig wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ähnlich, ein String, der eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir erhalten eine Referenz auf das Element mit der ID `"box"` unter Verwendung von [`querySelector()`](/de/docs/Web/API/Document/querySelector), und dann rufen wir die Methode `createObserver()` auf, die wir gleich erstellen werden, um das Erstellen und Installieren des Intersection Observers zu bearbeiten.

#### Erstellen des Intersection Observer

Die Methode `createObserver()` wird einmal aufgerufen, wenn der Seitenaufbau abgeschlossen ist, um tatsächlich den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und den Prozess zum Beobachten des Ziel-Elements zu starten.

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

Dies beginnt mit dem Einrichten eines `options`-Objekts, das die Einstellungen für den Beobachter enthält. Wir möchten Änderungen in der Sichtbarkeit des Ziel-Elements relativ zum Viewport des Dokuments beobachten, daher ist `root` `null`. Wir benötigen keine Ränder, also wird der Randversatz, `rootMargin`, mit "0px" angegeben. Dadurch schaut der Beobachter auf die Änderung der Schnittstelle zwischen den Begrenzungen des Ziel-Elements und denen des Viewports, ohne zusätzlichem (oder subtrahierten) Raum nachzugehen.

Die Liste der Schwellenwerte für das Sichtbarkeitsverhältnis, `threshold`, wird durch die Funktion `buildThresholdList()` erstellt. Die Schwellenwerteliste wird in diesem Beispiel programmgesteuert erstellt, da es eine Zahl von ihnen gibt und die Zahl anpassbar sein soll.

Sobald `options` fertig ist, erstellen wir den neuen Beobachter, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen, eine Funktion angeben, die aufgerufen wird, wenn die Schnittstelle einen unserer Schwellenwerte überschreitet, `handleIntersect()`, und unseren Satz an Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Beobachter auf, indem wir ihm das gewünschte Ziel-Element übergeben.

Wir könnten beobachten, dass sich die Sichtbarkeitsänderungen von mehreren Elementen auf den Viewport durch Aufrufen von `observer.observe()` für jedes dieser Elemente überwachen lassen, wenn wir dies möchten.

#### Aufbau des Arrays von Schwellenwertverhältnissen

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

Dies baut das Array von Schwellenwerten - jedes davon ist ein Verhältnis zwischen 0,0 und 1,0, indem es den Wert `i/numSteps` auf das `thresholds`-Array für jedes ganze `i` zwischen 1 und `numSteps` setzt. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis, angesichts des Standardwerts von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

<table class="standard-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Ratio</th>
        <th>#</th>
        <th>Ratio</th>
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

Wir könnten natürlich das Array der Schwellenwerte fest in unseren Code kodieren, und das ist oft, was Sie am Ende tun werden. Aber dieses Beispiel lässt Raum für das Hinzufügen von Konfigurationssteuerungen, um die Granularität anzupassen.

#### Umgang mit Schnittstellenänderungen

Wenn der Browser erkennt, dass das Ziel-Element (in unserem Fall das mit der ID `"box"`) aufgedeckt oder verdeckt wurde, sodass sein Sichtbarkeitsverhältnis einen der Schwellenwerte in unserer Liste überschreitet, ruft er unsere Handler-Funktion, `handleIntersect()`, auf:

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

Für jedes [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` schauen wir nach, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn es das tut, setzen wir die {{cssxref("background-color")}} des Ziels auf den String in `increasingColor` (wie eine Erinnerung, es ist `"rgb(40 40 190 / ratio)"`), ersetzt das Wort "ratio" durch das [`intersectionRatio`] des Eintrags. Das Ergebnis: nicht nur wird die Farbe geändert, sondern die Transparenz des Ziel-Elements ändert sich ebenfalls; wenn das Schnittverhältnis abnimmt, nimmt auch der Alpha-Wert der Hintergrundfarbe ab, was zu einem Element führt, das durchsichtiger ist.

Ähnlich wird, wenn das `intersectionRatio` abnimmt, der String `decreasingColor` verwendet und das Wort "ratio" darin durch das `intersectionRatio` vor dem Setzen des `Hintergrundfarben`-Werts des Ziel-Elements ersetzt.

Schließlich, um zu verfolgen, ob das Schnittverhältnis steigt oder fällt, merken wir uns das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt. Scrollen Sie diese Seite nach oben und unten und beachten Sie, wie sich das Aussehen der Box ändert, während Sie dies tun.

{{EmbedLiveSample('Einfaches Beispiel', 400, 400)}}

Ein noch umfangreicheres Beispiel gibt es unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
