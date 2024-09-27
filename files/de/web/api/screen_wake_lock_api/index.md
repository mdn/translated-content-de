---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 20ee91ca1bd5568411dcfc306213201d9d5b65a5
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Geräte das Display abdunkeln oder sperren, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Verwendung

Die meisten Geräte schalten ihr Display standardmäßig nach einer bestimmten Zeit ab, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um den Stromverbrauch zu reduzieren. Obwohl dies eine nützliche Funktion ist, benötigen einige Anwendungen, dass das Display wach bleibt, um optimal zu funktionieren.

Die Screen Wake Lock API verhindert, dass sich das Display ausschaltet, verdunkelt oder sperrt. Sie ermöglicht eine einfache plattformbasierte Lösung für sichtbare (aktive) Dokumente, um das plattformbezogene Display-Wachhalte-Feature zu nutzen.

Es gibt viele Anwendungsfälle, bei denen ein Display eingeschaltet bleiben sollte, wie zum Beispiel beim Lesen eines E-Books, bei der Navigation mit der Karte, beim Folgen eines Rezepts, beim Präsentieren vor einem Publikum, beim Scannen eines QR-/Barcodes oder für Anwendungen, die Sprach- oder Gestensteuerung verwenden, statt taktiler Eingaben (der Standardmethode, um ein Display wach zu halten).

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die Methode [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) aufrufen, die auf {{jsxref('Promise')}} basiert und bei Erlaubnis des Systems aufgelöst wird. Ein Antrag kann aus verschiedenen Gründen abgelehnt werden, einschließlich Systemeinstellungen (wie Energiesparmodus oder niedriger Akkustand) oder wenn das Dokument nicht aktiv oder sichtbar ist. Es ist eine gute Praxis, eine Referenz auf das Sentinelobjekt zu speichern, um der Anwendung später die Steuerung des Freigebens zu ermöglichen.

Das Sentinel ist mit dem zugrunde liegenden System-Wachhalte-Feature verknüpft. Es kann vom System freigegeben werden, wiederum bei zu geringem Akkustand oder wenn das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die Methode [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) freigegeben werden. Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn weiterhin ein Display-Wachhalte-Feature benötigt wird, muss die Anwendung ein neues anfordern.

Die Screen Wake Lock API sollte verwendet werden, um das Display zum Nutzen der Benutzerfreundlichkeit eingeschaltet zu lassen. Es ist eine gute Idee, im Interface eine Rückmeldung anzuzeigen, ob das Wachhalte-Feature aktiv ist und eine Möglichkeit für den Benutzer, es bei Bedarf zu deaktivieren.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Gerätescreens abgedunkelt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Bietet einen Griff zum zugrunde liegenden Plattform-Wachhalte-Feature und kann bei Referenzierung manuell freigegeben und erneut erworben werden. Eine Instanz des Objekts erhalten Sie durch Aufrufen von [`WakeLock.request`](/de/docs/Web/API/WakeLock/request).

### Erweiterungen anderer Schnittstellen

- [`Navigator.wakelock`](/de/docs/Web/API/Navigator/wakelock) {{ReadOnlyInline}}

  - : Gibt ein [`WakeLock`](/de/docs/Web/API/WakeLock)-Objekt zurück, über das alle anderen Funktionalitäten zugänglich sind.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy)-Direktive `screen-wake-lock` gesteuert. Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

## Beispiele

### Feature-Erkennung

Dieser Code überprüft die Unterstützung des Wachhalte-Features und aktualisiert die Benutzeroberfläche entsprechend.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Anfordern eines Wachhalte-Features

Das folgende Beispiel zeigt, wie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt angefordert wird. Die Methode [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) basiert auf {{jsxref('Promise')}}, und so können wir eine asynchrone Funktion erstellen, die wiederum die Benutzeroberfläche aktualisiert, um anzuzeigen, dass das Wachhalte-Feature aktiv ist.

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

### Freigabe des Wachhalte-Features

