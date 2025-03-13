---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Gerätebildschirme gedimmt oder gesperrt werden, wenn eine Anwendung weiterhin aktiv bleiben muss.

## Konzepte und Nutzung

Die meisten Geräte schalten ihren Bildschirm standardmäßig nach einer bestimmten Zeit ab, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um Batterieleistung zu sparen. Obwohl dies eine nützliche Funktion ist, benötigen einige Anwendungen, dass der Bildschirm wach bleibt, um optimal genutzt zu werden.

Die Screen Wake Lock API verhindert, dass der Bildschirm ausgeschaltet, gedimmt oder gesperrt wird. Sie bietet eine einfache plattformbasierte Lösung, damit sichtbare (aktive) Dokumente die Plattform-Bildschirm-Wachhaltung ("screen wake lock") erwerben können.

Es gibt viele Anwendungsfälle, bei denen es sinnvoll ist, den Bildschirm eingeschaltet zu lassen, wie beim Lesen eines E-Books, bei der Navigation mit einer Karte, beim Folgen eines Rezepts, bei einer Präsentation vor einem Publikum, beim Scannen eines QR-/Barcodes oder bei Anwendungen, die Sprach- oder Gestensteuerung nutzen, anstatt taktile Eingaben (die Standardmethode zum Wachhalten eines Bildschirms).

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) {{jsxref('Promise')}}-basierte Methode aufrufen, die aufgelöst wird, wenn die Plattform dies zulässt. Ein Antrag kann aus verschiedenen Gründen abgelehnt werden, einschließlich Systemeinstellungen (wie Energiesparmodus oder niedrigem Batteriestand) oder wenn das Dokument nicht aktiv oder sichtbar ist. Es ist eine gute Praxis, eine Referenz auf das Sentinel-Objekt zu speichern, um die Anwendung später steuern zu lassen, ob sie es freigeben möchte.

Das Sentinel ist an das zugrundeliegende System-Wachhaltungssystem gebunden. Es kann vom System freigegeben werden, wenn beispielsweise die Batterieleistung zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release)-Methode freigegeben werden. Nachdem es freigegeben wurde, kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn eine Bildschirm-Wachhaltung erneut/immer noch erforderlich ist, muss die Anwendung eine neue anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm zur Verbesserung der Benutzerfreundlichkeit eingeschaltet zu lassen. Es ist eine gute Idee, auf der Benutzeroberfläche ein Feedback anzuzeigen, um zu zeigen, ob die Wachhaltung aktiv ist, und dem Benutzer eine Möglichkeit zu geben, sie zu deaktivieren, wenn er dies wünscht.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass sich Bildschirme von Geräten dimmen oder sperren, wenn eine Anwendung weiterhin laufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Bietet Zugriff auf die zugrundeliegende Plattform-Wachhaltung und kann manuell freigegeben und erneut angefordert werden, wenn es referenziert wird. Erhalten Sie eine Instanz des Objekts, indem Sie [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) aufrufen.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}}

  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Objektinstanz zurück, von der aus alle anderen Funktionen zugänglich sind.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Richtlinie `screen-wake-lock` beschränkt. Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

## Beispiele

### Feature-Erkennung

Dieser Code prüft die Unterstützung der Wachhaltung und aktualisiert die Benutzeroberfläche entsprechend.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Anfordern einer Wachhaltung

Das folgende Beispiel zeigt, wie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt angefordert wird. Die [`WakeLock.request`](/de/docs/Web/API/WakeLock/request)-Methode ist {{jsxref('Promise')}}-basiert, sodass wir eine asynchrone Funktion erstellen können, die wiederum die Benutzeroberfläche aktualisiert, um anzuzeigen, dass die Wachhaltung aktiv ist.

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

### Freigeben der Wachhaltung

