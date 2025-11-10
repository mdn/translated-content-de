---
title: Verwendung von CSS-getypten Berechnungen
short-title: Verwendung von getypten Berechnungen
slug: Web/CSS/Guides/Values_and_units/Using_typed_arithmetic
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS-getypte Berechnungen** beziehen sich auf zulässige Berechnungen, die mit typisierten CSS-Werten über Funktionen wie {{cssxref("calc()")}} durchgeführt werden. Insbesondere bezieht sich dies auf das Verhalten, das im [CSS-Werte- und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)-Modul definiert ist. CSS-getypte Berechnungen ermöglichen es, einen Wert mit einer Einheit durch einen Wert mit einer anderen Einheit desselben Datentyps zu teilen, was zu einheitslosen Quotienten führt.

Diese Quotienten können dann in den Werten einheitsloser Eigenschaften als {{cssxref("number")}} verwendet oder in jeden numerischen Datentyp (wie {{cssxref("length")}}, {{cssxref("percentage")}} oder {{cssxref("angle")}}) umgewandelt werden, indem sie mit einem typisierten numerischen Wert multipliziert werden.

Dieses Verhalten von getypten Berechnungen ermöglicht es, Beziehungen zwischen verschiedenen Werten auf einer Seite zu erstellen. Dieser Artikel untersucht getypte Berechnungen und präsentiert mehrere Beispiele, die diese nutzen.

