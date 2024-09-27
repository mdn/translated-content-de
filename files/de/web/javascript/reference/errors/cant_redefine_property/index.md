---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "can't redefine non-configurable property" tritt auf, wenn versucht wurde, eine Eigenschaft neu zu definieren, aber diese Eigenschaft ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties).

## Nachricht

```plain
TypeError: Cannot redefine property: "x" (V8-based)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Attempting to change value of a readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, eine Eigenschaft neu zu definieren, aber diese Eigenschaft ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties). Das `configurable`-Attribut steuert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (mit Ausnahme von `writable`) geändert werden können. Normalerweise sind Eigenschaften in einem Objekt, das durch einen [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt wurde, konfigurierbar. Wenn jedoch {{jsxref("Object.defineProperty()")}} verwendet wird, ist die Eigenschaft standardmäßig nicht konfigurierbar.

## Beispiele

### Nicht konfigurierbare Eigenschaften erstellt durch Object.defineProperty

Die {{jsxref("Object.defineProperty()")}} erstellt nicht konfigurierbare Eigenschaften, wenn Sie sie nicht als konfigurierbar angegeben haben.

```js example-bad
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar" });

Object.defineProperty(obj, "foo", { value: "baz" });
// TypeError: can't redefine non-configurable property "foo"
```

Sie müssen die Eigenschaft "foo" als konfigurierbar festlegen, wenn Sie beabsichtigen, sie später im Code neu zu definieren.

```js example-good
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar", configurable: true });
Object.defineProperty(obj, "foo", { value: "baz", configurable: true });
```

## Siehe auch

- [\[\[Configurable\]\]](/de/docs/Web/JavaScript/Data_structures#properties)
- {{jsxref("Object.defineProperty()")}}
