---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Schnittmenge eines Zielelements mit einem Vorfahrenelement oder mit einem Dokument auf oberster Ebene asynchron zu beobachten {{Glossary("viewport", "viewport")}}.

## Überblick

Historisch gesehen war das Erkennen der Sichtbarkeit eines Elements oder der relativen Sichtbarkeit zweier Elemente im Verhältnis zueinander eine schwierige Aufgabe, für die Lösungen unzuverlässig waren und dazu neigten, den Browser und die vom Benutzer aufgerufenen Websites zu verlangsamen. Mit der Reifung des Webs ist der Bedarf an diesen Informationen gewachsen. Schnittstelleninformationen werden aus vielen Gründen benötigt, wie z.B.:

- Lazy-Loading von Bildern oder anderem Inhalt beim Scrollen einer Seite.
- Implementierung von Websites mit "unendlichem Scrollen", bei denen immer mehr Inhalt geladen und angezeigt wird, während Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen zur Berechnung von Werbeeinnahmen.
- Entscheidung, ob Aufgaben oder Animationsprozesse basierend darauf durchgeführt werden sollen, ob der Benutzer das Ergebnis sehen wird oder nicht.

Frühere Implementierungen von Schnittstellenerkennung beinhalteten Event-Handler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, um die benötigten Informationen für jedes betroffene Element zusammenzustellen. Da all dieser Code im Haupt-Thread ausgeführt wird, kann selbst nur einer von ihnen Leistungsprobleme verursachen. Wenn eine Website mit diesen Tests geladen ist, können die Dinge regelrecht hässlich werden.

Betrachten Sie eine Webseite, die unendliches Scrollen verwendet. Sie verwendet eine vom Anbieter bereitgestellte Bibliothek, um die Anzeigen zu verwalten, die regelmäßig auf der Seite platziert werden, hat an verschiedenen Stellen animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsfenster und Ähnliches zeichnet. Jede davon hat ihre eigenen Routinen zur Erkennung von Schnittmengen, die alle im Haupt-Thread ausgeführt werden. Der Ersteller der Website merkt möglicherweise nicht einmal, dass dies passiert, da er möglicherweise nur sehr wenig über die inneren Abläufe der beiden von ihm verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Routinen zur Erkennung von Schnittmengen ständig während des Scrollhandling-Codes ausgelöst, was zu einer Erfahrung führt, die den Benutzer frustriert, sowohl über den Browser, die Website als auch seinen Computer.

Die Intersection Observer API ermöglicht es dem Code, eine Rückruffunktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element eine Schnittmenge mit einem anderen Element (oder dem {{Glossary("viewport", "viewport")}}) betritt oder verlässt, oder wenn sich die Schnittmenge zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites im Haupt-Thread nichts mehr tun, um diese Art von Schnittmengenerkennung zu überwachen, und der Browser kann die Verwaltung von Schnittmengen optimieren, wie er es für richtig hält.

Ein Punkt, den die Intersection Observer API nicht lösen kann: Logik basierend auf der genauen Anzahl von überlappenden Pixeln auszulösen oder speziell darauf, welche es sind. Sie löst nur den allgemeinen Anwendungsfall "Wenn sie sich irgendwo um _N_% überschneiden, muss ich etwas unternehmen."

## Konzepte und Verwendung

Die Intersection Observer API ermöglicht es Ihnen, einen Rückruf zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Bedingungen eintritt:

- Ein **Ziel**-Element schneidet entweder den Viewport des Geräts oder ein angegebenes Element. Dieses angegebene Element wird für Zwecke der Intersection Observer API als **Root-Element** oder **Root** bezeichnet.
- Das erste Mal, wenn der Beobachter ursprünglich gebeten wurde, ein Ziel-Element zu überwachen.

