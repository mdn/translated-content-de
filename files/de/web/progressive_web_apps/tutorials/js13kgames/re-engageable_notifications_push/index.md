---
title: "js13kGames: Machen Sie PWAs durch die Verwendung von Benachrichtigungen und Push-APIs wieder ansprechend"
short-title: Die Verwendung von Benachrichtigungs- und Push-APIs
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Die Fähigkeit, den Inhalt einer App zu cachen, um offline zu arbeiten, ist eine großartige Funktion. Noch besser ist es, wenn der Benutzer die Web-App auf seinem Gerät installieren kann. Doch anstatt sich nur auf Benutzeraktionen zu verlassen, können wir mehr tun, indem wir Push-Nachrichten und Benachrichtigungen verwenden, um automatisch erneut anzusprechen und neue Inhalte bereitzustellen, sobald diese verfügbar sind.

## Zwei APIs, ein Ziel

Die [Push-API](/de/docs/Web/API/Push_API) und die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) sind zwei separate APIs, doch sie funktionieren gut zusammen, wenn Sie ansprechende Funktionalität in Ihrer App bereitstellen möchten. Push wird verwendet, um neue Inhalte vom Server zur App zu liefern, ohne dass ein Eingriff auf der Client-Seite erforderlich ist, und dessen Betrieb wird vom Service Worker der App abgewickelt. Benachrichtigungen können vom Service Worker verwendet werden, um dem Benutzer neue Informationen anzuzeigen oder ihn zumindest zu benachrichtigen, wenn etwas aktualisiert wurde.

Sie arbeiten außerhalb des Browserfensters, genau wie Service Worker, sodass Updates gepusht und Benachrichtigungen angezeigt werden können, wenn die Seite der App nicht fokussiert ist oder sogar geschlossen wurde.

## Benachrichtigungen

Beginnen wir mit Benachrichtigungen – sie können alleine funktionieren, werden aber nützlicher, wenn sie mit Push kombiniert werden. Lassen Sie uns zunächst Benachrichtigungen isoliert betrachten.

### Erlaubnis anfordern

Um eine Benachrichtigung anzuzeigen, müssen wir zuerst die Erlaubnis dazu anfordern. Anstatt die Benachrichtigung sofort anzuzeigen, sollten wir gemäß bewährter Praktiken das Popup anzeigen, wenn der Benutzer es durch Klicken auf einen Button anfordert:

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

Dies zeigt ein Popup mit dem Benachrichtigungsdienst des Betriebssystems an:

![Benachrichtigung von js13kPWA.](js13kpwa-notification.png)

Wenn der Benutzer bestätigt, Benachrichtigungen zu erhalten, kann die App sie anzeigen. Das Ergebnis der Benutzeraktion kann standardmäßig, gewährt oder abgelehnt sein. Die Standardoption wird gewählt, wenn der Benutzer keine Entscheidung trifft, und die anderen beiden werden festgelegt, wenn der Benutzer auf Ja oder Nein klickt.

Bei Annahme gilt die Erlaubnis sowohl für Benachrichtigungen als auch für Push.

### Eine Benachrichtigung erstellen

Die Beispiel-App erstellt eine Benachrichtigung aus den verfügbaren Daten – ein Spiel wird zufällig ausgewählt, und das gewählte füllt die Benachrichtigung mit dem Inhalt: Es setzt den Spielnamen als Titel, erwähnt den Autor im Textkörper und zeigt das Bild als Icon an:

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

Alle 30 Sekunden wird eine neue zufällige Benachrichtigung erstellt, bis sie zu nervig wird und vom Benutzer deaktiviert wird. (Für eine reale App sollten die Benachrichtigungen viel seltener und nützlicher sein.) Der Vorteil der Benachrichtigungs-API besteht darin, dass sie die Benachrichtigungsfunktionalität des Betriebssystems nutzt. Dies bedeutet, dass Benachrichtigungen dem Benutzer angezeigt werden können, auch wenn er gerade nicht die Web-App betrachtet, und die Benachrichtigungen ähnlich wie bei nativen Apps aussehen.

