---
title: position-try
slug: Web/CSS/Reference/Properties/position-try
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`position-try`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine Kurzform, die den {{cssxref("position-try-order")}} und {{cssxref("position-try-fallbacks")}} Eigenschaften entspricht.

## Zu den Bestandteilen gehörende Eigenschaften

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

Die `position-try` Kurzform kann Werte für `position-try-fallbacks`, oder `position-try-order` und `position-try-fallbacks` in dieser Reihenfolge spezifizieren. Wenn `position-try-order` weggelassen wird, wird es auf den Initialwert der Eigenschaft gesetzt, was `normal` ist, d.h. die position-try Fallback-Optionen werden in der Reihenfolge ausprobiert, in der sie in der Eigenschaft erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `position-try`

Dieses Demo zeigt die Wirkung von `position-try`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankerpositionierten Element werden.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
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

Wir fügen dann eine benutzerdefinierte Positionsoption — `--custom-bottom` — hinzu, die das Element unter dem Anker positioniert und ihm einen angemessenen Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst oberhalb seines Ankers und setzen dann einen `position-try` Wert darauf, der ihm einen `position-try-order` von `most-height` gibt und eine `position-try-fallbacks` Liste, die nur unsere benutzerdefinierte Fallback-Option enthält:

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

Das Element erscheint unterhalb seines Ankers, obwohl es ursprünglich oberhalb davon positioniert ist. Dies geschieht, weil es unterhalb des Ankers mehr vertikalen Platz gibt als oberhalb. Die `most-height` Versuchsreihenfolge führt dazu, dass die `--custom-bottom` Fallback-Option angewendet wird, wodurch das positionierte Element in die Position gebracht wird, die seinem umgebenden Block die meiste Höhe gibt.

{{ EmbedLiveSample("Grundlegende Nutzung von `position-try`", "100%", "300") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- Die {{cssxref("@position-try")}} At-Regel
- Der [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
