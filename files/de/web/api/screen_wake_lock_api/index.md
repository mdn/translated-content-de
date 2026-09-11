---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: b0e389028c444c28975be392cf8bb9886224208c
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Geräte den Bildschirm abdunkeln oder sperren, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Verwendung

Die meisten Geräte schalten ihren Bildschirm standardmäßig nach einer bestimmten Zeit aus, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um Akkuleistung zu sparen. Obwohl dies eine nützliche Funktion ist, müssen bei einigen Anwendungen die Bildschirme eingeschaltet bleiben, damit sie optimal genutzt werden können.

Die Screen Wake Lock API verhindert, dass der Bildschirm ausgeschaltet, abgedunkelt oder gesperrt wird. Sie ermöglicht eine einfache, plattformbasierte Lösung, mit der sichtbare (aktive) Dokumente die plattformspezifische Bildschirmsperre anfordern können.

Es gibt viele Anwendungsfälle, bei denen ein Bildschirm eingeschaltet bleiben soll, darunter das Lesen eines E-Books, Kartennavigation, das Befolgen eines Rezepts, Präsentationen vor Publikum, das Scannen eines QR-/Barcodes oder Anwendungen, die Sprach- oder Gestensteuerung statt taktiler Eingabe verwenden (der Standardmethode, um einen Bildschirm eingeschaltet zu halten).

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die auf {{jsxref('Promise')}} basierende Methode [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) aufrufen, die aufgelöst wird, wenn die Plattform dies zulässt. Eine Anfrage kann aus verschiedenen Gründen abgelehnt werden, einschließlich Systemeinstellungen (wie Energiesparmodus oder niedrigem Akkustand) oder wenn das Dokument nicht aktiv oder sichtbar ist.
Es empfiehlt sich, eine Referenz auf das Sentinel-Objekt zu speichern, damit die Anwendung die Freigabe später steuern kann.

Das Sentinel ist an die zugrunde liegende System-Wake-Lock gebunden. Es kann vom System freigegeben werden, ebenfalls wenn der Akkustand zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die Methode [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) freigegeben werden.
Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn eine Bildschirm-Wake-Lock erneut oder weiterhin erforderlich ist, muss die Anwendung eine neue anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm eingeschaltet zu halten und so die Benutzerfreundlichkeit zu verbessern. Es ist eine gute Idee, in der Benutzeroberfläche anzuzeigen, ob die Wake Lock aktiv ist, und Benutzern eine Möglichkeit zu bieten, sie bei Bedarf zu deaktivieren.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Gerätebildschirme abgedunkelt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Bietet einen Handle für die zugrunde liegende Plattform-Wake-Lock, die bei vorhandener Referenz manuell freigegeben und erneut angefordert werden kann. Sie erhalten eine Instanz des Objekts durch Aufrufen von [`WakeLock.request`](/de/docs/Web/API/WakeLock/request).

### Erweiterungen anderer Schnittstellen

- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Objektinstanz zurück, über die auf alle weiteren Funktionen zugegriffen werden kann.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die `screen-wake-lock`-Direktive von [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) gesteuert.
    Siehe unten [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

## Beispiele

### Feature-Erkennung

Dieser Code prüft die Unterstützung für Wake Lock und aktualisiert die Benutzeroberfläche entsprechend.

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

Das folgende Beispiel zeigt, wie die zuvor angeforderte Wake Lock freigegeben wird.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Auf die Freigabe einer Wake Lock warten

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn die Wake Lock aus irgendeinem Grund freigegeben wurde, beispielsweise beim Navigieren aus dem aktiven Fenster oder Tab.

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Erneutes Anfordern einer Wake Lock

Der folgende Code fordert die Wake Lock erneut an, falls sich die Sichtbarkeit des Dokuments ändert und die Wake Lock freigegeben wird.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammengefügt

Den [vollständigen Code finden Sie hier auf GitHub](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet eine Schaltfläche, um eine Wake Lock anzufordern und sie auch wieder freizugeben, wodurch wiederum die Benutzeroberfläche aktualisiert wird. Die Benutzeroberfläche wird auch aktualisiert, wenn die Wake Lock aus irgendeinem Grund automatisch freigegeben wird. Es gibt ein Kontrollkästchen, das bei Aktivierung die Wake Lock automatisch erneut anfordert, wenn sich der Sichtbarkeitsstatus des Dokuments ändert und es wieder sichtbar wird.

## Leistungsüberlegungen

- Geben Sie die Bildschirm-Wake-Lock frei, wenn der Benutzer die Aktivität beendet, für die der dauerhaft eingeschaltete Bildschirm erforderlich war. Beispielsweise kann eine Ticketing-App, die QR-Codes zur Übermittlung von Ticketinformationen verwendet, die Bildschirm-Wake-Lock anfordern, wenn der QR-Code angezeigt wird, damit der Code erfolgreich gescannt wird, und sie danach freigeben. Eine Präsentations-App kann die Sperre nur halten, während eine Präsentation aktiv ist, nicht jedoch während die Präsentation bearbeitet wird.
- Wenn Ihre App lang andauernde Downloads ausführt, sollten Sie background fetch verwenden.
- Wenn Ihre App Daten von einem Remote-Server synchronisiert, sollten Sie background sync verwenden.
- Nur aktive Dokumente können Bildschirm-Wake-Locks anfordern, und zuvor angeforderte Sperren werden automatisch freigegeben, wenn ein Dokument inaktiv wird. Stellen Sie daher sicher, dass Sie die Bildschirm-Wake-Lock bei Bedarf erneut anfordern, wenn das Dokument aktiv wird (warten Sie auf das Ereignis [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)).

## Sicherheitsüberlegungen

Der Zugriff auf die Screen Wake Lock API wird durch die Direktive [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} gesteuert.

Bei Verwendung von [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) lautet die Standard-Allowlist für `screen-wake-lock` `self`.
Dies erlaubt die Verwendung von Wake Locks in verschachtelten Frames derselben Origin, verhindert jedoch, dass Inhalte von Drittanbietern Sperren verwenden.
Die Nutzung durch Dritte kann aktiviert werden, indem der Server zuerst den Header `Permissions-Policy` setzt, um einer bestimmten Drittanbieter-Origin die Berechtigung zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Anschließend muss dem Frame-Containerelement für Quellen dieser Origin das Attribut `allow="screen-wake-lock"` hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"></iframe>
```

Browser können die Bildschirmsperre in einem bestimmten Dokument auch aus implementationsspezifischen Gründen blockieren, beispielsweise aufgrund einer Benutzer- oder Plattformeinstellung.
Von ihnen wird erwartet, dass sie einen unaufdringlichen Mechanismus bereitstellen, um Benutzer zu informieren, wenn die Wake Lock aktiv ist, und Benutzern die Möglichkeit geben, die Bildschirmsperre der Anwendung aufzuheben.

Die Berechtigung `screen-wake-lock` der [Permissions API](/de/docs/Web/API/Permissions_API) kann verwendet werden, um zu prüfen, ob der Zugriff für die Verwendung der Bildschirmsperre `granted`, `denied` oder `prompt` ist (erfordert die Bestätigung einer Aufforderung durch den Benutzer).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mit der Screen Wake Lock API wach bleiben](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/) auf developer.chrome.com
