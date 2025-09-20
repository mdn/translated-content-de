---
title: "js13kGames: PWAs mit Hilfe von Benachrichtigungen und Push-APIs wiederkehrend gestalten"
short-title: Verwendung von Benachrichtigungen und Push-APIs
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
l10n:
  sourceCommit: 3e8eb2b3466248d87e86df227f45deb49054aa42
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Die Möglichkeit, die Inhalte einer App zwischenzuspeichern, um offline zu arbeiten, ist eine großartige Funktion. Die Benutzer in die Lage zu versetzen, die Web-App auf ihrem Gerät zu installieren, ist noch besser. Doch anstatt sich nur auf Benutzeraktionen zu verlassen, können wir noch mehr tun, indem wir Push-Nachrichten und Benachrichtigungen verwenden, um bei Verfügbarkeit neuer Inhalte automatisch wiederkehrendes Interesse zu wecken und diese zu liefern.

## Zwei APIs, ein Ziel

Die [Push-API](/de/docs/Web/API/Push_API) und die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) sind zwei separate APIs, aber sie arbeiten gut zusammen, wenn Sie Ihrer App ansprechende Funktionen bieten möchten. Push wird verwendet, um neue Inhalte vom Server zur App zu liefern, ohne dass clientseitige Eingriffe erforderlich sind, und sein Betrieb wird durch den Service Worker der App abgewickelt. Benachrichtigungen können vom Service Worker genutzt werden, um dem Benutzer neue Informationen anzuzeigen oder ihn zumindest darauf hinzuweisen, wenn etwas aktualisiert wurde.

Sie funktionieren außerhalb des Browserfensters, genau wie Service Worker, sodass Updates gesendet und Benachrichtigungen angezeigt werden können, wenn die Seite der App nicht im Vordergrund ist oder sogar geschlossen ist.

## Benachrichtigungen

Beginnen wir mit den Benachrichtigungen — sie können eigenständig funktionieren, werden jedoch nützlicher, wenn sie mit Push kombiniert werden. Schauen wir uns zunächst die Benachrichtigungen isoliert an.

### Berechtigung anfordern

Um eine Benachrichtigung anzuzeigen, müssen wir zunächst die Erlaubnis dazu einholen. Statt die Benachrichtigung sofort anzuzeigen, empfiehlt es sich, das Popup anzuzeigen, wenn der Benutzer es durch einen Klick auf einen Button anfordert:

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

Dies zeigt ein Popup mithilfe des Benachrichtigungsdienstes des Betriebssystems an:

![Benachrichtigung der js13kPWA.](js13kpwa-notification.png)

Wenn der Nutzer bestätigt, Benachrichtigungen zu erhalten, kann die App sie dann anzeigen. Das Ergebnis der Benutzeraktion kann auf Standard, Erlaubt oder Abgelehnt gesetzt werden. Die Standardoption wird gewählt, wenn der Benutzer keine Entscheidung treffen möchte, und die anderen beiden werden gesetzt, wenn der Benutzer ja oder nein anklickt.

Wird akzeptiert, gilt die Erlaubnis sowohl für Benachrichtigungen als auch für Push.

### Eine Benachrichtigung erstellen

Die Beispiel-App erstellt eine Benachrichtigung aus den verfügbaren Daten — ein Spiel wird zufällig ausgewählt und das ausgewählte füllt die Benachrichtigung mit dem Inhalt: Es setzt den Namen des Spiels als Titel, erwähnt den Autor im Textkörper und zeigt das Bild als Icon an:

