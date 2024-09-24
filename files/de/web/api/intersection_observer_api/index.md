---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 5c77b329912bd8a428f59111ef546e7e0309dcb4
---

{{DefaultAPISidebar("Intersection Observer API")}}

Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Schnittmenge eines Ziel-Elements mit einem übergeordneten Element oder mit dem {{Glossary("viewport")}} eines obersten Dokuments asynchron zu beobachten.

Historisch gesehen war es schwierig, die Sichtbarkeit eines Elements oder die relative Sichtbarkeit zweier Elemente zueinander zu erkennen. Die Lösungen waren unzuverlässig und neigten dazu, den Browser und die von den Benutzern aufgerufenen Websites zu verlangsamen. Mit der Weiterentwicklung des Internets ist der Bedarf an solchen Informationen gestiegen. Informationen über die Sichtbarkeit sind aus vielen Gründen erforderlich, wie z.B.:

- Verzögertes Laden von Bildern oder anderen Inhalten, während eine Seite gescrollt wird.
- Implementierung von Websites mit "unendlichem Scrollen", bei denen immer mehr Inhalte geladen und dargestellt werden, während Sie scrollen, sodass der Benutzer nicht durch Seiten blättern muss.
- Berichterstattung über die Sichtbarkeit von Anzeigen, um Werbeeinnahmen zu berechnen.
- Entscheidung, ob Aufgaben oder Animationsprozesse ausgeführt werden sollen, basierend darauf, ob der Benutzer das Ergebnis sehen wird.

In der Vergangenheit beinhaltete die Implementierung der Schnittmenge von Elementen Ereignishandler und Schleifen, die Methoden wie {{domxref("Element.getBoundingClientRect()")}} aufrufen, um die benötigten Informationen für jedes betroffene Element zu sammeln. Da all dieser Code im Hauptthread ausgeführt wird, kann schon einer dieser Tests zu Leistungsproblemen führen. Wenn eine Website mit diesen Tests überladen ist, kann dies sehr unangenehm werden.

Betrachten Sie eine Webseite, die unendliches Scrollen verwendet. Sie nutzt eine von einem Anbieter bereitgestellte Bibliothek zur Verwaltung der Anzeigen, die regelmäßig auf der Seite platziert sind, hat hier und da animierte Grafiken und verwendet eine benutzerdefinierte Bibliothek, die Benachrichtigungsfelder und ähnliches zeichnet. Jede dieser Funktionen hat ihre eigenen Routinen zur Erkennung von Schnittmengen, die alle im Hauptthread ausgeführt werden. Der Autor der Website merkt vielleicht gar nicht, dass dies passiert, da er möglicherweise nur wenig über die Funktionsweise der beiden verwendeten Bibliotheken weiß. Wenn der Benutzer die Seite scrollt, werden diese Routinen zur Erkennung von Schnittmengen während des Scroll-Handlings ständig ausgelöst, was zu einer frustrierenden Erfahrung für den Benutzer mit dem Browser, der Website und seinem Computer führt.

Die Intersection Observer API ermöglicht es dem Code, eine Callback-Funktion zu registrieren, die ausgeführt wird, wenn ein bestimmtes Element in die Schnittmenge mit einem anderen Element (oder dem {{Glossary("viewport")}}) eintritt oder aus dieser austritt, oder wenn sich die Schnittmenge zwischen zwei Elementen um einen bestimmten Betrag ändert. Auf diese Weise müssen Websites nichts im Hauptthread tun, um diese Art von Elementschnittmengen zu überwachen, und der Browser kann die Verwaltung von Schnittmengen nach eigenem Ermessen optimieren.

Eine Sache, die die Intersection Observer API nicht kann: Logik auslösen, die auf der genauen Anzahl der überlappenden Pixel basiert oder welche Pixel es sind. Es löst nur den gängigen Anwendungsfall "Wenn sie sich um ungefähr _N_% schneiden, muss ich etwas tun" aus.

## Konzepte und Verwendung des Intersection Observer

Die Intersection Observer API ermöglicht es Ihnen, einen Callback zu konfigurieren, der aufgerufen wird, wenn eine der folgenden Bedingungen eintreten:

- Ein **Ziel**-Element schneidet entweder den Viewport des Geräts oder ein angegebenes Element. Dieses angegebene Element wird in Bezug auf die Intersection Observer API als **Root-Element** oder **Root** bezeichnet.
- Das erste Mal, wenn der Observer anfänglich gebeten wird, ein Ziel-Element zu beobachten.

