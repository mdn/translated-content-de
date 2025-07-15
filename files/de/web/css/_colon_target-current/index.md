---
title: :target-current
slug: Web/CSS/:target-current
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`:target-current`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt den **aktiven** Scroll-Marker aus — das {{cssxref("::scroll-marker")}} Pseudoelement einer {{cssxref("scroll-marker-group")}}, zu der aktuell gescrollt wird. Dieser [Selektor](/de/docs/Web/CSS/CSS_selectors) kann verwendet werden, um die aktive Navigationsposition innerhalb einer [scroll marker group](/de/docs/Web/CSS/::scroll-marker-group#description) zu gestalten.

> [!NOTE]
> Die `:target-current` Pseudoklasse ist nur auf `::scroll-marker` Pseudoelemente gültig.

## Syntax

```css-nolint
:target-current {
  /* ... */
}
```

## Beispiele

Siehe [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) und {{cssxref("::scroll-marker")}} für vollständige Beispiele, die die `:target-current` Pseudoklasse verwenden.

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
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
