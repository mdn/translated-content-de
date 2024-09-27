---
title: TypeScript
slug: Glossary/TypeScript
l10n:
  sourceCommit: 8005d92738cb5678d9b1e434f02ddebaa15c1eaa
---

{{GlossarySidebar}}

TypeScript ist eine Programmiersprache, die [statische Typüberprüfung](/de/docs/Glossary/static_typing) zu JavaScript hinzufügt.

TypeScript ist ein Superset von JavaScript, was bedeutet, dass alles, was in JavaScript verfügbar ist, auch in TypeScript verfügbar ist und dass jedes JavaScript-Programm ein syntaktisch korrektes TypeScript-Programm ist. Außerdem ist das Laufzeitverhalten von TypeScript und JavaScript identisch.

TypeScript fügt jedoch zur Compile-Zeit eine Typprüfung hinzu und implementiert Regeln darüber, wie verschiedene Typen verwendet und kombiniert werden können. Dies fängt eine Vielzahl von Programmierfehlern ab, die in JavaScript erst zur Laufzeit auftreten.

Einige Typregeln werden aus JavaScript abgeleitet. Zum Beispiel erkennt TypeScript im folgenden Code, dass `myVariable` ein String ist, und lässt nicht zu, dass es einem anderen Typ zugewiesen wird:

```js
let myVariable = "Hello World";
myVariable = 1;
// Error:
// Type 'number' is not assignable to type 'string'.
```

TypeScript ermöglicht es dem Programmierer auch, seinen Code zu annotieren, um zum Beispiel die Typen von Parametern einer Funktion oder die Eigenschaften eines Objekts anzugeben:

```ts
function add(left: number, right: number): number {
  return left + right;
}

add("hello", "world");
// Error:
// Argument of type 'string' is not assignable to parameter of type 'number'.
```

Nach der Kompilierung werden Typannotationen entfernt, wodurch der kompilierte Output nur JavaScript ist, was bedeutet, dass es in jeder JavaScript-Laufzeitumgebung ausgeführt werden kann.

## Siehe auch

- [TypeScript-Website](https://www.typescriptlang.org/)
