---
title: Verwendung von CSS getippten Rechenarten
short-title: Verwendung von getippten Rechenarten
slug: Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**CSS getippte Rechenarten** bezieht sich auf erlaubte Berechnungen, die mit typisierten CSS-Werten über Funktionen wie {{cssxref("calc()")}} durchgeführt werden können. Speziell bezieht sich dies auf das Verhalten, das im Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) definiert ist. CSS getippte Rechenarten ermöglichen es, einen Wert mit einer Einheit durch einen Wert mit einer anderen Einheit desselben Datentyps zu teilen, was zu einheitslosen Quotienten führt.

Diese Quotienten können dann als {{cssxref("number")}} in den Werten von einheitslosen Eigenschaften verwendet oder in jeden numerischen Datentyp (wie {{cssxref("length")}}, {{cssxref("percentage")}} oder {{cssxref("angle")}}) umgewandelt werden, indem sie mit einem numerisch typisierten Wert multipliziert werden.

Dieses Verhalten von getippten Rechenarten ermöglicht es, Beziehungen zwischen verschiedenen Werten auf einer Seite zu schaffen. Dieser Artikel untersucht getippte Rechenarten und bietet mehrere Beispiele, die deren Nutzung veranschaulichen.

> [!NOTE]
> Ursprünglich beschränkte das Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) die Argumente der Multiplikations- und Divisionoperationen, um eine Teilung durch Null zur Parse-Zeit erkennbar zu machen und Probleme wie quadrierte Einheiten zu vermeiden. Getippte Rechenarten lockern einige dieser Einschränkungen in [unterstützten Browsern](/de/docs/Web/CSS/Reference/Values/calc#browser_compatibility).

## Regeln für CSS getippte Rechenarten

Beim Durchführen von Berechnungen mit Werten in CSS gibt es einige Regeln bezüglich der Kompatibilität von Werten mit unterschiedlichen Datentypen.

### Addition und Subtraktion

Beim Addieren oder Subtrahieren von Werten müssen alle Werte innerhalb desselben Gesamtdatentyps liegen. Die folgenden Beispiele führen alle zu gültigen Ergebnissen:

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

Die folgenden Beispiele sind jedoch ungültig. Die Ergebnisse solcher Mischtyp-Berechnungen wären bedeutungslos:

```css example-bad
calc(200px + 100ms)
calc(50% + 90deg)
```

## Multiplikation

Beim Multiplizieren von Werten in CSS darf nur einer der Werte eine Einheit haben. Alle anderen Werte müssen einheitslose {{cssxref("number")}}-Werte sein. Dies liegt daran, dass Sie ein Produkt erzeugen möchten, das eine größere oder kleinere Menge derselben Einheit ist, und keine quadrierten Einheiten erzeugen möchten, die keine CSS-Eigenschaften akzeptieren.

```css example-good
calc(200px * 4) /* 800px */
calc(60deg * 3) /* 180deg */
```

Wenn Sie versuchen, zwei Werte mit Einheiten zu multiplizieren – selbst mit denselben Einheiten – schreiben normale mathematische Regeln vor, dass die Einheiten ebenfalls multipliziert werden sollten. Zum Beispiel:

```css example-bad
calc(200px * 4px)
```

In diesem Fall ist die Funktion ungültig, da <code>800px<sup>2</sup></code> in CSS bedeutungslos ist.

## Division

Beim Dividieren von Werten in CSS können Sie einen Wert mit einer Einheit durch einen einheitslosen Wert teilen:

```css example-good
calc(1000px / 2) /* 500px */
calc(360deg / 4) /* 90deg */
```

Sie können jedoch keinen einheitslosen Wert durch einen Wert mit einer Einheit teilen, da dies keinen Sinn ergibt:

```css example-bad
calc(1000 / 2px) /* ?!? */
```

Wenn ein Wert eines beliebigen numerischen Datentyps durch einen Wert desselben Typs geteilt wird, heben sich die Einheiten gegenseitig auf, und es bleibt ein einheitsloser Wert übrig. Im Hintergrund werden die beiden Werte berechnet, bevor sie durcheinander geteilt werden.

Das Ergebnis kann sich daher je nach Kontext, in dem es verwendet wird, und den Einheiten des Divisors erheblich unterscheiden.

Nehmen Sie das folgende Beispiel:

```css
calc(100vw / 1px)
```

Die `100vw` sind gleichbedeutend mit `100%` der Breite des Viewports. Wenn der Viewport derzeit `1000px` breit ist, wird die Berechnung den einheitslosen Wert `1000` zurückgeben. Wenn der Viewport `500px` breit ist, wird die Berechnung den einheitslosen Wert `500` zurückgeben.

Wenn wir den `1px` Divisor durch `1em` ersetzen, erhalten wir sehr unterschiedliche Ergebnisse:

```css
calc(100vw / 1em)
```

Wenn der Viewport `1000px` breit ist und `1em` zum Zeitpunkt der Berechnung dem Standardwert des Browsers von `16px` entspricht, ergibt die vorherige Berechnung `1000px / 16px` = `62.5`.

Früher war es der Fall, dass man einen typisierten Wert nicht durch einen anderen teilen konnte, selbst wenn beide Werte Einheiten desselben Typs enthalten. Die Spezifikation wurde jedoch aktualisiert, um dies zu erlauben; überprüfen Sie die [Browser-Kompatibilität](/de/docs/Web/CSS/Reference/Values/calc#browser_compatibility).

## Warum ist das Verhaltensupdate nützlich?

Die Fähigkeit, einen typisierten Wert durch einen anderen desselben Typs zu teilen, mag auf den ersten Blick nicht sehr bedeutend erscheinen, ermöglicht jedoch nützliche Verknüpfungen zwischen verschiedenen Werten, die zur Erstellung responsiver UI-Elemente verwendet werden können.

Der Schlüssel zu all dem ist die Möglichkeit, Werte in einheitsloser Form darzustellen, durch Divisionen wie diese:

```css
--viewport-width-in-pixels: calc(100vw / 1px);
```

Das Ergebnis ist eine {{cssxref("number")}}, die die Viewport-Breite in Pixeln als einheitslosen Wert darstellt. Diese kann überall verwendet werden, wo eine Zahl gültig ist, einschließlich anderer `calc()`-Funktionen. Sie können andere Eigenschaftswerte dynamisch basierend auf diesem Wert variieren, unabhängig davon, welche Einheiten sie haben.

Zum Beispiel kann der einheitslose Wert sofort auf {{cssxref("opacity")}} übertragen werden:

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

Lassen Sie uns einige Beispiele durchgehen, um zu zeigen, wie nützlich CSS getippte Rechenarten sein können.

## Einfaches Beispiel: responsive Hintergrund-Transparenz

Das Beispiel [responsive Hintergrund-Transparenz](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)) zeigt, wie die Transparenz eines Hintergrundbildes variiert werden kann, während sich die Breite des Viewports ändert. Wenn das Hintergrundbild verblasst, während der Bildschirm schmaler wird, beeinflusst das Bild weniger die Lesbarkeit des Textes, wenn sie sich überlappen.

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

Wir beginnen mit der Definition einer [CSS-Custom Property](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) namens `--width-percentage` auf dem {{cssxref(":root")}}-Element, das das Ergebnis der Berechnung `100vw / 2000px` enthält. Dieser Wert stellt die Viewport-Breite als Prozentsatz von `2000px` dar, den wir später als Alphakanal-Wert verwenden werden. Wenn der Viewport `2000px` breit ist, wird die Berechnung `1` zurückgeben, was `100%` Alpha entspricht. Alles weniger als `2000px` Viewport-Breite resultiert in einem kleineren Wert.

```css
:root {
  --width-percentage: calc((100vw / 2000px));
}
```

> [!NOTE]
> Jeder Alphawert, der größer als `1` ist, wird als `1` behandelt, daher müssen wir den maximalen Wert nicht begrenzen.

Wir setzen dann eine feste {{cssxref("width")}} und etwas {{cssxref("padding")}} auf den Wrapper `<div>` und zentrieren ihn horizontal mit {{cssxref("margin")}}.

```css
.wrapper {
  width: 480px;
  padding: 20px;
  margin: 0 auto;
}
```

Schließlich setzen wir mehrere Hintergründe auf dem {{htmlelement("body")}}-Element. Gehen wir diese in umgekehrter Reihenfolge durch:

1. Der letzte und damit unterste {{cssxref("background")}}-Wert ist ein nicht wiederholendes Hintergrundbild, das in der Nähe der oberen rechten Ecke positioniert ist.
2. Der obere Hintergrund ist eine weiße, halbtransparente Überlagerung, die mit einer {{cssxref("linear-gradient()")}}-Funktion mit beiden Farbstopps auf die gleiche Farbe gesetzt ist. Der Alphakanalwert der Farbe wird so berechnet: `1` minus der `--width-percentage` Custom Property, die wir zuvor festgelegt haben: Wenn die Viewport-Breite kleiner wird, wird `--width-percentage` kleiner und der weiße Gradient wird undurchsichtiger, wodurch die Transparenz des Hintergrundbilds reduziert wird.

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

Um das Ergebnis zu sehen, [sehen Sie unser Live-Beispiel für responsive Background-Transparenz](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)). Versuchen Sie, die Viewport-Breite zu ändern, um zu sehen, wie sich die Hintergrundtransparenz als Ergebnis variiert.

