---
title: "`direction` CSS property"
short-title: direction
slug: Web/CSS/Reference/Properties/direction
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

> [!WARNING]
> Wenn möglich, wird Autoren empfohlen, die Verwendung der `direction` CSS-Eigenschaft zu vermeiden und stattdessen das HTML [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) globale Attribut zu verwenden.

Die **`direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Richtung von Text, Tabellen- und Rasterspalten sowie horizontalem Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für Sprachen, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert wird (z.B. mit dem [HTML `dir` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/dir)) und nicht durch die direkte Verwendung der `direction` Eigenschaft.

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

Damit die `direction` Eigenschaft eine Wirkung auf Inline-Elemente hat, muss der Wert der {{Cssxref("unicode-bidi")}} Eigenschaft `embed` oder `override` sein.

## Beschreibung

Die Eigenschaft legt die Basistextrichtung von Block-Elementen und die Richtung von durch die {{Cssxref("unicode-bidi")}} Eigenschaft erstellten Einbettungen fest. Sie setzt auch die Standardausrichtung von Text, Block-Elementen und die Richtung, in der Zellen innerhalb einer Tabellen- oder Rasterzeile verlaufen.

Im Gegensatz zum `dir` Attribut in HTML wird die `direction` Eigenschaft nicht von Tabellenspalten auf Tabellenzellen vererbt, da die CSS-Vererbung dem Dokumentbaum folgt und Tabellenzellen innerhalb von Zeilen, aber nicht innerhalb von Spalten liegen.

Die `direction` und {{cssxref("unicode-bidi")}} Eigenschaften sind die einzigen zwei Eigenschaften, die nicht von der {{cssxref("all")}} Kurzschreibweise beeinflusst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Rechts-nach-Links-Richtung

Im untenstehenden Beispiel sind zwei Textzeilen dargestellt, beide mit `direction: rtl`. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, befindet sich beim englischen Text ein Punkt an einer ungewöhnlichen Stelle.

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
- Das HTML [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) globale Attribut
- [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
