---
title: Anleitung zur Nutzung von Notifications und Push für PWAs zur erneuten Engagement
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Die Möglichkeit, den Inhalt einer App zwischenspeichern zu können, um offline zu arbeiten, ist eine großartige Funktion. Die Möglichkeit, die Web-App auf dem Gerät des Benutzers zu installieren, ist noch besser. Aber anstatt sich nur auf Benutzeraktionen zu verlassen, können wir mehr tun, indem wir Push-Nachrichten und Benachrichtigungen verwenden, um die Nutzer automatisch erneut zu motivieren und neue Inhalte zu liefern, sobald diese verfügbar sind.

## Zwei APIs, ein Ziel

Die [Push API](/de/docs/Web/API/Push_API) und die [Notifications API](/de/docs/Web/API/Notifications_API) sind zwei separate APIs, aber sie arbeiten gut zusammen, wenn Sie in Ihrer App eine attraktive Funktionalität bereitstellen möchten. Push wird verwendet, um neue Inhalte vom Server zur App zu liefern, ohne dass dabei ein Eingriff auf der Client-Seite erfolgt. Die Bedienung wird vom `Service Worker` der App abgewickelt. Benachrichtigungen können vom `Service Worker` verwendet werden, um dem Benutzer neue Informationen anzuzeigen oder ihn zumindest darauf hinzuweisen, dass etwas aktualisiert wurde.

Sie funktionieren außerhalb des Browserfensters, ähnlich wie `Service Workers`, sodass Updates gepusht und Benachrichtigungen angezeigt werden können, wenn die Seite der App nicht im Fokus steht oder sogar geschlossen ist.

## Benachrichtigungen

Beginnen wir mit den Benachrichtigungen – sie können eigenständig funktionieren, werden jedoch nützlicher, wenn sie mit Push kombiniert werden. Beginnen wir jedoch damit, die Benachrichtigungen isoliert zu betrachten.

### Berechtigung anfordern

Um eine Benachrichtigung anzuzeigen, müssen wir zuerst die Erlaubnis dafür einholen. Anstatt die Benachrichtigung sofort anzuzeigen, besagt die beste Praxis, dass wir das Popup anzeigen sollten, wenn der Benutzer es anfordert, indem er auf eine Schaltfläche klickt:

