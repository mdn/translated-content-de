---
title: shape
slug: Web/CSS/Reference/At-rules/@media/shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die `shape` [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Form des Geräts zu testen, um zwischen rechteckigen und runden Bildschirmen zu unterscheiden.

## Syntax

Die diskrete `shape`-Eigenschaft wird als einer von zwei akzeptablen Zeichenfolgen angegeben: entweder `rect`, das einen rechteckigen Bildschirm darstellt, oder `round`, das einen kreisförmigen, ovalen oder elliptischen Bildschirm repräsentiert.

- `rect`
  - : Die Form ist ein achsenausgerichtetes Rechteck oder Quadrat oder eine ähnliche Form wie ein abgerundetes Rechteck, für das traditionelle Designs geeignet sind.
- `round`
  - : Die Form ist abgerundet oder ähnelt einem Kreis, wie ein Oval oder eine Ellipse, für die charakteristisch abgerundete Designs geeignet sind.

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

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
- [CSS round display](/de/docs/Web/CSS/Guides/Round_display) Modul
- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables) Modul
