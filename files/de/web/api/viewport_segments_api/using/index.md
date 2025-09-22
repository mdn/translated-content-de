---
title: Verwendung der Viewport Segments API
slug: Web/API/Viewport_segments_API/Using
l10n:
  sourceCommit: 1d2dd9c951674bf559b9b6d5223704ea3d8d8269
---

{{DefaultAPISidebar("Viewport Segments API")}}

Dieser Artikel erklärt, wie Sie die [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) verwenden, um responsive Designs zu erstellen, die für verschiedene Viewport-Segmentgrößen und -anordnungen optimiert sind.

## Das Problem mit faltbaren Geräten

Faltbare Geräte umfassen Smartphones, Tablets und Laptops. Einige falten sich nach innen, wobei das Display in das Innere des Geräts gefaltet wird, andere falten sich nach außen, wobei das Display um das Gerät herumläuft. Faltbare Geräte sind in verschiedenen Formen erhältlich: Einige haben einen tatsächlichen faltbaren Bildschirm, während andere separate Bildschirme mit einem physischen Scharnier in der Mitte haben. Sie können im Querformat mit zwei nebeneinander liegenden Bildschirmen und im Hochformat mit einem oberen und einem unteren Bildschirm verwendet werden.

Unabhängig vom Fall sollen die Displays faltbarer Geräte als verschiedene Segmente derselben Anzeigefläche fungieren. Während das faltbare Gerät einer Person nahtlos erscheinen und völlig flach verwendet werden kann, ähnlich wie ein einsegmentiger Viewport, kann ein anderes Gerät einen sichtbaren Spalt aufweisen und in einem Winkel verwendet werden, der weniger als ein vollständig geöffnetes, flaches Display ist. Dies stellt einige einzigartige Herausforderungen dar. Sie können Ihr Layout für das Display als eine Einheit optimieren, aber wie können Sie sicherstellen, dass Designelemente genau in die verschiedenen Segmente passen und nicht in zwei Teile geteilt werden? Und wie können Sie verhindern, dass Inhalte durch den physischen Falz/Übergang verborgen werden?

Die Viewport Segments API bietet Funktionen, mit denen Sie (in CSS und JavaScript) erkennen können, ob der Bildschirm des Benutzers einen Falz oder Übergang hat, welche Größe die verschiedenen Segmente haben, ob sie gleich groß sind und in welcher Ausrichtung sie sich befinden (nebeneinander oder oben und unten). In den folgenden Abschnitten führen wir Sie in diese Funktionen ein und gehen dann durch ein vollständiges Beispiel, um sie in Aktion zu zeigen.

## Viewport-Segment-Media-Features

Zwei [Media Query](/de/docs/Web/CSS/CSS_media_queries) Features sind verfügbar, die es ermöglichen zu testen, ob ein Gerät eine bestimmte Anzahl von Viewport-Segmenten horizontal oder vertikal angeordnet hat. Diese sehen folgendermaßen aus:

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

Das {{cssxref("@media/horizontal-viewport-segments")}} Media-Feature erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten horizontal angeordnet hat, während das {{cssxref("@media/vertical-viewport-segments")}} Media-Feature erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten vertikal angeordnet hat.

## Viewport-Segment-Umgebungsvariablen

