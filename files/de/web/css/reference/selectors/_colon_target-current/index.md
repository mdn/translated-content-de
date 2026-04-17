---
title: "`:target-current` CSS-Pseudoklasse"
short-title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

Die **`:target-current`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt den **aktiven** Scroll-Marker aus — den Scroll-Marker einer {{cssxref("scroll-marker-group")}}, zu dem gerade gescrollt wird. Dieser [Selektor](/de/docs/Web/CSS/Guides/Selectors) kann verwendet werden, um die aktive Navigationsposition innerhalb einer Scroll-Marker-Gruppe zu gestalten.

> [!NOTE]
> Die `:target-current` Pseudoklasse ist nur auf {{cssxref("::scroll-marker")}} Pseudoelementen und Elementen gültig, die als Scroll-Marker mit der Eigenschaft {{cssxref("scroll-target-group")}} bezeichnet wurden.

## Syntax

```css-nolint
:target-current {
  /* ... */
}
```

## Beispiele

Sehen Sie sich [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) und {{cssxref("::scroll-marker")}} für vollständige Beispiele an, die die `:target-current` Pseudoklasse verwenden.

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
- {{cssxref("scroll-target-group")}}
- {{cssxref(":target-before")}}, {{cssxref(":target-after")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
