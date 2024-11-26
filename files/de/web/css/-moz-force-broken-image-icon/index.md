---
title: "-moz-force-broken-image-icon"
slug: Web/CSS/-moz-force-broken-image-icon
l10n:
  sourceCommit: db9ccd6c2746b3f34b0951d8e59ea1c581312d9d
---

{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header}}

Die erweiterte CSS-Eigenschaft **`-moz-force-broken-image-icon`** kann verwendet werden, um das Symbol für ein beschädigtes Bild anzuzeigen, selbst wenn ein beschädigtes Bild ein `alt`-Attribut hat.

## Syntax

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bedeutet, dass das Symbol für ein beschädigtes Bild angezeigt wird, auch wenn das Bild ein [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut hat. Wenn der Wert `0` verwendet wird, verhält sich das Bild wie üblich und zeigt nur das `alt`-Attribut an.

> [!NOTE]
> Selbst wenn der Wert auf `1` gesetzt ist, wird das `alt`-Attribut weiterhin neben dem Symbol für das beschädigte Bild angezeigt.

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
> Es sei denn, das Bild hat eine spezifizierte Höhe und Breite, wird das `alt`-Attribut nicht angezeigt, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist.

## Hinweise

- Diese Eigenschaft funktioniert nur in Gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein korrektes `alt`-Attribut verwendet werden.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Fehler 58646](https://bugzil.la/58646)
