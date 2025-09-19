---
title: Verwendung der Viewport Segments API
slug: Web/API/Viewport_segments_API/Using
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{DefaultAPISidebar("Viewport Segments API")}}

Dieser Artikel erklärt, wie Sie die [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) verwenden, um responsive Designs zu erstellen, die für verschiedene Viewport-Segmentgrößen und -anordnungen optimiert sind.

## Das Problem mit faltbaren Geräten

Faltbare Geräte umfassen Smartphones, Tablets und Laptops. Einige falten sich nach innen, wobei das Display in das Innere des Geräts gefaltet wird, und einige falten sich nach außen, wobei das Display um das Gerät herum verläuft. Faltbare Geräte gibt es in verschiedenen Formen: Einige haben einen tatsächlich faltbaren Bildschirm, während andere separate Bildschirme mit einem physischen Scharnier in der Mitte haben. Sie können im Querformat mit zwei nebeneinander liegenden Bildschirmen oder im Hochformat mit einem oberen und einem unteren Bildschirm verwendet werden.

Unabhängig vom Fall sollen die Displays faltbarer Geräte als verschiedene Segmente derselben Displayfläche fungieren. Während das faltbare Gerät einer Person nahtlos erscheinen und vollständig flach verwendet werden kann, ähnlich wie ein einzelner segmentierter Viewport, kann ein anderes eine sichtbare Naht haben und in einem Winkel verwendet werden, der weniger als ein vollständig geöffneter, flacher Bildschirm ist. Dies stellt einige einzigartige Herausforderungen dar. Sie können Ihr Layout für das Display als ein einziges Element optimieren, aber wie stellen Sie sicher, dass Designelemente genau auf die verschiedenen Segmente passen und nicht in zwei Teile geschnitten werden? Und wie verhindern Sie, dass Inhalte durch die physische Falte/Verbindung verborgen werden?

Die Viewport Segments API bietet Funktionen, mit denen Sie (in CSS und JavaScript) erkennen können, ob der Bildschirm des Benutzers eine Falte oder Verbindung hat, welche Größe die verschiedenen Segmente haben, ob sie dieselbe Größe haben und in welcher Ausrichtung sie sich befinden (nebeneinander oder von oben nach unten). Wir stellen Ihnen diese Funktionen in den folgenden Abschnitten vor und zeigen dann ein vollständiges Beispiel, um sie in Aktion zu zeigen.

## Medienfunktionen für Viewport-Segmente

Zwei verfügbare [Media Query](/de/docs/Web/CSS/CSS_media_queries) Funktionen ermöglichen das Testen, ob ein Gerät eine bestimmte Anzahl von Viewport-Segmenten horizontal oder vertikal angeordnet hat. Diese sehen folgendermaßen aus:

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

Die Medienfunktion {{cssxref("@media/horizontal-viewport-segments")}} erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten horizontal angeordnet hat, während die Medienfunktion {{cssxref("@media/vertical-viewport-segments")}} erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten vertikal angeordnet hat.

## Umgebungsvariablen für Viewport-Segmente

