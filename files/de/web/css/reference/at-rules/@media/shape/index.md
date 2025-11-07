---
title: shape
slug: Web/CSS/Reference/At-rules/@media/shape
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}

Das `shape` [CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Form des Geräts zu testen und rechteckige von runden Bildschirmen zu unterscheiden.

## Syntax

Das diskrete Merkmal `shape` wird als einer von zwei akzeptablen Zeichenfolgen angegeben: entweder `rect`, das einen rechteckigen Bildschirm darstellt, oder `round`, das einen kreisförmigen, ovalen oder elliptischen Bildschirm darstellt.

- `rect`
  - : Die Form ist ein achsenparalleles Rechteck oder Quadrat oder eine ähnliche Form wie etwa ein abgerundetes Rechteck, für das traditionelle Designs geeignet sind.
- `round`
  - : Die Form ist rund oder einer Kreisform ähnlich, wie etwa ein Oval oder eine Ellipse, für die eindeutig abgerundete Designs geeignet sind.

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

Dieses HTML wird ein spezielles Stylesheet für Geräte anwenden, die runde Bildschirme haben.

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

Derzeit unterstützen keine Browser dieses Merkmal.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
- [CSS Modul für runde Bildschirme](/de/docs/Web/CSS/CSS_round_display)
- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
- [CSS Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
