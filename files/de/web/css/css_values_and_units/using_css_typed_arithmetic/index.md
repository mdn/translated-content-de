---
title: Verwendung von CSS-typisierter Arithmetik
short-title: Verwendung typisierter Arithmetik
slug: Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic
l10n:
  sourceCommit: 11ef719d1a0bd75b1600d39abd6dfbdcd835c1e2
---

**CSS-typisierte Arithmetik** bezieht sich auf zulässige Berechnungen mit typisierten CSS-Werten über Funktionen wie {{cssxref("calc()")}} und speziell auf das Verhalten, das im [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul definiert ist. CSS-typisierte Arithmetik ermöglicht es, einen Wert mit einer Einheit durch einen Wert mit einer anderen Einheit desselben Datentyps zu teilen, was zu einheitslosen Quotienten führt.

Diese Quotienten können dann als {{cssxref("number")}} in die Werte von einheitslosen Eigenschaften eingefügt oder durch Multiplikation mit einem numerisch typisierten Wert in jeden numerischen Datentyp (wie ein {{cssxref("length")}}, {{cssxref("percentage")}} oder {{cssxref("angle")}}) umgewandelt werden.

Dieses Verhalten der typisierten Arithmetik ermöglicht es, Beziehungen zwischen verschiedenen Werten auf einer Seite zu schaffen. Dieser Artikel untersucht die typisierte Arithmetik und stellt mehrere Beispiele vor, die sie nutzen.

> [!NOTE]
> Ursprünglich begrenzte das [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul die Argumente, die Multiplikations- und Divisionsoperationen annehmen konnten, um das Teilen durch null bereits zur Parserzeit erkennbar zu machen und Probleme wie quadrierte Einheiten zu vermeiden. Typisierte Arithmetik lockert einige dieser Einschränkungen in [unterstützenden Browsern](/de/docs/Web/CSS/calc#browser_compatibility).

## Regeln für CSS-typisierte Arithmetik

Bei Berechnungen mit Werten in CSS gibt es einige Regeln zur Kompatibilität von Werten mit unterschiedlichen Datentypen.

### Addition und Subtraktion

Beim Addieren oder Subtrahieren von Werten müssen sich alle Werte innerhalb desselben übergeordneten Datentyps befinden. Die folgenden Beispiele erzeugen alle gültige Ergebnisse:

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

Die folgenden Beispiele sind jedoch ungültig. Die Ergebnisse solcher Berechnungen mit unterschiedlichen Typen wären bedeutungslos:

```css example-bad
calc(200px + 100ms)
calc(50% + 90deg)
```

## Multiplikation

Bei der Multiplikation von Werten in CSS darf nur einer der Werte eine Einheit haben. Alle anderen Werte müssen einheitslose {{cssxref("number")}}-Werte sein. Dies liegt daran, dass das Produkt eine größere oder kleinere Menge derselben Einheit sein soll und keine quadrierten Einheiten geschaffen werden sollen, die keine CSS-Eigenschaften akzeptieren.

```css example-good
calc(200px * 4) /* 800px */
calc(60deg * 3) /* 180deg */
```

Wenn Sie versuchen, zwei Werte mit Einheiten zu multiplizieren — sogar mit denselben Einheiten —, besagen die normalen mathematischen Regeln, dass auch die Einheiten multipliziert werden sollten. Zum Beispiel:

```css example-bad
calc(200px * 4px)
```

In diesem Fall ist die Funktion ungültig, da <code>800px<sup>2</sup></code> in CSS bedeutungslos ist.

## Division

Bei der Division von Werten in CSS können Sie einen Wert mit einer Einheit durch einen einheitslosen Wert teilen:

```css example-good
calc(1000px / 2) /* 500px */
calc(360deg / 4) /* 90deg */
```

Sie können jedoch keinen einheitslosen Wert durch einen Wert mit einer Einheit teilen, da das keinen Sinn ergibt:

```css example-bad
calc(1000 / 2px) /* ?!? */
```

Wenn ein Wert eines numerischen Datentyps durch einen Wert desselben Typs geteilt wird, heben sich die Einheiten gegenseitig auf, und es bleibt ein einheitsloser Wert übrig. Im Hintergrund werden die beiden Werte vor der Division miteinander berechnet.

Als Ergebnis können dieselbe Berechnung sehr unterschiedliche Ergebnisse haben, abhängig vom Kontext, in dem sie verwendet wird, und den Einheiten des Divisors.

Betrachten Sie das folgende Beispiel:

```css
calc(100vw / 1px)
```

Das `100vw` entspricht `100%` der Breite des Viewports. Wenn der Viewport derzeit `1000px` breit ist, gibt die Berechnung den einheitslosen Wert `1000` zurück. Wenn der Viewport jedoch `500px` breit ist, gibt die Berechnung den einheitslosen Wert `500` zurück.

Wenn wir den `1px`-Divisor durch `1em` ersetzen, erhalten wir sehr unterschiedliche Ergebnisse:

```css
calc(100vw / 1em)
```

Wenn der Viewport `1000px` breit ist und `1em` gleich dem Browserstandard von `16px` zum Zeitpunkt der Berechnung ist, ergibt die vorherige Berechnung `1000px / 16px` = `62.5`.

Es war früher der Fall, dass man keinen typisierten Wert durch einen anderen teilen konnte, auch wenn die beiden Werte Einheiten desselben Typs hatten. Die Spezifikation wurde jedoch aktualisiert, um dies zu ermöglichen; prüfen Sie die [Browser-Kompatibilität](/de/docs/Web/CSS/calc#browser_compatibility).

## Warum ist das Verhaltensupdate nützlich?

Auf den ersten Blick mag es nicht besonders bedeutsam erscheinen, einen typisierten Wert durch einen anderen desselben Typs teilen zu können, aber es ermöglicht nützliche Verbindungen zwischen verschiedenen Werten, die verwendet werden können, um responsive UI-Funktionen zu schaffen.

Der Schlüssel zu all dem ist die Möglichkeit, Werte in einer einheitslosen Form durch solche Divisionen darzustellen:

```css
--viewport-width-in-pixels: calc(100vw / 1px);
```

Das Ergebnis ist eine {{cssxref("number")}}, die die Viewport-Breite in Pixeln als einheitslosen Wert darstellt. Dieser kann überall dort verwendet werden, wo eine Zahl gültig ist, einschließlich anderer `calc()`-Funktionen. Sie können andere Eigenschaftswerte dynamisch basierend auf diesem Wert variieren, unabhängig davon, welche Einheiten sie haben.

Zum Beispiel kann der einheitslose Wert unmittelbar auf die {{cssxref("opacity")}} übertragen werden:

```css
opacity: calc(var(--viewport-width-in-pixels) / 1000 - 0.5);
```

Sie können ihn mit einem Wert wie `1deg` multiplizieren, um einen {{cssxref("&lt;angle>")}}-Wert zu erstellen:

```css
rotate: calc(var(--viewport-width-in-pixels) * 1deg);
```

Sie können ihn mit einem Wert wie `1rem` multiplizieren, um einen {{cssxref("&lt;length>")}}-Wert zu erstellen:

```css
font-size: calc(var(--viewport-width-in-pixels) * 1rem / 200);
```

Lassen Sie uns einige Beispiele durchgehen, um zu zeigen, wie CSS-typisierte Arithmetik nützlich sein kann.

## Einfaches Beispiel: Responsive Hintergrundtransparenz

Das [responsive Hintergrundtransparenz](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/) Beispiel ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)) zeigt, wie die Transparenz eines Hintergrundbildes variiert wird, wenn sich die Breite des Viewports ändert. Wenn das Hintergrundbild ausgeblendet wird, wenn der Bildschirm schmaler wird, besteht eine geringere Gefahr, dass das Bild die Lesbarkeit des Textinhalts beeinträchtigt, wenn sie sich zu überlappen beginnen.

### HTML

Das HTML enthält einfachen Textinhalt, der in einem {{htmlelement("div")}}-Element eingeschlossen ist.

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

Wir beginnen mit der Definition einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) namens `--width-percentage` auf dem {{cssxref(":root")}}-Element, das das Ergebnis der Berechnung `100vw / 2000px` enthält. Dieser Wert stellt die Viewport-Breite als Prozentsatz von `2000px` dar, den wir später als Alphakanalwert verwenden werden. Wenn der Viewport `2000px` breit ist, gibt die Berechnung `1` zurück, was `100%` Alpha entspricht. Jede Breite des Viewports unter `2000px` führt zu einem kleineren Wert.

```css
:root {
  --width-percentage: calc((100vw / 2000px));
}
```

> [!NOTE]
> Ein Alpha-Wert größer als `1` wird als `1` behandelt, daher müssen wir den Maximalwert nicht begrenzen.

Wir setzen dann eine feste {{cssxref("width")}} und etwas {{cssxref("padding")}} auf das Wrapper-`<div>` und zentrieren es horizontal mit {{cssxref("margin")}}.

```css
.wrapper {
  width: 480px;
  padding: 20px;
  margin: 0 auto;
}
```

Schließlich setzen wir mehrere Hintergründe auf das {{htmlelement("body")}}-Element. Wir gehen diese in umgekehrter Reihenfolge durch:

1. Der letzte und daher unterste {{cssxref("background")}}-Wert ist ein nicht wiederholendes Hintergrundbild, das sich in der Nähe der oberen rechten Ecke befindet.
2. Der oberste Hintergrund ist ein weißer halbtransparenter Überlagerung, der mit einer {{cssxref("linear-gradient()")}}-Funktion erstellt wird, wobei beide Farbstopps auf die gleiche Farbe gesetzt sind. Der Alphakanalwert der Farbe wird als `1` minus der `--width-percentage`-benutzerdefinierten Eigenschaft berechnet, die wir zuvor festgelegt haben: Wenn die Viewport-Breite schmaler wird, wird `--width-percentage` kleiner, wodurch der weiße Verlauf undurchsichtiger wird und die Transparenz des Hintergrundbildes reduziert.

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

Um das Ergebnis zu sehen, [sehen Sie sich unser Beispiel für responsive Hintergrundtransparenz live an](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)). Versuchen Sie, die Viewport-Breite zu ändern, um zu sehen, wie die Hintergrundtransparenz variiert.

