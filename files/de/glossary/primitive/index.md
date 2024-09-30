---
title: Primitive
slug: Glossary/Primitive
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In [JavaScript](/de/docs/Glossary/JavaScript) ist ein **Primitive** (Primitivwert, primitiver Datentyp) ein Datum, das kein [Objekt](/de/docs/Glossary/object) ist und keine [Methoden](/de/docs/Glossary/method) oder [Eigenschaften](/de/docs/Glossary/property/javascript) besitzt. Es gibt 7 primitive Datentypen:

- [string](/de/docs/Glossary/string)
- [number](/de/docs/Glossary/number)
- [bigint](/de/docs/Glossary/bigint)
- [boolean](/de/docs/Glossary/boolean)
- [undefined](/de/docs/Glossary/undefined)
- [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [null](/de/docs/Glossary/null)

In der Regel wird ein Primitivwert direkt auf der niedrigsten Ebene der Sprachimplementierung dargestellt.

Alle Primitiven sind _unveränderlich_; das heißt, sie können nicht verändert werden. Es ist wichtig, ein Primiv selbst nicht mit einer Variable zu verwechseln, der ein Primivwert zugewiesen ist. Die Variable kann einem neuen Wert zugewiesen werden, aber der vorhandene Wert kann nicht auf die Weise geändert werden, wie Objekte, Arrays und Funktionen geändert werden können. Die Sprache bietet keine Werkzeuge, um primitive Werte zu verändern.

Primitiven haben keine Methoden, verhalten sich aber trotzdem so, als ob sie welche hätten. Wenn auf Eigenschaften von Primitiven zugegriffen wird, _verpackt_ JavaScript den Wert automatisch in ein Wrapper-Objekt und greift stattdessen auf die Eigenschaft dieses Objekts zu. Zum Beispiel erzeugt `"foo".includes("f")` implizit ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Wrapper-Objekt und ruft `String.prototype.includes()` auf diesem Objekt auf. Dieses Auto-Boxing-Verhalten ist im JavaScript-Code nicht beobachtbar, bietet aber ein gutes mentales Modell für verschiedene Verhaltensweisen—zum Beispiel, warum das „Verändern“ von Primitiven nicht funktioniert (weil `str.foo = 1` nicht der Eigenschaft `foo` von `str` selbst zugewiesen wird, sondern einem temporären Wrapper-Objekt).

## Siehe auch

- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Data_structures)
- [Primitive Datentypen](https://en.wikipedia.org/wiki/Primitive_data_type) (Wikipedia)
- Verwandte Glossarbegriffe:
  - [JavaScript](/de/docs/Glossary/JavaScript)
  - [string](/de/docs/Glossary/string)
  - [number](/de/docs/Glossary/number)
  - [bigint](/de/docs/Glossary/bigint)
  - [boolean](/de/docs/Glossary/boolean)
  - [null](/de/docs/Glossary/null)
  - [undefined](/de/docs/Glossary/undefined)
  - [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
