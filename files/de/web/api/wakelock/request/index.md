---
title: "WakeLock: request() Methode"
short-title: request()
slug: Web/API/WakeLock/request
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die **`request()`** Methode der [`WakeLock`](/de/docs/Web/API/WakeLock) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) Objekt erfüllt wird, wenn die Bildschirmsperre des Systems gewährt wird.

Die Bildschirmsperre verhindert, dass sich Bildschirme von Geräten abdunkeln oder sperren, wenn eine Anwendung im Betrieb bleiben muss.

## Syntax

```js-nolint
request(type)
```

### Parameter

- `type` {{optional_inline}}

  - : Ein String, der die Art der Bildschirmsperre angibt, aus den folgenden aufgezählten Typen:

    - `screen`
      - : Verhindert, dass sich der Bildschirm ausschaltet.
        Nur sichtbare Dokumente können die Bildschirmsperre erwerben.

Wenn kein `type` Parameter explizit angegeben wird, verwendet die `request()` Methode standardmäßig den `screen` Typ.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) Objekt erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn die Bildschirmsperre nicht verfügbar ist, was aus folgenden Gründen passieren kann:

    - Die Nutzung dieser Funktion wird durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.
    - Das Dokument ist nicht vollständig aktiv.
    - Der Sichtbarkeitszustand des Dokuments ist `hidden`.
    - Der [User Agent](/de/docs/Glossary/User_Agent) konnte die Bildschirmsperre der Plattform nicht erwerben.
      Zum Beispiel könnte dies passieren, wenn das Gerät einen niedrigen Batteriestand hat.

## Beispiele

Die folgende asynchrone Funktion beantragt ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) Objekt.
Die `request()` Methode ist in eine `try...catch` Anweisung eingebunden, um Fälle zu behandeln, in denen der Browser die Anfrage aus irgendeinem Grund ablehnt.

```js
const requestWakeLock = async () => {
  try {
    const wakeLock = await navigator.wakeLock.request("screen");
  } catch (err) {
    // The wake lock request fails - usually system-related, such as low battery.

    console.log(`${err.name}, ${err.message}`);
  }
};

requestWakeLock();
```

Die Bildschirmsperre kann vom Gerät widerrufen werden, nachdem sie gewährt wurde.
Das zurückgegebene [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann verwendet werden, um den Status der Sperre zu überprüfen und/oder eine gehaltene Bildschirmsperre manuell aufzuheben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
