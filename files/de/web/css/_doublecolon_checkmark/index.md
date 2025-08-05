---
title: ::checkmark
slug: Web/CSS/::checkmark
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

{{SeeCompatTable}}

Der **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Häkchen innerhalb des derzeit ausgewählten {{htmlelement("option")}}-Elements eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) ab. Es kann verwendet werden, um eine visuelle Anzeige dafür zu bieten, welche Option ausgewählt ist.

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

Das `::checkmark`-Pseudoelement zielt auf das Häkchen innerhalb des derzeit ausgewählten `<option>` eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) ab.

Es kann nur dann angesprochen werden, wenn das Ausgangselement einen Picker hat und das Aussehen über die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` festgelegt wurde. Sein generierter Rahmen erscheint vor allen Rahmen, die durch das {{cssxref("::before")}}-Pseudoelement erzeugt werden. Das Symbol kann mit der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::checkmark`-Selektor ist nützlich, wenn Sie beispielsweise das Häkchen ausblenden, ein benutzerdefiniertes Symbol verwenden oder die Darstellung des Häkchens innerhalb von `<option>`-Elementen anpassen möchten.

> [!NOTE]
> Das `::checkmark`-Pseudoelement ist nicht im Accessibility Tree enthalten, sodass jeglicher generierter {{cssxref("content")}}, der darauf gesetzt wird, nicht von unterstützenden Technologien angekündigt wird. Sie sollten dennoch sicherstellen, dass jedes neue von Ihnen gesetzte Symbol visuell für den beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Anpassung des Häkchens

Um die Funktionalität eines anpassbaren Auswahl-Elements zu aktivieren, müssen sowohl das `<select>`-Element als auch sein Picker einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Angenommen, [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) wird verwendet, um die `<option>`-Elemente anzuordnen (was in den **aktuellen Implementierungen** von anpassbaren Auswahl-Elementen der Fall ist), könnte das Häkchen vom Anfang der Zeile an das Ende verschoben werden, indem ein {{cssxref("order")}}-Wert größer als `0` darauf gesetzt wird und es mit einem `auto`-Wert bei {{cssxref("margin-left")}} am Ende der Zeile ausgerichtet wird (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}}-Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Symbol zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Siehe [Stil des aktuellen Auswahl-Häkchens](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einer Live-Beispieldarstellung.

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
