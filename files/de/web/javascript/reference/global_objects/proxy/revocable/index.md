---
title: Proxy.revocable()
short-title: revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{JSRef}}

Die statische Methode **`Proxy.revocable()`** erzeugt ein widerrufbares {{jsxref("Proxy")}}-Objekt.

## Syntax

```js-nolint
Proxy.revocable(target, handler)
```

### Parameter

- `target`
  - : Ein Zielobjekt, das mit `Proxy` umhüllt werden soll. Es kann sich um ein beliebiges Objekt handeln, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxys.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten des `proxy` definieren, wenn eine Operation darauf ausgeführt wird.

### Rückgabewert

Ein einfaches Objekt mit den folgenden zwei Eigenschaften:

- `proxy`
  - : Ein Proxy-Objekt, das genau dem entspricht, das mit einem [`new Proxy(target, handler)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Aufruf erstellt wurde.
- `revoke`
  - : Eine parameterlose Funktion, die den `proxy` widerruft (deaktiviert).

## Beschreibung

Die `Proxy.revocable()`-Fabrikfunktion ist identisch mit dem [`Proxy()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Konstruktor, außer dass sie zusätzlich zu einem Proxy-Objekt eine `revoke`-Funktion erstellt, die aufgerufen werden kann, um den Proxy zu deaktivieren. Das Proxy-Objekt und die `revoke`-Funktion sind in einem einfachen Objekt gekapselt.

Die `revoke`-Funktion nimmt keine Parameter entgegen und ist nicht von dem `this`-Wert abhängig. Das erstellte `proxy`-Objekt ist als [privates Feld](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) an die `revoke`-Funktion gebunden, auf das diese beim Aufruf zugreift (die Existenz des privaten Feldes ist von außen nicht erkennbar, hat jedoch Auswirkungen auf die Durchführung der Speicherbereinigung). Das `proxy`-Objekt ist _nicht_ innerhalb des [Closures](/de/docs/Web/JavaScript/Guide/Closures) der `revoke`-Funktion erfasst (was die Speicherbereinigung des `proxy` unmöglich machen würde, falls `revoke` noch existiert).

Nachdem die `revoke()`-Funktion aufgerufen wurde, wird der Proxy unbrauchbar: Jeder Trap zu einem Handler löst einen {{jsxref("TypeError")}} aus. Sobald ein Proxy widerrufen wird, bleibt er widerrufen, und ein erneuter Aufruf von `revoke()` hat keine Wirkung - tatsächlich trennt der Aufruf von `revoke()` das `proxy`-Objekt von der `revoke`-Funktion, sodass die `revoke`-Funktion den Proxy überhaupt nicht mehr zugreifen kann. Wenn der Proxy nicht anderswo referenziert wird, ist er dann für die Speicherbereinigung geeignet. Die `revoke`-Funktion trennt auch `target` und `handler` vom `proxy`, sodass, wenn `target` nicht anderswo referenziert wird, es ebenfalls zur Speicherbereinigung in Frage kommt, selbst wenn sein Proxy noch existiert, da es keine Möglichkeit mehr gibt, mit dem Zielobjekt sinnvoll zu interagieren.

Benutzern zu erlauben, über einen widerrufbaren Proxy mit einem Objekt zu interagieren, ermöglicht es Ihnen, [die Lebensdauer zu kontrollieren](/de/docs/Web/JavaScript/Guide/Memory_management) des dem Benutzer zur Verfügung gestellten Objekts — Sie können das Objekt speicherbereinigbar machen, selbst wenn der Benutzer noch eine Referenz auf seinen Proxy hält.

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
