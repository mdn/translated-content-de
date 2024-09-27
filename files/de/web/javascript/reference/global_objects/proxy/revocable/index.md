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
  - : Ein Zielobjekt, das mit `Proxy` umwickelt wird. Es kann sich um jegliche Art von Objekt handeln, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxys.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten des `proxy` definieren, wenn eine Operation darauf ausgeführt wird.

### Rückgabewert

Ein einfaches Objekt mit den folgenden zwei Eigenschaften:

- `proxy`
  - : Ein Proxy-Objekt, das genau das gleiche ist wie eines, das mit einem Aufruf von [`new Proxy(target, handler)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) erstellt wurde.
- `revoke`
  - : Eine Funktion ohne Parameter, um den `proxy` zu widerrufen (deaktivieren).

## Beschreibung

Die Fabrikfunktion `Proxy.revocable()` ist die gleiche wie der [`Proxy()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Konstruktor, mit dem Unterschied, dass zusätzlich zum Erstellen eines Proxy-Objekts auch eine `revoke`-Funktion erstellt wird, die aufgerufen werden kann, um den Proxy zu deaktivieren. Das Proxy-Objekt und die `revoke`-Funktion sind in einem einfachen Objekt verpackt.

Die `revoke`-Funktion nimmt keine Parameter entgegen und verlässt sich nicht auf den `this`-Wert. Das erstellte `proxy`-Objekt ist an die `revoke`-Funktion als [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) angehängt, auf die die `revoke`-Funktion beim Aufruf zugreift (das Vorhandensein der privaten Eigenschaft ist von außen nicht sichtbar, aber es hat Auswirkungen darauf, wie die Speicherbereinigung stattfindet). Das `proxy`-Objekt wird _nicht_ innerhalb des [Closures](/de/docs/Web/JavaScript/Closures) der `revoke`-Funktion erfasst (was die Speicherbereinigung des `proxy` unmöglich machen würde, wenn `revoke` noch existiert).

Nachdem die `revoke()`-Funktion aufgerufen wird, wird der Proxy unbrauchbar: Jeder Versuch, einen Handler zu verwenden, wirft einen {{jsxref("TypeError")}}. Sobald ein Proxy widerrufen wird, bleibt er widerrufen, und ein erneuter Aufruf von `revoke()` hat keinen Effekt — tatsächlich trennt der Aufruf von `revoke()` das `proxy`-Objekt von der `revoke`-Funktion, sodass die `revoke`-Funktion nicht mehr in der Lage ist, auf den Proxy zuzugreifen. Wenn der Proxy nicht anderswo referenziert wird, wird er für die Speicherbereinigung infrage kommen. Die `revoke`-Funktion trennt auch `target` und `handler` vom `proxy`, sodass `target` ebenfalls für die Speicherbereinigung infrage kommt, wenn es nicht anderswo referenziert wird, selbst wenn sein Proxy noch existiert, da es keine Möglichkeit mehr gibt, mit dem Zielobjekt auf sinnvolle Weise zu interagieren.

Das Zulassen, dass Benutzer über einen widerrufbaren Proxy mit einem Objekt interagieren, ermöglicht es Ihnen, [die Lebensdauer](/de/docs/Web/JavaScript/Memory_management) des dem Benutzer bereitgestellten Objekts zu kontrollieren – Sie können das Objekt sogar dann für die Speicherbereinigung freigeben, wenn der Benutzer noch eine Referenz auf seinen Proxy hat.

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
