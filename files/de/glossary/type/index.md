---
title: Typ
slug: Glossary/Type
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Typ** ist eine Eigenschaft eines {{Glossary("value", "Werts")}}, die beeinflusst, welche Art von Daten er speichern kann und welcher Struktur die Daten folgen werden. Zum Beispiel kann ein {{Glossary("boolean", "boolean")}}-[Datentyp](/de/docs/Web/JavaScript/Guide/Data_structures) zu jedem Zeitpunkt nur einen `true`- oder `false`-Wert halten, während ein {{Glossary("string", "string")}} die Fähigkeit hat, eine Zeichenkette oder eine Abfolge von Zeichen zu halten, eine {{Glossary("number", "number")}} kann numerische Werte jeglicher Art halten, und so weiter.

Der Datentyp eines Werts beeinflusst auch die Operationen, die auf diesem Wert gültig sind. Zum Beispiel kann ein Wert vom Typ Zahl mit einer anderen Zahl multipliziert werden, aber nicht mit einem String, selbst wenn dieser String _nur_ eine Zahl enthält, wie der String "2".

Typen bieten uns auch nützliches Wissen über den Vergleich zwischen verschiedenen Werten. Der Vergleich zwischen strukturierten Typen ist nicht immer einfach zu vermuten, da selbst wenn die vorherige Datenstruktur gleich ist, es innerhalb der [Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) geerbte Strukturen geben könnte.

Wenn Sie sich über den Typ eines Werts unsicher sind, können Sie den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden.

## Siehe auch

- [Datentyp](https://en.wikipedia.org/wiki/Data_type) auf Wikipedia
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
