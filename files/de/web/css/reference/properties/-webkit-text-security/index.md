---
title: -webkit-text-security
slug: Web/CSS/Reference/Properties/-webkit-text-security
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}

**`-webkit-text-security`** ist eine nicht-standardisierte CSS-Eigenschaft, die Zeichen in einem {{HtmlElement("form")}}-Feld (wie {{HtmlElement("input")}} oder {{HtmlElement("textarea")}}) verschleiert, indem sie durch eine Form ersetzt werden. Sie wirkt nur auf Felder, die _nicht_ vom `type=password` sind.

## Syntax

```css
-webkit-text-security: circle;
-webkit-text-security: disc;
-webkit-text-security: square;
-webkit-text-security: none;

/* Global values */
-webkit-text-security: inherit;
-webkit-text-security: initial;
-webkit-text-security: revert;
-webkit-text-security: revert-layer;
-webkit-text-security: unset;
```

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-text-security = circle | disc | square | none`)}}

## Beispiele

### Verschleiern eines Texteingabefeldes

Versuchen Sie, in das unten stehende Feld zu tippen. Wenn Ihr Browser diese Eigenschaft unterstützt, sollten die Zeichen visuell durch Quadrate ersetzt werden.

#### HTML

```html
<label for="name">Name:</label> <input type="text" name="name" id="name" />
```

#### CSS

```css
input {
  -webkit-text-security: square;
}
```

#### Ergebnis

{{EmbedLiveSample("Obscuring_a_text_input")}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
