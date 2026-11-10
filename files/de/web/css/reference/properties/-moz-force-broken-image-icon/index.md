---
title: "`-moz-force-broken-image-icon` CSS property"
short-title: -moz-force-broken-image-icon
slug: Web/CSS/Reference/Properties/-moz-force-broken-image-icon
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

{{Non-standard_header}}

Mit der erweiterten CSS-Eigenschaft **`-moz-force-broken-image-icon`** kann erzwungen werden, dass das Symbol für ein beschädigtes Bild angezeigt wird, auch wenn das Bild ein `alt`-Attribut hat.

Die Verwendung dieser Eigenschaft wird nicht empfohlen. Verwenden Sie stattdessen ein geeignetes `alt`-Attribut.

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

Für diese Eigenschaft wird der folgende Wert angegeben:

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bewirkt, dass das Symbol für ein beschädigtes Bild angezeigt wird, auch wenn das Bild ein [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut hat. Bei einem Wert von `0` verhält sich das Bild wie üblich und zeigt nur den Wert des `alt`-Attributs an.

> [!NOTE]
> Auch wenn der Wert auf `1` gesetzt ist, wird der Wert des `alt`-Attributs neben dem Symbol für ein beschädigtes Bild angezeigt.

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
> Der Alternativtext ist möglicherweise nicht sichtbar, wenn `-moz-force-broken-image-icon` auf `1` gesetzt ist und für das Bild keine oder zu kleine Werte für `height` oder `width` festgelegt sind.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox-Bug 58646](https://bugzil.la/58646)
