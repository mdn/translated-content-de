---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Geräte den Bildschirm abdunkeln oder sperren, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Verwendung

Die meisten Geräte schalten ihren Bildschirm standardmäßig nach einer bestimmten Zeit aus, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies auch, um Akkustrom zu sparen. Obwohl dies eine nützliche Funktion ist, muss der Bildschirm bei manchen Anwendungen eingeschaltet bleiben, damit sie sinnvoll genutzt werden können.

Die Screen Wake Lock API verhindert, dass sich der Bildschirm ausschaltet, abdunkelt oder sperrt. Sie bietet für sichtbare (aktive) Dokumente eine einfache, plattformbasierte Möglichkeit, einen Screen Wake Lock anzufordern.

Es gibt viele Anwendungsfälle, in denen der Bildschirm eingeschaltet bleiben soll: etwa beim Lesen eines E-Books, bei der Kartennavigation, beim Nachkochen eines Rezepts, während einer Präsentation, beim Scannen eines QR-Codes oder Barcodes sowie bei Anwendungen, die Sprach- oder Gestensteuerung statt Berührungseingaben verwenden. Berührungseingaben sind die übliche Möglichkeit, den Bildschirm aktiv zu halten.

Sie erhalten ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt, indem Sie die auf {{jsxref('Promise')}} basierende Methode [`navigator.wakeLock.request()`](/de/docs/Web/API/WakeLock/request) aufrufen. Das Promise wird erfüllt, wenn die Plattform die Anfrage zulässt. Eine Anfrage kann aus verschiedenen Gründen abgelehnt werden, unter anderem aufgrund von Systemeinstellungen (etwa eines Energiesparmodus oder eines niedrigen Akkustands) oder weil das Dokument nicht aktiv oder sichtbar ist.
Es empfiehlt sich, eine Referenz auf das Sentinel-Objekt zu speichern, damit die Anwendung den Wake Lock später freigeben kann.

Das Sentinel-Objekt ist mit dem zugrunde liegenden Wake Lock des Systems verknüpft. Das System kann diesen freigeben, beispielsweise wenn der Akkustand zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Er kann auch manuell über die Methode [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) freigegeben werden.
Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn erneut oder weiterhin ein Screen Wake Lock benötigt wird, muss die Anwendung einen neuen anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm eingeschaltet zu halten, wenn dies die Benutzerfreundlichkeit verbessert. Es empfiehlt sich, in der Benutzeroberfläche anzuzeigen, ob ein Wake Lock aktiv ist, und Nutzern eine Möglichkeit zu bieten, ihn bei Bedarf zu deaktivieren.

## Schnittstellen

- [`WakeLock`](/de/docs/Web/API/WakeLock)
  - : Verhindert, dass Gerätebildschirme abgedunkelt oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.
- [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)
  - : Stellt eine Referenz auf den zugrunde liegenden Wake Lock der Plattform bereit. Wenn eine Referenz auf das Objekt gespeichert wird, kann der Wake Lock manuell freigegeben und erneut angefordert werden. Eine Instanz des Objekts erhalten Sie durch Aufrufen von [`WakeLock.request`](/de/docs/Web/API/WakeLock/request).

### Erweiterungen anderer Schnittstellen

