---
title: font-size
slug: Web/CSS/font-size
l10n:
  sourceCommit: 9380313d8884045dbb31d390a7104d5dbeac2e20
---

{{CSSRef}}

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schrift fest. Das Ändern der Schriftgröße aktualisiert auch die Größen der schriftgrößenrelativen {{cssxref("&lt;length&gt;")}}-Einheiten, wie z. B. `em`, `ex`, usw.

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

  - : [Absolute Größen](/de/docs/Web/CSS/absolute-size) Schlüsselwörter, basierend auf der Standard-Schriftgröße des Benutzers (die `medium` ist).

- `larger`, `smaller`

  - : [Relative Größen](/de/docs/Web/CSS/relative-size) Schlüsselwörter. Die Schrift wird relativ zur Schriftgröße des Elternelements größer oder kleiner, ungefähr in dem Verhältnis, das verwendet wird, um die absoluten Größen zu unterscheiden.

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Für die meisten schriftgrößenrelativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Für schriftgrößenrelative Einheiten, die auf der Wurzel basieren (wie `rem`), ist die Schriftgröße relativ zur Schriftgröße des im {{HTMLElement("html")}} (Wurzel)-Element verwendeten Schrift.

- {{cssxref("&lt;percentage&gt;")}}

  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Um die Zugänglichkeit zu maximieren, ist es im Allgemeinen am besten, Werte zu verwenden, die relativ zur Standard-Schriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenden Elternteils bestimmt wird.
    Siehe die [math-depth](/de/docs/Web/CSS/math-depth) Eigenschaft für weitere Informationen.

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße anzugeben, einschließlich Schlüsselwörter oder numerische Werte für Pixel oder Em. Wählen Sie die geeignete Methode basierend auf den Bedürfnissen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind ein guter Weg, um die Größe von Schriften im Web festzulegen. Durch das Festlegen einer Schlüsselwort-Schriftgröße auf dem {{HTMLElement("body")}}-Element können Sie überall auf der Seite eine relative Schriftgrößenanpassung vornehmen. Dies gibt Ihnen die Möglichkeit, die Schriftgröße auf der gesamten Seite leicht zu skalieren.

### Pixel

Das Festlegen der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist ein betriebssystemunabhängiger und browserübergreifender Weg, um den Browsern buchstäblich mitzuteilen, die Buchstaben genau in der von Ihnen angegebenen Pixelhöhe darzustellen. Die Ergebnisse können leicht zwischen den Browsern variieren, da sie möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch in Kombination verwendet werden. Wenn beispielsweise ein Elternelement auf `16px` und sein Kindelement auf `larger` gesetzt ist, wird das Kindelement größer als das Elternelement auf der Seite angezeigt.

> [!NOTE]
> Die Definition von Schriftgrößen in `px` ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer die Schriftgröße in einigen Browsern nicht ändern kann. Benutzer mit eingeschränktem Sehvermögen möchten möglicherweise die Schriftgröße viel größer einstellen als die vom Webdesigner gewählte Größe. Vermeiden Sie es, sie für Schriftgrößen zu verwenden, wenn Sie ein inklusives Design erstellen möchten.

### Em

Die Verwendung eines `em`-Wertes erzeugt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em`-Einheit von der Breite eines Großbuchstabens "M" in einer gegebenen Schriftart abgeleitet.). Der numerische Wert fungiert als Multiplikator der `font-size`-Eigenschaft des Elements, auf dem es verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße der `<p>`-Elemente doppelt so groß sein wie die berechnete `font-size`, die von `<p>`-Elementen geerbt wird. Im weiteren Sinne entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf dem es verwendet wird.

Wenn auf keinem der Vorfahren des `<p>` eine `font-size` gesetzt wurde, wird `1em` der Standard-Browser-`font-size` entsprechen, die normalerweise `16px` beträgt. Daher entspricht standardmäßig `1em` `16px` und `2em` entspricht `32px`. Wenn Sie eine `font-size` von 20px auf dem `<body>`-Element setzen würden, dann würde `1em` auf den `<p>`-Elementen stattdessen `20px` entsprechen und `2em` `40px`.

Um das `em`-Äquivalent für jeden erforderlichen Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Wenn beispielsweise die `font-size` des `<body>` der Seite auf `16px` eingestellt ist und die gewünschte Schriftgröße `12px` beträgt, sollten Sie `0.75em` angeben (da 12/16 = 0.75). Ebenso, wenn Sie eine Schriftgröße von `10px` wünschen, dann geben Sie `0.625em` an (10/16 = 0.625); für `22px` geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da es sich automatisch relativ zur Schrift anpasst, die der Leser zu verwenden wählt.

Eine wichtige Tatsache, die man im Auge behalten sollte: em-Werte addieren sich. Nehmen Sie das folgende HTML und CSS:

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

Angenommen, die Standard-`font-size` des Browsers ist 16px, würden die Wörter "outer" bei 25,6px dargestellt, aber das Wort "inner" würde bei 40,96px gerendert. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` des übergeordneten Elements ist, das wiederum relativ zur `font-size` seines übergeordneten Elements ist. Dies wird oft als **Verkettung** bezeichnet.

### Rems

`rem`-Werte wurden erfunden, um das Verkettungsproblem zu umgehen. `rem`-Werte sind relativ zum Wurzel-`html`-Element, nicht zum Elternelement. Mit anderen Worten, sie ermöglichen es Ihnen, eine Schriftgröße auf relative Weise festzulegen, ohne von der Größe des Elternteils beeinflusst zu werden, wodurch die Verkettung eliminiert wird.

Das folgende CSS ist fast identisch mit dem vorherigen Beispiel. Die einzige Ausnahme ist, dass die Einheit auf `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Dann wenden wir dieses CSS auf dasselbe HTML an, das wie folgt aussieht:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter "outer inner outer" alle mit 25,6px angezeigt (vorausgesetzt, die `font-size` des Browsers bleibt auf dem Standardwert von 16px).

### Ex

Wie die `em`-Einheit wird der `font-size`, die mit der `ex`-Einheit für ein Element festgelegt wird, berechnet oder dynamisch. Es verhält sich genau auf die gleiche Weise, außer dass beim Festlegen der `font-size`-Eigenschaft mit `ex`-Einheiten die `font-size` der x-Höhe der [ersten verfügbaren Schrift](https://www.w3.org/TR/css-fonts-3/#first-available-font) auf der Seite entspricht. Der numerische Wert multipliziert die geerbte `font-size` des Elements und die `font-size` addiert sich relativ.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung der [schriftenrelativen Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

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
