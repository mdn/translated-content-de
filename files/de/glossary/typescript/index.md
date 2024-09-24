---
title: TypeScript
slug: Glossary/TypeScript
l10n:
  sourceCommit: 8005d92738cb5678d9b1e434f02ddebaa15c1eaa
---

{{GlossarySidebar}}

TypeScript ist eine Programmiersprache, die {{glossary("static_typing", "statische Typprüfung")}} zu JavaScript hinzufügt.

TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass alles, was in JavaScript verfügbar ist, auch in TypeScript verfügbar ist und dass jedes JavaScript-Programm ein syntaktisch gültiges TypeScript-Programm ist. Das Laufzeitverhalten von TypeScript und JavaScript ist ebenfalls identisch.

Jedoch fügt TypeScript eine Typprüfung zur Kompilierzeit hinzu und implementiert Regeln darüber, wie verschiedene Typen verwendet und kombiniert werden können. Dadurch werden eine Vielzahl von Programmierfehlern erkannt, die in JavaScript nur zur Laufzeit auftreten.

Einige Typregeln werden aus JavaScript abgeleitet. Zum Beispiel wird im folgenden Code von TypeScript angenommen, dass `myVariable` ein String ist, und es wird nicht erlaubt, diesen einer anderen Typ zuzuweisen:

```js
let myVariable = "Hello World";
myVariable = 1;
// Fehler:
// Der Typ 'number' kann dem Typ 'string' nicht zugewiesen werden.
```

TypeScript ermöglicht es dem Programmierer auch, den Code zu annotieren, um beispielsweise die Typen von Parametern einer Funktion oder die Eigenschaften eines Objekts anzugeben:

```ts
function add(left: number, right: number): number {
  return left + right;
}

add("hello", "world");
// Fehler:
// Argument vom Typ 'string' kann nicht dem Parameter vom Typ 'number' zugewiesen werden.
```

Nach der Kompilierung werden die Typannotationen entfernt, sodass die kompilierten Ausgaben reines JavaScript sind, was bedeutet, dass sie in jeder JavaScript-Laufzeitumgebung ausgeführt werden können.

## Siehe auch

- [TypeScript-Website](https://www.typescriptlang.org/)