```js
function randomNotification() {
  if (!swRegistration) return;
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  swRegistration.showNotification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

Alle 30 Sekunden wird eine neue zufällige Benachrichtigung erstellt, bis sie zu störend wird und der Benutzer sie deaktiviert. (Für eine echte App sollten die Benachrichtigungen viel seltener und nützlicher sein.) Der Vorteil der Benachrichtigungs-API ist, dass sie die Benachrichtigungsfunktionalität des Betriebssystems nutzt. Das bedeutet, dass Benachrichtigungen dem Benutzer angezeigt werden können, auch wenn sie die Web-App nicht betrachten, und die Benachrichtigungen sehen ähnlich aus wie bei nativen Apps.

## Push

Push ist komplizierter als Benachrichtigungen — wir müssen uns bei einem Server anmelden, der dann die Daten zurück an die App sendet. Der Service Worker der App wird die Daten vom Push-Server empfangen, die dann mittels des Benachrichtigungssystems oder eines anderen Mechanismus angezeigt werden können, falls gewünscht.

Die Technologie befindet sich noch in einem sehr frühen Stadium — einige funktionierende Beispiele verwenden die Google Cloud Messaging-Plattform, werden jedoch umgeschrieben, um [VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) (Voluntary Application Identification) zu unterstützen, was eine zusätzliche Sicherheitsebene für Ihre App bietet. Sie können die [Service Workers Cookbook Beispiele](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload) untersuchen, versuchen, einen Push-Messaging-Server mithilfe von [Firebase](https://firebase.google.com/) einzurichten, oder Ihren eigenen Server (zum Beispiel mit Node.js) erstellen.

Wie bereits erwähnt, müssen Sie, um Push-Nachrichten empfangen zu können, einen Service Worker haben, dessen Grundlagen bereits im Artikel [PWAs mit Serviceworkern offline betreiben](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers) erklärt werden. Im Service Worker wird ein Abonnementmechanismus für Push-Dienste durch den Aufruf der [`getSubscription()`](/de/docs/Web/API/PushManager/getSubscription)-Methode der [`PushManager`](/de/docs/Web/API/PushManager)-Schnittstelle erstellt.

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then((registration) => registration.pushManager.getSubscription())
  .then(/* … */);
```

Sobald der Nutzer angemeldet ist, kann er Push-Benachrichtigungen vom Server empfangen.

Auf der Serverseite muss der gesamte Prozess aus Sicherheitsgründen mit öffentlichen und privaten Schlüsseln verschlüsselt werden — es wäre eine schreckliche Idee, jedermann unverschlüsselte Push-Nachrichten mit Ihrer App versenden zu lassen. Siehe die [Web Push-Datenverschlüsselungs-Testseite](https://jrconlin.github.io/WebPushDataTestPage/) für detaillierte Informationen zur Absicherung des Servers. Der Server speichert alle Informationen, die bei der Anmeldung des Benutzers empfangen wurden, sodass die Nachrichten später bei Bedarf gesendet werden können.

Um Push-Nachrichten zu empfangen, können wir das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Ereignis in der Service Worker-Datei abhören:

```js
self.addEventListener("push", (e) => {
  /* ... */
});
```

Die Daten können abgerufen und dann sofort als Benachrichtigung an den Benutzer angezeigt werden. Dies kann beispielsweise verwendet werden, um den Benutzer an etwas zu erinnern oder ihn darüber zu informieren, dass neue Inhalte in der App verfügbar sind.

### Push-Beispiel

Push benötigt den Serverteil, um zu arbeiten, daher können wir es nicht im js13kPWA-Beispiel, das auf GitHub Pages gehostet wird, einbinden, da es nur statische Dateien hosten kann. Alles wird im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) erklärt — siehe das [Push Payload Demo](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload).

Dieses Demo besteht aus drei Dateien:

- [index.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/index.js), die den Quellcode unserer App enthält
- [server.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/server.js), die den Serverteil enthält (in Node.js geschrieben)
- [service-worker.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/service-worker.js), die den Service Worker-spezifischen Code enthält.

Lassen Sie uns alle diese erkunden.

#### index.js

Die `index.js`-Datei beginnt mit der Registrierung des Service Workers:

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then((registration) => registration.pushManager.getSubscription())
  .then((subscription) => {
    // subscription part
  });
