---
title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: 4b6027efb86db472ca6c37390fe9402b16b2716c
---

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen {{cssxref("&lt;number>")}}-Wert zurück, der die Position eines Wertes (des Fortschrittswertes) relativ zu zwei anderen Werten (den Fortschrittsstart- und -endwerten) darstellt.

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

Die `progress()` Funktion nimmt drei durch Kommas getrennte {{cssxref("&lt;calc-sum>")}}-Ausdrücke als Parameter:

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

Diese sind:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den anderen beiden Werten berechnet werden soll.
- Fortschrittsstart
  - : Die untere Grenze des Fortschritts.
- Fortschrittsende
  - : Die obere Grenze des Fortschritts.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswertes relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Befindet sich der Fortschrittswert zwischen den Werten für Fortschrittsstart und -ende, liegt der Rückgabewert zwischen `0` und `1`, was einem Prozentsatz entspricht. Ist der Fortschrittswert kleiner als der Fortschrittsstartwert oder größer als der Fortschrittsendwert, bleibt die Funktion gültig, aber der Rückgabewert wird auf `0` bzw. `1` beschränkt.

## Beschreibung

Die CSS `progress()`-Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was für Anwendungsfälle wie Fortschrittsbalken-Animationen oder Kästen, die beim Erweitern einblenden, um Inhalte freizugeben, nützlich ist.

Die einfachste Verwendung könnte folgendermaßen aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert von {{cssxref("opacity")}} `0.5`, da 5 die Mitte zwischen `0` und `10` ist.

### Erlaubte Einheitstypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder das Ergebnis von Ausdrücken) können jede {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}}, oder {{cssxref("&lt;percentage>")}} sein. Sie können unterschiedliche Einheiten haben, aber sie müssen alle vom gleichen Typ sein, ansonsten ist die Funktion ungültig.

Das vorher betrachtete Beispiel ist gültig — alle seine Parameter sind einheitenlose `<number>`-Werte:

```css example-good
progress(5, 0, 10)
```

Das folgende Beispiel ist ebenfalls gültig — alle seine Parameter haben {{cssxref("&lt;length>")}}-Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung genutzt. Angenommen, die {{cssxref("font-size")}} beträgt zum Berechnungszeitpunkt `16px`, dann wird `3em` in `48px` aufgelöst, was `48%` des Weges zwischen `0px` und `100px` ist, sodass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Das letzte Paar von Beispielen in diesem Abschnitt ist jedoch nicht gültig, da die Typen nicht übereinstimmen und die resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellung einheitenloser Werte

