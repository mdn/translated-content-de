---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Geräte den Bildschirm dimmen oder sperren, wenn eine Anwendung weiterhin aktiv bleiben muss.

## Konzepte und Verwendung

Die meisten Geräte schalten standardmäßig ihren Bildschirm nach einer festgelegten Zeit aus, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um Batterieleistung zu sparen. Während dies eine nützliche Funktion ist, benötigen einige Anwendungen, dass der Bildschirm eingeschaltet bleibt, um ihre volle Nützlichkeit zu entfalten.

Die Screen Wake Lock API verhindert, dass der Bildschirm ausgeschaltet, gedimmt oder gesperrt wird. Sie bietet eine einfache, plattformbasierte Lösung für sichtbare (aktive) Dokumente, um die Plattformbildschirm-Wake-Sperre zu erwerben.

Es gibt viele Anwendungsfälle dafür, den Bildschirm eingeschaltet zu halten, darunter das Lesen eines E-Books, die Navigation mit einer Karte, das Folgen eines Rezepts, das Präsentieren vor einem Publikum, das Scannen eines QR-/Barcodes oder Anwendungen, die Sprach- oder Gestensteuerung anstelle von Berührungseingaben verwenden (die standardmäßige Methode, um den Bildschirm wach zu halten).

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die auf dem {{jsxref('Promise')}} basierende Methode [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) aufrufen, die aufgelöst wird, wenn die Plattform dies zulässt. Eine Anfrage kann aus verschiedenen Gründen abgelehnt werden, einschließlich Systemeinstellungen (wie Energiesparmodus oder niedrigem Batteriestand) oder wenn das Dokument nicht aktiv oder sichtbar ist. Es ist eine gute Praxis, einen Verweis auf das Sentinel-Objekt zu speichern, damit die Anwendung später die Freigabe steuern kann.

Das Sentinel ist mit der zugrunde liegenden System-Wake-Sperre verbunden. Es kann vom System freigegeben werden, z. B. wenn die Batterieleistung zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die Methode [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) freigegeben werden. Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn erneut eine Bildschirm-Wake-Sperre erforderlich ist, muss die Anwendung eine neue anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm zum Vorteil der Benutzerfreundlichkeit eingeschaltet zu halten. Es ist eine gute Idee, eine Rückmeldung auf der Benutzeroberfläche anzuzeigen, um zu zeigen, ob die Wake-Sperre aktiv ist, und dem Benutzer die Möglichkeit zu geben, sie zu deaktivieren, wenn er es wünscht.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Gerätebildschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterhin ausgeführt werden muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Bietet einen Zugriff auf die zugrunde liegende Plattform-Wake-Sperre und kann manuell freigegeben und erneut erworben werden, wenn darauf verwiesen wird. Holen Sie sich eine Instanz des Objekts, indem Sie [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) aufrufen.

### Erweiterungen für andere Schnittstellen

- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}}

  - : Gibt eine Instanz des [`WakeLock`](/de/docs/Web/API/WakeLock)-Objekts zurück, von dem aus alle anderen Funktionen zugänglich sind.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Direktive `screen-wake-lock` gesteuert.
    Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

## Beispiele

### Funktionsprüfung

Dieser Code überprüft die Unterstützung der Wake-Sperre und aktualisiert die Benutzeroberfläche entsprechend.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Anfordern einer Wake-Sperre

Das folgende Beispiel zeigt, wie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt angefordert wird. Die Methode [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) basiert auf {{jsxref('Promise')}}, sodass wir eine asynchrone Funktion erstellen können, die wiederum die Benutzeroberfläche aktualisiert, um anzuzeigen, dass die Wake-Sperre aktiv ist.

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

### Freigeben der Wake-Sperre

