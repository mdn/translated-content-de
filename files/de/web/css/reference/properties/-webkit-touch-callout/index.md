---
title: -webkit-touch-callout
slug: Web/CSS/Reference/Properties/-webkit-touch-callout
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}

Die `-webkit-touch-callout`-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert die Anzeige des Standard-Callouts, das angezeigt wird, wenn ein Touch-Ziel berührt und gehalten wird.

Wenn ein Ziel auf iOS berührt und gehalten wird, zeigt Safari ein Callout mit Informationen über den Link an. Diese Eigenschaft ermöglicht es, dieses Verhalten zu deaktivieren.

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
  - : Das Standard-Callout wird angezeigt.
- `none`
  - : Das Callout ist deaktiviert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-touch-callout = default | none`)}}

## Beispiele

### Touch-Callout ausschalten

```css
.example {
  -webkit-touch-callout: none;
}
```

## Spezifikationen

Gehört nicht zu einem Standard. Apple hat eine [Beschreibung in der Safari CSS Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit-CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
- [-webkit-touch-callout in der Apple Developer-Dokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)
