---
title: ::checkmark
slug: Web/CSS/::checkmark
l10n:
  sourceCommit: e70bdcc4e6827cab5a3478bdda6250a92250a474
---

{{CSSRef}}{{SeeCompatTable}}

Der **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Häkchen ab, das im aktuell ausgewählten {{htmlelement("option")}} Element eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist. Es kann verwendet werden, um eine visuelle Anzeige darüber zu geben, welche Option ausgewählt ist.

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

Das `::checkmark` Pseudoelement zielt auf das Häkchen ab, das im aktuell ausgewählten `<option>` eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist.

Es kann nur dann gezielt werden, wenn das ursprungsgebende Element über einen Picker verfügt und das Basisaussehen über den Wert `base-select` der {{cssxref("appearance")}}-Eigenschaft gesetzt wurde. Sein generierter Kasten erscheint vor allen Kästen, die vom {{cssxref("::before")}} Pseudoelement generiert werden. Das Symbol kann mithilfe der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::checkmark`-Selektor ist nützlich, wenn Sie beispielsweise das Häkchen ausblenden, ein benutzerdefiniertes Symbol verwenden oder die Position des gerenderten Häkchens innerhalb der `<option>`-Elemente anpassen möchten.

> [!NOTE]
> Das `::checkmark` Pseudoelement ist nicht im Barrierefreiheitsbaum enthalten, sodass jeglicher generierter {{cssxref("content")}}, der darauf gesetzt wird, von unterstützenden Technologien nicht angesagt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für den beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Anpassung des Häkchens

Um die Funktionalität eines anpassbaren Auswahl-Elements zu aktivieren, müssen sowohl das `<select>`-Element als auch sein Picker einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Angenommen, [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) wird verwendet, um die `<option>`-Elemente zu layouten (was in **aktuellen Implementierungen** von anpassbaren Auswahlen der Fall ist), dann könnten Sie das Häkchen vom Anfang der Zeile an das Ende verschieben, indem Sie einen {{cssxref("order")}}-Wert darauf setzen, der größer als `0` ist, und es mithilfe eines `auto`-Werts von {{cssxref("margin-left")}} am Ende der Zeile ausrichten (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}}-Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Symbol zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Siehe [Styling the current selection checkmark](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einem Live-Beispielrendering.

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
