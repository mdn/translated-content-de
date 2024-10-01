---
title: "Serial: requestPort()-Methode"
short-title: requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: 27c64d8d7ab250244eef681dca7fd108fa44d5e4
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`Serial.requestPort()`**-Methode der [`Serial`](/de/docs/Web/API/Serial)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer ausgewählte Gerät darstellt, oder abgelehnt wird, wenn kein Gerät ausgewählt wurde.

## Syntax

```js-nolint
requestPort()
requestPort(options)
```

### Parameter

- `options`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `filters`

      - : Eine Liste von Objekten, die Hersteller- und Produkt-IDs enthalten, die verwendet werden, um nach angeschlossenen Geräten zu suchen. Das [USB Implementors Forum](https://www.usb.org/) weist bestimmten Unternehmen IDs zu. Jedes Unternehmen weist seinen Produkten IDs zu. Filter enthalten die folgenden Werte:

        - `usbVendorId`
          - : Eine kurze ganze Zahl ohne Vorzeichen, die einen USB-Gerätehersteller identifiziert.
        - `usbProductId`
          - : Eine kurze ganze Zahl ohne Vorzeichen, die ein USB-Gerät identifiziert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit diesem Fehler abgelehnt, wenn eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) die Nutzung dieser Funktion blockiert oder eine Benutzerberechtigung verweigert wurde.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird abgelehnt, wenn der Benutzer bei der Aufforderung keinen Port auswählt.

## Sicherheit

Es ist eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Das folgende Beispiel zeigt einen Filter, der an `requestPort()` mit einer USB-Hersteller-ID übergeben wird, um die vom Benutzer angezeigte Menge an Geräten auf nur USB-Geräte eines bestimmten Herstellers zu beschränken. Wenn dieser Filter weggelassen würde, könnte der Benutzer jeden verfügbaren Port auswählen.

```js
button.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      // Connect to `port` or add it to the list of available ports.
    })
    .catch((e) => {
      // The user didn't select a port.
    });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
