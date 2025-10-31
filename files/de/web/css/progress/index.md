---
title: progress()
slug: Web/CSS/progress
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{CSSRef}}{{SeeCompatTable}}

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) gibt einen {{cssxref("&lt;number>")}} Wert zurück, der die Position eines Wertes (des Fortschrittswertes) relativ zu zwei anderen Werten (dem Beginn und dem Ende des Fortschritts) darstellt.

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

Dies sind:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den anderen beiden Werten berechnet werden soll.
- Fortschrittsbeginn
  - : Die untere Fortschrittsgrenze.
- Fortschrittsende
  - : Die obere Fortschrittsgrenze.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswertes relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Wenn der Fortschrittswert zwischen dem Beginn und dem Ende des Fortschritts liegt, wird der Rückgabewert zwischen `0` und `1` liegen, was einem Prozentsatz entspricht. Wenn der Fortschrittswert kleiner als der Anfangswert oder größer als der Endwert ist, bleibt die Funktion weiterhin gültig, aber der Rückgabewert wird entsprechend auf `0` oder `1` begrenzt.

## Beschreibung

Die CSS `progress()` Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was für Anwendungsfälle wie Fortschrittsbalken-Animationen oder Boxen, die beim Breiterwerden ihr Inhalt enthüllen, nützlich ist.

Die einfachste Anwendung könnte folgendermaßen aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert der {{cssxref("opacity")}} `0.5`, da `5` genau zwischen `0` und `10` liegt.

### Erlaubte Einheitentypen

Die Parameter einer `progress()` Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder die Resultate der Ausdrücke) können jeder {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}}, oder {{cssxref("&lt;percentage>")}} Wert sein. Sie können unterschiedliche Einheiten haben, müssen jedoch alle vom gleichen Typ sein, sonst ist die Funktion ungültig.

Das zuvor gezeigte Beispiel ist gültig — alle seine Parameter sind einheitenlose `<number>` Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig — alle seine Parameter haben {{cssxref("&lt;length>")}} Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Angenommen, die {{cssxref("font-size")}} ist `16px` zum Zeitpunkt der Berechnung, wird `3em` zu `48px`, was `48%` des Weges zwischen `0px` und `100px` entspricht, sodass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten beiden Beispiele in diesem Abschnitt sind jedoch nicht gültig, da die Typen nicht übereinstimmen, weshalb die resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellen von einheitenlosen Werten