> [!NOTE]
> Ursprünglich begrenzte das [CSS-Werte- und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)-Modul die Argumente, die Multiplikations- und Divisionsoperationen annehmen konnten, um zu verhindern, dass null-durch-Null-Teilungen zur Analysezeit erkennbar sind, und um Probleme wie quadrierte Einheiten zu vermeiden. Getypte Berechnungen lockern einige dieser Einschränkungen in [unterstützenden Browsern](/de/docs/Web/CSS/Reference/Values/calc#browser_compatibility).

## Regeln für CSS-getypte Berechnungen

Beim Berechnen von Werten in CSS gibt es einige Regeln bezüglich der Kompatibilität von Werten mit unterschiedlichen Datentypen.

### Addition und Subtraktion

Beim Addieren oder Subtrahieren von Werten müssen alle Werte innerhalb desselben Gesamt-Datentyps liegen. Die folgenden Beispiele führen alle zu gültigen Ergebnissen:

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

Die folgenden sind jedoch ungültig. Die Ergebnisse solcher Berechnungen mit gemischtem Typ wären bedeutungslos:

```css example-bad
calc(200px + 100ms)
calc(50% + 90deg)
```

## Multiplikation

Beim Multiplizieren von Werten in CSS kann nur einer der Werte eine Einheit haben. Alle anderen Werte müssen einheitslose {{cssxref("number")}}-Werte sein. Dies liegt daran, dass Sie ein Produkt erhalten möchten, das eine größere oder kleinere Menge derselben Einheit ist, und keine quadrierten Einheiten erzeugen möchten, die keine CSS-Eigenschaften akzeptieren.

```css example-good
calc(200px * 4) /* 800px */
calc(60deg * 3) /* 180deg */
```

Wenn Sie versuchen, zwei Werte mit Einheiten zu multiplizieren — selbst mit denselben Einheiten —, diktieren die normalen mathematischen Regeln, dass auch die Einheiten multipliziert werden sollten. Zum Beispiel:

```css example-bad
calc(200px * 4px)
```

In diesem Fall ist die Funktion ungültig, da <code>800px<sup>2</sup></code> in CSS bedeutungslos ist.

## Division

Beim Teilen von Werten in CSS können Sie einen Wert mit einer Einheit durch einen einheitslosen Wert teilen:

```css example-good
calc(1000px / 2) /* 500px */
calc(360deg / 4) /* 90deg */
```

Sie können jedoch keinen einheitslosen Wert durch einen Wert mit einer Einheit teilen, da dies keinen Sinn ergibt:

```css example-bad
calc(1000 / 2px) /* ?!? */
```

Wenn ein Wert eines beliebigen numerischen Datentyps durch einen Wert desselben Typs geteilt wird, heben sich die Einheiten gegenseitig auf und es bleibt ein einheitsloser Wert. Im Hintergrund werden die beiden Werte zunächst berechnet, bevor sie miteinander geteilt werden.

Als Ergebnis kann dieselbe Berechnung sehr unterschiedliche Ergebnisse haben, je nachdem, in welchem Kontext sie verwendet wird und welche Einheiten der Divisor hat.

Betrachten Sie das folgende Beispiel:

```css
calc(100vw / 1px)
```

Die `100vw` entsprechen `100%` der Breite des Ansichtsfensters. Wenn das Ansichtsfenster derzeit `1000px` breit ist, gibt die Berechnung den einheitslosen Wert `1000` zurück. Ist das Ansichtsfenster jedoch `500px` breit, gibt die Berechnung den einheitslosen Wert `500` zurück.

Wenn wir den `1px`-Divisor durch `1em` ersetzen, erhalten wir sehr unterschiedliche Ergebnisse:

```css
calc(100vw / 1em)
```

Wenn das Ansichtsfenster `1000px` breit ist und `1em` dem Browser-Standard von `16px` zum Zeitpunkt der Berechnung entspricht, gibt die vorherige Berechnung `1000px / 16px` = `62.5` zurück.

Früher war es nicht möglich, einen typisierten Wert durch einen anderen zu teilen, selbst wenn die beiden Werte Einheiten desselben Typs haben. Die Spezifikation wurde jedoch aktualisiert, um dies zu erlauben; prüfen Sie die [Browser-Kompatibilität](/de/docs/Web/CSS/Reference/Values/calc#browser_compatibility).

## Warum ist das Verhaltensupdate nützlich?

Die Möglichkeit, einen getypten Wert durch einen anderen desselben Typs zu teilen, mag anfänglich nicht sehr bedeutend klingen, aber es ermöglicht nützliche Assoziationen zwischen verschiedenen Werten, die zur Erstellung responsiver UI-Features verwendet werden können.

Der Schlüssel zu all dem ist die Möglichkeit, Werte in einer einheitslosen Form darzustellen, z. B. durch Teilungen wie diese:

```css
--viewport-width-in-pixels: calc(100vw / 1px);
```

Das Ergebnis ist ein {{cssxref("number")}}, das die Breite des Ansichtsfensters in Pixeln als einheitslosen Wert darstellt. Dieser kann überall dort verwendet werden, wo eine Zahl gültig ist, einschließlich anderer `calc()`-Funktionen. Sie können andere Eigenschaftswerte dynamisch basierend auf diesem Wert variieren, unabhängig davon, welche Einheiten sie haben.

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

Lassen Sie uns einige Beispiele durchgehen, um zu zeigen, wie CSS-getypte Berechnungen nützlich sein können.

## Einfaches Beispiel: Responsives Hintergrund-Opacity

Das Beispiel [responsives Hintergrund-Opacity](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)) zeigt, wie die Deckkraft eines Hintergrundbildes variiert werden kann, wenn die Ansichtsfensterbreite geändert wird. Wenn das Hintergrundbild ausblendet, wenn der Bildschirm schmaler wird, verringert dies die Wahrscheinlichkeit, dass das Bild die Lesbarkeit des Textinhalts beeinträchtigt, wenn sie sich überschneiden.

### HTML

Das HTML enthält einige grundlegende Textinhalte, die in ein {{htmlelement("div")}}-Element eingeschlossen sind.

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

Wir beginnen, indem wir auf dem {{cssxref(":root")}}-Element eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) namens `--width-percentage` definieren, die das Ergebnis der Berechnung `100vw / 2000px` enthält. Dieser Wert stellt die Breite des Ansichtsfensters als Prozentsatz von `2000px` dar, die wir später als Alphakanalwert verwenden werden. Wenn das Ansichtsfenster `2000px` breit ist, gibt die Berechnung `1` zurück, was `100%` Alpha entspricht. Alles, was weniger als `2000px` Ansichtsfensterbreite ist, führt zu einem kleineren Wert.

