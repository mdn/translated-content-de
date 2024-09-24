---
title: Wie man PWAs durch Benachrichtigungen und Push-Nachrichten wieder ansprechbar macht
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Die Möglichkeit, die Inhalte einer App zu cachen, um offline zu arbeiten, ist ein großartiges Feature. Die Möglichkeit, dem Benutzer zu erlauben, die Web-App auf seinem Gerät zu installieren, ist noch besser. Aber statt sich nur auf Benutzeraktionen zu verlassen, können wir mehr tun, indem wir Push-Nachrichten und Benachrichtigungen verwenden, um automatisch wieder zu engagieren und neue Inhalte zu liefern, sobald sie verfügbar sind.

## Zwei APIs, ein Ziel

Die [Push API](/de/docs/Web/API/Push_API) und die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) sind zwei separate APIs, arbeiten jedoch gut zusammen, wenn Sie ansprechende Funktionen in Ihrer App bereitstellen möchten. Push wird verwendet, um neue Inhalte vom Server an die App zu senden, ohne dass eine clientseitige Intervention erforderlich ist, und wird vom Service Worker der App gehandhabt. Benachrichtigungen können vom Service Worker verwendet werden, um dem Benutzer neue Informationen anzuzeigen oder ihn zumindest darauf hinzuweisen, wenn etwas aktualisiert wurde.

Sie arbeiten außerhalb des Browsertabs, genau wie Service Worker, sodass Updates gesendet und Benachrichtigungen angezeigt werden können, wenn die Seite der App nicht im Fokus oder sogar geschlossen ist.

## Benachrichtigungen

Beginnen wir mit den Benachrichtigungen — sie können eigenständig funktionieren, werden jedoch nützlicher, wenn sie mit Push kombiniert werden. Lassen Sie uns zunächst die Benachrichtigungen isoliert betrachten.

### Berechtigung anfordern

Um eine Benachrichtigung anzuzeigen, müssen wir zuerst die Berechtigung dazu anfordern. Statt die Benachrichtigung sofort anzuzeigen, ist es am besten, das Popup zu zeigen, wenn der Benutzer es durch Klicken auf einen Button anfordert:

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

![Benachrichtigung js13kPWA.](js13kpwa-notification.png)

Wenn der Benutzer bestätigt, Benachrichtigungen zu erhalten, kann die App diese anzeigen. Das Ergebnis der Benutzeraktion kann „default“, „granted“ oder „denied“ sein. Die Standardoption wird gewählt, wenn der Benutzer keine Auswahl trifft, und die anderen beiden werden gesetzt, wenn der Benutzer jeweils ja oder nein klickt.

Wenn akzeptiert, gilt die Berechtigung sowohl für Benachrichtigungen als auch für Push.

### Eine Benachrichtigung erstellen

Die Beispiel-App erstellt eine Benachrichtigung aus den verfügbaren Daten — ein Spiel wird zufällig ausgewählt, und das gewählte füllt die Benachrichtigung mit dem Inhalt: Es setzt den Namen des Spiels als Titel, erwähnt den Autor im Text und zeigt das Bild als Icon an:

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

Alle 30 Sekunden wird eine neue zufällige Benachrichtigung erstellt, bis es zu störend wird und vom Benutzer deaktiviert wird. (Für eine echte App sollten die Benachrichtigungen viel seltener und nützlicher sein.) Der Vorteil der Benachrichtigungs-API ist, dass sie die Benachrichtigungsfunktion des Betriebssystems verwendet. Das bedeutet, dass Benachrichtigungen dem Benutzer angezeigt werden können, selbst wenn er die Web-App nicht betrachtet, und die Benachrichtigungen ähneln jenen nativer Apps.

## Push

Push ist komplizierter als Benachrichtigungen — wir müssen einen Server abonnieren, der die Daten dann an die App zurücksendet. Der Service Worker der App empfängt die Daten vom Push-Server, die dann mit dem Benachrichtigungssystem oder einem anderen Mechanismus angezeigt werden können, wenn gewünscht.

