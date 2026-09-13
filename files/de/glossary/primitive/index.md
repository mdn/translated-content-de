---
title: Primitive
slug: Glossary/Primitive
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

In {{Glossary("JavaScript", "JavaScript")}} ist ein **primitive** (primitiver Wert, primitiver Datentyp) ein Datum, das kein {{Glossary("object", "Objekt")}} ist und keine {{Glossary("method", "Methoden")}} oder {{Glossary("property/javascript", "Eigenschaften")}} hat. Es gibt 7 primitive Datentypen:

- {{Glossary("string", "string")}}
- {{Glossary("number", "number")}}
- {{Glossary("bigint", "bigint")}}
- {{Glossary("boolean", "boolean")}}
- {{Glossary("undefined", "undefined")}}
- [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- {{Glossary("null", "null")}}

Meistens wird ein primitiver Wert direkt auf der niedrigsten Ebene der Sprachimplementierung dargestellt.

Alle Primitiven sind _unveränderlich_; das heißt, sie können nicht verändert werden. Es ist wichtig, ein primitives Element nicht mit einer Variablen zu verwechseln, der ein primitiver Wert zugewiesen ist. Die Variable kann einem neuen Wert zugewiesen werden, aber der bestehende Wert kann nicht in der Art verändert werden, wie es bei Objekten, Arrays und Funktionen möglich ist. Die Sprache bietet keine Werkzeuge, um primitive Werte zu verändern.

Primitiven fehlen Methoden, aber sie verhalten sich dennoch so, als ob sie welche hätten. Wenn auf Eigenschaften von Primitiven zugegriffen wird, _auto-verpackt_ JavaScript den Wert in ein Wrapper-Objekt und greift stattdessen auf die Eigenschaft dieses Objekts zu. Zum Beispiel erstellt `"foo".includes("f")` implizit ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Wrapper-Objekt und ruft `String.prototype.includes()` auf diesem Objekt auf. Dieses Auto-Verpackungsverhalten ist im JavaScript-Code nicht beobachtbar, aber es ist ein gutes mentales Modell für verschiedene Verhaltensweisen — zum Beispiel, warum das "Verändern" von Primitiven nicht funktioniert (weil `str.foo = 1` nicht der Eigenschaft `foo` von `str` selbst zugewiesen wird, sondern zu einem flüchtigen Wrapper-Objekt).

## Siehe auch

- [JavaScript Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures)
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
