---
title: Proxy.revocable()
short-title: revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Proxy.revocable()`** erstellt ein widerrufbares {{jsxref("Proxy")}}-Objekt.

## Syntax

```js-nolint
Proxy.revocable(target, handler)
```

### Parameter

- `target`
  - : Ein Zielobjekt, das mit `Proxy` umschlossen wird. Es kann sich um jede Art von Objekt handeln, einschließlich eines nativen Arrays, einer Funktion, oder sogar eines weiteren Proxys.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten des `proxy` definieren, wenn eine Operation darauf ausgeführt wird.

### Rückgabewert

Ein einfaches Objekt mit den folgenden zwei Eigenschaften:

- `proxy`
  - : Ein Proxy-Objekt, das genau dem entspricht, welches mit einem [`new Proxy(target, handler)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Aufruf erstellt wurde.
- `revoke`
  - : Eine Funktion ohne Parameter, um den `proxy` zu widerrufen (deaktivieren).

## Beschreibung

Die `Proxy.revocable()`-Fabrikfunktion ist die gleiche wie der [`Proxy()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Konstruktor, außer dass sie zusätzlich zur Erstellung eines Proxy-Objekts auch eine `revoke`-Funktion erstellt, die aufgerufen werden kann, um den Proxy zu deaktivieren. Das Proxy-Objekt und die `revoke`-Funktion sind in einem einfachen Objekt eingebettet.

Die `revoke`-Funktion nimmt keine Parameter entgegen und hängt auch nicht vom Wert `this` ab. Das erstellte `proxy`-Objekt wird der `revoke`-Funktion als [privates Feld](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) angehängt, auf das die `revoke`-Funktion bei ihrem Aufruf zugreift (das Vorhandensein des privaten Feldes ist von außen nicht beobachtbar, hat jedoch Auswirkungen darauf, wie die Speicherbereinigung geschieht). Das `proxy`-Objekt wird _nicht_ innerhalb der [Schließung](/de/docs/Web/JavaScript/Guide/Closures) der `revoke`-Funktion erfasst (was die Speicherbereinigung von `proxy` unmöglich machen würde, wenn `revoke` noch existiert).

Nachdem die `revoke()`-Funktion aufgerufen wird, wird der Proxy unbrauchbar: Jede Falle für einen Handler wirft einen {{jsxref("TypeError")}}. Sobald ein Proxy widerrufen wurde, bleibt er widerrufen, und ein erneuter Aufruf von `revoke()` hat keine Wirkung — tatsächlich trennt der Aufruf von `revoke()` das `proxy`-Objekt von der `revoke`-Funktion, sodass die `revoke`-Funktion nicht mehr auf den Proxy zugreifen kann. Wenn der Proxy nicht anderweitig referenziert wird, wird er dann der Speicherbereinigung zugänglich. Die `revoke`-Funktion trennt auch `target` und `handler` vom `proxy`, sodass, wenn `target` nicht anderweitig referenziert wird, es auch der Speicherbereinigung zugänglich wird, selbst wenn sein Proxy noch existiert, da es keine Möglichkeit mehr gibt, mit dem Zielobjekt sinnvoll zu interagieren.

Wenn Benutzer mit einem Objekt über einen widerrufbaren Proxy interagieren, können Sie [die Lebensdauer kontrollieren](/de/docs/Web/JavaScript/Guide/Memory_management) des dem Benutzer zugänglichen Objekts — Sie können das Objekt speicherbereinigbar machen, selbst wenn der Benutzer noch eine Referenz auf dessen Proxy hält.

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