Die Technologie befindet sich noch in einem sehr frühen Stadium — einige funktionierende Beispiele verwenden die Google Cloud Messaging-Plattform, werden aber umgeschrieben, um [VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) (Voluntary Application Identification) zu unterstützen, das eine zusätzliche Sicherheitsebene für Ihre App bietet.
Sie können die [Beispiele im Service Workers Cookbook](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload) prüfen, versuchen, einen Push-Nachrichten-Server mit [Firebase](https://firebase.google.com/) einzurichten, oder Ihren eigenen Server (z. B. mit Node.js) erstellen.

Wie bereits erwähnt, müssen Sie, um Push-Nachrichten empfangen zu können, einen Service Worker haben, dessen Grundlagen bereits im Artikel [PWAs mit Service Workern offline funktionsfähig machen](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers) erklärt sind. Innerhalb des Service Workers wird ein Push-Service-Abonnementmechanismus durch Aufruf der Methode [`getSubscription()`](/de/docs/Web/API/PushManager/getSubscription) der Schnittstelle [`PushManager`](/de/docs/Web/API/PushManager) erstellt.

```js
navigator.serviceWorker.register("service-worker.js").then((registration) => {
  return registration.pushManager.getSubscription().then(/* ... */);
});
```

Sobald der Benutzer abonniert ist, kann er Push-Benachrichtigungen vom Server empfangen.

Von der Serverseite aus muss der gesamte Prozess aus Sicherheitsgründen mit öffentlichen und privaten Schlüsseln verschlüsselt werden — es wäre eine schreckliche Idee, jedem zu erlauben, unsichere Push-Nachrichten über Ihre App zu senden. Weitere Informationen zur Absicherung des Servers finden Sie auf der [Web Push-Datenverschlüsselungs-Testseite](https://jrconlin.github.io/WebPushDataTestPage/). Der Server speichert alle Informationen, die beim Abonnieren des Benutzers empfangen wurden, damit die Nachrichten später bei Bedarf gesendet werden können.

Um Push-Nachrichten zu empfangen, können wir das {{domxref("ServiceWorkerGlobalScope.push_event", "push")}}-Ereignis in der Service Worker-Datei hören:

```js
self.addEventListener("push", (e) => {
  /* ... */
});
```

Die Daten können abgerufen und dann dem Benutzer sofort als Benachrichtigung angezeigt werden. Dies kann beispielsweise verwendet werden, um den Benutzer an etwas zu erinnern oder ihn über neue Inhalte zu informieren, die in der App verfügbar sind.

### Push-Beispiel

Push benötigt den Serverteil, um zu arbeiten, daher können wir es nicht im js13kPWA-Beispiel, das auf GitHub Pages gehostet wird, aufnehmen, da es nur das Hosting von statischen Dateien bietet. Es wird alles im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) erklärt — siehe die [Push Payload Demo](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload).

Dieses Demo besteht aus drei Dateien:

- [index.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/index.js), das den Quellcode unserer App enthält
- [server.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/server.js), das den Serverteil enthält (geschrieben in Node.js)
- [service-worker.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/service-worker.js), das den spezifischen Code für den Service Worker enthält.

Lassen Sie uns alle diese erkunden.

#### index.js

Die Datei `index.js` beginnt mit der Registrierung des Service Workers:

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then((registration) => {
    return registration.pushManager
      .getSubscription()
      .then(async (subscription) => {
        // Registrierungsteil
      });
  })
  .then((subscription) => {
    // Abonnementteil
  });
```

Es ist etwas komplizierter als der Service Worker, den wir im [js13kPWA-Demo](https://mdn.github.io/pwa-examples/js13kpwa/) gesehen haben. In diesem speziellen Fall verwenden wir nach der Registrierung das Registrierungsobjekt zum Abonnieren und verwenden dann das resultierende Abonnementobjekt, um den gesamten Prozess abzuschließen.

Im Registrierungsteil sieht der Code so aus:

```js
async (subscription) => {
  if (subscription) {
    return subscription;
  }
};
```

Wenn der Benutzer bereits abonniert ist, geben wir dann das Abonnementobjekt zurück und wechseln zum Abonnementteil. Wenn nicht, initialisieren wir ein neues Abonnement:

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

Die App ruft den öffentlichen Schlüssel des Servers ab und konvertiert die Antwort in Text; dann muss er in ein Uint8Array konvertiert werden (um Chrome zu unterstützen). Um mehr über VAPID-Schlüssel zu erfahren, können Sie den Blogeintrag [Sending VAPID identified WebPush Notifications via Mozilla's Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) lesen.

Die App kann nun den {{domxref("PushManager")}} verwenden, um den neuen Benutzer zu abonnieren. Es gibt zwei Optionen, die der Methode {{domxref("PushManager.subscribe()")}} übergeben werden — die erste ist `userVisibleOnly: true`, was bedeutet, dass alle an den Benutzer gesendeten Benachrichtigungen für ihn sichtbar sind, und die zweite ist der `applicationServerKey`, der unseren erfolgreich erworbenen und konvertierten VAPID-Schlüssel enthält.

```js
registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

Jetzt gehen wir zum Abonnementteil — die App sendet zuerst die Abonnementdetails als JSON an den Server unter Verwendung von Fetch.

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ subscription }),
});
```

Dann wird die {{domxref("Element.click_event", "onclick")}}-Funktion auf dem _Subscribe_-Button definiert:

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

Wenn der Button geklickt wird, fragt `fetch` den Server an, um die Benachrichtigung mit den gegebenen Parametern zu senden: `payload` ist der Text, der in der Benachrichtigung angezeigt wird, `delay` definiert eine Verzögerung in Sekunden, bis die Benachrichtigung angezeigt wird, und `ttl` ist die Lebensdauer-Einstellung, die die Benachrichtigung für eine bestimmte Zeit auf dem Server verfügbar hält, ebenfalls in Sekunden definiert.

Nun zum nächsten JavaScript-Datei.

#### server.js

Der Serverteil ist in Node.js geschrieben und muss an einem geeigneten Ort gehostet werden, was ein Thema für einen völlig separaten Artikel ist. Hier wird nur eine Übersicht auf hoher Ebene gegeben.

Das [web-push-Modul](https://www.npmjs.com/package/web-push) wird verwendet, um die VAPID-Schlüssel zu setzen und sie optional zu generieren, wenn sie noch nicht verfügbar sind.

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

Als nächstes definiert und exportiert ein Modul alle Routen, die eine App verwalten muss: Abrufen des VAPID-Public-Key, Registrierung und dann Senden von Benachrichtigungen.
Sie können sehen, dass die Variablen aus der `index.js`-Datei verwendet werden: `payload`, `delay` und `ttl`.

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

Die letzte Datei, die wir uns ansehen, ist der Service Worker:

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

Alles, was es tut, ist, einen Listener für das {{domxref("ServiceWorkerGlobalScope.push_event", "push")}}-Ereignis hinzuzufügen, die payload-Variable zu erstellen, die aus dem aus den Daten entnommenen Text besteht (oder einen String zu erstellen, der verwendet wird, wenn die Daten leer sind), und dann zu warten, bis die Benachrichtigung dem Benutzer angezeigt wird.

Fühlen Sie sich frei, den Rest der Beispiele im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) zu erkunden, wenn Sie wissen möchten, wie sie behandelt werden.
Es gibt eine große Sammlung von funktionierenden Beispielen, die die allgemeine Verwendung zeigen, aber auch Web-Push, Caching-Strategien, Leistung, Arbeiten offline und mehr.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
