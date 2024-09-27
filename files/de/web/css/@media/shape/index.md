---
title: shape
slug: Web/CSS/@media/shape
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}{{SeeCompatTable}}

Das `shape` [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Form des Geräts zu testen und rechteckige von runden Displays zu unterscheiden.

## Syntax

Das diskrete `shape`-Feature wird als einer von zwei akzeptablen Zeichenfolgen angegeben, entweder `rect`, was einen rechteckigen Bildschirm darstellt, oder `round`, was einen kreisförmigen, ovalen oder elliptischen Bildschirm darstellt.

- `rect`
  - : Die Form ist ein achsensymmetrisches Rechteck oder Quadrat oder eine ähnliche Form wie ein abgerundetes Rechteck, für die traditionelle Designs geeignet sind.
- `round`
  - : Die Form ist abgerundet oder ähnelt dem Kreis, wie ein Oval oder eine Ellipse, für die eindeutig abgerundete Designs geeignet sind.

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

Dieses HTML wird ein spezielles Stylesheet für Geräte mit runden Bildschirmen anwenden.

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

Es gibt keinen Browser, der dieses Feature implementiert.

## Siehe auch

- [Verwenden von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
