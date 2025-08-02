---
title: Einführung in Textschatten
slug: Web/CSS/CSS_text_decoration/Text_shadows
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

Sie können Schatten auf Ihren Text anwenden, indem Sie die {{cssxref("text-shadow")}}-Eigenschaft verwenden. Diese Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Schattenwerten. Jeder Schatten erfordert mindestens zwei {{cssxref("length")}}-Werte, kann jedoch bis zu drei `<length>`-Werte und einen {{cssxref("color")}}-Wert enthalten.

```css
text-shadow: 1px 3px;
text-shadow: 1px -2px 3px white;
text-shadow:
  5px 5px mediumblue,
  10px 10px magenta,
  15px 15px rebeccapurple;
```

Um jeden Schatten vom Text zu entfernen, verwenden Sie das Schlüsselwort `none`.

```css
text-shadow: none;
```

In diesem Leitfaden betrachten wir die Komponenten von Textschatten und wie Sie mehrere Textschatten auf ein Element anwenden können.

## Komponenten von Textschatten

Jeder Schatten umfasst einen horizontalen Versatz, einen vertikalen Versatz und einen optionalen Unschärferadius, in dieser Reihenfolge. Sie können auch die Farbe des Schattens definieren.

### Horizontaler Versatz

Der erste {{cssxref("length")}} im Wert von `text-shadow` repräsentiert den horizontalen Versatz des Schattens relativ zum ursprünglichen Text. Positive Werte verschieben den Schatten nach rechts, während negative Werte ihn nach links verschieben. Ein Wert von `0` ist ein häufig verwendeter gültiger Wert.

In diesem Beispiel unterscheiden sich die verschiedenen `text-shadow`-Deklarationen nur in ihren horizontalen Versätzen. Der erste `<length>`-Wert verschiebt den Schatten nach links (`-30px`) oder nach rechts (`30px`).

```css live-sample___horizontal
.negative {
  text-shadow: -30px 0 1px red;
}

.positive {
  text-shadow: 30px 0 1px red;
}

.zero {
  text-shadow: 0 0 1px red;
}
```

```html hidden live-sample___horizontal live-sample___vertical live-sample___blur
<p class="negative">Negative</p>
<p class="positive">Positive</p>
<p class="zero">Zero</p>
```

```css hidden live-sample___horizontal live-sample___vertical live-sample___blur live-sample___multiple1
p {
  border: 1px solid;
  padding: 20px;
  font-family: sans-serif;
  font-size: 1.25rem;
}
```

{{EmbedLiveSample('horizontal','auto','320')}}

Sie haben möglicherweise bemerkt, dass die `text-shadow`-Eigenschaft keine Auswirkungen auf das [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) hat, ähnlich wie die {{cssxref("outline")}}-Eigenschaft. Genau wie {{cssxref("box-shadow")}} beeinflussen Textschatten nicht das Layout, lösen kein Scrollen aus und beeinflussen nicht die Größe des scrollbaren Überlaufbereichs. Während Textschatten den Text eines Elements größer erscheinen lassen können, haben sie keinen tatsächlichen Einfluss auf die Breite (oder Höhe) des Inhalts.

### Vertikaler Versatz

Der zweite {{cssxref("length")}} im Wert von `text-shadow` repräsentiert den vertikalen Versatz des Schattens relativ zum ursprünglichen Text. Dieser erforderliche Wert verhält sich ähnlich wie der horizontale Versatz, außer dass er den Schatten nach oben oder unten statt nach links oder rechts verschiebt.

In diesem Beispiel unterscheiden sich die `text-shadow`-Deklarationen nur in ihren vertikalen Versätzen. Der zweite `<length>`-Wert verschiebt den Schatten nach oben (`-30px`) oder nach unten (`30px`).

```css live-sample___vertical
.negative {
  text-shadow: 0 -30px 1px red;
}

.positive {
  text-shadow: 0 30px 1px red;
}

.zero {
  text-shadow: 0 0 1px red;
}
```

{{EmbedLiveSample('vertical','auto','320')}}

### Unschärferadius

Der Unschärferadius wird durch den dritten {{cssxref("length")}}-Wert definiert und ist optional. Wenn er weggelassen wird, beträgt der Unschärferadius `0`, was eine Kopie des Textes erzeugt, die durch die ersten beiden Längenwerte positioniert wird. Der Wert muss `0` oder größer sein; je größer der Wert, desto weiter verteilt wird der Schatteneffekt.

