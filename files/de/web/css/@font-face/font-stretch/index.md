---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}

Der **`font-stretch`** CSS-Deskriptor ermöglicht es Autoren, ein normales, komprimiertes oder erweitertes Schriftschnitt für die im {{cssxref("@font-face")}} Regelwerk angegebenen Schriften festzulegen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den verschiedenen Stilen der gleichen Schriftfamilie entsprechen, und dann den `font-stretch` Deskriptor verwenden, um den Stretch des Schriftschnitts explizit anzugeben. Die Werte für den CSS-Deskriptor sind mit denen seines entsprechenden Schrift-Eigenschaftswertes identisch.

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
  - : Gibt einen mehr komprimierten Schriftschnitt als normal an, wobei ultra-condensed der am meisten komprimierte ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt einen mehr erweiterten Schriftschnitt als normal an, wobei ultra-expanded der am meisten erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diese Eigenschaft nicht erlaubt.

In früheren Versionen der `font-stretch` Spezifikation akzeptiert die Eigenschaft nur die neun Schlüsselwortwerte. CSS Fonts Level 4 erweitert die Syntax, um auch einen `<percentage>` Wert zu akzeptieren. Dies ermöglicht es Variablen-Schriften, etwas Ähnliches wie ein Kontinuum von Zeichenbreiten anzubieten. Für TrueType oder OpenType variable Schriften wird die "wdth" Variation verwendet, um unterschiedliche Breiten zu implementieren.

Wenn die Schriftart kein Gesicht zur Verfügung stellt, das genau mit dem angegebenen Wert übereinstimmt, dann werden Werte unter 100% einem schmaleren Gesicht zugeordnet, und Werte größer oder gleich 100% einem breiteren Gesicht.

### Schlüsselwort zu numerische Zuordnung

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

### Variable Schriften

Die meisten Schriften haben eine bestimmte Breite, die einem der Schlüsselwortwerte entspricht. Einige Schriften, sogenannte variable Schriften, können jedoch einen Bereich der Streckung mit mehr oder weniger feiner Granularität unterstützen, was dem Designer einen viel genaueren Grad der Kontrolle über das gewählte Gewicht ermöglicht. Dafür sind Prozentsatzbereiche nützlich.

Für TrueType oder OpenType variable Schriften wird die "wdth" Variation verwendet, um verschiedene Glyphenbreiten zu implementieren.

## Barrierefreiheit

Personen mit Legasthenie und anderen kognitiven Bedingungen können Schwierigkeiten haben, Schriften zu lesen, die zu stark komprimiert sind, insbesondere wenn die Schrift ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verstehen WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen Erfolgskriterium 1.4.8 | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax("font-width")}}

## Beispiele

### Festlegen eines Prozentsatzbereichs für font-stretch

Das folgende Beispiel findet eine lokale Open Sans-Schrift oder importiert sie und ermöglicht die Verwendung der Schrift für normale, semi-komprimierte und semi-erweiterte Zustände.

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
