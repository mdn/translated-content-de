---
title: TypeScript
slug: Glossary/TypeScript
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

TypeScript ist eine Programmiersprache, die {{Glossary("static_typing", "statische Typüberprüfung")}} zu JavaScript hinzufügt.

TypeScript ist ein Superset von JavaScript, was bedeutet, dass alles, was in JavaScript verfügbar ist, auch in TypeScript verfügbar ist, und dass jedes JavaScript-Programm ein syntaktisch legales TypeScript-Programm ist. Auch das Laufzeitverhalten von TypeScript und JavaScript ist identisch.

Jedoch fügt TypeScript eine Typüberprüfung zur Kompilierungszeit hinzu, indem Regeln darüber implementiert werden, wie verschiedene Typen verwendet und kombiniert werden können. Dies fängt eine Vielzahl von Programmierfehlern ab, die in JavaScript nur zur Laufzeit auftreten.

Einige Typisierungsregeln werden aus JavaScript abgeleitet. Zum Beispiel leitet TypeScript im folgenden Code ab, dass `myVariable` ein String ist und erlaubt nicht, dass es einem anderen Typ zugewiesen wird:

```js
let myVariable = "Hello World";
myVariable = 1;
// Error:
// Type 'number' is not assignable to type 'string'.
```

TypeScript ermöglicht es dem Programmierer auch, den Code zu annotieren, um beispielsweise die Typen der Parameter einer Funktion oder die Eigenschaften eines Objekts anzugeben:

```ts
function add(left: number, right: number): number {
  return left + right;
}

add("hello", "world");
// Error:
// Argument of type 'string' is not assignable to parameter of type 'number'.
```

Nach der Kompilierung werden die Typannotationen entfernt, wodurch das kompilierte Ergebnis einfach JavaScript ist, was bedeutet, dass es in jeder JavaScript-Laufzeitumgebung ausgeführt werden kann.

## Siehe auch

- [TypeScript Website](https://www.typescriptlang.org/)
