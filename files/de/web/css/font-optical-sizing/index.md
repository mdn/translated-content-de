---
title: font-optical-sizing
slug: Web/CSS/font-optical-sizing
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{CSSRef}}

Die **`font-optical-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Textdarstellung für die Ansicht in unterschiedlichen Größen optimiert wird.

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
  - : Der Browser wird die Form der Glyphen nicht für eine optimale Ansicht modifizieren.
- auto
  - : Der Browser wird die Form der Glyphen für eine optimale Ansicht modifizieren.

## Beschreibung

Optische Größenanpassung ist standardmäßig für Schriftarten mit einer Achse für optische Größenänderungen aktiviert. Die Achse für optische Größenänderungen wird durch `opsz` in {{cssxref("font-variation-settings")}} dargestellt.

Wenn optische Größenanpassung verwendet wird, werden kleine Textgrößen oft mit dickeren Strichen und größeren Serifen dargestellt, während größere Texte häufig zarter mit mehr Kontrast zwischen dickeren und dünneren Strichen dargestellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der optischen Größenanpassung

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
> Die oben erwähnte Schriftart — die optische Größenanpassung beinhaltet und frei lizenziert ist — eignet sich gut zum Testen. Sie können sie [auf GitHub herunterladen](https://github.com/googlefonts/amstelvar/releases).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [Lernen: Grundlegende Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
