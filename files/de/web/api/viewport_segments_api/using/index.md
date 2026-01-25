---
title: Verwenden der Viewport Segments API
slug: Web/API/Viewport_segments_API/Using
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{DefaultAPISidebar("Viewport Segments API")}}

Dieser Artikel erklärt, wie Sie die [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) verwenden, um responsive Designs zu erstellen, die für verschiedene Größen und Anordnungen von Viewport-Segmenten optimiert sind.

## Das Problem mit faltbaren Geräten

Faltbare Geräte umfassen Smartphones, Tablets und Laptops. Einige falten sich nach innen, wobei das Display in das Innere des Geräts gefaltet wird, und andere falten sich nach außen, wobei das Display das Gerät umhüllt. Faltbare Geräte gibt es in verschiedenen Formen: Einige haben einen tatsächlich faltbaren Bildschirm, während andere separate Bildschirme mit einem physischen Scharnier in der Mitte haben. Sie können im Querformat verwendet werden, mit zwei Bildschirmen nebeneinander, und im Hochformat, mit einem oberen und einem unteren Bildschirm.

In jedem Fall sollen faltbare Gerätebildschirme als unterschiedliche Segmente derselben Anzeigeoberfläche fungieren. Während das faltbare Gerät einer Person nahtlos erscheinen und vollständig flach verwendet werden kann, ähnlich wie ein einzelnes Viewport-Segment, kann ein anderes Gerät eine sichtbare Naht aufweisen und in einem Winkel verwendet werden, der weniger als vollständig offen und flach ist. Dies stellt einige einzigartige Herausforderungen dar. Sie können Ihr Layout für das Display als ein einziges Element optimieren, aber wie können Sie sicherstellen, dass Designelemente genau auf die verschiedenen Segmente passen und nicht in zwei Teile geschnitten werden? Und wie können Sie verhindern, dass Inhalte durch den physischen Falz/Anschluss verdeckt werden?

Die Viewport Segments API bietet Funktionen, mit denen Sie (in CSS und JavaScript) erkennen können, ob der Bildschirm des Benutzers einen Falz oder Anschluss hat, wie groß die verschiedenen Segmente sind, ob sie gleich groß sind und in welcher Ausrichtung sie sich befinden (nebeneinander oder von oben nach unten). Wir werden Ihnen diese Funktionen in den folgenden Abschnitten vorstellen und dann ein vollständiges Beispiel durchgehen, um sie in Aktion zu zeigen.

## Viewport-Segment-Media-Features

Zwei [Media Query](/de/docs/Web/CSS/Guides/Media_queries) Features sind verfügbar, die es ermöglichen zu testen, ob ein Gerät eine spezifische Anzahl von Viewport-Segmenten hat, die horizontal oder vertikal angeordnet sind. Diese sehen so aus:

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

Das {{cssxref("@media/horizontal-viewport-segments")}} Media-Feature erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten hat, die horizontal angeordnet sind, während das {{cssxref("@media/vertical-viewport-segments")}} Media-Feature erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten hat, die vertikal angeordnet sind.

## Viewport-Segment-Umgebungsvariablen

