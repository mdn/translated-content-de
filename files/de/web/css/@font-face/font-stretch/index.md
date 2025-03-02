---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{CSSRef}}{{deprecated_header}}

Der **`font-stretch`** CSS-Deskriptor ermöglicht es Autoren, ein normales, komprimiertes oder erweitertes Schriftbild für die im {{cssxref("@font-face")}} At-Regel angegebenen Schriftarten festzulegen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilvarianten derselben Schriftfamilie entsprechen, und dann den `font-stretch` Deskriptor verwenden, um die Streckung des Schriftschnitts explizit anzugeben. Die Werte für diesen CSS-Deskriptor sind die gleichen wie für seine entsprechende Schriftarten-Eigenschaft.

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

Die Eigenschaft `font-stretch` wird unter Verwendung eines der unten aufgeführten Werte beschrieben.

### Werte

- `normal`
  - : Gibt ein normales Schriftbild an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt ein engeres Schriftbild als normal an, wobei ultra-condensed das am stärksten komprimierte ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt ein erweitertes Schriftbild als normal an, wobei ultra-expanded das am weitesten erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diese Eigenschaft nicht zulässig.

In früheren Versionen der `font-stretch`-Spezifikation akzeptiert die Eigenschaft nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>` Wert zu akzeptieren. Dies ermöglicht es variablen Schriftarten, etwas wie ein Kontinuum von Zeichenbreiten anzubieten. Für TrueType- oder OpenType-Variable Schriftarten wird die "wdth"-Variante verwendet, um unterschiedliche Breiten zu implementieren.

Wenn die Schriftart kein Schriftbild bereitstellt, das genau dem angegebenen Wert entspricht, werden Werte kleiner als 100% einem schmaleren Schriftbild zugeordnet, und Werte gleich oder größer als 100% einem breiteren Schriftbild.

### Schlüsselwort-zu-numerische Abbildung

Die folgende Tabelle zeigt die Abbildung zwischen Schlüsselwortwerten und numerischen Prozentsätzen:

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

Die meisten Schriftarten haben eine bestimmte Breite, die einem der Schlüsselwörterwerte entspricht. Einige Schriftarten, sogenannte variable Schriftarten, können jedoch eine Reihe von Streckungen mit mehr oder weniger feiner Granularität unterstützen, und dies kann dem Designer einen wesentlich genaueren Grad an Kontrolle über das gewählte Gewicht geben. Dafür sind Prozentsatzbereiche nützlich.

Für TrueType- oder OpenType-Variable Schriftarten wird die "wdth"-Variante verwendet, um unterschiedliche Glyphenbreiten zu implementieren.

## Barrierefreiheit

Menschen mit Dyslexie und anderen kognitiven Bedingungen könnten Schwierigkeiten haben, Schriften zu lesen, die zu komprimiert sind, insbesondere wenn die Schriftart ein [Kontrastverhältnis mit niedrigem Farbumfang](/de/docs/Web/CSS/color#accessibility) hat.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung eines Prozentsatzbereichs für font-stretch

Die folgenden finden eine lokale Open Sans Schriftart oder importieren sie und ermöglichen die Nutzung der Schriftart für normale, semi-kondensierte und semi-erweiterte Zustände.

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
