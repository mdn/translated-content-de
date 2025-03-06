---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem Farbverlauf besteht, der um einen Mittelpunkt rotiert (und nicht vom Zentrum aus abstrahlt). Beispiele für konische Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()` Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Vorangestellt durch den Begriff `from` und nimmt einen Winkel als Wert an, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselbe Länge, Reihenfolge und Schlüsselwortwerte wie die [`background-position`](/de/docs/Web/CSS/background-position) Eigenschaft, definiert der `position` Wert das Zentrum des Verlaufs. Wenn nicht angegeben, wird standardmäßig `center` verwendet, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farb-Stopp {{CSSxRef("&lt;color&gt;")}} Wert, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Farbverlauf den Mittelpunkt des Farbwechsels erreichen soll. Wird er weggelassen, ist der Mittelpunkt des Farbwechsels der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in konischen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, wenn diese anders als die Elementgröße eingestellt ist.

Um einen konischen Verlauf zu erzeugen, der sich wiederholt, sodass er eine 360-Grad-Drehung ausfüllt, verwenden Sie stattdessen die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum wird er als "konischer" Verlauf bezeichnet? Wenn die Farbstopps auf der einen Seite viel heller sind als auf der anderen, kann er wie ein Kegel von oben aussehen.

### Zusammensetzung eines konischen Verlaufs

Die conic-gradient Syntax ähnelt der radial-gradient Syntax, aber die Farbstopps befinden sich um einen Verlaufsbogen, den Umfang eines Kreises, anstatt auf der Verlaufsachse, die vom Zentrum des Verlaufs ausgeht. Bei konischen Verläufen wechseln die Farben, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend von oben und im Uhrzeigersinn gehend. In einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse nach außen in alle Richtungen.

![Farbstopps entlang des Umfangs eines konischen Verlaufs und der Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Verlauf wird angegeben, indem ein Rotationswinkel, das Zentrum des Verlaufs und anschließend eine Liste von Farbstopps definiert werden. Im Gegensatz zu linearen und radialen Verläufen, deren Farbstopps durch Angabe eines {{cssxref("length")}} platziert werden, werden die Farbstopps eines konischen Verlaufs mit einem [Winkel](/de/docs/Web/CSS/angle) angegeben. Einheiten sind `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung. Browser, die konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation.

Ähnlich wie bei radialen Verläufen ermöglicht die conic-gradient Syntax die Positionierung des Zentrums des Verlaufs überall innerhalb oder sogar außerhalb des Bildes. Die Werte für die Position sind ähnlich wie die Syntax für 2-Werte background-position.

Der Verlaufbogen ist der Umfang des Verlaufs. Der _Startpunkt_ des Verlaufs oder Bogens ist der Norden oder 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die gewinkelten Farbstopps, ihre Startpunkte, Endpunkte und die dazwischen liegenden und optional gewinkelten Farbstopp-Punkte bestimmt. Die Übergänge zwischen Farben können mit Farbhints zwischen den Farbstopps benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Durch das Hinzufügen von mehr gewinkelten Farbstopp-Punkten auf dem Verlaufbogen können Sie einen individuell angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie die Position eines Farbstopps nicht angeben, wird er auf halbem Weg zwischen dem davor und dem danach liegenden Farbstopp platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, betragen ihre Werte 0deg und 360deg. Die folgenden beiden Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln Farben sanft von der Farbe eines Farbstopps zur Farbe des folgenden Farbstopps, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbwechsels ist. Sie können diesen Farbwechsel-Mittelpunkt auf einen beliebigen Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhint hinzufügen, der anzeigt, wo der Mittelpunkt des Farbwechsels sein sollte. Das folgende Beispiel ist von Anfang an bis zur 10%-Marke durchgängig rot, wechselt von rot zu blau über 80% der Drehung, wobei die letzten 10% durchgängig blau sind. Der Mittelpunkt des rot-zu-blau Farbwechsels liegt jedoch bei der 20%-Marke anstatt bei der 50%-Marke, wie es ohne den 80grad oder 20%-Farbhint gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Position liegen, wird der Übergang eine klare Linie zwischen den ersten und letzten an dieser Position deklarierten Farben sein. Um konische Verläufe zur Erstellung von Tortendiagrammen zu verwenden - was NICHT der korrekte Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da sie nicht zugänglich sind - verwenden Sie klare Farbstopps, bei denen die Farbstopp-Winkel für zwei benachbarte Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung von mehreren Positionsfarbstopps. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Der folgende Wechsel erfolgt von rot zu gelb bei der 30%-Marke und dann von gelb zu blau über 35% des Verlaufs:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit konischen Verläufen erzeugen können. Seltsamerweise ist ein Schachbrettmuster einer davon. Indem Sie Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und einem unteren linken und oberen rechten schwarzen Quadranten erstellen und den Verlauf 16 Mal (viermal quer und viermal abwärts) wiederholen, können Sie ein Schachbrettmuster erzeugen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkel-Einheiten mischen und kombinieren, aber tun Sie es nicht. Das obige Beispiel ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Zugänglichkeit

Browser bieten keine speziellen Informationen zu Hintergrundbildern zur Unterstützung von assistiver Technologie. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und somit den Benutzern nichts vermittelt. Obwohl es möglich ist, mit konischen Verläufen Tortendiagramme, Schachbretter und andere Effekte zu erstellen, bieten CSS-Bilder keinen nativen Weg, um alternativen Text zuzuweisen, und daher wird das Bild, das durch den konischen Verlauf repräsentiert wird, für Screenreader-Nutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des gesamten Zwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verlauf bei 40-Grad

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

### Nicht-zentrierter Verlauf

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

### Verlaufs-Tortendiagramm

Dieses Beispiel verwendet multipositionsfarbstopps, wobei benachbarte Farben denselben Farbstoppwert haben und dadurch einen gestreiften Effekt erzeugen.

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

In diesem Beispiel wird für die Interpolation das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbwert-System verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das Feld auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot nach blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} übergeht. Das Feld auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot nach blau über den längeren Bogen übergeht, indem sie durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere conic-gradient Beispiele

Bitte sehen Sie sich [Verwendung von CSS Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
