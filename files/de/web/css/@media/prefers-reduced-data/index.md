---
title: prefers-reduced-data
slug: Web/CSS/@media/prefers-reduced-data
l10n:
  sourceCommit: b4d0b6b4ff6527429b6f80ec0cf8c9b4176f7fd4
---

{{CSSRef}}{{SeeCompatTable}}

> [!NOTE]
> Dieses Feature wird von keinem Benutzeragenten unterstützt und seine Spezifikationen können sich ändern.

Das **`prefers-reduced-data`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer Webinhalte angefordert hat, die weniger Internet-Datenverkehr verbrauchen.

## Syntax

- `no-preference`
  - : Gibt an, dass der Benutzer keine Präferenz im System bekannt gegeben hat. Dieser Schlüsselwortwert wird im boolean Kontext als falsch ausgewertet.
- `reduce`
  - : Gibt an, dass der Benutzer die Präferenz für alternativen, leichteren Inhalt ausgedrückt hat.

## Benutzerpräferenzen

Derzeit implementiert kein Benutzeragent dieses Feature, obwohl verschiedene Betriebssysteme solche Präferenzen unterstützen. Wenn diese Media Query jemals implementiert wird, werden Benutzeragenten wahrscheinlich auf die Einstellungen zurückgreifen, die vom Betriebssystem bereitgestellt werden.

## Beispiele

> [!NOTE]
> Kein Browser implementiert derzeit dieses Feature, daher wird das folgende Beispiel nicht funktionieren.

In diesem Beispiel wird die `montserrat-regular.woff2`-Schriftartdatei weder vorab geladen noch heruntergeladen, wenn der Benutzer reduzierte Daten bevorzugt. In diesem Fall wird der "[System Font Stack](https://css-tricks.com/snippets/css/system-font-stack/)" als Ersatzschriftart dienen:

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
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
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
