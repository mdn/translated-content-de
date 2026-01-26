---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

Die **`:target-current`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt den **aktiven** Scroll-Marker aus — den Scroll-Marker einer {{cssxref("scroll-marker-group")}}, zu dem aktuell gescrollt wird. Dieser [Selektor](/de/docs/Web/CSS/Guides/Selectors) kann verwendet werden, um die aktive Navigationsposition innerhalb einer Scroll-Marker-Gruppe zu stylen.

> [!NOTE]
> Die `:target-current` Pseudoklasse ist nur gültig auf {{cssxref("::scroll-marker")}} Pseudoelementen und Elementen, die als Scroll-Marker unter Verwendung der {{cssxref("scroll-target-group")}} Eigenschaft bestimmt wurden.

## Syntax

```css-nolint
:target-current {
  /* ... */
}
```

## Beispiele

Sehen Sie sich [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/Guides/Overflow/Carousels) und {{cssxref("::scroll-marker")}} für vollständige Beispiele an, die die `:target-current` Pseudoklasse verwenden.

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
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
