---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Der **`font-weight`** CSS-Descriptor ermöglicht es Autoren, Schriftstärken für die im {{cssxref("@font-face")}} At-Regel angegebenen Schriften zu spezifizieren. Die {{cssxref("font-weight")}} Eigenschaft kann separat verwendet werden, um festzulegen, wie dick oder dünn Zeichen im Text angezeigt werden sollen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den `font-weight` Descriptor verwenden, um die Schriftschnitte explizit zu gewichten. Die Werte für den CSS-Descriptor sind die gleichen wie für ihre entsprechende Schrift-Eigenschaft.

Für eine bestimmte Schriftfamilie stehen im Allgemeinen nur begrenzte Gewichte zur Verfügung. Wenn ein angegebenes Gewicht nicht existiert, wird ein nahegelegenes Gewicht verwendet. Schriften, die keine fetten Schriftstile besitzen, werden häufig vom Benutzeragenten synthetisiert. Um dies zu verhindern, verwenden Sie die {{cssxref('font-synthesis')}} Kurzschreibweise.

## Syntax

```css
/* Einzelne Werte */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* Mehrere Werte */
font-weight: normal bold;
font-weight: 300 500;
```

Die `font-weight` Eigenschaft wird mit einem der unten aufgeführten Werte beschrieben.

### Werte

- `normal`
  - : Normale Schriftstärke. Entspricht `400`.
- `bold`
  - : Fette Schriftstärke. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, einschließlich. Höhere Zahlen repräsentieren Gewichte, die fetter sind als (oder so fett wie) niedrigere Zahlen. Einige häufig verwendete Werte entsprechen den üblichen Gewichtsnamen, wie im Abschnitt [Allgemeine Gewichtsnamen-Zuordnung](#allgemeine_gewichtsnamen-zuordnung) unten beschrieben.

In früheren Versionen der `font-weight` Spezifikation akzeptiert die Eigenschaft nur Schlüsselwortwerte und die numerischen Werte 100, 200, 300, 400, 500, 600, 700, 800 und 900; nicht-variable Schriften können nur wirklich diese festgelegten Werte verwenden, obwohl fein abgestufte Werte (z. B. 451) für nicht-variable Schriften in einen dieser Werte übersetzt werden.

CSS Fonts Level 4 erweitert die Syntax, um jede Zahl zwischen 1 und 1000, einschließlich, zu akzeptieren, und führt [Variable Schriften](#variable_schriften) ein, die diesen viel feineren Bereich von Schriftstärken nutzen können.

### Allgemeine Gewichtsnamen-Zuordnung

Die numerischen Werte `100` bis `900` entsprechen grob den folgenden allgemeinen Gewichtsnamen:

| Wert | Allgemeiner Gewichtsnamen  |
| ----- | -------------------------- |
| 100   | Dünn (Haarlinie)           |
| 200   | Extra Leicht (Ultra Leicht)|
| 300   | Leicht                     |
| 400   | Normal                     |
| 500   | Mittel                     |
| 600   | Halb Fett (Demi Fett)      |
| 700   | Fett                       |
| 800   | Extra Fett (Ultra Fett)    |
| 900   | Schwarz (Schwer)           |

### Variable Schriften

Die meisten Schriften haben eine bestimmte Stärke, die einer der Zahlen in [Allgemeine Gewichtsnamen-Zuordnung](#allgemeine_gewichtsnamen-zuordnung) entspricht. Einige Schriften, sogenannte variable Schriften, können jedoch einen Bereich von Stärken mit mehr oder weniger feiner Granularität unterstützen, was dem Designer eine viel genauere Kontrolle über das gewählte Gewicht ermöglicht.

Für TrueType- oder OpenType-Variable Schriften wird die "wght" Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Menschen mit Sehbehinderungen haben möglicherweise Schwierigkeiten, Text mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) zu lesen, insbesondere wenn die Schrift ein [geringes Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normale Schriftstärke in einer @font-face Regel festlegen

Das folgende Beispiel findet eine lokale Open Sans-Schrift oder importiert sie und ermöglicht die Verwendung der Schrift für normale Schriftstärken.

```css
@font-face {
  font-family: "Open Sans";
  src:
    local("Open Sans") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-weight: 400;
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Descriptor
