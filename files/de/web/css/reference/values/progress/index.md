---
title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{CSSRef}}

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen {{cssxref("&lt;number>")}} Wert zurück, der die Position eines Wertes (des Fortschrittswertes) relativ zu zwei anderen Werten (dem Start- und dem Endwert des Fortschritts) darstellt.

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

Die `progress()`-Funktion nimmt drei durch Kommas getrennte {{cssxref("&lt;calc-sum>")}} Ausdrücke als Parameter entgegen:

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

Dies sind jeweils:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den anderen beiden Werten berechnet werden soll.
- Start des Fortschritts
  - : Die untere Fortschrittsgrenze.
- Ende des Fortschritts
  - : Die obere Fortschrittsgrenze.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswertes relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Wenn der Fortschrittswert zwischen dem Start- und Endwert des Fortschritts liegt, wird der Rückgabewert zwischen `0` und `1` sein, was einem Prozentsatz entspricht. Ist der Fortschrittswert kleiner als der Startwert oder größer als der Endwert, bleibt die Funktion gültig, aber der Rückgabewert wird auf `0` oder `1` begrenzt.

## Beschreibung

Die CSS `progress()`-Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was nützlich ist, um Anwendungsfälle wie Fortschrittsbalken-Animationen oder Boxen zu erstellen, die sich erweitern, um ihren Inhalt offenzulegen.

Die einfachste mögliche Verwendung könnte folgendermaßen aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall würde der berechnete Wert von {{cssxref("opacity")}} `0.5` betragen, da 5 genau zwischen `0` und `10` liegt.

### Erlaubte Einheitstypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder die Ergebnisse der Ausdrücke) können jeden {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}} oder {{cssxref("&lt;percentage>")}} Wert haben. Sie dürfen unterschiedliche Einheiten haben, müssen aber alle vom gleichen Typ sein, sonst ist die Funktion ungültig.

Das zuvor gesehene Beispiel ist gültig — alle seine Parameter sind einheitenlose `<number>` Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig — alle seine Parameter haben {{cssxref("&lt;length>")}} Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Vorausgesetzt, die {{cssxref("font-size")}} beträgt `16px` zum Zeitpunkt der Berechnung, wird `3em` auf `48px` aufgelöst, was `48%` des Weges zwischen `0px` und `100px` ist, sodass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, daher ergeben die resultierenden Berechnungen keinen Sinn.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellen von einheitenlosen Werten

Die `progress()`-Funktion gibt einheitenlose Werte aus, daher kann sie genutzt werden, um Einheiten von Werten zu entfernen, ähnlich wie beim [`tan(atan2())` Hack](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Beachten Sie jedoch, dass dies aufgrund der Aktualisierungen im Verhalten der [CSS-typisierten Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombination von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer nur einen einheitenlosen Wert zwischen `0` und `1` zurückgibt, wird es oft in Kombination mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} verwendet, um den gewünschten Wert und die Einheiten auszugeben. Sie können auch [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb von `progress()`-Funktionen verwenden — das ist sinnvoll, da Sie oft dieselben Werte an mehreren Stellen festlegen und/oder sie auf benutzerdefinierte Eigenschaften stützen möchten, die über JavaScript gesetzt werden.

Das folgende Beispiel berechnet, wie viel Prozent der Viewport-Breite zwischen einer minimalen Breite von `320px` und einer maximalen Breite von `1200px` liegen. Die `calc()`-Funktion wird verwendet, um den `progress()`-Rückgabewert mit `600px` zu multiplizieren, um ihn in einen Pixelwert umzuwandeln, der der Hälfte des Fortschrittswertes der Viewport-Breite zwischen `320px` und `1200px` entspricht.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Zum Beispiel: Wenn die Viewport-Breite `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` ergibt.

Im nächsten Beispiel, das eine Aktualisierung des vorherigen darstellt, haben wir benutzerdefinierte Eigenschaften für die Fortschritts-, Start- und Endwerte verwendet.

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

Es ist möglich, `progress()`-Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentwerte innerhalb von Kurzform-Eigenschaften zu berechnen, vorausgesetzt, Ihre Funktionen geben gültige Typen für diese Werte zurück.

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

### Grundlegende Nutzung von `progress()`

In diesem Beispiel zeigen wir die grundlegende Verwendung der `progress()`-Funktion, um die `width` eines Fortschrittsbalkens als Prozentsatz einzustellen, der dem Fortschrittsverhältnis der `width` seines übergeordneten Elements zwischen seiner `min-width` und `max-width` entspricht.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element, das unseren Inhalt repräsentiert, und ein {{htmlelement("div")}}-Element, das den Fortschrittsbalken der Breite darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zuerst einige benutzerdefinierte Eigenschaften auf unserem `<section>`-Element, die seine `min-width`, `max-width` und `width` repräsentieren. Wir setzen dann diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte, dann geben wir unserem `<section>` eine solide {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zu unserem `<div>` — wir geben ihm zuerst eine `height` und eine dunkle `background-color`, damit es sich von unserem `<section>`-Element abhebt. Wir berechnen dann seine `width`, indem wir eine `progress()`-Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen, und dann eine `calc()`-Funktion verwenden, um den `progress()`-Rückgabewert mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Dieses Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("basic", "100%", "150")}}

Die Breite des `<div>` beträgt `75%` der `<section>` Breite, da die `min-width` `400px`, die `max-width` `700px` ist und die `width` `600px` beträgt, was `75%` der Strecke zwischen den vorherigen beiden Werten entspricht.

### Resize-Effekte auf einem Container

In diesem Beispiel zeigen wir eingehendere Anwendungsfälle der `progress()`-Funktion, die zu einigen lustigen Effekten führen, wenn die Browserfenstergröße geändert wird.

Dieses Beispiel funktioniert auf einem Desktop-Browser-Tab in voller Größe wesentlich besser. Daher haben wir es nicht in einem eingebetteten Live-Beispiel auf dieser Seite gerendert. Stattdessen können Sie es live bei [CSS `progress()` function demo](https://mdn.github.io/dom-examples/css-progress/) (siehe auch der [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)) ausführen lassen.

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Breite des Browserfensters zu vergrößern und zu verkleinern, um den Effekt zu sehen. Lassen Sie es offen, damit Sie darauf zurückgreifen können, während Sie die nachfolgende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}}-Elemente — eines, um ein Hintergrundbild aufzuhängen, und das andere, um unseren Inhalt zu enthalten. Das `<section class="content">` enthält außerdem ein `<div class="progress">`, das einen Breitenfortschrittsbalken darstellt, genau wie der im vorherigen Beispiel. Wir haben den Rest des Inhalts der Übersichtlichkeit halber weggelassen.

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

