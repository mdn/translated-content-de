---
title: direction
slug: Web/CSS/direction
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

> [!WARNING]
> Wo möglich, sollten Autoren ermutigt werden, das `direction` CSS-Attribut zu vermeiden und stattdessen das HTML [`dir`](/de/docs/Web/HTML/Global_attributes/dir) globale Attribut zu verwenden.

Die **`direction`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Richtung von Text, Tabellen-Spalten und horizontalem Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für solche, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

{{EmbedInteractiveExample("pages/css/direction.html")}}

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert ist (z. B. mit [HTML's `dir`-Attribut](/de/docs/Web/HTML/Global_attributes/dir)) anstatt durch direkte Nutzung der `direction`-Eigenschaft.

Die Eigenschaft legt die Basistextrichtung von Block-Level-Elementen und die Richtung von Einbettungen, die durch die {{Cssxref("unicode-bidi")}}-Eigenschaft erstellt wurden, fest. Sie legt auch die Standardausrichtung von Text, Block-Level-Elementen und die Richtung fest, in die sich Zellen innerhalb einer Tabellenzeile bewegen.

Im Gegensatz zum `dir`-Attribut in HTML wird die `direction`-Eigenschaft nicht von Tabellenspalten in Tabellenzellen vererbt, da CSS-Vererbung dem Dokumentbaum folgt und Tabellenzellen innerhalb von Zeilen, aber nicht innerhalb von Spalten liegen.

Die `direction`- und {{cssxref("unicode-bidi")}}-Eigenschaften sind die einzigen beiden Eigenschaften, die nicht von der {{cssxref("all")}} Kurzschrift-Eigenschaft betroffen sind.

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

Damit die `direction`-Eigenschaft eine Wirkung auf Inline-Level-Elemente hat, muss der Wert der {{Cssxref("unicode-bidi")}}-Eigenschaft `embed` oder `override` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Richtung von rechts nach links

Im folgenden Beispiel sind zwei Textabschnitte, die beide mit `direction: rtl` angezeigt werden. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, befindet sich der Punkt im englischen Text jetzt an einer ungewöhnlichen Stelle.

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
- Das HTML [`dir`](/de/docs/Web/HTML/Global_attributes/dir) globale Attribut
- [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
