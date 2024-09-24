---
title: "ServiceWorkerRegistration: showNotification() Methode"
short-title: showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`showNotification()`** Methode der
{{domxref("ServiceWorkerRegistration")}} Schnittstelle erstellt eine Benachrichtigung auf einem aktiven
Service-Worker.

## Syntax

```js-nolint
showNotification(title)
showNotification(title, options)
```

### Parameter

- `title`
  - : Definiert einen Titel für die Benachrichtigung, der oben im Benachrichtigungsfenster angezeigt wird.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Benachrichtigung anwenden möchten. Die möglichen Optionen sind:

    - `actions` {{optional_inline}} {{experimental_inline}}

      - : Ein Array von Aktionen, die in der Benachrichtigung angezeigt werden, wobei der Standard ein leeres Array ist. Jedes Element im Array kann ein Objekt mit den folgenden Mitgliedern sein:

        - `action`
          - : Ein String, der eine vom Benutzer auszuführende Aktion identifiziert, die in der Benachrichtigung angezeigt werden soll.
        - `title`
          - : Ein String, der den Aktionstext enthält, der dem Benutzer angezeigt wird.
        - `icon` {{optional_inline}}
          - : Ein String, der die URL eines Icons enthält, das mit der Aktion angezeigt wird.

        Angemessene Antworten werden mit `event.action` innerhalb des {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} Ereignisses erstellt.

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL des Bildes enthält, das zur Darstellung der Benachrichtigung verwendet wird, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen; zum Beispiel die Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte bis zu 4x Auflösung berücksichtigen, etwa 96x96px, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textkörper der Benachrichtigung darstellt, der unterhalb des Titels angezeigt wird. Der Standard ist der leere String.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Dies kann jeder [strukturierbar-klonbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Der Standard ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll. Der Standard ist `auto`, welches einfach das Sprachverhalten des Browsers übernimmt, aber Sie können dieses Verhalten überschreiben, indem Sie Werte von `ltr` und `rtl` festlegen (obwohl die meisten Browser diese Einstellungen zu ignorieren scheinen).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Icons enthält, das in der Benachrichtigung angezeigt werden soll.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt werden soll.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, wie durch einen String repräsentiert, der einem Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} entspricht. Siehe die Sitepoint [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/) Seite für eine einfache Referenz. Der Standard ist der leere String.
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat. Der Standard ist `false`, was bedeutet, dass sie nicht benachrichtigt werden. Wenn `true`, muss auch `tag` gesetzt werden.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder abweist, anstatt automatisch zu schließen. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung stumm ist (keine Geräusche oder Vibrationen ausgegeben), unabhängig von den Geräteeinstellungen. Der Standard, `null`, bedeutet, die Gerätestandards zu respektieren. Wenn `true`, darf `vibrate` nicht vorhanden sein.
    - `tag` {{optional_inline}}
      - : Ein String, der ein identifizierendes Tag für die Benachrichtigung darstellt. Der Standard ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{glossary("Unix time")}} in Millisekunden, der die Zeit angibt, die mit der Benachrichtigung verbunden ist. Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war oder in der Zukunft für ein bevorstehendes Treffen.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationshardware des Geräts, das mit der Benachrichtigung ausgegeben werden soll. Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Ein {{jsxref('Promise')}} das auf `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wirft, wenn:
    - Der aktuelle Zustand des Service-Workers nicht `activating` oder `activated` ist.
    - Der Benutzer die Berechtigungsanfrage des Browsers zur Verwendung der API ausdrücklich abgelehnt hat.
    - Die `silent` Option `true` ist und die `vibrate` Option angegeben ist.
    - Die `renotify` Option `true` ist, aber die `tag` Option leer ist.
- `DataCloneError` {{domxref("DOMException")}}
  - : Wirft, wenn die Serialisierung der `data` Option aus irgendeinem Grund fehlgeschlagen ist.

## Beispiele

```js
navigator.serviceWorker.register("sw.js");

function showNotification() {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}
```

Um die obige Funktion zur passenden Zeit aufzurufen, könnten Sie dem
{{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} Ereignis zuhören.

Sie können auch Details der {{domxref("Notification")}}s abrufen, die von dem aktuellen Service-Worker ausgelöst wurden, indem Sie
{{domxref("ServiceWorkerRegistration.getNotifications()")}} verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
