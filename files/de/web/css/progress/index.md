---
title: progress()
slug: Web/CSS/progress
l10n:
  sourceCommit: ff98a7dcdec9c70f7a3192ff3c59ae2a674bceb8
---

{{CSSRef}}{{SeeCompatTable}}

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt einen {{cssxref("&lt;number>")}}-Wert zurück, der die Position eines Wertes (des Fortschrittswertes) relativ zu zwei anderen Werten (dem Fortschrittsanfang und dem Fortschrittsende) darstellt.

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

Die `progress()`-Funktion nimmt drei durch Kommas getrennte {{cssxref("&lt;calc-sum>")}}-Ausdrücke als Parameter:

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

Diese sind:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den beiden anderen Werten berechnet werden soll.
- Fortschrittsanfang
  - : Die untere Fortschrittsgrenze.
- Fortschrittsende
  - : Die obere Fortschrittsgrenze.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswertes relativ zu den beiden anderen Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Wenn der Fortschrittswert zwischen den Werten für Fortschrittsanfang und Fortschrittsende liegt, wird der Rückgabewert zwischen `0` und `1` liegen und einen Prozentsatz darstellen. Wenn der Fortschrittswert kleiner als der Fortschrittsanfang oder größer als das Fortschrittsende ist, bleibt die Funktion gültig, aber der Rückgabewert wird jeweils auf `0` oder `1` begrenzt.

## Beschreibung

Die CSS-`progress()`-Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was nützlich für Anwendungsfälle wie Fortschrittsbalkenanimationen oder Kästen ist, die beim Breiterwerden verblassen, um ihren Inhalt sichtbar zu machen.

Die einfachste mögliche Verwendung könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert von {{cssxref("opacity")}} `0.5`, da 5 genau in der Mitte zwischen `0` und `10` liegt.

### Erlaubte Einheitstypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder das Ergebnis der Ausdrücke) können jeden {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}} oder {{cssxref("&lt;percentage>")}}-Wert enthalten. Sie können unterschiedliche Einheiten haben, aber sie müssen alle vom gleichen Typ sein, andernfalls ist die Funktion ungültig.

Das zuvor gesehene Beispiel ist gültig — alle seine Parameter sind einheitslose `<number>`-Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig — alle seine Parameter haben {{cssxref("&lt;length>")}}-Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Vorausgesetzt, die {{cssxref("font-size")}} ist am Berechnungszeitpunkt `16px`, wird `3em` zu `48px` aufgelöst, was `48%` des Weges zwischen `0px` und `100px` ausmacht, sodass der Rückgabewert `0.48` sein wird.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, sodass die resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Einheitlose Werte erstellen

Die `progress()`-Funktion gibt einheitslose Werte zurück, daher kann sie verwendet werden, um wie beim [`tan(atan2())`](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j) Hack Einheiten von Werten zu entfernen. Beachten Sie jedoch, dass durch Aktualisierungen im Verhalten rund um die [CSS getypte Arithmetik](/de/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_typed_arithmetic) dies auch über einfache Division erreicht werden kann.

### Kombination von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer einen einheitslosen Wert zwischen `0` und `1` zurückgibt, wird es häufig mit einer weiteren mathematischen Funktion wie {{cssxref("calc()")}} kombiniert, um den gewünschten Wert und die Einheiten auszugeben. Sie können auch [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) innerhalb von `progress()`-Funktionen verwenden — dies ist sinnvoll, da man oft dieselben Werte an mehreren Stellen setzen möchte und/oder sie auf benutzerdefinierten Eigenschaften basieren, die über JavaScript festgelegt werden.

Das folgende Beispiel berechnet, welchen Prozentsatz die Viewportbreite zwischen einer Mindestbreite von `320px` und einer Höchstbreite von `1200px` einnimmt. Die `calc()`-Funktion wird verwendet, um den Rückgabewert von `progress()` mit `600px` zu multiplizieren, um ihn in einen Pixelwert umzuwandeln, der die Hälfte des Fortschrittswerts der Viewportbreite zwischen `320px` und `1200px` entspricht.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Wenn die Viewportbreite beispielsweise `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` entspricht.

Im nächsten Beispiel wird das vorherige Beispiel aktualisiert, indem wir benutzerdefinierte Eigenschaften für die Werte Fortschritt, Fortschrittsanfang und Fortschrittsende verwenden.

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

Es ist möglich, `progress()`-Funktionen zu verwenden, um individuelle Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb abgekürzter Eigenschaftswerte zu berechnen, vorausgesetzt, Ihre Funktionen geben gültige Typen für diese Werte zurück.

