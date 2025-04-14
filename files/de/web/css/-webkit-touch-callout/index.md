---
title: -webkit-touch-callout
slug: Web/CSS/-webkit-touch-callout
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_header}}

Die `-webkit-touch-callout`-Eigenschaft [CSS](/de/docs/Web/CSS) steuert die Anzeige des Standard-Callouts, das angezeigt wird, wenn Sie ein Touch-Ziel berühren und halten.

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
  - : Der Standard-Callout wird angezeigt.
- `none`
  - : Der Callout ist deaktiviert.

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

Nicht Teil eines Standards. Apple bietet eine [Beschreibung in der Safari-CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit-CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
- [-webkit-touch-callout in der Apple Entwicklerdokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)
