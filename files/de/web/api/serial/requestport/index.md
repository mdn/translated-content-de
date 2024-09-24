---
title: "Serial: Methode requestPort()"
short-title: requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: 27c64d8d7ab250244eef681dca7fd108fa44d5e4
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`Serial.requestPort()`**-Methode des {{domxref("Serial")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von {{domxref("SerialPort")}} aufgelöst wird, die das vom Benutzer ausgewählte Gerät darstellt, oder abgelehnt wird, wenn kein Gerät ausgewählt wurde.

## Syntax

```js-nolint
requestPort()
requestPort(options)
```

### Parameter

- `options`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `filters`

      - : Eine Liste von Objekten, die Vendor- und Produkt-IDs enthalten, die zur Suche nach angeschlossenen Geräten verwendet werden. Das [USB Implementors Forum](https://www.usb.org/) weist bestimmte IDs Unternehmen zu. Jedes Unternehmen weist IDs seinen Produkten zu. Filter enthalten die folgenden Werte:

        - `usbVendorId`
          - : Eine nicht signierte kurze Ganzzahl, die einen USB-Gerätehersteller identifiziert.
        - `usbProductId`
          - : Eine nicht signierte kurze Ganzzahl, die ein USB-Gerät identifiziert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz von {{domxref("SerialPort")}} aufgelöst wird.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Das zurückgegebene `Promise` wird mit diesem Fehler abgelehnt, wenn eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) die Nutzung dieser Funktion blockiert oder eine Benutzerberechtigungsaufforderung abgelehnt wurde.
- `NotFoundError` {{domxref("DOMException")}}
  - : Das zurückgegebene `Promise` wird mit diesem Fehler abgelehnt, wenn der Benutzer keinen Port auswählt, wenn er dazu aufgefordert wird.

## Sicherheit

{{Glossary("Transient activation")}} ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Das folgende Beispiel zeigt, wie ein Filter an `requestPort()` mit einer USB-Hersteller-ID übergeben wird, um die angezeigte Geräteliste auf USB-Geräte eines bestimmten Herstellers zu beschränken. Wenn dieser Filter weggelassen würde, könnte der Benutzer jeden verfügbaren Port auswählen.

```js
button.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      // Verbindung zum `port` herstellen oder ihn zur Liste der verfügbaren Ports hinzufügen.
    })
    .catch((e) => {
      // Der Benutzer hat keinen Port ausgewählt.
    });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
