---
title: "-moz-force-broken-image-icon"
slug: Web/CSS/-moz-force-broken-image-icon
l10n:
  sourceCommit: f1da297bba560dd1382c4950bbae32bc6e6edd64
---

{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header}}

Die erweiterte CSS-Eigenschaft **`-moz-force-broken-image-icon`** kann verwendet werden, um das Symbol für ein defektes Bild anzuzeigen, auch wenn ein defektes Bild ein `alt`-Attribut hat.

## Syntax

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bedeutet, dass das Symbol für ein defektes Bild angezeigt wird, selbst wenn das Bild ein [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut hat. Wenn der Wert `0` verwendet wird, wird das Bild wie üblich behandelt und zeigt nur das `alt`-Attribut an.

> [!NOTE]
> Auch wenn der Wert auf `1` gesetzt ist, wird das `alt`-Attribut weiterhin angezeigt, zusammen mit dem Symbol für das defekte Bild.

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
> Der Alt-Text ist möglicherweise nicht sichtbar, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist und das Bild keine (oder zu kleine) `Höhe` oder `Breite` hat.

## Anmerkungen

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein richtiges `alt`-Attribut verwendet werden.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox bug 58646](https://bugzil.la/58646)
