---
title: shape
slug: Web/CSS/@media/shape
l10n:
  sourceCommit: e85be070cbdbfd0ad1aad7b93b8d9752fef2df98
---

{{SeeCompatTable}}

Die `shape` [CSS](/de/docs/Web/CSS) [Medienabfrage-Funktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Form des Geräts zu testen und zwischen rechteckigen und runden Anzeigen zu unterscheiden.

## Syntax

Die diskrete `shape`-Funktion wird als einer von zwei zulässigen Zeichenfolgen angegeben, entweder `rect`, was einen rechteckigen Bildschirm darstellt, oder `round`, was einen kreisförmigen, ovalen oder elliptischen Bildschirm darstellt.

- `rect`
  - : Die Form ist ein achsenparalleles Rechteck oder Quadrat, oder eine ähnliche Form wie ein abgerundetes Rechteck, für die traditionelle Designs angemessen sind.
- `round`
  - : Die Form ist gerundet oder einer ähnlichen Form wie ein Kreis, wie ein Oval oder eine Ellipse, für die speziell gerundete Designs angemessen sind.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<h1>Hello World!</h1>
```

#### CSS

```css
h1 {
  text-align: left;
}

@media (shape: rect) {
  h1 {
    text-align: left;
  }
}

@media (shape: round) {
  h1 {
    text-align: center;
  }
}
```

### Benutzerdefiniertes Stylesheet

Dieses HTML wendet ein spezielles Stylesheet für Geräte mit runden Bildschirmen an.

```html
<head>
  <link rel="stylesheet" href="default.css" />
  <link
    media="screen and (shape: rect)"
    rel="stylesheet"
    href="rectangle.css" />
  <link media="screen and (shape: round)" rel="stylesheet" href="round.css" />
</head>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
- [CSS rundes Display](/de/docs/Web/CSS/CSS_round_display) Modul