Typischerweise möchten Sie Änderungen der Schnittmenge in Bezug auf den nächsten scrollbaren Vorfahren des Zielelements überwachen oder, wenn das Zielelement kein Nachkomme eines scrollbaren Elements ist, den Viewport des Geräts. Um die Schnittmenge relativ zum Viewport des Geräts zu überwachen, geben Sie `null` für die `root`-Option an. Lesen Sie weiter, um eine detailliertere Erklärung zu den Optionen des Intersection Observers zu erhalten.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise und führt eine von Ihnen bereitgestellte Rückruffunktion aus, wann immer die Sichtbarkeit des Zielelements sich so verändert, dass es die gewünschten Schnittstellenmengen mit dem Root überschreitet.

Der Grad der Schnittmenge zwischen dem Zielelement und seinem Root ist das **intersection ratio**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, der als Wert zwischen 0,0 und 1,0 sichtbar ist.

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

Ein Schwellenwert von 1,0 bedeutet, dass die Rückruffunktion aufgerufen wird, wenn 100% des Ziels innerhalb des durch die `root`-Option angegebenen Elements sichtbar sind.

#### Optionen des Intersection Observers

Das `options`-Objekt, das in den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Bedingungen zu steuern, unter denen der Rückruf des Observers aufgerufen wird. Es enthält die folgenden Felder:

- `root`
  - : Das Element, das als Viewport zur Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahre des Ziels sein. Standardmäßig wird der Browser-Viewport verwendet, wenn nichts angegeben ist oder `null`.
