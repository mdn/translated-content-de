---
title: CSS-Funktion `progress()`
short-title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`progress()`** gibt einen {{cssxref("number")}}-Wert zurück, der die Position eines Werts (des Fortschrittswerts) relativ zu zwei anderen Werten (dem Start- und dem Endwert des Fortschritts) angibt.

## Syntax

```css-nolint
/* With fixed progress value */
progress(300, 0, 1000)
progress(50px, 0px, 100px)
progress(50%, 30%, 80%)

/* Unclamped return value */
progress(no-clamp 300, 0, 100)
progress(no-clamp 50px, 0px, 100px)

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

Die Funktion `progress()` verwendet als Parameter ein optionales Schlüsselwort, gefolgt von drei durch Kommas getrennten {{cssxref("&lt;calc-sum>")}}-Ausdrücken:

```plain
progress(no-clamp? <calc-sum>, <calc-sum>, <calc-sum>)
```

Dabei handelt es sich um:

- `no-clamp` {{optional_inline}}
  - : Ein Schlüsselwort, das verhindert, dass der Rückgabewert auf den Bereich von `0` bis `1` begrenzt wird. Es steht vor dem Fortschrittswert und wird nicht von einem Komma gefolgt. Siehe [Begrenzung des Rückgabewerts](#begrenzung_des_rückgabewerts).
- Fortschrittswert
  - : Der Wert, dessen Position relativ zu den beiden anderen Werten berechnet werden soll.
- Startwert des Fortschritts
  - : Die untere Fortschrittsgrenze.
- Endwert des Fortschritts
  - : Die obere Fortschrittsgrenze.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}-Wert, der die Position des Fortschrittswerts relativ zu den beiden anderen Werten angibt. Er wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Liegt der Fortschrittswert zwischen dem Start- und dem Endwert, liegt der Rückgabewert zwischen `0` und `1` und stellt damit einen prozentualen Anteil dar.

Wenn das Schlüsselwort `no-clamp` angegeben ist, kann der Rückgabewert eine beliebige Zahl sein. Andernfalls wird er auf den Bereich von `0` bis `1` begrenzt.

## Beschreibung

Mit der CSS-Funktion `progress()` lässt sich ein Fortschrittsverhältnis berechnen. Das ist beispielsweise für Animationen von Fortschrittsbalken oder für Boxen nützlich, die beim Breiterwerden eingeblendet werden und so ihren Inhalt sichtbar machen.

Die einfachste Verwendung könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert von {{cssxref("opacity")}} gleich `0.5`, da 5 genau zwischen `0` und `10` liegt.

### Begrenzung des Rückgabewerts

Standardmäßig wird der Rückgabewert auf den Bereich von `0` bis `1` begrenzt. Ein Fortschrittswert außerhalb der Grenzen durch den Start- und Endwert liefert daher den nächstgelegenen Grenzwert:

```css
/* Computes to 1, not 1.5 */
scale: progress(15, 0, 10);

/* Computes to 0, not -0.5 */
scale: progress(-5, 0, 10);
```

Wenn das Schlüsselwort `no-clamp` vor dem Fortschrittswert steht, entfällt diese Einschränkung. Die Funktion extrapoliert dann über die Grenzen hinaus, statt an ihnen zu stoppen:

```css
/* Computes to 1.5 */
scale: progress(no-clamp 15, 0, 10);

/* Computes to -0.5 */
scale: progress(no-clamp -5, 0, 10);
```

Beachten Sie, dass `no-clamp` ein Schlüsselwort und kein separater Parameter ist. Daher folgt darauf kein Komma.

### Zulässige Einheitentypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte beziehungsweise Ergebnisse der Ausdrücke können vom Typ {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}} oder {{cssxref("&lt;percentage>")}} sein. Sie dürfen unterschiedliche Einheiten haben, müssen aber alle denselben Typ aufweisen. Andernfalls ist die Funktion ungültig.

Das vorherige Beispiel ist gültig: Alle Parameter sind einheitenlose `<number>`-Werte:

```css example-good
progress(5, 0, 10)
```

Auch das nächste Beispiel ist gültig: Alle Parameter haben {{cssxref("&lt;length>")}}-Einheiten. Für die Berechnung werden die berechneten Werte verwendet. Wenn {{cssxref("font-size")}} zum Zeitpunkt der Berechnung `16px` beträgt, wird `3em` zu `48px` aufgelöst. Das entspricht `48%` der Strecke zwischen `0px` und `100px`, sodass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten beiden Beispiele in diesem Abschnitt sind dagegen ungültig. Die Typen stimmen nicht überein, sodass die entsprechenden Berechnungen keinen Sinn ergeben.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Einheitenlose Werte erzeugen

Die Funktion `progress()` gibt einheitenlose Werte zurück. Sie kann daher ebenso wie der [`tan(atan2())`-Trick](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j) verwendet werden, um Einheiten von Werten zu entfernen. Beachten Sie jedoch, dass dies aufgrund der Änderungen am Verhalten der [typisierten Arithmetik in CSS](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) auch durch eine einfache Division möglich ist.

### `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften kombinieren

