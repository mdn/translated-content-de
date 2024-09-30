---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 20ee91ca1bd5568411dcfc306213201d9d5b65a5
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Geräte den Bildschirm dimmen oder sperren, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Nutzung

Die meisten Geräte schalten standardmäßig ihren Bildschirm nach einer bestimmten Zeit aus, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um Batteriestrom zu sparen. Obwohl dies eine nützliche Funktion ist, benötigen einige Anwendungen, dass der Bildschirm wach bleibt, um am nützlichsten zu sein.

Die Screen Wake Lock API verhindert, dass der Bildschirm ausgeschaltet, gedimmt oder gesperrt wird. Sie ermöglicht eine einfache plattformbasierte Lösung, damit sichtbare (aktive) Dokumente die Plattform-Bildschirm-Wake-Sperre erwerben können.

Es gibt viele Anwendungsfälle, bei denen ein Bildschirm an bleiben sollte, einschließlich dem Lesen eines E-Books, der Navigation mit einer Karte, dem Folgen eines Rezepts, der Präsentation vor einem Publikum, dem Scannen eines QR-/Barcodes oder Anwendungen, die Sprach- oder Gestensteuerung verwenden, anstatt der taktilen Eingabe (der Standardmethode, um einen Bildschirm wach zu halten).

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) {{jsxref('Promise')}}-basierte Methode aufrufen, die aufgelöst wird, wenn die Plattform dies zulässt. Eine Anfrage kann aus mehreren Gründen abgelehnt werden, einschließlich Systemeinstellungen (wie Energiesparmodus oder niedriger Batteriestand) oder wenn das Dokument nicht aktiv oder sichtbar ist. Es ist eine gute Praxis, eine Referenz zum Sentinel-Objekt zu speichern, um der Anwendung später die Kontrolle über die Freigabe zu ermöglichen.

Das Sentinel ist an die zugrunde liegende System-Wake-Sperre angehängt. Es kann vom System freigegeben werden, wiederum wenn die Batterieleistung zu gering ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release)-Methode freigegeben werden. Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn erneut oder weiterhin eine Bildschirm-Wake-Sperre erforderlich ist, muss die Anwendung eine neue anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm wach zu halten, um die Benutzerfreundlichkeit zu verbessern. Es ist ratsam, eine Rückmeldung in der Benutzeroberfläche anzuzeigen, um zu zeigen, ob die Wake-Sperre aktiv ist und eine Möglichkeit für den Benutzer bereitzustellen, sie zu deaktivieren, falls gewünscht.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Gerätebildschirme dimmen oder sperren, wenn eine Anwendung weiterlaufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Bietet einen Handle zur zugrunde liegenden Plattform-Wake-Sperre und kann bei Referenzierung manuell freigegeben und erneut erworben werden. Erhalten Sie eine Instanz des Objekts, indem Sie [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) aufrufen.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.wakelock`](/de/docs/Web/API/Navigator/wakelock) {{ReadOnlyInline}}

  - : Gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Objektinstanz zurück, von der aus alle anderen Funktionen zugänglich sind.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy)-Direktive `screen-wake-lock` gesteuert. Siehe [Sicherheitsaspekte](#sicherheitsaspekte) unten.

## Beispiele

### Funktionsprüfung

Dieser Code prüft die Unterstützung für Wake-Sperren und aktualisiert die Benutzeroberfläche entsprechend.

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

Das folgende Beispiel zeigt, wie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt angefordert wird. Die [`WakeLock.request`](/de/docs/Web/API/WakeLock/request)-Methode basiert auf {{jsxref('Promise')}} und wir können eine asynchrone Funktion erstellen, die wiederum die Benutzeroberfläche aktualisiert, um zu zeigen, dass die Wake-Sperre aktiv ist.

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

### Zuhören auf die Freigabe der Wake-Sperre

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn die Wake-Sperre aus irgendeinem Grund freigegeben wurde (z. B. beim Verlassen des aktiven Fensters/Tabs).

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Erneutes Erhalten einer Wake-Sperre

Der folgende Code erwirbt die Wake-Sperre erneut, falls sich die Sichtbarkeit des Dokuments ändert und die Wake-Sperre freigegeben wird.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenfügen

Sie finden den [kompletten Code hier auf GitHub](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet einen Button, um eine Wake-Sperre zu erwerben und sie auch freizugeben, was wiederum die Benutzeroberfläche aktualisiert. Die Benutzeroberfläche wird auch aktualisiert, wenn die Wake-Sperre aus irgendeinem Grund automatisch freigegeben wird. Es gibt ein Kontrollkästchen, das, wenn es aktiviert ist, die Wake-Sperre automatisch erneut erwirbt, falls sich der Sichtbarkeitsstatus des Dokuments ändert und wieder sichtbar wird.

## Leistungsaspekte

- Geben Sie die Bildschirm-Wake-Sperre frei, wenn der Benutzer die Aktivität beendet, die einen immer eingeschalteten Bildschirm erforderte. Zum Beispiel könnte eine Ticketing-App, die QR-Codes verwendet, um Ticketinformationen zu übertragen, die Bildschirm-Wake-Sperre erwerben, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), sie aber danach freigeben. Eine Präsentations-App könnte die Sperre nur halten, während eine Präsentation aktiv ist, aber nicht, wenn die Präsentation bearbeitet wird.
- Wenn Ihre App lang andauernde Downloads durchführt, sollten Sie die Verwendung von Hintergrund-Fetch in Betracht ziehen.
- Wenn Ihre App Daten von einem Remote-Server synchronisiert, sollten Sie die Verwendung von Hintergrund-Synchronisierung in Betracht ziehen.
- Nur aktive Dokumente können Bildschirm-Wake-Sperren erwerben, und zuvor erworbene Sperren werden automatisch freigegeben, wenn ein Dokument inaktiv wird. Stellen Sie daher sicher, die Bildschirm-Wake-Sperre bei Bedarf erneut zu erwerben, wenn das Dokument aktiv wird (z. B. auf das [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis achten).

## Sicherheitsaspekte

Der Zugriff auf die Screen Wake Lock API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} gesteuert.

Bei Verwendung der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) ist die Standard-Erlaubnisliste für `screen-wake-lock` `self`. Dies ermöglicht die Nutzung der Wake-Sperre in eingebetteten Frames mit demselben Ursprung, verhindert jedoch die Nutzung durch Drittinhalte. Die Nutzung durch Dritte kann aktiviert werden, indem der Server zuerst den `Permissions-Policy`-Header setzt, um einer bestimmten Drittanbieterquelle die Erlaubnis zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Dann muss das Attribut `allow="screen-wake-lock"` dem Frame-Container-Element für Quellen von diesem Ursprung hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"/></iframe>
```

Browser können auch die Bildschirm-Sperre in einem bestimmten Dokument aus implementierungsspezifischen Gründen blockieren, wie z.B. eine Benutzer- oder Plattform-Einstellung. Es wird erwartet, dass sie einen unaufdringlichen Mechanismus bereitstellen, um den Benutzer darüber zu informieren, wenn die Wake-Sperre aktiv ist, und den Benutzern die Möglichkeit geben, die Bildschirm-Sperre der Anwendung zu entfernen.

Die [Permissions API](/de/docs/Web/API/Permissions_API) `screen-wake-lock`-Berechtigung kann verwendet werden, um zu testen, ob der Zugriff auf die Verwendung der Bildschirm-Sperre `granted`, `denied` oder `prompt` (Benutzerbestätigung einer Eingabeaufforderung erforderlich) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
- [Eine Screen Wake Lock API-Demo auf Glitch](https://wake-lock-demo.glitch.me/)
