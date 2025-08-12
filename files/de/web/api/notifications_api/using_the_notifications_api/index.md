---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Web Notifications")}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden; dies erlaubt es Web-Apps, Informationen an einen Benutzer zu senden, selbst wenn die Anwendung im Leerlauf oder im Hintergrund ist. Dieser Artikel behandelt die Grundlagen der Verwendung dieser API in Ihren eigenen Apps.

Normalerweise beziehen sich Systembenachrichtigungen auf den Standardbenachrichtigungsmechanismus des Betriebssystems: Denken Sie zum Beispiel daran, wie ein typisches Desktop-System oder mobiles Gerät Benachrichtigungen sendet.

![Desktop-Benachrichtigung: To-do-Liste über mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt überfällig](desktop-notification.png)

Das Systembenachrichtigungssystem variiert natürlich je nach Plattform und Browser, aber das ist in Ordnung, und die Notifications API ist so geschrieben, dass sie allgemein genug ist, um mit den meisten Systembenachrichtigungssystemen kompatibel zu sein.

## Beispiele

Einer der offensichtlichsten Anwendungsfälle für Web-Benachrichtigungen ist eine webbasierte Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingegangen ist, selbst wenn der Benutzer mit einer anderen Anwendung beschäftigt ist. Viele Beispiele dafür existieren heute, wie z.B. [Slack](https://slack.com/).

Wir haben ein praxisnahes Beispiel geschrieben — eine To-do-Liste-App — um eine Vorstellung davon zu geben, wie Web-Benachrichtigungen verwendet werden können. Sie speichert Daten lokal mit [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer, wenn Aufgaben fällig sind, über Systembenachrichtigungen. [Laden Sie den Code der To-do-Liste herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications), oder [sehen Sie sich die App live an](https://mdn.github.io/dom-examples/to-do-notifications/).

## Erlaubnis anfordern

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu gewähren. Dies ist eine gängige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren — zumindest einmal muss der Benutzer dieser Anwendung ausdrücklich die Erlaubnis erteilen, Benachrichtigungen anzuzeigen, wodurch der Benutzer steuern kann, welche Apps/Sites Benachrichtigungen anzeigen dürfen.

Aufgrund des Missbrauchs von Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler begonnen, Strategien zu implementieren, um dieses Problem zu mindern. Sie sollten die Zustimmung zur Anzeige von Benachrichtigungen nur als Reaktion auf eine Benutzeraktion anfordern (z. B. Klicken auf einen Button). Das ist nicht nur eine Best Practice — Sie sollten die Benutzer nicht mit Benachrichtigungen überfluten, denen sie nicht zugestimmt haben — sondern in Zukunft werden Browser Benachrichtigungsberechtigungen explizit verbieten, wenn sie nicht als Reaktion auf eine Benutzeraktion ausgelöst werden. Firefox macht dies beispielsweise bereits ab Version 72, und Safari tut dies schon seit einiger Zeit.

Darüber hinaus können Sie in Chrome und Firefox keine Benachrichtigungen anfordern, es sei denn, die Seite ist ein sicherer Kontext (d.h. HTTPS), und Sie können keine Benachrichtigungsberechtigungen mehr von fremden {{htmlelement("iframe")}}s anfordern lassen.

### Aktuellen Berechtigungsstatus prüfen

Sie können überprüfen, ob Sie bereits die Berechtigung haben, indem Sie den Wert der schreibgeschützten Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) überprüfen. Sie kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht um Erlaubnis gefragt, daher werden Benachrichtigungen nicht angezeigt.
- `granted`
  - : Der Benutzer hat die Erlaubnis erteilt, Benachrichtigungen anzuzeigen, nachdem er zuvor gefragt wurde.
- `denied`
  - : Der Benutzer hat die Erlaubnis, Benachrichtigungen zu zeigen, ausdrücklich abgelehnt.

### Erlaubnis einholen

Wenn die Erlaubnis zur Anzeige von Benachrichtigungen noch nicht erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um diese vom Benutzer anzufordern. In ihrer einfachsten Form fügen wir einfach Folgendes ein:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies verwendet die auf Versprechen basierte Version der Methode. Wenn Sie ältere Versionen unterstützen möchten, müssen Sie möglicherweise die ältere Callback-Version verwenden, die so aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Callback-Version akzeptiert optional eine Callback-Funktion, die aufgerufen wird, sobald der Benutzer auf die Anfrage zur Anzeigeberechtigung reagiert hat.

> [!NOTE]
> Es gibt keine Möglichkeit, zuverlässig zu testen, ob `Notification.requestPermission` die auf Versprechen basierte Version unterstützt. Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die Callback-basierte Version — auch wenn sie veraltet ist, funktioniert sie immer noch in neuen Browsern. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen.

### Beispiel

In unserer To-do-Liste-Demo haben wir einen "Benachrichtigungen aktivieren" Button, der beim Drücken die Benachrichtigungsberechtigungen für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Ein Klick darauf ruft die Funktion `askNotificationPermission()` auf:

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

Wenn Sie sich zuerst den zweiten Hauptblock ansehen, sehen Sie, dass wir zuerst überprüfen, ob Benachrichtigungen unterstützt werden. Falls ja, führen wir die auf Versprechen basierte Version von `Notification.requestPermission()` aus. Falls nicht, protokollieren wir eine Nachricht in der Konsole.

Im Ladehandler des Versprechens, das an `then` übergeben wird, zeigen oder verstecken wir den Button, abhängig davon, was der Benutzer im Berechtigungsdialog ausgewählt hat. Wir möchten ihn nicht anzeigen, wenn die Erlaubnis bereits erteilt wurde, aber wenn der Benutzer sich entschieden hat, die Erlaubnis zu verweigern, möchten wir ihm die Möglichkeit geben, später seine Meinung zu ändern.

## Erstellen einer Benachrichtigung

Eine Benachrichtigung zu erstellen ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification) Konstruktor. Dieser Konstruktor erwartet einen Titel, der in der Benachrichtigung angezeigt werden soll, und einige Optionen, um die Benachrichtigung zu verbessern, wie z.B. ein [`icon`](/de/docs/Web/API/Notification/icon) oder ein Text- [`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel verwenden wir im To-do-Listen-Beispiel den folgenden Schnipsel, um bei Bedarf eine Benachrichtigung zu erstellen (zu finden in der Funktion `createNotification()`):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Schließen von Benachrichtigungen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z.B. der Benutzer hat die Benachrichtigung auf der Webseite bereits gelesen, im Falle einer Messaging-App, oder der nächste Song wird bereits in einer Musik-App gespielt, die bei Songwechseln benachrichtigt). Die meisten modernen Browser schließen Benachrichtigungen automatisch nach einigen Momenten (etwa vier Sekunden), aber dies ist normalerweise nichts, worüber Sie sich Sorgen machen sollten, da es dem Benutzer und dem Benutzeragent überlassen ist. Das Entfernen kann auch auf Betriebssystemebene geschehen und die Benutzer sollten die Kontrolle darüber behalten. Alte Versionen von Chrome haben Benachrichtigungen nicht automatisch entfernt, daher können Sie das für diese älteren Versionen mit einem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) tun, um Benachrichtigungen in Benachrichtigungstrays anderer Browser nicht zu entfernen.

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
> Diese API sollte nicht nur verwendet werden, um die Benachrichtigung nach einer festen Verzögerung (auf modernen Browsern) von der Anzeige zu entfernen, da diese Methode die Benachrichtigung auch aus jedem Benachrichtigungstray entfernt und Benutzer daran hindert, nach der ersten Anzeige damit zu interagieren.

> [!NOTE]
> Wenn Sie ein "close"-Ereignis empfangen, gibt es keine Garantie dafür, dass der Benutzer die Benachrichtigung geschlossen hat. Dies entspricht der Spezifikation, die besagt: "Wenn eine Benachrichtigung geschlossen wird, entweder von der zugrunde liegenden Benachrichtigungsplattform oder vom Benutzer, müssen die Schrittedes Schließens ausgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die auf der Instanz von [`Notification`](/de/docs/Web/API/Notification) ausgelöst werden:

- `click`
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Wird ausgelöst, nachdem die Benachrichtigung geschlossen wurde.
- `error`
  - : Wird ausgelöst, wenn etwas mit der Benachrichtigung schief geht; dies ist normalerweise der Fall, wenn die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Wird ausgelöst, wenn die Benachrichtigung dem Benutzer angezeigt wird.

Diese Ereignisse können mithilfe der Handler [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event) und [`onshow`](/de/docs/Web/API/Notification/show_event) verfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

## Bestehende Benachrichtigungen ersetzen

Es ist normalerweise unerwünscht, dass ein Benutzer eine große Menge Benachrichtigungen in kurzer Zeit erhält — was wäre zum Beispiel, wenn eine Messenger-Anwendung einen Benutzer für jede eingehende Nachricht benachrichtigen würde, und er viele Nachrichten erhält? Um zu vermeiden, dass der Benutzer mit zu vielen Benachrichtigungen überflutet wird, ist es möglich, die Warteschlange ausstehender Benachrichtigungen zu modifizieren, indem einzelne oder mehrere ausstehende Benachrichtigungen durch eine neue ersetzt werden.

Hierfür ist es möglich, einer neuen Benachrichtigung ein Tag hinzuzufügen. Wenn eine Benachrichtigung bereits das gleiche Tag hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung diese vorherige Benachrichtigung. Wenn die Benachrichtigung mit demselben Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue wird angezeigt.

### Tag-Beispiel

Angenommen, das folgende grundlegende HTML:

```html
<button id="notify">Notify me!</button>
<section id="demo-logs"></section>
```

```css hidden
#demo-logs {
  width: 90%;
  height: 100px;
  background-color: #dddddd;
  overflow-x: auto;
  padding: 10px;
  margin-top: 10px;
}
```

Es ist möglich, mehrere Benachrichtigungen auf diese Weise zu verwalten:

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

Um das obige Beispiel zu testen, ändern Sie die [Einstellung zum Senden von Benachrichtigungen](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die Website `https://live.mdnplay.dev`.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
