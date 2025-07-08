---
title: 'TypeError: kann Eigenschaft "x" nicht definieren: "obj" ist nicht erweiterbar'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "kann Eigenschaft 'x' nicht definieren: 'obj' ist nicht erweiterbar" tritt auf, wenn ein Objekt durch {{jsxref("Object.preventExtensions()")}} als nicht mehr erweiterbar markiert wurde, sodass es keine Eigenschaften mehr haben kann, als die, die es zum Zeitpunkt der Markierung als nicht erweiterbar hatte.

## Meldung

```plain
TypeError: Cannot add property x, object is not extensible (V8-based)
TypeError: Cannot define property x, object is not extensible (V8-based)
TypeError: can't define property "x": Object is not extensible (Firefox)
TypeError: Attempting to define property on object that is not extensible. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Normalerweise ist ein Objekt erweiterbar und es können neue Eigenschaften hinzugefügt werden. In diesem Fall wurde jedoch ein Objekt durch {{jsxref("Object.preventExtensions()")}} als nicht mehr erweiterbar markiert, sodass es keine Eigenschaften über die hinaus haben kann, die es hatte, als es als nicht erweiterbar markiert wurde.

## Beispiele

### Hinzufügen neuer Eigenschaften zu nicht erweiterbaren Objekten

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Versuch, neue Eigenschaften zu einem nicht erweiterbaren Objekt hinzuzufügen, zu einem `TypeError`. Im nicht-strengen Modus wird die Hinzufügung der Eigenschaft "x" stillschweigend ignoriert.

```js example-bad
"use strict";

const obj = {};
Object.preventExtensions(obj);

obj.x = "foo";
// TypeError: can't define property "x": Object is not extensible
```

Sowohl im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) als auch im nicht-strengen Modus führt ein Aufruf von {{jsxref("Object.defineProperty()")}} zu einem Fehler, wenn eine neue Eigenschaft zu einem nicht erweiterbaren Objekt hinzugefügt wird.

```js example-bad
const obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "foo" });
// TypeError: can't define property "x": Object is not extensible
```

Um diesen Fehler zu beheben, müssen Sie entweder den Aufruf von {{jsxref("Object.preventExtensions()")}} vollständig entfernen oder ihn so positionieren, dass die Eigenschaft früher hinzugefügt wird und das Objekt erst später als nicht erweiterbar markiert wird. Natürlich können Sie auch die Eigenschaft entfernen, deren Hinzufügung versucht wurde, wenn Sie sie nicht benötigen.

```js example-good
"use strict";

const obj = {};
obj.x = "foo"; // add property first and only then prevent extensions

Object.preventExtensions(obj);
```

## Siehe auch

- {{jsxref("Object.preventExtensions()")}}
