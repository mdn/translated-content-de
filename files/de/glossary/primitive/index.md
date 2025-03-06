---
title: Primitive
slug: Glossary/Primitive
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{GlossarySidebar}}

In {{Glossary("JavaScript", "JavaScript")}} ist ein **Primitiv** (Primitivwert, primitiver Datentyp) ein Datum, das kein {{Glossary("object", "Objekt")}} ist und keine {{Glossary("method", "Methoden")}} oder {{Glossary("property/javascript", "Eigenschaften")}} hat. Es gibt 7 primitive Datentypen:

- {{Glossary("string", "string")}}
- {{Glossary("number", "number")}}
- {{Glossary("bigint", "bigint")}}
- {{Glossary("boolean", "boolean")}}
- {{Glossary("undefined", "undefined")}}
- [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- {{Glossary("null", "null")}}

Meistens wird ein primitiver Wert direkt auf der niedrigsten Ebene der Sprachimplementierung dargestellt.

Alle Primitiven sind _unveränderlich_; das heißt, sie können nicht verändert werden. Es ist wichtig, ein Primitiv nicht mit einer Variablen zu verwechseln, der ein Primitivwert zugewiesen ist. Die Variable kann neu zugewiesen werden, jedoch kann der bestehende Wert nicht auf die Weise verändert werden, wie Objekte, Arrays und Funktionen verändert werden können. Die Sprache bietet keine Werkzeuge, um primitive Werte zu verändern.

Primitiven fehlen Methoden, sie verhalten sich jedoch so, als ob sie welche hätten. Wenn auf Eigenschaften von Primitiven zugegriffen wird, _autoboxt_ JavaScript den Wert in ein Wrapper-Objekt und greift stattdessen auf die Eigenschaft dieses Objekts zu. Zum Beispiel erstellt `"foo".includes("f")` implizit ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Wrapper-Objekt und ruft `String.prototype.includes()` auf diesem Objekt auf. Dieses Auto-Boxing-Verhalten ist im JavaScript-Code nicht beobachtbar, stellt jedoch ein gutes mentales Modell für verschiedene Verhaltensweisen dar – zum Beispiel, warum das "Verändern" von Primitiven nicht funktioniert (weil `str.foo = 1` nicht die Eigenschaft `foo` von `str` selbst zuweist, sondern einem flüchtigen Wrapper-Objekt).

## Siehe auch

- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [Primitiver Datentyp](https://en.wikipedia.org/wiki/Primitive_data_type) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("JavaScript", "JavaScript")}}
  - {{Glossary("string", "string")}}
  - {{Glossary("number", "number")}}
  - {{Glossary("bigint", "bigint")}}
  - {{Glossary("boolean", "boolean")}}
  - {{Glossary("null", "null")}}
  - {{Glossary("undefined", "undefined")}}
  - [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
