---
title: ":in-range"
slug: Web/CSS/:in-range
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:in-range`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein {{htmlelement("input")}}-Element, dessen aktueller Wert innerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegten Bereichsgrenzen liegt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-in-range.html", "tabbed-shorter")}}

Diese Pseudoklasse ist nützlich, um dem Benutzer visuell anzuzeigen, dass der aktuelle Wert eines Feldes innerhalb der zulässigen Grenzen liegt.

> [!NOTE]
> Diese Pseudoklasse gilt nur für Elemente, die eine Bereichseinschränkung aufweisen (und diese annehmen können). Ohne eine solche Einschränkung kann das Element weder "in-range" noch "out-of-range" sein.

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
> Ein leeres `<input>` wird nicht als außerhalb des Bereichs betrachtet und kann nicht mit dem `:out-of-range`-Pseudoklassen-Selektor ausgewählt werden. Die [`:blank`](/de/docs/Web/CSS/:blank)-Pseudoklasse existiert, um leere Eingaben auszuwählen. Zum Zeitpunkt der Erstellung dieses Dokuments ist diese jedoch experimentell und nicht gut unterstützt. Sie könnten auch das `required`-Attribut und die [`:invalid`](/de/docs/Web/CSS/:invalid)-Pseudoklasse verwenden, um allgemeinere Logik und Stilvorgaben für Pflichtfelder anzuwenden (`:invalid` wird sowohl leere _als auch_ außerhalb des Bereichs liegende Eingaben stylen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":out-of-range")}}
- [Formulardatenüberprüfung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
