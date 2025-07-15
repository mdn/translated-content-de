---
title: prefers-reduced-data
slug: Web/CSS/@media/prefers-reduced-data
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

> [!NOTE]
> Dieses Feature wird von keinem Benutzeragent unterstützt und seine Spezifikationen können sich ändern.

Das **`prefers-reduced-data`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer Inhalte angefordert hat, die weniger Internet-Traffic verbrauchen.

## Syntax

- `no-preference`
  - : Gibt an, dass der Benutzer dem System keine Präferenz mitgeteilt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als false bewertet.
- `reduce`
  - : Gibt an, dass der Benutzer die Präferenz für leichtere Alternativinhalte ausgedrückt hat.

## Benutzerpräferenzen

Derzeit implementiert kein Benutzeragent dieses Feature, obwohl verschiedene Betriebssysteme solche Präferenzen unterstützen. Sollte diese Medienanfrage jemals implementiert werden, werden sich Benutzeragenten wahrscheinlich auf die Einstellungen des Betriebssystems stützen.

## Beispiele

> [!NOTE]
> Kein Browser implementiert derzeit dieses Feature, sodass das folgende Beispiel nicht funktioniert.

In diesem Beispiel wird die Schriftartdatei `montserrat-regular.woff2` weder vorgeladen noch heruntergeladen, wenn der Benutzer reduzierte Daten bevorzugt. In diesem Fall wird der "[System Font Stack](https://css-tricks.com/snippets/css/system-font-stack/)" als Ersatzschriftart dienen:

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
    font-family: Montserrat;
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
    Montserrat,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    "Microsoft YaHei",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Save-Data")}} HTTP-Header
