---
title: overflow-anchor
slug: Web/CSS/overflow-anchor
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

Die **`overflow-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, das Scroll-Ankerverhalten des Browsers zu deaktivieren, das die Scrollposition anpasst, um Inhaltsverschiebungen zu minimieren.

Das Scroll-Ankerverhalten ist standardmäßig in jedem unterstützenden Browser aktiviert. Daher ist es in der Regel nur erforderlich, den Wert dieser Eigenschaft zu ändern, wenn Sie Probleme mit dem Scroll-Ankerverhalten in einem Dokument oder einem Teil eines Dokuments haben und das Verhalten deaktivieren müssen.

{{EmbedInteractiveExample("pages/css/overflow-anchor.html")}}

## Syntax

```css
/* Keyword values */
overflow-anchor: auto;
overflow-anchor: none;

/* Global values */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: revert-layer;
overflow-anchor: unset;
```

### Werte

- `auto`
  - : Das Element wird beim Anpassen der Scrollposition zu einem potenziellen Anker.
- `none`
  - : Das Element wird nicht als potenzieller Anker ausgewählt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Scroll-Anker verhindern

Um das Scroll-Ankerverhalten in einem Dokument zu verhindern, verwenden Sie die `overflow-anchor` Eigenschaft.

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

- [Leitfaden zum Scroll-Ankerverhalten](/de/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring)