```js
const button = document.getElementById("notifications");
button.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

Dies zeigt ein Popup mit dem Benachrichtigungsdienst des Betriebssystems:

![Benachrichtigung der js13kPWA.](js13kpwa-notification.png)

Wenn der Benutzer bestätigt, Benachrichtigungen zu erhalten, kann die App diese anschließend anzeigen. Das Ergebnis der Benutzeraktion kann "default", "granted" oder "denied" sein. Die Option "default" wird gewählt, wenn der Benutzer keine Entscheidung trifft, und die anderen beiden werden gesetzt, wenn der Benutzer jeweils ja oder nein klickt.

Wenn akzeptiert, gilt die Erlaubnis für sowohl Benachrichtigungen als auch Push.

### Eine Benachrichtigung erstellen

Die Beispiel-App erstellt eine Benachrichtigung aus den verfügbaren Daten – ein Spiel wird zufällig ausgewählt, und das ausgewählte Spiel versorgt die Benachrichtigung mit dem Inhalt: Es setzt den Spielnamen als Titel, nennt den Autor im Textkörper und zeigt das Bild als Symbol an:

```js
function randomNotification() {
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

Alle 30 Sekunden wird eine neue zufällige Benachrichtigung erstellt, bis es zu nervig wird und vom Benutzer deaktiviert wird. (Für eine echte App sollten die Benachrichtigungen wesentlich seltener und nützlicher sein.) Der Vorteil der Notifications API ist, dass sie die Benachrichtigungsfunktionalität des Betriebssystems nutzt. Dies bedeutet, dass Benachrichtigungen dem Benutzer angezeigt werden können, auch wenn er die Web-App nicht betrachtet, und die Benachrichtigungen ähnlich wie die von nativen Apps aussehen.

## Push

Push ist komplizierter als Benachrichtigungen – wir müssen uns bei einem Server anmelden, der dann die Daten an die App zurücksendet. Der `Service Worker` der App erhält Daten vom Push-Server, die dann über das Benachrichtigungssystem oder einen anderen gewünschten Mechanismus angezeigt werden können.

Die Technologie befindet sich noch in einem sehr frühen Stadium – einige funktionierende Beispiele nutzen die Google Cloud Messaging-Plattform, werden aber derzeit umgeschrieben, um [VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) (Voluntary Application Identification) zu unterstützen, das Ihrer App eine zusätzliche Sicherheitsschicht bietet.
Sie können die [Service Workers Cookbook-Beispiele](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload) untersuchen, versuchen, einen Push-Messaging-Server mit [Firebase](https://firebase.google.com/) einzurichten, oder Ihren eigenen Server (beispielsweise mit Node.js) erstellen.

Wie bereits erwähnt, müssen Sie, um Push-Nachrichten empfangen zu können, einen `Service Worker` haben, dessen Grundlagen bereits im Artikel [Making PWAs work offline with Service workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers) erläutert wurden. Innerhalb des `Service Worker` wird ein Abonnementmechanismus für den Push-Dienst erstellt, indem die Methode [`getSubscription()`](/de/docs/Web/API/PushManager/getSubscription) der [`PushManager`](/de/docs/Web/API/PushManager) Schnittstelle aufgerufen wird.

```js
navigator.serviceWorker.register("service-worker.js").then((registration) => {
  return registration.pushManager.getSubscription().then(/* ... */);
});
```

Sobald der Benutzer angemeldet ist, kann er Push-Benachrichtigungen vom Server empfangen.

Auf der Serverseite muss der gesamte Prozess aus Sicherheitsgründen mit öffentlichen und privaten Schlüsseln verschlüsselt werden – es wäre eine schreckliche Idee, jedem zu erlauben, ungesicherte Push-Nachrichten über Ihre App zu senden. Detaillierte Informationen zur Absicherung des Servers finden Sie auf der [Web Push data encryption test page](https://jrconlin.github.io/WebPushDataTestPage/). Der Server speichert alle Informationen, die er bei der Anmeldung des Benutzers erhält, sodass die Nachrichten später bei Bedarf gesendet werden können.

Um Push-Nachrichten zu empfangen, können wir das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) Ereignis in der `Service Worker` Datei anhören:

```js
self.addEventListener("push", (e) => {
  /* ... */
});
```

Die Daten können abgerufen und dem Benutzer dann sofort als Benachrichtigung angezeigt werden. Dies kann beispielsweise verwendet werden, um den Benutzer an etwas zu erinnern oder ihm mitzuteilen, dass neue Inhalte in der App verfügbar sind.

### Push-Beispiel

Push benötigt den Serverteil, um zu funktionieren, daher können wir ihn nicht im js13kPWA-Beispiel einbinden, das auf GitHub Pages gehostet wird, da dies nur das Hosten von statischen Dateien ermöglicht. Es wird alles im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) erklärt – siehe das [Push Payload Demo](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload).

Dieses Demo besteht aus drei Dateien:

- [index.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/index.js), das den Quellcode unserer App enthält
- [server.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/server.js), das den Serverteil enthält (geschrieben in Node.js)
- [service-worker.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/service-worker.js), das den spezifischen Code für den Service Worker enthält.

Schauen wir uns alle diese Dateien an.

#### index.js

Die `index.js` Datei beginnt mit der Registrierung des `Service Worker`:

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then((registration) => {
    return registration.pushManager
      .getSubscription()
      .then(async (subscription) => {
        // registration part
      });
  })
  .then((subscription) => {
    // subscription part
  });
```

Es ist ein wenig komplizierter als der `Service Worker`, den wir im [js13kPWA-Demo](https://mdn.github.io/pwa-examples/js13kpwa/) gesehen haben. In diesem speziellen Fall verwenden wir nach der Registrierung das Registrierungsobjekt, um ein Abonnement zu erstellen, und verwenden dann das resultierende Abonnementobjekt, um den gesamten Prozess abzuschließen.

Im Registrierungsteil sieht der Code so aus:

```js
async (subscription) => {
  if (subscription) {
    return subscription;
  }
};
```

Wenn der Benutzer bereits abonniert ist, geben wir dann das Abonnementobjekt zurück und gehen zum Abonnementteil über. Falls nicht, initialisieren wir ein neues Abonnement:

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

Die App ruft den öffentlichen Schlüssel des Servers ab und konvertiert die Antwort in Text; dann muss es in ein Uint8Array konvertiert werden (um Chrome zu unterstützen). Um mehr über VAPID-Schlüssel zu erfahren, können Sie den Blogbeitrag [Sending VAPID identified WebPush Notifications via Mozilla's Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) lesen.

Die App kann nun den [`PushManager`](/de/docs/Web/API/PushManager) verwenden, um den neuen Benutzer zu abonnieren. Es gibt zwei Optionen, die an die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) übergeben werden — die erste ist `userVisibleOnly: true`, was bedeutet, dass alle an den Benutzer gesendeten Benachrichtigungen für diesen sichtbar sind, und die zweite ist der `applicationServerKey`, der unseren erfolgreich erworbenen und konvertierten VAPID-Schlüssel enthält.

```js
registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

Gehen wir nun zum Abonnementteil über — die App sendet zuerst die Abonnementdetails als JSON mit Fetch an den Server.

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ subscription }),
});
```

Dann wird die [`onclick`](/de/docs/Web/API/Element/click_event) Funktion auf der _Subscribe_-Schaltfläche definiert:

```js
document.getElementById("doIt").onclick = () => {
  const payload = document.getElementById("notification-payload").value;
  const delay = document.getElementById("notification-delay").value;
  const ttl = document.getElementById("notification-ttl").value;

  fetch("./sendNotification", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      subscription,
      payload,
      delay,
      ttl,
    }),
  });
};
```

Wenn die Schaltfläche geklickt wird, fragt `fetch` den Server, um die Benachrichtigung mit den gegebenen Parametern zu senden: `payload` ist der Text, der in der Benachrichtigung angezeigt werden soll, `delay` definiert eine Verzögerung in Sekunden, bis die Benachrichtigung angezeigt wird, und `ttl` ist die Lebensdauer-Einstellung, die die Benachrichtigung für eine festgelegte Zeit auf dem Server verfügbar hält, ebenfalls in Sekunden definiert.

Kommen wir nun zur nächsten JavaScript-Datei.

#### server.js

Der Serverteil wird in Node.js geschrieben und muss an einer geeigneten Stelle gehostet werden, was ein völlig separates Thema für einen anderen Artikel ist. Wir bieten hier nur eine Übersicht auf hoher Ebene.

Das [web-push Modul](https://www.npmjs.com/package/web-push) wird verwendet, um die VAPID-Schlüssel zu setzen, und optional zu generieren, falls sie noch nicht verfügbar sind.

```js
const webPush = require("web-push");

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log(
    "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
      "environment variables. You can use the following ones:",
  );
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  "https://example.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);
```

Als nächstes definiert und exportiert ein Modul alle Routen, die eine App verarbeiten muss: das Abrufen des öffentlichen VAPID-Schlüssels, das Registrieren und dann das Senden von Benachrichtigungen.
Sie können die Variablen aus der `index.js` Datei sehen: `payload`, `delay` und `ttl`.

```js
module.exports = (app, route) => {
  app.get(`${route}vapidPublicKey`, (req, res) => {
    res.send(process.env.VAPID_PUBLIC_KEY);
  });

  app.post(`${route}register`, (req, res) => {
    res.sendStatus(201);
  });

  app.post(`${route}sendNotification`, (req, res) => {
    const subscription = req.body.subscription;
    const payload = req.body.payload;
    const options = {
      TTL: req.body.ttl,
    };

    setTimeout(() => {
      webPush
        .sendNotification(subscription, payload, options)
        .then(() => {
          res.sendStatus(201);
        })
        .catch((error) => {
          console.log(error);
          res.sendStatus(500);
        });
    }, req.body.delay * 1000);
  });
};
```

#### service-worker.js

Die letzte Datei, die wir uns ansehen, ist der `Service Worker`:

```js
self.addEventListener("push", (event) => {
  const payload = event.data?.text() ?? "no payload";
  event.waitUntil(
    self.registration.showNotification("ServiceWorker Cookbook", {
      body: payload,
    }),
  );
});
```

Alles, was er tut, ist einen Listener für das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) Ereignis hinzuzufügen, die `payload` Variable zu erstellen, die aus dem Text aus den Daten besteht (oder eine Zeichenfolge zu erstellen, die verwendet wird, wenn Daten leer sind), und dann zu warten, bis die Benachrichtigung dem Benutzer angezeigt wird.

Fühlen Sie sich frei, den Rest der Beispiele im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) zu erkunden, wenn Sie wissen möchten, wie sie gehandhabt werden.
Es gibt eine große Sammlung funktionierender Beispiele, die die allgemeine Nutzung zeigen, aber auch Web Push, Caching-Strategien, Leistung, das Arbeiten offline und mehr.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
