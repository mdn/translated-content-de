---
title: ":in-range"
slug: Web/CSS/:in-range
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:in-range`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein {{htmlelement("input")}}-Element, dessen aktueller Wert innerhalb der durch die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute festgelegten Bereichsgrenzen liegt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-in-range.html", "tabbed-shorter")}}

Diese Pseudoklasse ist nützlich, um dem Benutzer visuell anzuzeigen, dass der aktuelle Wert eines Feldes innerhalb der zulässigen Grenzen liegt.

> [!NOTE]
> Diese Pseudoklasse gilt nur für Elemente, die eine Bereichsbeschränkung haben (und annehmen können). Ohne eine solche Beschränkung kann das Element weder "in-range" noch "out-of-range" sein.

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
> Ein leeres `<input>` zählt nicht als außerhalb des Bereichs und wird nicht mit dem `:out-of-range` Pseudoklassen-Selektor ausgewählt. Die [`:blank`](/de/docs/Web/CSS/:blank) Pseudoklasse existiert, um leere Eingaben auszuwählen, obwohl sie zum Zeitpunkt des Schreibens experimentell und nicht gut unterstützt ist. Sie könnten auch das `required`-Attribut und die [`:invalid`](/de/docs/Web/CSS/:invalid) Pseudoklasse verwenden, um allgemeinere Logik und Stil zu bieten, um Eingaben obligatorisch zu machen (`:invalid` wird sowohl leere als auch außerhalb des Bereichs liegende Eingaben stilisieren).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":out-of-range")}}
- [Formular-Datenvalidierung](/de/docs/Learn/Forms/Form_validation)