Typischerweise möchten Sie auf Schnittmengenänderungen in Bezug auf den nächsten scrollbaren Vorfahren des Ziel-Elements achten, oder, wenn das Ziel-Element kein Nachfahre eines scrollbareren Elements ist, auf den Viewport des Geräts. Um auf die Schnittmenge in Bezug auf den Viewport des Geräts zu achten, geben Sie `null` für die `root`-Option an. Lesen Sie weiter für eine detailliertere Erklärung der Intersection Observer-Optionen.

Unabhängig davon, ob Sie den Viewport oder ein anderes Element als Root verwenden, funktioniert die API auf die gleiche Weise, indem sie eine von Ihnen bereitgestellte Callback-Funktion ausführt, wann immer sich die Sichtbarkeit des Ziel-Elements ändert, sodass es die gewünschten Schnittmengen mit dem Root überschreitet.

Der Grad der Schnittmenge zwischen dem Ziel-Element und seinem Root ist das **Schnittmengenverhältnis**. Dies ist eine Darstellung des Prozentsatzes des Ziel-Elements, das als Wert zwischen 0.0 und 1.0 sichtbar ist.

### Erstellen eines Intersection Observer

Erstellen Sie den Intersection Observer, indem Sie seinen Konstruktor aufrufen und ihm eine Callback-Funktion übergeben, die immer dann ausgeführt wird, wenn ein Schwellenwert in die eine oder andere Richtung überschritten wird:

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

Ein Schwellenwert von 1.0 bedeutet, dass die Callback-Funktion aufgerufen wird, wenn 100% des Ziels innerhalb des durch die `root`-Option angegebenen Elements sichtbar sind.

#### Einstellungen des Intersection Observers

Das `options`-Objekt, das in den {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}-Konstruktor übergeben wird, ermöglicht es Ihnen, die Umstände zu kontrollieren, unter denen der Callback des Observers aufgerufen wird. Es enthält die folgenden Felder:

- `root`
  - : Das Element, das als Viewport verwendet wird, um die Sichtbarkeit des Ziels zu überprüfen. Es muss ein Vorfahre des Ziels sein. Standardmäßig ist es der Browser-Viewport, wenn nicht angegeben oder `null`.
- `rootMargin`
  - : Rand um das Root. Kann ähnliche Werte wie die CSS-{{cssxref("margin")}}-Eigenschaft haben, z. B. `"10px 20px 30px 40px"` (oben, rechts, unten, links). Die Werte können Prozentsätze haben. Dieser Satz von Werten dient dazu, jede Seite des Begrenzungsrahmens des Root-Elements zu vergrößern oder zu verkleinern, bevor Schnittmengen berechnet werden. Standardmäßig sind alle Nullen.
- `threshold`
  - : Entweder eine einzelne Zahl oder ein Array von Zahlen, die angeben, bei welchem Prozentsatz der Sichtbarkeit des Ziels der Callback des Observers ausgeführt werden sollte. Wenn Sie nur erkennen möchten, wann die Sichtbarkeit die 50%-Marke überschreitet, können Sie den Wert 0.5 verwenden. Wenn die Callback-Funktion jedes Mal ausgeführt werden soll, wenn die Sichtbarkeit um weitere 25% überschreitet, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] angeben. Der Standard ist 0 (d. h., sobald auch nur ein Pixel sichtbar ist, wird der Callback ausgeführt). Ein Wert von 1.0 bedeutet, dass der Schwellenwert erst als überschritten betrachtet wird, wenn jedes Pixel sichtbar ist.

#### Callbacks für Schnittmengenänderungen

Der Callback, der an den `IntersectionObserver()`-Konstruktor übergeben wird, erhält eine Liste von {{domxref("IntersectionObserverEntry")}}-Objekten und den Observer:

