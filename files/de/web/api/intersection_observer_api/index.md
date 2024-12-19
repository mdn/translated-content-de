---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen im Schnittpunkt eines Ziel-Elements mit einem Vorgänger-Element oder mit dem {{Glossary("viewport", "Viewport")}} eines obersten Dokuments asynchron zu beobachten.

Historisch gesehen war das Erkennen der Sichtbarkeit eines Elements oder der relativen Sichtbarkeit von zwei Elementen im Verhältnis zueinander eine schwierige Aufgabe, für die Lösungen unzuverlässig waren und dazu neigten, den Browser sowie die von den Benutzern aufgerufenen Websites zu verlangsamen. Mit der Reifung des Webs ist der Bedarf an dieser Art von Informationen gewachsen. Schnittstelleninformationen sind aus vielen Gründen erforderlich, wie zum Beispiel:

- Lazy-Loading von Bildern oder anderen Inhalten, während eine Seite gescrollt wird.
- Implementierung von "unendlichem Scrollen" auf Websites, bei denen immer mehr Inhalte geladen und gerendert werden, während Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Meldung der Sichtbarkeit von Anzeigen, um Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationsprozesse durchgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird oder nicht.

Die Implementierung der Schnittstellenerkennung in der Vergangenheit umfasste Event-Handler und Schleifen, die Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) aufriefen, um die erforderlichen Informationen für jedes betroffene Element zu sammeln. Da der gesamte Code im Haupt-Thread ausgeführt wird, kann selbst einer davon zu Leistungsproblemen führen. Wenn eine Website mit diesen Tests geladen ist, können die Dinge richtig hässlich werden.

Betrachten Sie eine Webseite, die unendliches Scrollen verwendet. Sie verwendet eine von einem Anbieter bereitgestellte Bibliothek, um die Anzeigen zu verwalten, die regelmäßig auf der Seite platziert werden, hat an verschiedenen Stellen animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsboxen und dergleichen zeichnet. Jede dieser Funktionen hat ihre eigenen Routinen zur Schnittstellenerkennung, die alle im Haupt-Thread ablaufen. Der Websiteautor ist sich dessen möglicherweise nicht einmal bewusst, da er möglicherweise sehr wenig über die Funktionsweise der beiden von ihm verwendeten Bibliotheken weiß. Wenn der Benutzer die Seite scrollt, werden diese Routinen zur Schnittstellenerkennung ständig im Scroll-Steuerungscode ausgelöst, was zu einem Erlebnis führt, das den Benutzer mit dem Browser, der Website und seinem Computer frustriert zurücklässt.

Die Intersection Observer API erlaubt es, eine Callback-Funktion zu registrieren, die ausgeführt wird, wann immer ein bestimmtes Element eine Schnittstelle mit einem anderen Element (oder dem {{Glossary("viewport", "Viewport")}}) betritt oder verlässt, oder wenn sich die Schnittstelle zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites nichts mehr im Haupt-Thread tun, um diese Art von Element-Schnittstelle zu überwachen, und der Browser kann das Management von Schnittstellen nach eigenem Ermessen optimieren.

Eine Sache, die die Intersection Observer API nicht tun kann: Logik basierend auf der genauen Anzahl von überlappenden Pixeln auslösen oder spezifisch auf welche. Sie löst nur den gängigen Anwendungsfall "Wenn sie sich um ungefähr _N_% überschneiden, muss ich etwas tun."

## Intersection Observer-Konzepte und -Nutzung

Die Intersection Observer API ermöglicht es Ihnen, einen Callback zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Bedingungen eintritt:

- Ein **Ziel**-Element schneidet entweder den Viewport des Geräts oder ein angegebenes Element. Dieses angegebene Element wird für die Zwecke der Intersection Observer API als **Root-Element** oder **Root** bezeichnet.
- Das erste Mal, wenn der Observer zunächst gebeten wird, ein Ziel-Element zu überwachen.

Normalerweise möchten Sie die Schnittstellenänderungen in Bezug auf den nächsten scrollbaren Vorgänger des Ziel-Elements oder, wenn das Ziel-Element nicht Nachkomme eines scrollbaren Elements ist, den Viewport des Geräts beobachten. Um die Schnittstelle relativ zum Viewport des Geräts zu überwachen, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung der Intersection Observer-Optionen.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise und führt eine von Ihnen bereitgestellte Callback-Funktion aus, wann immer sich die Sichtbarkeit des Ziel-Elements ändert, sodass es gewünschte Schnittstellenmengen mit dem Root überschreitet.

