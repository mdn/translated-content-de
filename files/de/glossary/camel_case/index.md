---
title: Camel case
slug: Glossary/Camel_case
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Camel case** ist eine Art, Phrasen ohne Leerzeichen zu schreiben, bei der der erste Buchstabe jedes Wortes groß geschrieben wird, außer bei dem ersten Buchstaben des gesamten zusammengesetzten Wortes, der entweder groß oder klein sein kann. Der Name stammt von der Ähnlichkeit der Großbuchstaben mit den Höckern eines Kamelrückens. Es wird oft als "camelCase" stilisiert, um den Leser an sein Erscheinungsbild zu erinnern.

Camel Case wird oft als Konvention zur Namensgebung von Variablen verwendet. Die folgenden Variablen sind in Camel Case: [`console`](/de/docs/Web/API/console), {{jsxref("encodeURIComponent")}}, {{jsxref("ArrayBuffer")}}, und [`HTMLElement`](/de/docs/Web/API/HTMLElement).

<!-- cSpell:ignore XMLHTTP -->

Beachten Sie, dass bei Phrasen, die Akronyme (wie `URI` und `HTML`) enthalten, die Praktiken des Camel Case variieren. Einige ziehen es vor, alle groß zu schreiben, wie das oben genannte `encodeURIComponent`. Dies kann manchmal zu Mehrdeutigkeiten bei mehreren aufeinanderfolgenden Akronymen führen, wie bei `XMLHTTPRequest`. Andere bevorzugen es, nur den ersten Buchstaben groß zu schreiben, wie `XmlHttpRequest`. Die tatsächliche globale Variable, [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), verwendet eine Mischung aus beidem.

Wenn der erste Buchstabe der gesamten Phrase groß geschrieben wird, nennt man es _Upper Camel Case_ oder _Pascal Case_. Andernfalls spricht man von _Lower Camel Case_.

Camel Case ist die beliebteste Konvention in JavaScript, Java und verschiedenen anderen Programmiersprachen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Snake_case", "Snake Case")}}
  - {{Glossary("Kebab_case", "Kebab Case")}}
- [typescript-eslint Regel: `naming-convention`](https://typescript-eslint.io/rules/naming-convention/)
