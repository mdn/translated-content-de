---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Die **`:target-current`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt den **aktiven** Scroll-Marker aus — das {{cssxref("::scroll-marker")}} Pseudoelement einer {{cssxref("scroll-marker-group")}}, das aktuell gescrollt wird. Dieser [Selektor](/de/docs/Web/CSS/CSS_selectors) kann verwendet werden, um die aktive Navigationsposition innerhalb einer [Scroll-Marker-Gruppe](/de/docs/Web/CSS/Reference/Selectors/::scroll-marker-group#description) zu stylen.

> [!NOTE]
> Die `:target-current` Pseudoklasse ist nur auf `::scroll-marker` Pseudoelementen gültig.

## Syntax

```css-nolint
:target-current {
  /* ... */
}
```

## Beispiele

Sehen Sie vollständige Beispiele, die die `:target-current` Pseudoklasse verwenden, unter [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) und {{cssxref("::scroll-marker")}}.

### Grundlegende Verwendung

```css
::scroll-marker {
  background-color: white;
}

::scroll-marker:target-current {
  background-color: black;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