## Verschiedene Werte unterschiedlicher Typen basierend auf einem einzigen Wert variieren

Das [Beispiel für Variationen unterschiedlicher Typen](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)) funktioniert sehr ähnlich wie das vorherige Beispiel, außer dass wir in diesem Fall die Verwendung eines einzelnen Variablenwerts zur Definition mehrerer anderer Werte mit unterschiedlichen Datentypen demonstrieren.

Insbesondere setzen wir die Hintergrundfarbe _und_ die Schriftgröße eines Absatzes basierend auf der Viewport-Breite.

### HTML

Das Markup für dieses Beispiel enthält einen Textabsatz:

```html
<p>Hello there!</p>
```

### CSS

Wir beginnen unser CSS in ähnlicher Weise wie bei der vorherigen Demo und erstellen einen einheitslosen Wert basierend auf der Viewport-Breite. Diesmal berechnen wir ihn, indem wir `100vw` durch `1px` teilen und die resultierende Zahl in einer benutzerdefinierten Eigenschaft namens `--viewport-in-pixels` speichern. Der Wert stellt die aktuelle Viewport-Breite in Pixeln ohne Einheiten dar.

```css
:root {
  --viewport-in-pixels: calc(100vw / 1px);
}
```

Nun zur Gestaltung des Absatzes selbst. Wir geben ihm zunächst einige grundlegende Stile (einen {{cssxref("border")}} und {{cssxref("text-align")}} auf `center`), dann setzen wir zwei Werte basierend auf der zuvor erstellten `--viewport-in-pixels` Eigenschaft:

