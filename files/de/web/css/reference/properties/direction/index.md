---
title: "`direction` CSS property"
short-title: direction
slug: Web/CSS/Reference/Properties/direction
l10n:
  sourceCommit: 8c21ceeff860d7b9f64b177115e3897543e7fcab
---

> [!WARNING]
> Autoren sollten nach Möglichkeit die CSS-Eigenschaft `direction` vermeiden und stattdessen das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) verwenden.

Die **CSS-Eigenschaft `direction`** legt die Richtung von Text, Tabellen- und Grid-Spalten sowie horizontalem Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für Sprachen, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

Beachten Sie, dass die Textrichtung üblicherweise im Dokument festgelegt wird (z. B. mit dem [`dir`-Attribut von HTML](/de/docs/Web/HTML/Reference/Global_attributes/dir)) und nicht durch direkte Verwendung der Eigenschaft `direction`.

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

Diese Eigenschaft wird durch einen der folgenden Schlüsselwortwerte angegeben:

- `ltr`
  - : Text und andere Elemente verlaufen von links nach rechts. Dies ist der Standardwert.
- `rtl`
  - : Text und andere Elemente verlaufen von rechts nach links.

Damit die Eigenschaft `direction` bei Inline-Level-Elementen Wirkung zeigt, muss der Wert der Eigenschaft {{Cssxref("unicode-bidi")}} `embed` oder `override` sein.

## Beschreibung

Die Eigenschaft legt die grundlegende Textrichtung von Block-Level-Elementen und die Richtung der durch die Eigenschaft {{Cssxref("unicode-bidi")}} erzeugten Einbettungen fest. Sie bestimmt außerdem die standardmäßige Ausrichtung von Text und Block-Level-Elementen sowie die Richtung, in der Zellen innerhalb einer Tabellen- oder Grid-Zeile angeordnet werden.

Anders als das HTML-Attribut `dir` wird die Eigenschaft `direction` nicht von Tabellenspalten an Tabellenzellen vererbt. Die CSS-Vererbung folgt dem Dokumentbaum, und Tabellenzellen befinden sich innerhalb von Zeilen, nicht aber innerhalb von Spalten.

Die Eigenschaften `direction` und {{cssxref("unicode-bidi")}} sind die einzigen beiden Eigenschaften, die von der Kurzschreibweise {{cssxref("all")}} nicht beeinflusst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Richtung von rechts nach links festlegen

Im folgenden Beispiel werden zwei Textzeichenfolgen mit `direction: rtl` angezeigt. Während der arabische Text mit dieser Einstellung korrekt dargestellt wird, steht der Punkt im englischen Text nun an einer ungewöhnlichen Stelle.

```css
blockquote {
  direction: rtl;
  width: 300px;
}
```

```html
<blockquote>
  <p>This paragraph is in English but incorrectly goes right to left.</p>
</blockquote>

<blockquote>
  <p>هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
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
- SVG-Attribut {{SVGAttr("direction")}}
- Das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
- [Vertikale Formularsteuerelemente erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Mit unterschiedlichen Textrichtungen umgehen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
