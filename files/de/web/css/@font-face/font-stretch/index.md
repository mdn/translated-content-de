---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Der CSS-Deskriptor **`font-stretch`** ermöglicht es Autoren, eine normale, kondensierte oder erweiterte Schriftart für die im {{cssxref("@font-face")}}-At-Regel angegebenen Schriftarten zu spezifizieren.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftstile herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den `font-stretch`-Deskriptor verwenden, um die Dehnung der Schriftart explizit festzulegen. Die Werte für den CSS-Deskriptor sind die gleichen wie die des entsprechenden Schriftarteigenschafts.

## Syntax

```css
/* Single values */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* multiple values */
font-stretch: 75% 125%;
font-stretch: condensed ultra-condensed;
```

Die `font-stretch`-Eigenschaft wird mit einem der unten aufgeführten Werte beschrieben.

### Werte

- `normal`
  - : Gibt eine normale Schriftart an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt eine stärker kondensierte Schriftart als normal an, wobei ultra-condensed die kondensierteste ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt eine stärker erweiterte Schriftart als normal an, wobei ultra-expanded die erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diese Eigenschaft nicht erlaubt.

In früheren Versionen der `font-stretch`-Spezifikation akzeptiert die Eigenschaft nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>`-Wert zu akzeptieren. Dies ermöglicht es variablen Schriftarten, so etwas wie ein Kontinuum von Zeichenweiten anzubieten. Für TrueType- oder OpenType-Variable-Schriftarten wird die "wdth"-Variation verwendet, um unterschiedliche Breiten zu implementieren.

Wenn die Schriftart kein Gesicht bietet, das genau dem angegebenen Wert entspricht, werden Werte unter 100 % einem schmaleren Gesicht zugeordnet, und Werte größer oder gleich 100 % einem breiteren Gesicht.

### Zuordnung von Schlüsselwort zu numerischem Wert

Die folgende Tabelle zeigt die Zuordnung zwischen Schlüsselwortwerten und numerischen Prozentsätzen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Schlüsselwort</th>
      <th scope="col">Prozentsatz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ultra-condensed</code></td>
      <td>50%</td>
    </tr>
    <tr>
      <td><code>extra-condensed</code></td>
      <td>62.5%</td>
    </tr>
    <tr>
      <td><code>condensed</code></td>
      <td>75%</td>
    </tr>
    <tr>
      <td><code>semi-condensed</code></td>
      <td>87.5%</td>
    </tr>
    <tr>
      <td><code>normal</code></td>
      <td>100%</td>
    </tr>
    <tr>
      <td><code>semi-expanded</code></td>
      <td>112.5%</td>
    </tr>
    <tr>
      <td><code>expanded</code></td>
      <td>125%</td>
    </tr>
    <tr>
      <td><code>extra-expanded</code></td>
      <td>150%</td>
    </tr>
    <tr>
      <td><code>ultra-expanded</code></td>
      <td>200%</td>
    </tr>
  </tbody>
</table>

### Variable Schriftarten

Die meisten Schriftarten haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Einige Schriftarten, sogenannte variable Schriftarten, können jedoch einen Bereich von Streckungen mit mehr oder weniger feiner Granularität unterstützen, wodurch der Designer eine viel engere Kontrolle über das gewählte Gewicht erhält. Für diese sind Prozentsatzbereiche nützlich.

Für TrueType- oder OpenType-Variable-Schriftarten wird die "wdth"-Variation verwendet, um unterschiedliche Glyphenbreiten zu implementieren.

## Barrierefreiheit

Menschen mit Dyslexie und anderen kognitiven Beeinträchtigungen können Schwierigkeiten beim Lesen von zu stark kondensierten Schriftarten haben, insbesondere wenn die Schrift eine [geringe Kontrastfarbverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen eines Prozentsatzbereichs für font-stretch

Der folgende Code sucht nach einer lokal verfügbaren Open Sans Schriftart oder importiert sie und ermöglicht die Verwendung der Schriftart für normale, semi-kondensierte und semi-erweiterte Zustände.

```css
@font-face {
  font-family: "Open Sans";
  src:
    local("Open Sans") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-stretch: 87.5% 112.5%;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
