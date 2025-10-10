---
title: progress()
slug: Web/CSS/progress
l10n:
  sourceCommit: 144fc1770b3eaa69bb5be691f505565b6dd9a68e
---

{{CSSRef}}{{SeeCompatTable}}

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt einen {{cssxref("&lt;number>")}}-Wert zurück, der die Position eines Wertes (des Fortschrittswerts) relativ zu zwei anderen Werten (den Start- und Endwerten des Fortschritts) darstellt.

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

Dies sind jeweils:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den beiden anderen Werten berechnet werden soll.
- Fortschrittsstart
  - : Die untere Fortschrittsgrenze.
- Fortschrittsende
  - : Die obere Fortschrittsgrenze.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, das die Position des Fortschrittswerts relativ zu den beiden anderen Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Wenn sich der Fortschrittswert zwischen dem Fortschrittsstart- und dem Fortschrittsendwert befindet, liegt der Rückgabewert zwischen `0` und `1`, was einem Prozentsatz entspricht. Wenn der Fortschrittswert kleiner als der Startwert oder größer als der Endwert ist, bleibt die Funktion gültig, aber der Rückgabewert wird auf `0` oder `1` geklemmt.

## Beschreibung

Die CSS-Funktion `progress()` bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was nützlich ist für Anwendungsfälle wie Fortschrittsbalken-Animationen oder Boxen, die einblenden, wenn sie breiter werden, um ihren Inhalt zu enthüllen.

Die einfachste mögliche Verwendung könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert der {{cssxref("opacity")}} `0.5`, da 5 genau in der Mitte zwischen `0` und `10` liegt.

### Zulässige Einheitentypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder die Ergebnisse der Ausdrücke) können jede {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}} oder {{cssxref("&lt;percentage>")}} sein. Sie können unterschiedliche Einheiten haben, müssen jedoch alle vom gleichen Typ sein, sonst ist die Funktion ungültig.

Das Beispiel, das wir zuvor gesehen haben, ist gültig — alle seine Parameter sind einheitenlose `<number>`-Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig — alle seine Parameter haben {{cssxref("&lt;length>")}}-Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Vorausgesetzt, die {{cssxref("font-size")}} beträgt `16px` zum Zeitpunkt der Berechnung, entspricht `3em` `48px`, was `48%` des Weges zwischen `0px` und `100px` ausmacht, sodass der Rückgabewert `0.48` sein wird.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten beiden Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, daher machen die resultierenden Berechnungen keinen Sinn.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellen von einheitenlosen Werten

