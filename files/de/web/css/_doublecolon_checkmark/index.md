---
title: ::checkmark
slug: Web/CSS/::checkmark
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Das **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Häkchen ab, das innerhalb des aktuell ausgewählten {{htmlelement("option")}}-Elements eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist. Es kann verwendet werden, um eine visuelle Anzeige zu geben, welche Option ausgewählt ist.

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

Das `::checkmark` Pseudoelement zielt auf das Häkchen ab, das innerhalb eines aktuell ausgewählten `<option>` eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist.

Es kann nur gezielt werden, wenn das Ausgangselement einen Picker hat und mit dem `base-select`-Wert der {{cssxref("appearance")}}-Eigenschaft versehen ist. Sein generiertes Box erscheint vor allen von dem {{cssxref("::before")}} Pseudoelement generierten Boxen. Das Icon kann mit der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::checkmark`-Selektor ist nützlich, wenn Sie z. B. das Häkchen verbergen, ein benutzerdefiniertes Symbol verwenden oder die Darstellungsposition des Häkchens innerhalb von `<option>`-Elementen anpassen möchten.

> [!NOTE]
> Das `::checkmark` Pseudoelement ist nicht im Barrierefreiheitsbaum enthalten, sodass alle auf ihm gesetzten generierten {{cssxref("content")}}-Inhalte nicht von unterstützenden Technologien angekündigt werden. Sie sollten dennoch sicherstellen, dass jedes neue von Ihnen gesetzte Icon visuell für seinen beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Anpassung des Häkchens

Um die anpassbare Auswahlfunktionalität zu aktivieren, müssen sowohl das `<select>`-Element als auch sein Picker einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Angenommen, [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) wird verwendet, um die `<option>`-Elemente zu layouten (was bei **aktuellen Implementierungen** von anpassbaren Auswahlen der Fall ist), könnten Sie das Häkchen dann vom Anfang der Zeile an das Ende verschieben, indem Sie einen {{cssxref("order")}}-Wert darauf größer als `0` setzen und es mit einem `auto` {{cssxref("margin-left")}}-Wert an das Ende der Zeile ausrichten (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}}-Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Symbol zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Sehen Sie sich [Styling des derzeit ausgewählten Häkchens](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel an, das diesen Code verwendet, zusammen mit einem Live-Beispiel-Rendering.

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
