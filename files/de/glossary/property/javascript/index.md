---
title: Eigenschaft (JavaScript)
slug: Glossary/Property/JavaScript
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **JavaScript-Eigenschaft** ist ein Mitglied eines [Objekts](/de/docs/Web/JavaScript/Data_structures#objects), das einen Schlüssel mit einem Wert verknüpft. Ein JavaScript-Objekt ist eine Datenstruktur, die eine Sammlung von Eigenschaften speichert.

Eine Eigenschaft besteht aus den folgenden Teilen:

- Einem _Namen_ (auch _Schlüssel_ genannt), der entweder eine [Zeichenfolge](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ist.
- Einem _Wert_, der jeder JavaScript-Wert sein kann. Eine Eigenschaft, die eine Funktion als Wert hat, kann auch als {{Glossary("method")}} bezeichnet werden.
- Einigen _Attributen_, die festlegen, wie die Eigenschaft gelesen und geschrieben werden kann. Eine Eigenschaft kann die Attribute `configurable`, `enumerable` und `writable` haben.

[Accessor-Eigenschaften](/de/docs/Web/JavaScript/Data_structures#accessor_property) haben keinen tatsächlichen "Wert". Der Wert wird indirekt durch ein Funktionenpaar dargestellt, eines (der Getter), das beim Lesen des Wertes aufgerufen wird, und eines (der Setter), das beim Setzen des Wertes aufgerufen wird. Accessor-Eigenschaften verhalten sich jedoch wie reguläre Dateneigenschaften an der Oberfläche, weil die Getter- und Setter-Funktionen automatisch aufgerufen werden und typischerweise für JavaScript-Code transparent sind.

Der Wert der Eigenschaft (einschließlich Getter und Setter) und ihre Attribute werden in einem Datenrekord namens _Property Descriptor_ gespeichert. Viele Methoden, wie {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.defineProperty()")}}, arbeiten mit Property Descriptors.

Der Begriff _Eigenschaft_ selbst entspricht keinem JavaScript-Wert – es ist ein abstraktes Konzept. Zum Beispiel im folgenden Code:

```js
const obj = {
  a: 1,
  b() {},
};
```

Das Objekt `obj` hat zwei Eigenschaften. Die erste hat `"a"` als Schlüssel und `1` als Wert. Die zweite hat `"b"` als Schlüssel und eine Funktion als Wert (unter Verwendung der [Methoden-Syntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)). Die `"a"` – `1`, `"b"` – `Funktion` Zuordnungen sind die Eigenschaften des Objekts.

Im Kontext von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Eigenschaften in _Instanzeigenschaften_ unterteilt werden, die von jeder Instanz besessen werden, und _statische Eigenschaften_, die von der Klasse besessen werden und Daten enthalten, die für alle Instanzen gemeinsam sind. Im Kontext der [Vererbung](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) können Eigenschaften auch in _eigene Eigenschaften_ unterteilt werden, die dem Objekt selbst gehören, und _geerbte Eigenschaften_, die Objekten in der Prototypen-Kette des Objekts gehören.

Weitere Informationen zum Lesen und Schreiben von Eigenschaften finden Sie unter [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Siehe auch

- [Property (programming)](<https://en.wikipedia.org/wiki/Property_(programming)>) auf Wikipedia
- [Einführung in objektorientiertes JavaScript](/de/docs/Learn/JavaScript/Objects)
- [Objekteigenschaften](/de/docs/Web/JavaScript/Data_structures#properties)
- [Enumerabilität und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
