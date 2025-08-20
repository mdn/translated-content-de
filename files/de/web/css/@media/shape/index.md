---
title: shape
slug: Web/CSS/@media/shape
l10n:
  sourceCommit: 10f562a8a12f7bbf4b35b21de449c721ed756eb4
---

{{SeeCompatTable}}

Das `shape` [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Form des Geräts zu testen, um rechteckige und runde Anzeigen zu unterscheiden.

## Syntax

Das diskrete `shape`-Merkmal wird als einer von zwei akzeptablen Zeichenfolgen angegeben, entweder `rect`, das einen rechteckigen Bildschirm darstellt, oder `round`, das einen kreisförmigen, ovalen oder elliptischen Bildschirm darstellt.

- `rect`
  - : Die Form ist ein achsenparallel ausgerichtetes Rechteck oder Quadrat, oder eine ähnliche Form wie ein abgerundetes Rechteck, für das die traditionellen Designs geeignet sind.
- `round`
  - : Die Form ist abgerundet oder ähnelt der eines Kreises, wie ein Oval oder eine Ellipse, für die charakteristisch abgerundete Designs geeignet sind.

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

Derzeit unterstützt kein Browser dieses Feature.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
- [CSS Round Display](/de/docs/Web/CSS/CSS_round_display) Modul
- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
- [CSS Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
