---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}{{deprecated_header}}

Der **`font-stretch`** CSS-Deskriptor ermöglicht es Autoren, ein normales, komprimiertes oder erweitertes Schriftbild für die im {{cssxref("@font-face")}}-Regelsatz angegebenen Schriften festzulegen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftbilder herunterladen, die den unterschiedlichen Stilvarianten derselben Schriftfamilie entsprechen, und dann den `font-stretch` Deskriptor verwenden, um die Dehnung des Schriftbildes explizit anzugeben. Die Werte für den CSS-Deskriptor sind die gleichen wie für die entsprechende Schrift-Eigenschaft.

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
  - : Gibt ein normales Schriftbild an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt ein stärker komprimiertes Schriftbild als normal an, wobei ultra-condensed das am stärksten komprimierte ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt ein stärker erweitertes Schriftbild als normal an, wobei ultra-expanded das am stärksten erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 50 % und 200 % (einschließlich). Negative Werte sind für diese Eigenschaft nicht erlaubt.

In früheren Versionen der `font-stretch`-Spezifikation akzeptierte die Eigenschaft nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>`-Wert zu akzeptieren. Dies ermöglicht variablen Schriften, ein Kontinuum von Zeichenbreiten anzubieten. Für TrueType- oder OpenType-Variable Fonts wird die "wdth"-Variation verwendet, um unterschiedliche Breiten umzusetzen.

Wenn die Schriftart kein Gesicht bietet, das genau dem angegebenen Wert entspricht, dann werden Werte unter 100 % mit einem schmaleren Gesicht verknüpft und Werte größer oder gleich 100 % mit einem breiteren Gesicht verknüpft.

### Zuordnung von Schlüsselwörtern zu numerischen Werten

Die folgende Tabelle zeigt die Zuordnung zwischen Schlüsselwortwerten und numerischen Prozentwerten:

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

### Variable Fonts

Die meisten Schriften haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Einige Schriften, sogenannte variable Schriften, können jedoch einen Bereich von Dehnungen mit mehr oder weniger feiner Granularität unterstützen, und das kann dem Designer eine viel genauere Kontrolle über die gewählte Gewichtung geben. Für diese sind Prozentbereiche nützlich.

Für TrueType- oder OpenType-Variable Fonts wird die "wdth"-Variation verwendet, um unterschiedliche Glyphenbreiten umzusetzen.

## Barrierefreiheit

Personen mit Dyslexie und anderen kognitiven Beeinträchtigungen können Schwierigkeiten beim Lesen von Schriften haben, die zu stark komprimiert sind, insbesondere wenn die Schrift ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Understanding WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erläuterung des Erfolgs-Kriteriums 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung eines Prozentsatzbereichs für font-stretch

Das folgende Beispiel findet eine lokale Open Sans-Schriftart oder importiert sie und erlaubt die Verwendung der Schrift in normalen, halb komprimierten und halb erweiterten Zuständen.

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
