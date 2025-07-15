---
title: direction
slug: Web/CSS/direction
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

> [!WARNING]
> Wo möglich, werden Autoren ermutigt, die Verwendung der CSS-Eigenschaft `direction` zu vermeiden und stattdessen das HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) zu verwenden.

Die **`direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Richtung von Text, Tabellen- und Grid-Spalten sowie den horizontalen Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für solche, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

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
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}
```

Beachten Sie, dass die Textrichtung üblicherweise innerhalb eines Dokuments definiert wird (z. B. mit dem [HTML `dir` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/dir)) anstatt durch die direkte Verwendung der `direction` Eigenschaft.

Die Eigenschaft legt die Basistextrichtung von Block-Elementen und die Richtung von Einbettungen fest, die durch die Eigenschaft {{Cssxref("unicode-bidi")}} erstellt werden. Sie legt auch die standardmäßige Ausrichtung von Text, Block-Elementen und die Richtung fest, in der Zellen innerhalb einer Tabellen- oder Grid-Zeile fließen.

Im Gegensatz zum `dir` Attribut in HTML wird die `direction` Eigenschaft nicht von Tabellenspalten in Tabellenzellen vererbt, da die CSS-Vererbung der Dokumentstruktur folgt und Tabellenzellen sich innerhalb von Zeilen, aber nicht innerhalb von Spalten befinden.

Die `direction` und {{cssxref("unicode-bidi")}} Eigenschaften sind die einzigen zwei Eigenschaften, die nicht von der Kurzschreibweise {{cssxref("all")}} betroffen sind.

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
  - : Text und andere Elemente verlaufen von links nach rechts. Dies ist der Standardwert.
- `rtl`
  - : Text und andere Elemente verlaufen von rechts nach links.

Damit die `direction` Eigenschaft Auswirkungen auf inline-level-Elemente hat, muss der Wert der {{Cssxref("unicode-bidi")}} Eigenschaft `embed` oder `override` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Rechts-nach-Links-Richtung

Im untenstehenden Beispiel befinden sich zwei Textstrings, die beide mit `direction: rtl` angezeigt werden. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, befindet sich beim englischen Text nun ein Punkt an einer ungewöhnlichen Stelle.

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
- Das HTML [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) globales Attribut
- [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
