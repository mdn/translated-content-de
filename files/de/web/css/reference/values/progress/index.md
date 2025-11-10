---
title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{CSSRef}}{{SeeCompatTable}}

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen {{cssxref("&lt;number>")}} Wert zurück, der die Position eines Wertes (des Fortschrittswertes) relativ zu zwei anderen Werten (den Start- und Endwerten des Fortschritts) darstellt.

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

Die `progress()` Funktion nimmt drei durch Kommas getrennte {{cssxref("&lt;calc-sum>")}} Ausdrücke als Parameter:

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

Diese sind jeweils:

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

Wenn der Fortschrittswert zwischen dem Fortschrittsstart und dem Fortschrittsende liegt, liegt der Rückgabewert zwischen `0` und `1`, was einen Prozentsatz darstellt. Wenn der Fortschrittswert kleiner als der Startwert oder größer als der Endwert ist, ist die Funktion immer noch gültig, aber der Rückgabewert wird auf `0` oder `1` beschränkt, je nachdem.

## Beschreibung

Die CSS `progress()` Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was nützlich ist für Anwendungsfälle wie Fortschrittsbalken-Animationen oder Kästchen, die sich beim Weitwerden einblenden, um ihren Inhalt zu zeigen.

Die einfachste mögliche Verwendung könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert von {{cssxref("opacity")}} `0.5`, da 5 die Mitte zwischen `0` und `10` ist.

### Erlaubte Einheitstypen

Die Parameter einer `progress()` Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder Ergebnisse von Ausdrücken) können beliebige {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}}, oder {{cssxref("&lt;percentage>")}} Werte sein. Sie können unterschiedliche Einheiten haben, müssen jedoch alle vom gleichen Typ sein, ansonsten ist die Funktion ungültig.

Das zuvor gesehene Beispiel ist gültig – alle seine Parameter sind einheitenlose `<number>` Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig – alle seine Parameter haben {{cssxref("&lt;length>")}} Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Vorausgesetzt die {{cssxref("font-size")}} ist `16px` zum Zeitpunkt der Berechnung, wird `3em` zu `48px`, was `48%` des Weges zwischen `0px` und `100px` ist, sodass der Rückgabewert `0.48` ist.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten beiden Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, sodass die resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellen von einheitenlosen Werten

