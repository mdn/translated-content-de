---
title: font-size
slug: Web/CSS/font-size
l10n:
  sourceCommit: 9380313d8884045dbb31d390a7104d5dbeac2e20
---

{{CSSRef}}

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schrift fest. Die Änderung der Schriftgröße aktualisiert auch die Größen der schriftgrößenrelativen {{cssxref("&lt;length&gt;")}} Einheiten wie `em`, `ex` usw.

{{EmbedInteractiveExample("pages/css/font-size.html")}}

## Syntax

```css
/* <absolute-size> values */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* <relative-size> values */
font-size: smaller;
font-size: larger;

/* <length> values */
font-size: 12px;
font-size: 0.8em;

/* <percentage> values */
font-size: 80%;

/* math value */
font-size: math;

/* Global values */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: revert-layer;
font-size: unset;
```

### Werte

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`

  - : Schlüsselwörter für [absolute Größe](/de/docs/Web/CSS/absolute-size), basierend auf der Standardschriftgröße des Benutzers (die `medium` ist).

- `larger`, `smaller`

  - : Schlüsselwörter für [relative Größe](/de/docs/Web/CSS/relative-size). Die Schrift wird größer oder kleiner relativ zur Schriftgröße des Elternelements, ungefähr im Verhältnis, das verwendet wird, um die Schlüsselwörter für absolute Größe oben zu trennen.

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Für die meisten schriftgrößenrelativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Für schriftgrößenrelative Einheiten, die auf der Wurzel basieren (wie `rem`), ist die Schriftgröße relativ zur Größe der Schrift, die vom {{HTMLElement("html")}} (Root-Element) verwendet wird.

- {{cssxref("&lt;percentage&gt;")}}

  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Um die Barrierefreiheit zu maximieren, ist es im Allgemeinen am besten, Werte zu verwenden, die relativ zur Standardschriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des umschließenden Elternteils bestimmt wird. Siehe die Eigenschaft [math-depth](/de/docs/Web/CSS/math-depth) für weitere Informationen.

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße anzugeben, einschließlich Schlüsselwörtern oder numerischen Werten für Pixel oder ems. Wählen Sie die geeignete Methode basierend auf den Bedürfnissen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Größe von Schriften im Web festzulegen. Durch das Festlegen einer Schlüsselwort-Schriftgröße am {{HTMLElement("body")}} Element können Sie relative Schriftgrößen überall auf der Seite einstellen, sodass Sie die Schriftgröße auf der gesamten Seite leicht skalieren können.

### Pixel

Das Festlegen der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und browserübergreifende Möglichkeit, den Browsern buchstäblich mitzuteilen, die Buchstaben genau so hoch darzustellen, wie Sie sie angegeben haben. Die Ergebnisse können leicht zwischen den Browsern variieren, da sie möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können ebenfalls in Kombination verwendet werden. Zum Beispiel, wenn ein Elternelement auf `16px` eingestellt ist und sein Kindelement auf `larger`, wird das Kindelement auf der Seite größer als das Elternelement angezeigt.

> [!NOTE]
> Die Definition von Schriftgrößen in `px` ist _[nicht barrierefrei](https://de.wikipedia.org/wiki/Barrierefreies_Internet)_, da der Benutzer die Schriftgröße in einigen Browsern nicht ändern kann. Zum Beispiel möchten Benutzer mit eingeschränktem Sehvermögen möglicherweise die Schriftgröße viel größer einstellen als die Größe, die ein Webdesigner gewählt hat. Vermeiden Sie deren Verwendung für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em` Werts erzeugt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em` Einheit von der Breite eines großen "M" in einer bestimmten Schriftart abgeleitet). Der numerische Wert wirkt als Multiplikator der `font-size` Eigenschaft des Elements, auf dem sie verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße der `<p>` Elemente das Doppelte der berechneten `font-size` sein, die von den `<p>` Elementen geerbt wird. Infolgedessen entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf dem sie verwendet wird.

Wenn keine `font-size` für einen der Vorfahren der `<p>` festgelegt wurde, entspricht `1em` der Standardschriftgröße des Browsers, die normalerweise `16px` beträgt. Daher ist standardmäßig `1em` gleich `16px`, und `2em` ist gleich `32px`. Wenn Sie zum Beispiel eine `font-size` von 20px auf dem `<body>` Element setzen, wäre `1em` auf den `<p>` Elementen stattdessen gleich `20px`, und `2em` wäre gleich `40px`.

Um das `em`-Äquivalent für jeden benötigten Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Angenommen, die `font-size` des `<body>` der Seite ist auf `16px` eingestellt. Wenn die gewünschte Schriftgröße `12px` beträgt, sollten Sie `0.75em` angeben (weil 12/16 = 0.75). Ebenso, wenn Sie eine Schriftgröße von `10px` wünschen, dann geben Sie `0.625em` an (10/16 = 0.625); für `22px`, geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da es seine Länge automatisch relativ zur Schrift anpasst, die der Leser zu verwenden wählt.

Ein wichtiger Punkt: em-Werte wirken sich additiv aus. Nehmen Sie das folgende HTML und CSS:

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6em;
}
```

```html
<div>
  <span>Outer <span>inner</span> outer</span>
</div>
```

Das Ergebnis ist:

{{EmbedLiveSample("Ems", 400, 100)}}

Wenn angenommen wird, dass die Standardschriftgröße des Browsers 16px beträgt, würden die Wörter "outer" mit 25,6px gerendert, aber das Wort "inner" würde mit 40,96px gerendert. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` seines Elternteils ist, das wiederum relativ zur `font-size` seines eigenen Elternteils ist. Dies wird oft als **Compounding** bezeichnet.

### Rems

`rem` Werte wurden eingeführt, um das Compounding-Problem zu umgehen. `rem` Werte sind relativ zum `html` Wurzelelement, nicht zum Elternelement. Mit anderen Worten, es ermöglicht Ihnen, eine Schriftgröße auf relative Weise anzugeben, ohne durch die Größe des Elternteils beeinflusst zu werden, wodurch das Compounding vermieden wird.

Das folgende CSS ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass die Einheit in `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Dann wenden wir dieses CSS auf das gleiche HTML an, das folgendermaßen aussieht:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter "outer inner outer" alle mit 25,6px angezeigt (vorausgesetzt, die `font-size` des Browsers wurde auf dem Standardwert von 16px belassen).

### Ex

Wie die `em` Einheit ist eine Element-Schriftgröße, die mit der `ex` Einheit festgelegt wird, berechnet oder dynamisch. Sie verhält sich genau gleich, außer dass beim Festlegen der `font-size` Eigenschaft mit `ex` Einheiten die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://www.w3.org/TR/css-fonts-3/#first-available-font) entspricht, die auf der Seite verwendet wird. Der Zahlenwert multipliziert die geerbte `font-size` des Elements, und die `font-size` setzt sich relativ zusammen.

Weitere Informationen zu [schriftgrößenrelativen Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex` finden Sie im W3C Editor's Draft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgrößen festlegen

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

#### Ergebnis

{{EmbedLiveSample('Setting_font_sizes', 600, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size-adjust")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
- [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
