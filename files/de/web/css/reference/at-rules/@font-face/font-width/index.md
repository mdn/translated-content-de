---
title: "`font-width` CSS at-rule descriptor"
short-title: font-width
slug: Web/CSS/Reference/At-rules/@font-face/font-width
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

{{SeeCompatTable}}

> [!NOTE]
> Der `font-width` Deskriptor ist der moderne Ersatz für den {{cssxref("@font-face/font-stretch")}} Deskriptor, welcher ein veraltetes Alias darstellt. Obwohl `font-width` der bevorzugte Name in der Spezifikation ist, hat `font-stretch` aktuell eine größere Browser-Unterstützung. Lesen Sie das [Fallback-Beispiel](#bereitstellen_eines_font-stretch-fallbacks) und die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle für Details.

Der **`font-width`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Autoren, ein normales, verengtes oder erweitertes Schriftbild für die Schriftarten, die in der {{cssxref("@font-face")}} At-Regel angegeben sind, zu bestimmen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftbilder herunterladen, die den unterschiedlichen Stilen der gleichen Schriftfamilie entsprechen, und dann den `font-width` Deskriptor verwenden, um die Breite des Schriftbildes explizit festzulegen. Die verfügbaren `font-width` Deskriptorwerte sind die gleichen wie die der entsprechenden {{cssxref("font-width")}} Eigenschaft.

## Syntax

```css
/* Single values */
font-width: ultra-condensed;
font-width: extra-condensed;
font-width: condensed;
font-width: semi-condensed;
font-width: normal;
font-width: semi-expanded;
font-width: expanded;
font-width: extra-expanded;
font-width: ultra-expanded;
font-width: 50%;
font-width: 100%;
font-width: 200%;

/* Multiple values */
font-width: 75% 125%;
font-width: condensed ultra-condensed;
```

Der `font-width` Deskriptor kann einen einzelnen Wert aus der nachstehenden Liste annehmen.

### Werte

- `normal`
  - : Gibt ein normalerweise verengtes Schriftbild an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt ein stärker verengtes Schriftbild als normal an, wobei ultra-condensed das am stärksten verengte darstellt.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt ein stärker erweitertes Schriftbild als normal an, wobei ultra-expanded das am weitesten erweiterte darstellt.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diesen Deskriptor nicht erlaubt.

In früheren Versionen der `font-width` Spezifikation akzeptiert der Deskriptor nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>` Wert zu akzeptieren. Dies ermöglicht variablen Schriften, eine kontinuierliche Variation der Buchstabenbreiten zu bieten. Für TrueType oder OpenType variable Schriftarten wird die `wdth` Variation verwendet, um unterschiedliche Breiten zu implementieren.

Wenn die Schriftart kein Schriftbild bietet, das genau dem angegebenen Wert entspricht, werden Werte unter `100%` einem verengten Schriftbild zugeordnet, und Werte größer oder gleich `100%` einem erweiterten Schriftbild.

### Zuordnung von Schlüsselwort zu numerischem Wert

Die nachstehende Tabelle zeigt die Zuordnung zwischen Schlüsselwortwerten und numerischen Prozent:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Schlüsselwort</th>
      <th scope="col">Prozent</th>
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

Die meisten Schriftarten haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Variable Schriftarten hingegen können einen Bereich von Breiten mit feiner Granularität unterstützen, was dem Designer eine größere Kontrolle über das gewählte Gewicht gibt. Dafür sind Prozentsatzbereiche nützlich.

Für TrueType oder OpenType variable Schriftarten wird die `wdth` Variation verwendet, um unterschiedliche Glyphenbreiten zu implementieren.

## Barrierefreiheit

Personen mit Legasthenie und anderen kognitiven Bedingungen können Schwierigkeiten haben, Schriften zu lesen, die zu stark verengt sind, insbesondere wenn die Schrift ein [niedriges Farbkontrastverhältnis](/de/docs/Web/CSS/Reference/Properties/color#accessibility) hat.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Festlegen eines Prozentsatzbereichs für font-width

Das folgende Beispiel verwendet die [League Mono](https://www.theleagueofmoveabletype.com/league-mono) Schriftart. Es synthetisiert verschiedene Schriftfamilien aus derselben Schriftdatei mit dem `font-width` Deskriptor, der mit verschiedenen Schlüsselwörtern und Prozentsätzen arbeitet.

```html
<p>League Mono</p>
<p>League Mono</p>
<p>League Mono</p>
```

```css
@font-face {
  font-family: "League Mono Ultra Condensed";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: ultra-condensed; /* same as 50% */
}

@font-face {
  font-family: "League Mono Normal";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: 100%; /* same as normal */
}

@font-face {
  font-family: "League Mono Ultra Expanded";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: ultra-expanded; /* same as 200% */
}

p:nth-child(1) {
  font-family: "League Mono Ultra Condensed", sans-serif;
}

p:nth-child(2) {
  font-family: "League Mono Normal", sans-serif;
}

p:nth-child(3) {
  font-family: "League Mono Ultra Expanded", sans-serif;
}
```

{{EmbedLiveSample("Setting font width percentages", "100%", 200)}}

### Bereitstellen eines Font-Stretch-Fallbacks

Da `font-width` derzeit noch keine breite Browser-Unterstützung hat, möchten Sie möglicherweise den alten {{cssxref("@font-face/font-stretch")}} Deskriptor als Fallback einschließen. Platzieren Sie `font-stretch` vor `font-width`, sodass unterstützende Browser den modernen Deskriptor verwenden:

```css
@font-face {
  font-family: "MyFont";
  src: url("my-font.woff2") format("woff2");
  font-stretch: condensed; /* for browsers that don't support font-width */
  font-width: condensed;
}
```

> [!NOTE]
> Sie können dieses Fallback-Muster mit dem [postcss-preset-env](https://preset-env.cssdb.org/) Plugin für PostCSS automatisieren, das die [postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property) Transformation beinhaltet, um `font-width` Deklarationen automatisch in `font-stretch` umzuwandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Veralteter {{cssxref("@font-face/font-stretch")}} Alias Deskriptor mit besserer Browser-Unterstützung
- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor
- {{cssxref("@font-face/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor
- {{cssxref("@font-face/font-style", "font-style")}} Deskriptor
- {{cssxref("font-feature-settings", "font-feature-settings")}} Eigenschaft
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor
- {{cssxref("@font-face/src", "src")}} Deskriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
