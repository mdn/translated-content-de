---
title: Invariant
slug: Glossary/Invariant
l10n:
  sourceCommit: d5be633656b10c913eb9a1db4fb5c59acfdcb86c
---

{{GlossarySidebar}}

In der Programmiersprachen-Semantik ist ein **Invariant** eines Codes ein Zustand, der während der gesamten Ausführung dieses Codes nachweislich wahr ist. Die Definition von Invarianten hilft dabei, über die Korrektheit und das Verhalten des Codes nachzudenken.

Zum Beispiel im folgenden Code:

```js
let count = 0;
while (hasMessages()) {
  count++;
  processMessage();
}
```

können wir beweisen, dass `count` von Anfang bis Ende eine nicht-negative Ganzzahl ist. Das bedeutet, dass wir `count` überall im Code an eine Funktion übergeben können, die eine nicht-negative Ganzzahl erwartet und die Funktion korrekt arbeiten wird.

Invarianten können auf zwei Arten etabliert werden: durch die Beschaffenheit des Programms oder durch explizite Zusicherungen (Laufzeitüberprüfungen). Zum Beispiel führt der obige Code keine Überprüfungen durch, aber aufgrund der Tatsache, dass `count` eine von `0` beginnende und aufsteigende Ganzzahl ist, können wir seinen Bereich garantieren. Wenn wir Eingaben aus einer externen Quelle erhalten, können wir Überprüfungen verwenden, um Invarianten an der Grenze festzulegen:

```js
function processInput(input) {
  if (input < 0 || !Number.isInteger(input)) {
    throw new Error("Input must be a non-negative integer");
  }
  // Process input...
}
```

Invarianten sind besonders nützlich in komplexen Systemen, die sich keine umfassenden Überprüfungen bei jedem Schritt leisten können. Wir legen Invarianten an der Systemgrenze fest, und anschließend kann der nachfolgende Code diese Eigenschaften annehmen, ohne sie erneut überprüfen zu müssen.

Im Allgemeinen ist alles, was als wahr angenommen werden kann, eine Invariante. Zum Beispiel kann eine Spezifikation ein Merkmal als implementationsabhängig belassen, jedoch mit bestimmten Invarianten, was bedeutet, dass diese Eigenschaften immer wahr bleiben, unabhängig vom genauen Verhalten.
