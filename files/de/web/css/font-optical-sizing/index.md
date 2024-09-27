---
title: font-optical-sizing
slug: Web/CSS/font-optical-sizing
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die CSS-Eigenschaft **`font-optical-sizing`** legt fest, ob die Textrendering für die Betrachtung in verschiedenen Größen optimiert wird.

{{EmbedInteractiveExample("pages/css/font-optical-sizing.html")}}

## Syntax

```css
/* keyword values */
font-optical-sizing: none;
font-optical-sizing: auto; /* default */

/* Global values */
font-optical-sizing: inherit;
font-optical-sizing: initial;
font-optical-sizing: revert;
font-optical-sizing: revert-layer;
font-optical-sizing: unset;
```

### Werte

- none
  - : Der Browser wird die Form der Glyphen nicht für eine optimale Darstellung ändern.
- auto
  - : Der Browser wird die Form der Glyphen für eine optimale Darstellung ändern.

## Beschreibung

Optische Größenanpassung ist standardmäßig für Schriftarten aktiviert, die eine Achse für optische Größenvariationen haben. Diese Achse wird durch `opsz` in {{cssxref("font-variation-settings")}} dargestellt.

Bei der Verwendung optischer Größenanpassung werden kleine Textgrößen oft mit dickeren Strichen und größeren Serifen dargestellt, während größere Texte oft filigraner mit mehr Kontrast zwischen dickeren und dünneren Strichen dargestellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der optischen Größenanpassung

```html
<p class="optical-sizing">
  This paragraph is optically sized. This is the default across browsers.
</p>

<p class="no-optical-sizing">
  This paragraph is not optically sized. You should see a difference in
  supporting browsers.
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
> Die oben referenzierte Schriftart — die optische Größenanpassung beinhaltet und frei lizenziert ist — eignet sich gut zum Testen. Sie können [sie bei GitHub herunterladen](https://github.com/googlefonts/amstelvar/releases).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
