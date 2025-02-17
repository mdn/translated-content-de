---
title: direction
slug: Web/CSS/direction
l10n:
  sourceCommit: f528154c8bf518d104df5845ef229875a22ab25d
---

{{CSSRef}}

> [!WARNING]
> Wo möglich, wird Autoren empfohlen, die CSS-Eigenschaft `direction` zu vermeiden und stattdessen das globale Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) in HTML zu verwenden.

Die **`direction`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Textausrichtung, die Spaltenrichtung in Tabellen und Gittern sowie den horizontalen Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für Sprachen, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

{{EmbedInteractiveExample("pages/css/direction.html")}}

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert wird (z. B. mit dem [HTML-Attribut `dir`](/de/docs/Web/HTML/Global_attributes/dir)) und nicht direkt über die `direction`-Eigenschaft.

Die Eigenschaft legt die Basistextrichtung von Blockelementen und die Richtung von Einbettungen fest, die durch die Eigenschaft {{Cssxref("unicode-bidi")}} erzeugt wurden. Sie setzt außerdem die Standardausrichtung von Text, Blockelementen und die Richtung, in die Zellen innerhalb einer Tabellen- oder Gitterreihe fließen.

Anders als das `dir`-Attribut in HTML wird die `direction`-Eigenschaft nicht von Tabellenspalten auf Tabellenzellen vererbt, da die Vererbung von CSS der Dokumentstruktur folgt und Tabellenzellen Teil von Reihen, aber nicht von Spalten sind.

Die Eigenschaften `direction` und {{cssxref("unicode-bidi")}} sind die einzigen beiden Eigenschaften, die nicht von der Kurzform-Eigenschaft {{cssxref("all")}} beeinflusst werden.

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

Damit die `direction`-Eigenschaft bei Inline-Elementen Wirkung zeigt, muss der Wert der Eigenschaft {{Cssxref("unicode-bidi")}} entweder `embed` oder `override` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ausrichtung von rechts nach links setzen

Im folgenden Beispiel werden zwei Textzeichenfolgen dargestellt, beide mit `direction: rtl`. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, befindet sich der Punkt im englischen Text an einer ungewöhnlichen Stelle.

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
- Das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir)
- [Vertikale Formularsteuerelemente erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
