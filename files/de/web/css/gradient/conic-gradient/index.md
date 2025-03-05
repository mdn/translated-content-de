---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 9f8f926dd4a27c1d3ec622cade9ba34818851951
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem Verlauf mit Farbübergängen besteht, die um einen Mittelpunkt gedreht sind (anstatt vom Mittelpunkt aus zu strahlen). Beispiele für konische Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbräder")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt vom Datentyp {{CSSxRef("&lt;gradient&gt;")}}, das eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-conic-gradient.html")}}

## Syntax

```css
/* A gradient with a single color of red */
conic-gradient(red)

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
  - : Vorangestellt durch den Schlüsselbegriff `from` und mit einem Winkel als Wert, definiert die Drehung des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Mit denselben Längen-, Reihenfolge- und Schlüsselbegriffwerten wie die [`background-position`](/de/docs/Web/CSS/background-position)-Eigenschaft, definiert der `position`-Wert das Zentrum des Verlaufs. Wenn nicht angegeben, ist der Standardwert für `position` `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbanschlag mit {{CSSxRef("&lt;color&gt;")}}-Wert, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie sich der Verlauf zwischen benachbarten Farbanschlägen entwickelt. Die Länge definiert, an welchem Punkt zwischen zwei Farbanschlägen der Verlauf die Mitte des Farbübergangs erreichen soll. Wenn weggelassen, ist die Mitte des Farbübergangs die Mitte zwischen zwei Farbanschlägen.

> [!NOTE]
> Die Darstellung der Farbanschläge in konischen Verläufen folgt denselben Regeln wie [Farbanschläge in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein konischer Verlauf [keine intrinsische Dimension](/de/docs/Web/CSS/image#description), d.h., er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, wenn diese anders als die Elementgröße eingestellt ist.

Um einen konischen Verlauf zu erstellen, der wiederholt wird, um eine 360-Grad-Drehung zu füllen, verwenden Sie stattdessen die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Daher funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

> [!NOTE]
> Warum wird es als "konischer" Verlauf bezeichnet? Wenn die Farbanschläge auf einer Seite viel heller sind als auf der anderen, kann es von oben wie ein Kegel aussehen.

### Zusammensetzung eines konischen Verlaufs

Die Syntax von conic-gradient ähnelt der von radial-gradient, aber die Farbanschläge werden um einen Verlaufbogen, dem Umfang eines Kreises, platziert, anstatt auf der Verlaufslinie, die vom Zentrum des Verlaufs ausgeht. Bei konischen Verläufen wechseln die Farben, als ob sie um das Zentrum eines Kreises herumgedreht würden, beginnend oben und gehend im Uhrzeigersinn. Bei einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse aus nach außen in alle Richtungen.

![Farbanschläge entlang des Umfangs eines konischen Verlaufs und der Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Verlauf wird definiert durch die Angabe eines Drehwinkels, des Zentrums des Verlaufs und einer Liste von Farbanschlägen. Im Gegensatz zu linearen und radialen Verläufen, deren Farbanschläge durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbanschläge eines konischen Verlaufs mit einem [Winkel](/de/docs/Web/CSS/angle) angegeben. Einheiten sind `deg` für Grad, `grad` für Gon, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gon, 2π Radianten und 1 Umdrehung. Browser, die konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Verläufen ermöglicht die konische Verlauf-Syntax das Positionieren des Zentrums des Verlaufs an beliebiger Stelle innerhalb oder sogar außerhalb des Bildes. Die Werte für die Position sind ähnlich wie die Syntax für 2-Wert-background-position.

Der Verlaufbogen ist der Umfang des Verlaufs. Der _Startpunkt_ des Verlaufs oder Bogens ist Norden oder 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die schrägen Farbanschläge, ihre Start- und Endpunkte und dazwischen durch optionale schrägen Farbanschlags-Punkte bestimmt. Die Übergänge zwischen den Farben können mit Farbehinweisen zwischen den Farbanschlägen benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Durch das Hinzufügen weiterer schräger Farbanschlags-Punkte auf dem Verlaufbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbanschlags kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie die Position eines Farbanschlags nicht angeben, wird er auf halbem Weg zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbanschlag angeben, sind ihre Werte standardmäßig 0deg bzw. 360deg. Die folgenden beiden Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farbanschlag zur Farbe am nachfolgenden Farbanschlag, wobei der Mittelpunkt zwischen den Farben der halbe Wegpunkt zwischen dem Farbübergang ist. Sie können diesen Mittelpunkt des Farbübergangs an einen beliebigen Punkt zwischen zwei Farbanschlägen verschieben, indem Sie einen Farbehinweis hinzufügen, der angibt, wo die Mitte des Farbübergangs sein soll. Das Folgende ist von Beginn an bis zur 10 %-Marke einheitlich rot, wechselt von rot zu blau über 80 % der Drehung, wobei die letzten 10 % einheitlich blau sind. Der Mittelpunkt des Farbwechsels von rot zu blau liegt jedoch bei der 20 %-Marke anstelle der 50 %-Marke, wie es ohne den 80grad oder 20 % Farbehinweis der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbanschläge an derselben Position sind, wird der Übergang eine harte Linie zwischen der zuerst und zuletzt an dieser Stelle angegebenen Farbe sein. Um konische Verläufe zur Erstellung von Tortendiagrammen zu verwenden – was NICHT die korrekte Vorgehensweise zur Erstellung von Tortendiagrammen ist, da Hintergrundbilder nicht zugänglich sind – verwenden Sie harte Farbanschläge, wobei die Winkel der Farbanschläge für zwei benachbarte Farbanschläge gleich sind. Der einfachste Weg, dies zu tun, besteht darin, mehrere Positionsfarbanschläge zu verwenden. Die beiden folgenden Deklarationen sind gleichwertig:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbanschläge sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbanschläge mit einem niedrigeren Wert überschreiben den Wert des vorherigen Farbanschlags und erzeugen einen harten Übergang. Das Folgende wechselt von rot zu gelb bei der 30 %-Marke und dann von gelb zu blau über 35 % des Verlaufs:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt weitere Effekte, die Sie mit konischen Verläufen erzeugen können. Merkwürdigerweise ist ein Schachbrett einer davon. Durch das Erstellen von Quadranten mit einem oben links und unten rechts weißen Quadranten und unten links und oben rechts schwarzen Quadranten, dann wird der Verlauf 16-mal (viermal quer und viermal nach unten) wiederholt, können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschieden Winkel Einheiten mischen und anpassen, aber tun Sie das nicht. Das obige ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine besonderen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät das Vorhandensein nicht ankündigt und daher nichts an seine Nutzer vermittelt. Auch wenn es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher ist das Bild, das durch den konischen Verlauf dargestellt wird, für Benutzer von Bildschirmlesegeräten nicht zugänglich. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verlauf bei 40 Grad

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

### Außerhalb des Zentrums liegender Verlauf

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

### Verlauf als Tortendiagramm

Dieses Beispiel verwendet Mehrfachpositions-Farbanschläge, wobei benachbarte Farben denselben Farbanschlagswert haben und so einen Streifeneffekt erzeugen.

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

### Schachbrett

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

In diesem Beispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbmodell zur Interpolation verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das Feld links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau auf dem kürzeren Bogen des {{Glossary("Color_wheel", "Farbrads")}} wechselt. Das Feld rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über den längeren Bogen wechselt, durchläuft dabei grün, gelb und orange.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für conic-gradient

Bitte siehe [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
