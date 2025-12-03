---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, asynchron Änderungen in der Schnittmenge eines Zielelements mit einem Vorfahrenelement oder mit dem Viewport eines obersten Dokuments zu beobachten.

## Überblick

Historisch gesehen war das Erkennen der Sichtbarkeit eines Elements oder der relativen Sichtbarkeit zweier Elemente zueinander eine schwierige Aufgabe, für die die Lösungen oft unzuverlässig waren und dazu neigten, den Browser und die Websites, die der Benutzer aufruft, zu verlangsamen. Während das Web gereift ist, ist der Bedarf an dieser Art von Informationen gewachsen. Schnittstelleninformationen werden aus vielen Gründen benötigt, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderem Inhalt, während eine Seite gescrollt wird.
- Implementierung von "unendlichen Scroll"-Webseiten, bei denen mehr und mehr Inhalt geladen und gerendert wird, während Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationsprozesse basierend darauf durchgeführt werden sollen, ob der Benutzer das Ergebnis sehen wird oder nicht.

Die Implementierung der Schnittstellenerkennung in der Vergangenheit beinhaltete Ereignis-Handler und Schleifen, die Methoden wie `Element.getBoundingClientRect()` aufriefen, um die benötigten Informationen für jedes betroffene Element zu erstellen. Da all dieser Code im Hauptthread ausgeführt wird, kann selbst einer von ihnen Leistungsprobleme verursachen. Wenn eine Website mit diesen Tests geladen wird, kann es regelrecht unangenehm werden.

Betrachten Sie eine Webseite, die unendliches Scrollen verwendet. Sie verwendet eine vom Anbieter bereitgestellte Bibliothek, um die Anzeigen zu verwalten, die periodisch auf der Seite platziert werden, verfügt über animierte Grafiken hier und da, und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsfelder und dergleichen zeichnet. Jede dieser Funktionen hat ihre eigenen Routinen zur Schnittstellenerkennung, die alle im Hauptthread ausgeführt werden. Der Ersteller der Website bemerkt möglicherweise nicht einmal, dass dies geschieht, da er möglicherweise nur wenig über die inneren Abläufe der beiden verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Routinen zur Schnittstellenerkennung ständig ausgeführt, was zu einer Erfahrung führt, die den Benutzer mit dem Browser, der Website und seinem Computer frustriert.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die immer dann ausgeführt wird, wenn ein bestimmtes Element eine Schnittstelle mit einem anderen Element (oder dem Viewport) betritt oder verlässt oder wenn die Schnittstelle zwischen zwei Elementen um einen bestimmten Betrag geändert wird. Auf diese Weise müssen Websites im Hauptthread nichts tun, um diese Art von Schnittstellenelementen zu überwachen, und der Browser kann die Verwaltung der Schnittstellen nach eigenem Ermessen optimieren.

Eine Sache, die die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl von überlappenden Pixeln auslösen oder speziell darauf, welche es sind. Sie löst nur den häufigen Anwendungsfall "Wenn sie sich irgendwo um _N_% überlappen, muss ich etwas tun" aus.

## Konzepte und Verwendung

Die Intersection Observer API ermöglicht es Ihnen, einen Callback zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Bedingungen eintritt:

- Ein **Ziel**-Element überschneidet entweder den Viewport des Geräts oder ein angegebenes Element. Dieses angegebene Element wird für die Zwecke der Intersection Observer API als **Root-Element** oder **Root** bezeichnet.
- Das erste Mal, wenn der Observer angewiesen wird, ein Zielelement zu beobachten.

In der Regel möchten Sie Änderungen an der Schnittstelle in Bezug auf den nächsten scrollbaren Vorfahren des Zielelements beobachten oder, wenn das Zielelement kein Nachkomme eines scrollbaren Elements ist, den Viewport des Geräts. Um die Schnittstelle relativ zum Viewport des Geräts zu beobachten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung zu den Optionen des Schnittstellenobservers.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise, indem sie eine Callback-Funktion ausführt, die Sie bereitstellen, wann immer sich die Sichtbarkeit des Zielelements ändert, so dass es gewünschte Mengen von Schnittstellen mit dem Root überschreitet.

