---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die vertikale Grenze eines scrollbaren Bereichs erreicht wird.

Siehe {{cssxref("overscroll-behavior")}} für eine vollständige Erklärung.

## Syntax

```css
/* Schlüsselwortwerte */
overscroll-behavior-y: auto; /* Standard */
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* Globale Werte */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: revert;
overscroll-behavior-y: revert-layer;
overscroll-behavior-y: unset;
```

Die `overscroll-behavior-y` Eigenschaft wird als ein Schlüsselwort aus der unten aufgeführten Werteliste angegeben.

### Werte

- `auto`
  - : Das standardmäßige Überlaufverhalten bei Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Überlaufverhalten beim Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} in benachbarten scrollbaren Bereichen auf; die darunterliegenden Elemente werden nicht scrollen. Der `contain` Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wisch-Navigation.
- `none`
  - : Es tritt keine Scroll-Verkettung in benachbarten scrollbaren Bereichen auf, und das standardmäßige Überlaufverhalten beim Scrollen wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element vertikal scrollt

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Siehe {{cssxref("overscroll-behavior")}} für ein vollständiges Beispiel und eine Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nehmen Sie die Kontrolle über Ihr Scrollen: Anpassen von Pull-to-Refresh- und Überlauf-Effekten](https://developer.chrome.com/blog/overscroll-behavior/#demo)
- Die zugeordneten logischen Eigenschaften: {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}
