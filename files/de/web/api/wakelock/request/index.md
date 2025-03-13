---
title: "WakeLock: request() Methode"
short-title: request()
slug: Web/API/WakeLock/request
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die **`request()`**-Methode der [`WakeLock`](/de/docs/Web/API/WakeLock)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt erfüllt wird, wenn das System-Screen-Wake-Lock gewährt wird.

Das Screen-Wake-Lock verhindert, dass sich Gerätebildschirme dimmen oder sperren, wenn eine Anwendung weiter ausgeführt werden muss.

## Syntax

```js-nolint
request(type)
```

### Parameter

- `type` {{optional_inline}}

  - : Ein String, der den Typ des Screen-Wake-Locks angibt. Folgende enumerierte Typen sind möglich:

    - `screen`
      - : Verhindert, dass der Bildschirm abschaltet.
        Nur sichtbare Dokumente können das Screen-Wake-Lock erwerben.

Wenn kein `type`-Parameter explizit angegeben wird, verwendet die `request()`-Methode standardmäßig den `screen`-Typ.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das Wake-Lock nicht verfügbar ist, was aus folgenden Gründen passieren kann:

    - Die Nutzung dieser Funktion wird durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Das Dokument ist nicht vollständig aktiv.
    - Der Sichtbarkeitsstatus des Dokuments ist `hidden`.
    - Der {{Glossary("User_Agent", "User Agent")}} konnte das plattformspezifische Wake-Lock nicht erwerben.
      Dies kann zum Beispiel passieren, wenn das Gerät wenig Akkulaufzeit hat.

## Beispiele

Die folgende asynchrone Funktion fordert ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt an. Die `request()`-Methode ist in eine `try...catch`-Anweisung eingebettet, um Fälle zu behandeln, in denen der Browser die Anfrage aus irgendeinem Grund ablehnt.

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

Das Screen-Wake-Lock kann vom Gerät widerrufen werden, nachdem es gewährt wurde. Das zurückgegebene [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann verwendet werden, um den Status des Locks zu überprüfen und/oder das gehaltene Screen-Wake-Lock manuell zu beenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