Das folgende Beispiel zeigt, wie das zuvor erworbene Wachhalte-Feature freigegeben wird.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Lauschen auf die Freigabe des Wachhalte-Features

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn das Wachhalte-Feature aus irgendeinem Grund freigegeben wurde (z. B. beim Verlassen des aktiven Fensters/Tabs).

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Erneutes Erwerben eines Wachhalte-Features

Der folgende Code erwirbt das Wachhalte-Feature erneut, sollte sich die Sichtbarkeit des Dokuments ändern und das Wachhalte-Feature freigegeben werden.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenfügen

Der [vollständige Code ist hier auf GitHub zu finden](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet einen Button, um ein Wachhalte-Feature zu erwerben und es auch freizugeben, wodurch wiederum die Benutzeroberfläche aktualisiert wird. Die Benutzeroberfläche aktualisiert sich auch, wenn das Wachhalte-Feature automatisch aus irgendeinem Grund freigegeben wird. Es gibt ein Kontrollkästchen, das, wenn es aktiviert ist, das Wachhalte-Feature automatisch erneut erwirbt, wenn der Sichtbarkeitsstatus des Dokuments sich ändert und wieder sichtbar wird.

## Leistungsüberlegungen

- Geben Sie das Display-Wachhalte-Feature frei, wenn der Benutzer die Aktivität beendet, die ein ständig eingeschaltetes Display erforderte. Beispielsweise könnte eine Ticket-App, die QR-Codes zur Übermittlung von Ticketinformationen verwendet, das Display-Wachhalte-Feature erwerben, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), es danach aber freigeben. Eine Präsentations-App könnte das Feature nur während einer aktiven Präsentation halten, nicht aber beim Bearbeiten der Präsentation.
- Wenn Ihre App lange Laufzeit-Downloads durchführt, sollten Sie den Hintergrundabruf verwenden.
- Wenn Ihre App Daten von einem entfernten Server synchronisiert, sollten Sie den Hintergrundsynchronisation verwenden.
- Nur aktive Dokumente können Display-Wachhalte-Features erwerben, und zuvor erworbene Features werden automatisch freigegeben, wenn das Dokument inaktiv wird. Stellen Sie also sicher, dass das Display-Wachhalte-Feature bei Bedarf erneut erworben wird, wenn das Dokument aktiv wird (lauschen Sie auf das [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis).

## Sicherheitsüberlegungen

Der Zugriff auf die Screen Wake Lock API wird durch die Direktive [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} gesteuert.

Bei Verwendung der [Berechtigungs-Richtlinie](/de/docs/Web/HTTP/Permissions_Policy) ist die Standard-Zulassungsliste für `screen-wake-lock` `self`.
Dies ermöglicht die Verwendung von Bildschirm-Wake-Locks in gleichen Ursprungs-Nested-Frames, verhindert aber die Nutzung durch Drittdienste.
Die Drittverwendung kann aktiviert werden, indem der Server zuerst den `Permissions-Policy`-Header setzt, um einer bestimmten Drittanbieter-Herkunft die Erlaubnis zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Dann muss das Attribut `allow="screen-wake-lock"` dem Frame-Containerelement für Quellen von dieser Herkunft hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"/></iframe>
```

Browser können das Display-Wachhalte-Feature in einem bestimmten Dokument auch aus einem implementationsspezifischen Grund blockieren, wie z. B. einer Benutzer- oder Plattform-Einstellung.
Es wird erwartet, dass sie einen unaufdringlichen Mechanismus bereitstellen, um den Benutzer darüber zu informieren, wenn das Wachhalte-Feature aktiv ist, und um den Benutzern die Möglichkeit zu geben, das Display-Wachhalte-Feature der Anwendung zu entfernen.

Die [Berechtigungs-API](/de/docs/Web/API/Permissions_API)-Berechtigung `screen-wake-lock` kann verwendet werden, um zu testen, ob der Zugriff zum Verwenden des Bildschirm-Sperrschutzes `granted`, `denied` oder `prompt` (erfordert eine Benutzerbestätigung einer Eingabeaufforderung) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
- [Ein Screen Wake Lock API-Demo auf Glitch](https://wake-lock-demo.glitch.me/)
