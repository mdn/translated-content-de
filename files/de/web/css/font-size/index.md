---
title: font-size
slug: Web/CSS/font-size
l10n:
  sourceCommit: 9380313d8884045dbb31d390a7104d5dbeac2e20
---

{{CSSRef}}

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schriftart fest. Das Ändern der Schriftgröße aktualisiert auch die Größen der schriftgrößen-relativen {{cssxref("&lt;length&gt;")}}-Einheiten, wie `em`, `ex` und so weiter.

{{EmbedInteractiveExample("pages/css/font-size.html")}}

## Syntax

```css
/* <absolute-size> Werte */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* <relative-size> Werte */
font-size: smaller;
font-size: larger;

/* <length> Werte */
font-size: 12px;
font-size: 0.8em;

/* <percentage> Werte */
font-size: 80%;

/* math Wert */
font-size: math;

/* Globale Werte */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: revert-layer;
font-size: unset;
```

### Werte

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`

  - : [Absolute-Größen](/de/docs/Web/CSS/absolute-size) Stichworte, basierend auf der Standard-Schriftgröße des Benutzers (die `medium` ist).

- `larger`, `smaller`

  - : [Relative-Größen](/de/docs/Web/CSS/relative-size) Stichworte. Die Schrift wird größer oder kleiner relativ zur Schriftgröße des Elternelements, ungefähr im Verhältnis, das verwendet wird, um die absoluten Größen oben zu trennen.

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Bei den meisten font-relativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Für Schrift-relative Einheiten, die auf der Wurzel basieren (wie `rem`), ist die Schriftgröße relativ zur Größe der Schriftart, die vom {{HTMLElement("html")}} (Wurzel-)Element verwendet wird.

- {{cssxref("&lt;percentage&gt;")}}

  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Um die Zugänglichkeit zu maximieren, ist es generell am besten, Werte zu verwenden, die relativ zur Standard-Schriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size`-Eigenschaft für Mathematikelemente relativ zur `font-size` des umschließenden Elternteils bestimmt wird.
    Weitere Informationen finden Sie in der Eigenschaft [math-depth](/de/docs/Web/CSS/math-depth).

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße zu spezifizieren, einschließlich Stichworten oder numerischen Werten für Pixel oder ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der jeweiligen Webseite.

### Stichworte

Stichworte sind eine gute Möglichkeit, die Größe von Schriften im Web festzulegen. Durch das Setzen einer Stichwortschriftgröße auf das {{HTMLElement("body")}}-Element können Sie überall sonst auf der Seite relative Schriftgrößen festlegen, was Ihnen die Möglichkeit gibt, die Schrift auf der gesamten Seite leicht zu vergrößern oder zu verkleinern.

### Pixel

Die Schriftgröße in Pixelwerten (`px`) festzulegen, ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist ein betriebssystemunabhängiger und browserübergreifender Weg, um den Browsern wortwörtlich zu sagen, sie sollen die Buchstaben genau in der Höhe der angegebenen Pixel rendern. Die Ergebnisse können leicht zwischen den Browsern variieren, da sie möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch in Kombination verwendet werden. Wenn beispielsweise ein Elternelement auf `16px` gesetzt ist und sein Kindelement auf `larger`, wird das Kindelement auf der Seite größer als das Elternelement angezeigt.

> [!NOTE]
> Das Definieren von Schriftgrößen in `px` ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer die Schriftgröße in einigen Browsern nicht ändern kann. Beispielsweise möchten Benutzer mit eingeschränktem Sehvermögen die Schriftgröße möglicherweise viel größer einstellen als die, die von einem Webdesigner gewählt wurde. Vermeiden Sie die Verwendung von `px` für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em`-Wertes erzeugt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em`-Einheit von der Breite eines großen "M" in einem bestimmten Schriftbild abgeleitet). Der numerische Wert fungiert als Multiplikator der `font-size`-Eigenschaft des Elements, auf dem er verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße von `<p>`-Elementen das Doppelte der berechneten `font-size` sein, die von `<p>`-Elementen geerbt wird. Im weiteren Sinne entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf dem sie verwendet wird.

Wenn für keinen der Vorfahren der `<p>`s eine `font-size` gesetzt wurde, entspricht `1em` der Standard-Schriftgröße des Browsers, die normalerweise `16px` beträgt. Folglich ist standardmäßig `1em` gleich `16px` und `2em` ist gleich `32px`. Wenn Sie beispielsweise eine `font-size` von 20px auf das `<body>`-Element setzen, würde `1em` auf den `<p>`-Elementen stattdessen 20px entsprechen und `2em` 40px entsprechen.

Um das `em`-Äquivalent für jeden erforderlichen Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = gewünschter Elemente-Pixelwert / Schriftgröße des Elternelements in Pixel
```

Wenn beispielsweise die `font-size` des `<body>` der Seite auf `16px` gesetzt ist und die gewünschte Schriftgröße `12px` beträgt, sollten Sie `0.75em` angeben, da 12/16 = 0.75 ist. Ebenso, wenn Sie eine Schriftgröße von `10px` wünschen, dann geben Sie `0.625em` an (10/16 = 0.625); für `22px`, geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da es seine Länge automatisch relativ zur Schrift anpasst, die der Leser zu verwenden wählt.

Ein wichtiger Punkt, den man beachten sollte: em-Werte kumulieren sich. Nehmen Sie folgendes HTML und CSS:

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
  <span>Äußeres <span>inneres</span> äußeres</span>
</div>
```

Das Ergebnis ist:

{{EmbedLiveSample("Ems", 400, 100)}}

Angenommen, die Standard-`font-size` des Browsers beträgt 16px, dann werden die Wörter "äußeres" bei 25.6px gerendert, aber das Wort "inneres" wird bei 40.96px gerendert. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` seines Elternteils ist, die wiederum relativ zur `font-size` ihres Elternteils ist. Das wird oft als **Kumulieren** bezeichnet.

### Rems

`rem`-Werte wurden erfunden, um das Kumulieren-Problem zu umgehen. `rem`-Werte sind relativ zum Wurzel-`html`-Element, nicht zum übergeordneten Element. Mit anderen Worten, es ermöglicht Ihnen, eine Schriftgröße in relativer Weise anzugeben, ohne von der Größe des Elternteils beeinflusst zu werden, wodurch das Kumulieren eliminiert wird.

Der folgende CSS-Code ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass die Einheit in `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Dann wenden wir diesen CSS auf das gleiche HTML an, was so aussieht:

```html
<span>Äußeres <span>inneres</span> äußeres</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter "äußeres inneres äußeres" alle bei 25.6px angezeigt (vorausgesetzt, dass die `font-size` des Browsers auf den Standardwert von 16px belassen wurde).

### Ex

Wie die `em`-Einheit wird die `font-size` eines Elements unter Verwendung der `ex`-Einheit berechnet oder dynamisch. Sie verhält sich genau auf die gleiche Weise, außer dass die `font-size` des Elements, wenn die `ex`-Einheiten verwendet werden, gleich der x-Höhe der [ersten verfügbaren Schriftart](https://www.w3.org/TR/css-fonts-3/#first-available-font) auf der Seite ist. Der numerische Wert multipliziert die geerbte `font-size` des Elements und die `font-size` kumuliert sich relativ.

Sehen Sie das W3C Editor's Draft für eine detailliertere Beschreibung der [schriftbezogenen Längeseinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

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
<h1 class="small">Kleines H1</h1>
<h1 class="larger">Größeres H1</h1>
<h1 class="point">24 Punkt H1</h1>
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
- [Grundlegende Text- und Schriftformatierung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
