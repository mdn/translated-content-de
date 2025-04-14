---
title: :target-current
slug: Web/CSS/:target-current
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:target-current`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt den **aktiven** Scroll-Marker aus — das {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, zu dem gerade gescrollt wird. Dieser [Selektor](/de/docs/Web/CSS/CSS_selectors) kann verwendet werden, um die aktive Navigationsposition innerhalb einer [Scroll-Marker-Gruppe](/de/docs/Web/CSS/::scroll-marker-group#description) zu stylen.

> [!NOTE]
> Die `:target-current` Pseudoklasse ist nur auf `::scroll-marker` Pseudo-Elementen gültig.

## Syntax

```css-nolint
:target-current {
  /* ... */
}
```

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) und {{cssxref("::scroll-marker")}} für vollständige Beispiele, die die `:target-current` Pseudoklasse verwenden.

### Grundlagen

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
