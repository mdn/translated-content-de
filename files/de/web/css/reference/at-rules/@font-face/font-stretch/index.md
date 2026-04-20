---
title: "`font-stretch` CSS-Satzbeschreibungsmerkmal"
short-title: font-stretch
slug: Web/CSS/Reference/At-rules/@font-face/font-stretch
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

> [!NOTE]
> Das `font-stretch` Deskriptormerkmal wurde in der [CSS Fonts Spezifikation](https://drafts.csswg.org/css-fonts/#font-stretch-desc) in {{cssxref("@font-face/font-width")}} umbenannt. Um die Kompatibilität zu erhalten, bleibt die Spezifikation `font-stretch` als ein veraltetes Alias für das `font-width` Deskriptormerkmal erhalten.

Das **`font-stretch`** [CSS](/de/docs/Web/CSS) Deskriptormerkmal ermöglicht es Autoren, ein normales, komprimiertes oder erweitertes Schriftbild für die Schriften anzugeben, die in der {{cssxref("@font-face")}} Regel spezifiziert sind.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftstile herunterladen, die den verschiedenen Stilen der gleichen Schriftfamilie entsprechen, und dann das `font-stretch` Deskriptormerkmal verwenden, um die Dehnung des Schriftbildes explizit anzugeben.

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

/* Multiple values */
font-stretch: 75% 125%;
font-stretch: condensed ultra-condensed;
```

Das `font-stretch` Deskriptormerkmal kann einen einzelnen Wert aus der untenstehenden Liste annehmen.

### Werte

- `normal`
  - : Gibt ein normalerweise komprimiertes Schriftbild an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt ein komprimierteres Schriftbild als normal an, wobei ultra-komprimiert das am meisten komprimierte ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt ein erweitertes Schriftbild als normal an, wobei ultra-erweitert das am meisten erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für dieses Deskriptormerkmal nicht zulässig.

In früheren Versionen der `font-stretch` Spezifikation akzeptiert das Deskriptormerkmal nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>` Wert zu akzeptieren. Dies ermöglicht variablen Schriften, eine kontinuierliche Variation der Zeichenbreiten anzubieten. Für TrueType- oder OpenType-Variable-Schriften wird die `wdth` Variation verwendet, um unterschiedliche Breiten zu implementieren.

Wenn die Schriftart kein Schriftbild bietet, das genau den angegebenen Wert entspricht, dann entsprechen Werte unter `100%` einem komprimierten Schriftbild, und Werte größer oder gleich `100%` einem erweiterten Schriftbild.

### Zuordnung von Schlüsselwörtern zu numerischen Werten

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

### Variable Schriften

Die meisten Schriften haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Variable Schriften können jedoch ein Spektrum an Breiten mit feiner Granularität unterstützen, was dem Designer ein größeres Maß an Kontrolle über die gewählte Gewichtsverteilung bietet. Für diesen Zweck sind Prozentsatzbereiche nützlich.

Für TrueType- oder OpenType-Variable-Schriften wird die `wdth` Variation verwendet, um unterschiedliche Glifbreiten zu implementieren.

## Barrierefreiheit

Menschen mit Legasthenie und anderen kognitiven Beeinträchtigungen können Schwierigkeiten haben, Schriften zu lesen, die zu stark komprimiert sind, insbesondere wenn die Schriftart ein [geringes Farbkontrastverhältnis](/de/docs/Web/CSS/Reference/Properties/color#accessibility) aufweist.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Einstellen eines Prozentsatzbereichs für `font-stretch`

Das folgende Beispiel verwendet die [League Mono](https://www.theleagueofmoveabletype.com/league-mono) Schriftart. Es synthetisiert verschiedene Schriftfamilien aus demselben Schriftdatei unter Verwendung des `font-stretch` Deskriptormerkmals mit unterschiedlichen Schlüsselwörtern und Prozentsätzen.

```html
<p>League Mono</p>
<p>League Mono</p>
<p>League Mono</p>
```

```css
@font-face {
  font-family: "League Mono Ultra Condensed";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: ultra-condensed; /* same as 50% */
}

@font-face {
  font-family: "League Mono Normal";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: 100%; /* same as normal */
}

@font-face {
  font-family: "League Mono Ultra Expanded";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: ultra-expanded; /* same as 200% */
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

{{EmbedLiveSample("Einstellen von Schriftdehnungsprozentsätzen", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Moderner {{cssxref("@font-face/font-width")}} Deskriptor, der `font-stretch` ersetzt
- {{cssxref("@font-face/font-display")}} Deskriptor
- {{cssxref("@font-face/font-family")}} Deskriptor
- {{cssxref("@font-face/font-weight")}} Deskriptor
- {{cssxref("@font-face/font-style")}} Deskriptor
- {{cssxref("font-feature-settings")}} Deskriptor
- {{cssxref("@font-face/font-variation-settings")}} Deskriptor
- {{cssxref("@font-face/src")}} Deskriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
