---
title: Verwenden von CSS-typisierter Arithmetik
short-title: Verwendung typisierter Arithmetik
slug: Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic
l10n:
  sourceCommit: da5384d0d11e250ab735379eaa6856468ffd52cd
---

**CSS-typisierte Arithmetik** bezieht sich auf erlaubte Berechnungen, die mit typisierten CSS-Werten über Funktionen wie {{cssxref("calc()")}} durchgeführt werden. Insbesondere bezieht es sich auf das Verhalten, das im Modul [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) definiert ist. CSS-typisierte Arithmetik ermöglicht es, einen Wert mit einer Einheit durch einen Wert mit einer anderen Einheit desselben Datentyps zu teilen, was zu einheitenlosen Quotienten führt.

Diese Quotienten können dann als {{cssxref("number")}} in den Werten einheitenloser Eigenschaften verwendet oder in jeden numerischen Datentyp (wie {{cssxref("length")}}, {{cssxref("percentage")}} oder {{cssxref("angle")}}) umgewandelt werden, indem sie mit einem numerisch typisierten Wert multipliziert werden.

Dieses Verhalten typisierter Arithmetik ermöglicht es, Beziehungen zwischen verschiedenen Werten auf einer Seite zu schaffen. Dieser Artikel untersucht typisierte Arithmetik und präsentiert mehrere Beispiele, die sie nutzen.

