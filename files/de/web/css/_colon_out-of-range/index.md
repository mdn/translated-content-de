---
title: :out-of-range
slug: Web/CSS/:out-of-range
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:out-of-range`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein {{htmlelement("input")}}-Element, dessen aktueller Wert außerhalb der durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute festgelegten Wertebereiche liegt.

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

Diese Pseudoklasse ist nützlich, um dem Benutzer visuell anzuzeigen, dass der aktuelle Wert eines Feldes außerhalb der zulässigen Grenzen liegt.

> [!NOTE]
> Diese Pseudoklasse gilt nur für Elemente, die über (und begrenzt durch) eine Bereichseinschränkung verfügen. In Abwesenheit einer solchen Einschränkung kann das Element weder "in-range" noch "out-of-range" sein.

## Syntax

```css
:out-of-range {
  /* ... */
}
```

## Beispiele

### HTML

```html
<form action="" id="form1">
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":in-range")}}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
