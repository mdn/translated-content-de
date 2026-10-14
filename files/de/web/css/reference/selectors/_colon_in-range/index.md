---
title: CSS-Pseudoklasse `:in-range`
short-title: :in-range
slug: Web/CSS/Reference/Selectors/:in-range
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:in-range`** steht für ein {{htmlelement("input")}}-Element, dessen aktueller Wert innerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegten Grenzen liegt.

{{InteractiveExample("CSS Demo: :in-range", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:in-range {
  background-color: palegreen;
}
```

```html interactive-example
<label for="amount">How many tickets? (You can buy 2-6 tickets)</label>
<input id="amount" name="amount" type="number" min="2" max="6" value="4" />

<label for="dep">Departure Date: (Whole year 2022 is acceptable)</label>
<input
  id="dep"
  name="dep"
  type="date"
  min="2022-01-01"
  max="2022-12-31"
  value="2025-05-05" />

<label for="ret">Return Date: (Whole year 2022 is acceptable)</label>
<input id="ret" name="ret" type="date" min="2022-01-01" max="2022-12-31" />
```

Diese Pseudoklasse ist nützlich, um Benutzern visuell anzuzeigen, dass der aktuelle Wert eines Felds innerhalb der zulässigen Grenzen liegt.

> [!NOTE]
> Diese Pseudoklasse gilt nur für Elemente, für die eine Bereichsbegrenzung festgelegt werden kann und wurde. Ohne eine solche Begrenzung ist das Element weder „innerhalb“ noch „außerhalb“ des Bereichs.

## Syntax

```css
:in-range {
  /* ... */
}
```

## Beispiele

### HTML

```html
<p>
  <label for="value1">How many toes? Values between 1 and 10 are valid.</label>
  <input
    id="value1"
    name="value1"
    type="number"
    placeholder="1 to 10"
    min="1"
    max="10"
    value="12"
    required />
  <span></span>
</p>
```

### CSS

```css
input {
  border: 1px solid black;
}

input:in-range {
  background-color: rgb(0 255 0 / 25%);
}

input:out-of-range {
  background-color: rgb(255 0 0 / 25%);
  border: 2px solid red;
}

input:in-range + span::after {
  content: "Your value is okay.";
}

input:out-of-range + span::after {
  content: "Your value is out of range!";
}
```

### Ergebnis

{{EmbedLiveSample('Examples', 600, 140)}}

> [!NOTE]
> Ein leeres `<input>` gilt nicht als außerhalb des Bereichs und wird daher nicht durch den Pseudoklassen-Selektor `:out-of-range` ausgewählt. Zum Auswählen leerer Eingabefelder gibt es die Pseudoklasse {{cssxref(":blank")}}. Zum Zeitpunkt der Erstellung dieses Texts ist sie jedoch experimentell und wird nicht umfassend unterstützt. Sie können auch das Attribut `required` und die Pseudoklasse {{cssxref(":invalid")}} verwenden, um eine allgemeinere Logik und Gestaltung für Pflichtfelder bereitzustellen (`:invalid` wirkt sowohl auf leere Eingabefelder als auch auf solche mit Werten außerhalb des zulässigen Bereichs).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":out-of-range")}}
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
