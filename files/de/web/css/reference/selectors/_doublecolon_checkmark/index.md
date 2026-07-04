---
title: "`::checkmark` CSS pseudo-element"
short-title: ::checkmark
slug: Web/CSS/Reference/Selectors/::checkmark
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

Das **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf das Häkchen ab, das innerhalb des aktuell ausgewählten {{htmlelement("option")}}-Elements eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist. Es kann verwendet werden, um eine visuelle Indikation dafür zu bieten, welche Option ausgewählt ist.

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

Das `::checkmark` Pseudoelement zielt auf das Häkchen ab, das innerhalb eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) im aktuell ausgewählten `<option>` platziert ist.

Es kann nur gezielt verwendet werden, wenn das ursprüngliche Element einen Picker hat und das grundlegende Erscheinungsbild über die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` darauf gesetzt ist. Die generierte Box erscheint vor allen Boxen, die vom {{cssxref("::before")}}-Pseudoelement generiert werden. Das Icon kann mit der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::checkmark`-Selektor ist nützlich, z.B. wenn Sie das Häkchen ausblenden, ein benutzerdefiniertes Icon verwenden oder die Position der Häkchen-Darstellung innerhalb von `<option>`-Elementen anpassen möchten.

> [!NOTE]
> Das `::checkmark` Pseudoelement ist nicht im Barrierefreiheitsbaum enthalten, sodass jeglicher darauf gesetzter generierter {{cssxref("content")}} nicht von unterstützenden Technologien angekündigt wird. Sie sollten dennoch sicherstellen, dass jegliches neue Icon, das Sie setzen, visuell für den beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Anpassung des Häkchens

Um die anpassbare Auswahlfunktionalität zu nutzen, müssen das `<select>`-Element und sein Picker beide einen {{cssxref("appearance")}}-Wert von `base-select` darauf gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Angenommen, es wird [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) verwendet, um die `<option>`-Elemente zu layouten (was in **aktuellen Implementierungen** von anpassbaren Auswahlen der Fall ist), könnten Sie dann das Häkchen vom Beginn der Zeile zum Ende verschieben, indem Sie einen {{cssxref("order")}}-Wert darauf setzen, der größer als `0` ist, und es mit einem `auto` {{cssxref("margin-left")}}-Wert am Ende der Zeile ausrichten (siehe [Alignment and auto margins](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}}-Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Icon zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Sehen Sie [Styling the current selection checkmark](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einem Live-Beispiel der Darstellung.

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
