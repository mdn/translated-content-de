---
title: "WakeLock: request()-Methode"
short-title: request()
slug: Web/API/WakeLock/request
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die **`request()`**-Methode der {{domxref("WakeLock")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("WakeLockSentinel")}}-Objekt erfüllt wird, wenn das System-Bildschirm-Wake-Lock gewährt wird.

Das Bildschirm-Wake-Lock verhindert, dass sich die Bildschirme von Geräten dimmen oder sperren, wenn eine Anwendung weiterlaufen muss.

## Syntax

```js-nolint
request(type)
```

### Parameter

- `type` {{optional_inline}}

  - : Ein String, der den Typ des Bildschirm-Wake-Locks angibt, aus den folgenden aufgezählten Typen:

    - `screen`
      - : Verhindert, dass der Bildschirm ausgeschaltet wird.
        Nur sichtbare Dokumente können das Bildschirm-Wake-Lock erwerben.

Wenn kein `type`-Parameter explizit angegeben wird, verwendet die `request()`-Methode standardmäßig den `screen`-Typ.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("WakeLockSentinel")}}-Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn das Wake-Lock nicht verfügbar ist, was aus folgenden Gründen passieren kann:

    - Die Nutzung dieser Funktion wird durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.
    - Das Dokument ist nicht vollständig aktiv.
    - Der Sichtbarkeitsstatus des Dokuments ist `hidden`.
    - Der {{Glossary("User Agent")}} konnte das Plattform-Wake-Lock nicht erwerben.
      Zum Beispiel könnte dies passieren, wenn das Gerät einen niedrigen Batteriestand hat.

## Beispiele

Die folgende asynchrone Funktion fordert ein {{domxref("WakeLockSentinel")}}-Objekt an. Die `request()`-Methode ist in eine `try...catch`-Anweisung eingebettet, um Fälle zu behandeln, in denen der Browser die Anfrage aus irgendeinem Grund ablehnt.

```js
const requestWakeLock = async () => {
  try {
    const wakeLock = await navigator.wakeLock.request("screen");
  } catch (err) {
    // Die Wake-Lock-Anfrage schlägt fehl - normalerweise systembedingt, wie niedriger Batteriestand.

    console.log(`${err.name}, ${err.message}`);
  }
};

requestWakeLock();
```

Das Bildschirm-Wake-Lock kann vom Gerät widerrufen werden, nachdem es gewährt wurde. Der zurückgegebene {{domxref("WakeLockSentinel")}} kann verwendet werden, um den Status des Locks zu überprüfen und/oder ein gehaltenes Bildschirm-Wake-Lock manuell zu beenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
