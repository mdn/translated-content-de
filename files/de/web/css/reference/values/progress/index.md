---
title: "`progress()` CSS-Funktion"
short-title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`progress()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen {{cssxref("&lt;number>")}}-Wert zurück, der die Position eines Wertes (des Fortschrittswertes) relativ zu zwei anderen Werten (dem Anfangs- und Endwert des Fortschritts) darstellt.

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
  - : Der Wert, dessen Position relativ zu den anderen beiden Werten berechnet wird.
- Anfangswert des Fortschritts
  - : Die untere Grenze des Fortschritts.
- Endwert des Fortschritts
  - : Die obere Grenze des Fortschritts.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswertes relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Wenn sich der Fortschrittswert zwischen Anfangs- und Endwert bewegt, wird der Rückgabewert zwischen `0` und `1` liegen, was einem Prozentsatz entspricht. Wenn der Fortschrittswert kleiner als der Anfangswert oder größer als der Endwert ist, bleibt die Funktion gültig, aber der Rückgabewert wird auf `0` bzw. `1` begrenzt.

## Beschreibung

Die CSS `progress()`-Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was nützlich ist für Anwendungsfälle wie Fortschrittsbalkenanimationen oder Kästen, die eingeblendet werden, während sie breiter werden, um ihren Inhalt sichtbar zu machen.

Eine einfachstmögliche Nutzung könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall würde der berechnete Wert von {{cssxref("opacity")}} `0.5` betragen, da 5 die Mitte zwischen `0` und `10` ist.

### Erlaubte Einheitentypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Diese Werte (oder das Ergebnis der Ausdrücke) können jeden {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}}, oder {{cssxref("&lt;percentage>")}}-Wert annehmen. Sie können unterschiedliche Einheiten haben, aber alle müssen vom gleichen Typ sein, sonst ist die Funktion ungültig.

Das zuvor gezeigte Beispiel ist gültig – alle seine Parameter sind einheitenlose `<number>`-Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig – alle seine Parameter haben {{cssxref("&lt;length>")}}-Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Vorausgesetzt, die {{cssxref("font-size")}} beträgt zur Zeitpunkt der Berechnung `16px`, wird `3em` zu `48px`, was `48%` des Weges zwischen `0px` und `100px` ist, sodass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, sodass die resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellung einheitenloser Werte

Die `progress()`-Funktion gibt einheitenlose Werte aus, daher kann sie dazu verwendet werden, Einheiten von Werten zu entfernen, ähnlich wie beim [`tan(atan2())` Hack](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Beachten Sie jedoch, dass dies aufgrund der Aktualisierungen im Verhalten rund um [CSS-typisierte Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombination von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer nur einen einheitenlosen Wert zwischen `0` und `1` zurückgibt, wird es oft mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} kombiniert, um den gewünschten Wert und die gewünschten Einheiten auszugeben. Sie können auch [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb von `progress()`-Funktionen verwenden – dies ist sinnvoll, da Sie häufig dieselben Werte an mehreren Stellen festlegen und/oder auf Benutzereigenschaften basieren wollen, die über JavaScript festgelegt werden.

Das folgende Beispiel berechnet, welchen Prozentsatz die Ansichtsfensterbreite zwischen einer minimalen Breite von `320px` und einer maximalen Breite von `1200px` beträgt. Die `calc()`-Funktion wird verwendet, um den Rückgabewert der `progress()`-Funktion mit `600px` zu multiplizieren, um ihn in einen Pixelwert zu konvertieren, der die Hälfte des Fortschrittswerts der Ansichtsfensterbreite zwischen `320px` und `1200px` darstellt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Wenn beispielsweise die Ansichtsfensterbreite `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` entspricht.

Das nächste Beispiel ist eine Aktualisierung des vorherigen, bei dem wir benutzerdefinierte Eigenschaften für die Werte Fortschritt, Anfangswert des Fortschritts und Endwert des Fortschritts verwendet haben.

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

Es ist möglich, `progress()`-Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb von Kurzschreibweise-Eigenschaftswerten zu berechnen, vorausgesetzt, Ihre Funktionen geben gültige Typen für diese Werte zurück.

Dies kann zu einigen komplexen Ausdrücken führen. Zum Beispiel berechnen wir hier die ersten beiden Kanäle eines [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Farbwerts proportional zu demselben Breitenverhältnis wie zuvor:

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

In diesem Beispiel zeigen wir die grundlegende Verwendung der `progress()`-Funktion, um die Breite eines Fortschrittsbalkens als Prozentsatz festzulegen, der dem Fortschrittsverhältnis der Breite seines übergeordneten Elements zwischen seiner `min-width` und `max-width` entspricht.

#### HTML

Unser HTML besteht aus einem {{htmlelement("section")}}-Element, das unseren Inhalt darstellt, und einem {{htmlelement("div")}}-Element, das den Breitenfortschrittsbalken darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zunächst einige benutzerdefinierte Eigenschaften auf unserem `<section>`-Element, um dessen `min-width`, `max-width` und `width` darzustellen. Dann setzen wir diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben unserem `<section>` eine durchgängige {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zu unserem `<div>` — wir geben ihm zunächst eine `height` und eine dunkle `background-color`, damit es sich von unserem `<section>`-Element abhebt. Anschließend berechnen wir seine `width`, indem wir eine `progress()`-Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen, und dann eine `calc()`-Funktion verwenden, um den Rückgabewert von `progress()` mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Die Breite des `<div>` beträgt `75%` der `<section>`-Breite, da die `min-width` `400px`, die `max-width` `700px` und die `width` `600px` beträgt, was `75%` der Distanz zwischen den beiden vorherigen Werten ist.

### Effekt der Größenänderung auf einen Container

Dieses Beispiel zeigt einige ausgefeiltere Anwendungen der `progress()`-Funktion, die zu einigen unterhaltsamen Effekten führen, wenn das Browserfenster in der Größe verändert wird.

Dieses Beispiel funktioniert viel besser, wenn es in voller Größe in einem Desktop-Browser-Tab gerendert wird. Daher haben wir es nicht in einem eingebetteten Live-Beispiel auf dieser Seite gerendert. Stattdessen können Sie es unter [CSS `progress()` Funktion Demo](https://mdn.github.io/dom-examples/css-progress/) live ausprobieren (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Breite des Browserfensters zu erhöhen und zu verringern, um den Effekt zu sehen. Lassen Sie dies offen, um darauf zurückgreifen zu können, während Sie die folgende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}}-Elemente – eines, um ein Hintergrundbild daran anzuhängen, und das andere, um unseren Inhalt zu beherbergen. Das `<section class="content">` enthält auch ein `<div class="progress">`, das einen Breitenfortschrittsbalken darstellt, genauso wie das im vorherigen Beispiel. Wir haben den Rest des Inhalts der Kürze halber weggelassen.

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

In unserem Skript greifen wir zuerst auf unser `<article>`-Element zu. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abruft und eine benutzerdefinierte Eigenschaft darauf setzt, die `--container-width` genannt wird und gleich der abgerundeten Client-Breite ist, mit hinzugefügtem `px`.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignis-Listener auf das `Window`-Objekt, das `setContainerWidth()` ausführt, wenn das Browserfenster in der Größe geändert wird. Wir führen es auch einmal aus, um die `--container-width`-benutzerdefinierte Eigenschaft auf dem `<article>`-Element festzusetzen, sobald die Seite lädt.

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

Mit diesem Setup können wir nun einige Eigenschaftswerte basierend auf der `--container-width`-Eigenschaft setzen, sodass Teile unseres Designs dynamisch geändert werden, wenn das Fenster in der Größe verändert wird.

#### CSS

Der folgende Abschnitt erklärt nur das für die Demo relevante CSS, in dem wir die `progress()`-Funktion verwendet haben. Für das vollständige CSS sehen Sie sich den [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css) an.

Wir zentrieren zuerst das `<article>`-Element mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) innerhalb des `<body>` und setzen dann einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width`-Werte darzustellen, die wir an anderer Stelle verwenden werden. Dann zielen wir auf das `<article>`-Element und geben ihm {{cssxref("min-width")}} und {{cssxref("max-width")}}-Werte, die den vorher gesetzten benutzerdefinierten Eigenschaften entsprechen. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ zu ihm positionieren können, und geben ihm eine prozentuale {{cssxref("width")}}, eine feste {{cssxref("height")}} und einen {{cssxref("border")}}.

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

