---
title: Camel Case
slug: Glossary/Camel_case
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Camel Case** ist eine Schreibweise, bei der Sätze ohne Leerzeichen geschrieben werden, wobei der erste Buchstabe jedes Wortes großgeschrieben wird, mit Ausnahme des ersten Buchstabens des gesamten zusammengesetzten Wortes, der entweder groß- oder kleingeschrieben werden kann. Der Name kommt von der Ähnlichkeit der Großbuchstaben zu den Höckern eines Kamelrückens. Es wird oft als "camelCase" stilisiert, um die Leserschaft an sein Erscheinungsbild zu erinnern.

Camel Case wird häufig als Konvention zur Benennung von Variablen verwendet. Die folgenden Variablen sind im Camel Case: {{domxref("console")}}, {{jsxref("encodeURIComponent")}}, {{jsxref("ArrayBuffer")}} und {{domxref("HTMLElement")}}.

Beachten Sie, dass, wenn der Satz Akronyme enthält (wie `URI` und `HTML`), die Praktiken des Camel Case variieren. Einige bevorzugen es, alle Buchstaben großzuschreiben, wie beim obigen `encodeURIComponent`. Dies kann manchmal zu Mehrdeutigkeiten führen, wenn mehrere aufeinanderfolgende Akronyme auftreten, wie bei `XMLHTTPRequest`. Andere bevorzugen es, nur den ersten Buchstaben zu kapitalisieren, wie `XmlHttpRequest`. Die tatsächliche globale Variable, {{domxref("XMLHttpRequest")}}, verwendet eine Mischung aus beidem.

Wenn der erste Buchstabe des gesamten Satzes großgeschrieben wird, wird dies als _Upper Camel Case_ oder _Pascal Case_ bezeichnet. Andernfalls spricht man von _Lower Camel Case_.

Camel Case ist die beliebteste Konvention in JavaScript, Java und verschiedenen anderen Programmiersprachen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Snake case")}}
  - {{Glossary("Kebab case")}}
- [typescript-eslint-Regel: `naming-convention`](https://typescript-eslint.io/rules/naming-convention/)
