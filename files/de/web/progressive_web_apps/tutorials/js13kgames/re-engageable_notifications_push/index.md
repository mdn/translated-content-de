---
title: "js13kGames: Machen Sie PWAs durch Benachrichtigungen und Push-APIs wieder ansprechend"
short-title: Nutzung von Benachrichtigungs- und Push-APIs
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Die Fähigkeit, die Inhalte einer App zu cachen, um offline zu arbeiten, ist eine großartige Funktion. Es ist noch besser, dem Benutzer zu ermöglichen, die Web-App auf seinem Gerät zu installieren. Anstatt sich jedoch nur auf Benutzeraktionen zu verlassen, können wir mehr tun, indem wir Push-Nachrichten und Benachrichtigungen nutzen, um automatisch neue Inhalte anzubieten, sobald sie verfügbar sind.

## Zwei APIs, ein Ziel

Die [Push-API](/de/docs/Web/API/Push_API) und die [Notifications-API](/de/docs/Web/API/Notifications_API) sind zwei separate APIs, arbeiten jedoch gut zusammen, wenn Sie Ihrer App ansprechende Funktionen bieten möchten. Push wird verwendet, um neue Inhalte vom Server zur App zu liefern, ohne dass ein Eingreifen auf der Client-Seite erforderlich ist, und der Betrieb wird vom Service Worker der App gehandhabt. Benachrichtigungen können vom Service Worker verwendet werden, um dem Benutzer neue Informationen anzuzeigen oder ihn zumindest zu informieren, wenn etwas aktualisiert wurde.

Sie funktionieren außerhalb des Browserfensters, genau wie Service Worker, sodass Updates gepusht und Benachrichtigungen angezeigt werden können, wenn die Seite der App aus dem Fokus gerät oder sogar geschlossen ist.

## Benachrichtigungen

Beginnen wir mit den Benachrichtigungen — sie können alleine arbeiten, werden jedoch nützlicher, wenn sie mit Push kombiniert werden. Schauen wir uns zunächst die Benachrichtigungen isoliert an.

### Erlaubnis anfordern

Um eine Benachrichtigung anzuzeigen, müssen wir zunächst die Erlaubnis dazu einholen. Anstatt die Benachrichtigung sofort anzuzeigen, sollten wir gemäß best practice das Popup anzeigen, wenn der Benutzer sie durch Klicken auf eine Schaltfläche anfordert:

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

Dies zeigt ein Popup mit dem eigenen Benachrichtigungsdienst des Betriebssystems an:

![Benachrichtigung von js13kPWA.](js13kpwa-notification.png)

Wenn der Benutzer bestätigt, Benachrichtigungen zu erhalten, kann die App diese dann anzeigen. Das Ergebnis der Benutzeraktion kann standardmäßig, erteilt oder abgelehnt sein. Die Standardoption wird gewählt, wenn der Benutzer keine Wahl trifft, und die anderen beiden werden gesetzt, wenn der Benutzer jeweils ja oder nein klickt.

Wenn akzeptiert, funktioniert die Erlaubnis sowohl für Benachrichtigungen als auch für Push.

### Erstellen einer Benachrichtigung

Die Beispiel-App erstellt eine Benachrichtigung aus den verfügbaren Daten — ein Spiel wird zufällig ausgewählt, und das gewählte Spiel füllt die Benachrichtigung mit Inhalten: Es setzt den Namen des Spiels als Titel, erwähnt den Autor im Textkörper und zeigt das Bild als Icon an:

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

Alle 30 Sekunden wird eine neue zufällige Benachrichtigung erstellt, bis sie zu nervig wird und vom Benutzer deaktiviert wird. (Für eine echte App sollten die Benachrichtigungen viel weniger häufig und nützlicher sein.) Der Vorteil der Notifications-API ist, dass sie die Benachrichtigungsfunktionalität des Betriebssystems verwendet. Das bedeutet, dass Benachrichtigungen dem Benutzer angezeigt werden können, auch wenn er nicht auf die Web-App schaut, und die Benachrichtigungen ähnlich aussehen wie die von nativen Apps angezeigten.

