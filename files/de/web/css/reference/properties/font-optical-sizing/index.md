---
title: "`font-optical-sizing` CSS property"
short-title: font-optical-sizing
slug: Web/CSS/Reference/Properties/font-optical-sizing
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-optical-sizing`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob die Textrenderung für das Betrachten in verschiedenen Größen optimiert wird.

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

- none
  - : Der Browser wird die Form der Glyphen nicht für eine optimale Ansicht ändern.
- auto
  - : Der Browser wird die Form der Glyphen für eine optimale Ansicht ändern.

## Beschreibung

Optisches Sizing ist standardmäßig für Schriftarten aktiviert, die eine Achse für optische Größenvariation haben. Die Achse für optische Größenvariation wird durch `opsz` in {{cssxref("font-variation-settings")}} dargestellt.

Wenn optisches Sizing verwendet wird, werden kleine Textgrößen oft mit dickeren Strichen und größeren Serifen gerendert, während größere Texte meist zarter mit mehr Kontrast zwischen dickeren und dünneren Strichen dargestellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren des optischen Sizing

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
  font-family: "Amstelvar", serif;
}

.no-optical-sizing {
  font-optical-sizing: none;
}
```

> [!NOTE]
> Die oben referenzierte Schriftart — die optisches Sizing umfasst und frei lizenziert ist — eignet sich gut zum Testen. Sie können [sie auf GitHub herunterladen](https://github.com/googlefonts/amstelvar/releases).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [Lernen: Grundlegende Text- und Schriftstildarstellung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
