---
title: direction
slug: Web/CSS/Reference/Properties/direction
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

> [!WARNING]
> Wenn möglich, werden Autoren ermutigt, die Verwendung der CSS-Eigenschaft `direction` zu vermeiden und stattdessen das HTML-Globale Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) zu verwenden.

Die **`direction`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Richtung von Text, Tabellen- und Gitterspalten und horizontalem Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch) und `ltr` für solche, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert wird (z. B. mit dem [HTML-Attribut `dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)) anstatt durch direkte Verwendung der `direction`-Eigenschaft.

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

Damit die `direction`-Eigenschaft Auswirkungen auf Inline-Elemente hat, muss der Wert der {{Cssxref("unicode-bidi")}}-Eigenschaft `embed` oder `override` sein.

## Beschreibung

Die Eigenschaft legt die grundlegende Textrichtung von Block-Elementen und die Richtung von Einbettungen fest, die von der Eigenschaft {{Cssxref("unicode-bidi")}} erstellt werden. Sie legt auch die Standard-Ausrichtung von Text, Block-Elementen und die Richtung fest, in der Zellen innerhalb einer Tabellen- oder Rasterzeile verlaufen.

Anders als das `dir`-Attribut in HTML wird die `direction`-Eigenschaft nicht von Tabellenspalten auf Tabellenzellen vererbt, da die CSS-Vererbung dem Dokumentenbaum folgt und Tabellenzellen in Zeilen, nicht aber in Spalten enthalten sind.

Die Eigenschaften `direction` und {{cssxref("unicode-bidi")}} sind die einzigen beiden Eigenschaften, die nicht von der Kurzschreibweise-Eigenschaft {{cssxref("all")}} beeinflusst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Rechts-nach-Links-Richtung

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
- SVG-Attribut {{SVGAttr("direction")}}
- Das HTML-Globale Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
- [Erstellen vertikaler Formularsteuerungen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
