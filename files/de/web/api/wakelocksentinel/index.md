---
title: WakeLockSentinel
slug: Web/API/WakeLockSentinel
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{securecontext_header}}{{APIRef("Screen Wake Lock API")}}

Die **`WakeLockSentinel`**-Schnittstelle der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) kann verwendet werden, um den Status der Bildschirmsperren zu überwachen und die Sperre manuell freizugeben, wenn dies erforderlich ist.

Die Bildschirmsperre verhindert, dass Geräteschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.

Eine Bildschirmsperre wird mit der Methode {{domxref('WakeLock.request()','navigator.wakeLock.request()')}} angefordert, die ein {{jsxref('Promise')}} zurückgibt, das mit einem `WakeLockSentinel`-Objekt erfüllt wird, wenn die Sperre gewährt wird.

Eine erworbene Bildschirmsperre kann manuell über die Methode {{domxref('WakeLockSentinel.release','release()')}} oder automatisch über die Plattform-Bildschirmsperre freigegeben werden. Letzteres kann auftreten, wenn das Dokument inaktiv wird oder die Sichtbarkeit verliert, wenn das Gerät wenig Strom hat oder wenn der Benutzer einen Energiesparmodus aktiviert.
Ein freigegebener `WakeLockSentinel` kann nicht erneut verwendet werden: Es muss ein neuer Sentinel über {{domxref('WakeLock.request()','navigator.wakeLock.request()')}} angefordert werden, wenn eine neue Sperre benötigt wird.
Das Freigeben aller `WakeLockSentinel`-Instanzen eines bestimmten Sperrentyps führt dazu, dass die zugrunde liegende Plattform-Sperre freigegeben wird.

Ein Ereignis wird am `WakeLockSentinel` ausgelöst, wenn die Plattform-Sperre freigegeben wird, wodurch Anwendungen ihre Benutzeroberfläche konfigurieren und die Sperre bei Bedarf erneut anfordern können.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, {{DOMxRef("EventTarget")}}._

- {{domxref("WakeLockSentinel.released", "released")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der `WakeLockSentinel` freigegeben wurde.
- {{domxref("WakeLockSentinel.type", "type")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolgenrepräsentation des aktuell erworbenen `WakeLockSentinel`-Typs zurück.
    Rückgabewerte sind:

    - `screen`: Eine Bildschirmwachhalt-Sperre.
      Verhindert, dass Geräte den Bildschirm dimmen oder sperren.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, {{DOMxRef("EventTarget")}}._

- {{domxref('WakeLockSentinel.release()', 'release()')}}
  - : Gibt den `WakeLockSentinel` frei und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Sentinel erfolgreich freigegeben wurde.

## Ereignisse

- {{domxref("WakeLockSentinel.release_event", "release")}}
  - : Wird ausgelöst, wenn die Methode {{domxref('WakeLockSentinel.release','release()')}} aufgerufen wird oder die Sperre durch den Benutzeragenten freigegeben wird.

## Beispiele

In diesem Beispiel erstellen wir eine asynchrone Funktion, die einen `WakeLockSentinel` anfordert.
Sobald die Bildschirmsperre erworben ist, hören wir auf das `release`-Ereignis, das genutzt werden kann, um entsprechendes UI-Feedback zu geben.
Der Sentinel kann durch entsprechende Interaktionen erworben oder freigegeben werden.

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
