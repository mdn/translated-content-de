---
title: :in-range
slug: Web/CSS/Reference/Selectors/:in-range
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`:in-range`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein {{htmlelement("input")}}-Element, dessen aktueller Wert innerhalb der durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute festgelegten Bereichsgrenzen liegt.

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
<form>
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
</form>
```

Diese Pseudoklasse ist nützlich, um dem Benutzer visuell anzuzeigen, dass der aktuelle Wert eines Feldes innerhalb der erlaubten Grenzen liegt.

> [!NOTE]
> Diese Pseudoklasse gilt nur für Elemente, die über eine Bereichsbeschränkung verfügen (und diese auch annehmen können). Ohne eine solche Begrenzung kann das Element weder "in-range" noch "out-of-range" sein.

## Syntax

```css
:in-range {
  /* ... */
}
```

## Beispiele

### HTML

```html
<form action="" id="form1">
  <ul>
    Values between 1 and 10 are valid.
    <li>
      <input
        id="value1"
        name="value1"
        type="number"
        placeholder="1 to 10"
        min="1"
        max="10"
        value="12"
        required />
      <label for="value1">Your value is </label>
    </li>
  </ul>
</form>
```

### CSS

```css
li {
  list-style: none;
  margin-bottom: 1em;
}

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

input:in-range + label::after {
  content: "okay.";
}

input:out-of-range + label::after {
  content: "out of range!";
}
```

### Ergebnis

{{EmbedLiveSample('Examples', 600, 140)}}

> [!NOTE]
> Ein leeres `<input>` zählt nicht als außerhalb des Bereichs und wird nicht mit dem `:out-of-range` Pseudoklassen-Selektor ausgewählt. Die {{cssxref(":blank")}}-Pseudoklasse existiert, um leere Eingaben auszuwählen, obwohl sie zum Zeitpunkt des Schreibens noch experimentell und nicht gut unterstützt ist. Sie könnten auch das `required` Attribut und die {{cssxref(":invalid")}} Pseudoklasse verwenden, um allgemeinere Logik und Gestaltung für verpflichtende Eingaben bereitzustellen (`:invalid` wird sowohl leere als auch außerhalb des Bereichs liegende Eingaben gestalten).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":out-of-range")}}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