```js
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Jeder Eintrag beschreibt eine Schnittmengenänderung für ein beobachtetes
    // Ziel-Element:
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

Die vom Callback empfangene Listenzuordnung enthält einen Eintrag für jedes Ereignis, bei dem ein Schwellenwert überschritten wurde – mehrere Einträge können gleichzeitig empfangen werden, entweder von mehreren Zielen oder von einem einzelnen Ziel, das in kurzer Zeit mehrere Schwellenwerte überschreitet. Die Einträge werden unter Verwendung einer Warteschlange verteilt, sollten also nach der Reihenfolge sortiert sein, in der sie generiert wurden, aber Sie sollten vorzugsweise {{domxref("IntersectionObserverEntry.time")}} verwenden, um sie korrekt zu ordnen.

Jeder Eintrag in der Liste der Schwellenwerte ist ein {{domxref("IntersectionObserverEntry")}}-Objekt, das einen Schwellenwert beschreibt, der überschritten wurde; das heißt, jeder Eintrag beschreibt, wie viel von einem bestimmten Element mit dem Root-Element in Schnittmenge steht, ob das Element als schneidend betrachtet wird oder nicht, usw. Der Eintrag enthält nur Informationen über diesen bestimmten Moment – wenn Sie Informationen benötigen, die die Verfolgung im Laufe der Zeit erfordern, wie z. B. Scrollrichtung und -geschwindigkeit, müssen Sie dies möglicherweise selbst berechnen, indem Sie die zuvor empfangenen Einträge merken.

Beachten Sie, dass Ihr Callback im Hauptthread ausgeführt wird. Es sollte so schnell wie möglich arbeiten; wenn etwas Zeitaufwendiges zu tun ist, verwenden Sie {{domxref("Window.requestIdleCallback()")}}.

Der folgende Codeausschnitt zeigt einen Callback, der einen Zähler dafür führt, wie oft Elemente von "nicht schneidend" zu "schneidend um mindestens 75%" wechseln. Bei einem Schwellenwert von 0.0 (Standard) wird der Callback [ungefähr](https://www.w3.org/TR/intersection-observer/#dom-intersectionobserverentry-isintersecting) beim Übergang des booleschen Werts von {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} aufgerufen. Der Ausschnitt prüft also zuerst, ob der Übergang ein positiver ist, und ob der {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} über 75% liegt, in welchem Fall der Zähler erhöht wird.

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

#### Ziel-Element zum Beobachten festlegen

Sobald Sie den Observer erstellt haben, müssen Sie ihm ein Ziel-Element zuweisen, das beobachtet werden soll:

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// der Callback, den wir für den Observer eingerichtet haben, wird nun zum ersten Mal ausgeführt
// er wartet, bis wir unserem Observer ein Ziel zuweisen (selbst wenn das Ziel derzeit nicht sichtbar ist)
```

Wann immer das Ziel einen für den `IntersectionObserver` angegebenen Schwellenwert erreicht, wird der Callback aufgerufen.

Außerdem beachten Sie, dass, wenn Sie die `root`-Option angegeben haben, das Ziel ein Nachfahre des Root-Elements sein muss.

### Wie Schnittmengen berechnet werden

Alle von der Intersection Observer API betrachteten Bereiche sind Rechtecke; Elemente, die unregelmäßig geformt sind, werden als ein Rechteck betrachtet, das alle Teile des Elements umschließt. Wenn der sichtbare Teil eines Elements nicht rechteckig ist, wird das Schnittmengenrechteck als das kleinste Rechteck betrachtet, das alle sichtbaren Teile des Elements enthält.

Es ist nützlich, ein wenig darüber zu verstehen, wie die verschiedenen Eigenschaften, die von {{domxref("IntersectionObserverEntry")}} bereitgestellt werden, eine Schnittmenge beschreiben.

#### Der Schnittwurzel und der Wurzelrand

Bevor wir die Schnittmenge eines Elements mit einem Container verfolgen können, müssen wir wissen, was dieser Container ist. Dieser Container ist die **Schnittwurzel** oder das **Root-Element**. Dies kann entweder ein bestimmtes Element im Dokument sein, das ein Vorfahre des zu beobachtenden Elements ist, oder `null`, um den Viewport des Dokuments als Container zu verwenden.

Das **_Root-Schnittrechteck_** ist das Rechteck, das zur Überprüfung gegen das Ziel oder die Ziele verwendet wird. Dieses Rechteck wird folgendermaßen bestimmt:

- Wenn die Schnittwurzel die implizite Wurzel ist (d. h. das oberste {{domxref("Document")}}), entspricht das Root-Schnittrechteck dem Rechteck des Viewports.
- Wenn die Schnittwurzel einen Überlauf-Clip hat, entspricht das Root-Schnittrechteck dem Inhaltsbereich des Root-Elements.
- Andernfalls entspricht das Root-Schnittrechteck dem Begrenzungsrahmen der Schnittwurzel (wie durch Aufrufen von {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} darauf zurückgegeben).

