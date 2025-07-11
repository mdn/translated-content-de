---
title: Invariant
slug: Glossary/Invariant
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der Programmbedeutung ist ein **Invariant** eines Codes ein Zustand, der während der gesamten Ausführung dieses Codes nachweislich wahr ist. Das Definieren von Invarianten hilft, über die Richtigkeit und das Verhalten des Codes nachzudenken.

Zum Beispiel im folgenden Code:

```js
let count = 0;
while (hasMessages()) {
  count++;
  processMessage();
}
```

Können wir beweisen, dass `count` von Anfang bis Ende eine nicht-negative ganze Zahl ist. Das bedeutet, dass wir `count` im gesamten Code an eine Funktion übergeben können, die eine nicht-negative ganze Zahl erwartet, und die Funktion wird korrekt funktionieren.

Invarianten können auf zwei Arten etabliert werden: durch die Natur des Programms oder durch explizite Assertions (Laufzeitprüfungen). Beispielweise führt der obige Code keine Überprüfungen durch, aber durch die Tatsache, dass `count` eine inkrementierende, mit `0` beginnende ganze Zahl ist, können wir dessen Wertebereich garantieren. Erhalten wir Eingaben von einer externen Quelle, können wir Überprüfungen verwenden, um Invarianten an der Grenze festzustellen:

```js
function processInput(input) {
  if (input < 0 || !Number.isInteger(input)) {
    throw new Error("Input must be a non-negative integer");
  }
  // Process input...
}
```

Invarianten sind besonders nützlich in komplexen Systemen, die sich umfassende Prüfungen in jedem Schritt nicht leisten können. Wir stellen Invarianten an der Systemgrenze fest und der nachfolgende Code kann dann diese Eigenschaften ohne erneute Prüfung annehmen.

Im Allgemeinen ist alles, was als wahr angenommen werden kann, eine Invariante. Ein Beispiel: Eine Spezifikation kann ein Merkmal als implementierungsdefiniert lassen, jedoch mit bestimmten Invarianten, was bedeutet, dass diese Eigenschaften unabhängig vom genauen Verhalten immer zutreffen.
