---
title: Verwendung der Viewport-Segmente-API
slug: Web/API/Viewport_segments_API/Using
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{DefaultAPISidebar("Viewport Segments API")}}

Dieser Artikel erklärt, wie Sie die [Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API) verwenden, um responsive Designs zu erstellen, die für verschiedene Größen und Anordnungen von Viewport-Segmenten optimiert sind.

## Das Problem mit faltbaren Geräten

Faltbare Geräte umfassen Smartphones, Tablets und Laptops. Einige falten sich nach innen, wobei das Display in das Innere des Geräts gefaltet wird, und einige falten sich nach außen, wobei das Display das Gerät umwickelt. Faltbare Geräte gibt es in verschiedenen Formen: Einige haben einen tatsächlichen faltbaren Bildschirm, während andere separate Bildschirme mit einem physischen Scharnier in der Mitte haben. Sie können im Querformat verwendet werden, mit zwei Bildschirmen nebeneinander, und im Hochformat, mit einem oberen und einem unteren Bildschirm.

Unabhängig vom Fall sollen die Displays von faltbaren Geräten als unterschiedliche Segmente derselben Anzeigefläche fungieren. Während das faltbare Gerät einer Person nahtlos erscheinen und vollständig flach verwendet werden kann, ähnlich einem einsegmentigen Viewport, kann ein anderes einen sichtbaren Übergang haben und in einem Winkel verwendet werden, der weniger als ein vollständig offener, flacher Bildschirm ist. Dies stellt einige einzigartige Herausforderungen dar. Sie können Ihr Layout für das Display als eine Einheit optimieren, aber wie können Sie sicherstellen, dass Designelemente auf die verschiedenen Segmente passen und nicht in zwei Teile zerschnitten werden? Und wie können Sie verhindern, dass Inhalte durch die physische Falte/Verbindung verdeckt werden?

Die Viewport-Segmente-API bietet Funktionen, mit denen Sie (in CSS und JavaScript) erkennen können, ob der Bildschirm des Benutzers eine Falte oder Verbindung aufweist, welche Größe die verschiedenen Segmente haben, ob sie die gleiche Größe haben und in welcher Ausrichtung sie sich befinden (nebeneinander oder oben-unten). Wir werden Ihnen diese Funktionen in den folgenden Abschnitten vorstellen und anschließend ein vollständiges Beispiel durchgehen, um sie in Aktion zu zeigen.

## Medienfunktion für Viewport-Segmente

Zwei [Media-Query](/de/docs/Web/CSS/CSS_media_queries)-Funktionen stehen zur Verfügung, die es ermöglichen, zu testen, ob ein Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die horizontal oder vertikal angeordnet sind. Diese sehen so aus:

```css
/* Segments are laid out horizontally. */
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  /* ... */
}

/* Segments are laid out vertically. */
@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  /* ... */
}
```

Die Medienfunktion {{cssxref("@media/horizontal-viewport-segments")}} erkennt, ob das Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die horizontal angeordnet sind, während die Medienfunktion {{cssxref("@media/vertical-viewport-segments")}} erkennt, ob das Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die vertikal angeordnet sind.

## Umgebungsvariablen für Viewport-Segmente

