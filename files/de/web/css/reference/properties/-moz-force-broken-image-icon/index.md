---
title: "`-moz-force-broken-image-icon` CSS property"
short-title: -moz-force-broken-image-icon
slug: Web/CSS/Reference/Properties/-moz-force-broken-image-icon
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

Die **`-moz-force-broken-image-icon`** erweiterte CSS-Eigenschaft kann verwendet werden, um das Symbol für ein defektes Bild auch dann anzuzeigen, wenn ein defektes Bild ein `alt`-Attribut hat.

## Syntax

```css
-moz-force-broken-image-icon: 1;
-moz-force-broken-image-icon: 0;

/* Global values */
-moz-force-broken-image-icon: inherit;
-moz-force-broken-image-icon: initial;
-moz-force-broken-image-icon: revert;
-moz-force-broken-image-icon: revert-layer;
-moz-force-broken-image-icon: unset;
```

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bedeutet, dass das Symbol für ein defektes Bild angezeigt wird, selbst wenn das Bild ein [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut hat. Wird der Wert `0` verwendet, verhält sich das Bild wie üblich und zeigt nur das `alt`-Attribut an.

> [!NOTE]
> Selbst wenn der Wert auf `1` gesetzt ist, wird das `alt`-Attribut weiterhin zusammen mit dem Symbol für das defekte Bild angezeigt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-moz-force-broken-image-icon = <integer>`)}}

## Beispiele

### HTML

```html
<img src="/broken/image/link.png" alt="Broken image link" />
```

### CSS

```css
img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### Ergebnis

{{EmbedLiveSample('Examples','125','125')}}

> [!NOTE]
> Der Alt-Text ist möglicherweise nicht sichtbar, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist und das Bild keine (oder zu kleine) `Höhe` oder `Breite` hat.

## Anmerkungen

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein korrektes `alt`-Attribut verwendet werden.

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox-Fehler 58646](https://bugzil.la/58646)
