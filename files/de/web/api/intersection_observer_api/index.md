---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 5c77b329912bd8a428f59111ef546e7e0309dcb4
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Schnittmenge eines Zielelements mit einem übergeordneten Element oder mit dem Viewport eines Dokuments auf oberster Ebene asynchron zu beobachten.

Historisch gesehen war es schwierig und unzuverlässig, die Sichtbarkeit eines Elements oder die relative Sichtbarkeit von zwei Elementen in Bezug aufeinander zu erkennen, was oft dazu führte, dass der Browser und die Websites, die der Benutzer aufrief, träge wurden. Da das Web gereift ist, ist der Bedarf an solchen Informationen gestiegen. Schnittstelleninformationen werden aus vielen Gründen benötigt, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderen Inhalten, während eine Seite gescrollt wird.
- Implementieren von "unendlichen Scroll"-Websites, bei denen mehr und mehr Inhalte geladen und gerendert werden, während Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um Anzeigenumsätze zu berechnen.
- Entscheiden, ob Aufgaben oder Animationsprozesse ausgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird.

In der Vergangenheit erforderte die Implementierung der Schnittstellenerkennung Ereignishandler und Schleifen, die Methoden wie `Element.getBoundingClientRect()` aufriefen, um die benötigten Informationen für jedes betroffene Element aufzubauen. Da dieser gesamte Code im Hauptthread ausgeführt wird, kann selbst einer dieser Handler Leistungsprobleme verursachen. Wenn eine Site mit diesen Tests überladen ist, kann dies zu erheblichen Verzögerungen führen.

Denken Sie an eine Webseite, die unendliches Scrollen verwendet. Sie verwendet eine vom Anbieter bereitgestellte Bibliothek zum Verwalten der Anzeigen, die periodisch auf der Seite platziert sind, hat hier und da animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und dergleichen zeichnet. Jedes davon hat seine eigenen Routinen zur Schnittstellenerkennung, die alle im Hauptthread ausgeführt werden. Der Autor der Website merkt dies möglicherweise nicht einmal, da er möglicherweise sehr wenig über die internen Abläufe der beiden verwendeten Bibliotheken weiß. Während der Benutzer die Seite scrollt, werden diese Routinen zur Schnittstellenerkennung ständig während des Scroll-Handlings aktiviert, was zu einer Erfahrung führt, die den Benutzer mit dem Browser, der Website und seinem Computer frustriert zurücklässt.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die ausgeführt wird, wenn ein bestimmtes Element eine Schnittstelle zu einem anderen Element (oder dem Viewport) betritt oder verlässt oder wenn die Schnittstelle zwischen zwei Elementen sich um einen bestimmten Betrag ändert. Auf diese Weise müssen Seiten nichts mehr im Hauptthread tun, um solche Schnittstellen von Elementen zu überwachen, und der Browser kann das Management der Schnittstellen nach eigenem Ermessen optimieren.

Eine Sache, die die Intersection Observer API nicht tun kann: Logik basierend auf der genauen Anzahl der überlappenden Pixel oder darauf auslösen, welche genau diese sind. Sie löst nur den üblichen Anwendungsfall "Wenn sie sich etwa um _N_% schneiden, muss ich etwas tun" aus.

## Konzepte und Nutzung von Intersection Observer

Die Intersection Observer API ermöglicht es Ihnen, einen Callback zu konfigurieren, der in folgenden Fällen aufgerufen wird:

- Ein **Ziel**-Element überschneidet entweder den Geräte-Viewport oder ein bestimmtes Element. Dieses bestimmte Element wird für die Zwecke der Intersection Observer API als **Root-Element** oder **Root** bezeichnet.
- Das erste Mal, wenn der Observer erstmals aufgefordert wird, ein Zielelement zu überwachen.

Typischerweise möchten Sie Überwachungen für Schnittstellenänderungen in Bezug auf den nächsten scrollbaren Vorfahren des Zielelements durchführen, oder, falls das Zielelement kein Nachfahre eines scrollbaren Elements ist, im Geräte-Viewport. Um die Schnittstelle relativ zum Geräte-Viewport zu überwachen, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung der Optionsmöglichkeiten für Intersection Observer.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise: Sie führt eine von Ihnen bereitgestellte Callback-Funktion aus, wann immer sich die Sichtbarkeit des Zielelements so ändert, dass es gewünschte Werte der Schnittmenge mit dem Root kreuzt.

Der Grad der Schnittstelle zwischen dem Zielelement und seinem Root ist das **Schnittstellenverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Zielelements, das als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und eine Callback-Funktion übergeben, die ausgeführt wird, wann immer ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1.0 bedeutet, dass der Callback aufgerufen wird, wenn 100 % des Ziels innerhalb des durch die `root`-Option angegebenen Elements sichtbar sind.

#### Optionen für Intersection Observer

Das `options`-Objekt, das an den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor übergeben wird, ermöglicht es Ihnen, die Umstände zu steuern, unter denen der Callback des Observers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport für die Überprüfung der Sichtbarkeit des Ziels verwendet wird. Muss ein Vorfahre des Ziels sein. Standardmäßig wird der Browser-Viewport verwendet, wenn nicht angegeben oder `null`.
- `rootMargin`
  - : Rand um das Root herum. Kann Werte wie die CSS-Eigenschaft {{cssxref("margin")}} haben, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können Prozentwerte sein. Diese Wertesequenz dient dazu, jede Seite des Begrenzungsrahmens des Root-Elements vor der Berechnung von Schnittmengen zu vergrößern oder zu verkleinern. Standardmäßig sind alle Nullen.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Beobachters ausgeführt werden soll. Wenn Sie nur erkennen möchten, wenn die Sichtbarkeit die Marke von 50 % überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie möchten, dass der Callback jedes Mal ausgeführt wird, wenn die Sichtbarkeit um weitere 25 % überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standardwert ist 0 (was bedeutet, dass der Callback ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1.0 bedeutet, dass der Schwellenwert erst als überschritten betrachtet wird, wenn jeder Pixel sichtbar ist.

#### Callbacks für Schnittstellenänderungen

Das an den `IntersectionObserver()`-Konstruktor übergebene Callback erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und dem Observer:

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

Die Liste der vom Callback empfangenen Einträge enthält einen Eintrag für jedes Schwellenwertüberschreitungsereignis — es können mehrere Einträge gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzigen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden in einer Warteschlange versandt, sodass sie in der Reihenfolge geordnet sein sollten, in der sie erzeugt wurden. Sie sollten jedoch vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen.

Jeder Eintrag in der Liste der Schwellenwerte ist ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt, das einen überschrittenen Schwellenwert beschreibt; das heißt, jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Root-Element geschnitten wird, ob das Element als schneidend angesehen wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment — wenn Sie Informationen benötigen, die über die Zeit verfolgt werden müssen, wie z.B. die Scrollrichtung und -geschwindigkeit, müssen Sie dies möglicherweise selbst berechnen, indem Sie sich die zuvor empfangenen Einträge merken.

Beachten Sie, dass Ihr Callback im Hauptthread ausgeführt wird. Es sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwändiges erledigt werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Das untenstehende Codesnippet zeigt eine Callback-Funktion, die einen Zähler davon führt, wie oft Elemente von nicht sichtbaren zu mit dem Root mindestens zu 75 % sichtbaren übergehen. Für einen Schwellenwert von 0,0 (Standard) wird der Callback ungefähr beim Übergang des booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Das Snippet überprüft also zuerst, ob der Übergang ein positiver ist, und ermittelt dann, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75 % liegt, in welchem Fall der Zähler inkrementiert wird.

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

#### Zielgerichtet ein Element beobachten

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Zielelement geben, das er überwachen soll:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` spezifizierten Schwellenwert erreicht, wird der Callback aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachkomme des Root-Elements sein muss.

### Wie Schnittstellen berechnet werden

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente mit unregelmäßiger Form werden als ein das kleinste Rechteck, das alle Teile des Elements umfasst, betrachtend angesehen. Ebenso, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Schnittstellenrechteck des Elements als das kleinste Rechteck angesehen, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Schnittstelle beschreiben.

#### Der Schnittstellen-Root und der Root-Rand

Bevor wir die Schnittmenge eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist der **Schnittstellen-Root** oder **Root-Element**. Dies kann entweder ein spezifisches Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Dokumenten-Viewport als Container zu verwenden.

Das **Root-Schnittstellenrechteck** ist das Rechteck, das verwendet wird, um es gegen das Ziel oder die Ziele zu überprüfen. Dieses Rechteck wird wie folgt bestimmt:

- Wenn der Schnittstellen-Root der implizite Root ist (also das Dokument auf höchster Ebene), ist das Root-Schnittstellenrechteck das Rechteck des Viewports.
- Wenn der Schnittstellen-Root einen überlaufenden Clip hat, ist das Root-Schnittstellenrechteck der Inhaltsbereich des Root-Elements.
- Anderenfalls ist das Root-Schnittstellenrechteck das Begrenzungsrechteck des Schnittstellen-Root (wie durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf ihm zurückgegeben).

Das Root-Schnittstellenrechteck kann weiter durch Einstellung des **Root-Rands** `rootMargin` beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angepasst werden. Die Werte in `rootMargin` definieren Offsets, die jeder Seite des Begrenzungsrahmens des Schnittstellen-Root hinzugefügt werden, um die endgültigen Grenzen der Schnittstelle zu erstellen (die offenbart werden in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds), wenn der Callback ausgeführt wird). Positive Werte vergrößern den Rahmen, während negative Werte ihn verkleinern.

Im folgenden Beispiel haben wir ein scrollbares Kästchen und ein Element, das anfangs nicht sichtbar ist. Sie können den rechten Rand des Root-Elements anpassen und sehen, dass:

- Wenn der Rand negativ ist, wird das rote Element selbst dann, wenn es beginnt, sichtbar zu werden, noch nicht als Schnittstelle mit dem Root angesehen, da der Begrenzungsrahmen des Root verkleinert wird.
- Wenn der Rand positiv ist, wird das rote Element als Schnittstelle mit dem Root angesehen, auch wenn es nicht sichtbar ist, da es mit dem Wurzel-Randbereich schneidet.

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

Anstatt jede infinitesimale Änderung der Sichtbarkeit eines Zielelements zu melden, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie eine oder mehrere Zahlenwerte angeben, die Prozentsätze des sichtbaren Teilelements darstellen. Dann meldet die API nur Sichtbarkeitsänderungen, die diese Schwellenwerte überschreiten.

Beispielsweise, wenn Sie informiert werden möchten, jedes Mal, wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts den jeweiligen 25 %-Wert überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte beim Erstellen des Observers angeben.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Grad der Schnittmenge mit dem Root sich so geändert hat, dass die Menge der sichtbaren Teile einen der Schwellenwerte in beide Richtungen überschreitet.

Sie können sehen, ob das Ziel _derzeit_ den Root schneidet, indem Sie die Eigenschaft [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) des Eintrags betrachten; wenn ihr Wert `true` ist, schneidet das Ziel mindestens teilweise das Root-Element oder das Dokument. Dies ermöglicht es Ihnen zu bestimmen, ob der Eintrag einen Übergang von den schneidenden zu nicht mehr schneidenden Elementen oder einen Übergang von nicht schneidenden zu schneidenden Elementen darstellt.

Beachten Sie, dass es möglich ist, ein Rechteck ohne Schnittmenge zu haben, was passieren kann, wenn die Schnittmenge genau entlang der Grenze zwischen den beiden verläuft oder der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, in dem das Ziel und der Root eine Grenzlinie teilen, gilt nicht als ausreichend, um als Übergang in einen Schnittmengenstatus betrachtet zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, das untenstehende Feld zu scrollen. Jedes farbige Feld darin zeigt den Prozentsatz von sich selbst an, der in allen vier Ecken sichtbar ist, sodass Sie diese Verhältnisse im Laufe der Zeit sehen können, während Sie den Container scrollen. Jedes Feld hat einen anderen Satz von Schwellenwerten:

- Das erste Feld hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt, das Array [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Feld hat einen einzigen Schwellenwert, bei der 50 %-Marke.
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

{{EmbedLiveSample("Thresholds", 500, 500)}}

#### Beschneidung und das Schnittstellenrechteck

Der Browser berechnet das endgültige Schnittstellenrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu begreifen, wann Schnittmengen auftreten.

1. Das Begrenzungsrechteck des Zielelements (das heißt, das kleinste Rechteck, das die Begrenzungsrahmen jeder Komponente umfasst, die das Element bildet) wird durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf dem Ziel erlangt. Dies ist das größte, das das Rechteck der Schnittmenge sein kann. Die restlichen Schritte entfernen alle Teile, die nicht schneiden.
2. Beginnend beim unmittelbaren Containerblock des Ziels und nach außen bewegend, wird jeder enthaltende Blockclip (falls vorhanden) auf das Schnittstellenrechteck angewendet. Ein Clip eines Blocks wird basierend auf der Schnittmenge der beiden Blöcke und dem Clipping-Modus (falls vorhanden) bestimmt, der durch die Eigenschaft {{cssxref("overflow")}} festgelegt wird. Das Festlegen von `overflow` auf eine andere Option als `visible` verursacht ein Clipping.
3. Wenn eines der enthaltenden Elemente der Root eines verschachtelten Browsing-Kontexts ist (wie das im {{HTMLElement("iframe")}} enthaltene Dokument), wird das Schnittstellenrechteck mit dem Viewport des enthaltenden Kontextes beschnitten, und die Rekursion nach oben durch die Container wird mit dem enthaltenden Block des Containers fortgesetzt. Wenn also das oberste Niveau eines `<iframe>` erreicht wird, wird das Schnittstellenrechteck auf den Viewport des Rahmens beschnitten, dann wird das übergeordnete Element des Rahmens der nächste durch die Root fortgesetzte Block.
4. Wenn die Rekursion nach oben die Schnittstellen-Root erreicht, wird das resultierende Rechteck auf den Koordinatenraum der Schnittstellen-Root abgebildet.
5. Das resultierende Rechteck wird dann durch Schnitt mit dem [Root-Schnittstellenrechteck](#der_schnittstellen-root_und_der_root-rand) aktualisiert.
6. Dieses Rechteck wird schließlich auf den Koordinatenraum des [`Dokuments`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Observers, der eine beliebige Anzahl von Zielelementen für die gleiche Schnittstellenkonfiguration überwachen kann. Jeder Observer kann asynchron Änderungen der Schnittmenge zwischen einem oder mehreren Zielelementen und einem gemeinsamen übergeordneten Element oder ihrem [`Document`](/de/docs/Web/API/Document)-Viewport auf oberster Ebene beobachten. Der Vorfahr oder Viewport wird als **Root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittstelle zwischen dem Zielelement und seiner Root-Container zu einem bestimmten Moment des Übergangs. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihr `IntersectionObserver`-Callback oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass ein Zielelement seine Farbe und Transparenz ändert, während es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie Sie Zeit messen können, wie lange ein Satz von Elementen (z.B. Anzeigen) für den Benutzer sichtbar ist, und auf diese Informationen zu reagieren, indem Sie Statistiken aufzeichnen oder Elemente aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem Hauptelement, das die Box ist, die wir anvisieren werden (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist nicht besonders wichtig für die Zwecke dieses Beispiels; es legt das Element aus und stellt sicher, dass die Attribute {{cssxref("background-color")}} und {{cssxref("border")}} an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir nutzen werden, um die Änderungen am Element zu bewirken, während es mehr oder weniger verdeckt wird.

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

Schließlich werfen wir einen Blick auf den JavaScript-Code, der die Intersection Observer API verwendet, um die Dinge in Gang zu bringen.

#### Einrichtung

Zuerst müssen wir ein paar Variablen vorbereiten und den Observer installieren.

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
  - : Diese Variable wird benutzt, um zu vermerken, welches das vorherige Sichtverhältnis war, als ein Schwellenwert überschritten wurde; dies wird uns helfen herauszufinden, ob das Zielelement mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Eine Zeichenkette, die eine Farbe definiert, die wir auf das Zielelement anwenden, wenn das Sichtbarkeitsverhältnis steigt. Das Wort "ratio" in dieser Zeichenkette wird mit dem aktuellen Sichtbarkeitsverhältnis des Ziels ersetzt, damit das Element nicht nur seine Farbe ändert, sondern auch zunehmend opaker wird, je weniger es verdeckt wird.
- `decreasingColor`
  - : Ähnlich ist dies eine Zeichenkette, die eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis sinkt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) an, um zu beginnen, auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu hören; sobald das Laden der Seite abgeschlossen ist, holen wir uns einen Verweis auf das Element mit der ID `"box"` mithilfe von [`querySelector()`](/de/docs/Web/API/Document/querySelector), und rufen dann die Methode `createObserver()` auf, die wir gleich erstellen werden, um den Aufbau und die Installation des Intersection Observers zu handhaben.

#### Erstellung des Intersection Observers

Die Methode `createObserver()` wird aufgerufen, sobald das Laden der Seite abgeschlossen ist, um tatsächlich den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und den Prozess der Überwachung des Zielelements zu starten.

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

Dies beginnt mit der Einrichtung eines `options`-Objekts, das die Einstellungen für den Observer enthält. Wir möchten Änderungen in der Sichtbarkeit des Zielelements im Verhältnis zum Viewport des Dokuments überwachen, daher ist `root` `null`. Wir benötigen keinen Rand, also wird die Randoffset `rootMargin` auf "0px" festgelegt. Dadurch wird der Observer angewiesen, auf Änderungen in der Schnittstelle zwischen den Begrenzungen des Zielelements und denen des Viewports zu achten, ohne zusätzlichen (oder subtrahierten) Raum.

Die Liste der Sichtbarkeitsverhältnisschwellenwerte, `threshold`, wird durch die Funktion `buildThresholdList()` konstruiert. Die Schwellenwertliste wird in diesem Beispiel programmatisch erstellt, da es eine ganze Reihe von ihnen gibt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Observer, indem wir den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor aufrufen, eine Funktion angeben, die gerufen wird, wenn die Schnittstelle einen unserer Schwellenwerte überschreitet, `handleIntersect()`, und unser Set von Optionen spezifizieren. Dann rufen wir [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf den zurückgegebenen Observer auf, indem wir ihm das gewünschte Zielelement übergeben.

Wir könnten auch mehrere Elemente für Sichtbarkeitsänderungen im Hinblick auf den Viewport überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun wollten.

#### Aufbau des Arrays von Schwellenwertverhältnissen

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

Dies erstellt das Array von Schwellenwerten - jeder davon ist ein Verhältnis zwischen 0,0 und 1,0, indem es den Wert `i/numSteps` auf das `thresholds`-Array für jede ganze Zahl `i` zwischen 1 und `numSteps` schiebt. Es fügt auch 0 hinzu, um diesen Wert einzuschließen. Das Ergebnis, angesichts des Standardwerts von `numSteps` (20), ist die folgende Liste der Schwellenwerte:

| #   | Verhältnis | #   | Verhältnis |
| --- | ---------- | --- | ---------- |
| 0   | 0.05       | 11  | 0.6        |
| 1   | 0.1        | 12  | 0.65       |
| 2   | 0.15       | 13  | 0.7        |
| 3   | 0.2        | 14  | 0.75       |
| 4   | 0.25       | 15  | 0.8        |
| 5   | 0.3        | 16  | 0.85       |
| 6   | 0.35       | 17  | 0.9        |
| 7   | 0.4        | 18  | 0.95       |
| 8   | 0.45       | 19  | 1          |
| 9   | 0.5        | 20  | 0          |
| 10  | 0.55       |     |            |

Wir könnten natürlich das Array der Schwellenwerte hart-codieren in unserem Code, und oft ist das, was Sie tun werden. Aber dieses Beispiel lässt Raum für die Hinzufügung von Konfigurationseinstellungen zur Anpassung der Granularität, zum Beispiel.

#### Umgang mit Schnittstellenänderungen

Wenn der Browser erkennt, dass das Zielelement (in unserem Fall das mit der ID `"box"`) in der Weise enthüllt oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis eine der Schwellenwerte in unserer Liste kreuzt, ruft er unsere Handler-Funktion `handleIntersect()` auf:

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

Für jedes [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries`, prüfen wir, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn es steigt, setzen wir die `background-color` des Ziels auf die Zeichenkette in `increasingColor` (erinnern Sie sich, es ist `"rgb(40 40 190 / ratio)"`), indem wir das Wort "ratio" durch das `intersectionRatio` des Eintrags ersetzen. Das Ergebnis: Nicht nur die Farbe wird geändert, sondern auch die Transparenz des Zielelements verändert sich; wenn das Schnittverhältnis abnimmt, sinkt auch der Alpha-Wert der Hintergrundfarbe, was zu einem Element führt, das transparenter wird.

Ebenso, wenn das `intersectionRatio` abnimmt, verwenden wir die Zeichenkette `decreasingColor` und ersetzen darin das Wort "ratio" mit dem `intersectionRatio`, bevor wir die `background-color` des Zielelements setzen.

Schließlich, um zu verfolgen, ob das Schnittverhältnis steigt oder fällt, merken wir uns das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt. Scrollen Sie diese Seite nach oben und unten und beachten Sie, wie sich das Erscheinungsbild des Kästchens dabei ändert.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Es gibt ein noch umfangreicheres Beispiel unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
