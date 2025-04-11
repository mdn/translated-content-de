---
title: direction
slug: Web/CSS/direction
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

> [!WARNING]
> Wo möglich, wird Autoren empfohlen, die Verwendung der `direction` CSS-Eigenschaft zu vermeiden und stattdessen das HTML [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) globale Attribut zu verwenden.

Die **`direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Richtung von Text, Tabellen- und Rasterspalten sowie horizontalem Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für solche, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

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

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert wird (z.B. mit [HTML's `dir` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/dir)), anstatt durch direkte Verwendung der `direction` Eigenschaft.

Die Eigenschaft legt die Basis-Textrichtung von Block-Elementen und die Richtung von Einbettungen fest, die durch die {{Cssxref("unicode-bidi")}} Eigenschaft erzeugt werden. Sie legt auch die Standardausrichtung von Text, Block-Elementen und die Richtung fest, in der Zellen innerhalb einer Tabellen- oder Rasterreihe fließen.

Im Gegensatz zum `dir` Attribut in HTML wird die `direction` Eigenschaft nicht von Tabellenspalten auf Tabellenzellen vererbt, da die CSS-Vererbung dem Dokumentbaum folgt und Tabellenzellen sich innerhalb von Reihen, aber nicht innerhalb von Spalten befinden.

Die `direction` und {{cssxref("unicode-bidi")}} Eigenschaften sind die einzigen beiden Eigenschaften, die nicht von der {{cssxref("all")}} Kurzschreibweise beeinflusst werden.

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

Damit die `direction` Eigenschaft irgendeine Wirkung auf Inline-Elemente hat, muss der Wert der {{Cssxref("unicode-bidi")}} Eigenschaft `embed` oder `override` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der rechten-nach-linken Richtung

Im folgenden Beispiel sind zwei Textzeichenfolgen, die beide mit `direction: rtl` angezeigt werden. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, hat der englische Text nun einen Punkt an einer ungewöhnlichen Stelle.

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
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