Um ein Layout genau in die verfügbaren Viewport-Segmente einzupassen, bieten die [Umgebungsvariablen für Viewport-Segmente](/de/docs/Web/CSS/env#viewport-segment-width) Zugriff auf die Abmessungen und Platzierung jedes Segments innerhalb des gesamten Viewports. Der Browser stellt [Umgebungsvariablen] bereit, die Zugriff auf die Breite und Höhe jedes Segments sowie die Versatzpositionen ihrer oberen, rechten, unteren und linken Kanten bieten:

- `viewport-segment-width`
- `viewport-segment-height`
- `viewport-segment-top`
- `viewport-segment-right`
- `viewport-segment-bottom`
- `viewport-segment-left`

Die {{cssxref("env()")}} Funktion wird verwendet, um auf diese Variablen zuzugreifen, wobei der Name der Variablen und zwei Ganzzahlen, die die Indizes des Segments darstellen, für das der Wert zurückgegeben werden soll, angegeben werden. Zum Beispiel:

```css
/* Return the width of the top/left segment */
env(viewport-segment-width 0 0)

/* Return the width of the right segment */
env(viewport-segment-width 1 0)

/* Return the width of the bottom segment */
env(viewport-segment-width 0 1)
```

Die Indizes sind beide Ganzzahlen von `0` oder größer. Der erste Wert stellt den horizontalen Indexwert des Segments dar, und der zweite Wert den vertikalen Indexwert des Segments:

![Zwei Geräte-Segmentlayouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen nebeneinander angeordneten Layout wird das linke Segment durch `0 0` dargestellt, und das rechte Segment durch `1 0`.
- In einem vertikal von oben nach unten angeordneten Layout wird das obere Segment durch `0 0` dargestellt, und das untere Segment durch `0 1`.

In einem Layout können Sie diese Variablen verwenden, um Ihre Container so einzustellen, dass sie genau in die verfügbaren Segmente passen. Zum Beispiel:

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

Hier setzen wir das äußere Wrapper-Element auf ein horizontales oder vertikales Gitterlayout, basierend darauf, ob die Viewport-Segmente horizontal oder vertikal angeordnet sind. Dann setzen wir die linken und oberen Zellen auf die ersten Segmente und platzieren den zweiten Abschnitt in den rechten oder unteren Gitterzellen.

Wir könnten eine leere mittlere "Falz"-Zelle hinzufügen, um zu verhindern, dass der Inhalt durch die Falz verdeckt wird. Wir könnten ihre Dicke berechnen, indem wir die kombinierten Breiten oder Höhen der beiden Seiten von der gesamten Viewport-Größe subtrahieren oder die mittlere Zelle auf `1fr` setzen.

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

Sie können auf Segmentinformationen in JavaScript über die [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) Eigenschaft zugreifen, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect) Objekten zurückgibt, die Zugriff auf die `x`- und `y`-Koordinaten jedes Segments innerhalb des gesamten Viewports sowie deren `width` und `height` bieten.

Zum Beispiel wird dieses Snippet durch jedes Segment im Viewport schleifen und eine Zeichenfolge für die Konsole protokollieren, die die Indexnummer, Breite und Höhe beschreibt.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## Ein vollständiges Beispiel

Schauen wir uns die Funktionen der Viewport Segment API in einem echten Beispiel an. Unser Beispiel läuft live auf [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segments-api/) (sehen Sie auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api) an). Wenn möglich, sehen Sie sich die Demo auf einem echten faltbaren Gerät an. Browser-Entwicklungstools, die die visuelle Emulation der mehreren Segmente faltbarer Geräte ermöglichen, beinhalten in der Regel keine Emulation der physischen Segmentierung.

