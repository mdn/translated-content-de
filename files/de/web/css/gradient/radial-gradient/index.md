---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausstrahlen. Seine Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## Syntax

```css
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)

/* hsl color space with longer hue interpolation */
radial-gradient(circle at center in hsl longer hue, red 0, blue, green 100%)
```

Ein radialer Verlauf wird angegeben, indem das Zentrum des Verlaufs (wo die 0%-Ellipse sein wird) sowie die Größe und Form der _Endform_ (der 100%-Ellipse) angegeben werden.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert in der gleichen Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die Endform des Verlaufs. Der Wert kann `circle` (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenausgerichtete Ellipse ist) sein. Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<size>`

  - : Bestimmt die Größe der Endform des Verlaufs. Wenn weggelassen, ist der Standardwert farthest-corner. Es kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Definitionen der Schlüsselwörter ist zu bedenken, dass die Kanten des Verlaufsfeldes als unendlich in beide Richtungen verlaufend betrachtet werden, anstatt als endliche Liniensegmente.

    Sowohl Kreis- als auch Ellipsenverläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                            |
    | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Verlaufs trifft die dem Zentrum am nächsten gelegene Seite des Feldes (für Kreise) oder trifft sowohl die vertikalen als auch die horizontalen Seiten, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die Endform des Verlaufs ist so dimensioniert, dass sie genau die Ecke des Feldes trifft, die dem Zentrum am nächsten liegt.                                                                                            |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so dimensioniert ist, dass sie die dem Zentrum oder den vertikalen und horizontalen Seiten am weitesten entfernte Seite trifft.                                      |
    | `farthest-corner` | Der Standardwert; die Endform des Verlaufs ist so dimensioniert, dass sie genau die Ecke des Feldes trifft, die am weitesten vom Zentrum entfernt ist.                                                                  |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was einen expliziten Kreisradius darstellt. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße zu bestimmen. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte beziehen sich auf die entsprechende Dimension des Verlaufsfeldes. Negative Werte sind ungültig.

    Wenn das `<ending-shape>`-Schlüsselwort weggelassen wird, wird die Form des Verlaufs durch die angegebene Größe bestimmt. Ein einzelner `<length>`-Wert ergibt einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse ergeben. Ein einzelner `<percentage>`-Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}}-Wert einer Farbunterbrechung, dem ein oder zwei optionale Unterbrechungspositionen folgen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der Endform mit dem virtuellen Verlaufsstrahl. Prozentuale Werte dazwischen sind linear auf dem Verlaufsstrahl positioniert. Das Einfügen von zwei Unterbrechungspositionen entspricht der Deklaration von zwei Farbunterbrechungen mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbunterbrechungen fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbunterbrechungen die Verlaufsfarbe den Mittelpunkt des Farbübergangs erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbunterbrechungen.

## Beschreibung

Wie jeder Verlauf hat auch ein radialer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); das bedeutet, dass er keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis hat. Seine konkrete Größe wird an die Größe des Elements angepasst, auf das er angewendet wird.

Um einen radialen Verlauf zu erstellen, der sich so wiederholt, dass er seinen Behälter füllt, verwenden Sie die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht mit {{Cssxref("background-color")}} und anderen Eigenschaften, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafik, die radiale Verläufe erklärt: Der virtuelle Strahl ist horizontal und beginnt vom Mittelpunkt. Der elliptische Verlauf und deshalb auch die Endform haben das gleiche Verhältnis wie das Feld, auf dem sie deklariert sind.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Zentrumpunkt_, eine _Endform_ und zwei oder mehr _Farbunterbrechungspunkte_ definiert.

Um einen glatten Verlauf zu erstellen, zeichnet die Funktion `radial-gradient()` eine Reihe von konzentrischen Formen, die sich von der Mitte bis zur _Endform_ (und potenziell darüber hinaus) ausstrahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbunterbrechungspunkte sind auf einem _virtuellen Verlaufsstrahl_ positioniert, der horizontal vom Zentrum nach rechts verläuft. Prozentuale Farbunterbrechungspositionen beziehen sich auf den Schnittpunkt zwischen der Endform und diesem Verlaufsstrahl, was `100%` darstellt. Jede Form ist eine einzelne Farbe, die durch die Farbe auf dem Verlaufsstrahl bestimmt wird, die sie schneidet.

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

{{EmbedLiveSample('Simple_gradient', 120, 120)}}

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Der Kasten links benutzt [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Der Kasten rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht, und dabei Grün, Gelb und Orange durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere radial-gradient-Beispiele

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

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
