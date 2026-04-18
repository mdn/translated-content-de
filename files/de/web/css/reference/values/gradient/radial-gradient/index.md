---
title: CSS-Funktion `radial-gradient()`
short-title: radial-gradient()
slug: Web/CSS/Reference/Values/gradient/radial-gradient
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung aus strahlen. Ihre Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("gradient")}}, der eine spezielle Art von {{cssxref("image")}} ist.

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

Ein radiales Gradient wird angegeben, indem das Zentrum des Gradienten (wo sich die 0% Ellipse befindet) sowie die Größe und Form der _Endform_ (der 100% Ellipse) angegeben werden.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Gradienten, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die Endform des Gradienten. Der Wert kann `circle` sein (was bedeutet, dass die Form des Gradienten ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenausgerichtete Ellipse ist). Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<size>`
  - : Bestimmt die Größe der Endform des Gradienten. Wenn nicht angegeben, ist der Standardwert `farthest-corner`. Es kann explizit oder durch Schlüsselwort angegeben werden. Für die Definition der Schlüsselwörter sollten die Ränder des Gradientenrahmens als unbegrenzt in beide Richtungen verlaufend betrachtet werden, anstatt als endliche Linienstücke.

    Sowohl Kreis- als auch Ellipsengradienten akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                      |
    | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Gradienten berührt die dem Zentrum am nächsten gelegene Seite des Rahmens (für Kreise) oder trifft auf beide vertikalen und horizontalen dem Zentrum am nächsten gelegenen Seiten (für Ellipsen). |
    | `closest-corner`  | Die Endform des Gradienten ist so bemessen, dass sie genau die dem Zentrum nächstgelegene Ecke des Rahmens erreicht.                                                                                              |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so bemessen ist, dass sie die dem Zentrum am weitesten entfernte Seite des Rahmens (oder die vertikalen und horizontalen Seiten) erreicht.                     |
    | `farthest-corner` | Der Standardwert, die Endform des Gradienten ist so bemessen, dass sie genau die dem Zentrum am weitesten gelegene Ecke des Rahmens erreicht.                                                                     |

    Wenn `<ending-shape>` als `circle` angegeben wird, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was einen expliziten Kreisradius liefert. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben wird, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße zu liefern. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte beziehen sich auf die entsprechende Dimension des Gradientenrahmens. Negative Werte sind ungültig.

    Wenn das `<ending-shape>`-Schlüsselwort weggelassen wird, wird die Form des Gradienten durch die angegebene Größe bestimmt. Ein einzelner `<length>`-Wert liefert einen Kreis, während zwei Werte in `<length-percentage>` Einheiten eine Ellipse liefern. Ein einzelner `<percentage>`-Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Gradientenachse). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Gradienten; der Wert `100%` repräsentiert den Schnittpunkt der Endform mit dem virtuellen Gradientenstrahl. Dazwischen liegende Prozentwerte sind linear auf dem Gradientenstrahl positioniert. Das Einschließen von zwei Stopp-Positionen ist gleichbedeutend mit der Deklaration von zwei Farbstopps mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Gradient zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Übergangsfarbe den Mittelpunkt des Farbübergangs erreichen sollte. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Gradienten hat auch ein radialer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen radialen Gradienten zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht auf {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines radialen Gradienten

![Grafik, die radiale Gradienten erklärt: Der virtuelle strahlende Strahl ist horizontal und beginnt vom Mittelpunkt. Der elliptische Gradient, und daher die Endform, hat dasselbe Seitenverhältnis wie der Kasten, auf den er angewendet wird.](radial_gradient.png)

Ein radialer Gradient wird durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farbstopp-Punkte_ definiert.

Um einen sanften Farbverlauf zu erzeugen, zeichnet die `radial-gradient()`-Funktion eine Reihe von konzentrischen Formen, die vom Mittelpunkt bis zur _Endform_ (und möglicherweise darüber hinaus) strahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbstopp-Punkte sind auf einem _virtuellen Gradientenstrahl_ positioniert, der horizontal vom Zentrum nach rechts verläuft. Prozentbasierte Farbstopp-Positionen beziehen sich auf den Schnittpunkt zwischen der Endform und diesem Gradientenstrahl, der `100%` repräsentiert. Jede Form ist eine einzelne Farbe, bestimmt durch die Farbe auf dem Gradientenstrahl, die sie schneidet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfacher Gradient

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

### Nicht-zentrierter Gradient

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

In diesem Beispiel für Interpolation wird das Farbsystem [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

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

Das Feld links verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau übergeht, unter Verwendung des kürzeren Bogens auf dem {{Glossary("Color_wheel", "Farbkreis")}}. Das Feld rechts verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau übergeht, indem der längere Bogen durch Grün, Gelb und Orange durchquert wird.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für radial-gradient

Bitte sehen Sie sich [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Gradient-Funktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
