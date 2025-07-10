---
title: Proxy() Konstruktor
short-title: Proxy()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Proxy()`** Konstruktor erstellt {{jsxref("Proxy")}} Objekte.

## Syntax

```js-nolint
new Proxy(target, handler)
```

> [!NOTE]
> `Proxy()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `target`
  - : Ein Zielobjekt, das mit `Proxy` umwickelt werden soll. Es kann sich um jede Art von Objekt handeln, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxys.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten des Proxys definieren, wenn eine Operation darauf ausgeführt wird.

## Beschreibung

Verwenden Sie den `Proxy()` Konstruktor, um ein neues `Proxy` Objekt zu erstellen.
Dieser Konstruktor benötigt zwei zwingende Argumente:

- `target` ist das Objekt, für das Sie den Proxy erstellen möchten
- `handler` ist das Objekt, das das benutzerdefinierte Verhalten des Proxys definiert.

Ein leerer Handler erstellt einen Proxy, der sich in fast allen Aspekten genau wie das Ziel verhält. Durch die Definition einer bestimmten Gruppe von Funktionen auf dem `handler`-Objekt können Sie spezifische Aspekte des Verhaltens des Proxys anpassen. Zum Beispiel können Sie durch die Definition von `get()` eine benutzerdefinierte Version des Zielobjekts [property accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) bereitstellen.

### Handler-Funktionen

In diesem Abschnitt sind alle Handler-Funktionen aufgelistet, die Sie definieren können. Handler-Funktionen werden manchmal als _traps_ bezeichnet, weil sie Aufrufe zum zugrunde liegenden Zielobjekt abfangen.

- {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
  - : Eine Trap für einen Funktionsaufruf.
- {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
  - : Eine Trap für den {{jsxref("Operators/new", "new")}} Operator.
- {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : Eine Trap für {{jsxref("Object.defineProperty")}}.
- {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : Eine Trap für den {{jsxref("Operators/delete", "delete")}} Operator.
- {{jsxref("Proxy/Proxy/get", "handler.get()")}}
  - : Eine Trap für das Abrufen von Eigenschaftswerten.
- {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : Eine Trap für {{jsxref("Object.getOwnPropertyDescriptor")}}.
- {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : Eine Trap für {{jsxref("Object.getPrototypeOf")}}.
- {{jsxref("Proxy/Proxy/has", "handler.has()")}}
  - : Eine Trap für den {{jsxref("Operators/in", "in")}} Operator.
- {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : Eine Trap für {{jsxref("Object.isExtensible")}}.
- {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : Eine Trap für {{jsxref("Object.getOwnPropertyNames")}} und
    {{jsxref("Object.getOwnPropertySymbols")}}.
- {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
  - : Eine Trap für {{jsxref("Object.preventExtensions")}}.
- {{jsxref("Proxy/Proxy/set", "handler.set()")}}
  - : Eine Trap für das Setzen von Eigenschaftswerten.
- {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : Eine Trap für {{jsxref("Object.setPrototypeOf")}}.

## Beispiele

### Selektives Proxieren von Property Accessors

In diesem Beispiel hat das Ziel zwei Eigenschaften, `notProxied` und `proxied`. Wir definieren einen Handler, der einen anderen Wert für `proxied` zurückgibt und alle anderen Zugriffe zum Ziel durchlässt.

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
