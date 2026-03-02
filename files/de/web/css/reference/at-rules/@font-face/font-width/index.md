---
title: font-width
slug: Web/CSS/Reference/At-rules/@font-face/font-width
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{SeeCompatTable}}

> [!NOTE]
> Der `font-width`-Deskriptor ist der moderne Ersatz für den {{cssxref("@font-face/font-stretch")}}-Deskriptor, welcher ein veraltetes Alias ist. Während `font-width` der bevorzugte Name der Spezifikation ist, hat `font-stretch` derzeit eine breitere Browser-Unterstützung. Überprüfen Sie das [Fallback-Beispiel](#bereitstellen_eines_font-stretch-fallbacks) und die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle für Details.

Der **`font-width`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Autoren, ein normales, komprimiertes oder erweitertes Gesicht für die in der {{cssxref("@font-face")}}-At-Regel angegebenen Schriften zu spezifizieren.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den verschiedenen Stilen derselben Schriftfamilie entsprechen, und dann den `font-width`-Deskriptor verwenden, um die Breite des Schriftschnitts explizit anzugeben. Die verfügbaren Werte für den `font-width`-Deskriptor sind die gleichen wie die der entsprechenden {{cssxref("font-width")}}-Eigenschaft.

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

Der `font-width`-Deskriptor kann einen einzelnen Wert aus der nachstehenden Liste annehmen.

### Werte

- `normal`
  - : Spezifiziert ein normales komprimiertes Schriftschnitt.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Spezifiziert einen stärker komprimierten Schriftschnitt als normal, wobei ultra-condensed der am stärksten komprimierte ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Spezifiziert einen stärker erweiterten Schriftschnitt als normal, wobei ultra-expanded der am stärksten erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diesen Deskriptor nicht erlaubt.

In früheren Versionen der `font-width`-Spezifikation akzeptierte der Deskriptor nur die neun Schlüsselwort-Werte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>`-Wert zu akzeptieren. Dies ermöglicht es variablen Schriften, eine kontinuierliche Variation der Zeichenbreiten anzubieten. Für TrueType- oder OpenType-Variable-Schriften wird die `wdth`-Variation verwendet, um unterschiedliche Breiten zu implementieren.

Wenn die Schriftart kein Gesicht bietet, das genau mit dem angegebenen Wert übereinstimmt, werden Werte unter `100%` einem komprimierten Gesicht zugeordnet, und Werte größer oder gleich `100%` werden einem erweiterten Gesicht zugeordnet.

### Zuordnung von Schlüsselwörtern zu numerischen Werten

Die folgende Tabelle zeigt die Zuordnung zwischen Schlüsselwortwerten und numerischen Prozenten:

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
      <td>62,5%</td>
    </tr>
    <tr>
      <td><code>condensed</code></td>
      <td>75%</td>
    </tr>
    <tr>
      <td><code>semi-condensed</code></td>
      <td>87,5%</td>
    </tr>
    <tr>
      <td><code>normal</code></td>
      <td>100%</td>
    </tr>
    <tr>
      <td><code>semi-expanded</code></td>
      <td>112,5%</td>
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

Die meisten Schriften haben eine bestimmte Breite, die einem der Schlüsselbegriff-Werte entspricht. Variable Schriften können jedoch einen Bereich von Breiten mit feiner Granularität unterstützen, was dem Designer mehr Kontrolle über das gewählte Gewicht gibt. Für diesen Zweck sind Prozentsatzbereiche nützlich.

Für TrueType- oder OpenType-Variable-Schriften wird die `wdth`-Variation verwendet, um unterschiedliche Glyphenbreiten zu implementieren.

## Barrierefreiheit

Menschen mit Dyslexie und anderen kognitiven Bedingungen können Schwierigkeiten haben, komprimierte Schriften zu lesen, insbesondere wenn die Schrift eine [geringe Farbkontrastverhältnis](/de/docs/Web/CSS/Reference/Properties/color#accessibility) hat.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständigung des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Einstellen eines Prozentsatzbereichs für font-width

Das folgende Beispiel verwendet die [League Mono](https://www.theleagueofmoveabletype.com/league-mono) Schriftart. Es synthetisiert verschiedene Schriftfamilien aus derselben Schriftdatei unter Verwendung des `font-width`-Deskriptors mit unterschiedlichen Schlüsselwörtern und Prozentsätzen.

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

{{EmbedLiveSample("Festlegen von Schriftbreiten-Prozentsätzen", "100%", 200)}}

### Bereitstellen eines Font-Stretch-Fallbacks

Da `font-width` noch keine breite Browser-Unterstützung hat, möchten Sie möglicherweise den veralteten {{cssxref("@font-face/font-stretch")}}-Deskriptor als Fallback einfügen. Platzieren Sie `font-stretch` vor `font-width`, damit unterstützte Browser den modernen Deskriptor verwenden:

```css
@font-face {
  font-family: "MyFont";
  src: url("my-font.woff2") format("woff2");
  font-stretch: condensed; /* for browsers that don't support font-width */
  font-width: condensed;
}
```

> [!NOTE]
> Sie können dieses Fallback-Muster automatisieren, indem Sie das [postcss-preset-env](https://preset-env.cssdb.org/) Plugin für PostCSS verwenden, das die [postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property) Transformation enthält, um `font-width`-Deklarationen automatisch in `font-stretch` zu konvertieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Veralteter {{cssxref("@font-face/font-stretch")}} Alias-Deskriptor mit besserer Browser-Unterstützung
- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor
- {{cssxref("@font-face/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor
- {{cssxref("@font-face/font-style", "font-style")}} Deskriptor
- {{cssxref("font-feature-settings", "font-feature-settings")}} Eigenschaft
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor
- {{cssxref("@font-face/src", "src")}} Deskriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
