---
title: font-stretch
slug: Web/CSS/Reference/At-rules/@font-face/font-stretch
l10n:
  sourceCommit: f515f3379571891b9a7321c9eb7b0a34976de394
---

{{deprecated_header}}

> [!NOTE]
> Der `font-stretch` Deskriptor wurde im [CSS Fonts Specification](https://drafts.csswg.org/css-fonts/#font-stretch-desc) in `font-width` umbenannt. Um die Kompatibilität zu wahren, behält die Spezifikation `font-stretch` als Alias für den `font-width` Deskriptor bei.

Der **`font-stretch`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Autoren, eine normale, kondensierte oder erweiterte Schrift für die im {{cssxref("@font-face")}} At-Regel spezifizierten Schriften festzulegen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den `font-stretch` Deskriptor verwenden, um die Dehnung des Schriftschnitts explizit festzulegen. Die Werte für den CSS-Deskriptor entsprechen denen der zugehörigen Schriftart-Eigenschaft.

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

Die `font-stretch` Eigenschaft wird mit einem der unten aufgeführten Werte beschrieben.

### Werte

- `normal`
  - : Gibt einen normalen Schriftschnitt an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt einen schmaleren Schriftschnitt als normal an, wobei ultra-condensed der am meisten komprimierte ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt einen breiteren Schriftschnitt als normal an, wobei ultra-expanded der am meisten erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diese Eigenschaft nicht erlaubt.

In früheren Versionen der `font-stretch` Spezifikation akzeptiert die Eigenschaft nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>` Wert zu akzeptieren. Dies ermöglicht variablen Schriftarten, etwas mehr wie ein Kontinuum von Schriftbreiten anzubieten. Für TrueType- oder OpenType-Varianten-Schriftarten wird die "wdth"-Variation verwendet, um variierende Breiten zu implementieren.

Wenn die Schriftart kein Schriftschnitt bereitstellt, der exakt dem angegebenen Wert entspricht, dann werden Werte kleiner als 100% auf einen schmaleren Schriftschnitt abgebildet, und Werte größer oder gleich 100% auf einen breiteren Schriftschnitt.

### Zuordnung von Schlüsselwörtern zu numerischen Werten

Die folgende Tabelle zeigt die Zuordnung zwischen den Schlüsselwortwerten und den prozentualen Zahlenwerten:

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

### Variable Schriftarten

Die meisten Schriftarten haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Einige Schriftarten, sogenannte variable Schriftarten, können jedoch einen Bereich an Dehnungen mit mehr oder weniger feiner Granularität unterstützen, was dem Designer eine wesentlich größere Kontrolle über das gewählte Gewicht gibt. Dafür sind Prozentbereiche nützlich.

Für TrueType- oder OpenType-Variable-Schrifttypen wird die "wdth"-Variation verwendet, um variierende Glyphebreiten zu implementieren.

## Barrierefreiheit

Personen mit Legasthenie und anderen kognitiven Beeinträchtigungen können Schwierigkeiten beim Lesen von Schriftarten haben, die zu kondensiert sind, insbesondere wenn die Schrift eine [geringe Kontrastfarbe](/de/docs/Web/CSS/Reference/Properties/color#accessibility) hat.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs Kriteriums 1.4.8 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Festlegung eines Prozentbereichs für font-stretch

Das folgende Beispiel findet eine lokale Open Sans Schriftart oder importiert sie und erlaubt die Verwendung der Schriftart für normale, semi-kondensierte und semi-erweiterte Zustände.

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
- {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor
