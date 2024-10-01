---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Der **`font-weight`** CSS-Deskriptor ermöglicht es Autoren, Schriftstärken für die im {{cssxref("@font-face")}}-At-Regel spezifizierten Schriftarten anzugeben. Die {{cssxref("font-weight")}}-Eigenschaft kann separat verwendet werden, um festzulegen, wie dick oder dünn Zeichen im Text angezeigt werden sollen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den verschiedenen Stilen derselben Schriftfamilie entsprechen, und dann den `font-weight`-Deskriptor verwenden, um die Schriftstärken der Schriftarten explizit festzulegen. Die Werte für den CSS-Deskriptor sind dieselben wie für die entsprechende Schrifteigenschaft.

Es sind in der Regel nur begrenzte Schriftstärken für eine bestimmte Schriftfamilie verfügbar. Wenn eine angegebene Stärke nicht existiert, wird eine nahegelegene Stärke verwendet. Schriftarten ohne fette Type werden oft vom Benutzeragenten synthetisiert. Um dies zu verhindern, verwenden Sie die {{cssxref('font-synthesis')}}-Kurzschreibweise.

## Syntax

```css
/* Single values */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* Multiple Values */
font-weight: normal bold;
font-weight: 300 500;
```

Die `font-weight`-Eigenschaft wird mit einem der unten aufgeführten Werte beschrieben.

### Werte

- `normal`
  - : Normale Schriftstärke. Entspricht `400`.
- `bold`
  - : Fette Schriftstärke. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 1 und 1000, einschließlich. Höhere Zahlen repräsentieren schwerere (oder ebenso schwere) Gewichte als niedrigere Zahlen. Bestimmte häufig verwendete Werte entsprechen gängigen Gewichtsnamen, wie im Abschnitt [Allgemeine Gewichtsnamen-Zuordnung](#allgemeine_gewichtsnamen-zuordnung) unten beschrieben.

In früheren Versionen der `font-weight`-Spezifikation akzeptiert die Eigenschaft nur Schlüsselwortwerte und die numerischen Werte 100, 200, 300, 400, 500, 600, 700, 800 und 900; nicht-variable Schriftarten können wirklich nur diese festgelegten Werte nutzen, obwohl feiner abgestufte Werte (z. B. 451) für nicht-variable Schriftarten in einen dieser Werte übersetzt werden.

CSS Fonts Level 4 erweitert die Syntax, um jede Zahl zwischen 1 und 1000, einschließlich, zu akzeptieren, und führt [Variable Fonts](#variable_fonts) ein, die diesen viel feiner abgestuften Bereich von Schriftstärken nutzen können.

### Allgemeine Gewichtsnamen-Zuordnung

Die numerischen Werte `100` bis `900` entsprechen ungefähr den folgenden allgemeinen Gewichtsnamen:

| Wert | Allgemeiner Gewichtname     |
| ---- | --------------------------- |
| 100  | Dünn (Hairline)             |
| 200  | Extra Leicht (Ultra Leicht) |
| 300  | Leicht                      |
| 400  | Normal                      |
| 500  | Mittel                      |
| 600  | Halbfett (Demi Fett)        |
| 700  | Fett                        |
| 800  | Extra Fett (Ultra Fett)     |
| 900  | Schwarz (Schwer)            |

### Variable Fonts

Die meisten Schriftarten haben eine bestimmte Gewichtung, die einem der Zahlen in [Allgemeine Gewichtsnamen-Zuordnung](#allgemeine_gewichtsnamen-zuordnung) entspricht. Einige Schriftarten, sogenannte Variable Fonts, können jedoch einen Bereich von Gewichtungen mit mehr oder weniger feiner Granularität unterstützen, was dem Designer eine viel genauere Kontrolle über das gewählte Gewicht ermöglicht.

Für TrueType- oder OpenType-Variable-Fonts wird die "wght"-Variation verwendet, um variierende Gewichtungen zu implementieren.

## Barrierefreiheit

Menschen mit Sehschwäche können Schwierigkeiten beim Lesen von Text haben, der mit einem `font-weight`-Wert von `100` (Dünn/Hairline) oder `200` (Extra Leicht) eingerichtet ist, insbesondere wenn die Schriftart ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalgewicht in einer @font-face-Regel setzen

Das folgende Beispiel findet eine lokale Open Sans-Schriftart oder importiert sie und ermöglicht die Verwendung der Schriftart für normale Schriftstärken.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor
