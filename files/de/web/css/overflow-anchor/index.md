---
title: overflow-anchor
slug: Web/CSS/overflow-anchor
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

Die **`overflow-anchor`**-Eigenschaft in [CSS](/de/docs/Web/CSS) bietet eine Möglichkeit, das Scrollverankerungsverhalten des Browsers zu deaktivieren, das die Scrollposition anpasst, um Verschiebungen des Inhalts zu minimieren.

Das Scrollverankerungsverhalten ist standardmäßig in jedem Browser aktiviert, der es unterstützt. Daher ist es in der Regel nur erforderlich, den Wert dieser Eigenschaft zu ändern, wenn Sie Probleme mit der Scrollverankerung in einem Dokument oder Teil eines Dokuments haben und dieses Verhalten deaktivieren müssen.

{{EmbedInteractiveExample("pages/css/overflow-anchor.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
overflow-anchor: auto;
overflow-anchor: none;

/* Globale Werte */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: revert-layer;
overflow-anchor: unset;
```

### Werte

- `auto`
  - : Das Element wird zu einem potenziellen Anker, wenn die Scrollposition angepasst wird.
- `none`
  - : Das Element wird nicht als potenzieller Anker ausgewählt.

## Offizielle Definition

{{cssinfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Scrollverankerung verhindern

Um die Scrollverankerung in einem Dokument zu verhindern, verwenden Sie die `overflow-anchor`-Eigenschaft.

```css
* {
  overflow-anchor: none;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zur Scrollverankerung](/de/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring)