Das folgende Beispiel zeigt, wie die zuvor erworbene Wachhaltung freigegeben wird.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Lauschen auf die Freigabe der Wachhaltung

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn die Wachhaltung aus irgendeinem Grund freigegeben wurde (z. B. beim Navigieren weg vom aktiven Fenster/Tab).

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Erneutes Anfordern einer Wachhaltung

Der folgende Code fordert die Wachhaltung erneut an, falls sich die Sichtbarkeit des Dokuments ändert und die Wachhaltung freigegeben wird.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenfügen

Sie können den [vollständigen Code hier auf GitHub finden](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet einen Button, um eine Wachhaltung anzufordern und auch freizugeben, was wiederum die Benutzeroberfläche aktualisiert. Die Benutzeroberfläche aktualisiert sich auch, wenn die Wachhaltung automatisch aus irgendeinem Grund freigegeben wird. Es gibt ein Kontrollkästchen, das, wenn es aktiviert ist, die Wachhaltung automatisch neu anfordert, wenn sich der Sichtbarkeitszustand des Dokuments ändert und wieder sichtbar wird.

## Leistungsüberlegungen

- Geben Sie die Bildschirm-Wachhaltung frei, wenn der Benutzer die Aktivität beendet, die den immer aktiven Bildschirm erforderte. Beispielsweise könnte eine Ticketing-App, die QR-Codes zur Übertragung von Ticketinformationen verwendet, die Bildschirm-Wachhaltung anfordern, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), sie aber danach freigeben. Eine Präsentations-App könnte die Wachhaltung nur während einer aktiven Präsentation halten, aber nicht, wenn die Präsentation bearbeitet wird.
- Wenn Ihre App lang andauernde Downloads durchführt, ziehen Sie in Betracht, den Hintergrundabruf zu verwenden.
- Wenn Ihre App Daten von einem entfernten Server synchronisiert, ziehen Sie in Betracht, die Hintergrundsynchronisierung zu verwenden.
- Nur aktive Dokumente können Bildschirm-Wachhaltungen anfordern, und zuvor erworbene Halterungen werden automatisch freigegeben, wenn das Dokument inaktiv wird. Stellen Sie daher sicher, dass Sie die Bildschirm-Wachhaltung bei Bedarf erneut anfordern, wenn das Dokument aktiv wird (lauschen Sie auf das [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis).

## Sicherheitsüberlegungen

Der Zugriff auf die Screen Wake Lock API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Richtlinie {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} kontrolliert.

Beim Verwenden der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ist die Standard-Zulassungsliste für `screen-wake-lock` auf `self` gesetzt. Dies erlaubt die Nutzung der Wachhaltung in Nested Frames mit gleichem Ursprung, verhindert jedoch, dass Drittanbieter-Inhalte die Halterung nutzen. Drittanbieter-Nutzung kann aktiviert werden, indem der Server zunächst den `Permissions-Policy`-Header setzt, um einer bestimmten Drittanbieter-Herkunft die Berechtigung zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Dann muss das Attribut `allow="screen-wake-lock"` dem Frame-Containerelement für Quellen aus dieser Herkunft hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"/></iframe>
```

Browser können die Bildschirm-Wachhaltung auch in einem bestimmten Dokument aus einem implementationsspezifischen Grund blockieren, wie z. B. eine Benutzer- oder Plattform-Einstellung. Es wird erwartet, dass sie einen unaufdringlichen Mechanismus bereitstellen, um den Benutzer zu informieren, wenn die Wachhaltung aktiv ist, und den Benutzern die Möglichkeit geben, die Bildschirm-Wachhaltung der Anwendung zu entfernen.

Die [Permissions API](/de/docs/Web/API/Permissions_API) `screen-wake-lock`-Berechtigung kann verwendet werden, um zu testen, ob der Zugriff auf die Bildschirm-Wachhaltung `granted`, `denied` oder `prompt` (erfordert Benutzerbestätigung in Form eines Prompts) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
- [Eine Demo der Screen Wake Lock API auf Glitch](https://wake-lock-demo.glitch.me/)