Die `progress()` Funktion gibt einheitenlose Werte aus, daher kann sie dazu verwendet werden, Einheiten von Werten zu entfernen, ähnlich wie der [`tan(atan2())` Trick](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Beachten Sie jedoch, dass dies aufgrund der Aktualisierungen im Verhalten der [CSS-Typ-Arithmetik](/de/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombinieren von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` ausschließlich ein einheitenloser Wert zwischen `0` und `1` zurückgibt, wird es oft mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} kombiniert, um den gewünschten Wert und die gewünschten Einheiten auszugeben. Sie können auch [CSS-benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb `progress()` Funktionen verwenden — das macht Sinn, da Sie oft dieselben Werte an mehreren Stellen setzen und/oder auf benutzerdefinierten Eigenschaften aufbauen möchten, die via JavaScript gesetzt wurden.

Das folgende Beispiel berechnet, welcher Prozentsatz der Ansichtsbreite zwischen einer minimalen Breite von `320px` und einer maximalen Breite von `1200px` liegt. Die `calc()` Funktion wird verwendet, um den `progress()` Rückgabewert mit `600px` zu multiplizieren, um ihn in einen Pixelwert zu konvertieren, der die Hälfte des Fortschrittswerts der Ansichtsbreite zwischen `320px` und `1200px` beträgt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Wenn die Ansichtsbreite beispielsweise `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` entspricht.

Das nächste Beispiel ist eine Aktualisierung des vorherigen, in welchem wir benutzerdefinierte Eigenschaften für den Fortschritt, den Start und das Ende des Fortschritts verwendet haben.

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

Es ist möglich, `progress()` Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb von Kurzschriftswerteigenschaften zu berechnen, vorausgesetzt, Ihre Funktionen geben gültige Typen für diese Werte zurück.

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

### Grundlegende `progress()` Nutzung

In diesem Beispiel zeigen wir die grundlegende Nutzung der `progress()` Funktion, um die Breite eines Fortschrittsbalkens als Prozentsatz gleich dem Fortschrittsverhältnis der Breite seines übergeordneten Elements zwischen dessen `min-width` und `max-width` festzulegen.

#### HTML

Unser HTML umfasst ein {{htmlelement("section")}} Element, das unseren Inhalt repräsentiert, und ein {{htmlelement("div")}} Element, das den Fortschrittsbalken darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zunächst einige benutzerdefinierte Eigenschaften auf unser `<section>` Element, um dessen `min-width`, `max-width`, und `width` zu repräsentieren. Wir setzen dann diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben unserem `<section>` eine solide {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zu unserem `<div>` — wir geben ihm zunächst eine `height` und eine dunkle `background-color`, damit es sich gegen unser `<section>` Element abhebt. Dann berechnen wir seine `width`, indem wir eine `progress()` Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen, und dann eine `calc()` Funktion verwenden, um den `progress()` Rückgabewert mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Die Breite des `<div>` beträgt `75%` der `<section>` Breite, da die `min-width` `400px`, die `max-width` `700px` und die `width` `600px` sind, was `75%` des Weges zwischen den vorherigen beiden Werten beträgt.

### Größeneffekte auf einen Container

Dieses Beispiel zeigt einige umfangreichere Anwendungen der `progress()` Funktion, was zu einigen unterhaltsamen Effekten führt, wenn das Browserfenster in der Größe verändert wird.

Dieses Beispiel funktioniert viel besser, wenn es in voller Größe in einem Desktop-Browser-Tab dargestellt wird. Daher haben wir es nicht in einem eingebetteten Live-Beispiel auf dieser Seite gerendert. Stattdessen können Sie es live unter [CSS `progress()` function demo](https://mdn.github.io/dom-examples/css-progress/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)) ausführen.

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Browserfensterbreite zu vergrößern und zu verkleinern, um den Effekt zu sehen. Halten Sie dies geöffnet, damit Sie darauf zurückgreifen können, während Sie die folgende Erklärung lesen.

#### HTML

Unser HTML umfasst ein {{htmlelement("article")}} Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}} Elemente — eines, um ein Hintergrundbild daran zu hängen, und das andere, um unseren Inhalt zu enthalten. Das `<section class="content">` enthält auch ein `<div class="progress">`, das einen Breitenfortschrittsbalken darstellt, ähnlich wie der in unserer vorherigen Demo. Wir haben den Rest des Inhalts zur Kürze ausgelassen.

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

In unserem Skript greifen wir zuerst auf unser `<article>` Element zu. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abruft und eine benutzerdefinierte Eigenschaft darauf setzt, die `--container-width` genannt wird und der gerundeten Client-Breite mit `px` angefügt entspricht.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event) Ereignislistener auf das `Window` Objekt, das `setContainerWidth()` ausführt, wenn das Browserfenster in der Größe verändert wird. Wir führen es auch einmal aus, um die `--container-width` Eigenschaft auf dem `<article>` Element zu setzen, sobald die Seite geladen ist.

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

Mit dieser Einrichtung können wir nun einige Eigenschaftswerte basierend auf der `--container-width` setzen, sodass Teile unseres Designs dynamisch ändern, wenn das Fenster in der Größe verändert wird.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant ist, wie wir die `progress()` Funktion im Demo verwendet haben. Für das vollständige CSS siehe den [CSS Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zuerst das `<article>` innerhalb des `<body>` unter Verwendung von [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), dann setzen wir einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width` Werte zu repräsentieren, die wir anderswo verwenden werden. Wir zielen dann auf das `<article>` Element ab, geben ihm {{cssxref("min-width")}} und {{cssxref("max-width")}} Werte, die den benutzerdefinierten Eigenschaften entsprechen, die wir zuvor gesetzt haben. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ dazu positionieren können, geben ihm dann eine prozentuale {{cssxref("width")}}, feste {{cssxref("height")}}, und {{cssxref("border")}}.

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

Jetzt zu unserem `progress` `<div>`. Wir setzen seine `width` auf einen Prozentsatz basierend auf dem Fortschrittsverhältnis der `--container-width` benutzerdefinierten Eigenschaft, die über JavaScript auf das `<article>` Element gesetzt wurde, zwischen seiner `min-width` und `max-width` (wir verwenden dieselben benutzerdefinierten Eigenschaften hier für die zweiten und dritten `progress()` Parameter wie wir sie für die `<article>` `min-width` und `max-width` verwendet haben).

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

Als nächstes schauen wir uns unser `background` `<section>` an. Wir positionieren es absolut relativ zu unserem `<article>`, setzen dabei {{cssxref("inset", "inset: 0")}} darauf, sodass es dieselbe Größe annimmt und darüber liegt. Dann setzen wir ein ziemlich breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild indem wir der {{cssxref("background-position-x")}} Eigenschaft denselben Wert geben, wie wir ihn der `width` Eigenschaft des Fortschrittsbalkens gegeben haben. Dies hat den Effekt, dass, wenn Sie die Fensterbreite erhöhen, das Hintergrundbild nach links bewegt wird, was einen schönen Bildlauf-Effekt erzeugt.

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

Wir positionieren das `content` `<section>` absolut, sodass es über dem `background` `<section>` liegt, dann geben wir ihm ein wenig {{cssxref("padding")}}. Wir variieren dann zwei Eigenschaftswerte, während das Fenster in der Größe verändert wird, wobei wir dasselbe Fortschrittsverhältnis wie zuvor verwenden:

- Wir variieren die R und G Komponenten der `background-color`, indem wir das Fortschrittsverhältnis jeweils mit 255 multiplizieren, um einen proportionierten Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, wodurch die Szene so aussieht, als ob sie von Nacht zu Tag wechselt (der Farbwert hat eine Deckkraft von `0.5`, sodass es als Tönung für das darunterliegende Bild wirkt).
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

- [CSS-Werte und Einheiten Modul](/de/docs/Web/CSS/CSS_values_and_units)
- [Container-Stilanfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
