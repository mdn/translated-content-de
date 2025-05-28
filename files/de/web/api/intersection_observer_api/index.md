---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen im Schnittpunkt eines Ziel-Elements mit einem übergeordneten Element oder mit dem {{Glossary("viewport", "Viewport")}} eines übergeordneten Dokuments asynchron zu beobachten.

Historisch gesehen war die Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente im Verhältnis zueinander zu erkennen, eine schwierige Aufgabe. Die Lösungen dafür waren unzuverlässig und führten zu einer Verlangsamung des Browsers sowie der Websites, auf die der Benutzer zugreift. Mit der Reife des Webs ist der Bedarf an dieser Art von Informationen gewachsen. Schnittstelleninformationen sind aus vielen Gründen notwendig, wie z.B.:

- Lazy-Loading von Bildern oder anderen Inhalten, wenn eine Seite gescrollt wird.
- Implementierung von „Infinite Scrolling“-Websites, bei denen immer mehr Inhalte geladen und gerendert werden, während Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Werbung, um Anzeigenumsätze zu berechnen.
- Entscheidung, ob Aufgaben oder Animationsprozesse ausgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird.

Die Implementierung der Schnittstellenerkennung in der Vergangenheit umfasste Ereignis-Handler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufrufen, um die erforderlichen Informationen für jedes betroffene Element zusammenzustellen. Da dieser gesamte Code im Hauptthread ausgeführt wird, kann schon eines davon Leistungsprobleme verursachen. Wenn eine Seite mit diesen Tests geladen wird, kann es hässlich werden.

Betrachten Sie eine Webseite mit unendlichem Scrollen. Sie verwendet eine vom Anbieter bereitgestellte Bibliothek, um die periodisch auf der Seite platzierten Anzeigen zu verwalten, hat an verschiedenen Stellen animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und ähnliches zeichnet. Jeder dieser Teile hat seine eigenen Router zur Schnittstellenerkennung, die alle im Hauptthread ausgeführt werden. Der Autor der Website merkt möglicherweise nicht einmal, dass dies geschieht, da er möglicherweise nur sehr wenig über die Funktionsweise der von ihm verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Interface-Erkennungsroutinen ständig während des Scrollhandhabungscodes aufgerufen, was zu einer Erfahrung führt, bei der der Benutzer frustriert über den Browser, die Website und seinen Computer ist.

Die Intersection Observer API ermöglicht es, eine Callback-Funktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element einen Schnittpunkt mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) betritt oder verlässt oder wenn sich der Schnittpunkt zwischen zwei Elementen um einen bestimmten Betrag ändert. So müssen Websites nichts mehr im Hauptthread tun, um diese Art von Schnittpunkten von Elementen zu überwachen, und der Browser ist frei, das Management der Schnittstellen nach eigenem Ermessen zu optimieren.

Eine Sache kann die Intersection Observer API nicht: Logik basierend auf der genauen Anzahl überlappender Pixel auslösen oder speziell darauf, welche es sind. Sie löst nur den häufigen Anwendungsfall „Wenn sie sich um etwa _N_% überschneiden, muss ich etwas tun“ aus.

## Konzepte und Verwendung des Intersection Observer

Die Intersection Observer API ermöglicht es Ihnen, eine Callback-Funktion zu konfigurieren, die aufgerufen wird, wenn eine der folgenden Gegebenheiten eintritt:

- Ein **Ziel-Element** schneidet sich entweder mit dem Viewport des Geräts oder mit einem angegebenen Element. Dieses angegebene Element wird für die Zwecke der Intersection Observer API als **wurzelndes Element** oder **Wurzel** bezeichnet.
- Das erste Mal, wenn der Beobachter gebeten wird, ein Ziel-Element zu überwachen.

In der Regel möchten Sie Schnittstellenänderungen in Bezug auf den nächsten scrollbaren Vorfahren des Ziel-Elements überwachen oder, wenn das Ziel-Element kein Nachkomme eines scrollbaren Elements ist, den Viewport des Geräts. Um den Schnittpunkt in Bezug auf den Viewport des Geräts zu überwachen, geben Sie für die Option `root` `null` an. Lesen Sie weiter für eine detailliertere Erklärung der Intersection Observer-Optionen.

Egal, ob Sie den Viewport oder ein anderes Element als Wurzel verwenden, die API funktioniert auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Callback-Funktion ausführt, wann immer sich die Sichtbarkeit des Ziel-Elements ändert, sodass es gewünschte Schnittpunktmengen mit der Wurzel überschreitet.

