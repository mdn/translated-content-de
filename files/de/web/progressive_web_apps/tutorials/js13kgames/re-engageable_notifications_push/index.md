---
title: Wie man PWAs mithilfe von Notifications und Push reaktivierbar macht
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Die Möglichkeit, den Inhalt einer App zwischenzuspeichern, damit sie offline funktioniert, ist eine großartige Funktion. Dem Benutzer die Installation der Web-App auf seinem Gerät zu ermöglichen, ist noch besser. Aber anstatt sich nur auf Benutzeraktionen zu verlassen, können wir mehr tun, indem wir Push-Nachrichten und Notifications verwenden, um den Benutzer automatisch erneut einzubinden und neue Inhalte bereitzustellen, wann immer dies möglich ist.

## Zwei APIs, ein Ziel

Die [Push API](/de/docs/Web/API/Push_API) und die [Notifications API](/de/docs/Web/API/Notifications_API) sind zwei separate APIs, die jedoch gut zusammenarbeiten, wenn Sie ansprechende Funktionen in Ihrer App bieten möchten. Push wird verwendet, um neue Inhalte vom Server zur App zu senden, ohne dass eine Client-seitige Intervention erforderlich ist, und ihr Betrieb wird vom Service Worker der App abgewickelt. Notifications können vom Service Worker verwendet werden, um dem Benutzer neue Informationen anzuzeigen oder zumindest darauf hinzuweisen, wenn etwas aktualisiert wurde.

Sie funktionieren außerhalb des Browserfensters, genau wie Service Worker, sodass Updates gesendet und Notifications angezeigt werden können, wenn die Seite der App nicht im Fokus steht oder sogar geschlossen ist.

## Notifications

Beginnen wir mit Notifications – sie können eigenständig funktionieren, werden jedoch nützlicher, wenn sie mit Push kombiniert werden. Lassen Sie uns zunächst die Notifications isoliert betrachten.

### Berechtigung anfordern

Um eine Notification anzuzeigen, müssen wir zuerst die Berechtigung dazu anfordern. Anstatt die Notification sofort anzuzeigen, empfiehlt es sich jedoch, das Popup zu zeigen, wenn der Benutzer dies durch Klicken auf einen Button anfordert:

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

Dies zeigt ein Popup unter Verwendung des eigenen Benachrichtigungsdienstes des Betriebssystems an:

![Notification of js13kPWA.](js13kpwa-notification.png)

Wenn der Benutzer bestätigt, Notifications zu empfangen, kann die App diese anschließend anzeigen. Das Ergebnis der Benutzeraktion kann standardmäßig, gewährt oder abgelehnt sein. Die Standardoption wird gewählt, wenn der Benutzer keine Entscheidung trifft, und die anderen beiden werden gesetzt, wenn der Benutzer jeweils Ja oder Nein klickt.

Bei Annahme gilt die Berechtigung sowohl für Notifications als auch für Push.

### Eine Notification erstellen

Die Beispiel-App erstellt eine Notification aus den verfügbaren Daten – ein Spiel wird zufällig ausgewählt, und das gewählte Spiel liefert den Inhalt für die Notification: Es setzt den Namen des Spiels als Titel, erwähnt den Autor im Textkörper und zeigt das Bild als Icon an:

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

Alle 30 Sekunden wird eine neue zufällige Notification erstellt, bis sie zu störend wird und vom Benutzer deaktiviert wird. (Für eine reale App sollten die Notifications viel weniger häufig und nützlicher sein.) Der Vorteil der Notifications API besteht darin, dass sie die Benachrichtigungsfunktion des Betriebssystems verwendet. Das bedeutet, dass Notifications dem Benutzer angezeigt werden können, auch wenn er die Web-App nicht betrachtet, und die Notifications sehen ähnlich aus wie die von nativen Apps.

## Push

Push ist komplizierter als Notifications – wir müssen uns bei einem Server anmelden, der dann die Daten zurück zur App sendet. Der Service Worker der App empfängt die Daten vom Push-Server, die dann mit dem Benachrichtigungssystem oder einem anderen Mechanismus angezeigt werden können, wenn gewünscht.

