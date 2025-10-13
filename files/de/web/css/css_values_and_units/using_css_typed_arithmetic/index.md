---
title: Verwendung von CSS-getippten Berechnungen
short-title: Verwendung von getippten Berechnungen
slug: Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

**CSS-getippte Berechnungen** beziehen sich auf zulässige Berechnungen, die mit typisierten CSS-Werten über Funktionen wie {{cssxref("calc()")}} durchgeführt werden, und speziell auf das Verhalten, das im Modul [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) definiert ist. CSS-getippte Berechnungen ermöglichen es, einen Wert mit einer Einheit durch einen Wert mit einer anderen Einheit desselben Datentyps zu teilen, was zu einheitslosen Quotienten führt.

Diese Quotienten können dann als {{cssxref("number")}} in den Werten einheitsloser Eigenschaften verwendet oder in jeden numerischen Datentyp (wie {{cssxref("length")}}, {{cssxref("percentage")}} oder {{cssxref("angle")}}) umgewandelt werden, indem sie mit einem numerischen typisierten Wert multipliziert werden.

Dieses getippte Berechnungsverhalten ermöglicht es, Beziehungen zwischen verschiedenen Werten auf einer Seite herzustellen. Dieser Artikel untersucht getippte Berechnungen und stellt mehrere Beispiele vor, die sie nutzen.

