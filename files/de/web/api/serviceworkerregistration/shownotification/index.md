---
title: "ServiceWorkerRegistration: showNotification() Methode"
short-title: showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`showNotification()`**-Methode des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces erstellt eine Benachrichtigung auf einem aktiven Service Worker.

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

      - : Ein Array von Aktionen, das in der Benachrichtigung angezeigt wird, wobei der Standard ein leeres Array ist. Jedes Element im Array kann ein Objekt mit den folgenden Mitgliedern sein:

        - `action`
          - : Ein String, der eine Benutzeraktion identifiziert, die in der Benachrichtigung angezeigt wird.
        - `title`
          - : Ein String, der den Aktionstext enthält, der dem Benutzer angezeigt wird.
        - `icon` {{optional_inline}}
          - : Ein String, der die URL eines Symbols enthält, das mit der Aktion angezeigt werden soll.

        Geeignete Antworten werden unter Verwendung von `event.action` innerhalb des [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)-Ereignisses erstellt.

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL des Bildes enthält, das zur Darstellung der Benachrichtigung verwendet wird, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen; zum Beispiel die Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte bis zu einer Auflösung von 4x, etwa 96x96px, berücksichtigen, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Haupttext der Benachrichtigung darstellt, der unter dem Titel angezeigt wird. Der Standard ist der leere String.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Dies kann jeder [strukturell klonbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Der Standard ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in die die Benachrichtigung angezeigt wird. Der Standardwert ist `auto`, was einfach das Sprachverhalten des Browsers übernimmt, aber Sie können dieses Verhalten überschreiben, indem Sie die Werte `ltr` und `rtl` festlegen (obwohl die meisten Browser diese Einstellungen scheinbar ignorieren).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Symbols enthält, das in der Benachrichtigung angezeigt wird.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt wird.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben durch einen String, der einen Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} darstellt. Siehe die Sitepoint [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/)-Seite für einen einfachen Verweis. Der Standard ist der leere String.
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat. Der Standard ist `false`, was bedeutet, dass sie nicht benachrichtigt werden. Wenn `true`, muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder schließt, anstatt sie automatisch zu schließen. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung lautlos ist (keine Töne oder Vibrationen, unabhängig von den Geräteeinstellungen). Der Standard, `null`, respektiert die Gerätestandardeinstellungen. Wenn `true`, darf `vibrate` nicht vorhanden sein.
    - `tag` {{optional_inline}}
      - : Ein String, der ein identifizierendes Tag für die Benachrichtigung darstellt. Der Standard ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der die mit der Benachrichtigung verbundene Zeit darstellt. Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein bevorstehendes Meeting.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns), das die Vibrationshardware des Geräts mit der Benachrichtigung abgeben soll. Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich mit `undefined` auflöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der aktuelle Status des Service Workers nicht `activating` oder `activated` ist.
    - Der Benutzer die Berechtigung des Browsers explizit verweigert hat, die API zu verwenden.
    - Die `silent`-Option `true` ist und die `vibrate`-Option angegeben ist.
    - Die `renotify`-Option `true` ist, aber die `tag`-Option leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Serialisieren der `data`-Option aus irgendeinem Grund fehlgeschlagen ist.

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

Um die oben stehende Funktion zu einem geeigneten Zeitpunkt aufzurufen, könnten Sie dem [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)-Ereignis lauschen.

Sie können auch Details der [`Notification`](/de/docs/Web/API/Notification)s abrufen, die vom aktuellen Service Worker ausgelöst wurden, indem Sie [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
