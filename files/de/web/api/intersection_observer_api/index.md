---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 7c9071ab28a5ac4e5899ef8083a53a08e8aebc2b
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, asynchron Änderungen in der Schnittmenge eines Zielelements mit einem Vorfahrenselement oder dem {{Glossary("viewport", "Viewport")}} eines obersten Dokuments zu beobachten.

Historisch gesehen war es eine schwierige Aufgabe, die Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente zueinander zu erkennen, und Lösungen dafür waren oft unzuverlässig und führten dazu, dass der Browser und die vom Benutzer aufgerufenen Seiten träge wurden. Im Laufe der Entwicklung des Webs ist der Bedarf an dieser Art von Informationen gewachsen. Schnittstelleninformationen werden aus vielen Gründen benötigt, zum Beispiel:

- Lazy-Loading von Bildern oder anderen Inhalten, während eine Seite gescrollt wird.
- Implementierung von "unendlichem Scrollen" auf Websites, bei denen immer mehr Inhalte geladen und gerendert werden, während Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationen ausgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird.

In der Vergangenheit beinhaltete die Implementierung der Intersection-Erkennung Event-Handler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, um die erforderlichen Informationen für jedes betroffene Element zu sammeln. Da all dieser Code im Haupt-Thread läuft, kann bereits ein einziger solcher Vorgang zu Leistungsproblemen führen. Wenn eine Website mit solchen Tests geladen wird, kann es richtig unschön werden.

Stellen Sie sich eine Webseite vor, die unendliches Scrollen verwendet. Sie nutzt eine vom Anbieter bereitgestellte Bibliothek zur Verwaltung der Anzeigen, die periodisch auf der Seite platziert sind, hat hier und da animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und Ähnliches zeichnet. Jede dieser hat ihre eigenen Intersection-Erkennungsroutinen, die alle im Haupt-Thread laufen. Der Autor der Website bemerkt möglicherweise nicht einmal, dass dies geschieht, da er möglicherweise wenig über die Funktionsweise der zwei verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Intersection-Erkennungsroutinen während des Scroll-Handlings ständig aktiviert, was dazu führt, dass der Benutzer frustriert über den Browser, die Website und seinen Computer ist.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die jedes Mal ausgeführt wird, wenn ein bestimmtes Element in eine Schnittmenge mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) eintritt oder aus diesem austritt oder wenn sich die Schnittmenge zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites nichts im Haupt-Thread tun, um diese Art von Elementüberschneidung zu überwachen, und der Browser ist frei, die Verwaltung der Überschneidungen nach Belieben zu optimieren.

Eine Sache, die die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl der überlappenden Pixel oder spezifisch auf welche Pixelleiste auslösen. Sie löst nur den häufigen Anwendungsfall: "Wenn sie irgendwo um _N_% überlappen, muss ich etwas tun."

## Konzepte und Verwendung des Intersection Observer

Die Intersection Observer API ermöglicht es Ihnen, eine Callback-Funktion zu konfigurieren, die aufgerufen wird, wenn eine der folgenden Bedingungen eintritt:

- Ein **Ziel**-Element schneidet entweder den Viewport des Geräts oder ein angegebenes Element. Dieses spezifische Element wird für die Zwecke der Intersection Observer API als **Wurzelelement** oder **Root** bezeichnet.
- Das erste Mal, wenn der Observer initial gebeten wird, ein Zielelement zu beobachten.

Typischerweise möchten Sie Änderungen in der Schnittmenge in Bezug auf den nächsten scrollbaren Vorfahren des Zielelements oder, wenn das Zielelement kein Nachfahre eines scrollbaren Elements ist, den Viewport des Geräts beobachten. Um die Schnittmenge relativ zum Viewport des Geräts zu beobachten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung der Optionen des Intersection Observers.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise und führt eine Callback-Funktion aus, die Sie bereitstellen, wenn sich die Sichtbarkeit des Zielelements so ändert, dass es die gewünschten Mengen der Schnittmenge mit dem Root überschreitet.

