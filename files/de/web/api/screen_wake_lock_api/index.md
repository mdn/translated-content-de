---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 3957d6261191fdf1252362e7d2092b5d59daca89
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Geräte den Bildschirm dimmen oder sperren, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Verwendung

Die meisten Geräte schalten ihren Bildschirm standardmäßig nach einer bestimmten Zeit aus, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um Akkuleistung zu sparen. Obwohl dies eine nützliche Funktion ist, müssen bei einigen Anwendungen die Bildschirme eingeschaltet bleiben, damit sie optimal nutzbar sind.

Die Screen Wake Lock API verhindert, dass sich der Bildschirm ausschaltet, gedimmt oder gesperrt wird. Sie ermöglicht sichtbaren (aktiven) Dokumenten eine einfache plattformbasierte Lösung, um die Screen Wake Lock der Plattform zu erwerben.

Es gibt zahlreiche Anwendungsfälle, in denen ein Bildschirm eingeschaltet bleiben soll, darunter das Lesen eines E-Books, die Kartennavigation, das Befolgen eines Rezepts, Präsentationen vor einem Publikum, das Scannen eines QR-Codes/Barcodes oder Anwendungen, die Sprach- oder Gestensteuerung statt taktiler Eingaben verwenden (der standardmäßigen Methode, um einen Bildschirm eingeschaltet zu halten).

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die auf {{jsxref('Promise')}} basierende Methode [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) aufrufen, die aufgelöst wird, wenn die Plattform dies zulässt. Eine Anfrage kann aus mehreren Gründen abgelehnt werden, darunter Systemeinstellungen (wie der Energiesparmodus oder ein niedriger Akkustand) oder weil das Dokument nicht aktiv oder sichtbar ist.
Es empfiehlt sich, eine Referenz auf das Sentinel-Objekt zu speichern, damit die Anwendung die Freigabe später steuern kann.

Das Sentinel ist an die zugrunde liegende System-Wake-Lock gebunden. Es kann vom System freigegeben werden, ebenfalls wenn der Akkustand zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die Methode [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) freigegeben werden.
Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn eine Screen Wake Lock erneut oder weiterhin benötigt wird, muss die Anwendung eine neue anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm zur Verbesserung der Benutzerfreundlichkeit eingeschaltet zu halten. Es ist sinnvoll, in der Benutzeroberfläche anzuzeigen, ob die Wake Lock aktiv ist, und Nutzern eine Möglichkeit zu geben, sie bei Bedarf zu deaktivieren.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Gerätebildschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Stellt einen Handle für die zugrunde liegende Plattform-Wake-Lock bereit und kann, sofern referenziert, manuell freigegeben und erneut erworben werden. Sie erhalten eine Instanz des Objekts durch Aufrufen von [`WakeLock.request`](/de/docs/Web/API/WakeLock/request).

### Erweiterungen anderer Schnittstellen

- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Objektinstanz zurück, über die auf alle weiteren Funktionen zugegriffen werden kann.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die `screen-wake-lock`-Direktive von [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) gesteuert.
    Siehe unten [Sicherheitsaspekte](#sicherheitsaspekte).

## Beispiele

### Feature-Erkennung

Dieser Code prüft die Unterstützung für Wake Locks und aktualisiert die Benutzeroberfläche entsprechend.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Anfordern einer Wake Lock

Das folgende Beispiel zeigt, wie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt angefordert wird. Die Methode [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) basiert auf {{jsxref('Promise')}}, daher können wir eine asynchrone Funktion erstellen, die wiederum die Benutzeroberfläche aktualisiert, um anzuzeigen, dass die Wake Lock aktiv ist.

```js
// Create a reference for the Wake Lock.
let wakeLock = null;

// create an async function to request a wake lock
try {
  wakeLock = await navigator.wakeLock.request("screen");
  statusElem.textContent = "Wake Lock is active!";
} catch (err) {
  // The Wake Lock request has failed - usually system related, such as battery.
  statusElem.textContent = `${err.name}, ${err.message}`;
}
```

### Freigeben einer Wake Lock

Das folgende Beispiel zeigt, wie die zuvor erworbene Wake Lock freigegeben wird.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Auf die Freigabe einer Wake Lock warten

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn die Wake Lock aus irgendeinem Grund freigegeben wurde, beispielsweise beim Navigieren weg vom aktiven Fenster/Tab.

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Erneutes Erwerben einer Wake Lock

Der folgende Code erwirbt die Wake Lock erneut, wenn sich die Sichtbarkeit des Dokuments ändert und die Wake Lock freigegeben wird.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammengeführt

Den [vollständigen Code finden Sie hier auf GitHub](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet eine Schaltfläche, um eine Wake Lock zu erwerben und auch wieder freizugeben, wodurch wiederum die Benutzeroberfläche aktualisiert wird. Die Benutzeroberfläche wird auch aktualisiert, wenn die Wake Lock aus irgendeinem Grund automatisch freigegeben wird. Es gibt ein Kontrollkästchen, das bei Aktivierung die Wake Lock automatisch erneut erwirbt, wenn sich der Sichtbarkeitsstatus des Dokuments ändert und es wieder sichtbar wird.

## Leistungsaspekte

- Geben Sie die Screen Wake Lock frei, wenn der Nutzer die Aktivität beendet, die einen dauerhaft eingeschalteten Bildschirm erforderte. Beispielsweise könnte eine Ticketing-App, die QR-Codes zur Übermittlung von Ticketinformationen verwendet, eine Screen Wake Lock erwerben, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), sie anschließend jedoch freigeben. Eine Präsentations-App könnte die Wake Lock nur halten, während eine Präsentation aktiv ist, nicht jedoch während sie bearbeitet wird.
- Wenn Ihre App lang andauernde Downloads ausführt, sollten Sie die Verwendung von Background Fetch in Betracht ziehen.
- Wenn Ihre App Daten von einem Remote-Server synchronisiert, sollten Sie die Verwendung von Background Sync in Betracht ziehen.
- Nur aktive Dokumente können Screen Wake Locks erwerben, und zuvor erworbene Locks werden automatisch freigegeben, wenn das Dokument inaktiv wird. Stellen Sie daher sicher, dass Sie die Screen Wake Lock bei Bedarf erneut erwerben, wenn das Dokument aktiv wird (warten Sie auf das Ereignis [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)).

## Sicherheitsaspekte

Der Zugriff auf die Screen Wake Lock API wird durch die [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} gesteuert.

Bei Verwendung der [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ist die standardmäßige Allowlist für `screen-wake-lock` `self`.
Dies erlaubt die Verwendung von Wake Locks in verschachtelten Frames derselben Origin, verhindert jedoch, dass Inhalte von Drittanbietern Locks verwenden.
Die Nutzung durch Drittanbieter kann aktiviert werden, indem der Server zunächst den Header `Permissions-Policy` setzt, um einer bestimmten Third-Party-Origin die Berechtigung zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Anschließend muss dem Frame-Containerelement für Quellen dieser Origin das Attribut `allow="screen-wake-lock"` hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"></iframe>
```

Browser können die Bildschirmsperre in einem bestimmten Dokument auch aus einem implementierungsspezifischen Grund blockieren, etwa aufgrund einer Nutzer- oder Plattformeinstellung.
Es wird erwartet, dass sie einen unaufdringlichen Mechanismus bereitstellen, um den Nutzer darüber zu informieren, wenn eine Wake Lock aktiv ist, und dass sie Nutzern die Möglichkeit geben, die Bildschirmsperre der Anwendung zu entfernen.

Die Berechtigung `screen-wake-lock` der [Permissions API](/de/docs/Web/API/Permissions_API) kann verwendet werden, um zu prüfen, ob der Zugriff zur Verwendung der Bildschirmsperre `granted`, `denied` oder `prompt` ist (erfordert die Bestätigung einer Aufforderung durch den Nutzer).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mit der Screen Wake Lock API wach bleiben](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/) auf developer.chrome.com
