---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{SeeCompatTable}}

Die **`:target-current`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt den **aktiven** Scroll-Marker aus — das {{cssxref("::scroll-marker")}} Pseudoelement einer {{cssxref("scroll-marker-group")}}, zu der gerade gescrollt wird. Dieser [Selektor](/de/docs/Web/CSS/CSS_selectors) kann verwendet werden, um die aktive Navigationsposition innerhalb einer [Scroll-Marker-Gruppe](/de/docs/Web/CSS/Reference/Selectors/::scroll-marker-group#description) zu stylen.

> [!NOTE]
> Die `:target-current` Pseudoklasse ist nur bei `::scroll-marker` Pseudoelementen gültig.

## Syntax

```css-nolint
:target-current {
  /* ... */
}
```

## Beispiele

Siehe [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) und {{cssxref("::scroll-marker")}} für vollständige Beispiele, die die `:target-current` Pseudoklasse verwenden.

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
- [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
