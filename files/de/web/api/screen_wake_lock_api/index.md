---
title: Screen Wake Lock API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 20ee91ca1bd5568411dcfc306213201d9d5b65a5
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

Die **Screen Wake Lock API** bietet eine Möglichkeit, zu verhindern, dass Geräte den Bildschirm abdunkeln oder sperren, wenn eine Anwendung weiterlaufen muss.

## Konzepte und Verwendung

Die meisten Geräte schalten standardmäßig ihren Bildschirm nach einer bestimmten Zeit aus, um die Lebensdauer der Hardware zu verlängern. Moderne Geräte tun dies, um die Batterieleistung zu sparen. Während dies eine nützliche Funktion ist, benötigen einige Anwendungen den Bildschirm, um wach zu bleiben, um am nützlichsten zu sein.

Die Screen Wake Lock API verhindert, dass der Bildschirm ausgeschaltet, gedimmt oder gesperrt wird. Sie bietet eine einfache plattformbasierte Lösung für sichtbare (aktive) Dokumente, um das Plattform-Screen-Wake-Lock zu erwerben.

Es gibt viele Anwendungsfälle, bei denen ein Bildschirm eingeschaltet bleiben sollte, z. B. das Lesen eines E-Books, die Navigation mit einer Karte, das Verfolgen eines Rezepts, das Präsentieren vor einem Publikum, das Scannen eines QR-/Barcodes oder Anwendungen, die Sprach- oder Gestensteuerung verwenden, anstatt taktile Eingabe (der Standardweg, um einen Bildschirm wach zu halten).

Sie erhalten ein {{DOMxRef("WakeLockSentinel")}}-Objekt, indem Sie die {{domxref('WakeLock.request','navigator.wakeLock.request()')}}-{{jsxref('Promise')}}-basierte Methode aufrufen, die auflöst, wenn es die Plattform erlaubt. Eine Anfrage kann aus mehreren Gründen abgelehnt werden, einschließlich Systemeinstellungen (wie Energiesparmodus oder niedriger Batteriestand) oder wenn das Dokument nicht aktiv oder sichtbar ist. Es ist eine gute Praxis, eine Referenz auf das Sentinel-Objekt zu speichern, um der Anwendung später die Steuerung der Freigabe zu ermöglichen.

Das Sentinel ist mit dem zugrunde liegenden System-Wake-Lock verbunden. Es kann vom System freigegeben werden, erneut, wenn die Batterieleistung zu niedrig ist oder das Dokument nicht aktiv oder sichtbar ist. Es kann auch manuell über die {{domxref('WakeLockSentinel.release()')}}-Methode freigegeben werden. Nach der Freigabe kann ein `WakeLockSentinel` nicht mehr verwendet werden. Wenn erneut/stetig ein Bildschirm-Wake-Lock erforderlich ist, muss die Anwendung einen neuen anfordern.

Die Screen Wake Lock API sollte verwendet werden, um den Bildschirm eingeschaltet zu halten, um die Benutzerfreundlichkeit zu verbessern. Es ist sinnvoll, eine Art Rückmeldung auf der Benutzeroberfläche zu zeigen, um anzuzeigen, ob das Wake-Lock aktiv ist und dem Benutzer eine Möglichkeit zu geben, es bei Bedarf zu deaktivieren.

## Schnittstellen

- {{domxref("WakeLock")}}
  - : Verhindert, dass Gerätescreens abdunkeln oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.
- {{domxref("WakeLockSentinel")}}
  - : Bietet einen Zugriff auf den zugrunde liegenden Plattform-Wake-Lock und kann manuell freigegeben und erneut angefordert werden, wenn eine Referenz vorhanden ist. Holen Sie sich eine Instanz des Objekts, indem Sie {{domxref('WakeLock.request')}} aufrufen.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.wakelock")}} {{ReadOnlyInline}}

  - : Gibt eine {{domxref("WakeLock")}}-Objektinstanz zurück, von der aus alle anderen Funktionen zugänglich sind.

- [`Permissions-Policy: screen-wake-lock`](/de/docs/Web/HTTP/Headers/Permissions-Policy/screen-wake-lock)
  - : Der Zugriff auf die API wird durch die [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy)-Direktive `screen-wake-lock` gesteuert.
    Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

## Beispiele

### Funktionserkennung

Dieser Code prüft die Unterstützung von Wake-Lock und aktualisiert die Benutzeroberfläche entsprechend.

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "Screen Wake Lock API supported!";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "Wake lock is not supported by this browser.";
}
```

### Anfordern eines Wake-Locks

Das folgende Beispiel zeigt, wie man ein {{domxref('WakeLockSentinel')}}-Objekt anfordert. Die {{domxref('WakeLock.request')}}-Methode ist {{jsxref('Promise')}}-basiert, sodass wir eine asynchrone Funktion erstellen können, die wiederum die Benutzeroberfläche aktualisiert, um anzuzeigen, dass das Wake-Lock aktiv ist.

```js
// Erstellen einer Referenz für das Wake-Lock.
let wakeLock = null;

