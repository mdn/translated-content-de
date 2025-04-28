---
title: Camel case
slug: Glossary/Camel_case
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{GlossarySidebar}}

**Camel case** ist eine Art, Phrasen ohne Leerzeichen zu schreiben, wobei der erste Buchstabe jedes Wortes groß geschrieben wird, mit Ausnahme des ersten Buchstabens des gesamten zusammengesetzten Wortes, der entweder groß oder klein geschrieben sein kann. Der Name kommt von der Ähnlichkeit der Großbuchstaben mit den Höckern eines Kamelrückens. Es wird oft als "camelCase" stilisiert, um den Leser an sein Aussehen zu erinnern.

Camel Case wird oft als Konvention zur Benennung von Variablen verwendet. Die folgenden Variablen sind in Camel Case: [`console`](/de/docs/Web/API/console), {{jsxref("encodeURIComponent")}}, {{jsxref("ArrayBuffer")}}, und [`HTMLElement`](/de/docs/Web/API/HTMLElement).

<!-- cSpell:ignore XMLHTTP -->

Beachten Sie, dass wenn die Phrase Akronyme enthält (wie `URI` und `HTML`), die Praktiken der Camel-Case-Schreibung variieren. Einige bevorzugen es, alle Buchstaben groß zu schreiben, wie bei `encodeURIComponent` oben. Dies kann manchmal zu Mehrdeutigkeiten mit mehreren aufeinanderfolgenden Akronymen führen, wie `XMLHTTPRequest`. Andere bevorzugen es, nur den ersten Buchstaben groß zu schreiben, wie `XmlHttpRequest`. Die tatsächliche globale Variable, [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), verwendet eine Mischung aus beiden.

Wenn der erste Buchstabe der gesamten Phrase großgeschrieben ist, nennt man dies _Upper Camel Case_ oder _Pascal Case_. Andernfalls wird es _Lower Camel Case_ genannt.

Camel Case ist die beliebteste Konvention in JavaScript, Java und verschiedenen anderen Sprachen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Snake_case", "Snake case")}}
  - {{Glossary("Kebab_case", "Kebab case")}}
- [typescript-eslint Regel: `naming-convention`](https://typescript-eslint.io/rules/naming-convention/)
