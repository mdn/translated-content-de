---
title: ::picker-icon
slug: Web/CSS/Reference/Selectors/::picker-icon
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

Das **`::picker-icon`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf das Auswahl-Symbol in Formularsteuerelementen ab, die ein dazugehöriges Symbol haben. Im Falle eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es das Pfeilsymbol aus, das auf dem `<select>`-Element angezeigt wird und nach unten zeigt, wenn es geschlossen ist.

## Syntax

```css-nolint
::picker-icon {
  /* ... */
}
```

## Beschreibung

Das `::picker-icon` Pseudo-Element zielt auf das Auswahl-Symbol von Formularsteuerelementen ab, das heißt, das auf der Steuerschaltfläche angezeigte Symbol. Es kann nur angewendet werden, wenn das ursprüngliche Element ein Auswahl-Symbol hat und eine Grundeinstellung über die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` gesetzt ist. Sein generierter Block erscheint nach allen durch das {{cssxref("::after")}} Pseudo-Element generierten Blöcken, mit dem im Standardbrowserstile spezifizierten Symbol; Sie können es mit der {{cssxref("content")}}-Eigenschaft anpassen.

Der `::picker-icon` Selektor kann verwendet werden, um den nach unten zeigenden Pfeil auf der Inline-Endseite eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) auszuwählen. Dies ist nützlich, wenn Sie z.B. die Farbe oder Größe des Symbols anpassen, ein anderes Symbol verwenden (unter Verwendung von {{cssxref("content")}} oder [SVG](/de/docs/Web/SVG)), oder es animieren möchten, wenn das Auswahlmenü geöffnet und geschlossen wird.

Das Auswählen von anpassbaren `<select>` Auswahl-Symbolen ist der einzige aktuelle Anwendungsfall für `::picker-icon`, aber in Zukunft könnten noch weitere hinzugefügt werden.

> [!NOTE]
> Das `::picker-icon` Pseudo-Element ist nicht im Zugänglichkeitsbaum enthalten, daher wird jeder generierte {{cssxref("content")}} darauf nicht von unterstützenden Technologien angekündigt. Sie sollten trotzdem sicherstellen, dass das von Ihnen eingestellte neue Symbol visuell sinnvoll für seinen beabsichtigten Zweck ist.

## Beispiele

### Animation des Auswahl-Symbols

Um die anpassbare Select-Funktionalität zu nutzen, müssen das `<select>`-Element und sein Auswahl-Symbol beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann beispielsweise das `::picker-icon` selektieren und ihm eine benutzerdefinierte {{cssxref("color")}} und eine {{cssxref("transition")}} geben, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Im nächsten Regelwerk wird `::picker-icon` mit der {{cssxref(":open")}} Pseudo-Klasse kombiniert — die das Symbol nur dann anvisiert, wenn das Auswahlmenü geöffnet ist — und es wird in einen `rotate`-Wert von `180deg` überführt, wenn das `<select>` geöffnet ist.

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

Sehen Sie [Styling the picker icon](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_picker_icon) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einer Live-Beispiel-Darstellung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
