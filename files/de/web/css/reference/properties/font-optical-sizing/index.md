---
title: "`font-optical-sizing` CSS property"
short-title: font-optical-sizing
slug: Web/CSS/Reference/Properties/font-optical-sizing
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-optical-sizing`** legt fest, ob die Textdarstellung für die Anzeige bei unterschiedlichen Größen optimiert wird.

{{InteractiveExample("CSS Demo: font-optical-sizing")}}

```css interactive-example-choice
font-optical-sizing: auto;
```

```css interactive-example-choice
font-optical-sizing: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
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
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2");
  font-family: "Amstelvar";
  font-style: normal;
}

#example-element {
  font-family: "Amstelvar", serif;
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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Der Browser ändert die Form von Glyphen nicht für eine optimale Anzeige.
- `auto`
  - : Der Browser ändert die Form von Glyphen für eine optimale Anzeige.

## Beschreibung

Die optische Größenanpassung ist standardmäßig für Schriftarten aktiviert, die eine Variationsachse für die optische Größe haben. Die Variationsachse für die optische Größe wird in {{cssxref("font-variation-settings")}} durch `opsz` dargestellt.

Wenn die optische Größenanpassung verwendet wird, werden kleine Textgrößen häufig mit stärkeren Strichen und größeren Serifen dargestellt, während größere Texte häufig feiner mit stärkerem Kontrast zwischen dickeren und dünneren Strichen dargestellt werden.

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
  src: url("AmstelvarAlpha-VF.woff2");
  font-family: "Amstelvar";
  font-style: normal;
}

p {
  font-size: 36px;
  font-family: "Amstelvar", serif;
}

.no-optical-sizing {
  font-optical-sizing: none;
}
```

> [!NOTE]
> Die oben referenzierte Schriftart – die optische Größenanpassung enthält und frei lizenziert ist – eignet sich gut zum Testen. Sie können sie [auf GitHub herunterladen](https://github.com/googlefonts/amstelvar/releases).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [Lernen: Grundlegende Text- und Schriftformatierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
