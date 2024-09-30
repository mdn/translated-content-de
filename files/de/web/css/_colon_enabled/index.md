---
title: ":enabled"
slug: Web/CSS/:enabled
l10n:
  sourceCommit: f4db7ef7a2e2d38835b42146e86fd0a400e9f69e
---

{{CSSRef}}

Die **`:enabled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes aktivierte Element. Ein Element ist aktiviert, wenn es aktiviert werden kann (ausgewählt, angeklickt, beschreibbar usw.) oder den Fokus akzeptieren kann. Das Element hat auch einen deaktivierten Zustand, in dem es nicht aktiviert werden kann oder den Fokus akzeptieren kann.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-enabled.html", "tabbed-standard")}}

## Syntax

```plain
:enabled
```

## Beispiele

Das folgende Beispiel macht die Farbe von Text und {{htmlElement("input")}}-Buttons grün, wenn sie aktiviert sind, und grau, wenn sie deaktiviert sind. Dies hilft dem Benutzer zu verstehen, mit welchen Elementen interagiert werden kann.

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