In unserem Script holen wir zunächst eine Referenz zu unserem `<article>`-Element. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die client width des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) erfasst und eine benutzerdefinierte Eigenschaft darauf setzt, genannt `--container-width`, die gleich der abgerundeten client width ist, mit einem angehängten `px`.

Dann setzen wir einen [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignislistener auf das `Window`-Objekt, der `setContainerWidth()` ausführt, wenn das Browserfenster neu dimensioniert wird. Wir führen dies auch einmal aus, um die benutzerdefinierte `--container-width` Eigenschaft auf dem `<article>`-Element zu setzen, sobald die Seite geladen wird.

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

Mit dieser Konfiguration können wir jetzt einige Eigenschaftswerte basierend auf der `--container-width` setzen, sodass Teile unseres Designs sich dynamisch verändern, wenn das Fenster neu dimensioniert wird.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant ist für die Verwendung der `progress()`-Funktion im Beispiel. Für das vollständige CSS, siehe [CSS source](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zunächst das `<article>` innerhalb des `<body>` mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), dann setzen wir einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width` Werte darzustellen, die wir an anderer Stelle verwenden. Dann zielen wir auf das `<article>`-Element ab, indem wir ihm {{cssxref("min-width")}} und {{cssxref("max-width")}} Werte geben, die den zuvor gesetzten benutzerdefinierten Eigenschaften entsprechen. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ zu ihm positionieren können, dann geben wir ihm eine prozentuale {{cssxref("width")}}, eine feste {{cssxref("height")}} und eine {{cssxref("border")}}.

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

Nun zu unserem `progress` `<div>`. Wir setzen seine `width` auf einen Prozentwert basierend auf dem Fortschrittsverhältnis der benutzerdefinierten `--container-width` Eigenschaft, die über JavaScript auf dem `<article>`-Element gesetzt wird, zwischen der `min-width` und `max-width` (wir verwenden hier dieselben benutzerdefinierten Eigenschaften für den zweiten und dritten `progress()`-Parameter wie für die `min-width` und `max-width` des `<article>`).

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

Anschließend schauen wir uns unser `background` `<section>` an. Wir positionieren es absolut relativ zu unserem `<article>`, indem wir {{cssxref("inset", "inset: 0")}} darauf anwenden, sodass es die gleiche Größe annimmt und darüber liegt. Wir setzen dann ein recht breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der {{cssxref("background-position-x")}} Eigenschaft denselben Wert geben, wie wir ihn der `width`-Eigenschaft des Fortschrittsbalkens gegeben haben. Dies hat den Effekt, dass, wenn Sie die Breite des Browserfensters erhöhen, das Hintergrundbild nach links verschoben wird und einen schönen Bildlauf-Effekt erzeugt.

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

Wir positionieren das `content` `<section>` absolut, damit es über dem `background` `<section>` liegt, dann geben wir ihm etwas {{cssxref("padding")}}. Wir variieren dann zwei Eigenschaftswerte, während das Browserfenster neu dimensioniert wird, unter Verwendung des gleichen Fortschrittsverhältnisses wie zuvor:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis mit 255 multiplizieren, um einen proportionierten Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, sodass die Szene so aussieht, als ob sie von Nacht zu Tag wechselt (der Farbwert hat eine Deckkraft von `0.5`, sodass er wie ein Farbton für das darunterliegende Bild wirkt).
- Wir variieren die {{cssxref("opacity")}}, sodass der Inhalt ein wenig einfädelt, wenn das Fenster breiter wird.

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
- [Containerstilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
