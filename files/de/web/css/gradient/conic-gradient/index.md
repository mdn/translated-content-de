---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem Gradient mit Farbübergängen besteht, die sich um einen Mittelpunkt drehen (anstatt vom Zentrum auszugehen). Beispiele für konische Gradients sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-conic-gradient.html")}}

## Syntax

```css
/* A conic gradient rotated 45 degrees,
   starting blue and finishing red */
conic-gradient(from 45deg, blue, red)

/* A bluish purple box: the gradient goes from blue to red,
   but only the bottom right quadrant is visible, as the
   center of the conic gradient is at the top left corner */
conic-gradient(from 90deg at 0 0, blue, red)

/* Interpolation in polar color space
  with longer hue interpolation method */
conic-gradient(in hsl longer hue, red, blue, green, red)

/* Color wheel */
conic-gradient(
  hsl(360 100% 50%),
  hsl(315 100% 50%),
  hsl(270 100% 50%),
  hsl(225 100% 50%),
  hsl(180 100% 50%),
  hsl(135 100% 50%),
  hsl(90 100% 50%),
  hsl(45 100% 50%),
  hsl(0 100% 50%)
)
```

### Werte

- {{CSSxRef("&lt;angle&gt;")}}
  - : Mit dem Schlüsselwort `from` angegeben und mit einem Winkelwert versehen, definiert die Drehung des Gradients im Uhrzeigersinn.
- `<position>`
  - : Verwenden Sie dieselben Längen-, Reihenfolge- und Schlüsselwortwerte wie bei der [`background-position`](/de/docs/Web/CSS/background-position)-Eigenschaft. Der `position`-Wert definiert das Zentrum des Gradients. Wenn nicht angegeben, wird standardmäßig `center` verwendet, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbhaltepunkt mit einem {{CSSxRef("&lt;color&gt;")}}-Wert, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Gradients).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}}hinweis, der definiert, wie der Gradient zwischen benachbarten Farbhaltepunkten fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbhaltepunkten die Gradientenfarbe den Mittelpunkt des Farbübergangs erreichen sollte. Wenn weggelassen, liegt der Mittelpunkt des Übergangs in der Mitte zwischen zwei Farbhaltepunkten.

