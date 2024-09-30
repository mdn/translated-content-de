---
title: "TypeError: kann Eigenschaft \"x\" nicht definieren: \"obj\" ist nicht erweiterbar"
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "kann Eigenschaft \"x\" nicht definieren: \"obj\" ist nicht erweiterbar" tritt auf, wenn {{jsxref("Object.preventExtensions()")}} ein Objekt als nicht mehr erweiterbar markiert hat, sodass es nie Eigenschaften über die hinaus haben wird, die es hatte, als es als nicht erweiterbar markiert wurde.

## Nachricht

```plain
TypeError: Cannot add property x, object is not extensible (V8-based)
TypeError: Cannot define property x, object is not extensible (V8-based)
TypeError: can't define property "x": Object is not extensible (Firefox)
TypeError: Attempting to define property on object that is not extensible. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was schiefgelaufen ist

Normalerweise ist ein Objekt erweiterbar und es können ihm neue Eigenschaften hinzugefügt werden. In diesem Fall hat jedoch {{jsxref("Object.preventExtensions()")}} ein Objekt als nicht mehr erweiterbar markiert, sodass es nie Eigenschaften über die hinaus haben wird, die es hatte, als es als nicht erweiterbar markiert wurde.

## Beispiele

### Hinzufügen neuer Eigenschaften zu nicht erweiterbaren Objekten

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Versuch, einem nicht erweiterbaren Objekt neue Eigenschaften hinzuzufügen, zu einem `TypeError`. Im Sloppy Mode wird das Hinzufügen der Eigenschaft "x" stillschweigend ignoriert.

```js example-bad
"use strict";

const obj = {};
Object.preventExtensions(obj);

obj.x = "foo";
// TypeError: can't define property "x": Object is not extensible
```

Sowohl im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) als auch im Sloppy Mode löst ein Aufruf von {{jsxref("Object.defineProperty()")}} einen Fehler aus, wenn eine neue Eigenschaft zu einem nicht erweiterbaren Objekt hinzugefügt wird.

```js example-bad
const obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "foo" });
// TypeError: can't define property "x": Object is not extensible
```

Um diesen Fehler zu beheben, müssen Sie entweder den Aufruf von {{jsxref("Object.preventExtensions()")}} vollständig entfernen oder ihn so verschieben, dass die Eigenschaft früher hinzugefügt wird und das Objekt erst später als nicht erweiterbar markiert wird. Natürlich können Sie auch die Eigenschaft entfernen, die hinzugefügt werden sollte, wenn Sie sie nicht benötigen.

```js example-good
"use strict";

const obj = {};
obj.x = "foo"; // add property first and only then prevent extensions

Object.preventExtensions(obj);
```

## Siehe auch

- {{jsxref("Object.preventExtensions()")}}
