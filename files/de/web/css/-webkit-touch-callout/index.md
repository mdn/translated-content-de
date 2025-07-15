---
title: -webkit-touch-callout
slug: Web/CSS/-webkit-touch-callout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die `-webkit-touch-callout`-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert die Anzeige des standardmäßigen Auswahlfeldes, das angezeigt wird, wenn Sie ein Berührungsziel gedrückt halten.

Wenn ein Ziel auf iOS berührt und gehalten wird, zeigt Safari ein Auswahlfeld mit Informationen über den Link an. Mit dieser Eigenschaft kann dieses Verhalten deaktiviert werden.

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
  - : Das standardmäßige Auswahlfeld wird angezeigt.
- `none`
  - : Das Auswahlfeld ist deaktiviert.

## Formale Definition

{{CSSInfo}}

## Formelle Syntax

{{CSSSyntaxRaw(`-webkit-touch-callout = default | none`)}}

## Beispiele

### Deaktivieren des Berührungsauswahlfeldes

```css
.example {
  -webkit-touch-callout: none;
}
```

## Spezifikationen

Teil keiner Norm. Apple hat eine [Beschreibung in der Safari CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
- [-webkit-touch-callout in der Apple Entwicklerdokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)
