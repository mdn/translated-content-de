---
title: "-moz-force-broken-image-icon"
slug: Web/CSS/-moz-force-broken-image-icon
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header}}

Die **`-moz-force-broken-image-icon`** erweiterte CSS-Eigenschaft kann verwendet werden, um das Symbol für ein defektes Bild anzuzeigen, selbst wenn ein defektes Bild ein `alt`-Attribut besitzt.

## Syntax

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bedeutet, dass das Symbol für ein defektes Bild angezeigt wird, auch wenn das Bild ein [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut hat. Wenn der Wert `0` verwendet wird, verhält sich das Bild wie üblich und zeigt nur das `alt`-Attribut an.

> [!NOTE]
> Selbst wenn der Wert auf `1` gesetzt ist, wird das `alt`-Attribut weiterhin angezeigt, zusammen mit dem Symbol für das defekte Bild.

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
> Der Alternativtext (`alt`) ist möglicherweise nicht sichtbar, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist und das Bild keine (oder zu geringe) `height`- oder `width`-Eigenschaften hat.

## Hinweise

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein korrektes `alt`-Attribut verwendet werden.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox-Fehler 58646](https://bugzil.la/58646)
