---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

{{deprecated_header}}

Der **`font-stretch`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Autoren, ein normales, komprimiertes oder erweitertes Schriftbild für die im {{cssxref("@font-face")}} At-Regel spezifizierten Schriften festzulegen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftarten herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den `font-stretch` Deskriptor verwenden, um die Dehnung des Schriftbildes explizit anzugeben. Die Werte für den CSS Deskriptor sind die gleichen wie die der entsprechenden Schrift-Eigenschaft.

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

Die `font-stretch` Eigenschaft wird unter Verwendung eines der unten aufgeführten Werte beschrieben.

### Werte

- `normal`
  - : Gibt ein normales Schriftbild an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt ein komprimierteres Schriftbild als normal an, wobei ultra-condensed die stärkste Komprimierung darstellt.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt ein erweitertes Schriftbild als normal an, wobei ultra-expanded die größte Erweiterung darstellt.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diese Eigenschaft nicht zulässig.

In früheren Versionen der `font-stretch` Spezifikation akzeptierte die Eigenschaft nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>` Wert zu akzeptieren. Dies ermöglicht es variablen Schriften, etwas mehr wie ein Kontinuum von Zeichenbreiten anzubieten. Bei TrueType- oder OpenType-variablen Schriften wird die "wdth"-Variation verwendet, um unterschiedliche Breiten zu implementieren.

Wenn die Schriftart kein Schriftbild bietet, das genau dem angegebenen Wert entspricht, dann werden Werte kleiner als 100% mit einem schmaleren Schriftbild und Werte größer oder gleich 100% mit einem breiteren Schriftbild übersetzt.

### Zuordnung von Schlüsselwörtern zu numerischen Werten

Die folgende Tabelle zeigt die Zuordnungen zwischen Schlüsselwortwerten und numerischen Prozentsätzen:

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

### Variable Schriften

Die meisten Schriften haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Einige Schriften, sogenannte variable Schriften, können jedoch ein Spektrum an Dehnungen mit mehr oder weniger feiner Granularität unterstützen, was dem Designer eine genauere Kontrolle über das gewählte Gewicht gibt. Dafür sind Prozentsatzbereiche nützlich.

Bei TrueType- oder OpenType-variablen Schriften wird die "wdth"-Variation verwendet, um unterschiedliche Glyphebreiten zu implementieren.

## Barrierefreiheit

Menschen mit Legasthenie und anderen kognitiven Bedingungen können Schwierigkeiten haben, Schriften zu lesen, die zu stark komprimiert sind, insbesondere wenn die Schrift ein [niedriges Kontrastverhältnis von Farben](/de/docs/Web/CSS/color#accessibility) hat.

- [MDN Understanding WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Festlegen eines Prozentsatzbereichs für font-stretch

Das folgende Beispiel sucht eine lokale Open Sans Schriftart oder importiert sie und erlaubt die Verwendung der Schrift für normale, halbkomprimierte und halberweiterte Zustände.

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