Dies kann zu einigen komplexen Ausdrücken führen. Wir berechnen beispielsweise die ersten beiden Kanäle einer [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farbe proportional zum gleichen Breitenverhältnis wie zuvor:

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

### Grundlegende Verwendung von `progress()`

In diesem Beispiel zeigen wir die grundlegende Verwendung der `progress()`-Funktion, um die `Breite` eines Fortschrittsbalkens als Prozentsatz zu setzen, der dem Fortschrittsverhältnis der Breite des übergeordneten Elements zwischen dessen `min-width` und `max-width` entspricht.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element, das unseren Inhalt darstellt, und ein {{htmlelement("div")}}-Element, das den Fortschrittsbalken darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zunächst einige benutzerdefinierte Eigenschaften auf unserem `<section>`-Element, um dessen `min-width`, `max-width` und `width` darzustellen. Dann setzen wir diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben unserem `<section>` eine solide {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zu unserem `<div>` — wir geben ihm zuerst eine `height` und eine dunkle `background-color`, damit es sich von unserem `<section>`-Element abhebt. Dann berechnen wir seine `width`, indem wir eine `progress()`-Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der Mindest- und Höchstbreite zu berechnen, und dann eine `calc()`-Funktion verwenden, um den Rückgabewert von `progress()` mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Dieses Demo wird wie folgt gerendert:

{{EmbedLiveSample("basic", "100%", "150")}}

Die Breite des `<div>` beträgt `75%` der `<section>`-Breite, da die `min-width` `400px`, die `max-width` `700px` und die `width` `600px` beträgt, was `75%` der Strecke zwischen den beiden vorherigen Werten entspricht.

### Effekte bei Größenänderung eines Containers

Dieses Beispiel zeigt einige komplexere Anwendungen der `progress()`-Funktion, die zu einigen unterhaltsamen Effekten führen, wenn die Größe des Browserfensters geändert wird.

Dieses Beispiel funktioniert viel besser, wenn es in voller Größe in einem Desktop-Browser-Tab gerendert wird. Daher haben wir es nicht in einem eingebetteten Live-Beispiel auf dieser Seite gerendert. Stattdessen finden Sie es live unter [CSS `progress()` function demo](https://mdn.github.io/dom-examples/css-progress/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Breite des Browserfensters zu verkleinern und zu vergrößern, um den Effekt zu sehen. Lassen Sie dies geöffnet, damit Sie darauf zurückgreifen können, während Sie die folgende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den Rest unseres Inhalts umfasst, und zwei {{htmlelement("section")}}-Elemente — eines, um ein Hintergrundbild daran zu hängen, und das andere, um unseren Inhalt zu enthalten. Die `<section class="content">` enthält auch ein `<div class="progress">`, das einen Breitenfortschrittsbalken darstellt, wie im vorherigen Beispiel. Wir haben den Rest des Inhalts aus Gründen der Kürze weggelassen.

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

In unserem Skript greifen wir zunächst auf unser `<article>`-Element zu. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>`-Elements über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abruft und eine benutzerdefinierte Eigenschaft darauf festlegt, die `--container-width` heißt und gleich der abgerundeten Client-Breite ist, wobei `px` angehängt wird.

Dann setzen wir einen [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignislistener auf das `Window`-Objekt, das `setContainerWidth()` ausführt, wenn die Breite des Browserfensters geändert wird. Wir führen es auch einmal aus, um die `--container-width`-benutzerdefinierte Eigenschaft auf dem `<article>`-Element zu setzen, sobald die Seite geladen ist.

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

Mit dieser Einrichtung können wir nun einige Eigenschaftswerte basierend auf der `--container-width` festlegen, sodass Teile unseres Designs dynamisch geändert werden, wenn die Größe des Fensters geändert wird.

#### CSS

Der folgende Abschnitt erklärt nur den für das Demo relevanten CSS-Code, wie wir die `progress()`-Funktion verwendet haben. Für das vollständige CSS siehe den [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zuerst das `<article>` innerhalb des `<body>` mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und setzen dann einige benutzerdefinierte Eigenschaften darauf, um die `min-width`- und `max-width`-Werte darzustellen, die wir an anderer Stelle verwenden werden. Dann zielen wir auf das `<article>`-Element ab und geben ihm {{cssxref("min-width")}} und {{cssxref("max-width")}}-Werte, die den zuvor gesetzten benutzerdefinierten Eigenschaften entsprechen. Wir setzen seine {{cssxref("position")}} auf `relative`, sodass wir seinen Inhalt relativ dazu positionieren können, dann geben wir ihm eine prozentuale {{cssxref("width")}}, eine feste {{cssxref("height")}}, und eine {{cssxref("border")}}.

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

Nun zu unserem `progress`-`<div>`. Wir setzen seine `width` basierend auf dem Fortschrittsverhältnis der `--container-width`-benutzerdefinierten Eigenschaft, die wir auf das `<article>`-Element mittels JavaScript gesetzt haben, zwischen seiner `min-width` und `max-width` (wir verwenden hier dieselben benutzerdefinierten Eigenschaften für die zweiten und dritten `progress()`-Parameter wie wir für die `min-width` und `max-width` des `<article>` verwendet haben).

Wir geben ihm auch eine `height` und eine {{cssxref("background-color")}}, dann positionieren wir es absolut an der oberen linken Ecke des `<article>`.

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

Als Nächstes betrachten wir unser `background` `<section>`. Wir positionieren es absolut relativ zu unserem `<article>`, indem wir {{cssxref("inset", "inset: 0")}} darauf setzen, sodass es die gleiche Größe annimmt und darüber liegt. Dann setzen wir ein ziemlich breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der {{cssxref("background-position-x")}}-Eigenschaft denselben Wert geben wie der `width`-Eigenschaft des Fortschrittsbalkens. Dies hat den Effekt, dass, wenn Sie die Browserfensterbreite vergrößern, das Hintergrundbild nach links verschoben wird und so einen schönen Bildlauf-Effekt erzeugt.

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

Wir positionieren das `content` `<section>` absolut, sodass es über dem `background` `<section>` liegt, geben ihm dann ein wenig {{cssxref("padding")}}. Wir variieren dann zwei Eigenschaftswerte, wenn die Fensterbreite geändert wird, indem wir dasselbe Fortschrittsverhältnis wie vorher verwenden:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis in jedem Fall mit 255 multiplizieren, um einen proportionalen Kanalwert zu erhalten. Je breiter das Fenster wird, desto weniger blau und desto weißer wird der Hintergrund, sodass die Szene so aussieht, als würde sie vom Nacht- zum Tagmodus wechseln (der Farbwert hat eine Deckkraft von `0.5`, sodass er wie ein Schleier für das darunter liegende Bild wirkt).
- Wir variieren die {{cssxref("opacity")}}, sodass der Inhalt ein wenig ausblendet, wenn das Fenster breiter wird.

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

- [CSS Werte und Einheiten Modul](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Container-Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