Um ein Layout präzise in die verfügbaren Viewport-Segmente einzupassen, bieten die [Viewport-Segment-Umgebungsvariablen](/de/docs/Web/CSS/Reference/Values/env#viewport-segment-width) Zugriff auf die Abmessungen und die Platzierung jedes Segments innerhalb des gesamten Viewports. Der Browser stellt [Umgebungsvariablen] zur Verfügung, die den Zugriff auf die Breite und Höhe jedes Segments sowie die versetzten Positionen seiner oberen, rechten, unteren und linken Kante ermöglichen:

- `viewport-segment-width`
- `viewport-segment-height`
- `viewport-segment-top`
- `viewport-segment-right`
- `viewport-segment-bottom`
- `viewport-segment-left`

Die {{cssxref("env()")}} Funktion wird verwendet, um auf diese Variablen zuzugreifen, mit dem Namen der Variable und zwei Ganzzahlen, die die Indizes des Segments repräsentieren, für das der Wert zurückgegeben werden soll. Zum Beispiel:

```css
/* Return the width of the top/left segment */
env(viewport-segment-width 0 0)

/* Return the width of the right segment */
env(viewport-segment-width 1 0)

/* Return the width of the bottom segment */
env(viewport-segment-width 0 1)
```

Die Indizes sind beide Ganzzahlen von `0` oder größer. Der erste Wert repräsentiert den horizontalen Indexwert des Segments und der zweite Wert repräsentiert den vertikalen Indexwert des Segments:

![Zwei Geräte-Segmentlayouts; bei einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. Bei einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen nebeneinander Layout wird das linke Segment durch `0 0` repräsentiert und das rechte Segment durch `1 0`.
- In einem vertikalen von oben nach unten Layout wird das obere Segment durch `0 0` repräsentiert und das untere Segment durch `0 1`.

In einem Layout können Sie diese Variablen verwenden, um Ihre Container sauber in die verfügbaren Segmente einzupassen. Zum Beispiel:

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

Hier setzen wir das äußere Wrapper-Element entweder auf ein horizontales oder vertikales Grid-Layout, basierend darauf, ob die Viewport-Segmente horizontal oder vertikal angeordnet sind. Dann setzen wir die linken und oberen Zellen auf die ersten Segmente und platzieren den zweiten Abschnitt in den rechten oder unteren Grid-Zellen.

Wir könnten eine leere mittlere „Falz“-Zelle hinzufügen, um zu verhindern, dass Inhalte durch den Falz verdeckt werden. Wir könnten ihre Dicke berechnen, indem wir die kombinierten Breiten oder Höhen der beiden Seiten von der vollen Viewport-Größe subtrahieren, oder die mittlere Zelle auf `1fr` setzen.

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

Sie können auf Segmentinformationen in JavaScript zugreifen, indem Sie die [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) Eigenschaft verwenden, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect) Objekten zurückgibt, die Zugriff auf die `x`- und `y`-Koordinaten jedes Segments innerhalb des gesamten Viewports sowie deren `width` und `height` bieten.

Zum Beispiel wird dieser Code-Schnipsel durch jedes Segment im Viewport laufen und eine Zeichenkette in der Konsole protokollieren, die die Indexnummer, Breite und Höhe detailliert angibt.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## Ein vollständiges Beispiel

Schauen wir uns die Viewport Segment API-Funktionen in einem realen Beispiel an. Sie können unser Beispiel live unter [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segments-api/) sehen (sehen Sie auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Falls möglich, betrachten Sie das Demo auf einem echten faltbaren Gerät. Entwicklerwerkzeuge in Browsern, die eine visuelle Emulation der mehreren Segmente von faltbaren Geräten ermöglichen, schließen normalerweise keine Emulation der physischen Segmentierung ein.

> [!NOTE]
> Dieses Beispiel ist angepasst von [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) von Alexis Menard und Thomas Steiner, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2024 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

Wir werden den Quellcode in den folgenden Abschnitten durchgehen.

### HTML-Struktur

Das Markup enthält einen Wrapper {{htmlelement("div")}}, der zwei {{htmlelement("section")}} Elemente enthält, die eine grundlegende Listenansicht und eine Detailansicht darstellen, sowie ein Falz-`<div>`, das den Falz zwischen den beiden Segmenten auf einem faltbaren Gerät darstellt.

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

### Selektive Anwendung von Layouts für verschiedene Segmentausrichtungen

In unserem CSS verwenden wir eine Kombination aus Media Queries und Umgebungsvariablen, um responsive Layouts zu erstellen, die sich bequem in die verfügbaren Segmente einfügen.

Zuerst verwenden wir {{cssxref("@media/orientation", "orientation")}} Media-Query-Tests, um ein passendes Flexbox-Layout für die Wrapper-`<div>`-Kinder in jedem möglichen Fall festzulegen — eine `row` für `landscape` Viewports und eine `column` für `portrait` Viewports. Beachten Sie, wie wir auch den Falz-`<div>` zu einem schmalen Streifen in diesen Fällen gesetzt haben, um als Trennlinie zwischen den beiden Inhaltscontainern zu wirken — `20px` breit im `landscape` Layout und `20px` hoch im `portrait` Layout.

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

Als nächstes verwenden wir eine {{cssxref("@media/horizontal-viewport-segments")}} Media Query, um mit dem Fall von faltbaren Geräten umzugehen, bei denen die Segmente nebeneinander angeordnet sind.

Wir setzen den äußeren Wrapper auf ein horizontales Flexbox-Layout, wenn die Viewport-Segmente horizontal angeordnet sind. Wir stellen den linken Container auf eine Breite, die der Breite des linken Segments entspricht (`env(viewport-segment-width 0 0)`) und den rechten Container auf eine Breite, die der Breite des rechten Segments entspricht (`env(viewport-segment-width 1 0)`). Um zu berechnen, wie viel Breite der Falz zwischen den beiden einnimmt, subtrahieren wir den linken Randversatz des rechten Containers vom rechten Randversatz des linken Containers (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

Schließlich verwenden wir eine {{cssxref("@media/vertical-viewport-segments")}} Media Query, um mit dem Fall von faltbaren Geräten umzugehen, bei denen die Segmente von oben nach unten angeordnet sind. Dies verwendet den gleichen Ansatz wie der vorherige Code-Schnipsel, außer dass wir Höhen anstelle von Breiten setzen und Umweltvariablen für Höhe/oben/unten verwenden, um die erforderlichen Werte zurückzugeben.

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

### Berichten der Segmentgröße mit JavaScript

Wir berichten auch die Abmessungen jedes Segments und ändern die Werte, wenn die Bildschirmgröße verändert wird oder sich die [Gerätehaltung](/de/docs/Web/API/Device_Posture_API) oder -ausrichtung ändert.

Zuerst holen wir uns Referenzen zum Wrapper-`<div>` und seinen zwei `<section>`-Element-Kindern (das sind die beiden Container, die wir mit CSS in die zwei Segmente platziert haben).

```js
const wrapperElem = document.querySelector(".wrapper");
const listViewElem = document.querySelector(".list-view");
const detailViewElem = document.querySelector(".detail-view");
```

Als nächstes definieren wir eine `addSegmentOutput()` Funktion, die ein `segments` Array, eine Indexnummer und eine Elementreferenz als Argumente nimmt. Diese Funktion hängt ein Segmentausgabe-`<div>` an das referenzierte Element an. Die Ausgabe enthält eine Überschrift mit der Indexnummer des Viewport-Segments und den Dimensionen dieses Segments.

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

Als nächstes definieren wir eine `reportSegments()` Funktion, die alle zuvor angehängten Segmentausgabe-`<div>`-Elemente entfernt und das `<div>` leert, dann die zuvor definierte `addSegmentOutput()` Funktion basierend auf dem Array der Segmente des Geräts aufruft, das mit [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) abgerufen wurde. Wir überprüfen die Anzahl der vorhandenen Segmente:

- Wenn nur ein Segment vorhanden ist, führen wir `addSegmentOutput()` einmal aus und fügen ein Segmentausgabe-`<div>` zum Wrapper-`<div>` hinzu. Dies wird die Dimensionen des gesamten Viewports berichten.
- Wenn zwei Segmente vorhanden sind, führen wir `addSegmentOutput()` zweimal aus und fügen ein Segmentausgabe-`<div>` zu jedem der `<section>`-Elemente hinzu. Diese werden die Dimensionen des Segments des jeweiligen Segmentausgabe-`<div>`-Elternteils berichten.

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

Schließlich rufen wir die `reportSegments()` Funktion auf und fügen Event-Listener hinzu, um sie in ein paar verschiedenen Kontexten auszuführen:

- Wir führen sie einmal im globalen Scope aus, sodass die Segmentberichte sofort zur Seite hinzugefügt werden, wenn die Seite geladen wird.
- Wir führen sie basierend auf dem [`resize`](/de/docs/Web/API/Window/resize_event) Event aus, um die Segmentberichte zu aktualisieren, wenn die Fenstergröße verändert wird (inklusive Ausrichtungsänderungen).
  - Wir führen sie basierend auf dem `DevicePosture`'s [`change`](/de/docs/Web/API/DevicePosture/change_event) Event aus, um die Segmentberichte zu aktualisieren, wenn sich die Gerätehaltung ändert.

```js
reportSegments();
window.addEventListener("resize", reportSegments);
navigator.devicePosture.addEventListener("change", reportSegments);
```

## Siehe auch

- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
