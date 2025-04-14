---
title: -moz-force-broken-image-icon
slug: Web/CSS/-moz-force-broken-image-icon
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header}}

Die erweiterte CSS-Eigenschaft **`-moz-force-broken-image-icon`** kann verwendet werden, um das defekte Bildsymbol auch dann anzuzeigen, wenn ein defektes Bild ein `alt`-Attribut hat.

## Syntax

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bedeutet, dass das defekte Bildsymbol angezeigt wird, selbst wenn das Bild ein [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut hat. Wenn der Wert `0` verwendet wird, verhält sich das Bild wie gewohnt und zeigt nur das `alt`-Attribut an.

> [!NOTE]
> Auch wenn der Wert auf `1` gesetzt ist, wird das `alt`-Attribut weiterhin angezeigt, neben dem defekten Bildsymbol.

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
> Der alternative Text (`alt`) ist möglicherweise nicht sichtbar, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist und das Bild keine (oder zu kleine) `height`- oder `width`-Angaben hat.

## Anmerkungen

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein ordnungsgemäßes `alt`-Attribut verwendet werden.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox bug 58646](https://bugzil.la/58646)
