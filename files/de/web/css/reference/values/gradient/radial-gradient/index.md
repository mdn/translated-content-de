---
title: radial-gradient()
slug: Web/CSS/Reference/Values/gradient/radial-gradient
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt ein Bild, das aus einem allmählichen Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausstrahlen. Die Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt vom Datentyp {{cssxref("gradient")}}, ein spezieller Typ von {{cssxref("image")}}.

{{InteractiveExample("CSS Demo: radial-gradient()")}}

```css interactive-example-choice
background: radial-gradient(#e66465, #9198e5);
```

```css interactive-example-choice
background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: radial-gradient(
  circle at 100%,
  #333333,
  #333333 50%,
  #eeeeee 75%,
  #333333 75%
);
```

```css interactive-example-choice
background:
  radial-gradient(ellipse at top, #e66465, transparent),
  radial-gradient(ellipse at bottom, #4d9f0c, transparent);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

## Syntax

```css
/* A gradient with a single color of red */
radial-gradient(red)

/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)

/* hsl color space with longer hue interpolation */
radial-gradient(circle at center in hsl longer hue, red 0, blue, green 100%)
```

Ein radialer Verlauf wird angegeben, indem das Zentrum des Verlaufs festgelegt wird (wo die 0%-Ellipse liegt) sowie die Größe und Form der _endenden Form_ (der 100%-Ellipse).

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die endende Form des Verlaufs. Der Wert kann `circle` (was bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsen-ausgerichtete Ellipse ist) sein. Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<size>`
  - : Bestimmt die Größe der endenden Form des Verlaufs. Wenn es weggelassen wird, ist der Standardwert `farthest-corner`. Es kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Definition der Schlüsselwörter sollte man bedenken, dass sich die Ränder des Verlaufsrechtecks unendlich in beide Richtungen erstrecken, anstatt in endlichen Linienstücken.

    Sowohl Kreis- als auch Ellipsenverläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                              |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Verlaufs trifft auf die dem Zentrum am nächsten liegende Seite des Kastens (für Kreise) oder trifft auf beide vertikalen und horizontalen Seiten des Kastens (für Ellipsen).         |
    | `closest-corner`  | Die endende Form des Verlaufs wird so bemessen, dass sie genau die der Mitte am nächsten gelegene Ecke des Kastens trifft.                                                                                |
    | `farthest-side`   | Ähnlich wie `closest-side`, mit dem Unterschied, dass die endende Form so bemessen ist, dass sie die dem Zentrum am weitesten entfernte Seite des Kastens (oder vertikale und horizontale Seiten) trifft. |
    | `farthest-corner` | Der Standardwert, die endende Form des Verlaufs wird so bemessen, dass sie genau die dem Zentrum am weitesten entfernte Ecke des Kastens trifft.                                                          |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was den Kreisradius vorgibt. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um die Größe der Ellipse explizit festzulegen. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte beziehen sich auf die entsprechende Dimension des Verlaufsrechtecks. Negative Werte sind ungültig.

    Wenn das `<ending-shape>`-Schlüsselwort weggelassen wird, wird die Form des Verlaufs durch die angegebene Größe bestimmt. Ein einziger `<length>`-Wert ergibt einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse ergeben. Ein einziger `<percentage>`-Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein Color-Stop's {{cssxref("&lt;color&gt;")}}-Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der endenden Form mit dem virtuellen Verlaufsstrahl. Zwischenwerte werden linear auf dem Verlaufsstrahl positioniert. Die Angabe von zwei Stopp-Positionen entspricht der Deklaration von zwei Color Stops mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Color Stops verläuft. Die Länge bestimmt, an welchem Punkt zwischen zwei Color Stops die Verlauffarbe den Mittelpunkt des Farbübergangs erreichen soll. Wird er weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Color Stops.

## Beschreibung

Wie bei jedem Verlauf hat ein radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das es angewendet wird.

Um einen radialen Verlauf zu erstellen, der sich wiederholt, um seinen Behälter zu füllen, verwenden Sie die {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} Funktion stattdessen.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafik, die radiale Verläufe erklärt: Der virtuelle Gradientenstrahl ist horizontal, beginnend vom Mittelpunkt. Der elliptische Verlauf und damit die endende Form haben dasselbe Seitenverhältnis wie der Kasten, auf dem sie deklariert werden.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _endende Form_ und zwei oder mehr _Color-Stop-Punkte_ definiert.

Um einen sanften Verlauf zu erzeugen, zeichnet die `radial-gradient()`-Funktion eine Serie von konzentrischen Formen, die sich vom Zentrum bis zur _endenden Form_ (und möglicherweise darüber hinaus) ausstrahlen. Die endende Form kann entweder ein Kreis oder eine Ellipse sein.

Color-Stop-Punkte werden auf einem _virtuellen Verlaufsstrahl_ positioniert, der horizontal vom Zentrum nach rechts verläuft. Prozentuale Color-Stop-Positionen beziehen sich auf den Schnittpunkt zwischen der endenden Form und diesem Verlaufsstrahl, der `100%` repräsentiert. Jede Form ist eine einzelne Farbe, die durch die Farbe auf dem Verlaufsstrahl bestimmt wird, den sie schneidet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Verlauf

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background-image: radial-gradient(cyan 0%, transparent 20%, salmon 40%);
}
```

{{EmbedLiveSample('Basic_gradient', 120, 120)}}

### Nicht zentrierter Verlauf

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background-image: radial-gradient(
    farthest-corner at 40px 40px,
    #ff3355 0%,
    #4433ee 100%
  );
}
```

{{EmbedLiveSample('Non-centered_gradient', 240, 120)}}

### Interpolation mit Farbton

```html hidden
<div class="shorter"></div>
<div class="longer"></div>
```

```css hidden
div {
  display: inline-block;
  margin-top: 1rem;
  width: 45vw;
  height: 80vh;
}

.shorter::before {
  content: "shorter hue";
  display: block;
  margin-top: -1rem;
}

.longer::before {
  content: "longer hue";
  display: block;
  margin-top: -1rem;
}
```

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbgebungssystem verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background-image: radial-gradient(
    circle at center in hsl shorter hue,
    red,
    blue
  );
}

.longer {
  background-image: radial-gradient(
    circle at center in hsl longer hue,
    red,
    blue
  );
}
```

Die Box auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau übergeht, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Die Box auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft und durch Grün, Gelb und Orange geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für radial-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
