---
title: Verwendung der Viewport Segments API
slug: Web/API/Viewport_segments_API/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Viewport Segments API")}}

Dieser Artikel erklärt, wie Sie die [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) verwenden können, um responsive Designs zu erstellen, die für verschiedene Größen und Anordnungen von Viewport-Segmenten optimiert sind.

## Das Problem mit faltbaren Geräten

Faltbare Geräte umfassen Smartphones, Tablets und Laptops. Einige klappen nach innen, wobei das Display in das Innere des Geräts gefaltet wird, und andere klappen nach außen, wobei das Display um das Gerät gewickelt wird. Faltbare Geräte gibt es in verschiedenen Formen: Einige haben einen tatsächlich faltbaren Bildschirm, während andere separate Bildschirme mit einem physischen Scharnier in der Mitte haben. Sie können im Querformat verwendet werden, mit zwei Bildschirmen nebeneinander, und im Hochformat, mit einem oberen und einem unteren Bildschirm.

Unabhängig vom Fall sollen die Displays von faltbaren Geräten als unterschiedliche Segmente derselben Anzeigeoberfläche fungieren. Während das faltbare Gerät einer Person nahtlos erscheinen und vollständig flach verwendet werden kann, ähnlich einem einsegmentigen Viewport, kann ein anderes eine deutliche Naht aufweisen und in einem Winkel verwendet werden, der weniger als ein vollständig geöffnetes, flaches Display beträgt. Dies stellt einige einzigartige Herausforderungen dar. Sie können Ihr Layout für die Anzeige als einheitliches Entität optimieren, aber wie können Sie sicherstellen, dass Designelemente gut auf die verschiedenen Segmente passen und nicht in zwei Teile geschnitten werden? Und wie können Sie verhindern, dass Inhalte durch die physische Falte/Naht verdeckt werden?

Die Viewport Segments API bietet Funktionen, die es ermöglichen zu erkennen (in CSS und JavaScript), ob der Bildschirm des Geräts des Benutzers eine Falte oder Naht hat, welche Größe die verschiedenen Segmente haben, ob sie gleich groß sind und in welcher Ausrichtung sie sich befinden (nebeneinander oder oben/unten). Wir werden Ihnen diese Funktionen in den folgenden Abschnitten vorstellen und dann ein komplettes Beispiel durchgehen, um sie in Aktion zu zeigen.

## Viewport-Segment-Media-Features

Zwei [Media Query](/de/docs/Web/CSS/Guides/Media_queries) Features sind verfügbar, die es ermöglichen zu testen, ob ein Gerät eine bestimmte Anzahl von Viewport-Segmenten horizontal oder vertikal angeordnet hat. Diese sehen folgendermaßen aus:

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

Das {{cssxref("@media/horizontal-viewport-segments")}} Media Feature erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten horizontal angeordnet hat, während das {{cssxref("@media/vertical-viewport-segments")}} Media Feature erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten vertikal angeordnet hat.

## Viewport-Segment-Umgebungsvariablen

