---
title: WakeLockSentinel
slug: Web/API/WakeLockSentinel
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Screen Wake Lock API")}}

Die **`WakeLockSentinel`**-Schnittstelle der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) kann verwendet werden, um den Status der Plattform-Bildschirmwachschaltung zu überwachen und bei Bedarf den Lock manuell zu lösen.

Die Bildschirmwachschaltung verhindert, dass Geräteschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.

Ein Bildschirm-Wachschaltung wird mit der Methode [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) angefordert, die ein {{jsxref('Promise')}} zurückgibt, das mit einem `WakeLockSentinel`-Objekt erfüllt wird, wenn der Lock gewährt wird.

Ein erworbener Bildschirm-Wachschaltung kann manuell über die Methode [`release()`](/de/docs/Web/API/WakeLockSentinel/release) oder automatisch über die Plattform-Bildschirmwachschaltung gelöst werden. Letzteres kann geschehen, wenn das Dokument inaktiv wird oder die Sichtbarkeit verliert, wenn das Gerät wenig Strom hat oder der Benutzer den Energiesparmodus aktiviert.
Ein freigegebener `WakeLockSentinel` kann nicht wiederverwendet werden: Ein neuer Sentinel muss mit [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) angefordert werden, wenn ein neuer Lock benötigt wird.
Das Freigeben aller `WakeLockSentinel`-Instanzen eines bestimmten Typs von Wachschaltung führt dazu, dass der zugrunde liegende Plattform-Lock gelöst wird.

Ein Ereignis wird an den `WakeLockSentinel` ausgelöst, wenn der Plattform-Lock gelöst wird, sodass Anwendungen ihre Benutzeroberfläche entsprechend konfigurieren und, falls erforderlich, den Lock erneut anfordern können.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`released`](/de/docs/Web/API/WakeLockSentinel/released) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der anzeigt, ob der `WakeLockSentinel` freigegeben wurde.
- [`type`](/de/docs/Web/API/WakeLockSentinel/type) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkettenrepräsentation des derzeit erworbenen `WakeLockSentinel`-Typs zurück.
    Rückgabewerte sind:
    - `screen`: Eine Bildschirm-Wachschaltung.
      Verhindert, dass Geräte den Bildschirm dimmen oder sperren.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`release()`](/de/docs/Web/API/WakeLockSentinel/release)
  - : Löst den `WakeLockSentinel` und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Sentinel erfolgreich freigegeben wurde.

## Ereignisse

- [`release`](/de/docs/Web/API/WakeLockSentinel/release_event)
  - : Wird ausgelöst, wenn die Methode [`release()`](/de/docs/Web/API/WakeLockSentinel/release) aufgerufen wird oder der Wachschaltung vom Benutzer-Agent freigegeben wird.

## Beispiele

In diesem Beispiel erstellen wir eine asynchrone Funktion, die einen `WakeLockSentinel` anfordert.
Sobald die Bildschirm-Wachschaltung erlangt ist, lauschen wir dem `release`-Ereignis, das verwendet werden kann, um entsprechendes UI-Feedback zu geben.
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
