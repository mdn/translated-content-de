---
title: Primitive
slug: Glossary/Primitive
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In {{Glossary("JavaScript")}} ist ein **Primitive** (primitiver Wert, primitiver Datentyp) Daten, die kein {{Glossary("object")}} sind und keine {{glossary("method","Methoden")}} oder {{Glossary("property/javascript", "Eigenschaften")}} haben. Es gibt 7 primitive Datentypen:

- {{Glossary("string")}}
- {{Glossary("number")}}
- {{Glossary("bigint")}}
- {{Glossary("boolean")}}
- {{Glossary("undefined")}}
- [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- {{Glossary("null")}}

In der Regel wird ein primitiver Wert direkt auf der niedrigsten Ebene der Sprachimplementierung dargestellt.

Alle Primitiven sind _unveränderlich_; das heißt, sie können nicht verändert werden. Es ist wichtig, nicht einen primitiven Wert selbst mit einer Variablen, die einem primitiven Wert zugewiesen ist, zu verwechseln. Die Variable kann einem neuen Wert zugewiesen werden, aber der bestehende Wert kann nicht auf die Weise geändert werden, wie Objekte, Arrays und Funktionen geändert werden können. Die Sprache bietet keine Werkzeuge, um primitive Werte zu ändern.

Primitives haben keine Methoden, aber sie verhalten sich dennoch, als ob sie welche hätten. Wenn auf Eigenschaften von Primitives zugegriffen wird, _auto-boxed_ JavaScript den Wert in ein Wrapper-Objekt und greift stattdessen auf die Eigenschaft dieses Objekts zu. Zum Beispiel erstellt `"foo".includes("f")` implizit ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Wrapper-Objekt und ruft `String.prototype.includes()` auf diesem Objekt auf. Dieses Auto-Boxing-Verhalten ist im JavaScript-Code nicht beobachtbar, aber es ist ein gutes mentales Modell für verschiedene Verhaltensweisen — zum Beispiel, warum das "Verändern" von Primitives nicht funktioniert (weil `str.foo = 1` nicht der Eigenschaft `foo` von `str` selbst zuweist, sondern einem flüchtigen Wrapper-Objekt).

## Siehe auch

- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Data_structures)
- [Primitive Datentypen](https://de.wikipedia.org/wiki/Primitive_Datentypen) (Wikipedia)
- Verwandte Glossareinträge:
  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
