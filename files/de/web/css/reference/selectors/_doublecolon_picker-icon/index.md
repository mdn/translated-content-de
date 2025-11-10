---
title: ::picker-icon
slug: Web/CSS/Reference/Selectors/::picker-icon
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Der **`::picker-icon`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf das Auswahlsymbol in Formularelementen, die ein damit verbundenes Symbol haben. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wird das Pfeilsymbol ausgewählt, das auf dem `<select>` Element angezeigt wird und nach unten zeigt, wenn es geschlossen ist.

## Syntax

```css-nolint
::picker-icon {
  /* ... */
}
```

## Beschreibung

Das `::picker-icon` Pseudo-Element zielt auf das Auswahlsymbol von Formularelementen ab, also das Symbol, das auf der Schaltfläche des Elements angezeigt wird. Es kann nur dann gezielt werden, wenn das ursprungliche Element ein Auswahlwerkzeug hat und wenn die Grundeinstellung über die Eigenschaft {{cssxref("appearance")}} auf `base-select` gesetzt wurde. Die erzeugte Box erscheint nach allen durch das {{cssxref("::after")}} Pseudo-Element erzeugten Boxen, wobei das Symbol im Standard-Browser-Stylesheet angegeben ist; Sie können es mit der {{cssxref("content")}} Eigenschaft anpassen.

Der `::picker-icon` Selektor kann verwendet werden, um den nach unten zeigenden Pfeil auf der Inline-Endseite eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) auszuwählen. Dies ist nützlich, wenn Sie beispielsweise die Farbe oder Größe des Symbols anpassen, ein anderes Symbol verwenden (mit {{cssxref("content")}} oder [SVG](/de/docs/Web/SVG)), oder es animieren möchten, wenn das Auswahlwerkzeug geöffnet und geschlossen wird.

Das Auswählen von anpassbaren `<select>` Auswahlsymbolen ist der einzige aktuelle Anwendungsfall für `::picker-icon`, es können jedoch in Zukunft weitere hinzugefügt werden.

> [!NOTE]
> Das `::picker-icon` Pseudo-Element ist nicht im Accessibility-Tree enthalten, so dass jeglicher auf ihm gesetzter erzeugter {{cssxref("content")}} von unterstützenden Technologien nicht angekündigt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell sinnvoll für seinen beabsichtigten Zweck ist.

## Beispiele

### Animation des Auswahlsymbols

Um die anpassbare Auswahl-Funktionalität zu aktivieren, müssen das `<select>` Element und sein Auswahlwerkzeug beide einen {{cssxref("appearance")}} Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann z. B. das `::picker-icon` anvisieren und ihm eine benutzerdefinierte {{cssxref("color")}} und eine {{cssxref("transition")}} geben, damit Änderungen an seiner {{cssxref("rotate")}} Eigenschaft sanft animiert werden:

```css
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

In der nächsten Regel wird `::picker-icon` mit der {{cssxref(":open")}} Pseudo-Klasse kombiniert - die das Symbol nur dann anvisiert, wenn das Auswahlwerkzeug geöffnet ist - und es wird beim Öffnen des `<select>` auf einen `rotate` Wert von `180deg` geändert.

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

Sehen Sie sich [Styling the picker icon](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_picker_icon) für ein vollständiges Beispiel an, das diesen Code verwendet, zusammen mit einem Live-Beispiel-Rendering.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Customizable select elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