Um ein Layout präzise in die verfügbaren Viewport-Segmente zu passen, bieten die [Umgebungsvariablen für Viewport-Segmente](/de/docs/Web/CSS/Reference/Values/env#viewport-segment-width) Zugriff auf die Abmessungen und die Platzierung jedes Segments innerhalb des gesamten Viewports. Der Browser stellt [Umgebungsvariablen] zur Verfügung, die Zugriff auf die Breite und Höhe jedes Segments sowie auf die Versatzpositionen seiner oberen, rechten, unteren und linken Kanten ermöglichen:

- `viewport-segment-width`
- `viewport-segment-height`
- `viewport-segment-top`
- `viewport-segment-right`
- `viewport-segment-bottom`
- `viewport-segment-left`

Die Funktion {{cssxref("env()")}} wird verwendet, um auf diese Variablen zuzugreifen, mit dem Namen der Variablen und zwei Ganzzahlen, die die Indizes des Segments darstellen, für das der Wert zurückgegeben werden soll. Zum Beispiel:

```css
/* Return the width of the top/left segment */
env(viewport-segment-width 0 0)

/* Return the width of the right segment */
env(viewport-segment-width 1 0)

/* Return the width of the bottom segment */
env(viewport-segment-width 0 1)
```

Die Indizes sind beide Ganzzahlen von `0` oder größer. Der erste Wert repräsentiert den horizontalen Indexwert des Segments, und der zweite Wert repräsentiert den vertikalen Indexwert des Segments:

![Zwei Layouts von Gerätesegmenten; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen Layout nebeneinander wird das linke Segment durch `0 0` repräsentiert, und das rechte Segment wird durch `1 0` repräsentiert.
- In einem vertikalen Layout von oben nach unten wird das obere Segment durch `0 0` repräsentiert, und das untere Segment wird durch `0 1` repräsentiert.

In einem Layout können Sie diese Variablen verwenden, um Ihre Container so anzupassen, dass sie genau in die verfügbaren Segmente passen. Zum Beispiel:

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    display: grid;
    grid-template: "left fold right";
    grid-column: env(viewport-segment-width 0 0) env(viewport-segment-width 1 0);
  }
  .firstSection {
    grid-area: left;
  }
  .secondSection {
    grid-area: right;
  }
}

@media (vertical-viewport-segments: 2) {
  .wrapper {
    display: grid;
    grid-template:
      "top"
      "bottom";
    grid-row: env(viewport-segment-height 0 1) env(viewport-segment-width 0 0);
  }
  .firstSection {
    grid-area: top;
  }
  .secondSection {
    grid-area: bottom;
  }
}
```

Hier setzen wir den äußeren Rahmen entweder auf ein horizontales oder vertikales Grid-Layout, basierend darauf, ob die Viewport-Segmente horizontal oder vertikal angeordnet sind. Wir setzen dann die linken und oberen Zellen auf die ersten Segmente und platzieren den zweiten Abschnitt in den rechten oder unteren Grid-Zellen.

Wir könnten eine leere mittlere "Falte"-Zelle hinzufügen, um zu verhindern, dass Inhalte durch die Falte verdeckt werden. Wir könnten ihre Dicke berechnen, indem wir die kombinierten Breiten oder Höhen der beiden Seiten von der gesamten Viewport-Größe abziehen, oder die mittlere Zelle auf `1fr` setzen.

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    grid-template: "left fold right";
    grid-column: env(viewport-segment-width 0 0)
      calc(
        100vw -
          (env(viewport-segment-width 0 0) + env(viewport-segment-width 1 0))
      )
      env(viewport-segment-width 1 0);
  }
}

@media (vertical-viewport-segments: 2) {
  .wrapper {
    grid-template:
      "top"
      "fold"
      "bottom";
    grid-row: env(viewport-segment-height 0 1) 1fr
      env(viewport-segment-width 0 0);
  }
}
```

## Zugriff auf Segmentinformationen in JavaScript

Sie können auf Segmentinformationen in JavaScript über die Eigenschaft [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) zugreifen, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurückgibt, die Zugriff auf die `x`- und `y`-Koordinaten jedes Segments innerhalb des gesamten Viewports sowie deren `width` und `height` bieten.

Zum Beispiel wird dieses Snippet durch jedes Segment im Viewport schleifen und eine Zeichenfolge in die Konsole ausgeben, die die Indexnummer, Breite und Höhe detailliert beschreibt.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## Ein vollständiges Beispiel

Schauen wir uns die Funktionen der Viewport-Segment-API in einem echten Beispiel an. Sie können unser Beispiel live bei [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segments-api/) sehen (sehen Sie sich auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api) an). Wenn möglich, sehen Sie sich die Demo auf einem echten faltbaren Gerät an. Die Entwicklertools des Browsers, die eine visuelle Emulation der mehrfachen Segmente von faltbaren Geräten ermöglichen, beinhalten im Allgemeinen keine Emulation der physischen Segmentierung.

