---
title: ":out-of-range"
slug: Web/CSS/:out-of-range
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:out-of-range`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein {{htmlelement("input")}}-Element, dessen aktueller Wert außerhalb der durch die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute festgelegten Bereichsgrenzen liegt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-out-of-range.html", "tabbed-shorter")}}

Diese Pseudo-Klasse ist nützlich, um dem Benutzer visuell zu signalisieren, dass der aktuelle Wert eines Feldes außerhalb der erlaubten Grenzen liegt.

> [!NOTE]
> Diese Pseudo-Klasse gilt nur für Elemente, die eine Bereichsbeschränkung haben (und annehmen können). Ohne eine solche Beschränkung kann das Element weder "in-range" noch "out-of-range" sein.

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
- [Validierung von Formulardaten](/de/docs/Learn/Forms/Form_validation)
