---
title: -moz-force-broken-image-icon
slug: Web/CSS/Reference/Properties/-moz-force-broken-image-icon
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
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
  - : Ein Wert von `1` bedeutet, dass das Symbol für ein defektes Bild angezeigt wird, auch wenn das Bild ein [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut hat. Wenn der Wert `0` verwendet wird, verhält sich das Bild wie üblich und zeigt nur das `alt`-Attribut an.

> [!NOTE]
> Selbst wenn der Wert auf `1` gesetzt ist, wird das `alt`-Attribut weiterhin neben dem Symbol für ein defektes Bild angezeigt.

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
> Der Alternativtext kann möglicherweise nicht sichtbar sein, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist und das Bild keine (oder zu geringe) `Höhe` oder `Breite` hat.

## Hinweise

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein korrektes `alt`-Attribut verwendet werden.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox-Bug 58646](https://bugzil.la/58646)