Das folgende Beispiel zeigt, wie die zuvor erworbene Wake-Sperre freigegeben wird.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Überwachen der Freigabe der Wake-Sperre

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn die Wake-Sperre aus irgendeinem Grund freigegeben wurde (z. B. beim Verlassen des aktiven Fensters/Tabs).

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Erneutes Erwerben einer Wake-Sperre

Der folgende Code erwirbt die Wake-Sperre erneut, falls sich die Sichtbarkeit des Dokuments ändert und die Wake-Sperre freigegeben wird.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenfügen

Sie können den [vollständigen Code auf GitHub hier](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api) finden. Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet eine Schaltfläche, um eine Wake-Sperre zu erwerben und wieder freizugeben, was wiederum die Benutzeroberfläche aktualisiert. Die Benutzeroberfläche wird auch aktualisiert, wenn die Wake-Sperre aus irgendeinem Grund automatisch freigegeben wird. Es gibt ein Kontrollkästchen, das bei Aktivierung die Wake-Sperre automatisch erneut erwirbt, wenn der Sichtbarkeitsstatus des Dokuments sich ändert und wieder sichtbar wird.

## Leistungsüberlegungen

- Geben Sie die Bildschirm-Wake-Sperre frei, wenn der Benutzer die Aktivität beendet, die einen stets eingeschalteten Bildschirm erfordert. Beispielsweise könnte eine Ticket-App, die QR-Codes verwendet, um Ticketinformationen zu übermitteln, die Bildschirm-Wake-Sperre erwerben, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), aber danach freigegeben werden. Eine Präsentations-App könnte die Sperre nur halten, während eine Präsentation aktiv ist, aber nicht, wenn die Präsentation bearbeitet wird.
- Wenn Ihre App lang laufende Downloads durchführt, sollten Sie in Betracht ziehen, Hintergrunddownloads zu verwenden.
- Wenn Ihre App Daten von einem Remote-Server synchronisiert, sollten Sie in Betracht ziehen, die Hintergrundsynchronisation zu verwenden.
- Nur aktive Dokumente können Bildschirm-Wake-Sperren erwerben, und zuvor erworbene Sperren werden automatisch freigegeben, wenn das Dokument inaktiv wird. Stellen Sie daher sicher, dass Sie die Bildschirm-Wake-Sperre bei Bedarf erneut erwerben, wenn das Dokument aktiv wird (hören Sie auf das [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis).

## Sicherheitsüberlegungen

Der Zugriff auf die Screen Wake Lock API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} kontrolliert.

Bei der Verwendung der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ist die standardmäßige Erlauben-Liste für `screen-wake-lock` `self`. Diese erlaubt die Nutzung der Wake-Sperre in gleichherkunftsnesteten Frames, verhindert jedoch, dass Inhalte von Drittanbietern die Sperren verwenden. Die Nutzung durch Drittanbieter kann aktiviert werden, indem der Server zuerst den `Permissions-Policy`-Header so setzt, dass er einem bestimmten Drittanbieter-Origin die Berechtigung erteilt.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Dann muss das `allow="screen-wake-lock"`-Attribut dem Frame-Containerelement für Quellen von diesem Origin hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"></iframe>
```

Browser können auch die Bildschirmsperre in einem bestimmten Dokument aus einem implementierungsspezifischen Grund blockieren, wie einer Benutzer- oder Plattform-Einstellung. Es wird erwartet, dass sie ein unaufdringliches Mechanismus bereitstellen, um den Benutzer zu informieren, wenn die Wake-Sperre aktiv ist, und den Benutzern die Möglichkeit geben, die Bildschirmsperre der Anwendung zu entfernen.

Die [Permissions API](/de/docs/Web/API/Permissions_API) `screen-wake-lock`-Berechtigung kann verwendet werden, um zu testen, ob der Zugriff auf die Bildschirmsperre `granted`, `denied` oder `prompt` (erfordert die Anerkennung eines Benutzerprompts) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
- [Eine Screen Wake Lock API-Demo auf Glitch](https://wake-lock-demo.glitch.me/)
