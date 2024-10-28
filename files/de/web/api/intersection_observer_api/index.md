---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 4ef77e03bb6a55428027aff8dc2c528bdb2adcba
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, asynchron Änderungen in der Überschneidung eines Zielelements mit einem Vorfahren-Element oder mit dem {{Glossary("viewport", "Viewport")}} eines Dokuments der obersten Ebene zu beobachten.

Historisch gesehen war das Erkennen der Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente im Verhältnis zueinander eine schwierige Aufgabe, für die Lösungen unzuverlässig waren und die dazu führten, dass der Browser und die von Nutzern aufgerufenen Websites langsam wurden. Mit der Entwicklung des Webs ist der Bedarf an dieser Art von Informationen gewachsen. Überschneidungsinformationen werden aus vielen Gründen benötigt, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderen Inhalten beim Scrollen einer Seite.
- Implementierung von "Endlos-Scrolling"-Websites, bei denen mehr und mehr Inhalte geladen und gerendert werden, während Sie scrollen, sodass der Nutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationen ausgeführt werden sollen, basierend darauf, ob der Nutzer das Ergebnis sehen wird.

Die Implementierung der Erkennung von Überschneidungen in der Vergangenheit umfasste Ereignishandler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, um die benötigten Informationen für jedes betroffene Element aufzubauen. Da all dieser Code im Hauptthread ausgeführt wird, kann sogar einer davon zu Leistungsproblemen führen. Wenn eine Seite mit diesen Tests geladen wird, kann das ganze Erscheinungsbild richtig unansehnlich werden.

Betrachten Sie eine Webseite, die endloses Scrollen verwendet. Sie verwendet eine vom Anbieter bereitgestellte Bibliothek, um die Anzeigen zu verwalten, die regelmäßig auf der Seite platziert sind, hat vereinzelte animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungskästen und dergleichen zeichnet. Jede dieser Bibliotheken hat ihre eigene Routine zur Erkennung von Überschneidungen, die alle im Hauptthread laufen. Der Autor der Website erkennt vielleicht gar nicht, dass dies passiert, da er möglicherweise nur wenig über die inneren Abläufe der beiden verwendeten Bibliotheken weiß. Wenn der Benutzer die Seite scrollt, feuern diese Routinen zur Erkennung von Überschneidungen ständig während der Scrollverarbeitung, was zu einem Erlebnis führt, das den Benutzer mit dem Browser, der Website und seinem Computer frustriert.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element eine Überschneidung mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) betritt oder verlässt, oder wenn die Überschneidung zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites nichts im Hauptthread tun, um diese Art von Elementüberschneidung zu beobachten, und der Browser ist frei, das Management der Überschneidungen nach eigenem Ermessen zu optimieren.

Eine Sache, die die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl von überlappenden Pixeln oder speziell darauf, welche dies sind, auslösen. Sie löst nur den üblichen Anwendungsfall "Wenn sie sich _N_% überschneiden, muss ich etwas tun" aus.

## Konzepte und Nutzung der Intersection Observer

Die Intersection Observer API ermöglicht es Ihnen, ein Callback zu konfigurieren, das aufgerufen wird, wenn eine dieser Bedingungen eintritt:

- Ein **Zielelement** schneidet entweder den Viewport des Geräts oder ein angegebenes Element. Dieses angegebene Element wird für die Zwecke der Intersection Observer API als **Wurzelelement** oder **Wurzel** bezeichnet.
- Wenn dem Observer das erste Mal ein Zielelement zur Beobachtung zugewiesen wird.

In der Regel möchten Sie auf Überschneidungsänderungen im Hinblick auf den nächstgelegenen scrollbaren Vorgänger des Zielelements achten oder, wenn das Zielelement nicht ein Nachfahre eines scrollbaren Elements ist, auf den Viewport des Geräts. Um auf Überschneidungen relativ zum Viewport des Geräts zu achten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung zu den Optionen der Intersection Observer.

Egal, ob Sie den Viewport oder ein anderes Element als Wurzel verwenden, die API funktioniert auf die gleiche Weise, indem sie eine Callback-Funktion ausführt, die Sie bereitstellen, wann immer sich die Sichtbarkeit des Zielelements so ändert, dass es gewünschte Mengen von Überschneidung mit der Wurzel überschreitet.

