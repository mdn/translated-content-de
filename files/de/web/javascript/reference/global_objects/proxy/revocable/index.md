---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{JSRef}}

Die statische Methode **`Proxy.revocable()`** erstellt ein widerrufbares {{jsxref("Proxy")}}-Objekt.

## Syntax

```js-nolint
Proxy.revocable(target, handler)
```

### Parameter

- `target`
  - : Ein Zielobjekt, das mit einem `Proxy` umhüllt werden soll. Es kann sich um jede Art von Objekt handeln, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxys.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten von `proxy` definieren, wenn eine Operation darauf ausgeführt wird.

### Rückgabewert

Ein einfaches Objekt mit den folgenden zwei Eigenschaften:

- `proxy`
  - : Ein Proxy-Objekt, das genau dasselbe ist wie eines, das mit einem [`new Proxy(target, handler)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Aufruf erstellt wurde.
- `revoke`
  - : Eine Funktion ohne Parameter, um den `proxy` zu widerrufen (abzuschalten).

## Beschreibung

Die Fabrikfunktion `Proxy.revocable()` ist die gleiche wie der [`Proxy()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Konstruktor, außer dass sie zusätzlich zu einem Proxy-Objekt auch eine `revoke`-Funktion erstellt, die aufgerufen werden kann, um den Proxy zu deaktivieren. Das Proxy-Objekt und die `revoke`-Funktion sind in ein einfaches Objekt eingebettet.

Die `revoke`-Funktion nimmt keine Parameter entgegen und hängt auch nicht vom `this`-Wert ab. Das erstellte `proxy`-Objekt ist an die `revoke`-Funktion als [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) angehängt, auf die die `revoke`-Funktion bei seinem Aufruf zugreift (die Existenz der privaten Eigenschaft ist von außen nicht beobachtbar, hat aber Auswirkungen darauf, wie die Speicherbereinigung erfolgt). Das `proxy`-Objekt wird _nicht_ innerhalb der [Closure](/de/docs/Web/JavaScript/Closures) der `revoke`-Funktion erfasst (was die Speicherbereinigung von `proxy` unmöglich macht, wenn `revoke` noch aktiv ist).

Nachdem die `revoke()`-Funktion aufgerufen wurde, wird der Proxy unbrauchbar: Jeder Fang zu einem Handler löst einen {{jsxref("TypeError")}} aus. Sobald ein Proxy widerrufen wurde, bleibt er widerrufen, und ein erneuter Aufruf von `revoke()` hat keine Wirkung — tatsächlich löst der Aufruf von `revoke()` das `proxy`-Objekt von der `revoke`-Funktion, sodass die `revoke`-Funktion nicht mehr auf den Proxy zugreifen kann. Wenn der Proxy nicht anderswo referenziert wird, ist er anschließend für die Speicherbereinigung berechtigt. Die `revoke`-Funktion trennt auch `target` und `handler` vom `proxy`, sodass, wenn `target` nicht anderswo referenziert wird, es auch für die Speicherbereinigung berechtigt ist, selbst wenn sein Proxy noch aktiv ist, da es keine Möglichkeit mehr gibt, sinnvoll mit dem Zielobjekt zu interagieren.

Benutzern die Interaktion mit einem Objekt durch einen widerrufbaren Proxy zu ermöglichen, erlaubt es Ihnen, die [Lebensdauer des Objekts](/de/docs/Web/JavaScript/Memory_management) zu steuern, das dem Benutzer ausgesetzt wird — Sie können das Objekt für die Speicherbereinigung freigeben, selbst wenn der Benutzer noch eine Referenz auf seinen Proxy hält.

## Beispiele

### Verwendung von Proxy.revocable()

```js
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError is thrown
proxy.foo = 1; // TypeError again
delete proxy.foo; // still TypeError
typeof proxy; // "object", typeof doesn't trigger any trap
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
