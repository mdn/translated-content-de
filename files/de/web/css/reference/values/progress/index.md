---
title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

{{CSSRef}}{{SeeCompatTable}}

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen {{cssxref("&lt;number>")}} Wert zurück, der die Position eines Werts (des Fortschrittswerts) relativ zu zwei anderen Werten (dem Fortschrittsstart- und Ende-Wert) darstellt.

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

Die `progress()` Funktion nimmt drei durch Kommata getrennte {{cssxref("&lt;calc-sum>")}} Ausdrücke als Parameter an:

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

Diese entsprechen:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den anderen beiden Werten berechnet wird.
- Fortschrittsstart
  - : Die untere Grenze des Fortschritts.
- Fortschrittsende
  - : Die obere Grenze des Fortschritts.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswerts relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Wenn der Fortschrittswert zwischen den Fortschrittsstart- und Ende-Werten liegt, liegt der Rückgabewert zwischen `0` und `1` und stellt einen Prozentsatz dar. Wenn der Fortschrittswert kleiner als der Fortschrittsstartwert oder größer als der Fortschrittsendwert ist, bleibt die Funktion gültig, aber der Rückgabewert wird auf `0` oder `1` begrenzt, jeweils.

## Beschreibung

Die CSS `progress()` Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was nützlich ist für Anwendungsfälle wie Fortschrittsbalkenanimationen oder Boxen, die einblenden, wenn sie breiter werden, um ihren Inhalt anzuzeigen.

Die einfachstmögliche Verwendung könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert von {{cssxref("opacity")}} `0.5`, da 5 genau mittig zwischen `0` und `10` liegt.

### Erlaubte Einheitentypen

Die Parameter einer `progress()` Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder Ergebnisse von Ausdrücken) können jeden {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}} oder {{cssxref("&lt;percentage>")}} Wert annehmen. Sie können unterschiedliche Einheiten haben, müssen aber alle vom selben Typ sein, sonst ist die Funktion ungültig.

Das zuvor gesehene Beispiel ist gültig — alle seine Parameter sind einheitenlose `<number>` Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig — alle seine Parameter haben {{cssxref("&lt;length>")}} Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Angenommen, die {{cssxref("font-size")}} beträgt `16px` zum Zeitpunkt der Berechnung, dann wird `3em` zu `48px` aufgelöst, was `48%` des Weges zwischen `0px` und `100px` ist, sodass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten beiden Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, sodass die resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellen von einheitenlosen Werten