In diesem Beispiel unterscheiden sich die `text-shadow`-Deklarationen nur in ihren Unschärferadien. Dieser dritte `<length>`-Wert ist entweder ungültig (`-5px`), verwischt den Schatten (`5px`) oder erzeugt eine Kopie des Textes (`0`).

```css live-sample___blur
.negative {
  /* invalid */
  text-shadow: 30px 30px -5px red;
}

.positive {
  text-shadow: 30px 30px 5px red;
}

.zero {
  text-shadow: 30px 30px 0 red;
}
```

{{EmbedLiveSample('blur','auto','320')}}

### Schattenfarbe

Während Sie [mehrere Schatten](#mehrere_schatten) auf Text anwenden können, besteht jeder Schatten aus einer einzelnen Grundfarbe. Diese Farbe kann jeder gültige CSS-{{cssxref("color")}}-Wert sein und wird, wenn sie weggelassen wird, auf [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) standardisiert.

Die folgenden drei Schatten sind hinsichtlich ihrer Schattenfarben äquivalent:

```css
.shadow-color {
  text-shadow:
    5px 5px mediumblue,
    10px 10px magenta,
    15px 15px rebeccapurple;
}

.shadow-color-hex {
  text-shadow:
    5px 5px #0000cd,
    10px 10px #ff00ff,
    15px 15px #663399;
}

.shadow-color-rgb {
  text-shadow:
    5px 5px rgb(0 0 205),
    10px 10px rgb(255 0 255),
    15px 15px rgb(102 51 153);
}
```

## Mehrere Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere durch Kommata getrennte Schattenwerte einfügen.

Die Schatteneffekte werden von vorne nach hinten angewendet: Der erste Schatten liegt oben.

In unserem Beispiel von `text-shadow: 5px 5px mediumblue, 10px 10px magenta, 15px 15px rebeccapurple;` werden drei Schatten definiert, wobei der blaue oben auf dem rosa liegt, der wiederum auf dem lila liegt:

```css hidden live-sample___multiple1
p {
  text-shadow:
    5px 5px mediumblue,
    10px 10px magenta,
    15px 15px rebeccapurple;
}
```

```html hidden live-sample___multiple1
<p>I have three shadows</p>
```

{{EmbedLiveSample('multiple1','auto','120')}}

## Mehrere Schatten mit transparentem Text

Schatten werden über allen Hintergrundfarben oder -bildern und unter allen Rahmen gemalt. Während Schatten einander überlagern, überlagern sie nicht den Text. Es gibt kein Äquivalent des `inset`-Schlüsselworts der {{cssxref("box-shadow")}}-Eigenschaft in der Welt der Textschatten. Im Gegensatz zu einem Boxschatten werden Textschatten nicht an der beschatteten Form zugeschnitten und können durchscheinen, wenn der Text teilweise transparent ist.

Die folgenden Beispiele wenden die gleichen Schatten auf den Text an, jedoch mit unterschiedlichen {{cssxref("color")}}-Eigenschaftenwerten. Die halbtransparenten Beispiele sind schwer zu lesen, werden jedoch aufgenommen, um zu zeigen, wie Schatten gerendert werden:

```css live-sample___opaque
p {
  text-shadow:
    5px 5px 0 mediumblue,
    10px 10px 5px magenta,
    15px 15px 10px rebeccapurple;
}

.opaque {
  color: rgb(0 0 0);
}

.semitransparent {
  color: rgb(0 0 0 / 0.5);
}

.transparent {
  color: rgb(0 0 0 / 0);
}

.white {
  color: rgb(255 255 255);
}

.semi-white {
  color: rgb(255 255 255 / 0.75);
}
```

```html hidden live-sample___opaque
<p class="opaque">The text is opaque black</p>
<p class="semitransparent">The text is semiopaque black</p>
<p class="transparent">The text is transparent black</p>
<p class="white">The text is opaque white</p>
<p class="semi-white">The text is semiopaque white</p>
```

```css hidden live-sample___opaque
p {
  border: 1px solid black;
  padding: 20px;
  font-family: sans-serif;
  font-size: 1.75rem;
  font-weight: bold;
}
```

{{EmbedLiveSample('opaque','auto','540')}}

Im "transparenten" Beispiel ist der Text transparent, aber vollständig lesbar, da der obere Schatten nicht verschwommen ist. Beachten Sie, wie der Schatten hinter dem Text erscheint und sichtbar ist, wenn der Text weniger als vollständig undurchsichtig ist. Dies ist besonders im Beispiel "halbtransparentes Weiß" bemerkbar. Dieses Verhalten unterscheidet sich von nicht-inset Boxschatten, bei denen Schatten an der äußeren Grenze des Rahmens abgeschnitten werden.