```css
:root {
  --width-percentage: calc((100vw / 2000px));
}
```

> [!NOTE]
> Jeder Alphawert größer als `1` wird als `1` behandelt, daher müssen wir den Maximalwert nicht begrenzen.

Wir setzen dann eine feste {{cssxref("width")}} und etwas {{cssxref("padding")}} auf dem Wrapper-`<div>` und zentrieren es horizontal mit {{cssxref("margin")}}.

```css
.wrapper {
  width: 480px;
  padding: 20px;
  margin: 0 auto;
}
```

Schließlich setzen wir mehrere Hintergründe auf dem {{htmlelement("body")}}-Element. Wir werden diese in umgekehrter Reihenfolge durchgehen:

1. Der letzte und daher am unteren liegende {{cssxref("background")}}-Wert ist ein sich nicht wiederholendes Hintergrundbild, das in der Nähe der oberen rechten Ecke positioniert ist.
2. Der oberste Hintergrund ist eine weiße halbtransparente Überlagerung, die mit einer {{cssxref("linear-gradient()")}}-Funktion erstellt wurde, bei der beide Farbstopps auf dieselbe Farbe gesetzt sind. Der Alphakanalwert der Farbe wird als `1` minus der benutzerdefinierten Eigenschaft `--width-percentage` berechnet, die wir zuvor gesetzt haben: Wenn die Ansichtsfensterbreite schmaler wird, wird `--width-percentage` kleiner, daher wird der weiße Verlauf undurchsichtiger und reduziert die Deckkraft des Hintergrundbildes.

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

Um das Ergebnis zu sehen, [sehen Sie sich unser Live-Beispiel für responsives Hintergrund-Opacity an](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)). Versuchen Sie, die Ansichtsfensterbreite zu ändern, um zu sehen, wie die Hintergrunddeckkraft als Ergebnis variiert.

## Variierende Werte unterschiedlicher Typen basierend auf einem einzelnen Wert

Das Beispiel [Variationen unterschiedlicher Typen](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)) funktioniert in sehr ähnlicher Weise wie das vorherige Beispiel, außer dass wir in diesem Fall die Verwendung eines einzelnen Variablenwertes in der Definition mehrerer anderer Werte mit unterschiedlichen Datentypen demonstrieren.

Insbesondere setzen wir die Hintergrundfarbe _und_ die Schriftgröße eines Absatzes basierend auf der Ansichtsfensterbreite.

### HTML

Das Markup für dieses Beispiel enthält einen Textabschnitt:

```html
<p>Hello there!</p>
```

### CSS

Wir beginnen unser CSS auf ähnliche Weise wie in der vorherigen Demo, indem wir einen einheitslosen Wert basierend auf der Ansichtsfensterbreite erstellen. Diesmal berechnen wir ihn, indem wir `100vw` durch `1px` teilen und die resultierende Zahl in einer benutzerdefinierten Eigenschaft namens `--viewport-in-pixels` speichern. Der Wert repräsentiert die aktuelle Ansichtsfensterbreite in Pixeln, ohne Einheiten.

```css
:root {
  --viewport-in-pixels: calc(100vw / 1px);
}
```

Nun zur Gestaltung des Absatzes selbst. Wir geben ihm zunächst einige grundlegende Stile (einen {{cssxref("border")}} und {{cssxref("text-align")}} von `center`), dann setzen wir zwei Werte basierend auf der zuvor erstellten `--viewport-in-pixels`-Eigenschaft:

