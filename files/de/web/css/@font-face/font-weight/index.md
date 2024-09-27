---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Der **`font-weight`** CSS-Deskriptor ermöglicht es Autoren, Schriftgewichte für die im {{cssxref("@font-face")}}-Regelsatz spezifizierten Schriften festzulegen. Die {{cssxref("font-weight")}}-Eigenschaft kann separat verwendet werden, um festzulegen, wie dick oder dünn Zeichen in Text angezeigt werden sollen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den verschiedenen Stilen derselben Schriftfamilie entsprechen, und dann den `font-weight`-Deskriptor verwenden, um die Gewichtungen des Schriftschnitts explizit festzulegen. Die Werte für den CSS-Deskriptor sind dieselben wie bei der entsprechenden Schrift-Eigenschaft.

Für eine bestimmte Schriftfamilie stehen in der Regel nur begrenzte Gewichtungen zur Verfügung. Wenn ein angegebenes Gewicht nicht existiert, wird ein nahegelegenes Gewicht verwendet. Schriften ohne fette Schriftart werden oft vom Benutzeragenten synthetisiert. Um dies zu verhindern, verwenden Sie die {{cssxref('font-synthesis')}}-Kurzschreibweise.

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
  - : Normales Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fettgedrucktes Schriftgewicht. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 1 und 1000, einschließlich. Höhere Zahlen repräsentieren Gewichte, die fetter sind als (oder so fett wie) niedrigere Zahlen. Einige häufig genutzte Werte entsprechen gängigen Gewichtsnamen, wie im Abschnitt [Common weight name mapping](#zuordnung_von_allgemeinen_gewichtsnamen) unten beschrieben.

In früheren Versionen der `font-weight`-Spezifikation akzeptiert die Eigenschaft nur Schlüsselwortwerte und die numerischen Werte 100, 200, 300, 400, 500, 600, 700, 800 und 900; nicht-variable Schriften können wirklich nur diese festgelegten Werte verwenden, obwohl feinkörnige Werte (z.B. 451) für nicht-variable Schriften in einen dieser Werte übersetzt werden.

CSS Fonts Level 4 erweitert die Syntax, um jede Zahl zwischen 1 und 1000, einschließlich, zu akzeptieren und führt [Variable Fonts](#variable_schriften) ein, die von diesem viel feinkörnigeren Bereich von Schriftgewichten profitieren können.

### Zuordnung von allgemeinen Gewichtsnamen

Die numerischen Werte `100` bis `900` entsprechen ungefähr den folgenden allgemeinen Gewichtsnamen:

| Wert | Allgemeiner Gewichtsnamen  |
| ---- | -------------------------- |
| 100  | Dünn (Hairline)            |
| 200  | Extra Leicht (Ultra Light) |
| 300  | Leicht                     |
| 400  | Normal                     |
| 500  | Mittel                     |
| 600  | Halb Fett (Demi Bold)      |
| 700  | Fett                       |
| 800  | Extra Fett (Ultra Bold)    |
| 900  | Schwarz (Heavy)            |

### Variable Schriften

Die meisten Schriften haben ein bestimmtes Gewicht, das einem der Zahlen in [Zuordnung von allgemeinen Gewichtsnamen](#zuordnung_von_allgemeinen_gewichtsnamen) entspricht. Einige Schriften, sogenannte Variable Fonts, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen, was dem Designer eine viel genauere Kontrolle über das gewählte Gewicht verschafft.

Für TrueType- oder OpenType-Variable-Schriften wird die "wght"-Variante verwendet, um variierende Gewichte zu implementieren.

## Barrierefreiheit

Personen mit Sehbehinderungen könnten Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight`-Wert von `100` (Dünn/Hairline) oder `200` (Extra Leicht) festgelegt ist, insbesondere wenn die Schrift ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verstehen von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Das Verständnis des Erfolgskriteriums 1.4.8 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des normalen Schriftgewichts in einer @font-face-Regel

Das folgende Beispiel findet eine lokale Open Sans-Schriftart oder importiert sie und ermöglicht die Verwendung der Schriftart für normale Schriftgewichte.

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
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
