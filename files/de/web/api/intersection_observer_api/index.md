---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 5c77b329912bd8a428f59111ef546e7e0309dcb4
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Schnittmenge eines Ziel-Elements mit einem Vorfahren-Element oder mit dem {{Glossary("viewport", "Viewport")}} eines Dokuments asynchron zu beobachten.

Historisch gesehen war es schwierig, die Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente zueinander zu ermitteln. Lösungen dafür waren oft unzuverlässig und führten dazu, dass der Browser und die vom Benutzer aufgerufenen Seiten träge wurden. Mit der Reifung des Webs ist das Bedürfnis nach solchen Informationen gewachsen. Schnittstelleninformationen werden aus vielen Gründen benötigt, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderen Inhalten, während auf einer Seite gescrollt wird.
- Implementierung von "Endlosscroll"-Webseiten, bei denen immer mehr Inhalte geladen und gerendert werden, während Sie scrollen, sodass der Benutzer nicht zwischen Seiten wechseln muss.
- Berichterstattung über die Sichtbarkeit von Werbung, um Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationsprozesse ausgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird oder nicht.

Die Implementierung von Schnittstellenerkennung in der Vergangenheit erforderte Ereignishandler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, um die erforderlichen Informationen für jedes betroffene Element zu sammeln. Da all dieser Code auf dem Haupt-Thread läuft, kann selbst einer dieser Fälle zu Leistungsproblemen führen. Wenn eine Seite mit diesen Tests geladen ist, kann es richtig hässlich werden.

Betrachten Sie eine Webseite, die Endlosscroll verwendet. Sie nutzt eine von einem Anbieter bereitgestellte Bibliothek, um die auf der Seite verteilten Anzeigen zu verwalten, hat animierte Grafiken hier und da und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungskästen und Ähnliches zeichnet. Jedes dieser Elemente hat seine eigenen Schnittstellenerkennungsroutinen, die alle auf dem Haupt-Thread laufen. Der Autor der Website merkt möglicherweise nicht einmal, dass dies passiert, da er über die Funktionsweise der beiden verwendeten Bibliotheken nur wenig weiß. Während der Benutzer die Seite scrollt, werden diese Schnittstellenerkennungsroutinen ständig während des Scroll-Handlings aufgerufen, was zu einem frustrierenden Erlebnis für den Benutzer führt, der mit dem Browser, der Webseite und seinem Computer unzufrieden ist.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die immer dann ausgeführt wird, wenn ein bestimmtes Element in ein oder aus einem Schnittpunkt mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) tritt oder wenn sich der Schnittpunkt zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Seiten nichts mehr auf dem Haupt-Thread tun, um diese Art von Element-Schnittpunkt zu überwachen, und der Browser kann die Verwaltung der Schnittpunkte so optimieren, wie er es für richtig hält.

Etwas, was die Intersection Observer API nicht kann: Logik basierend auf der genauen Anzahl von überlappenden Pixeln oder deren spezifische Lage auszulösen. Sie löst nur den häufig verwendeten Anwendungsfall "Wenn sie sich mit ungefähr _N_% überschneiden, muss ich etwas tun."

## Konzepte und Verwendung der Intersection Observer API

Die Intersection Observer API ermöglicht es Ihnen, einen Callback zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Bedingungen eintritt:

- Ein **Ziel-Element** schneidet entweder den Viewport des Geräts oder ein angegebenes Element. Dieses angegebene Element wird für die Zwecke der Intersection Observer API als **Root-Element** oder **Root** bezeichnet.
- Das erste Mal, wenn der Observer gebeten wird, ein Ziel-Element zu beobachten.

Typischerweise möchten Sie auf Schnittstellenänderungen in Bezug auf den nächsten scrollbareren Vorfahren des Ziel-Elements achten oder, wenn das Ziel-Element kein Nachfolger eines scrollbaren Elements ist, auf den Viewport des Geräts. Um in Bezug auf den Viewport des Geräts auf Schnittstellenänderungen zu überwachen, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung zu den Optionen des Intersection Observers.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Callback-Funktion ausführt, wann immer die Sichtbarkeit des Ziel-Elements sich so ändert, dass es gewünschte Schnittstellenergebnisse mit dem Root überschreitet.

