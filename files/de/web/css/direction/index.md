---
title: direction
slug: Web/CSS/direction
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

> [!WARNING]
> Wo möglich, sollten Autoren vermeiden, die CSS-Eigenschaft `direction` zu verwenden, und stattdessen das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes#dir) nutzen.

Die **`direction`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Richtung von Text, Tabellenspalten und horizontalem Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für diejenigen, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

{{EmbedInteractiveExample("pages/css/direction.html")}}

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert wird (z. B. mit dem [HTML-Attribut `dir`](/de/docs/Web/HTML/Global_attributes/dir)) und nicht direkt durch die Verwendung der `direction`-Eigenschaft.

Die Eigenschaft legt die Basis-Textrichtung von Block-Elementen und die Richtung von Einbettungen fest, die durch die {{Cssxref("unicode-bidi")}}-Eigenschaft erstellt werden. Sie legt auch die Standardausrichtung von Text, Block-Elementen und die Richtung fest, in der Zellen innerhalb einer Tabellenzeile fließen.

Im Gegensatz zum `dir`-Attribut in HTML wird die `direction`-Eigenschaft nicht von Tabellenspalten in Tabellenzellen vererbt, da die CSS-Vererbung dem Dokumentenbaum folgt und Tabellenzellen innerhalb von Zeilen, aber nicht innerhalb von Spalten liegen.

Die `direction`- und die {{Cssxref("unicode-bidi")}}-Eigenschaften sind die einzigen beiden Eigenschaften, die nicht von der {{cssxref("all")}}-Shorthand-Eigenschaft betroffen sind.

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

Damit die `direction`-Eigenschaft auf Inline-Elemente Wirkung zeigt, muss der Wert der Eigenschaft {{Cssxref("unicode-bidi")}} `embed` oder `override` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Rechts-nach-Links-Richtung

Im untenstehenden Beispiel sind zwei Textzeichenfolgen, die beide mit `direction: rtl` angezeigt werden. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, befindet sich der Punkt im englischen Text an einer ungewöhnlichen Stelle.

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

- {{Cssxref("unicode-bidi")}}
- {{Cssxref("writing-mode")}}
- Das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes#dir)
- [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
