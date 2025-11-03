---
title: ::checkmark
slug: Web/CSS/Reference/Selectors/::checkmark
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Der **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf das Häkchen, das im aktuell ausgewählten {{htmlelement("option")}} Element eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist. Es kann verwendet werden, um eine visuelle Anzeige bereitzustellen, welche Option ausgewählt ist.

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

Das `::checkmark` Pseudo-Element zielt auf das Häkchen, das im aktuell ausgewählten `<option>` eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist.

Es kann nur dann angesprochen werden, wenn das ursprüngliche Element über einen Picker verfügt und die Basisdarstellung über den {{cssxref("appearance")}} Eigenschaftswert `base-select` gesetzt wurde. Sein generiertes Box erscheint vor allen Boxen, die durch das {{cssxref("::before")}} Pseudo-Element generiert werden. Das Symbol kann mit der {{cssxref("content")}} Eigenschaft angepasst werden.

Der `::checkmark` Selektor ist nützlich, wenn Sie zum Beispiel das Häkchen ausblenden, ein benutzerdefiniertes Symbol verwenden oder die Position des Häkchens innerhalb der `<option>` Elemente anpassen möchten.

> [!NOTE]
> Das `::checkmark` Pseudo-Element ist nicht im Accessibility-Baum enthalten, so dass alle generierten {{cssxref("content")}} Inhalte darauf nicht von unterstützenden Technologien angekündigt werden. Sie sollten dennoch sicherstellen, dass das neue Symbol, das Sie setzen, visuell für den beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Anpassung des Häkchens

Um die anpassbare Select-Funktionalität zu aktivieren, müssen das `<select>` Element und sein Picker beide einen {{cssxref("appearance")}} Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Angenommen, [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) wird verwendet, um die `<option>` Elemente anzuordnen (was auf **derzeitige Implementierungen** von anpassbaren Selects zutrifft), könnten Sie das Häkchen vom Anfang der Zeile zum Ende bewegen, indem Sie einen {{cssxref("order")}} Wert größer als `0` darauf setzen und es mit einem `auto` {{cssxref("margin-left")}} Wert ans Ende der Zeile ausrichten (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}} Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Symbol zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Siehe [Styling the current selection checkmark](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einer Live-Beispielanzeige.

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
