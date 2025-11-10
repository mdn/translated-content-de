---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 50f826047f483a04d29c553da53aed365b138bee
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, Geräte daran zu hindern, den Bildschirm zu dimmen oder zu sperren, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Verwendung

Die meisten Geräte schalten ihren Bildschirm standardmäßig nach einer bestimmten Zeit aus, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um Strom zu sparen. Während dies eine nützliche Funktion ist, benötigen einige Anwendungen, dass der Bildschirm wach bleibt, um am nützlichsten zu sein.

Die Screen Wake Lock API verhindert, dass der Bildschirm ausgeschaltet, gedimmt oder gesperrt wird. Sie ermöglicht eine einfache, plattformbasierte Lösung für sichtbare (aktive) Dokumente, um den Plattformbildschirm-Wachschutz zu erwerben.

Es gibt viele Anwendungsfälle, bei denen der Bildschirm aktiv bleiben sollte, wie z. B. das Lesen eines E-Books, die Navigation mit einer Karte, das Befolgen eines Rezepts, das Präsentieren vor einem Publikum, das Scannen eines QR-Codes/Barcodes oder Anwendungen, die Sprach- oder Gestensteuerung anstelle von Berührungseingaben verwenden (die Standardmethode, um einen Bildschirm wach zu halten).

Sie erwerben ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die methodenbasierte [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) {{jsxref('Promise')}}-Methode aufrufen, die aufgelöst wird, wenn die Plattform dies zulässt. Eine Anfrage kann aus verschiedenen Gründen abgelehnt werden, einschließlich Systemeinstellungen (wie Energiesparmodus oder niedriger Batteriestand) oder wenn das Dokument nicht aktiv oder sichtbar ist. Es ist eine gute Praxis, eine Referenz auf das Wachschutz-Objekt zu speichern, um der Anwendung zu ermöglichen, es später zu steuern.

Das Sentinel ist mit dem zugrunde liegenden System-Wachschutz verbunden. Es kann vom System freigegeben werden, z. B. wenn die Batterieleistung zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die Methode [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) freigegeben werden. Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn erneut ein Bildschirm-Wachschutz erforderlich ist, muss die Anwendung einen neuen anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm wach zu halten und die Benutzerfreundlichkeit zu verbessern. Es ist eine gute Idee, ein Feedback in der Benutzeroberfläche anzuzeigen, um zu zeigen, ob der Wachschutz aktiv ist und eine Möglichkeit, ihn bei Bedarf zu deaktivieren.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Gerätescreens gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Bietet einen Zugriff auf den zugrunde liegenden Plattform-Wachschutz und kann manuell freigegeben und wieder erworben werden, wenn er referenziert wird. Eine Instanz des Objekts wird durch Aufruf von [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) erhalten.

### Erweiterungen für andere Schnittstellen

- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Objektinstanz zurück, von der aus alle anderen Funktionen zugänglich sind.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Direktive `screen-wake-lock` gesteuert. Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

## Beispiele

### Funktionsüberprüfung

Dieses Beispiel überprüft die Unterstützung für den Wachschutz und aktualisiert die Benutzeroberfläche entsprechend.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Wachschutz anfordern

Das folgende Beispiel zeigt, wie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt angefordert wird. Die Methode [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) basiert auf {{jsxref('Promise')}}, sodass wir eine asynchrone Funktion erstellen können, die im Gegenzug die Benutzeroberfläche aktualisiert, um zu zeigen, dass der Wachschutz aktiv ist.

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

### Wachschutz freigeben

Das folgende Beispiel zeigt, wie der zuvor erworbene Wachschutz freigegeben wird.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Lauschen auf Wachschutz-Freigabe

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn der Wachschutz aus irgendeinem Grund freigegeben wurde (beispielsweise beim Verlassen des aktiven Fensters/Tabs).

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Wachschutz wiedererwerben

Der folgende Code erwirbt den Wachschutz erneut, sollte sich die Sichtbarkeit des Dokuments ändern und der Wachschutz freigegeben werden.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenfügen

Den [vollständigen Code finden Sie hier auf GitHub](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet eine Schaltfläche, um einen Wachschutz zu erwerben und auch freizugeben, was wiederum die Benutzeroberfläche aktualisiert. Die Benutzeroberfläche aktualisiert sich auch, wenn der Wachschutz aus irgendeinem Grund automatisch freigegeben wird. Es gibt ein Kontrollkästchen, das, wenn es aktiviert ist, den Wachschutz automatisch wiedererwirbt, wenn sich der Sichtbarkeitsstatus des Dokuments ändert und wieder sichtbar wird.

## Leistungsüberlegungen

- Geben Sie den Bildschirm-Wachschutz frei, wenn der Benutzer die Aktivität beendet, die einen immer aktiven Bildschirm erforderte. Ein Ticketing-App-Modus, der QR-Codes verwendet, um Ticketinformationen zu übertragen, könnte den Wachschutz aktivieren, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), aber danach freigeben. Eine Präsentations-App könnte den Schutz nur während einer aktiven Präsentation halten, jedoch nicht beim Bearbeiten der Präsentation.
- Wenn Ihre App lang andauernde Downloads durchführt, ziehen Sie die Verwendung von Hintergrundablegen in Betracht.
- Wenn Ihre App Daten von einem Remote-Server synchronisiert, ziehen Sie die Verwendung von Hintergrundsynchronisierung in Betracht.
- Nur aktive Dokumente können Bildschirm-Wachschutze erwerben, und zuvor erworbene Schutze werden automatisch freigegeben, wenn das Dokument inaktiv wird. Stellen Sie daher sicher, dass der Bildschirm-Wachschutz bei Bedarf wieder erworben wird, wenn das Dokument aktiv wird (lauschen Sie auf das [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis).

## Sicherheitsüberlegungen

Der Zugriff auf die Screen Wake Lock API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} gesteuert.

Bei der Verwendung der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ist die standardmäßige Freigabeliste für `screen-wake-lock` `self`. Dies ermöglicht die Nutzung des Wachschutzes in gleichherkunftsverschachtelten Frames, verhindert jedoch, dass Inhalte von Drittanbietern Schutze verwenden. Die Nutzung durch Dritte kann ermöglicht werden, indem der Server zuerst den `Permissions-Policy`-Header einrichtet, um einem bestimmten Drittanbieter-Ursprung die Berechtigung zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Anschließend muss das `allow="screen-wake-lock"`-Attribut zum Rahmencontainer-Element für Quellen von diesem Ursprung hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"></iframe>
```

Browsers können den Bildschirm-Wachschutz in einem bestimmten Dokument auch aus einem implementationseigenen Grund blockieren, wie z. B. eine Benutzer- oder Plattform-Einstellung. Es wird erwartet, dass sie eine unaufdringliche Methode bieten, um den Benutzer darauf hinzuweisen, wenn der Wachschutz aktiv ist, und den Benutzern die Möglichkeit geben, den Bildschirm-Wachschutz der Anwendung zu entfernen.

Die [Permissions API](/de/docs/Web/API/Permissions_API)-Berechtigung `screen-wake-lock` kann verwendet werden, um zu testen, ob der Zugriff auf die Nutzung des Bildschirm-Wachschutzes `granted`, `denied` oder `prompt` (erfordert die Benutzerbestätigung eines Hinweises) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/) auf developer.chrome.com
