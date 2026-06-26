---
title: "`prefers-reduced-data` CSS Media-Feature"
short-title: prefers-reduced-data
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-data
l10n:
  sourceCommit: 294f2e4cedd4de0d99948f3bf9b451454387fe35
---

{{SeeCompatTable}}

> [!WARNING]
> Dieses Feature wird von keinem User-Agent unterstützt und seine Spezifikationen können sich ändern.

Das **`prefers-reduced-data`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer Inhalte angefordert hat, die weniger Internetverkehr verbrauchen.

Der Browser erreicht dies in der Regel, indem er die Präferenzen des zugrunde liegenden Betriebssystems für reduzierten Datenverbrauch abfragt.

## Syntax

- `no-preference`
  - : Gibt an, dass der Benutzer dem System keine Präferenz mitgeteilt hat. Dieses Schlüsselwort wird im booleschen Kontext als falsch ausgewertet.
- `reduce`
  - : Gibt an, dass der Benutzer eine Präferenz für leichtere alternative Inhalte geäußert hat.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel wird die Schriftdatei `montserrat-regular.woff2` weder vorab geladen noch heruntergeladen, wenn der Benutzer reduzierte Daten bevorzugt; in diesem Fall dient der "[Systemschriftstapel](https://css-tricks.com/snippets/css/system-font-stack/)" als Ersatzschrift:

### HTML

```html
<head>
  <link
    rel="preload"
    href="fonts/montserrat-regular.woff2"
    as="font"
    media="(prefers-reduced-data: no-preference)"
    crossorigin />
  <link rel="stylesheet" href="style.css" />
</head>
```

### CSS

```css
@media (prefers-reduced-data: no-preference) {
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    /* latin */
    src:
      local("Montserrat Regular"),
      local("Montserrat-Regular"),
      url("fonts/montserrat-regular.woff2") format("woff2");
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
}

body {
  font-family:
    "Montserrat",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Save-Data")}} HTTP-Header
