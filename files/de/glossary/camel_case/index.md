---
title: Camel case
slug: Glossary/Camel_case
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Camel case** ist eine Schreibweise von Ausdrücken ohne Leerzeichen, bei der der erste Buchstabe jedes Wortes großgeschrieben wird, mit Ausnahme des ersten Buchstabens des gesamten zusammengesetzten Wortes, der entweder groß oder klein sein kann. Der Name kommt von der Ähnlichkeit der Großbuchstaben mit den Höckern eines Kamelrückens. Oft wird es als "camelCase" stilisiert, um den Leser an sein Aussehen zu erinnern.

Camel Case wird oft als Konvention zur Benennung von Variablen verwendet. Die folgenden Variablen sind im Camel Case: [`console`](/de/docs/Web/API/console), {{jsxref("encodeURIComponent")}}, {{jsxref("ArrayBuffer")}} und [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beachten Sie, dass bei Ausdrücken, die Akronyme enthalten (wie `URI` und `HTML`), die Praktiken des Camel Case variieren. Einige ziehen es vor, alle davon großzuschreiben, wie `encodeURIComponent` oben. Dies kann manchmal zu Mehrdeutigkeiten mit mehreren aufeinanderfolgenden Akronymen führen, wie `XMLHTTPRequest`. Andere ziehen es vor, nur den ersten Buchstaben zu kapitalisieren, wie `XmlHttpRequest`. Die tatsächliche globale Variable, [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), verwendet eine Mischung aus beidem.

Wenn der erste Buchstabe des gesamten Ausdrucks groß ist, wird es als _Upper Camel Case_ oder _Pascal Case_ bezeichnet. Andernfalls wird es _Lower Camel Case_ genannt.

Camel Case ist die beliebteste Konvention in JavaScript, Java und verschiedenen anderen Programmiersprachen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Snake_case", "Snake case")}}
  - {{Glossary("Kebab_case", "Kebab case")}}
- [typescript-eslint-Regel: `naming-convention`](https://typescript-eslint.io/rules/naming-convention/)