Der Grad der Überschneidung zwischen dem Zielelement und seiner Wurzel ist das **Überschneidungsverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, das als Wert zwischen 0.0 und 1.0 sichtbar ist.

### Erstellen eines Intersection Observer

Erstellen Sie den Intersection Observer, indem Sie dessen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die ausgeführt wird, wann immer eine Schwelle in eine Richtung oder die andere überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Eine Schwelle von 1.0 bedeutet, dass der Callback ausgeführt wird, wenn 100% des Ziels im Element sichtbar sind, das durch die `root`-Option angegeben ist.

#### Optionen für den Intersection Observer

Das `options`-Objekt, das dem Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Umstände zu kontrollieren, unter denen der Callback des Observers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport zum Überprüfen der Sichtbarkeit des Ziels verwendet wird. Muss ein Vorgänger des Ziels sein. Standardmäßig wird der Viewport des Browsers verwendet, wenn nicht angegeben oder `null`.
- `rootMargin`
  - : Rand um die Wurzel. Eine Zeichenkette mit ein bis vier Werten, ähnlich wie bei der CSS-Eigenschaft {{cssxref("margin")}}, z. B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur [absolute Längen](/de/docs/Learn/CSS/Building_blocks/Values_and_units#absolute_length_units) oder Prozentsätze sein. Diese Gruppe von Werten dient dazu, jede Seite des Begrenzungsrahmens des Wurzelelements entweder zu vergrößern oder zu verkleinern, bevor Überschneidungen berechnet werden. Negative Werte verkleinern den Begrenzungsrahmen des Wurzelelements und positive Werte erweitern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Observers ausgeführt werden soll. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50%-Marke passiert, können Sie einen Wert von 0.5 verwenden. Wenn Sie den Callback jedes Mal ausführen möchten, wenn die Sichtbarkeit um weitere 25% steigt, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standard ist 0 (was bedeutet, dass der Callback ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1.0 bedeutet, dass die Schwelle nicht als überschritten gilt, bis jedes Pixel sichtbar ist.

#### Änderungen der Überschneidung zurückmelden

Der an den Konstruktor `IntersectionObserver()` übergebene Callback erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Observer:

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

Die Liste der vom Callback erhaltenen Einträge enthält einen Eintrag für jedes Ereignis des Schwellenwertüberschreitens – es können mehrere Einträge gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzigen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden in einer Warteschlange versendet, sodass sie in der Reihenfolge geordnet sein sollten, in der sie erzeugt wurden, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen.

Jeder Eintrag in der Liste der Schwellenwerte ist ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt, das einen überschrittenen Schwellenwert beschreibt. Das heißt, jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Wurzelelement überlappt, ob das Element als schneidend betrachtet wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment – wenn Sie Informationen benötigen, die eine Verfolgung im Laufe der Zeit erfordern, wie die Scroll-Richtung und -Geschwindigkeit, müssen Sie diese möglicherweise selbst berechnen, indem Sie zuvor erhaltene Einträge speichern.

Seien Sie sich bewusst, dass Ihr Callback im Hauptthread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; falls zeitaufwendige Aufgaben erledigt werden müssen, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeausschnitt zeigt einen Callback, der einen Zähler führt, wie oft Elemente vom Nichtüberschneiden der Wurzel zum Überschneiden um mindestens 75% wechseln. Bei einem Schwellenwert von 0.0 (Standard) wird der Callback [ungefähr] (https://www.w3.org/TR/intersection-observer/#dom-intersectionobserverentry-isintersecting) beim Übergang des booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Ausschnitt überprüft also zuerst, dass der Übergang ein positiver ist, und bestimmt dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75% liegt, in welchem Fall der Zähler erhöht wird.

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

#### Ein Ziel zu beobachtendes Element auswählen

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Ziel-Element zur Beobachtung zuweisen:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Callback aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachfahre des Wurzelelements sein muss.

### Wie Überschneidung berechnet wird

Alle vom Intersection Observer API berücksichtigten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck betrachtet, das alle Teile des Elements einschließt. Ebenso wird, wenn der sichtbare Teil eines Elements nicht rechteckig ist, dessen Überschneidungsrechteck als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist hilfreich zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Überschneidung beschreiben.

#### Die Wurzel der Überschneidung und der Wurzelrand

Bevor wir die Überschneidung eines Elements mit einem Container nachverfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Wurzel der Überschneidung**, oder das **Wurzelelement**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorgänger von dem zu beobachtenden Element ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Überschnittswurzelrechteck_** ist das Rechteck, das mit dem Ziel oder den Zielen überprüft wird. Dieses Rechteck wird so bestimmt:

- Wenn die Wurzel der Überschneidung die implizite Wurzel ist (d. h. das oberste [`Document`](/de/docs/Web/API/Document)), ist das Überschnittswurzelrechteck das Rechteck des Viewports.
- Wenn die Wurzel der Überschneidung einen Überlauf-Clip hat, ist das Überschnittswurzelrechteck der Inhaltsbereich des Wurzelelements.
- Andernfalls ist das Überschnittswurzelrechteck das Begrenzungsclientrechteck der Wurzel der Überschneidung (wie es durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben wird).

Das Überschnittswurzelrechteck kann weiter durch das Festlegen des **Wurzelrandes**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angepasst werden. Die Werte in `rootMargin` definieren Offsets, die zu jeder Seite des Begrenzungsrahmens der Wurzel der Überschneidung hinzugefügt werden, um die endgültige Begrenzung der Wurzel der Überschneidung zu erstellen (wie sie in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) offengelegt wird, wenn der Callback ausgeführt wird). Positive Werte vergrößern die Box, während negative Werte sie verkleinern.

Im Beispiel unten haben wir eine scrollbare Box und ein Element, das zu Anfang außerhalb der Sicht ist. Sie können den rechten Rand der Wurzel anpassen und feststellen:

- Wenn der Rand negativ ist, wird das rote Element selbst dann nicht als mit der Wurzel überlappend betrachtet, wenn es anfängt, sichtbar zu werden, da der Begrenzungsrahmen der Wurzel verkleinert ist.
- Wenn der Rand positiv ist, wird das rote Element als mit der Wurzel überlappend angesehen, selbst wenn es nicht sichtbar ist, weil es mit dem Randbereich der Wurzel überlappt.

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

{{EmbedLiveSample("die Wurzel der Überschneidung und der Wurzelrand", "", 300)}}

#### Schwellenwerte

Anstatt jede infinitesimale Änderung zu melden, wie viel von einem Zielelement sichtbar ist, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie einen oder mehrere numerische Werte angeben, die Prozentsätze des sichtbaren Zielelements darstellen. Die API meldet dann nur Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Zum Beispiel, wenn Sie informiert werden möchten, jedes Mal, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts durch jede 25%-Marke geht, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte angeben, wenn Sie den Observer erstellen.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Überschneidungsgrad sich so geändert hat, dass der exponierte Betrag über einen der Schwellenwerte geht, in beide Richtungen.

Sie können feststellen, ob das Ziel _aktuell_ die Wurzel überschneidet, indem Sie die Eigenschaft [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) des Eintrags betrachten; wenn deren Wert `true` ist, überschneidet das Ziel zumindest teilweise das Wurzelelement oder das Dokument. So können Sie feststellen, ob der Eintrag einen Übergang vom Überschneidungszustand der Elemente zum Nichtüberschneidungszustand oder einen Übergang vom Nichtüberschneidungszustand zum Überschneidungszustand darstellt.

Beachten Sie, dass es möglich sein kann, ein Überschneidungsrechteck mit Null zu haben, was auftreten kann, wenn die Überschneidung genau an der Grenze zwischen den beiden liegt oder der Bereich des [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) Null ist. Dieser Zustand, dass Ziel und Wurzel eine Grenzlinie teilen, wird nicht als ausreichend angesehen, um als Übergang in einen überschneidenden Zustand betrachtet zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, die Box unten zu scrollen. Jedes farbige Feld darin zeigt den Prozentsatz von sich selbst an, der in allen seinen vier Ecken sichtbar ist, sodass Sie sehen können, dass sich diese Verhältnisse im Laufe der Zeit beim Scrollen des Containers ändern. Jedes Kästchen hat ein unterschiedliches Set von Schwellenwerten:

- Das erste Kästchen hat Schwellenwerte für jeden Prozentsatzpunkt der Sichtbarkeit; das heißt, das Array von [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Kästchen hat einen einzigen Schwellenwert bei der 50%-Marke.
- Das dritte Kästchen hat Schwellenwerte alle 10% der Sichtbarkeit (0%, 10%, 20% usw.).
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

#### Abschneiden und das Überschneidungsrechteck

Der Browser berechnet das endgültige Überschneidungsrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu erfassen, wann genau Überschneidungen auftreten.

1. Das Begrenzungsrechteck des Zielelements (d. h. das kleinste Rechteck, das die Begrenzungsrahmen aller Teile, die das Element ausmachen, umfassend einschließt) wird durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf das Ziel erhalten. Dies ist das größte Überschneidungsrechteck sein kann. Die verbleibenden Schritte entfernen alle Teile, die sich nicht überschneiden.
2. Beginnend bei dem unmittelbaren übergeordneten Block des Ziels und sich nach außen bewegend, wird das Zuschneiden (falls vorhanden) eines jeden enthaltenden Blocks auf das Überschneidungsrechteck angewendet. Der Schnitt eines Blocks wird basierend auf der Überschneidung der beiden Blöcke und dem Schnittmodus (falls vorhanden), der durch die CSS-Eigenschaft {{cssxref("overflow")}} angegeben wird, bestimmt. Das Setzen von `overflow` auf einen anderen Wert als `visible` bewirkt das Abschneiden.
3. Wenn eines der enthaltenen Elemente die Wurzel eines verschachtelten Browserkontexts ist (wie das Dokument in einem {{HTMLElement("iframe")}}), wird das Überschneidungsrechteck an den Viewport des enthaltenden Kontexts zugeschnitten und die Rekursion nach oben durch die Container setzt sich mit dem enthaltenden Block des Containers fort. Wenn also das oberste Niveau eines `<iframe>` erreicht wird, wird das Überschneidungsrechteck an den Viewport des Frames zugeschnitten, dann ist das übergeordnete Element des Frames das nächste zu durchsuchende Block auf dem Weg zur Überschnittswurzel.
4. Wenn die Rekursion aufwärts die Überschnittswurzel erreicht, wird das resultierende Rechteck in den Koordinatenraum der Überschnittswurzel kartiert.
5. Das resultierende Rechteck wird dann aktualisiert, indem es mit dem [Überschnittswurzelrechteck](#die_wurzel_der_überschneidung_und_der_wurzelrand) geschnitten wird.
6. Dieses Rechteck wird schließlich in den Koordinatenraum des [`Dokuments`](/de/docs/Web/API/Document) des Ziels kartiert.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten von Beobachtern, die jede Anzahl von Ziel-Elementen für dieselbe Überschneidungskonfiguration überwachen können. Jeder Beobachter kann asynchron Änderungen in der Überschneidung zwischen einem oder mehreren Ziel-Elementen und einem gemeinsamen Vorgänger-Element oder mit ihrem Viewport des [Dokuments](/de/docs/Web/API/Document) der obersten Ebene beobachten. Der Vorgänger oder der Viewport wird als die **Wurzel** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Überschneidung zwischen dem Zielelement und seinem Wurzelcontainer zu einem bestimmten Übergangsmoment. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihr `IntersectionObserver`-Callback oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass ein Zielelement seine Farbe und Transparenz ändert, wenn es mehr oder weniger sichtbar wird. Bei [Timing der Element-Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein ausführlicheres Beispiel, das zeigt, wie lange eine Gruppe von Elementen (wie Anzeigen) für den Nutzer sichtbar ist und wie auf diese Information reagiert werden kann, indem Statistiken aufgezeichnet oder Elemente aktualisiert werden.

### HTML

Das HTML dieses Beispiels ist sehr kurz, mit einem Hauptelement, das die Box ist, die wir als Ziel verwenden werden (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element an und legt fest, dass die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("border")}} an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu bewirken, wenn es mehr oder weniger verdeckt wird.

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
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Sichtbarkeitsverhältnis von 0.0 und 1.0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um das zu notieren, was das Sichtbarkeitsverhältnis war, als zuletzt ein Schwellenwert überschritten wurde; dies wird uns helfen festzustellen, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Eine Zeichenkette, die eine Farbe definiert, die wir auf das Zielelement anwenden werden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in dieser Zeichenkette wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich das Element nicht nur ändert, sondern auch zunehmend undurchsichtiger wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ähnlich ist dies eine Zeichenkette, die eine Farbe definiert, die wir anwenden werden, wenn das Sichtbarkeitsverhältnis sinkt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um mit dem Zuhören auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu beginnen; sobald die Seite geladen ist, erhalten wir eine Referenz zu dem Element mit der ID `"box"` mithilfe von [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die Methode `createObserver()` auf, die wir gleich erstellen werden, um den Intersection Observer zu erstellen und zu installieren.

#### Den Intersection Observer erstellen

Die Methode `createObserver()` wird aufgerufen, sobald die Seite vollständig geladen ist, um tatsächlich den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und die Überwachung des Zielelements zu starten.

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

Dies beginnt mit dem Einrichten eines `options`-Objekts, das die Einstellungen für den Beobachter enthält. Wir möchten Änderungen der Sichtbarkeit des Zielelements relativ zum Viewport des Dokuments beobachten, daher ist `root` `null`. Wir benötigen keinen Rand, daher wird der Marginoffset `rootMargin` als "0px" angegeben. Dies führt dazu, dass der Beobachter auf Änderungen in der Überschneidung zwischen den Grenzen des Zielelements und denen des Viewports achtet, ohne zusätzlichen (oder abgezogenen) Raum.

Die Liste der Schwellenwerte für das Sichtbarkeitsverhältnis, `threshold`, wird von der Funktion `buildThresholdList()` konstruiert. Die Liste der Schwellenwerte wird in diesem Beispiel programmatisch erstellt, da es eine Reihe von ihnen gibt und die Zahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Beobachter, indem wir den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) aufrufen, eine Funktion angeben, die aufgerufen wird, wenn die Überschneidung eine unserer Schwellenwerte überschreitet, `handleIntersect()`, und unser Set von Optionen bereitstellen. Dann rufen wir [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Beobachter auf, indem wir ihm das gewünschte Zielelement übergeben.

Wir könnten wählen, mehrere Elemente für Änderungen der Sichtbarkeitsüberschneidung relativ zum Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun möchten.

#### Das Array der Schwellenverhältnisse bauen

Die Funktion `buildThresholdList()`, die die Liste der Schwellen erstellt, sieht so aus:

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

Dies erstellt das Array von Schwellenwerten – jede davon ist ein Verhältnis zwischen 0.0 und 1.0, indem der Wert `i/numSteps` auf das `thresholds`-Array für jede ganze Zahl `i` zwischen 1 und `numSteps` gedrückt wird. Es wird auch 0 hinzugefügt, um diesen Wert zu berücksichtigen. Das Ergebnis, angesichts des Standardwerts von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Wir könnten natürlich das Array von Schwellenwerten hartkodieren und oft wird genau das in Ihrem Code passieren. Aber dieses Beispiel lässt Raum für das Hinzufügen von Konfigurationseinstellungen zur Anpassung der Granularität, zum Beispiel.

#### Überschneidungsänderungen behandeln

Wenn der Browser feststellt, dass das Zielelement (in unserem Fall das mit der ID `"box"`) aufgedeckt oder verdeckt wurde, sodass sein Sichtbarkeitsverhältnis eine der Schwellen in unserer Liste überschreitet, ruft es unsere Handler-Funktion, `handleIntersect()` auf:

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

Für jeden [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries`, überprüfen wir, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn dies der Fall ist, setzen wir die {{cssxref("background-color")}} des Ziels auf die Zeichenkette in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`) und ersetzen darin das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur ändert sich die Farbe, sondern die Transparenz des Zielelements ändert sich ebenfalls; wenn das Überschneidungsverhältnis sinkt, sinkt der Alphawert der Hintergrundfarbe, was zu einem Element führt, das transparenter wird.

Ähnlich, wenn das `intersectionRatio` sinkt, verwenden wir die Zeichenkette `decreasingColor` und ersetzen das Wort "ratio" darin durch das `intersectionRatio`, bevor wir die `background-color` des Zielelements setzen.

Schließlich, um nachzuvollziehen, ob das Überschneidungsverhältnis steigt oder sinkt, merken wir uns das aktuelle Verhältnis in der Variablen `prevRatio`.

### Ergebnis

Unten ist das resultierende Inhalt. Scrollen Sie die Seite nach oben und unten und bemerken Sie, wie sich das Erscheinungsbild der Box verändert, während Sie das tun.

{{EmbedLiveSample('Ein_ einfaches_ Beispiel', 400, 400)}}

Es gibt ein noch ausführlicheres Beispiel bei [Timing der Element-Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer Polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing der Element-Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