Die `progress()` Funktion gibt einheitenlose Werte zurück, daher kann sie verwendet werden, um Einheiten von Werten in derselben Weise zu entfernen wie der [`tan(atan2())` Hack](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Beachten Sie jedoch, dass dies aufgrund der Aktualisierungen im Verhalten rund um [CSS typed arithmetic](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombination von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer nur einen einheitenlosen Wert zwischen `0` und `1` zurückgibt, ist es üblich, es mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} zu kombinieren, um den gewünschten Wert und die gewünschten Einheiten zu erhalten. Sie können auch [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb von `progress()` Funktionen verwenden — dies macht Sinn, da Sie oft dieselben Werte an mehreren Stellen festlegen möchten und/oder sie auf benutzerdefinierte Eigenschaften basieren, die über JavaScript gesetzt werden.

Das folgende Beispiel berechnet, wie viel Prozent die Ansichtbreite zwischen einer minimalen Breite von `320px` und einer maximalen Breite von `1200px` beträgt. Die `calc()` Funktion wird verwendet, um den `progress()` Rückgabewert mit `600px` zu multiplizieren, um ihn in einen Pixelwert umzuwandeln, der die Hälfte des Fortschrittswerts der Ansichtbreite zwischen `320px` und `1200px` beträgt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Zum Beispiel, wenn die Ansichtbreite `700px` ist, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` ergibt.

Das nächste Beispiel ist eine Aktualisierung des vorherigen, in dem wir benutzerdefinierte Eigenschaften für die Fortschritts-, Fortschrittsstart- und Fortschrittsendwerte verwendet haben.

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

Es ist möglich, `progress()` Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentenvorwerten innerhalb verkürzter Eigenschaftswerte zu berechnen, vorausgesetzt Ihre Funktionen geben gültige Typen für diese Werte zurück.

Dies kann zu einigen komplexen Ausdrücken führen. Zum Beispiel berechnen wir hier die ersten zwei Kanäle einer [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Farbe proportional zum gleichen Breitenverhältnis wie zuvor:

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

In diesem Beispiel zeigen wir die grundlegende Verwendung der `progress()` Funktion, um die `width` eines Fortschrittsbalkens auf einen Prozentsatz zu setzen, der dem Fortschrittsverhältnis seiner Eltern`width` zwischen seiner `min-width` und `max-width` entspricht.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element, das unseren Inhalt darstellt, und ein {{htmlelement("div")}} Element, das den Fortschrittsbalken darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zuerst einige benutzerdefinierte Eigenschaften auf unserem `<section>` Element, um seine `min-width`, `max-width` und `width` darzustellen. Dann setzen wir diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte, bevor wir unserem `<section>` einen soliden {{cssxref("background-color")}} geben, damit es sichtbar ist.

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

Nun zu unserem `<div>` — Wir geben ihm zuerst eine `height` und eine dunkle `background-color`, damit es sich von unserem `<section>` Element abhebt. Dann berechnen wir seine `width`, indem wir eine `progress()` Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen und dann eine `calc()` Funktion verwenden, um den `progress()` Rückgabewert mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Die Breite des `<div>` beträgt `75%` der `<section>` Breite, da die `min-width` `400px` beträgt, die `max-width` `700px` und die `width` `600px`, was `75%` des Abstands zwischen den vorherigen beiden Werten entspricht.

### Größenänderungseffekte auf einem Container

Dieses Beispiel zeigt einige komplexere Verwendungen der `progress()` Funktion, was zu interessanten Effekten führt, wenn die Größe des Browserfensters geändert wird.

Dieses Beispiel funktioniert viel besser, wenn es in voller Größe in einem Desktop-Browser-Tab gerendert wird. Daher haben wir es nicht als eingebettetes Live-Beispiel auf dieser Seite dargestellt. Stattdessen finden Sie es live unter [CSS `progress()` Funktionsdemo](https://mdn.github.io/dom-examples/css-progress/) ausgeführt (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Öffnen Sie das Live-Beispiel in einem separaten Tab, und versuchen Sie, die Breite des Browserfensters zu vergrößern und zu verkleinern, um den Effekt zu sehen. Lassen Sie dies offen, damit Sie darauf zurückkommen können, während Sie die Erklärung unten lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}} Elemente — eines, um ein Hintergrundbild zu platzieren, und das andere, um unseren Inhalt zu enthalten. Der `<section class="content">` enthält auch ein `<div class="progress">`, das einen Breitenfortschrittsbalken darstellt, genauso wie der in unserem vorherigen Demo. Wir haben den Rest des Inhalts der Kürze halber weggelassen.

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

In unserem Skript holen wir uns zuerst eine Referenz auf unser `<article>` Element. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abruft und eine benutzerdefinierte Eigenschaft darauf einstellt, die `--container-width` genannt wird. Diese ist gleich der abgerundeten Client-Breite, zu der `px` hinzugefügt wird.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis-Listener auf das `Window` Objekt, das `setContainerWidth()` ausführt, wenn die Größe des Browserfensters geändert wird. Wir führen es auch einmal aus, um die `--container-width` benutzerdefinierte Eigenschaft auf dem `<article>` Element beim Laden der Seite zu setzen.

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

Mit dieser Einrichtung können wir nun einige Eigenschaftswerte basierend auf der `--container-width` festlegen, sodass Teile unseres Designs dynamisch geändert werden, wenn die Fenstergröße angepasst wird.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant ist, wie wir die `progress()` Funktion im Demo verwendet haben. Für das vollständige CSS, siehe den [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zuerst das `<article>` im `<body>` mit [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), setzen dann einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width` Werte darzustellen, die wir anderswo verwenden werden. Wir setzen dann das `<article>` Element, indem wir ihm {{cssxref("min-width")}} und {{cssxref("max-width")}} Werte geben, die gleich den zuvor gesetzten benutzerdefinierten Eigenschaften sind. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ dazu positionieren können, dann geben wir ihm eine prozentuale {{cssxref("width")}}, eine feste {{cssxref("height")}}, und eine {{cssxref("border")}}.

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

Nun zu unserem `<div>` mit `progress`. Wir setzen seine `width` gleich einem Prozentsatz, basierend auf dem Fortschrittsverhältnis der `--container-width` benutzerdefinierten Eigenschaft, die über JavaScript auf dem `<article>` Element festgelegt wurde, zwischen der `min-width` und `max-width` (wir verwenden hier dieselben benutzerdefinierten Eigenschaften für die zweite und dritte `progress()` Parameter wie wir für die `min-width` und `max-width` des `<article>` verwendet haben).

Wir geben ihm auch eine `height` und {{cssxref("background-color")}}, dann positionieren wir ihn absolut in der linken oberen Ecke des `<article>`.

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

Als nächstes betrachten wir unser `<section>` mit Hintergrund. Wir positionieren es absolut relativ zu unserem `<article>`, indem wir {{cssxref("inset", "inset: 0")}} darauf setzen, sodass es die gleiche Größe annimmt und darüber liegt. Wir setzen dann ein ziemlich breites {{cssxref("background-image")}} darauf, und positionieren das Hintergrundbild, indem wir der Eigenschaft {{cssxref("background-position-x")}} denselben Wert geben wie der Breitenprozentwert des Fortschrittsbalkens. Dies hat den Effekt, dass, wenn Sie die Breite des Browserfensters vergrößern, das Hintergrundbild nach links verschoben wird und einen schönen Bildscroll-Effekt erzeugt.

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

Wir positionieren das `<section>` mit Inhalt absolut, sodass es über dem Hintergrund `<section>` liegt, und geben ihm ein wenig {{cssxref("padding")}}. Dann variieren wir zwei Eigenschaftswerte, während das Browserfenster angepasst wird, unter Verwendung desselben Fortschrittsverhältnisses wie zuvor:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis in beiden Fällen mit 255 multiplizieren, um einen proportionalen Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, wodurch die Szene aussieht, als würde sie von Nacht zu Tag wechseln (der Farbwert hat eine Deckkraft von `0.5`, sodass er wie ein Farbton für das darunterliegende Bild wirkt).
- Wir variieren die {{cssxref("opacity")}}, damit der Inhalt ein wenig einblendet, wenn das Fenster breiter wird.

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

- [CSS Werte und Einheiten Modul](/de/docs/Web/CSS/Guides/Values_and_units)
- [Containereigenschaftsabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
