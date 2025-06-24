---
title: "WakeLock: request() Methode"
short-title: request()
slug: Web/API/WakeLock/request
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die **`request()`** Methode der [`WakeLock`](/de/docs/Web/API/WakeLock) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) Objekt erfüllt wird, wenn der systembedingte Bildschirm-Wachhaltewunsch gewährt wird.

Der Bildschirm-Wachhaltewunsch verhindert, dass Bildschirme von Geräten abgedunkelt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.

## Syntax

```js-nolint
request(type)
```

### Parameter

- `type` {{optional_inline}}
  - : Ein String, der den Typ des Bildschirm-Wachhaltewunsches angibt, aus den folgenden aufgezählten Typen:
    - `screen`
      - : Verhindert, dass der Bildschirm ausgeschaltet wird.
        Nur sichtbare Dokumente können den Bildschirm-Wachhaltewunsch erlangen.

Wird kein `type`-Parameter explizit angegeben, verwendet die `request()`-Methode standardmäßig den `screen`-Typ.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wachhaltewunsch nicht verfügbar ist, was aus folgenden Gründen passieren kann:
    - Die Nutzung dieser Funktion ist durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Das Dokument ist nicht vollständig aktiv.
    - Der Sichtbarkeitsstatus des Dokuments ist `hidden`.
    - Der {{Glossary("User_Agent", "User Agent")}} konnte den Wachhaltewunsch der Plattform nicht erlangen.
      Zum Beispiel kann dies passieren, wenn das Gerät wenig Batterieleistung hat.

## Beispiele

Die folgende asynchrone Funktion fordert ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) Objekt an.
Die `request()`-Methode ist in eine `try...catch`-Anweisung eingebettet, um Fälle zu handhaben, in denen der Browser die Anfrage aus irgendeinem Grund ablehnt.

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

Der Bildschirm-Wachhaltewunsch kann vom Gerät widerrufen werden, nachdem er gewährt wurde.
Das zurückgegebene [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann verwendet werden, um den Status des Wunsches zu überprüfen und/oder einen gehaltenen Bildschirm-Wachhaltewunsch manuell zu stornieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
