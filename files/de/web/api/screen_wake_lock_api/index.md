---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Geräte den Bildschirm abdunkeln oder sperren, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Verwendung

Die meisten Geräte schalten standardmäßig ihren Bildschirm nach einer bestimmten Zeit aus, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um Batteriestrom zu sparen. Obwohl dies eine nützliche Funktion ist, benötigen einige Anwendungen den Bildschirm, um wach zu bleiben, um am nützlichsten zu sein.

Die Screen Wake Lock API verhindert, dass der Bildschirm ausgeschaltet, abgedunkelt oder gesperrt wird. Sie bietet eine einfache plattformbasierte Lösung, damit sichtbare (aktive) Dokumente die Plattform-Bildschirm-Wach-Sperre anfordern können.

Es gibt viele Anwendungsfälle dafür, den Bildschirm eingeschaltet zu lassen, einschließlich dem Lesen eines E-Books, der Karten-Navigation, dem Folgen eines Rezepts, dem Präsentieren vor einem Publikum, dem Scannen eines QR- /Barcodes oder Anwendungen, die Sprach- oder Gestensteuerung verwenden, anstatt taktiler Eingaben (dem Standardweg, um einen Bildschirm wach zu halten).

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die Methode [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) aufrufen, die auf einem {{jsxref('Promise')}} basiert und aufgelöst wird, wenn die Plattform dies zulässt. Eine Anfrage kann aus verschiedenen Gründen abgelehnt werden, einschließlich Systemeinstellungen (wie Energiesparmodus oder niedriger Batteriestand) oder wenn das Dokument nicht aktiv oder sichtbar ist.
Es ist eine gute Praxis, eine Referenz auf das Sentinel-Objekt zu speichern, um der Anwendung später die Steuerung der Freigabe zu ermöglichen.

Das Sentinel ist an die zugrunde liegende System-Wach-Sperre angeschlossen. Es kann vom System freigegeben werden, z. B. wenn die Batterieleistung zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die Methode [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) freigegeben werden.
Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn erneut/eine Bildschirm-Wach-Sperre benötigt wird, muss die Anwendung eine neue anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm eingeschaltet zu lassen, um die Benutzerfreundlichkeit zu verbessern. Es ist eine gute Idee, eine Rückmeldung auf der Oberfläche anzuzeigen, um zu zeigen, ob die Wach-Sperre aktiv ist, und eine Möglichkeit für den Benutzer bereitzustellen, sie bei Bedarf zu deaktivieren.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Gerätescreens abgedunkelt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Bietet einen Griff zur zugrunde liegenden Plattform-Wach-Sperre, die, wenn referenziert, manuell freigegeben und wiedererworben werden kann. Erhalten Sie eine Instanz des Objekts, indem Sie [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) aufrufen.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}}

  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Objektinstanz zurück, von der aus alle anderen Funktionen zugänglich sind.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Direktive `screen-wake-lock` gewährt.
    Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

## Beispiele

### Funktionsprüfung

Dieser Code prüft die Unterstützung für Wach-Sperren und aktualisiert die Benutzeroberfläche entsprechend.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Anfordern einer Wach-Sperre

Das folgende Beispiel zeigt, wie man ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt anfordert. Die Methode [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) basiert auf einem {{jsxref('Promise')}}, sodass wir eine asynchrone Funktion erstellen können, die wiederum die Benutzeroberfläche aktualisiert, um anzuzeigen, dass die Wach-Sperre aktiv ist.

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

### Freigeben der Wach-Sperre

Das folgende Beispiel zeigt, wie man die zuvor erworbene Wach-Sperre freigibt.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Lauschen auf die Freigabe der Wach-Sperre

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn die Wach-Sperre aus irgendeinem Grund freigegeben wurde (z.B. beim Navigieren weg vom aktiven Fenster/Tab).

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Wiedererwerben einer Wach-Sperre

Der folgende Code erwirbt die Wach-Sperre wieder, falls sich die Sichtbarkeit des Dokuments ändert und die Wach-Sperre freigegeben wird.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenfügen

Sie finden den [vollständigen Code hier auf GitHub](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet einen Knopf, um eine Wach-Sperre zu erwerben und auch wieder freizugeben, was wiederum die Benutzeroberfläche aktualisiert. Die Benutzeroberfläche aktualisiert sich auch, wenn die Wach-Sperre aus irgendeinem Grund automatisch freigegeben wird. Es gibt ein Kontrollkästchen, das bei Aktivierung die Wach-Sperre automatisch wiedererwirbt, wenn sich der Sichtbarkeitsstatus des Dokuments ändert und wieder sichtbar wird.

## Leistungsüberlegungen

- Geben Sie die Bildschirm-Wach-Sperre frei, wenn der Benutzer die Aktivität beendet, die einen immer eingeschalteten Bildschirm erforderte. Zum Beispiel könnte eine Ticketing-App, die QR-Codes zum Übertragen von Ticketinformationen verwendet, die Bildschirm-Wach-Sperre erwerben, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), aber danach freigeben. Eine Präsentations-App könnte die Sperre nur während einer aktiven Präsentation halten, aber nicht, wenn die Präsentation bearbeitet wird.
- Wenn Ihre App lang laufende Downloads durchführt, sollten Sie Hintergrundabrufe in Betracht ziehen.
- Wenn Ihre App Daten von einem entfernten Server synchronisiert, sollten Sie Hintergrund-Synchronisation in Betracht ziehen.
- Nur aktive Dokumente können Bildschirm-Wach-Sperren erwerben und zuvor erworbene Sperren werden automatisch freigegeben, wenn das Dokument inaktiv wird. Stellen Sie daher sicher, die Bildschirm-Wach-Sperre erneut zu erwerben, falls nötig, wenn das Dokument aktiv wird (lauschen Sie auf das [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis).

## Sicherheitsüberlegungen

Der Zugriff auf die Screen Wake Lock API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/screen-wake-lock", "screen-wake-lock")}} kontrolliert.

Beim Verwenden der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ist die Standard-Zulassungsliste für `screen-wake-lock` `self`.
Dies erlaubt die Verwendung der Wach-Sperre in gleich-originierter verschachtelter Frames, verhindert jedoch, dass Drittanbieterinhalte die Sperren verwenden.
Die Drittanbieter-Nutzung kann aktiviert werden, indem der Server zunächst den `Permissions-Policy`-Header setzt, um eine Berechtigung für einen bestimmten Drittanbieter-Ursprung zu gewähren.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Dann muss das Attribut `allow="screen-wake-lock"` dem Frame-Containerelement für Quellen von diesem Ursprung hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"></iframe>
```

Browser können den Bildschirm-Sperren in einem bestimmten Dokument auch aus einem implementierungsspezifischen Grund blockieren, wie durch eine Benutzer- oder Plattform-Einstellung.
Es wird erwartet, dass sie einen unaufdringlichen Mechanismus bieten, um den Benutzer zu informieren, wenn die Wach-Sperre aktiv ist, und den Benutzern die Möglichkeit geben, die Bildschirmsperre der Anwendung zu entfernen.

Die [Permissions API](/de/docs/Web/API/Permissions_API) `screen-wake-lock`-Berechtigung kann verwendet werden, um zu testen, ob der Zugriff auf die Bildschirmsperre `granted`, `denied` oder `prompt` ist (erfordert die Benutzeranerkennung einer Eingabeaufforderung).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
- [Eine Screen Wake Lock API Demo auf Glitch](https://wake-lock-demo.glitch.me/)