## Push

Push ist komplizierter als Benachrichtigungen – wir müssen uns bei einem Server anmelden, der dann die Daten an die App zurücksendet. Der Service Worker der App erhält Daten vom Push-Server, die dann mittels des Benachrichtigungssystems oder eines anderen Mechanismus angezeigt werden können, wenn gewünscht.

Die Technologie befindet sich noch in einem sehr frühen Stadium – einige funktionierende Beispiele verwenden die Google Cloud Messaging-Plattform, werden jedoch umgeschrieben, um [VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) (Voluntary Application Identification) zu unterstützen, die eine zusätzliche Sicherheitsebene für Ihre App bietet.
Sie können die [Service Workers Cookbook Beispiele](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload) untersuchen, versuchen, einen Push-Nachrichtenserver mit [Firebase](https://firebase.google.com/) einzurichten oder Ihren eigenen Server zu bauen (beispielsweise mit Node.js).

Wie bereits erwähnt, benötigen Sie einen Service Worker, um Push-Nachrichten empfangen zu können, dessen Grundlagen im Artikel [PWAs offline mit Service Workern arbeitend machen](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers) bereits erklärt werden. Innerhalb des Service Workers wird ein Push-Dienst-Abonnementmechanismus durch Aufrufen der Methode [`getSubscription()`](/de/docs/Web/API/PushManager/getSubscription) der [`PushManager`](/de/docs/Web/API/PushManager) Schnittstelle erstellt.

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then((registration) => registration.pushManager.getSubscription())
  .then(/* … */);
```

Sobald der Benutzer abonniert ist, kann er Push-Benachrichtigungen vom Server erhalten.

Auf der Serverseite muss der gesamte Prozess aus Sicherheitsgründen mit öffentlichen und privaten Schlüsseln verschlüsselt werden – es wäre eine schreckliche Idee, jedem zu erlauben, ungesicherte Push-Nachrichten mit Ihrer App zu senden. Siehe die [Web Push Datenverschlüsselung Testseite](https://jrconlin.github.io/WebPushDataTestPage/) für detaillierte Informationen über die Sicherung des Servers. Der Server speichert alle Informationen, die beim Abonnieren des Benutzers empfangen wurden, sodass die Nachrichten später bei Bedarf gesendet werden können.

Um Push-Nachrichten zu empfangen, können wir im Service Worker Datei auf das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) Ereignis lauschen:

```js
self.addEventListener("push", (e) => {
  /* ... */
});
```

Die Daten können abgerufen und dann sofort als Benachrichtigung an den Benutzer angezeigt werden. Dies kann beispielsweise verwendet werden, um den Benutzer an etwas zu erinnern oder ihn über neue Inhalte in der App zu informieren.

### Push-Beispiel

Push benötigt den Serverteil, um zu funktionieren, daher können wir es nicht in das auf GitHub Pages gehostete js13kPWA-Beispiel einbeziehen, da es nur das Hosten statischer Dateien ermöglicht. Es wird alles im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) erklärt – siehe das [Push Payload Demo](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload).

Dieses Demo besteht aus drei Dateien:

- [index.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/index.js), das den Quellcode unserer App enthält
- [server.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/server.js), das den Serverteil (in Node.js geschrieben) enthält
- [service-worker.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/service-worker.js), das den spezifischen Code für den Service Worker enthält.

Lassen Sie uns alle diese erkunden

#### index.js

Die `index.js` Datei beginnt mit der Registrierung des Service Workers:

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then((registration) => registration.pushManager.getSubscription())
  .then((subscription) => {
    // subscription part
  });
```

Es ist etwas komplizierter als der Service Worker, den wir im [js13kPWA Demo](https://mdn.github.io/pwa-examples/js13kpwa/) gesehen haben. In diesem speziellen Fall verwenden wir nach der Registrierung das Registrierungsobjekt, um zu abonnieren, und dann das resultierende Abonnementobjekt, um den gesamten Prozess abzuschließen.

Im Registrierungsteil sieht der Code folgendermaßen aus:

```js
async (subscription) => {
  if (subscription) {
    return subscription;
  }
};
```

Wenn der Benutzer bereits abonniert ist, geben wir das Abonnementobjekt zurück und wechseln zum Abonnementteil. Wenn nicht, initialisieren wir ein neues Abonnement:

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

Die App ruft den öffentlichen Schlüssel des Servers ab und konvertiert die Antwort in Text; dann muss er in ein Uint8Array umgewandelt werden (um Chrome zu unterstützen). Weitere Informationen zu VAPID-Schlüsseln finden Sie im Blogbeitrag [Sending VAPID identified WebPush Notifications via Mozilla's Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/).

Die App kann jetzt den [`PushManager`](/de/docs/Web/API/PushManager) verwenden, um den neuen Benutzer zu abonnieren. Es gibt zwei Optionen, die an die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) übergeben werden – die erste ist `userVisibleOnly: true`, was bedeutet, dass alle Benachrichtigungen, die an den Benutzer gesendet werden, für ihn sichtbar sein werden, und die zweite ist der `applicationServerKey`, der unseren erfolgreich erworbenen und konvertierten VAPID-Schlüssel enthält.

```js
registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

Nun zum Abonnementteil – die App sendet zunächst die Abonnementdetails als JSON an den Server mit Fetch.

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ subscription }),
});
```

Dann wird die [`onclick`](/de/docs/Web/API/Element/click_event) Funktion auf der _Abonnieren_ Schaltfläche definiert:

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

Wenn die Schaltfläche geklickt wird, fragt `fetch` den Server an, die Benachrichtigung mit den gegebenen Parametern zu senden: `payload` ist der Text, der in der Benachrichtigung angezeigt werden soll, `delay` definiert eine Verzögerung in Sekunden, bis die Benachrichtigung angezeigt wird, und `ttl` ist die Einstellung der Lebensdauer, die die Benachrichtigung für eine bestimmte Zeit auf dem Server verfügbar hält, ebenfalls in Sekunden.

Nun zur nächsten JavaScript-Datei.

#### server.js

Der Serverteil ist in Node.js geschrieben und muss irgendwo angemessen gehostet werden, was das Thema eines ganz eigenen Artikels ist. Hier geben wir nur einen Überblick auf hoher Ebene.

Das [web-push Modul](https://www.npmjs.com/package/web-push) wird verwendet, um die VAPID-Schlüssel festzulegen und sie optional zu generieren, wenn sie noch nicht verfügbar sind.

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

Als nächstes definiert und exportiert ein Modul alle Routen, die eine App benötigt, um das Abrufen des öffentlichen VAPID-Schlüssels zu registrieren und dann Benachrichtigungen zu senden.
Sie können die Variablen aus der `index.js` Datei sehen, die verwendet werden: `payload`, `delay` und `ttl`.

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

Die letzte Datei, die wir betrachten werden, ist der Service Worker:

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

Alles, was es tut, ist einen Listener für das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) Ereignis hinzuzufügen, die Variable payload zu erstellen, bestehend aus dem Text, der aus den Daten genommen wird (oder einen String zu erstellen, wenn die Daten leer sind), und dann zu warten, bis die Benachrichtigung dem Benutzer angezeigt wird.

Fühlen Sie sich frei, den Rest der Beispiele im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) zu erkunden, wenn Sie wissen möchten, wie sie behandelt werden.
Es gibt eine große Sammlung von funktionierenden Beispielen, die den allgemeinen Gebrauch zeigen, aber auch Web-Push, Caching-Strategien, Performance, Arbeiten offline und mehr.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
