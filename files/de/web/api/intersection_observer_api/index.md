---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Überschneidung eines Zielelements mit einem Vorfahrenelement oder mit dem Ansichtsfenster eines obersten Dokuments asynchron zu beobachten.

Historisch gesehen war die Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente zueinander schwer zu erkennen, und die Lösungen dafür waren unzuverlässig und neigten dazu, den Browser und die Websites, auf die der Benutzer zugreift, träge zu machen. Mit der Weiterentwicklung des Webs ist der Bedarf an dieser Art von Informationen gestiegen. Überschneidungsinformationen werden aus vielen Gründen benötigt, wie z.B.:

- Lazy-Loading von Bildern oder anderen Inhalten beim Scrollen einer Seite.
- Implementierung von "unendlichem Scrollen" auf Websites, bei denen immer mehr Inhalte geladen und gerendert werden, sobald Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationen durchgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird.

In der Vergangenheit umfasste die Implementierung der Überschneidungserkennung Ereignis-Handler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufrufen, um die erforderlichen Informationen für jedes betroffene Element zu sammeln. Da all dieser Code im Haupt-Thread läuft, kann sogar eine dieser Operationen Leistungseinbußen verursachen. Wenn eine Website mit diesen Tests beladen ist, kann es richtig hässlich werden.

Betrachten Sie eine Webseite, die unendliches Scrollen verwendet. Sie nutzt eine vom Anbieter bereitgestellte Bibliothek, um die Anzeigen zu verwalten, die regelmäßig auf der Seite verteilt werden, hat hier und da animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und Ähnliches zeichnet. Jede dieser Funktionen hat ihre eigenen Routinen zur Überschneidungserkennung, die alle im Haupt-Thread laufen. Der Autor der Website merkt möglicherweise nicht einmal, dass dies passiert, da er möglicherweise sehr wenig über die Funktionsweise der verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Routinen zur Überschneidungserkennung ständig während des Scroll-Handlings ausgeführt, was zu einer Erfahrung führt, die den Benutzer frustriert den Browser, die Website und seinen Computer meiden lässt.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die ausgeführt wird, wann immer ein bestimmtes Element einen Übergang eines Intersections mit einem anderen Element (oder dem {{Glossary("viewport", "Ansichtsfenster")}}) erreicht oder verlässt, oder wenn die Überschneidung zwischen zwei Elementen um einen angegebenen Betrag ändert. Auf diese Weise müssen Websites nicht mehr im Haupt-Thread etwas tun, um diese Art von Elementüberschneidungen zu beobachten, und der Browser kann die Verwaltung von Überschneidungen nach eigenem Ermessen optimieren.

Eine Sache, die die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl von überlappenden Pixeln auslösen oder spezifisch darauf, welche das sind. Sie löst nur den häufigen Anwendungsfall "Wenn sie sich irgendwo um _N_% überschneiden, muss ich etwas tun."

## Konzepte und Nutzung des Intersection Observers

Die Intersection Observer API ermöglicht es Ihnen, eine Callback-Funktion zu konfigurieren, die aufgerufen wird, wenn eine der folgenden Situationen eintritt:

- Ein **Ziel**-Element überschneidet entweder das Ansichtsfenster des Geräts oder ein angegebenes Element. Dieses angegebene Element wird für die Zwecke der Intersection Observer API als **Root-Element** oder **Root** bezeichnet.
- Das erste Mal, dass der Beobachter gebeten wird, ein Zielelement zu überwachen.

Typischerweise möchten Sie Änderungen der Überschneidung in Bezug auf den nächsten scrollbaren Vorfahren des Zielelements beobachten oder, wenn das Zielelement kein Nachfahre eines scrollbaren Elements ist, das Ansichtsfenster des Geräts. Um die Überschneidung relativ zum Ansichtsfenster des Geräts zu beobachten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung der Optionen des Intersection Observers.

Unabhängig davon, ob Sie das Ansichtsfenster oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise: eine von Ihnen bereitgestellte Callback-Funktion wird ausgeführt, wann immer sich die Sichtbarkeit des Zielelements so ändert, dass es gewünschte Überschneidungsgrade mit dem Root überschreitet.

