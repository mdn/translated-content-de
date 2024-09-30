---
title: "WakeLock: request()-Methode"
short-title: request()
slug: Web/API/WakeLock/request
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die **`request()`**-Methode der [`WakeLock`](/de/docs/Web/API/WakeLock)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt erfüllt wird, wenn das System-Bildschirm-Aufwach-Sperre gewährt wird.

Die Bildschirm-Aufwach-Sperre verhindert, dass die Bildschirme von Geräten gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.

## Syntax

```js-nolint
request(type)
```

### Parameter

- `type` {{optional_inline}}

  - : Ein String, der den Typ der Bildschirm-Aufwach-Sperre angibt, aus den folgenden aufgezählten Typen:

    - `screen`
      - : Verhindert das Ausschalten des Bildschirms.
        Nur sichtbare Dokumente können die Bildschirm-Aufwach-Sperre erwerben.

Wenn kein `type`-Parameter explizit angegeben wird, verwendet die `request()`-Methode standardmäßig den `screen`-Typ.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn die Aufwach-Sperre nicht verfügbar ist, was folgende Gründe haben kann:

    - Die Verwendung dieser Funktion ist durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.
    - Das Dokument ist nicht vollständig aktiv.
    - Der Sichtbarkeitsstatus des Dokuments ist `hidden`.
    - Der [User Agent](/de/docs/Glossary/User_Agent) konnte die Aufwach-Sperre der Plattform nicht erwerben.
      Dies könnte zum Beispiel passieren, wenn das Gerät wenig Akku hat.

## Beispiele

Die folgende asynchrone Funktion fordert ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt an.
Die `request()`-Methode wird in einer `try...catch`-Anweisung eingeschlossen, um Fälle zu handhaben, in denen der Browser die Anfrage aus irgendeinem Grund ablehnt.

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

Die Bildschirm-Aufwach-Sperre kann vom Gerät widerrufen werden, nachdem sie gewährt wurde.
Das zurückgegebene [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann verwendet werden, um den Status der Sperre zu überprüfen und/oder eine gehaltene Bildschirm-Aufwach-Sperre manuell zu annullieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
