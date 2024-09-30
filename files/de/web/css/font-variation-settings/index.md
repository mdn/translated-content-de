---
title: font-variation-settings
slug: Web/CSS/font-variation-settings
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`font-variation-settings`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine niedrigstufige Kontrolle über die Eigenschaften von [variablen Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), indem sie die vier Buchstaben langen Achsennamen der zu variierenden Eigenschaften zusammen mit ihren Werten angibt.

{{EmbedInteractiveExample("pages/css/font-variation-settings.html")}}

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for variable font axis names */
font-variation-settings: "XHGT" 0.7;

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
  - : Bei der Textdarstellung wird die Liste der Achsennamen variabler Schriften an die Text-Layout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung besteht immer aus einem oder mehreren Paaren, bestehend aus einem {{cssxref("&lt;string&gt;")}} von 4 ASCII-Zeichen, gefolgt von einer {{cssxref("number")}}, die den einzustellenden Achsenwert angibt. Wenn das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des Bereichs der Codepunkte U+20 - U+7E enthält, ist die gesamte Eigenschaft ungültig. Die `<number>` kann je nach dem vom Schriftgestalter definierten Wertebereich in Ihrer Schriftart gebrochen oder negativ sein.

## Beschreibung

Diese Eigenschaft ist ein niedrigstufiger Mechanismus, der entwickelt wurde, um Funktionen variabler Schriften einzustellen, wenn keine andere Möglichkeit besteht, diese Funktionen zu aktivieren oder zu nutzen. Sie sollten sie nur verwenden, wenn keine grundlegenden Eigenschaften vorhanden sind, um diese Funktionen zu setzen (z.B. {{cssxref("font-weight")}}, {{cssxref("font-style")}}).

Schrifteigenschaften, die mit `font-variation-settings` gesetzt werden, überschreiben immer die, die mit den entsprechenden grundlegenden Schrifteigenschaften, z.B. `font-weight`, festgelegt wurden, unabhängig davon, wo sie in der Cascade erscheinen. In einigen Browsern gilt dies derzeit nur, wenn die {{cssxref("@font-face")}} Erklärung eine {{cssxref("@font-face/font-weight", "font-weight")}} Reichweite enthält.

### Registrierte und benutzerdefinierte Achsen

Variable Schriftachsen gibt es in zwei Typen: **registriert** und **benutzerdefiniert**.

Registrierte Achsen sind die am häufigsten vorkommenden — sie sind so üblich, dass die Autoren der Spezifikation es für sinnvoll hielten, sie zu standardisieren. Dies bedeutet jedoch nicht, dass der Autor alle in seiner Schriftart enthalten muss.

Hier sind die registrierten Achsen zusammen mit ihren entsprechenden CSS-Eigenschaften:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Achs-Tag</th>
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
      <td>"slnt" (Neigung)</td>
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

Benutzerdefinierte Achsen können alles sein, was der Schriftgestalter in seiner Schrift variieren möchte, zum Beispiel Steigungen oder Abstiegsgrößen, die Größe von Serifen oder alles andere, was sie sich vorstellen können. Jede Achse kann verwendet werden, solange sie eine eindeutige 4-Zeichen-Achse erhält. Einige werden häufiger vorkommen und könnten im Laufe der Zeit sogar registriert werden.

> [!NOTE]
> Registrierte Achsentags werden mit Kleinbuchstabentags identifiziert, während benutzerdefinierte Achsen Großbuchstabentags erhalten sollten. Beachten Sie, dass Schriftgestalter nicht gezwungen sind, diese Praxis in irgendeiner Weise zu befolgen, und einige werden es nicht tun. Wichtig ist hier, dass die Achsentags sensibel auf Groß- und Kleinschreibung reagieren.

Um variable Schriften auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Linux-Freetype-Version, und macOS vor 10.13 unterstützt keine variablen Schriften. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie variable Schriften weder auf Webseiten noch in den Firefox-Entwicklungstools verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden weitere Beispiele für variable Schriften in unserem [Leitfaden für variable Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

### Steuerung des variablen Schriftgewichts (wght)

Sie können das CSS im untenstehenden Beispiel bearbeiten, um mit verschiedenen Schriftgewichtswerten zu experimentieren. Sehen Sie, was passiert, wenn Sie einen Wert außerhalb des Gewichtsbereichs angeben.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 940)}}

### Steuerung der variablen Schriftneigung (slnt)

Sie können das CSS im untenstehenden Beispiel bearbeiten, um mit verschiedenen Neigungs-/Schrägwerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 940)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für variable Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [Übersicht über OpenType-Schriftvariationen](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview) auf microsoft.com
- [OpenType Design-Variationsachsen-Tags-Registrierung](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg) auf microsoft.com
- [OpenType variable Schriften](https://www.axis-praxis.org/) auf axis-praxis.org
- [Variable Schriften](https://v-fonts.com/) auf v-fonts.com
