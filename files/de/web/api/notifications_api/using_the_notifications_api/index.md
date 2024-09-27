---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 83ec73ac6fec9cae23c54b729e6481f50a0a45e7
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden. Dies ermöglicht es Web-Apps, Informationen an einen Benutzer zu senden, auch wenn die Anwendung inaktiv ist oder im Hintergrund läuft. Dieser Artikel behandelt die Grundlagen der Nutzung dieser API in Ihren eigenen Apps.

Typischerweise beziehen sich Systembenachrichtigungen auf den standardisierten Benachrichtigungsmechanismus des Betriebssystems: Denken Sie beispielsweise daran, wie ein typisches Desktop-System oder mobiles Gerät Benachrichtigungen sendet.

![Desktop-Benachrichtigung: To-do-Liste über mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt überfällig](desktop-notification.png)

Das Systembenachrichtigungssystem variiert natürlich je nach Plattform und Browser, aber das ist in Ordnung, und die Notifications API ist so geschrieben, dass sie allgemein genug ist, um mit den meisten Systembenachrichtigungssystemen kompatibel zu sein.

## Beispiele

Einer der offensichtlichsten Anwendungsfälle für Webbenachrichtigungen ist eine webbasierte E-Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingegangen ist, selbst wenn der Benutzer gerade etwas anderes mit einer anderen Anwendung tut. Viele Beispiele dafür existieren inzwischen, wie zum Beispiel [Slack](https://slack.com/).

Wir haben ein Beispiel aus der realen Welt erstellt — eine To-do-Liste App — um eine Vorstellung davon zu geben, wie Webbenachrichtigungen verwendet werden können. Sie speichert Daten lokal mit [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer, wenn Aufgaben fällig sind, mit Systembenachrichtigungen. [Laden Sie den To-do-Code herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications), oder [sehen Sie sich die App live an](https://mdn.github.io/dom-examples/to-do-notifications/).

## Erlaubnis anfordern

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu gewähren. Dies ist eine häufige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren — mindestens einmal muss der Benutzer der Anwendung explizit die Erlaubnis erteilen, Benachrichtigungen anzuzeigen, wodurch der Benutzer steuern kann, welche Apps/Sites Benachrichtigungen anzeigen dürfen.

Aufgrund von Missbrauch von Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler begonnen, Strategien zu implementieren, um dieses Problem abzumildern. Sie sollten die Zustimmung zum Anzeigen von Benachrichtigungen nur als Reaktion auf eine Benutzeraktion anfordern (z.B. das Klicken auf einen Button). Dies ist nicht nur Best Practice — Sie sollten Benutzer nicht mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben — sondern in Zukunft werden Browser ausdrücklich Benachrichtigungsberechtigungsanfragen ablehnen, die nicht als Reaktion auf eine Benutzeraktion ausgelöst werden. Firefox macht dies bereits seit Version 72, und Safari praktiziert dies schon seit einiger Zeit.

Darüber hinaus können Sie in Chrome und Firefox Benachrichtigungen nur anfordern, wenn die Seite ein sicherer Kontext ist (d.h. HTTPS), und Sie können nicht mehr zulassen, dass Benachrichtigungsberechtigungen von cross-origin {{htmlelement("iframe")}}s angefragt werden.

### Aktuellen Berechtigungsstatus prüfen

Sie können prüfen, ob Sie bereits eine Berechtigung haben, indem Sie den Wert der schreibgeschützten Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) überprüfen. Sie kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht um Erlaubnis gefragt, daher werden keine Benachrichtigungen angezeigt.
- `granted`
  - : Der Benutzer hat die Erlaubnis erteilt, Benachrichtigungen anzuzeigen, nachdem er zuvor gefragt wurde.
- `denied`
  - : Der Benutzer hat die Erlaubnis zum Anzeigen von Benachrichtigungen ausdrücklich abgelehnt.

### Erlaubnis erhalten

Wenn die Erlaubnis zum Anzeigen von Benachrichtigungen noch nicht erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um dies vom Benutzer anzufordern. In seiner einfachsten Form fügen wir einfach das Folgende ein:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies verwendet die auf Promise basierende Version der Methode. Wenn Sie ältere Versionen unterstützen möchten, müssen Sie möglicherweise die ältere Callback-Version verwenden, die folgendermaßen aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Callback-Version akzeptiert optional eine Callback-Funktion, die aufgerufen wird, sobald der Benutzer die Anfrage zur Anzeige von Berechtigungen beantwortet hat.

> [!NOTE]
> Es gibt keine zuverlässige Möglichkeit, zu testen, ob `Notification.requestPermission` die auf Promise basierende Version unterstützt. Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die auf Callback basierende Version - auch wenn diese veraltet ist, funktioniert sie weiterhin in neuen Browsern. Prüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen.

### Beispiel

In unserem To-do-Liste-Demo haben wir einen Button "Benachrichtigungen aktivieren", der, wenn er gedrückt wird, Berechtigungen für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Das Klicken darauf ruft die `askNotificationPermission()`-Funktion auf:

```js
function askNotificationPermission() {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
    return;
  }
  Notification.requestPermission().then((permission) => {
    // set the button to shown or hidden, depending on what the user answers
    notificationBtn.style.display = permission === "granted" ? "none" : "block";
  });
}
```

Wenn Sie sich zuerst den zweiten Hauptblock ansehen, werden Sie feststellen, dass wir zuerst prüfen, ob Benachrichtigungen unterstützt werden. Wenn dies der Fall ist, führen wir die auf Promise basierende Version von `Notification.requestPermission()` aus, und wenn nicht, protokollieren wir eine Nachricht in die Konsole.

Innerhalb des Promise-Auflösungs-Handlers, der `then` übergeben wird, zeigen wir den Button je nach Auswahl des Benutzers im Berechtigungsdialog an oder blenden ihn aus. Wir möchten ihn nicht anzeigen, wenn die Erlaubnis bereits erteilt wurde, aber wenn der Benutzer die Erlaubnis verweigert hat, möchten wir ihm die Möglichkeit geben, seine Meinung später zu ändern.

## Erstellen einer Benachrichtigung

Das Erstellen einer Benachrichtigung ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification) Konstruktor. Dieser Konstruktor erwartet einen Titel, der innerhalb der Benachrichtigung angezeigt werden soll, und einige Optionen, um die Benachrichtigung zu verbessern, wie ein [`icon`](/de/docs/Web/API/Notification/icon) oder einen Text [`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel verwenden wir im To-do-Liste Beispiel den folgenden Ausschnitt, um bei Bedarf eine Benachrichtigung zu erstellen (zu finden in der Funktion `createNotification()`):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Schließen von Benachrichtigungen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z.B. hat der Benutzer die Benachrichtigung bereits auf der Webseite gelesen, im Fall einer Messaging-App, oder das folgende Lied wird bereits in einer Musik-App abgespielt, um auf Songänderungen hinzuweisen). Die meisten modernen Browser blenden Benachrichtigungen nach einigen Momenten (etwa vier Sekunden) automatisch aus, aber das ist im Allgemeinen nichts, worüber Sie sich Gedanken machen sollten, da es dem Benutzer und dem Benutzeragenten überlassen bleibt. Das Ausblenden kann auch auf Betriebssystemebene erfolgen und Benutzer sollten dies kontrollieren können. Alte Versionen von Chrome haben Benachrichtigungen nicht automatisch entfernt, sodass Sie dies nach einem [`setTimeout()`](/de/docs/Web/API/SetTimeout) nur für diese älteren Versionen tun können, um Benachrichtigungen nicht aus Benachrichtigungstabletts auf anderen Browsern zu entfernen.

```js
const n = new Notification("My Great Song");
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // The tab has become visible so clear the now-stale Notification.
    n.close();
  }
});
```

> [!NOTE]
> Diese API sollte nicht verwendet werden, nur um die Benachrichtigung nach einer festen Zeitspanne von modernen Browsern zu entfernen, da diese Methode die Benachrichtigung auch aus jedem Benachrichtigungszentrum entfernt und verhindert, dass Benutzer nach der ersten Anzeige mit ihr interagieren können.

> [!NOTE]
> Wenn Sie ein "close"-Ereignis erhalten, gibt es keine Garantie, dass es der Benutzer war, der die Benachrichtigung geschlossen hat. Dies entspricht der Spezifikation, die besagt: "Wenn eine Benachrichtigung geschlossen wird, entweder durch die zugrunde liegende Benachrichtigungsplattform oder vom Benutzer, müssen die Schließungsschritte für sie ausgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die auf der [`Notification`](/de/docs/Web/API/Notification) Instanz ausgelöst werden:

- `click`
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Wird ausgelöst, wenn die Benachrichtigung geschlossen wird.
- `error`
  - : Wird ausgelöst, wenn etwas mit der Benachrichtigung schiefgeht; dies ist normalerweise der Fall, wenn die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Wird ausgelöst, wenn die Benachrichtigung dem Benutzer angezeigt wird.

Diese Ereignisse können mithilfe der Handler [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event), und [`onshow`](/de/docs/Web/API/Notification/show_event) verfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

## Ersetzen bestehender Benachrichtigungen

Es ist normalerweise unerwünscht, dass ein Benutzer in kurzer Zeit viele Benachrichtigungen erhält - zum Beispiel, wenn eine Messenger-Anwendung einen Benutzer für jede eingehende Nachricht benachrichtigen würde und ihm viele Nachrichten geschickt werden? Um zu vermeiden, dass der Benutzer mit zu vielen Benachrichtigungen überflutet wird, ist es möglich, die ausstehenden Benachrichtigungen zu ändern und einzelne oder mehrere ausstehende Benachrichtigungen durch eine neue zu ersetzen.

Dazu ist es möglich, einer neuen Benachrichtigung ein Tag hinzuzufügen. Wenn eine Benachrichtigung bereits das gleiche Tag hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung die vorherige Benachrichtigung. Wenn die Benachrichtigung mit dem gleichen Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

### Beispiel Tag

Angenommen, das folgende einfache HTML:

```html
<button id="notify">Notify me!</button>
<section id="demo-logs"></section>
```

```css hidden
#demo-logs {
  width: 90%;
  height: 100px;
  background-color: #ddd;
  overflow-x: auto;
  padding: 10px;
  margin-top: 10px;
}
```

Es ist möglich, mehrere Benachrichtigungen auf diese Weise zu behandeln:

```js
const demoLogs = document.querySelector("#demo-logs");