Um ein Layout genau in die verfügbaren Viewport-Segmente einzupassen, bieten die [Viewport-Segment-Umgebungsvariablen](/de/docs/Web/CSS/Reference/Values/env#viewport-segment-width) Zugang zu den Abmessungen und der Platzierung jedes Segments innerhalb des gesamten Viewports. Der Browser stellt [Umgebungsvariablen] bereit, die Zugang zu der Breite und Höhe jedes Segments sowie den Offset-Positionen ihrer oberen, rechten, unteren und linken Kanten bieten:

- `viewport-segment-width`
- `viewport-segment-height`
- `viewport-segment-top`
- `viewport-segment-right`
- `viewport-segment-bottom`
- `viewport-segment-left`

Die {{cssxref("env()")}} Funktion wird verwendet, um auf diese Variablen zuzugreifen, wobei der Name der Variablen und zwei ganzzahlige Werte angegeben werden, die die Indizes des Segments darstellen, für das der Wert zurückgegeben werden soll. Zum Beispiel:

```css
/* Return the width of the top/left segment */
env(viewport-segment-width 0 0)

/* Return the width of the right segment */
env(viewport-segment-width 1 0)

/* Return the width of the bottom segment */
env(viewport-segment-width 0 1)
```

Die Indizes sind beide ganzzahlige Werte von `0` oder größer. Der erste Wert repräsentiert den horizontalen Indexwert des Segments, und der zweite Wert repräsentiert den vertikalen Indexwert des Segments:

![Zwei Gerätsegmentlayouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen Layout nebeneinander wird das linke Segment durch `0 0` dargestellt, und das rechte Segment wird durch `1 0` dargestellt.
- In einem vertikalen Layout von oben nach unten wird das obere Segment durch `0 0` dargestellt und das untere Segment durch `0 1`.

In einem Layout können Sie diese Variablen verwenden, um Ihre Container so einzustellen, dass sie sauber in die verfügbaren Segmente passen. Zum Beispiel:

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

Hier setzen wir den äußeren Wrapper entweder auf ein horizontales oder vertikales Gitterlayout, basierend darauf, ob die Viewport-Segmente horizontal oder vertikal angeordnet sind. Wir setzen dann die linken und oberen Zellen als erste Segmente und platzieren den zweiten Abschnitt in den rechten oder unteren Gitterzellen.

Wir könnten eine mittlere "Falzkante" hinzufügen, um zu verhindern, dass Inhalte von der Falte verdeckt werden. Wir könnten deren Dicke berechnen, indem wir die kombinierten Breiten oder Höhen der beiden Seiten von der gesamten Viewport-Größe subtrahieren oder die mittlere Zelle auf `1fr` setzen.

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

Sie können auf Segmentinformationen in JavaScript über die [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) Eigenschaft zugreifen, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect) Objekten zurückgibt und Zugriff auf die `x` und `y` Koordinaten jedes Segments innerhalb des gesamten Viewports sowie deren `width` und `height` bietet.

Zum Beispiel wird dieses Snippet durch jedes Segment im Viewport iterieren und eine Zeichenkette in die Konsole ausgeben, die die Indexnummer, die Breite und die Höhe beschreibt.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## Ein vollständiges Beispiel

Lassen Sie uns die Funktionen der Viewport Segment API in einem realen Beispiel in Aktion sehen. Sie können unser Beispiel live unter [Viewport segment API Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) sehen (siehe auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Wenn möglich, sehen Sie sich die Demo auf einem echten faltbaren Gerät an. Entwicklertools im Browser, die es ermöglichen, die mehreren Segmente von faltbaren Geräten visuell zu emulieren, beinhalten im Allgemeinen keine Emulation der physischen Segmentierung.

> [!NOTE]
> Dieses Beispiel wurde aus dem [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) von Alexis Menard und Thomas Steiner adaptiert, ursprünglich veröffentlicht auf `developer.chrome.com` in 2024 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

Wir werden den Quellcode in den folgenden Abschnitten durchgehen.

### HTML-Struktur

Das Markup enthält einen Wrapper {{htmlelement("div")}}, der zwei {{htmlelement("section")}} Elemente enthält, die eine grundlegende Listenansicht und Detailansicht darstellen, und eine Falz `<div>`, die die Falz zwischen den beiden Segmenten auf einem faltbaren Gerät darstellt.

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

### Selektives Anwenden von Layouts für unterschiedliche Segmentorientierungen

In unserem CSS verwenden wir eine Kombination aus Media Queries und Umgebungsvariablen, um responsive Layouts zu erstellen, die bequem in die verfügbaren Segmente passen.

Zuerst verwenden wir {{cssxref("@media/orientation", "orientation")}} Media Query Tests, um ein geeignetes Flexbox-Layout für die Wrapper `<div>` Kinder in jedem Fall festzulegen — eine `row` für `landscape` Viewports und eine `column` für `portrait` Viewports. Beachten Sie, wie wir auch die Falz `<div>` in diesen Fällen auf einen dünnen Streifen gesetzt haben, um als Trennlinie zwischen den beiden Inhaltscontainern zu dienen — `20px` breit im `landscape` Layout und `20px` hoch im `portrait` Layout.

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

Wir setzen den äußeren Wrapper auf ein horizontales Flexbox-Layout, wenn die Viewport-Segmente horizontal angeordnet sind. Wir setzen den linken Container auf eine Breite, die der Breite des linken Segments entspricht (`env(viewport-segment-width 0 0)`), und den rechten Container auf eine Breite, die der Breite des rechten Segments entspricht (`env(viewport-segment-width 1 0)`). Um zu berechnen, wie viel Breite die Falz dazwischen benötigt, subtrahieren wir den linken Kantenversatz des rechten Containers vom rechten Kantenversatz des linken Containers (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

Schließlich verwenden wir eine {{cssxref("@media/vertical-viewport-segments")}} Media Query, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente von oben nach unten liegen. Dies verwendet denselben Ansatz wie der vorherige Codeausschnitt, außer dass wir anstelle der Breiten die Höhen einstellen und Höhen-/Top-/Bottom-Umgebungsvariablen verwenden, um die erforderlichen Werte zurückzugeben.

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

Wir berichten auch die Abmessungen jedes Segments und ändern die Werte, wenn der Bildschirm in seiner Größe geändert wird oder die [Gerätehaltung](/de/docs/Web/API/Device_Posture_API) oder Orientierung geändert wird.

Zuerst holen wir uns Referenzen auf das Wrapper `<div>` und seine zwei `<section>` Elementkinder (diese sind die beiden Container, die wir mit CSS in die beiden Segmente platziert haben).

```js
const wrapperElem = document.querySelector(".wrapper");
const listViewElem = document.querySelector(".list-view");
const detailViewElem = document.querySelector(".detail-view");
```

Als nächstes definieren wir eine `addSegmentOutput()` Funktion, die ein `segments` Array, eine Indexnummer und eine Elementreferenz als Argumente annimmt. Diese Funktion fügt dem referenzierten Element ein Segment-Output-`<div>` hinzu. Die Ausgabe umfasst eine Überschrift mit der Indexnummer des Viewport-Segments und den Abmessungen dieses Segments.

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

Als nächstes definieren wir eine `reportSegments()` Funktion, die zuvor hinzugefügte Segment-Output-`<div>` Elemente entfernt, das `<div>` löscht, dann die zuvor definierte `addSegmentOutput()` Funktion basierend auf dem Array der Segmente des Geräts aufruft, das mit [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) abgerufen wurde. Wir prüfen die Anzahl der vorhandenen Segmente:

- Wenn nur ein Segment vorhanden ist, führen wir `addSegmentOutput()` einmal aus und fügen dem Wrapper `<div>` ein Segment-Output-`<div>` hinzu. Dies wird die Abmessungen des gesamten Viewports melden.
- Wenn zwei Segmente vorhanden sind, führen wir `addSegmentOutput()` zweimal aus und fügen jedem der `<section>` Elemente ein Segment-Output-`<div>` hinzu. Diese werden die Abmessungen der Segmente ihres jeweiligen Segment-Output-`<div>` Elternteils melden.

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

Schließlich rufen wir die `reportSegments()` Funktion auf und fügen Event Listener hinzu, um sie in ein paar unterschiedlichen Kontexten auszuführen:

- Wir führen sie einmal im globalen Kontext aus, damit die Segmentberichte der Seite hinzugefügt werden, sobald die Seite geladen wird.
- Wir führen sie basierend auf dem [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis aus, um die Segmentberichte zu aktualisieren, wenn das Fenster in seiner Größe geändert wird (was auch Änderungen der Orientierung umfasst).
  - Wir führen sie basierend auf dem `DevicePosture` [`change`](/de/docs/Web/API/DevicePosture/change_event) Ereignis aus, um die Segmentberichte zu aktualisieren, wenn sich die Gerätehaltung ändert.

```js
reportSegments();
window.addEventListener("resize", reportSegments);
navigator.devicePosture.addEventListener("change", reportSegments);
```

## Siehe auch

- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
