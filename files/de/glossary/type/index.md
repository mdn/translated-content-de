---
title: Typ
slug: Glossary/Type
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{GlossarySidebar}}

**Typ** ist eine Eigenschaft eines {{Glossary("value", "Wertes")}}, die beeinflusst, welche Art von Daten er speichern kann und welche Struktur die Daten einhalten werden. Zum Beispiel kann ein {{Glossary("boolean", "boolescher")}} [Datentyp](/de/docs/Web/JavaScript/Guide/Data_structures) zu jedem Zeitpunkt nur einen `true` oder `false` Wert halten, während ein {{Glossary("string", "string")}} die Fähigkeit hat, eine Zeichenkette oder eine Sequenz von Zeichen zu halten, ein {{Glossary("number", "number")}} kann numerische Werte jeglicher Art halten, und so weiter.

Der Datentyp eines Wertes beeinflusst auch die Operationen, die auf diesem Wert gültig sind. Zum Beispiel kann ein Wert vom Typ number mit einer anderen Zahl multipliziert werden, jedoch nicht mit einem string - selbst wenn dieser string _nur_ eine Zahl enthält, wie der string "2".

Typen liefern uns auch nützliche Informationen über den Vergleich zwischen verschiedenen Werten. Der Vergleich zwischen strukturierten Typen ist nicht immer einfach anzunehmen, da es selbst bei gleicher Datenstruktur vererbte Strukturen innerhalb der [Prototype-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) geben könnte.

Wenn Sie sich über den Typ eines Wertes unsicher sind, können Sie den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator verwenden.

## Siehe auch

- [Datentyp](https://de.wikipedia.org/wiki/Datentyp) auf Wikipedia
- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures)
- Verwandte Glossarbegriffe:
  - {{Glossary("JavaScript", "JavaScript")}}
  - {{Glossary("string", "string")}}
  - {{Glossary("number", "number")}}
  - {{Glossary("bigint", "bigint")}}
  - {{Glossary("boolean", "boolean")}}
  - {{Glossary("null", "null")}}
  - {{Glossary("undefined", "undefined")}}
  - {{Glossary("symbol", "symbol")}}