## Verschiedene Werte unterschiedlicher Typen basierend auf einem einzigen Wert variieren

Das Beispiel [Variationen unterschiedlicher Typen](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)) funktioniert sehr ähnlich wie das vorherige Beispiel, außer dass wir in diesem Fall die Verwendung eines einzigen Variablenwerts in der Definition von mehreren anderen Werten mit unterschiedlichen Datentypen demonstrieren.

Wir setzen speziell die Hintergrundfarbe _und_ die Schriftgröße eines Absatzes basierend auf der Viewport-Breite.

### HTML

Das Markup für dieses Beispiel enthält einen Textabsatz:

```html
<p>Hello there!</p>
```

### CSS

Wir beginnen unser CSS ähnlich wie beim vorherigen Demo, indem wir einen einheitslosen Wert basierend auf der Viewport-Breite erstellen. Dieses Mal berechnen wir ihn, indem wir `100vw` durch `1px` teilen und die resultierende Zahl in einer Custom Property namens `--viewport-in-pixels` speichern. Der Wert stellt die aktuelle Viewport-Breite in Pixeln ohne Einheiten dar.

```css
:root {
  --viewport-in-pixels: calc(100vw / 1px);
}
```

Nun zur Gestaltung des Absatzes selbst. Zunächst geben wir ihm einige Grundstile (einen {{cssxref("border")}} und {{cssxref("text-align")}} mit dem Wert `center`), dann setzen wir zwei Werte basierend auf der `--viewport-in-pixels`-Property, die zuvor erstellt wurde:

