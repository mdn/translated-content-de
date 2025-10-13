---
title: progress()
slug: Web/CSS/progress
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{CSSRef}}{{SeeCompatTable}}

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) gibt einen {{cssxref("&lt;number>")}} Wert zurück, der die Position eines Wertes (des Fortschrittswertes) relativ zu zwei anderen Werten (dem Fortschrittsstart- und -endwert) darstellt.

## Syntax

```css-nolint
/* With fixed progress value */
progress(300, 0, 1000)
progress(50px, 0px, 100px)
progress(50%, 30%, 80%)

/* With custom property */
progress(var(--container-width), 320, 1200)

/* Inside math function */
calc((progress(var(--container-width), 20%, 80%) / 2) + 0.5)

/* Inside non-math function */
rgb(
  calc(255 * progress(var(--container-width), 320px, 1200px))
  calc(255 * progress(var(--container-width), 320px, 1200px)) 255 / 0.5
);

/* Math function inside progress() */
progress(calc(20 + 30), 0, 100)
```

### Parameter

Die `progress()` Funktion nimmt drei durch Kommas getrennte {{cssxref("&lt;calc-sum>")}} Ausdrücke als Parameter an:

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

Dies sind jeweils:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den anderen beiden Werten berechnet wird.
- Fortschrittsstart
  - : Die untere Fortschrittsgrenze.
- Fortschrittsende
  - : Die obere Fortschrittsgrenze.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswertes relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Liegt der Fortschrittswert zwischen dem Fortschrittsstart- und dem Fortschrittsendwert, liegt der Rückgabewert zwischen `0` und `1`, was einem Prozentsatz entspricht. Ist der Fortschrittswert kleiner als der Fortschrittsstartwert oder größer als der Fortschrittsendwert, bleibt die Funktion gültig, aber der Rückgabewert wird auf `0` bzw. `1` begrenzt, je nachdem.

## Beschreibung

Die CSS `progress()` Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was nützlich ist für Anwendungsfälle wie Fortschrittsbalken-Animationen oder Kästchen, die sich verbreitern, während sie ihren Inhalt enthüllen.

Die einfachste Anwendung könnte folgendermaßen aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert von {{cssxref("opacity")}} `0.5`, da 5 genau zwischen `0` und `10` liegt.

### Erlaubte Einheitstypen

Die Parameter einer `progress()` Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder die Ergebnisse der Ausdrücke) können jeden {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}} oder {{cssxref("&lt;percentage>")}} Wert repräsentieren. Sie können unterschiedliche Einheiten haben, müssen jedoch alle vom selben Typ sein, andernfalls ist die Funktion ungültig.

Das vorherige Beispiel ist gültig — alle seine Parameter sind einheitenlose `<number>` Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig — alle seine Parameter haben {{cssxref("&lt;length>")}} Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Vorausgesetzt, die {{cssxref("font-size")}} beträgt `16px` zum Zeitpunkt der Berechnung, wird `3em` in `48px` aufgelöst, was `48%` des Weges zwischen `0px` und `100px` darstellt, sodass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten beiden Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, sodass die daraus resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erzeugen von einheitenlosen Werten

