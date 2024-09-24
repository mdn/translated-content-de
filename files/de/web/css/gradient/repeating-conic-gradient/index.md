---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem sich wiederholenden Farbverlauf besteht (anstatt eines [einzelnen Farbverlaufs](/de/docs/Web/CSS/gradient/conic-gradient)), mit Farbübergängen, die um einen Mittelpunkt rotieren (statt von der Mitte [auszustrahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

{{EmbedInteractiveExample("pages/css/function-repeating-conic-gradient.html")}}

## Syntax

```css
/* Sternmuster: ein blaues auf blaues Sternmuster: der Farbverlauf
   ist ein Sternmuster aus helleren und dunkleren Blau,
   zentriert im oberen linken Quadranten,
   um 3 Grad versetzt, sodass es keine auf/ab Gerade gibt */
repeating-conic-gradient(
  from 3deg at 25% 25%,
  hsl(200 100% 50%) 0deg 15deg,
  hsl(200 100% 60%) 10deg 30deg
)

/* Interpolation im Polarraum
   mit längerer Hue-Interpolationsmethode */
repeating-conic-gradient(in hsl shorter hue, red, blue 90deg, green 180deg)
```

### Werte

- {{CSSxRef("&lt;angle&gt;")}}
  - : Vorangestellt durch den Schlüsselbegriff `from` und nimmt einen Winkel als Wert an, definiert die Rotation des Farbverlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselbe Länge, Reihenfolge und Schlüsselwert wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position), wobei die Position das Zentrum des Farbverlaufs definiert. Wird sie weggelassen, ist der Standardwert `center`, was bedeutet, dass der Farbverlauf zentriert ist.
- `<angular-color-stop>`
  - : Ein Farbstop mit einem {{CSSxRef("&lt;color&gt;")}}-Wert, gefolgt von einer oder zwei optionalen Stoppositionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Farbverlaufs). Der letzte Farbstop minus dem Winkel des ersten Farbstops definiert die Größe des sich wiederholenden Farbverlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation")}}-Hinweis, der definiert, wie der Farbverlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert den Punkt zwischen zwei Farbstops, an dem der Farbverlauf die Mitte des Farbwechsels erreichen soll. Wird sie weggelassen, liegt die Mitte des Farbwechsels zwischen zwei Farbstops.

> [!NOTE]
> Das Rendern von [Farbstopps in CSS-Verläufen](#gradient_with_multiple_color_stops) folgt denselben Regeln wie Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Beispiele für wiederholende konische Farbverläufe umfassen Sternenmuster. Das Ergebnis der Funktion `repeating-conic-gradient()` ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, einer speziellen Art von {{CSSxRef("&lt;image&gt;")}}.

Wenn weder der erste noch der letzte Farbstop einen Farbstopwinkel größer als 0 Grad oder weniger als 360 Grad umfasst, wird der konische Farbverlauf nicht wiederholt.

Wie bei jedem Farbverlauf hat ein sich wiederholender konischer Farbverlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das es angewendet wird, oder der Größe, die für das `<image>`-Element festgelegt ist, falls es auf etwas anderes als die Größe des Elements eingestellt ist.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht für {{CSSxRef("background-color")}} und andere Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Um einen konischen Farbverlauf zu erstellen, der sich nicht wiederholt, erstellen Sie den Farbverlauf mit einer vollen 360-Grad-Rotation oder verwenden Sie die Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}.

### Verständnis von wiederholenden konischen Farbverläufen

Die Syntax des `repeating-conic-gradient` ist ähnlich wie die von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie bei nicht-wiederholenden konischen Farbverläufen werden die Farbstopps um einen Farbverlaufsbogen platziert. Wie beim wiederholenden radialen Farbverlauf wird die Größe des sich wiederholenden Abschnitts durch den Unterschied zwischen der ersten und der letzten Winkelposition definiert.

![Vergleich der Farbstopps für wiederholende und nicht wiederholende konische und radiale Farbverläufe](repeatingconicgradient.png)

Die obigen Farbverläufe sind als ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein sich wiederholender Farbverlauf wiederholt, definieren wir die ersten und letzten Farbstopps. Wie bei nicht-wiederholenden Farbverläufen werden die ersten und letzten Farbstopps angenommen, wenn sie nicht explizit deklariert wurden, und sind entweder 0 oder 100% oder 360 Grad. Wenn diese Werte Standard sind, beträgt der sich wiederholende Bogen 360 Grad und wird daher nicht wiederholt.

Wie beim nicht-wiederholenden konischen Farbverlauf werden die Farbstopps um einen Farbverlaufsbogen platziert — den Umfang eines Kreises — und nicht entlang der gradienten Linie, die von der Mitte des Farbverlaufs ausgeht. Die Farben wechseln, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben, wenn kein `from <angle>` angegeben ist, und im Uhrzeigersinn für die Entfernung, die die größte und kleinste Farbstopposition trennt, dann wiederholen.

