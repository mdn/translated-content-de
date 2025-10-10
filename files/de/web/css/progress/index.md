---
title: progress()
slug: Web/CSS/progress
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{CSSRef}}{{SeeCompatTable}}

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) gibt einen {{cssxref("&lt;number>")}}-Wert zurück, der die Position eines Wertes (des Fortschrittswertes) relativ zu zwei anderen Werten (dem Fortschrittsstart- und Fortsetzungswert) darstellt.

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

Die `progress()`-Funktion nimmt drei durch Kommas getrennte {{cssxref("&lt;calc-sum>")}}-Ausdrücke als Parameter an:

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

Diese sind:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den anderen beiden Werten berechnet werden soll.
- Fortschrittsstart
  - : Die untere Fortschrittsgrenze.
- Fortschrittsende
  - : Die obere Fortschrittsgrenze.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswertes relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Wenn der Fortschrittswert zwischen den Fortschrittsstart- und Fortschrittsendwerten liegt, liegt der Rückgabewert zwischen `0` und `1`, was einem Prozentsatz entspricht. Wenn der Fortschrittswert kleiner als der Fortschrittsstartwert oder größer als der Fortschrittsendwert ist, ist die Funktion dennoch gültig, aber der Rückgabewert wird entsprechend auf `0` oder `1` begrenzt.

## Beschreibung

Die CSS `progress()`-Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, das nützlich ist für die Erstellung von Anwendungsfällen wie Fortschrittsbalken-Animationen oder Boxen, die beim Vergrößern verblassen, um ihren Inhalt freizugeben.

Der einfachste mögliche Gebrauch könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert von {{cssxref("opacity")}} `0.5`, da 5 der Mittelwert zwischen `0` und `10` ist.

### Erlaubte Einheitentypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder die Ergebnisse der Ausdrücke) können jeden {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}}, oder {{cssxref("&lt;percentage>")}}-Wert darstellen. Sie können verschiedene Einheiten haben, müssen jedoch alle vom selben Typ sein, andernfalls ist die Funktion ungültig.

Das zuvor gesehene Beispiel ist gültig — alle seine Parameter sind einheitslose `<number>`-Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig — all seine Parameter haben {{cssxref("&lt;length>")}}-Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Vorausgesetzt, die {{cssxref("font-size")}} beträgt `16px` zum Zeitpunkt der Berechnung, wird `3em` auf `48px` aufgelöst, was `48%` des Weges zwischen `0px` und `100px` entspricht, sodass der Rückgabewert `0.48` sein wird.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten beiden Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, sodass die resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellung von einheitslosen Werten

Die `progress()`-Funktion gibt einheitslose Werte aus, daher kann sie zum Entfernen von Einheiten aus Werten in der gleichen Weise wie der [`tan(atan2())` Hack](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j) verwendet werden. Beachten Sie jedoch, dass dies aufgrund der Aktualisierungen im Verhalten bezüglich [CSS-typisierter Arithmetik](/de/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombination von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer nur einen einheitslosen Wert zwischen `0` und `1` zurückgibt, ist es üblich, es mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} zu kombinieren, um den gewünschten Wert und die gewünschten Einheiten auszugeben. Sie können auch [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/--*) innerhalb von `progress()`-Funktionen verwenden — dies macht Sinn, da Sie oft dieselben Werte an mehreren Stellen festlegen und/oder auf benutzerdefinierte Eigenschaften stützen möchten, die über JavaScript gesetzt werden.

Im folgenden Beispiel wird berechnet, wie viel Prozent die Breite des Ansichtsfensters zwischen einer Mindestbreite von `320px` und einer Höchstbreite von `1200px` beträgt. Die `calc()`-Funktion wird verwendet, um den Rückgabewert von `progress()` mit `600px` zu multiplizieren, um ihn in einen Pixelwert umzuwandeln, der die Hälfte des Fortschrittswertes der Ansichtsfensterbreite zwischen `320px` und `1200px` beträgt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Wenn die Ansichtsfensterbreite beispielsweise `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` ergibt.

Das nächste Beispiel ist eine Aktualisierung des vorherigen, in dem wir benutzerdefinierte Eigenschaften für die Fortschritts-, Start- und Endwerte verwendet haben.

```css
width: calc(
  progress(
      var(--container-width),
      var(--custom-minwidth),
      var(--custom-maxwidth)
    ) *
    var(--custom-maxwidth)
);
```