Der Grad der Schnittstelle zwischen dem Zielelement und seinem Root ist das **Schnittstellenverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, das als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die ausgeführt wird, wann immer ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1,0 bedeutet, dass die Callback-Funktion aufgerufen wird, wenn 100 % des Ziels innerhalb des durch die `root`-Option angegebenen Elements sichtbar sind.

#### Optionen des Intersection Observers

Das in den Konstruktor `IntersectionObserver()` übergebene `options`-Objekt ermöglicht es Ihnen, die Bedingungen zu steuern, unter denen der Callback des Obsservers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport zur Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahre des Ziels sein. Standardmäßig wird der Browser-Viewport verwendet, wenn nicht angegeben oder `null`.
- `rootMargin`
  - : Rand um den Root. Eine Zeichenkette von einem bis vier Werten ähnlich der CSS-Eigenschaft `margin`, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur in Pixel (`px`) oder Prozentsätzen (`%`) angegeben werden. Dieses Set von Werten dient dazu, jede Seite des umrahmten Rahmens des Root-Elements zu vergrößern oder zu verkleinern, bevor Schnittstellen berechnet werden. Negative Werte verkleinern den umrahmten Rahmen des Root-Elements und positive Werte vergrößern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `scrollMargin`
  - : Rand um verschachtelte [scroll-container](/de/docs/Glossary/Scroll_container), die dieselben Werte verwenden/die gleiche Standardeinstellung wie `rootMargin` haben.
    Die Ränder werden auf verschachtelte scrollbare Container angewendet, bevor Schnittstellen berechnet werden.
    Positive Werte vergrößern das Abschneidrechteck des Containers, sodass Ziele die Schnittstelle überschreiten können, bevor sie sichtbar werden, während negative Werte das Abschneidrechteck verkleinern.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Observers ausgeführt werden soll. Wenn Sie nur erfassen möchten, wenn die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn der Callback jedes Mal ausgeführt werden soll, wenn die Sichtbarkeit um weitere 25% steigt, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Standardwert ist 0 (was bedeutet, dass der Callback ausgeführt wird, sobald das Zielelement die Grenze des Rootes überschneidet oder berührt, auch wenn noch keine Pixel sichtbar sind). Ein Wert von 1,0 bedeutet, dass der Schwellenwert nicht als erreicht betrachtet wird, bis jedes Pixel sichtbar ist.