1. Wir setzen die {{cssxref("font-size")}} des Absatzes auf einen Wert, der gleich `--viewport-in-pixels` geteilt durch `200`, multipliziert mit `1em`, ist, um den numerischen Quotienten in `em`s zu konvertieren.
2. Wir setzen die {{cssxref("background-color")}} des Absatzes auf einen [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Farbwert. Die Helligkeits- und Chroma-Komponenten sind konstante Werte (`75%` bzw. `50%`), während die Farbton-Komponente auf `--viewport-in-pixels` geteilt durch `10` plus `100` gesetzt ist. Dann multiplizieren wir das Ergebnis mit `1deg`, um sicherzustellen, dass der Wert ein {{cssxref("angle")}} ist.
   > [!NOTE]
   > Dieser letzte Schritt ist nicht unbedingt erforderlich, da `lch()` auch einheitslose Farbtonwerte akzeptiert. Ein Gradwert kann jedoch intuitiver sein, und wir wollten ein weiteres Beispiel zeigen, wie der einheitslose Wert in einen anderen Datentyp umgewandelt werden kann.

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

Um das Ergebnis zu sehen, [sehen Sie sich unser Live-Beispiel zu Variationen unterschiedlicher Typen an](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)). Versuchen Sie, die Ansichtsfensterbreite zu ändern, um zu sehen, wie sich Schriftgröße und Hintergrundfarbe des Absatzes beide verändern.

## Ein animierter Story-Kreis

Das Beispiel [animierter Story-Kreis](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)) demonstriert einen komplexeren Effekt, der durch die Nutzung der Regeln für CSS-getypte Berechnungen erzielt wurde. In diesem Fall werden die verschiedenen Absätze eines Textkörpers in einem Kreis angeordnet, der von einem Mittelpunkt ausgeht. Darüber hinaus schließt sich der Kreis der Absätze zu einer Fächerform zusammen, wenn das Ansichtsfenster schmaler wird, und öffnet sich wieder, wenn es breiter wird.

### HTML

Das HTML ist ziemlich einfach — ein {{htmlelement("div")}}, das mehrere {{htmlelement("p")}}-Elemente enthält. Der Text des ersten Absatzes ist in ein {{htmlelement("strong")}}-Element eingeschlossen, um einen Indikator dafür zu geben, wo mit dem Lesen begonnen werden soll.

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

Wir beginnen das CSS damit, auf dem {{cssxref(":root")}}-Element eine {{cssxref("height")}} von `100%` zu setzen.

```css
:root {
  height: 100%;
}
```

Als Nächstes setzen wir mehrere Eigenschaften auf dem {{htmlelement("body")}}-Element:

- Wir beginnen damit, eine `height` von `inherit` zu setzen, was bedeutet, dass das `<body>` die `100%` Höhe des `:root`-Elements erbt und somit die volle Höhe des Ansichtsfensters einnimmt.
- Dann zentrieren wir das `<body>` horizontal mit {{cssxref("margin")}} und geben ihm eine {{cssxref("max-width")}}. Wie Sie später sehen werden, ist diese obere Grenze wichtig, um die maximale Drehung der Fächer-/Kreisform zu kontrollieren.
- Wir zentrieren das `<div>` mit `class="story-circle"` horizontal und vertikal im `<body>` mit [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout).
- Wir verwenden die {{cssxref("container-type")}}-Eigenschaft, um das `<body>` als Inline-[Größenabfrage-Container](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) zu erklären. Dies ist wichtig, da wir die Shapedrehung basierend auf der `<body>` Breite variieren möchten und nicht auf die Ansichtsfensterbreite, wie wir es in vorherigen Beispielen gemacht haben. Es als Größenabfrage-Container zu setzen, ermöglicht es uns, seine Größe in Berechnungen zu referenzieren.

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

Nun kommen wir zur Gestaltung des `story-circle` `<div>`. Wir setzen seine `width` und `height` auf `1px`: es wird als Bezugspunkt fungieren, um den herum seine Kindelemente in einem Kreis positioniert werden. (Wir müssen nicht einmal eine Positionierung darauf setzen, da es in Ordnung ist, dass die Absätze relativ zum `<body>` positioniert werden.)

