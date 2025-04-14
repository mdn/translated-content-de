---
title: -webkit-text-security
slug: Web/CSS/-webkit-text-security
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_Header}}

**`-webkit-text-security`** ist eine nicht standardisierte CSS-Eigenschaft, die Zeichen in einem {{HtmlElement("form")}}-Feld (wie {{HtmlElement("input")}} oder {{HtmlElement("textarea")}}) durch Ersetzen mit einer Form verschleiert. Sie betrifft nur Felder, die _nicht_ vom Typ `password` sind.

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

### Verschleierung eines Texteingabefelds

Versuchen Sie, in das Feld unten zu tippen. Wenn Ihr Browser diese Eigenschaft unterstützt, sollten die Zeichen visuell mit Quadraten ersetzt werden.

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