Die `progress()`-Funktion gibt einheitenlose Werte zurück, daher kann sie genutzt werden, um Einheiten von Werten in ähnlicher Weise wie der [`tan(atan2())` Hack](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j) zu entfernen. Beachten Sie jedoch, dass es aufgrund der Aktualisierungen im Verhalten im Zusammenhang mit [CSS typisierte Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombinieren von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` nur einen einheitenlosen Wert zwischen `0` und `1` zurückgibt, wird es oft mit einer anderen Mathematikfunktion wie {{cssxref("calc()")}} kombiniert, um den gewünschten Wert und die Einheiten zu erhalten. Sie können auch [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb von `progress()`-Funktionen verwenden — das macht Sinn, da Sie oft dieselben Werte an mehreren Stellen setzen und/oder auf benutzerdefinierte Eigenschaften basieren möchten, die über JavaScript gesetzt werden.

Das folgende Beispiel berechnet, welchen Prozentsatz die Ansichtsbreite zwischen einer minimalen Breite von `320px` und einer maximalen Breite von `1200px` hat. Die Funktion `calc()` wird verwendet, um den Rückgabewert von `progress()` mit `600px` zu multiplizieren, um einen Pixelwert zu erhalten, der die Hälfte des Fortschrittswerts der Ansichtsbreite zwischen `320px` und `1200px` darstellt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Wenn z.B. die Ansichtsbreite `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` ergibt.

Im nächsten Beispiel handelt es sich um eine Aktualisierung des vorherigen, bei dem wir benutzerdefinierte Eigenschaften für die Fortschritts-, Fortschrittsstart- und Fortschrittsendwerte verwendet haben.

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

Es ist möglich, `progress()` Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb kompakter Eigenschaftswerte zu berechnen, vorausgesetzt Ihre Funktionen geben gültige Typen für diese Werte zurück.

Dies kann zu einigen komplexen Ausdrücken führen. Zum Beispiel berechnen wir hier die ersten beiden Kanäle einer [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Farbe proportional zum gleichen Breitenverhältnis wie zuvor:

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

In diesem Beispiel zeigen wir die grundlegende Verwendung der `progress()`-Funktion, um die `width` einer Fortschrittsleiste als Prozentsatz des Fortschrittsverhältnisses ihrer übergeordneten `width` zwischen ihrer `min-width` und `max-width` festzulegen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element, das unseren Inhalt darstellt, und ein {{htmlelement("div")}}-Element, das die Breite der Fortschrittsleiste darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zuerst einige benutzerdefinierte Eigenschaften auf unserem `<section>`-Element, um seine `min-width`, `max-width` und `width` darzustellen. Wir setzen dann diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben unserem `<section>` eine solide {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zu unserem `<div>` — wir geben ihm zuerst eine `height` und eine dunkle `background-color`, damit es sich von unserem `<section>`-Element abhebt. Wir berechnen dann seine `width`, indem wir eine `progress()`-Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen, und dann eine `calc()`-Funktion nutzen, um den Rückgabewert von `progress()` mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Diese Demo wird wie folgt dargestellt:

{{EmbedLiveSample("basic", "100%", "150")}}

Die Breite des `<div>` beträgt `75%` der `<section>` Breite, da die `min-width` `400px`, die `max-width` `700px` und die `width` `600px` beträgt, was `75%` der Strecke zwischen den beiden vorherigen Werten ist.

### Resize-Effekte bei einem Container

Dieses Beispiel zeigt einige kompliziertere Verwendungen der `progress()`-Funktion und führt zu einigen netten Effekten, wenn das Browserfenster in der Größe verändert wird.

Dieses Beispiel funktioniert viel besser, wenn es in voller Größe in einem Desktop-Browser-Tab gerendert wird. Daher haben wir es nicht in einer eingebetteten Live-Demo auf dieser Seite dargestellt. Stattdessen finden Sie es live ausgeführt unter [CSS `progress()` Funktion Demo](https://mdn.github.io/dom-examples/css-progress/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Öffnen Sie das Live-Beispiel in einem separaten Tab und probieren Sie aus, die Breite des Browserfensters zu vergrößern und zu verkleinern, um den Effekt zu sehen. Halten Sie dieses geöffnet, damit Sie darauf zurückgreifen können, während Sie die unten stehende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}}-Elemente — eines, um ein Hintergrundbild daran zu hängen, und das andere, um unseren Inhalt zu enthalten. Das `<section class="content">` enthält auch ein `<div class="progress">`, das eine Breitenfortschrittsleiste darstellt, genauso wie die im vorherigen Beispiel. Wir haben den Rest des Inhalts zur Kürze weggelassen.

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

In unserem Skript holen wir zuerst eine Referenz zu unserem `<article>`-Element. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die klientseitige Breite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abruft und eine benutzerdefinierte Eigenschaft darauf setzt, die `--container-width` heißt und der klientseitigen Breite entspricht, abgerundet, mit `px` angehängt.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignislistener auf das `Window`-Objekt, das `setContainerWidth()` ausführt, wenn die Breite des Browserfensters geändert wird. Wir führen es auch einmal aus, um die benutzerdefinierte Eigenschaft `--container-width` auf dem `<article>`-Element zu setzen, sobald die Seite geladen ist.

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

Mit dieser Einrichtung können wir jetzt einige Eigenschaftswerte basierend auf dem `--container-width` setzen, sodass Teile unseres Designs sich dynamisch ändern, während das Fenster in der Größe verändert wird.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant ist, dafür, wie wir die `progress()`-Funktion in der Demo verwendet haben. Für das vollständige CSS, siehe den [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Zuerst zentrieren wir das `<article>` innerhalb des `<body>` mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), dann setzen wir einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width` darzustellen, die wir anderswo verwenden werden. Dann zielen wir auf das `<article>`-Element ab, geben ihm {{cssxref("min-width")}} und {{cssxref("max-width")}} Werte, die den vorher gesetzten benutzerdefinierten Eigenschaften entsprechen. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ dazu positionieren können, dann geben wir ihm eine prozentuale {{cssxref("width")}}, eine feste {{cssxref("height")}}, und einen {{cssxref("border")}}.

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

Nun zu unserem `progress` `<div>`. Wir setzen seine `width` auf einen Prozentsatz, der auf dem Fortschrittsverhältnis der `--container-width` benutzerdefinierten Eigenschaft basiert, die über JavaScript auf dem `<article>`-Element gesetzt wurde, zwischen seiner `min-width` und `max-width` (wir verwenden die gleichen benutzerdefinierten Eigenschaften hier für den zweiten und dritten `progress()`-Parameter, wie wir sie für die `<article>` `min-width` und `max-width` verwendet haben).

Wir geben ihm auch eine `height` und {{cssxref("background-color")}}, dann positionieren wir es absolut in der oberen linken Ecke des `<article>`.

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

Nun zu unserem `background` `<section>`. Wir positionieren es relativ zu unserem `<article>` absolut, setzen {{cssxref("inset", "inset: 0")}} darauf, damit es die gleiche Größe annimmt und darüber liegt. Dann setzen wir ein ziemlich breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der {{cssxref("background-position-x")}} Eigenschaft den gleichen Wert geben, den wir der `width`-Eigenschaft der Fortschrittsleiste gegeben haben. Dies hat den Effekt, dass, wenn Sie die Breite des Browserfensters vergrößern, das Hintergrundbild nach links verschoben wird, wodurch ein netter Bildlauf-Effekt entsteht.

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

Wir positionieren das `content` `<section>` absolut, sodass es über der `background` `<section>` liegt, dann geben wir ihr etwas {{cssxref("padding")}}. Dann variieren wir zwei Eigenschaftswerte, während das Browserfenster in der Größe verändert wird, mit dem gleichen Fortschrittsverhältnis wie zuvor:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis mit 255 multiplizieren, um einen proportionalen Kanalwert zu erhalten. Während das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, wodurch die Szene so aussieht, als würde sie von Nacht zu Tag übergehen (der Farbwert hat eine Deckkraft von `0.5`, also wirkt er wie ein Farbton für das darunterliegende Bild).
- Wir variieren die {{cssxref("opacity")}}, sodass der Inhalt ein wenig einblendet, wenn das Fenster breiter wird.

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

- [CSS-Werte und Einheitenmodul](/de/docs/Web/CSS/Guides/Values_and_units)
- [Container-Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