Wir erstellen dann eine benutzerdefinierte Eigenschaft namens `--width-percentage`, die das Ergebnis von `100cqw` (100% der Breite des übergeordneten Abfrage-Containers des Elements, das das `<body>`-Element ist) geteilt durch `1200px`, minus `0.33333`, enthält. Dies ist der Schlüsselwert, der die Menge kontrollieren wird, die der Kreis durch die Änderung der Ansichtsfensterbreite gedreht wird.

```css
.story-circle {
  width: 1px;
  height: 1px;
  --width-percentage: calc((100cqw / 1200px) - 0.33333);
}
```

Wir verwenden die Container-Abfragebreite anstelle der Ansichtsfensterbreite, um die Drehung zu steuern, weil wir eine maximale Obergrenze für das Container setzen möchten, die durch die `max-width` des `<body>` gesteuert wird. Wenn der Drehwert größer als ein vollständiger Kreis wird, beginnt der letzte Absatz den ersten zu überschneiden, was den Effekt ruiniert.

Da die `max-width` `1600px` ist, könnte man erwarten, dass die Berechnung `100cqw / 1600px)` ist. Dies würde funktionieren, aber wir haben stattdessen `(100cqw / 1200px) - 0.33333` gewählt (die `0.33333` kommt von `1600px/1200px - 1`). Beides würde dazu führen, dass die maximale Drehung bei einer `<body>` Breite von `1600px` auftritt, aber der Fächer hat jetzt eine kleinere Mindestdrehung, was bei engeren Ansichtsfensterbreiten einen besseren Effekt ergibt.

Die endgültige Stilregel wählt die Absätze selbst aus. Die meisten dieser Stile sind einfach. Es ist erwähnenswert, dass wir {{cssxref("position")}} auf `absolute` gesetzt haben, damit alle Absätze übereinander liegen, und wir haben einen {{cssxref("transform-origin")}} von `center left` gesetzt, damit sich Absätze um die Mitte ihrer linken Kante drehen und sie sich alle von einem Mittelpunkt über ihrem enthaltenen `<div>` auffächern.

Jetzt zum interessanten Teil — wir definieren eine benutzerdefinierte Eigenschaft namens `--angle`, die den einheitslosen Drehungswinkel des Absatzes enthält, bevor wir die {{cssxref("rotate")}}-Eigenschaft auf den resultierenden Wert setzen. Wir multiplizieren die resultierende Zahl mit `1deg`, um sie in einen Gradwert zu konvertieren. Die benutzerdefinierte `--angle`-Eigenschaft ist das Produkt aus drei Werten:

1. Der {{cssxref("sibling-index()")}} des Absatzes minus `1`, was verursacht, dass der erste Absatz einen Drehungswinkel von `0` hat, da wir möchten, dass er horizontal ist.
2. `360` geteilt durch die {{cssxref("sibling-count()")}} des Absatzes, was alle Absätze gleichmäßig um den Kreis verteilt, was bedeutet, dass das Design weiterhin funktioniert, selbst wenn sich die Anzahl der Absätze ändert.
3. unsere benutzerdefinierte `--width-percentage`-Eigenschaft, die verursacht, dass die Drehung der Absätze um den Kreis sich ändert, wenn sich die Ansichtsfensterbreite ändert. Denken Sie daran, dass diese Eigenschaft einen maximalen Wert von `1` hat, der erreicht wird, wenn das `<body>`-Element seine `max-width` von `1600px` erreicht.

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

Um das Ergebnis zu sehen, [sehen Sie sich unser Live-Beispiel des animierten Story-Kreises an](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)). Versuchen Sie, die Ansichtsfensterbreite zu erhöhen und zu verringern, um zu sehen, wie sich die Fächerform der Absätze in einen Kreis entfaltet und wieder zurück.

## Siehe auch

- {{cssxref("calc()")}}, {{cssxref("abs()")}}
- [CSS-Werte- und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)-Modul
- [CSS-getypte Berechnungen](https://css-tricks.com/css-typed-arithmetic/) auf css-tricks.com (2025)