1. Wir setzen die {{cssxref("font-size")}} des Absatzes auf einen Wert gleich `--viewport-in-pixels` geteilt durch `200`, multipliziert mit `1em`, um den numerischen Quotienten in `em`s zu konvertieren.
2. Wir setzen die {{cssxref("background-color")}} des Absatzes auf einen [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Farbwert. Der Helligkeits- und Chroma-Anteil sind konstante Werte (`75%` bzw. `50%`), während der Farbtonanteil auf `--viewport-in-pixels` geteilt durch `10`, plus `100`, gesetzt ist. Dann multiplizieren wir das Ergebnis mit `1deg`, um sicherzustellen, dass der Wert ein {{cssxref("angle")}} ist.
   > [!NOTE]
   > Dieser letzte Schritt ist nicht unbedingt notwendig, da `lch()` auch einheitslose Farbtonwerte akzeptiert. Ein Gradwert kann jedoch intuitiver sein, und wir wollten ein weiteres Beispiel dafür zeigen, wie der einheitslose Wert in einen anderen Datentyp umgewandelt werden kann.

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

Um das Ergebnis zu sehen, [sehen Sie unser Live-Beispiel für Variationen verschiedener Typen](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)). Versuchen Sie, die Viewport-Breite zu ändern, um zu sehen, wie sich die Schriftgröße und die Hintergrundfarbe des Absatzes als Ergebnis ändern.

## Ein animierter Geschichtskreis

Das Beispiel [animierter Geschichtskreis](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)) zeigt einen komplexeren Effekt, der durch die Nutzung von CSS getippten Rechenregeln entsteht. In diesem Fall werden die verschiedenen Absätze eines Textkörpers in einem Kreis angeordnet, der von einem Mittelpunkt ausgeht. Darüber hinaus schließt sich der Kreis der Absätze zu einer Fächerform, wenn der Viewport schmaler wird, und öffnet sich wieder, wenn er breiter wird.

### HTML

Das HTML ist ziemlich einfach — ein {{htmlelement("div")}}, das mehrere {{htmlelement("p")}}-Elemente enthält. Der Text des ersten Absatzes ist in ein {{htmlelement("strong")}}-Element eingebettet, um einen Hinweis darauf zu geben, wo man mit dem Lesen beginnen soll.

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

Als nächstes setzen wir mehrere Eigenschaften auf dem {{htmlelement("body")}}-Element:

- Zuerst setzen wir eine `height` von `inherit`, was bedeutet, dass das `<body>` die `100%` Höhe des `:root`-Elements erbt und damit die gesamte Höhe des Viewports einnimmt.
- Als Nächstes zentrieren wir das `<body>` mit {{cssxref("margin")}} horizontal und geben ihm eine {{cssxref("max-width")}}. Wie Sie später sehen werden, ist diese obere Grenze wichtig, um die maximale Rotation der Fächer-/Kreisform zu steuern.
- Wir zentrieren das `<div>` mit `class="story-circle"` horizontal und vertikal innerhalb des `<body>` mit [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout).
- Wir verwenden die {{cssxref("container-type")}}-Eigenschaft, um das `<body>` als Inline-[Größenabfragecontainer](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) zu deklarieren. Dies ist wichtig, weil wir die Formdrehung basierend auf der `<body>`-Breite variieren möchten und nicht der Viewport-Breite, wie wir es in früheren Beispielen gemacht haben. Es als Größenabfragecontainer zu setzen, ermöglicht es uns, seine Größe in Berechnungen zu referenzieren.

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

