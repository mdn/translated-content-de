---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem Farbverlauf besteht, der um einen Mittelpunkt rotiert (anstatt vom Zentrum aus zu strahlen). Beispiele für kegelförmige Verläufe sind Tortendiagramme und [Farbkreise](/de/docs/Glossary/color_wheel). Das Ergebnis der `conic-gradient()` Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Dem Schlüsselwort `from` vorangestellt und mit einem Winkel als Wert, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet die gleiche Länge, Reihenfolge und Schlüsselwortwerte wie die [`background-position`](/de/docs/Web/CSS/background-position) Eigenschaft, der `position` Wert definiert das Zentrum des Verlaufs. Wenn nicht angegeben, wird standardmäßig der Wert `center` für `position` verwendet, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farb-Stopp der {{CSSxRef("&lt;color&gt;")}} Wert mit einem oder zwei optionalen Stopp-Positionen (einem {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein [Interpolation](/de/docs/Glossary/interpolation) Hinweis definiert, wie der Verlauf zwischen benachbarten Farbstopps verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlauf-Farbe den Mittelpunkt des Farbwechsels erreichen sollte. Wenn nicht angegeben, ist der Mittelpunkt des Farbwechsels der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Verläufen](#gradient_with_multiple_color_stops) folgt den gleichen Regeln wie Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein kegelförmiger Verlauf [keine festen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, es hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird die Größe des Elements entsprechen, auf das es angewendet wird, oder die Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße gesetzt ist.

Um einen kegelförmigen Verlauf zu erstellen, der sich wiederholt und eine 360-Grad-Drehung füllt, verwenden Sie stattdessen die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund wird `conic-gradient()` bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden, nicht funktionieren.

> [!NOTE]
> Warum wird es ein "kegelförmiger" Verlauf genannt? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines kegelförmigen Verlaufs

Die conic-gradient Syntax ist ähnlich der radial-gradient Syntax, aber die Farbstopps sind um einen Verlaufsbogen, den Umfang eines Kreises, herum angeordnet, anstatt auf der Verlaufsachse, die vom Zentrum des Verlaufs ausgeht. Bei kegelförmigen Verläufen ändern sich die Farben, als ob sie um das Zentrum eines Kreises gedreht werden würden, beginnend oben und im Uhrzeigersinn verlaufend. In einem radialen Verlauf ändern sich die Farben vom Zentrum einer Ellipse aus, nach außen, in alle Richtungen.

![Farbstopps entlang des Umfangs eines kegelförmigen Verlaufs und die Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein kegelförmiger Verlauf wird spezifiziert, indem ein Drehwinkel, das Zentrum des Verlaufs und dann eine Liste von Farbstopps angegeben wird. Im Gegensatz zu linearen und radialen Verläufen, deren Farbstopps durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines kegelförmigen Verlaufs mit einem [Winkel](/de/docs/Web/CSS/angle) angegeben. Die Einheiten umfassen `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die kegelförmige Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation.

Ähnlich wie bei radialen Verläufen bietet die kegelförmige Verlaufssyntax die Möglichkeit, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu platzieren. Die Werte für die Position sind ähnlich der Syntax für eine 2-Wert background-position.

Der Verlaufsbogen ist der Umfang des Verlaufs. Der _Ausgangspunkt_ des Verlaufs oder Bogens ist Norden oder 12:00 Uhr. Der Verlauf wird dann durch den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die gewinkelten Farbstopps, deren Ausgangspunkte, Endpunkte und dazwischen sowie durch optionale gewinkelte Farbstopp-Punkte bestimmt. Die Übergänge zwischen Farben können mit Farbhints zwischen den Farbstopps benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Indem mehr gewinkelte Farbstopppunkte auf dem Verlaufsbogen hinzugefügt werden, können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie die Position eines Farbstopps nicht angeben, wird er halbwegs zwischen dem davor und dem danach liegenden platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, sind deren Werte 0deg bzw. 360deg. Die folgenden zwei Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig geht der Übergang der Farben sanft von der Farbe eines Farbstopps zu der des nächsten Farbstopps über, wobei der Mittelpunkt zwischen den Farben die Hälfte des Farbwechsels darstellt. Sie können diesen Farbwechsel-Mittelpunkt an jede beliebige Stelle zwischen zwei Farbstopps verschieben, indem Sie ein Farbhint hinzufügen, das angibt, wo der Mittelpunkt des Farbwechsels liegen sollte. Der folgende Verlauf ist von Anfang bis zur 10%-Markierung rein rot, wechselt über 80% der Drehung von Rot zu Blau, wobei die letzten 10% rein blau sind. Der Mittelpunkt des Rot-zu-Blau Farbwechsel liegt jedoch bei der 20%-Markierung statt bei der 50%-Markierung, wie es ohne das 80grad, oder 20%, Farbhint der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle deklarierten Farbe sein. Um kegelförmige Verläufe zu verwenden, um Tortendiagramme zu erstellen – was NICHT die richtige Methode ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind – verwenden Sie harte Farbstopps, bei denen die Farbstopniveaus für zwei benachbarte Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung von Mehrfachpositionsfarbstopps. Die folgenden zwei Deklarationen sind gleichwertig:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgeführt werden. Nachfolgende Farbstopps mit niedrigeren Werten überschreiben den Wert des vorherigen Farbstopps, wodurch ein harter Übergang entsteht. Der folgende Verlauf ändert sich bei der 30%-Markierung von Rot zu Gelb und wechselt dann über 35% des Verlaufsverlauf von Gelb zu Blau:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit kegelförmigen Verläufen erstellen können. Merkwürdigerweise ist ein Schachbrettmuster einer davon. Indem Sie Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und unteren linken und oberen rechten schwarzen Quadranten erstellen und den Verlauf dann 16 Mal (viermal quer und viermal nach unten) wiederholen, können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen und anpassen, aber tun Sie das nicht. Der obige Verlauf ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser geben keine speziellen Informationen zu Hintergrundbildern für Hilfstechnologien bereit. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Obwohl es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit kegelförmigen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das durch den kegelförmigen Verlauf dargestellte Bild für Benutzer von Screenreadern nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend sind, um den Zweck der Seite insgesamt zu verstehen, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verstehen von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen von Erfolgskriterium 1.1.1 | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

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

### Außerzentrierter Verlauf

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

Dieses Beispiel verwendet Mehrpositionsfarbstopps, bei denen benachbarte Farben den gleichen Farbstopwert haben und so einen gestreiften Effekt erzeugen.

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

In diesem Beispiel wird für die Interpolation das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Die Box auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), das bedeutet, die Farbe geht direkt von Rot zu Blau über den kürzeren Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel). Die Box auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft und durch Grün, Gelb und Orange geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Mehr conic-gradient Beispiele

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für mehr Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
