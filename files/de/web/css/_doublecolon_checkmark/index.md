---
title: ::checkmark
slug: Web/CSS/::checkmark
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Das **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Häkchen ab, das innerhalb des aktuell ausgewählten {{htmlelement("option")}}-Elements eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist. Es kann verwendet werden, um visuell anzuzeigen, welche Option ausgewählt ist.

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
  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
}

::picker(select) {
  border: none;
}

option {
  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
}

option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:nth-of-type(odd) {
  background: #fff;
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

Das `::checkmark` Pseudo-Element zielt auf das Häkchen ab, das in einem [anpassbaren Auswahl-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) innerhalb des aktuell ausgewählten `<option>` platziert ist.

Es kann nur dann gezielt werden, wenn das ursprüngliche Element über einen Picker verfügt und das Basispersönlichkeits-Aussehen über den Wert `base-select` der {{cssxref("appearance")}}-Eigenschaft darauf festgelegt ist. Sein generierter Kasten erscheint vor allen Kästchen, die vom {{cssxref("::before")}} Pseudo-Element generiert werden. Das Icon kann mit der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::checkmark` Selector ist nützlich, wenn Sie beispielsweise das Häkchen ausblenden, ein benutzerdefiniertes Icon verwenden oder die Positionierung des Häkchens im `<option>` Element anpassen möchten.

> [!NOTE]
> Das `::checkmark` Pseudo-Element ist nicht im Zugänglichkeitsbaum enthalten, sodass generierter {{cssxref("content")}}, der darauf gesetzt wird, von unterstützenden Technologien nicht angekündigt wird. Sie sollten dennoch sicherstellen, dass jedes neue Icon, das Sie einstellen, visuell für den beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Anpassen des Häkchens

Um die anpassbare Auswahlfunktion zu aktivieren, müssen das `<select>` Element und dessen Picker beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Vorausgesetzt, dass [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet wird, um die `<option>` Elemente anzuordnen (was in **aktuellen Implementierungen** von anpassbaren Auswahlen der Fall ist), könnten Sie dann das Häkchen vom Anfang der Zeile zum Ende verschieben, indem Sie einen {{cssxref("order")}} Wert darauf setzen, der größer als `0` ist, und es mit einem `auto` {{cssxref("margin-left")}}-Wert ans Ende der Zeile ausrichten (siehe [Alignment and auto margins](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}}-Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Icon zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Siehe [Styling the current selection checkmark](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einem Live-Beispiel zur Darstellung.

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
