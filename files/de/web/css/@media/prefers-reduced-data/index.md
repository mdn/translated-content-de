---
title: prefers-reduced-data
slug: Web/CSS/@media/prefers-reduced-data
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

{{SeeCompatTable}}

> [!NOTE]
> Diese Funktion wird von keinem Benutzeragenten unterstützt und ihre Details können sich ändern.

Das **`prefers-reduced-data`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer Inhalte angefordert hat, die weniger Internetverkehr verbrauchen.

## Syntax

- `no-preference`
  - : Das bedeutet, dass der Benutzer dem System keine Präferenz mitgeteilt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch bewertet.
- `reduce`
  - : Das bedeutet, dass der Benutzer eine Präferenz für leichtere alternative Inhalte ausgedrückt hat.

## Benutzerpräferenzen

Derzeit implementiert kein Benutzeragent diese Funktion, obwohl verschiedene Betriebssysteme solche Präferenzen unterstützen. Falls diese Medienabfrage jemals implementiert wird, werden Benutzeragenten wahrscheinlich auf die vom Betriebssystem bereitgestellten Einstellungen zurückgreifen.

## Beispiele

> [!NOTE]
> Kein Browser implementiert derzeit diese Funktion, daher wird das folgende Beispiel nicht funktionieren.

In diesem Beispiel wird die Schriftdatei `montserrat-regular.woff2` weder vorgeladen noch heruntergeladen, wenn der Benutzer reduzierte Daten bevorzugt. In diesem Fall wird die "[System Font Stack](https://css-tricks.com/snippets/css/system-font-stack/)" als Ersatzschriftart dienen:

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
    font-weight: 400;
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
