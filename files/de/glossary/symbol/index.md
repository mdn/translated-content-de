---
title: Symbol
slug: Glossary/Symbol
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Symbol** ist ein Datentyp, der eindeutige, nicht fälschbare Bezeichner darstellt. Sie werden manchmal auch _Atoms_ genannt.

Da ein Symbol einzigartig und nicht fälschbar ist, können Sie einen mit einem Symbol verknüpften Eigenschaftswert nur lesen, wenn Sie eine Referenz auf den ursprünglichen Bezeichner haben.

In JavaScript ist `symbol` einer der {{Glossary("primitive", "primitiven Typen")}} und kann mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Fabrikmethode erstellt werden, die jedes Mal ein anderes Symbol zurückgibt. Sie können als Schlüssel für Objekte verwendet werden, die niemals zufällig mit anderen Eigenschaften kollidieren können.

JavaScript definiert auch zwei andere Kategorien von Symbolen: wohlbekannte Symbole und registrierte Symbole. Lesen Sie die {{jsxref("Symbol")}} Referenz für weitere Informationen.

## Siehe auch

- [Datentypen](https://en.wikipedia.org/wiki/Data_type) auf Wikipedia
- [Symbol](<https://en.wikipedia.org/wiki/Symbol_(programming)>) auf Wikipedia
- Das globale JavaScript-Objekt {{jsxref("Symbol")}}
