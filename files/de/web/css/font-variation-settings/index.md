---
title: font-variations-einstellungen
slug: Web/CSS/font-variation-settings
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`font-variation-settings`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine detaillierte Steuerung der [variablen Schriftart](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) Merkmale, indem Sie die vier Buchstaben umfassenden Achsen-Namen der Merkmale, die Sie variieren möchten, zusammen mit ihren Werten angeben.

{{EmbedInteractiveExample("pages/css/font-variation-settings.html")}}

## Syntax

```css
/* Verwenden Sie die Standardeinstellungen */
font-variation-settings: normal;

/* Werte für variable Schriftachsen-Namen festlegen */
font-variation-settings: "XHGT" 0.7;

/* Globale Werte */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: revert;
font-variation-settings: revert-layer;
font-variation-settings: unset;
```

### Werte

Der Wert dieser Eigenschaft kann eine von zwei Formen annehmen:

- `normal`
  - : Der Text wird mit Standardeinstellungen layoutet.
- `<string> <number>`
  - : Beim Rendern von Text wird die Liste der variablen Schriftachsen-Namen an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung besteht immer aus einem oder mehreren Paaren, bestehend aus einer {{cssxref("&lt;string&gt;")}} von 4 ASCII-Zeichen, gefolgt von einer {{cssxref("number")}}, die den zu setzenden Achsenwert angibt. Wenn das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des Bereichs U+20 - U+7E enthält, ist die gesamte Eigenschaft ungültig. Die `<number>` kann je nach dem im Schriftart definierten Wertebereich, wie vom Schriftdesigner festgelegt, fraktional oder negativ sein.

## Beschreibung

Diese Eigenschaft ist ein Low-Level-Mechanismus, der dazu dient, variable Schriftmerkmale einzustellen, wenn es keine andere Möglichkeit gibt, diese Merkmale zu aktivieren oder darauf zuzugreifen. Sie sollten sie nur verwenden, wenn keine grundlegenden Eigenschaften vorhanden sind, um diese Merkmale einzustellen (z. B. {{cssxref("font-weight")}}, {{cssxref("font-style")}}).

Mit `font-variation-settings` festgelegte Schriftmerkmale überschreiben immer die mit den entsprechenden grundlegenden Schriftarteigenschaften festgelegten Merkmale, z.B. `font-weight`, egal wo sie in der Cascade erscheinen. In einigen Browsern ist dies derzeit nur dann der Fall, wenn die {{cssxref("@font-face")}}-Deklaration einen {{cssxref("@font-face/font-weight", "font-weight")}}-Bereich enthält.

### Registrierte und benutzerdefinierte Achsen

Variable Schriftachsen gibt es in zwei Typen: **registriert** und **benutzerdefiniert**.

Registrierte Achsen sind die am häufigsten vorkommenden - so häufig, dass die Autoren der Spezifikation der Meinung waren, dass sie standardisiert werden sollten. Beachten Sie, dass dies nicht bedeutet, dass der Autor alle diese in seine Schriftart aufnehmen muss.

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

Benutzerdefinierte Achsen können alles sein, was der Schriftdesigner in seiner Schrift variieren möchte, zum Beispiel Auf- oder Abstiegshöhen, die Größe von Serifen oder alles andere, was ihm einfällt. Jede Achse kann verwendet werden, solange sie ein einzigartiges 4-Zeichen-Achsen-Tag erhält. Manche werden mit der Zeit häufiger werden und könnten sogar registrierte Achsen werden.

> [!NOTE]
> Registrierte Achs-Tags werden mit Kleinbuchstaben-Tags identifiziert, wohingegen benutzerdefinierte Achsen Großbuchstaben-Tags erhalten sollten. Beachten Sie, dass Schriftdesigner nicht gezwungen sind, dieser Praxis zu folgen, und es einige gibt, die dies nicht tun werden. Das wichtige hier ist, dass Achs-Tags groß- und kleinschreibungssensitiv sind.

Um variable Schriftarten auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux-Freetype-Version und macOS vor 10.13 unterstützt keine variablen Schriftarten. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie keine variablen Schriftarten in Webseiten oder den Firefox Developer Tools verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden eine Reihe weiterer Beispiele für variable Schriftarten in unserem [Leitfaden für variable Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

### Steuerung des variablen Schriftgewichts (wght)

Sie können das CSS im unten stehenden Beispiel bearbeiten, um mit verschiedenen Schriftgewichtswerten zu experimentieren. Sehen Sie, was passiert, wenn Sie einen Wert außerhalb des Gewichtsbereichs angeben.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 940)}}

### Steuerung der variablen Schriftausrichtung (slnt)

Sie können das CSS im unten stehenden Beispiel bearbeiten, um mit verschiedenen Schriftneigungswerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 940)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für variable Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [OpenType-Schriftvariationen Überblick](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview) auf microsoft.com
- [OpenType-Design-Variations-Achs-Tag-Register](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg) auf microsoft.com
- [OpenType variable Schriftarten](https://www.axis-praxis.org/) auf axis-praxis.org
- [Variable Schriftarten](https://v-fonts.com/) auf v-fonts.com
