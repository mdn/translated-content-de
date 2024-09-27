---
title: Primitive
slug: Glossary/Primitive
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In [JavaScript](/de/docs/Glossary/JavaScript) ist ein **Primitive** (primitiver Wert, primitiver Datentyp) Daten, die kein [object](/de/docs/Glossary/object) sind und keine [methods](/de/docs/Glossary/method) oder [properties](/de/docs/Glossary/property/javascript) haben. Es gibt 7 primitive Datentypen:

- [string](/de/docs/Glossary/string)
- [number](/de/docs/Glossary/number)
- [bigint](/de/docs/Glossary/bigint)
- [boolean](/de/docs/Glossary/boolean)
- [undefined](/de/docs/Glossary/undefined)
- [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [null](/de/docs/Glossary/null)

Meistens wird ein primitiver Wert direkt auf der niedrigsten Ebene der Sprachimplementierung dargestellt.

Alle Primitives sind _unveränderlich_; das heißt, sie können nicht verändert werden. Es ist wichtig, nicht ein Primitive selbst mit einer Variablen zu verwechseln, die einen primitiven Wert zugewiesen bekommt. Die Variable kann einem neuen Wert zugewiesen werden, aber der bestehende Wert kann nicht auf die Art geändert werden, wie Objekte, Arrays und Funktionen verändert werden können. Die Sprache bietet keine Werkzeuge, um primitive Werte zu ändern.

Primitives haben zwar keine Methoden, verhalten sich aber so, als ob sie es tun. Wenn Eigenschaften von Primitives abgerufen werden, _auto-boxt_ JavaScript den Wert in ein Wrapper-Objekt und greift auf die Eigenschaft an diesem Objekt zu. Zum Beispiel erstellt `"foo".includes("f")` implizit ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Wrapper-Objekt und ruft `String.prototype.includes()` auf diesem Objekt auf. Dieses Auto-Boxing-Verhalten ist im JavaScript-Code nicht beobachtbar, dient aber als gutes mentales Modell für verschiedene Verhaltensweisen — zum Beispiel warum das "Verändern" von Primitives nicht funktioniert (weil `str.foo = 1` nicht der Eigenschaft `foo` von `str` selbst zugewiesen wird, sondern einem kurzlebigen Wrapper-Objekt).

## Siehe auch

- [JavaScript Datentypen](/de/docs/Web/JavaScript/Data_structures)
- [Primitiver Datentyp](https://en.wikipedia.org/wiki/Primitive_data_type) (Wikipedia)
- Verwandte Glossarbegriffe:
  - [JavaScript](/de/docs/Glossary/JavaScript)
  - [string](/de/docs/Glossary/string)
  - [number](/de/docs/Glossary/number)
  - [bigint](/de/docs/Glossary/bigint)
  - [boolean](/de/docs/Glossary/boolean)
  - [null](/de/docs/Glossary/null)
  - [undefined](/de/docs/Glossary/undefined)
  - [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
