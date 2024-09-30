---
title: WakeLockSentinel
slug: Web/API/WakeLockSentinel
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{securecontext_header}}{{APIRef("Screen Wake Lock API")}}

Das **`WakeLockSentinel`** Interface der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) kann verwendet werden, um den Status der Plattform-Bildschirmsperre zu überwachen und die Sperre bei Bedarf manuell freizugeben.

Die Bildschirmsperre verhindert, dass Gerätebildschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.

Eine Bildschirmsperre wird mit der Methode [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) angefordert, die ein {{jsxref('Promise')}} zurückgibt, das bei Gewährung der Sperre mit einem `WakeLockSentinel` Objekt erfüllt wird.

Eine erworbene Bildschirmsperre kann manuell über die Methode [`release()`](/de/docs/Web/API/WakeLockSentinel/release) oder automatisch über die Plattform-Bildschirmsperre freigegeben werden. Letzteres kann geschehen, wenn das Dokument inaktiv oder unsichtbar wird, wenn das Gerät wenig Energie hat, oder wenn der Benutzer einen Energiesparmodus aktiviert.
Ein freigegebenes `WakeLockSentinel` kann nicht erneut verwendet werden: Ein neues Sentinel muss mit [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) angefordert werden, wenn eine neue Sperre benötigt wird.
Das Freigeben aller `WakeLockSentinel` Instanzen eines bestimmten Typs von Sperre führt dazu, dass die zugrunde liegende Plattform-Sperre freigegeben wird.

Ein Ereignis wird am `WakeLockSentinel` ausgelöst, wenn die Plattform-Sperre freigegeben wird, was es Anwendungen ermöglicht, ihre Benutzeroberfläche zu konfigurieren und die Sperre bei Bedarf erneut anzufordern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`released`](/de/docs/Web/API/WakeLockSentinel/released) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der angibt, ob das `WakeLockSentinel` freigegeben wurde.
- [`type`](/de/docs/Web/API/WakeLockSentinel/type) {{ReadOnlyInline}}

  - : Gibt eine Zeichenfolgenrepräsentation des aktuell erworbenen `WakeLockSentinel` Typs zurück.
    Mögliche Rückgabewerte sind:

    - `screen`: Eine Bildschirmsperre.
      Verhindert, dass Gerätebildschirme gedimmt oder gesperrt werden.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`release()`](/de/docs/Web/API/WakeLockSentinel/release)
  - : Gibt das `WakeLockSentinel` frei und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald das Sentinel erfolgreich freigegeben wurde.

## Ereignisse

- [`release`](/de/docs/Web/API/WakeLockSentinel/release_event)
  - : Wird ausgelöst, wenn die Methode [`release()`](/de/docs/Web/API/WakeLockSentinel/release) aufgerufen wird oder die Sperre vom User-Agent freigegeben wird.

## Beispiele

In diesem Beispiel erstellen wir eine asynchrone Funktion, die ein `WakeLockSentinel` anfordert.
Sobald die Bildschirmsperre erworben wurde, hören wir auf das `release` Ereignis, das verwendet werden kann, um entsprechendes Feedback an die Benutzeroberfläche zu geben.
Das Sentinel kann durch entsprechende Interaktionen erworben oder freigegeben werden.

```js
// create a reference for the wake lock
let wakeLock = null;

// create an async function to request a wake lock
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request("screen");

    // listen for our release event
    wakeLock.addEventListener("release", () => {
      // if wake lock is released alter the UI accordingly
    });
  } catch (err) {
    // if wake lock request fails - usually system related, such as battery
  }
};

wakeLockOnButton.addEventListener("click", () => {
  requestWakeLock();
});

wakeLockOffButton.addEventListener("click", () => {
  if (wakeLock !== null) {
    wakeLock.release().then(() => {
      wakeLock = null;
    });
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Stay awake with the Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
