---
title: "TypeError: Die Eigenschaft \"x\" kann nicht definiert werden: \"obj\" ist nicht erweiterbar"
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „Die Eigenschaft „x“ kann nicht definiert werden: „obj“ ist nicht erweiterbar“ tritt auf, wenn {{jsxref("Object.preventExtensions()")}} ein Objekt als nicht mehr erweiterbar markiert hat, sodass es niemals Eigenschaften über die hinaus haben wird, die es hatte, als es als nicht-erweiterbar markiert wurde.

## Nachricht

```plain
TypeError: Cannot add property x, object is not extensible (V8-based)
TypeError: Cannot define property x, object is not extensible (V8-based)
TypeError: can't define property "x": Object is not extensible (Firefox)
TypeError: Attempting to define property on object that is not extensible. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Normalerweise ist ein Objekt erweiterbar und es können neue Eigenschaften hinzugefügt werden. In diesem Fall hat jedoch {{jsxref("Object.preventExtensions()")}} ein Objekt als nicht mehr erweiterbar markiert, sodass es niemals Eigenschaften über die hinaus haben wird, die es hatte, als es als nicht-erweiterbar markiert wurde.

## Beispiele

### Neue Eigenschaften zu nicht-erweiterbaren Objekten hinzufügen

Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Versuch, neue Eigenschaften zu einem nicht-erweiterbaren Objekt hinzuzufügen, zu einem `TypeError`. Im lockeren Modus wird das Hinzufügen der "x"-Eigenschaft stillschweigend ignoriert.

```js example-bad
"use strict";

const obj = {};
Object.preventExtensions(obj);

obj.x = "foo";
// TypeError: can't define property "x": Object is not extensible
```

Sowohl im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) als auch im lockeren Modus führt ein Aufruf von {{jsxref("Object.defineProperty()")}} zu einem Fehler, wenn eine neue Eigenschaft zu einem nicht-erweiterbaren Objekt hinzugefügt wird.

```js example-bad
const obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "foo" });
// TypeError: can't define property "x": Object is not extensible
```

Um diesen Fehler zu beheben, sollten Sie den Aufruf von {{jsxref("Object.preventExtensions()")}} entweder vollständig entfernen oder ihn so positionieren, dass die Eigenschaft zuerst hinzugefügt wird und das Objekt erst später als nicht-erweiterbar markiert wird. Natürlich können Sie auch die Eigenschaft entfernen, die versucht wurde hinzuzufügen, wenn Sie sie nicht benötigen.

```js example-good
"use strict";

const obj = {};
obj.x = "foo"; // Eigenschaft zuerst hinzufügen und dann Erweiterungen verhindern

Object.preventExtensions(obj);
```

## Siehe auch

- {{jsxref("Object.preventExtensions()")}}
