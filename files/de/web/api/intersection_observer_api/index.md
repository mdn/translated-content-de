---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 809a1f18b067a6f768ccde5b9672733014179ede
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Schnittmenge eines Ziel-Elements mit einem übergeordneten Element oder dem {{Glossary("viewport", "Viewport")}} eines Top-Dokuments asynchron zu beobachten.

## Überblick

Historisch betrachtet war es eine schwierige Aufgabe, die Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente zueinander zu erkennen. Lösungen hierfür waren oft unerlässlich und führten dazu, dass der Browser und die vom Nutzer aufgerufenen Seiten träge wurden. Mit der Reifung des Webs hat der Bedarf an solchen Informationen zugenommen. Schnittstelleninformationen sind aus vielen Gründen erforderlich, z.B.:

- Lazy-Loading von Bildern oder anderen Inhalten beim Scrollen einer Seite.
- Implementierung von "unendlichen Scroll"-Websites, bei denen immer mehr Content geladen und gerendert wird, während Sie scrollen, sodass der Benutzer keine Seiten umblättern muss.
- Meldung der Sichtbarkeit von Werbeanzeigen, um Einnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationen ausgeführt werden sollen, basierend darauf, ob der Nutzer das Ergebnis sehen wird.

Die Implementierung der Schnittstellenerkennung in der Vergangenheit umfasste Event-Handler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, um die benötigten Informationen für jedes betroffene Element zu sammeln. Da all dieser Code im Haupt-Thread ausgeführt wird, kann bereits eine Ausführung zu Leistungsproblemen führen. Wenn eine Seite mit diesen Tests geladen wird, können unschöne Ergebnisse auftreten.

Stellen Sie sich eine Webseite vor, die unendliches Scrollen verwendet. Sie nutzt eine von einem Anbieter bereitgestellte Bibliothek zur Verwaltung der Anzeigen, die periodisch auf der Seite platziert werden, enthält animierte Grafiken hier und da und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsfenster und dergleichen zeichnet. Jedes dieser Elemente verfügt über eigene Routinen zur Schnittstellenerkennung, die alle im Haupt-Thread ausgeführt werden. Der Autor der Webseite merkt möglicherweise nicht einmal, dass dies passiert, da er möglicherweise wenig über die inneren Abläufe der beiden verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Routinen zur Schnittstellenerkennung ständig während des Scroll-Handlings ausgeführt, was zu einer Erfahrung führt, die den Benutzer frustriert zurücklässt - sowohl mit dem Browser als auch mit der Website und ihrem Computer.

Die Intersection Observer API ermöglicht es, eine Callback-Funktion zu registrieren, die immer dann ausgeführt wird, wenn ein bestimmtes Element eine Schnittstelle mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) betritt oder verlässt oder wenn sich die Schnittstelle zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites nichts mehr im Haupt-Thread tun, um auf Schnittstellen von Elementen zu achten, und der Browser ist frei, die Verwaltung der Schnittstellen nach eigenem Ermessen zu optimieren.

Eines kann die Intersection Observer API nicht: Logik basierend auf der genauen Anzahl überlappender Pixel auslösen oder spezifisch darauf, welche es sind. Sie löst nur den häufigen Anwendungsfall "Wenn sie ungefähr um _N_% überlappen, muss ich etwas tun" ab.

## Konzepte und Verwendung

Die Intersection Observer API ermöglicht es Ihnen, einen Callback zu konfigurieren, der in einem der folgenden Fälle aufgerufen wird:

- Ein **Ziel**-Element überlappt entweder mit dem Viewport des Geräts oder einem bestimmten Element. Dieses spezifizierte Element wird für die Zwecke der Intersection Observer API als **Stammelement** oder **Wurzel** bezeichnet.
- Das erste Mal, wenn der Observer gebeten wird, ein Ziel-Element zu beobachten.

