---
title: MathML-Attributwerte
slug: Web/MathML/Values
l10n:
  sourceCommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{MathMLRef}}

## MathML-spezifische Typen

Zusätzlich zu [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types) akzeptieren einige MathML-Attribute die folgenden Typen:

- `<unsigned-integer>`: Ein [`<integer>`](/de/docs/Web/CSS/integer), dessen erstes Zeichen weder das Zeichen U+002D MINUS (-) noch das Zeichen U+002B PLUS (+) ist, zum Beispiel `1234`.
- `<boolean>`: Eine Zeichenkette `true` oder `false`, die einen Booleschen Wert darstellt.

## Veraltete MathML-Längen

{{deprecated_header}}

Anstelle von {{cssxref("length-percentage")}} definierte MathML früher seinen eigenen [Typ zur Beschreibung von Längen](https://www.w3.org/TR/MathML3/chapter2.html#type.length). Akzeptierte Werte waren unter anderem Längenwerte ohne Einheit ungleich null (z.B. `5` als `500%`), Werte mit Zahlen, die mit einem Punkt enden (z.B. `34.px`), oder benannte Abstände (z.B. `thinmathspace`). Aus Kompatibilitätsgründen wird empfohlen, Längenwerte ohne Einheit ungleich null durch äquivalente {{cssxref("percentage")}} Werte zu ersetzen, unnötige Punkte in Zahlen zu entfernen und folgende Ersetzungen für benannte Längen zu verwenden:

```plain
veryverythinmathspace  => 0.05555555555555555em
verythinmathspace      => 0.1111111111111111em
thinmathspace          => 0.16666666666666666em
mediummathspace        => 0.2222222222222222em
thickmathspace         => 0.2777777777777778em
verythickmathspace     => 0.3333333333333333em
veryverythickmathspace => 0.3888888888888889em
```

### Einheiten

| Einheit | Beschreibung                                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `em`    | {{ Cssxref("font-size", "Schriftarten-relative") }} Einheit                                                                    |
| `ex`    | {{ Cssxref("font-size", "Schriftarten-relative") }} Einheit. (Die "x"-Höhe des Elements, `1ex ≈ 0.5em` in vielen Schriftarten) |
| `px`    | Pixel                                                                                                                          |
| `in`    | Zoll (1 Zoll = 2,54 Zentimeter)                                                                                                |
| `cm`    | Zentimeter                                                                                                                     |
| `mm`    | Millimeter                                                                                                                     |
| `pt`    | Punkte (1 Punkt = 1/72 Zoll)                                                                                                   |
| `pc`    | Picas (1 Pica = 12 Punkte)                                                                                                     |
| `%`     | Prozentsatz des Standardwertes.                                                                                                |

### Konstanten

| Konstante                        | Wert       |
| -------------------------------- | ---------- |
| `veryverythinmathspace`          | 1/18 `em`  |
| `verythinmathspace`              | 2/18 `em`  |
| `thinmathspace`                  | 3/18 `em`  |
| `mediummathspace`                | 4/18 `em`  |
| `thickmathspace`                 | 5/18 `em`  |
| `verythickmathspace`             | 6/18 `em`  |
| `veryverythickmathspace`         | 7/18 `em`  |
| `negativeveryverythinmathspace`  | -1/18 `em` |
| `negativeverythinmathspace`      | -2/18 `em` |
| `negativethinmathspace`          | -3/18 `em` |
| `negativemediummathspace`        | -4/18 `em` |
| `negativethickmathspace`         | -5/18 `em` |
| `negativeverythickmathspace`     | -6/18 `em` |
| `negativeveryverythickmathspace` | -7/18 `em` |

## Browser-Kompatibilität

{{Compat}}
