---
title: "HTMLDetailsElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLDetailsElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`name`**-Eigenschaft der [`HTMLDetailsElement`](/de/docs/Web/API/HTMLDetailsElement)-Schnittstelle spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/details#name)-Attribut von {{htmlelement("details")}}-Elementen wider. Sie ermöglicht es, mehrere `<details>`-Elemente miteinander zu verbinden, wobei nur eines der `<details>`-Elemente gleichzeitig geöffnet sein kann. Dies erlaubt es Entwicklern, UI-Features wie Akkordeons leicht ohne Scripting zu erstellen.

Das `name`-Attribut spezifiziert einen Gruppennamen — geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein — das Öffnen eines führt dazu, dass ein anderes geschlossen wird. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben wird, wird nur das erste in der Quellreihenfolge geöffnet gerendert.

## Wert

Ein String. Der leere String, wenn das Element nicht Teil einer Gruppe ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{htmlelement("details")}}- und {{htmlelement("summary")}}-Elemente