Der Grad der Überschneidung zwischen dem Zielelement und seinem Root ist das **Überschneidungsverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, der sichtbar ist, als ein Wert zwischen 0.0 und 1.0.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die jedes Mal ausgeführt wird, wenn ein Schwellenwert in eine Richtung oder die andere überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1.0 bedeutet, dass wenn 100 % des Ziels im Element sichtbar sind, das in der `root`-Option angegeben ist, die Callback-Funktion aufgerufen wird.

#### Optionen des Intersection Observers

Das `options`-Objekt, das in den Konstruktor von [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Umstände zu steuern, unter denen die Callback-Funktion des Beobachters aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Ansichtsfenster für die Prüfung der Sichtbarkeit des Ziels verwendet wird. Muss der Vorfahre des Ziels sein. Standardmäßig ist es das Ansichtsfenster des Browsers, wenn es nicht angegeben wird oder wenn `null` ist.
- `rootMargin`
  - : Rand um den Root. Ein Zeichenfolgenwert mit einem bis vier Werten, ähnlich der CSS-Eigenschaft {{cssxref("margin")}}, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur [absolute Längen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#absolute_length_units) oder Prozentsätze sein. Dieses Werteset dient dazu, jede Seite des Begrenzungsrahmens des Root-Elements zu vergrößern oder zu verkleinern, bevor Überschneidungen berechnet werden. Negative Werte verkleinern den Begrenzungsrahmen des Root-Elements und positive Werte erweitern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels die Callback-Funktion des Beobachters ausgeführt werden soll. Wenn Sie nur feststellen möchten, wann die Sichtbarkeit die 50 %-Marke überschreitet, können Sie einen Wert von 0.5 verwenden. Wenn Sie möchten, dass die Callback-Funktion jedes Mal ausgeführt wird, wenn die Sichtbarkeit um weitere 25 % zunimmt oder abnimmt, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] spezifizieren. Der Standardwert ist 0 (d.h. sobald auch nur ein einziger Pixel sichtbar ist, wird die Callback-Funktion ausgeführt). Ein Wert von 1.0 bedeutet, dass der Schwellenwert nicht als überschritten betrachtet wird, bis jedes Pixel sichtbar ist.

#### Callbacks bei Änderungen der Überschneidung

Der Callback, der an den Konstruktor `IntersectionObserver()` übergeben wird, erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den betrachtenden Beobachter:

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

Die Liste der vom Callback empfangenen Einträge enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Ereignis des Schwellenwertüberschreitens — mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzelnen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden in einer Warteschlange versendet, sodass sie in der Reihenfolge der Generierung stehen sollten, aber vorzugsweise sollten Sie [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Root-Element überschneidet, ob das Element als überschneidend betrachtet wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen speziellen Moment — wenn Sie Informationen benötigen, die über Zeitverfolgung erfordern, wie z.B. die Scroll-Richtung und -Geschwindigkeit, müssen Sie dies möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge speichern.

Seien Sie sich bewusst, dass Ihr Callback im Haupt-Thread ausgeführt wird. Es sollte so schnell wie möglich arbeiten; falls etwas zeitaufwändig durchgeführt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der untenstehende Code-Schnipsel zeigt einen Callback, der einen Zähler führt, wie oft Elemente von einem nicht überschneidenden in einen überschneidenden Zustand mit mindestens 75 % wechseln. Für einen Schwellenwert von 0.0 (Standard) wird der Callback [ungefähr] (https://www.w3.org/TR/intersection-observer/#dom-intersectionobserverentry-isintersecting) bei Übergang des booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Code-Schnipsel prüft daher zunächst, ob der Übergang positiv ist, und bestimmt dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75 % liegt, in welchem Fall der Zähler erhöht wird.

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

#### Auswahl eines zu beobachtenden Elements

Sobald Sie den Beobachter erstellt haben, müssen Sie ihm ein Zielelement zuweisen, das beobachtet werden soll:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` spezifizierten Schwellenwert erreicht, wird die Callback-Funktion aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachfahre des Root-Elements sein muss.

### Wie die Überschneidung berechnet wird

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck betrachtet, das alle Teile des Elements umschließt. Ebenso, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Überschneidungsrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen Eigenschaften, die von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellt werden, eine Überschneidung beschreiben.

#### Der Überschneidungs-Root und der Root-Abstand

Bevor wir die Überschneidung eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist der **Überschneidungs-Root**, oder das **Root-Element**. Dies kann entweder ein spezifisches Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um das Ansichtsfenster des Dokuments als Container zu verwenden.

Das **_Überschneidungs-Root-Rechteck_** ist das Rechteck, das verwendet wird, um gegen das Ziel oder die Ziele zu prüfen. Dieses Rechteck wird so bestimmt:

- Wenn der Überschneidungs-Root der implizite Root ist (d.h. das oberste [`Dokument`](/de/docs/Web/API/Document)), ist das Überschneidungs-Root-Rechteck das Rechteck des Ansichtsfensters.
- Wenn der Überschneidungs-Root einen Überlauf-Clip hat, ist das Überschneidungs-Root-Rechteck der Inhaltsbereich des Root-Elements.
- Andernfalls ist das Überschneidungs-Root-Rechteck das Begrenzungsrechteck des Überschneidungs-Roots (wie es durch den Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben wird).

Das Überschneidungs-Root-Rechteck kann weiter durch die Festlegung des **Root-Abstands**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angepasst werden. Die Werte in `rootMargin` definieren Versätze, die zu jeder Seite des Begrenzungsrahmens des Überschneidungs-Roots hinzugefügt werden, um die endgültigen Überschneidungs-Root-Grenzen zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) offenbart werden, wenn die Callback-Funktion ausgeführt wird). Positive Werte vergrößern das Rechteck, während negative Werte es verkleinern.

Im folgenden Beispiel haben wir eine scrollbare Box und ein Element, das anfangs nicht sichtbar ist. Sie können den rechten Root-Abstand einstellen und sehen:

- Wenn der Abstand negativ ist, wird das rote Element, selbst wenn es sichtbar zu werden beginnt, nicht als überschneidend mit dem Root betrachtet, da der Begrenzungsrahmen des Roots verkleinert ist.
- Wenn der Abstand positiv ist, wird das rote Element als überschneidend mit dem Root betrachtet, selbst wenn es nicht sichtbar ist, da es mit dem Abstandbereich des Roots überschneidet.

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

{{EmbedLiveSample("the intersection root and root margin", "", 300)}}

#### Schwellenwerte

Anstatt jede infinitesimale Änderung der Sichtbarkeit eines Zielelements zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Beobachter erstellen, können Sie einen oder mehrere numerische Werte angeben, die Prozentsätze des sichtbaren Zielelements darstellen. Dann meldet die API nur Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Zum Beispiel, wenn Sie informiert werden möchten, jedes Mal, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts durch jede 25 %-Marke geht, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte angeben, wenn Sie den Beobachter erstellen.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Überschneidungsgrad mit dem Root sich so geändert hat, dass die Menge der sichtbaren Fläche einen der Schwellenwerte in einer Richtung überquert hat.

Sie können sehen, ob das Ziel derzeit mit dem Root überschneidet, indem Sie die Eigenschaft [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) des Eintrags überprüfen; wenn ihr Wert `true` ist, überschneidet das Ziel mindestens teilweise das Root-Element oder das Dokument. Dies ermöglicht es Ihnen zu bestimmen, ob der Eintrag einen Übergang von einem überschneidenden in einen nicht überschneidenden Zustand oder einen Übergang von nicht überschneidend zu überschneidend darstellt.

Beachten Sie, dass es möglich ist, ein Überschneidungsrechteck mit null Fläche zu haben, was passieren kann, wenn die Überschneidung genau entlang der Grenze zwischen den beiden verläuft oder die Fläche von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, bei dem das Ziel und das Root eine Grenzlinie teilen, wird nicht als ausreichend angesehen, um als Übergang in einen überschneidenden Zustand betrachtet zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, die Box unten zu scrollen. Jede farbige Box innerhalb dieser zeigt den Prozentsatz von sich selbst an, der in allen vier ihrer Ecken sichtbar ist, damit Sie diese Verhältnisse im Laufe der Zeit ändern sehen können, während Sie den Container scrollen. Jede Box hat eine andere Menge von Schwellenwerten:

- Die erste Box hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt, das Array [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Die zweite Box hat einen einzigen Schwellenwert an der 50%-Marke.
- Die dritte Box hat Schwellenwerte bei jedem 10%-Sichtbarkeitswert (0%, 10%, 20%, usw.).
- Die letzte Box hat Schwellenwerte bei jedem 25%-Wert.

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

#### Clipping und das Überschneidungsrechteck

Der Browser berechnet das endgültige Überschneidungsrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um genauer zu begreifen, wann Überschneidungen auftreten werden.

1. Das Begrenzungsrechteck des Zielelements (das ist das kleinste Rechteck, das alle Begrenzungsrahmen jedes Bestandteilselements einschließt, aus dem das Element besteht) wird abgerufen, indem [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf das Ziel aufgerufen wird. Dies ist die größte Möglichkeit für das Überschneidungsrechteck. Die verbleibenden Schritte entfernen alle Teile, die nicht überschneiden.
2. Beginnend beim unmittelbaren Elternblock des Ziels und aufwärts gehend, wird jedes enthaltende Block-Klipping (sofern vorhanden) auf das Überschneidungsrechteck angewendet. Ein Block-Klipping wird basierend auf der Überschneidung der beiden Blöcke und dem Klipping-Modus (falls vorhanden), der von der CSS-Eigenschaft {{cssxref("overflow")}} angegeben wird, bestimmt. Wenn `overflow` auf etwas anderes als `sichtbar` gesetzt ist, erfolgt ein Klipping.
3. Wenn eines der enthaltenen Elemente der Root eines geschachtelten Browsing-Kontexts ist (wie das Dokument in einem {{HTMLElement("iframe")}}), wird das Überschneidungsrechteck auf den Viewport des enthaltenen Kontexts geklippt und die Rekursion nach oben durch die Container wird fortgesetzt mit dem nächsten Block des Containers. Wenn also die oberste Ebene eines `<iframe>` erreicht ist, wird das Überschneidungsrechteck auf den Viewport des Frames geklippt und das Elternelement des Frames ist der nächste blockweise durch den Überschneidungs-Root.
4. Wenn die Rekursion nach oben den Überschneidungs-Root erreicht, wird das resultierende Rechteck in das Koordinatensystem des Überschneidungs-Roots abgebildet.
5. Das resultierende Rechteck wird dann aktualisiert, indem es mit dem [Root-Überschneidungsrechteck](#der_überschneidungs-root_und_der_root-abstand) überschnitten wird.
6. Dieses Rechteck wird schließlich in das Koordinatensystem des [`Dokuments`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Beobachters, der eine beliebige Anzahl von Zielelementen für die gleiche Überschneidungskonfiguration beobachten kann. Jeder Beobachter kann Änderungen in der Überschneidung zwischen einem oder mehreren Zielelementen und einem gemeinsamen Vorfahren oder mit dem Ansichtsfenster ihres obersten [`Dokuments`](/de/docs/Web/API/Document) asynchron beobachten. Der Vorfahre oder das Ansichtsfenster wird als **Root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Überschneidung zwischen dem Zielelement und seinem Root-Container zu einem bestimmten Übergangszeitpunkt. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Callback oder durch Aufruf von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass ein Zielelement seine Farbe und Transparenz ändert, wenn es mehr oder weniger sichtbar wird. Unter [Zeitmessung der Element-Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein ausführlicheres Beispiel, das zeigt, wie Sie messen können, wie lange eine Reihe von Elementen (wie Anzeigen) für den Benutzer sichtbar sind und wie Sie auf diese Informationen reagieren, indem Sie Statistiken aufzeichnen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem primären Element, das die Box ist, die wir beobachten werden (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element fest und etabliert, dass die Attribute {{cssxref("background-color")}} und {{cssxref("border")}} an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu beeinflussen, wenn es mehr oder weniger verdeckt wird.

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

Schließlich schauen wir uns den JavaScript-Code an, der die Intersection Observer API verwendet, um die Änderungen hervorzurufen.

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

Die Konstanten und Variablen, die wir hier festlegen, sind:

- `numSteps`
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Sichtbarkeitsverhältnis von 0.0 und 1.0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um das Sichtbarkeitsverhältnis zu speichern, das beim letzten Mal, als ein Schwellenwert überschritten wurde, bestand; dies ermöglicht es uns, herauszufinden, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Eine Zeichenfolge, die eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in dieser Zeichenfolge wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass das Element nicht nur die Farbe ändert, sondern auch zunehmend undurchsichtig wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ähnlich, dies ist eine Zeichenfolge, die eine Farbe definiert, die wir anwenden werden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis abzuhören; sobald die Seite fertig geladen ist, erhalten wir eine Referenz auf das Element mit der ID `"box"` mittels [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die `createObserver()`-Methode auf, die wir gleich erstellen werden, um den Intersection Observer zu erstellen und zu installieren.

#### Erstellen des Intersection Observers

Die Methode `createObserver()` wird aufgerufen, sobald die Seite geladen ist, um tatsächlich den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und den Prozess des Beobachtens des Zielelements zu starten.

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

Dies beginnt mit dem Einrichten eines `options`-Objekts, das die Einstellungen für den Beobachter enthält. Wir möchten Änderungen der Sichtbarkeit des Zielelements relativ zum Ansichtsfenster des Dokuments beobachten, daher ist `root` `null`. Wir benötigen keinen Rand, daher wird der Randversatz, `rootMargin`, als "0px" angegeben. Dies bewirkt, dass der Beobachter Änderungen in der Überschneidung zwischen den Begrenzungen des Zielelements und denen des Ansichtsfensters ohne zusätzliches (oder abgezogenes) Gebiet beobachtet.

Die Liste der Schwellenwerte für das Sichtbarkeitsverhältnis, `threshold`, wird durch die Funktion `buildThresholdList()` konstruiert. Die Schwellenwertliste wird in diesem Beispiel programmatisch erstellt, da es eine Anzahl von ihnen gibt und diese Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Beobachter, indem wir den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) aufrufen, wobei wir eine Funktion angeben, die aufgerufen werden soll, wenn eine unserer Schwellenwerte überschritten wird, `handleIntersect()`, und unsere Optionsmenge. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Beobachter auf und übergeben ihm das gewünschte Zielelement.

Wir könnten auch mehrere Elemente auf Sichtbarkeitsüberschneidungsänderungen in Bezug auf das Ansichtsfenster überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun wollten.

#### Erstellen des Arrays der Schwellenwert-Verhältnisse

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

Dies erstellt das Array der Schwellenwerte — jede davon ist ein Verhältnis zwischen 0.0 und 1.0, indem es den Wert `i/numSteps` dem `thresholds`-Array für jede ganze Zahl `i` zwischen 1 und `numSteps` hinzufügt. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis, gegeben der Standardwert von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Wir könnten diese Array der Schwellenwerte selbstverständlich hartkodiert in unseren Code einfügen und oft wird das auch das sein, was Sie tun. Aber dieses Beispiel lässt Raum für die Hinzufügung von Konfigurationssteuerungen zur Anpassung der Granularität, beispielsweise.

#### Umgang mit Änderungen der Überschneidung

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall das mit der ID `"box"`) so aufgedeckt oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis einen der Schwellenwerte auf unserer Liste überschreitet, ruft er unsere Handler-Funktion `handleIntersect()` auf:

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

Für jeden [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` schauen wir, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags zunimmt; wenn ja, setzen wir die CSS-Eigenschaft des Zielelements für die Hintergrundfarbe auf die Zeichenfolge in `increasingColor` (denken Sie daran, dass es `"rgb(40 40 190 / ratio)"` ist), wobei das Wort "ratio" durch das `intersectionRatio` des Eintrags ersetzt wird. Das Ergebnis: nicht nur ändert sich die Farbe, sondern auch die Transparenz des Zielelements, da als das Überschneidungsverhältnis sinkt, der Alpha-Wert der Hintergrundfarbe sinkt und das Element somit durchsichtiger wird.

Ähnlich, wenn das `intersectionRatio` sinkt, verwenden wir die Zeichenfolge `decreasingColor` und ersetzen das Wort "ratio" darin durch das `intersectionRatio`, bevor wir die Hintergrundfarbe des Zielelements einstellen.

Schließlich, um zu verfolgen, ob das Überschneidungsverhältnis steigt oder sinkt, merken wir uns das aktuelle Verhältnis in der Variablen `prevRatio`.

### Ergebnis

Unten ist das Ergebnis. Scrollen Sie diese Seite nach oben und unten und beachten Sie, wie sich das Aussehen der Box dabei verändert.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Es gibt ein noch ausführlicheres Beispiel unter [Zeitmessung der Element-Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer Polyfill](https://github.com/w3c/IntersectionObserver)
- [Zeitmessung der Element-Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