1. Wir setzen die {{cssxref("font-size")}} des Absatzes auf einen Wert, der gleich `--viewport-in-pixels` geteilt durch `200` ist, multipliziert mit `1em`, um die numerische Quote in `em` umzuwandeln.
2. Wir setzen die {{cssxref("background-color")}} des Absatzes auf einen [`lch()`](/de/docs/Web/CSS/color_value/lch) Farbwert. Die Helligkeit- und Chroma-Komponenten sind konstante Werte (`75%` und `50%`), während die H-Komponente auf `--viewport-in-pixels` geteilt durch `10`, plus `100` gesetzt wird. Wir multiplizieren das Ergebnis mit `1deg`, um sicherzustellen, dass der Wert ein {{cssxref("angle")}} ist.
   > [!NOTE]
   > Dieser letzte Schritt ist nicht unbedingt notwendig, da `lch()` auch einheitslose Farbwerte akzeptiert. Ein Wert in Grad könnte jedoch intuitiver sein, und wir wollten ein weiteres Beispiel dafür zeigen, wie der einheitslose Wert in einen anderen Datentyp umgewandelt werden kann.

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

Um das Ergebnis zu sehen, [sehen Sie sich unser Beispiel für Variationen unterschiedlicher Typen live an](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)). Versuchen Sie, die Viewport-Breite zu ändern, um zu sehen, wie sowohl die Schriftgröße als auch die Hintergrundfarbe des Absatzes variieren.