- `rootMargin`
  - : Rand um den Root. Ein String von einem bis vier Werten, ähnlich wie die CSS-Eigenschaft {{cssxref("margin")}}, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur in Pixel (`px`) oder Prozent (`%`) angegeben werden. Diese Wertemenge dient dazu, jede Seite der Begrenzungsbox des Root-Elements vor der Berechnung der Schnittmengen zu vergrößern oder zu verkleinern. Negative Werte verkleinern die Begrenzungsbox des Root-Elements, positive Werte vergrößern sie. Der Standardwert, wenn nicht anders angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte {{Glossary("scroll_container", "Scroll-Container")}}, der die gleichen Werte annimmt und die gleiche Standardeinstellung hat wie `rootMargin`.
    Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Schnittmengen berechnet werden.
    Positive Werte vergrößern das Rechteck des Containers, sodass Ziele sich überschneiden können, bevor sie sichtbar werden, während negative Werte das Rechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Rückruf des Observers ausgeführt werden soll. Wenn Sie nur feststellen möchten, wann die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie möchten, dass der Rückruf jedes Mal ausgeführt wird, wenn die Sichtbarkeit einen weiteren 25%-Schritt überschreitet, würden Sie das Array \[0, 0,25, 0,5, 0,75, 1] angeben. Der Standardwert ist 0 (was bedeutet, dass der Rückruf ausgeführt wird, sobald das Zielelement die Grenze des Roots schneidet oder berührt, auch wenn noch keine Pixel sichtbar sind). Ein Wert von 1,0 bedeutet, dass der Schwellenwert erst als überschritten betrachtet wird, wenn jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Wenn das Ziel verfolgt wird ([trackVisibility](#trackvisibility) ist `true`), kann dies verwendet werden, um die minimale Verzögerung in Millisekunden zwischen Benachrichtigungen von diesem Beobachter festzulegen.
    Es ist wünschenswert, die Benachrichtigungsrate zu begrenzen, da die Sichtbarkeitsberechnung rechenintensiv ist.
    Wenn Sie die Sichtbarkeit verfolgen, wird der Wert auf 100 gesetzt für jeden Wert unter 100, und Sie sollten den größtmöglichen Wert verwenden, den Sie tolerieren können.
    Der Standardwert ist 0.
- `trackVisibility` {{experimental_inline}}
  - : Ein boolean, der angibt, ob dieser `IntersectionObserver` Änderungen der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Schnittmengen, wenn das Zielelement in den Viewport des Root-Elements scrollt.
    Wenn `true`, überprüft der Browser zusätzlich, ob das Ziel tatsächlich sichtbar ist und nicht von anderen Elementen überdeckt oder möglicherweise durch einen Filter, reduzierte Deckkraft oder eine Transformation verzerrt oder versteckt wurde.
    Der Wert ist standardmäßig `false`, da die Verfolgung der Sichtbarkeit rechenintensiv ist.
    Wenn dies festgelegt ist, sollte auch ein [`delay`](#delay) festgelegt werden.

#### Rückrufe bei Schnittmengenänderungen

Der Rückruf, der an den `IntersectionObserver()`-Konstruktor übergeben wird, empfängt eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Beobachter:

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

Die Liste der vom Rückruf empfangenen Einträge enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Ereignis beim Überschreiten eines Schwellenwerts – mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzelnen Ziel, das mehrere Schwellenwerte in kurzer Zeit überschreitet. Die Einträge werden mit einer Warteschlange versendet, sodass sie nach der Zeit geordnet sein sollten, zu der sie generiert wurden, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Root-Element überlappt, ob das Element als überlappend betrachtet wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment – wenn Sie Informationen benötigen, die eine Verfolgung im Laufe der Zeit erfordern, wie die Scrollrichtung und -geschwindigkeit, müssen Sie das möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge speichern.

Beachten Sie, dass Ihr Rückruf im Haupt-Thread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwändiges getan werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Code-Schnipsel zeigt einen Rückruf, der einen Zähler festhält, wie oft Elemente von nicht überschnittener zu mindestens 75% überschnittener Wurzel wechseln. Für einen Schwellenwert von 0,0 (Standardwert) wird der Rückruf ungefähr beim Übergang des Booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Code-Schnipsel überprüft also zuerst, dass der Übergang ein positiver ist, und bestimmt dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75% liegt, in welchem Fall er den Zähler erhöht.

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

Sobald Sie den Beobachter erstellt haben, müssen Sie ihm ein Zielelement zur Überwachung geben:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Immer wenn das Ziel einen im `IntersectionObserver` angegebenen Schwellenwert erfüllt, wird der Rückruf aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachkomme des Root-Elements sein muss.

### Wie die Schnittmenge berechnet wird

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; unregelmäßig geformte Elemente werden als das kleinste Rechteck betrachtet, das alle Teile des Elements umschließt. Ebenso wird, wenn der sichtbare Teil eines Elements nicht rechteckig ist, das Rechteck der Schnittmenge des Elements als das kleineste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen Eigenschaften, die von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellt werden, eine Schnittmenge beschreiben.

#### Der Schnittwurzel und der Wurzelrand

Bevor wir die Schnittmenge eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittwurzel** oder das **Root-Element**. Dies kann entweder ein spezifisches Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_root intersection rectangle_** ist das Rechteck, das zur Prüfung gegen das Ziel oder die Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn die Schnittwurzel die implizite Wurzel ist (d.h. das oberste [`Document`](/de/docs/Web/API/Document)), ist das Wurzel-Schnittrechteck das Rechteck des Viewports.
- Wenn die Schnittwurzel einen Überlaufclip hat, ist das Wurzel-Schnittrechteck der Inhaltsbereich des Root-Elements.
- Andernfalls ist das Wurzel-Schnittrechteck das begrenzende Client-Rechteck der Schnittwurzel (wie durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben).

Das Wurzel-Schnittrechteck kann weiter angepasst werden, indem beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) der **Wurzelrand**, `rootMargin`, festgelegt wird. Die Werte in `rootMargin` definieren Versätze, die zu jeder Seite der Begrenzungsbox der Schnittwurzel hinzugefügt werden, um die endgültigen Wurzelgrenzen der Schnittmenge zu erstellen (die bei der Ausführung des Rückrufs in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) angezeigt werden). Positive Werte vergrößern die Box, während negative Werte sie verkleinern. Jeder Versatzwert kann nur in Pixel (px) oder in Prozent (%) ausgedrückt werden.

Die Wirkung, die Box durch den Wurzelrand zu vergrößern, besteht darin, dass Überlauffelder sich mit der Wurzel überschneiden können, bevor sie sichtbar werden.
Dies kann beispielsweise verwendet werden, um Bilder zu laden, bevor sie in den Sichtbereich kommen, anstatt zu dem Zeitpunkt, an dem sie sichtbar werden.

Im folgenden Beispiel haben wir ein scrollbares Feld und ein Element, das anfangs nicht sichtbar ist.
Sie können den rechten Wurzelrand anpassen und Folgendes beobachten:

- Wenn der Rand positiv ist, wird das rote Element als mit der Wurzel überschneidend betrachtet, auch wenn es nicht sichtbar ist, da es mit dem Randbereich der Wurzel überschneidet.
- Wenn der Rand negativ ist, wird das rote Element selbst dann nicht als mit der Wurzel überschneidend betrachtet, wenn es sichtbar wird, da das Begrenzungsrechteck der Wurzel verkleinert wird.

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

{{EmbedLiveSample("Schnittwurzel und Wurzelrand", "", 200)}}

#### Der Schnittwurzel und der Scrollrand

Betrachten Sie den Fall, in dem Sie ein Root-Element haben, das verschachtelte {{Glossary("scroll_container", "Scroll-Container")}} enthält, und Sie möchten Schnittmengen mit einem Ziel in einem dieser scrollbaren Container beobachten.
Schnittmengen mit dem Zielelement beginnen standardmäßig beobachtbar zu werden, wenn das Ziel innerhalb des durch den Root definierten Bereichs sichtbar ist;
mit anderen Worten, wenn der Container in der Wurzel sichtbar und das Ziel innerhalb des Clipping-Rechtecks seines Containers sichtbar ist.

Sie können einen Scrollrand verwenden, um Schnittmengen zu beobachten, bevor oder nachdem das Ziel innerhalb seines Scroll-Containers in den Sichtbereich gescrollt wird.
Der Rand wird auf alle verschachtelten Scroll-Container in der Wurzel angewendet, einschließlich des Root-Elements, wenn es auch ein Scroll-Container ist, und hat die Wirkung, das Clip-Rechteck entweder zu vergrößern (positive Ränder) oder zu verkleinern (negative Rand) für die Berechnung der Schnittmengen.

> [!NOTE]
> Sie könnten in jedem Scroll-Container, für den Sie einen Scrollrand wünschen, einen Intersection Observer erstellen und die `root margin`-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen.
> Die Verwendung eines Scrollrands ist jedoch ergonomischer, da Sie in den meisten Fällen lediglich einen Intersection Observer für alle verschachtelten Ziele benötigen.

Im Beispiel unten haben wir ein scrollbares Kästchen und ein Bildkarussell, das anfangs nicht sichtbar ist.
Ein Beobachter auf dem Root-Element beobachtet die Bildelement-Ziele innerhalb des Karussells.
Wenn ein Bildelement beginnt, sich mit dem Root-Element zu überschneiden, wird das Bild geladen, die Schnittmenge protokolliert und der Beobachter entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen.
Die sichtbaren Bilder sollten sofort geladen werden.
Wenn Sie das Karussell scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nachdem Sie das Beispiel zurückgesetzt haben, können Sie die bereitgestellte Steuerung verwenden, um den Prozentwert des Scrollrands zu ändern.
Wenn Sie einen positiven Wert wie 20% setzen, wird das Clip-Rechteck des Scroll-Containers um 20% vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in den Sichtbereich kommen.
Ein negativer Wert bedeutet hingegen, dass die Schnittmenge erkannt wird, sobald die Bilder bereits im Sichtbereich sind.

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

{{EmbedLiveSample("Die Schnittwurzel und der Scrollrand", "100%", "500px")}}

#### Schwellenwerte

Anstatt jede unendlich kleine Änderung, wie viel Prozent eines Zielelements sichtbar sind, zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Beobachter erstellen, können Sie einen oder mehrere numerische Werte angeben, die Prozentsätze des sichtbaren Zielelements darstellen. Daher meldet die API nur Sichtbarkeitsänderungen, die diese Schwellenwerte überschreiten.

Wenn Sie beispielsweise bei jeder Rückkehr oder jedem Vorstoß durch jede 25%-Marke eines Zieles benachrichtigt werden möchten, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als die Liste der Schwellenwerte beim Erstellen des Beobachters angeben.

Wenn der Rückruf aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Verlauf der Überschneidung mit dem Root sich so geändert hat, dass der offengelegte Anteil einen der Schwellenwerte in eine der beiden Richtungen überschreitet.

Sie können sehen, ob das Ziel _derzeit_ den Root überschneidet, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags betrachten; wenn ihr Wert `true` ist, überschneidet das Ziel zumindest teilweise das Root-Element oder Dokument. Auf diese Weise können Sie feststellen, ob der Eintrag einen Übergang von den überschneidenden zu den nicht überschneidenden Elementen oder einen Übergang von den nicht überschneidenden zu den überschneidenden Elementen darstellt.

Beachten Sie, dass es möglich ist, ein Null-Schnittrechteck zu haben, was passieren kann, wenn die Schnittmenge genau entlang der Grenze zwischen den beiden auftritt oder der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) Null ist. Dieser Zustand, in dem Ziel und Root eine Grenze teilen, wird nicht als ausreichend angesehen, um in einen Schnittzustand überzugehen.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, das Feld unten zu scrollen. Jedes farbige Feld darin zeigt den Prozentsatz seiner selbst in allen vier Ecken an, damit Sie sehen können, wie diese Verhältnisse sich im Laufe der Zeit ändern, während Sie das Container scrollen. Jedes Feld hat eine andere Reihe von Schwellenwerten:

