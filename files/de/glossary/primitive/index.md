---
title: Primitive
slug: Glossary/Primitive
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In {{Glossary("JavaScript", "JavaScript")}} ist ein **Primitive** (primitiver Wert, primitiver Datentyp) Daten, das kein {{Glossary("object", "Objekt")}} ist und keine {{Glossary("method", "Methoden")}} oder {{Glossary("property/javascript", "Eigenschaften")}} hat. Es gibt 7 primitive Datentypen:

- {{Glossary("string", "string")}}
- {{Glossary("number", "number")}}
- {{Glossary("bigint", "bigint")}}
- {{Glossary("boolean", "boolean")}}
- {{Glossary("undefined", "undefined")}}
- [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- {{Glossary("null", "null")}}

Meistens wird ein primitiver Wert direkt auf der niedrigsten Ebene der Sprachimplementierung dargestellt.

Alle Primitives sind _unveränderlich_; das heißt, sie können nicht verändert werden. Es ist wichtig, ein Primitive nicht mit einer Variable zu verwechseln, die einen primitiven Wert zugewiesen hat. Die Variable kann einem neuen Wert zugewiesen werden, aber der vorhandene Wert kann nicht auf die Weise geändert werden, wie Objekte, Arrays und Funktionen geändert werden können. Die Sprache bietet keine Werkzeuge, um primitive Werte zu verändern.

Primitives haben keine Methoden, verhalten sich jedoch so, als ob sie welche hätten. Wenn auf Eigenschaften von Primitiven zugegriffen wird, _automatisch verpackt_ JavaScript den Wert in ein Wrapper-Objekt und greift auf die Eigenschaft dieses Objekts zu. Zum Beispiel wird bei `"foo".includes("f")` implizit ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Wrapper-Objekt erstellt und `String.prototype.includes()` auf diesem Objekt aufgerufen. Dieses Auto-Boxing-Verhalten ist im JavaScript-Code nicht sichtbar, bietet jedoch ein gutes mentales Modell für verschiedene Verhaltensweisen — z.B. warum das „Verändern“ von Primitives nicht funktioniert (weil `str.foo = 1` nicht die Eigenschaft `foo` von `str` selbst zuweist, sondern einem kurzlebigen Wrapper-Objekt).

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
