---
title: -moz-force-broken-image-icon
slug: Web/CSS/-moz-force-broken-image-icon
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{Deprecated_Header}}

Die erweiterte CSS-Eigenschaft **`-moz-force-broken-image-icon`** kann verwendet werden, um das Symbol für ein defektes Bild anzuzeigen, selbst wenn ein defektes Bild ein `alt`-Attribut hat.

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
  - : Ein Wert von `1` bedeutet, dass das Symbol für das defekte Bild angezeigt wird, auch wenn das Bild ein [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut hat. Wenn der Wert `0` verwendet wird, verhält sich das Bild wie gewohnt und zeigt nur das `alt`-Attribut an.

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
> Der Alt-Text ist möglicherweise nicht sichtbar, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist und das Bild keine (oder zu geringe) `height` oder `width` hat.

## Anmerkungen

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein korrektes `alt`-Attribut verwendet werden.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox bug 58646](https://bugzil.la/58646)
