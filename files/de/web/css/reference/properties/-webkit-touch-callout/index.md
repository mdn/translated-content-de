---
title: "`-webkit-touch-callout` CSS property"
short-title: -webkit-touch-callout
slug: Web/CSS/Reference/Properties/-webkit-touch-callout
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}

Die CSS-Eigenschaft `-webkit-touch-callout` steuert die Anzeige des standardmäßigen Callouts, das angezeigt wird, wenn Sie ein Touch-Ziel berühren und halten.

Wenn ein Ziel auf iOS berührt und gehalten wird, zeigt Safari ein Callout mit Informationen über den Link an. Mit dieser Eigenschaft können Sie dieses Verhalten deaktivieren.

## Syntax

```css
/* Keyword values */
-webkit-touch-callout: default;
-webkit-touch-callout: none;

/* Global values */
-webkit-touch-callout: initial;
-webkit-touch-callout: inherit;
-webkit-touch-callout: revert;
-webkit-touch-callout: revert-layer;
-webkit-touch-callout: unset;
```

### Werte

- `default`
  - : Das standardmäßige Callout wird angezeigt.
- `none`
  - : Das Callout wird deaktiviert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-touch-callout = default | none`)}}

## Beispiele

### Touch-Callout deaktivieren

```css
.example {
  -webkit-touch-callout: none;
}
```

## Spezifikationen

Nicht Teil eines Standards. Apple hat eine [Beschreibung in der Safari CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
- [-webkit-touch-callout in der Apple Entwicklerdokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)