Die `progress()` Funktion gibt einheitenlose Werte aus, sodass sie verwendet werden kann, um Einheiten von Werten zu entfernen, ähnlich wie beim [`tan(atan2())` Trick](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Beachten Sie jedoch, dass dies aufgrund der Änderungen im Verhalten bei [CSS typisierte Arithmetik](/de/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombinieren von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer nur einen einheitenlosen Wert zwischen `0` und `1` zurückgibt, wird es häufig mit einer weiteren mathematischen Funktion wie {{cssxref("calc()")}} kombiniert, um den gewünschten Wert und die gewünschten Einheiten auszugeben. Sie können auch [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) in `progress()` Funktionen verwenden — das macht Sinn, da Sie oft dieselben Werte an mehreren Stellen festlegen möchten und/oder sie auf benutzerdefinierte Eigenschaften stützen, die über JavaScript gesetzt werden.

Das folgende Beispiel berechnet, zu welchem Prozentsatz die Viewportbreite zwischen einer minimalen Breite von `320px` und einer maximalen Breite von `1200px` liegt. Die `calc()` Funktion wird verwendet, um den Rückgabewert von `progress()` mit `600px` zu multiplizieren, um ihn in einen Pixelwert umzurechnen, der die Hälfte des Fortschrittswertes der Viewportbreite zwischen `320px` und `1200px` darstellt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Wenn zum Beispiel die Viewportbreite `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` entspricht.

Das nächste Beispiel ist eine Aktualisierung des vorherigen, bei dem wir benutzerdefinierte Eigenschaften für den Fortschritts-, Fortschrittsstart- und Fortschrittsendwert verwendet haben.

```css
width: calc(
  progress(
      var(--container-width),
      var(--custom-min-width),
      var(--custom-max-width)
    ) *
    var(--custom-max-width)
);
```

Es ist möglich, `progress()` Funktionen zu verwenden, um individuelle Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb von Kurzformwerteigenschaften zu berechnen, solange Ihre Funktionen gültige Typen für diese Werte zurückgeben.

Dies kann zu einigen komplexen Ausdrücken führen. Zum Beispiel berechnen wir hier die ersten beiden Kanäle einer [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farbe proportional zum gleichen Breitenverhältnis wie zuvor:

```css
background-color: rgb(
  calc(
      255 *
        progress(
          var(--container-width),
          var(--custom-min-width),
          var(--custom-max-width)
        )
    )
    calc(
      255 *
        progress(
          var(--container-width),
          var(--custom-min-width),
          var(--custom-max-width)
        )
    )
    255 / 0.5
);
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `progress()`

In diesem Beispiel zeigen wir die grundlegende Verwendung der `progress()` Funktion, um die Breite eines Fortschrittsbalkens als Prozentsatz zu setzen, der dem Fortschrittsverhältnis der Breite seines Elternelements zwischen seiner `min-width` und `max-width` entspricht.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element, das unseren Inhalt darstellt, und ein {{htmlelement("div")}} Element, das den Breitenfortschrittsbalken darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zuerst einige benutzerdefinierte Eigenschaften auf unserem `<section>` Element, um dessen `min-width`, `max-width` und `width` darzustellen. Dann setzen wir diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben unserem `<section>` eine feste {{cssxref("background-color")}}, damit es sichtbar ist.

```css hidden live-sample___basic
html {
  height: 100%;
  font-family: sans-serif;
}

body,
section {
  height: inherit;
}
```

```css live-sample___basic
section {
  --custom-min-width: 300px;
  --custom-max-width: 700px;
  --custom-width: 600px;

  min-width: var(--custom-min-width);
  max-width: var(--custom-max-width);
  width: var(--custom-width);

  background-color: cyan;
}
```

Nun zu unserem `<div>` — wir geben ihm zuerst eine `height` und eine dunkle `background-color`, damit es sich von unserem `<section>` Element abhebt. Dann berechnen wir seine `width`, indem wir eine `progress()` Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen, und dann eine `calc()` Funktion verwenden, um den Rückgabewert der `progress()` Funktion mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

```css live-sample___basic
.progress {
  height: 4px;
  background-color: red;

  width: calc(
    progress(
        var(--custom-width),
        var(--custom-min-width),
        var(--custom-max-width)
      ) *
      100%
  );
}
```

#### Ergebnis

Dieses Demo wird wie folgt gerendert:

{{EmbedLiveSample("basic", "100%", "150")}}

Die Breite des `<div>` beträgt `75%` der `<section>` Breite, da die `min-width` `400px`, die `max-width` `700px` und die `width` `600px` beträgt, was `75%` der Entfernung zwischen den vorherigen beiden Werten entspricht.

### Resize-Effekte auf einem Container

Dieses Beispiel zeigt einige komplexere Anwendungen der `progress()` Funktion, was zu einigen unterhaltsamen Effekten führt, wenn das Browserfenster neu dimensioniert wird.

Dieses Beispiel funktioniert viel besser, wenn es in voller Größe in einem Desktop-Browser-Tab gerendert wird. Daher haben wir es nicht als eingebettetes Live-Beispiel auf dieser Seite gerendert. Stattdessen können Sie es live unter [CSS `progress()` Funktion Demo](https://mdn.github.io/dom-examples/css-progress/) sehen (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Breite des Browserfensters zu vergrößern und zu verkleinern, um den Effekt zu sehen. Halten Sie es geöffnet, damit Sie sich darauf beziehen können, während Sie die folgende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element, das den Rest unseres Inhaltes enthält, sowie zwei {{htmlelement("section")}} Elemente — eins, das ein Hintergrundbild trägt, und das andere, um unseren Inhalt zu enthalten. Die `<section class="content">` enthält auch ein `<div class="progress">`, das einen Breitenfortschrittsbalken darstellt, genauso wie das in unserem vorherigen Demo. Wir haben den Rest des Inhalts aus Gründen der Kürze weggelassen.

```html
<article>
  <section class="background"></section>
  <section class="content">
    <div class="progress"></div>
    <!-- Content here -->
  </section>
</article>
```

#### JavaScript

In unserem Skript holen wir zuerst eine Referenz zu unserem `<article>` Element. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>` via [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) ermittelt und eine benutzerdefinierte Eigenschaft darauf setzt, die `--container-width` heißt und gleich der abgerundeten Client-Breite mit `px` angehängt ist.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis-Listener auf das `Window`-Objekt, das `setContainerWidth()` ausführt, wenn das Browserfenster neu dimensioniert wird. Wir führen es auch einmal aus, um die `--container-width`-Eigenschaft beim Laden der Seite auf das `<article>` Element zu setzen.

```js
const articleElem = document.querySelector("article");

function setContainerWidth() {
  const clientWidth = articleElem.getBoundingClientRect().width;
  articleElem.style.setProperty(
    "--container-width",
    `${Math.floor(clientWidth)}px`,
  );
}

window.addEventListener("resize", setContainerWidth);

setContainerWidth();
```

Mit dieser Einrichtung können wir nun einige Eigenschaften basierend auf der `--container-width` setzen, sodass Teile unseres Designs dynamisch Änderungen vornehmen können, während das Fenster neu dimensioniert wird.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant dafür ist, wie wir die `progress()` Funktion im Demo verwendet haben. Für das vollständige CSS siehe den [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Zuerst zentrieren wir den `<article>` innerhalb des `<body>` mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), dann setzen wir einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width` Werte zu repräsentieren, die wir anderswo verwenden werden. Wir zielgerichtet das `<article>` Element an, geben ihm {{cssxref("min-width")}} und {{cssxref("max-width")}} Werte, die den benutzerdefinierten Eigenschaften entsprechen, die wir zuvor gesetzt haben. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ zu ihm positionieren können, dann geben wir ihm eine prozentuale {{cssxref("width")}}, eine feste {{cssxref("height")}} und eine {{cssxref("border")}}.

```css
body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  --custom-min-width: 320px;
  --custom-max-width: 1200px;
}

article {
  min-width: var(--custom-min-width);
  max-width: var(--custom-max-width);
  position: relative;
  width: 70%;
  height: 600px;
  border: 3px solid black;
}
```

Jetzt zu unserem `progress` `<div>`. Wir setzen seine `width` auf einen Prozentsatz basierend auf dem Fortschrittsverhältnis der `--container-width` benutzerdefinierten Eigenschaft, die über JavaScript auf das `<article>` Element gesetzt wurde, zwischen seiner `min-width` und `max-width` (wir verwenden hier dieselben benutzerdefinierten Eigenschaften für die zweiten und dritten `progress()`-Parameter wie für die `min-width` und `max-width` des `<article>`).

Wir geben ihm auch eine `height` und eine {{cssxref("background-color")}}, dann positionieren wir es absolut in der oberen linken Ecke des `<article>`.

```css
.progress {
  width: calc(
    progress(
        var(--container-width),
        var(--custom-min-width),
        var(--custom-max-width)
      ) *
      100%
  );
  height: 4px;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
}
```

Als nächstes schauen wir uns unser `background` `<section>` an. Wir positionieren es absolut relativ zu unserem `<article>`, setzen {{cssxref("inset", "inset: 0")}} darauf, damit es die gleiche Größe annimmt und darüber liegt. Dann setzen wir ein ziemlich breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der {{cssxref("background-position-x")}} Eigenschaft den gleichen Wert wie der Breitenprogress des Progressbalkens `width` geben. Das hat den Effekt, dass, wenn Sie die Browserfensterbreite erhöhen, das Hintergrundbild nach links verschoben wird, wodurch ein netter Bildlauf-Effekt entsteht.

```css
.background {
  position: absolute;
  inset: 0;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/wide-background.jpg");
  background-position-x: calc(
    progress(
        var(--container-width),
        var(--custom-min-width),
        var(--custom-max-width)
      ) *
      100%
  );
}
```

Wir positionieren das `content` `<section>` absolut, sodass es über dem `background` `<section>` liegt, dann geben wir ihm etwas {{cssxref("padding")}}. Wir variieren dann zwei Eigenschaftswerte, je nachdem, wie das Browserfenster neu dimensioniert wird, indem wir das gleiche Fortschrittsverhältnis wie zuvor verwenden:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis mit 255 multiplizieren, um in jedem Fall einen proportionalen Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, wodurch die Szene aussieht, als ginge es von Nacht zu Tag (der Farbwert hat eine Deckkraft von `0.5`, also wirkt es wie ein Farbton für das darunterliegende Bild).
- Wir variieren die {{cssxref("opacity")}}, sodass der Inhalt einblendet, wenn das Fenster breiter wird.

```css
.content {
  position: absolute;
  inset: 0;
  padding: 20px;
  background-color: rgb(
    calc(
        255 *
          progress(
            var(--container-width),
            var(--custom-min-width),
            var(--custom-max-width)
          )
      )
      calc(
        255 *
          progress(
            var(--container-width),
            var(--custom-min-width),
            var(--custom-max-width)
          )
      )
      255 / 0.5
  );
  opacity: calc(
    (
        progress(
            var(--container-width),
            var(--custom-min-width),
            var(--custom-max-width)
          ) /
          2
      ) +
      0.5
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Werte und Einheiten Modul](/de/docs/Web/CSS/CSS_values_and_units)
- [Container-Style-Anfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Medienanfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Funktionsanfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
