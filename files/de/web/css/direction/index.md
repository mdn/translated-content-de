---
title: direction
slug: Web/CSS/direction
l10n:
  sourceCommit: d68cfd06575158736a37dcacc970cf909d009469
---

{{CSSRef}}

> [!WARNING]
> Autoren sollten nach Möglichkeit vermeiden, die `direction` CSS-Eigenschaft zu verwenden und stattdessen das HTML-Globale Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) verwenden.

Die **`direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Richtung von Text, Tabellen- und Gitterspalten sowie horizontalem Überfluss fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für Sprachen, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

{{InteractiveExample("CSS Demo: direction")}}

```css interactive-example-choice
direction: ltr;
```

```css interactive-example-choice
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}
```

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert wird (z. B. mit dem [HTML `dir` Attribut](/de/docs/Web/HTML/Global_attributes/dir)) anstatt durch direkte Verwendung der `direction` Eigenschaft.

Die Eigenschaft legt die Basistextrichtung von Blockelementen und die Richtung von Einbettungen fest, die durch die Eigenschaft {{Cssxref("unicode-bidi")}} erstellt werden. Sie legt auch die Standardausrichtung von Text, Blockelementen sowie die Richtung fest, in die sich Zellen innerhalb einer Tabellen- oder Gitterreihe bewegen.

Im Gegensatz zum `dir` Attribut in HTML wird die `direction` Eigenschaft nicht von Tabellenspalten in Tabellenzellen vererbt, da die CSS-Vererbung dem Dokumentbaum folgt und Tabellenzellen sich innerhalb von Reihen, aber nicht innerhalb von Spalten befinden.

Die Eigenschaften `direction` und {{cssxref("unicode-bidi")}} sind die einzigen zwei Eigenschaften, die nicht von der {{cssxref("all")}} Kurzschreibweise beeinflusst werden.

## Syntax

```css
/* Keyword values */
direction: ltr;
direction: rtl;

/* Global values */
direction: inherit;
direction: initial;
direction: revert;
direction: revert-layer;
direction: unset;
```

### Werte

- `ltr`
  - : Text und andere Elemente gehen von links nach rechts. Dies ist der Standardwert.
- `rtl`
  - : Text und andere Elemente gehen von rechts nach links.

Damit die `direction` Eigenschaft Auswirkungen auf Inline-Elemente hat, muss der Wert der Eigenschaft {{Cssxref("unicode-bidi")}} `embed` oder `override` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von rechts-nach-links Richtung

Im folgenden Beispiel sind zwei Textzeichenfolgen zu sehen, die beide mit `direction: rtl` angezeigt werden. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, befindet sich der Punkt beim englischen Text nun an einer ungewöhnlichen Stelle.

```css
blockquote {
  direction: rtl;
  width: 300px;
}
```

```html
<blockquote>
  <p>This paragraph is in English but incorrectly goes right to left.</p>
  <p></p>
</blockquote>

<blockquote>
  <p>هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
  <p></p>
</blockquote>
```

{{EmbedLiveSample('Setting_right-to-left_direction', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("unicode-bidi")}}
- {{CSSxRef("writing-mode")}}
- SVG {{SVGAttr("direction")}} Attribut
- Das HTML Globale Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir)
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