> [!NOTE]
> Dieses Beispiel wurde aus [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) von Alexis Menard und Thomas Steiner adaptiert, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2024 unter der [Creative Commons Attribution 4.0 Lizenz](https://creativecommons.org/licenses/by/4.0/).

Wir werden den Quellcode in den folgenden Abschnitten durchgehen.

### HTML-Struktur

Das Markup enthält ein Wrapper-{{htmlelement("div")}} mit zwei {{htmlelement("section")}}-Elementen, die eine einfache Listenansicht und eine Detailansicht darstellen, sowie ein Falz-`<div>`, das die Falz zwischen den beiden Segmenten auf einem faltbaren Gerät repräsentiert.

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

### Selektives Anwenden von Layouts für verschiedene Segmentorientierungen

In unserem CSS verwenden wir eine Kombination aus Media Queries und Umgebungsvariablen, um responsive Layouts zu erstellen, die sich bequem in die verfügbaren Segmente einfügen.

Zunächst verwenden wir {{cssxref("@media/orientation", "orientation")}} Media Query Tests, um ein geeignetes Flexbox-Layout für die Kinder des Wrapper-`<div>` in jeder Eventualität festzulegen — eine `row` für `landscape` Viewports und eine `column` für `portrait` Viewports. Beachten Sie, wie wir auch das Falz-`<div>` zu einem dünnen Streifen in diesen Fällen gesetzt haben, um als Trennlinie zwischen den beiden Inhaltscontainern zu fungieren — `20px` breit im `landscape`-Layout und `20px` hoch im `portrait`-Layout.

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

Als nächstes verwenden wir eine {{cssxref("@media/horizontal-viewport-segments")}} Media Query, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente nebeneinander liegen.

Wir setzen den äußeren Wrapper auf ein horizontales Flexbox-Layout, wenn die Viewport-Segmente horizontal angeordnet sind. Wir setzen den linken Container auf eine Breite, die der linken Segmentbreite entspricht (`env(viewport-segment-width 0 0)`), und den rechten Container auf eine Breite, die der rechten Segmentbreite entspricht (`env(viewport-segment-width 1 0)`). Um zu berechnen, wie viel Breite die Falz zwischen den beiden einnimmt, subtrahieren wir den linken Randversatz des rechten Containers vom rechten Randversatz des linken Containers (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

Schließlich verwenden wir eine {{cssxref("@media/vertical-viewport-segments")}} Media Query, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente von oben nach unten liegen. Dies verwendet den gleichen Ansatz wie der vorherige Code-Snippet, außer dass wir die Höhen anstelle der Breiten einstellen und Umgebungsvariablen für Höhe/Oben/Unten verwenden, um die erforderlichen Werte zurückzugeben.

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

### Melden der Segmentgröße mit JavaScript

Wir melden auch die Abmessungen jedes Segments und ändern die Werte, wenn die Bildschirmgröße geändert wird oder die [Gerätehaltung](/de/docs/Web/API/Device_Posture_API) oder Orientierung sich ändert.

Zuerst greifen wir auf die Referenzen des Wrapper-`<div>` und seiner beiden `<section>`-Elementkinder zu (dies sind die beiden Container, die wir mit CSS in den beiden Segmenten platziert haben).

```js
const wrapperElem = document.querySelector(".wrapper");
const listViewElem = document.querySelector(".list-view");
const detailViewElem = document.querySelector(".detail-view");
```

Dann definieren wir eine `addSegmentOutput()` Funktion, die ein `segments`-Array, eine Indexnummer und eine Elementreferenz als Argumente nimmt. Diese Funktion hängt ein Segment-Ausgabe-`<div>` an das referenzierte Element an. Die Ausgabe enthält eine Überschrift mit der Indexnummer des Viewport-Segments und den Abmessungen dieses Segments.

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

Als nächstes definieren wir eine `reportSegments()` Funktion, die alle zuvor angehängten Segment-Ausgabe-`<div>`-Elemente entfernt, das `<div>` löscht und dann die zuvor definierte `addSegmentOutput()` Funktion basierend auf dem Array der Segmente des Geräts aufruft, das über [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) abgerufen wird. Wir überprüfen die Anzahl der vorhandenen Segmente:

- Wenn nur ein Segment vorhanden ist, führen wir `addSegmentOutput()` einmal aus und fügen ein Segment-Ausgabe-`<div>` zum Wrapper-`<div>` hinzu. Dies wird die Abmessungen des gesamten Viewports melden.
- Wenn zwei Segmente vorhanden sind, führen wir `addSegmentOutput()` zweimal aus und fügen ein Segment-Ausgabe-`<div>` zu jedem der `<section>`-Elemente hinzu. Diese werden die Abmessungen des jeweiligen Segments melden.

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

Schließlich rufen wir die `reportSegments()` Funktion auf und fügen Ereignislistener hinzu, um sie in verschiedenen Kontexten auszuführen:

- Wir führen sie einmal im globalen Umfang aus, damit die Segmentberichte hinzugefügt werden, sobald die Seite geladen wird.
- Wir führen sie basierend auf dem [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis aus, um die Segmentberichte zu aktualisieren, wenn das Fenster in der Größe verändert wird (einschließlich Orientierungsänderungen).
  - Wir führen sie basierend auf dem `DevicePosture`-[`change`](/de/docs/Web/API/DevicePosture/change_event) Ereignis aus, um die Segmentberichte zu aktualisieren, wenn sich die Haltung des Geräts ändert.

```js
reportSegments();
window.addEventListener("resize", reportSegments);
navigator.devicePosture.addEventListener("change", reportSegments);
```

## Siehe auch

- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