Der Grad des Schnittpunkts zwischen dem Ziel-Element und seiner Wurzel ist das **Schnittverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Ziel-Elements, das als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie dessen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die jedes Mal ausgeführt wird, wenn ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1,0 bedeutet, dass die Callback-Funktion aufgerufen wird, wenn 100 % des Ziels innerhalb des durch die Option `root` spezifizierten Elements sichtbar ist.

#### Intersection Observer-Optionen

Das in den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor übergebene `options`-Objekt ermöglicht Ihnen die Kontrolle über die Umstände, unter denen der Callback des Beobachters aufgerufen wird. Es besitzt die folgenden Felder:

- `root`
  - : Das Element, das als Viewport für die Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahre des Ziels sein. Wenn nicht angegeben oder `null`, wird der Standardwert auf den Browser-Viewport gesetzt.
- `rootMargin`
  - : Rand um die Wurzel. Ein String aus einem bis vier Werten, ähnlich der CSS {{cssxref("margin")}}-Eigenschaft, z. B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur [absolute Längen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#absolute_length_units) oder Prozentsätze sein. Dieser Satz von Werten dient dazu, jede Seite des Begrenzungsrahmens des Wurzelelements vor der Berechnung von Schnittpunkten zu vergrößern oder zu verkleinern. Negative Werte verkleinern den Begrenzungsrahmen des Wurzelelements und positive Werte vergrößern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, das angibt, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Beobachters ausgeführt werden soll. Wenn Sie z. B. nur erkennen möchten, wenn die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0.5 verwenden. Wenn Sie möchten, dass der Callback jedes Mal ausgeführt wird, wenn die Sichtbarkeit weitere 25 % überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standardwert ist 0 (was bedeutet, dass der Callback sofort ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1.0 bedeutet, dass der Schwellenwert erst dann als überschritten gilt, wenn alle Pixel sichtbar sind.

#### Callback-Funktionen bei Schnittstellenänderungen

Der an den `IntersectionObserver()`-Konstruktor übergebene Callback erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Beobachter:

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

Die Liste der vom Callback erhaltenen Einträge enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Ereignis beim Überschreiten eines Schwellenwerts – es können mehrere Einträge gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzigen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden über eine Warteschlange versendet, sodass sie nach dem Zeitpunkt sortiert werden sollten, zu dem sie generiert wurden. Idealerweise sollten Sie jedoch [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Wurzelement im Schnittpunkt steht, ob das Element als im Schnittpunkt stehend betrachtet wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment – wenn Sie Informationen benötigen, die das Verfolgen über Zeit erfordern, wie z.B. die Scrollrichtung und -geschwindigkeit, müssen Sie das möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge im Speicher behalten.

Seien Sie sich bewusst, dass Ihr Callback im Hauptthread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas zeitaufwändig erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeausschnitt zeigt einen Callback, der einen Zähler zählt, wie oft Elemente von nicht im Schnittpunkt stehend zum Stehen im Schnittpunkt mit mindestens 75 % übergehen. Bei einem Schwellenwert von 0,0 (Standard) wird der Callback ungefähr bei der Transition des booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Snippet prüft daher zunächst, ob die Transition eine positive ist, ermittelt dann, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75 % liegt, und inkrementiert in diesem Fall den Zähler.

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

#### Anvisieren eines Elements zur Beobachtung

Sobald Sie den Beobachter erstellt haben, müssen Sie ihm ein Ziel-Element zum Beobachten geben:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` festgelegten Schwellenwert erreicht, wird der Callback aufgerufen.

Zu beachten ist auch, dass, wenn Sie die `root`-Option festgelegt haben, das Ziel ein Nachkomme des Wurzelelements sein muss.

### Wie der Schnittpunkt berechnet wird

Alle Bereiche, die die Intersection Observer API berücksichtigt, sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck angesehen, das alle Teile des Elements einschließt. Ebenso, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Schnittstellenrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen durch [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Schnittstelle beschreiben.

#### Der Schnittpunktwurzel und der Wurzellrand

Bevor wir den Schnittpunkt eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittpunktwurzel** oder das **Wurzelelement**. Dies kann entweder ein spezifisches Element im Dokument sein, das ein Vorgänger des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Wurzel-Schnittstellen-Rechteck_** ist das Rechteck, das zum Überprüfen gegen das Ziel oder die Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn die Schnittpunktwurzel die implizite Wurzel ist (d.h. das oberste [`Document`](/de/docs/Web/API/Document)), ist das Wurzel-Schnittstellen-Rechteck das Rechteck des Viewports.
- Wenn die Schnittpunktwurzel einen Überlaufclip hat, ist das Wurzel-Schnittstellen-Rechteck der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Wurzel-Schnittstellen-Rechteck das Begrenzungs-Rechteck der Schnittpunktwurzel (wie es durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf erhalten wird).

Das Wurzel-Schnittstellen-Rechteck kann weiter angepasst werden, indem der **Wurzellrand**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) gesetzt wird. Die Werte in `rootMargin` definieren Versätze, die zu jeder Seite des Begrenzungsrahmens der Schnittpunktwurzel hinzugefügt werden, um die endgültigen Wurzel-Schnittstellen-Grenzen zu schaffen (die im [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) beim Ausführen des Callbacks offenbart werden). Positive Werte erweitern den Rahmen, während negative ihn verkleinern.

Im folgenden Beispiel haben wir eine scrollbare Box und ein Element, das zunächst nicht sichtbar ist. Sie können den rechten Rand der Wurzel anpassen und sehen, dass:

- Wenn der Rand negativ ist, wird selbst wenn das rote Element sichtbar wird, es noch nicht als im Schnittpunkt mit der Wurzel betrachtet, weil der Begrenzungsrahmen der Wurzel verkleinert wurde.
- Wenn der Rand positiv ist, wird das rote Element als im Schnittpunkt mit der Wurzel betrachtet, selbst wenn es nicht sichtbar ist, weil es im Schnittpunkt mit dem Randbereich der Wurzel steht.

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

{{EmbedLiveSample("der Schnittpunktwurzel und der Wurzellrand", "", 300)}}

#### Schwellenwerte

Statt jede unendlich kleine Änderung der Sichtbarkeit eines Ziel-Elements zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Beobachter erstellen, können Sie einen oder mehrere numerische Werte angeben, die die sichtbaren Prozentsätze des Ziel-Elements darstellen. Dann meldet die API nur Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Wenn Sie zum Beispiel jedes Mal informiert werden möchten, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts jede 25% Marke überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte angeben, wenn Sie den Beobachter erstellen.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Grad des Schnittpunkts mit der Wurzel sich geändert hat, sodass die Menge, die freigelegt ist, einen der Schwellenwerte überschreitet, in beide Richtungen.

Sie können sehen, ob das Ziel _momentan_ die Wurzel schneidet, indem Sie die Eigenschaft [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) des Eintrags überprüfen; wenn der Wert `true` ist, schneidet das Ziel mindestens teilweise das Wurzelelement oder Dokument. Dies ermöglicht es Ihnen zu bestimmen, ob der Eintrag einen Übergang von sich schneidenden Elementen zu nicht mehr sich schneidenden Elementen darstellt oder einen Übergang von nicht sich schneidenden zu sich schneidenden Elementen.

Beachten Sie, dass es möglich ist, ein Rechteck ohne Schnittbereich zu haben, was passieren kann, wenn der Schnittpunkt genau entlang der Grenze zwischen den beiden oder der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, dass das Ziel und die Wurzel eine Grenzlinie teilen, wird nicht als ausreichend angesehen, um als Übergang in einen sich schneidenden Zustand betrachtet zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie die Box unten herum zu scrollen. Jedes farbige Kästchen darin zeigt den Prozentsatz von sich selbst an, der in allen vier Ecken sichtbar ist, sodass Sie sehen können, wie sich diese Verhältnisse im Laufe der Zeit ändern, während Sie den Container scrollen. Jedes Kästchen hat eine unterschiedliche Menge an Schwellenwerten:

- Das erste Kästchen hat einen Schwellenwert für jeden Prozentsatzpunkt der Sichtbarkeit; das heißt, das Array von [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Kästchen hat einen einzigen Schwellenwert bei der 50%-Marke.
- Das dritte Kästchen hat Schwellenwerte bei jedem 10%-Sichtbarkeitsinterval (0 %, 10 %, 20 %, usw.).
- Das letzte Kästchen hat Schwellenwerte alle 25%.

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

#### Abschneiden und das Schnittstellenrechteck

Der Browser berechnet das endgültige Schnittstellenrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu begreifen, wann Schnittpunkte genau auftreten.

1. Das Begrenzungsrechteck des Ziel-Elements (also das kleinste Rechteck, das das umliegende Begrenzungsrechteck jedes Bestandteils des Elements vollständig enthält) wird durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf dem Ziel erhalten. Dies ist das größte, was das Schnittstellenrechteck sein kann. Die verbleibenden Schritte werden alle Teile entfernen, die nicht im Schnittpunkt stehen.
2. Beginnend beim unmittelbar übergeordneten Block des Ziels und sich nach außen bewegend, wird das Clipping jedes enthaltenden Blocks (falls vorhanden) auf das Schnittstellenrechteck angewendet. Ein Block's Clipping wird basierend auf dem Schnittpunkt der beiden Blöcke und dem Clipping-Modus (falls vorhanden), der durch die {{cssxref("overflow")}}-Eigenschaft angegeben ist, bestimmt. Das Setzen von `overflow` auf etwas anderes als `visible` verursacht Clipping.
3. Wenn eines der enthaltenen Elemente die Wurzel eines verschachtelten Browsing-Kontexts ist (wie das im {{HTMLElement("iframe")}} enthaltene Dokument), wird das Schnittstellenrechteck auf den Viewport des enthaltenen Kontexts zugeschnitten und die Rekursion nach oben durch die Container wird mit dem enthaltenen Block des Containers fortgesetzt. Wenn also das oberste Level eines `<iframe>`s erreicht wird, wird das Schnittstellenrechteck zu den Viewport des Frames zugeschnitten, dann ist das übergeordnete Element des Frames der nächste Block, durch den in Richtung der Schnittstellenwurzel rekurriert wird.
4. Wenn die Rekursion nach oben die Schnittpunktwurzel erreicht, wird das resultierende Rechteck in den Koordinatenraum der Schnittpunktwurzel abgebildet.
5. Das resultierende Rechteck wird dann durch die Intersection des [wurzel-Schnittstellen-Rechtecks](#der_Schnittpunktwurzel_und_der_Wurzellrand) aktualisiert.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des [`Dokuments`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Beobachters, der beliebig viele Ziel-Elemente mit derselben Schnittstellenkonfiguration beobachten kann. Jeder Beobachter kann asynchron Änderungen am Schnittpunkt zwischen einem oder mehreren Ziel-Elementen und einem gemeinsamen Vorfahren-Element oder mit ihrem obersten [`Dokument`](/de/docs/Web/API/Document) {{Glossary("viewport", "Viewport")}} beobachten. Der Vorfahren oder Viewport wird als **Wurzel** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt den Schnittpunkt zwischen dem Ziel-Element und seinem Wurzel-Container in einem bestimmten Moment des Übergangs. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihr `IntersectionObserver`-Callback oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel lässt ein Ziel-Element seine Farbe und Transparenz ändern, wenn es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie lange eine Reihe von Elementen (wie Anzeigen) für den Benutzer sichtbar sind und darauf reagiert werden kann, indem Statistiken aufgezeichnet oder Elemente aktualisiert werden.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem primären Element, das die Box ist, die wir anvisieren (mit der kreativen ID `"box"`) sowie einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht wirklich relevant; es legt das Element dar und stellt sicher, dass die {{cssxref("background-color")}} und {{cssxref("border")}}-Attribute an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden, um die Änderungen am Element zu beeinflussen, wenn es mehr oder weniger verdeckt wird.

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

Schließlich schauen wir uns den JavaScript-Code an, der die Intersection Observer API benutzt, um die Dinge zum Laufen zu bringen.

#### Vorbereitung

Zunächst müssen wir einige Variablen vorbereiten und den Beobachter installieren.

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
  - : Diese Variable wird verwendet, um das Sichtbarkeitsverhältnis zum letzten Mal, als ein Schwellenwert überschritten wurde, aufzuzeichnen; damit können wir feststellen, ob das Ziel-Element mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Ziel-Element anwenden, wenn das Sichtbarkeitsverhältnis steigt. Das Wort "ratio" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass das Element nicht nur die Farbe ändert, sondern auch zunehmend undurchsichtiger wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ähnlich wie zuvor ist dies ein String, der eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis sinkt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um mit dem Lauschen auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu beginnen; sobald die Seite vollständig geladen ist, erhalten wir eine Referenz zum Element mit der ID `"box"` über [`querySelector()`](/de/docs/Web/API/Document/querySelector) und rufen dann die Methode `createObserver()` auf, die wir in einem Moment erstellen werden, um den Prozess des Aufbaus und der Installation des Intersection Observers zu handhaben.

#### Erstellen des Observers

Die `createObserver()`-Methode wird aufgerufen, sobald die Seite vollständig geladen ist, um den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) tatsächlich zu erstellen und den Prozess des Überwachens des Ziel-Elements zu starten.

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

Das beginnt damit, dass ein `options`-Objekt mit den Einstellungen für den Beobachter eingerichtet wird. Wir wollen Änderungen der Sichtbarkeit des Ziel-Elements relativ zum Viewport des Dokuments beobachten, daher ist `root` `null`. Wir brauchen keinen Rand, daher wird der Randversatz, `rootMargin`, auf "0px" spezifiziert. Dies führt dazu, dass der Beobachter Änderungen des Schnittpunkts zwischen dem Begrenzungsrahmen des Ziel-Elements und denen des Viewports beobachtet, ohne zusätzlichen (oder abgezogenen) Raum.

Die Liste der Sichtbarkeitsverhältnisschwellenwerte, `threshold`, wird von der Funktion `buildThresholdList()` erstellt. Die Schwellenwertliste wird in diesem Beispiel programmgesteuert erstellt, da es mehrere davon gibt und die Anzahl anpassbar sein soll.

Sobald `options` fertig ist, erstellen wir den neuen Beobachter, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen und eine Funktion angeben, die aufgerufen wird, wenn ein Schnittpunkt einen unserer Schwellenwerte überschreitet, `handleIntersect()`, sowie unser Set von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Beobachter auf und geben das gewünschte Ziel-Element weiter.

Wir könnten mehrere Elemente auf Schnittpunktänderungen der Sichtbarkeit im Hinblick auf den Viewport beobachten, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir das wollten.

#### Erstellen des Arrays von Schwellenverhältnissen

Die Funktion `buildThresholdList()`, die die Liste der Schwellenwerte erstellt, sieht so aus:

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

Dies erstellt das Array von Schwellenwerten — von denen jeder ein Verhältnis zwischen 0,0 und 1,0 ist, indem er den Wert `i/numSteps` für jede ganze Zahl `i` zwischen 1 und `numSteps` in das `thresholds`-Array einfügt. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis, gegeben dem Standardwert von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Wir könnten, natürlich, das Array der Schwellenwerte in unseren Code fest codieren, und dies ist häufig das, was Sie letztendlich tun werden. Doch dieses Beispiel lässt Raum dafür, Bedienelemente zur Konfiguration zur Anpassung der Granularität hinzuzufügen, zum Beispiel.

#### Behandlung von Schnittpunktänderungen

Wenn der Browser feststellt, dass das Ziel-Element (in unserem Fall das mit der ID `"box"`) enthüllt oder verdeckt wurde, sodass sein Sichtbarkeitsverhältnis einen der Schwellenwerte in unserer Liste überschreitet, ruft es unsere Handler-Funktion, `handleIntersect()`, auf:

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

Für jedes [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries`, prüfen wir, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn ja, setzen wir die `background-color` des Ziel-Elements auf den String in `increasingColor` (denken Sie daran, dass es `"rgb(40 40 190 / ratio)"` ist) und ersetzen dabei das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur ändert sich die Farbe, sondern auch die Transparenz des Ziel-Elements; wenn das Schnittverhältnis sinkt, sinkt auch der Alpha-Wert der Hintergrundfarbe, was zu einem transparenteren Element führt.

Ähnlich, wenn das `intersectionRatio` sinkt, verwenden wir den `decreasingColor`-String und ersetzen das Wort "ratio" darin mit dem `intersectionRatio`, bevor wir das `background-color`-Attribut des Ziel-Elements setzen.

Schließlich, um zu verfolgen, ob das Schnittverhältnis steigt oder sinkt, merken wir uns das aktuelle Verhältnis in der Variablen `prevRatio`.

### Ergebnis

Unten sind die resultierenden Inhalte. Scrollen Sie auf dieser Seite nach oben und unten und beobachten Sie, wie sich das Erscheinungsbild der Box ändert, während Sie dies tun.

{{EmbedLiveSample('Ein_einfaches_Beispiel', 400, 400)}}

Es gibt ein noch umfangreicheres Beispiel bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