## Ein animierter Story-Kreis

Das [animierte Story-Kreis](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/) Beispiel ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)) demonstriert einen komplexeren Effekt, der durch die Nutzung der CSS-typisierten Arithmetikregeln geschaffen wird. In diesem Fall werden die verschiedenen Absätze eines Textkörpers in einem Kreis angeordnet, der von einem Mittelpunkt ausstrahlt. Darüber hinaus schließt sich der Kreis der Absätze zu einem fächerförmigen Design, wenn der Viewport schmaler wird, und öffnet sich wieder, wenn er breiter wird.

### HTML

Das HTML ist ziemlich einfach — ein {{htmlelement("div")}} enthält mehrere {{htmlelement("p")}}-Elemente. Der Text des ersten Absatzes ist in einem {{htmlelement("strong")}}-Element eingeschlossen, um einen Indikator zu bieten, wo das Lesen beginnen soll.

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

Als Nächstes setzen wir mehrere Eigenschaften auf dem {{htmlelement("body")}}-Element:

- Wir beginnen, indem wir eine `height` von `inherit` setzen, was bedeutet, dass das `<body>` das `:root`-Element `100%` Höhe erbt und somit die gesamte Höhe des Viewports einnimmt.
- Als nächstes zentrieren wir das `<body>` horizontal mit {{cssxref("margin")}} und geben ihm eine {{cssxref("max-width")}}. Wie Sie später sehen werden, ist diese obere Grenze wichtig, um die maximale Rotation der Fächer/Kreis-Form zu kontrollieren.
- Wir zentrieren das `<div>` mit `class="story-circle"` horizontal und vertikal im `<body>` mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout).
- Wir verwenden die {{cssxref("container-type")}} Eigenschaft, um das `<body>` als Inline-[Größenabfrage-Container](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) zu deklarieren. Dies ist wichtig, da wir die Formrotation basierend auf der Breite des `<body>` steuern möchten und nicht auf der Viewport-Breite, wie wir es in früheren Beispielen getan haben. Wenn es als Größenabfrage-Container festlegt, können wir seine Größe in Berechnungen referenzieren.

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

Wir kommen nun zur Gestaltung des `story-circle`-`<div>`. Wir setzen seine `width` und `height` auf `1px`: Es wird als Bezugspunkt dienen, wobei seine Kindelement-Absätze in einem Kreis um ihn herum positioniert werden. (Wir brauchen nicht einmal die Positionierung festlegen, da es in Ordnung ist, dass die Absätze relativ zum `<body>` positioniert werden).

