---
title: shape
slug: Web/CSS/@media/shape
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die `shape` [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Form des Geräts zu testen, um zwischen rechteckigen und runden Anzeigen zu unterscheiden.

## Syntax

Das diskrete `shape`-Feature wird als einer von zwei akzeptablen Zeichenfolgen angegeben, entweder `rect`, das einen rechteckigen Bildschirm darstellt, oder `round`, das einen kreisförmigen, ovalen oder elliptischen Bildschirm darstellt.

- `rect`
  - : Die Form ist ein achsenausgerichtetes Rechteck oder Quadrat oder eine ähnliche Form wie ein abgerundetes Rechteck, für das traditionelle Designs geeignet sind.
- `round`
  - : Die Form ist abgerundet oder eine dem Kreis ähnliche Form wie ein Oval, eine Ellipse, für die unverwechselbar abgerundete Designs geeignet sind.

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
