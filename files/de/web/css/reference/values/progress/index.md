---
title: "`progress()` CSS-Funktion"
short-title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: 2cd2b1303d15452b977a309a9d4e6618d20fc0c0
---

Die **`progress()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen {{cssxref("number")}}-Wert zurück, der die Position eines Wertes (der Fortschrittswert) relativ zu zwei anderen Werten (dem Fortschrittsstart- und Endwert) darstellt.

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

Diese sind jeweils:

- Fortschritt
  - : Der Wert, dessen Position relativ zu den anderen beiden Werten berechnet wird.
- Fortschrittsstart
  - : Die untere Fortschrittsgrenze.
- Fortschrittsende
  - : Die obere Fortschrittsgrenze.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswerts relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Wenn der Fortschrittswert zwischen den Fortschrittsstart- und Endwerten liegt, wird der Rückgabewert zwischen `0` und `1` liegen, was einem Prozentsatz entspricht. Wenn der Fortschrittswert kleiner als der Fortschrittsstartwert oder größer als der Fortschrittsendwert ist, bleibt die Funktion gültig, aber der Rückgabewert wird entsprechend auf `0` oder `1` beschränkt.

## Beschreibung

Die CSS-`progress()`-Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, das nützlich ist, um Anwendungsfälle wie Fortschrittsbalken-Animationen oder Boxen zu erstellen, die einblenden, wenn sie breiter werden, um ihren Inhalt preiszugeben.

Die einfachste mögliche Verwendung könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall würde der berechnete Wert von {{cssxref("opacity")}} `0.5` betragen, da 5 genau die Mitte zwischen `0` und `10` ist.

### Erlaubte Einheitstypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder Ausdrucksergebnisse) können jeden {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}} oder {{cssxref("&lt;percentage>")}} Wert annehmen. Sie können verschiedene Einheiten haben, aber sie müssen alle vom selben Typ sein, sonst ist die Funktion ungültig.

Das vorherige Beispiel ist gültig — alle seine Parameter sind einheitslose `<number>`-Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig — alle seine Parameter haben {{cssxref("&lt;length>")}}-Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Vorausgesetzt, die {{cssxref("font-size")}} beträgt `16px` zum Zeitpunkt der Berechnung, wird `3em` zu `48px`, was `48%` des Weges zwischen `0px` und `100px` entspricht, sodass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten paar Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, sodass die resultierenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Erstellung einheitsloser Werte

Die `progress()`-Funktion gibt einheitslose Werte aus, daher kann sie dazu verwendet werden, Einheiten von Werten zu entfernen, ähnlich wie beim [`tan(atan2())`-Trick](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Beachten Sie jedoch, dass dies aufgrund der Updates im Verhalten rund um [CSS typisierte Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombination von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` immer nur einen einheitslosen Wert zwischen `0` und `1` zurückgibt, ist es üblich, es mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} zu kombinieren, um den gewünschten Wert und die Einheiten auszugeben. Sie können auch [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb von `progress()`-Funktionen verwenden — dies ist sinnvoll, da Sie oft dieselben Werte an mehreren Stellen festlegen und/oder sie auf benutzerdefinierten Eigenschaften basieren möchten, die über JavaScript festgelegt wurden.

Im folgenden Beispiel wird berechnet, wie viel Prozent der Fortschritt der Ansichtsbreite zwischen einer minimalen Breite von `320px` und einer maximalen Breite von `1200px` beträgt. Die `calc()`-Funktion wird verwendet, um den `progress()`-Rückgabewert mit `600px` zu multiplizieren, um ihn in einen Pixelwert zu konvertieren, der die Hälfte des Fortschrittswerts der Ansichtsbreite zwischen `320px` und `1200px` beträgt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Zum Beispiel, wenn die Ansichtsbreite `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` entspricht.

Das nächste Beispiel ist eine Aktualisierung des vorherigen, bei dem wir benutzerdefinierte Eigenschaften für den Fortschritt, den Fortschrittsbeginn und das Fortschrittsende verwendet haben.

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

Es ist möglich, `progress()`-Funktionen zu verwenden, um individuelle Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb von abgekürzten Eigenschaftenwerten zu berechnen, vorausgesetzt, Ihre Funktionen geben gültige Typen für diese Werte aus.

Dies kann zu einigen komplexen Ausdrücken führen. Zum Beispiel berechnen wir hier die ersten beiden Kanäle einer [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Farbe im Verhältnis zum gleichen Breitenverhältnis wie zuvor:

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

In diesem Beispiel zeigen wir die grundlegende Verwendung der `progress()`-Funktion, um eine Fortschrittsbalken-`width` als Prozentsatz gleich dem Fortschrittsverhältnis der `width` des übergeordneten Elements zwischen seiner `min-width` und `max-width` festzulegen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element, das unseren Inhalt darstellt, und ein {{htmlelement("div")}}-Element, das die Breitenfortschrittsanzeige darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zuerst einige benutzerdefinierte Eigenschaften auf unserem `<section>`-Element, um seine `min-width`, `max-width` und `width` darzustellen. Anschließend setzen wir diese Eigenschaften auf die entsprechenden benutzerdefinierten Eigenschaftswerte und geben unserem `<section>` eine solide {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zu unserem `<div>` — wir geben ihm zuerst eine `height` und eine dunkle `background-color`, damit es sich von unserem `<section>`-Element abhebt. Dann berechnen wir seine `width`, indem wir eine `progress()`-Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen und dann eine `calc()`-Funktion verwenden, um den `progress()`-Rückgabewert mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Die Breite des `<div>` beträgt `75%` der `<section>`-Breite, da die `min-width` `400px` beträgt, die `max-width` `700px` und die `width` `600px` ist, was `75%` der Entfernung zwischen den beiden vorherigen Werten entspricht.

### Resize-Effekte auf einem Container

Dieses Beispiel zeigt einige komplexere Verwendungen der `progress()`-Funktion, die zu einigen unterhaltsamen Effekten führen, wenn das Browserfenster in der Größe verändert wird.

Dieses Beispiel funktioniert viel besser, wenn es im Vollbildmodus in einem Desktop-Browser-Tab gerendert wird. Daher haben wir es nicht in einem eingebetteten Live-Beispiel auf dieser Seite gerendert. Stattdessen finden Sie es live unter [CSS-`progress()`-Funktionsdemo](https://mdn.github.io/dom-examples/css-progress/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Breite des Browserfensters zu erhöhen und zu verringern, um den Effekt zu sehen. Halten Sie dies geöffnet, damit Sie darauf zurückgreifen können, während Sie die folgende Erklärung lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}}-Elemente — eines, um ein Hintergrundbild anzuhängen, und das andere, um unseren Inhalt aufzunehmen. Das `<section class="content">` enthält auch ein `<div class="progress">`, das eine Breitenfortschrittsanzeige darstellt, genauso wie die im vorherigen Demo. Wir haben den restlichen Inhalt der Kürze halber weggelassen.

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

In unserem Skript erhalten wir zuerst eine Referenz auf unser `<article>`-Element. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die clientbreite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) erfasst und ein benutzerdefiniertes `--container-width` an es setzt, das gleich der clientbreite ist, abgerundet und mit `px` angehängt.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignislistener am `Window`-Objekt, der `setContainerWidth()` ausführt, wenn das Browserfenster in der Größe verändert wird. Wir führen es auch einmal aus, um das benutzerdefinierte `--container-width` auf dem `<article>`-Element festzulegen, sobald die Seite geladen wird.

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

Mit diesem Setup können wir nun einige Eigenschaftswerte basierend auf der `--container-width` festlegen, sodass sich Teile unseres Designs dynamisch ändern, wenn das Fenster in der Größe verändert wird.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant dafür ist, wie wir die `progress()`-Funktion in der Demo verwendet haben. Für das vollständige CSS, siehe den [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zunächst das `<article>` innerhalb des `<body>` mittels [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout.), dann setzen wir einige benutzerdefinierte Eigenschaften darauf, um die `min-width` und `max-width`-Werte zu repräsentieren, die wir anderswo verwenden werden. Dann zielen wir auf das `<article>`-Element, geben ihm {{cssxref("min-width")}} und {{cssxref("max-width")}}-Werte, die den benutzerdefinierten Eigenschaften entsprechen, die wir zuvor gesetzt haben. Setzen seine {{cssxref("position")}} auf `relative`, sodass wir seinen Inhalt relativ dazu positionieren können, dann geben wir ihm einen Prozentwert für {{cssxref("width")}}, eine feste {{cssxref("height")}} und {{cssxref("border")}}.

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

Nun zu unserem `progress`-`<div>`. Wir setzen seine `width` auf einen Prozentsatz, der auf dem Fortschrittsverhältnis der benutzerdefinierten Eigenschaft `--container-width` basiert, die über JavaScript auf dem `<article>`-Element festgelegt wurde und sich zwischen seiner `min-width` und `max-width` bewegt (wir verwenden hier die gleichen benutzerdefinierten Eigenschaften für den zweiten und dritten `progress()`-Parameter wie für die `min-width` und `max-width` des `<article>`).

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

Als Nächstes betrachten wir unser `background`-`<section>`. Wir positionieren es absolut relativ zu unserem `<article>`, setzen {{cssxref("inset", "inset: 0")}} darauf, sodass es dieselbe Größe annimmt und sich darüber legt. Dann setzen wir ein ziemlich breites {{cssxref("background-image")}} darauf und positionieren das Hintergrundbild, indem wir der {{cssxref("background-position-x")}}-Eigenschaft denselben Wert geben wie der `width`-Eigenschaft der Fortschrittsanzeige. Dies hat zur Folge, dass, wenn Sie die Breite des Browserfensters erhöhen, das Hintergrundbild nach links verschoben wird, wodurch ein schöner Bildlaufeffekt entsteht.

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

Wir positionieren das `content`-`<section>` absolut, sodass es sich über dem `background`-`<section>` befindet, dann geben wir ihm etwas {{cssxref("padding")}}. Dann variieren wir zwei Eigenschaftswerte, wenn das Browserfenster in der Größe verändert wird, unter Verwendung desselben Fortschrittsverhältnisses wie zuvor:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis mit 255 multiplizieren, um einen proportionierten Kanalwert zu erhalten. Während das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, wodurch die Szene aussieht, als ginge sie von Nacht zu Tag über (der Farbwert hat eine Opazität von `0.5`, sodass er wie ein Farbton für das darunterliegende Bild wirkt).
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

- [CSS-Werte- und -Einheiten-Modul](/de/docs/Web/CSS/Guides/Values_and_units)
- [Container-Style-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
