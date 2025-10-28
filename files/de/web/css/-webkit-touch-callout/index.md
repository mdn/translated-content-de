---
title: -webkit-touch-callout
slug: Web/CSS/-webkit-touch-callout
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}

Die `-webkit-touch-callout`-Eigenschaft [CSS](/de/docs/Web/CSS) steuert die Anzeige des standardmäßigen Callouts, der erscheint, wenn Sie ein Touch-Ziel berühren und halten.

Wenn ein Ziel auf iOS berührt und gehalten wird, zeigt Safari ein Callout mit Informationen über den Link an. Diese Eigenschaft erlaubt es, dieses Verhalten zu deaktivieren.

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
  - : Der Standard-Callout wird angezeigt.
- `none`
  - : Der Callout ist deaktiviert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-touch-callout = default | none`)}}

## Beispiele

### Deaktivieren des Touch-Callouts

```css
.example {
  -webkit-touch-callout: none;
}
```

## Spezifikationen

Nicht Teil eines Standards. Apple hat eine [Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
- [-webkit-touch-callout in der Apple-Entwicklerdokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)
