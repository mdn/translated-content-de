---
title: "`progress()` CSS-Funktion"
short-title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: d35a7643766c8f8d1d92044ca771dbf8dc843906
---

Die **`progress()`**-Funktion von [CSS](/de/docs/Web/CSS) gibt einen {{cssxref("number")}}-Wert zurück, der die Position eines Wertes (der Fortschrittswert) relativ zu zwei anderen Werten (dem Anfangs- und dem Endwert des Fortschritts) darstellt.

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

Die `progress()`-Funktion nimmt ein optionales Schlüsselwort gefolgt von drei durch Kommata getrennten {{cssxref("&lt;calc-sum>")}}-Ausdrücken als Parameter an:

```plain
progress(no-clamp? <calc-sum>, <calc-sum>, <calc-sum>)
```

Diese sind:

- `no-clamp` {{optional_inline}}
  - : Ein Schlüsselwort, das verhindert, dass der Rückgabewert auf den Bereich von `0` bis `1` beschränkt wird. Es wird vor dem Fortschrittswert geschrieben und nicht durch ein Komma getrennt. Siehe [Begrenzung des Rückgabewertes](#begrenzung_des_rückgabewertes).
- Fortschritt
  - : Der Wert, dessen Position relativ zu den beiden anderen Werten berechnet werden soll.
- Fortschrittsanfang
  - : Die untere Fortschrittsgrenze.
- Fortschrittsende
  - : Die obere Fortschrittsgrenze.

### Rückgabewert

Ein {{cssxref("&lt;number>")}}, der die Position des Fortschrittswertes relativ zu den anderen beiden Werten darstellt. Dies wird wie folgt berechnet:

```plain
(progress - progress start) / (progress end - progress start)
```

Befindet sich der Fortschrittswert zwischen dem Anfangs- und dem Endwert des Fortschritts, liegt der Rückgabewert zwischen `0` und `1`, was einem Prozentsatz entspricht.

Wenn das Schlüsselwort `no-clamp` eingeschlossen ist, kann der Rückgabewert jede Zahl sein. Andernfalls wird der Rückgabewert auf den Bereich `0` bis `1` beschränkt.

## Beschreibung

Die CSS-`progress()`-Funktion bietet eine Möglichkeit, ein Fortschrittsverhältnis zu berechnen, was nützlich ist für Anwendungsfälle wie Fortschrittsbalken-Animationen oder Kästchen, die beim Breiterwerden verblassen, um ihren Inhalt zu enthüllen.

Die einfachste mögliche Verwendung könnte so aussehen:

```css
opacity: progress(5, 0, 10);
```

In diesem Fall wäre der berechnete Wert von {{cssxref("opacity")}} `0.5`, da 5 zwischen `0` und `10` liegt.

### Begrenzung des Rückgabewertes

Standardmäßig wird der Rückgabewert auf den Bereich `0` bis `1` beschränkt, so dass ein Fortschrittswert außerhalb der Fortschrittsanfangs- und Endgrenzen den nächstgelegenen Grenzwert zurückgibt:

```css
/* Computes to 1, not 1.5 */
scale: progress(15, 0, 10);

/* Computes to 0, not -0.5 */
scale: progress(-5, 0, 10);
```

Indem das Schlüsselwort `no-clamp` vor dem Fortschrittswert angegeben wird, entfällt diese Einschränkung, so dass die Funktion über die Grenzen hinaus extrapoliert anstatt an ihnen zu stoppen:

```css
/* Computes to 1.5 */
scale: progress(no-clamp 15, 0, 10);

/* Computes to -0.5 */
scale: progress(no-clamp -5, 0, 10);
```

Beachten Sie, dass `no-clamp` ein Schlüsselwort und kein separater Parameter ist, daher wird es nicht durch ein Komma getrennt.

### Erlaubte Einheitstypen

Die Parameter einer `progress()`-Funktion können mathematische Ausdrücke oder einfache Werte sein. Die Werte (oder die Ergebnisse der Ausdrücke) können jeden {{cssxref("&lt;number>")}}, {{cssxref("&lt;dimension>")}} oder {{cssxref("&lt;percentage>")}} Wert annehmen. Sie können unterschiedliche Einheiten haben, aber sie müssen alle vom gleichen Typ sein, andernfalls ist die Funktion ungültig.

Das vorherige Beispiel ist gültig — alle seine Parameter sind einheitenlose `<number>`-Werte:

```css example-good
progress(5, 0, 10)
```

Das nächste Beispiel ist ebenfalls gültig — alle seine Parameter haben {{cssxref("&lt;length>")}}-Einheiten. Im Hintergrund werden die berechneten Werte für die Berechnung verwendet. Vorausgesetzt, die {{cssxref("font-size")}} beträgt zum Zeitpunkt der Berechnung `16px`, wird `3em` auf `48px` aufgelöst, was `48%` des Weges zwischen `0px` und `100px` entspricht, so dass der Rückgabewert `0.48` beträgt.

```css example-good
progress(3em, 0px, 100px)
```

Die letzten Beispiele in diesem Abschnitt sind jedoch nicht gültig. Die Typen stimmen nicht überein, daher machen die resultierenden Berechnungen keinen Sinn.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Schaffen einheitenloser Werte

Die `progress()`-Funktion gibt einheitenlose Werte aus, daher kann sie zum Entfernen von Einheiten von Werten in ähnlicher Weise wie der [`tan(atan2())`-Trick](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j) verwendet werden. Beachten Sie jedoch, dass dies aufgrund der Aktualisierungen des Verhaltens bezüglich [CSS typisierte Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) auch durch einfache Division erreicht werden kann.

### Kombinieren von `progress()` mit anderen Funktionen und benutzerdefinierten Eigenschaften

Da `progress()` stets einen einheitenlosen Wert zurückgibt, ist es üblich, sie mit einer anderen mathematischen Funktion wie {{cssxref("calc()")}} zu kombinieren, um den gewünschten Wert und die Einheiten auszugeben. Sie können auch [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) innerhalb von `progress()`-Funktionen verwenden — was sinnvoll ist, denn oft möchte man dieselben Werte an mehreren Stellen setzen und/oder sie auf Benutzereigenschaften basieren lassen, die über JavaScript gesetzt werden.

Das folgende Beispiel berechnet, welcher Prozentsatz der Ansichtsbreite zwischen einer Mindestbreite von `320px` und einer Höchstbreite von `1200px` liegt. Die `calc()`-Funktion wird verwendet, um den `progress()`-Rückgabewert mit `600px` zu multiplizieren, um ihn in einen Pixelwert zu konvertieren, der die Hälfte des Fortschrittswerts der Ansichtsbreite zwischen `320px` und `1200px` beträgt.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Wenn die Ansichtsbreite beispielsweise `700px` beträgt, wird der Fortschrittswert als `((700 - 320) / (1200 - 320))` = `0.431818` berechnet. Die Breite wird dann als `0.431818 * 600px` berechnet, was `259.1px` ergibt.

Das nächste Beispiel ist eine Aktualisierung des vorherigen, bei dem wir Benutzereigenschaften für die Fortschritts-, Fortschrittsanfangs- und Fortschrittsendwerte verwendet haben.

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

Es ist möglich, `progress()`-Funktionen zu verwenden, um einzelne Werte innerhalb anderer Funktionen und Komponentwerte innerhalb von Kurzschreibweiseigenschaften zu berechnen, vorausgesetzt, Ihre Funktionen geben gültige Typen für diese Werte zurück.

Dies kann in einigen komplexen Ausdrücken resultieren. Zum Beispiel berechnen wir hier die ersten beiden Kanäle einer [`rgb()`-Farbe](/de/docs/Web/CSS/Reference/Values/color_value/rgb), die proportional zur gleichen Breitenproportion wie zuvor sind:

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

In diesem Beispiel zeigen wir die grundlegende Nutzung der `progress()`-Funktion, um eine Fortschrittsbalken-`Breite` als Prozentsatz gleich dem Fortschrittsverhältnis der `Breite` des übergeordneten Elements zwischen meiner `min-width` und `max-width` festzulegen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element, das unseren Inhalt darstellt, und ein {{htmlelement("div")}}-Element, das den Breitenfortschrittsbalken darstellt.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

In unserem CSS setzen wir zuerst einige Benutzereigenschaften auf unser `<section>`-Element, um seine `min-width`, `max-width` und `width` darzustellen. Dann setzen wir diese Eigenschaften auf die entsprechenden Werte der Benutzereigenschaften und geben unserem `<section>` einen festen {{cssxref("background-color")}}, um es sichtbar zu machen.

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

Jetzt zu unserem `<div>` — wir geben ihm zuerst eine `Höhe` und eine dunkle `Hintergrundfarbe`, damit es sich von unserem `<section>`-Element abhebt. Dann berechnen wir seine `Breite`, indem wir eine `progress()`-Funktion verwenden, um das Fortschrittsverhältnis der Breite zwischen der minimalen und maximalen Breite zu berechnen, und anschließend eine `calc()`-Funktion verwenden, um den `progress()`-Rückgabewert mit `100%` zu multiplizieren, um einen Prozentsatz zurückzugeben.

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

Diese Demo wird wie folgt gerendert:

{{EmbedLiveSample("basic", "100%", "150")}}

Die Breite des `<div>` beträgt `75%` der `<section>`-Breite, da `min-width` `400px` ist, `max-width` `700px` und die `width` `600px`, was `75%` der Strecke zwischen den vorherigen zwei Werten entspricht.

### Effekte beim Ändern der Containergröße

Dieses Beispiel zeigt einige umfangreichere Anwendungen der `progress()`-Funktion und resultiert in einigen unterhaltsamen Effekten, während das Browserfenster in der Größe verändert wird.

Dieses Beispiel funktioniert viel besser, wenn es in voller Größe in einem Desktop-Browser-Tab gerendert wird. Daher haben wir es nicht in einem eingebetteten Live-Beispiel auf dieser Seite gerendert. Stattdessen können Sie es live unter [CSS `progress()` Funktion Demo](https://mdn.github.io/dom-examples/css-progress/) sehen (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-progress) an).

Öffnen Sie das Live-Beispiel in einem separaten Tab und versuchen Sie, die Browserfensterbreite zu vergrößern und zu verkleinern, um den Effekt zu sehen. Lassen Sie dies offen, damit Sie darauf zurückgreifen können, während Sie die Erklärung unten lesen.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element, das den Rest unseres Inhalts enthält, und zwei {{htmlelement("section")}}-Elemente — eines für das Hintergrundbild und das andere, um unseren Inhalt zu enthalten. Die `<section class="content">` enthält ebenfalls ein `<div class="progress">`, das eine Breitenfortschrittsleiste darstellt, ähnlich wie in unserer vorherigen Demo. Wir haben den restlichen Inhalt zur Kürze ausgelassen.

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

In unserem Skript holen wir zunächst eine Referenz zu unserem `<article>`-Element. Dann definieren wir eine Funktion namens `setContainerWidth()`, die die Client-Breite des `<article>` über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abruft und eine Benutzereigenschaft darauf setzt, die `--container-width` genannt wird, die gleich der abgerundeten Client-Breite ist, wobei `px` hinzugefügt wird.

Wir setzen dann einen [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignislistener auf das `Window`-Objekt, der `setContainerWidth()` ausführt, wenn das Browserfenster in der Größe verändert wird. Wir führen es auch einmal aus, um die `--container-width` Benutzereigenschaft auf dem `<article>`-Element festzulegen, sobald die Seite geladen wird.

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

Mit dieser Einrichtung können wir nun einige Eigenschaften basierend auf der `--container-width` festlegen, so dass Teile unseres Designs sich dynamisch ändern, wenn das Fenster in der Größe verändert wird.

#### CSS

Der folgende Abschnitt erklärt nur das CSS, das relevant dafür ist, wie wir die `progress()`-Funktion im Demo-Beispiel verwendet haben. Für das vollständige CSS siehe den [CSS-Quellcode](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Wir zentrieren zuerst den `<article>` innerhalb des `<body>` mithilfe von [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), dann setzen wir einige Benutzereigenschaften darauf, um die `min-width` und `max-width` Werte zu repräsentieren, die wir anderswo verwenden werden. Wir zielen dann auf das `<article>`-Element ab, wobei wir ihm {{cssxref("min-width")}} und {{cssxref("max-width")}} Werte geben, die den zuvor festgelegten Benutzereigenschaften entsprechen. Wir setzen seine {{cssxref("position")}} auf `relative`, damit wir seinen Inhalt relativ dazu positionieren können, dann geben wir ihm eine prozentuale {{cssxref("width")}}, eine feste {{cssxref("height")}} und einen {{cssxref("border")}}.

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

Nun zu unserem `progress` `<div>`. Wir setzen seine `Breite` gleich einem Prozentsatz basierend auf dem Fortschrittsverhältnis der `--container-width` Benutzereigenschaft, die auf dem `<article>`-Element über JavaScript gesetzt wurde, zwischen seiner `min-width` und `max-width` (wir verwenden hier die gleichen Benutzereigenschaften für die zweiten und dritten `progress()`-Parameter wie für die `<article>` `min-width` und `max-width`).

Wir geben ihm zudem eine `Höhe` und {{cssxref("background-color")}} und positionieren ihn dann absolut in der oberen linken Ecke des `<article>`.

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

Als Nächstes betrachten wir unser `background` `<section>`. Wir positionieren es absolut relativ zu unserem `<article>`, setzen {{cssxref("inset", "inset: 0")}} darauf, damit es die gleiche Größe annimmt und oben darüber liegt. Wir setzen dann ein sehr breites {{cssxref("background-image")}} darauf, und positionieren das Hintergrundbild, indem wir der {{cssxref("background-position-x")}}-Eigenschaft den gleichen Wert geben, wie wir ihn auch der `width`-Eigenschaft des Fortschrittsbalkens gegeben haben. Dies hat den Effekt, dass das Hintergrundbild, wenn Sie die Browserfensterbreite vergrößern, nach links verschoben wird, was einen schönen Bildscroll-Effekt ergibt.

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

Wir positionieren die `content` `<section>` absolut, sodass sie über der `background` `<section>` liegt, und geben ihr etwas {{cssxref("padding")}}. Dann variieren wir zwei Eigenschaftswerte, während das Browserfenster in der Größe verändert wird, indem wir das gleiche Fortschrittsverhältnis wie zuvor verwenden:

- Wir variieren die R- und G-Komponenten der `background-color`, indem wir das Fortschrittsverhältnis jeweils mit 255 multiplizieren, um einen proportionalen Kanalwert zu erhalten. Wenn das Fenster breiter wird, wird die Hintergrundfarbe weniger blau und mehr weiß, was es so aussehen lässt, als ob die Szene von Nacht zu Tag wechselt (der Farbwert hat eine Opazität von `0.5`, sodass er wie eine Tönung für das darunterliegende Bild wirkt).
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

- [CSS-Werte- und Einheitenmodul](/de/docs/Web/CSS/Guides/Values_and_units)
- [Containereigenschaftenabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