Das Root-Schnittrechteck kann weiter angepasst werden, indem der **Root-Rand**, `rootMargin`, beim Erstellen des {{domxref("IntersectionObserver")}} gesetzt wird. Die Werte in `rootMargin` definieren Offsets, die zu jeder Seite des Begrenzungsrahmens des Schnittwurzel hinzugefügt werden, um die endgültigen Grenzen des Schnittwurzel zu erstellen (die bei der Ausführung des Callback in {{domxref("IntersectionObserverEntry.rootBounds")}} offen gelegt werden). Positive Werte vergrößern den Rahmen, während negative Werte ihn verkleinern.

Im folgenden Beispiel haben wir ein scrollbareres Kästchen und ein Element, das anfangs nicht sichtbar ist. Sie können den rechten Rand des Root anpassen und sehen:

- Wenn der Rand negativ ist, wird das rote Element, selbst wenn es sichtbar wird, immer noch nicht als mit dem Root schneidend betrachtet, weil der Begrenzungsrahmen des Root verkleinert wird.
- Wenn der Rand positiv ist, wird das rote Element als mit dem Root schneidend betrachtet, selbst wenn es nicht sichtbar ist, weil es mit dem Randbereich des Root schneidet.

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
    Setzen Sie den rechten Rand des Root:
    <input id="margin" type="number" value="0" step="5" />px
  </label>
  <label>
    Sie können auch diesen Schieberegler verwenden, um den Container zu scrollen:
    <input id="scrollAmount" type="range" min="0" max="300" value="0" />
  </label>
  <p>Aktuelles Schnittmengenverhältnis: <span id="output"></span></p>
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

Anstatt jede winzige Änderung zu melden, wie viel ein Ziel-Element sichtbar ist, verwendet die Intersection Observer API **Schwellenwerte**. Wenn Sie einen Observer erstellen, können Sie eine oder mehrere numerische Werte angeben, die Prozentsätze des Ziel-Elements darstellen, die sichtbar sind. Dann meldet die API nur Sichtbarkeitsänderungen, die diese Schwellenwerte überschreiten.

Wenn Sie beispielsweise benachrichtigt werden möchten, sobald die Sichtbarkeit eines Ziels vorwärts oder rückwärts durch jede 25%-Marke geht, würden Sie das Array \[0, 0.25, 0.5, 0.75, 1] als Liste der Schwellenwerte angeben, wenn Sie den Observer erstellen.

Wenn der Callback aufgerufen wird, erhält er eine Liste von `IntersectionObserverEntry`-Objekten, eines für jedes beobachtete Ziel, das den Grad, in dem es mit dem Root schneidet, so geändert hat, dass der exponierte Anteil über einen der Schwellenwerte geht, in beide Richtungen.

Sie können sehen, ob sich das Ziel _derzeit_ mit dem Root schneidet, indem Sie das {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}}-Eigenschaft des Eintrags betrachten; wenn ihr Wert `true` ist, schneidet das Ziel mindestens teilweise das Root-Element oder Dokument. Dies ermöglicht es Ihnen zu bestimmen, ob der Eintrag einen Übergang von Elementen darstellt, die schneiden, zu Elementen, die nicht mehr schneiden, oder einen Übergang von nicht schneiden zu schneiden.

Beachten Sie, dass es möglich ist, ein null-Schnittrechteck zu haben, was passieren kann, wenn die Schnittmenge genau entlang der Grenze zwischen den beiden ist oder der Bereich von {{domxref("IntersectionObserverEntry.boundingClientRect", "boundingClientRect")}} null ist. Dieser Zustand, in dem sich das Ziel und das Root eine Grenzlinie teilen, wird nicht als ausreichend betrachtet, um in einen schneidenden Zustand überzugehen.

Um ein Gefühl dafür zu bekommen, wie Schwellenwerte funktionieren, versuchen Sie, das Feld unten zu scrollen. Jedes farbige Feld darin zeigt den Prozentsatz von sich, der in allen vier Ecken sichtbar ist, sodass Sie sehen können, wie sich diese Verhältnisse im Laufe der Zeit ändern, wenn Sie den Container scrollen. Jedes Feld hat einen anderen Satz von Schwellenwerten:

