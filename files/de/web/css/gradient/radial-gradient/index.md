---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausstrahlen. Seine Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{InteractiveExample("CSS Demo: radial-gradient()")}}

```css interactive-example-choice
background: radial-gradient(#e66465, #9198e5);
```

```css interactive-example-choice
background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);
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

Ein radialer Verlauf wird durch Angabe des Zentrums des Verlaufs (wo sich die 0 %-Ellipse befindet) sowie der Größe und Form der _Abschlussform_ (der 100 %-Ellipse) spezifiziert.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert in derselben Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Sofern nicht angegeben, ist die Standardposition `center`.
- `<ending-shape>`
  - : Die Abschlussform des Verlaufs. Der Wert kann `circle` sein (was bedeutet, dass die Verlaufsform ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenparallele Ellipse ist). Sofern nicht angegeben, ist die Standardform `ellipse`.
- `<size>`

  - : Bestimmt die Größe der Abschlussform des Verlaufs. Wenn es weggelassen wird, ist die Standardgröße `farthest-corner`. Es kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Definition der Schlüsselwörter werden die Kanten des Verlaufskastens als unendlich in beide Richtungen verlaufend betrachtet, anstatt als endliche Liniensegmente.

    Sowohl Kreis- als auch Ellipsenverläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                                |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Abschlussform des Verlaufs trifft die Seite des Kastens, die dem Zentrum am nächsten ist (für Kreise), oder trifft sowohl die vertikalen als auch horizontalen Seiten, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die Abschlussform des Verlaufs wird so dimensioniert, dass sie genau die Ecke des Kastens trifft, die seinem Zentrum am nächsten ist.                                                                                       |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Abschlussform so dimensioniert ist, dass sie die Seite des Kastens trifft, die am weitesten von seinem Zentrum entfernt ist (oder die vertikalen und horizontalen Seiten).       |
    | `farthest-corner` | Der Standardwert, die Abschlussform des Verlaufs wird so dimensioniert, dass sie genau die Ecke des Kastens trifft, die am weitesten von seinem Zentrum entfernt ist.                                                       |

    Wenn `<ending-shape>` als `circle` spezifiziert ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was einen expliziten Kreisradius liefert. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` spezifiziert ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße zu liefern. Der erste Wert repräsentiert den horizontalen Radius, und der zweite ist der vertikale Radius. Prozentwerte sind relativ zur entsprechenden Dimension des Verlaufskastens. Negative Werte sind ungültig.

    Wenn das `<ending-shape>` Schlüsselwort weggelassen wird, wird die Verlaufsform durch die angegebene Größe bestimmt. Ein `<length>`-Wert liefert einen Kreis, während zwei Werte in `<length-percentage>` Einheiten eine Ellipse liefern. Ein einzelner `<percentage>`-Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder eine {{cssxref("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentsatz von `0%`, oder eine Länge von `0`, repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der Abschlussform mit dem virtuellen Verlaufslinienstrahl. Prozentuale Werte dazwischen sind linear auf dem Verlaufslinienstrahl positioniert. Die Angabe von zwei Stopp-Positionen entspricht der Deklaration von zwei Farbstopps mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der bestimmt, wie der Verlauf zwischen zwei benachbarten Farbstopps fortschreitet. Die Länge bestimmt, an welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe den Mittelpunkt des Farbübergangs erreichen sollte. Wenn sie weggelassen wird, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Verlauf hat auch ein radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen sich wiederholenden radialen Verlauf zu erstellen, der seinen Behälter ausfüllt, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund wird `radial-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften funktionieren, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafik, die radiale Verläufe erklärt: Der virtuelle Strahl ist horizontal vom Mittelpunkt ausgehend. Der elliptische Verlauf und somit die Abschlussform haben dasselbe Seitenverhältnis wie der Kasten, auf dem er deklariert ist.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _Abschlussform_ und zwei oder mehr _Farb-Stopp-Punkte_ definiert.

Um einen weichen Verlauf zu erzeugen, zeichnet die `radial-gradient()` Funktion eine Reihe konzentrischer Formen, die sich vom Zentrum zur _Abschlussform_ (und möglicherweise darüber hinaus) ausbreiten. Die Abschlussform kann entweder ein Kreis oder eine Ellipse sein.

Farb-Stopp-Punkte sind auf einem _virtuellen Verlaufslinienstrahl_ positioniert, der horizontal vom Zentrum nach rechts erstreckt. Prozentbasierte Farbstopp-Positionen sind relativ zum Schnittpunkt zwischen der Abschlussform und diesem Verlaufslinienstrahl, was `100%` darstellt. Jede Form hat eine einfarbige Farbe, die durch die Farbe auf dem Verlaufslinienstrahl bestimmt wird, die sie schneidet.

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
    #f35 0%,
    #43e 100%
  );
}
```

{{EmbedLiveSample('Non-centered_gradient', 240, 120)}}

### Interpolieren mit Farbton

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

In diesem Beispiel zur Interpolation wird das [HSL]-Farbsystem (/de/docs/Web/CSS/color_value/hsl) verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet kürzere [Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass sich die Farbe direkt von Rot zu Blau bewegt, indem sie den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} nutzt. Die Box auf der rechten Seite verwendet längere [Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass sich die Farbe von Rot zu Blau bewegt, indem sie den längeren Bogen durch Grüns, Gelbtöne und Orangetöne durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Mehr Beispiele für radial-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für mehr Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