Der Grad der Schnittmenge zwischen dem Zielelement und seiner Wurzel ist das **intersecton ratio**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, der als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und eine Callback-Funktion übergeben, die jedes Mal ausgeführt wird, wenn ein Schwellenwert in eine Richtung oder die andere überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1,0 bedeutet, dass die Callback-Funktion aufgerufen wird, wenn 100% des Ziels in dem Element sichtbar sind, das durch die `root`-Option angegeben ist.

#### Optionen für den Intersection Observer

Das `options`-Objekt, das an den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor übergeben wird, ermöglicht Ihnen, die Umstände zu steuern, unter denen der Callback des Observers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport verwendet wird, um die Sichtbarkeit des Ziels zu überprüfen. Muss der Vorfahre des Ziels sein. Standardmäßig wird der Browser-Viewport verwendet, wenn nichts angegeben ist oder wenn `null`.
- `rootMargin`
  - : Rand um den Root. Ein String von einem bis vier Werten, ähnlich der CSS-{{cssxref("margin")}}-Eigenschaft, zum Beispiel `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur [absolute Längen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#absolute_length_units) oder Prozentsätze sein. Diese Reihe von Werten dient dazu, jede Seite der Begrenzungsbox des Root-Elements zu vergrößern oder zu verkleinern, bevor Schnittmengen berechnet werden. Negative Werte verkleinern die Begrenzungsbox des Root-Elements und positive Werte erweitern sie. Der Standardwert ist, falls nicht angegeben, `"0px 0px 0px 0px"`.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Observers ausgeführt werden soll. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie möchten, dass der Callback jedes Mal ausgeführt wird, wenn die Sichtbarkeit um weitere 25% überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standardwert ist 0 (das bedeutet, dass der Callback ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1,0 bedeutet, dass der Schwellenwert erst als überschritten gilt, wenn jedes Pixel sichtbar ist.

#### Intersection Change Callbacks

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

Die Liste der Einträge, die dem Callback übergeben wird, enthält ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt für jedes Ereignis, bei dem ein Schwellenwert überschritten wird — mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzelnen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden unter Verwendung einer Warteschlange verschickt, sodass sie in der Reihenfolge geschaltet sein sollten, in der sie erzeugt wurden, jedoch sollten Sie vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen. Jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Root-Element überschneidet, unabhängig davon, ob das Element als überschneidend betrachtet wird oder nicht, usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment — wenn Sie Informationen benötigen, die eine Verfolgung über die Zeit erfordern, wie die Scrollrichtung und -geschwindigkeit, müssen Sie diese möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge speichern.

Bitte beachten Sie, dass Ihr Callback im Haupt-Thread ausgeführt wird. Er sollte so schnell wie möglich funktionieren; wenn etwas Zeitaufwändiges erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeausschnitt zeigt einen Callback, der einen Zähler darüber führt, wie oft Elemente von "nicht mit dem Root überschneidend" in "mindestens 75% überschneidend" wechseln. Bei einem Schwellenwert von 0,0 (Standard) wird der Callback [ungefähr](https://www.w3.org/TR/intersection-observer/#dom-intersectionobserverentry-isintersecting) beim Übergang des booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Codeausschnitt prüft zuerst, ob der Übergang positiv ist, dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75% liegt, in diesem Fall wird der Zähler erhöht.

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

#### Ziel element, das beobachtet werden soll

Nachdem Sie den Observer erstellt haben, müssen Sie ihm ein Zielelement angeben, das beobachtet werden soll:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Jedes Mal, wenn das Ziel einen Schwellenwert erreicht, der für den `IntersectionObserver` angegeben ist, wird der Callback aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachfahre des Root-Elements sein muss.

### So wird die Intersection berechnet

Alle von der Intersection Observer API berücksichtigten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck betrachtet, das alle Teile des Elements umfasst. Ebenso wird, wenn der sichtbare Teil eines Elements nicht rechteckig ist, das Intersections-Rechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein bisschen darüber zu verstehen, wie die verschiedenen Eigenschaften, die von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellt werden, eine Intersection beschreiben.

#### Die Intersection Root und der Root-Margin

Bevor wir die Schnittmenge eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Intersection Root** oder das **Root-Element**. Dies kann entweder ein spezielles Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Root Intersection Rectangle_** ist das Rechteck, das verwendet wird, um die Schnittmenge des Ziels oder der Ziele zu überprüfen. Dieses Rechteck wird wie folgt ermittelt:

- Wenn die Intersection Root die implizite Root ist (das heißt, das oberste [`Document`](/de/docs/Web/API/Document)), ist das Root Intersection Rectangle das Rechteck des Viewports.
- Wenn die Intersection Root einen Overflow-Clip hat, ist das Root Intersection Rectangle der Inhaltsbereich des Root-Elements.
- Andernfalls ist das Root Intersection Rectangle das Begrenzungsrechteck des Intersection Root (wie es durch Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufgerufen wird).

Das Root Intersection Rectangle kann weiter angepasst werden, indem beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein **Root-Margin**, `rootMargin`, eingestellt wird. Die Werte in `rootMargin` definieren Offsets, die zu jeder Seite des Intersections-Rechtecks des Roots hinzugefügt werden, um die endgültigen Grenzen der Root-Intersection zu erstellen (die im [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) angegeben werden, wenn der Callback ausgeführt wird). Positive Werte vergrößern die Box, während negative Werte sie verkleinern.

Im folgenden Beispiel haben wir eine Scrollbox und ein Element, das anfangs nicht sichtbar ist. Sie können den rechten Rand des Roots justieren und feststellen, dass:

- Wenn der Rand negativ ist, wird das rote Element immer noch nicht als mit dem Root überschneidend angesehen, selbst wenn es beginnt, sichtbar zu werden, da die Begrenzungsbox des Roots verkleinert wird.
- Wenn der Rand positiv ist, wird das rote Element als mit dem Root überschneidend betrachtet, selbst wenn es nicht sichtbar ist, weil es mit dem Root-Margin-Bereich überschneidet.

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

{{EmbedLiveSample("die Schnittmenge zwischen Root und Root-Margin", "", 300)}}

#### Schwellenwerte

Anstelle jeder winzigen Änderung darin zu melden, wie viel ein Zielelement sichtbar ist, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie ein oder mehrere numerische Werte angeben, die Prozentsätze des Zielelements darstellen, die sichtbar sind. Die API informiert dann nur über Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Wenn Sie beispielsweise jedes Mal, wenn ein Ziel die Sichtbarkeit rückwärts oder vorwärts durch jede 25%-Marke überschreitet, informiert werden möchten, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte angeben, wenn Sie den Observer erstellen.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Grad der Intersection mit dem Root sich so geändert hat, dass die freiliegende Menge einen der Schwellenwerte in beide Richtungen überschreitet.

Sie können sehen, ob das Ziel _aktuell_ den Root schneidet, indem Sie auf die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags schauen; wenn der Wert `true` ist, schneidet das Ziel zu mindestens einem Teil das Root-Element oder Dokument. Dies ermöglicht es Ihnen zu bestimmen, ob der Eintrag einen Übergang von "sich überschneidenden Elementen" zu "nicht mehr überschneidenden" oder einen Übergang von "nicht überschneidenden" zu "überschneidenden" darstellt.

Beachten Sie, dass es möglich ist, ein Rechteck mit Null-Schnittmenge zu haben, was passieren kann, wenn die Schnittmenge genau entlang der Grenze zwischen den beiden oder der Fläche von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) Null ist. Dieser Zustand des Ziels und des Roots, die eine Grenzlinie teilen, wird nicht als ausreichend erachtet, um in einen Schnittmengenstatus überzugehen.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, die Box unten zu scrollen. Jedes farbige Feld darin zeigt in allen vier seiner Ecken den Prozentsatz seiner selbst, der sichtbar ist, damit Sie sehen können, wie sich diese Verhältnisse im Laufe der Zeit ändern, während Sie das Container scrollen. Jedes Feld hat einen anderen Satz von Schwellenwerten:

- Das erste Feld hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt, das Array [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Feld hat einen einzigen Schwellenwert bei der 50%-Marke.
- Das dritte Feld hat Schwellenwerte alle 10% der Sichtbarkeit (0%, 10%, 20%, usw.).
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

{{EmbedLiveSample("Schwellenwert", 500, 500)}}

#### Clipping und das Intersections-Rechteck

Der Browser berechnet das endgültige Intersections-Rechteck wie folgt; dies wird alles für Sie getan, aber es kann hilfreich sein, diese Schritte zu verstehen, um genauer zu begreifen, wann Schnittmengen auftreten.

1. Das Begrenzungsrechteck des Zielelements (das heißt, das kleinste Rechteck, das die Begrenzungsboxen aller Komponenten, die das Element bilden, vollständig umschließt) wird durch das Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) des Ziels erhalten. Dies ist das größte, was das Intersections-Rechteck sein könnte. Die verbleibenden Schritte entfernen alle Teile, die nicht überschneiden.
2. Beginnend beim unmittelbaren übergeordneten Block des Ziels und nach außen gehend, wird der Schnitt jedes umgebenden Blocks (falls vorhanden) auf das Intersections-Rechteck angewendet. Der Schnitt eines Blocks wird auf der Grundlage der Schnittmenge der beiden Blocks und des vom Block festgelegten Clipping-Modus (falls vorhanden) durch die {{cssxref("overflow")}}-Eigenschaft bestimmt. Das Setzen von `overflow` auf einen anderen Wert als `visible` führt zum Clipping.
3. Wenn eines der umgebenden Elemente die Wurzel eines verschachtelten Browsing-Kontexts ist (wie das im {{HTMLElement("iframe")}} enthaltene Dokument), wird das Intersections-Rechteck auf den Viewport des enthaltenden Kontexts geclippt, und die Rekursion nach außen durch die Container setzt sich mit dem enthaltenen Block des Containers fort. Wenn also die oberste Ebene eines `<iframe>` erreicht wird, wird das Intersections-Rechteck auf den Viewport des Rahmens geclippt, dann ist das übergeordnete Element des Rahmens der nächste Block, der durch die Root-Intersection nach oben rekursiv wird.
4. Wenn die Rekursion nach oben die Intersection Root erreicht, wird das resultierende Rechteck auf den Koordinatenbereich der Root-Intersection abgebildet.
5. Das resultierende Rechteck wird anschließend aktualisiert, indem es mit dem [Root-Intersection Rechteck](#die_intersection_root_und_der_root-margin) geschnitten wird.
6. Dieses Rechteck wird schließlich auf den Koordinatenraum des [`document`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Observers, der jede Anzahl von Zielelementen für dieselbe Intersection-Konfiguration überwachen kann. Jeder Observer kann asynchron Änderungen in der Schnittmenge zwischen einem oder mehreren Zielelementen und einem geteilten Vorfahrenselement oder mit ihrem Top-Level-[`Document`](/de/docs/Web/API/Document)-{{Glossary("viewport", "Viewport")}} beobachten. Der Vorfahr oder der Viewport wird als **Root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittmenge zwischen dem Zielelement und seinem Root-Container zu einem spezifischen Übergangszeitpunkt. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Callback oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel lässt ein Ziel-Element seine Farbe und Transparenz ändern, sobald es mehr oder weniger sichtbar wird. Bei [Timing der Elementsichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie lange ein Satz von Elementen (wie Anzeigen) für den Benutzer sichtbar ist und wie man darauf reagieren kann, indem Statistiken aufgezeichnet oder Elemente aktualisiert werden.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem Hauptelement, welches die Box ist, die wir als Ziel verwenden werden (mit der kreativen ID `"box"`) und einige Inhalte innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht von entscheidender Bedeutung; es legt das Element an und stellt sicher, dass die {{cssxref("background-color")}}- und {{cssxref("border")}}-Attribute an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu bewirken, wenn es mehr oder weniger verdeckt wird.

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

Lassen Sie uns schließlich den JavaScript-Code betrachten, der die Intersection Observer API verwendet, um Dinge geschehen zu lassen.

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
  - : Diese Variable wird verwendet, um zu speichern, wie das Sichtbarkeitsverhältnis das letzte Mal war, als ein Schwellenwert überschritten wurde; damit können wir herausfinden, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Eine Zeichenkette, die eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in dieser Zeichenkette wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich das Element nicht nur ändert, sondern auch zunehmend opak wird, während es weniger verdeckt wird.
- `decreasingColor`
  - : Ebenso ist dies eine Zeichenkette, die eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um mit dem Hören des [`load`](/de/docs/Web/API/Window/load_event)-Ereignisses zu beginnen; Sobald die Seite fertig geladen ist, erhalten wir eine Referenz zu dem Element mit der ID `"box"` mit Hilfe von [`querySelector()`](/de/docs/Web/API/Document/querySelector), dann rufen wir die `createObserver()`-Methode auf, die wir gleich erstellen werden, um den Intersection Observer aufzubauen und zu installieren.

#### Der Intersection Observer wird erstellt

Die `createObserver()`-Methode wird aufgerufen, sobald der Seitenladen abgeschlossen ist, um tatsächlich den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und den Prozess des Beobachtens des Zielelements zu starten.

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

Dies beginnt mit dem Einrichten eines `options`-Objekts, das die Einstellungen für den Observer enthält. Wir möchten Änderungen in der Sichtbarkeit des Zielelements relativ zum Viewport des Dokuments beobachten, daher ist `root` `null`. Wir benötigen keinen Rand, daher wird the Rand-Offset, `rootMargin`, als "0px" angegeben. Dies führt dazu, dass der Observer Änderungen in der Intersektion zwischen den Begrenzungen des Zielelements und denen des Viewports beobachtet, ohne hinzugefügten (oder subtrahierten) Platz.

Die Liste der Schwellenwerte des Sichtbarkeitsverhältnisses, `threshold`, wird durch die Funktion `buildThresholdList()` konstruiert. Die Schwellenwertliste wird in diesem Beispiel programmgesteuert erstellt, da es eine Anzahl davon gibt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Observer, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen, eine Funktion angeben, die aufgerufen wird, wenn eine der Schwellenwerte überschritten wird, `handleIntersect()`, und unseren Satz von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf den zurückgegebenen Observer auf, indem wir das gewünschte Zielelement übergeben.

Wir könnten uns dafür entscheiden, mehrere Elemente hinsichtlich Sichtbarkeits-Änderungen des Intersektionsverhaltens mit dem Viewport zu überwachen, indem wir `observe()` für jedes dieser Elemente aufrufen, wenn wir dies wünschen.

#### Das Array von Schwellenwertverhältnissen wird erstellt

Die Funktion `buildThresholdList()`, die die Liste der Schwellenwerte erstellt, sieht folgendermaßen aus:

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

Dies erstellt das Array von Schwellenwerten—jeder davon ist ein Verhältnis zwischen 0,0 und 1,0, indem es den Wert `i/numSteps` für jede Ganzzahl `i` zwischen 1 und `numSteps` in das `thresholds`-Array aufnimmt. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis bei dem Standardwert von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Wir könnten natürlich das Array von Schwellenwerten fest in unseren Code programmieren, und oft werden Sie das tun. Aber dieses Beispiel lässt Spielraum für das Hinzufügen von Konfigurationssteuerungen, um die Granularität anzupassen, zum Beispiel.

#### Umgang mit Intersection-Änderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall das Element mit der ID `"box"`) so freigelegt oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis einen der Schwellenwerte in unserer Liste überschreitet, wird unsere Handlerfunktion, `handleIntersect()`, aufgerufen:

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

Für jeden [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries`, sehen wir nach, ob der Eintrag [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) steigt; wenn dies der Fall ist, setzen wir den {{cssxref("background-color")}} des Ziels auf die Zeichenkette in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzt das Wort "ratio" mit dem `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur die Farbe ändert sich, sondern die Transparenz des Zielelements ebenfalls; während das Intersection-Verhältnis abnimmt, verringert sich der Alpha-Wert der Hintergrundfarbe mit ihm, was zu einem Element führt, das durchsichtiger wird.

Ebenso verwenden wir die Zeichenkette `decreasingColor`, wenn das `intersectionRatio` sinkt, und ersetzen das Wort "ratio" darin durch das `intersectionRatio`, bevor wir den Hintergrund des Zielelements (`background-color`) setzen.

Schließlich, um zu verfolgen, ob das Intersections-Verhältnis steigt oder fällt, speichern wir das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten sehen Sie den resultierenden Inhalt. Scrollen Sie diese Seite nach oben und unten und beachten Sie, wie sich das Erscheinungsbild der Box ändert, während Sie dies tun.

{{EmbedLiveSample('Einfaches Beispiel', 400, 400)}}

Es gibt ein noch umfangreicheres Beispiel bei [Timing der Elementsichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing der Elementsichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