> [!NOTE]
> Ursprünglich beschränkte das Modul [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) die Argumente von Multiplikations- und Divisionoperationen, um sicherzustellen, dass eine Division durch null zur Parserzeit erkannt und Probleme wie Quadrateinheiten vermieden werden. Typisierte Arithmetik lockert einige dieser Einschränkungen in [unterstützenden Browsern](/de/docs/Web/CSS/calc#browser_compatibility).

## Regeln der CSS-typisierten Arithmetik

Bei der Durchführung von Berechnungen mit Werten in CSS gibt es einige Regeln bezüglich der Kompatibilität von Werten mit unterschiedlichen Datentypen.

### Addition und Subtraktion

Beim Addieren oder Subtrahieren von Werten müssen alle Werte innerhalb desselben allgemeinen Datentyps sein. Die folgenden Beispiele führen alle zu gültigen Ergebnissen:

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

Die folgenden Beispiele sind jedoch ungültig. Die Ergebnisse solcher Berechnungen mit gemischten Typen wären sinnlos:

```css example-bad
calc(200px + 100ms)
calc(50% + 90deg)
```

## Multiplikation

Bei der Multiplikation von Werten in CSS darf nur einer der Werte eine Einheit haben. Alle anderen Werte müssen einheitenlose {{cssxref("number")}}-Werte sein. Dies liegt daran, dass Sie ein Produkt wollen, das eine größere oder kleinere Menge derselben Einheit ist, und keine quadratischen Einheiten erzeugen möchten, die keine CSS-Eigenschaften akzeptieren.

```css example-good
calc(200px * 4) /* 800px */
calc(60deg * 3) /* 180deg */
```

Wenn Sie versuchen, zwei Werte mit Einheiten zu multiplizieren — selbst mit denselben Einheiten —, diktieren normale mathematische Regeln, dass die Einheiten ebenfalls multipliziert werden sollten. Zum Beispiel:

```css example-bad
calc(200px * 4px)
```

In diesem Fall ist die Funktion ungültig, da <code>800px<sup>2</sup></code> in CSS bedeutungslos ist.

## Division

Wenn Sie Werte in CSS teilen, können Sie einen Wert mit einer Einheit durch einen einheitenlosen Wert teilen:

```css example-good
calc(1000px / 2) /* 500px */
calc(360deg / 4) /* 90deg */
```

Es macht jedoch keinen Sinn, einen einheitenlosen Wert durch einen Wert mit einer Einheit zu teilen:

```css example-bad
calc(1000 / 2px) /* ?!? */
```

Wenn ein Wert eines beliebigen numerischen Datentyps durch einen Wert desselben Typs geteilt wird, heben sich die Einheiten gegenseitig auf, und es bleibt ein einheitenloser Wert. Im Hintergrund werden die beiden Werte vor der Teilung miteinander berechnet.

Daher kann dieselbe Berechnung je nach Kontext, in dem sie verwendet wird, und den Einheiten des Divisors sehr unterschiedliche Ergebnisse haben.

Nehmen wir folgendes Beispiel:

```css
calc(100vw / 1px)
```

Das `100vw` entspricht `100%` der Breite des Viewports. Wenn der Viewport derzeit `1000px` breit ist, gibt die Berechnung den einheitenlosen Wert `1000` zurück. Doch wenn der Viewport `500px` breit ist, gibt die Berechnung den einheitenlosen Wert `500` zurück.

Wenn wir den `1px` Divisor durch `1em` ersetzen, erhalten wir sehr unterschiedliche Ergebnisse:

```css
calc(100vw / 1em)
```

Wenn der Viewport `1000px` breit ist und `1em` zum Zeitpunkt der Berechnung dem Browser-Standard von `16px` entspricht, gibt die vorherige Berechnung `1000px / 16px` = `62.5` zurück.

Früher war es nicht möglich, einen typisierten Wert durch einen anderen zu teilen, selbst wenn beide Werte Einheiten desselben Typs hatten. Die Spezifikation wurde jedoch aktualisiert, um dies zu erlauben; prüfen Sie die [Browser-Kompatibilität](/de/docs/Web/CSS/calc#browser_compatibility).

## Warum ist das Verhaltensupdate nützlich?

Die Fähigkeit, einen typisierten Wert durch einen anderen desselben Typs zu teilen, mag zunächst nicht sehr bedeutsam erscheinen, aber sie ermöglicht nützliche Assoziationen zwischen verschiedenen Werten, die zur Erstellung von responsiven UI-Features verwendet werden können.

Der Schlüssel zu all dem ist die Möglichkeit, Werte in einer einheitenlosen Form durch solche Divisionen darzustellen:

```css
--viewport-width-in-pixels: calc(100vw / 1px);
```

Das Ergebnis ist eine {{cssxref("number")}}, die die Breite des Viewports in Pixeln als einheitenlosen Wert darstellt. Dieser kann überall dort verwendet werden, wo eine Zahl gültig ist, einschließlich anderer `calc()`-Funktionen. Sie können andere Eigenschaftswerte dynamisch basierend auf diesem Wert variieren, unabhängig davon, welche Einheiten sie haben.

Zum Beispiel kann der einheitenlose Wert direkt auf {{cssxref("opacity")}} übertragen werden:

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

Lassen Sie uns einige Beispiele durchgehen, um zu zeigen, wie CSS-typisierte Arithmetik nützlich sein kann.

## Einfaches Beispiel: responsive Hintergrundtranzparenz

Das Beispiel zur [responsiven Hintergrundtranzparenz](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)) zeigt, wie man die Transparenz eines Hintergrundbildes variieren kann, während sich die Breite des Viewports ändert. Wenn das Hintergrundbild ausgeblendet wird, während der Bildschirm schmaler wird, wird das Bild weniger wahrscheinlich die Lesbarkeit des Textinhalts beeinträchtigen, sobald sie anfangen, sich zu überlagern.

### HTML

Das HTML enthält einige grundlegende Textinhalte, die in einem {{htmlelement("div")}}-Element eingeschlossen sind.

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

Wir beginnen mit der Definition einer [CSS-Benutzervariable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) namens `--width-percentage` auf dem {{cssxref(":root")}}-Element, die das Ergebnis der Berechnung `100vw / 2000px` enthält. Dieser Wert stellt die Viewport-Breite als Prozentsatz von `2000px` dar, der später als Alphakanalwert genutzt wird. Wenn der Viewport `2000px` breit ist, gibt die Berechnung `1` zurück, was `100%` Alpha entspricht. Bei jeder Breite unter `2000px` wird ein kleinerer Wert zurückgegeben.

```css
:root {
  --width-percentage: calc((100vw / 2000px));
}
```

> [!NOTE]
> Jeder Alphawert größer als `1` wird als `1` behandelt, daher müssen wir den Maximalwert nicht begrenzen.

Wir setzen dann eine feste {{cssxref("width")}} und etwas {{cssxref("padding")}} auf den Wrapper `<div>` und zentrieren es horizontal mit {{cssxref("margin")}}.

```css
.wrapper {
  width: 480px;
  padding: 20px;
  margin: 0 auto;
}
```

Schließlich setzen wir mehrere Hintergründe auf das {{htmlelement("body")}}-Element. Wir gehen diese in umgekehrter Reihenfolge durch:

1. Der letzte und damit der unterste {{cssxref("background")}}-Wert ist ein sich nicht wiederholendes Hintergrundbild, das sich in der Nähe der oberen rechten Ecke befindet.
2. Der oberste Hintergrund ist ein weißes halbtransparentes Overlay, das mit einer {{cssxref("linear-gradient()")}}-Funktion erstellt wurde, bei der beide Farbverläufe auf dieselbe Farbe eingestellt sind. Der Alphakanalwert der Farbe wird als `1` minus der `--width-percentage`-Benutzervariable berechnet, die wir zuvor festgelegt haben: Während die Viewport-Breite schmaler wird, wird `--width-percentage` kleiner, daher wird der weiße Verlauf undurchsichtiger und reduziert die Transparenz des Hintergrundbilds.

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

Um das Ergebnis zu sehen, [zeigen Sie unser Beispiel zur responsiven Hintergrundtranzparenz live an](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)). Versuchen Sie, die Viewport-Breite zu ändern, um zu sehen, wie sich die Hintergrundtranzparenz als Ergebnis verändert.