Der Grad der Schnittstelle zwischen dem Ziel-Element und seinem Root ist das **Schnittstellenverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Ziel-Elements, der als Wert zwischen 0,0 und 1,0 sichtbar ist.

### Erstellen eines Intersection Observers

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die ausgeführt wird, wann immer ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1,0 bedeutet, dass die Callback-Funktion aufgerufen wird, wenn 100% des Ziels innerhalb des durch die `root`-Option angegebenen Elements sichtbar sind.

#### Intersection Observer-Optionen

Das `options`-Objekt, das an den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor übergeben wird, ermöglicht es Ihnen, die Umstände zu steuern, unter denen der Callback des Observers aufgerufen wird. Es hat die folgenden Felder:

- `root`
  - : Das Element, das als Viewport verwendet wird, um die Sichtbarkeit des Ziels zu überprüfen. Muss der Vorgänger des Ziels sein. Standardmäßig ist dies der Browser-Viewport, wenn nicht angegeben oder wenn `null`.
- `rootMargin`
  - : Rand um den Root. Ein String von einem bis vier Werten, ähnlich der CSS {{cssxref("margin")}}-Eigenschaft, z.B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können nur [absolute Längen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#absolute_length_units) oder Prozentsätze sein. Diese Werte dienen dazu, jede Seite des Begrenzungsrahmens des Root-Elements vor der Berechnung der Schnittstellen zu vergrößern oder zu verkleinern. Negative Werte verkleinern den Begrenzungsrahmen des Root-Elements und positive Werte vergrößern ihn. Der Standardwert, wenn nicht angegeben, ist `"0px 0px 0px 0px"`.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels die Callback-Funktion des Observers ausgeführt werden soll. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50%-Marke überschreitet, können Sie einen Wert von 0,5 verwenden. Wenn Sie die Callback-Funktion jedes Mal ausführen möchten, wenn die Sichtbarkeit um weitere 25% überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standardwert ist 0 (was bedeutet, dass die Callback-Funktion ausgeführt wird, sobald auch nur ein Pixel sichtbar ist). Ein Wert von 1,0 bedeutet, dass der Schwellenwert erst als überschritten betrachtet wird, wenn jedes Pixel sichtbar ist.

#### Callbacks für Schnittstellenänderungen

Der Callback, der an den `IntersectionObserver()`-Konstruktor übergeben wird, erhält eine Liste von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten und den Observer:

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

Die Liste der Einträge, die vom Callback empfangen wird, enthält einen Eintrag für jedes Schwellenwert-Ereignis — mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzigen Ziel, das in kurzer Zeit mehrere Schwellenwerte überquert. Die Einträge werden in einer Warteschlange versandt, sie sollten also nach der Zeit, zu der sie generiert wurden, sortiert sein, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen.

Jeder Eintrag in der Liste der Schwellenwerte ist ein [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt, das einen Schwellenwert beschreibt, der überschritten wurde; das heißt, jeder Eintrag beschreibt, wie viel eines bestimmten Elements mit dem Root-Element schneidet, ob das Element als schneidend betrachtet wird oder nicht usw. Der Eintrag enthält nur Informationen über diesen bestimmten Augenblick — wenn Sie Informationen benötigen, die eine Verfolgung über die Zeit erfordern, wie die Scrollrichtung und -geschwindigkeit, müssen Sie diese möglicherweise selbst berechnen, indem Sie vorherige Einträge speichern.

Beachten Sie, dass Ihr Callback im Haupt-Thread ausgeführt wird. Es sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwändiges zu erledigen ist, verwenden Sie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback).

Der untenstehende Code-Schnipsel zeigt einen Callback, der einen Zähler führt, wie oft Elemente von nicht schneidend zur Mindest-Schnittmenge von 75% wechseln. Bei einem Schwellenwert von 0,0 (Standardwert) wird der Callback etwa bei Übergang des booleschen Wertes von [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) aufgerufen. Der Schnipsel überprüft daher zuerst, dass der Übergang ein positiver ist, und bestimmt dann, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) über 75% liegt, wobei es in diesem Fall den Zähler erhöht.

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

#### Anvisieren eines zu beobachtenden Elements

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Ziel-Element zum Überwachen geben:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// the callback we set up for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Wann immer das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Callback aufgerufen.

Beachten Sie auch, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachkomme des Root-Elements sein muss.

### Wie die Schnittstelle berechnet wird

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als das kleinste Rechteck betrachtet, das alle Teile des Elements umschließt. Ähnlich, wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Schnittstellenrechteck des Elements als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) bereitgestellten Eigenschaften eine Schnittstelle beschreiben.

#### Die Schnittstelle-Root und Root-Rand

