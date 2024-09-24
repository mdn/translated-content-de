---
title: "-moz-force-broken-image-icon"
slug: Web/CSS/-moz-force-broken-image-icon
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header}}

Die erweiterte CSS-Eigenschaft **`-moz-force-broken-image-icon`** kann verwendet werden, um das defekte Bildsymbol auch dann anzuzeigen, wenn ein defektes Bild ein `alt`-Attribut hat.

## Syntax

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bedeutet, dass das defekte Bildsymbol auch dann angezeigt wird, wenn das Bild ein [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut hat. Wenn der Wert `0` verwendet wird, verhält sich das Bild wie üblich und zeigt nur das `alt`-Attribut an.

> [!NOTE]
> Selbst wenn der Wert auf `1` gesetzt ist, wird das `alt`-Attribut weiterhin zusammen mit dem defekten Bildsymbol angezeigt.

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
> Wenn das Bild keine spezifierte Höhe und Breite hat, wird das defekte Bildsymbol nicht angezeigt und das alt-Attribut wird ebenfalls ausgeblendet, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist.

## Anmerkungen

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein richtiges `alt`-Attribut verwendet werden.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox-Fehler 58646](https://bugzil.la/58646)
