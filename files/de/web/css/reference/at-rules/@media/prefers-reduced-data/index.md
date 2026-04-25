---
title: "`prefers-reduced-data` CSS Media-Feature"
short-title: prefers-reduced-data
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-data
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{SeeCompatTable}}

> [!NOTE]
> Diese Funktion wird von keinem Benutzeragenten unterstützt und ihre Spezifikationen können sich ändern.

Die **`prefers-reduced-data`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer angefordert hat, dass Webinhalte generiert werden, die weniger Internetdatenverkehr verbrauchen.

## Syntax

- `no-preference`
  - : Gibt an, dass der Benutzer keine Präferenz im System hinterlegt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch bewertet.
- `reduce`
  - : Gibt an, dass der Benutzer eine Präferenz für leichtgewichtige alternative Inhalte ausgedrückt hat.

## Benutzerpräferenzen

Aktuell implementiert kein Benutzeragent diese Funktion, obwohl verschiedene Betriebssysteme solche Präferenzen unterstützen. Falls diese Media-Query jemals implementiert wird, werden Benutzeragenten wahrscheinlich auf die Einstellungen des Betriebssystems zurückgreifen.

## Beispiele

> [!NOTE]
> Kein Browser implementiert derzeit diese Funktion, daher wird das folgende Beispiel nicht funktionieren.

In diesem Beispiel wird die `montserrat-regular.woff2`-Schriftartdatei weder vorgeladen noch heruntergeladen, wenn der Benutzer reduzierte Daten bevorzugt. In diesem Fall wird die "[System-Schriftartfamilie](https://css-tricks.com/snippets/css/system-font-stack/)" als Ersatzschriftart dienen:

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