- Das erste Feld hat einen Schwellenwert für jeden Prozentsatz der Sichtbarkeit; das heißt, das {{domxref("IntersectionObserver.thresholds")}}-Array ist `[0, 0.01, 0.02, /*…,*/ 0.99, 1]`.
- Das zweite Feld hat einen einzigen Schwellenwert bei der 50%-Marke.
- Das dritte Feld hat Schwellenwerte alle 10% der Sichtbarkeit (0%, 10%, 20% usw.).
- Das letzte Feld hat Schwellenwerte je 25%.

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

  // Optionen für die Beobachter

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };

  // Ein Array von Schwellenwertsets für jedes der Felder. Die
  // Schwellenwerte des ersten Felds werden programmgesteuert
  // festgelegt, da es so viele davon gibt (für jeden Prozentsatz
  // der Sichtbarkeit).

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0],
  ];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSets[0].push(i);
  }

  // Jedes Feld hinzufügen und einen neuen Beobachter für jedes
  // Erstellen

  for (let i = 0; i < 4; i++) {
    let template = document
      .querySelector("#boxTemplate")
      .content.cloneNode(true);
    let boxID = `box${i + 1}`;
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // Den Beobachter für dieses Feld einrichten

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(
      intersectionCallback,
      observerOptions,
    );
    observers[i].observe(document.querySelector(`#${boxID}`));
  }

  // Zum Startpunkt scrollen

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

#### Zuschnitt und das Schnittrechteck

Der Browser berechnet das endgültige Schnittrechteck wie folgt; dies wird alles für Sie erledigt, aber es kann hilfreich sein, diese Schritte zu verstehen, um besser zu verstehen, wann genau Schnittstellen auftreten.

1. Das Begrenzungsrechteck des Ziel-Elements (das ist das kleinste Rechteck, das die Begrenzungsboxen aller Komponenten, die das Element bilden, vollständig umschließt) wird durch Aufrufen von {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} auf das Ziel erhalten. Dies ist das größte, das das Schnittrechteck sein könnte. Die verbleibenden Schritte entfernen alle Teile, die keine Befugnis haben.
2. Beginnend am unmittelbaren übergeordneten Block des Ziels und sich nach außen bewegend, wird der Zuschnitt jedes enthaltenden Blocks (falls vorhanden) auf das Schnittrechteck angewendet. Der Zuschnitt eines Blocks wird basierend auf der Schnittmenge der beiden Blocks und dem Zuschnittmodus bestimmt, der (falls vorhanden) durch die {{cssxref("overflow")}}-Eigenschaft angegeben wird. Das Festlegen von `overflow` auf alles außer `visible` verursacht das Zuschneiden.
3. Wenn eines der enthaltenen Elemente die Wurzel eines verschachtelten Browsing-Kontexts ist (wie das Dokument, das in einem {{HTMLElement("iframe")}} enthalten ist), wird das Schnittrechteck auf den Viewport des enthaltenen Kontextes zugeschnitten, und die Rekursion aufgehört durch den Container mit dem nächsten enthaltenden Block. Wenn also die oberste Ebene eines `<iframe>` erreicht wird, wird das Schnittrechteck auf dessen Viewport zugeschnitten, und dann ist das übergeordnete Element des Rahmens der nächste Block, durch den nach oben durch den Schnittwurzel rekursiert wird.
4. Wenn die Rekursion nach oben den Schnittwurzel erreicht, wird das resultierende Rechteck auf den Koordinatenraum des Schnittwurzel abgebildet.
5. Das resultierende Rechteck wird dann durch Schneiden mit dem [Root-Schnittrechteck](#der_schnittwurzel_und_der_wurzelrand) aktualisiert.
6. Dieses Rechteck wird schließlich auf den Koordinatenraum des Ziel-{{domxref("document")}} abgebildet.

## Schnittstellen

- {{domxref("IntersectionObserver")}}
  - : Die primäre Schnittstelle für die Intersection Observer API. Bietet Methoden zum Erstellen und Verwalten eines Observers, der jede Anzahl von Ziel-Elementen für dieselbe Schnittkonfiguration beobachten kann. Jeder Observer kann asynchron Änderungen in der Schnittmenge zwischen einem oder mehreren Ziel-Elementen und einem gemeinsamen Vorfahrenelement oder mit ihrer obersten {{domxref("Document")}}-{{Glossary('viewport')}} beobachten. Der Vorfahre oder Viewport wird als **Root** bezeichnet.
- {{domxref("IntersectionObserverEntry")}}
  - : Beschreibt die Schnittmenge zwischen dem Ziel-Element und seinem Root-Container zu einem bestimmten Übergangszeitpunkt. Objekte dieses Typs können nur auf zwei Arten erhalten werden: als Eingabe für Ihren `IntersectionObserver`-Callback oder durch Aufrufen von {{domxref("IntersectionObserver.takeRecords()")}}.

## Ein einfaches Beispiel

Dieses einfache Beispiel bewirkt, dass ein Ziel-Element seine Farbe und Transparenz ändert, während es mehr oder weniger sichtbar wird. Bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) finden Sie ein umfassenderes Beispiel, das zeigt, wie Sie die Sichtbarkeit eines Satzes von Elementen (z. B. Anzeigen) zeitlich steuern können, um der Benutzerin oder dem Benutzer Statistiken zu erfassen oder Elemente zu aktualisieren.