> [!NOTE]
> Dieses Beispiel wurde aus dem [Ursprungsversuch für faltbare APIs](https://developer.chrome.com/blog/foldable-apis-ot) von Alexis Menard und Thomas Steiner adaptiert, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2024 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

Wir werden den Quellcode in den folgenden Abschnitten durchgehen.

### HTML-Struktur

Das Markup enthält einen Wrapper-{{htmlelement("div")}}, der zwei {{htmlelement("section")}}-Elemente beherbergt, die eine grundlegende Listenansicht und eine Detailansicht darstellen, sowie einen "Fold"-`<div>`, der die Falte zwischen den beiden Segmenten auf einem faltbaren Gerät repräsentiert.

```html
<div class="wrapper">
  <section class="list-view">
    <!-- ... -->
  </section>
  <div class="fold"></div>
  <section class="detail-view">
    <!-- ... -->
  </section>
</div>
```

### Selektives Anwenden von Layouts für unterschiedliche Segmentausrichtungen

In unserem CSS verwenden wir eine Kombination aus Media-Queries und Umgebungsvariablen, um responsive Layouts zu erstellen, die bequem in die verfügbaren Segmente passen.

Zuerst verwenden wir {{cssxref("@media/orientation", "orientation")}}-Media-Query-Tests, um ein geeignetes Flexbox-Layout für die Wrapper-`<div>`-Kinder in jedem Fall zu setzen — eine `row` für `landscape`-Viewports und eine `column` für `portrait`-Viewports. Beachten Sie, wie wir auch das "Fold"-`<div>` auf einen schmalen Streifen in diesen Fällen gesetzt haben, um als Trennlinie zwischen den beiden Inhalt-Containern zu fungieren — `20px` breit im `landscape`-Layout und `20px` hoch im `portrait`-Layout.

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (orientation: landscape) {
  .wrapper {
    flex-direction: row;
  }

  .list-view,
  .detail-view {
    flex: 1;
  }

  .fold {
    height: 100%;
    width: 20px;
  }
}

@media (orientation: portrait) {
  .wrapper {
    flex-direction: column;
  }

  .list-view,
  .detail-view {
    flex: 1;
  }

  .fold {
    height: 20px;
  }
}
```

Als nächstes verwenden wir eine {{cssxref("@media/horizontal-viewport-segments")}}-Media-Query, um den Fall von faltbaren Geräten zu handhaben, bei denen die Segmente nebeneinander liegen.

Wir setzen den äußeren Wrapper auf ein horizontales Flexbox-Layout, wenn die Viewport-Segmente horizontal angeordnet sind. Wir setzen den linken Container auf eine Breite, die der Breite des linken Segments entspricht (`env(viewport-segment-width 0 0)`), und den rechten Container auf eine Breite, die der Breite des rechten Segments entspricht (`env(viewport-segment-width 1 0)`). Um zu berechnen, wie viel Breite die Falte dazwischen einnimmt, ziehen wir den linken Randversatz des rechten Containers vom rechten Randversatz des linken Containers ab (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  .list-view {
    width: env(viewport-segment-width 0 0);
  }

  .fold {
    width: calc(
      env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)
    );
    background-color: black;
    height: 100%;
  }

  .detail-view {
    width: env(viewport-segment-width 1 0);
  }
}
```

Schließlich verwenden wir eine {{cssxref("@media/vertical-viewport-segments")}}-Media-Query, um den Fall von faltbaren Geräten zu handhaben, bei denen die Segmente von oben nach unten angeordnet sind. Dies verwendet denselben Ansatz wie der vorherige Codeausschnitt, außer dass wir Höhen statt Breiten setzen und die Umgebungsvariablen für Höhe/Oben/Unten verwenden, um die benötigten Werte zurückzugeben.

```css
@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  .list-view {
    height: env(viewport-segment-height 0 0);
  }

  .fold {
    width: 100%;
    height: calc(
      env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0)
    );
    background-color: black;
  }

  .detail-view {
    height: env(viewport-segment-height 0 1);
  }
}
```

### Bericht über die Segmentgröße mit JavaScript

Wir berichten auch über die Abmessungen jedes Segments und ändern die Werte, wenn der Bildschirm geändert wird oder sich die [Gerätehaltung](/de/docs/Web/API/Device_Posture_API) oder die Ausrichtung ändert.

Zuerst greifen wir auf Referenzen zum Wrapper-`<div>` und seinen beiden `<section>`-Element-Kindern zu (dies sind die beiden Container, die wir mit CSS in die beiden Segmente platziert haben).

```js
const wrapperElem = document.querySelector(".wrapper");
const listViewElem = document.querySelector(".list-view");
const detailViewElem = document.querySelector(".detail-view");
```

Als nächstes definieren wir eine `addSegmentOutput()`-Funktion, die ein `segments`-Array, eine Indexnummer und eine Elementreferenz als Argumente nimmt. Diese Funktion fügt dem referenzierten Element ein Segmentausgabe-`<div>` hinzu. Die Ausgabe enthält eine Überschrift mit der Indexnummer des Viewport-Segments und den Abmessungen dieses Segments.

```js
function addSegmentOutput(segments, i, elem) {
  const segment = segments[i];

  const divElem = document.createElement("div");
  divElem.className = "segment-output";

  elem.appendChild(divElem);

  divElem.innerHTML = `<h2>Viewport segment ${i}</h2>
  <p>${segment.width}px x ${segment.height}px</p>`;
}
```

Als nächstes definieren wir eine `reportSegments()`-Funktion, die alle zuvor hinzugefügten Segmentausgabe-`<div>`-Elemente entfernt und das `<div>` leert, dann ruft sie die zuvor definierte `addSegmentOutput()`-Funktion auf, basierend auf dem Array der Segmente des Geräts, das mit [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) abgerufen wurde. Wir überprüfen die Anzahl der vorhandenen Segmente:

- Wenn nur ein Segment vorhanden ist, führen wir `addSegmentOutput()` einmal aus und fügen ein Segmentausgabe-`<div>` zum Wrapper-`<div>` hinzu. Dies wird die Abmessungen des gesamten Viewports berichten.
- Wenn zwei Segmente vorhanden sind, führen wir `addSegmentOutput()` zweimal aus, fügen ein Segmentausgabe-`<div>` zu jedem der `<section>`-Elemente hinzu. Diese berichten über die Abmessungen der Segmente des jeweiligen Segmentausgabe-`<div>`-Elternteils.

```js
function reportSegments() {
  // Remove all previous segment output elements before adding more
  document.querySelectorAll(".segment-output").forEach((elem) => elem.remove());

  const segments = window.viewport.segments;

  if (segments.length === 1) {
    addSegmentOutput(segments, 0, wrapperElem);
  } else {
    addSegmentOutput(segments, 0, listViewElem);
    addSegmentOutput(segments, 1, detailViewElem);
  }
}
```

Schließlich rufen wir die `reportSegments()`-Funktion auf und fügen Event-Listener hinzu, um sie in ein paar verschiedenen Kontexten auszuführen:

- Wir führen sie einmal im globalen Bereich aus, sodass die Segmentberichte der Seite hinzugefügt werden, sobald die Seite geladen wird.
- Wir führen sie basierend auf dem [`resize`](/de/docs/Web/API/Window/resize_event)-Event aus, um die Segmentberichte zu aktualisieren, wenn das Fenster angepasst wird (was auch Änderungen der Ausrichtung umfasst).
  - Wir führen sie basierend auf dem `DevicePosture`-[`change`](/de/docs/Web/API/DevicePosture/change_event)-Event aus, um die Segmentberichte zu aktualisieren, wenn sich die Gerätehaltung ändert.

```js
reportSegments();
window.addEventListener("resize", reportSegments);
navigator.devicePosture.addEventListener("change", reportSegments);
```

## Siehe auch

- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
