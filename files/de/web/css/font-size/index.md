---
title: font-size
slug: Web/CSS/font-size
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`font-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe der Schrift fest. Eine Änderung der Schriftgröße aktualisiert auch die Größen der schriftgrößenrelativen {{cssxref("&lt;length&gt;")}} Einheiten, wie `em`, `ex` usw.

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

  - : [Absolute Größe](/de/docs/Web/CSS/absolute-size) Schlüsselwörter, basierend auf der Standardschriftgröße des Benutzers (die `medium` ist).

- `larger`, `smaller`

  - : [Relative Größe](/de/docs/Web/CSS/relative-size) Schlüsselwörter. Die Schrift wird größer oder kleiner relativ zur Schriftgröße des Elternelements, ungefähr im Verhältnis, das zur Trennung der oben genannten Absolutgröße Schlüsselwörter verwendet wird.

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Für die meisten schriftgrößenrelativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Für schriftgrößenrelative Einheiten, die auf der Wurzel basieren (wie `rem`), ist die Schriftgröße relativ zur Größe der im {{HTMLElement("html")}} (Root) Element verwendeten Schrift.

- {{cssxref("&lt;percentage&gt;")}}

  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Um die Barrierefreiheit zu maximieren, ist es generell am besten, Werte zu verwenden, die relativ zur Standardschriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des umgebenden Elternteils ermittelt wird.
    Siehe die [math-depth](/de/docs/Web/CSS/math-depth) Eigenschaft für weitere Informationen.

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße zu spezifizieren, einschließlich Schlüsselwörter oder numerische Werte für Pixel oder Ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Größe von Schriftarten im Web festzulegen. Indem Sie eine Schlüsselwortschriftgröße auf dem {{HTMLElement("body")}} Element festlegen, können Sie eine relative Schriftgröße überall auf der Seite einstellen, wodurch Sie die Schrift leicht auf der gesamten Seite vergrößern oder verkleinern können.

### Pixel

Die Schriftgröße in Pixelwerten (`px`) festzulegen, ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und plattformübergreifende Methode, um den Browsern buchstäblich mitzuteilen, dass sie die Buchstaben genau in der von Ihnen angegebenen Pixelhöhe rendern sollen. Die Ergebnisse können zwischen den Browsern leicht variieren, da sie möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch miteinander kombiniert werden. Zum Beispiel, wenn ein Elternelement auf `16px` gesetzt ist und sein Kindelement auf `larger` gesetzt ist, wird das Kindelement größer als das Elternelement auf der Seite angezeigt.

> [!NOTE]
> Schriftgrößen in `px` zu definieren, ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer die Schriftgröße in einigen Browsern nicht ändern kann. Zum Beispiel möchten Benutzer mit eingeschränktem Sehvermögen die Schriftgröße möglicherweise viel größer einstellen als die von einem Webdesigner gewählte Größe. Vermeiden Sie die Verwendung für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em`-Werts erzeugt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em`-Einheit von der Breite eines großen "M" in einer bestimmten Schriftart abgeleitet). Der numerische Wert fungiert als Multiplikator der `font-size`-Eigenschaft des Elements, auf dem sie verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall ist die Schriftgröße der `<p>`-Elemente doppelt so groß wie die berechnete `font-size`, die von `<p>`-Elementen geerbt wird. Folglich ist eine `font-size` von `1em` gleich der berechneten `font-size` des Elements, auf dem sie verwendet wird.

Wenn für keinen der Vorfahren des `<p>` eine `font-size` festgelegt wurde, entspricht `1em` der Standardschriftgröße des Browsers, die normalerweise `16px` beträgt. Folglich ist `1em` standardmäßig gleich `16px` und `2em` gleich `32px`. Wenn Sie beispielsweise eine `font-size` von 20px auf dem `<body>`-Element festlegen würden, dann wäre `1em` auf den `<p>`-Elementen stattdessen gleich `20px` und `2em` wäre gleich `40px`.

Um den `em`-Wert für einen gewünschten Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Angenommen, die `font-size` des `<body>` der Seite ist auf `16px` gesetzt. Wenn die gewünschte Schriftgröße `12px` beträgt, sollten Sie `0.75em` angeben (da 12/16 = 0.75). Ähnlich, wenn Sie eine Schriftgröße von `10px` wünschen, dann geben Sie `0.625em` an (10/16 = 0.625); für `22px` geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da es seine Länge automatisch relativ zu der Schrift anpasst, die der Leser zu verwenden wählt.

Ein wichtiger Fakt: em-Werte addieren sich. Nehmen Sie das folgende HTML und CSS:

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

Angenommen, dass die Standardschriftgröße des Browsers 16px ist, würden die Wörter "outer" bei 25.6px gerendert, aber das Wort "inner" würde bei 40.96px gerendert. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em ist, was relativ zur `font-size` seines Elternteils ist, das wiederum relativ zur `font-size` seines Elternteils ist. Dies wird oft als **Kaskadieren** bezeichnet.

### Rems

`rem`-Werte wurden erfunden, um das Kaskadieren-Problem zu umgehen. `rem`-Werte sind relativ zum Wurzel `html` Element, nicht zum Elternelement. Mit anderen Worten, sie lassen Sie eine Schriftgröße relativ auf eine Weise spezifizieren, die nicht von der Größe des Elternelements beeinflusst wird, wodurch das Kaskadieren vermieden wird.

Das folgende CSS ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass die Einheit in `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Dann wenden wir dieses CSS auf dasselbe HTML an, das so aussieht:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter "outer inner outer" alle bei 25.6px angezeigt (angenommen, dass die `font-size` des Browsers auf dem Standardwert von 16px belassen wurde).

### Ex

Ähnlich der `em` Einheit wird eine `font-size` eines Elements, die mit der `ex` Einheit festgelegt wird, berechnet oder dynamisch erstellt. Sie verhält sich auf genau die gleiche Weise, mit dem Unterschied, dass beim Festlegen der `font-size`-Eigenschaft mit `ex` Einheiten die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://www.w3.org/TR/css-fonts-3/#first-available-font) verwendet wird. Der Zahlenwert multipliziert die vom Element ererbte `font-size` und die `font-size` kaskadiert relativ.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung der [schriftgrößenrelativen Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgrößen einstellen

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
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
