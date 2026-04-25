---
title: "`shape` CSS Media-Feature"
short-title: shape
slug: Web/CSS/Reference/At-rules/@media/shape
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{SeeCompatTable}}

Das `shape` [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Form des Geräts zu testen und zwischen rechteckigen und runden Displays zu unterscheiden.

## Syntax

Das `shape`-diskrete Feature wird als einer von zwei zulässigen Strings angegeben: entweder `rect`, das einen rechteckigen Bildschirm darstellt, oder `round`, das einen kreisförmigen, ovalen oder elliptischen Bildschirm darstellt.

- `rect`
  - : Die Form ist ein achsenparallel ausgerichtetes Rechteck oder Quadrat oder eine ähnliche Form wie ein abgerundetes Rechteck, für das traditionelle Designs geeignet sind.
- `round`
  - : Die Form ist rund oder einer dem Kreis ähnlichen Form wie ein Oval, eine Ellipse, für die charakteristisch abgerundete Designs geeignet sind.

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

Dieses HTML wendet ein spezielles Stylesheet für Geräte an, die runde Bildschirme haben.

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

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
- [CSS Round Display](/de/docs/Web/CSS/Guides/Round_display) Modul
- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
- [CSS Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables) Modul
