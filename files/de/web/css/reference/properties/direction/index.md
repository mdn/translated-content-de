---
title: "`direction` CSS property"
short-title: direction
slug: Web/CSS/Reference/Properties/direction
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

> [!WARNING]
> Wo möglich, wird Autoren empfohlen, die Verwendung der `direction` CSS-Eigenschaft zu vermeiden und stattdessen das HTML-Globale Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) zu verwenden.

Die **`direction`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die Richtung von Text, Tabellen- und Gitterspalten sowie horizontalem Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für solche, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert wird (z. B. mit dem [HTML-`dir`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/dir)) und nicht durch die direkte Verwendung der `direction`-Eigenschaft.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `ltr`
  - : Text und andere Elemente verlaufen von links nach rechts. Dies ist der Standardwert.
- `rtl`
  - : Text und andere Elemente verlaufen von rechts nach links.

Damit die `direction`-Eigenschaft irgendeine Wirkung auf Inline-Elemente hat, muss der Wert der {{Cssxref("unicode-bidi")}}-Eigenschaft `embed` oder `override` sein.

## Beschreibung

Die Eigenschaft legt die Basis-Textrichtung von Block-Elementen und die Richtung von durch die {{Cssxref("unicode-bidi")}}-Eigenschaft erstellten Einbettungen fest. Sie setzt auch die Standardausrichtung von Text, Block-Elementen und die Richtung, in die Zellen innerhalb einer Tabellen- oder Gitterreihe fließen.

Im Gegensatz zum `dir`-Attribut in HTML wird die `direction`-Eigenschaft nicht von Tabellenspalten auf Tabellenzellen vererbt, da die CSS-Vererbung dem Dokumentbaum folgt und sich Tabellenzellen innerhalb von Reihen, aber nicht innerhalb von Spalten befinden.

Die `direction`- und {{cssxref("unicode-bidi")}}-Eigenschaften sind die einzigen beiden Eigenschaften, die nicht von der {{cssxref("all")}}-Kurzschreibweise betroffen sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Richtung von rechts nach links

Im folgenden Beispiel sind zwei Textzeichenfolgen dargestellt, die beide mit `direction: rtl` angezeigt werden. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, hat der englische Text nun einen Punkt an einer ungewöhnlichen Stelle.

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
- SVG {{SVGAttr("direction")}}-Attribut
- Das HTML-Globale Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
- [Erstellung vertikaler Formularelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
