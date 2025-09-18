---
title: Verwendung der Viewport Segments API
slug: Web/API/Viewport_segments_API/Using
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

{{DefaultAPISidebar("Viewport segments API")}}

Dieser Artikel erklärt, wie Sie die [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) verwenden können, um responsive Designs zu erstellen, die für verschiedene Ansätze von Viewport-Segmentgrößen und -anordnungen optimiert sind.

## Das Problem mit faltbaren Geräten

Faltbare Geräte umfassen Smartphones, Tablets und Laptops. Einige falten sich nach innen, wobei das Display in das Innere des Geräts gefaltet wird, und andere falten sich nach außen, wobei das Display um das Gerät herum verläuft. Faltbare Geräte gibt es in verschiedenen Formen: Einige haben einen tatsächlichen Faltbildschirm, während andere separate Bildschirme mit einem physischen Scharnier in der Mitte haben. Sie können im Querformat verwendet werden, mit zwei Bildschirmen nebeneinander, und im Hochformat mit einem oberen und einem unteren Bildschirm.

In jedem Fall sollen die Displays faltbarer Geräte als unterschiedliche Segmente derselben Anzeigeoberfläche fungieren. Während das faltbare Gerät einer Person nahtlos erscheinen und vollständig flach genutzt werden kann, ähnlich wie ein einzelner segmentierter Viewport, kann ein anderes Gerät einen sichtbaren Spalt aufweisen und in einem Winkel genutzt werden, der weniger als ein vollständig geöffnetes, flaches Display beträgt. Dies stellt einige einzigartige Herausforderungen dar. Sie können Ihr Layout für die Anzeige als eine Einheit optimieren, aber wie können Sie sicherstellen, dass Designelemente genau auf die verschiedenen Segmente passen und nicht in zwei Teile geschnitten werden? Und wie verhindern Sie, dass Inhalte durch den physischen Falt-/Verbindungsbereich verdeckt werden?

Die Viewport segments API bietet Funktionen, die es Ihnen ermöglichen, sowohl in CSS als auch in JavaScript zu erkennen, ob der Bildschirm des Benutzers eine Falte oder Verbindung aufweist, welche Größe die verschiedenen Segmente haben, ob sie gleich groß sind und in welcher Ausrichtung sie sich befinden (nebeneinander oder von oben nach unten). Wir werden Ihnen diese Funktionen in den folgenden Abschnitten vorstellen und dann ein vollständiges Beispiel durchgehen, um sie in Aktion zu zeigen.

## Viewport-Segmentmedienfunktionen

