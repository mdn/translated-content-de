---
title: -moz-force-broken-image-icon
slug: Web/CSS/-moz-force-broken-image-icon
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header}}

Die erweiterte CSS-Eigenschaft **`-moz-force-broken-image-icon`** kann verwendet werden, um das Symbol für defekte Bilder anzuzeigen, auch wenn ein defektes Bild ein `alt`-Attribut besitzt.

## Syntax

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bedeutet, dass das Symbol für defekte Bilder angezeigt wird, auch wenn das Bild ein [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut hat. Wenn der Wert `0` verwendet wird, verhält sich das Bild wie gewohnt und zeigt nur das `alt`-Attribut an.

> [!NOTE]
> Selbst wenn der Wert auf `1` gesetzt ist, wird das `alt`-Attribut weiterhin angezeigt, zusammen mit dem Symbol für defekte Bilder.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-moz-force-broken-image-icon = {{cssxref("&lt;integer&gt;")}}
```

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
> Der Alternativtext (alt) ist möglicherweise nicht sichtbar, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist und das Bild keine (oder zu geringe) `height` oder `width` festgelegt hat.

## Anmerkungen

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein korrektes `alt`-Attribut verwendet werden.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox-Bug 58646](https://bugzil.la/58646)
