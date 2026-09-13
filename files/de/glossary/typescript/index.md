---
title: TypeScript
slug: Glossary/TypeScript
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

TypeScript ist eine Programmiersprache, die {{Glossary("static_typing", "statische Typüberprüfung")}} zu JavaScript hinzufügt.

TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass alles, was in JavaScript verfügbar ist, auch in TypeScript verfügbar ist, und dass jedes JavaScript-Programm ein syntaktisch legales TypeScript-Programm ist. Auch das Laufzeitverhalten von TypeScript und JavaScript ist identisch.

Allerdings fügt TypeScript eine Typüberprüfung zur Kompilierzeit hinzu, indem es Regeln darüber implementiert, wie verschiedene Typen verwendet und kombiniert werden können. Dies deckt eine Vielzahl von Programmierfehlern auf, die in JavaScript nur zur Laufzeit erkannt werden.

Einige Typregelungen werden aus JavaScript abgeleitet. Zum Beispiel schließt TypeScript im folgenden Code daraus, dass `myVariable` ein String ist und erlaubt nicht, dass er auf einen anderen Typ geändert wird:

```js
let myVariable = "Hello World";
myVariable = 1;
// Error:
// Type 'number' is not assignable to type 'string'.
```

TypeScript ermöglicht es dem Programmierer auch, seinen Code zu annotieren, um beispielsweise die Typen der Parameter einer Funktion oder die Eigenschaften eines Objekts anzugeben:

```ts
function add(left: number, right: number): number {
  return left + right;
}

add("hello", "world");
// Error:
// Argument of type 'string' is not assignable to parameter of type 'number'.
```

Nach der Kompilierung werden Typ-Annotationen entfernt, sodass das kompilierte Ergebnis nur JavaScript ist, was bedeutet, dass es in jedem JavaScript-Laufzeitsystem ausgeführt werden kann.

## Siehe auch

- [TypeScript-Website](https://www.typescriptlang.org/)