In der Regel möchten Sie Schnittstellenänderungen in Bezug auf den nächstgelegenen, scrollbaren Vorfahren des Ziel-Elements oder, wenn das Ziel-Element nicht von einem scrollbaren Element abstammt, den Viewport des Geräts beobachten. Um Schnittstellen relativ zum Viewport des Geräts zu beobachten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung der Optionen des Intersection Observers.

Ganz gleich, ob Sie den Viewport oder ein anderes Element als Wurzel verwenden, die API funktioniert auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Callback-Funktion ausführt, wann immer sich die Sichtbarkeit des Ziel-Elements so ändert, dass es gewünschte Mengen an Schnittstellen mit der Wurzel überschreitet.

Das Ausmaß der Schnittstelle zwischen dem Ziel-Element und seiner Wurzel ist das **Schnittstellenverhältnis**. Dies stellt den Prozentsatz des Ziel-Elements dar, der als ein Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie dessen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die immer dann ausgeführt werden soll, wenn ein Schwellwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellwert von 1,0 bedeutet, dass der Callback aufgerufen wird, wenn 100 % des Ziels im Element sichtbar sind, das in der Option `root` angegeben ist.

#### Optionen für den Intersection Observer

Das `options`-Objekt, das dem [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor übergeben wird, ermöglicht es Ihnen, die Umstände zu steuern, unter denen der Callback des Observers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport für die Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss ein Vorfahr des Ziels sein. Standardmäßig wird der Browser-Viewport verwendet, wenn nicht angegeben oder `null`.
- `rootMargin`
  - : Rand um die Wurzel. Ein String aus einem bis vier Werten, ähnlich wie die CSS-{{cssxref("margin")}}-Eigenschaft, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur absolute Längen oder Prozentsätze sein. Dieses Werteset dient dazu, jede Seite des Begrenzungsrahmens des Wurzelelements zu vergrößern oder zu verkleinern, bevor Schnittstellen berechnet werden. Negative Werte verkleinern den Begrenzungsrahmen des Wurzelelements und positive vergrößern ihn. Der Standardwert, falls nicht spezifiziert, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "Scroll-Container")}}, der die gleichen Werte annimmt/die gleiche Standardeinstellung wie `rootMargin` hat. Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Schnittstellen berechnet werden. Positive Werte vergrößern das Clipping-Rechteck des Containers und erlauben es Zielen, zu überlappen, bevor sie sichtbar werden, während negative Werte das Clipping-Rechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Observers ausgeführt werden sollte. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie möchten, dass der Callback jedes Mal ausgeführt wird, wenn die Sichtbarkeit um weitere 25 % überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standardwert ist 0 (bedeutet, dass der Callback sofort ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1,0 bedeutet, dass der Schwellwert erst als überschritten betrachtet wird, wenn jedes Pixel sichtbar ist.
- `delay`
  - : Beim Verfolgen der Sichtbarkeit des Ziels (`trackVisibility` ist `true`), kann dies verwendet werden, um die minimale Verzögerung in Millisekunden zwischen Benachrichtigungen von diesem Observer festzulegen. Die Begrenzung der Benachrichtigungsrate ist wünschenswert, da die Sichtbarkeitsberechnung rechnerisch intensiv ist. Wenn die Sichtbarkeit verfolgt wird, wird der Wert auf 100 gesetzt, wenn ein Wert unter 100 angegeben wird, und Sie sollten den größten erträglichen Wert verwenden. Standardmäßig ist der Wert 0.
- `trackVisibility`
  - : Ein boolescher Wert, der angibt, ob dieser `IntersectionObserver` Änderungen in der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Schnittstellen, wenn das Ziel-Element in den Viewport des Wurzelelements scrollt. Wenn `true`, prüft der Browser zusätzlich, ob das Ziel tatsächlich sichtbar ist und nicht von anderen Elementen überdeckt oder möglicherweise durch einen Filter, reduzierte Deckkraft oder eine Transformation verzerrt oder verborgen wurde. Der Wert ist standardmäßig `false`, da die Verfolgung der Sichtbarkeit rechnerisch intensiv ist. Wenn dies eingestellt ist, sollte auch eine [`delay`](#delay) festgelegt werden.

#### Schnittstellen-Änderungsrückrufe

Der Callback, der dem `IntersectionObserver()`-Konstruktor übergeben wird, erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Observer:

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

Die Liste der Einträge, die vom Callback empfangen werden, enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Schwellwert-Überschreitungsereignis — es können mehrere Einträge gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzigen Ziel, das innerhalb kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden unter Verwendung einer Warteschlange versandt, sodass sie in der Reihenfolge geordnet sein sollten, in der sie generiert wurden, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Wurzelelement überschneidet, ob das Element als überschneidend betrachtet wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment - wenn Sie Informationen benötigen, die eine Verfolgung im Laufe der Zeit erfordern, wie die Scrollrichtung und -geschwindigkeit, müssen Sie das möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge speichern.

Seien Sie sich bewusst, dass Ihr Callback im Haupt-Thread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwändiges erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeausschnitt zeigt einen Callback, der eine Zählung darüber führt, wie oft Elemente vom Zustand "nicht überschneidend" zu "mindestens 75 % überschneidend" wechseln. Bei einem Schwellwert von 0,0 (Standard) wird der Callback etwa beim Übergang des booleschen Wertes von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Codeausschnitt überprüft daher zuerst, ob der Übergang ein positiver ist, und dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75 % liegt. In diesem Fall wird der Zähler erhöht.

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

#### Ein Element für die Beobachtung anvisieren

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Ziel-Element geben, das er überwachen soll:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Immer wenn das Ziel einen für den `IntersectionObserver` festgelegten Schwellwert erreicht, wird der Callback aufgerufen.

Beachten Sie außerdem, dass das Ziel, wenn Sie die `root`-Option angegeben haben, ein Nachkomme des Wurzelelements sein muss.

### Wie Schnittstellen berechnet werden

Alle Bereiche, die von der Intersection Observer API berücksichtigt werden, sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als in einem minimalen Rechteck betrachtet, das alle Teile des Elements umschließt. Ähnlich verhält es sich, wenn der sichtbare Teil eines Elements nicht rechteckig ist: Das Schnittstellenrechteck des Elements wird als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen vom [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Schnittstelle beschreiben.

#### Der Schnittstellen-Wurzel und `rootMargin`

Bevor wir die Schnittstelle eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittstellen-Wurzel** oder das **Wurzelelement**. Dies kann entweder ein spezifisches Element im Dokument sein, das ein Vorfahr des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **Wurzel-Schnittstellenrechteck** ist das Rechteck, das zur Überprüfung gegen das Ziel oder die Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn die Schnittstellen-Wurzel die implizite Wurzel ist (d.h. das oberste [`Document`](/de/docs/Web/API/Document)), ist das Wurzel-Schnittstellenrechteck das Rechteck des Viewports.
- Wenn die Schnittstellen-Wurzel einen Überlauf-Clip hat, ist das Wurzel-Schnittstellenrechteck der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Wurzel-Schnittstellenrechteck das Umrandungsrechteck der Schnittstellen-Wurzel (wie es durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben wird).

Das Wurzel-Schnittstellenrechteck kann weiter durch Setzen des Wurzelrandes `rootMargin` beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angepasst werden. Die Werte in `rootMargin` definieren Offsets, die zu jeder Seite des Begrenzungsrahmens der Schnittstellen-Wurzel hinzugefügt werden, um die endgültigen Wurzel-Schnittstellenbegrenzungen zu erstellen (die beim Ausführen des Callbacks in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) bekanntgegeben werden). Positive Werte vergrößern den Kasten, während negative ihn verkleinern.

Der Effekt der Vergrößerung des Kastens mithilfe des Wurzelrandes besteht darin, Überlaufziele mit der Wurzel zu überlappen, bevor sie sichtbar werden. Dies kann beispielsweise verwendet werden, um Bilder gerade zu laden, bevor sie in den Sichtbereich kommen, anstatt an dem Punkt, an dem sie sichtbar werden.

Im Beispiel unten haben wir ein scrollbares Kästchen und ein Element, das ursprünglich außerhalb der Ansicht ist. Sie können den rechten Wurzelrand anpassen und sehen, dass:

- Wenn der Rand positiv ist, wird das rote Element als überschneidend mit der Wurzel betrachtet, selbst wenn es nicht sichtbar ist, da es mit dem Randbereich der Wurzel überlappt.
- Wenn der Rand negativ ist, wird das rote Element, selbst wenn es sichtbar wird, nicht als überschneidend mit der Wurzel betrachtet, da das Begrenzungsrechteck der Wurzel verkleinert wird.

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

#### Der Schnittstellen-Wurzel und `scrollMargin`

Betrachten Sie den Fall, in dem Sie ein Wurzelelement haben, das verschachtelte {{Glossary("scroll_container", "Scroll-Container")}} enthält und Schnittstellen mit einem Ziel in einem dieser scrollbaren Container beobachten möchten. Schnittstellen mit dem Ziel-Element beginnen standardmäßig beobachtbar zu sein, wenn das Ziel im innerhalb des durch die Wurzel definierten Bereichs sichtbar ist; mit anderen Worten, wenn der Container in der Wurzelansicht und das Ziel innerhalb des Clipping-Rechtecks seines Containers sichtbar gescrollt wird.

Sie können einen Scroll-Rand verwenden, um Beobachtungen von Schnittstellen zu starten, bevor oder nachdem das Ziel innerhalb seines Scroll-Containers sichtbar gescrollt wurde. Der Rand wird zu allen verschachtelten Scroll-Containern in der Wurzel hinzugefügt, einschließlich des Wurzelelements, wenn es auch ein Scroll-Container ist, und bewirkt entweder die Vergrößerung (positive Ränder) oder die Verkleinerung (negative Ränder) des zur Berechnung von Schnittstellen verwendeten Clipping-Bereichs.

> [!NOTE]
> Sie könnten einen Intersection Observer für jeden Scroll-Container erstellen, für den Sie einen Scroll-Rand benötigen, und die Wurzelrand-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen.
> Die Verwendung eines Scroll-Randes ist ergonomischer, da Sie in den meisten Fällen nur einen Intersection Observer für alle verschachtelten Ziele haben können.

Im Beispiel unten haben wir ein scrollbares Kästchen und ein Bilderkarussell, das ursprünglich außerhalb der Ansicht ist. Ein Observer auf dem Wurzelelement beobachtet die Bild-Element-Ziele im Karussell. Wenn ein Bild-Element beginnt, sich mit dem Wurzelelement zu überschneiden, wird das Bild geladen, die Schnittstelle protokolliert und der Observer entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen. Die sichtbaren Bilder sollten sofort laden. Wenn Sie das Karussell scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar ist.

Nachdem Sie das Beispiel zurückgesetzt haben, können Sie die bereitgestellte Steuerelemente verwenden, um den Scroll-Rand-Prozentsatz zu ändern. Wenn Sie z.B. einen positiven Wert wie 20% setzen, wird das Clip-Rechteck des Scroll-Containers um 20% erhöht, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in den Sichtbereich kommen. Ähnlich bedeutet ein negativer Wert, dass die Schnittstelle erkannt wird, sobald die Bilder bereits im Sichtbereich sind.

```html hidden
<button id="reset" type="button">Reset</button>
```

```html hidden
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
#root_container {
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

{{EmbedLiveSample("Die Schnittstellenwurzel und der Scrollrand", "100%", "500px")}}

#### Schwellenwerte

Anstatt jede infinitesimal Änderung in der Sichtbarkeit eines Ziel-Elements zu berichten, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie einen oder mehrere numerische Werte angeben, die Prozentangaben des Ziel-Elements darstellen, die sichtbar sind. Dann berichtet die API nur Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Wenn Sie beispielsweise darüber informiert werden möchten, jedes Mal, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts durch jede 25%-Marke geht, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte angeben, wenn Sie den Observer erstellen.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Schnittstellenverhältnis mit der Wurzel sich in einem Ausmaß geändert hat, das einen der Schwellenwerte überschreitet, in beide Richtungen.

Sie können sehen, ob das Ziel _derzeit_ die Wurzel überschneidet, indem Sie die Eigenschaft [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) des Eintrags betrachten; wenn ihr Wert `true` ist, überschneidet das Ziel mindestens teilweise das Wurzelelement oder das Dokument. Dies ermöglicht es Ihnen festzustellen, ob der Eintrag einen Übergang von überschneidenden Elementen zu nicht mehr überschneidenden Elementen darstellt oder einen Übergang von nicht überschneidenden zu überschneidenden.

Beachten Sie, dass es möglich ist, ein nicht vorhandenes Schnittstellenrechteck zu haben, was passieren kann, wenn die Schnittstelle genau entlang der Grenze zwischen den beiden oder der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) gleich Null ist. Dieser Zustand, bei dem das Ziel und die Wurzel eine gemeinsame Grenzlinie haben, wird nicht als ausreichend betrachtet, um als Übergang in einen überschneidenden Zustand betrachtet zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, das Kästchen unten herum zu scrollen. Jede farbige Box darinnen zeigt die Prozentzahl von sich selbst an, die in allen vier ihrer Ecken sichtbar ist, sodass Sie sehen können, wie sich diese Verhältnisse im Laufe der Zeit ändern, während Sie das Container scrollen. Jede Box hat einen anderen Satz von Schwellenwerten:

- Die erste Box hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Die zweite Box hat einen einzelnen Schwellenwert bei der 50%-Marke.
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

#### Verfolgung der Sichtbarkeit und Verzögerung

Standardmäßig bietet der Observer Benachrichtigungen, wenn das Ziel-Element in den Viewport des Wurzelelements gescrollt wird. Während dies in vielen Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Schnittstellen nicht gemeldet werden, wenn das Ziel "visuell kompromittiert" wurde. Zum Beispiel, wenn Messung der Analytik oder Anzeigenimpressionen. Es ist wichtig, dass Ziel-Elemente nicht versteckt oder verformt werden, im Ganzen oder teilweise.

Die `trackVisibility`-Einstellung sagt dem Observer, nur Schnittstellen für Ziele zu melden, die der Browser nicht als visuell kompromittiert betrachtet, z.B. durch Ändern der Opazität oder Anwenden eines Filters oder einer Transformation. Der Algorithmus ist konservativ und darf Elemente weglassen, die technisch sichtbar sind, wie solche mit nur einer geringen Opazitätsreduzierung.

Die Sichtbarkeitsberechnung ist rechnerisch teuer und sollte nur verwendet werden, wenn nötig.

Beim Verfolgen der Sichtbarkeit sollte auch eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) eingestellt sein, um die minimale Berichtsperiode zu begrenzen. Die Empfehlung lautet, dass die Verzögerung auf den größten erträglichen Wert eingestellt wird (die Mindestverzögerung beim Verfolgen der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Schnittstellenrechteck

Der Browser berechnet das endgültige Schnittstellenrechteck wie folgt; alles wird für Sie getan, es kann jedoch hilfreich sein, diese Schritte zu verstehen, um besser zu verstehen, wann Schnittstellen auftreten.

1. Das Begrenzungsrechteck des Ziel-Elements (d.h. das kleinste Rechteck, das die Begrenzungsrahmen aller Komponenten, die das Element ausmachen, vollständig umschließt) wird durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf dem Ziel erhalten. Dies ist der größte mögliche Schnittstellenrechteck. Die verbleibenden Schritte entfernen alle Teile, die nicht überlappen.
2. Beginnend beim nächsten übergeordneten Block des Ziels und hinaufgehend wird das Clipping jedes enthaltenden Blocks (falls vorhanden) auf das Schnittstellenrechteck angewendet. Das Clipping eines Blocks wird basierend auf der Schnittmenge der beiden Blöcke und dem (falls vorhanden) angegebenen Clipping-Modus bestimmt, der durch die {{cssxref("overflow")}}-Eigenschaft festgelegt wird. Wenn `overflow` auf etwas anderes als `sichtbar` eingestellt ist, erfolgt ein Clipping.
3. Wenn eines der enthaltenen Elemente die Wurzel eines verschachtelten Browsing-Kontextes (wie dem Dokument, das sich in einem {{HTMLElement("iframe")}} befindet) ist, wird das Schnittstellenviereck auf den Viewport des enthaltenden Kontextes beschnitten, und die Rekursion nach oben durch die Container wird mit dem enthaltenen Block des Containers fortgesetzt. Wenn also das oberste Level eines `<iframe>` erreicht ist, wird das Schnittstellenviereck auf den Viewport des Rahmens geschnitten, dann ist das nächste zu rekursierende Block das übergeordnete Element des Rahmens hin zur Schnittstellenwurzel.
4. Wenn die Rekursion nach oben die Schnittstellenwurzel erreicht, wird das resultierende Rechteck in den namensraumartigen Raum der Schnittstellenwurzel abgebildet.
5. Das resultierende Rechteck wird dann durch die Schnittmenge mit dem [Wurzel-Schnittstellenrechteck](#der_schnittstellen-wurzel_und_`rootmargin`) aktualisiert.
6. Dieses Rechteck wird schließlich in den Koordinatenbereich des [`Dokuments`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Observers, der eine beliebige Anzahl von Ziel-Elementen für die gleiche Schnittstelleneinstellungen beobachten kann. Jeder Observer kann asynchron Änderungen in der Schnittstelle zwischen einem oder mehreren Ziel-Elementen und einem gemeinsamen Vorfahren oder mit ihrem Top-Level-[`Dokument`](/de/docs/Web/API/Document)'s {{Glossary("viewport", "Viewport")}} beobachten. Der Vorfahre oder der Viewport wird als **Wurzel** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittstelle zwischen dem Ziel-Element und seinem Wurzel-Container zu einem bestimmten Übergangsmoment. Objekte dieses Typs können nur auf zwei Wegen erhalten werden: als Eingabe zu Ihrem `IntersectionObserver`-Callback oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel führt dazu, dass ein Ziel-Element seine Farbe und Transparenz ändert, wenn es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein ausführlicheres Beispiel, das zeigt, wie lange ein Satz von Elementen (wie Anzeigen) für den Benutzer sichtbar ist und wie auf diese Informationen durch Aufzeichnen von Statistiken oder durch Aktualisieren von Elementen reagiert werden kann.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem primären Element, das die Box ist, die wir anvisieren werden (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element an und stellt sicher, dass die {{cssxref("background-color")}}- und {{cssxref("border")}}-Attribute an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu beeinflussen, wenn es mehr oder weniger verdeckt wird.

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

Schließlich werfen wir einen Blick auf den JavaScript-Code, der die Intersection Observer API verwendet, um die Dinge in Bewegung zu setzen.

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
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Sichtbarkeitsverhältnis von 0,0 und 1,0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um zu protokollieren, was das Sichbarkeitsverhältnis beim letzten Mal war, als ein Schwellenwert überschritten wurde; dies ermöglicht es uns, herauszufinden, ob das Ziel-Element mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Ziel-Element anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich das Element nicht nur in der Farbe, sondern auch in der zunehmenden Opazität verändert, wenn es weniger verdeckt ist.
- `decreasingColor`
  - : In ähnlicher Weise ist dies ein String, der eine Farbe definiert, die wir verwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu überwachen; sobald die Seite fertig geladen ist, erhalten wir eine Referenz zu dem Element mit der ID `"box"` unter Verwendung von [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die Methode `createObserver()` auf, die wir gleich erstellen werden, um die Erstellung und Installation des Intersection Observers zu bearbeiten.

#### Erstellen des Intersection Observers

Die Methode `createObserver()` wird einmal aufgerufen, sobald die Seite geladen ist, um den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und den Prozess der Beobachtung des Ziel-Elements zu starten.

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

Dies beginnt mit der Erstellung eines `options`-Objekts, das die Einstellungen für den Observer enthält. Wir möchten Änderungen in der Sichtbarkeit des Ziel-Elements im Verhältnis zum Viewport des Dokuments beobachten, also ist `root` `null`. Wir benötigen keine Randfläche, daher ist der Randoffest, `rootMargin`, als "0px" angegeben. Dies veranlasst den Observer, Änderungen in der Schnittstelle zwischen den Grenzen des Ziel-Elements und denen des Viewports zu beobachten, ohne zusätzlichen (oder subtrahierten) Raum.

Die Liste der Sichtbarkeitsverhältnis-Schwellenwerte, `threshold`, wird von der Funktion `buildThresholdList()` erstellt. Die Schwellenwertliste wird in diesem Beispiel programmiert erstellt, da es eine Anzahl von ihnen gibt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Observer, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen, die Funktion angeben, die aufgerufen werden soll, wenn die Schnittstelle eine unserer Schwellenwerte überschreitet, `handleIntersect()`, und unser Set von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Observer auf und übergeben ihm das gewünschte Ziel-Element.

Wir könnten uns entscheiden, mehrere Elemente in Bezug auf Schnittstellensichtbarkeitsänderungen mit dem Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun möchten.

#### Erstellen des Arrays von Schwellenwertverhältnissen

Die Funktion `buildThresholdList()`, die die Liste der Schwellenwerte erstellt, sieht wie folgt aus:

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

Dies erstellt das Array der Schwellenwerte—jeweils eines davon ist ein Verhältnis zwischen 0,0 und 1,0—indem für jede ganze Zahl `i` zwischen 1 und `numSteps` der Wert `i/numSteps` in das `thresholds`-Array geschoben wird. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis, mit dem Standardwert von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Selbstverständlich könnten wir das Array der Schwellenwerte in unseren Code festkodieren, und oft wird das auch so sein. Dieses Beispiel lässt jedoch Raum für die Hinzufügung von Konfigurationssteuerungen zur Anpassung der Granularität.

#### Umgang mit Schnittstellenänderungen

Wenn der Browser feststellt, dass das Ziel-Element (in unserem Fall das mit der ID `"box"`) so enthüllt oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis einen unserer Schwellenwerte überschreitet, ruft es unsere Handler-Funktion `handleIntersect()` auf:

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

Für jedes [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` überprüfen wir, ob das entry's [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) steigt; wenn es steigt, setzen wir die {{cssxref("background-color")}} des Ziel-Elements auf den String in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), und ersetzen das Wort "ratio" mit dem `intersectionRatio` des entry. Das Ergebnis: nicht nur ändert sich die Farbe, sondern auch die Transparenz des Ziel-Elements; während das Schnittstellenverhältnis sinkt, sinkt auch der Alpha-Wert der Hintergrundfarbe, was zu einem Element führt, das durchsichtiger wird.

In ähnlicher Weise verwenden wir, wenn das `intersectionRatio` sinkt, den String `decreasingColor` und ersetzen das Wort "ratio" darin mit dem `intersectionRatio` bevor wir die `background-color` des Ziel-Elements setzen.

Schließlich, um zu verfolgen, ob das Schnittstellenverhältnis steigt oder sinkt, merken wir uns das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt. Scrollen Sie auf dieser Seite rauf und runter und beobachten Sie, wie sich das Erscheinungsbild der Box verändert, während Sie dies tun.

{{EmbedLiveSample('Ein einfaches Beispiel', 400, 400)}}

Es gibt ein noch ausführlicheres Beispiel bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection\_ Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer Polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