Das Maß an Schnittstelle zwischen dem Ziel-Element und seinem Root ist das **Schnittverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Ziel-Elements, der als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die jedes Mal ausgeführt wird, wenn ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1,0 bedeutet, dass der Callback aufgerufen wird, wenn 100% des Ziels innerhalb des vom `root`-Element angegebenen Bereichs sichtbar sind.

#### Optionen für den Intersection Observer

Das `options`-Objekt, das an den Konstruktor von [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben wird, ermöglicht es Ihnen, die Umstände zu steuern, unter denen der Callback des Observers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport für die Sichtbarkeitsprüfung des Ziels verwendet wird. Muss ein Vorfahre des Ziels sein. Standardmäßig ist es der Viewport des Browsers, wenn nicht angegeben oder `null`.
- `rootMargin`
  - : Rand um den Root. Kann Werte ähnlich der CSS {{cssxref("margin")}}-Eigenschaft haben, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können Prozentsätze sein. Diese Wertemenge dient dazu, jede Seite des Begrenzungsrahmens des Root-Elements zu vergrößern oder zu verkleinern, bevor Schnittpunkte berechnet werden. Standardmäßig alles auf Null gesetzt.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Observers ausgeführt werden soll. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn der Callback jedes Mal ausgeführt werden soll, wenn die Sichtbarkeit um jeweils weitere 25% ansteigt, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standardwert ist 0 (was bedeutet, dass der Callback ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1,0 bedeutet, dass der Schwellenwert erst dann als überschritten betrachtet wird, wenn jedes Pixel sichtbar ist.

#### Rückrufe bei Schnittstellenänderungen

Der an den Konstruktor von `IntersectionObserver()` übergebene Callback erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Observer:

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

Die Liste der Einträge, die vom Callback empfangen werden, enthält einen Eintrag für jedes Schwellenwert-Überschreitungsevent – mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzelnen Ziel, das mehrere Schwellenwerte in kurzer Zeit überschreitet. Die Einträge werden in einer Warteschlange abgewickelt, sodass sie in der Reihenfolge abgearbeitet werden sollten, in der sie generiert wurden. Dennoch sollten Sie vorzugsweise den [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen.

Jeder Eintrag in der Liste der Schwellenwerte ist ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt, das einen überschrittenen Schwellenwert beschreibt; das heißt, jeder Eintrag beschreibt, wie viel von einem bestimmten Element sich mit dem Root-Element überschneidet, ob das Element als überschneidend betrachtet wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen speziellen Moment – wenn Sie Informationen benötigen, die über die Zeit verfolgt werden müssen, wie die Scrollrichtung und -geschwindigkeit, müssen Sie diese möglicherweise selbst berechnen, indem Sie zuvor empfangene Einträge speichern.

Seien Sie sich bewusst, dass Ihr Callback auf dem Haupt-Thread ausgeführt wird. Er sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwändiges getan werden muss, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der folgende Codeausschnitt zeigt einen Callback, der einen Zähler führt, wie oft Elemente vom Nicht-Überschneiden des Roots zum Überschneiden mit mindestens 75% übergehen. Für einen Schwellenwert von 0,0 (Standard) wird der Callback [ungefähr] (https://www.w3.org/TR/intersection-observer/#dom-intersectionobserverentry-isintersecting) beim Übergang des booleschen Werts von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Ausschnitt überprüft daher zuerst, ob der Übergang positiv ist, und stellt dann fest, ob [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75% liegt, woraufhin der Zähler inkrementiert wird.

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

#### Ein Ziel-Element zum Beobachten anvisieren

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Ziel-Element zum Überwachen zuweisen:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erfüllt, wird der Callback aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachfolger des Root-Elements sein muss.

### Wie der Schnitt berechnet wird

Alle von der Intersection Observer API berücksichtigten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, gelten als in dem kleinsten Rechteck enthalten, das alle Teile des Elements einschließt. Ähnlich, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Schnittrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften einen Schnitt beschreiben.

#### Der Schnittwurzel und der Wurzelrand

Bevor wir den Schnitt eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittwurzel** oder das **Root-Element**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Schnittwurzelrechteck_** ist das Rechteck, das zum Prüfen der Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn die Schnittwurzel die implizite Wurzel ist (das heißt, das oberste [`Document`](/de/docs/Web/API/Document)), ist das Schnittwurzelrechteck das Rechteck des Viewports.
- Wenn die Schnittwurzel einen Überlaufclip hat, ist das Schnittwurzelrechteck der Inhaltsbereich des Root-Elements.
- Andernfalls ist das Schnittwurzelrechteck das begrenzende Kundenrechteck der Schnittwurzel (wie mit einem Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben).

Das Schnittwurzelrechteck kann weiter angepasst werden, indem beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) der **Wurzelrand**, `rootMargin`, festgelegt wird. Die Werte in `rootMargin` definieren Offsets, die zu jeder Seite des Begrenzungsrahmens der Schnittwurzel hinzugefügt werden, um die endgültigen Schnittwurzelgrenzen zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) offengelegt werden, wenn der Callback ausgeführt wird). Positive Werte vergrößern den Kasten, während negative Werte ihn verkleinern.

Im folgenden Beispiel haben wir einen scrollbaren Kasten und ein Element, das zunächst nicht sichtbar ist. Sie können den rechten Wurzelrand anpassen und sehen:

- Wenn der Rand negativ ist, dann wird das rote Element, selbst wenn es zu sehen beginnt, nicht als mit der Wurzel geschnitten betrachtet, da der Begrenzungsrahmen der Wurzel verkleinert ist.
- Wenn der Rand positiv ist, wird das rote Element als mit der Wurzel geschnitten betrachtet, selbst wenn es nicht sichtbar ist, da es sich mit dem Randbereich der Wurzel überschneidet.

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

Anstatt jede mikroskopische Änderung in der Sichtbarkeit eines Ziel-Elements zu berichten, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie eine oder mehrere numerische Werte angeben, die Prozentsätze des Ziel-Elements darstellen, die sichtbar sind. Dann berichtet die API nur über Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Beispielsweise, wenn Sie benachrichtigt werden möchten, jedes Mal wenn die Sichtbarkeit eines Ziels rückwärts oder vorwärts durch jede 25%-Marke geht, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste von Schwellenwerten beim Erstellen des Observers angeben.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, dessen Grad der Schnittmenge mit dem Root sich so geändert hat, dass der freigelegte Betrag in einer der beiden Richtung einen der Schwellenwerte überschreitet.

Sie können sehen, ob das Ziel _derzeit_ den Root schneidet, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) Eigenschaft des Eintrags ansehen; wenn ihr Wert `true` ist, schneidet das Ziel mindestens teilweise das Root-Element oder Dokument. Dies ermöglicht es Ihnen zu bestimmen, ob der Eintrag einen Übergang vom Schnitt der Elemente zu keinem Schnitt oder einen Übergang von keinem Schnitt zu einem Schnitt darstellt.

