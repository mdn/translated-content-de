---
title: Property (JavaScript)
slug: Glossary/Property/JavaScript
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **JavaScript-Eigenschaft** ist ein Mitglied eines [Objekts](/de/docs/Web/JavaScript/Guide/Data_structures#objects), das einen Schlüssel mit einem Wert verknüpft. Ein JavaScript-Objekt ist eine Datenstruktur, die eine Sammlung von Eigenschaften speichert.

Eine Eigenschaft besteht aus den folgenden Teilen:

- Einem _Name_ (auch _Schlüssel_ genannt), der entweder ein [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ist.
- Einem _Wert_, der jeden beliebigen JavaScript-Wert sein kann. Eine Eigenschaft, die eine Funktion als Wert hat, kann auch als {{Glossary("method", "Methode")}} bezeichnet werden.
- Einige _Attribute_, die angeben, wie die Eigenschaft gelesen und geschrieben werden kann. Eine Eigenschaft kann die Attribute `configurable`, `enumerable` und `writable` haben.

[Zugriffseigenschaften](/de/docs/Web/JavaScript/Guide/Data_structures#accessor_property) haben keinen tatsächlichen "Wert". Der Wert wird indirekt durch ein Paar von Funktionen dargestellt: eine (der Getter), die beim Lesen des Wertes aufgerufen wird, und eine (der Setter), die beim Setzen des Wertes aufgerufen wird. Zugriffseigenschaften verhalten sich jedoch oberflächlich wie gewöhnliche Dateneigenschaften, da die Getter- und Setter-Funktionen automatisch aufgerufen werden und typischerweise in JavaScript-Code transparent sind.

Der Wert der Eigenschaft (einschließlich Getter und Setter) und ihre Attribute werden in einem Datenrekord gespeichert, der als _Eigenschaftsdescriptor_ bezeichnet wird. Viele Methoden, wie {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.defineProperty()")}}, arbeiten mit Eigenschaftsdeskriptoren.

Der Begriff _Eigenschaft_ selbst entspricht keinem JavaScript-Wert - es ist ein abstraktes Konzept. Zum Beispiel im folgenden Code:

```js
const obj = {
  a: 1,
  b() {},
};
```

Das Objekt `obj` hat zwei Eigenschaften. Die erste hat `"a"` als Schlüssel und `1` als Wert. Die zweite hat `"b"` als Schlüssel und eine Funktion als Wert (mit der [Methoden-Syntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)). Die Assoziationen `"a"` – `1`, `"b"` – `function` sind die Eigenschaften des Objekts.

Im Kontext von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Eigenschaften in _Instanzeigenschaften_ unterteilt werden, die jedem Instanz zugeordnet sind, und _statische Eigenschaften_, die der Klasse zugeordnet sind und Daten beinhalten, die allen Instanzen gemeinsam sind. Im Kontext von [Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) können Eigenschaften ebenfalls in _eigene Eigenschaften_, die dem Objekt selbst gehören, und _geerbte Eigenschaften_ unterteilt werden, die Objekten in der Prototypenkette des Objekts gehören.

Für mehr Informationen über das Lesen und Schreiben von Eigenschaften siehe [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Siehe auch

- [Eigenschaft (Programmierung)](<https://en.wikipedia.org/wiki/Property_(programming)>) auf Wikipedia
- [Einführung in objektorientiertes JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
- [Objekteigenschaften](/de/docs/Web/JavaScript/Guide/Data_structures#properties)
- [Enumerierbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