- Das erste Feld hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt, das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds)-Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Feld hat einen einzigen Schwellenwert, bei 50%.
- Das dritte Feld hat Schwellenwerte, die alle 10% der Sichtbarkeit aufweisen (0%, 10%, 20% usw.).
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

{{EmbedLiveSample("Schwellenwerte", 500, 500)}}

#### Verfolgung der Sichtbarkeit und Verzögerung

Standardmäßig bietet der Observer Benachrichtigungen, wenn das Zielelement in den Viewport des Root-Elements gescrollt wird.
Während dies in vielen Situationen alles ist, was benötigt wird, ist es manchmal wichtig, dass Schnittmengen nicht gemeldet werden, wenn das Ziel "visuell beeinträchtigt" wurde.
Zum Beispiel ist es bei der Messung von Analysen oder Werbeimpressionen wichtig, dass Zielelemente nicht versteckt oder verzerrt werden, ganz oder teilweise.

Die Einstellung `trackVisibility` teilt dem Observer mit, Schnittmengen nur für Ziele zu melden, die der Browser nicht als visuell beeinträchtigt ansieht, zum Beispiel durch Änderung der Deckkraft oder Anwendung eines Filters oder einer Transformation.
Der Algorithmus ist konservativ und kann möglicherweise sichtbare Elemente auslassen, wie solche mit nur einer geringen Deckkraftreduktion.

