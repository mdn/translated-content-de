---
title: "HTMLDetailsElement: name Eigenschaft"
short-title: name
slug: Web/API/HTMLDetailsElement/name
l10n:
  sourceCommit: 52580e9f35f17e9973d798c8ad46a6ad756b18ec
---

{{ APIRef("HTML DOM") }}

Die **`name`** Eigenschaft des [`HTMLDetailsElement`](/de/docs/Web/API/HTMLDetailsElement) Interface spiegelt das [`name`](/de/docs/Web/HTML/Element/details#name) Attribut von {{htmlelement("details")}} Elementen wider. Sie ermöglicht es, mehrere `<details>` Elemente miteinander zu verbinden, wobei nur eines der `<details>` Elemente gleichzeitig geöffnet sein kann. Dies erlaubt es Entwicklern, UI-Funktionen wie Akkordeons einfach zu erstellen, ohne zu skripten.

Das Name-Attribut gibt einen Gruppennamen an — geben Sie mehreren `<details>` Elementen denselben Namen, um sie zu gruppieren. Nur eines der gruppierten `<details>` Elemente kann gleichzeitig geöffnet sein — das Öffnen eines wird ein anderes schließen. Wenn mehreren gruppierten `<details>` Elementen das `open` Attribut zugewiesen wird, wird nur das erste in der Quellenreihenfolge geöffnet angezeigt.

## Wert

Ein String. Der leere String, wenn das Element nicht Teil einer Gruppe ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{htmlelement("details")}} und {{htmlelement("summary")}} Elemente
