---
title: font-variation-settings
slug: Web/CSS/font-variation-settings
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`font-variation-settings`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bietet eine niedrigstufige Steuerung über die Eigenschaften von [variablen Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), indem Sie die vier Buchstabenachsentags der Eigenschaften angeben können, die Sie variieren möchten, zusammen mit ihren Werten.

{{EmbedInteractiveExample("pages/css/font-variation-settings.html")}}

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for variable font axis names */
font-variation-settings: "xhgt" 0.7;

/* Global values */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: revert;
font-variation-settings: revert-layer;
font-variation-settings: unset;
```

### Werte

Der Wert dieser Eigenschaft kann eine von zwei Formen annehmen:

- `normal`
  - : Text wird mit den Standardeinstellungen dargestellt.
- `<string> <number>`
  - : Bei der Textdarstellung wird die Liste der Achsentags der variablen Schriftarten an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung besteht immer aus einem oder mehreren Paaren, die aus einem {{cssxref("&lt;string&gt;")}} mit 4 ASCII-Zeichen gefolgt von einer {{cssxref("number")}} bestehen, die den zu setzenden Achsenwert angibt. Wenn das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des Codebereichs U+20 - U+7E enthält, ist die gesamte Eigenschaft ungültig. Die `<number>` kann je nach verfügbarer Wertespanne in Ihrer Schriftart, wie sie vom Schriftdesigner definiert wurde, fraktional oder negativ sein.

## Beschreibung

Diese Eigenschaft ist ein niedrigstufiger Mechanismus, um Merkmale variabler Schriften zu setzen, für die es keine andere Möglichkeit gibt, diese Merkmale zu aktivieren oder darauf zuzugreifen. Sie sollten es nur verwenden, wenn keine grundlegenden Eigenschaften vorhanden sind, um diese Merkmale zu setzen (z.B. {{cssxref("font-weight")}}, {{cssxref("font-style")}}).

Mit `font-variation-settings` festgelegte Schrifteigenschaften überschreiben immer die mit den entsprechenden grundlegenden Schriftarten-Eigenschaften gesetzten, z.B. `font-weight`, unabhängig davon, wo sie im Kaskadenstil auftreten. In einigen Browsern ist dies derzeit nur der Fall, wenn die {{cssxref("@font-face")}}-Anweisung einen {{cssxref("@font-face/font-weight", "font-weight")}}-Bereich enthält.

### Registrierte und benutzerdefinierte Achsen

Variable Schriftachsen gibt es in zwei Typen: **registrierte** und **benutzerdefinierte**.

Registrierte Achsen sind die am häufigsten vorkommenden – sie sind häufig genug, dass die Autoren der Spezifikation sie für standardisierungswürdig halten. Beachten Sie, dass dies nicht bedeutet, dass der Autor alle diese in seine Schriftart aufnehmen muss.

Hier sind die registrierten Achsen zusammen mit ihren entsprechenden CSS-Eigenschaften:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Achsentag</th>
      <th scope="col">CSS-Eigenschaft</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"wght"</td>
      <td>{{cssxref("font-weight")}}</td>
    </tr>
    <tr>
      <td>"wdth"</td>
      <td>{{cssxref("font-stretch")}}</td>
    </tr>
    <tr>
      <td>"slnt" (Slant)</td>
      <td>{{cssxref("font-style")}}: <code>oblique + angle</code></td>
    </tr>
    <tr>
      <td>"ital"</td>
      <td>{{cssxref("font-style")}}: <code>italic</code></td>
    </tr>
    <tr>
      <td>"opsz"</td>
      <td><p>{{cssxref("font-optical-sizing")}}</p></td>
    </tr>
  </tbody>
</table>

Benutzerdefinierte Achsen können alles sein, was der Schriftdesigner in seiner Schriftart variieren möchte, wie z.B. Ascender- oder Descender-Höhen, die Größe von Serifen oder alles andere, was er sich vorstellen kann. Jede Achse kann verwendet werden, solange sie eine eindeutige 4-Zeichen-Achse hat. Einige werden häufiger vorkommen und könnten mit der Zeit sogar registriert werden.

> [!NOTE]
> Registrierte Achsentags werden mit Kleinbuchstaben identifiziert, während benutzerdefinierte Achsen mit Großbuchstaben versehen werden sollten. Beachten Sie, dass Schriftdesigner nicht gezwungen sind, diese Praxis zu befolgen, und einige werden es nicht tun. Wichtig ist, dass Achsentags groß- und kleinschreibungssensitiv sind.

Um variable Schriftarten auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Version von Linux Freetype, und macOS vor Version 10.13 unterstützt keine variablen Schriftarten. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie keine variablen Schriftarten auf Webseiten oder den Firefox Developer Tools verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere Beispiele für variable Schriftarten finden Sie in unserem [Leitfaden für variable Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

### Steuerung des variablen Schriftgewichts (wght)

Sie können das CSS im untenstehenden Beispiel bearbeiten, um mit verschiedenen Schriftgewichtswerten zu experimentieren. Sehen Sie, was passiert, wenn Sie einen Wert außerhalb des Gewichtsbereichs angeben.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 940)}}

### Steuerung der variable Schriftneigung (slnt)

Sie können das CSS im untenstehenden Beispiel bearbeiten, um mit verschiedenen Schriftneigungswerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 940)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für variable Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [OpenType-Schriftvariationen Übersicht](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview) auf microsoft.com
- [OpenType-Design-Variationsachsentag-Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg) auf microsoft.com
- [OpenType variable Schriftarten](https://www.axis-praxis.org/) auf axis-praxis.org
- [Variable Schriften](https://v-fonts.com/) auf v-fonts.com
