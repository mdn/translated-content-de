---
title: position-try
slug: Web/CSS/position-try
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`position-try`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine Kurzform, die den {{cssxref("position-try-order")}} und {{cssxref("position-try-fallbacks")}} Eigenschaften entspricht.

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("position-try-order")}}
- {{cssxref("position-try-fallbacks")}}

## Syntax

```css
/* Nur position-try-fallbacks */
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

/* position-try-order und position-try-fallbacks */
position-try: normal none;
position-try:
  most-width --custom-try-option1,
  --custom-try-option2;
position-try:
  most-height flip-block,
  right,
  --custom-try-option;

/* Globale Werte */
position-try: inherit;
position-try: initial;
position-try: revert;
position-try: revert-layer;
position-try: unset;
```

### Werte

Siehe {{cssxref("position-try-order")}} und {{cssxref("position-try-fallbacks")}} für Wertbeschreibungen.

Die `position-try` Kurzform kann Werte für `position-try-fallbacks` oder `position-try-order` und `position-try-fallbacks` in dieser Reihenfolge spezifizieren. Wenn `position-try-order` weggelassen wird, wird es auf den initialen Wert der Eigenschaft gesetzt, was `normal` ist, was bedeutet, dass die position-try Fallback-Optionen in der Reihenfolge ausprobiert werden, in der sie in der Eigenschaft erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try`

Dieses Demo zeigt die Wirkung von `position-try`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankerpositionierten Element werden.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Dies ist ein Informationskasten.</p>
</div>
```

#### CSS

Im CSS wird dem Anker ein {{cssxref("anchor-name")}} gegeben und ein {{cssxref("position")}} Wert von `absolute` darauf gesetzt. Wir positionieren es in der oberen Hälfte des Viewports mit {{cssxref("top")}} und {{cssxref("left")}} Werten:

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

Wir fügen dann eine benutzerdefinierte Positionsoption — `--custom-bottom` — ein, die das Element unter dem Anker positioniert und ihm einen passenden Abstand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst oberhalb seines Ankers und setzen dann einen `position-try` Wert darauf, der ihm eine `position-try-order` von `most-height` gibt und eine `position-try-fallbacks` Liste enthält, die nur unsere benutzerdefinierte Fallback-Option umfasst:

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

Das Element erscheint unter seinem Anker, obwohl es zunächst darüber positioniert ist. Dies geschieht, weil unter dem Anker mehr vertikaler Platz vorhanden ist als darüber. Die `most-height` Try-Order bewirkt, dass die `--custom-bottom` Try-Fallback-Option angewendet wird, die das positionierte Element an der Position platziert, die seinem enthaltenen Block die meiste Höhe gibt.

{{ EmbedLiveSample("Basic `position-try` usage", "100%", "300") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- Die {{cssxref("@position-try")}} At-Regel
- Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert
- [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Umgang mit Überlauf: Try-Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
