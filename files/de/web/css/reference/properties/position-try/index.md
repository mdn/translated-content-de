---
title: CSS-Eigenschaft `position-try`
short-title: position-try
slug: Web/CSS/Reference/Properties/position-try
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`position-try`** entspricht den Eigenschaften {{cssxref("position-try-order")}} und {{cssxref("position-try-fallbacks")}}.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("position-try-order")}}
- {{cssxref("position-try-fallbacks")}}

## Syntax

```css
/* position-try-fallbacks only */
position-try: normal flip-block;
position-try: top;
position-try: --custom-try-option;
position-try: flip-block flip-inline;
position-try: top, right, bottom;
position-try: --custom-try-option1, --custom-try-option2;
position-try:
  normal flip-block,
  right,
  --custom-try-option;

/* position-try-order and position-try-fallbacks */
position-try: normal none;
position-try:
  most-width --custom-try-option1,
  --custom-try-option2;
position-try:
  most-height flip-block,
  right,
  --custom-try-option;

/* Global values */
position-try: inherit;
position-try: initial;
position-try: revert;
position-try: revert-layer;
position-try: unset;
```

### Werte

Diese Eigenschaft wird als einer oder beide der folgenden Werte angegeben:

- {{cssxref("position-try-order")}} {{optional_inline}}
  - : Ein Schlüsselwort, das die Prioritätsreihenfolge der position-try-Fallback-Optionen angibt. Wenn es weggelassen wird, ist der Standardwert `normal`.
- {{cssxref("position-try-fallbacks")}}
  - : Das Schlüsselwort `none` oder eine durch Kommas getrennte Liste von `<position-area>`-Werten, `<try-tactic>`-Optionen und benutzerdefinierten Positionen.

## Beschreibung

Die Kurzform-Eigenschaft `position-try` kann verwendet werden, um die Eigenschaften {{cssxref("position-try-order")}} und {{cssxref("position-try-fallbacks")}} in einer einzelnen Deklaration anzugeben. Sie legt `position-try-order` und `position-try-fallbacks` in dieser Reihenfolge fest. Wenn die Komponente `position-try-order` weggelassen wird, ist ihr Standardwert `normal`.

`position-try-fallbacks` ist eine durch Kommas getrennte Liste mit einer oder mehreren alternativen position-try-Fallback-Optionen für ankerausgerichtete Elemente, die relativ zu ihren zugehörigen Ankerelementen platziert werden sollen. Wenn das Element andernfalls seinen durch `inset` modifizierten Containing Block überlaufen würde, versucht der Browser, das positionierte Element in diesen unterschiedlichen Fallback-Positionen in der angegebenen Reihenfolge zu platzieren, bis er einen Wert findet, der verhindert, dass es seinen Container oder den Viewport überläuft.

`position-try-order` priorisiert die auf ein ankerausgerichtetes Element angewendete `position-try-fallbacks`-Option beim ersten Rendern danach, welche Option in der jeweiligen Richtung den meisten Platz um das Element herum schafft. Wenn sie weggelassen wird, wird sie auf den Anfangswert der Eigenschaft gesetzt, nämlich `normal`. Das bedeutet, dass die position-try-Fallback-Optionen in der Reihenfolge ausprobiert werden, in der sie in der Eigenschaft erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try`

Diese Demo zeigt die Wirkung von `position-try`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die zu einem Anker und einem ankerausgerichteten Element werden.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Im CSS wird dem Anker ein {{cssxref("anchor-name")}} zugewiesen, und für ihn wird ein {{cssxref("position")}}-Wert von `absolute` festgelegt. Wir positionieren ihn mithilfe der Werte {{cssxref("top")}} und {{cssxref("left")}} in der oberen Hälfte des Viewports:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

Anschließend fügen wir eine benutzerdefinierte Positionsoption — `--custom-bottom` — hinzu, die das Element unterhalb des Ankers positioniert und ihm einen passenden Abstand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Zunächst positionieren wir das Element oberhalb seines Ankers und setzen dann einen `position-try`-Wert darauf, der ihm ein `position-try-order` von `most-height` sowie eine `position-try-fallbacks`-Liste gibt, die nur unsere benutzerdefinierte Fallback-Option enthält:

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try: most-height --custom-bottom;
}
```

#### Ergebnis

Das Element erscheint unterhalb seines Ankers, obwohl es zunächst oberhalb davon positioniert wird. Dies geschieht, weil unterhalb des Ankers mehr vertikaler Platz vorhanden ist als oberhalb. Die Try-Reihenfolge `most-height` bewirkt, dass die Try-Fallback-Option `--custom-bottom` angewendet wird, wodurch das positionierte Element an der Position platziert wird, die seinem Containing Block die größte Höhe bietet.

{{ EmbedLiveSample("Basic `position-try` usage", "100%", "300") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- Die At-Regel {{cssxref("@position-try")}}
- Der Wert [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
