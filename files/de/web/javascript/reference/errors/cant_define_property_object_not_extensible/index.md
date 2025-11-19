---
title: 'TypeError: Kann Eigenschaft "x" nicht definieren: "obj" ist nicht erweiterbar'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
l10n:
  sourceCommit: 5879188d5faa75de461c22298db2400f0965e5a1
---

Das JavaScript-Ausnahme "Kann Eigenschaft "x" nicht definieren: "obj" ist nicht erweiterbar" tritt auf, wenn ein Objekt als nicht erweiterbar markiert ist, sodass es niemals andere Eigenschaften haben wird als die, die es zum Zeitpunkt des Markierens als nicht erweiterbar hatte. Objekte können durch Aufrufen von {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}} oder {{jsxref("Object.freeze()")}} nicht erweiterbar gemacht werden.

## Meldung

```plain
TypeError: Cannot add property x, object is not extensible (V8-based)
TypeError: Cannot define property x, object is not extensible (V8-based)
TypeError: can't define property "x": Object is not extensible (Firefox)
TypeError: Attempting to define property on object that is not extensible. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Normalerweise ist ein Objekt erweiterbar und es können ihm neue Eigenschaften hinzugefügt werden. In diesem Fall ist das Objekt jedoch nicht erweiterbar, sodass es niemals andere Eigenschaften haben wird als die, die es zum Zeitpunkt des Markierens als nicht erweiterbar hatte. Sie könnten das Objekt als nicht erweiterbar markiert haben, indem Sie {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, oder {{jsxref("Object.freeze()")}} aufgerufen haben oder eine von Ihnen verwendete Bibliothek könnte das für Sie getan haben.

## Beispiele

### Hinzufügen neuer Eigenschaften zu nicht erweiterbaren Objekten

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Versuch, nicht erweiterbaren Objekten neue Eigenschaften über die Zuweisung hinzuzufügen, zu einem `TypeError`. Im schlampigen Modus wird das Hinzufügen der Eigenschaft "x" stillschweigend ignoriert.

```js example-bad
"use strict";

const obj = {};
Object.preventExtensions(obj);

obj.x = "foo";
// TypeError: can't define property "x": Object is not extensible
```

In sowohl [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) als auch im schlampigen Modus führt ein Aufruf von {{jsxref("Object.defineProperty()")}} zu einem Fehler, wenn eine neue Eigenschaft zu einem nicht erweiterbaren Objekt hinzugefügt wird.

```js example-bad
const obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "foo" });
// TypeError: can't define property "x": Object is not extensible
```

### Nicht erweiterbare Objekte, die auf andere Weise erstellt wurden

Die Methoden `Object.seal()` und `Object.freeze()` erstellen ebenfalls nicht erweiterbare Objekte – sie haben nur zusätzliche Einschränkungen beim Ändern bestehender Eigenschaften.

```js example-bad
"use strict";

const obj = { y: "bar" };
Object.seal(obj);
obj.x = "foo";
// TypeError: can't define property "x": Object is not extensible
```

### Behebung des Fehlers

Es gibt drei Möglichkeiten, diesen Fehler zu beheben: Sie können das Hinzufügen der Eigenschaft komplett entfernen, wenn Sie sie nicht benötigen, Sie können die vorhandenen Eigenschaften auf ein neues erweiterbares Objekt kopieren oder Sie können die Eigenschaft hinzufügen, bevor Sie das Objekt als nicht erweiterbar machen.

```js example-good
"use strict";

const obj = {};
obj.x = "foo"; // add property first and only then prevent extensions

Object.preventExtensions(obj);
```

## Siehe auch

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.freeze()")}}
