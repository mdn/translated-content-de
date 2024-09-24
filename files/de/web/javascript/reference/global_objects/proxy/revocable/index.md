---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{JSRef}}

Die **`Proxy.revocable()`** statische Methode erstellt ein widerrufbares {{jsxref("Proxy")}}-Objekt.

## Syntax

```js-nolint
Proxy.revocable(target, handler)
```

### Parameter

- `target`
  - : Ein Zielobjekt, das mit `Proxy` umschlossen werden soll. Es kann jegliche Art von Objekt sein, einschließlich eines nativen Arrays, einer Funktion oder sogar eines anderen Proxys.
- `handler`
  - : Ein Objekt, dessen Eigenschaften Funktionen sind, die das Verhalten des `proxy` definieren, wenn eine Operation darauf ausgeführt wird.

### Rückgabewert

Ein einfaches Objekt mit den folgenden zwei Eigenschaften:

- `proxy`
  - : Ein Proxy-Objekt, genau wie eines, das mit einem [`new Proxy(target, handler)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) Aufruf erstellt wurde.
- `revoke`
  - : Eine Funktion ohne Parameter, um den `proxy` zu widerrufen (abzuschalten).

## Beschreibung

Die `Proxy.revocable()` Fabrikfunktion ist dieselbe wie der [`Proxy()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)-Konstruktor, außer dass sie zusätzlich zum Erstellen eines Proxy-Objekts auch eine `revoke`-Funktion erstellt, die aufgerufen werden kann, um den Proxy zu deaktivieren. Das Proxy-Objekt und die `revoke`-Funktion sind in ein einfaches Objekt eingeschlossen.

Die `revoke`-Funktion nimmt keine Parameter an und ist nicht auf den `this`-Wert angewiesen. Das erstellte `proxy`-Objekt ist über eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) an die `revoke`-Funktion gebunden, auf die die `revoke`-Funktion zugreift, wenn sie aufgerufen wird (das Vorhandensein der privaten Eigenschaft ist von außen nicht beobachtbar, hat jedoch Auswirkungen darauf, wie die Speicherbereinigung erfolgt). Das `proxy`-Objekt wird _nicht_ innerhalb der [Closure](/de/docs/Web/JavaScript/Closures) der `revoke`-Funktion erfasst (was die Speicherbereinigung des `proxy` unmöglich machen würde, wenn `revoke` noch vorhanden ist).

Nachdem die `revoke()`-Funktion aufgerufen wurde, wird der Proxy unbrauchbar: Jegliche Falle zu einem Handler wirft einen {{jsxref("TypeError")}}. Sobald ein Proxy widerrufen wird, bleibt er widerrufen, und ein erneuter Aufruf von `revoke()` hat keine Wirkung – tatsächlich trennt der Aufruf von `revoke()` das `proxy`-Objekt von der `revoke`-Funktion, sodass die `revoke`-Funktion den Proxy nicht mehr erneut aufrufen kann. Wenn der Proxy nicht an anderer Stelle referenziert wird, ist er zur Speicherbereinigung bereit. Die `revoke`-Funktion trennt auch `target` und `handler` vom `proxy`, sodass `target` zur Speicherbereinigung bereit ist, wenn es an anderer Stelle nicht referenziert wird, auch wenn sein Proxy noch aktiv ist, da es keine Möglichkeit mehr gibt, sinnvoll mit dem Zielobjekt zu interagieren.

Benutzern die Interaktion mit einem Objekt über einen widerrufbaren Proxy zu ermöglichen, erlaubt Ihnen, die [Lebensdauer](/de/docs/Web/JavaScript/Memory_management) des dem Benutzer bereitgestellten Objekts zu kontrollieren – Sie können das Objekt zur Speicherbereinigung bereit machen, auch wenn der Benutzer noch eine Referenz auf seinen Proxy hält.

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

console.log(proxy.foo); // TypeError wird ausgelöst
proxy.foo = 1; // Noch einmal TypeError
delete proxy.foo; // immer noch TypeError
typeof proxy; // "object", typeof löst keine Falle aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