Die `progress()` Funktion gibt einheitenlose Werte aus, daher kann sie verwendet werden, um Einheiten von Werten zu entfernen, ähnlich wie beim [`tan(atan2())` Hack](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Beachten Sie jedoch, dass dies aufgrund der Updates im Verhalten von [CSS-typisierte Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) jetzt auch durch einfache Division erreicht werden kann.

### Kombinieren von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer nur einen einheitenlosen Wert zwischen `0` und `1` zurückgibt, ist es üblich, ihn mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} zu kombinieren, um den gewünschten Wert und die gewünschten Einheiten auszugeben. Sie können auch [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb von `progress()` Funktionen verwenden — dies ist sinnvoll, da Sie diese Werte oft an mehreren Stellen einstellen und/oder auf benutzerdefinierte Eigenschaften stützen möchten, die über JavaScript gesetzt werden.

Das folgende Beispiel berechnet, zu welchem Prozentsatz die Ansichtsbreite zwischen einer Mindestbreite von `320px` und einer Höchstbreite von `1200px` liegt. Die `calc()` Funktion wird verwendet, um den Rückgabewert von `progress()` mit `600px` zu multiplizieren und in einen Pixelwert umzuwandeln, der die Hälfte des Fortschrittswerts der Ansichtsbreite zwischen `320px` und `1200px` sein wird.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Zum Beispiel, wenn die Ansichtsbreite `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` ergibt.

Das nächste Beispiel ist ein Update des vorherigen, bei dem wir benutzerdefinierte Eigenschaften für den Fortschritt, den Fortschrittsstart und den Fortschrittsende-Werte verwendet haben.

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

Es ist möglich, `progress()` Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb von Kurzschreibeigenschaften zu berechnen, vorausgesetzt, Ihre Funktionen geben gültige Typen für diese Werte zurück.

Dies kann zu einigen komplexen Ausdrücken führen. Zum Beispiel berechnen wir hier die ersten beiden Kanäle einer [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Farbe proportional zum gleichen Breitenverhältnis wie zuvor:

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

### Grundlegende `progress()` Nutzung

In diesem Beispiel zeigen wir die grundlegende Nutzung der `progress()` Funktion, um die Breite eines Fortschrittsbalkens als Prozentsatz gleich dem Fortschrittsverhältnis seiner Elternbreite zwischen ihrer Mindest- und Höchstbreite festzulegen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element, das unseren Inhalt darstellt, und ein {{htmlelement("div")}} Element, das den Breitenfortschrittsbalken darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zuerst einige benutzerdefinierte Eigenschaften auf unserem `<section>` Element, um seine `min-width`, `max-width` und `width` darzustellen. Wir setzen dann diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben unserem `<section>` eine solide {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zu unserem `<div>` — wir geben ihm zuerst eine `height` und eine dunkle `background-color`, damit es sich von unserem `<section>` Element abhebt. Wir berechnen dann seine `width`, indem wir eine `progress()` Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen, und dann eine `calc()` Funktion verwenden, um den Rückgabewert von `progress()` mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Die Breite des `<div>` ist `75%` der `<section>` Breite, da die `min-width` `400px`, die `max-width` `700px` und die `width` `600px` ist, was `75%` der Entfernung zwischen den beiden vorherigen Werten ist.

### Effekte beim Ändern der Größe eines Containers

Dieses Beispiel zeigt einige fortgeschrittenere Anwendungen der `progress()` Funktion, die zu unterhaltsamen Effekten führen, wenn die Browserfenstergröße geändert wird.

Dieses Beispiel funktioniert viel besser, wenn es in voller Größe in einem Desktop-Browser-Tab gerendert wird. Daher haben wir es nicht in einem eingebetteten Live-Sample auf dieser Seite gerendert. Stattdessen können Sie es live unter [CSS `progress()` Function Demo](https://mdn.github.io/dom-examples/css-progress/) sehen (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Breite des Browserfensters zu erhöhen und zu verkleinern, um den Effekt zu sehen. Lassen Sie dies offen, damit Sie darauf zurückkommen können, während Sie die untenstehende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}} Elemente — eines, um ein Hintergrundbild anzuhängen, und das andere, um unseren Inhalt zu enthalten. Das `<section class="content">` enthält auch ein `<div class="progress">`, das einen Breitenfortschrittsbalken darstellt, genauso wie in unserem vorherigen Demo. Wir haben den Rest des Inhalts der Kürze halber weggelassen.

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

In unserem Skript greifen wir zuerst auf unser `<article>` Element zu. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abrufen und eine benutzerdefinierte Eigenschaft darauf setzen, die `--container-width` heißt und der Client-Breite abgerundet, mit `px` angehängt, entspricht.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event) Event-Listener auf das `Window` Objekt, der `setContainerWidth()` ausführt, wenn die Browserfenstergröße geändert wird. Wir führen es auch einmal aus, um die `--container-width` benutzerdefinierte Eigenschaft auf dem `<article>` Element zu setzen, sobald die Seite geladen wird.

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

Mit dieser Einrichtung können wir nun einige Eigenschaftswerte basierend auf der `--container-width` setzen, sodass sich Teile unseres Designs dynamisch ändern, wenn das Fenster in der Größe verändert wird.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant dafür ist, wie wir die `progress()` Funktion im Demo verwendet haben. Für das vollständige CSS siehe den [CSS Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zuerst das `<article>` innerhalb des `<body>` unter Verwendung von [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), dann setzen wir einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width` Werte darzustellen, die wir an anderer Stelle verwenden werden. Wir zielen dann auf das `<article>` Element, geben ihm {{cssxref("min-width")}} und {{cssxref("max-width")}} Werte, die den zuvor gesetzten benutzerdefinierten Eigenschaften entsprechen. Wir setzen seine {{cssxref("position")}} auf `relative`, sodass wir seinen Inhalt relativ dazu positionieren, dann geben wir ihm eine prozentbasierte {{cssxref("width")}}, eine feste {{cssxref("height")}}, und {{cssxref("border")}}.

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

Nun zu unserem `progress` `<div>`. Wir setzen seine `width` gleich einem Prozentsatz basierend auf dem Fortschrittsverhältnis der `--container-width` benutzerdefinierten Eigenschaft, die über JavaScript auf dem `<article>` Element gesetzt wurde, zwischen ihrer `min-width` und `max-width` (wir verwenden hier die gleichen benutzerdefinierten Eigenschaften als zweite und dritte `progress()` Parameter wie wir für die `<article>` `min-width` und `max-width` verwendet haben).

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

Als nächstes schauen wir uns unseren `background` `<section>` an. Wir positionieren es absolut relativ zu unserem `<article>`, setzen {{cssxref("inset", "inset: 0")}} darauf, sodass es die gleiche Größe annimmt und darüber liegt. Dann setzen wir ein recht breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der {{cssxref("background-position-x")}} Eigenschaft denselben Wert geben wie der `width` Eigenschaft des Fortschrittsbalkens. Dies hat den Effekt, wenn Sie die Breite des Browserfensters erhöhen, dass das Hintergrundbild nach links verschoben wird, was einen schönen Bildlauf-Effekt erzeugt.

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

Wir positionieren das `content` `<section>` absolut, sodass es über dem `background` `<section>` liegt, dann geben wir ihm etwas {{cssxref("padding")}}. Wir variieren dann zwei Eigenschaftswerte, wenn das Browserfenster in der Größe verändert wird, unter Verwendung des gleichen Fortschrittsverhältnisses wie zuvor:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis jeweils mit 255 multiplizieren, um einen proportionalen Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, wodurch es so aussieht, als ob es von Nacht zu Tag wechselt (der Farbwert hat eine Opazität von `0.5`, sodass er wie ein Farbfilter für das darunterliegende Bild wirkt).
- Wir variieren die {{cssxref("opacity")}}, sodass der Inhalt ein wenig verblasst, wenn das Fenster breiter wird.

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

- [CSS-Werte und -Einheiten Modul](/de/docs/Web/CSS/Guides/Values_and_units)
- [Container-Style-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
