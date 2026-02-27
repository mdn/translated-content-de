---
title: font-width
slug: Web/CSS/Reference/At-rules/@font-face/font-width
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

> [!NOTE]
> Der `font-width` Deskriptor ist der moderne Ersatz für den {{cssxref("@font-face/font-stretch")}} Deskriptor, welcher ein veralteter Alias ist. Während `font-width` der bevorzugte Name der Spezifikation ist, hat `font-stretch` derzeit eine breitere Browser-Unterstützung. Überprüfen Sie das [Fallback-Beispiel](#bereitstellung_eines_font-stretch-fallbacks) und die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle für Details.

Der **`font-width`** [CSS](/de/docs/Web/CSS) Deskriptor erlaubt es Autoren, ein normales, komprimiertes oder erweitertes Schriftbild für die im {{cssxref("@font-face")}} Regelwerk angegebenen Schriftarten zu definieren.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftbilder herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den `font-width` Deskriptor verwenden, um die Breite des Schriftbildes explizit anzugeben. Die verfügbaren Werte des `font-width` Deskriptors sind dieselben wie die der entsprechenden {{cssxref("font-width")}} Eigenschaft.

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

Der `font-width` Deskriptor kann einen einzelnen Wert aus der folgenden Liste annehmen.

### Werte

- `normal`
  - : Spezifiziert ein normalerweise komprimiertes Schriftbild.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Spezifiziert ein stärker komprimiertes Schriftbild als normal, wobei ultra-condensed am stärksten komprimiert ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Spezifiziert ein stärker erweitertes Schriftbild als normal, wobei ultra-expanded am meisten erweitert ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diesen Deskriptor nicht erlaubt.

In früheren Versionen der `font-width` Spezifikation akzeptierte der Deskriptor nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>` Wert zu akzeptieren. Dies ermöglicht variablen Schriften eine kontinuierliche Variation der Zeichenbreiten anzubieten. Für TrueType oder OpenType variiert die `wdth` Variation zur Umsetzung variierender Breiten.

Wenn die Schriftart kein Schriftbild bietet, das genau zum angegebenen Wert passt, werden Werte kleiner als `100%` auf ein komprimiertes Schriftbild abgebildet, und Werte größer oder gleich `100%` auf ein erweitertes Schriftbild.

### Zuordnung von Schlüsselwörtern zu numerischen Werten

Die folgende Tabelle zeigt die Zuordnung von Schlüsselwortwerten zu numerischen Prozentwerten:

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

### Variable Schriften

Die meisten Schriften haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Allerdings können variable Schriften einen Bereich von Breiten mit feiner Granulierung unterstützen, was dem Designer eine größere Kontrolle über das gewählte Gewicht ermöglicht. Dafür sind Prozentbereiche nützlich.

Für TrueType oder OpenType variable Schriften wird die 'wdth' Variation verwendet, um variierende Glyphen-Breiten umzusetzen.

## Barrierefreiheit

Menschen mit Legasthenie und anderen kognitiven Einschränkungen können Schwierigkeiten haben, Schriftarten zu lesen, die zu stark komprimiert sind, insbesondere wenn die Schrift einen [niedrigen Farbkontrast](/de/docs/Web/CSS/Reference/Properties/color#accessibility) aufweist.

- [MDN Understanding WCAG, Leitlinie 1.4 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Festlegen eines Prozentbereichs für `font-width`

Das folgende Beispiel verwendet die [League Mono](https://www.theleagueofmoveabletype.com/league-mono) Schriftart. Es synthetisiert unterschiedliche Schriftfamilien aus derselben Schriftdatenquelle unter Verwendung des `font-width` Deskriptors mit verschiedenen Schlüsselwörtern und Prozentsätzen.

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

{{EmbedLiveSample("Einstellungen der Schriftbreiten-Prozentsätze", "100%", 200)}}

### Bereitstellung eines Font-Stretch-Fallbacks

Da `font-width` derzeit noch keine breite Browser-Unterstützung hat, möchten Sie möglicherweise den veralteten {{cssxref("@font-face/font-stretch")}} Deskriptor als Fallback einfügen. Platzieren Sie `font-stretch` vor `font-width`, damit unterstützende Browser den modernen Deskriptor verwenden:

```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2");
  font-stretch: condensed; /* for browsers that don't support font-width */
  font-width: condensed;
}
```

> [!NOTE]
> Sie können dieses Fallback-Muster mit dem [postcss-preset-env](https://preset-env.cssdb.org/) Plugin für PostCSS automatisieren, das die [postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property) Transformationen enthält, um `font-width` Deklarationen automatisch in `font-stretch` zu konvertieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Legacy {{cssxref("@font-face/font-stretch")}} Alias Deskriptor mit besserer Browser-Unterstützung
- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor
- {{cssxref("@font-face/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor
- {{cssxref("@font-face/font-style", "font-style")}} Deskriptor
- {{cssxref("font-feature-settings", "font-feature-settings")}} Eigenschaft
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor
- {{cssxref("@font-face/src", "src")}} Deskriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
