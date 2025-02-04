---
title: font-size
slug: Web/CSS/font-size
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schriftart fest. Eine Änderung der Schriftgröße aktualisiert auch die Größen der schriftgrößenbezogenen {{cssxref("&lt;length&gt;")}} Einheiten, wie `em`, `ex` usw.

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

  - : [Absolute Größen](/de/docs/Web/CSS/absolute-size) Schlüsselwörter, basierend auf der Standard-Schriftgröße des Nutzers (die `medium` ist).

- `larger`, `smaller`

  - : [Relative Größen](/de/docs/Web/CSS/relative-size) Schlüsselwörter. Die Schrift ist größer oder kleiner im Verhältnis zur Schriftgröße des Elternelements, ungefähr im Verhältnis, das verwendet wird, um die oben genannten absoluten Größen zu trennen.

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Bei den meisten schriftgrößenrelativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Bei schriftgrößenrelativen Einheiten, die auf der Wurzel basieren (wie `rem`), ist die Schriftgröße relativ zur Schriftgröße des Inhalts im {{HTMLElement("html")}} (Root-) Element.

- {{cssxref("&lt;percentage&gt;")}}

  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Um die Barrierefreiheit zu maximieren, ist es im Allgemeinen am besten, Werte zu verwenden, die relativ zur Standard-Schriftgröße des Nutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenen Elternelements bestimmt wird.
    Weitere Informationen finden Sie in der [math-depth](/de/docs/Web/CSS/math-depth) Eigenschaft.

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße anzugeben, einschließlich Schlüsselwörtern oder numerischen Werten für Pixel oder ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Schriftgröße im Web festzulegen. Durch das Festlegen einer Schlüsselwort-Schriftgröße auf dem {{HTMLElement("body")}} Element, können Sie die relative Schriftgröße überall auf der Seite einstellen, was Ihnen die Möglichkeit gibt, die Schriftgröße auf der gesamten Seite leicht zu vergrößern oder zu verkleinern.

### Pixel

Die Schriftgröße in Pixelwerten (`px`) festzulegen, ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und browserübergreifende Möglichkeit, den Browsern buchstäblich anzuweisen, die Buchstaben genau in der von Ihnen angegebenen Anzahl von Pixeln in Höhe darzustellen. Die Ergebnisse können leicht variieren, da die Browser möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch in Kombination verwendet werden. Wenn ein Elternelement beispielsweise auf `16px` eingestellt ist und sein Kindelement auf `larger`, wird das Kindelement auf der Seite größer als das Elternelement angezeigt.

> [!NOTE]
> Die Festlegung von Schriftgrößen in `px` ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Nutzer in einigen Browsern die Schriftgröße nicht ändern kann. Beispielsweise möchten Nutzer mit eingeschränktem Sehvermögen möglicherweise die Schriftgröße viel größer einstellen als die von einem Webdesigner gewählte Größe. Vermeiden Sie es, sie für Schriftgrößen zu verwenden, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em`-Werts schafft eine dynamische oder berechnete Schriftgröße (historisch gesehen wurde die `em`-Einheit von der Breite des Großbuchstabens "M" in einem bestimmten Schrifttyp abgeleitet). Der numerische Wert wirkt als Multiplikator der `font-size`-Eigenschaft des Elements, auf dem er verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße von `<p>` Elementen das Doppelte der vererbten berechneten `font-size` von `<p>` Elementen sein. Im erweiterten Sinne ist eine `font-size` von `1em` gleich der berechneten `font-size` des Elements, auf dem sie verwendet wird.

Wenn auf keinem der Vorfahren der `<p>`-Elemente eine `font-size` festgelegt wurde, entspricht `1em` der Standardbrowser-Schriftgröße, die normalerweise `16px` beträgt. Somit ist `1em` standardmäßig äquivalent zu `16px` und `2em` zu `32px`. Wenn Sie beispielsweise eine `font-size` von 20px auf dem `<body>`-Element festlegen, dann wäre `1em` auf den `<p>`-Elementen stattdessen äquivalent zu `20px` und `2em` zu `40px`.

Um das `em`-Äquivalent für jeden benötigten Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Beispielsweise, wenn die `font-size` des `<body>` der Seite auf `16px` eingestellt ist, und die gewünschte Schriftgröße `12px` ist, sollten Sie `0.75em` angeben (weil 12/16 = 0.75). Wenn Sie eine Schriftgröße von `10px` wünschen, dann geben Sie `0.625em` an (10/16 = 0.625); für `22px`, `1.375em` (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da es seine Länge automatisch relativ zu der vom Leser gewählten Schrift anpasst.

Ein wichtiger Punkt, den Sie beachten sollten: em-Werte kumulieren sich. Betrachten Sie das folgende HTML und CSS:

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

Angenommen, die Standard-`font-size` des Browsers beträgt 16px, würden die Wörter "outer" mit 25.6px gerendert, aber das Wort "inner" würde mit 40.96px gerendert. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` seines Elternteils ist, die wiederum relativ zur `font-size` seines Elternteils ist. Dies wird oft als **Kumulative Effekt** bezeichnet.

### Rems

`rem`-Werte wurden eingeführt, um das Problem der Kumulation zu umgehen. `rem`-Werte beziehen sich auf das Root-`html`-Element, nicht auf das Elternelement. Mit anderen Worten, es ermöglicht Ihnen, eine Schriftgröße auf relative Weise anzugeben, ohne von der Größe des Elternteils beeinflusst zu werden, wodurch die Kumulation eliminiert wird.

Das untenstehende CSS ist nahezu identisch mit dem vorherigen Beispiel. Die einzige Ausnahme ist, dass die Einheit in `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Dann wenden wir dieses CSS auf dasselbe HTML an, welches so aussieht:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter "outer inner outer" alle mit 25.6px angezeigt (angenommen, dass die `font-size` des Browsers auf dem Standardwert von 16px belassen wurde).

### Ex

Wie die `em`-Einheit ist eine mit der `ex`-Einheit eingestellte `font-size` eines Elements berechnet oder dynamisch. Sie verhält sich genau auf die gleiche Weise, außer dass beim Festlegen der `font-size`-Eigenschaft mit `ex`-Einheiten die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://www.w3.org/TR/css-fonts-3/#first-available-font) entspricht, die auf der Seite verwendet wird. Der numerische Wert multipliziert die vererbte `font-size` des Elements und die `font-size` kumuliert relativ.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung von [schriftbezogenen Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

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
- SVG {{SVGAttr("font-size")}} Attribut
- [Lernen: Grundlegende Text- und Schrift-Styling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