// Erstellen einer async-Funktion zur Anforderung eines Wake-Locks
try {
  wakeLock = await navigator.wakeLock.request("screen");
  statusElem.textContent = "Wake Lock is active!";
} catch (err) {
  // Die Wake-Lock-Anforderung ist fehlgeschlagen – normalerweise systembezogen, z. B. Batterie.
  statusElem.textContent = `${err.name}, ${err.message}`;
}
```

### Freigeben eines Wake-Locks

Das folgende Beispiel zeigt, wie das zuvor erworbene Wake-Lock freigegeben wird.

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### Auf Freigabe eines Wake-Locks hören

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn das Wake-Lock aus irgendeinem Grund freigegeben wurde (z. B. durch das Navigieren weg vom aktiven Fenster/Tab).

```js
wakeLock.addEventListener("release", () => {
  // Das Wake-Lock wurde freigegeben
  statusElem.textContent = "Wake Lock has been released";
});
```

### Erneutes Anfordern eines Wake-Locks

Der folgende Code fordert das Wake-Lock erneut an, sollte sich die Sichtbarkeit des Dokuments ändern und das Wake-Lock freigegeben werden.

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### Alles zusammenfügen

Sie können den [vollständigen Code hier auf GitHub finden](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api). Die [Demo](https://mdn.github.io/dom-examples/screen-wake-lock-api/) verwendet einen Button, um ein Wake-Lock zu erwerben und es auch freizugeben, was wiederum die Benutzeroberfläche aktualisiert. Die Benutzeroberfläche wird auch aktualisiert, wenn das Wake-Lock aus irgendeinem Grund automatisch freigegeben wird. Es gibt ein Checkbox-Element, das, wenn aktiviert, das Wake-Lock automatisch erneut anfordert, wenn sich der Sichtbarkeitsstatus des Dokuments ändert und wieder sichtbar wird.

## Leistungserwägungen

- Geben Sie das Bildschirm-Wake-Lock frei, wenn der Benutzer die Aktivität beendet, die einen dauerhaft eingeschalteten Bildschirm erforderlich machte. Zum Beispiel könnte eine Ticketing-App, die QR-Codes verwendet, um Ticketinformationen zu übertragen, das Bildschirm-Wake-Lock anfordern, wenn der QR-Code angezeigt wird (damit der Code erfolgreich gescannt wird), es aber danach freigeben. Eine Präsentations-App könnte das Lock nur während einer aktiven Präsentation halten, jedoch nicht, wenn die Präsentation bearbeitet wird.
- Wenn Ihre App lang laufende Downloads durchführt, ziehen Sie in Betracht, Hintergrundabrufe zu verwenden.
- Wenn Ihre App Daten von einem Remote-Server synchronisiert, ziehen Sie in Betracht, Hintergrundsynchronisation zu verwenden.
- Nur aktive Dokumente können Bildschirm-Wake-Locks erwerben und zuvor erworbene Locks werden automatisch freigegeben, wenn das Dokument inaktiv wird. Stellen Sie daher sicher, dass das Bildschirm-Wake-Lock bei Bedarf erneut angefordert wird, wenn das Dokument aktiv wird (hören Sie auf das [visibilitychange](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis).

## Sicherheitsüberlegungen

Der Zugriff auf die Screen Wake Lock API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} kontrolliert.

Bei Verwendung der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) ist die Standardzulassungsliste für `screen-wake-lock` `self`.
Dies ermöglicht die Verwendung von Locks in gleich-originverschachtelten Frames, verhindert jedoch, dass Drittanbieter-Inhalte Locks verwenden.
Die Drittanbieterverwendung kann aktiviert werden, indem der Server zuerst den `Permissions-Policy`-Header festlegt, um einer bestimmten Drittanbieter-Herkunft die Erlaubnis zu erteilen.

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

Dann muss das `allow="screen-wake-lock"`-Attribut dem Frame-Containerelement für Quellen von dieser Herkunft hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"></iframe>
```

Browser können auch den Bildschirm-Wake-Lock in einem bestimmten Dokument aus einem spezifischen Implementierungsgrund blockieren, wie z. B. einer Benutzer- oder Plattform-Einstellung.
Es wird erwartet, dass sie einen unaufdringlichen Mechanismus bereitstellen, um den Benutzer zu benachrichtigen, wenn das Wake-Lock aktiv ist, und dass sie den Benutzern die Möglichkeit geben, die Bildschirmsperre der Anwendung zu entfernen.

Die [Permissions API](/de/docs/Web/API/Permissions_API)-Berechtigung `screen-wake-lock` kann verwendet werden, um zu testen, ob der Zugriff zur Nutzung der Bildschirmsperre `granted`, `denied` oder `prompt` (erfordert Benutzerbestätigung einer Aufforderung) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
- [Ein Screen Wake Lock API Demo auf Glitch](https://wake-lock-demo.glitch.me/)
