---
title: font-variation-settings
slug: Web/CSS/font-variation-settings
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`font-variation-settings`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine niedrigstufige Kontrolle über die Merkmale von [variablen Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), indem Sie die vier Buchstaben langen Achsennamen der Merkmale, die Sie variieren möchten, zusammen mit ihren Werten angeben.

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
  - : Text wird mit den Standardeinstellungen layoutet.
- `<string> <number>`
  - : Beim Rendern von Text wird die Liste der Achsennamen der variablen Schriftart an die Text-Layout-Engine übergeben, um Schriftfunktionen zu aktivieren oder zu deaktivieren. Jede Einstellung besteht immer aus einem oder mehreren Paaren, bestehend aus einem {{cssxref("&lt;string&gt;")}} mit 4 ASCII-Zeichen, gefolgt von einer {{cssxref("number")}}, der den zu setzenden Achsenwert angibt. Enthält das `<string>` mehr oder weniger Zeichen oder Zeichen außerhalb des Bereichs von U+20 - U+7E, ist die gesamte Eigenschaft ungültig. Die `<number>` kann gebrochene oder negative Werte enthalten, abhängig vom Wertbereich, der in Ihrer Schrift verfügbar ist, wie vom Schriftgestalter definiert.

## Beschreibung

Diese Eigenschaft ist ein niedrigstufiger Mechanismus, der darauf ausgelegt ist, Funktionen von variablen Schriften festzulegen, wenn keine andere Möglichkeit besteht, diese Funktionen zu aktivieren oder darauf zuzugreifen. Sie sollten ihn nur verwenden, wenn keine grundlegenden Eigenschaften existieren, um diese Funktionen festzulegen (z.B. {{cssxref("font-weight")}}, {{cssxref("font-style")}}).

Mit `font-variation-settings` eingestellte Schriftmerkmale überschreiben immer diejenigen, die mit den entsprechenden grundlegenden Schriftarten-Eigenschaften, z.B. `font-weight`, festgelegt wurden, unabhängig davon, wo sie in der Kaskade erscheinen. In einigen Browsern gilt dies derzeit nur, wenn die {{cssxref("@font-face")}}-Deklaration einen {{cssxref("@font-face/font-weight", "font-weight")}}-Bereich umfasst.

### Registrierte und benutzerdefinierte Achsen

Variable Schriftachsen gibt es in zwei Typen: **registrierte** und **benutzerdefinierte**.

Registrierte Achsen sind die am häufigsten anzutreffenden – häufig genug, dass die Autoren der Spezifikation sie für lohnenswert hielten, zu standardisieren. Das bedeutet jedoch nicht, dass der Autor alle davon in seiner Schriftart enthalten muss.

Hier sind die registrierten Achsen zusammen mit ihren entsprechenden CSS-Eigenschaften:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Axis-Tag</th>
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

Benutzerdefinierte Achsen können alles sein, was der Schriftgestalter in seiner Schrift variieren möchte, beispielsweise Aufstrich- oder Abstrichhöhen, die Größe der Serifen oder alles andere, was sie sich vorstellen können. Jede Achse kann verwendet werden, solange sie eine eindeutige 4-Zeichen-Achse hat. Einige werden mit der Zeit häufiger vorkommen und möglicherweise sogar registriert.

> [!NOTE]
> Registrierte Achsen-Tags werden mit Kleinbuchstaben-Tags identifiziert, während benutzerdefinierte Achsen Großbuchstaben-Tags erhalten sollten. Beachten Sie, dass Schriftdesigner nicht gezwungen sind, dieser Praxis auf irgendeine Weise zu folgen, und einige tun dies nicht. Wichtig ist hierbei, dass Achsentags case-sensitive sind.

Um variable Schriften auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux Freetype-Version, und macOS vor Version 10.13 unterstützt keine variablen Schriften. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie keine variablen Schriften in Webseiten oder den Firefox Developer Tools verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden eine Reihe weiterer Beispiele für variable Schriften in unserem [Leitfaden zu variablen Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

### Kontrolle des variablen Schriftgewichts (wght)

Sie können den CSS-Code im untenstehenden Beispiel bearbeiten, um mit verschiedenen Schriftgewichtwerten zu experimentieren. Sehen Sie, was passiert, wenn Sie einen Wert außerhalb des Gewichtsbereichs angeben.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 940)}}

### Kontrolle der variablen Schrägung (slnt)

Sie können den CSS-Code im untenstehenden Beispiel bearbeiten, um mit verschiedenen Schriftneigungs-/Kursivwerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 940)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu variablen Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [Überblick über OpenType-Schriftvariationen](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview) auf microsoft.com
- [OpenType Design-Variations-Achsennamensregister](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg) auf microsoft.com
- [OpenType-Variable-Schriften](https://www.axis-praxis.org/) auf axis-praxis.org
- [Variable Schriften](https://v-fonts.com/) auf v-fonts.com
