---
title: Eigenschaft (JavaScript)
slug: Glossary/Property/JavaScript
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{GlossarySidebar}}

Eine **JavaScript-Eigenschaft** ist ein Mitglied eines [Objekts](/de/docs/Web/JavaScript/Guide/Data_structures#objects), das einen Schlüssel mit einem Wert verknüpft. Ein JavaScript-Objekt ist eine Datenstruktur, die eine Sammlung von Eigenschaften speichert.

Eine Eigenschaft besteht aus den folgenden Teilen:

- Einem _Namen_ (auch _Schlüssel_ genannt), der entweder ein [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ist.
- Einem _Wert_, der jeder JavaScript-Wert sein kann. Eine Eigenschaft, deren Wert eine Funktion ist, wird auch als {{Glossary("method", "Methode")}} bezeichnet.
- Einige _Attribute_, die festlegen, wie die Eigenschaft gelesen und geschrieben werden kann. Eine Eigenschaft kann die Attribute `configurable`, `enumerable` und `writable` haben.

[Accessor-Eigenschaften](/de/docs/Web/JavaScript/Guide/Data_structures#accessor_property) haben keinen tatsächlichen "Wert". Der Wert wird indirekt durch ein Funktionspaar dargestellt, wobei eine (der Getter) beim Lesen des Wertes und die andere (der Setter) beim Schreiben des Wertes aufgerufen wird. Trotzdem verhalten sich Accessor-Eigenschaften an der Oberfläche wie normale Dateneigenschaften, da die Getter- und Setter-Funktionen automatisch aufgerufen werden und in der Regel für JavaScript-Code transparent sind.

Der Wert der Eigenschaft (einschließlich Getter und Setter) und ihre Attribute werden in einem Datenprotokoll, genannt _Property Descriptor_, gespeichert. Viele Methoden, wie {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.defineProperty()")}}, arbeiten mit diesen Property Descriptors.

Der Begriff _Eigenschaft_ selbst entspricht keinem JavaScript-Wert — es ist ein abstraktes Konzept. Zum Beispiel im folgenden Code:

```js
const obj = {
  a: 1,
  b() {},
};
```

Das Objekt `obj` hat zwei Eigenschaften. Die erste hat `"a"` als Schlüssel und `1` als Wert. Die zweite hat `"b"` als Schlüssel und eine Funktion als Wert (unter Verwendung der [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)). Die Zuordnungen `"a"` – `1`, `"b"` – `function` sind die Eigenschaften des Objekts.

Im Kontext von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Eigenschaften in _Instanz-Eigenschaften_, die jedem Exemplar gehören, und _statische Eigenschaften_ unterteilt werden, die der Klasse gehören und Daten enthalten, die für alle Exemplare gemeinsam sind. Im Kontext von [Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) können Eigenschaften auch in _eigene Eigenschaften_, die dem Objekt selbst gehören, und _geerbte Eigenschaften_, die Objekten in der Prototypkette des Objekts gehören, unterteilt werden.

Für mehr Informationen über das Lesen und Schreiben von Eigenschaften, siehe [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Siehe auch

- [Property (programming)](<https://en.wikipedia.org/wiki/Property_(programming)>) auf Wikipedia
- [Einführung in objektorientiertes JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
- [Objekteigenschaften](/de/docs/Web/JavaScript/Guide/Data_structures#properties)
- [Enumierbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