Bevor wir die Schnittstelle eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittstelle-Root** oder **Root-Element**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorgänger des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Schnittstelle-Root-Rechteck_** ist das Rechteck, das zur Überprüfung der Ziel- oder Ziele verwendet wird. Dieses Rechteck wird wie folgt bestimmt:

- Wenn die Schnittstelle-Root die implizite Root ist (d.h. das oberste [`Document`](/de/docs/Web/API/Document)), ist das Schnittstelle-Root-Rechteck das Rechteck des Viewports.
- Wenn die Schnittstelle-Root einen Überlauf-Clip hat, ist das Schnittstelle-Root-Rechteck der Inhaltsbereich des Root-Elements.
- Andernfalls ist das Schnittstelle-Root-Rechteck das Begrenzungsrechteck des Schnittstelle-Roots (wie durch Aufruf von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) darauf zurückgegeben).

Das Schnittstelle-Root-Rechteck kann weiter durch Festlegen des **Root-Rands**, `rootMargin`, beim Erstellen des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angepasst werden. Die Werte in `rootMargin` definieren Offsets, die zu jeder Seite des Begrenzungsrahmens der Schnittstelle-Root hinzugefügt werden, um die endgültigen Schnittstelle-Root-Grenzen zu erstellen (die in [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) bekanntgegeben werden, wenn der Callback ausgeführt wird). Positive Werte vergrößern die Box, während negative sie verkleinern.

Im folgenden Beispiel haben wir eine scrollbare Box und ein Element, das zunächst unsichtbar ist. Sie können den Root-Rechtsrand anpassen und sehen, dass:

- Wenn der Rand negativ ist, dann wird, auch wenn das rote Element sichtbar zu werden beginnt, es immer noch nicht als schneidend mit der Root betrachtet, weil der Begrenzungsrahmen der Root verkleinert wird.
- Wenn der Rand positiv ist, wird das rote Element als schneidend mit der Root betrachtet, selbst wenn es nicht sichtbar ist, weil es mit dem Randbereich der Root schneidet.

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

{{EmbedLiveSample("die Schnittstelle-Root und Root-Rand", "", 300)}}

#### Schwellenwerte

Anstatt jede winzige Änderung darin zu melden, wie viel ein Ziel-Element sichtbar ist, nutzt die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie eine oder mehrere numerische Werte bereitstellen, die Prozentsätze des sichtbaren Ziel-Elements repräsentieren. Dann meldet die API nur Änderungen der Sichtbarkeit, die diese Schwellenwerte überschreiten.

Zum Beispiel, wenn Sie über jedes Vor- oder Zurückgehen eines Ziels über jede Marke von 25% informiert werden möchten, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte bei Erstellung des Observers angeben.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, bei dem sich der Grad, in dem es mit der Root schneidet, derart geändert hat, dass die Menge der freigelegten Bereiche über einen der Schwellenwerte in eine Richtung überschreitet.

Sie können sehen, ob das Ziel derzeit die Root schneidet, indem Sie die [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting)-Eigenschaft des Eintrags prüfen; wenn der Wert `true` ist, schneidet das Ziel mindestens teilweise das Root-Element oder Dokument. Dies ermöglicht Ihnen, festzustellen, ob der Eintrag einen Übergang vom Schneiden zu nicht Schrittschneiden oder einen Übergang vom Nichtschneiden zu Schneiden darstellt.

Beachten Sie, dass es möglich ist, ein Schnittstellenrechteck mit dem Wert Null zu haben, was passieren kann, wenn die Schnittstelle genau an der Grenze zwischen den beiden liegt oder der Bereich von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) Null ist. Dieser Zustand, in dem das Ziel und die Root eine Grenzlinie teilen, wird nicht als ausreichend angesehen, um in einen schneidenden Zustand überzugehen.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, die Box unten herumzuscrollen. Jede farbige Box innerhalb zeigt den Prozentsatz von sich selbst in allen vier Ecken an, sodass Sie sehen können, wie sich diese Verhältnisse im Laufe der Zeit ändern, während Sie den Container scrollen. Jede Box hat eine unterschiedliche Menge an Schwellenwerten:

- Die erste Box hat eine Schwelle für jeden Prozentpunkt der Sichtbarkeit; das heißt, das [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds)-Array ist `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]`.
- Die zweite Box hat eine einzige Schwelle bei der Marke von 50%.
- Die dritte Box hat Schwellenwerte alle 10% der Sichtbarkeit (0%, 10%, 20%, usw.).
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

#### Clipping und das Schnittstellenrechteck

Der Browser berechnet das endgültige Schnittstellenrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um genau zu begreifen, wann Schnittstellen auftreten werden.

