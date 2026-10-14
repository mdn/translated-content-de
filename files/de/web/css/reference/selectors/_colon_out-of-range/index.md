---
title: CSS-Pseudoklasse `:out-of-range`
short-title: :out-of-range
slug: Web/CSS/Reference/Selectors/:out-of-range
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **CSS-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:out-of-range`** beschreibt ein {{htmlelement("input")}}-Element, dessen aktueller Wert außerhalb des durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegten Bereichs liegt.

{{InteractiveExample("CSS Demo: :out-of-range", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:out-of-range {
  background-color: orangered;
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

Diese Pseudoklasse ist nützlich, um Benutzern visuell anzuzeigen, dass der aktuelle Wert eines Feldes außerhalb der zulässigen Grenzen liegt.

> [!NOTE]
> Diese Pseudoklasse gilt nur für Elemente, die einer Bereichsbegrenzung unterliegen können und für die eine solche Begrenzung festgelegt ist. Ohne eine solche Begrenzung befindet sich das Element weder „in-range“ noch „out-of-range“.

## Syntax

```css
:out-of-range {
  /* ... */
}
```

## Beispiele

### HTML

```html
<p>Values between 1 and 10 are valid.</p>
<ul>
  <li>
    <input
      id="value1"
      name="value1"
      type="number"
      placeholder="1 to 10"
      min="1"
      max="10"
      value="12" />
    <label for="value1">Your value is </label>
  </li>
</ul>
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":in-range")}}
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
