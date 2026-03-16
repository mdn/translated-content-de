---
title: "ServiceWorkerRegistration: showNotification() Methode"
short-title: showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: 8a6e8b53625bddb3af2cf2fb927cb3e430b12ba2
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`showNotification()`** Methode der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Schnittstelle erstellt eine Benachrichtigung auf einem aktiven Service Worker.

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
      - : Ein Array von Aktionen, die in der Benachrichtigung angezeigt werden sollen, wobei der Standardwert ein leeres Array ist. Jedes Element im Array kann ein Objekt mit den folgenden Mitgliedern sein:
        - `action`
          - : Ein String, der eine Benutzeraktion identifiziert, die auf der Benachrichtigung angezeigt werden soll.
        - `title`
          - : Ein String, der den Aktionstext enthält, der dem Benutzer angezeigt werden soll.
        - `icon` {{optional_inline}}
          - : Ein String, der die URL eines Symbols enthält, das mit der Aktion angezeigt werden soll.
        - `navigate` {{optional_inline}} {{experimental_inline}}
          - : Ein String, der eine URL enthält, zu der navigiert wird, wenn der Benutzer diese Aktion aktiviert. Wenn gesetzt, navigiert der User Agent zu dieser URL, anstatt das [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis auszulösen. Siehe [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) für weitere Informationen.

        Angemessene Antworten werden unter Verwendung von `event.action` innerhalb des [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignisses erstellt.

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL des Bildes enthält, das verwendet wird, um die Benachrichtigung darzustellen, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen; zum Beispiel die Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte bis zu einer 4x-Auflösung unterstützen, etwa 96x96px, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Text des Körpers der Benachrichtigung darstellt, der unter dem Titel angezeigt wird. Der Standard ist der leere String.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Dies kann jede [strukturierbar klonbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Der Standard ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll. Der Standard ist `auto`, was das Verhalten der Spracheneinstellung des Browsers übernimmt, aber dieses Verhalten kann durch Setzen von Werten von `ltr` und `rtl` überschrieben werden (obwohl die meisten Browser diese Einstellungen scheinbar ignorieren).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Symbols enthält, das in der Benachrichtigung angezeigt wird.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt werden soll.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, wie durch einen String repräsentiert, der ein {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} ist. Der Standard ist der leere String.
    - `navigate` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der eine URL enthält, zu der navigiert wird, wenn der Benutzer die Benachrichtigung aktiviert. Wenn gesetzt, navigiert der User Agent zu dieser URL, anstatt das [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis auszulösen. Der Wert wird relativ zur Basis-URL des Service Workers analysiert. Siehe [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) für weitere Informationen.
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat. Der Standard ist `false`, was bedeutet, dass sie nicht benachrichtigt werden. Wenn `true`, muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben sollte, bis der Benutzer sie anklickt oder entfernt, anstatt sie automatisch zu schließen. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung stumm ist (keine Töne oder Vibrationen), unabhängig von den Geräteeinstellungen. Der Standard, `null`, bedeutet, dass die Gerätevoreinstellungen respektiert werden sollen. Wenn `true`, darf `vibrate` nicht vorhanden sein.
    - `tag` {{optional_inline}}
      - : Ein String, der ein identifizierendes Tag für die Benachrichtigung darstellt. Der Standard ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der die mit der Benachrichtigung verbundene Zeit darstellt. Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein Meeting, das kurz vor dem Start steht.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns), das die Vibrationshardware des Geräts mit der Benachrichtigung ausführen soll. Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich auf `undefined` auflöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Der aktuelle Zustand des Service Workers nicht `activating` oder `activated` ist.
    - Der Benutzer den Browser bei der Berechtigungsanfrage zur Nutzung der API ausdrücklich abgelehnt hat.
    - Die Option `silent` `true` ist und die Option `vibrate` angegeben ist.
    - Die Option `renotify` `true` ist, aber die Option `tag` leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das Serialisieren der `data` Option aus irgendeinem Grund fehlgeschlagen ist.

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

Um die oben genannte Funktion zu einem geeigneten Zeitpunkt aufzurufen, könnten Sie das [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis verwenden.

Sie können auch Details der [`Notification`](/de/docs/Web/API/Notification)s abrufen, die vom aktuellen Service Worker ausgelöst wurden, indem Sie [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
