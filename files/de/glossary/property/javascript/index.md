---
title: Property (JavaScript)
slug: Glossary/Property/JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Eine **JavaScript-Eigenschaft** ist ein Mitglied eines [Objekts](/de/docs/Web/JavaScript/Data_structures#objects), das einen Schlüssel mit einem Wert verknüpft. Ein JavaScript-Objekt ist eine Datenstruktur, die eine Sammlung von Eigenschaften speichert.

Eine Eigenschaft besteht aus den folgenden Teilen:

- Einem _Namen_ (auch _Schlüssel_ genannt), der entweder ein [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder ein [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ist.
- Einem _Wert_, der ein beliebiger JavaScript-Wert sein kann. Eine Eigenschaft, die eine Funktion als Wert hat, wird auch oft als {{Glossary("method", "Methode")}} bezeichnet.
- Einige _Attribute_, die angeben, wie die Eigenschaft gelesen und geschrieben werden kann. Eine Eigenschaft kann die Attribute `configurable`, `enumerable` und `writable` haben.

[Accessor-Eigenschaften](/de/docs/Web/JavaScript/Data_structures#accessor_property) haben keinen tatsächlichen "Wert". Der Wert wird indirekt über ein Paar von Funktionen repräsentiert, eine (der Getter) wird aufgerufen, wenn der Wert gelesen wird, und eine (der Setter) wird aufgerufen, wenn der Wert gesetzt wird. Accessor-Eigenschaften verhalten sich jedoch wie reguläre Dateneigenschaften auf der Oberfläche, da die Getter- und Setter-Funktionen automatisch aufgerufen werden und typischerweise für JavaScript-Code transparent sind.

Der Wert der Eigenschaft (einschließlich des Getters und Setters) und ihre Attribute werden in einem Datensatz gespeichert, der als _Property Descriptor_ bezeichnet wird. Viele Methoden, wie z.B. {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.defineProperty()")}}, arbeiten mit Property Descriptors.

Der Begriff _Eigenschaft_ selbst entspricht keinem JavaScript-Wert — es ist ein abstraktes Konzept. Zum Beispiel im folgenden Code:

```js
const obj = {
  a: 1,
  b() {},
};
```

Das Objekt `obj` hat zwei Eigenschaften. Die erste hat `"a"` als Schlüssel und `1` als Wert. Die zweite hat `"b"` als Schlüssel und eine Funktion als Wert (unter Verwendung der [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)). Die Assoziationen `"a"` – `1`, `"b"` – `function` sind die Eigenschaften des Objekts.

Im Kontext von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Eigenschaften in _Instanzeigenschaften_ unterteilt werden, die von jeder Instanz gehalten werden, und _statische Eigenschaften_, die von der Klasse gehalten werden und Daten enthalten, die allen Instanzen gemeinsam sind. Im Kontext von [Vererbung](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) können Eigenschaften auch in _eigene Eigenschaften_ unterteilt werden, die vom Objekt selbst gehalten werden, und _geerbte Eigenschaften_, die von Objekten in der Prototypkette des Objekts gehalten werden.

Für weitere Informationen über das Lesen und Schreiben von Eigenschaften, siehe [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Siehe auch

- [Property (programming)](<https://en.wikipedia.org/wiki/Property_(programming)>) auf Wikipedia
- [Einführung in objektorientiertes JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
- [Objekteigenschaften](/de/docs/Web/JavaScript/Data_structures#properties)
- [Enumerierbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
