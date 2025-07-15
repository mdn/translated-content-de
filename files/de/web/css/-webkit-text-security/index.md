---
title: -webkit-text-security
slug: Web/CSS/-webkit-text-security
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_Header}}

**`-webkit-text-security`** ist eine nicht standardisierte CSS-Eigenschaft, die Zeichen in einem {{HtmlElement("form")}}-Feld (wie {{HtmlElement("input")}} oder {{HtmlElement("textarea")}}) durch eine Form verschleiert. Sie wirkt sich nur auf Felder aus, die _nicht_ vom `type=password` sind.

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

### Verschleiern eines Texteingabefelds

Versuchen Sie, in das untenstehende Feld zu tippen. Wenn Ihr Browser diese Eigenschaft unterstützt, sollten die Zeichen visuell durch Quadrate ersetzt werden.

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

Teil keiner Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
