---
title: Type
slug: Glossary/Type
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Type** ist eine Eigenschaft eines {{Glossary("value", "Wertes")}}, die beeinflusst, welche Art von Daten er speichern kann und welcher Struktur die Daten folgen werden. Zum Beispiel kann ein {{Glossary("boolean", "Boolean")}} [Datentyp](/de/docs/Web/JavaScript/Data_structures) immer nur entweder den Wert `true` oder `false` halten, während ein {{Glossary("string", "String")}} die Fähigkeit hat, eine Zeichenkette oder eine Sequenz von Zeichen zu halten, ein {{Glossary("number", "Number")}} kann numerische Werte jeder Art halten, und so weiter.

Der Datentyp eines Wertes beeinflusst auch die Operationen, die auf diesen Wert gültig sind. Zum Beispiel kann ein Wert vom Typ Number mit einer weiteren Zahl multipliziert werden, jedoch nicht mit einem String - selbst wenn dieser String _nur_ eine Zahl enthält, wie beispielsweise der String "2".

Typen geben uns auch nützliche Informationen über den Vergleich zwischen verschiedenen Werten. Der Vergleich zwischen strukturierten Typen ist nicht immer eine einfache Annahme, da selbst wenn die vorherige Datenstruktur gleich ist, es innerhalb der [Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) geerbte Strukturen geben könnte.

Wenn Sie sich über den Typ eines Wertes nicht sicher sind, können Sie den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden.

## Siehe auch

- [Datentyp](https://en.wikipedia.org/wiki/Data_type) auf Wikipedia
- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Data_structures)
- Verwandte Glossarbegriffe:
  - {{Glossary("JavaScript", "JavaScript")}}
  - {{Glossary("string", "string")}}
  - {{Glossary("number", "number")}}
  - {{Glossary("bigint", "bigint")}}
  - {{Glossary("boolean", "boolean")}}
  - {{Glossary("null", "null")}}
  - {{Glossary("undefined", "undefined")}}
  - {{Glossary("symbol", "symbol")}}
