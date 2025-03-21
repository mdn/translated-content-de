---
title: Beherrschen des Zusammenfallens von Abständen
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Die [oberen](/de/docs/Web/CSS/margin-top) und [unteren](/de/docs/Web/CSS/margin-bottom) Abstände von Blöcken werden manchmal zu einem einzigen Abstand kombiniert (zusammengefallen), dessen Größe die größte der einzelnen Abstände ist (oder einfach einer von ihnen, wenn sie gleich sind), ein Verhalten, das als **Zusammenfallen von Abständen** bekannt ist. Beachten Sie, dass die Abstände von [schwebenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals zusammenfallen.

Das Zusammenfallen von Abständen tritt in drei grundlegenden Fällen auf:

- Angrenzende Geschwister
  - : Die Abstände von angrenzenden Geschwisterelementen fallen zusammen (außer wenn das letzte Geschwisterelement an den Schwebepunkten [vorbeigeräumt (cleared)](/de/docs/Web/CSS/clear) werden muss).
- Kein Inhalt trennt Eltern und Nachkommen
  - : Wenn es keine Umrandung, keine Auffüllung, keinen Inline-Teil, keinen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erzeugt, oder keine _[Räumung (Clearance)](/de/docs/Web/CSS/clear)_ gibt, um den {{cssxref("margin-top")}} eines Blocks von dem {{cssxref("margin-top")}} eines oder mehrerer seiner Nachkommenblöcke zu trennen; oder keine Umrandung, Auffüllung, Inline-Inhalt, {{cssxref("height")}}, oder {{cssxref("min-height")}}, um den {{cssxref("margin-bottom")}} eines Blocks von dem {{cssxref("margin-bottom")}} eines oder mehrerer seiner Nachkommenblöcke zu trennen, dann fallen diese Abstände zusammen. Der zusammengefallene Abstand befindet sich außerhalb des Elternblocks.
- Leere Blöcke
  - : Wenn es keine Umrandung, Auffüllung, Inline-Inhalt, {{cssxref("height")}}, oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann fallen seine oberen und unteren Abstände zusammen.

Einige Dinge zu beachten:

- Komplexeres Zusammenfallen von Abständen (von mehr als zwei Abständen) tritt auf, wenn die oben genannten Fälle kombiniert werden.
- Diese Regeln gelten auch für Abstände, die null sind, sodass der Abstand eines Nachkommen außerhalb seines Elternblocks endet (gemäß den oben genannten Regeln), unabhängig davon, ob der Abstand des Elternblocks null ist oder nicht.
- Wenn negative Abstände involviert sind, ist die Größe des zusammengefallenen Abstands die Summe des größten positiven Abstands und des kleinsten (negativsten) negativen Abstands.
- Wenn alle Abstände negativ sind, ist die Größe des zusammengefallenen Abstands der kleinste (negativste) Abstand. Dies gilt sowohl für benachbarte als auch für verschachtelte Elemente.
- Zusammenfallende Abstände sind nur in der vertikalen Richtung relevant.
- Abstände fallen nicht in einem Container zusammen, bei dem `display` auf `flex` oder `grid` gesetzt ist.

## Beispiele

### HTML

```html
<p>The bottom margin of this paragraph is collapsed …</p>
<p>
  … with the top margin of this paragraph, yielding a margin of
  <code>1.2rem</code> in between.
</p>

<div>
  This parent element contains two paragraphs!
  <p>
    This paragraph has a <code>.4rem</code> margin between it and the text
    above.
  </p>
  <p>
    My bottom margin collapses with my parent, yielding a bottom margin of
    <code>2rem</code>.
  </p>
</div>

<p>I am <code>2rem</code> below the element above.</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: 0.4rem 0 1.2rem 0;
  background: yellow;
}
```

### Ergebnis

{{EmbedLiveSample('Examples', 'auto', 350)}}

## Siehe auch

- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value)
  - [Wertedefinitions-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweiseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