### HTML

Das HTML für dieses Beispiel ist sehr kurz, mit einem primären Element, das die Box ist, die wir anpeilen (mit der kreativen ID `"box"`) und einigen Inhalten innerhalb der Box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

Das CSS ist für die Zwecke dieses Beispiels nicht besonders wichtig; es legt das Element fest und legt fest, dass die {{cssxref("background-color")}}- und {{cssxref("border")}}-Attribute an [CSS transitions](/de/docs/Web/CSS/CSS_transitions) teilnehmen können, die wir verwenden, um die Änderungen an dem Element zu beeinflussen, während es mehr oder weniger verdeckt wird.

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

Schließlich werfen wir einen Blick auf den JavaScript-Code, der die Intersection Observer API verwendet, um die Dinge zum Laufen zu bringen.

#### Einrichtung

Zuerst müssen wir einige Variablen vorbereiten und den Observer installieren.

```js
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgb(40 40 190 / ratio)";
let decreasingColor = "rgb(190 40 40 / ratio)";

// Setze Dinge auf
window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector("#box");

    createObserver();
  },
  false,
);
```

Die Festkonstanten und Variablen, die wir hier eingerichtet haben, sind:

- `numSteps`
  - : Eine Konstante, die angibt, wie viele Schwellenwerte wir zwischen einem Sichtbarkeitsverhältnis von 0.0 und 1.0 haben möchten.
- `prevRatio`
  - : Diese Variable wird verwendet, um aufzuzeichnen, was das Sichtbarkeitsverhältnis das letzte Mal war, als ein Schwellenwert überschritten wurde; dies wird es uns ermöglichen, herauszufinden, ob das Ziel-Element mehr oder weniger sichtbar wird.
- `increasingColor`
  - : Ein String, der eine Farbe definiert, die wir auf das Ziel-Element anwenden, wenn das Sichtbarkeitsverhältnis zunimmt. Das Wort "ratio" in diesem String wird durch das aktuelle Sichtbarkeitsverhältnis des Ziels ersetzt, sodass das Element nicht nur die Farbe, sondern auch zunehmend durchscheinend wird, je weniger es verdeckt wird.
- `decreasingColor`
  - : Ähnlich wird ein String, der eine Farbe definiert, angewendet, wenn das Sichtbarkeitsverhältnis abnimmt.

Wir rufen {{domxref("EventTarget.addEventListener", "Window.addEventListener()")}} auf, um das Lauschen auf das {{domxref("Window/load_event", "load")}}-Ereignis zu starten; sobald die Seite geladen wurde, erhalten wir einen Verweis auf das Element mit der ID `"box"` unter Verwendung von {{domxref("Document.querySelector", "querySelector()")}}, dann rufen wir die `createObserver()`-Methode auf, die wir in einem Moment erstellen werden, um den neuen Observer tatsächlich zu erstellt und es zu installieren.

#### Erstellen des Intersection Observer

Die `createObserver()`-Methode wird aufgerufen, wenn das Laden der Seite vollständig ist, um tatsächlich den neuen {{domxref("IntersectionObserver")}} zu erstellen und den Prozess des Beobachtens des Ziel-Elements zu starten.

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

