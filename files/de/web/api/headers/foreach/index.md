---
title: "Headers: forEach() Methode"
short-title: forEach()
slug: Web/API/Headers/forEach
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
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
  - : Funktion, die für jeden Eintrag in der Map ausgeführt wird. Es nimmt die folgenden Argumente:
    - `value`
      - : Wert des aktuell besuchten Header-Eintrags.
    - `key`
      - : Name des aktuell besuchten Header-Eintrags.
    - `object`
      - : Das Headers-Objekt, das iteriert wird.
- `thisArg` {{Optional_Inline}}
  - : Wert, der als `this` verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

{{jsxref("undefined")}}.

## Beschreibung

Die `Headers.forEach()`-Methode führt den bereitgestellten Callback einmal für jeden tatsächlich vorhandenen Schlüssel der Headers aus. Sie wird nicht für Schlüssel aufgerufen, die gelöscht wurden. Sie wird jedoch für Schlüssel ausgeführt, die vorhanden sind, aber den Wert undefined haben.

## Beispiele

### Inhalt eines Headers-Objekts ausdrucken

Der folgende Code protokolliert eine Zeile für jeden Schlüssel/Wert im `myHeaders`-Objekt.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Map.prototype.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
