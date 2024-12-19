---
title: font-optical-sizing
slug: Web/CSS/font-optical-sizing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`font-optical-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Textdarstellung für die Ansicht in verschiedenen Größen optimiert wird.

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
  - : Der Browser wird die Form der Glyphen nicht für eine optimale Ansicht ändern.
- auto
  - : Der Browser wird die Form der Glyphen für eine optimale Ansicht ändern.

## Beschreibung

Optische Größenanpassung ist standardmäßig für Schriftarten aktiviert, die eine Achse für optische Größenanpassung haben. Die Achse für optische Größenanpassung wird durch `opsz` in {{cssxref("font-variation-settings")}} dargestellt.

Bei Verwendung von optischer Größenanpassung werden kleine Textgrößen oft mit dickeren Strichen und größeren Serifen gerendert, während größerer Text oft feiner gerendert wird, mit mehr Kontrast zwischen dickeren und dünneren Strichen.

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
> Die oben erwähnte Schriftart — die optische Größenanpassung umfasst und frei lizenziert ist — eignet sich gut zum Testen. Sie können sie [auf GitHub herunterladen](https://github.com/googlefonts/amstelvar/releases).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
