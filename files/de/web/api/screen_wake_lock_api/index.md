---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Gerätebildschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Verwendung

Die meisten Geräte schalten standardmäßig ihren Bildschirm nach einer bestimmten Zeit aus, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um die Akkulaufzeit zu schonen. Obwohl dies eine nützliche Funktion ist, benötigen einige Anwendungen, dass der Bildschirm wach bleibt, um am nützlichsten zu sein.

Die Screen Wake Lock API verhindert, dass der Bildschirm ausgeschaltet, gedimmt oder gesperrt wird. Sie bietet eine einfache plattformbasierte Lösung für sichtbare (aktive) Dokumente, um den Plattform-Bildschirm-Wachschutz zu aktivieren.

Es gibt viele Anwendungsfälle, um einen Bildschirm wach zu halten, einschließlich des Lesens eines E-Books, der Navigation auf einer Karte, des Verfolgens eines Rezepts, der Präsentation vor einem Publikum, der QR-/Barcode-Erkennung oder für Anwendungen, die Sprach- oder Gestensteuerung verwenden, anstatt taktile Eingaben (der Standardweg, um einen Bildschirm wach zu halten).

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) {{jsxref('Promise')}}-basierte Methode aufrufen, die aufgelöst wird, wenn die Plattform dies zulässt. Eine Anfrage kann aus mehreren Gründen abgelehnt werden, einschließlich Systemeinstellungen (wie Energiesparmodus oder niedrigem Batteriestand) oder wenn das Dokument nicht aktiv oder sichtbar ist. Es ist eine gute Praxis, eine Referenz auf das Sentinel-Objekt zu speichern, um der Anwendung zu ermöglichen, den Wachschutz später zu kontrollieren.

Das Sentinel ist mit dem zugrunde liegenden System-Wachschutz verbunden. Es kann vom System freigegeben werden, z.B. wenn die Batterieleistung zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die Methode [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) freigegeben werden. Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn erneut/still ein Bildschirmwachschutz erforderlich ist, muss die Anwendung einen neuen anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm anzulassen, um die Benutzerfreundlichkeit zu verbessern. Es ist eine gute Idee, eine Rückmeldung auf der Benutzeroberfläche anzuzeigen, um zu zeigen, ob der Wachschutz aktiv ist, und eine Möglichkeit für den Benutzer, ihn bei Bedarf zu deaktivieren.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Geräteschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Bietet einen Verweis auf den zugrunde liegenden Plattform-Wachschutz und kann, wenn er referenziert wird, manuell freigegeben und wiedererworben werden. Erhalten Sie eine Instanz des Objekts, indem Sie [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) aufrufen.

### Erweiterungen anderer Schnittstellen

- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}}

  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Objektinstanz zurück, über die auf alle anderen Funktionen zugegriffen werden kann.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugang zur API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy)-Richtlinie `screen-wake-lock` gesteuert.
    Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

## Beispiele

### Funktionsprüfung

Dieser Code prüft die Unterstützung von Wachschutz und aktualisiert die Benutzeroberfläche entsprechend.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Anfordern eines Wachschutzes

Das folgende Beispiel zeigt, wie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt angefordert wird. Die Methode [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) ist {{jsxref('Promise')}}-basiert, und daher können wir eine asynchrone Funktion erstellen, die wiederum die Benutzeroberfläche aktualisiert, um zu zeigen, dass der Wachschutz aktiv ist.

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

### Freigeben des Wachschutzes

Das folgende Beispiel zeigt, wie der zuvor erworbene Wachschutz freigegeben wird.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Auf den Wachschutz-Release hören

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn der Wachschutz aus irgendeinem Grund freigegeben wurde (z.B. beim Wechseln weg vom aktiven Fenster/Tab).

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Erneutes Erwerben eines Wachschutzes

Der folgende Code erwirbt den Wachschutz erneut, sollte sich die Sichtbarkeit des Dokuments ändern und der Wachschutz freigegeben werden.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenfügen

Sie können den [kompletten Code hier auf GitHub finden](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet einen Knopf, um einen Wachschutz zu erwerben und auch freizugeben, was wiederum die Benutzeroberfläche aktualisiert. Die Benutzeroberfläche aktualisiert sich auch, wenn der Wachschutz aus irgendeinem Grund automatisch freigegeben wird. Es gibt ein Kontrollkästchen, das, wenn es aktiviert ist, automatisch den Wachschutz erneut erwirbt, wenn sich der Sichtbarkeitszustand des Dokuments ändert und wieder sichtbar wird.

## Performance-Überlegungen

- Geben Sie den Bildschirmwachschutz frei, wenn der Benutzer die Aktivität beendet, die einen immer aktiven Bildschirm erforderte. Zum Beispiel könnte eine Ticketing-App, die QR-Codes verwendet, um Ticketinformationen zu übertragen, den Bildschirmwachschutz erwerben, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), ihn aber danach freigeben. Eine Präsentations-App könnte den Schutz nur während einer aktiven Präsentation halten, nicht aber während der Bearbeitung der Präsentation.
- Wenn Ihre App lang anhaltende Downloads durchführt, ziehen Sie einen Hintergrundabruf in Betracht.
- Wenn Ihre App Daten von einem Remote-Server synchronisiert, ziehen Sie die Verwendung von Hintergrundsynchronisierung in Betracht.
- Nur aktive Dokumente können Bildschirmwachschutz erwerben und zuvor erworbene Sperren werden automatisch freigegeben, wenn das Dokument inaktiv wird. Stellen Sie daher sicher, dass Sie den Bildschirmwachschutz, falls erforderlich, erneut erwerben, wenn das Dokument aktiv wird (hören Sie auf das [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis).

## Sicherheitsüberlegungen

Der Zugang zur Screen Wake Lock API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Richtlinie {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} gesteuert.

Bei Verwendung der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) ist die Standard-Zulassungsliste für `screen-wake-lock` `self`.
Dies ermöglicht die Nutzung von Wachschutz in gleichherkunftlichen verschachtelten Frames, verhindert jedoch, dass Drittanbieter-Inhalte Sperren verwenden.
Drittanbieter-Nutzung kann aktiviert werden, indem der Server zuerst den `Permissions-Policy`-Header setzt, um einer bestimmten Drittanbieter-Herkunft die Erlaubnis zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Dann muss das `allow="screen-wake-lock"`-Attribut dem Rahmen-Containerelement für Quellen von dieser Herkunft hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"/></iframe>
```

Browser können auch den Bildschirmwachschutz in einem bestimmten Dokument aus einem implementationsspezifischen Grund blockieren, wie z.B. einer Benutzer- oder Plattform-Einstellung.
Es wird erwartet, dass sie eine gewisse unaufdringliche Mechanismus bereitstellen, um den Benutzer zu informieren, wenn der Wachschutz aktiv ist, und den Benutzern die Möglichkeit geben, den Bildschirm der Anwendung zu entsperren.

Die [Permissions API](/de/docs/Web/API/Permissions_API)-Berechtigung `screen-wake-lock` kann verwendet werden, um zu testen, ob der Zugriff zum Verwenden der Bildschirmsperre `gewährt`, `verweigert` oder `abgefragt` werden muss (erfordert Benutzerbestätigung einer Eingabeaufforderung).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
- [Eine Screen Wake Lock API-Demo auf glitch](https://wake-lock-demo.glitch.me/)
