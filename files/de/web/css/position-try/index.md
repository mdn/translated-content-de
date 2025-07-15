---
title: position-try
slug: Web/CSS/position-try
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`position-try`** [CSS](/de/docs/Web/CSS)-Eigenschaft ist eine Kurzform, die den Eigenschaften {{cssxref("position-try-order")}} und {{cssxref("position-try-fallbacks")}} entspricht.

## Bestandeigenschaften

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

Siehe {{cssxref("position-try-order")}} und {{cssxref("position-try-fallbacks")}} für Wertbeschreibungen.

Die `position-try`-Kurzform kann Werte für `position-try-fallbacks`, oder `position-try-order` und `position-try-fallbacks` in dieser Reihenfolge spezifizieren. Wenn `position-try-order` ausgelassen wird, wird es auf den Initialwert der Eigenschaft gesetzt, der `normal` ist, was bedeutet, dass die Optionen für die Rückfallpositionierung in der Reihenfolge ausprobiert werden, in der sie in der Eigenschaft erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try`

Dieses Demo zeigt die Wirkung von `position-try`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die zu einem Anker und einem ankerpositionierten Element werden.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Im CSS erhält der Anker einen {{cssxref("anchor-name")}} und hat einen {{cssxref("position")}}-Wert von `absolute` darauf gesetzt. Wir positionieren ihn im oberen Teil des Viewports mit {{cssxref("top")}}- und {{cssxref("left")}}-Werten:

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
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 45%;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
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

Wir fügen dann eine benutzerdefinierte Positionsoption — `--custom-bottom` — hinzu, die das Element unter dem Anker positioniert und ihm einen entsprechenden Abstand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und setzen dann einen `position-try`-Wert darauf, der ihm eine `position-try-order` von `most-height` und eine `position-try-fallbacks`-Liste gibt, die nur unsere benutzerdefinierte Rückfalloption enthält:

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try: most-height --custom-bottom;
}
```

#### Ergebnis

Das Element erscheint unter seinem Anker, obwohl es zunächst über diesem positioniert wurde. Dies geschieht, weil unter dem Anker mehr vertikaler Platz vorhanden ist als darüber. Die `most-height`-Versuchsreihenfolge bewirkt, dass die `--custom-bottom`-Rückfalloption angewendet wird, wodurch das positionierte Element an der Stelle platziert wird, die seinem Containerblock die größte Höhe gibt.

{{ EmbedLiveSample("Basic `position-try` usage", "100%", "300") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- Die {{cssxref("@position-try")}}-At-Regel
- Der [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Rückfalloptionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
