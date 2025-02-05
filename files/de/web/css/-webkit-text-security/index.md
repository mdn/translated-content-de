---
title: "-webkit-text-security"
slug: Web/CSS/-webkit-text-security
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_Header}}

**`-webkit-text-security`** ist eine nicht standardisierte CSS-Eigenschaft, die Zeichen in einem {{HtmlElement("form")}}-Feld (wie {{HtmlElement("input")}} oder {{HtmlElement("textarea")}}) durch eine Form verschleiert. Sie wirkt sich nur auf Felder aus, die _nicht_ den `type=password` haben.

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

### Ein Texteingabefeld verschleiern

Versuchen Sie, in das untenstehende Feld zu schreiben. Wenn Ihr Browser diese Eigenschaft unterstützt, sollten die Zeichen visuell durch Quadrate ersetzt werden.

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