Nun zu unserem Fortschritt `<div>`. Wir setzen seine `width` auf einen Prozentsatz basierend auf dem Fortschrittsverhältnis der `--container-width`-benutzerdefinierten Eigenschaft, die auf dem `<article>`-Element über JavaScript festgesetzt wurde, zwischen ihrer `min-width` und `max-width` (wir verwenden hier die gleichen benutzerdefinierten Eigenschaften für den zweiten und dritten `progress()`-Parameter wie für die `min-width` und `max-width` des `<article>`).

Wir geben ihm auch eine `height` und eine {{cssxref("background-color")}} und positionieren es absolut an der oberen linken Ecke des `<article>`.

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

Als nächstes betrachten wir unser Hintergrund `<section>`. Wir positionieren es absolut relativ zu unserem `<article>`, setzen {{cssxref("inset", "inset: 0")}} darauf, sodass es die gleiche Größe annimmt und darüber liegt. Wir setzen dann ein ziemlich breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der {{cssxref("background-position-x")}}-Eigenschaft denselben Wert geben, wie wir ihn der `width`-Eigenschaft des Fortschrittsbalken gegeben haben. Dies hat den Effekt, dass, wenn Sie die Breite des Browserfensters erhöhen, das Hintergrundbild nach links bewegt wird und so einen schönen Bildscroll-Effekt erzeugt.

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

Wir positionieren das `content` `<section>` absolut, damit es über dem `background` `<section>` liegt und geben ihm etwas {{cssxref("padding")}}. Dann variieren wir zwei Eigenschaftswerte, während das Browserfenster in der Größe verändert wird, indem wir das gleiche Fortschrittsverhältnis wie zuvor verwenden:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis jeweils mit 255 multiplizieren, um einen proportionierten Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, wodurch die Szene wie eine Verwandlung von Nacht zu Tag erscheint (der Farbwert hat eine Deckkraft von `0.5`, sodass er wie eine Tönung für das darunter liegende Bild wirkt).
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

- [CSS Werte und Einheiten Modul](/de/docs/Web/CSS/Guides/Values_and_units)
- [Container Style Queries](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
