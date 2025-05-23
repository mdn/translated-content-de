---
title: :enabled
slug: Web/CSS/:enabled
l10n:
  sourceCommit: 2e16fdb99d2c52cc05d1b0d5eaf2f3178e4314c1
---

{{CSSRef}}

Die **`:enabled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes aktivierte Element. Ein Element ist aktiviert, wenn es aktiviert werden kann (ausgewählt, angeklickt, hineingetippt, etc.) oder den Fokus akzeptiert. Das Element hat auch einen deaktivierten Zustand, in dem es nicht aktiviert werden kann oder den Fokus nicht akzeptiert.

{{InteractiveExample("CSS Demo: :enabled", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:enabled {
  background-color: gold;
}
```

```html interactive-example
<form>
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" />

  <label for="emp">Employed:</label>
  <select id="emp" name="emp" disabled>
    <option>No</option>
    <option>Yes</option>
  </select>

  <label for="empDate">Employment Date:</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">Resume:</label>
  <input id="resume" name="resume" type="file" />
</form>
```

## Syntax

```css
:enabled {
  /* ... */
}
```

## Beispiele

Das folgende Beispiel färbt den Text und die Schaltflächen der {{htmlElement("input")}}s grün, wenn sie aktiviert sind, und grau, wenn sie deaktiviert sind. Dies hilft dem Benutzer zu verstehen, mit welchen Elementen interagiert werden kann.

### HTML

```html
<form action="url_of_form">
  <label for="FirstField">First field (enabled):</label>
  <input type="text" id="FirstField" value="Lorem" /><br />

  <label for="SecondField">Second field (disabled):</label>
  <input type="text" id="SecondField" value="Ipsum" disabled /><br />

  <input type="button" value="Submit" />
</form>
```

### CSS

```css
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 550, 95)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":disabled")}}
