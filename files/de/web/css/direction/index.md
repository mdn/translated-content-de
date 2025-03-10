---
title: direction
slug: Web/CSS/direction
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

> [!WARNING]
> Wenn möglich, sollten Autoren die Verwendung der CSS-Eigenschaft `direction` vermeiden und stattdessen das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) verwenden.

Die **`direction`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt die Richtung von Text, Tabellen- und Rasterspalten sowie den horizontalen Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für Sprachen, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

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

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert wird (z. B. mit [HTMLs `dir`-Attribut](/de/docs/Web/HTML/Global_attributes/dir)) anstatt durch direkte Verwendung der `direction`-Eigenschaft.

Die Eigenschaft legt die basale Textrichtung von Block-Elementen und die Richtung von Einbettungen fest, die durch die {{Cssxref("unicode-bidi")}}-Eigenschaft erstellt werden. Sie legt auch die Standardausrichtung von Text, Block-Elementen sowie die Fließrichtung von Zellen innerhalb einer Tabellen- oder Rasterzeile fest.

Im Gegensatz zum `dir`-Attribut in HTML wird die `direction`-Eigenschaft nicht von Tabellenspalten auf Tabellenzellen vererbt, da die Vererbung in CSS dem Dokumentbaum folgt und Tabellenzellen innerhalb von Zeilen, aber nicht innerhalb von Spalten liegen.

Die `direction`- und {{cssxref("unicode-bidi")}}-Eigenschaften sind die einzigen zwei Eigenschaften, die nicht von der {{cssxref("all")}} Kurzschreibweise betroffen sind.

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

Damit die `direction`-Eigenschaft Auswirkungen auf Inline-Elemente hat, muss der Wert der {{Cssxref("unicode-bidi")}}-Eigenschaft `embed` oder `override` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Rechts-nach-Links-Richtung

Im folgenden Beispiel gibt es zwei Textzeilen, die beide mit `direction: rtl` angezeigt werden. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, steht das Satzzeichen im englischen Text nun an ungewöhnlicher Stelle.

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
- Das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir)
- [Erstellung vertikaler Formularsteuerelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
