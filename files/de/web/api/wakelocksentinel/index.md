---
title: WakeLockSentinel
slug: Web/API/WakeLockSentinel
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{securecontext_header}}{{APIRef("Screen Wake Lock API")}}

Die **`WakeLockSentinel`**-Schnittstelle der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) kann verwendet werden, um den Status der Plattform-Bildschirm-Aufwecksperre zu überwachen und die Sperre bei Bedarf manuell freizugeben.

Die Bildschirm-Aufwecksperre verhindert, dass Gerätebildschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.

Eine Bildschirm-Aufwecksperre wird mit der Methode [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) angefordert, die ein {{jsxref('Promise')}} zurückgibt, das mit einem `WakeLockSentinel`-Objekt erfüllt wird, wenn die Sperre gewährt wird.

Eine erworbene Bildschirm-Aufwecksperre kann manuell über die [`release()`](/de/docs/Web/API/WakeLockSentinel/release)-Methode oder automatisch über die Plattform-Bildschirm-Aufwecksperre freigegeben werden. Letzteres kann auftreten, wenn das Dokument inaktiv wird oder die Sichtbarkeit verliert, das Gerät wenig Energie hat oder der Benutzer den Energiesparmodus aktiviert.
Ein freigegebener `WakeLockSentinel` kann nicht erneut verwendet werden: Ein neuer Wächter muss über [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) angefordert werden, wenn eine neue Sperre erforderlich ist.
Das Freigeben aller `WakeLockSentinel`-Instanzen eines bestimmten Typs von Aufwecksperren führt dazu, dass die zugrunde liegende Plattform-Aufwecksperre freigegeben wird.

Ein Ereignis wird beim `WakeLockSentinel` ausgelöst, wenn die Plattform-Sperre freigegeben wird, wodurch Anwendungen ihre Benutzeroberfläche konfigurieren und die Sperre bei Bedarf erneut anfordern können.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`released`](/de/docs/Web/API/WakeLockSentinel/released) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der `WakeLockSentinel` freigegeben wurde.
- [`type`](/de/docs/Web/API/WakeLockSentinel/type) {{ReadOnlyInline}}

  - : Gibt eine Zeichenfolgendarstellung des derzeit erworbenen `WakeLockSentinel`-Typs zurück.
    Rückgabewerte sind:

    - `screen`: Eine Bildschirm-Aufwecksperre.
      Verhindert, dass Gerätebildschirme gedimmt oder gesperrt werden.

## Instanz-Methoden

_Erbt auch Methoden von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`release()`](/de/docs/Web/API/WakeLockSentinel/release)
  - : Gibt den `WakeLockSentinel` frei und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Wächter erfolgreich freigegeben wurde.

## Ereignisse

- [`release`](/de/docs/Web/API/WakeLockSentinel/release_event)
  - : Wird ausgelöst, wenn die [`release()`](/de/docs/Web/API/WakeLockSentinel/release)-Methode aufgerufen wird oder die Aufwecksperre durch den Benutzeragenten freigegeben wird.

## Beispiele

In diesem Beispiel erstellen wir eine asynchrone Funktion, die einen `WakeLockSentinel` anfordert.
Sobald die Bildschirm-Aufwecksperre erworben wurde, hören wir auf das `release`-Ereignis, das verwendet werden kann, um entsprechendes UI-Feedback zu geben.
Der Wächter kann über entsprechende Interaktionen erworben oder freigegeben werden.

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
