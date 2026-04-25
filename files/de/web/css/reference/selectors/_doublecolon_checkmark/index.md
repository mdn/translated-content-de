---
title: "`::checkmark` CSS pseudo-element"
short-title: ::checkmark
slug: Web/CSS/Reference/Selectors/::checkmark
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{SeeCompatTable}}

Das **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf das Häkchen ab, das in dem aktuell ausgewählten {{htmlelement("option")}}-Element eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist. Es kann verwendet werden, um einen visuellen Hinweis darauf zu geben, welche Option ausgewählt ist.

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

Das `::checkmark`-Pseudoelement zielt auf das Häkchen ab, das in dem aktuell ausgewählten `<option>` eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist.

Es kann nur dann angesprochen werden, wenn das ursprüngliche Element einen Picker hat und das Basis-Erscheinungsbild über den {{cssxref("appearance")}}-Eigenschaftswert `base-select` darauf gesetzt wurde. Sein generierter Kasten erscheint vor allen Kästen, die durch das {{cssxref("::before")}}-Pseudoelement generiert werden. Das Icon kann mit der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::checkmark`-Selektor ist zum Beispiel nützlich, wenn Sie das Häkchen ausblenden, ein benutzerdefiniertes Icon verwenden oder die Positionierung des Häkchens in den `<option>`-Elementen anpassen möchten.

> [!NOTE]
> Das `::checkmark`-Pseudoelement ist nicht in der Zugänglichkeitshierarchie enthalten, sodass generierter {{cssxref("content")}}, der darauf gesetzt wird, von unterstützenden Technologien nicht angekündigt wird. Sie sollten dennoch sicherstellen, dass das neu gesetzte Icon für seinen beabsichtigten Zweck visuell sinnvoll ist.

## Beispiele

### Anpassung des Häkchens

Um die Funktionalität eines anpassbaren Auswahl-Elements zu aktivieren, müssen sowohl das `<select>`-Element als auch sein Picker einen {{cssxref("appearance")}}-Wert von `base-select` darauf gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Angenommen, [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) wird verwendet, um die `<option>`-Elemente anzuordnen (was bei **aktuellen Implementierungen** anpassbarer Auswahl-Objekte der Fall ist), könnten Sie das Häkchen vom Anfang der Zeile an das Ende verschieben, indem Sie einen {{cssxref("order")}}-Wert größer als `0` darauf setzen und es mit einem `auto`-Wert für {{cssxref("margin-left")}} am Ende der Zeile ausrichten (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}}-Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Icon zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Siehe [Styling des aktuellen Auswahlsymbols](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einer Live-Demo.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