- `delay` {{experimental_inline}}
  - : Wenn die Sichtbarkeit des Ziels ([trackVisibility](#trackvisibility) ist `true`) verfolgt wird, kann dies verwendet werden, um die minimale Verzögerung in Millisekunden zwischen den Benachrichtigungen dieses Observers festzulegen.
    Ein Limit der Benachrichtigungsrate ist wünschenswert, da die Sichtbarkeitsberechnung rechenintensiv ist.
    Wenn die Sichtbarkeit verfolgt wird, wird der Wert auf 100 gesetzt, wenn er unter 100 liegt, und Sie sollten den größten tolerierbaren Wert verwenden.
    Der Standardwert ist 0.
- `trackVisibility` {{experimental_inline}}
  - : Ein Boolean, der angibt, ob dieser `IntersectionObserver` Änderungen in der Sichtbarkeit eines Ziels verfolgt.

    Wenn `false`, meldet der Browser Schnittstellen, wenn das Zielelement in den Viewport des Root-Elements scrollt.
    Wenn `true`, überprüft der Browser zusätzlich, ob das Ziel tatsächlich sichtbar ist und nicht von anderen Elementen überdeckt wird oder möglicherweise durch einen Filter zerstört oder versteckt, die Opazität reduziert oder durch irgendeine Transformation verborgen wurde.
    Der Standardwert ist `false`, da die Verfolgung der Sichtbarkeit rechenintensiv ist.
    Wenn dies eingestellt ist, sollte auch eine [`delay`](#delay) festgelegt werden.

#### Schnittstellenänderungs-Callbacks

Der an den Konstruktor `IntersectionObserver()` übergebene Callback erhält eine Liste von `IntersectionObserverEntry` Objekten und den Observer:

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

Die Liste der vom Callback empfangenen Einträge enthält ein `IntersectionObserverEntry`-Objekt für jedes Ereignis beim Überschreiten eines Schwellenwerts – es können mehrere Einträge gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzelnen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden mithilfe einer Schlange gesendet, sodass sie nach der Zeit geordnet sein sollten, zu der sie generiert wurden, aber Sie sollten vorzugsweise `IntersectionObserverEntry.time` verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel eines bestimmten Elements mit dem Root-Element schneidet, ob das Element als schneidend betrachtet wird oder nicht, etc. Der Eintrag enthält nur Informationen über diesen speziellen Moment – wenn Sie Informationen benötigen, die eine Verfolgung über die Zeit erfordern, wie die Scroll-Richtung und -Geschwindigkeit, müssen Sie dies möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge merken.

Beachten Sie, dass Ihr Callback im Hauptthread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwändiges zu erledigen ist, verwenden Sie `Window.requestIdleCallback()`.

Der unten stehende Code zeigt einen Callback, der mitzählt, wie oft Elemente vom nicht-schneidenden Zustand zum mindestens 75%-schneidenden Zustand übergehen. Bei einem Schwellenwert von 0,0 (Standard) wird der Callback ungefähr beim Übergang des booleschen Wertes von `isIntersecting` aufgerufen. Der Ausschnitt prüft daher zunächst, dass der Übergang ein positiver ist, und bestimmt dann, ob `intersectionRatio` über 75% liegt, in diesem Fall wird der Zähler erhöht.

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

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Zielelement zum Beobachten zuweisen:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` spezifizierten Schwellenwert erreicht, wird der Callback aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachkomme des Root-Elements sein muss.

### Wie die Schnittstelle berechnet wird

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als in dem kleinsten Rechteck befindlich betrachtet, das alle Teile des Elements einschließt. Ebenso wird, wenn der sichtbare Teil eines Elements nicht rechteckig ist, das Schnittstellenrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen Eigenschaften, die von `IntersectionObserverEntry` bereitgestellt werden, eine Schnittstelle beschreiben.

#### Das Schnittstellen-Root und der Root-Rand

Bevor wir die Schnittstelle eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittstellen-Root** oder das **Root-Element**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Schnittstellen-Root-Rechteck_** ist das Rechteck, das verwendet wird, um gegen das Ziel oder die Ziele zu prüfen. Dieses Rechteck wird wie folgt bestimmt:

- Wenn die Schnittstellen-Root das implizierte Root (also das oberste `Document`) ist, ist das Schnittstellen-Root-Rechteck das Rechteck des Viewports.
- Wenn die Schnittstellen-Root einen Überlaufclip hat, ist das Schnittstellen-Root-Rechteck der Inhaltsbereich des Root-Elements.
- Andernfalls ist das Schnittstellen-Root-Rechteck das umrahmte Client-Rechteck der Schnittstellen-Root (wie es durch das Aufrufen von `getBoundingClientRect()` darauf zurückgegeben wird).

Das Schnittstellen-Root-Rechteck kann weiter durch das Setzen des **Root-Randes**, `rootMargin`, beim Erstellen des `IntersectionObserver` angepasst werden. Die Werte in `rootMargin` definieren Offsets, die zu jeder Seite des umrahmten Rahmens des Root-Elements hinzugefügt werden, um die endgültigen Schnittstellen-Root-Grenzen zu erstellen (die in `IntersectionObserverEntry.rootBounds` offengelegt werden, wenn der Callback ausgeführt wird). Positive Werte vergrößern das Rechteck, während negative Werte es verkleinern. Jeder Offset-Wert kann nur in Pixel (px) oder als Prozentsatz (%) ausgedrückt werden.

Der Effekt, das Rechteck mit dem Root-Rand zu vergrößern, besteht darin, die Überlaufsziele die Schnittstelle mit dem Root überschreiten zu lassen, bevor sie sichtbar werden.
Dies kann z. B. verwendet werden, um Bilder zu laden, kurz bevor sie in den Sichtbereich kommen, anstatt zu dem Zeitpunkt, an dem sie sichtbar werden.

Im Beispiel unten haben wir ein scrollbares Feld und ein Element, das anfangs nicht sichtbar ist.
Sie können den rechten Rand des Root anpassen und sehen, dass:

- Wenn der Rand positiv ist, wird das rote Element als überschneidend mit dem Root betrachtet, auch wenn es nicht sichtbar ist, da es mit dem Randbereich des Root überschneidet.
- Wenn der Rand negativ ist, wird selbst dann, wenn das rote Element sichtbar wird, es nicht als überschneidend mit dem Root betrachtet, weil das umrahmte Rechteck des Root verkleinert wird.

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

{{EmbedLiveSample("das Schnittstellen-Root und der Root-Rand", "", 200)}}

#### Das Schnittstellen-Root und der Scroll-Rand

Betrachten Sie den Fall, bei dem Sie ein Root-Element haben, das verschachtelte [scroll-container](/de/docs/Glossary/Scroll_container) enthält, und Sie möchten Schnitte mit einem Ziel innerhalb eines dieser scrollbaren Container beobachten.
Schnitte mit dem Zielelement beginnen standardmäßig beobachtbar zu werden, wenn das Ziel innerhalb des durch das Root definierten Bereichs sichtbar ist;
anders gesagt, wenn der Container im Root sichtbar ist und das Ziel im Abschneidrechteck seines Containers sichtbar ist.

Sie können einen Scroll-Rand verwenden, um Schnitte zu beobachten, bevor oder nachdem das Ziel im Scroll-Container sichtbar wird.
Der Rand wird auf alle verschachtelten scrollbaren Container im Root angewendet, einschließlich des Root-Elements, wenn es auch ein scrollbarer Container ist, und hat den Effekt, den für die Berechnung von Schnitten verwendeten Clipping-Bereich entweder zu vergrößern (positive Ränder) oder zu verkleinern (negativer Rand).

> [!NOTE]
> Sie könnten eine Schnittstellen-Beobachter auf jedem Scroll-Container erstellen, für den Sie einen Scroll-Rand wünschen, und die `rootMargin`-Eigenschaft verwenden, um einen ähnlichen Effekt zu erzielen.
> Die Verwendung eines Scroll-Randes ist ergonomischer, da Sie in den meisten Fällen nur einen Schnittstellen-Beobachter für alle verschachtelten Ziele haben können.

Im Beispiel unten haben wir ein scrollbares Feld und ein Bilderkarussell, das anfänglich nicht sichtbar ist.
Ein Observer auf dem Root-Element beobachtet die Bildziele innerhalb des Karussells.
Wenn ein Bildziel beginnt, sich mit dem Root-Element zu überschneiden, wird das Bild geladen, der Schnitt wird protokolliert und der Observer entfernt.

Scrollen Sie nach unten, um das Karussell anzuzeigen.
Die sichtbaren Bilder sollten sofort geladen werden.
Wenn Sie das Karussell scrollen, sollten Sie beobachten, dass die Bilder geladen werden, sobald das Element sichtbar wird.

Nachdem Sie das Beispiel zurückgesetzt haben, können Sie die bereitgestellte Steuerung verwenden, um den Scroll-Rand-Prozentsatz zu ändern.
Wenn Sie einen positiven Wert von 20% setzen, wird das Clip-Rechteck des Scroll-Containers um 20% vergrößert, und Sie sollten beobachten, dass Bilder erkannt und geladen werden, bevor sie in den Sichtbereich kommen.
In ähnlicher Weise bedeutet ein negativer Wert, dass der Schnitt erkannt wird, sobald die Bilder bereits sichtbar sind.

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

{{EmbedLiveSample("Das Schnittstellen-Root und der Scroll-Rand","100%","500px")}}

#### Schwellwerte

Anstatt jede infinitesimale Änderung in der Sichtbarkeit eines Zielelements zu melden, verwendet die Intersection Observer API **Schwellwerte**. Wenn Sie einen Beobachter erstellen, können Sie eine oder mehrere numerische Werte angeben, die die Prozentanteile des sichtbaren Zielelements repräsentieren. Dann meldet die API nur Änderungen in der Sichtbarkeit, die diese Schwellwerte überschreiten.

Zum Beispiel, wenn Sie jedes Mal informiert werden möchten, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts durch jede 25% -Marke passiert, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellwerte beim Erstellen des Beobachters angeben.

Wenn der Callback aufgerufen wird, empfängt er eine Liste von `IntersectionObserverEntry` Objekten, eines für jedes beobachtete Ziel, das den Grad der Überschneidung mit dem Root geändert hat, so dass die exponierte Menge eine der Schwellenwerte in beiden Richtungen überschreitet.

Sie können sehen, ob das Ziel _derzeit_ das Root überschneidet, indem Sie auf die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags schauen; wenn ihr Wert `true` ist, schneidet das Ziel das Root-Element oder Dokument zumindest teilweise. Auf diese Weise können Sie bestimmen, ob der Eintrag einen Übergang von den Elementen, die schneiden, zu denen, die nicht mehr schneiden, darstellt, oder einen Übergang von denen, die nicht schneiden, zu denen die schneiden.

Beachten Sie, dass es möglich ist, ein Schnittstellenrechteck von Null zu haben, was passieren kann, wenn der Schnittpunkt genau entlang der Grenze zwischen den beiden liegt oder das `boundingClientRect` von Null ist. Dieser Zustand, dass das Ziel und der Root eine Grenzlinie teilen, wird nicht als ausreichend betrachtet, um als Übergang in einen schneidenden Zustand zu gelten.

Um ein Gefühl dafür zu bekommen, wie Schwellwerte funktionieren, versuchen Sie, das Feld unten zu scrollen. Jede farbige Box darin zeigt den Prozentsatz ihrer selbst in allen vier Ecken an, sodass Sie sehen können, wie sich diese Verhältnisse im Laufe der Zeit ändern, während Sie den Container scrollen. Jede Box hat ein anderes Set von Schwellwerten:

- Die erste Box hat einen Schwellwert für jeden Prozentpunkt der Sichtbarkeit; das `IntersectionObserver.thresholds`-Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Die zweite Box hat einen einzigen Schwellenwert bei der 50%-Marke.
- Die dritte Box hat Schwellenwerte alle 10% der Sichtbarkeit (0%, 10%, 20%, etc.).
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

{{EmbedLiveSample("Schwellwerte", 500, 500)}}

#### Verfolgen der Sichtbarkeit und Verzögerung

Standardmäßig gibt der Observer Benachrichtigungen aus, wenn das Zielelement in den Viewport des Root-Elements gescrollt wird.
Während dies alles ist, was in vielen Situationen benötigt wird, ist es manchmal wichtig, dass Schnittstellen nicht gemeldet werden, wenn das Ziel "visuell beeinträchtigt" wurde.
Zum Beispiel, bei der Messung von Analysen oder Werbeanzeigen-Eindrücken ist es wichtig, dass Zielelemente nicht verborgen oder verzerrt sind, ganz oder teilweise.

Die `trackVisibility`-Einstellung sagt dem Beobachter, Schnittstellen nur für Ziele zu melden, die der Browser nicht als visuell beeinträchtigt betrachtet, wie durch Änderung der Opazität oder durch Anwendung eines Filters oder einer Transformation.
Der Algorithmus ist konservativ und kann Elemente ausschließen, die technisch sichtbar sind, z.B. diejenigen mit nur einer leichten Opazitätsreduzierung.

Die Sichtbarkeitsberechnung ist rechenintensiv und sollte nur bei Bedarf verwendet werden.
Beim Verfolgen der Sichtbarkeit sollte auch eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) festgelegt werden, um die minimale Berichtsperiode zu beschränken.
Die Empfehlung ist, dass Sie die Verzögerung auf den größten tolerierbaren Wert setzen (die Mindestverzögerung beim Verfolgen der Sichtbarkeit beträgt 100 Millisekunden).

#### Clipping und das Schnittstellenrechteck

Der Browser berechnet das finale Schnittstellen-Rechteck wie folgt; dies wird alles für Sie gemacht, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu verstehen, wann Schnittstellen auftreten werden.

1. Das Umrandungsrechteck des Zielelements (d.h. das kleinste Rechteck, das die Umrahmungen jedes Teils des Elements vollständig einschließt) wird durch Aufrufen von `getBoundingClientRect()` beim Ziel erhalten.
   Dies ist das größte, das das Schnittstellenrechteck sein darf. Die verbleibenden Schritte entfernen Teile, die nicht schneiden.
2. Beginnend beim unmittelbaren übergeordneten Block und sich nach außen bewegend wird das Clipping (falls vorhanden) jedes umgebenden Blocks auf das Schnittstellen-Rechteck angewendet.
   Das Clipping eines Blocks wird basierend auf der Schnittstelle der beiden Blöcke und dem Clipping-Modus (falls vorhanden) bestimmt, der durch die `overflow`-Eigenschaft angegeben ist. Wenn `overflow` auf etwas anderes als `visible` gesetzt ist, bewirkt dies, dass das Clipping auftritt.
3. Wenn eines der umgebenden Elemente die Wurzel eines verschachtelten Browser-Kontextes ist (wie das Dokument, das in einem `<iframe>` enthalten ist), wird das Schnittstellen-Rechteck auf den Anzeigebereich des enthaltenden Kontexts geclippt, und die Rekursion aufwärts durch die Container wird mit dem enthaltenen Block des Containers fortgesetzt. Wenn also die oberste Ebene eines `<iframe>` erreicht wird, wird das Schnittstellen-Rechteck auf das Anzeigefenster des Frames geclippt, dann ist das übergeordnete Element des Frames der nächste Block, der zur Intersection-Root rekursiv verarbeitet wird.
4. Wenn die Rekursion aufwärts das Schnittstellen-Root erreicht, wird das resultierende Rechteck in den Koordinatenraum des Schnittstellen-Roots abgebildet.
5. Das resultierende Rechteck wird dann aktualisiert, indem es mit dem [root intersection rectangle](#das_schnittstellen-root_und_der_root-rand) geschnitten wird.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des [`document`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Beobachters, der jede Anzahl von Zielelementen für dieselbe Schnittstellenkonfiguration beobachten kann. Jeder Beobachter kann asynchron Änderungen in der Schnittstelle zwischen einem oder mehreren Zielelementen und einem gemeinsamen Vorfahrenelement oder mit ihrem obersten [`Document`](/de/docs/Web/API/Document) `viewport` beobachten. Der Vorfahre oder der Viewport wird als **Root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittstelle zwischen dem Zielelement und seinem Wurzelcontainer in einem bestimmten Übergangsmoment. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Callback oder durch Aufruf von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass sich ein Zielelement in seiner Farbe und Transparenz ändert, wenn es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein ausführlicheres Beispiel, das zeigt, wie lange eine Reihe von Elementen (wie Anzeigen) für den Benutzer sichtbar sind, und auf diese Informationen reagieren, indem Sie Statistiken aufzeichnen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz und umfasst ein Primärelement, das die Box ist, auf die wir zielen werden (mit der kreativen ID `"box"`) und einige Inhalte innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element aus und stellt sicher, dass die `background-color` und `border`-Attribute an [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu beeinflussen, wenn es mehr oder weniger verdeckt wird.

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

Schließlich werfen wir einen Blick auf den JavaScript-Code, der die Intersection Observer API verwendet, um Dinge zu bewirken.

#### Vorbereiten

Zuerst müssen wir einige Variablen einrichten und den Beobachter installieren.

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
  - : Diese Variable wird verwendet, um das Sichtbarkeitsverhältnis aufzuzeichnen, das beim letzten Überschreiten eines Schwellenwerts galt; dies ermöglicht es uns, herauszufinden, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Eine Zeichenkette, die eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis steigt. Das Wort "ratio" in dieser Zeichenkette wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich nicht nur die Farbe ändert, sondern auch die Deckkraft des Ziels, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ähnlich ist dies eine Zeichenkette, die eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis sinkt.

Wir erhalten eine Referenz auf das Element mit der ID `"box"` mithilfe von [`querySelector()`](/de/docs/Web/API/Document/querySelector), rufen dann die `createObserver()`-Methode auf, die wir gleich erstellen werden, um den Aufbau und die Installation des Intersection Observers zu handhaben.

#### Erstellen des Intersection Observers

Die Methode `createObserver()` wird einmal nach dem Laden der Seite aufgerufen, um den neuen `IntersectionObserver` zu erstellen und den Vorgang des Beobachtens des Zielelements zu starten.

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

Dies beginnt mit der Einrichtung eines `options`-Objekts, das die Einstellungen für den Observer enthält. Wir möchten Änderungen in der Sichtbarkeit des Zielelements im Verhältnis zum Viewport des Dokuments beobachten, daher ist `root` `null`. Wir brauchen keine Marge, daher wird der Margenoffset, `rootMargin`, auf "0px" festgelegt. Dies veranlasst den Observer, Änderungen der Schnittstelle zwischen den Begrenzungen des Zielelements und denen des Viewports ohne hinzugefügten (oder abgezogenen) Raum zu beobachten.

Die Liste der Schwellenwerte des Sichtbarkeitsverhältnisses, `threshold`, wird von der Funktion `buildThresholdList()` erstellt. Die Schwellenwertliste wird in diesem Beispiel programmiert erstellt, da es viele von ihnen gibt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Observer, indem wir den Konstruktor `IntersectionObserver()` aufrufen, eine Funktion angeben, die aufgerufen wird, wenn Schnittstellen einen unserer Schwellenwerte überschreiten, `handleIntersect()`, und unser Set von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) am zurückgegebenen Observer auf, und übergeben das gewünschte Zielelement.

Wir könnten uns entscheiden, mehrere Elemente für Schnittstellensichtbarkeitsänderungen im Verhältnis zum Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun möchten.

#### Erstellen des Arrays von Schwellenwert-Verhältnissen

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

Dies erstellt das Array von Schwellenwerten – jedes von ihnen ist ein Verhältnis zwischen 0,0 und 1,0, indem es den Wert `i/numSteps` in das `thresholds`-Array für jedes Ganzzahl-`i` zwischen 1 und `numSteps` ersetzt. Es fügt auch die 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis ergibt bei dem Standardwert von `numSteps` (20) folgende Liste von Schwellenwerten:

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

Wir könnten natürlich das Array von Schwellenwerten in unseren Code fest codieren, und oft werden Sie das auch tun. Aber dieses Beispiel lässt Raum für das Hinzufügen von Konfigurationselementen zur Anpassung der Granularität, zum Beispiel.

#### Umgang mit Schnittstellenänderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall das mit der ID `"box"`) enthüllt oder verdeckt wurde, so dass sein Sichtbarkeitsverhältnis einen unserer Schwellenwerte überschreitet, ruft es unsere Handler-Funktion `handleIntersect()` auf:

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

Für jedes `IntersectionObserverEntry` in der Liste `entries`, überprüfen wir, ob das `intersectionRatio` des Eintrags steigt; wenn dies der Fall ist, setzen wir die `background-color` des Ziels auf die Zeichenkette in `increasingColor` (denken Sie daran, dass es `"rgb(40 40 190 / ratio)"` ist), ersetzen das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur ändert sich die Farbe, sondern auch die Transparenz des Zielelements; wenn das Schnittstellenverhältnis sinkt, sinkt auch der Alpha-Wert der Hintergrundfarbe mit und führt zu einem Element, das transparenter ist.

In ähnlicher Weise, wenn das `intersectionRatio` sinkt, verwenden wir die Zeichenkette `decreasingColor` und ersetzen das Wort "ratio" darin durch das `intersectionRatio`, bevor wir die `background-color` des Zielelements setzen.

Schließlich, um zu verfolgen, ob das Schnittstellenverhältnis steigt oder sinkt, merken wir uns das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten ist das resultierende Inhaltsstück. Scrollen Sie diese Seite auf und ab und beobachten Sie, wie sich das Erscheinungsbild der Box dabei verändert.

{{EmbedLiveSample('Ein_einfaches_Beispiel', 400, 400)}}

Ein noch umfangreicheres Beispiel finden Sie unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