- [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) {{ReadOnlyInline}}
  - : Gibt eine Instanz des [`WakeLock`](/de/docs/Web/API/WakeLock)-Objekts zurück, über die alle weiteren Funktionen zugänglich sind.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Direktive `screen-wake-lock` gesteuert.
    Weitere Informationen finden Sie unten unter [Sicherheitsaspekte](#sicherheitsaspekte).

## Sicherheitsaspekte

Der Zugriff auf die Screen Wake Lock API wird durch die Direktive {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert.

Bei Verwendung der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ist die standardmäßige Zulassungsliste für `screen-wake-lock` auf `self` gesetzt.
Dadurch können verschachtelte Frames derselben Origin Wake Locks verwenden, Inhalte von Drittanbietern jedoch nicht.
Die Verwendung durch Drittanbieter kann ermöglicht werden, indem der Server zunächst den Header `Permissions-Policy` setzt, um einer bestimmten Drittanbieter-Origin die Berechtigung zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Anschließend muss dem Element, das den Frame enthält, für Quellen dieser Origin das Attribut `allow="screen-wake-lock"` hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"></iframe>
```

Browser können einen Screen Wake Lock in einem bestimmten Dokument auch aus implementierungsspezifischen Gründen blockieren, etwa aufgrund einer Nutzer- oder Plattformeinstellung.
Es wird erwartet, dass sie auf unaufdringliche Weise anzeigen, wenn ein Wake Lock aktiv ist, und Nutzern die Möglichkeit geben, den Screen Wake Lock der Anwendung aufzuheben.

Mit der Berechtigung `screen-wake-lock` der [Permissions API](/de/docs/Web/API/Permissions_API) lässt sich prüfen, ob der Zugriff auf den Screen Wake Lock `granted`, `denied` oder `prompt` ist (eine Bestätigung durch den Nutzer erfordert).

## Beispiele

### Unterstützung erkennen

Dieser Code prüft, ob Wake Locks unterstützt werden, und aktualisiert die Benutzeroberfläche entsprechend.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Einen Wake Lock anfordern

Das folgende Beispiel zeigt, wie Sie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt anfordern. Die Methode [`WakeLock.request`](/de/docs/Web/API/WakeLock/request) basiert auf einem {{jsxref('Promise')}}. Daher können wir eine asynchrone Funktion erstellen, die anschließend die Benutzeroberfläche aktualisiert, um anzuzeigen, dass der Wake Lock aktiv ist.

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

### Einen Wake Lock freigeben

Das folgende Beispiel zeigt, wie Sie den zuvor angeforderten Wake Lock freigeben.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Auf die Freigabe eines Wake Locks reagieren

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn der Wake Lock aus irgendeinem Grund freigegeben wurde, etwa weil der Nutzer zu einem anderen Fenster oder Tab gewechselt ist.

```js
wakeLock.addEventListener("release", () => {
  // the wake lock has been released
  statusElem.textContent = "Wake Lock has been released";
});
```

### Einen Wake Lock erneut anfordern

Der folgende Code fordert den Wake Lock erneut an, wenn sich die Sichtbarkeit des Dokuments ändert und der Wake Lock freigegeben wird.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenführen

Den [vollständigen Code finden Sie auf GitHub](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet eine Schaltfläche, um einen Wake Lock anzufordern und wieder freizugeben. Dabei wird die Benutzeroberfläche aktualisiert. Sie wird auch aktualisiert, wenn der Wake Lock aus irgendeinem Grund automatisch freigegeben wird. Ist das Kontrollkästchen aktiviert, wird der Wake Lock automatisch erneut angefordert, sobald das Dokument nach einer Änderung seines Sichtbarkeitsstatus wieder sichtbar wird.

## Leistungsaspekte

- Geben Sie den Screen Wake Lock frei, wenn der Nutzer die Aktivität beendet, für die der Bildschirm eingeschaltet bleiben musste. Eine Ticket-App, die Ticketinformationen über QR-Codes überträgt, könnte beispielsweise einen Screen Wake Lock anfordern, während der QR-Code angezeigt wird, damit er erfolgreich gescannt werden kann, und ihn anschließend freigeben. Eine Präsentations-App könnte den Wake Lock nur während einer laufenden Präsentation aufrechterhalten, nicht aber während deren Bearbeitung.
- Wenn Ihre Anwendung länger dauernde Downloads ausführt, sollten Sie Background Fetch in Betracht ziehen.
- Wenn Ihre Anwendung Daten mit einem entfernten Server synchronisiert, sollten Sie Background Sync in Betracht ziehen.
- Nur aktive Dokumente können Screen Wake Locks anfordern. Bereits angeforderte Wake Locks werden automatisch freigegeben, wenn das Dokument inaktiv wird. Fordern Sie den Screen Wake Lock daher bei Bedarf erneut an, wenn das Dokument aktiv wird. Reagieren Sie dazu auf das Ereignis [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mit der Screen Wake Lock API den Bildschirm eingeschaltet halten](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/) auf developer.chrome.com