Die `progress()`-Funktion gibt einheitenlose Werte aus, daher kann sie verwendet werden, um Einheiten von Werten auf die gleiche Weise zu entfernen wie der [tan(atan2()) Trick](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Beachten Sie jedoch, dass dies aufgrund der Aktualisierungen des Verhaltens bei [CSS-typisierter Arithmetik](/de/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombinieren von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer nur einen einheitenlosen Wert zwischen `0` und `1` zurückgibt, ist es üblich, es mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} zu kombinieren, um den gewünschten Wert und die gewünschten Einheiten auszugeben. Sie können auch [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) innerhalb von `progress()`-Funktionen verwenden — das macht Sinn, da Sie häufig dieselben Werte an mehreren Stellen festlegen und/oder auf benutzerdefinierte Eigenschaften basieren möchten, die über JavaScript gesetzt werden.

Das folgende Beispiel berechnet den Prozentsatz der Viewport-Breite zwischen einer minimalen Breite von `320px` und einer maximalen Breite von `1200px`. Die `calc()`-Funktion wird verwendet, um den `progress()`-Rückgabewert mit `600px` zu multiplizieren, um ihn in einen Pixelwert umzuwandeln, der die Hälfte des Fortschrittswertes der Viewport-Breite zwischen `320px` und `1200px` beträgt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Wenn die Viewport-Breite beispielsweise `700px` beträgt, wird der Fortschrittswert berechnet als `((700 - 320) / (1200 - 320))` = `0.431818`. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` entspricht.

Das nächste Beispiel ist eine Aktualisierung des vorherigen, bei dem wir benutzerdefinierte Eigenschaften für die Fortschritts-, Fortschrittsstart- und Fortschrittsendwerte verwendet haben.

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

Es ist möglich, `progress()`-Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb von Kurzformeigenschaften zu berechnen, vorausgesetzt, Ihre Funktionen liefern gültige Typen für diese Werte.

Dies kann zu komplexen Ausdrücken führen. Zum Beispiel berechnen wir hier die ersten beiden Kanäle einer [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farbe im Verhältnis zum gleichen Breitenverhältnis wie zuvor:

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

In diesem Beispiel zeigen wir die grundlegende Verwendung der `progress()`-Funktion, um die Breite eines Fortschrittsbalkens als Prozentsatz gleich dem Fortschrittsverhältnis der Breite seines übergeordneten Elements zwischen dessen `min-width` und `max-width` festzulegen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element, das unseren Inhalt darstellt, und ein {{htmlelement("div")}}-Element, das den Fortschrittsbalken darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS legen wir zuerst einige benutzerdefinierte Eigenschaften auf unserem `<section>`-Element fest, um dessen `min-width`, `max-width` und `width` darzustellen. Dann setzen wir diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben dann unserem `<section>` eine feste {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zu unserem `<div>` — wir geben ihm zunächst eine `height` und eine dunkle `background-color`, damit es sich von unserem `<section>`-Element abhebt. Dann berechnen wir seine `width` mit einer `progress()`-Funktion, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen, und verwenden dann eine `calc()`-Funktion, um den `progress()`-Rückgabewert mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Dieses Demo wird wie folgt dargestellt:

{{EmbedLiveSample("basic", "100%", "150")}}

Die Breite des `<div>` beträgt `75%` der `<section>`-Breite, da die `min-width` `400px`, die `max-width` `700px` und die `width` `600px` beträgt, was `75%` des Abstands zwischen den beiden vorherigen Werten ausmacht.

### Größenänderungseffekte auf einem Container

Dieses Beispiel zeigt einige umfangreichere Verwendungen der `progress()`-Funktion, die zu lustigen Effekten führen, wenn die Browserfenstergröße geändert wird.

Dieses Beispiel funktioniert viel besser, wenn es in einem Desktop-Browser-Tab in voller Größe gerendert wird. Daher haben wir es nicht als eingebettetes Live-Beispiel auf dieser Seite gerendert. Stattdessen können Sie es live unter [CSS `progress()` Funktion Demo](https://mdn.github.io/dom-examples/css-progress/) ansehen (siehe auch der [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Breite des Browserfensters zu vergrößern und zu verkleinern, um den Effekt zu sehen. Lassen Sie dies offen, damit Sie darauf zurückgreifen können, während Sie die folgende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}}-Elemente — eines, um ein Hintergrundbild aufzuhängen, und das andere, um unseren Inhalt zu enthalten. Das `<section class="content">` enthält auch ein `<div class="progress">`, das einen Breiten-Fortschrittsbalken darstellt, ähnlich wie der im vorherigen Beispiel. Wir haben den Rest des Inhalts der Kürze halber weggelassen.

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

In unserem Skript greifen wir zunächst auf unser `<article>`-Element zu. Wir definieren dann eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abruft und eine benutzerdefinierte Eigenschaft darauf setzt, die `--container-width` genannt wird und der abgerundeten Client-Breite entspricht, wobei `px` angehängt wird.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event) Ereignislistener auf das `Window`-Objekt, das `setContainerWidth()` ausführt, wenn die Browserfenstergröße geändert wird. Wir führen es auch einmal aus, um die `--container-width` benutzerdefinierte Eigenschaft auf dem `<article>` Element zu setzen, sobald die Seite geladen wird.

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

Damit können wir einige Eigenschaftswerte basierend auf der `--container-width` setzen, sodass Teile unseres Designs dynamisch ändern, wenn das Fenster die Größe ändert.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant ist, wie wir die `progress()`-Funktion im Demo benutzt haben. Für das vollständige CSS siehe die [CSS-Quelle](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zunächst das `<article>` innerhalb des `<body>` mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), dann setzen wir einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width` Werte darzustellen, die wir an anderer Stelle verwenden werden. Wir zielen dann auf das `<article>` Element, geben ihm {{cssxref("min-width")}} und {{cssxref("max-width")}} Werte, die den benutzerdefinierten Eigenschaften entsprechen, die wir zuvor gesetzt haben. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ dazu positionieren können, dann geben wir ihm eine prozentuale {{cssxref("width")}}, feste {{cssxref("height")}} und {{cssxref("border")}}.

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

Nun zu unserem `progress` `<div>`. Wir setzen seine `width` gleich einem Prozentsatz, basierend auf dem Fortschrittsverhältnis der `--container-width` benutzerdefinierten Eigenschaft, die über JavaScript auf das `<article>` gesetzt wurde, zwischen seiner `min-width` und `max-width` (wir verwenden die gleichen benutzerdefinierten Eigenschaften hier für den zweiten und dritten `progress()` Parameter, die wir für die `<article>` `min-width` und `max-width` verwendet haben).

Wir geben ihm auch eine `height` und {{cssxref("background-color")}}, dann positionieren wir es absolut an der oberen linken Ecke des `<article>`.

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

Als Nächstes schauen wir uns unser `background` `<section>` an. Wir positionieren es absolut relativ zu unserem `<article>`, wobei {{cssxref("inset", "inset: 0")}} darauf gesetzt wird, damit es dieselbe Größe übernimmt und darüber liegt. Wir setzen dann ein ziemlich breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der {{cssxref("background-position-x")}} Eigenschaft den gleichen Wert geben, den wir der `width` Eigenschaft des Fortschrittsbalkens gegeben haben. Dies hat den Effekt, dass, wenn Sie die Breite des Browserfensters erhöhen, das Hintergrundbild nach links verschoben wird und so einen schönen Bildeffekt erzeugt.

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

Wir positionieren das `content` `<section>` absolut, damit es über dem `background` `<section>` liegt, und geben ihm etwas {{cssxref("padding")}}. Dann variieren wir zwei Eigenschaftswerte, während das Browserfenster geändert wird, indem wir das gleiche Fortschrittsverhältnis wie zuvor verwenden:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis mit 255 multiplizieren, um einen proportionellen Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, was die Szene für Tag und Nacht ändert (der Farbwert hat eine Deckkraft von `0.5`, sodass er wie ein Tönung des darunter liegenden Bildes wirkt).
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

- [CSS-Werte und -Einheiten-Modul](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Container-Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
