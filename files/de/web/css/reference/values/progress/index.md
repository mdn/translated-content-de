---
title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{CSSRef}}{{SeeCompatTable}}

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen {{cssxref("&lt;number>")}}-Wert zurück, der die Position eines Wertes (den Fortschrittswert) relativ zu zwei anderen Werten (den Start- und Endwerten des Fortschritts) repräsentiert.

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

Die `progress()`-Funktion nimmt drei durch Kommas getrennte {{cssxref("&lt;calc-sum>")}}-Ausdrücke als Parameter entgegen:

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

Diese sind jeweils:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den anderen beiden Werten berechnet werden soll.
- Fortschrittsanfang
  - : Die untere Grenze des Fortschritts.
- Fortschrittsende
  - : Die obere Grenze des Fortschritts.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswertes relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Wenn der Fortschrittswert zwischen den Fortschrittsstart- und -endwerten liegt, wird der Rückgabewert zwischen `0` und `1` liegen, was einem Prozentsatz entspricht. Wenn der Fortschrittswert kleiner als der Startwert oder größer als der Endwert ist, bleibt die Funktion gültig, aber der Rückgabewert wird auf `0` bzw. `1` begrenzt.

## Beschreibung

Die CSS-Funktion `progress()` bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was nützlich ist, um Anwendungsfälle wie Fortschrittsleistenanimationen oder Kästen zu erstellen, die verblassen, wenn sie breiter werden, um ihren Inhalt zu enthüllen.

Die einfachste mögliche Verwendung könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert von {{cssxref("opacity")}} `0.5`, da 5 genau in der Mitte zwischen `0` und `10` liegt.

### Erlaubte Einheitstypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder deren Ausdrucksergebnisse) können jeden {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}}, oder {{cssxref("&lt;percentage>")}}-Wert haben. Sie können unterschiedliche Einheiten haben, müssen jedoch alle vom gleichen Typ sein, andernfalls ist die Funktion ungültig.

Das zuvor gezeigte Beispiel ist gültig — all seine Parameter sind einheitlose `<number>`-Werte:

```css example-good
progress(5, 0, 10)
```

Auch das nächste Beispiel ist gültig — alle seine Parameter haben {{cssxref("&lt;length>")}}-Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Wenn die {{cssxref("font-size")}} zum Zeitpunkt der Berechnung `16px` ist, wird `3em` zu `48px`, was `48%` des Weges zwischen `0px` und `100px` entspricht, sodass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten beiden Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, sodass die resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellen von einheitlosen Werten

