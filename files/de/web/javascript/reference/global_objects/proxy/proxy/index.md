---
title: Proxy() Konstruktor
short-title: Proxy()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Der **`Proxy()`** Konstruktor erstellt {{jsxref("Proxy")}} Objekte.

## Syntax

```js-nolint
new Proxy(target, handler)
```

> [!NOTE]
> `Proxy()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Der Versuch, ihn ohne `new` aufzurufen, erzeugt einen {{jsxref("TypeError")}}.

### Parameter

- `target`
  - : Ein Zielobjekt, das mit `Proxy` umwickelt werden soll. Es kann jede Art von Objekt sein, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxy.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten des Proxys definieren, wenn eine Operation darauf ausgeführt wird.

## Beschreibung

Verwenden Sie den `Proxy()` Konstruktor, um ein neues `Proxy`-Objekt zu erstellen. Dieser Konstruktor benötigt zwei obligatorische Argumente:

- `target` ist das Objekt, für das Sie einen Proxy erstellen möchten.
- `handler` ist das Objekt, das das benutzerdefinierte Verhalten des Proxys definiert.

Ein leerer Handler wird einen Proxy erzeugen, der sich in fast allen Punkten genau wie das Ziel verhält. Indem Sie eine beliebige Gruppe von Funktionen auf dem `handler`-Objekt definieren, können Sie bestimmte Aspekte des Verhaltens des Proxys anpassen. Zum Beispiel können Sie durch Definieren von `get()` eine angepasste Version des [Eigenschafts-Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) des Ziels bereitstellen.

### Handler-Funktionen

Dieser Abschnitt listet alle Handler-Funktionen auf, die Sie definieren können. Handler-Funktionen werden manchmal als _Traps_ bezeichnet, weil sie Aufrufe an das zugrunde liegende Zielobjekt "abfangen".

- {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
  - : Ein Trap für einen Funktionsaufruf.
- {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
  - : Ein Trap für den {{jsxref("new")}} Operator.
- {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : Ein Trap für {{jsxref("Object.defineProperty")}}.
- {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : Ein Trap für den {{jsxref("delete")}} Operator.
- {{jsxref("Proxy/Proxy/get", "handler.get()")}}
  - : Ein Trap für das Abrufen von Eigenschaftswerten.
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
  - : Ein Trap für das Setzen von Eigenschaftswerten.
- {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : Ein Trap für {{jsxref("Object.setPrototypeOf")}}.

## Beispiele

### Selektives Proxen von Eigenschafts-Accessoren

In diesem Beispiel hat das Ziel zwei Eigenschaften, `notProxied` und `proxied`. Wir definieren einen Handler, der für `proxied` einen anderen Wert zurückgibt und alle anderen Zugriffe an das Ziel weiterleitet.

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

- [Meta-Programmierung](/de/docs/Web/JavaScript/Guide/Meta_programming) Leitfaden
- {{jsxref("Reflect")}}