> [!NOTE]
> Ursprünglich beschränkte das Modul [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) die Argumente, die Multiplikations- und Divisionsoperationen annehmen konnten, um die Teilung durch Null zur Parserzeit erkennbar zu machen und Probleme wie quadrierte Einheiten zu vermeiden. Getippte Berechnungen lockern einige dieser Einschränkungen in [unterstützten Browsern](/de/docs/Web/CSS/calc#browser_compatibility).

## Regeln für CSS-getippte Berechnungen

Beim Ausführen von Berechnungen mit Werten in CSS gibt es einige Regeln bezüglich der Kompatibilität von Werten mit unterschiedlichen Datentypen.

### Addition und Subtraktion

Beim Addieren oder Subtrahieren von Werten müssen alle Werte innerhalb desselben übergeordneten Datentyps liegen. Die folgenden Beispiele liefern alle gültige Ergebnisse:

```css example-good
/* <length-percentage> units */
calc(250px - 150px)
calc(100% - 50px)
calc(50vw + 2rem)
calc(25cqw + 3in)

/* <angle> units */
calc(40deg + 2rad)
calc(420deg - 1turn)
```

Die folgenden sind jedoch ungültig. Die Ergebnisse solcher Berechnungen mit gemischten Typen wären bedeutungslos:

```css example-bad
calc(200px + 100ms)
calc(50% + 90deg)
```

## Multiplikation

Beim Multiplizieren von Werten in CSS darf nur einer der Werte eine Einheit aufweisen. Alle anderen Werte müssen einheitslose {{cssxref("number")}}-Werte sein. Dies liegt daran, dass Sie ein Produkt wollen, das eine größere oder kleinere Menge derselben Einheit darstellt, und nicht quadrierte Einheiten erstellen wollen, die von keinem CSS-Eigenschaft akzeptiert werden.

```css example-good
calc(200px * 4) /* 800px */
calc(60deg * 3) /* 180deg */
```

Wenn Sie versuchen, zwei Werte mit Einheiten zu multiplizieren — sogar dieselben Einheiten —, diktieren normale mathematische Regeln, dass die Einheiten ebenfalls multipliziert werden sollten. Zum Beispiel:

```css example-bad
calc(200px * 4px)
```

In diesem Fall ist die Funktion ungültig, da <code>800px<sup>2</sup></code> in CSS bedeutungslos ist.

## Division

Beim Dividieren von Werten in CSS können Sie einen Wert mit Einheit durch einen einheitslosen Wert teilen:

```css example-good
calc(1000px / 2) /* 500px */
calc(360deg / 4) /* 90deg */
```

Sie können jedoch keinen einheitslosen Wert durch einen Wert mit Einheit teilen, da dies keinen Sinn ergibt:

```css example-bad
calc(1000 / 2px) /* ?!? */
```

Wenn ein Wert irgendeines numerischen Datentyps durch einen Wert desselben Typs dividiert wird, heben sich die Einheiten gegenseitig auf, und es bleibt ein einheitsloser Wert übrig. Im Hintergrund werden die beiden Werte berechnet, bevor sie durch einander geteilt werden.

Infolgedessen kann dieselbe Berechnung sehr unterschiedliche Ergebnisse haben, abhängig vom Kontext, in dem sie verwendet wird, und den Einheiten des Divisors.

Betrachten Sie das folgende Beispiel:

```css
calc(100vw / 1px)
```

Die `100vw` entsprechen `100%` der Breite des Viewports. Wenn der Viewport derzeit `1000px` breit ist, gibt die Berechnung den einheitslosen Wert `1000` zurück. Wenn der Viewport jedoch `500px` breit ist, gibt die Berechnung den einheitslosen Wert `500` zurück.

Wenn wir den `1px`-Divisor durch `1em` ersetzen, erhalten wir sehr unterschiedliche Ergebnisse:

```css
calc(100vw / 1em)
```

Wenn der Viewport `1000px` breit ist und `1em` zum Zeitpunkt der Berechnung dem Standardwert des Browsers von `16px` entspricht, ergibt die vorherige Berechnung `1000px / 16px` = `62.5`.

Früher war es nicht möglich, einen getippten Wert durch einen anderen zu teilen, selbst wenn die beiden Werte Einheiten desselben Typs hatten. Die Spezifikation wurde jedoch aktualisiert, um dies zu erlauben; überprüfen Sie die [Browser-Kompatibilität](/de/docs/Web/CSS/calc#browser_compatibility).

## Warum ist die Verhaltensaktualisierung nützlich?

Die Möglichkeit, einen getippten Wert durch einen anderen desselben Typs zu teilen, mag zunächst nicht besonders bedeutend erscheinen, aber sie ermöglicht nützliche Assoziationen zwischen verschiedenen Werten, die zur Erstellung von anpassungsfähigen Benutzeroberflächenelementen verwendet werden können.

Der Schlüssel zu all dem ist die Möglichkeit, Werte in ein einheitsloses Format umzurechnen, wie durch die folgende Division:

```css
--viewport-width-in-pixels: calc(100vw / 1px);
```

Das Ergebnis ist eine {{cssxref("number")}}, die die Viewport-Breite in Pixeln als einheitslosen Wert darstellt. Dieser kann überall dort verwendet werden, wo eine Zahl gültig ist, einschließlich anderer `calc()`-Funktionen. Sie können andere Eigenschaftswerte dynamisch basierend auf diesem Wert variieren, unabhängig von den Einheiten, die sie haben.

Beispielsweise kann der einheitslose Wert sofort auf {{cssxref("opacity")}} angewendet werden:

```css
opacity: calc(var(--viewport-width-in-pixels) / 1000 - 0.5);
```

Sie können ihn mit einem Wert wie `1deg` multiplizieren, um einen {{cssxref("&lt;angle>")}}-Wert zu erzeugen:

```css
rotate: calc(var(--viewport-width-in-pixels) * 1deg);
```

Sie können ihn mit einem Wert wie `1rem` multiplizieren, um einen {{cssxref("&lt;length>")}}-Wert zu erzeugen:

```css
font-size: calc(var(--viewport-width-in-pixels) * 1rem / 200);
```

Lassen Sie uns einige Beispiele durchgehen, um zu zeigen, wie CSS-getippte Berechnungen nützlich sein können.

## Einfaches Beispiel: Anpassungsfähige Hintergrundtransparenz

Das Beispiel [Anpassungsfähige Hintergrundtransparenz](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/) ([Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)) zeigt, wie die Transparenz eines Hintergrundbildes variiert werden kann, wenn sich die Breite des Viewports ändert. Wenn das Hintergrundbild verblasst, während der Bildschirm schmaler wird, ist es weniger wahrscheinlich, dass das Bild die Lesbarkeit des Textinhalts beeinträchtigt, wenn sie sich zu überlappen beginnen.

### HTML

Das HTML enthält einige grundlegende Textinhalte, die in ein {{htmlelement("div")}}-Element eingebettet sind.

```html
<div class="wrapper">
  <h1>Prose of the century</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</div>
```

### CSS

Wir beginnen mit der Definition einer [CSS-Benutzervariable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) namens `--width-percentage` auf dem {{cssxref(":root")}}-Element, die das Ergebnis der Berechnung `100vw / 2000px` enthält. Dieser Wert stellt die Viewport-Breite als Prozentsatz von `2000px` dar, den wir später als Alpha-Kanalwert verwenden. Wenn der Viewport `2000px` breit ist, gibt die Berechnung `1` zurück, was `100%` Alpha entspricht. Jeder Wert unter einer `2000px`-Viewportbreite führt zu einem kleineren Wert.

```css
:root {
  --width-percentage: calc((100vw / 2000px));
}
```

> [!NOTE]
> Jeder Alpha-Wert größer als `1` wird als `1` behandelt, daher müssen wir den Maximalwert nicht beschneiden.

Dann setzen wir eine feste {{cssxref("width")}} und etwas {{cssxref("padding")}} auf das umschließende `<div>` und zentrieren es horizontal mit {{cssxref("margin")}}.

```css
.wrapper {
  width: 480px;
  padding: 20px;
  margin: 0 auto;
}
```

Schließlich legen wir mehrere Hintergründe auf dem {{htmlelement("body")}}-Element fest. Wir gehen diese in umgekehrter Reihenfolge durch:

1. Der letzte und daher unterste {{cssxref("background")}}-Wert ist ein nicht wiederholendes Hintergrundbild, das sich in der Nähe der oberen rechten Ecke befindet.
2. Der oberste Hintergrund ist eine weiße halbtransparente Überlagerung, erstellt mit einer {{cssxref("linear-gradient()")}}-Funktion, bei der beide Farbverläufe zum selben Farbwert gesetzt sind. Der Alphakanalwert der Farbe wird als `1` minus der `--width-percentage`-Benutzervariable berechnet, die wir zuvor festgelegt haben: Wenn die Viewport-Breite schmaler wird, wird die `--width-percentage` kleiner, daher wird der weiße Verlauf undurchsichtiger, wodurch die Opazität des Hintergrundbildes reduziert wird.

```css
body {
  background:
    linear-gradient(
      rgb(255 255 255 / calc(1 - var(--width-percentage))),
      rgb(255 255 255 / calc(1 - var(--width-percentage)))
    ),
    url("https://mdn.github.io/shared-assets/images/examples/colorful-heart.png")
      no-repeat top 50px right 50px;
}
```

### Ergebnis

Um das Ergebnis zu sehen, [sehen Sie unser Beispiel zur Anpassungsfähigen Hintergrundtransparenz live an](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/) ([Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)). Versuchen Sie, die Breite des Viewports zu ändern, um zu sehen, wie sich die Hintergrundtransparenz als Ergebnis verändert.

## Unterschiedliche Werte unterschiedlicher Typen basierend auf einem einzigen Wert variieren

Das Beispiel [Variationen unterschiedlicher Typen](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/) ([Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)) funktioniert auf eine sehr ähnliche Weise wie das vorherige Beispiel, außer dass wir in diesem Fall die Verwendung eines einzelnen Variablenwertes in der Definition mehrerer anderer Werte mit unterschiedlichen Datentypen demonstrieren.

Insbesondere setzen wir die Hintergrundfarbe _und_ die Schriftgröße eines Absatzes basierend auf der Breite des Viewports.

### HTML

Das Markup für dieses Beispiel enthält einen Textabsatz:

```html
<p>Hello there!</p>
```

### CSS

Wir beginnen unser CSS ähnlich wie im vorherigen Demo, indem wir einen einheitslosen Wert basierend auf der Viewport-Breite erstellen. Diesmal berechnen wir ihn, indem wir `100vw` durch `1px` dividieren und die resultierende Zahl in einer Benutzervariable namens `--viewport-in-pixels` speichern. Der Wert repräsentiert die aktuelle Viewport-Breite in Pixeln, ohne Einheiten.

```css
:root {
  --viewport-in-pixels: calc(100vw / 1px);
}
```

Nun zur Gestaltung des Absatzes selbst. Wir geben ihm zuerst einige grundlegende Stile (eine {{cssxref("border")}} und {{cssxref("text-align")}} von `center`), dann setzen wir zwei Werte basierend auf der zuvor erstellten `--viewport-in-pixels`-Variable:

1. Wir setzen die {{cssxref("font-size")}} des Absatzes auf einen Wert, der gleich der `--viewport-in-pixels` dividiert durch `200` ist, multipliziert mit `1em`, um den numerischen Quotienten in `em`s umzuwandeln.
2. Wir setzen die {{cssxref("background-color")}} des Absatzes auf einen [`lch()`](/de/docs/Web/CSS/color_value/lch) Farbwert. Die Licht- und Chroma-Komponenten sind konstante Werte (`75%` und `50%`), während die Farbton-Komponente auf `--viewport-in-pixels` dividiert durch `10`, plus `100` gesetzt wird. Danach multiplizieren wir das Ergebnis mit `1deg`, um sicherzustellen, dass der Wert ein {{cssxref("angle")}} ist.
   > [!NOTE]
   > Dieser letzte Schritt ist nicht unbedingt erforderlich, da `lch()` auch einheitslose Farbtonwerte akzeptiert. Ein Gradwert kann jedoch intuitiver sein, und wir wollten ein weiteres Beispiel dafür zeigen, wie der einheitslose Wert in einen anderen Datentyp umgewandelt werden kann.

```css
p {
  border: 5px solid black;
  text-align: center;
  font-size: calc(1em * (var(--viewport-in-pixels) / 200));
  background-color: lch(
    75% 50% calc((100 + (var(--viewport-in-pixels) / 10)) * 1deg)
  );
}
```

### Ergebnis

Um das Ergebnis zu sehen, [sehen Sie sich unser Beispiel zu Variationen unterschiedlicher Typen live an](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/) ([Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)). Versuchen Sie, die Breite des Viewports zu ändern, um zu sehen, wie sich die Schriftgröße und die Hintergrundfarbe des Absatzes als Ergebnis verändern.

## Ein animierter Geschichtenkreis

Das Beispiel [animierter Geschichtenkreis](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/) ([Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)) demonstriert einen komplexeren Effekt, der die Regeln der CSS-getippten Berechnungen nutzt. In diesem Fall werden die verschiedenen Absätze eines Textkörpers in einem Kreis angeordnet, der von einem Mittelpunkt ausgeht. Darüber hinaus schließt sich der Kreis der Absätze zu einer Fächerform, wenn der Viewport schmaler wird, und öffnet sich wieder, wenn er breiter wird.

### HTML

Das HTML ist ziemlich einfach — ein {{htmlelement("div")}}, das mehrere {{htmlelement("p")}}-Elemente enthält. Der Text des ersten Absatzes ist in ein {{htmlelement("strong")}}-Element eingefasst, um anzuzeigen, wo das Lesen beginnen soll.

```html
<div class="story-circle">
  <p><strong>Hello there!</strong></p>
  <p>This is</p>
  <p>quite an</p>
  <p>interesting way</p>
  <p>to tell a</p>
  <p>story</p>
  <p>all around in</p>
  <p>a circle.</p>
  <p>What fun!</p>
</div>
```

### CSS

Wir beginnen das CSS, indem wir eine {{cssxref("height")}} von `100%` auf dem {{cssxref(":root")}}-Element setzen.

```css
:root {
  height: 100%;
}
```

Als nächstes setzen wir mehrere Eigenschaften auf das {{htmlelement("body")}}-Element:

- Wir beginnen mit dem Setzen einer `height` von `inherit`, was bedeutet, dass das `<body>` die `100%` Höhe des `:root`-Elements erben wird und daher die gesamte Höhe des Viewports umfasst.
- Als nächstes zentrieren wir das `<body>` horizontal mit {{cssxref("margin")}} und geben ihm eine {{cssxref("max-width")}}. Wie Sie später sehen werden, ist diese obere Grenze wichtig, um die maximale Drehung der Fächer-/Kreisform zu kontrollieren.
- Wir zentrieren das `<div>` mit `class="story-circle"` horizontal und vertikal innerhalb des `<body>` mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout).
- Wir verwenden die {{cssxref("container-type")}}-Eigenschaft, um das `<body>` als eine Inline-Größe Abfragecontainer zu deklarieren. Dies ist wichtig, denn wir möchten die Formdrehung basierend auf der `<body>`-Breite und nicht auf der Viewport-Breite variieren lassen. Die Deklaration als Größenabfragecontainer ermöglicht es uns, dessen Größe in Berechnungen zu referenzieren.

```css
body {
  height: inherit;
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  container-type: inline-size;
}
```

Nun kommen wir zur Gestaltung des `story-circle`-`<div>`. Wir setzen seine `width` und `height` auf `1px`: es wird als Bezugspunkt fungieren, um den sich seine Kind-Absätze in einem Kreis positionieren. (Wir müssen nicht einmal eine Positionierung darauf setzen, da es in Ordnung ist, dass die Absätze relativ zum `<body>` positioniert werden).

Wir erstellen dann eine Benutzervariable namens `--width-percentage`, die das Ergebnis von `100cqw` (100% der Breite des Elternabfragecontainers des Elements, das das `<body>`-Element ist) geteilt durch `1200px`, minus `0.33333` enthält. Dies ist der Schlüsselwert, der die Menge, um die sich der Kreis dreht, steuern wird, während die Breite des Viewports geändert wird.

```css
.story-circle {
  width: 1px;
  height: 1px;
  --width-percentage: calc((100cqw / 1200px) - 0.33333);
}
```

Wir verwenden die Containerabfragebreite anstelle der Viewportbreite, um die Drehung zu steuern, weil wir eine maximale Grenze für den Container festlegen wollen, die durch die `<body>`-`max-width` kontrolliert wird. Wenn der Rotationswert größer als ein ganzer Kreis wird, beginnt sich der letzte Absatz über den ersten zu überlappen, was den Effekt beeinträchtigt.

Da die `max-width` `1600px` beträgt, hätten Sie erwartet, dass die Berechnung `100cqw / 1600px)` lautet. Das würde funktionieren, aber wir haben uns stattdessen für `(100cqw / 1200px) - 0.33333` entschieden (das `0.33333` ergibt sich aus `1600px/1200px - 1`). Beide würden dazu führen, dass die maximale Drehung bei einer `<body>`-Breite von `1600px` auftritt, aber der Fächer hat jetzt eine kleinere Mindestdrehung, was bei engen Viewportbreiten einen besseren Effekt erzielt.

Die letzte Stilregel wählt die Absätze selbst aus. Die meisten dieser Stile sind rudimentär. Es ist erwähnenswert, dass wir die {{cssxref("position")}} auf `absolute` gesetzt haben, damit alle Absätze übereinander sitzen, und wir haben einen {{cssxref("transform-origin")}}-Wert von `center left` gesetzt, um zu bewirken, dass Absätze um die Mitte ihres linken Randes rotieren, sodass sie alle aus einem Mittelpunkt über ihrem enthaltenden `<div>` ausgefächert werden.

Nun zu dem interessanten Teil — wir definieren eine Benutzervariable namens `--angle`, die den einheitslosen Rotationswinkel des Absatzes enthält, bevor wir die {{cssxref("rotate")}}-Eigenschaft auf den resultierenden Wert setzen. Wir multiplizieren die resultierende Zahl mit `1deg`, um sie in einen Gradwert zu konvertieren. Die `--angle`-Benutzervariable ist das Produkt aus drei Werten:

1. Der {{cssxref("sibling-index()")}} des Absatzes minus `1`, was dazu führt, dass der erste Absatz einen Rotationswinkel von `0` hat, da wir möchten, dass er horizontal ist.
2. `360` geteilt durch die {{cssxref("sibling-count()")}} des Absatzes, was bewirkt, dass alle Absätze gleichmäßig um den Kreis verteilt sind, was bedeutet, dass das Design auch dann funktioniert, wenn sich die Anzahl der Absätze ändert.
3. Unsere `--width-percentage`-Benutzervariable, die bewirkt, dass sich die Rotationen der Absätze um den Kreis ändern, während sich die Breite des Viewports ändert. Denken Sie daran, dass diese Variable einen maximalen Wert von `1` hat, der erreicht wird, wenn das `<body>`-Element seine `max-width` von `1600px` erreicht.

```css
p {
  padding: 10px;
  width: 150px;
  text-align: right;
  background: linear-gradient(to right, red, orange 50%);
  border-radius: 5px;

  position: absolute;
  transform-origin: center left;

  --angle: calc(
    ((sibling-index() - 1) * (360 / sibling-count())) * var(--width-percentage)
  );
  rotate: calc(var(--angle) * 1deg);
}
```

### Ergebnis

Um das Ergebnis zu sehen, [sehen Sie unser Beispiel zum Animierten Geschichtenkreis live an](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/) ([Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)). Versuchen Sie, die Breite des Viewports zu erhöhen und zu verringern, um zu sehen, wie sich die Absatz-Fächerform entfaltet und wieder in einen Kreis formt.

## Siehe auch

- {{cssxref("calc()")}}, {{cssxref("abs()")}}
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [CSS-getippte Berechnungen](https://css-tricks.com/css-typed-arithmetic/) auf css-tricks.com (2025)
