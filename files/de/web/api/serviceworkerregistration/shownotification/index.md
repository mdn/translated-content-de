---
title: "ServiceWorkerRegistration: showNotification() Methode"
short-title: showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`showNotification()`** Methode der
[`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Schnittstelle erstellt eine Benachrichtigung auf einem aktiven Service Worker.

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
      - : Ein Array von Aktionen, die in der Benachrichtigung angezeigt werden sollen, wobei die Standardeinstellung ein leeres Array ist. Jedes Element im Array kann ein Objekt mit den folgenden Mitgliedern sein:
        - `action`
          - : Ein String, der eine Benutzeraktion identifiziert, die auf der Benachrichtigung angezeigt wird.
        - `title`
          - : Ein String, der den angezeigten Aktionstext für den Benutzer enthält.
        - `icon` {{optional_inline}}
          - : Ein String, der die URL eines Icons enthält, das mit der Aktion angezeigt werden soll.

        Geeignete Antworten werden im `event.action` innerhalb des [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignisses aufgebaut.

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL des Bildes enthält, das verwendet wird, um die Benachrichtigung zu repräsentieren, wenn nicht genug Platz ist, um die eigentliche Benachrichtigung anzuzeigen; zum Beispiel die Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Badge Geräte mit bis zu 4-facher Auflösung, etwa 96x96px, unterstützen, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textkörper der Benachrichtigung darstellt, der unter dem Titel angezeigt wird. Standard ist der leere String.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Dies kann jeder [structured-clonable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Standard ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll. Standard ist `auto`, was einfach das Sprachverhalten des Browsers übernommen wird, aber Sie können dieses Verhalten überschreiben, indem Sie Werte von `ltr` und `rtl` setzen (obwohl die meisten Browser diese Einstellungen zu ignorieren scheinen).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Icons enthält, das in der Benachrichtigung angezeigt werden soll.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt werden soll.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben durch einen String, der ein {{Glossary("BCP_47_language_tag", "BCP 47 language tag")}} repräsentiert. Standard ist der leere String.
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt. Standard ist `false`, was bedeutet, dass sie nicht benachrichtigt werden. Wenn `true`, dann muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer darauf klickt oder sie verwirft, anstatt sie automatisch zu schließen. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung stumm ist (keine Geräusche oder Vibrationen ausgegeben), unabhängig von den Geräteeinstellungen. Der Standard, `null`, bedeutet, die Gerätestandards zu respektieren. Wenn `true`, darf `vibrate` nicht vorhanden sein.
    - `tag` {{optional_inline}}
      - : Ein String, der einen identifizierenden Tag für die Benachrichtigung darstellt. Standard ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix time")}} in Millisekunden, der die Zeit repräsentiert, die mit der Benachrichtigung verbunden ist. Dies kann in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein Meeting, das bald beginnt.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationseinrichtung des Geräts, das mit der Benachrichtigung ausgegeben werden soll. Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Ein {{jsxref('Promise')}}, der sich zu `undefined` auflöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Der aktuelle Zustand des Service Workers nicht `activating` oder `activated` ist.
    - Der Benutzer dem Berechtigungsantrag des Browsers zur Nutzung der API ausdrücklich widerprochen hat.
    - Die `silent` Option `true` ist und die `vibrate` Option angegeben ist.
    - Die `renotify` Option `true` ist, aber die `tag` Option leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Serialisierung der `data` Option aus irgendeinem Grund fehlgeschlagen ist.

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

Um die obige Funktion zu einem geeigneten Zeitpunkt aufzurufen, könnten Sie dem [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis lauschen.

Sie können auch Details der von dem aktuellen Service Worker ausgelösten [`Notification`](/de/docs/Web/API/Notification) abrufen, indem Sie [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
