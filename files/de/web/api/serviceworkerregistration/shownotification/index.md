---
title: "ServiceWorkerRegistration: Methode showNotification()"
short-title: showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: 922949d1d9793e97e4cf9f2513a967e74b0171cf
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die Methode **`showNotification()`** der Schnittstelle [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) erstellt eine Benachrichtigung über einen aktiven Service Worker.

## Syntax

```js-nolint
showNotification(title)
showNotification(title, options)
```

### Parameter

- `title`
  - : Legt einen Titel für die Benachrichtigung fest, der oben im Benachrichtigungsfenster angezeigt wird.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit benutzerdefinierten Einstellungen, die Sie auf die Benachrichtigung anwenden möchten.
    Folgende Optionen sind verfügbar:
    - `actions` {{optional_inline}} {{experimental_inline}}
      - : Ein Array von Aktionen, die in der Benachrichtigung angezeigt werden sollen. Der Standardwert ist ein leeres Array.
        Jedes Element des Arrays kann ein Objekt mit den folgenden Eigenschaften sein:
        - `action`
          - : Eine Zeichenfolge, die diese Aktion innerhalb des Arrays von Aktionen eindeutig identifiziert.

            Wenn auf eine Aktionsschaltfläche ohne `navigate`-URL geklickt wird, können Sie im Event-Listener für [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) anhand von `event.action` ermitteln, welche Schaltfläche ausgewählt wurde.

        - `title`
          - : Eine Zeichenfolge mit dem Aktionstext, der den Nutzern angezeigt wird.
        - `icon` {{optional_inline}}
          - : Eine Zeichenfolge mit der URL eines Symbols, das zusammen mit der Aktion angezeigt wird.
        - `navigate` {{optional_inline}} {{experimental_inline}}
          - : Eine Zeichenfolge mit einer URL, zu der navigiert wird, wenn Nutzende diese Aktion auslösen.
            Ist diese Option gesetzt, navigiert der User Agent zu dieser URL, statt das Ereignis [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) auszulösen.
            Weitere Informationen finden Sie unter [`Notification.navigate`](/de/docs/Web/API/Notification/navigate).

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : Eine Zeichenfolge mit der URL eines kleinen Symbols, das die Webanwendung selbst repräsentiert.
        Die Plattform verwendet dieses Symbol, wenn nicht genügend Platz für die vollständige Benachrichtigung vorhanden ist – beispielsweise in einer Statusleiste.
        Es sollte visuell weniger hervorgehoben sein als die Optionen `icon` und `image`.
        Unter Android sollte das Symbol eine bis zu vierfache Anzeigeauflösung unterstützen (etwa 96 × 96 px). Das Bild wird automatisch auf eine monochrome Silhouette maskiert.
    - `body` {{optional_inline}}
      - : Eine Zeichenfolge mit dem Haupttext der Benachrichtigung, der unterhalb des Titels angezeigt wird.
        Der Standardwert ist eine leere Zeichenfolge.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten.
        Dabei kann es sich um einen beliebigen [strukturiert klonbaren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp handeln.
        Der Standardwert ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt wird.
        Der Standardwert ist `auto`. Damit wird das Verhalten der Spracheinstellung des Browsers übernommen. Sie können dieses Verhalten jedoch mit den Werten `ltr` und `rtl` überschreiben (obwohl die meisten Browser diese Einstellungen offenbar ignorieren).
    - `icon` {{optional_inline}}
      - : Eine Zeichenfolge mit der URL eines kleinen Bildes, das die Benachrichtigung ergänzt – beispielsweise ein App-Logo oder ein Foto der Person, die eine Nachricht gesendet hat.
        Es wird neben dem Titel und dem Haupttext der Benachrichtigung angezeigt.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : Eine Zeichenfolge mit der URL eines großen Bildes, das als Teil des Benachrichtigungsinhalts angezeigt wird – beispielsweise ein Nachrichtenfoto oder die Miniaturansicht eines Produkts.
        Von den drei Bildoptionen (`image`, `icon`, `badge`) hat es die höchste visuelle Priorität.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben als Zeichenfolge mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}.
        Der Standardwert ist eine leere Zeichenfolge.
    - `navigate` {{optional_inline}} {{experimental_inline}}
      - : Eine Zeichenfolge mit einer URL, zu der navigiert wird, wenn Nutzende die Benachrichtigung aktivieren.
        Ist diese Option gesetzt, navigiert der User Agent zu dieser URL, statt das Ereignis [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) auszulösen.
        Der Wert wird relativ zur Basis-URL des Service Workers interpretiert.
        Weitere Informationen finden Sie unter [`Notification.navigate`](/de/docs/Web/API/Notification/navigate).
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der angibt, ob Nutzende erneut benachrichtigt werden sollen, wenn eine neue Benachrichtigung eine ältere ersetzt.
        Der Standardwert ist `false`. In diesem Fall erfolgt keine erneute Benachrichtigung.
        Bei `true` muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis Nutzende darauf klicken oder sie schließen, anstatt automatisch geschlossen zu werden.
        Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung unabhängig von den Geräteeinstellungen lautlos ist (also weder Töne noch Vibrationen auslöst).
        Der Standardwert `null` bedeutet, dass die Standardeinstellungen des Geräts berücksichtigt werden.
        Bei `true` darf `vibrate` nicht angegeben sein.
    - `tag` {{optional_inline}}
      - : Eine Zeichenfolge mit einem identifizierenden Tag für die Benachrichtigung.
        Der Standardwert ist eine leere Zeichenfolge.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel in Millisekunden als {{Glossary("Unix_time", "Unix-Zeit")}}, der den mit der Benachrichtigung verbundenen Zeitpunkt angibt.
        Dieser Zeitpunkt kann in der Vergangenheit liegen, wenn die Benachrichtigung zu einer Nachricht gehört, die nicht sofort zugestellt werden konnte, weil das Gerät offline war. Er kann auch in der Zukunft liegen, etwa bei einer bevorstehenden Besprechung.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns), das die Vibrationshardware des Geräts zusammen mit der Benachrichtigung ausgibt.
        Wenn diese Option angegeben ist, darf `silent` nicht `true` sein.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - der Status des aktuellen Service Workers weder `activating` noch `activated` ist;
    - Nutzende die Berechtigungsanfrage des Browsers zur Nutzung der API ausdrücklich abgelehnt haben;
    - die Option `silent` auf `true` gesetzt und die Option `vibrate` angegeben ist;
    - die Option `renotify` auf `true` gesetzt, die Option `tag` aber leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Serialisierung der Option `data` aus irgendeinem Grund fehlschlägt.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt eine Funktion, die in einem Service Worker ausgeführt wird und eine Benachrichtigung anzeigt, nachdem die Berechtigung angefordert und erteilt wurde.