Die Sichtbarkeitsberechnung ist rechenintensiv und sollte nur bei Bedarf verwendet werden.
Wenn Sie die Sichtbarkeit verfolgen, sollte auch eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um die Mindestmeldeperiode zu begrenzen.
Die Empfehlung lautet, dass Sie die Verzögerung auf den größtmöglichen tolerierbaren Wert einstellen (die Mindestverzögerung beim Verfolgen der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Schnittrechteck

Der Browser berechnet das endgültige Schnittrechteck wie folgt; dies geschieht alles automatisch, kann aber hilfreich sein, diese Schritte zu verstehen, um genau zu begreifen, wann Schnittmengen auftreten.

1. Das Begrenzungsrechteck des Zielelements (d.h. das kleinste Rechteck, das alle Begrenzungsboxen jeder Komponente des Elements vollständig umschließt) wird durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf das Ziel abgerufen. Dies ist das größte, das das Schnittrechteck sein kann. Die verbleibenden Schritte entfernen alle Abschnitte, die nicht überlappen.
2. Beginnend beim unmittelbaren übergeordneten Block des Ziels und nach außen gehend wird das Clipping (falls vorhanden) jedes enthaltenen Blocks auf das Schnittrechteck angewendet. Das Clipping eines Blocks wird auf der Grundlage der Schnittmenge der beiden Blöcke und des Clipping-Modus (falls vorhanden) bestimmt, der durch die {{cssxref("overflow")}}-Eigenschaft angegeben wird. Das Setzen von `overflow` auf etwas anderes als `visible` verursacht, dass Clipping auftritt.
3. Wenn eines der enthaltenden Elemente die Wurzel eines verschachtelten Browsing-Kontexts ist (wie das Dokument in einem {{HTMLElement("iframe")}}), wird das Schnittrechteck auf den Viewport des enthaltenden Kontexts abgeschnitten, und die Rekursion nach oben durch die Container wird mit dem übergeordneten Block des Containers fortgesetzt. Wenn also das oberste Level eines `<iframe>` erreicht wird, wird das Schnittrechteck auf den Viewport des Frames abgeschnitten, dann ist das Elternelement des Frames der nächste Block, der durch die Richtung zur Schnittwurzel rekursiv durchschritten wird.
4. Wenn die Rekursion nach oben die Schnittwurzel erreicht, wird das resultierende Rechteck in den Koordinatenraum der Schnittwurzel transformiert.
5. Das resultierende Rechteck wird dann aktualisiert, indem es mit dem [Wurzel-Schnittrechteck](#der_schnittwurzel_und_der_wurzelrand) geschnitten wird.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des `document` des Ziels ([`document`](/de/docs/Web/API/Document)) transformiert.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die Hauptschnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Observers, der jede Anzahl von Zielen für die gleiche Schnittmengenkonfiguration beobachten kann. Jeder Observer kann asynchron Änderungen in der Schnittmenge zwischen einem oder mehreren Zielelementen und einem gemeinsamen Vorfahrenelement oder ihrem obersten [`Document`](/de/docs/Web/API/Document)-{{Glossary("viewport", "viewport")}} beobachten. Der Vorfahre oder der Viewport wird als **Root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittmenge zwischen dem Zielelement und seinem Root-Container in einem bestimmten Übergangsmoment. Objekte dieses Typs können nur auf zwei Arten abgerufen werden: als Eingabe für Ihren `IntersectionObserver`-Rückruf oder durch den Aufruf von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass sich ein Zielelement in seiner Farbe und Transparenz ändert, während es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie lange eine Anzahl von Elementen (wie Anzeigen) für den Benutzer sichtbar sind und wie Sie auf diese Informationen reagieren können, indem Sie Statistiken aufzeichnen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr knapp, mit einem primären Element, das die Box ist, die wir anvisieren werden (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element aus und stellt sicher, dass die {{cssxref("background-color")}}- und {{cssxref("border")}}-Attribute an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden, um die Änderungen des Elements zu bewirken, während es mehr oder weniger verdeckt wird.

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

Schließlich wollen wir uns den JavaScript-Code ansehen, der die Intersection Observer API nutzt, um Dinge zum Laufen zu bringen.

#### Einrichtung

Zuerst müssen wir einige Variablen vorbereiten und den Beobachter installieren.

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
  - : Diese Variable wird verwendet, um aufzuzeichnen, was das Sichtbarkeitsverhältnis war, das letzte Mal, als ein Schwellenwert überschritten wurde; dies erlaubt uns festzustellen, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass das Element nicht nur seine Farbe ändert, sondern auch zunehmend undurchsichtiger wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ebenso ist dies ein String, der eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir holen uns eine Referenz zu dem Element mit der ID `"box"` mit [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die Methode `createObserver()` auf, die wir gleich erstellen werden, um den Vorgang des Erstellens und Installierens des Intersection Observers zu handhaben.

#### Erstellen des Intersection Observers

Die `createObserver()`-Methode wird einmalig nach dem Laden der Seite aufgerufen, um den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) tatsächlich zu erstellen und den Prozess der Beobachtung des Zielelements zu starten.

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

Dies beginnt mit der Einrichtung eines `options`-Objekts, das die Einstellungen für den Beobachter enthält. Wir möchten Änderungen in der Sichtbarkeit des Zielelements im Verhältnis zum Dokumenten-Viewport beobachten, daher ist `root` `null`. Wir benötigen keinen Rand, daher wird der Margenversatz, `rootMargin`, als "0px" angegeben. Dies führt dazu, dass der Beobachter Änderungen in der Schnittmenge zwischen den Grenzen des Zielelements und denen des Viewports überwacht, ohne dass ein zusätzlicher (oder abgezogener) Raum hinzugefügt wird.

Die Liste der Sichtbarkeitsverhältnisschwellenwerte, `threshold`, wird durch die Funktion `buildThresholdList()` erstellt. Die Schwellenwertliste wird in diesem Beispiel programmatisch aufgebaut, da es eine Anzahl davon gibt und die Anzahl anpassbar sein soll.

Nachdem `options` bereit ist, erstellen wir den neuen Beobachter, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen, eine Funktion angeben, die aufgerufen wird, wenn die Schnittmenge eine unserer Schwellenwerte überschreitet, `handleIntersect()` und unser Optionsset verwenden. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) für den zurückgegebenen Beobachter auf und geben das gewünschte Zielelement ein.

Wir könnten wählen, mehrere Elemente für Sichtbarkeitsänderungen hinsichtlich der Schnittmenge mit dem Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun wollten.

#### Aufbau des Arrays von Schwellenwertverhältnissen

Die `buildThresholdList()`-Funktion, die die Liste der Schwellenwerte aufbaut, sieht so aus:

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

Dies baut das Array von Schwellenwerten auf – von denen jeweils ein Verhältnis zwischen 0,0 und 1,0 ist, indem es den Wert `i/numSteps` für jedes ganze `i` zwischen 1 und `numSteps` in das `thresholds`-Array schiebt. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis, gegeben dem Standardwert von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Natürlich könnten wir das Array der Schwellenwerte in unseren Code hartcodieren, und oft ist das, was Sie am Ende tun werden. Aber dieses Beispiel lässt Raum für das Hinzufügen von Konfigurationssteuerungen zur Anpassung der Granularität, zum Beispiel.

#### Umgang mit Schnittmängenänderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall dasjenige mit der ID `"box"`) aufgedeckt oder verdeckt wurde, sodass sein Vergleichszahlenverhältnis einen der Schwellenwerte in unserer Liste überschreitet, ruft es unsere Handler-Funktion `handleIntersect()` auf:

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

Für jeden [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` schauen wir nach, ob das Eintrags-[`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) ansteigt; wenn ja, setzen wir die {{cssxref("background-color")}} des Ziels auf den String in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzen das Wort "ratio" mit dem `intersectionRatio` des Eintrags. Das Ergebnis: Nicht nur wird die Farbe geändert, sondern auch die Transparenz des Zielelements ändert sich, ebenfalls. Da das Vergleichszahlenverhältnis sinkt, sinkt der Alpha-Wert der Hintergrundfarbe mit ihm, was zu einem Element führt, das transparenter wird.

Ebenso, wenn das `intersectionRatio` sinkt, verwenden wir den String `decreasingColor` und ersetzen das Wort "ratio" in diesem mit dem `intersectionRatio` des Eintrags, bevor wir die `background-color` des Zielelements setzen.

Schließlich, um zu verfolgen, ob das Vergleichszahlenverhältnis steigt oder fällt, merken wir uns das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt. Scrollen Sie diese Seite nach oben und unten und beachten Sie, wie sich das Erscheinungsbild der Box ändert, während Sie dies tun.

{{EmbedLiveSample('Ein einfaches Beispiel', 400, 400)}}

Ein noch umfangreicheres Beispiel finden Sie unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
