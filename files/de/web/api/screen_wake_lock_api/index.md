---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: de5b264fa7bf6bb49811bf79f8f28f10835bfb79
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Geräte den Bildschirm dimmen oder sperren, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Nutzung

Die meisten Geräte schalten standardmäßig ihren Bildschirm nach einer bestimmten Zeit ab, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um den Akku zu schonen. Während dies eine nützliche Funktion ist, benötigen einige Anwendungen den Bildschirm, um wach zu bleiben, um ihren vollen Nutzen entfalten zu können.

Die Screen Wake Lock API verhindert, dass der Bildschirm ausgeschaltet, gedimmt oder gesperrt wird. Sie ermöglicht eine einfache, plattformbasierte Lösung für sichtbare (aktive) Dokumente, um die Plattform-Bildschirmsperre zu erwerben.

Es gibt viele Anwendungsfälle, in denen ein Bildschirm wach bleiben muss, einschließlich dem Lesen eines E-Books, der Navigation in einer Karte, der Befolgung eines Rezepts, dem Präsentieren vor einem Publikum, dem Scannen eines QR-/Barcodes oder Anwendungen, die Sprach- oder Gestensteuerung anstelle der taktilen Eingabe verwenden (die standardmäßige Methode, um einen Bildschirm wach zu halten).

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt durch den Aufruf der auf [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) basierenden {{jsxref('Promise')}}-Methode, die aufgelöst wird, wenn die Plattform dies zulässt. Ein Antrag kann aus verschiedenen Gründen abgelehnt werden, einschließlich Systemeinstellungen (z. B. Energiesparmodus oder niedriger Akkustand) oder wenn das Dokument nicht aktiv oder sichtbar ist.
Es ist eine gute Praxis, eine Referenz auf das Sentinel-Objekt zu speichern, um der Anwendung später die Kontrolle über die Freigabe zu ermöglichen.

Das Sentinel ist an die zugrunde liegende System-Wake-Lock gebunden. Es kann vom System freigegeben werden, erneut, wenn der Akkustand zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die Methode [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) freigegeben werden.
Nachdem es freigegeben wurde, kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn eine Bildschirmsperre erneut erforderlich ist, muss die Anwendung eine neue anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm eingeschaltet zu halten, um die Benutzerfreundlichkeit zu verbessern. Es ist ratsam, auf der Benutzeroberfläche ein Feedback zu zeigen, um anzuzeigen, ob Wake Lock aktiv ist, und eine Möglichkeit für den Benutzer, diese zu deaktivieren, falls gewünscht.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Gerätebildschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Bietet eine Schnittstelle zur zugrundeliegenden Plattform-Wake-Lock und kann bei Referenzierung manuell freigegeben und erneut erworben werden. Erhalten Sie eine Instanz des Objekts durch den Aufruf von [`WakeLock.request`](/de/docs/Web/API/WakeLock/request).

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}}
  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Objektinstanz zurück, über die alle anderen Funktionen zugänglich sind.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Richtlinie `screen-wake-lock` gesteuert.
    Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

## Beispiele

### Funktionen erkennen

Dieser Code prüft die Unterstützung von Wake Lock und aktualisiert entsprechend die Benutzeroberfläche.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Anfordern eines Wake Locks

Das folgende Beispiel demonstriert, wie man ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt anfordert. Die Methode [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) basiert auf {{jsxref('Promise')}}, daher können wir eine asynchrone Funktion erstellen, die ihrerseits die Benutzeroberfläche aktualisiert, um anzuzeigen, dass Wake Lock aktiv ist.

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

### Freigeben von Wake Lock

Das folgende Beispiel zeigt, wie das zuvor erworbene Wake Lock freigegeben wird.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Überwachung der Freigabe von Wake Lock

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn das Wake Lock aus irgendeinem Grund (wie das Navigieren weg vom aktiven Fenster/Tab) freigegeben wurde.

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Erneutes Erwerben eines Wake Locks

Der folgende Code erwirbt den Wake Lock erneut, sollte sich die Sichtbarkeit des Dokuments ändern und der Wake Lock freigegeben werden.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenfügen

Sie können den [vollständigen Code auf GitHub hier finden](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet einen Button, um einen Wake Lock zu erwerben und freizugeben, was wiederum die Benutzeroberfläche aktualisiert. Die Benutzeroberfläche wird auch aktualisiert, wenn der Wake Lock aus irgendeinem Grund automatisch freigegeben wird. Es gibt ein Kontrollkästchen, das bei Aktivierung den Wake Lock automatisch erneut erwirbt, wenn sich der Sichtbarkeitsstatus des Dokuments ändert und wieder sichtbar wird.

## Leistungserwägungen

- Geben Sie die Bildschirmsperre frei, wenn die Aktivität, die einen dauerhaft eingeschalteten Bildschirm erforderte, beendet ist. Beispielsweise könnte eine Ticket-App, die QR-Codes verwendet, um Ticketinformationen zu übertragen, die Bildschirmsperre erwerben, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), aber danach freigeben. Eine Präsentations-App könnte die Sperre nur halten, während eine Präsentation aktiv ist, aber nicht, wenn die Präsentation bearbeitet wird.
- Wenn Ihre App lang andauernde Downloads durchführt, ziehen Sie die Verwendung eines Hintergrundabrufs in Betracht.
- Wenn Ihre App Daten von einem Remote-Server synchronisiert, ziehen Sie die Verwendung der Hintergrundsynchronisierung in Betracht.
- Nur aktive Dokumente können Bildschirmsperren erwerben, und zuvor erworbene Sperren werden automatisch freigegeben, wenn das Dokument inaktiv wird. Stellen Sie daher sicher, dass Sie die Bildschirmsperre bei Bedarf erneut erwerben, wenn das Dokument aktiv wird (lauschen Sie auf das [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis).

## Sicherheitsüberlegungen

Der Zugriff auf die Screen Wake Lock API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Richtlinie {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} kontrolliert.

Beim Verwenden der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ist die standardmäßige Zulassungsliste für `screen-wake-lock` `self`.
Dies ermöglicht die Nutzung der Sperre in gleichherkunftsverschachtelten Frames, verhindert jedoch die Nutzung durch Drittinhalte.
Die Nutzung durch Dritte kann aktiviert werden, indem der Server zuerst den `Permissions-Policy`-Header setzt, um einem bestimmten Drittanbieter-Ursprung die Erlaubnis zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Dann muss das `allow="screen-wake-lock"`-Attribut dem Frame-Container-Element für Quellen von diesem Ursprung hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"></iframe>
```

Browser können auch die Bildschirmsperre in einem bestimmten Dokument aus implementierungsspezifischen Gründen blockieren, z. B. durch eine Benutzer- oder Plattform-Einstellung.
Es wird erwartet, dass sie einen unaufdringlichen Mechanismus bereitstellen, um den Benutzer zu informieren, wenn Wake Lock aktiv ist, und den Benutzern die Möglichkeit geben, die Bildschirmsperre der Anwendung zu entfernen.

Die [Permissions API](/de/docs/Web/API/Permissions_API)-Berechtigung `screen-wake-lock` kann verwendet werden, um zu testen, ob der Zugriff zur Nutzung der Bildschirmsperre `granted`, `denied` oder `prompt` (erfordert Benutzerbestätigung eines Prompts) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/) auf developer.chrome.com
