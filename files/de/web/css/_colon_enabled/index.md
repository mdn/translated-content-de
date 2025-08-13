---
title: :enabled
slug: Web/CSS/:enabled
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`:enabled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes aktivierte Element. Ein Element ist aktiviert, wenn es aktiviert werden kann (ausgewählt, darauf geklickt, hineingetippt usw.) oder den Fokus akzeptieren kann. Das Element hat auch einen deaktivierten Zustand, in dem es nicht aktiviert werden kann oder den Fokus nicht akzeptieren kann.

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

Das folgende Beispiel färbt den Text und die Schaltfläche {{htmlElement("input")}}s grün, wenn sie aktiviert sind, und grau, wenn sie deaktiviert sind. Dies hilft dem Benutzer zu verstehen, mit welchen Elementen interagiert werden kann.

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
  color: #22bb22;
}

input:disabled {
  color: #aaaaaa;
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
