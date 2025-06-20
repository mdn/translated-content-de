---
title: Proxy.revocable()
short-title: revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Proxy.revocable()`** erstellt ein widerrufbares {{jsxref("Proxy")}}-Objekt.

## Syntax

```js-nolint
Proxy.revocable(target, handler)
```

### Parameter

- `target`
  - : Ein Zielobjekt, das mit `Proxy` umschlossen werden soll. Es kann jede Art von Objekt sein, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxys.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten des `proxy` definieren, wenn eine Operation darauf ausgeführt wird.

### Rückgabewert

Ein einfaches Objekt mit den folgenden zwei Eigenschaften:

- `proxy`
  - : Ein Proxy-Objekt genau wie eines, das mit einem [`new Proxy(target, handler)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Aufruf erstellt wurde.
- `revoke`
  - : Eine Funktion ohne Parameter, um den `proxy` zu widerrufen (abzuschalten).

## Beschreibung

Die `Proxy.revocable()`-Fabrikfunktion ist identisch mit dem [`Proxy()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Konstruktor, außer dass sie zusätzlich zu einem Proxy-Objekt auch eine `revoke`-Funktion erstellt, die aufgerufen werden kann, um den Proxy zu deaktivieren. Das Proxy-Objekt und die `revoke`-Funktion sind in einem einfachen Objekt eingeschlossen.

Die `revoke`-Funktion nimmt keine Parameter entgegen und hängt auch nicht vom `this`-Wert ab. Das erstellte `proxy`-Objekt ist als [privates Attribut](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) an die `revoke`-Funktion angehängt, die darauf zugreift, wenn sie aufgerufen wird (das Vorhandensein des privaten Attributs ist von außen nicht beobachtbar, hat jedoch Auswirkungen darauf, wie die Speicherbereinigung abläuft). Das `proxy`-Objekt wird _nicht_ innerhalb des [Closures](/de/docs/Web/JavaScript/Guide/Closures) der `revoke`-Funktion eingefangen (was die Speicherbereinigung von `proxy` unmöglich machen würde, wenn `revoke` noch aktiv ist).

Nachdem die `revoke()`-Funktion aufgerufen wurde, wird der Proxy unbrauchbar: Jeder Trap zu einem Handler wirft einen {{jsxref("TypeError")}}. Sobald ein Proxy widerrufen wurde, bleibt er widerrufen, und ein weiterer Aufruf von `revoke()` hat keine Wirkung – tatsächlich trennt der Aufruf von `revoke()` das `proxy`-Objekt von der `revoke`-Funktion, sodass die `revoke`-Funktion nicht mehr in der Lage ist, erneut auf den Proxy zuzugreifen. Wenn der Proxy nicht anderweitig referenziert wird, wird er damit zur Speicherbereinigung bereit. Die `revoke`-Funktion trennt auch `target` und `handler` vom `proxy`, sodass `target`, wenn es nicht anderweitig referenziert wird, ebenfalls zur Speicherbereinigung bereitgestellt wird, auch wenn sein Proxy noch aktiv ist, da es keinen sinnvollen Weg mehr gibt, mit dem Zielobjekt zu interagieren.

Nutzer mit einem Objekt über einen widerrufbaren Proxy interagieren zu lassen, ermöglicht es Ihnen, [die Lebensdauer](/de/docs/Web/JavaScript/Guide/Memory_management) des dem Nutzer bereitgestellten Objekts zu steuern – Sie können das Objekt zur Speicherbereinigung bereitstellen, selbst wenn der Nutzer noch eine Referenz auf seinen Proxy hält.

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