1. Das Begrenzungsrechteck des Ziel-Elements (das heißt, das kleinste Rechteck, das die Begrenzungsboxen jeder Komponente bildet, aus denen das Element besteht), wird durch Aufrufen von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) auf das Ziel erhalten. Dies ist das größte, was das Schnittstellenrechteck sein kann. Die verbleibenden Schritte entfernen alle Teile, die nicht schneiden.
2. Beginnend mit dem unmittelbaren Elternelement des Ziels und nach außen durchlaufend, wird das Clipping (falls vorhanden) jedes enthaltenen Blocks auf das Schnittstellenrechteck angewendet. Das Clipping eines Blocks wird basierend auf der Schnittstelle der beiden Blocks und dem Clipping-Modus (falls vorhanden), der durch die {{cssxref("overflow")}}-Eigenschaft festgelegt ist, bestimmt. Das Setzen von `overflow` auf etwas anderes als `visible` verursacht Clipping.
3. Wenn eines der enthaltenen Elemente die Root eines verschachtelten Browsing-Kontextes ist (wie das Dokument, das in einem {{HTMLElement("iframe")}} enthalten ist), wird das Schnittstellenrechteck auf den Viewport des enthaltenen Kontextes zugeschnitten und die Rekursion nach oben durch die Container geht mit dem übergeordneten Block des Containers weiter. Wenn also das oberste `<iframe>` erreicht wird, wird das Schnittstellenrechteck auf den Viewport des Rahmens zugeschnitten, dann ist das Elternelement des Rahmens der nächste Block, der in Richtung der Schnittstelle-Root rekursiert wird.
4. Wenn die Rekursion nach oben die Schnittstelle-Root erreicht, wird das resultierende Rechteck in den Koordinatenbereich der Schnittstelle-Root abgebildet.
5. Das resultierende Rechteck wird dann aktualisiert, indem es mit dem [Schnittstelle-Root-Rechteck](#die_schnittstelle-root_und_root-rand) verschränkt wird.
6. Dieses Rechteck wird schließlich in den Koordinatenbereich des [`Dokuments`](/de/docs/Web/API/Document) des Ziels abgebildet.

## Schnittstellen

- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Observers, der jede Anzahl von Ziel-Elementen für dieselbe Schnittstellenkonfiguration beobachten kann. Jeder Observer kann Änderungen in der Schnittstelle zwischen einem oder mehreren Ziel-Elementen und einem gemeinsamen Vorfahren-Element oder mit ihrem obersten [`Document`](/de/docs/Web/API/Document) {{Glossary("viewport", "Viewport")}} asynchron beobachten. Der Vorfahre oder der Viewport wird als **Root** bezeichnet.
- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
  - : Beschreibt die Schnittstelle zwischen dem Ziel-Element und seinem Root-Container zu einem bestimmten Zeitpunkt des Übergangs. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihre `IntersectionObserver`-Callback-Funktion oder durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords).

## Ein einfaches Beispiel