Wir erstellen dann eine benutzerdefinierte Eigenschaft namens `--width-percentage`, die das Ergebnis von `100cqw` (100% der Breite des Elementelternabfrage-Containers, der das `<body>`-Element ist) geteilt durch `1200px`, minus `0.33333` enthält. Dies ist der Schlüsselwert, der die Menge der Kreisrotation steuern wird, wenn sich die Viewport-Breite ändert.

```css
.story-circle {
  width: 1px;
  height: 1px;
  --width-percentage: calc((100cqw / 1200px) - 0.33333);
}
```

Wir benutzen die Container-Abfragebreite anstelle der Viewport-Breite, um die Rotation zu steuern, weil wir eine maximale Grenze für den Container festlegen möchten, der durch die `<body>` `max-width` gesteuert wird. Wenn der Rotationswert größer als ein voller Kreis wird, beginnt der letzte Absatz, den ersten zu überlappen, was den Effekt beeinträchtigt.

Da die `max-width` `1600px` ist, könnten Sie erwartet haben, dass die Berechnung `100cqw / 1600px` lautet. Das wäre auch möglich, aber wir haben stattdessen `(100cqw / 1200px) - 0.33333` gewählt (das `0.33333` stammt aus `1600px/1200px - 1`). Beide würden bewirken, dass die maximale Rotation bei einer `<body>` Breite von `1600px` erfolgt, allerdings hat der Fächer jetzt eine kleinere Mindestrotation, was einen besseren Effekt bei schmalen Viewport-Breiten ergibt.

Die letzte Stilregel wählt die Absätze selbst aus. Der größte Teil dieser Gestaltung ist rudimentär. Es ist erwähnenswert, dass wir {{cssxref("position")}} auf `absolute` gesetzt haben, um alle Absätze übereinander zu platzieren, und dass wir einen {{cssxref("transform-origin")}}-Wert von `center left` gesetzt haben, damit sich Absätze um den Mittelpunkt ihrer linken Kante drehen, sodass sie sich alle von einem Mittelpunkt über ihrem enthaltenen `<div>` auffächern.

Nun zum interessanten Teil — wir definieren eine benutzerdefinierte Eigenschaft namens `--angle`, die den einheitslosen Rotationswinkel des Absatzes enthält, bevor wir die {{cssxref("rotate")}} Eigenschaft auf den resultierenden Wert setzen. Wir multiplizieren die resultierende Zahl mit `1deg`, um sie in einen Gradwert umzuwandeln. Die `--angle` benutzerdefinierte Eigenschaft ist das Produkt aus drei Werten:

1. Der {{cssxref("sibling-index()")}} des Absatzes minus `1`, wodurch der erste Absatz einen Rotationswinkel von `0` hat, da wir möchten, dass er horizontal ist.
2. `360` geteilt durch die {{cssxref("sibling-count()")}} des Absatzes, wodurch alle Absätze gleichmäßig um den Kreis verteilt sind, was bedeutet, dass das Design auch funktioniert, wenn sich die Anzahl der Absätze ändert.
3. Unsere `--width-percentage`-benutzerdefinierte Eigenschaft, die bewirkt, dass die Rotation der Absätze um den Kreis variiert, wenn sich die Viewport-Breite ändert. Denken Sie daran, dass diese Eigenschaft einen Maximalwert von `1` hat, der erreicht wird, wenn das `<body>`-Element seine `max-width` von `1600px` erreicht.

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

Um das Ergebnis zu sehen, [sehen Sie sich unser animiertes Story-Kreis-Beispiel live an](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)). Versuchen Sie, die Viewport-Breite zu erhöhen und zu verringern, um zu sehen, wie sich die Fächerform der Absätze in einen Kreis entfaltet und wieder zurückfaltet.

## Siehe auch

- {{cssxref("calc()")}}, {{cssxref("abs()")}}
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [CSS Typisierte Arithmetik](https://css-tricks.com/css-typed-arithmetic/) auf css-tricks.com (2025)
