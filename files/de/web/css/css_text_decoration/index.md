---
title: CSS-Textdekoration
slug: Web/CSS/CSS_text_decoration
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

Das **CSS-Textdekorationsmodul** definiert Funktionen im Zusammenhang mit Textdekorationen wie Unterstreichungen, Textschatten und Betonungszeichen. Textdekorationsfunktionen können visuelle Hinweise auf Rechtschreibfehler, Grammatikprobleme und Links bieten. Diese Funktionen können die Benutzerfreundlichkeit, Zugänglichkeit, Funktionalität und Ästhetik Ihres Textes verbessern.

Indem Sie die Farbe, den Stil und die Dicke der Textdekoration mithilfe von Pseudoklassen und Pseudoelementen variieren, können Sie die Betonung im Text auf eine Weise hervorheben, die sich nicht nur auf Farbe verlässt.

Mehrere Funktionen können die Lesbarkeit von Text verbessern:

- {{cssxref("text-decoration-skip-ink")}} kann die Lesbarkeit erhöhen, indem es Unterlängen überspringt.
- {{cssxref("text-underline-offset")}} ermöglicht es Ihnen, die Platzierung der Unterstreichung fein abzustimmen, um besser zu den Schriftmetriken oder Designästhetiken zu passen, was besonders nützlich für einzigartige [Schriftarten](/de/docs/Web/CSS/CSS_fonts) sein kann.
- {{cssxref("text-shadow")}}-Farben, die im Kontrast zur Text{{cssxref("color")}} stehen, können den Text visuell hervorheben, wenn er auf einem Hintergrund mit unzureichendem Kontrast platziert wird.

Diese Funktionen helfen alle, die Lesbarkeit und damit die Zugänglichkeit zu verbessern. Die Reduzierung von visuellem Rauschen und die Verbesserung der Textklarheit ist besonders hilfreich für Nutzer mit [Legasthenie](https://en.wikipedia.org/wiki/Dyslexia) oder Sehschwäche.

In den Schriftsystemen einiger Sprachen tragen [Überstriche](/de/docs/Web/CSS/text-decoration-line#overline) und [Unterstriche](/de/docs/Web/CSS/text-decoration-line#underline) eine semantische Bedeutung. CSS ermöglicht es Ihnen, die Gestaltung an kulturelle Normen anzupassen. Textdekorationsfunktionen sind besonders nützlich für Sprachen, die keine lateinbasierten Schriftsysteme verwenden und stattdessen andere Unterstreichungspositionen folgen, wie Japanisch und Koreanisch.

Textdekorationsfunktionen ermöglichen es Ihnen auch, redaktionelle und Lokalisierungsstandards aus Printmedien zu folgen. Beispielsweise können Sie mit einem Durchstreichen (line-through) den Status von Inhalten angeben. Verwenden Sie es, um Benutzer darüber zu informieren, dass Inhalte entfernt wurden oder dass Preise halbiert wurden. Diese Funktion ermöglicht es Ihnen, sowohl den ursprünglichen als auch den aktualisierten Inhalt zu präsentieren. Überstriche oder doppelte Unterstreichungen werden häufig für akademische und redaktionelle Anmerkungen verwendet.

## Textdekoration in Aktion

```css hidden
p {
  margin: 1em 0;
}
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
  text-underline-offset: -5px;
}
.shadow {
  text-shadow: red 4px 4px 0;
}
.emphasis {
  text-emphasis: triangle red;
}
```

```html hidden
<p class="under">A red underline</p>
<p class="over">A wavy lime overlines</p>
<p class="line">This has a line-through it</p>
<p class="underover">This has a dashed underline and overline</p>
<p class="thick">An offset solid purple underline</p>
<p class="shadow">This has a red shadow</p>
<p class="emphasis">Emphasized with red triangles</p>
```

{{EmbedLiveSample('Text decoration in action','auto','320')}}

## Referenz

### Eigenschaften

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-skip")}}
- {{cssxref("text-decoration-skip-ink")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-shadow")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("text-underline-position")}}

Die Spezifikation definiert auch die Eigenschaften `text-decoration-skip-box`, `text-decoration-skip-self`, `text-decoration-skip-spaces`, `text-decoration-trim` und `text-emphasis-skip`, die derzeit von keinem Browser unterstützt werden.

## Leitfäden

- [Einführung in Textschatten](/de/docs/Web/CSS/CSS_text_decoration/Text_shadows)
  - : Überblick über die Komponenten der {{cssxref("text-shadow")}}-Eigenschaft und das Erstellen mehrerer Textschatten

## Verwandte Konzepte

- {{cssxref("::spelling-error")}}
- {{cssxref("::grammar-error")}}
- {{cssxref("::first-letter")}}
- {{cssxref("::first-line")}}
- {{cssxref("box-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("line-style")}}
- {{cssxref("letter-spacing")}}
- {{cssxref("word-spacing")}}
- {{cssxref("font-size")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-kerning")}}
- {{cssxref("ruby-overhang")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("sup")}}
- {{HTMLElement("sub")}}
- [Inline-Formatierungskontext](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts#inline_formatting_contexts)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
- [CSS-Ruby-Layout](/de/docs/Web/CSS/CSS_ruby_layout) Modul
- [CSS-Text](/de/docs/Web/CSS/CSS_text) Modul
- [CSS-Schreibrichtungen](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