Die Technologie befindet sich noch in einem sehr frühen Stadium – einige funktionierende Beispiele verwenden die Google Cloud Messaging-Plattform, werden jedoch umgeschrieben, um [VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) (Voluntary Application Identification) zu unterstützen, was eine zusätzliche Sicherheitsebene für Ihre App bietet. Sie können sich die [Service Workers Cookbook-Beispiele](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload) ansehen, versuchen, einen Push-Nachrichteserver mit [Firebase](https://firebase.google.com/) einzurichten oder Ihren eigenen Server (zum Beispiel mit Node.js) zu erstellen.

Wie bereits erwähnt, müssen Sie einen Service Worker haben, um Push-Nachrichten empfangen zu können. Die Grundlagen hierzu sind bereits im Artikel [Wie man PWAs mit Service Workern offline verfügbar macht](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers) erklärt. Innerhalb des Service Workers wird ein Push-Service-Abonnementmechanismus erstellt, indem die Methode [`getSubscription()`](/de/docs/Web/API/PushManager/getSubscription) des [`PushManager`](/de/docs/Web/API/PushManager)-Interfaces aufgerufen wird.

```js
navigator.serviceWorker.register("service-worker.js").then((registration) => {
  return registration.pushManager.getSubscription().then(/* ... */);
});
```

Sobald der Benutzer abonniert ist, kann er Push-Nachrichten vom Server empfangen.

Auf der Serverseite muss der gesamte Prozess aus Sicherheitsgründen mit öffentlichen und privaten Schlüsseln verschlüsselt werden – es wäre eine schreckliche Idee, jedem zu erlauben, ungesicherte Push-Nachrichten über Ihre App zu senden. Weitere Informationen zur Absicherung des Servers finden Sie auf der [Web Push Data Encryption Test Page](https://jrconlin.github.io/WebPushDataTestPage/). Der Server speichert alle Informationen, die erhalten werden, wenn der Benutzer abonniert, damit die Nachrichten später bei Bedarf gesendet werden können.

Um Push-Nachrichten zu empfangen, können wir im Service Worker-File auf das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Event hören:

```js
self.addEventListener("push", (e) => {
  /* ... */
});
```

Die Daten können abgerufen und dann dem Benutzer sofort als Notification angezeigt werden. Dies kann zum Beispiel verwendet werden, um den Benutzer an etwas zu erinnern oder ihn darüber zu informieren, dass neue Inhalte in der App verfügbar sind.

### Push-Beispiel

Push benötigt einen Serveranteil, um zu funktionieren, daher können wir es im js13kPWA-Beispiel, das auf GitHub Pages gehostet wird, nicht enthalten, da es nur das Hosting von statischen Dateien bietet. Alles ist im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) erklärt – siehe das [Push Payload Demo](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload).

Dieses Demo besteht aus drei Dateien:

- [index.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/index.js), das den Quellcode unserer App enthält
- [server.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/server.js), das den Server-Teil (in Node.js geschrieben) enthält
- [service-worker.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/service-worker.js), das service worker-spezifischen Code enthält.

Lassen Sie uns jede dieser Dateien erkunden

#### index.js

Die `index.js`-Datei beginnt mit der Registrierung des Service Workers:

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

Es ist etwas komplizierter als der Service Worker, den wir im [js13kPWA-Demo](https://mdn.github.io/pwa-examples/js13kpwa/) gesehen haben. In diesem speziellen Fall verwenden wir nach der Registrierung das Registrierungsobjekt, um zu abonnieren und dann das resultierende Abonnementobjekt, um den gesamten Prozess abzuschließen.

Im Registrierungsteil sieht der Code folgendermaßen aus:

```js
async (subscription) => {
  if (subscription) {
    return subscription;
  }
};
```

Wenn der Benutzer bereits abonniert ist, geben wir das Abonnementobjekt zurück und fahren mit dem Abonnementteil fort. Andernfalls initialisieren wir ein neues Abonnement:

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

Die App ruft den öffentlichen Schlüssel des Servers ab und konvertiert die Antwort in Text; dann muss er in ein Uint8Array konvertiert werden (um Chrome zu unterstützen). Um mehr über VAPID-Schlüssel zu erfahren, können Sie den Blogbeitrag [Sending VAPID identified WebPush Notifications via Mozilla's Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) lesen.

Die App kann nun den [`PushManager`](/de/docs/Web/API/PushManager) verwenden, um den neuen Benutzer zu abonnieren. Es werden zwei Optionen an die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) übergeben – die erste ist `userVisibleOnly: true`, was bedeutet, dass alle Benachrichtigungen, die an den Benutzer gesendet werden, für ihn sichtbar sind, und die zweite ist der `applicationServerKey`, der unseren erfolgreich erworbenen und konvertierten VAPID-Schlüssel enthält.

```js
registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

Nun gehen wir zum Abonnementteil über – die App sendet zuerst die Abonnementdetails als JSON an den Server mit Fetch.

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ subscription }),
});
```

Dann wird die [`onclick`](/de/docs/Web/API/Element/click_event)-Funktion auf dem _Subscribe_-Button definiert:

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

Wenn der Button geklickt wird, fragt `fetch` den Server, die Notification mit den gegebenen Parametern zu senden: `payload` ist der Text, der in der Notification angezeigt werden soll, `delay` definiert eine Verzögerung in Sekunden, bis die Notification angezeigt wird, und `ttl` ist die Time-to-Live-Einstellung, die die Notification für eine bestimmte Zeit auf dem Server verfügbar hält, ebenfalls in Sekunden definiert.

Jetzt zum nächsten JavaScript-File.

#### server.js

Der Server-Teil wird in Node.js geschrieben und muss an einem geeigneten Ort gehostet werden, was ein Thema für einen ganz eigenen Artikel ist. Wir geben hier nur einen Überblick.

Das [web-push-Modul](https://www.npmjs.com/package/web-push) wird verwendet, um die VAPID-Schlüssel festzulegen und diese optional zu erzeugen, wenn sie noch nicht verfügbar sind.

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

Als nächstes definiert und exportiert ein Modul alle Routen, die eine App handhaben muss: den VAPID-öffentlichen Schlüssel abrufen, sich registrieren und dann Benachrichtigungen senden.
Sie können die Variablen aus der `index.js`-Datei sehen, die verwendet werden: `payload`, `delay` und `ttl`.

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

Die letzte Datei, die wir uns ansehen werden, ist der Service Worker:

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

Alles, was er tut, ist, einen Listener für das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Event hinzuzufügen, die `payload`-Variable zu erstellen, die aus dem Text der Daten besteht (oder einen String zu erstellen, der verwendet wird, wenn die Daten leer sind), und dann zu warten, bis die Notification dem Benutzer angezeigt wird.

Fühlen Sie sich frei, den Rest der Beispiele im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) zu erkunden, wenn Sie wissen möchten, wie sie gehandhabt werden.
Es gibt eine große Sammlung funktionierender Beispiele, die die allgemeine Verwendung, aber auch Web-Push, Caching-Strategien, Leistung, Offline-Arbeiten und mehr zeigen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
