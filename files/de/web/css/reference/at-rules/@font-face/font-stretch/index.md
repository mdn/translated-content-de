---
title: CSS-At-Rule-Deskriptor `font-stretch`
short-title: font-stretch
slug: Web/CSS/Reference/At-rules/@font-face/font-stretch
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

> [!NOTE]
> Der Deskriptor `font-stretch` wurde in der [CSS-Fonts-Spezifikation](https://drafts.csswg.org/css-fonts/#font-stretch-desc) in {{cssxref("@font-face/font-width")}} umbenannt. Um die Kompatibilität zu erhalten, bleibt `font-stretch` in der Spezifikation als veralteter Alias für den Deskriptor `font-width` erhalten.

Mit dem **`font-stretch`**-Deskriptor von [CSS](/de/docs/Web/CSS) können Sie für die in der {{cssxref("@font-face")}}-At-Rule angegebenen Schriftarten einen Schriftstil mit normaler, schmalerer oder breiterer Zeichenbreite festlegen.

Für eine bestimmte Schriftfamilie können Sie verschiedene Schriftstile herunterladen, die den unterschiedlichen Varianten derselben Schriftfamilie entsprechen, und dann mit dem Deskriptor `font-stretch` die Zeichenbreite des jeweiligen Schriftstils ausdrücklich festlegen.

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

Der Deskriptor `font-stretch` kann einen einzelnen Wert aus der folgenden Liste annehmen.

### Werte

- `normal`
  - : Gibt einen Schriftstil mit normaler Zeichenbreite an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt einen Schriftstil mit schmaleren Zeichen als normal an, wobei `ultra-condensed` die schmalsten Zeichen bezeichnet.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt einen Schriftstil mit breiteren Zeichen als normal an, wobei `ultra-expanded` die breitesten Zeichen bezeichnet.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 50 % und 200 % (einschließlich). Negative Werte sind für diesen Deskriptor nicht zulässig.

In früheren Versionen der `font-stretch`-Spezifikation akzeptierte der Deskriptor nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, sodass auch ein `<percentage>`-Wert zulässig ist. Dadurch können variable Schriftarten eine stufenlose Variation der Zeichenbreiten anbieten. Bei variablen TrueType- oder OpenType-Schriftarten wird die Variation `wdth` verwendet, um unterschiedliche Breiten umzusetzen.

Wenn die Schriftart keinen Schriftstil bereitstellt, der genau dem angegebenen Wert entspricht, werden Werte unter `100%` einem schmaleren Schriftstil und Werte ab `100%` einem breiteren Schriftstil zugeordnet.

### Zuordnung von Schlüsselwörtern zu Zahlenwerten

Die folgende Tabelle zeigt die Zuordnung zwischen Schlüsselwortwerten und Prozentwerten:

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

Die meisten Schriftarten haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Variable Schriftarten können dagegen einen Bereich von Breiten mit feiner Abstufung unterstützen. Dadurch haben Gestaltende mehr Kontrolle über die gewählte Breite. Hierfür sind Prozentbereiche nützlich.

Bei variablen TrueType- oder OpenType-Schriftarten wird die Variation `wdth` verwendet, um unterschiedliche Glyphenbreiten umzusetzen.

## Barrierefreiheit

Menschen mit Legasthenie und anderen kognitiven Beeinträchtigungen können Schwierigkeiten haben, Schriftarten mit zu schmalen Zeichen zu lesen, insbesondere wenn die Schrift einen [geringen Farbkontrast](/de/docs/Web/CSS/Reference/Properties/color#accessibility) aufweist.

- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.8 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Einen Prozentbereich für font-stretch festlegen

Im folgenden Beispiel wird die Schriftart [League Mono](https://www.theleagueofmoveabletype.com/league-mono) verwendet. Mithilfe des Deskriptors `font-stretch` werden aus derselben Schriftdatei verschiedene Schriftfamilien mit unterschiedlichen Schlüsselwörtern und Prozentwerten erzeugt.

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

{{EmbedLiveSample("setting_a_percentage_range_for_font-stretch", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der moderne Deskriptor {{cssxref("@font-face/font-width")}}, der `font-stretch` ersetzt
- Deskriptor {{cssxref("@font-face/font-display")}}
- Deskriptor {{cssxref("@font-face/font-family")}}
- Deskriptor {{cssxref("@font-face/font-weight")}}
- Deskriptor {{cssxref("@font-face/font-style")}}
- Deskriptor {{cssxref("font-feature-settings")}}
- Deskriptor {{cssxref("@font-face/font-variation-settings")}}
- Deskriptor {{cssxref("@font-face/src")}}
- Deskriptor {{cssxref("@font-face/unicode-range", "unicode-range")}}