Um ein Layout genau in die verfügbaren Viewport-Segmente einzupassen, bieten die [viewport segment environment variables](/de/docs/Web/CSS/env#viewport-segment-width) Zugriff auf die Abmessungen und Platzierung jedes Segments im gesamten Viewport. Der Browser stellt [Umgebungsvariablen] bereit, die Zugriff auf die Breite und Höhe jedes Segments und die Versatzpositionen seiner oberen, rechten, unteren und linken Kante bieten:

- `viewport-segment-width`
- `viewport-segment-height`
- `viewport-segment-top`
- `viewport-segment-right`
- `viewport-segment-bottom`
- `viewport-segment-left`

Die {{cssxref("env()")}} Funktion wird verwendet, um auf diese Variablen zuzugreifen, mit dem Namen der Variablen und zwei Ganzzahlen zur Angabe der Indizes des Segments, für das der Wert zurückgegeben werden soll. Zum Beispiel:

```css
/* Return the width of the top/left segment */
env(viewport-segment-width 0 0)

/* Return the width of the right segment */
env(viewport-segment-width 1 0)

/* Return the width of the bottom segment */
env(viewport-segment-width 0 1)
```

Die Indizes sind beide Ganzzahlen von `0` oder größer. Der erste Wert repräsentiert den horizontalen Indexwert des Segments, und der zweite Wert repräsentiert den vertikalen Indexwert des Segments:

![Zwei Gerätsegment-Layouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen nebeneinander Layout wird das linke Segment durch `0 0` dargestellt, und das rechte Segment durch `1 0`.
- In einem vertikalen oben-unten Layout wird das obere Segment durch `0 0` dargestellt, und das untere Segment durch `0 1`.

In einem Layout können Sie diese Variablen verwenden, um Ihre Container genau in die verfügbaren Segmente einzufügen. Zum Beispiel:

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

Hier stellen wir den äußeren Wrapper entweder als horizontales oder vertikales Rasterlayout ein, basierend darauf, ob die Viewport-Segmente horizontal oder vertikal angeordnet sind. Wir setzen dann die linken und oberen Zellen auf die ersten Segmente und platzieren den zweiten Abschnitt in den rechten oder unteren Gitterzellen.

Wir könnten eine leere mittlere „Falz“-Zelle hinzufügen, um zu verhindern, dass der Inhalt durch den Falz verdeckt wird. Wir könnten die Dicke berechnen, indem wir die kombinierten Breiten oder Höhen der beiden Seiten von der vollständigen Viewport-Größe abziehen oder die mittlere Zelle auf `1fr` setzen.

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

Sie können auf Segmentinformationen in JavaScript über die [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) Eigenschaft zugreifen, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect) Objekten zurückgibt, die Zugriff auf die `x` und `y` Koordinaten jedes Segments innerhalb des gesamten Viewports sowie auf deren `width` und `height` bieten.

Zum Beispiel wird dieses Snippet durch jedes Segment im Viewport schleifen und eine Zeichenkette in die Konsole protokollieren, die die Indexnummer, die Breite und die Höhe detailliert angibt.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## Ein vollständiges Beispiel

Werfen wir einen Blick auf die Funktionen der Viewport Segment API in einem realen Beispiel. Sie können unser Beispiel live unter [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segments-api/) sehen (siehe auch den vollständigen [Quelltext](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Wenn möglich, sehen Sie sich die Demo auf einem echten faltbaren Gerät an. Browser-Entwicklertools, die das visuelle Emulieren der mehreren Segmente faltbarer Geräte ermöglichen, beinhalten in der Regel keine Emulation der physischen Segmentierung.

> [!NOTE]
> Dieses Beispiel ist adaptiert von [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) von Alexis Menard und Thomas Steiner, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2024 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

Wir gehen den Quelltext in den folgenden Abschnitten durch.

### HTML-Struktur

Das Markup enthält einen Wrapper-{{htmlelement("div")}}, der zwei {{htmlelement("section")}} Elemente enthält, die einen grundlegenden Listenansicht und Detailansicht sowie ein Falt-`<div>` darstellen, das den Falz zwischen den beiden Segmenten auf einem faltbaren Gerät darstellt.

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

### Selektiv Layouts für verschiedene Segmentausrichtungen anwenden

In unserem CSS verwenden wir eine Kombination aus Media Queries und Umgebungsvariablen, um responsive Layouts zu erstellen, die bequem in die verfügbaren Segmente passen.

Zuerst verwenden wir {{cssxref("@media/orientation", "orientation")}} Media Query Tests, um ein geeignetes Flexbox-Layout für die Wrapper-`<div>`-Kinder in jedem Fall festzulegen — eine `row` für `landscape` Viewports und eine `column` für `portrait` Viewports. Beachten Sie, dass wir das Falt-`<div>` in diesen Fällen auch als dünnen Streifen gesetzt haben, um als Trennwände zwischen den beiden Inhaltscontainern zu fungieren — `20px` breit im `landscape`-Layout und `20px` hoch im `portrait`-Layout.

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

Als nächstes verwenden wir eine {{cssxref("@media/horizontal-viewport-segments")}} Media Query, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente nebeneinander angeordnet sind.

Wir legen fest, dass der äußere Wrapper ein horizontales Flexbox-Layout haben soll, wenn die Viewport-Segmente horizontal angeordnet sind. Wir setzen den linken Container auf eine Breite, die der Breite des linken Segments entspricht (`env(viewport-segment-width 0 0)`), und den rechten Container auf eine Breite, die der Breite des rechten Segments entspricht (`env(viewport-segment-width 1 0)`). Um zu berechnen, wie viel Breite der Falz zwischen den beiden einnimmt, ziehen wir den linken Randversatz des rechten Containers von dem rechten Randversatz des linken Containers ab (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

Schließlich verwenden wir eine {{cssxref("@media/vertical-viewport-segments")}} Media Query, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente oben und unten angeordnet sind. Dies verwendet den gleichen Ansatz wie das vorherige Code-Snippet, außer dass wir Höhen statt Breiten setzen und Umgebungsvariablen für Höhe/Top/Bottom verwenden, um die erforderlichen Werte zurückzugeben.

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

Wir berichten auch die Abmessungen jedes Segments und ändern die Werte entsprechend, während der Bildschirm in der Größe verändert oder die [Gerätehaltung](/de/docs/Web/API/Device_Posture_API) oder Ausrichtung geändert wird.

Zuerst holen wir Referenzen für den Wrapper-`<div>` und seine beiden `<section>`-Element-Kinder (dies sind die beiden Container, die wir mit CSS in den beiden Segmenten platziert haben).

```js
const wrapperElem = document.querySelector(".wrapper");
const listViewElem = document.querySelector(".list-view");
const detailViewElem = document.querySelector(".detail-view");
```

Als nächstes definieren wir eine `addSegmentOutput()`-Funktion, die ein `segments`-Array, eine Indexnummer und einen Element-Referenz als Argumente nimmt. Diese Funktion hängt einen Segment-Ausgabe-`<div>` an das referenzierte Element an. Die Ausgabe enthält eine Überschrift mit der Indexnummer des Viewport-Segments und den Abmessungen dieses Segments.

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

Als nächstes definieren wir eine `reportSegments()`-Funktion, die alle zuvor angehängten Segment-Ausgabe-`<div>`-Elemente entfernt, den `<div>` löscht und dann die vorher definierte `addSegmentOutput()`-Funktion basierend auf dem Array der Segmente des Geräts aufruft, die mit [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) abgerufen wurden. Wir prüfen, wie viele Segmente vorhanden sind:

- Wenn nur ein Segment vorhanden ist, führen wir `addSegmentOutput()` einmal aus und fügen dem Wrapper `<div>` ein Segment-Ausgabe-`<div>` hinzu. Dies wird die Abmessungen des gesamten Viewports berichten.
- Wenn zwei Segmente vorhanden sind, führen wir `addSegmentOutput()` zweimal aus und fügen jedem der `<section>`-Elemente ein Segment-Ausgabe-`<div>` hinzu. Diese werden die Abmessungen des Segments des jeweiligen Segment-Ausgabe-`<div>`-Segmentelternteils berichten.

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

Schließlich rufen wir die `reportSegments()`-Funktion auf und fügen Event Listener hinzu, um sie in ein paar verschiedenen Kontexten auszuführen:

- Wir führen sie einmal im globalen Scope aus, damit die Segmentberichte auf der Seite hinzugefügt werden, sobald die Seite geladen wird.
- Wir führen sie basierend auf dem [`resize`](/de/docs/Web/API/Window/resize_event) Event aus, um die Segmentberichte zu aktualisieren, wenn das Fenster in der Größe verändert wird (was auch Änderungen der Ausrichtung umfasst).
  - Wir führen sie basierend auf dem `change`-Event von `DevicePosture` aus, um die Segmentberichte zu aktualisieren, wenn sich die Geräteausrichtung ändert.

```js
reportSegments();
window.addEventListener("resize", reportSegments);
navigator.devicePosture.addEventListener("change", reportSegments);
```

## Siehe auch

- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
