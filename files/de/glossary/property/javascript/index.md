---
title: Property (JavaScript)
slug: Glossary/Property/JavaScript
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **JavaScript-Eigenschaft** ist ein Mitglied eines [Objekts](/de/docs/Web/JavaScript/Data_structures#objects), das einen Schlüssel mit einem Wert verknüpft. Ein JavaScript-Objekt ist eine Datenstruktur, die eine Sammlung von Eigenschaften speichert.

Eine Eigenschaft besteht aus den folgenden Teilen:

- Einem _Namen_ (auch _Schlüssel_ genannt), der entweder ein [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ist.
- Einem _Wert_, der jeder JavaScript-Wert sein kann. Eine Eigenschaft, die eine Funktion als Wert besitzt, kann auch als [Methode](/de/docs/Glossary/method) bezeichnet werden.
- Einigen _Attributen_, die angeben, wie die Eigenschaft gelesen und geschrieben werden kann. Eine Eigenschaft kann die Attribute `configurable`, `enumerable` und `writable` haben.

[Accessor-Eigenschaften](/de/docs/Web/JavaScript/Data_structures#accessor_property) haben keinen tatsächlichen „Wert“. Der Wert wird indirekt durch ein Funktionspaar dargestellt: eine Funktion (der Getter), die beim Lesen des Wertes aufgerufen wird, und eine Funktion (der Setter), die beim Setzen des Wertes aufgerufen wird. Accessor-Eigenschaften verhalten sich jedoch auf den ersten Blick wie normale Dateneigenschaften, da die Getter- und Setter-Funktionen automatisch aufgerufen werden und normalerweise für JavaScript-Code transparent sind.

Der Wert der Eigenschaft (einschließlich des Getters und Setters) und ihre Attribute werden in einem Datenrecord, dem _Property-Descriptor_, gespeichert. Viele Methoden, wie {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.defineProperty()")}}, arbeiten mit Property-Deskriptoren.

Der Begriff _Eigenschaft_ selbst entspricht keinem JavaScript-Wert – er ist ein abstraktes Konzept. Zum Beispiel im folgenden Code:

```js
const obj = {
  a: 1,
  b() {},
};
```

Das Objekt `obj` hat zwei Eigenschaften. Die erste hat `"a"` als Schlüssel und `1` als Wert. Die zweite hat `"b"` als Schlüssel und eine Funktion als Wert (unter Verwendung der [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)). Die `"a"` – `1`, `"b"` – `function` Verknüpfungen sind die Eigenschaften des Objekts.

Im Kontext von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Eigenschaften in _Instanzeigenschaften_ unterteilt werden, die im Besitz jeder Instanz sind, und _statische Eigenschaften_, die im Besitz der Klasse sind und für alle Instanzen gemeinsame Daten halten. Im Kontext der [Vererbung](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) können Eigenschaften auch in _eigene Eigenschaften_, die im Besitz des Objekts selbst sind, und _geerbte Eigenschaften_, die im Besitz von Objekten in der Prototypkette des Objekts sind, unterteilt werden.

Für weitere Informationen über das Lesen und Schreiben von Eigenschaften, siehe [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Siehe auch

- [Property (programming)](<https://en.wikipedia.org/wiki/Property_(programming)>) auf Wikipedia
- [Einführung in objektorientiertes JavaScript](/de/docs/Learn/JavaScript/Objects)
- [Objekteigenschaften](/de/docs/Web/JavaScript/Data_structures#properties)
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
