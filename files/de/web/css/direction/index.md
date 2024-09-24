---
title: direction
slug: Web/CSS/direction
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{CSSRef}}

> [!WARNING]
> Wenn möglich, wird Autoren empfohlen, die CSS-Eigenschaft `direction` zu vermeiden und stattdessen das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) zu verwenden.

Die **`direction`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Richtung von Text, Tabellenspalten und horizontalem Überlauf fest. Verwenden Sie `rtl` für Sprachen, die von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch), und `ltr` für solche, die von links nach rechts geschrieben werden (wie Englisch und die meisten anderen Sprachen).

{{EmbedInteractiveExample("pages/css/direction.html")}}

Beachten Sie, dass die Textrichtung normalerweise innerhalb eines Dokuments definiert wird (z. B. mit dem [HTML-Attribut `dir`](/de/docs/Web/HTML/Global_attributes/dir)) und nicht durch direkte Verwendung der `direction`-Eigenschaft.

Die Eigenschaft legt die Basis-Textrichtung von Block-Elementen und die Richtung von Einbettungen fest, die durch die {{Cssxref("unicode-bidi")}}-Eigenschaft erstellt werden. Sie legt auch die Standardausrichtung von Text, Block-Elementen und die Flussrichtung von Zellen innerhalb einer Tabellenzeile fest.

Im Gegensatz zum `dir`-Attribut in HTML wird die `direction`-Eigenschaft nicht von Tabellenspalten in Tabellenzellen vererbt, da die CSS-Vererbung dem Dokumentbaum folgt und Tabellenzellen in Zeilen, aber nicht in Spalten enthalten sind.

Die `direction`- und {{cssxref("unicode-bidi")}}-Eigenschaften sind die einzigen beiden Eigenschaften, die nicht von der {{cssxref("all")}}-Kurzschreibweise betroffen sind.

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

Damit die `direction`-Eigenschaft irgendeine Auswirkung auf inline-Level-Elemente hat, muss der Wert der {{Cssxref("unicode-bidi")}}-Eigenschaft `embed` oder `override` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Richtung von rechts nach links

Im folgenden Beispiel befinden sich zwei Textstrings, die beide mit `direction: rtl` angezeigt werden. Obwohl der arabische Text mit dieser Einstellung korrekt angezeigt wird, hat der englische Text nun einen Punkt an einer ungewöhnlichen Stelle.

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
- Das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir)
- [Erstellung vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
