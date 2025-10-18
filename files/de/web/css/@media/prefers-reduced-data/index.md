---
title: prefers-reduced-data
slug: Web/CSS/@media/prefers-reduced-data
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

{{SeeCompatTable}}

> [!NOTE]
> Dieses Feature wird von keinem Benutzeragent unterstützt und seine Details können sich ändern.

Das **`prefers-reduced-data`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer das Web-Inhalte angefordert hat, das weniger Internetverkehr verbraucht.

## Syntax

- `no-preference`
  - : Gibt an, dass der Benutzer keine Präferenz gegenüber dem System bekanntgegeben hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch bewertet.
- `reduce`
  - : Gibt an, dass der Benutzer die Präferenz für leichtere alternative Inhalte geäußert hat.

## Benutzerpräferenzen

Derzeit implementiert kein Benutzeragent dieses Feature, obwohl verschiedene Betriebssysteme solche Präferenzen unterstützen, und wenn diese Medienabfrage jemals implementiert wird, werden Benutzeragenten wahrscheinlich auf die vom Betriebssystem bereitgestellten Einstellungen zurückgreifen.

## Beispiele

> [!NOTE]
> Kein Browser implementiert derzeit dieses Feature, daher wird das folgende Beispiel nicht funktionieren.

In diesem Beispiel wird die Schriftartdatei `montserrat-regular.woff2` weder vorab geladen noch heruntergeladen, wenn der Benutzer reduzierte Daten bevorzugt; in diesem Fall dient die "[System Font Stack](https://css-tricks.com/snippets/css/system-font-stack/)" als Ersatzschriftart:

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