Es ist möglich, `progress()`-Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb zusammenfassender Eigenschaftswerte zu berechnen, vorausgesetzt, Ihre Funktionen geben gültige Typen für diese Werte zurück.

Dies kann zu einigen komplexen Ausdrücken führen. Zum Beispiel berechnen wir hier die ersten beiden Kanäle einer [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Farbe proportional zum gleichen Breitenverhältnis wie zuvor:

```css
background-color: rgb(
  calc(
      255 *
        progress(
          var(--container-width),
          var(--custom-minwidth),
          var(--custom-maxwidth)
        )
    )
    calc(
      255 *
        progress(
          var(--container-width),
          var(--custom-minwidth),
          var(--custom-maxwidth)
        )
    )
    255 / 0.5
);
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `progress()`-Verwendung

In diesem Beispiel zeigen wir die grundlegende Verwendung der `progress()`-Funktion, um die Breite eines Fortschrittsbalkens als Prozentsatz gleich dem Fortschrittsverhältnis der Breite seines übergeordneten Elements zwischen dessen `min-width` und `max-width` zu setzen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element, das unseren Inhalt darstellt, und ein {{htmlelement("div")}}-Element, das den Breitenfortschrittsbalken darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zuerst einige benutzerdefinierte Eigenschaften auf unserem `<section>`-Element, um dessen `min-width`, `max-width` und `width` darzustellen. Wir setzen dann diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben unserem `<section>` eine feste {{cssxref("background-color")}}, damit es sichtbar ist.

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
  --custom-minwidth: 300px;
  --custom-maxwidth: 700px;
  --custom-width: 600px;

  min-width: var(--custom-minwidth);
  max-width: var(--custom-maxwidth);
  width: var(--custom-width);

  background-color: cyan;
}
```

Nun zu unserem `<div>` — wir geben ihm zuerst eine `height` und eine dunkle `background-color`, damit es sich vom `<section>`-Element abhebt. Wir berechnen dann seine `width`, indem wir eine `progress()`-Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der Mindest- und Höchstbreite zu berechnen, und dann eine `calc()`-Funktion verwenden, um den Rückgabewert von `progress()` mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

```css live-sample___basic
.progress {
  height: 4px;
  background-color: red;

  width: calc(
    progress(
        var(--custom-width),
        var(--custom-minwidth),
        var(--custom-maxwidth)
      ) *
      100%
  );
}
```

#### Ergebnis

Diese Demo wird wie folgt angezeigt:

{{EmbedLiveSample("basic", "100%", "150")}}

Die Breite des `<div>` beträgt `75%` der `<section>`-Breite, da die `min-width` `400px`, die `max-width` `700px` und die `width` `600px` beträgt, was `75%` der Distanz zwischen den vorherigen beiden Werten entspricht.

### Größenänderungseffekte auf einen Container

Dieses Beispiel zeigt einige komplexere Verwendungen der `progress()`-Funktion, was zu einigen unterhaltsamen Effekten führt, wenn das Browserfenster geändert wird.

Dieses Beispiel funktioniert viel besser, wenn es in einem großen Fenster in einem Desktop-Browser-Tab dargestellt wird. Daher haben wir es nicht in einem eingebetteten Live-Beispiel auf dieser Seite dargestellt. Stattdessen finden Sie es live unter [CSS `progress()` Funktion Demo](https://mdn.github.io/dom-examples/css-progress/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Browserfensterbreite zu erhöhen und zu verringern, um den Effekt zu sehen. Lassen Sie dies geöffnet, damit Sie darauf zurückgreifen können, während Sie die folgende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}}-Elemente — eines, um ein Hintergrundbild zu halten, und das andere, um unseren Inhalt zu enthalten. Die `<section class="content">` enthält auch ein `<div class="progress">`, das einen Breitenfortschrittsbalken darstellt, ähnlich wie in unserem vorherigen Beispiel. Wir haben den Rest des Inhalts zur Kürze weggelassen.

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

In unserem Skript greifen wir zuerst auf unser `<article>`-Element zu. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abruft und eine benutzerdefinierte Eigenschaft darauf setzt, die `--container-width` genannt wird, die gleich der abgerundeten Client-Breite ist, mit angehängtem `px`.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignislistener auf das `Window`-Objekt, der `setContainerWidth()` ausführt, wenn die Browserfenstergröße geändert wird. Wir führen es außerdem einmal aus, um die `--container-width` benutzerdefinierte Eigenschaft auf dem `<article>`-Element zu setzen, sobald die Seite geladen wird.

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

Mit dieser Einrichtung können wir nun einige Eigenschaftswerte basierend auf dem `--container-width` setzen, so dass Teile unseres Designs dynamisch geändert werden, wenn das Fenster erneut skaliert wird.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant ist, wie wir die `progress()`-Funktion im Beispiel verwendet haben. Für das vollständige CSS siehe den [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zunächst das `<article>` innerhalb des `<body>` mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), setzen dann einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width` Werte darzustellen, die wir andernorts verwenden werden. Wir zielen dann auf das `<article>`-Element und geben ihm {{cssxref("min-width")}} und {{cssxref("max-width")}}-Werte gleich den zuvor gesetzten benutzerdefinierten Eigenschaften. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ dazu positionieren können, geben ihm dann eine prozentuale {{cssxref("width")}}, eine feste {{cssxref("height")}} und {{cssxref("border")}}.

```css
body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  --custom-minwidth: 320px;
  --custom-maxwidth: 1200px;
}

article {
  min-width: var(--custom-minwidth);
  max-width: var(--custom-maxwidth);
  position: relative;
  width: 70%;
  height: 600px;
  border: 3px solid black;
}
```

Nun zu unserem `progress` `<div>`. Wir setzen seine `width` gleich einem Prozentsatz, basierend auf dem Fortschrittsverhältnis der benutzerdefinierten Eigenschaft `--container-width`, die über JavaScript auf das `<article>`-Element gesetzt wurde, zwischen seiner `min-width` und `max-width` (wir verwenden hier dieselben benutzerdefinierten Eigenschaften für die zweiten und dritten `progress()`-Parameter wie für die `min-width` und `max-width` des `<article>`).

Wir geben ihm auch eine `height` und eine {{cssxref("background-color")}}, positionieren ihn dann absolut in der oberen linken Ecke des `<article>`.

```css
.progress {
  width: calc(
    progress(
        var(--container-width),
        var(--custom-minwidth),
        var(--custom-maxwidth)
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

Als Nächstes betrachten wir unser `background` `<section>`. Wir positionieren es absolut relativ zu unserem `<article>`, indem wir {{cssxref("inset", "inset: 0")}} darauf setzen, sodass es dieselbe Größe annimmt und darüber liegt. Wir setzen dann ein recht breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der Eigenschaft {{cssxref("background-position-x")}} denselben Wert geben, den wir der `width`-Eigenschaft des Fortschrittsbalkens gaben. Dies hat den Effekt, dass, wenn Sie die Browserfensterbreite vergrößern, das Hintergrundbild nach links verschoben wird, was einen schönen Bildlauf-Effekt erzeugt.

```css
.background {
  position: absolute;
  inset: 0;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/wide-background.jpg);
  background-position-x: calc(
    progress(
        var(--container-width),
        var(--custom-minwidth),
        var(--custom-maxwidth)
      ) *
      100%
  );
}
```

Wir positionieren die `content` `<section>` absolut, damit sie über der `background` `<section>` liegt, und geben ihr etwas {{cssxref("padding")}}. Wir variieren dann zwei Eigenschaftswerte, wenn die Browserfensterbreite geändert wird, und nutzen dabei dasselbe Fortschrittsverhältnis wie zuvor:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis mit 255 multiplizieren, um einen proportionalen Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, sodass die Szene wie ein Wechsel von Nacht zu Tag aussieht (der Farbwert hat eine Opazität von `0.5`, sodass er wie eine Tönung für das darunter liegende Bild wirkt).
- Wir variieren die {{cssxref("opacity")}}, sodass der Inhalt beim Breiterwerden des Fensters etwas verblasst.

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
            var(--custom-minwidth),
            var(--custom-maxwidth)
          )
      )
      calc(
        255 *
          progress(
            var(--container-width),
            var(--custom-minwidth),
            var(--custom-maxwidth)
          )
      )
      255 / 0.5
  );
  opacity: calc(
    (
        progress(
            var(--container-width),
            var(--custom-minwidth),
            var(--custom-maxwidth)
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
- [Container-Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
