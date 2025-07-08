---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "can't redefine non-configurable property" tritt auf, wenn versucht wurde, eine Eigenschaft neu zu definieren, aber diese Eigenschaft ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties).

## Meldung

```plain
TypeError: Cannot redefine property: "x" (V8-based)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Attempting to change value of a readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, eine Eigenschaft neu zu definieren, aber diese Eigenschaft ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties). Das `configurable`-Attribut steuert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (außer `writable`) geändert werden können. Normalerweise sind Eigenschaften in einem durch einen [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellten Objekt konfigurierbar. Wenn jedoch z. B. {{jsxref("Object.defineProperty()")}} verwendet wird, ist die Eigenschaft standardmäßig nicht konfigurierbar.

## Beispiele

### Nicht-konfigurierbare Eigenschaften erstellt durch Object.defineProperty

Die {{jsxref("Object.defineProperty()")}} erstellt nicht-konfigurierbare Eigenschaften, wenn Sie sie nicht als konfigurierbar angegeben haben.

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

- [\[\[Configurable\]\]](/de/docs/Web/JavaScript/Guide/Data_structures#properties)
- {{jsxref("Object.defineProperty()")}}