> [!NOTE]
> Die Darstellung von Farbhaltepunkten in conic gradients folgt denselben Regeln wie bei [Farbhaltepunkten in linearen Gradients](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Gradient hat auch ein conic gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, es hat weder eine natürliche noch bevorzugte Größe oder ein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das es angewandt wird, oder der Größe des `<image>`, falls diese anders als die Elementgröße eingestellt ist.

Um einen conic gradient zu erstellen, der sich wiederholt, um eine vollständige 360-Grad-Drehung zu füllen, verwenden Sie die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s zulässig sind. Daher funktioniert `conic-gradient()` nicht mit {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Warum wird es als „konischer Gradient“ bezeichnet? Wenn die Farbhaltepunkte auf einer Seite viel heller sind als auf der anderen, kann es wie ein von oben betrachteter Kegel aussehen.

### Zusammensetzung eines conic gradients

Die Syntax von conic-gradient ähnelt der von radial-gradient, aber die Farbhaltepunkte werden entlang eines Gradientenbogens (dem Umfang eines Kreises) statt entlang der Gradientenlinie vom Zentrum des Gradients platziert. Bei conic gradients ändern sich die Farben, als ob sie um das Zentrum eines Kreises rotieren, beginnend oben und im Uhrzeigersinn. Bei radial gradients strahlen die Farben vom Zentrum einer Ellipse nach außen in alle Richtungen.

![Farbhaltepunkte entlang des Umfangs eines conic gradients und der Achse eines radial gradients.](screenshot_2018-11-29_21.09.19.png)

Ein conic gradient wird spezifiziert, indem ein Drehwinkel, das Zentrum des Gradients und eine Liste von Farbhaltepunkten angegeben werden. Anders als bei linearen und radialen Gradients, deren Farbhaltepunkte durch die Angabe einer {{cssxref("length")}} bestimmt werden, werden die Farbhaltepunkte eines conic gradients mit einem [Winkel](/de/docs/Web/CSS/angle) spezifiziert. Einheiten umfassen `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Drehungen. Es gibt 360 Grad, 400 Gradienten, 2π Radianten und 1 Drehung in einem Kreis. Browser, die conic gradients unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, dies ist jedoch nicht in der Spezifikation enthalten.

Ähnlich wie bei radial gradients ermöglicht die Syntax von conic gradients, das Zentrum des Gradients beliebig innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Positionierung ähneln der Syntax für eine zweistellige background-position.

Der Gradientenbogen ist der Umfang des Gradients. Der _Startpunkt_ des Gradients oder Bogens ist Norden oder 12:00 Uhr. Der Gradient wird dann um den _from_-Winkel gedreht. Die Farben des Gradients werden durch die gewinkelten Farbhaltepunkte, ihre Startpunkte, Endpunkte und die optionalen Farbhaltepunktwinkel dazwischen bestimmt. Die Übergänge zwischen Farben können durch Farbhinweise zwischen benachbarten Farbhaltepunkten verändert werden.

#### Gradients anpassen

Durch das Hinzufügen weiterer gewinkelter Farbhaltepunktwerte auf dem Gradientenbogen können hochgradig angepasste Übergänge zwischen mehreren Farben erstellt werden. Die Position eines Farbhaltepunkts kann explizit mit einem {{CSSxRef("&lt;angle&gt;")}} definiert werden. Falls kein Ort für einen Farbhaltepunkt angegeben wird, wird er auf halbem Weg zwischen dem vorhergehenden und dem nachfolgenden platziert. Falls kein Winkel für den ersten oder letzten Farbhaltepunkt angegeben wird, sind deren Werte 0deg bzw. 360deg. Die beiden folgenden Gradients sind somit identisch:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig verlaufen Farben sanft von der Farbe eines Farbhaltepunkts zur Farbe des nächsten, wobei der Mittelpunkt des Farbübergangs die Hälfte des Weges zwischen den Farbhaltepunkten liegt. Sie können diesen Mittelpunkt des Farbübergangs zu einem beliebigen Punkt zwischen zwei Farbhaltepunkten verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo sich der Mittelpunkt des Farbübergangs befinden sollte. Der folgende Gradient ist von Anfang an bis zur 10%-Marke vollrot, wechselt über 80% der Drehung von Rot zu Blau, wobei die letzten 10% vollblau sind. Der Übergangsmittelpunkt des Farbwechsels von Rot zu Blau liegt jedoch bei der 20%-Marke statt bei der 50%-Marke, wie es ohne den 80grad- oder 20%-Farbhinweis der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbhaltepunkte am selben Ort platziert sind, wird der Übergang eine scharfe Linie zwischen den zuerst und zuletzt deklarierten Farben an diesem Ort. Um mit conic gradients Tortendiagramme zu erstellen – was NICHT die richtige Methode ist, um Tortendiagramme zu erstellen, da Hintergrundbilder nicht barrierefrei sind – verwenden Sie harte Farbübergänge, bei denen die Winkelwerte der Farbhaltepunkte zweier benachbarter Farbhaltepunkte identisch sind. Der einfachste Weg, dies zu erreichen, ist die Verwendung mehrerer Farbhaltepunktpositionen. Die folgenden beiden Deklarationen sind identisch:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbhaltepunkte sollten in aufsteigender Reihenfolge aufgelistet sein. Nachfolgende Farbhaltepunkte mit niedrigeren Werten überschreiben die Werte des vorherigen Farbhaltepunktes und erzeugen so einen harten Übergang. Der folgende Gradient wechselt bei der 30%-Marke von Rot zu Gelb und dann über 35% des Gradients von Gelb zu Blau:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt weitere Effekte, die Sie mit conic gradients erstellen können. Seltsamerweise ist ein Schachbrettmuster einer davon. Indem Sie Quadranten erstellen, wobei der obere linke und der untere rechte Quadrant weiß und der untere linke und obere rechte Quadrant schwarz sind, und anschließend den Gradient 16-mal wiederholen (viermal horizontal und viermal vertikal), können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können unterschiedliche Winkeleinheiten mischen, sollten dies aber vermeiden. Das obige Beispiel ist schwer lesbar.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser stellen unterstützender Technologie keine speziellen Informationen zu Hintergrundbildern zur Verfügung. Dies ist vor allem für Screenreader relevant, da ein Screenreader deren Präsenz nicht ankündigt und somit seinen Benutzern nichts vermittelt. Obwohl es möglich ist, mit conic gradients Tortendiagramme, Schachbrettmuster und andere Effekte zu erstellen, bietet CSS keine Möglichkeit, alternativen Text zuzuweisen. Daher wird das Bild, das durch den conic gradient dargestellt wird, für Benutzer von Screenreadern nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Zwecks der Seite entscheidend sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erklärung zur Richtlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Gradient bei 40 Grad

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image: conic-gradient(from 40deg, #fff, #000);
}
```

{{EmbedLiveSample("Gradient_at_40-degrees", 120, 120)}}

### Zentrierter Gradient verschoben

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(from 0deg at 0% 25%, blue, green, yellow 180deg);
}
```

{{EmbedLiveSample("Off-centered_gradient", 120, 120)}}

### Gradient-Tortendiagramm

Dieses Beispiel verwendet mehrere Farbhaltepunktpositionen mit angrenzenden Farben, die denselben Farbhaltepunktwert haben, und erzeugt so einen gestreiften Effekt.

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(red 36deg, orange 36deg 170deg, yellow 170deg);
  border-radius: 50%;
}
```

{{EmbedLiveSample("Gradient_pie-chart", 120, 120)}}

### Schachbrettmuster

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(
      #fff 0.25turn,
      #000 0.25turn 0.5turn,
      #fff 0.5turn 0.75turn,
      #000 0.75turn
    )
    top left / 25% 25% repeat;
  border: 1px solid;
}
```

{{EmbedLiveSample("Checkerboard", 120, 120)}}

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

In diesem Beispiel wird für die Interpolation das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet, und der [hue](/de/docs/Web/CSS/hue)-Wert wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das Kästchen auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), bei der die Farbe direkt von Rot zu Blau über die kürzere Kreisbogenstrecke auf dem {{Glossary("Color_wheel", "Farbrad")}} wechselt. Das Kästchen auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), bei der die Farbe von Rot zu Blau über die längere Kreisbogenstrecke wechselt, dabei Grün, Gelb und Orange durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für conic-gradient

Weitere Beispiele finden Sie unter [Verwendung von CSS-Gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradient-Funktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