## Variation unterschiedlicher Werttypen basierend auf einem einzelnen Wert

Das Beispiel zu [Variationen unterschiedlicher Typen](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)) funktioniert sehr ähnlich wie das vorherige Beispiel, mit dem Unterschied, dass wir in diesem Fall die Verwendung eines einzelnen Variablenwertes bei der Definition mehrerer anderer Werte mit unterschiedlichen Datentypen demonstrieren.

Konkret setzen wir die Hintergrundfarbe _und_ die Schriftgröße eines Absatzes basierend auf der Viewport-Breite.

### HTML

Das Markup für dieses Beispiel enthält einen Textabsatz:

```html
<p>Hello there!</p>
```

### CSS

Wir beginnen unser CSS ähnlich wie bei der vorherigen Demo, indem wir einen einheitenlosen Wert basierend auf der Viewport-Breite erstellen. Diesmal berechnen wir ihn, indem wir `100vw` durch `1px` teilen und die resultierende Zahl in einer Benutzervariable namens `--viewport-in-pixels` speichern. Der Wert stellt die aktuelle Breite des Viewports in Pixeln dar, ohne Einheiten.

```css
:root {
  --viewport-in-pixels: calc(100vw / 1px);
}
```

Nun kommen wir zur Gestaltung des Absatzes selbst. Zunächst geben wir ihm einige grundlegende Stile (einen {{cssxref("border")}} und {{cssxref("text-align")}} von `center`), dann setzen wir zwei Werte basierend auf der zuvor erstellten `--viewport-in-pixels`-Eigenschaft:

1. Wir setzen die {{cssxref("font-size")}} des Absatzes auf einen Wert, der gleich dem Ergebnis von `--viewport-in-pixels` geteilt durch `200`, multipliziert mit `1em`, ist, um den numerischen Quotienten in `em`s umzuwandeln.
2. Wir setzen die {{cssxref("background-color")}} des Absatzes auf einen [`lch()`](/de/docs/Web/CSS/color_value/lch) Farbwert. Die Leuchtkraft- und Chroma-Komponenten sind konstante Werte (`75%` bzw. `50%`), während die Farbtonkomponente auf `--viewport-in-pixels` geteilt durch `10`, plus `100` gesetzt ist. Wir multiplizieren das Ergebnis mit `1deg`, um sicherzustellen, dass der Wert ein {{cssxref("angle")}} ist.
   > [!NOTE]
   > Dieser letzte Schritt ist nicht unbedingt erforderlich, da `lch()` auch einheitenlose Farbtonwerte akzeptiert. Ein Gradwert kann jedoch intuitiver sein, und wir wollten ein weiteres Beispiel dafür zeigen, wie der einheitenlose Wert in einen anderen Datentyp umgewandelt werden kann.

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

Um das Ergebnis zu sehen, [zeigen Sie unser Beispiel zu Variationen unterschiedlicher Typen live an](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)). Versuchen Sie, die Viewport-Breite zu ändern, um zu sehen, wie sich die Schriftgröße und die Hintergrundfarbe des Absatzes als Ergebnis verändern.

## Ein animierter Geschichtskreis

Das Beispiel [animierter Geschichtskreis](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)) demonstriert einen komplexeren Effekt, der durch die Ausnutzung der Regeln für CSS-typisierte Arithmetik geschaffen wird. In diesem Fall werden die verschiedenen Absätze eines Textkörpers kreisförmig um einen Mittelpunkt angeordnet. Außerdem schließt sich der Absatzkreis zu einer Fächerform, wenn der Viewport schmaler wird, und öffnet sich wieder, wenn er breiter wird.

### HTML

Das HTML ist recht einfach — ein {{htmlelement("div")}} mit mehreren {{htmlelement("p")}}-Elementen. Der Text des ersten Absatzes ist in ein {{htmlelement("strong")}}-Element eingeschlossen, um den Beginn des Lesens anzuzeigen.

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

Wir beginnen das CSS, indem wir eine {{cssxref("height")}} von `100%` auf das {{cssxref(":root")}}-Element setzen.

```css
:root {
  height: 100%;
}
```

Als nächstes setzen wir mehrere Eigenschaften auf das {{htmlelement("body")}}-Element:

- Wir beginnen mit einer `height` von `inherit`, was bedeutet, dass das `<body>` die `100%`-Höhe des `<:root>`-Elements erbt und daher die gesamte Höhe des Viewports einnimmt.
- Als nächstes zentrieren wir das `<body>` horizontal mit {{cssxref("margin")}} und geben ihm eine {{cssxref("max-width")}}. Wie Sie später sehen werden, ist diese Obergrenze wichtig, um die maximale Rotation der Fächer-/Kreisform zu steuern.
- Wir zentrieren das `<div>` mit `class="story-circle"` horizontal und vertikal innerhalb des `<body>` mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout).
- Wir verwenden die {{cssxref("container-type")}}-Eigenschaft, um das `<body>` als Inline-Größenabfrage-Container zu deklarieren. Dies ist wichtig, weil wir die Rotation der Form basierend auf der Breite des `<body>`, und nicht auf die Viewport-Breite, variieren möchten. Die Einstellung als Größenabfrage-Container ermöglicht es uns, seine Größe in Berechnungen zu referenzieren.

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

Nun kommen wir zur Gestaltung des `story-circle` `<div>`. Wir setzen seine `width` und `height` auf `1px`: Er wird als Bezugspunkt dienen, wobei seine Kindabsätze kreisförmig um ihn herum positioniert werden. (Wir müssen nicht einmal Positionierungsangaben auf ihm setzen, da es in Ordnung ist, dass die Absätze relativ zum `<body>` positioniert werden.)

