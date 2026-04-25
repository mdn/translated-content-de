---
title: "`::picker-icon` CSS pseudo-element"
short-title: ::picker-icon
slug: Web/CSS/Reference/Selectors/::picker-icon
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::picker-icon`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf das Auswahl-Symbol innerhalb von Formularsteuerungen, die mit einem Symbol verbunden sind. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es das Pfeilsymbol aus, das auf dem `<select>`-Element angezeigt wird und nach unten zeigt, wenn es geschlossen ist.

## Syntax

```css-nolint
::picker-icon {
  /* ... */
}
```

## Beschreibung

Das `::picker-icon` Pseudo-Element zielt auf das Auswahl-Symbol von Formularsteuerungen, also das Symbol, das auf dem Steuerelement-Button angezeigt wird. Es kann nur dann gezielt werden, wenn das ursprüngliche Element einen Picker hat und die Grundeinstellung des Erscheinungsbildes über den {{cssxref("appearance")}}-Eigenschaftswert `base-select` gesetzt ist. Seine generierte Box erscheint nach allen Boxen, die vom {{cssxref("::after")}} Pseudo-Element generiert wurden, mit dem im Standard-Browser-Stylesheet angegebenen Symbol; Sie können es mit der {{cssxref("content")}} Eigenschaft anpassen.

Der `::picker-icon`-Selektor kann verwendet werden, um den nach unten zeigenden Pfeil auf der Inline-End-Seite eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) auszuwählen. Dies ist nützlich, wenn Sie beispielsweise die Farbe oder Größe des Symbols anpassen, ein anderes Symbol verwenden (mit {{cssxref("content")}} oder [SVG](/de/docs/Web/SVG)), oder es animieren möchten, wenn der Picker geöffnet und geschlossen wird.

Das Auswählen von anpassbaren `<select>` Picker-Symbolen ist der einzige derzeitige Anwendungsfall für `::picker-icon`, aber in Zukunft könnten weitere hinzugefügt werden.

> [!NOTE]
> Das `::picker-icon` Pseudo-Element ist nicht im Accessibility-Tree enthalten, daher wird kein generierter {{cssxref("content")}} von unterstützenden Technologien angekündigt. Sie sollten dennoch sicherstellen, dass jedes von Ihnen eingestellte neue Symbol visuell für den vorgesehenen Zweck sinnvoll ist.

## Beispiele

### Das Auswahl-Symbol animieren

Um sich für die Funktionalität eines anpassbaren Auswahl-Elements zu entscheiden, müssen sowohl das `<select>`-Element als auch sein Picker beide einen {{cssxref("appearance")}}-Wert von `base-select` eingestellt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann beispielsweise das `::picker-icon` anvisieren und ihm eine benutzerdefinierte {{cssxref("color")}} und eine {{cssxref("transition")}} verleihen, sodass Änderungen an seiner {{cssxref("rotate")}} Eigenschaft sanft animiert werden:

```css
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

In der nächsten Regel wird `::picker-icon` mit der {{cssxref(":open")}} Pseudo-Klasse kombiniert, die das Symbol nur anvisiert, wenn der Picker geöffnet ist, und es wird in einen `rotate`-Wert von `180deg` überführt, wenn das `<select>` geöffnet wird.

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

Siehe [Styling the picker icon](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_picker_icon) für ein vollständiges Beispiel, das diesen Code zusammen mit einer Live-Beispielanzeige verwendet.

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