## Push

Push ist komplizierter als Benachrichtigungen — wir müssen uns bei einem Server anmelden, der dann die Daten zurück zur App sendet. Der Service Worker der App empfängt Daten vom Push-Server, die dann über das Benachrichtigungssystem oder einen anderen Mechanismus angezeigt werden können, falls gewünscht.

Die Technologie befindet sich noch in einem sehr frühen Stadium — einige funktionierende Beispiele verwenden die Google Cloud Messaging-Plattform, werden aber umgeschrieben, um [VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) (Voluntary Application Identification) zu unterstützen, was eine zusätzliche Sicherheitsebene für Ihre App bietet. Sie können die [Beispiele im Service Workers Cookbook](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload) untersuchen, versuchen, einen Push-Messaging-Server mit [Firebase](https://firebase.google.com/) einzurichten, oder Ihren eigenen Server erstellen (z.B. mit Node.js).

Wie bereits erwähnt, müssen Sie einen Service Worker haben, um Push-Nachrichten empfangen zu können, dessen Grundlagen bereits im Artikel [PWAs offline arbeiten lassen mit Service Workern](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers) erklärt wurden. Im Service Worker wird ein Abonnementmechanismus für den Push-Dienst erstellt, indem die Methode [`getSubscription()`](/de/docs/Web/API/PushManager/getSubscription) der Schnittstelle [`PushManager`](/de/docs/Web/API/PushManager) aufgerufen wird.

```js
navigator.serviceWorker.register("service-worker.js").then((registration) => {
  return registration.pushManager.getSubscription().then(/* ... */);
});
```

Sobald der Benutzer abonniert ist, kann er Push-Benachrichtigungen vom Server empfangen.

Auf der Serverseite muss der gesamte Prozess aus Sicherheitsgründen mit öffentlichen und privaten Schlüsseln verschlüsselt werden — es wäre eine schreckliche Idee, jedermann zu erlauben, ungesicherte Push-Nachrichten mit Ihrer App zu senden. Sehen Sie sich die [Web Push-Datenverschlüsselungstestseite](https://jrconlin.github.io/WebPushDataTestPage/) für detaillierte Informationen zur Sicherung des Servers an. Der Server speichert alle Informationen, die beim Abonnieren des Benutzers erhalten wurden, damit die Nachrichten später bei Bedarf gesendet werden können.

Um Push-Nachrichten zu empfangen, können wir auf das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Ereignis in der Service Worker-Datei hören:

```js
self.addEventListener("push", (e) => {
  /* ... */
});
```

Die Daten können abgerufen und dann dem Benutzer sofort als Benachrichtigung angezeigt werden. Dies kann beispielsweise verwendet werden, um den Benutzer an etwas zu erinnern oder ihm mitzuteilen, dass neue Inhalte in der App verfügbar sind.

### Push-Beispiel

Push benötigt den Server-Part, um zu funktionieren, daher können wir es nicht in das auf GitHub Pages gehostete Beispiel js13kPWA aufnehmen, da es nur das Hosting von statischen Dateien bietet. Es ist alles im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) erklärt — siehe das [Push Payload Demo](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload).

Dieses Demo besteht aus drei Dateien:

- [index.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/index.js), welche den Quellcode unserer App enthält
- [server.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/server.js), welche den Server-Teil enthält (in Node.js geschrieben)
- [service-worker.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/service-worker.js), welche den für den Service Worker spezifischen Code enthält.

Lassen Sie uns alle diese erkunden.

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

Es ist etwas komplizierter als der Service Worker, den wir im [js13kPWA-Demo](https://mdn.github.io/pwa-examples/js13kpwa/) gesehen haben. In diesem speziellen Fall verwenden wir nach der Registrierung das Registrierungsobjekt, um ein Abonnement einzurichten, und verwenden dann das resultierende Abonnementobjekt, um den gesamten Prozess abzuschließen.

Im Registrierungsabschnitt sieht der Code folgendermaßen aus:

```js
async (subscription) => {
  if (subscription) {
    return subscription;
  }
};
```

Wenn der Benutzer bereits abonniert ist, geben wir dann das Abonnementobjekt zurück und gehen zum Abonnementteil über. Wenn nicht, initialisieren wir ein neues Abonnement:

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

Die App ruft den öffentlichen Schlüssel des Servers ab und konvertiert die Antwort in Text; anschließend muss er in ein Uint8Array konvertiert werden (um Chrome zu unterstützen). Um mehr über VAPID-Schlüssel zu erfahren, können Sie den Blogbeitrag [Sending VAPID identified WebPush Notifications via Mozilla's Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) lesen.

Die App kann nun den [`PushManager`](/de/docs/Web/API/PushManager) verwenden, um den neuen Benutzer zu abonnieren. Es gibt zwei Optionen, die an die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) übergeben werden — die erste ist `userVisibleOnly: true`, was bedeutet, dass alle Benachrichtigungen, die an den Benutzer gesendet werden, für ihn sichtbar sind, und die zweite ist der `applicationServerKey`, welcher unseren erfolgreich erworbenen und konvertierten VAPID-Schlüssel enthält.

```js
registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

Gehen wir nun zum Abonnementsteil über — die App sendet die Abonnementdetails zuerst als JSON mit Fetch an den Server.

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ subscription }),
});
```

Dann wird die [`onclick`](/de/docs/Web/API/Element/click_event)-Funktion auf der _Abonnieren_-Schaltfläche definiert:

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

Wenn die Schaltfläche geklickt wird, fordert `fetch` den Server auf, die Benachrichtigung mit den angegebenen Parametern zu senden: `payload` ist der Text, der in der Benachrichtigung angezeigt werden soll, `delay` definiert eine Verzögerung in Sekunden, bis die Benachrichtigung angezeigt wird, und `ttl` ist die Lebensdauereinstellung, die die Benachrichtigung eine bestimmte Zeit lang auf dem Server verfügbar hält, ebenfalls in Sekunden definiert.

Nun zum nächsten JavaScript-Datei.

#### server.js

Der Server-Teil ist in Node.js geschrieben und muss an einem geeigneten Ort gehostet werden, was ein Thema für einen vollständig separaten Artikel ist. Wir geben hier nur einen Überblick auf hoher Ebene.

Das [web-push-Modul](https://www.npmjs.com/package/web-push) wird verwendet, um die VAPID-Schlüssel zu setzen und optional zu generieren, falls diese noch nicht verfügbar sind.

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

Als nächstes definiert und exportiert ein Modul alle Routen, die eine App verarbeiten muss: das Abrufen des öffentlichen VAPID-Schlüssels, die Registrierung und dann das Senden von Benachrichtigungen. Sie können die Variablen aus der `index.js`-Datei sehen: `payload`, `delay` und `ttl`.

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

Alles, was er tut, ist einen Listener für das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) Ereignis hinzuzufügen, die `payload`-Variable bestehend aus dem aus den Daten übernommenen Text zu erstellen (oder einen String zu erstellen, der verwendet werden soll, wenn die Daten leer sind), und dann zu warten, bis die Benachrichtigung dem Benutzer angezeigt wird.

Fühlen Sie sich frei, die restlichen Beispiele im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) zu erkunden, wenn Sie wissen möchten, wie sie gehandhabt werden.
Es gibt eine große Sammlung von funktionierenden Beispielen, die allgemeine Nutzung, aber auch Web Push, Caching-Strategien, Performance, Arbeiten offline und mehr zeigen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
