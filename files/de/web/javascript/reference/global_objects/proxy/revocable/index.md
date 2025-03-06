---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die statische Methode **`Proxy.revocable()`** erstellt ein widerrufbares {{jsxref("Proxy")}}-Objekt.

## Syntax

```js-nolint
Proxy.revocable(target, handler)
```

### Parameter

- `target`
  - : Ein Zielobjekt, das mit `Proxy` umwickelt werden soll. Es kann sich um eine beliebige Art von Objekt handeln, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxys.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten von `proxy` definieren, wenn eine Operation darauf ausgeführt wird.

### Rückgabewert

Ein einfaches Objekt mit den folgenden beiden Eigenschaften:

- `proxy`
  - : Ein Proxy-Objekt, das genau das gleiche ist wie eines, das mit einem [`new Proxy(target, handler)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Aufruf erstellt wurde.
- `revoke`
  - : Eine parameterlose Funktion, um den `proxy` zu widerrufen (ausschalten).

## Beschreibung

Die `Proxy.revocable()` Fabrikfunktion ist identisch mit dem [`Proxy()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Konstruktor, außer dass sie zusätzlich zur Erstellung eines Proxy-Objekts auch eine `revoke` Funktion erstellt, die aufgerufen werden kann, um den Proxy zu deaktivieren. Das Proxy-Objekt und die `revoke` Funktion sind in einem einfachen Objekt eingeschlossen.

Die `revoke` Funktion nimmt keine Parameter entgegen und beruht nicht auf dem `this`-Wert. Das erstellte `proxy`-Objekt ist als [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) an die `revoke` Funktion gebunden, auf die die `revoke` Funktion beim Aufruf zugreift (das Vorhandensein der privaten Eigenschaft ist von außen nicht beobachtbar, hat jedoch Auswirkungen darauf, wie die Speicherbereinigung erfolgt). Das `proxy`-Objekt wird _nicht_ innerhalb der [closure](/de/docs/Web/JavaScript/Guide/Closures) der `revoke` Funktion erfasst (was die Speicherbereinigung von `proxy` unmöglich macht, wenn `revoke` noch existiert).

Nachdem die `revoke()` Funktion aufgerufen wurde, wird der Proxy unbrauchbar: Jeder Zugriff auf einen `handler` löst einen {{jsxref("TypeError")}} aus. Sobald ein Proxy widerrufen wurde, bleibt er widerrufen, und ein erneuter Aufruf von `revoke()` hat keine Wirkung — tatsächlich trennt der Aufruf von `revoke()` das Proxy-Objekt von der `revoke` Funktion, sodass die `revoke` Funktion den Proxy überhaupt nicht mehr erreichen kann. Falls der Proxy anderswo nicht referenziert wird, ist er dann zur Speicherbereinigung berechtigt. Die `revoke` Funktion trennt auch `target` und `handler` vom Proxy, sodass wenn `target` sonst nirgends referenziert wird, es ebenfalls für die Speicherbereinigung berechtigt ist, selbst wenn der Proxy noch aktiv ist, da es keine Möglichkeit mehr gibt, sinnvoll mit dem Zielobjekt zu interagieren.

Die Interaktion mit einem Objekt über einen widerrufbaren Proxy ermöglicht es Ihnen, [die Lebensdauer](/de/docs/Web/JavaScript/Guide/Memory_management) des dem Benutzer exponierten Objekts zu kontrollieren — Sie können das Objekt speicherbereinigbar machen, auch wenn der Benutzer immer noch eine Referenz auf dessen Proxy hat.

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
