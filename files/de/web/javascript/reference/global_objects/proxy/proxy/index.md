---
title: Proxy()-Konstruktor
short-title: Proxy()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`Proxy()`**-Konstruktor erzeugt {{jsxref("Proxy")}}-Objekte.

## Syntax

```js-nolint
new Proxy(target, handler)
```

> **Note:** `Proxy()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `target`
  - : Ein Zielobjekt, das mit `Proxy` umschlossen werden soll. Es kann sich um jede Art von Objekt handeln, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxy.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten des Proxy definieren, wenn eine Operation darauf ausgeführt wird.

## Beschreibung

Verwenden Sie den `Proxy()`-Konstruktor, um ein neues `Proxy`-Objekt zu erstellen. Dieser Konstruktor benötigt zwei obligatorische Argumente:

- `target` ist das Objekt, für das Sie den Proxy erstellen möchten
- `handler` ist das Objekt, das das benutzerdefinierte Verhalten des Proxy definiert.

Ein leerer Handler erstellt einen Proxy, der sich in fast allen Aspekten genau wie das Ziel verhält. Durch das Definieren einer Gruppe von Funktionen auf dem `handler`-Objekt können Sie bestimmte Aspekte des Proxy-Verhaltens anpassen. Zum Beispiel, durch das Definieren von `get()` können Sie eine angepasste Version des [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) des Ziels bereitstellen.

### Handler-Funktionen

Dieser Abschnitt listet alle Handler-Funktionen auf, die Sie definieren können. Handler-Funktionen werden manchmal als _Traps_ bezeichnet, weil sie Aufrufe des zugrunde liegenden Zielobjekts abfangen.

- {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
  - : Ein Trap für einen Funktionsaufruf.
- {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
  - : Ein Trap für den {{jsxref("Operators/new", "new")}}-Operator.
- {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : Ein Trap für {{jsxref("Object.defineProperty")}}.
- {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : Ein Trap für den {{jsxref("Operators/delete", "delete")}}-Operator.
- {{jsxref("Proxy/Proxy/get", "handler.get()")}}
  - : Ein Trap für das Abrufen von Eigenschaftswerten.
- {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : Ein Trap für {{jsxref("Object.getOwnPropertyDescriptor")}}.
- {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : Ein Trap für {{jsxref("Object.getPrototypeOf")}}.
- {{jsxref("Proxy/Proxy/has", "handler.has()")}}
  - : Ein Trap für den {{jsxref("Operators/in", "in")}}-Operator.
- {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : Ein Trap für {{jsxref("Object.isExtensible")}}.
- {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : Ein Trap für {{jsxref("Object.getOwnPropertyNames")}} und
    {{jsxref("Object.getOwnPropertySymbols")}}.
- {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
  - : Ein Trap für {{jsxref("Object.preventExtensions")}}.
- {{jsxref("Proxy/Proxy/set", "handler.set()")}}
  - : Ein Trap für das Festlegen von Eigenschaftswerten.
- {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : Ein Trap für {{jsxref("Object.setPrototypeOf")}}.

## Beispiele

### Selektives Proxieren von Property-Accessoren

In diesem Beispiel hat das Ziel zwei Eigenschaften, `notProxied` und `proxied`. Wir definieren einen Handler, der einen anderen Wert für `proxied` zurückgibt und alle anderen Zugriffe auf das Ziel durchlässt.

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

- [Meta-Programmierung](/de/docs/Web/JavaScript/Guide/Meta_programming)-Leitfaden
- {{jsxref("Reflect")}}
