---
title: ::checkmark
slug: Web/CSS/Reference/Selectors/::checkmark
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Das **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf das Häkchen ab, das innerhalb des derzeit ausgewählten {{htmlelement("option")}}-Elements eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert wird. Es kann verwendet werden, um visuell anzuzeigen, welcher Eintrag ausgewählt ist.

{{InteractiveExample("CSS Demo: ::checkmark")}}

```html-nolint interactive-example
<label for="pet-select">
  Select pet:
</label>
<br />
<select id="pet-select">
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="chicken">
    Chicken
  </option>
</select>
```

```css interactive-example
option::checkmark {
  color: orange;
  font-size: 1.5rem;
}

select,
::picker(select) {
  appearance: base-select;
  width: 200px;
}

select {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
}

::picker(select) {
  border: none;
}

option {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
}

option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:nth-of-type(odd) {
  background: white;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
```

## Syntax

```css-nolint
::checkmark {
  /* ... */
}
```

## Beschreibung

Das `::checkmark` Pseudo-Element zielt auf das Häkchen ab, das innerhalb eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) im derzeit ausgewählten `<option>` platziert wird.

Es ist nur ansteuerbar, wenn das Ursprungs-Element einen Auswahlmechanismus hat und das basale Erscheinungsbild darauf über die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` gesetzt ist. Die generierte Box erscheint vor allen Boxen, die vom {{cssxref("::before")}} Pseudo-Element generiert werden. Das Icon kann mit der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::checkmark`-Selektor ist zum Beispiel nützlich, wenn Sie das Häkchen ausblenden, ein benutzerdefiniertes Icon verwenden oder die Position des Häkchens im `<option>`-Element anpassen möchten.

> [!NOTE]
> Das `::checkmark` Pseudo-Element ist nicht im Accessibility-Tree enthalten, daher wird jeder auf ihm gesetzte, generierte {{cssxref("content")}}-Inhalt von unterstützenden Technologien nicht angekündigt. Sie sollten dennoch sicherstellen, dass jedes von Ihnen gesetzte neue Icon visuell sinnvoll für seinen beabsichtigten Zweck ist.

## Beispiele

### Anpassung des Häkchens

Um die Funktionalität eines anpassbaren Select-Elements zu verwenden, müssen sowohl das `<select>`-Element als auch dessen Auswahlmechanismus einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Angenommen, [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) wird verwendet, um die `<option>`-Elemente anzuordnen (was in den **aktuellen Implementierungen** von anpassbaren Selects der Fall ist), können Sie dann das Häkchen vom Anfang der Zeile zum Ende verschieben, indem Sie einen {{cssxref("order")}}-Wert größer als `0` darauf setzen und es mit einem `auto`-Wert für {{cssxref("margin-left")}} am Ende der Zeile ausrichten (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}}-Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Icon zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Sehen Sie sich [Styling the current selection checkmark](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel an, das diesen Code verwendet, zusammen mit einer Live-Beispieldarstellung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
