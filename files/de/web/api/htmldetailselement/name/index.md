---
title: "HTMLDetailsElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLDetailsElement/name
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{ APIRef("HTML DOM") }}

Die **`name`**-Eigenschaft des [`HTMLDetailsElement`](/de/docs/Web/API/HTMLDetailsElement)-Interfaces spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/details#name)-Attribut von {{htmlelement("details")}}-Elementen wider. Es ermöglicht das Verbinden mehrerer `<details>`-Elemente, wobei nur eines der `<details>`-Elemente gleichzeitig geöffnet sein kann. Dadurch können Entwickler problemlos UI-Features wie Akkordeons ohne Scripting erstellen.

Das name-Attribut gibt einen Gruppennamen an – geben Sie mehreren `<details>`-Elementen denselben Namen, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein – das Öffnen eines wird das andere schließen. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben wird, wird nur das erste in der Quellreihenfolge geöffnet dargestellt.

## Wert

Ein String. Der leere String, wenn das Element nicht Teil einer Gruppe ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{htmlelement("details")}}- und {{htmlelement("summary")}}-Elemente