Wir erstellen dann eine Benutzervariable namens `--width-percentage`, die das Ergebnis von `100cqw` (100% der Breite des Elternabfrage-Containers des Elements, das das `<body>` Element ist) geteilt durch `1200px`, minus `0.33333`, enthält. Dies ist der Schlüsselwert, der die Menge steuert, um die sich der Kreis dreht, während sich die Viewport-Breite ändert.

```css
.story-circle {
  width: 1px;
  height: 1px;
  --width-percentage: calc((100cqw / 1200px) - 0.33333);
}
```

Wir verwenden die Container-Abfrage-Breite anstelle der Viewport-Breite, um die Rotation zu steuern, weil wir eine maximale Grenze für den Container festlegen möchten, die durch die `max-width` des `<body>` gesteuert wird. Wenn der Rotationswert größer als ein voller Kreis wird, beginnt der letzte Absatz, mit dem ersten zu überlappen, was den Effekt verdirbt.

Da die `max-width` `1600px` beträgt, hätten Sie erwartet, dass die Berechnung `100cqw / 1600px)` lautet. Dies würde funktionieren, aber wir haben stattdessen `(100cqw / 1200px) - 0.33333` gewählt (das `0.33333` stammt von `1600px / 1200px - 1`). Beide würden dazu führen, dass die maximale Rotation bei einer `<body>`-Breite von `1600px` erreicht wird, aber der Fächer hat nun eine kleinere minimale Rotation, die bei schmaleren Viewport-Breiten einen besseren Effekt ergibt.

Die abschließende Stilregel wählt die Absätze selbst aus. Das meiste dieses Stilings ist rudimentär. Es ist bemerkenswert, dass wir {{cssxref("position")}} auf `absolute` gesetzt haben, um alle Absätze übereinander zu platzieren, und wir haben einen {{cssxref("transform-origin")}}-Wert von `center left` gesetzt, um die Absätze um die Mitte ihrer linken Kante zu rotieren, sodass sie sich alle von einem Mittelpunkt über ihrem enthaltenen `<div>` auffächern.

Nun zum interessanten Teil — wir definieren eine Benutzervariable namens `--angle`, die den einheitenlosen Drehwinkel des Absatzes enthält, bevor wir die {{cssxref("rotate")}}-Eigenschaft auf den resultierenden Wert setzen. Wir multiplizieren die resultierende Zahl mit `1deg`, um sie in einen Gradwert umzuwandeln. Die `--angle`-Benutzervariable ist das Produkt von drei Werten:

1. Der {{cssxref("sibling-index()")}} des Absatzes, minus `1`, was dazu führt, dass der erste Absatz einen Drehwinkel von `0` hat, da wir ihn horizontal haben möchten.
2. `360` geteilt durch die {{cssxref("sibling-count()")}} des Absatzes, was dazu führt, dass alle Absätze gleichmäßig um den Kreis herum verteilt sind, sodass das Design auch dann funktioniert, wenn sich die Anzahl der Absätze ändert.
3. unsere `--width-percentage`-Benutzervariable, die die Rotation der Absätze um den Kreis variiert, wenn sich die Viewport-Breite ändert. Denken Sie daran, dass diese Variable einen maximalen Wert von `1` hat, der erreicht wird, wenn das `<body>`Element seine `max-width` von `1600px` erreicht.

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

Um das Ergebnis zu sehen, [zeigen Sie unser Beispiel für einen animierten Geschichtskreis live an](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)). Versuchen Sie, die Viewport-Breite zu erhöhen und zu verringern, um zu sehen, wie sich die Fächerform des Absatzes in einen Kreis entfaltet und wieder zurück.

## Siehe auch

- {{cssxref("calc()")}}, {{cssxref("abs()")}}
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [CSS-typisierte Arithmetik](https://css-tricks.com/css-typed-arithmetic/) auf css-tricks.com (2025)
