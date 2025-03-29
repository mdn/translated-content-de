---
title: ::checkmark
slug: Web/CSS/::checkmark
l10n:
  sourceCommit: 004b0ee7b8cfaf6793c1e36d589233199c616759
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Häkchen ab, das innerhalb des aktuell ausgewählten {{htmlelement("option")}}-Elements eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist. Es kann verwendet werden, um eine visuelle Anzeige dafür bereitzustellen, welche Option ausgewählt ist.

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

Das `::checkmark` Pseudo-Element zielt auf das Häkchen ab, das innerhalb eines aktuell ausgewählten `<option>` in einem [anpassbaren Auswahl-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist.

Es kann nur dann als Ziel verwendet werden, wenn das ursprüngliche Element einen Picker hat und das Erscheinungsbild über die {{cssxref("appearance")}}-Eigenschaft auf den Wert `base-select` gesetzt ist. Seine generierte Box erscheint vor allen Boxen, die vom {{cssxref("::before")}} Pseudo-Element generiert werden. Das Symbol kann mit der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::checkmark`-Selektor ist nützlich, wenn Sie beispielsweise das Häkchen ausblenden, ein benutzerdefiniertes Symbol verwenden oder die Position des Häkchens innerhalb der `<option>`-Elemente anpassen möchten.

> [!NOTE]
> Das `::checkmark` Pseudo-Element ist nicht im Barrierefreiheitsbaum enthalten, sodass alle generierten Inhalte, die über {{cssxref("content")}} darauf gesetzt werden, von unterstützenden Technologien nicht angekündigt werden. Sie sollten trotzdem sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für seinen beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Anpassung des Häkchens

Um anpassbare Auswahlfunktionen zu verwenden, müssen sowohl das `<select>`-Element als auch sein Picker beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

```css
select,
::checkmark(select) {
  appearance: base-select;
}
```

Angenommen, [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) wird verwendet, um die `<option>`-Elemente anzuordnen (was bei **aktuellen Implementierungen** von anpassbaren Auswahl-Elementen der Fall ist), könnten Sie das Häkchen vom Anfang der Zeile an das Ende verschieben, indem Sie einen {{cssxref("order")}}-Wert größer als `0` darauf setzen und es mit einem `auto`-Wert von {{cssxref("margin-left")}} am Ende der Zeile ausrichten (siehe [Ausrichtung und automatische Ränder](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}}-Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Symbol zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Siehe [Styling des aktuellen Auswahl-Häkchens](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einer Live-Beispielanzeige.

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