Jetzt kommen wir zur Gestaltung des `story-circle` `<div>`. Wir setzen seine `width` und `height` auf `1px`: Es wird als Referenzpunkt fungieren, mit seinen untergeordneten Absätzen, die in einem Kreis um ihn herum positioniert sind. (Wir müssen ihm nicht einmal eine Positionierung zuweisen, da es in Ordnung ist, dass die Absätze relativ zum `<body>` positioniert sind).

Wir erstellen dann eine Custom Property namens `--width-percentage`, die das Ergebnis von `100cqw` (100% der Breite des Elternabfragecontainers des Elements, das `<body>`-Element) geteilt durch `1200px`, minus `0.33333` enthält. Dies ist der Schlüsselwert, der die Menge der Drehung des Kreises steuert, wenn die Viewport-Breite geändert wird.

```css
.story-circle {
  width: 1px;
  height: 1px;
  --width-percentage: calc((100cqw / 1200px) - 0.33333);
}
```

Wir verwenden die Container-Abfragebreite anstelle der Viewport-Breite, um die Rotation zu steuern, da wir eine maximale Grenze für den Container festlegen möchten, der durch die `max-width` des `<body>` kontrolliert wird. Wenn der Rotationswert größer als ein voller Kreis wird, beginnt der letzte Absatz, sich mit dem ersten zu überlappen, was den Effekt verdirbt.

Da die `max-width` `1600px` ist, hätten Sie erwartet, dass die Berechnung `100cqw / 1600px)` wäre. Dies würde funktionieren, aber wir haben stattdessen `(100cqw / 1200px) - 0.33333` gewählt (das `0.33333` ergibt sich aus `1600px/1200px - 1`). Beide würden die maximale Rotation bei einer `<body>`-Breite von `1600px` verursachen, aber der Fächer hat nun eine kleinere minimale Drehung, was einen besseren Effekt bei schmalen Viewport-Breiten ergibt.

Die letzte Stilregel wählt die Absätze selbst aus. Ein Großteil dieses Stylings ist rudimentär. Es ist erwähnenswert, dass wir {{cssxref("position")}} auf `absolute` gesetzt haben, um alle Absätze übereinander zu platzieren, und wir haben einen {{cssxref("transform-origin")}}-Wert von `center left` gesetzt, um die Absätze zur Mitte ihrer linken Kante rotieren zu lassen, sodass sie sich alle von einem Mittelpunkt über ihrem enthaltenen `<div>` auffächern.

Nun zum interessanten Teil — wir definieren eine Custom Property namens `--angle`, die den einheitslosen Rotationswinkel des Absatzes enthält, bevor wir die {{cssxref("rotate")}}-Eigenschaft auf den resultierenden Wert setzen. Wir multiplizieren die resultierende Zahl mit `1deg`, um sie in einen Gradwert umzuwandeln. Die `--angle` Custom Property ist das Produkt aus drei Werten:

1. Der {{cssxref("sibling-index()")}} des Absatzes minus `1`, wodurch der erste Absatz einen Rotationswinkel von `0` hat, da wir möchten, dass er horizontal ist.
2. `360` geteilt durch die {{cssxref("sibling-count()")}} des Absatzes, wodurch alle Absätze gleichmäßig um den Kreis verteilt werden, was bedeutet, dass das Design weiterhin funktioniert, wenn sich die Anzahl der Absätze ändert.
3. unsere Custom Property `--width-percentage`, die bewirkt, dass die Drehung der Absätze um den Kreis variiert, wenn sich die Viewport-Breite ändert. Denken Sie daran, dass diese Property einen maximalen Wert von `1` hat, der erreicht wird, wenn das `<body>`-Element seine `max-width` von `1600px` erreicht.

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

Um das Ergebnis zu sehen, [sehen Sie unser Live-Beispiel für einen animierten Geschichtskreis](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)). Versuchen Sie, die Viewport-Breite zu erhöhen und zu verringern, um zu sehen, wie sich die Fächerform des Absatzes in einen Kreis entfaltet und wieder zurück.

## Siehe auch

- {{cssxref("calc()")}}, {{cssxref("abs()")}}
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [CSS Typed Arithmetic](https://css-tricks.com/css-typed-arithmetic/) auf css-tricks.com (2025)
