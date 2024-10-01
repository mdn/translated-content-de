---
title: 'TypeError: kann nicht konfigurierbare Eigenschaft "x" neu definieren'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "kann nicht konfigurierbare Eigenschaft neu definieren" tritt auf, wenn versucht wurde, eine Eigenschaft neu zu definieren, die [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties) ist.

## Meldung

```plain
TypeError: Cannot redefine property: "x" (V8-based)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Attempting to change value of a readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, eine Eigenschaft neu zu definieren, die [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties) ist. Das `configurable`-Attribut steuert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (außer `writable`) geändert werden können. Normalerweise sind Eigenschaften in einem Objekt, das mit einem [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt wurde, konfigurierbar. Wenn jedoch zum Beispiel {{jsxref("Object.defineProperty()")}} verwendet wird, ist die Eigenschaft standardmäßig nicht konfigurierbar.

## Beispiele

### Nicht konfigurierbare Eigenschaften, erstellt mit Object.defineProperty

Die {{jsxref("Object.defineProperty()")}}-Methode erstellt nicht konfigurierbare Eigenschaften, wenn Sie diese nicht als konfigurierbar festgelegt haben.

```js example-bad
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar" });

Object.defineProperty(obj, "foo", { value: "baz" });
// TypeError: can't redefine non-configurable property "foo"
```

Sie müssen die "foo"-Eigenschaft auf konfigurierbar setzen, wenn Sie beabsichtigen, sie später im Code neu zu definieren.

```js example-good
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar", configurable: true });
Object.defineProperty(obj, "foo", { value: "baz", configurable: true });
```

## Siehe auch

- [\[\[Konfigurierbar\]\]](/de/docs/Web/JavaScript/Data_structures#properties)
- {{jsxref("Object.defineProperty()")}}