Dieses einfache Beispiel lässt ein Ziel-Element seine Farbe und Transparenz ändern, wenn es mehr oder weniger sichtbar wird. Unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfangreicheres Beispiel, das zeigt, wie Sie die Zeit messen können, wie lange eine Gruppe von Elementen (wie Anzeigen) für den Benutzer sichtbar sind, und auf diese Informationen reagieren, indem Statistiken aufgezeichnet oder Elemente aktualisiert werden.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem Hauptelement, das die Box ist, die wir anvisieren (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element aus und legt fest, dass die {{cssxref("background-color")}}- und die {{cssxref("border")}}-Attribute an [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden werden, um die Änderungen am Element zu beeinflussen, während es mehr oder weniger verdeckt wird.

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

Schließlich werfen wir einen Blick auf den JavaScript-Code, der die Intersection Observer API nutzt, um Dinge geschehen zu lassen.

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
  - : Diese Variable wird verwendet, um zu verzeichnen, wie das Sichtbarkeitsverhältnis beim letzten Überschreiten eines Schwellenwerts war; dies ermöglicht es uns herauszufinden, ob das Ziel-Element mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Ziel-Element anwenden, wenn das Sichtbarkeitsverhältnis steigt. Das Wort "ratio" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass sich das Element nicht nur farblich ändert, sondern auch zunehmend undurchsichtiger wird, wenn es weniger verdeckt wird.
- `decreasingColor`
  - : Ebenso ist dies ein String, der eine Farbe definiert, die wir bei sinkendem Sichtbarkeitsverhältnis anwenden werden.

Wir rufen [`Window.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um zu beginnen, das [`load`](/de/docs/Web/API/Window/load_event)-Event zu lauschen; sobald die Seite geladen ist, erhalten wir eine Referenz zu dem Element mit der ID `"box"` mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) und rufen dann die `createObserver()`-Methode auf, die wir gleich erstellen werden, um den Aufbau und die Installation des Intersection Observers zu handhaben.

#### Erstellen des Intersection Observers

Die `createObserver()`-Methode wird nach Abschluss des Seitenladens aufgerufen, um tatsächlich den neuen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu erstellen und den Prozess der Beobachtung des Ziel-Elements zu starten.

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

Dies beginnt mit der Einrichtung eines `options`-Objekts, das die Einstellungen für den Observer enthält. Wir möchten Änderungen in der Sichtbarkeit des Ziel-Elements relativ zum Viewport des Dokuments beobachten, daher ist `root` `null`. Wir benötigen keinen Rand, daher wird der Rand-Offset `rootMargin` als "0px" angegeben. Dies führt dazu, dass der Observer die Schnittstelle zwischen den Begrenzungen des Ziel-Elements und denen des Viewports überwacht, ohne zusätzlichen (oder subtrahierten) Raum.

Die Liste der Schwellenwerte für das Sichtbarkeitsverhältnis, `threshold`, wird von der Funktion `buildThresholdList()` konstruiert. Die Schwellenwertliste wird in diesem Beispiel programmgesteuert erstellt, da es eine Anzahl von ihnen gibt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Observer und rufen den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor auf, wobei wir eine Funktion angeben, die aufgerufen werden soll, wenn die Schnittstelle einen unserer Schwellenwerte überschreitet, `handleIntersect()`, und unser Set von Optionen. Wir rufen dann [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf dem zurückgegebenen Observer auf, indem wir das gewünschte Ziel-Element übergeben.

Wir könnten optional mehrere Elemente überwachen, um Sichtbarkeitsänderungen der Schnittstelle im Hinblick auf den Viewport zu beobachten, indem wir für jedes dieser Elemente `Observer.observe()` aufrufen, wenn wir dies tun möchten.

#### Erstellen der Schwellenwert-Ratio-Array

Die `buildThresholdList()`-Funktion, die die Liste der Schwellenwerte erstellt, sieht so aus:

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

Diese erstellt das Array der Schwellenwerte — jede davon ist ein Verhältnis zwischen 0,0 und 1,0, indem die Werte `i/numSteps` für jede ganze Zahl `i` zwischen 1 und `numSteps` in das `thresholds`-Array eingefügt werden. Es wird auch 0 eingefügt, um diesen Wert einzuschließen. Das Ergebnis, unter Berücksichtigung des Standardwerts von `numSteps` (20), ist folgende Liste von Schwellenwerten:

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

Wir könnten natürlich das Array der Schwellenwerte in unseren Code fest codieren, und oft werden Sie genau das tun. Aber in diesem Beispiel wird Raum gelassen, um Steuerungen hinzuzufügen, um die Granularität anzupassen, beispielsweise.

#### Handhabung von Schnittstellenänderungen

Wenn der Browser erkennt, dass das Ziel-Element (in unserem Fall das mit der ID `"box"`) so enthüllt oder verdeckt wurde, dass sein Sichtbarkeitsverhältnis einen unserer Schwellenwerte in der Liste überschreitet, ruft es unsere Handler-Funktion `handleIntersect()` auf:

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

Für jede [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) in der Liste `entries` sehen wir nach, ob das [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) des Eintrags steigt; wenn dies der Fall ist, setzen wir die {{cssxref("background-color")}} des Ziels auf den String in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzen aber das Wort "ratio" durch das `intersectionRatio` des Eintrags. Das Ergebnis: Nicht nur ändert sich die Farbe, sondern auch die Transparenz des Ziel-Elements ändert sich; wenn das Schnittstellenverhältnis sinkt, sinkt auch der Alpha-Wert der Hintergrundfarbe, was zu einem Element führt, das durchsichtiger wird.

Ebenso verwenden wir, wenn das `intersectionRatio` sinkt, den String `decreasingColor` und ersetzen das Wort "ratio" durch das `intersectionRatio`, bevor wir die `background-color` des Ziel-Elements setzen.

Schließlich, um zu verfolgen, ob das Schnittstellenverhältnis steigt oder fällt, speichern wir das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Unten ist der resultierende Inhalt zu sehen. Scrollen Sie diese Seite auf und ab und bemerken Sie, wie sich das Aussehen der Box währenddessen verändert.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Ein noch ausführlicheres Beispiel gibt es unter [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) und [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
