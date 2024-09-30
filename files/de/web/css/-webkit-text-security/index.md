---
title: "-webkit-text-security"
slug: Web/CSS/-webkit-text-security
l10n:
  sourceCommit: bf8d2b45c78b150b9cb7fd792216143e9f4f0f2b
---

{{CSSRef}}{{Non-standard_Header}}

**`-webkit-text-security`** ist eine nicht standardisierte CSS-Eigenschaft, die Zeichen in einem {{HtmlElement("form")}}-Feld (wie {{HtmlElement("input")}} oder {{HtmlElement("textarea")}}) durch eine Form ersetzt, um sie zu verschleiern. Sie betrifft nur Felder, die _nicht_ vom `type=password` sind.

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

```plain
-webkit-text-security = circle | disc | square | none
```

## Beispiele

### Verschleierung eines Texteingabefeldes

Versuchen Sie, in das Feld unten zu tippen. Wenn Ihr Browser diese Eigenschaft unterstützt, sollten die Zeichen optisch durch Quadrate ersetzt werden.

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

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
