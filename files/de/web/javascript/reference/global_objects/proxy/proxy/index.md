---
title: Proxy() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Der **`Proxy()`** Konstruktor erstellt {{jsxref("Proxy")}} Objekte.

## Syntax

```js-nolint
new Proxy(target, handler)
```

> **Note:** `Proxy()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `target`
  - : Ein Zielobjekt, das mit `Proxy` umwickelt werden soll. Es kann sich um jede Art von Objekt handeln, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxys.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten des Proxys bestimmen, wenn eine Operation darauf ausgeführt wird.

## Beschreibung

Verwenden Sie den `Proxy()` Konstruktor, um ein neues `Proxy` Objekt zu erstellen. Dieser Konstruktor nimmt zwei obligatorische Argumente entgegen:

- `target` ist das Objekt, für das Sie den Proxy erstellen möchten.
- `handler` ist das Objekt, das das benutzerdefinierte Verhalten des Proxys definiert.

Ein leerer Handler erstellt einen Proxy, der sich in fast allen Aspekten genauso verhält wie das Ziel. Indem Sie eine beliebige Gruppe von Funktionen auf dem `handler`-Objekt definieren, können Sie bestimmte Aspekte des Proxy-Verhaltens anpassen. Zum Beispiel können Sie durch die Definition von `get()` eine angepasste Version des [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) des Ziels bereitstellen.

### Handler-Funktionen

In diesem Abschnitt werden alle Handler-Funktionen aufgelistet, die Sie definieren können. Handler-Funktionen werden manchmal als _Traps_ bezeichnet, weil sie Aufrufe an das zugrundeliegende Zielobjekt abfangen.

- {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
  - : Ein Trap für einen Funktionsaufruf.
- {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
  - : Ein Trap für den {{jsxref("Operators/new", "new")}} Operator.
- {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : Ein Trap für {{jsxref("Object.defineProperty")}}.
- {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : Ein Trap für den {{jsxref("Operators/delete", "delete")}} Operator.
- {{jsxref("Proxy/Proxy/get", "handler.get()")}}
  - : Ein Trap zum Abrufen von Eigenschaftswerten.
- {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : Ein Trap für {{jsxref("Object.getOwnPropertyDescriptor")}}.
- {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : Ein Trap für {{jsxref("Object.getPrototypeOf")}}.
- {{jsxref("Proxy/Proxy/has", "handler.has()")}}
  - : Ein Trap für den {{jsxref("Operators/in", "in")}} Operator.
- {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : Ein Trap für {{jsxref("Object.isExtensible")}}.
- {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : Ein Trap für {{jsxref("Object.getOwnPropertyNames")}} und
    {{jsxref("Object.getOwnPropertySymbols")}}.
- {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
  - : Ein Trap für {{jsxref("Object.preventExtensions")}}.
- {{jsxref("Proxy/Proxy/set", "handler.set()")}}
  - : Ein Trap zum Setzen von Eigenschaftswerten.
- {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : Ein Trap für {{jsxref("Object.setPrototypeOf")}}.

## Beispiele

### Selektives Proxen von Property-Accessoren

In diesem Beispiel hat das Ziel zwei Eigenschaften: `notProxied` und `proxied`. Wir definieren einen Handler, der für `proxied` einen anderen Wert zurückgibt und alle anderen Zugriffe zum Ziel durchlässt.

```js
const target = {
  notProxied: "original value",
  proxied: "original value",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied); // "replaced value"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Metaprogrammierung](/de/docs/Web/JavaScript/Guide/Meta_programming) Leitfaden
- {{jsxref("Reflect")}}
