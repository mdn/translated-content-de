---
title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem Verlauf mit Farbübergängen besteht, die um einen Mittelpunkt rotieren (statt von der Mitte aus zu strahlen). Beispielhafte kegelförmige Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbräder")}}. Das Ergebnis der `conic-gradient()` Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

{{InteractiveExample("CSS Demo: conic-gradient()")}}

```css interactive-example-choice
background: conic-gradient(red, orange, yellow, green, blue);
```

```css interactive-example-choice
background: conic-gradient(
  from 0.25turn at 50% 30%,
  #f69d3c,
  10deg,
  #3f87a6,
  350deg,
  #ebf8e1
);
```

```css interactive-example-choice
background: conic-gradient(from 3.1416rad at 10% 50%, #e66465, #9198e5);
```

```css interactive-example-choice
background: conic-gradient(
  red 6deg,
  orange 6deg 18deg,
  yellow 18deg 45deg,
  green 45deg 110deg,
  blue 110deg 200deg,
  purple 200deg
);
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
  - : Vorangestellt durch den Schlüsselbegriff `from`, bestimmt und nimmt einen Winkel als Wert, definiert die Drehung des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet die gleichen Längen, Reihenfolgen und Schlüsselbegriffe wie die [`background-position`](/de/docs/Web/CSS/Reference/Properties/background-position) Eigenschaft. Der `position` Wert definiert das Zentrum des Verlaufs. Wenn nicht angegeben, ist der Standardwert für `position` `center`, was bedeutet, dass der Verlauf zentriert ist.
- `<angular-color-stop>`
  - : Ein Farbstop-Wert von {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stoppositionen, (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Kreisumfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}-Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps voranschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlauffarbe den Mittelpunkt des Farbwechsels erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbwechsels der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung der Farbstopps in kegelförmigen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein kegelförmiger Verlauf [keine intrinsische Dimension](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird, oder der Größe des `<image>`, wenn diese auf etwas anderes als die Größe des Elements gesetzt ist.

Um einen kegelförmigen Verlauf zu erstellen, der sich wiederholt, um eine 360-Grad-Drehung auszufüllen, verwenden Sie die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht mit {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp nutzen.

> [!NOTE]
> Warum nennt man es einen "kegelförmigen" Verlauf? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines kegelförmigen Verlaufs

Die kegelförmige-Verlaufs-Syntax ist ähnlich der radial-gradient Syntax, aber die Farbstopps sind um einen Verlaufbogen platziert, den Umfang eines Kreises, statt auf der Verlaufsachse, die vom Zentrum des Verlaufs ausgeht. Bei kegelförmigen Verläufen wechseln die Farben, als ob sie um das Zentrum eines Kreises herumgesponnen würden, beginnend oben und im Uhrzeigersinn gehend. Bei einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse nach außen in allen Richtungen.

![Farbstopps entlang des Umfangs eines kegelförmigen Verlaufs und der Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein kegelförmiger Verlauf wird spezifiziert, indem ein Rotationswinkel, das Zentrum des Verlaufs und dann eine Liste von Farbstopps angegeben werden. Im Gegensatz zu linearen und radialen Verläufen, deren Farbstopps durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines kegelförmigen Verlaufs mit einem [Winkel](/de/docs/Web/CSS/Reference/Values/angle) spezifiziert. Einheiten umfassen `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die kegelförmige Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, dies ist jedoch nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Verläufen erlaubt die kegelförmige-Verlaufs-Syntax, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Wert Hintergrundposition.

Der Verlaufsbogen ist der Umfang des Verlaufs. Der _Startpunkt_ des Verlaufs oder Bogens ist Norden oder 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die abgewinkelten Farbstopps, ihre Startpunkte, Endpunkte und, dazwischen, optionale abgewinkelte Farbstopp-Punkte bestimmt. Die Übergänge zwischen Farben können mit Farbhints zwischen den Farbstopps benachbarter Farben verändert werden.

#### Anpassung von Verläufen

Durch das Hinzufügen weiterer abgewinkelter Farbstopp-Punkte auf dem Verlaufsbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erschaffen. Ein spezifischer Punkt eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Standort eines Farbstopps nicht spezifizieren, wird er auf halbem Weg zwischen dem vorhergehenden und dem nachfolgenden platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, sind ihre Werte 0deg bzw. 360deg. Die folgenden beiden Verläufe sind identisch:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farbstopp zur Farbe am folgenden Farbstopp, wobei der Mittelpunkt der Farben in der Hälfte des Farbwechsels liegt. Sie können diesen Mittelpunkt des Farbwechsels an einen beliebigen Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Mittelpunkt des Farbwechsels sein soll. Der folgende Verlauf ist fest rot vom Start bis zur 10% Markierung, wechselt von rot zu blau über 80% der Drehung, wobei die letzten 10% fest blau sind. Der Mittelpunkt des roten zu blauen Verlaufswechsels liegt jedoch bei der 20%-Markierung statt bei der 50%-Markierung, wie es ohne den 80grad oder 20% Farbhint geschehen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Position deklarierten Farben sein. Um kegelförmige Verläufe zu verwenden, um Tortendiagramme zu erstellen – was NICHT der korrekte Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind – verwenden Sie harte Farbstopps, wobei die Farbhaltewinkel für zwei benachbarte Farbstopps gleich sind. Am einfachsten ist es, mehrere positionsfarbige Stopps zu verwenden. Die folgenden zwei Deklarationen sind identisch:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Der folgende Wechsel geht von rot zu gelb bei der 30%-Markierung und wechselt dann von gelb zu blau über 35% des Verlaufs:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit kegelförmigen Verläufen erstellen können. Seltsamerweise ist ein Schachbrettmuster einer von ihnen. Indem Sie Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und unteren linken und oberen rechten schwarzen Quadranten erstellen und dann den Verlauf 16-mal wiederholen (viermal horizontal und viermal vertikal), können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen und zusammenstellen, aber tun Sie es nicht. Das oben Gesagte ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist besonders wichtig für Bildschirmleser, da ein Bildschirmleser seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Während es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit kegelförmigen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das von dem kegelförmigen Verlauf dargestellte Bild für Bildschirmleserbenutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtsinns der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
  background-image: conic-gradient(from 40deg, white, black);
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

### Verlauf eines Tortendiagramms

Dieses Beispiel verwendet Farbstopps mit mehreren Positionen, bei denen benachbarte Farben denselben Farbstoppwert haben, was einen gestreiften Effekt erzeugt.

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
      white 0.25turn,
      black 0.25turn 0.5turn,
      white 0.5turn 0.75turn,
      black 0.75turn
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

In diesem Beispiel wird für die Interpolation das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau mithilfe des kürzeren Bogens auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau wechselt, indem sie durch Grün, Gelb und Orange über den längeren Bogen verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Mehr Beispiele für kegelförmige Verläufe

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