window.addEventListener("load", () => {
  const button = document.querySelector("#notify");

  button.addEventListener("click", () => {
    if (Notification?.permission === "granted") {
      demoLogs.innerText += `The site has permission to show notifications. Showing notifications.\n`;
      // If the user agreed to get notified
      // Let's try to send ten notifications
      let i = 0;
      // Using an interval cause some browsers (including Firefox) are blocking notifications if there are too much in a certain time.
      const interval = setInterval(() => {
        // Thanks to the tag, we should only see the "Hi no 9 from MDN." notification
        const n = new Notification(`Hi no ${i} from MDN.`, {
          tag: "soManyNotification",
        });
        if (i === 9) {
          clearInterval(interval);
        }
        i++;
      }, 200);
    } else if (Notification?.permission !== "denied") {
      demoLogs.innerText += "Requesting notification permission.\n";
      // If the user hasn't told if they want to be notified or not
      // Note: because of Chrome, we are not sure the permission property
      // is set, therefore it's unsafe to check for the "default" value.
      Notification.requestPermission().then((status) => {
        // If the user said okay
        if (status === "granted") {
          demoLogs.innerText +=
            "User granted the permission. Sending notifications.\n";
          let i = 0;
          // Using an interval cause some browsers (including Firefox) are blocking notifications if there are too much in a certain time.
          const interval = setInterval(() => {
            // Thanks to the tag, we should only see the "Message no 9 from MDN." notification
            const n = new Notification(`Message no ${i} from MDN.`, {
              tag: "soManyNotification",
            });
            if (i === 9) {
              clearInterval(interval);
            }
            i++;
          }, 200);
        } else {
          // Otherwise, we can fallback to a regular modal alert
          demoLogs.innerText += `User denied the permission request.\n`;
        }
      });
    } else {
      // If the user refuses to get notified, we can fallback to a regular modal alert
      demoLogs.innerText += `The site does not have permission to show notifications.\n`;
    }
  });
});
```

### Ergebnis

{{ EmbedLiveSample('Tag_example', '100%', 200) }}

Um das obige Beispiel zu testen, ändern Sie die [Benachrichtigungseinstellung](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die `https://live.mdnplay.dev`-Website.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