Da `progress()` immer einen einheitenlosen Wert zurückgibt, wird die Funktion häufig mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} kombiniert, um einen Wert mit den gewünschten Einheiten zu erhalten. Sie können auch [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb von `progress()`-Funktionen verwenden. Das ist sinnvoll, wenn dieselben Werte an mehreren Stellen benötigt werden oder auf benutzerdefinierten Eigenschaften beruhen sollen, die per JavaScript gesetzt werden.

Im folgenden Beispiel wird berechnet, wie weit die Breite des Viewports zwischen einer Mindestbreite von `320px` und einer Höchstbreite von `1200px` liegt. Die Funktion `calc()` multipliziert den Rückgabewert von `progress()` mit `600px` und wandelt ihn so in einen Pixelwert um, der der Hälfte des Fortschrittswerts der Viewport-Breite zwischen `320px` und `1200px` entspricht.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Wenn die Viewport-Breite beispielsweise `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite ergibt sich dann aus `0.431818 * 600px`, also `259.1px`.

Das nächste Beispiel ist eine überarbeitete Version des vorherigen. Darin verwenden wir benutzerdefinierte Eigenschaften für den Fortschrittswert sowie dessen Start- und Endwert.

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

Mit `progress()`-Funktionen lassen sich einzelne Werte innerhalb anderer Funktionen und Komponentenwerte innerhalb von Werten für Kurzschreibweise-Eigenschaften berechnen, sofern die Funktionen für diese Werte gültige Typen zurückgeben.

Dabei können komplexe Ausdrücke entstehen. Hier berechnen wir beispielsweise die ersten beiden Kanäle einer [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Farbe proportional zum selben Breitenverhältnis wie zuvor:

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

In diesem Beispiel verwenden wir die Funktion `progress()`, um die `width` eines Fortschrittsbalkens auf einen Prozentwert zu setzen. Dieser entspricht dem Fortschrittsverhältnis der `width` seines Elternelements zwischen dessen `min-width` und `max-width`.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element für den Inhalt und ein {{htmlelement("div")}}-Element für den Breiten-Fortschrittsbalken.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zunächst einige benutzerdefinierte Eigenschaften auf dem `<section>`-Element, die dessen `min-width`, `max-width` und `width` repräsentieren. Anschließend setzen wir diese Eigenschaften auf die entsprechenden Werte der benutzerdefinierten Eigenschaften und geben dem `<section>`-Element eine deckende {{cssxref("background-color")}}, damit es sichtbar ist.

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

Nun zum `<div>`: Wir geben ihm zunächst eine `height` und eine dunkle `background-color`, damit es sich vom `<section>`-Element abhebt. Anschließend berechnen wir seine `width`: Mit `progress()` ermitteln wir das Verhältnis der Breite zwischen Mindest- und Höchstbreite und multiplizieren den Rückgabewert mit `calc()` mit `100%`, um einen Prozentwert zu erhalten.

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

Die Demo wird wie folgt dargestellt:

{{EmbedLiveSample("basic", "100%", "150")}}

Die Breite des `<div>` beträgt `75%` der Breite des `<section>`-Elements: `min-width` ist `400px`, `max-width` ist `700px` und `width` ist `600px`, was `75%` der Strecke zwischen den ersten beiden Werten entspricht.

### Auswirkungen der Größenänderung eines Containers

Dieses Beispiel zeigt einige komplexere Verwendungen der Funktion `progress()`, die beim Ändern der Größe des Browserfensters interessante Effekte erzeugen.

Das Beispiel funktioniert deutlich besser, wenn es in voller Größe in einem Desktop-Browsertab dargestellt wird. Deshalb ist es auf dieser Seite nicht als eingebettetes Live-Beispiel zu sehen. Stattdessen können Sie es in der [Demo zur CSS-Funktion `progress()`](https://mdn.github.io/dom-examples/css-progress/) ausprobieren. Sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress) an.

Öffnen Sie das Live-Beispiel in einem separaten Tab und vergrößern und verkleinern Sie die Breite des Browserfensters, um den Effekt zu sehen. Lassen Sie den Tab geöffnet, damit Sie beim Lesen der folgenden Erläuterung darauf zurückgreifen können.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den restlichen Inhalt umfasst, sowie zwei {{htmlelement("section")}}-Elemente: eines für ein Hintergrundbild und eines für den Inhalt. Das Element `<section class="content">` enthält außerdem ein `<div class="progress">`, das wie in der vorherigen Demo einen Breiten-Fortschrittsbalken darstellt. Der Kürze halber haben wir den übrigen Inhalt weggelassen.

```html
<article>
  <section class="background"></section>
  <section class="content">
    <div class="progress"></div>
    <!-- Content here -->
  </section>
</article>
```

#### CSS

Im folgenden Abschnitt wird nur das CSS erläutert, das für die Verwendung der Funktion `progress()` in der Demo relevant ist. Diese Styles verwenden die benutzerdefinierte Eigenschaft `--container-width`, die durch das später gezeigte JavaScript gesetzt wird. Das vollständige CSS finden Sie im [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Zunächst zentrieren wir das `<article>` mithilfe von [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) innerhalb des `<body>`. Dann setzen wir darauf benutzerdefinierte Eigenschaften für die Werte von `min-width` und `max-width`, die wir an anderer Stelle verwenden. Anschließend weisen wir dem `<article>`-Element für {{cssxref("min-width")}} und {{cssxref("max-width")}} die zuvor festgelegten Werte der benutzerdefinierten Eigenschaften zu. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ zu ihm positionieren können, und geben ihm eine prozentuale {{cssxref("width")}}, eine feste {{cssxref("height")}} und einen {{cssxref("border")}}.

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

Nun zum `progress`-`<div>`: Wir setzen seine `width` auf einen Prozentwert, der auf dem Verhältnis des per JavaScript auf dem `<article>`-Element gesetzten Werts von `--container-width` zwischen dessen `min-width` und `max-width` beruht. Für den zweiten und dritten Parameter von `progress()` verwenden wir dieselben benutzerdefinierten Eigenschaften wie für `min-width` und `max-width` des `<article>`-Elements.

Außerdem geben wir ihm eine `height` und eine {{cssxref("background-color")}} und positionieren es absolut in der oberen linken Ecke des `<article>`-Elements.

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

Als Nächstes betrachten wir das `background`-`<section>`. Wir positionieren es absolut relativ zum `<article>` und setzen {{cssxref("inset", "inset: 0")}}, damit es dieselbe Größe annimmt und darüberliegt. Dann geben wir ihm ein recht breites {{cssxref("background-image")}} und positionieren das Hintergrundbild, indem wir der Eigenschaft {{cssxref("background-position-x")}} denselben Wert zuweisen wie der `width`-Eigenschaft des Fortschrittsbalkens. Wenn Sie die Breite des Browserfensters vergrößern, verschiebt sich das Hintergrundbild dadurch nach links und erzeugt einen ansprechenden Scrolleffekt.

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

Wir positionieren das `content`-`<section>` absolut, sodass es über dem `background`-`<section>` liegt, und geben ihm etwas {{cssxref("padding")}}. Mit demselben Fortschrittsverhältnis wie zuvor verändern wir beim Anpassen der Browserfenstergröße zwei Eigenschaftswerte:

- Wir verändern die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis jeweils mit 255 multiplizieren. So erhalten wir proportionale Kanalwerte. Je breiter das Fenster wird, desto weniger blau und desto weißer wird die Hintergrundfarbe. Dadurch wirkt es, als würde die Szene von der Nacht zum Tag übergehen. Der Farbwert hat eine Deckkraft von `0.5` und legt sich daher wie eine Tönung über das darunterliegende Bild.
- Wir verändern {{cssxref("opacity")}}, sodass der Inhalt bei zunehmender Fensterbreite etwas eingeblendet wird.

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

#### JavaScript

In unserem Skript holen wir zunächst eine Referenz auf das `<article>`-Element. Dann definieren wir eine Funktion namens `setContainerWidth()`. Sie ermittelt über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) die Client-Breite des `<article>`-Elements und setzt darauf die benutzerdefinierte Eigenschaft `--container-width`. Deren Wert entspricht der abgerundeten Client-Breite mit angehängtem `px`.

Anschließend registrieren wir für das `Window`-Objekt einen Event-Listener für das [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignis, der `setContainerWidth()` ausführt, wenn sich die Größe des Browserfensters ändert. Wir führen die Funktion auch einmal beim Laden der Seite aus, um die benutzerdefinierte Eigenschaft `--container-width` auf dem `<article>`-Element zu setzen.

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

Dadurch bleibt `--container-width` für die oben beschriebenen CSS-Berechnungen aktuell, sodass sich Teile des Designs dynamisch anpassen, wenn sich die Fenstergröße ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modul für CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Container-Style-Queries](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
