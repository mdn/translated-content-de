---
title: "Headers: forEach()-Methode"
short-title: forEach()
slug: Web/API/Headers/forEach
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers.forEach()`**-Methode führt eine Callback-Funktion einmal pro Schlüssel/Wert-Paar im [`Headers`](/de/docs/Web/API/Headers)-Objekt aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Funktion, die für jeden Eintrag in der Map ausgeführt wird. Sie nimmt die folgenden Argumente entgegen:
    - `value`
      - : Wert des aktuell besuchten Header-Eintrags.
    - `key`
      - : Name des aktuell besuchten Header-Eintrags.
    - `object`
      - : Das zu iterierende Headers-Objekt.
- `thisArg` {{Optional_Inline}}
  - : Wert, der als `this` verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

{{jsxref("undefined")}}.

## Beschreibung

Die `Headers.forEach()`-Methode führt den bereitgestellten Callback einmal für jeden tatsächlich vorhandenen Schlüssel der Headers aus. Sie wird nicht für Schlüssel aufgerufen, die gelöscht wurden. Sie wird jedoch für Schlüssel ausgeführt, die vorhanden sind, aber den Wert undefined haben.

## Beispiele

### Inhalte des Headers-Objekts ausgeben

Der folgende Code loggt eine Zeile für jedes Schlüssel/Wert-Paar im `myHeaders`-Objekt.

```js
// Create a new test Headers object
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "This is a demo cookie");
myHeaders.append("compression", "gzip");

// Display the key/value pairs
myHeaders.forEach((value, key) => {
  console.log(`${key} ==> ${value}`);
});
```

Das Ergebnis ist:

```plain
compression ==> gzip
content-type ==> application/json
cookie ==> This is a demo cookie
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Map.prototype.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
