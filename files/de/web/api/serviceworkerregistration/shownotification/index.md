---
title: "ServiceWorkerRegistration: showNotification() Methode"
short-title: showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`showNotification()`** Methode der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Schnittstelle erzeugt eine Benachrichtigung in einem aktiven Service Worker.

## Syntax

```js-nolint
showNotification(title)
showNotification(title, options)
```

### Parameter

- `title`
  - : Definiert einen Titel für die Benachrichtigung, der oben im Benachrichtigungsfenster angezeigt wird.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Benachrichtigung anwenden möchten. Die möglichen Optionen sind:

    - `actions` {{optional_inline}} {{experimental_inline}}

      - : Ein Array von Aktionen, die in der Benachrichtigung angezeigt werden sollen, wobei standardmäßig ein leeres Array verwendet wird. Jedes Element im Array kann ein Objekt mit den folgenden Mitgliedern sein:

        - `action`
          - : Ein String, der eine Benutzeraktion identifiziert, die auf der Benachrichtigung angezeigt werden soll.
        - `title`
          - : Ein String, der den Aktionstext enthält, der dem Benutzer angezeigt werden soll.
        - `icon` {{optional_inline}}
          - : Ein String, der die URL eines Symbols enthält, das mit der Aktion angezeigt werden soll.

        Geeignete Antworten werden mit `event.action` innerhalb des [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignisses erstellt.

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL des Bildes enthält, das verwendet wird, um die Benachrichtigung zu repräsentieren, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen; zum Beispiel die Android-Mitteilungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte bis zu einer Auflösung von 4x abdecken, etwa 96x96 px, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textkörper der Benachrichtigung repräsentiert, der unter dem Titel angezeigt wird. Standardmäßig ist dies der leere String.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Beliebige Daten, die mit der Benachrichtigung assoziiert werden sollen. Dies kann jeder [Struktur-klonbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Standardmäßig ist dies `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll. Standardmäßig ist dies `auto`, was nur das Spracheinstellungen-Verhalten des Browsers übernimmt, aber Sie können dieses Verhalten übersteuern, indem Sie die Werte `ltr` und `rtl` festlegen (obwohl die meisten Browser diese Einstellungen zu ignorieren scheinen).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Symbols enthält, das in der Benachrichtigung angezeigt werden soll.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt werden soll.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben durch einen String, der ein Sprach-Tag nach {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} repräsentiert. Sehen Sie sich die Sitepoint [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/) Seite für eine einfache Referenz an. Standardmäßig ist dies der leere String.
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat. Standardmäßig ist dies `false`, was bedeutet, dass sie nicht benachrichtigt werden. Wenn `true`, muss auch `tag` gesetzt werden.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer darauf klickt oder sie schließt, anstatt automatisch zu schließen. Standardmäßig ist der Wert `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung stumm sein soll (keine Töne oder Vibrationen), unabhängig von den Geräteeinstellungen. Standardmäßig bedeutet `null`, dass die Geräteeinstellungen respektiert werden. Wenn `true`, darf `vibrate` nicht vorhanden sein.
    - `tag` {{optional_inline}}
      - : Ein String, der einen identifizierenden Tag für die Benachrichtigung darstellt. Standardmäßig ist dies der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der die mit der Benachrichtigung verbundene Zeit repräsentiert. Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort geliefert werden konnte, weil das Gerät offline war, oder in der Zukunft für ein Treffen, das bald beginnt.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationstechnik des Geräts, die mit der Benachrichtigung ausgegeben werden soll. Wenn spezifiziert, darf `silent` nicht `true` sein.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich in `undefined` auflöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der aktuelle Status des Service Workers nicht `activating` oder `activated` ist.
    - Der Benutzer die Berechtigungsanfrage des Browsers zur Nutzung der API ausdrücklich abgelehnt hat.
    - Die Option `silent` auf `true` gesetzt ist und die Option `vibrate` angegeben ist.
    - Die Option `renotify` auf `true` gesetzt ist, aber die Option `tag` leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Serialisieren der `data` Option aus irgendeinem Grund fehlschlägt.

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

Um die obige Funktion zu einem geeigneten Zeitpunkt aufzurufen, könnten Sie auf das [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis hören.

Sie können auch Details zu den [`Notification`](/de/docs/Web/API/Notification)s abrufen, die vom aktuellen Service Worker ausgelöst wurden, indem Sie [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