Die `progress()`-Funktion gibt einheitlose Werte zurück und kann daher zum Entfernen von Einheiten aus Werten verwendet werden, ähnlich wie der [`tan(atan2())`-Hack](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Beachten Sie jedoch, dass dies aufgrund der Verhaltensaktualisierungen bezüglich [CSS typisierte Arithmetik](/de/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombinieren von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer nur einen einheitlosen Wert zwischen `0` und `1` zurückgibt, ist es üblich, es mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} zu kombinieren, um damit den gewünschten Wert und die Einheiten zu erhalten. Sie können auch [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb von `progress()`-Funktionen verwenden – das macht Sinn, da Sie oft dieselben Werte an mehreren Stellen setzen und/oder auf benutzerdefinierte Eigenschaften, die via JavaScript gesetzt wurden, basieren möchten.

Das folgende Beispiel berechnet, welcher Prozentsatz der Breite des Ansichtsfensters zwischen einer Mindestbreite von `320px` und einer Maximalbreite von `1200px` liegt. Die `calc()`-Funktion wird verwendet, um den Rückgabewert von `progress()` mit `600px` zu multiplizieren, um ihn in einen Pixelwert umzuwandeln, der die Hälfte des Fortschrittswertes der Ansichtsfensterbreite zwischen `320px` und `1200px` darstellt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Zum Beispiel, wenn die Ansichtsfensterbreite `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` ergibt.

Das nächste Beispiel ist eine Aktualisierung des vorherigen, bei dem wir benutzerdefinierte Eigenschaften für die Fortschritts-, Fortschrittsstart- und Fortschrittsendwerte verwendet haben.

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

Es ist möglich, `progress()`-Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb von Kurzschreibeigenschaftswerten zu berechnen, vorausgesetzt, Ihre Funktionen geben gültige Typen für diese Werte zurück.

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

### Grundlegende Nutzung von `progress()`

In diesem Beispiel wird die grundlegende Verwendung der `progress()`-Funktion gezeigt, um eine Fortschrittsleistenbreite als Prozentsatz darzustellen, der dem Fortschrittsverhältnis der Breite seines Elternteils zwischen seiner Mindest- und Maximalbreite entspricht.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element, das unseren Inhalt repräsentiert, und ein {{htmlelement("div")}}-Element, das die Fortschrittsleistenbreite darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zunächst einige benutzerdefinierte Eigenschaften auf unserem `<section>`-Element, um seine Mindestbreite, Maximalbreite und Breite darzustellen. Dann setzen wir diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben unserem `<section>` eine solide {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zu unserem `<div>` - wir geben ihm zunächst eine `height` und eine dunkle `background-color`, sodass es sich von unserem `<section>`-Element abhebt. Dann berechnen wir seine Breite, indem wir eine `progress()`-Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen, und dann eine `calc()`-Funktion verwenden, um den Rückgabewert von `progress()` mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Dieses Demo wird wie folgt dargestellt:

{{EmbedLiveSample("basic", "100%", "150")}}

Die Breite des `<div>` beträgt `75%` der `<section>`-Breite, da die Mindestbreite `400px`, die Maximalbreite `700px` und die Breite `600px` beträgt, was `75%` des Abstands zwischen den beiden vorherigen Werten ist.

### Auswirkungen der Größenänderung eines Containers

Dieses Beispiel zeigt einige komplexere Verwendungen der `progress()`-Funktion, die bei der Größenänderung des Browserfensters zu einigen unterhaltsamen Effekten führen.

Dieses Beispiel funktioniert viel besser, wenn es in voller Größe in einem Desktop-Browser-Tab dargestellt wird. Daher haben wir es nicht in einem eingebetteten Live-Beispiel auf dieser Seite gerendert. Stattdessen können Sie es live unter [CSS `progress()` function demo](https://mdn.github.io/dom-examples/css-progress/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)) ausführen.

Öffnen Sie das Live-Beispiel in einem separaten Tab, und versuchen Sie, die Breite des Browserfensters zu vergrößern und zu verkleinern, um den Effekt zu sehen. Halten Sie dies offen, da Sie vielleicht darauf zurückgreifen möchten, während Sie die folgende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}}-Elemente — eines, um ein Hintergrundbild aufzuhängen, und das andere, um unseren Inhalt zu enthalten. Das `<section class="content">` enthält auch ein `<div class="progress">`, das eine Breitenfortschrittsleiste darstellt, genau wie die in unserem vorherigen Demo. Wir haben den Rest des Inhalts aus Gründen der Kürze ausgelassen.

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

In unserem Skript holen wir uns zunächst eine Referenz auf unser `<article>`-Element. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) ermittelt und ihr eine benutzerdefinierte Eigenschaft namens `--container-width` zuweist, die gleich der abgerundeten Client-Breite ist, mit `px` angehängt.

Dann setzen wir einen [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignislistener für das `Window`-Objekt, der `setContainerWidth()` ausführt, wenn das Browserfenster die Größe ändert. Wir führen sie außerdem einmal aus, um die `--container-width`-benutzerdefinierte Eigenschaft beim Laden der Seite auf das `<article>`-Element zu setzen.

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

Mit dieser Einrichtung können wir jetzt einige Eigenschaftswerte basierend auf der `--container-width` setzen, sodass Teile unseres Designs dynamisch verändert werden, wenn das Fenster die Größe ändert.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant dafür ist, wie wir die `progress()`-Funktion im Demo verwendet haben. Für das vollständige CSS siehe den [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zunächst das `<article>` innerhalb des `<body>` mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), setzen dann einige benutzerdefinierte Eigenschaften darauf, um die `min-width`- und `max-width`-Werte darzustellen, die wir an anderer Stelle verwenden werden. Dann zielen wir auf das `<article>`-Element ab, geben ihm {{cssxref("min-width")}}- und {{cssxref("max-width")}}-Werte, die den benutzerdefinierten Eigenschaften entsprechen, die wir zuvor gesetzt haben. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ dazu positionieren können, geben ihm einen prozentualen {{cssxref("width")}}, feste {{cssxref("height")}} und {{cssxref("border")}}.

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

Nun zu unserem `progress` `<div>`. Wir setzen seine `width` gleich einem Prozentsatz basierend auf dem Fortschrittsverhältnis der `--container-width`-benutzerdefinierten Eigenschaft, die auf das `<article>`-Element via JavaScript zwischen seiner `min-width` und `max-width` gesetzt wurde (wir verwenden die gleichen benutzerdefinierten Eigenschaften hier für den zweiten und dritten `progress()`-Parameter, die auch für die `<article>` `min-width` und `max-width` verwendet wurden).

Wir geben ihm auch eine `height` und {{cssxref("background-color")}}, dann positionieren wir es absolut an der oberen linken Ecke des `<article>`.

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

Als Nächstes betrachten wir unser `background` `<section>`. Wir positionieren es absolut relativ zu unserem `<article>`, setzen {{cssxref("inset", "inset: 0")}} darauf, sodass es die gleiche Größe annimmt und darüber liegt. Dann setzen wir ein ziemlich breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der Eigenschaft {{cssxref("background-position-x")}} den gleichen Wert geben, wie wir ihn der `width`-Eigenschaft der Fortschrittsleiste gegeben haben. Dies hat den Effekt, dass, wenn Sie die Browserfensterbreite erhöhen, das Hintergrundbild nach links verschoben wird und ein schöner Bildlauf-Effekt entsteht.

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

Wir positionieren das `content` `<section>` absolut, sodass es über dem `background` `<section>` liegt, dann geben wir ihm einige {{cssxref("padding")}}. Wir variieren dann zwei Eigenschaftswerte, während das Browserfenster die Größe ändert, indem wir das gleiche Fortschrittsverhältnis wie zuvor verwenden:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis jeweils mal 255 multiplizieren, um einen proportionalen Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, wodurch die Szene aussieht, als würde sie von Nacht zu Tag wechseln (der Farbwert hat eine Opazität von `0.5`, sodass er wie eine Tönung für das darunterliegende Bild wirkt).
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

- [CSS Werte und Einheiten Modul](/de/docs/Web/CSS/CSS_values_and_units)
- [Container-Style-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
