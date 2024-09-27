---
title: Camel case
slug: Glossary/Camel_case
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Camel case** ist eine Schreibweise von Phrasen ohne Leerzeichen, bei der der erste Buchstabe jedes Wortes großgeschrieben wird, mit Ausnahme des ersten Buchstabens des gesamten zusammengesetzten Wortes, der entweder groß oder klein sein kann. Der Name stammt von der Ähnlichkeit der Großbuchstaben mit den Höckern eines Kamelrückens. Es wird oft als "camelCase" stilisiert, um den Leser an sein Erscheinungsbild zu erinnern.

Camel Case wird häufig als Namenskonvention für Variablen verwendet. Die folgenden Variablen sind im Camel Case geschrieben: [`console`](/de/docs/Web/API/Console), {{jsxref("encodeURIComponent")}}, {{jsxref("ArrayBuffer")}} und [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Es ist zu beachten, dass bei Phrasen, die Akronyme enthalten (wie `URI` und `HTML`), die Praktiken des Camel Case variieren können. Einige bevorzugen es, alle Großbuchstaben beizubehalten, wie `encodeURIComponent` oben. Dies kann manchmal zu Mehrdeutigkeiten mit mehreren aufeinanderfolgenden Akronymen führen, wie bei `XMLHTTPRequest`. Andere ziehen es vor, nur den ersten Buchstaben zu kapitalisieren, wie `XmlHttpRequest`. Die tatsächliche globale Variable, [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), verwendet eine Mischung aus beiden.

Wenn der erste Buchstabe des gesamten Satzes großgeschrieben wird, spricht man von _Upper Camel Case_ oder _Pascal Case_. Andernfalls nennt man es _Lower Camel Case_.

Camel Case ist die beliebteste Konvention in JavaScript, Java und verschiedenen anderen Sprachen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Snake case](/de/docs/Glossary/Snake_case)
  - [Kebab case](/de/docs/Glossary/Kebab_case)
- [typescript-eslint Regel: `naming-convention`](https://typescript-eslint.io/rules/naming-convention/)
