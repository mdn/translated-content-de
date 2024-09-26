---
title: "-webkit-touch-callout"
slug: Web/CSS/-webkit-touch-callout
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{Non-standard_header}}

Die `-webkit-touch-callout` [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Anzeige des standardmäßigen Callouts, das angezeigt wird, wenn Sie ein Touch-Ziel berühren und halten.

Wenn ein Ziel auf iOS berührt und gehalten wird, zeigt Safari ein Callout mit Informationen über den Link an. Diese Eigenschaft ermöglicht das Deaktivieren dieses Verhaltens.

## Syntax

```css
/* Schlüsselwortwerte */
-webkit-touch-callout: default;
-webkit-touch-callout: none;

/* Globale Werte */
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

Nicht Teil eines Standards. Apple hat eine [Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
- [-webkit-touch-callout in der Apple Entwicklerdokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)