---
title: font-stretch
slug: Web/CSS/Reference/At-rules/@font-face/font-stretch
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

> [!NOTE]
> Die `font-stretch`-Deskriptor wurde in der [CSS Fonts-Spezifikation](https://drafts.csswg.org/css-fonts/#font-stretch-desc) in {{cssxref("@font-face/font-width")}} umbenannt. Um die Kompatibilität zu bewahren, behält die Spezifikation `font-stretch` als ein altes Alias für die `font-width`-Deskriptor bei.

Der **`font-stretch`** [CSS](/de/docs/Web/CSS) Deskriptor erlaubt es Autoren, ein normales, komprimiertes oder erweitertes Schriftbild für die Schriften zu spezifizieren, die in der {{cssxref("@font-face")}}-Regel angegeben sind.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den `font-stretch`-Deskriptor verwenden, um den Stretch des Schriftschnitts explizit anzugeben.

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

Der `font-stretch`-Deskriptor kann einen einzelnen Wert aus der untenstehenden Liste annehmen.

### Werte

- `normal`
  - : Gibt ein normal kondensiertes Schriftbild an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt ein stärker kondensiertes Schriftbild als normal an, wobei ultra-condensed am meisten kondensiert ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt ein stärker erweitertes Schriftbild als normal an, wobei ultra-expanded am meisten erweitert ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diesen Deskriptor nicht erlaubt.

In früheren Versionen der `font-stretch`-Spezifikation akzeptiert der Deskriptor nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>`-Wert zu akzeptieren. Dies ermöglicht es variablen Schriften, eine kontinuierliche Variation der Zeichenbreiten zu bieten. Für TrueType- oder OpenType-Variableschriften wird die `wdth`-Variation verwendet, um sich verändernde Breiten zu implementieren.

Wenn die Schriftart kein Gesicht bereitstellt, das genau dem angegebenen Wert entspricht, dann werden Werte kleiner als `100%` einem kondensierten Gesicht zugeordnet, und Werte größer oder gleich `100%` einem erweiterten Gesicht.

### Zuordnung von Schlüsselwort zu numerischen Werten

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

Die meisten Schriften haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Variable Schriften hingegen können einen Bereich von Breiten mit feiner Granularität unterstützen, was dem Designer eine größere Kontrolle über die gewählte Dicke gibt. Dafür sind Prozentsatzbereiche nützlich.

Für TrueType- oder OpenType-Variablen-Schriften wird die `wdth`-Variation verwendet, um verschiedene Glyphenbreiten zu implementieren.

## Barrierefreiheit

Personen mit Dyslexie und anderen kognitiven Beeinträchtigungen können Schwierigkeiten haben, Schriftarten zu lesen, die zu stark kondensiert sind, insbesondere wenn die Schriftart ein [geringes Farbkontrastverhältnis](/de/docs/Web/CSS/Reference/Properties/color#accessibility) aufweist.

- [MDN Verständnis WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis der Erfolgskriterium 1.4.8 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Festlegen eines Prozentsatzbereichs für font-stretch

Das folgende Beispiel verwendet die [League Mono](https://www.theleagueofmoveabletype.com/league-mono) Schriftart. Es synthesiert verschiedene Schriftfamilien aus derselben Schriftdatei, indem es den `font-stretch`-Deskriptor mit verschiedenen Schlüsselwörtern und Prozentsätzen verwendet.

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

{{EmbedLiveSample("Festlegen von Prozentsätzen für den Schrift-Stretch", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Moderne {{cssxref("@font-face/font-width")}}-Deskriptor, der `font-stretch` ersetzt
- {{cssxref("@font-face/font-display")}}-Deskriptor
- {{cssxref("@font-face/font-family")}}-Deskriptor
- {{cssxref("@font-face/font-weight")}}-Deskriptor
- {{cssxref("@font-face/font-style")}}-Deskriptor
- {{cssxref("font-feature-settings")}}-Deskriptor
- {{cssxref("@font-face/font-variation-settings")}}-Deskriptor
- {{cssxref("@font-face/src")}}-Deskriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor
