---
title: CSS Textdekoration
short-title: Text decoration
slug: Web/CSS/Guides/Text_decoration
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS Textdekoration**-Modul definiert Funktionen im Zusammenhang mit Textdekorationen, wie Unterstriche, Textschatten und Betonungsmarkierungen. Textdekorationen können visuelle Hinweise auf Rechtschreibfehler, Grammatikprobleme und Links geben. Diese Funktionen können dazu beitragen, die Benutzerfreundlichkeit, Zugänglichkeit, Funktionalität und Ästhetik Ihres Textes zu verbessern.

Durch die Variation von Farbe, Stil und Dicke der Textdekoration mittels Pseudoklassen und Pseudoelementen können Sie die Betonung im Text hervorheben, ohne sich ausschließlich auf die Farbe zu verlassen.

Mehrere Funktionen können helfen, die Lesbarkeit von Text zu verbessern:

- {{cssxref("text-decoration-skip-ink")}} kann die Lesbarkeit erhöhen, indem Abstriche übersprungen werden.
- {{cssxref("text-underline-offset")}} ermöglicht es Ihnen, die Platzierung des Unterstrichs fein abzustimmen, um besser zu den Fontmetriken oder Designästhetiken zu passen, was besonders nützlich für einzigartige [Schriftarten](/de/docs/Web/CSS/Guides/Fonts) sein kann.
- {{cssxref("text-shadow")}}-Farben, die im Kontrast zu den Text-{{cssxref("color")}} stehen, können den Text visuell hervorheben, wenn er auf Hintergründen mit unzureichendem Kontrast platziert wird.

Diese Funktionen tragen alle zur Verbesserung der Lesbarkeit und damit zur Zugänglichkeit bei. Die Reduzierung visueller Störungen und die Verbesserung der Textklarheit sind besonders hilfreich für Benutzer mit [Legasthenie](https://en.wikipedia.org/wiki/Dyslexia) oder Sehbehinderungen.

In den Schriftsystemen einiger Sprachen tragen [Overlines](/de/docs/Web/CSS/Reference/Properties/text-decoration-line#overline) und [Unterstriche](/de/docs/Web/CSS/Reference/Properties/text-decoration-line#underline) eine semantische Bedeutung. CSS ermöglicht es Ihnen, das Styling an kulturelle Normen anzupassen. Textdekorationen sind besonders nützlich für Sprachen, die keine lateinbasierten Schriften verwenden und stattdessen andere Unterstreichplatzierungen verfolgen, wie Japanisch und Koreanisch.

Textdekorationen ermöglichen es Ihnen auch, redaktionellen und lokalisierungstechnischen Standards zu folgen, die aus Printmedien stammen. Zum Beispiel können Sie mit einem Durchstrich (line-through) den Status von Inhalten angeben. Verwenden Sie es, um Benutzer darüber zu informieren, dass Inhalte entfernt wurden oder dass Preise halbiert wurden. Diese Funktion ermöglicht es Ihnen, sowohl den ursprünglichen als auch den aktualisierten Inhalt darzustellen. Overlines oder doppelte Unterstreichungen werden häufig für akademische und redaktionelle Anmerkungen verwendet.

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

Die Spezifikation definiert auch die Eigenschaften `text-decoration-skip-box`, `text-decoration-skip-self`, `text-decoration-skip-spaces`, `text-decoration-trim` und `text-emphasis-skip`, die von keinem Browser unterstützt werden.

## Leitfäden

- [Einführung in Textschatten](/de/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
  - : Übersicht über die Komponenten der {{cssxref("text-shadow")}}-Eigenschaft und das Erstellen mehrerer Textschatten

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
- [Inline-Formatierungskontext](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts#inline_formatting_contexts)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Fonts](/de/docs/Web/CSS/Guides/Fonts) Modul
- [CSS Ruby Layout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
- [CSS Text](/de/docs/Web/CSS/Guides/Text) Modul
- [CSS Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) Modul
- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Fonts](/de/docs/Web/CSS/Guides/Fonts) Modul
