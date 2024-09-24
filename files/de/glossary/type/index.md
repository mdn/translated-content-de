---
title: Typ
slug: Glossary/Type
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Typ** ist eine Eigenschaft eines {{glossary("value")}}, die beeinflusst, welche Art von Daten es speichern kann und welche Struktur die Daten einhalten werden. Zum Beispiel kann ein {{Glossary("boolean")}} [Datentyp](/de/docs/Web/JavaScript/Data_structures) nur einen `true` oder `false` Wert zu einem bestimmten Zeitpunkt halten, während ein {{Glossary("string")}} die Fähigkeit hat, eine Zeichenkette oder eine Sequenz von Zeichen zu speichern, ein {{Glossary("number")}} kann numerische Werte jeder Art speichern und so weiter.

Der Datentyp eines Wertes beeinflusst auch die Operationen, die auf diesen Wert gültig sind. Beispielsweise kann ein Wert vom Typ "number" mit einer anderen Zahl multipliziert werden, aber nicht mit einem String - selbst wenn dieser String _nur_ eine Zahl enthält, wie der String "2".

Typen geben uns auch nützliche Informationen über den Vergleich zwischen verschiedenen Werten. Der Vergleich zwischen strukturierten Typen ist nicht immer eine einfache Annahme, da selbst wenn die vorherige Datenstruktur gleich ist, es vererbte Strukturen innerhalb der [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) geben könnte.

Wenn Sie sich über den Typ eines Wertes unsicher sind, können Sie den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator verwenden.

## Siehe auch

- [Datentyp](https://de.wikipedia.org/wiki/Datentyp) auf Wikipedia
- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Data_structures)
- Verwandte Glossarbegriffe:
  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol")}}