Der Code zum Aufrufen der Funktion ist nicht dargestellt.

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

Der folgende Code zeigt, wie Sie auf das Ereignis [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) lauschen können, um die Interaktion mit dieser Benachrichtigung zu verarbeiten.

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

Mit [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications) können Sie außerdem Details zu den [`Notification`](/de/docs/Web/API/Notification)-Objekten abrufen, die vom aktuellen Service Worker ausgelöst wurden.

### Benachrichtigungen mit verschiedenen Bildern

Dieses Beispiel legt verschiedene Platzhalterbilder für die Optionen `badge`, `icon` und `image` fest: ein App-Symbol, ein Porträt der sendenden Person beziehungsweise ein Landschaftsfoto. Ersetzen Sie die URLs durch Pfade zu Ihren eigenen Bildern. Das Beispiel setzt voraus, dass bereits ein Service Worker registriert und die Berechtigung für Benachrichtigungen erteilt wurde.

```js
const registration = await navigator.serviceWorker.ready;

await registration.showNotification("New photo from Alex", {
  body: "Alex shared a photo from today's hike.",
  badge: "/images/app-badge.png",
  icon: "/images/alex-avatar.png",
  image: "/images/hiking-photo.png",
});
```

Die folgende schematische Darstellung zeigt, wie diese Bilder auf einem Desktop, einem mobilen Startbildschirm und in einem mobilen Benachrichtigungsbanner erscheinen können: `badge` in einer Statusleiste, `icon` neben dem Titel und dem Haupttext sowie `image` innerhalb der aufgeklappten Benachrichtigung. Das tatsächliche Layout und die angezeigten Bilder hängen vom Browser und vom Betriebssystem ab.

![Drei Geräteansichten: eine Desktop-Benachrichtigung mit einem Porträtsymbol und einem Landschaftsbild, ein mobiler Startbildschirm mit einem monochromen App-Symbol in der Statusleiste und ein aufgeklapptes mobiles Benachrichtigungsbanner mit dem Porträtsymbol und dem Landschaftsbild.](notification-images.svg)

### Benachrichtigungen mit Aktionen und Aktions-Handlern

Dieses Beispiel zeigt, wie Sie eine dauerhaft angezeigte Benachrichtigung darstellen können, die beispielsweise beim Empfang einer E-Mail durch eine Push-Nachricht ausgelöst wird.

Der Code zum Erstellen der Benachrichtigung enthält zwei `actions`, die in der Benachrichtigung angezeigt werden: eine zum Beantworten der Nachricht und eine zum Schließen der Benachrichtigung.
Jede Aktion enthält einen `title`, der üblicherweise als Schaltflächentext in der Benachrichtigung dargestellt wird, sowie eine `action`, mit der sich bei einer Interaktion feststellen lässt, welche Aktion ausgewählt wurde.

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

Der folgende Code zeigt, wie Sie auf `notificationclick`-Ereignisse der Benachrichtigung lauschen und anschließend anhand des Werts der Eigenschaft `event.action` ermitteln können, welche Aktion ausgewählt wurde.
Beachten Sie: Wenn Nutzende statt auf eine Aktionsschaltfläche auf den Hauptbereich der Benachrichtigung klicken, enthält `event.action` eine leere Zeichenfolge.

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
