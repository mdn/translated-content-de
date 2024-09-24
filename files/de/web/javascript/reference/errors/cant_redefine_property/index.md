---
title: "TypeError: Nicht konfigurierbare Eigenschaft \"x\" kann nicht neu definiert werden"
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "nicht konfigurierbare Eigenschaft kann nicht neu definiert werden" tritt auf, wenn versucht wurde, eine Eigenschaft neu zu definieren, die [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties) ist.

## Meldung

```plain
TypeError: Cannot redefine property: "x" (V8-based)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Attempting to change value of a readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, eine Eigenschaft neu zu definieren, aber diese Eigenschaft ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties). Das `configurable`-Attribut steuert, ob die Eigenschaft aus dem Objekt entfernt werden kann und ob ihre Attribute (außer `writable`) geändert werden können. Normalerweise sind Eigenschaften in einem durch einen [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellten Objekt konfigurierbar. Wenn jedoch z. B. {{jsxref("Object.defineProperty()")}} verwendet wird, ist die Eigenschaft standardmäßig nicht konfigurierbar.

## Beispiele

### Nicht konfigurierbare Eigenschaften, die durch Object.defineProperty erstellt wurden

Die {{jsxref("Object.defineProperty()")}} erstellt nicht konfigurierbare Eigenschaften, wenn Sie sie nicht als konfigurierbar angegeben haben.

```js example-bad
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar" });

Object.defineProperty(obj, "foo", { value: "baz" });
// TypeError: can't redefine non-configurable property "foo"
```

Sie müssen die Eigenschaft "foo" auf konfigurierbar setzen, wenn Sie beabsichtigen, sie später im Code neu zu definieren.

```js example-good
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar", configurable: true });
Object.defineProperty(obj, "foo", { value: "baz", configurable: true });
```

## Siehe auch

- [\[\[Configurable\]\]](/de/docs/Web/JavaScript/Data_structures#properties)
- {{jsxref("Object.defineProperty()")}}