Zwei [Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Funktionen sind verfügbar, mit denen getestet werden kann, ob ein Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die horizontal oder vertikal angeordnet sind. Diese sehen so aus:

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

Die {{cssxref("@media/horizontal-viewport-segments")}}-Medienfunktion erkennt, ob das Gerät über eine bestimmte Anzahl von horizontal angeordneten Viewport-Segmenten verfügt, während die {{cssxref("@media/vertical-viewport-segments")}}-Medienfunktion erkennt, ob das Gerät über eine bestimmte Anzahl von vertikal angeordneten Viewport-Segmenten verfügt.

## Viewport-Segment-Umgebungsvariablen

Um ein Layout präzise in die verfügbaren Viewport-Segmente einzupassen, bieten die [viewport segment environment variables](/de/docs/Web/CSS/env#viewport-segment-width) Zugriff auf die Abmessungen und die Platzierung jedes Segments innerhalb des gesamten Viewports. Der Browser stellt [Umgebungsvariablen] zur Verfügung, die den Zugriff auf die Breite und Höhe jedes Segments sowie die Offsetpositionen seiner oberen, rechten, unteren und linken Kante ermöglichen:

- `viewport-segment-width`
- `viewport-segment-height`
- `viewport-segment-top`
- `viewport-segment-right`
- `viewport-segment-bottom`
- `viewport-segment-left`

Die {{cssxref("env()")}}-Funktion wird verwendet, um auf diese Variablen zuzugreifen, mit dem Namen der Variablen und zwei ganzen Zahlen, die die Indizes des Segments darstellen, für das der Wert zurückgegeben werden soll. Zum Beispiel:

```css
/* Return the width of the top/left segment */
env(viewport-segment-width 0 0)

/* Return the width of the right segment */
env(viewport-segment-width 1 0)

/* Return the width of the bottom segment */
env(viewport-segment-width 0 1)
```

Die Indizes sind beide ganze Zahlen von 0 oder größer. Der erste Wert repräsentiert den horizontalen Indexwert des Segments, und der zweite Wert repräsentiert den vertikalen Indexwert des Segments:

![Zwei Geräte-Segmentlayouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen Nebeneinander-Layout wird das linke Segment durch `0 0` dargestellt, und das rechte Segment durch `1 0`.
- In einem vertikalen Von-oben-nach-unten-Layout wird das obere Segment durch `0 0` und das untere Segment durch `0 1` dargestellt.

In einem Layout können Sie diese Variablen verwenden, um Ihre Container passgenau in die verfügbaren Segmente einzufügen. Zum Beispiel:

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    display: grid;
    grid-template: "left fold right";
    grid-columns: env(viewport-segment-width 0 0)
      env(viewport-segment-width 1 0);
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
    grid-rows: env(viewport-segment-height 0 1) env(viewport-segment-width 0 0);
  }
  .firstSection {
    grid-area: top;
  }
  .secondSection {
    grid-area: bottom;
  }
}
```

Hier setzen wir den äußeren Wrapper entweder in ein horizontales oder vertikales Rasterlayout, basierend darauf, ob die Viewport-Segmente horizontal oder vertikal angeordnet sind. Wir setzen dann die linken und oberen Zellen als die ersten Segmente und platzieren den zweiten Abschnitt in den rechten oder unteren Rasterzellen.

Wir könnten eine leere mittlere "Falt"-Zelle hinzufügen, um zu verhindern, dass Inhalte durch die Falte verdeckt werden. Wir könnten ihre Dicke berechnen, indem wir die kombinierten Breiten oder Höhen der beiden Seiten von der gesamten Viewport-Größe subtrahieren, oder die mittlere Zelle auf `1fr` setzen.

```css
@media (horizontal-viewport-segments: 2) {
   .wrapper {
     grid-template: "left fold right";
     grid-columns:
        env(viewport-segment-width 0 0)
        calc(100vw - (env(viewport-segment-width 0 0) + env(viewport-segment-width 1 0))
        env(viewport-segment-width 1 0);
   }
}

@media (vertical-viewport-segments: 2) {
   .wrapper {
     grid-template:
      "top"
      "fold"
      "bottom";
     grid-rows: env(viewport-segment-height 0 1) 1fr env(viewport-segment-width 0 0);

   }
}
```

## Zugreifen auf Segmentinformationen in JavaScript

Sie können auf Segmentinformationen in JavaScript mithilfe der [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) -Eigenschaft zugreifen, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurückgibt, die Zugang zu den `x`- und `y`-Koordinaten jedes Segments innerhalb des gesamten Viewports sowie deren `width` und `height` bieten.

Zum Beispiel wird dieser Codeausschnitt durch jedes Segment im Viewport schleifen und eine Zeichenkette mit der Indexnummer, Breite und Höhe in die Konsole protokollieren.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## Ein vollständiges Beispiel

Lassen Sie uns die Viewport Segment API-Funktionen anhand eines realen Beispiels in Aktion sehen. Sie können unser Beispiel live unter [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segment-api/) (sehen Sie sich auch den vollständigen [Code](https://github.com/mdn/dom-examples/tree/main/viewport-segment-api) an) anschauen. Falls möglich, sehen Sie das Demo auf einem echten faltbaren Gerät an. Browser-Entwicklertools, die das visuelle Emulieren der mehreren Segmente faltbarer Geräte ermöglichen, beinhalten in der Regel keine Emulation der physischen Segmentierung.

> [!NOTE]
> Dieses Beispiel wurde aus dem [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) von Alexis Menard und Thomas Steiner adaptiert, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2024 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

Wir werden den Quellcode in den folgenden Abschnitten durchgehen.

### HTML-Struktur

Die Markup-Struktur enthält einen Wrapper-{{htmlelement("div")}} mit zwei {{htmlelement("section")}}-Elementen, die eine grundlegende Listenansicht und Detailansicht darstellen, sowie ein Falt-`<div>`, das die Falte zwischen den beiden Segmenten auf einem faltbaren Gerät darstellt.

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

### Selektives Anwenden von Layouts für verschiedene Segmentausrichtungen

In unserem CSS verwenden wir eine Kombination von Media Queries und Umgebungsvariablen, um responsive Layouts zu erstellen, die bequem in die verfügbaren Segmente passen.

Zunächst verwenden wir {{cssxref("@media/orientation", "orientation")}}-Media Queries, um ein geeignetes Flexbox-Layout für die Wrapper-`<div>`-Kinder in jedem Fall festzulegen — eine `row` für Viewports im `landscape` und eine `column` für Viewports im `portrait`. Beachten Sie, wie wir das Falt-`<div>` in diesen Fällen auch als dünnen Streifen festgelegt haben, um als Trennlinie zwischen den beiden Inhaltselementen zu fungieren — `20px` breit im `landscape`-Layout und `20px` hoch im `portrait`-Layout.

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

Als nächstes verwenden wir eine {{cssxref("@media/horizontal-viewport-segments")}}-Media Query, um den Fall von faltbaren Geräten zu handhaben, bei denen die Segmente nebeneinander liegen.

Wir setzen den äußeren Wrapper auf ein horizontales Flexbox-Layout, wenn die Viewport-Segmente horizontal angeordnet sind. Wir setzen den linken Container auf eine Breite, die der Breite des linken Segments entspricht (`env(viewport-segment-width 0 0)`), und den rechten Container auf eine Breite, die der Breite des rechten Segments entspricht (`env(viewport-segment-width 1 0)`). Um zu berechnen, wie viel Breite die Falte zwischen den beiden einnimmt, subtrahieren wir den linken Kantenversatz des rechten Containers vom rechten Kantenversatz des linken Containers (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

Schließlich verwenden wir eine {{cssxref("@media/vertical-viewport-segments")}}-Media Query, um den Fall von faltbaren Geräten zu handhaben, bei denen die Segmente von oben nach unten angeordnet sind. Dies folgt dem gleichen Ansatz wie der vorherige Codeausschnitt, mit dem Unterschied, dass wir Höhen statt Breiten einstellen und Höhen-/Top-/Bottom-Umgebungsvariablen verwenden, um die erforderlichen Werte zurückzugeben.

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

Wir berichten auch die Abmessungen jedes Segments, indem wir die Werte ändern, wenn sich der Bildschirm ändert oder sich die [Gerätehaltung](/de/docs/Web/API/Device_Posture_API) oder die Ausrichtung ändert.

Zunächst holen wir Referenzen zum Wrapper-`<div>` und seinen beiden `<section>`-Elementkindern (dies sind die beiden Container, die wir mit CSS in die beiden Segmente platziert haben).

```js
const wrapperElem = document.querySelector(".wrapper");
const listViewElem = document.querySelector(".list-view");
const detailViewElem = document.querySelector(".detail-view");
```

Als nächstes definieren wir eine `addSegmentOutput()`-Funktion, die ein `segments`-Array, eine Indexnummer und eine Elementreferenz als Argumente übernimmt. Diese Funktion hängt ein Segmentausgabe-`<div>` an das angegebene Element an. Die Ausgabe enthält eine Überschrift mit der Indexnummer des Viewport-Segments und den Maßen dieses Segments.

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

Als nächstes definieren wir eine `reportSegments()`-Funktion, die zuvor angehängte Segmentausgabe-`<div>`-Elemente entfernt und das `<div>` löscht, dann die zuvor definierte `addSegmentOutput()`-Funktion basierend auf dem Array der Gerätesegmente ausführt, das mit [`window.viewport.segments`](/de/docs/Web/API/Viewport/segments) abgerufen wird. Wir überprüfen die Anzahl der vorhandenen Segmente:

- Wenn nur ein Segment vorhanden ist, führen wir `addSegmentOutput()` einmal aus und fügen dem Wrapper-`<div>` ein Segmentausgabe-`<div>` hinzu. Dies wird die Abmessungen des gesamten Viewports berichten.
- Wenn zwei Segmente vorhanden sind, führen wir `addSegmentOutput()` zweimal aus und fügen jedem `<section>`-Element ein Segmentausgabe-`<div>` hinzu. Diese berichten über die Abmessungen des Segments, dessen Elternteil das Segmentausgabe-`<div>` ist.

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

Schließlich rufen wir die `reportSegments()`-Funktion auf und fügen Event-Listener hinzu, um sie in verschiedenen Kontexten auszuführen:

- Wir führen sie einmal im globalen Scope aus, damit die Segmentberichte hinzugefügt werden, sobald die Seite geladen wird.
- Wir führen sie basierend auf dem [`resize`](/de/docs/Web/API/Window/resize_event)-Event aus, um die Segmentberichte zu aktualisieren, wenn die Fenstergröße geändert wird (einschließlich Änderungen der Ausrichtung).
  - Wir führen sie basierend auf dem `DevicePosture`'s [`change`](/de/docs/Web/API/DevicePosture/change_event)-Event aus, um die Segmentberichte zu aktualisieren, wenn die Gerätehaltung sich ändert.

```js
reportSegments();
window.addEventListener("resize", reportSegments);
navigator.devicePosture.addEventListener("change", reportSegments);
```

## Siehe auch

- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