```

Es ist etwas komplizierter als der Service Worker, den wir im [js13kPWA-Demo](https://mdn.github.io/pwa-examples/js13kpwa/) gesehen haben. In diesem speziellen Fall verwenden wir nach der Registrierung das Registrierungsobjekt, um ein Abonnement zu erstellen, und verwenden dann das resultierende Abonnementobjekt, um den gesamten Prozess abzuschließen.

Im Registrierungsteil sieht der Code so aus:

```js
async (subscription) => {
  if (subscription) {
    return subscription;
  }
};
```

Wenn der Benutzer bereits abonniert ist, geben wir das Abonnementobjekt zurück und wechseln zum Abonnementteil. Ist dies nicht der Fall, initialisieren wir ein neues Abonnement:

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

Die App ruft den öffentlichen Schlüssel des Servers ab und konvertiert die Antwort in Text; dann muss sie in ein Uint8Array umgewandelt werden (um Chrome zu unterstützen). Um mehr über VAPID-Schlüssel zu erfahren, können Sie den Blogbeitrag [Versenden von VAPID-identifizierten WebPush-Benachrichtigungen über Mozillas Push-Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) lesen.

Die App kann nun den [`PushManager`](/de/docs/Web/API/PushManager) verwenden, um den neuen Benutzer zu abonnieren. Es werden zwei Optionen an die [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)-Methode übergeben — die erste ist `userVisibleOnly: true`, was bedeutet, dass alle an den Benutzer gesendeten Benachrichtigungen für ihn sichtbar sein werden, und die zweite ist der `applicationServerKey`, der unseren erfolgreich erworbenen und konvertierten VAPID-Schlüssel enthält.

```js
registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

Nun lassen Sie uns zum Abonnementteil übergehen — die App sendet zuerst die Abonnementdetails als JSON an den Server, indem sie Fetch benutzt.

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

Wenn der Button geklickt wird, fordert `fetch` den Server auf, die Benachrichtigung mit den angegebenen Parametern zu senden: `payload` ist der Text, der in der Benachrichtigung angezeigt werden soll, `delay` definiert eine Verzögerung in Sekunden, bis die Benachrichtigung angezeigt wird, und `ttl` ist die Time-to-Live-Einstellung, die die Benachrichtigung für eine bestimmte Zeit auf dem Server verfügbar hält, ebenfalls in Sekunden definiert.

Nun zum nächsten JavaScript-Dokument.

#### server.js

Der Serverseite ist in Node.js geschrieben und muss irgendwo geeignet gehostet werden, was ein eigenes Thema für einen separaten Artikel wäre. Wir bieten hier nur eine Übersicht auf hoher Ebene.

Das [web-push Modul](https://www.npmjs.com/package/web-push) wird verwendet, um die VAPID-Schlüssel zu setzen, und optional zu generieren, wenn sie noch nicht verfügbar sind.

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

Als nächstes definiert und exportiert ein Modul alle Routen, die eine App handhaben muss: Abrufen des öffentlichen VAPID-Schlüssels, Registrierung und dann das Versenden von Benachrichtigungen.

Sie können die Variablen aus der `index.js` Datei verwenden: `payload`, `delay` und `ttl`.

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

Die letzte Datei, die wir betrachten, ist der Service Worker:

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

Alles, was sie tut, ist einen Listener für das [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Ereignis hinzuzufügen, die Payload-Variable zu erstellen, die aus dem Text besteht, der aus den Daten übernommen wurde (oder eine Zeichenkette zu erstellen, die verwendet wird, wenn die Daten leer sind), und dann zu warten, bis die Benachrichtigung dem Benutzer angezeigt wird.

Sie können den Rest der Beispiele im [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) erkunden, wenn Sie wissen möchten, wie sie gehandhabt werden. Es gibt eine große Sammlung funktionierender Beispiel, die die allgemeine Verwendung zeigen, aber auch Web-Push, Caching-Strategien, Leistung, Arbeiten offline und mehr.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
