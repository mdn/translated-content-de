---
title: font-optical-sizing
slug: Web/CSS/font-optical-sizing
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-optical-sizing`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob die Textdarstellung für die Anzeige bei verschiedenen Größen optimiert wird.

{{EmbedInteractiveExample("pages/css/font-optical-sizing.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
font-optical-sizing: none;
font-optical-sizing: auto; /* Standardwert */

/* Globale Werte */
font-optical-sizing: inherit;
font-optical-sizing: initial;
font-optical-sizing: revert;
font-optical-sizing: revert-layer;
font-optical-sizing: unset;
```

### Werte

- none
  - : Der Browser modifiziert die Form der Glyphen nicht für eine optimale Darstellung.
- auto
  - : Der Browser modifiziert die Form der Glyphen für eine optimale Darstellung.

## Beschreibung

Optische Größeneinstellung ist standardmäßig für Schriftarten aktiviert, die eine Variation der optischen Größe aufweisen. Die optische Größenvariationsachse wird durch `opsz` in {{cssxref("font-variation-settings")}} dargestellt.

Wenn die optische Größeneinstellung verwendet wird, werden kleine Textgrößen oft mit dickeren Strichen und größeren Serifen dargestellt, während größere Texte oft feiner mit mehr Kontrast zwischen dickeren und dünneren Strichen dargestellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der optischen Größeneinstellung

```html
<p class="optical-sizing">
  Dieser Absatz ist optisch skaliert. Das ist der Standard in allen Browsern.
</p>

<p class="no-optical-sizing">
  Dieser Absatz ist nicht optisch skaliert. Sie sollten einen Unterschied in unterstützenden Browsern sehen.
</p>
```

```css
@font-face {
  src: url("AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

p {
  font-size: 36px;
  font-family: Amstelvar;
}

.no-optical-sizing {
  font-optical-sizing: none;
}
```

> [!NOTE]
> Die oben angegebene Schriftart — die die optische Größeneinstellung enthält und frei lizenziert ist — eignet sich gut für Tests. Sie können sie [auf GitHub herunterladen](https://github.com/googlefonts/amstelvar/releases).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [Grundlegende Text- und Schriftstilgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
