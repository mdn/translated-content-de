---
title: "ServiceWorkerRegistration: showNotification() Methode"
short-title: showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: 66be0a23be754791266009f1044e2238c27332b4
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
  - : Ein Objekt mit Optionen, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Benachrichtigung anwenden möchten.
    Die möglichen Optionen sind:
    - `actions` {{optional_inline}} {{experimental_inline}}
      - : Ein Array von Aktionen, die in der Benachrichtigung angezeigt werden, wobei der Standardwert ein leeres Array ist.
        Jedes Element im Array kann ein Objekt mit den folgenden Mitgliedern sein:
        - `action`
          - : Ein String, der diese bestimmte Aktion innerhalb des Arrays von Aktionen eindeutig identifiziert.

            Wenn auf eine Aktionsschaltfläche ohne `navigate`-URL geklickt wird, können Sie feststellen, welche Schaltfläche ausgewählt wurde, indem Sie `event.action` in Ihrem [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis-Listener überprüfen.

        - `title`
          - : Ein String, der den Aktions-Text enthält, der dem Benutzer angezeigt wird.
        - `icon` {{optional_inline}}
          - : Ein String, der die URL eines Icons enthält, das mit der Aktion angezeigt wird.
        - `navigate` {{optional_inline}} {{experimental_inline}}
          - : Ein String, der eine URL enthält, zu der navigiert wird, wenn der Benutzer diese Aktion aktiviert.
            Wenn festgelegt, navigiert der Benutzeragent zu dieser URL anstelle des Auslösens des [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignisses.
            Weitere Informationen finden Sie unter [`Notification.navigate`](/de/docs/Web/API/Notification/navigate).

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL des Bildes enthält, das verwendet wird, um die Benachrichtigung darzustellen, wenn nicht genug Platz ist, um die Benachrichtigung selbst anzuzeigen; zum Beispiel die Android-Benachrichtigungsleiste.
        Auf Android-Geräten sollte das Badge Geräte bis zu einer 4-fachen Auflösung unterstützen, etwa 96x96px, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textkörper der Benachrichtigung darstellt, der unter dem Titel angezeigt wird.
        Der Standard ist der leere String.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten.
        Dies kann jeder [strukturierbar klonbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein.
        Der Standard ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll.
        Standardmäßig `auto`, was einfach das Verhalten der Spracheinstellung des Browsers übernimmt, aber Sie können dieses Verhalten überschreiben, indem Sie Werte von `ltr` und `rtl` setzen (obwohl die meisten Browser diese Einstellungen scheinbar ignorieren).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Icons enthält, das in der Benachrichtigung angezeigt wird.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt wird.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben als String, der ein {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} darstellt.
        Der Standard ist der leere String.
    - `navigate` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der eine URL enthält, zu der navigiert wird, wenn der Benutzer die Benachrichtigung aktiviert.
        Wenn festgelegt, navigiert der Benutzeragent zu dieser URL anstelle des Auslösens des [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignisses.
        Der Wert wird relativ zur Basis-URL des Service Workers analysiert.
        Weitere Informationen finden Sie unter [`Notification.navigate`](/de/docs/Web/API/Notification/navigate).
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : Ein Boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat.
        Der Standard ist `false`, was bedeutet, dass sie nicht benachrichtigt werden.
        Wenn `true`, muss auch `tag` gesetzt werden.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben sollte, bis der Benutzer sie anklickt oder schließt, anstatt automatisch zu schließen.
        Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung stumm ist (keine Töne oder Vibrationen ausgegeben werden), unabhängig von den Geräteeinstellungen.
        Der Standardwert `null` bedeutet, die Gerätestandards zu beachten.
        Wenn `true`, darf `vibrate` nicht vorhanden sein.
    - `tag` {{optional_inline}}
      - : Ein String, der einen identifizierenden Tag für die Benachrichtigung darstellt.
        Der Standard ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der die Zeit darstellt, die mit der Benachrichtigung verbunden ist.
        Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein Meeting, das bald beginnt.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationshardware des Geräts, die mit der Benachrichtigung ausgegeben werden soll.
        Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Ein {{jsxref('Promise')}}, der sich zu `undefined` auflöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der aktuelle Status des Service Workers nicht `activating` oder `activated` ist.
    - Der Benutzer der Berechtigungsanforderung des Browsers zur Nutzung der API ausdrücklich abgelehnt hat.
    - Die `silent` Option `true` ist und die `vibrate` Option angegeben ist.
    - Die `renotify` Option `true` ist, aber die `tag` Option leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Serialisierung der `data` Option aus irgendeinem Grund fehlschlägt.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt eine Funktion, die in einem Service Worker ausgeführt wird und nach dem Anfordern und Erteilen der Erlaubnis eine Benachrichtigung anzeigt. Der Code, um die Funktion tatsächlich aufzurufen, wird nicht gezeigt.

```js
navigator.serviceWorker.register("sw.js");

async function showNotification() {
  const result = await Notification.requestPermission();

  if (result === "granted") {
    const registration = await navigator.serviceWorker.ready;

    registration.showNotification("Vibration Sample", {
      body: "Buzz! Buzz!",
      icon: "../images/touch/chrome-touch-icon-192x192.png",
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: "vibration-sample",
    });
  }
}
```

Der folgende Code zeigt, wie Sie das [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis überwachen können, um Benutzerinteraktionen mit dieser bestimmten Benachrichtigung zu verarbeiten.

```js
self.addEventListener("notificationclick", (event) => {
  const notification = event.notification;

  // Close notification if we don't need it any more.
  notification.close();

  // Process our particular notification
  if (notification.tag === "vibration-sample") {
    // Use event.waitUntil to keep the service worker alive until the promise resolves
    event
      .waitUntil
      // Code to handle the particular event.
      ();
  }
});
```

Sie können auch Details der [`Notification`](/de/docs/Web/API/Notification) abrufen, die vom aktuellen Service Worker ausgelöst wurden, indem Sie [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications) verwenden.

### Benachrichtigungen mit Aktionen und Aktionshandlern

Dieses Beispiel zeigt, wie Sie eine persistente Benachrichtigung anzeigen können, die durch eine Push-Nachricht ausgelöst werden könnte, wenn z. B. eine E-Mail eingeht.

Der Code zur Generierung der Benachrichtigung enthält zwei `actions`, die auf der Benachrichtigung angezeigt werden: eine zum Beantworten der Nachricht und eine zum Schließen der Benachrichtigung. Jede Aktion enthält einen `title`, der normalerweise als Schaltflächentext auf der Benachrichtigung dargestellt wird, und eine `action`, die verwendet wird, um die ausgewählte Aktion zu identifizieren, wenn ein Benutzer mit der Benachrichtigung interagiert.

```js
registration.showNotification("New Message", {
  body: "You've got mail.",
  icon: "/images/icon.png",
  actions: [
    { action: "reply", title: "Reply" },
    { action: "dismiss", title: "Dismiss" },
  ],
});
```

Der folgende Code zeigt, wie Sie auf `notificationclick` Ereignisse von der Benachrichtigung hören können und dann den Wert der `event.action` Eigenschaft verwenden, um zu bestimmen, welche Aktion ausgewählt wurde. Beachten Sie, dass, wenn der Benutzer auf den Benachrichtigungstextkörper statt auf eine Aktionsschaltfläche klickt, `event.action` ein leerer String sein wird.

```js
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "reply") {
    // handle reply
  } else if (event.action === "dismiss") {
    // handle dismiss
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
