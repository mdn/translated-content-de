---
title: ::checkmark
slug: Web/CSS/::checkmark
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{CSSRef}}

Das **`::checkmark`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Häkchen ab, das innerhalb des aktuell ausgewählten {{htmlelement("option")}}-Elements eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist. Es kann verwendet werden, um eine visuelle Anzeige zu bieten, welche Option ausgewählt ist.

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

Das `::checkmark` Pseudo-Element zielt auf das Häkchen innerhalb eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) ab, das aktuell ausgewählt ist mit `<option>`.

Es kann nur angesprochen werden, wenn das Ursprungs-Element einen Picker hat und über die {{cssxref("appearance")}}-Eigenschaft den Wert `base-select` gesetzt hat. Sein generiertes Box-Element erscheint vor allen Box-Elementen, die durch das {{cssxref("::before")}} Pseudo-Element generiert werden. Das Icon kann mithilfe der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::checkmark`-Selektor ist nützlich, wenn Sie zum Beispiel das Häkchen ausblenden, ein benutzerdefiniertes Icon verwenden oder die Rendition des Häkchens innerhalb von `<option>`-Elementen anpassen möchten.

> [!NOTE]
> Das `::checkmark`-Pseudo-Element ist nicht im Zugänglichkeitsbaum enthalten, daher werden alle darauf gesetzten generierten {{cssxref("content")}}-Inhalte nicht von unterstützenden Technologien angekündigt. Sie sollten dennoch sicherstellen, dass jedes neue Icon, das Sie setzen, visuell für seinen vorgesehenen Zweck sinnvoll ist.

## Beispiele

### Anpassung des Häkchens

Um die Funktionalität für anpassbare Auswahl-Elemente zu aktivieren, müssen sowohl das `<select>`-Element als auch dessen Picker einen {{cssxref("appearance")}}-Wert von `base-select` haben:

```css
select,
::checkmark(select) {
  appearance: base-select;
}
```

Angenommen, [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) wird verwendet, um die `<option>`-Elemente anzuordnen (was in **aktuellen Implementierungen** von anpassbaren Auswahl-Elementen der Fall ist), könnten Sie das Häkchen vom Anfang der Reihe bis zum Ende verschieben, indem Sie einen {{cssxref("order")}}-Wert größer als `0` darauf setzen und es mit einem `auto` {{cssxref("margin-left")}}-Wert an das Ende der Reihe ausrichten (siehe [Ausrichtung und automatische Margen](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Der Wert der {{cssxref("content")}}-Eigenschaft könnte auch auf ein anderes Emoji gesetzt werden, um das angezeigte Icon zu ändern.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Sehen Sie [Styling the current selection checkmark](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einer Live-Darstellung.

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
