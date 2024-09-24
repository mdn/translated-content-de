---
title: "HTMLDetailsElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLDetailsElement/name
l10n:
  sourceCommit: 52580e9f35f17e9973d798c8ad46a6ad756b18ec
---

{{ APIRef("HTML DOM") }}

Die **`name`**-Eigenschaft der {{domxref("HTMLDetailsElement")}}-Schnittstelle spiegelt das [`name`](/de/docs/Web/HTML/Element/details#name)-Attribut von {{htmlelement("details")}}-Elementen wider. Sie ermöglicht es, mehrere `<details>`-Elemente miteinander zu verbinden, wobei nur eines der `<details>`-Elemente gleichzeitig geöffnet sein kann. Dies erlaubt es Entwicklern, unkompliziert UI-Funktionen wie Akkordeons zu erstellen, ohne Skripting.

Das Nameattribut gibt einen Gruppennamen an — geben Sie mehreren `<details>`-Elementen denselben Namenswert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein — das Öffnen eines Elements führt dazu, dass ein anderes geschlossen wird. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben wird, wird nur das erste im Quellordnungsreihenfolge geöffnet dargestellt.

## Wert

Ein String. Der leere String, wenn das Element nicht Teil einer Gruppe ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- Die {{htmlelement("details")}}- und {{htmlelement("summary")}}-Elemente