Dies beginnt mit der Einrichtung eines `options`-Objekts, das die Einstellungen für den Observer enthält. Wir wollen Änderungen der Sichtbarkeit des Ziel-Elements im Verhältnis zum Viewport des Dokuments beobachten, also ist `root` `null`. Wir benötigen keinen Rand, sodass der Rand-Offset, `rootMargin`, als "0px" angegeben ist. Dies führt dazu, dass der Observer Änderungen in der Schnittmenge zwischen den Begrenzungen des Ziel-Elements und denen des Viewport ohne zusätzlichen (oder subtrahierten) Raum beobachtet.

Die Liste der Sichtbarkeitsverhältnis-Schwellenwerte, `threshold`, wird durch die Funktion `buildThresholdList()` erstellt. Die Liste der Schwellenwerte wird in diesem Beispiel programmgesteuert erstellt, da es sich um eine Reihe von Schwellenwerten handelt und die Anzahl anpassbar sein soll.

Sobald `options` bereit ist, erstellen wir den neuen Observer, indem wir den {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}-Konstruktor aufrufen, eine Funktion angeben, die aufgerufen wird, wenn die Schnittmenge eine unserer Schwellenwerte überschreitet, `handleIntersect()`, und unser Set von Optionen. Dann rufen wir {{domxref("IntersectionObserver.observe", "observe()")}} auf dem zurückgegebenen Beobachter auf und geben ihm das gewünschte Ziel-Element ein.

Wir könnten uns dafür entscheiden, mehrere Elemente auf Änderungen der Sichtbarkeitsschnittstellen im Hinblick auf den Viewport zu überwachen, indem wir `observer.observe()` für jedes dieser Elemente aufrufen, wenn wir dies wünschen.

#### Erstellen des Arrays der Schwellenverhältnisse

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

Dies erstellt das Array der Schwellenwerte – jeder davon ist ein Verhältnis zwischen 0.0 und 1.0, durch Schieben des Wertes `i/numSteps` in das `thresholds`-Array für jede ganze Zahl `i` zwischen 1 und `numSteps`. Es schiebt auch 0, um diesen Wert zu berücksichtigen. Das Ergebnis, gegeben den Standardwert von `numSteps` (20), ist die folgende Liste von Schwellenwerten:

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

Wir könnten natürlich das Array der Schwellenwerte fest in unseren Code codieren, und oft werden Sie das tun. Aber dieses Beispiel lässt Raum für das Hinzufügen von Konfigurationssteuerungen zur Anpassung der Granularität, zum Beispiel.

#### Umgang mit Schnittmengenänderungen

Wenn der Browser erkennt, dass das Ziel-Element (in unserem Fall das mit der ID `"box"`) enthüllt oder verdeckt wurde, sodass das Sichtbarkeitsverhältnis einen unserer Schwellenwerte in unserer Liste überschreitet, ruft es unsere Handler-Funktion `handleIntersect()`:

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

Für jeden {{domxref("IntersectionObserverEntry")}} in der Liste `entries` schauen wir, ob das {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} des Eintrags nach oben geht; wenn dies der Fall ist, setzen wir das {{cssxref("background-color")}} des Ziels auf den String in `increasingColor` (denken Sie daran, es ist `"rgb(40 40 190 / ratio)"`), ersetzt das Wort "ratio" mit dem `intersectionRatio` des Eintrags. Das Ergebnis: nicht nur die Farbe wird geändert, sondern auch die Transparenz des Ziel-Elements ändert sich; wenn das Schnittverhältnis abnimmt, nimmt der Alphawert der Hintergrundfarbe ab, was zu einem Element führt, das durchscheinender ist.

In ähnlicher Weise verwenden wir, wenn das `intersectionRatio` abnimmt, den String `decreasingColor` und ersetzen das Wort "ratio" durch das `intersectionRatio`, bevor wir das `background-color` des Ziel-Elements setzen.

Schließlich, um zu verfolgen, ob sich das Schnittverhältnis nach oben oder unten bewegt, merken wir uns das aktuelle Verhältnis in der Variable `prevRatio`.

### Ergebnis

Im Folgenden befindet sich der resultierende Inhalt. Scrollen Sie auf dieser Seite nach oben und unten und beachten Sie, wie sich das Erscheinungsbild der Box ändert, während Sie dies tun.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Es gibt ein noch umfassenderes Beispiel bei [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- {{domxref("IntersectionObserver")}} und {{domxref("IntersectionObserverEntry")}}
