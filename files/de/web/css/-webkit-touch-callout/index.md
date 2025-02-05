---
title: "-webkit-touch-callout"
slug: Web/CSS/-webkit-touch-callout
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Die `-webkit-touch-callout`-[CSS](/de/docs/Web/CSS)-Eigenschaft steuert die Anzeige des standardmäßigen Callouts, das angezeigt wird, wenn ein Touch-Ziel berührt und gehalten wird.

Wenn ein Ziel auf iOS berührt und gehalten wird, zeigt Safari einen Callout mit Informationen über den Link an. Diese Eigenschaft erlaubt es, dieses Verhalten zu deaktivieren.

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
  - : Der standardmäßige Callout wird angezeigt.
- `none`
  - : Der Callout ist deaktiviert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-touch-callout =
  default | none
```

## Beispiele

### Touch-Callout deaktivieren

```css
.example {
  -webkit-touch-callout: none;
}
```

## Spezifikationen

Ist Teil keines Standards. Apple hat eine [Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
- [-webkit-touch-callout in der Apple-Entwicklerdokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)
