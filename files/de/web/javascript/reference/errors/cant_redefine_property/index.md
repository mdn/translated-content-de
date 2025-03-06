---
title: 'TypeError: kann die nicht konfigurierbare Eigenschaft "x" nicht neu definieren'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "kann die nicht konfigurierbare Eigenschaft nicht neu definieren" tritt auf, wenn versucht wurde, eine Eigenschaft neu zu definieren, die [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties) ist.

## Meldung

```plain
TypeError: Cannot redefine property: "x" (V8-based)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Attempting to change value of a readonly property. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, eine Eigenschaft neu zu definieren, die [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties) ist. Das `configurable`-Attribut steuert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (außer `writable`) geändert werden können. Normalerweise sind Eigenschaften in einem Objekt, das durch einen [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt wurde, konfigurierbar. Wenn jedoch beispielsweise {{jsxref("Object.defineProperty()")}} verwendet wird, ist die Eigenschaft standardmäßig nicht konfigurierbar.

## Beispiele

### Nicht konfigurierbare Eigenschaften, die durch Object.defineProperty erstellt wurden

Die {{jsxref("Object.defineProperty()")}}-Methode erstellt nicht konfigurierbare Eigenschaften, wenn Sie sie nicht als konfigurierbar angegeben haben.

```js example-bad
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar" });

Object.defineProperty(obj, "foo", { value: "baz" });
// TypeError: can't redefine non-configurable property "foo"
```

Sie müssen die Eigenschaft "foo" als konfigurierbar setzen, wenn Sie beabsichtigen, sie später im Code neu zu definieren.

```js example-good
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar", configurable: true });
Object.defineProperty(obj, "foo", { value: "baz", configurable: true });
```

## Siehe auch

- [\[\[Configurable\]\]](/de/docs/Web/JavaScript/Guide/Data_structures#properties)
- {{jsxref("Object.defineProperty()")}}