Ein sich wiederholender konischer Farbverlauf wird durch Angabe eines Rotationswinkels, des Zentrums des Farbverlaufs und dann durch Angabe einer Liste von Farbstopps spezifiziert. Wie bei nicht-wiederholenden konischen Farbverläufen werden die Farbstopps eines sich wiederholenden konischen Farbverlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Drehungen. In einem Kreis gibt es 360 Grad, 400 Graden, 2π Radianten und 1 Drehung. Browser, die wiederholende konische Farbverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, dies ist jedoch in der Spezifikation nicht enthalten.

Die Syntax für radiale und konische Farbverläufe erlaubt das Positionieren des Zentrums des Farbverlaufs beliebig innerhalb oder sogar außerhalb des Bildes. Die Werte für die Position sind ähnlich der Syntax für 2-Wertige {{cssxref('background-position')}}.

Der Farbverlaufsbogen ist Teil des Umfangs des Farbverlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Farbverlaufs werden durch die angewinkelten Farbstopps, ihre Startpunkte, Endpunkte und, dazwischen, optionale angewinkelte Farbstopppunkte bestimmt. Die Übergänge zwischen den Farben können mit Farbhinweisen zwischen den Farbstopppunkten benachbarter Farben verändert werden.

#### Anpassung von Farbverläufen

Durch Hinzufügen weiterer angewinkelter Farbstopppunkte am Farbverlaufsbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er zur Hälfte zwischen dem, das ihm vorausgeht und dem, das ihm folgt, platziert. Wie das nicht-wiederholende Gegenstück des Farbverlaufs, wenn Sie keinen Winkel für den ersten oder letzten Farbstop angeben, sind die Werte 0deg und 360deg. Wenn Sie keinen Winkel für beide angeben, erhalten Sie einen nicht-wiederholenden konischen Farbverlauf. Wenn Sie einen anderen Winkel als 0 für den ersten oder 360 Grad für den letzten Winkel angeben, wiederholt sich der Farbverlauf basierend auf diesem Wert. Zum Beispiel, wenn Sie keinen Winkel für die erste Farbe angeben und 10% für den letzten Farbstop festlegen, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farbstop, und der letzte Farbstop ist der zuletzt deklarierte Farbstopwinkel. Die folgenden zwei Farbverläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig wechseln die Farben von einer Farbe bei einem Farbstop zum anderen Farbstop reibungslos, wobei der Mittelpunkt zwischen den Farben der Halbpunkt des Farbwechsels ist. Sie können diesen Farbwechsel-Mittelpunkt an jeden Punkt zwischen zwei Farbstops verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Mittelpunkt des Farbwechsels sein soll.

Wenn sich zwei oder mehr Farbstopps an derselben Stelle befinden, wird der Übergang eine harte Linie zwischen der ersten und der letzten an diesem Ort deklarierten Farbe sein.

Obwohl Sie verschiedene Winkeleinheiten mischen und kombinieren können, sollten Sie dies nicht tun. Es macht CSS schwer lesbar.

### Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine spezielle Information zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader das Vorhandensein nicht ankündigen und daher nichts an seine Benutzer vermitteln wird. Obwohl es möglich ist, Tortendiagramme, Schachbrettmuster und andere Effekte mit konischen Farbverläufen zu erstellen, bietet CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das durch den konischen Farbverlauf dargestellte Bild nicht für Screenreader-Benutzer zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des übergeordneten Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Schwarz-weißes Sternmuster

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image: repeating-conic-gradient(#fff 0 9deg, #000 9deg 18deg);
}
```

{{EmbedLiveSample("Black_and_white_starburst", 220, 220)}}

### Nicht zentrierter Farbverlauf

Dieser Farbverlauf wiederholt sich 18 Mal, aber da wir nur die rechte Hälfte sehen, sehen wir nur 9 Wiederholungen.

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: repeating-conic-gradient(
    from 3deg at 25% 25%,
    green,
    blue 2deg 5deg,
    green,
    yellow 15deg 18deg,
    green 20deg
  );
}
```

{{EmbedLiveSample("Off-centered_gradient", 220, 220)}}

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

In diesem Beispiel zur Interpolation wird das Farbssystem [hsl](/de/docs/Web/CSS/color_value/hsl) verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: repeating-conic-gradient(
    in hsl shorter hue,
    red,
    blue 180deg
  );
}

.longer {
  background-image: repeating-conic-gradient(
    in hsl longer hue,
    red,
    blue 180deg
  );
}
```

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot nach Blau über den kürzeren Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) geht. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot nach Blau über den längeren Bogen verläuft und dabei durch Grün-, Gelb- und Orangetöne geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie [Verwendung von CSS-Farbverläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Farbverläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Farbverlaufsfunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
