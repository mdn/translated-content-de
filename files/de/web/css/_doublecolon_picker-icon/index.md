---
title: ::picker-icon
slug: Web/CSS/::picker-icon
l10n:
  sourceCommit: 004b0ee7b8cfaf6793c1e36d589233199c616759
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::picker-icon`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Picker-Symbol innerhalb von Formularelementen, die ein Symbol aufweisen. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wird das Pfeilsymbol, das auf dem `<select>`-Element angezeigt wird und bei geschlossenem Zustand nach unten zeigt, ausgewählt.

## Syntax

```css-nolint
::picker-icon {
  /* ... */
}
```

## Beschreibung

Das `::picker-icon` Pseudo-Element zielt auf das Picker-Symbol von Formularelementen, also das Symbol, das auf der Schaltfläche des Elements angezeigt wird. Es kann nur dann gezielt werden, wenn das ursprüngliche Element einen Picker hat und sein Basis-Erscheinungsbild über die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` festgelegt wurde. Sein generierter Kasten erscheint nach allen Kästen, die durch das {{cssxref("::after")}} Pseudo-Element erzeugt werden, mit dem im Standard-Browser-Stylesheet angegebenen Symbol. Sie können es mit der {{cssxref("content")}}-Eigenschaft anpassen.

Der `::picker-icon` Selektor kann verwendet werden, um den nach unten gerichteten Pfeil auf der inline-end Seite eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zu selektieren. Dies ist nützlich, wenn Sie zum Beispiel die Farbe oder Größe des Symbols anpassen, ein anderes Symbol (mit {{cssxref("content")}} oder [SVG](/de/docs/Web/SVG)) verwenden oder es animieren möchten, wenn der Picker geöffnet und geschlossen wird.

Das Selektieren von anpassbaren `<select>` Picker-Symbolen ist der einzige aktuelle Anwendungsfall für `::picker-icon`, aber in der Zukunft könnten weitere hinzugefügt werden.

> [!NOTE]
> Das `::picker-icon` Pseudo-Element ist nicht im Zugänglichkeitsbaum enthalten, sodass jeglicher generierter {{cssxref("content")}}, der darauf gesetzt wird, nicht von unterstützenden Technologien angekündigt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für den vorgesehenen Zweck sinnvoll ist.

## Beispiele

### Das Picker-Symbol animieren

Um sich für die Funktionalität anpassbarer Auswahl zu entscheiden, müssen das `<select>`-Element und sein Picker beide einen {{cssxref("appearance")}}-Wert von `base-select` aufweisen:

```css
select,
::picker-icon(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel das `::picker-icon` anvisieren und ihm eine benutzerdefinierte {{cssxref("color")}} und eine {{cssxref("transition")}} geben, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

In der nächsten Regel wird `::picker-icon` mit der {{cssxref(":open")}} Pseudo-Klasse kombiniert — die das Symbol nur dann anvisiert, wenn der Picker geöffnet ist — und zu einem `rotate`-Wert von `180deg` animiert, wenn das `<select>` geöffnet wird.

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

Siehe [Styling the picker icon](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_picker_icon) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einem Live-Beispiel der Darstellung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