Beachten Sie, dass es möglich ist, ein Schnittrechteck von null zu haben, das auftreten kann, wenn der Schnitt genau entlang der Grenze zwischen beiden liegt oder der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) null ist. Dieser Zustand, dass das Ziel und die Wurzel nur eine Grenze miteinander teilen, wird nicht als ausreichend betrachtet, um als in einen Schnittstatus übergehend betrachtet zu werden.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, im unten stehenden Kasten herumzuscrollen. Jedes farbige Kästchen darin zeigt den Prozentsatz von sich selbst an, der in allen vier Ecken sichtbar ist, sodass Sie diese Verhältnisse über die Zeit ändern sehen können, während Sie den Container scrollen. Jedes Kästchen hat eine andere Reihe von Schwellenwerten:

- Das erste Kästchen hat einen Schwellenwert für jeden Prozentpunkt der Sichtbarkeit; das heißt, das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Das zweite Kästchen hat einen einzelnen Schwellenwert, bei der 50%-Marke.
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

{{EmbedLiveSample("Thresholds", 500, 500)}}

#### Clipping und das Schnittrechteck

Der Browser berechnet das endgültige Schnittrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu begreifen, wann genau Schnitte auftreten werden.

1. Das Begrenzungsrechteck des Ziel-Elements (das ist das kleinste Rechteck, das die Begrenzungsrahmen aller Komponenten umfasst, die das Element bilden) wird durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) beim Ziel abgerufen. Dies ist das größte, das das Schnittrechteck sein kann. Die verbleibenden Schritte entfernen alle Teile, die sich nicht überschneiden.
2. Ausgehend vom unmittelbaren übergeordneten Block des Ziels und nach außen bewegt wird der Schnitt jedes enthaltenden Blocks (falls vorhanden) auf das Schnittrechteck angewendet. Der Schnitt eines Blocks wird basierend auf der Schnittmenge der beiden Blöcke und dem Schnittmodus (falls vorhanden), der durch die CSS-Eigenschaft {{cssxref("overflow")}} angegeben wird, bestimmt. Wenn `overflow` auf etwas anderes als `visible` eingestellt ist, tritt Clipping auf.
3. Wenn eines der enthaltenen Elemente die Wurzel eines verschachtelten Browsing-Kontexts ist (wie das Dokument, das in einem {{HTMLElement("iframe")}} enthalten ist), wird das Schnittrechteck auf den Viewport des enthaltenen Kontextes beschränkt, und die Rekursion nach oben durch die Container wird mit dem Container's enthaltendem Block fortgesetzt. Wenn also die oberste Ebene eines `<iframe>` erreicht wird, wird das Schnittrechteck auf den Viewport des Rahmens beschränkt, dann wird das übergeordnete Element des Rahmens der nächste Block, der durch den Schnittwurzel rekursiv verfolgt wird.
4. Wenn die Rekursion nach oben die Schnittwurzel erreicht, wird das resultierende Rechteck auf den Koordinatenraum der Schnittwurzel abgebildet.
5. Das resultierende Rechteck wird dann durch Überschneiden mit dem [Schnittwurzelrechteck](#der_schnittwurzel_und_der_wurzelrand) aktualisiert.
6. Schließlich wird dieses Rechteck auf den Koordinatenraum des Ziels abgebildet [`document`](/de/docs/Web/API/Document).

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zur Erstellung und Verwaltung eines Observers, der eine beliebige Anzahl von Ziel-Elementen für dieselbe Schnittkonfiguration überwachen kann. Jeder Observer kann asynchron Änderungen in der Schnittmenge zwischen einem oder mehreren Ziel-Elementen und einem gemeinsamen Vorfahren-Element oder mit ihrem obersten [`Document`](/de/docs/Web/API/Document)'s {{Glossary("viewport", "Viewport")}} beobachten. Der Vorfahre oder Viewport wird als **Root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittmenge zwischen dem Ziel-Element und seinem Root-Container zu einem bestimmten Moment des Übergangs. Diese Objekte dieses Typs können nur auf zwei Arten erlangt werden: als Eingabe für Ihren `IntersectionObserver`-Callback oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel lässt ein Ziel-Element seine Farbe und Transparenz ändern, während es mehr oder weniger sichtbar wird. Unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie lange ein Satz von Elementen (wie z.B. Anzeigen) für den Benutzer sichtbar ist, und auf diese Informationen reagiert, indem es Statistiken aufzeichnet oder Elemente aktualisiert.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem Hauptelement, das die Box ist, die wir anvisieren (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element dar und legt fest, dass die {{cssxref("background-color")}} und {{cssxref("border")}}-Attribute an [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu beeinflussen, während es mehr oder weniger verdeckt wird.

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

Schließlich werfen wir einen Blick auf den JavaScript-Code, der die Intersection Observer API verwendet, damit Dinge passieren.

#### Einrichtung

Zunächst müssen einige Variablen vorbereitet und der Observer installiert werden.

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
  - : Diese Variable wird verwendet, um zu erfassen, wie das Sichtbarkeitsverhältnis das letzte Mal war, als ein Schwellenwert überschritten wurde; dies ermöglicht es uns herauszufinden, ob das Ziel-Element mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Eine Zeichenfolge, die eine Farbe definiert, die wir auf das Ziel-Element anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in dieser Zeichenfolge wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass das Element nicht nur die Farbe wechselt, sondern auch zunehmend opak wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ähnlich dazu ist dies eine Zeichenfolge, die eine Farbe definiert, die wir anwenden, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um mit dem Lauschen nach dem [`load`](/de/docs/Web/API/Window/load_event) Ereignis zu beginnen; sobald die Seite geladen ist, erhalten wir eine Referenz auf das Element mit der ID `"box"` mittels [`querySelector()`](/de/docs/Web/API/Document/querySelector), und rufen dann die Methode `createObserver()` auf, die wir gleich erstellen werden, um das Erstellen und Installieren des Intersection Observers zu handhaben.

#### Erstellen des Intersection Observers

Die Methode `createObserver()` wird aufgerufen, sobald das Laden der Seite abgeschlossen ist, um das Erstellen des neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und den Beginn des Prozesses der Beobachtung des Ziel-Elements zu handhaben.

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

Zuerst wird ein `options`-Objekt erstellt, das die Einstellungen für den Observer enthält. Wir möchten Änderungen der Sichtbarkeit des Ziel-Elements im Verhältnis zum Viewport des Dokuments überwachen, also ist `root` `null`. Wir benötigen keinen Rand, daher wird der Randversatz, `rootMargin`, als "0px" angegeben. Dies führt dazu, dass der Observer auf Änderungen im Schnitt zwischen den Grenzen des Ziel-Elements und denen des Viewports achtet, ohne zusätzlichen (oder subtrahierten) Raum.

Die Liste der Schwellenwerte für das Sichtbarkeitsverhältnis, `threshold`, wird von der Funktion `buildThresholdList()` erstellt. Die Schwellenwertliste wird in diesem Beispiel programmatisch erstellt, da es viele davon gibt und deren Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Observer, indem wir den Konstruktor von [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) aufrufen, eine Funktion angeben, die aufgerufen wird, wenn ein Schnitt einen unserer Schwellenwerte überschreitet, `handleIntersect()`, und unsere Reihe von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Observer auf und übergeben ihm das gewünschte Ziel-Element.

Wir könnten optieren, mehrere Elemente in Bezug auf Sichtbarkeitsschnittänderungen im Verhältnis zum Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies tun wollten.

#### Erstellen des Arrays von Schwellenwertverhältnissen

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

Dies erstellt das Array der Schwellenwerte – von denen jeder ein Verhältnis zwischen 0,0 und 1,0 ist, indem es den Wert `i/numSteps` auf das `thresholds`-Array für jede ganze Zahl `i` zwischen 1 und `numSteps` schiebt. Es schiebt auch 0, um diesen Wert einzubeziehen. Das Ergebnis, angesichts des Standardwertes von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Wir könnten das Array der Schwellenwerte natürlich hartkodiert in unseren Code aufnehmen, und oft werden Sie genau das tun. Aber dieses Beispiel lässt Platz für die Hinzufügung von Konfigurationssteuerungen, um die Granularität, zum Beispiel, anzupassen.

#### Umgang mit Schnittänderungen

Wenn der Browser erkennt, dass das Ziel-Element (in unserem Fall das mit der ID `"box"`) so enthüllt oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis einen der Schwellenwerte in unserer Liste überschreitet, ruft es unsere Handler-Funktion, `handleIntersect()`, auf:

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

Für jedes [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` sehen wir, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn es das tut, setzen wir die {{cssxref("background-color")}} des Ziels auf die Zeichenfolge in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), und ersetzen das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur ändert sich die Farbe, sondern die Transparenz des Ziel-Elements ändert sich ebenfalls; wenn das Schnittverhältnis sinkt, sinkt auch der Alpha-Wert der Hintergrundfarbe, was zu einem durchscheinenderen Element führt.

Ähnlich verhält es sich, wenn das `intersectionRatio` sinkt, verwenden wir die Zeichenfolge `decreasingColor` und ersetzen das Wort "ratio" darin mit dem `intersectionRatio`, bevor wir die `background-color` des Ziel-Elements setzen.

Schließlich, um zu verfolgen, ob das Schnittverhältnis steigt oder sinkt, merken wir uns das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten finden Sie den resultierenden Inhalt. Scrollen Sie diese Seite nach oben und unten und bemerken Sie, wie sich das Erscheinungsbild der Box ändert, während Sie dies tun.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Ein noch umfangreicheres Beispiel finden Sie unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
