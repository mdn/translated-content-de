---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`:target-current`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt den **aktiven** Scroll-Marker — das {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, zu der gerade gescrollt wird. Dieser [Selektor](/de/docs/Web/CSS/Guides/Selectors) kann verwendet werden, um die aktive Navigationsposition innerhalb einer [scroll marker group](/de/docs/Web/CSS/Reference/Selectors/::scroll-marker-group#description) zu stylen.

> [!NOTE]
> Die `:target-current` Pseudo-Klasse ist nur auf `::scroll-marker` Pseudo-Elementen gültig.

## Syntax

```css-nolint
:target-current {
  /* ... */
}
```

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) und {{cssxref("::scroll-marker")}} für komplette Beispiele, die die `:target-current` Pseudo-Klasse verwenden.

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
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
