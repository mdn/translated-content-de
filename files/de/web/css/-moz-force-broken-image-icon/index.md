---
title: "-moz-force-broken-image-icon"
slug: Web/CSS/-moz-force-broken-image-icon
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header}}

Die **`-moz-force-broken-image-icon`** erweiterte CSS-Eigenschaft kann verwendet werden, um das Symbol für ein defektes Bild auch dann anzuzeigen, wenn ein defektes Bild ein `alt`-Attribut hat.

## Syntax

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bedeutet, dass das Symbol für ein defektes Bild auch dann angezeigt wird, wenn das Bild ein [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut hat. Bei einem Wert von `0` verhält sich das Bild wie üblich und zeigt nur das `alt`-Attribut an.

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
> Sofern das Bild nicht über eine festgelegte Höhe und Breite verfügt, wird das Symbol für das defekte Bild nicht angezeigt, und das `alt`-Attribut wird ebenfalls ausgeblendet, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist.

## Anmerkungen

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein korrektes `alt`-Attribut verwendet werden.

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Fehler 58646](https://bugzil.la/58646)
