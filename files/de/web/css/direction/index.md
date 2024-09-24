---
title: Richtung
slug: Web/CSS/direction
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

> [!WARNING]
> Wo immer möglich, wird Autoren empfohlen, die Verwendung der CSS-Eigenschaft `direction` zu vermeiden und stattdessen das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes#dir) zu verwenden.

Die **`direction`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Laufrichtung von Text, Tabellen-Spalten und horizontalem Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für Sprachen, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

{{EmbedInteractiveExample("pages/css/direction.html")}}

Beachten Sie, dass die Textlaufrichtung normalerweise innerhalb eines Dokuments (z.B. mit dem [HTML-`dir`-Attribut](/de/docs/Web/HTML/Global_attributes/dir)) definiert wird, anstatt den direkten Gebrauch der `direction`-Eigenschaft.

Diese Eigenschaft legt die Grundrichtung von Blockelementen und die Richtung von Einbettungen, die durch die {{Cssxref("unicode-bidi")}}-Eigenschaft erstellt werden, fest. Sie legt auch die Standardausrichtung von Text- und Blockelementen sowie die Fließrichtung der Zellen innerhalb einer Tabellenzeile fest.

Im Gegensatz zum `dir`-Attribut in HTML wird die `direction`-Eigenschaft nicht von Tabellenspalten in Tabellenzellen vererbt, da CSS-Vererbung dem Dokumentbaum folgt und Tabellenzellen sich innerhalb von Zeilen, aber nicht innerhalb von Spalten befinden.

Die Eigenschaften `direction` und {{cssxref("unicode-bidi")}} sind die einzigen beiden Eigenschaften, die nicht von der Kurzformeigenschaft {{cssxref("all")}} betroffen sind.

## Syntax

```css
/* Schlüsselwortwerte */
direction: ltr;
direction: rtl;

/* Globale Werte */
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

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Recht-nach-Links-Richtung

Im folgenden Beispiel gibt es zwei Textstrings, die beide `direction: rtl` verwenden. Während der arabische Text mit dieser Einstellung korrekt angezeigt wird, befindet sich der Punkt im englischen Text an einer ungewöhnlichen Stelle.

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
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
