---
title: radial-gradient()
slug: Web/CSS/Reference/Values/gradient/radial-gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausstrahlen. Die Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

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

Ein radialer Verlauf wird durch die Angabe des Zentrums des Verlaufs (wo die 0% Ellipse sein wird) und die Größe und Form der _Endform_ (der 100% Ellipse) spezifiziert.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert in derselben Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist die Standardposition `center`.
- `<ending-shape>`
  - : Die Endform des Verlaufs. Der Wert kann `circle` (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsengerechte Ellipse ist) sein. Wenn nicht angegeben, ist die Standardeinstellung `ellipse`.
- `<size>`
  - : Bestimmt die Größe der Endform des Verlaufs. Wenn es ausgelassen wird, ist die Standardeinstellung `farthest-corner`. Es kann explizit oder durch Schlüsselwort angegeben werden. Für die Bestimmung der Schlüsselwortdefinitionen werden die Kanten des Verlaufsbox als ins Unendliche in beide Richtungen ausgedehnt betrachtet, anstatt als begrenzte Linienabschnitte.

    Sowohl Kreis- als auch Ellipsenverläufe akzeptieren folgende Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                      |
    | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Verlaufs trifft auf die Kante der Box, die seinem Zentrum am nächsten liegt (für Kreise) oder trifft auf die vertikalen und horizontalen Seiten, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die Endform des Verlaufs wird so bemessen, dass sie genau die nächste Ecke der Box von ihrem Zentrum aus erreicht.                                                                                                |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so bemessen wird, dass sie die Seite der Box erreicht, die am weitesten vom Zentrum entfernt ist (oder die vertikalen und horizontalen Seiten).                |
    | `farthest-corner` | Der Standardwert, die Endform des Verlaufs wird so bemessen, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum aus erreicht.                                                               |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, die einen expliziten Kreisradius bietet. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße zu bieten. Der erste Wert stellt den horizontalen Radius dar und der zweite den vertikalen Radius. Prozentwerte sind relativ zu der entsprechenden Abmessung des Verlaufsbox. Negative Werte sind ungültig.

    Wenn das `<ending-shape>` Schlüsselwort weggelassen wird, wird die Verlaufsform durch die gegebene Größe bestimmt. Ein einziger `<length>` Wert ergibt einen Kreis, während zwei Werte in `<length-percentage>` Einheiten eine Ellipse ergeben. Ein einzelner `<percentage>` Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Der {{cssxref("&lt;color&gt;")}} Wert eines Farbverlaufsstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentsatz von `0%`, oder eine Länge von `0`, repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der Endform mit dem virtuellen Verlaufsstrahl. Dazwischen liegende Prozentwerte werden linear auf dem Verlaufsstrahl positioniert. Das Einbeziehen von zwei Stopp-Positionen entspricht der Deklaration von zwei Farbverlaufstopps mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbverlaufstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbverlaufstopps die Verlaufsfarbe den Mittelpunkt des Farbübergangs erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbverlaufstopps.

## Beschreibung

Wie bei jedem Verlauf hat ein radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe stimmt mit der Größe des Elements überein, auf das es angewendet wird.

Um einen radialen Verlauf zu erstellen, der sich wiederholt, um seinen Container auszufüllen, verwenden Sie die {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} Funktion.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht auf {{cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafik, die radiale Verläufe erklärt: der virtuelle Strahl ist horizontal und beginnt im Mittelpunkt. Der elliptische Verlauf und damit die Endform hat dasselbe Seitenverhältnis wie die Box, auf die er angewendet wird.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farbverlaufspunkt_ definieren.

Um einen gleichmäßigen Verlauf zu erstellen, zieht die `radial-gradient()` Funktion eine Reihe konzentrischer Formen von der Mitte bis zur _Endform_ (und möglicherweise darüber hinaus). Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbverlaufspunkte sind auf einem _virtuellen Verlaufsstrahl_ positioniert, der horizontal von der Mitte nach rechts verläuft. Prozentbasierte Farbverlaufspositionen sind relativ zum Schnittpunkt zwischen der Endform und diesem Verlaufsstrahl, der `100%` repräsentiert. Jede Form ist eine einzige Farbe, bestimmt durch die Farbe auf dem Verlaufsstrahl, den sie schneidet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfacher Verlauf

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

### Nicht-zentrierter Verlauf

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

In diesem Beispiel für Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet [kürzeres Interpolieren](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Die Box auf der rechten Seite verwendet [längeres Interpolieren](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und durch Grüntöne, Gelbtöne und Orangetöne hindurchgeht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere radial-gradient Beispiele

Bitte beziehen Sie sich auf [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
