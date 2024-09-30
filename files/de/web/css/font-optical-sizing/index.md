---
title: font-optical-sizing
slug: Web/CSS/font-optical-sizing
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-optical-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Textrendering für die Darstellung in unterschiedlichen Größen optimiert wird.

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

Optische Anpassung ist standardmäßig für Schriftarten aktiviert, die eine Variationsachse für optische Größe haben. Die Variationsachse für optische Größe wird durch `opsz` in {{cssxref("font-variation-settings")}} dargestellt.

Wenn optische Anpassung verwendet wird, werden kleine Texthöhen häufig mit dickeren Strichen und größeren Serifen gerendert, während größere Texte oft zarter mit mehr Kontrast zwischen dickeren und dünneren Strichen dargestellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Optische Anpassung deaktivieren

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
> Die oben referenzierte Schriftart — die optische Anpassung umfasst und frei lizenziert ist — eignet sich gut für Tests. Sie können sie [auf GitHub herunterladen](https://github.com/googlefonts/amstelvar/releases).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
