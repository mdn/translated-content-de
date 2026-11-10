---
title: CSS-At-Rule-Deskriptor `font-width`
short-title: font-width
slug: Web/CSS/Reference/At-rules/@font-face/font-width
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{SeeCompatTable}}

> [!NOTE]
> Der Deskriptor `font-width` ist der moderne Ersatz für den Deskriptor {{cssxref("@font-face/font-stretch")}}, der als veralteter Alias weiterbesteht. Obwohl `font-width` der in der Spezifikation bevorzugte Name ist, wird `font-stretch` derzeit von mehr Browsern unterstützt. Weitere Informationen finden Sie im [Beispiel für einen Fallback](#einen_font-stretch-fallback_bereitstellen) und in der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität).

Mit dem [CSS](/de/docs/Web/CSS)-Deskriptor **`font-width`** können Sie für die in der At-Rule {{cssxref("@font-face")}} angegebenen Schriftarten eine normale, schmale oder breite Schriftvariante festlegen.

Für eine bestimmte Schriftfamilie können Sie verschiedene Schriftvarianten herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen. Anschließend können Sie mit dem Deskriptor `font-width` die Breite einer Schriftvariante ausdrücklich festlegen. Die verfügbaren Werte für den Deskriptor `font-width` entsprechen denen der gleichnamigen Eigenschaft {{cssxref("font-width")}}.

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

Der Deskriptor `font-width` akzeptiert einen einzelnen Wert aus der folgenden Liste.

### Werte

- `normal`
  - : Gibt eine Schriftvariante mit normaler Breite an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt eine schmalere Schriftvariante als `normal` an, wobei `ultra-condensed` am schmalsten ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt eine breitere Schriftvariante als `normal` an, wobei `ultra-expanded` am breitesten ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 50 % und 200 % (einschließlich). Negative Werte sind für diesen Deskriptor nicht zulässig.

In früheren Versionen der Spezifikation für `font-width` akzeptierte der Deskriptor nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax um einen `<percentage>`-Wert. Dadurch können variable Schriftarten eine kontinuierliche Abstufung der Zeichenbreiten anbieten. Bei variablen TrueType- oder OpenType-Schriftarten wird die Variation `wdth` verwendet, um unterschiedliche Breiten umzusetzen.

Wenn die Schriftart keine Variante bereitstellt, die genau dem angegebenen Wert entspricht, werden Werte unter `100%` einer schmalen Variante und Werte ab `100%` einer breiten Variante zugeordnet.

### Zuordnung von Schlüsselwörtern zu numerischen Werten

Die folgende Tabelle zeigt, welchen Prozentwerten die Schlüsselwörter entsprechen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Schlüsselwort</th>
      <th scope="col">Prozentwert</th>
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

Die meisten Schriftarten haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Variable Schriftarten können dagegen einen fein abgestuften Breitenbereich unterstützen. So haben Sie mehr Kontrolle über die gewählte Breite. Dafür eignen sich Prozentbereiche.

Bei variablen TrueType- oder OpenType-Schriftarten wird die Variation `wdth` verwendet, um unterschiedliche Glyphenbreiten umzusetzen.

## Barrierefreiheit

Menschen mit Legasthenie oder anderen kognitiven Beeinträchtigungen können Schwierigkeiten haben, zu schmale Schriftarten zu lesen. Das gilt insbesondere, wenn die Schrift ein [geringes Farbkontrastverhältnis](/de/docs/Web/CSS/Reference/Properties/color#accessibility) aufweist.

- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.8 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Einen Prozentbereich für font-width festlegen

Das folgende Beispiel verwendet die Schriftart [League Mono](https://www.theleagueofmoveabletype.com/league-mono). Mithilfe des Deskriptors `font-width` und unterschiedlicher Schlüsselwörter und Prozentwerte erzeugt es verschiedene Schriftfamilien aus derselben Schriftdatei.

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

{{EmbedLiveSample("setting_a_percentage_range_for_font-width", "100%", 200)}}

### Einen font-stretch-Fallback bereitstellen

Da `font-width` noch nicht von vielen Browsern unterstützt wird, können Sie den älteren Deskriptor {{cssxref("@font-face/font-stretch")}} als Fallback einfügen. Platzieren Sie `font-stretch` vor `font-width`, damit Browser, die den modernen Deskriptor unterstützen, diesen verwenden:

```css
@font-face {
  font-family: "MyFont";
  src: url("my-font.woff2") format("woff2");
  font-stretch: condensed; /* for browsers that don't support font-width */
  font-width: condensed;
}
```

> [!NOTE]
> Sie können dieses Fallback-Muster mit dem Plugin [postcss-preset-env](https://preset-env.cssdb.org/) für PostCSS automatisieren. Es enthält die Transformation [postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property), die `font-width`-Deklarationen automatisch in `font-stretch`-Deklarationen umwandelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Veralteter Alias-Deskriptor {{cssxref("@font-face/font-stretch")}} mit breiterer Browser-Unterstützung
- Deskriptor {{cssxref("@font-face/font-display", "font-display")}}
- Deskriptor {{cssxref("@font-face/font-family", "font-family")}}
- Deskriptor {{cssxref("@font-face/font-weight", "font-weight")}}
- Deskriptor {{cssxref("@font-face/font-style", "font-style")}}
- Eigenschaft {{cssxref("font-feature-settings", "font-feature-settings")}}
- Deskriptor {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- Deskriptor {{cssxref("@font-face/src", "src")}}
- Deskriptor {{cssxref("@font-face/unicode-range", "unicode-range")}}
