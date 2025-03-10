---
title: font-optical-sizing
slug: Web/CSS/font-optical-sizing
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`font-optical-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Textrendering-Optimierung für unterschiedliche Größenansichten erfolgt.

{{InteractiveExample("CSS Demo: font-optical-sizing")}}

```css interactive-example-choice
font-optical-sizing: auto;
```

```css interactive-example-choice
font-optical-sizing: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element" style="font-optical-sizing: auto">
    <h2>Chapter 3</h2>
    <p>
      On this particular Thursday, something was moving quietly through the
      ionosphere many miles above the surface of the planet; several somethings
      in fact, several dozen huge yellow chunky slablike somethings, huge as
      office blocks, silent as birds.
    </p>
  </div>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: Amstelvar;
  font-style: normal;
}

#example-element {
  font-family: Amstelvar;
  text-align: left;
}

#example-element h2 {
  font-size: 36px;
}

#example-element p {
  font-size: 12px;
}
```

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
  - : Der Browser wird die Form der Glyphen nicht zur optimalen Darstellung verändern.
- auto
  - : Der Browser wird die Form der Glyphen zur optimalen Darstellung verändern.

## Beschreibung

Optische Größenanpassung ist standardmäßig für Schriftarten aktiviert, die eine optische Größenvariationsachse besitzen. Die optische Größenvariationsachse wird durch `opsz` in {{cssxref("font-variation-settings")}} dargestellt.

Wenn die optische Größenanpassung verwendet wird, werden kleine Textgrößen oft mit dickeren Strichen und größeren Serifen dargestellt, während größere Texte oft feiner dargestellt werden, mit mehr Kontrast zwischen dickeren und dünneren Strichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Optische Größenanpassung deaktivieren

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
> Die oben referenzierte Schriftart — die eine optische Größenanpassung beinhaltet und frei lizenziert ist — eignet sich gut zum Testen. Sie können [sie auf GitHub herunterladen](https://github.com/googlefonts/amstelvar/releases).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [Lernen: Grundlegendes Text- und Schriftstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
